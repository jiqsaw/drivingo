import { DATA_HAZAR_CLIPS } from '@drivingo/data';
import { IHazardClip } from '@drivingo/models';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { storeUiActions, storeUiSelectors } from '@drivingo/store';
import { PageIntro, UIInlineModal, UITabs } from 'ui/src';
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
                <PageIntro
                    title="Hazard Perception"
                    descripton="Practice for the hazard perception part of your theory test."
                    link="#"
                    routerDirection="root"
                    icon="/assets/icons/traffic-barrier.png"
                />
                <UITabs
                    items={['All', 'Unseen', 'Low Scores', 'Downloaded']}
                    onChange={(index) => setSelectedTab(index)}
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
                type="full"
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
