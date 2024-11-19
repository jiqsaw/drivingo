import { DATA_HAZAR_CLIPS } from '@drivingo/data';

export const HazardPerceptionDataProvider = {
    imgBasePath: 'data-images/hazard-perception/thumbnails/',
    getContentDetail: (id: string) =>
        DATA_HAZAR_CLIPS.find((i) => i.code === id),
};
