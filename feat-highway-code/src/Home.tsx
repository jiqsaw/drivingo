import { HighwayCodeDataProvider } from '@drivingo/data-provider';
import { UISearchBox, UITabs } from '@drivingo/ui';
import { useState } from 'react';
import HighwayCodeContent from './Content';
import HighwayCodeSigns from './Signs';

const FeatHighwayCode = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [filteredContent, setFilterContent] = useState(
        HighwayCodeDataProvider.getContentTopics(),
    );
    const [filteredSigns, setFilteredSigns] = useState(
        HighwayCodeDataProvider.getSignTopics(),
    );

    return (
        <aside>
            <h1>Highway Code</h1>
            <UISearchBox onChange={handleSearch} />
            <UITabs
                items={['Content', 'Signs']}
                onChange={(index) => setSelectedTab(index)}
            />

            {selectedTab === 0 && <HighwayCodeContent data={filteredContent} />}
            {selectedTab === 1 && <HighwayCodeSigns data={filteredSigns} />}
        </aside>
    );

    function handleSearch(searchText: string) {
        setFilterContent(HighwayCodeDataProvider.getContentTopics(searchText));
        setFilteredSigns(HighwayCodeDataProvider.getSignTopics(searchText));
    }
};

export default FeatHighwayCode;
