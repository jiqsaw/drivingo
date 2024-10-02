import { IHighwayCode } from '@drivingo/models';
import { UITextList } from '@drivingo/ui/components';
import { FC } from 'react';

type HighwayCodeSignsProps = {
    data: IHighwayCode[];
};

const HighwayCodeSigns: FC<HighwayCodeSignsProps> = ({ data }) => {
    return data.map((item) => (
        <UITextList
            key={item.id}
            title={item.title}
            subtitle={item.footNote}
            link={`/highway-code/signs/${item.id}`}
        />
    ));
};

export default HighwayCodeSigns;
