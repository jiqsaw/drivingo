import { FC } from "react";
import { HazardPerceptionDataProvider } from "@drivingo/data-provider";

type FeatHazardPerceptionDetailProps = {
    id: string;
};

const FeatHazardPerceptionDetail: FC<FeatHazardPerceptionDetailProps> = ({ id }) => {
    const data = HazardPerceptionDataProvider.getContentDetail(id);

    return (<div className="detail">
        <div>
            <video controls width="100%" height="auto">
                <source src={`data-clips/hazard-perception/clip${data?.code}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    );
}

export default FeatHazardPerceptionDetail;
