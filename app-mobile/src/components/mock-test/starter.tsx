import './mock-test.scss';

const MockTestStarter = () => {
    return (
        <div className="mock-test">
            <figure className="mock-test__dummy-img">
                <img src="assets/images/chart.png" />
                <figcaption className="mock-test__dummy-img-text">
                    Your last test results will appear here.
                </figcaption>
            </figure>

            <div className="mock-test__body">
                <span>
                    In a mock test, you can review your flagged questions at the
                    end of the test. You can pause the test by pressing exit.
                </span>
                <div className="mock-test__item">
                    <h4 className="mock-test__title">passing mark</h4>
                    <span className="mock-test__score">43/50</span>
                </div>
                <div className="mock-test__item">
                    <h4 className="mock-test__title">time</h4>
                    <span className="mock-test__clock">
                        <img src="/assets/images/icon-clock.svg" alt="" />
                        57:00
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MockTestStarter;
