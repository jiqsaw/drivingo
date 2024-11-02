import { FC, useState } from 'react';
import './tabs.scss';

interface Props {
    items: string[];
    initialSelectedIndex?: number;
    onChange: (index: number) => void;
}

export const UITabs: FC<Props> = ({
    items,
    initialSelectedIndex = 0,
    onChange,
}) => {
    const [selected, setSelected] = useState(initialSelectedIndex);

    return (
        <div className="tabs">
            {items.map((item, index) => (
                <button
                    type="button"
                    key={index}
                    className={`tabs__item ${selected === index && 'tabs--active'}`}
                    onClick={() => handleClick(index)}
                >
                    {item}
                </button>
            ))}
        </div>
    );

    function handleClick(index: number): void {
        setSelected(index);
        onChange(index);
    }
};
