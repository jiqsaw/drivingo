import { IonModal } from "@ionic/react";
import { FC, useEffect, useRef } from "react";

import './modal.scss';

export interface UIInlineModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

export const UIInlineModal: FC<UIInlineModalProps> = ({ children, isOpen, onClose }) => {
    const modal = useRef<HTMLIonModalElement>(null);

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
        <IonModal id="inline-modal" ref={modal} trigger="open-custom-dialog">
            <div className="wrapper">
                {children}
                <div className="close-button" onClick={() => {
                    handleClose();
                }}>X</div>
            </div>
        </IonModal>
    );
};
