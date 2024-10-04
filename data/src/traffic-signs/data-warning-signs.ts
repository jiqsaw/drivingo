import type { ITrafficSignItem } from '@drivingo/models';

const warningSigns: ITrafficSignItem[] = [
    {
        imgPath:
            'warning-signs/warning-sign-distance-to-stop-line-ahead-100-yards.jpg',
        desc: 'Distance to ‘STOP’ line ahead',
    },
    {
        imgPath: 'warning-signs/warning-sign-dual-carriageway-ends.jpg',
        desc: 'Dual carriageway ends',
    },
    {
        imgPath: 'warning-signs/warning-sign-road-narrow.jpg',
        desc: 'Road narrows on right (left if symbol reversed)',
    },
    {
        imgPath: 'warning-signs/warning-sign-road-narrow-both-sides.jpg',
        desc: 'Road narrows on both sides',
    },
    {
        imgPath:
            'warning-signs/warning-sign-distance-to-stop-line-ahead-50-yards.jpg',
        desc: 'Distance to ‘Give Way’ line ahead',
    },
    {
        imgPath: 'warning-signs/warning-sign-crossroads.jpg',
        desc: 'Crossroads',
    },
    {
        imgPath: 'warning-signs/warning-sign-junction-on-bend-ahead.jpg',
        desc: 'Junction on bend ahead',
    },
    {
        imgPath: 'warning-signs/warning-sign-t-junction-with-priority.jpg',
        desc: 'T-junction with priority over vehicles from the right',
    },
    {
        imgPath: 'warning-signs/warning-sign-staggered-junction.jpg',
        desc: 'Staggered junction',
    },
    {
        imgPath: 'warning-signs/warning-sign-traffic-merging-left.jpg',
        desc: 'Traffic merging from left ahead',
    },
    {
        imgPath: 'warning-signs/warning-sign-double-bend.jpg',
        desc: 'Double bend first to left (symbol may be reversed)',
    },
    {
        imgPath: 'warning-signs/warning-sign-bend-to-right.jpg',
        desc: 'Bend to right (or left if symbol reversed)',
    },
    {
        imgPath: 'warning-signs/warning-sign-roundabout.jpg',
        desc: 'Roundabout',
    },
    {
        imgPath: 'warning-signs/warning-sign-uneven-road.jpg',
        desc: 'Uneven road',
    },
    {
        imgPath: 'warning-signs/warning-sign-plate-below-some-signs.jpg',
        desc: 'Plate below some signs',
    },
    {
        imgPath: 'warning-signs/warning-sign-two-way-traffic-crosses-road.jpg',
        desc: 'Two-way traffic crosses one-way road',
    },
    {
        imgPath: 'warning-signs/warning-sign-two-way-traffic-ahead.jpg',
        desc: 'Two-way traffic straight ahead',
    },
    {
        imgPath: 'warning-signs/warning-sign-swing-bridge.jpg',
        desc: 'Opening or swing bridge ahead',
    },
    {
        imgPath: 'warning-signs/warning-sign-aircraft.jpg',
        desc: 'Low-flying aircraft or sudden aircraft noise',
    },
    {
        imgPath: 'warning-signs/warning-sign-falling-rocks.jpg',
        desc: 'Falling or fallen rocks',
    },
    {
        imgPath: 'warning-signs/warning-sign-traffic-signals-not-in-use.jpg',
        desc: 'Traffic signals not in use',
    },
    {
        imgPath: 'warning-signs/warning-sign-traffic-signals.jpg',
        desc: 'Traffic signals',
    },
    {
        imgPath: 'warning-signs/warning-sign-slippery-road.jpg',
        desc: 'Slippery road',
    },
    {
        imgPath: 'warning-signs/warning-sign-steep-hill-downwards.jpg',
        desc: 'Steep hill downwards',
    },
    {
        imgPath: 'warning-signs/warning-sign-steep-hill-upwards.jpg',
        desc: 'Steep hill upwards',
    },
    {
        imgPath: 'warning-signs/warning-sign-tunnel-ahead.jpg',
        desc: 'Tunnel ahead',
    },
    {
        imgPath: 'warning-signs/warning-sign-trams-crossing-ahead.jpg',
        desc: 'Trams crossing ahead',
    },
    {
        imgPath:
            'warning-signs/warning-sign-level-crossing-ahead-barrier-or-gate.jpg',
        desc: 'Level crossing with barrier or gate ahead',
    },
    {
        imgPath:
            'warning-signs/warning-sign-level-crossing-ahead-without-barrier.jpg',
        desc: 'Level crossing without barrier or gate ahead',
    },
    {
        imgPath:
            'warning-signs/warning-sign-level-crossing-without-barrier-ahead.jpg',
        desc: 'Level crossing without barrier',
    },
    {
        imgPath: 'warning-signs/warning-sign-school-crossing-patrol-ahead.jpg',
        desc: 'School crossing patrol ahead (some signs have amber lights which flash when crossings are in use)',
    },
    {
        imgPath:
            'warning-signs/warning-sign-frail-pedestrians-cross-road-ahead.jpg',
        desc: 'Frail (or blind or disabled if shown) pedestrians likely to cross road ahead',
    },
    {
        imgPath: 'warning-signs/warning-sign-pedestrians-in-road-ahead.jpg',
        desc: 'Pedestrians in road ahead',
    },
    {
        imgPath: 'warning-signs/warning-sign-zebra-crossing.jpg',
        desc: 'Zebra crossing',
    },
    {
        imgPath: 'warning-signs/warning-sign-overhead-electric-cables.jpg',
        desc: 'Overhead electric cable; plate indicates maximum height of vehicles which can pass safely',
    },
    {
        imgPath: 'warning-signs/warning-sign-available-width-head-room.jpg',
        desc: 'Available width of headroom indicated',
    },
    {
        imgPath: 'warning-signs/warning-sign-sharp-deviation-of-route.jpg',
        desc: 'Sharp deviation of route to left (or right if chevrons reversed)',
    },
    {
        imgPath: 'warning-signs/warning-sign-light-signals-ahead.jpg',
        desc: 'Light signals ahead at level crossing, airfield or bridge',
    },
    {
        imgPath: 'warning-signs/warning-sign-level-crossing-minature.jpg',
        desc: 'Miniature warning lights at level crossings',
    },
    { imgPath: 'warning-signs/warning-sign-cattle.jpg', desc: 'Cattle' },
    {
        imgPath: 'warning-signs/warning-sign-wild-animals.jpg',
        desc: 'Wild animals',
    },
    {
        imgPath: 'warning-signs/warning-sign-wild-horses.jpg',
        desc: 'Wild horses or ponies',
    },
    {
        imgPath: 'warning-signs/warning-sign-accompanied-horses.jpg',
        desc: 'Accompanied horses or ponies',
    },
    {
        imgPath: 'warning-signs/warning-sign-cycle-route-ahead.jpg',
        desc: 'Cycle route ahead',
    },
    {
        imgPath: 'warning-signs/warning-sign-risk-of-ice.jpg',
        desc: 'Risk of ice',
    },
    {
        imgPath: 'warning-signs/warning-sign-traffic-queues.jpg',
        desc: 'Traffic queues likely ahead',
    },
    {
        imgPath: 'warning-signs/warning-sign-distance-humps-extend.jpg',
        desc: 'Distance over which road humps extend',
    },
    {
        imgPath: 'warning-signs/warning-sign-other-danger.jpg',
        desc: 'Other danger; plate indicates nature of danger',
    },
    {
        imgPath: 'warning-signs/warning-sign-soft-verges.jpg',
        desc: 'Soft verges',
    },
    {
        imgPath: 'warning-signs/warning-sign-side-winds.jpg',
        desc: 'Side winds',
    },
    {
        imgPath: 'warning-signs/warning-sign-hump-bridge.jpg',
        desc: 'Hump bridge',
    },
    {
        imgPath: 'warning-signs/warning-sign-worded-sign-ford.jpg',
        desc: 'Worded warning sign',
    },
    {
        imgPath: 'warning-signs/warning-sign-quayside-or-riverbank.jpg',
        desc: 'Quayside or river bank',
    },
    {
        imgPath: 'warning-signs/warning-sign-risk-of-grounding.jpg',
        desc: 'Risk of grounding',
    },
];

export default warningSigns;
