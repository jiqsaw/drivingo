import { FC, useEffect, useRef, useState } from 'react';
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
    const tabsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const activeTab = document.querySelector(
            '.tabs--active',
        ) as HTMLElement;
        const container = tabsRef.current;

        if (activeTab && container) {
            const scrollLeft =
                activeTab.offsetLeft -
                container.offsetWidth / 2 +
                activeTab.offsetWidth / 2;

            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth',
            });
        }
    }, [selected]);

    return (
        <div className="tabs" ref={tabsRef}>
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
