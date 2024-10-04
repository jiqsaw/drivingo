import { TrafficSignsDataProvider } from '@drivingo/data-provider';
import { ITrafficSign, ITrafficSignItem } from '@drivingo/models';
import { UIMasonryList, UISearchBox, UITabs } from '@drivingo/ui';
import { useState } from 'react';

const FeatTrafficSigns = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [trafficSigns, setTrafficSigns] = useState<ITrafficSign[]>(
        TrafficSignsDataProvider.getTrafficSigns(),
    );

    const selectedContentDescription = trafficSigns[selectedTab].description;
    const selectedContentDataForMasonryList = trafficSigns[
        selectedTab
    ].items.map((item: ITrafficSignItem) => {
        return {
            image: item.imgPath,
            title: item.desc,
        };
    });

    return (
        <aside>
            <h1>Traffic Signs</h1>
            <UISearchBox onChange={handleSearch} />
            <UITabs
                items={TrafficSignsDataProvider.getSectionNames}
                onChange={(index) => setSelectedTab(index)}
            />
            <p>{selectedContentDescription}</p>
            <UIMasonryList
                key={'traffic-signs-' + selectedTab.toString()}
                data={selectedContentDataForMasonryList}
                imgBasePath={TrafficSignsDataProvider.imgBasePath}
            />
        </aside>
    );

    function handleSearch(searchText: string) {
        setTrafficSigns(TrafficSignsDataProvider.getTrafficSigns(searchText));
    }
};

export default FeatTrafficSigns;
