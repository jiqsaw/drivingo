import { TestType } from '@drivingo/models';
import { UIButton } from '@drivingo/ui';
import { FC } from 'react';

interface FeatTestProps {
    type: string | TestType;
}
const FeatTest: FC<FeatTestProps> = ({ type }) => {
    return (
        <aside>
            <div>
                <p>Soru no: 01/23</p>
                <p>Soru</p>
            </div>
            <div>
                <p>Siklar</p>
                <UIButton text="Next" />
            </div>
            <div>
                <p>Prev</p>
                <p>Flag</p>
            </div>
        </aside>
    );
};

export default FeatTest;
