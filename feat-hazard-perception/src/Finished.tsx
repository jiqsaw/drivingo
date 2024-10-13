import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { HazardPerceptionVideoFinished } from '@drivingo/ui';
import { FC } from 'react';

type FeatHazardPerceptionDetailProps = {
    id: string;
};

const FeatHazardPerceptionFinished: FC<FeatHazardPerceptionDetailProps> = ({
    id,
}) => {
    const data = HazardPerceptionDataProvider.getContentDetail(id);

    if (!data) {
        return null;
    }

    return (
        <aside>
            <HazardPerceptionVideoFinished data={data} />
        </aside>
    );
};

export default FeatHazardPerceptionFinished;
