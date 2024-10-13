import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { HazardPerceptionVideoDetail } from '@drivingo/ui';
import { FC } from 'react';

type FeatHazardPerceptionDetailProps = {
    id: string;
};

const FeatHazardPerceptionDetail: FC<FeatHazardPerceptionDetailProps> = ({
    id,
}) => {
    const data = HazardPerceptionDataProvider.getContentDetail(id);

    if (!data) {
        return null;
    }

    return (
        <aside>
            <HazardPerceptionVideoDetail data={data} />
        </aside>
    );
};

export default FeatHazardPerceptionDetail;
