import { HazardPerceptionDataProvider } from "@drivingo/data-provider";
import { HazardPerceptionVideoFinished } from "./components/hazard-perception-video-result/hazard-perception-video-result";
import { FC } from "react";

type FeatHazardPerceptionDetailProps = {
  id: string;
};

const FeatHazardPerceptionResult: FC<FeatHazardPerceptionDetailProps> = ({
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

export default FeatHazardPerceptionResult;
