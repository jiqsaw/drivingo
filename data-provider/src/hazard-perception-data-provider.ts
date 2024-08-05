import { DATA_HAZAR_CLIPS } from "@drivingo/data";

export const HazardPerceptionDataProvider = {
    imgBasePath: "data-thumbnails/hazard-perception/",
    getContentDetail: (id: string) => DATA_HAZAR_CLIPS.find(i => i.code === id),
};
