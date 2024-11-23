import { CONSTANTS } from '@drivingo/global';
import {
    storeTheoryActiveHazardActions,
    storeTheoryActiveHazardSelectors,
} from '@drivingo/store';
import { PhoneRotateIcon } from '@drivingo/ui';
import { IonAlert, useIonRouter } from '@ionic/react';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './assets/hazard-perception-detail.scss';

type FeatHazardPerceptionDetailProps = {
    id: string;
};

const FeatHazardPerceptionDetail: FC<FeatHazardPerceptionDetailProps> = ({
    id,
}) => {
    const dispatch = useDispatch();
    const router = useIonRouter();

    const videoRef = useRef<HTMLVideoElement>(null);

    const activeHazard = useSelector(
        storeTheoryActiveHazardSelectors.activeHazard,
    );

    const [showExcessiveTapAlert, setShowExcessiveTapAlert] = useState(false);

    if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
    }

    useEffect(() => {
        screen.orientation.addEventListener('change', handleOrientationChange);

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
                    <span>{activeHazard.clipCode}</span>
                </h1>
                <div className="video">
                    <video
                        ref={videoRef}
                        controls={false}
                        width="100%"
                        height="auto"
                        autoPlay
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

                    {activeHazard.userFlags && (
                        <div className="flags">
                            {activeHazard.userFlags.map((flag, index) => (
                                <img
                                    key={`flag-${index}`}
                                    src="assets/flag-fill.svg"
                                    style={{
                                        left: flag.flagPositionLeft,
                                    }}
                                />
                            ))}
                        </div>
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

    function onVideoClick() {
        if (videoRef.current) {
            if (activeHazard.userFlags.length < CONSTANTS.hazardClipMaxFlag) {
                const second = videoRef.current.currentTime;
                console.log('second:', second); // ???? debug purposes
                const flagPositionLeft = getFlagPosition(second);
                dispatch(
                    storeTheoryActiveHazardActions.addFlag({
                        second,
                        flagPositionLeft,
                    }),
                );
                handleVideoEnded();
            } else {
                setShowExcessiveTapAlert(true);
            }
        }
    }

    function handleVideoEnded() {
        dispatch(storeTheoryActiveHazardActions.finish());
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
        router.push('/theory-test/hazard-perception/result', 'forward');
    }

    function getFlagPosition(second: number) {
        if (videoRef.current) {
            const rateByScreen = window.innerWidth / videoRef.current?.duration;
            return Math.floor(second * rateByScreen);
        }
        return 0;
    }

    function handleOrientationChange() {
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
};

export default FeatHazardPerceptionDetail;
