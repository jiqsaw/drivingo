import { HighwayCodeDataProvider } from '@drivingo/data-provider';
import { UISubHeader } from '@drivingo/ui/components';
import { FC } from 'react';

type HighwayCodeDetailProps = {
    type: 'content' | 'signs';
    id: string;
};

const HighwayCodeDetail: FC<HighwayCodeDetailProps> = ({ id, type }) => {
    const data =
        type === 'content'
            ? HighwayCodeDataProvider.getContentDetail(id)
            : HighwayCodeDataProvider.getSignDetail(id);

    if (!data) {
        return <div>This page cannot be found.</div>;
    }

    return (
        <>
            <UISubHeader title={data.title} />
            <div
                className="content-body"
                dangerouslySetInnerHTML={{
                    __html: data.details.body,
                }}
            ></div>
        </>
    );
};

export default HighwayCodeDetail;
