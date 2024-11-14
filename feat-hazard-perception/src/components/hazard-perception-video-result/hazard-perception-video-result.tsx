import { DATA_HAZAR_CLIPS } from '@drivingo/data';
import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { IHazardClip } from '@drivingo/models';
import { IonRouterLink } from '@ionic/react';
import { FC } from 'react';
import { ArrowNextIcon, RetryIcon } from '../../../../ui/src/icons';
import './hazard-perception-video-result.scss';
import { storeTheoryActiveTestSelectors } from '@drivingo/store';
import { useSelector } from 'react-redux';

export const HazardPerceptionVideoResult = () => {
    const activeVideo = {
        code: '',
    };

    const isTestResultSuccess = useSelector(
        storeTheoryActiveTestSelectors.isTestResultSuccess,
    );

    const questionsLength = useSelector(
        storeTheoryActiveTestSelectors.questionsLength,
    );
    const correctCount = useSelector(
        storeTheoryActiveTestSelectors.correctCount,
    );

    const currentIndex = DATA_HAZAR_CLIPS.findIndex((clip) => clip.code === '');

    const nextClip =
        DATA_HAZAR_CLIPS[(currentIndex + 1) % DATA_HAZAR_CLIPS.length];

    return (
        <div className="hazard-perception-video-result">
            <h1 className={`title ${isTestResultSuccess ? 'pass' : 'fail'}`}>
                SCORE
                <span>
                    {correctCount}/{questionsLength}
                </span>
            </h1>

            <div className="content-body">
                <p>
                    Practice for the hazard perception part of your theory test.
                </p>
                <IonRouterLink className="button">
                    <span>Review your test</span>
                    <ArrowNextIcon />
                </IonRouterLink>

                <IonRouterLink
                    routerDirection="back"
                    routerLink={`/theory-test/hazard-perception/${activeVideo.code}`}
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
