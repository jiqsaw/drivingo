import { IHighwayCode } from '@drivingo/models';
import { IUIList, UIList } from '@drivingo/ui/components';
import { FC } from 'react';

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
