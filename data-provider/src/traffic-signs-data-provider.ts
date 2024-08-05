import { DATA_TRAFFIC_SIGNS } from "@drivingo/data";

export const TrafficSignsDataProvider = {
    imgBasePath: "data-images/traffic-signs/",
    getData: (searchText?: string) => {
        const data = [
            ...DATA_TRAFFIC_SIGNS.directionSigns,
            ...DATA_TRAFFIC_SIGNS.givingOrderSigns,
            ...DATA_TRAFFIC_SIGNS.informationSigns,
            ...DATA_TRAFFIC_SIGNS.roadWorksSigns,
            ...DATA_TRAFFIC_SIGNS.warningSigns
        ];
        if (searchText) {
            return data.filter((item) =>
                item.desc.toLowerCase().includes(searchText.toLowerCase()));
        }
        return data;
    },
};
