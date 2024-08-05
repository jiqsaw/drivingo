import { DATA_HIGHWAY_CODE } from "@drivingo/data";

export const HighwayCodeDataProvider = {
    contentTopics: DATA_HIGHWAY_CODE.contentTopics,
    signTopics: DATA_HIGHWAY_CODE.signTopics,
    getSignDetail: (id: string) => DATA_HIGHWAY_CODE.signDetail.find(i => i.id === id)?.data,
    getContentDetail: (id: string) => DATA_HIGHWAY_CODE.contentDetail.find(i => i.id === id)?.data,
};
