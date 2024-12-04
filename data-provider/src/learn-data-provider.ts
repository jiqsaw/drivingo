import { DATA_LEARN } from '@drivingo/data';

export const LearnDataProvider = {
    getLearnDetail: (pageName: string) => {
        return DATA_LEARN[pageName as keyof typeof DATA_LEARN];
    },
    getLearnStudyTopics: () => {
        const contentTopics = DATA_LEARN.topics;
        return contentTopics;
    },
};
