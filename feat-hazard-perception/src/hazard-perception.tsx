import { HazardFilterType, IHazardClipListView } from '@drivingo/models';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { storeAnalysisSelectors } from '@drivingo/store';
import { PageIntro, UIInlineModal, UITabs } from 'ui/src';
import { HazardPerceptionVideoCard } from './components';

const FeatHazardPerception = () => {
    const results = useSelector(storeAnalysisSelectors.hazardPerceptionResults);
    const [selectedTab, setSelectedTab] = useState<HazardFilterType>(
        HazardFilterType.All,
    );
    const [filteredItems, setFilteredItems] = useState(
        HazardPerceptionDataProvider.getHazardClipsList(results, selectedTab),
    );

    const tabs = [
        HazardFilterType.All,
        HazardFilterType.Unseen,
        HazardFilterType.LowScores,
        HazardFilterType.Downloaded,
    ];

    return (
        <>
            <aside>
                <PageIntro
                    title="Hazard Perception"
                    descripton="Practice for the hazard perception part of your theory test."
                    link="#"
                    routerDirection="root"
                    icon="/assets/images/traffic-barrier.png"
                />
                <UITabs items={tabs} onChange={(index) => onTabChange(index)} />
                {filteredItems.length > 0 ? (
                    filteredItems.map((item: IHazardClipListView, index) => {
                        return (
                            <HazardPerceptionVideoCard
                                key={index}
                                data={item}
                            />
                        );
                    })
                ) : (
                    <p>No clips found</p>
                )}
            </aside>
            <UIInlineModal isOpen={false} onClose={() => {}} type="full">
                <video controls width="100%" height="auto" autoPlay={false}>
                    <source
                        src="data-clips/hazard-perception/instructor.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </UIInlineModal>
        </>
    );

    function onTabChange(tabIndex: number) {
        setSelectedTab(tabs[tabIndex]);
    }
};

export default FeatHazardPerception;
