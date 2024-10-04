import { DATA_HAZAR_CLIPS } from '@drivingo/data';
import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { IHazardClip } from '@drivingo/models';
import { IonRouterLink } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { storeUiActions, storeUiSelectors } from 'store/src/ui/ui';
import { UIInlineModal } from 'ui/src';

const FeatHazardPerception = () => {
    const instructorModal = useSelector(
        storeUiSelectors.closeMockTestIntroduction,
    );
    const dispatch = useDispatch();

    const handleInstructorClose = () => {
        dispatch(storeUiActions.mockTestIntroductionClose());
    };

    return (
        <>
            <div className="full">
                <div className="clips">
                    {DATA_HAZAR_CLIPS.length > 0 ? (
                        DATA_HAZAR_CLIPS.map((item: IHazardClip, index) => {
                            return (
                                <div key={index} className="clip">
                                    <h3>{`Clip ${item.code}`}</h3>
                                    <IonRouterLink
                                        routerLink={`/theory-test/hazard-perception/${item.code}`}
                                        routerDirection="forward"
                                    >
                                        <figure>
                                            <img
                                                width={200}
                                                height={150}
                                                src={
                                                    HazardPerceptionDataProvider.imgBasePath +
                                                    'clip' +
                                                    item.code +
                                                    '.png'
                                                }
                                                alt={''}
                                            />
                                        </figure>
                                    </IonRouterLink>
                                </div>
                            );
                        })
                    ) : (
                        <p>No clips found</p>
                    )}
                </div>
            </div>
            <UIInlineModal
                isOpen={!instructorModal}
                onClose={handleInstructorClose}
            >
                <video controls width="100%" height="auto">
                    <source
                        src="data-clips/hazard-perception/instructor.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </UIInlineModal>
        </>
    );
};

export default FeatHazardPerception;
