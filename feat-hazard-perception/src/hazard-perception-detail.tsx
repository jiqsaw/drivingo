import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { PhoneRotateIcon } from '@drivingo/ui';
import { FC, useEffect, useRef } from 'react';
import './assets/hazard-perception-detail.scss';

type FeatHazardPerceptionDetailProps = {
    id: string;
};

const FeatHazardPerceptionDetail: FC<FeatHazardPerceptionDetailProps> = ({
    id,
}) => {
    const data = HazardPerceptionDataProvider.getContentDetail(id);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleOrientationChange = () => {
            if (screen.orientation.type.startsWith('landscape')) {
                if (videoRef.current && videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                }
            } else {
                if (document.fullscreenElement && document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        };

        screen.orientation.addEventListener('change', handleOrientationChange);

        return () => {
            screen.orientation.removeEventListener(
                'change',
                handleOrientationChange,
            );
        };
    }, []);

    if (!data) {
        return null;
    }

    return (
        <aside>
            <div className="hazard-perception-detail">
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
        </aside>
    );
};

export default FeatHazardPerceptionDetail;
