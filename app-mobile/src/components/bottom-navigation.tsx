import {
    CloseIcon,
    CymbalIcon,
    GridIcon,
    SettingsIcon,
    TrafficLightIcon,
} from '@drivingo/ui/components';
import { IonRouterLink } from '@ionic/react';
import { useState } from 'react';
import './bottom-navigation.scss';

const BottomNavigation: React.FC = () => {
    const [subMenu1, setSubMenu1] = useState(false);

    return (
        <nav slot="bottom" property="" className="main-tab">
            <ul>
                <li>
                    <IonRouterLink
                        routerDirection="root"
                        routerLink="/theory-test/car/home"
                        className="nav-item firstly"
                    >
                        Theory Test
                    </IonRouterLink>
                </li>

                <li
                    className={`${subMenu1 ? 'active' : ''}`}
                    onKeyDown={() => {
                        setSubMenu1(!subMenu1);
                    }}
                >
                    {subMenu1 ? (
                        <span>
                            <CloseIcon />
                        </span>
                    ) : (
                        <span>
                            <GridIcon />
                        </span>
                    )}
                    <ul className={'sub-menu'}>
                        <li>
                            <IonRouterLink
                                routerDirection="root"
                                routerLink="/highway-code"
                                className="sub-nav-item"
                            >
                                <CymbalIcon /> <span>Highway Code</span>
                            </IonRouterLink>
                        </li>
                        <li>
                            <IonRouterLink
                                routerDirection="root"
                                routerLink="/traffic-signs"
                                className="sub-nav-item"
                            >
                                <TrafficLightIcon /> <span>Traffic Signs</span>
                            </IonRouterLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <IonRouterLink
                        routerDirection="root"
                        routerLink="/settings"
                        className="nav-item"
                    >
                        <SettingsIcon />
                    </IonRouterLink>
                </li>
            </ul>
        </nav>
    );
};

export default BottomNavigation;
