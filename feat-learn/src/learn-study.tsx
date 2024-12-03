import { DATA_LEARN } from '@drivingo/data';
import { UICardList, UIStudyCard } from '@drivingo/ui';

const FeatLearnStudy = () => {
    const topics = DATA_LEARN.topics;

    return (
        <UICardList className="grid-1-cols">
            {topics.map((topic, index) => (
                <UIStudyCard
                    key={index}
                    title={topic.title}
                    description={topic.description}
                    progress={19}
                    pages={20}
                />
            ))}
        </UICardList>
    );
};

export default FeatLearnStudy;
