import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import {
    storeTheoryActiveHazardActions,
    storeTheoryActiveHazardSelectors,
    storeTheoryActiveTestSelectors,
} from '@drivingo/store';
import { ArrowNextIcon, RetryIcon } from '@drivingo/ui';
import { useIonRouter } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import './assets/hazard-perception-result.scss';

const FeatHazardPerceptionResult = () => {
    const dispatch = useDispatch();
    const router = useIonRouter();

    const isTestResultSuccess = useSelector(
        storeTheoryActiveTestSelectors.isTestResultSuccess,
    );

    const activeHazard = useSelector(
        storeTheoryActiveHazardSelectors.activeHazard,
    );

    const nextClip = HazardPerceptionDataProvider.getNextClipDetail(
        activeHazard.clipCode,
    );

    return (
        <aside>
            <div className="hazard-perception-result">
                <h1
                    className={`title ${isTestResultSuccess ? 'pass' : 'fail'}`}
                >
                    SCORE
                    <span>{activeHazard.score}/5</span>
                </h1>

                <div className="content-body">
                    <p>
                        Practice for the hazard perception part of your theory
                        test.
                    </p>
                    <div className="button" onClick={review}>
                        <span>Review your test</span>
                        <ArrowNextIcon />
                    </div>

                    <div className="lnk" onClick={retry}>
                        <RetryIcon />
                        <span>Retry</span>
                    </div>
                </div>

                {nextClip !== null && (
                    <div className="next-clip" onClick={nextClipHandler}>
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
                            <figcaption className="code">
                                {nextClip.code}
                            </figcaption>
                        </figure>
                        <div
                            className="next-link lnk"
                            onClick={nextClipHandler}
                        >
                            {'>'} Next clip
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );

    function retry() {
        dispatch(
            storeTheoryActiveHazardActions.init({
                clipCode: activeHazard.clipCode,
            }),
        );
        router.push(`/theory-test/hazard-perception/detail`);
    }

    function nextClipHandler() {
        if (nextClip !== null) {
            dispatch(
                storeTheoryActiveHazardActions.init({
                    clipCode: nextClip.code,
                }),
            );
            router.push(`/theory-test/hazard-perception/detail`);
        }
    }

    function review() {
        dispatch(storeTheoryActiveHazardActions.review());
        router.push(`/theory-test/hazard-perception/detail`);
    }
};

export default FeatHazardPerceptionResult;
