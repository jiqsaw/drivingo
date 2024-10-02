import { IHighwayCode } from '@drivingo/models';
import { UITextList } from '@drivingo/ui/components';

import { FC } from 'react';

type HighwayCodeContentProps = {
    data: IHighwayCode[];
};

const HighwayCodeContent: FC<HighwayCodeContentProps> = ({ data }) => {
    return data.map((item: IHighwayCode) => (
        <UITextList
            key={item.id}
            title={item.title}
            subtitle={item.footNote}
            link={`/highway-code/content/${item.id}`}
        />
    ));
};

export default HighwayCodeContent;
