

import { FC, useState } from 'react';
import styles from './list.module.scss';
import { UIInlineModal } from '../modal/inline-modal';


interface MasonryImageListItemProps {
    image: string;
    title: string;
}

interface MasonryImageListProps {
    data: MasonryImageListItemProps[];
    imgBasePath: string;
}

export const UIMasonryImageList: FC<MasonryImageListProps> = ({ data, imgBasePath }) => {

    const [modalOpened, setModalOpened] = useState(false);
    const [item, setItem] = useState<MasonryImageListItemProps>(data[0]);

    const handleModelClose = () => {
        setModalOpened(false);
    };

    const handleItemClick = (item: MasonryImageListItemProps) => {
        console.log('item', item);
        setItem(item);
        setModalOpened(true);
    };

    return (
        <>
            <div className={styles.masonry_list_main}>
                {
                    data.map((item) => (
                        <div className={styles.masonry_list_main_item}
                            key={item.title}
                            onClick={() => handleItemClick(item)}
                        >
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

            <UIInlineModal isOpen={modalOpened} onClose={handleModelClose} type="full">
                <figure className={styles.modal_image}>
                    <img src={imgBasePath + item.image} alt={item.title} />
                    <figcaption className={styles.modal_content_body}>
                        {item.title}
                    </figcaption>
                </figure>

            </UIInlineModal>
        </>


    );
}
