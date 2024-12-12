import { DATA_LEARN_TOPICS } from '@drivingo/data';

export const LearnDataProvider = {
    getLearnStudyTopics: () => {
        const contentTopics = DATA_LEARN_TOPICS;
        return contentTopics;
    },
};
