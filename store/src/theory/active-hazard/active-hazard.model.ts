import { HazardView, IHazardClip } from '@drivingo/models';

export interface IStoreTheoryActiveHazard {
    clipCode: string;
    score: number | null;
    scoreFlag: number | null;
    videoData?: IHazardClip;
    videoSource?: any;
    viewMode: HazardView;
    userFlags: number[];
}
