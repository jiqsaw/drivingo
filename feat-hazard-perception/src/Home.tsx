import { DATA_HAZAR_CLIPS } from '@drivingo/data';
import { IHazardClip } from '@drivingo/models';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeUiActions, storeUiSelectors } from 'store/src/ui/ui';

import { TextRouteLink, UIInlineModal, UITabs } from 'ui/src';
import { HazardPerceptionVideoCard } from './components';

const FeatHazardPerception = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const instructorModal = useSelector(
        storeUiSelectors.closeMockTestIntroduction,
    );
    const dispatch = useDispatch();
    const handleInstructorClose = () => {
        dispatch(storeUiActions.mockTestIntroductionClose());
    };

    return (
        <>
            <aside>
                <h1>Hazard Perception</h1>
                <UITabs
                    items={['All', 'Unseen', 'Low Scores', 'Downloaded']}
                    onChange={(index) => setSelectedTab(index)}
                />
                <TextRouteLink
                    descripton="Practice for the hazard perception part of your theory test."
                    link="#"
                    routerDirection="root"
                />
                {DATA_HAZAR_CLIPS.length > 0 ? (
                    DATA_HAZAR_CLIPS.map((item: IHazardClip, index) => {
                        return (
                            <HazardPerceptionVideoCard
                                key={index}
                                data={item}
                                routerDirection="forward"
                            />
                        );
                    })
                ) : (
                    <p>No clips found</p>
                )}
            </aside>
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
