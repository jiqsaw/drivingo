import { FC } from 'react';
import './profile-button.scss';

export interface Props {
    photoURL?: string | null;
}

export const UIProfileButton: FC<Props> = ({ photoURL }) => {
    return (
        <div className="profile-button">
            {photoURL && (
                <img
                    src={photoURL}
                    alt="profile"
                    referrerPolicy="no-referrer"
                />
            )}
        </div>
    );
};
