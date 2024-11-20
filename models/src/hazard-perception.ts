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

export type HazardTestView = 'test' | 'result' | 'review';

export interface IHazardClipListView extends IHazardClip {
    lastScore?: number;
    taken: number;
    downloaded: boolean;
}

export interface IHazardPerceptionResult {
    date: Date;
    clipCode: string;
    score: number;
}

export enum HazardFilterType {
    All = 'All',
    Unseen = 'Unseen',
    LowScores = 'Low Scores',
    Downloaded = 'Downloaded',
}
