import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { IHazardClipListView } from '@drivingo/models';
import { PlayIcon, UIDividerPoints } from '@drivingo/ui';
import { IonImg, useIonRouter } from '@ionic/react';
import { FC } from 'react';

import { storeTheoryActiveHazardActions } from '@drivingo/store';
import { useDispatch } from 'react-redux';
import '../styles/hazard-perception-video-card.scss';

type HazardPerceptionVideoCardProps = {
    data: IHazardClipListView;
};

export const HazardPerceptionVideoCard: FC<HazardPerceptionVideoCardProps> = ({
    data,
}) => {
    const router = useIonRouter();
    const dispatch = useDispatch();

    return (
        <>
            <div className="hazard-perception-video-card">
                <div
                    className="hazard-perception-video-card__body"
                    onClick={() => itemPressHandler(data.code)}
                >
                    <h4 className="hazard-perception-video-card__clip">
                        <span className="key">Clip</span>
                        <span className="value">{data.code}</span>
                    </h4>
                    <h4 className="hazard-perception-video-card__score">
                        <span className="key">Score</span>
                        <span className="value">{data.lastScore}/5</span>
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
            </div>
            <div className="hazard-perception-video-card__divider">
                <UIDividerPoints />
            </div>
        </>
    );

    function itemPressHandler(clipCode: string) {
        dispatch(storeTheoryActiveHazardActions.init({ clipCode }));
        router.push(`/theory-test/hazard-perception/detail`);
    }
};
