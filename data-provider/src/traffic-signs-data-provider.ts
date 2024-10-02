import { DATA_TRAFFIC_SIGNS } from '@drivingo/data';

export const TrafficSignsDataProvider = {
    imgBasePath: 'data-images/traffic-signs/',

    getdirectionSigns: (searchText?: string) => () => {
        const content = DATA_TRAFFIC_SIGNS.directionSigns;
        if (searchText) {
            return content.filter((item) =>
                item.desc.toLowerCase().includes(searchText.toLowerCase()),
            );
        }
        return content;
    },
    getgivingOrderSigns: (searchText?: string) => () => {
        const content = DATA_TRAFFIC_SIGNS.givingOrderSigns;
        if (searchText) {
            return content.filter((item) =>
                item.desc.toLowerCase().includes(searchText.toLowerCase()),
            );
        }
        return content;
    },
    getinformationSigns: (searchText?: string) => () => {
        const content = DATA_TRAFFIC_SIGNS.informationSigns;
        if (searchText) {
            return content.filter((item) =>
                item.desc.toLowerCase().includes(searchText.toLowerCase()),
            );
        }
        return content;
    },
    getroadWorksSigns: (searchText?: string) => () => {
        const content = DATA_TRAFFIC_SIGNS.roadWorksSigns;
        if (searchText) {
            return content.filter((item) =>
                item.desc.toLowerCase().includes(searchText.toLowerCase()),
            );
        }
        return content;
    },
    getwarningSigns: (searchText?: string) => () => {
        const content = DATA_TRAFFIC_SIGNS.warningSigns;
        if (searchText) {
            return content.filter((item) =>
                item.desc.toLowerCase().includes(searchText.toLowerCase()),
            );
        }
        return content;
    },
};
