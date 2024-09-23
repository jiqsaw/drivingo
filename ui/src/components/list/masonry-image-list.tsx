

import { FC } from 'react';
import styles from './list.module.scss';


interface MasonryImageListItemProps {
    image: string;
    title: string;
}

interface MasonryImageListProps {
    data: MasonryImageListItemProps[];
    imgBasePath: string;
}

export const UIMasonryImageList: FC<MasonryImageListProps> = ({ data, imgBasePath }) => {
    return (
        <div className={styles.masonry_list_main}>
            {
                data.map((item) => (
                    <div className={styles.masonry_list_main_item}>
                        <figure>
                            <img src={imgBasePath + item.image} alt={item.title} />
                        </figure>
                        <h3 className={styles.masonry_list_main_title}>
                            {item.title}
                        </h3>
                    </div>
                ))
            }
        </div>

    );
}
