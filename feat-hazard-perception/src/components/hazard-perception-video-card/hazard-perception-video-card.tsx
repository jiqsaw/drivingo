import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { IHazardClip } from '@drivingo/models';
import { PlayIcon, UIDividerPoints } from '@drivingo/ui';
import { IonImg, IonRouterLink } from '@ionic/react';
import { FC } from 'react';

import './hazard-perception-video-card.scss';

type HazardPerceptionVideoCardProps = {
    data: IHazardClip;
};

export const HazardPerceptionVideoCard: FC<HazardPerceptionVideoCardProps> = ({
    data,
}) => {
    return (
        <>
            <IonRouterLink
                routerLink={`/theory-test/hazard-perception/${data.code}`}
                routerDirection="forward"
                className="hazard-perception-video-card"
            >
                <div className="hazard-perception-video-card__body">
                    <h4 className="hazard-perception-video-card__clip">
                        <span className="key">Clip</span>
                        <span className="value">{data.code}</span>
                    </h4>
                    <h4 className="hazard-perception-video-card__score">
                        <span className="key">Score</span>
                        <span className="value">{data.frameCount}</span>
                    </h4>
                </div>
                <figure className="hazard-perception-video-card__image">
                    <span className="hazard-perception-video-card__play">
                        <PlayIcon />
                    </span>
                    <IonImg
                        src={
                            HazardPerceptionDataProvider.imgBasePath +
                            'clip' +
                            data.code +
                            '.png'
                        }
                        alt={data.code}
                    ></IonImg>
                </figure>
            </IonRouterLink>
            <div className="hazard-perception-video-card__divider">
                <UIDividerPoints />
            </div>
        </>
    );
};
