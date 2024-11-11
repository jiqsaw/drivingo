import { DATA_HIGHWAY_CODE } from '@drivingo/data';

export const HighwayCodeDataProvider = {
    getSignDetail: (id: string) =>
        DATA_HIGHWAY_CODE.signDetail.find((i) => i.id === id)?.data,

    getContentDetail: (id: string) =>
        DATA_HIGHWAY_CODE.contentDetail.find((i) => i.id === id)?.data,

    getContentTopics: (searchText?: string) => {
        const contentTopics = DATA_HIGHWAY_CODE.contentTopics;
        if (searchText) {
            return contentTopics.filter((item) =>
                item.title.toLowerCase().includes(searchText.toLowerCase()),
            );
        }
        return contentTopics;
    },
    getSignTopics: (searchText?: string) => {
        const signTopics = DATA_HIGHWAY_CODE.signTopics;
        if (searchText) {
            return signTopics.filter((item) =>
                item.title.toLowerCase().includes(searchText.toLowerCase()),
            );
        }
        return signTopics;
    },
};
