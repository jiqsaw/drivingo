import { AlertsIcon } from '@drivingo/ui';
import './mock-test.scss';
import { IonRouterLink } from '@ionic/react';
import {
    CategoryScale,
    Chart as ChartJS,
    Filler as FillerElement,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    FillerElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
);

const MockTestTakenTest = () => {
    const data = {
        labels: ['February', 'April', 'June', 'August', 'October'],
        datasets: [
            {
                label: 'Mock Test',
                data: [8, 12, 10, 10, 11],
                borderColor: '#C686F8',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#7C54A6',
                pointBorderColor: '#fff',
                pointBorderWidth: 1,
                pointRadius: 6,

                backgroundColor: (context: { chart: any }) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(
                        0,
                        chartArea.bottom,
                        0,
                        chartArea.top,
                    );
                    gradient.addColorStop(0, 'rgba(75, 192, 192, 0)');
                    gradient.addColorStop(1, 'rgba(75, 192, 192, 0.5)');
                    return gradient;
                },
            },
        ],
    };

    const options = {
        responsive: true,
        animation: {
            duration: 0,
        },
        plugins: {
            legend: {
                display: false,
            },
        },

        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="mock-test">
            <Line
                className="mock-test__line-chart"
                data={data}
                options={options}
            />
            <div className="mock-test__body">
                <div className="mock-test__topics">
                    <h4 className="mock-test__title">Your best topics</h4>
                    <div className="mock-test__topics-list">
                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="#"
                            className="mock-test__topic"
                        >
                            <AlertsIcon />
                            <h5 className="mock-test__topic-title">
                                Safety Margins
                            </h5>
                        </IonRouterLink>
                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="#"
                            className="mock-test__topic"
                        >
                            <AlertsIcon />
                            <h5 className="mock-test__topic-title">
                                Safety Margins
                            </h5>
                        </IonRouterLink>
                    </div>
                </div>

                <p>
                    In a mock test, you'll have 57 minutes to answer 50 multiple
                    choice questions. You need a minimum of 43 correct answers
                    to pass.
                </p>
            </div>
        </div>
    );
};

export default MockTestTakenTest;
