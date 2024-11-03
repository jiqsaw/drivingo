import { storeTheoryActiveTestActions } from '@drivingo/store';
import { IonRouterLink } from '@ionic/react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import './test-review-header.scss';

const TestReviewHeader: FC = () => {
    const dispatch = useDispatch();

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
                routerLink="/"
                routerDirection="back"
                onClick={() => exit()}
            >
                Exit
            </IonRouterLink>

            {/* TODO: Theme chenge icon here. Ui library e eklenebilir: UIThemeButton. Normal svg file kullanilmali (class degil). Svg ui klasoru altinda assets klasorune konulmali. */}
            {/* TODO: Translate icon here. Button UI library a eklenebilir: UITranslateButton. Svg ayni sekilde ui/assets klasorune konulmali. */}
        </div>
    );

    function exit() {
        dispatch(storeTheoryActiveTestActions.exit());
    }
};

export default TestReviewHeader;
