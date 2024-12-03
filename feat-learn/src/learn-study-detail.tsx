import { DATA_LEARN } from '@drivingo/data';
import { AlertsIcon, UIButton, UIDividerPoints } from '@drivingo/ui';
import { IonToggle, useIonRouter } from '@ionic/react';
import './styles/learn-study-detail.scss';

type PageDataProps = {
    title: string;
    content: string;
};

type DataLearnType = {
    [key: string]: PageDataProps;
};

const FeatLearnStudyDetail = () => {
    const router = useIonRouter();
    const pageName = router.routeInfo.pathname.split('/').pop();

    if (!pageName) {
        return null;
    }

    const pageData = (DATA_LEARN as unknown as DataLearnType)[pageName];

    return (
        <>
            <div className="learn-study-detail">
                <AlertsIcon />
                <h1 className="title">{pageData.title}</h1>
                <UIDividerPoints />

                <div
                    className="learn-study-detail__body"
                    dangerouslySetInnerHTML={{ __html: pageData.content }}
                ></div>

                <div className="fixed-bottom-button">
                    <div className="learn-study-detail__check">
                        <IonToggle
                            labelPlacement="end"
                            defaultChecked
                            color="success"
                        >
                            I’ve read this
                        </IonToggle>
                    </div>
                    <div className="learn-study-detail__actions">
                        <button className="btn-prev">{'<'}previous</button>
                        <UIButton
                            id="next"
                            fullRounded
                            nextIcon={true}
                            type="secondary"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatLearnStudyDetail;
