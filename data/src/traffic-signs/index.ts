import { ITrafficSign } from '@drivingo/models';
import warningSigns from './data-warning-signs';
import directionSigns from './direction-signs';
import givingOrderSigns from './giving-order-signs';
import informationSigns from './information-signs';
import roadWorksSigns from './road-work-signs';

export const DATA_TRAFFIC_SIGNS1 = {
    directionSigns,
    givingOrderSigns,
    informationSigns,
    roadWorksSigns,
    warningSigns,
};

export const DATA_TRAFFIC_SIGNS: ITrafficSign[] = [
    {
        title: 'Giving orders',
        description:
            'Signs with red circles are mostly prohibitive. Plates below signs qualify their message.',
        items: givingOrderSigns,
    },
    {
        title: 'Warning',
        description: 'Mostly triangular',
        items: warningSigns,
    },
    {
        title: 'Direction',
        description: 'Mostly rectangular',
        items: directionSigns,
    },
    {
        title: 'Information',
        description: 'All rectangular',
        items: informationSigns,
    },
    {
        title: 'Road works',
        description:
            'Signs with red circles are mostly prohibitive. Plates below signs qualify their message.',
        items: roadWorksSigns,
    },
];
