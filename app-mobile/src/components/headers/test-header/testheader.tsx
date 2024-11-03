import { TestType } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
} from '@drivingo/store';
import { IonRouterLink } from '@ionic/react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './testheader.scss';

const TestHeader: FC<{ type?: TestType }> = ({ type }) => {
    const dispatch = useDispatch();
    const isPaused = useSelector(storeTheoryActiveTestSelectors.isPaused);

    return (
        <div className="test-header">
            {/*  IonBackButton onClick ya da callBack methodlari yok. O yuzden custom back buttonu koyup geri gitmeden once confirm modal koymamiz gerekece */}
            {/* <IonButtons>
                <IonBackButton text="Exit" icon={arrowBack} />
            </IonButtons> */}
            {/* 
                TODO: 
                Bu exit e basildiginda normal alert ciksin. Asagidaki mesaj yazsin.
                Exit exam
                Are you sure you wish to exit the test?

                //sonrasinda store'daki exit dispatch olsun. Ben finish i tetiklemek icin gecici button koyuyorum. 
                //IonBackButton olayini cozemescek bu buttonu back icon ile customise ederiz.
            
            */}
            <IonRouterLink
                routerLink={`/theory-test/${type}`}
                routerDirection="back"
                onClick={() => exit()}
            >
                Exit
            </IonRouterLink>

            {/* Exit e tiklaninca alert cikacak, pause orada olacak. Bknz mevcut app */}
            <button onClick={() => onPauseHandler()}>
                {isPaused ? 'Resume' : 'Pause'}
            </button>

            {isPaused && (
                <button onClick={() => onPauseHandler()}>Resume</button>
            )}

            {/* TODO: Theme chenge icon here. Ui library e eklenebilir: UIThemeButton. Normal svg file kullanilmali (class degil). Svg ui klasoru altinda assets klasorune konulmali. */}
            {/* TODO: Translate icon here. Button UI library a eklenebilir: UITranslateButton. Svg ayni sekilde ui/assets klasorune konulmali. */}
        </div>
    );

    function onPauseHandler() {
        if (isPaused) {
            dispatch(storeTheoryActiveTestActions.unpause());
        } else {
            dispatch(storeTheoryActiveTestActions.pause());
        }
    }

    function exit() {
        dispatch(storeTheoryActiveTestActions.exit());
    }
};

export default TestHeader;
