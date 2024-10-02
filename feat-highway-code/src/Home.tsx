import { HighwayCodeDataProvider } from '@drivingo/data-provider';
import { UIMainHeader, UISearchBox, UITab } from '@drivingo/ui/components';
import { useState } from 'react';
import HighwayCodeContent from './Content';
import HighwayCodeSigns from './Signs';

const FeatHighwayCode = () => {
    const [search, setSearch] = useState('');
    const [filteredContents, setFilteredAllSigns] = useState(
        HighwayCodeDataProvider.getContentTopics(),
    );
    const [filteredSigns, setFilteredSigns] = useState(
        HighwayCodeDataProvider.getSignTopics(),
    );

    const handleSearch = (searchText: string) => {
        setSearch(searchText);
        setFilteredAllSigns(
            HighwayCodeDataProvider.getContentTopics(searchText),
        );
        setFilteredSigns(HighwayCodeDataProvider.getSignTopics(searchText));
    };

    return (
        <>
            <UIMainHeader title="Highway Code" user="User" />
            <div className="w-full flex-column gap-20">
                <UISearchBox text={search} onChange={handleSearch} />
                <UITab
                    data={[
                        {
                            title: 'Content',
                            content: (
                                <HighwayCodeContent data={filteredContents} />
                            ),
                        },
                        {
                            title: 'Signs',
                            content: <HighwayCodeSigns data={filteredSigns} />,
                        },
                    ]}
                />
            </div>
        </>
    );
};

export default FeatHighwayCode;
