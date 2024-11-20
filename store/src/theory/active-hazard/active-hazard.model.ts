import { HazardTestView, IHazardClip } from '@drivingo/models';

export interface IStoreTheoryActiveHazard {
    clipCode: string;
    userFlags: number[];
    score: number | null;
    scoreFlag: number | null;
    videoData?: IHazardClip;
    videoSource?: any;
    viewMode: HazardTestView;
}
