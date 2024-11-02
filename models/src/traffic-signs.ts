export interface ITrafficSign {
    title: string;
    description: string;
    items: ITrafficSignItem[];
}

export interface ITrafficSignItem {
    imgPath: string;
    desc: string;
}
