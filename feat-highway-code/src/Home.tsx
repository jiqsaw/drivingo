import { HighwayCodeDataProvider } from '@drivingo/data-provider';
import { UISearchBox, UITabs } from '@drivingo/ui/components';
import { UIHeader } from '@drivingo/ui/compound';
import { useState } from 'react';
import HighwayCodeContent from './Content';
import HighwayCodeSigns from './Signs';

const FeatHighwayCode = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [filteredContents, setFilteredAllSigns] = useState(
        HighwayCodeDataProvider.getContentTopics(),
    );
    const [filteredSigns, setFilteredSigns] = useState(
        HighwayCodeDataProvider.getSignTopics(),
    );

    return (
        <aside>
            <UIHeader title="Highway Code" />
            <UISearchBox onChange={handleSearch} />
            <UITabs
                items={['Content', 'Signs']}
                onChange={(index) => setSelectedTab(index)}
            />

            <aside className="small">
                {selectedTab === 0 && (
                    <HighwayCodeContent data={filteredContents} />
                )}
                {selectedTab === 1 && <HighwayCodeSigns data={filteredSigns} />}
            </aside>
        </aside>
    );

    function handleSearch(searchText: string) {
        setFilteredAllSigns(
            HighwayCodeDataProvider.getContentTopics(searchText),
        );
        setFilteredSigns(HighwayCodeDataProvider.getSignTopics(searchText));
    }
};

export default FeatHighwayCode;
