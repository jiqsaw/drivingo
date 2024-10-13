import { IHazardClip } from '@drivingo/models';
import { FC, useEffect, useRef } from 'react';
import { PhoneRotateIcon } from '../icons';

import './hazard-perception-video-detail.scss';

type HazardPerceptionVideoDetailProps = {
    data: IHazardClip;
};

export const HazardPerceptionVideoDetail: FC<
    HazardPerceptionVideoDetailProps
> = ({ data }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleOrientationChange = () => {
            if (screen.orientation.type.startsWith('landscape')) {
                // Ekran yatay olduğunda videoyu tam ekran yap
                if (videoRef.current && videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                }
            } else {
                // Ekran dikey olduğunda tam ekran modundan çık
                if (document.fullscreenElement && document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        };

        // Ekran yönü değiştiğinde handleOrientationChange fonksiyonunu çağır
        screen.orientation.addEventListener('change', handleOrientationChange);

        // Cleanup event listener on component unmount
        return () => {
            screen.orientation.removeEventListener(
                'change',
                handleOrientationChange,
            );
        };
    }, []);

    return (
        <div className="hazard-perception-video-detail">
            <h1 className="title">
                CLIP
                <br />
                <span>{data.code}</span>
            </h1>
            <div className="video">
                <video
                    ref={videoRef}
                    controls={true}
                    width="100%"
                    height="auto"
                    autoPlay
                    // playsInline={true}
                >
                    <source
                        src={`data-clips/hazard-perception/clip${data?.code}.mp4`}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="video-info">
                <PhoneRotateIcon />
                <span className="icon"></span>
                <p>Rotate your phone for better experience</p>
            </div>
        </div>
    );
};
