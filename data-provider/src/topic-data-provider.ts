import { DATA_TOPICS } from '@drivingo/data';
import { drivingoStore } from '@drivingo/store';
import uiSelectors from 'store/src/ui/ui.selectors';

export const TopicDataProvider = {
    getData: (searchText?: string) => {
        const activeQuestionBank = uiSelectors.questionBank(
            drivingoStore.getState(),
        );
        const data =
            DATA_TOPICS.find((item) => item.type === activeQuestionBank)
                ?.topics ?? [];
        if (searchText) {
            return data.filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase()),
            );
        }
        return data;
    },
};
