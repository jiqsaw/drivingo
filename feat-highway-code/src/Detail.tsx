import { HighwayCodeDataProvider } from '@drivingo/data-provider';
import { UIDividerPoints } from '@drivingo/ui';
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
