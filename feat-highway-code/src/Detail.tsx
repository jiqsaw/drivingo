import { HighwayCodeDataProvider } from '@drivingo/data-provider';
import { UIDividerPoints, UISubheader } from '@drivingo/ui/compound';
import { FC } from 'react';
import './assets/styles.scss';

type HighwayCodeDetailProps = {
    type: 'content' | 'signs';
    id: string;
};

const FeatHighwayCodeDetail: FC<HighwayCodeDetailProps> = ({ id, type }) => {
    const data =
        type === 'content'
            ? HighwayCodeDataProvider.getContentDetail(id)
            : HighwayCodeDataProvider.getSignDetail(id);

    if (!data) {
        return <div>This page cannot be found.</div>;
    }

    return (
        <aside className="highway-code-detail">
            <UISubheader title={data.title} />
            <h1>{data.title}</h1>
            <UIDividerPoints />
            <div
                className="highway-code-detail__content"
                dangerouslySetInnerHTML={{
                    __html: data.details.body,
                }}
            ></div>
        </aside>
    );
};

export default FeatHighwayCodeDetail;
