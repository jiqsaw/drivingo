import { DATA_TOPICS } from '@drivingo/data';

export const TopicDataProvider = {
    getData: (searchText?: string) => {
        const data = DATA_TOPICS;
        if (searchText) {
            return data.filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase()),
            );
        }
        return data;
    },
};
