
import { FC } from "react";

import { HighwayCodeDataProvider } from "@drivingo/data-provider";

type HighwayCodeDetailProps = {
    type: 'content' | 'signs';
    id: string;
};

const HighwayCodeDetail: FC<HighwayCodeDetailProps> = ({ id, type }) => {

    const data = type === 'content'
        ? HighwayCodeDataProvider.getContentDetail(id)
        : HighwayCodeDataProvider.getSignDetail(id);

    if (!data) {
        return <div>This page cannot be found.</div>;
    }

    return (
        <div className="detail">
            <div dangerouslySetInnerHTML={
                {
                    __html: data.details.body
                }}>
            </div>
        </div >
    );
};

export default HighwayCodeDetail;
