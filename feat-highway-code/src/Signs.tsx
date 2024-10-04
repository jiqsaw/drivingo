import { IHighwayCode } from '@drivingo/models';
import { FC } from 'react';
import { IUIList, UIList } from 'ui/src';

interface IProps {
    data: IHighwayCode[];
}

const HighwayCodeSigns: FC<IProps> = ({ data }) => {
    const listItems: IUIList[] = data.map((e) => {
        return {
            id: e.id,
            title: e.title,
            note: e.footNote,
            link: `/highway-code/signs/${e.id}`,
        };
    });

    return <UIList data={listItems} />;
};

export default HighwayCodeSigns;
