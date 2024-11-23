import { DATA_HAZAR_CLIPS } from '@drivingo/data';
import { CONSTANTS } from '@drivingo/global';
import {
    HazardFilterType,
    IHazardClipListView,
    IHazardPerceptionResult,
} from '@drivingo/models';

export const HazardPerceptionDataProvider = {
    imgBasePath: 'data-images/hazard-perception/thumbnails/',
    videoBasePath: 'data-videos/hazard-perception/clips/',
    getContentDetail: (id: string) =>
        DATA_HAZAR_CLIPS.find((i) => i.code === id),
    getHazardClipsList: (
        hazardTestResults: IHazardPerceptionResult[],
        filterType: HazardFilterType = HazardFilterType.All,
    ) => {
        const viewData: IHazardClipListView[] = DATA_HAZAR_CLIPS.map((clip) => {
            const matchingResults = hazardTestResults.filter(
                (result) => result.clipCode === clip.code,
            );
            const taken = matchingResults.length;

            const lastScore =
                taken > 0
                    ? matchingResults[matchingResults.length - 1].score
                    : 0;

            const downloaded = true; // ??? Check if the video downloaded by user
            return {
                ...clip,
                lastScore,
                taken,
                downloaded,
            };
        });

        switch (filterType) {
            case HazardFilterType.All:
                return viewData;
            case HazardFilterType.Unseen:
                return viewData.filter((item) => item.taken === 0);
            case HazardFilterType.LowScores:
                return viewData.filter(
                    (item) =>
                        item.lastScore &&
                        item.lastScore <= CONSTANTS.hazardLowScoreThreshold,
                );
            case HazardFilterType.Downloaded:
                return viewData.filter((item) => item.downloaded === true);
        }
    },
    getClipUrl(clipCode: string) {
        // ??? This should be in File documentary after downloaded from cloud
        return this.videoBasePath + 'clip' + clipCode + '.mp4';
    },
    getNextClipDetail(currentClipCode: string) {
        const currentVideIndex = DATA_HAZAR_CLIPS.findIndex(
            (item) => item.code === currentClipCode,
        );
        if (DATA_HAZAR_CLIPS.length > currentVideIndex + 1) {
            return DATA_HAZAR_CLIPS[currentVideIndex + 1];
        }
        return null;
    },
};
