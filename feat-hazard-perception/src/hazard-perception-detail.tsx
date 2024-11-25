import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { CONSTANTS } from '@drivingo/global';
import { HazardView } from '@drivingo/models';
import {
    storeTheoryActiveHazardActions,
    storeTheoryActiveHazardSelectors,
} from '@drivingo/store';
import { PhoneRotateIcon, PlayIcon } from '@drivingo/ui';
import { IonAlert, useIonRouter } from '@ionic/react';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HazardPerceptionScoreBars } from './components';
import './styles/hazard-perception-detail.scss';

const FeatHazardPerceptionDetail: FC = () => {
    const dispatch = useDispatch();
    const router = useIonRouter();
    const videoRef = useRef<HTMLVideoElement>(null);

    const activeHazard = useSelector(
        storeTheoryActiveHazardSelectors.activeHazard,
    );

    const [showExcessiveTapAlert, setShowExcessiveTapAlert] = useState(false);
    const [scoreBars, setScoreBars] = useState<number[]>([]);
    const [showPlay, setShowPlay] = useState(true);

    useEffect(() => {
        screen.orientation.addEventListener('change', handleOrientationChange);

        calcScorBars();

        return () => {
            screen.orientation.removeEventListener(
                'change',
                handleOrientationChange,
            );
        };
    }, []);

    if (!activeHazard) {
        return;
    }

    return (
        <aside>
            <div className="hazard-perception-detail">
                <h1 className="title">
                    CLIP
                    <br />
                    <span>{activeHazard?.clipCode}</span>
                </h1>
                <div className="video">
                    <video
                        poster={
                            HazardPerceptionDataProvider.imgBasePath +
                            'clip' +
                            activeHazard.clipCode +
                            '.png'
                        }
                        ref={videoRef}
                        controls={false}
                        width="100%"
                        preload="auto"
                        height="auto"
                        autoPlay={false}
                        loop={false}
                        muted={false}
                        playsInline={true}
                        onEnded={() => handleVideoEnded()}
                        onClick={() => onVideoClick()}
                    >
                        <source
                            src={`${activeHazard?.videoSource}`}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    {showPlay && (
                        <div className="play" onClick={start}>
                            <PlayIcon />
                        </div>
                    )}
                    {activeHazard.userFlags && (
                        <div className="flags">
                            {activeHazard.userFlags.map((flag, index) => (
                                <img
                                    key={`flag-${index}`}
                                    src="assets/images/flag-fill.svg"
                                    style={{
                                        left: getFlagPosition(flag),
                                        opacity:
                                            activeHazard.viewMode ===
                                                HazardView.Review &&
                                            flag !== activeHazard.scoreFlag
                                                ? 0.5
                                                : 1,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                    {activeHazard.viewMode === HazardView.Review && (
                        <HazardPerceptionScoreBars barPositions={scoreBars} />
                    )}
                </div>
                <div className="video-info">
                    <PhoneRotateIcon />
                    <span className="icon"></span>
                    <p>Rotate your phone for better experience</p>
                </div>
            </div>

            <IonAlert
                header="You have tapped too many times! You will score 0 for this video"
                isOpen={showExcessiveTapAlert}
                buttons={[
                    {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => {},
                    },
                ]}
                onDidDismiss={() => setShowExcessiveTapAlert(false)}
            ></IonAlert>
        </aside>
    );

    function start() {
        if (activeHazard.viewMode === HazardView.Init) {
            dispatch(storeTheoryActiveHazardActions.start());
        }
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setShowPlay(false);
        }
    }

    function onVideoClick() {
        if (showPlay) {
            start();
        }
        if (activeHazard.viewMode === HazardView.Test) {
            if (activeHazard.userFlags.length < CONSTANTS.hazardClipMaxFlag) {
                const second = Number(videoRef.current?.currentTime);
                console.log('second:', second); // ???? debug purposes
                const flagPositionLeft = getFlagPosition(second);
                dispatch(
                    storeTheoryActiveHazardActions.addFlag({
                        second,
                    }),
                );
            } else {
                setShowExcessiveTapAlert(true);
            }
        }
    }

    function handleVideoEnded() {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
            setShowPlay(true);
        }
        if (activeHazard.viewMode === HazardView.Test) {
            dispatch(storeTheoryActiveHazardActions.finish());
        }
        router.push('/theory-test/hazard-perception/result', 'forward');
    }

    function getFlagPosition(second: number) {
        if (videoRef.current && activeHazard.videoData) {
            const rateByScreen =
                window.innerWidth / activeHazard.videoData?.duration;
            return Math.floor(second * rateByScreen);
        }
        return 0;
    }

    function handleOrientationChange() {
        console.log('handleOrientationChange:');
        calcScorBars();
        // ?? Flag position ve review score positionlari yeniden hesapla

        if (screen.orientation.type.startsWith('landscape')) {
            if (videoRef.current && videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen(); // ????
            }
        } else {
            if (document.fullscreenElement && document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    function calcScorBars() {
        if (activeHazard.videoData) {
            const positions =
                activeHazard.videoData?.scoreWindow.map((item) =>
                    getFlagPosition(item.start),
                ) || [];
            if (positions.length) {
                positions.push(
                    getFlagPosition(
                        activeHazard.videoData?.scoreWindow[
                            activeHazard.videoData?.scoreWindow.length - 1
                        ].end,
                    ),
                );
            }
            setScoreBars(positions);
        }
    }
};

export default FeatHazardPerceptionDetail;
