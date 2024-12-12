import { LearnDataProvider } from '@drivingo/data-provider';
import { UICardList, UIStudyCard } from '@drivingo/ui';
import { useIonRouter } from '@ionic/react';
import { useEffect, useState } from 'react';

interface TopicInfo {
    title: string;
    slug: string;
    description: string;
    totalPages: number;
}

const FeatLearnStudy = () => {
    const [topics, setTopics] = useState<TopicInfo[]>([]);
    const router = useIonRouter();

    useEffect(() => {
        const topics = LearnDataProvider.getLearnStudyTopics();
        setTopics(topics);
    }, []);

    const handleCardClick = (slug: string) => {
        router.push(`/theory-test/learn/${slug}/page1`);
    };

    return (
        <UICardList className="grid-1-cols">
            {topics.map((topic, index) => (
                <UIStudyCard
                    key={index}
                    title={topic.title}
                    description={topic.description}
                    progress={0}
                    pages={topic.totalPages}
                    onClick={() => handleCardClick(topic.slug)}
                />
            ))}
        </UICardList>
    );
};

export default FeatLearnStudy;
