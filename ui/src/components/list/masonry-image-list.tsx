import { FC, useState } from 'react';
import { UIInlineModal } from '../modal/inline-modal';
import './masonry-image-list.scss';

interface MasonryImageListItemProps {
    image: string;
    title: string;
}

interface MasonryImageListProps {
    data: MasonryImageListItemProps[];
    imgBasePath: string;
}

export const UIMasonryImageList: FC<MasonryImageListProps> = ({
    data,
    imgBasePath,
}) => {
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
            <div className="masonry-list-main">
                {data.map((item) => (
                    <div
                        className="masonry-list-main-item"
                        key={item.title}
                        onClick={() => handleItemClick(item)}
                    >
                        <figure>
                            <img
                                src={imgBasePath + item.image}
                                alt={item.title}
                            />
                        </figure>
                        <h3 className="masonry-list-main-title">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>

            <UIInlineModal
                isOpen={modalOpened}
                onClose={handleModelClose}
                type="full"
            >
                <figure className="modal_image">
                    <img src={imgBasePath + item.image} alt={item.title} />
                    <figcaption className="modal-content-body">
                        {item.title}
                    </figcaption>
                </figure>
            </UIInlineModal>
        </>
    );
};
