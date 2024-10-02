import React, { FC, useState } from 'react';
import styles from './tab.module.scss';

interface TabsProps {
    data: {
        title: string;
        content: React.ReactNode;
    }[];
}

export const UITab: FC<TabsProps> = ({ data }) => {
    const [selected, setSelected] = useState(0);

    return (
        <div className={styles.main}>
            <div className={styles.tabs}>
                {data.map((item, index) => (
                    <button
                        type="button"
                        key={index}
                        className={`${styles.tab} ${selected === index ? 'active' : ''}`}
                        onClick={() => setSelected(index)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <div className={styles.content}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.tabContentItem} ${selected === index ? 'active' : ''}`}
                    >
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
};
