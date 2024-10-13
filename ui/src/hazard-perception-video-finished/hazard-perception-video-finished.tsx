import { DATA_HAZAR_CLIPS } from '@drivingo/data';
import { IHazardClip } from '@drivingo/models';
import { IonRouterLink } from '@ionic/react';
import { FC } from 'react';
import { ArrowNextIcon, PhoneRotateIcon, RetryIcon } from '../icons';

import './hazard-perception-video-finished.scss';
import { HazardPerceptionDataProvider } from '@drivingo/data-provider';

type HazardPerceptionVideoFinisedProps = {
    data: IHazardClip;
};

export const HazardPerceptionVideoFinished: FC<
    HazardPerceptionVideoFinisedProps
> = ({ data }) => {
    const currentIndex = DATA_HAZAR_CLIPS.findIndex(
        (clip) => clip.code === data.code,
    );

    const nextClip =
        DATA_HAZAR_CLIPS[(currentIndex + 1) % DATA_HAZAR_CLIPS.length];

    console.log(nextClip);

    return (
        <div className="hazard-perception-video-finished">
            <h1 className="title">
                SCORE
                <br />
                <span>3/5</span>
            </h1>

            <div className="content-body">
                <p>
                    Practice for the hazard perception part of your theory test.
                </p>
                <IonRouterLink className="btn">
                    <span>Review your test</span>
                    <ArrowNextIcon />
                </IonRouterLink>

                <IonRouterLink
                    routerDirection="back"
                    routerLink={`/theory-test/hazard-perception/${data.code}`}
                    className="lnk"
                >
                    <RetryIcon />
                    <span>Retry</span>
                </IonRouterLink>
            </div>

            <div className="next-clip">
                <figure className="image">
                    <img
                        width={200}
                        src={
                            HazardPerceptionDataProvider.imgBasePath +
                            'clip' +
                            nextClip.code +
                            '.png'
                        }
                        alt={data.code}
                    />
                    <figcaption className="code">{nextClip.code}</figcaption>
                </figure>
                <IonRouterLink
                    routerDirection="forward"
                    routerLink={`/theory-test/hazard-perception/${nextClip.code}`}
                    className="next-link lnk"
                >
                    {'>'} Next clip
                </IonRouterLink>
            </div>
        </div>
    );
};
