import { DATA_TOPICS } from '@drivingo/data';
import { QuestionBank } from '@drivingo/models';

export const TopicDataProvider = {
    getData: (questionBank: QuestionBank, searchText?: string) => {
        const data =
            DATA_TOPICS.find((item) => item.type === questionBank)?.topics ??
            [];
        if (searchText) {
            return data.filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase()),
            );
        }
        return data;
    },
};
