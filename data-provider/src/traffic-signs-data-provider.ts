import { DATA_TRAFFIC_SIGNS } from "@drivingo/data";

export const TrafficSignsDataProvider = {
    data: DATA_TRAFFIC_SIGNS,
    getAll: () => {
        return [
            ...DATA_TRAFFIC_SIGNS.directionSigns,
            ...DATA_TRAFFIC_SIGNS.givingOrderSigns,
            ...DATA_TRAFFIC_SIGNS.informationSigns,
            ...DATA_TRAFFIC_SIGNS.roadWorksSigns,
            ...DATA_TRAFFIC_SIGNS.warningSigns
        ];
    },
    imgBasePath: "data-images/traffic-signs/"
};
