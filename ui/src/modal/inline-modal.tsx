import { IonModal } from '@ionic/react';
import { FC, useEffect, useRef } from 'react';

import { CloseIcon } from '../icons';
import styles from './modal.module.scss';

export interface UIInlineModalProps {
    isOpen: boolean;
    type?: 'default' | 'full' | 'inline';
    breakpoint?: number;
    onClose?: () => void;
    children: React.ReactNode;
}

export const UIInlineModal: FC<UIInlineModalProps> = ({
    children,
    isOpen,
    onClose,
    type,
    breakpoint,
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
        <IonModal
            ref={modal}
            className={`${styles.modal} ${type} ${breakpoint ? 'breakpoint-modal' : ''}`}
            initialBreakpoint={breakpoint || 1}
            breakpoints={[0, 0.25, 0.5, 0.75, 1]}
        >
            <div className="wrapper">
                {children}
                <div
                    className={styles.close_button}
                    onClick={() => {
                        handleClose();
                    }}
                >
                    <CloseIcon />
                </div>
            </div>
        </IonModal>
    );
};
