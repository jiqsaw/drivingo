import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { IHazardClip } from '@drivingo/models';
import { IonRouterLink } from '@ionic/react';
import { FC } from 'react';
import { UIDividerPoints } from '../divider-points/divider-points';
import { PlayIcon } from '../icons';

import './hazard-perception-video-card.scss';

type HazardPerceptionVideoCardProps = {
    data: IHazardClip;
    routerDirection: 'root' | 'forward';
};

export const HazardPerceptionVideoCard: FC<HazardPerceptionVideoCardProps> = ({
    data,
    routerDirection,
}) => {
    return (
        <>
            <IonRouterLink
                routerLink={`/theory-test/hazard-perception/${data.code}`}
                routerDirection={routerDirection}
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
                    <img
                        width={200}
                        height={150}
                        src={
                            HazardPerceptionDataProvider.imgBasePath +
                            'clip' +
                            data.code +
                            '.png'
                        }
                        alt={data.code}
                    />
                </figure>
            </IonRouterLink>
            <UIDividerPoints className="center my-6" />
        </>
    );
};
