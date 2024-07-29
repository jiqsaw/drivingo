export interface IHazardClip {
    code: string;
    type: 'time' | 'frame';
    frameCount?: number;
    hasReviewVideo: boolean;
    scoreWindow: IHazardClipScoreWindow[];
}

export interface IHazardClipScoreWindow {
    score: number;
    start: number;
    end: number;
}

export type HazardTestView = 'test' | 'finished' | 'review';

export interface IHazardTest {
    clipCode: string;
    userFlags: number[];
    score: number | null;
    scoreFlag: number | null;
    videoData?: IHazardClip;
    videoSource?: any;
    viewMode: HazardTestView;
}

export interface IHazardClipListView extends IHazardClip {
    lastScore?: number;
    lastScoreInPercentage: number;
    taken: number;
    pngUri: string | null;
    ready: boolean;
}