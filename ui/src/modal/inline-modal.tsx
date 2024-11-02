import { IonIcon, IonModal } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import { FC, useEffect, useRef } from 'react';

import styles from './modal.module.scss';

export interface UIInlineModalProps {
    isOpen: boolean;
    type?: 'default' | 'full';
    onClose?: () => void;
    children: React.ReactNode;
}

export const UIInlineModal: FC<UIInlineModalProps> = ({
    children,
    isOpen,
    onClose,
    type,
}) => {
    const modal = useRef<HTMLIonModalElement>(null);
    type = type || 'default';

    useEffect(() => {
        if (modal.current) {
            if (isOpen) {
                modal.current.present();
            } else {
                modal.current.dismiss();
            }
        }
    }, [isOpen]);

    const handleClose = () => {
        if (modal.current) {
            modal.current.dismiss();
            onClose && onClose();
        }
    };

    return (
        <IonModal ref={modal} className={`${styles.modal} ${type}`}>
            <div className="wrapper">
                {children}
                <div
                    className={styles.close_button}
                    onClick={() => {
                        handleClose();
                    }}
                >
                    {/* <ion-icon name="close-outline"></ion-icon> */}
                    <IonIcon icon={closeCircle} />
                </div>
            </div>
        </IonModal>
    );
};
