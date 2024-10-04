import { FC, useState } from 'react';
import { UIInlineModal } from '../modal/inline-modal';
import './masonry-list.scss';

export interface UIMasonryList {
    data: UIMasonryListItem[];
    imgBasePath: string;
}

interface UIMasonryListItem {
    image: string;
    title: string;
}

export const UIMasonryList: FC<UIMasonryList> = ({ data, imgBasePath }) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [item, setItem] = useState<UIMasonryListItem>(data[0]);

    const handleModelClose = () => {
        setModalOpened(false);
    };

    const handleItemClick = (item: UIMasonryListItem) => {
        setItem(item);
        setModalOpened(true);
    };

    return (
        <>
            <div className="masonry-list-main">
                {data.map((item, index) => (
                    <div
                        className="masonry-list-main-item"
                        key={index + item.title}
                        onClick={() => handleItemClick(item)}
                    >
                        <figure>
                            <img
                                src={imgBasePath + item.image}
                                alt={item.title}
                            />
                        </figure>
                        <p className="masonry-list-main-title">{item.title}</p>
                    </div>
                ))}
            </div>

            <UIInlineModal
                isOpen={modalOpened}
                onClose={handleModelClose}
                type="full"
            >
                <figure className="modal-image">
                    <img src={imgBasePath + item.image} alt={item.title} />
                    <figcaption className="modal-content-body">
                        {item.title}
                    </figcaption>
                </figure>
            </UIInlineModal>
        </>
    );
};
