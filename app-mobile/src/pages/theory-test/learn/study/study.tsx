import { UICardList, UIStudyCard } from '@drivingo/ui';

const LearnStudy = () => {
    return (
        <UICardList className="grid-1-cols">
            <UIStudyCard
                title="Alertness"
                description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                progress={20}
                pages={10}
            />
            <UIStudyCard
                title="Alertness"
                description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                progress={20}
                pages={10}
            />
            <UIStudyCard
                title="Alertness"
                description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                progress={20}
                pages={10}
            />
        </UICardList>
    );
};

export default LearnStudy;
