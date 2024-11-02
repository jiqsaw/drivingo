import { DATA_TRAFFIC_SIGNS } from '@drivingo/data';

export const TrafficSignsDataProvider = {
    imgBasePath: 'data-images/traffic-signs/',
    getSectionNames: DATA_TRAFFIC_SIGNS.map((item) => item.title),
    getTrafficSigns: (searchText?: string) => () => {
        const content = DATA_TRAFFIC_SIGNS;
        if (searchText) {
            return content.filter((item) =>
                item.items.filter((i) =>
                    i.desc.toLowerCase().includes(searchText.toLowerCase()),
                ),
            );
        }
        return content;
    },
};
