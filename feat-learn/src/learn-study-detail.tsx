import {
    AlertsIcon,
    ArrowNextIcon,
    UIButton,
    UIDividerPoints,
} from '@drivingo/ui';
import './styles/learn-study-detail.scss';
import { IonToggle } from '@ionic/react';

const FeatLearnStudyDetail = () => {
    return (
        <>
            <div className="learn-study-detail">
                <AlertsIcon />
                <h1 className="title">Safety margins</h1>
                <UIDividerPoints />
                <h2>Powered wheelchairs and mobility</h2>
                <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                </p>
                <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                </p>
                <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                </p>
                <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                </p>
                <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                </p>
                <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                </p>

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
