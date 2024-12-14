import type { IQuestion } from '@drivingo/models';

const questions: IQuestion[] = [
    {
        code: 'CC5001',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this road sign mean?',
        questionImg: '622.1A.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'No goods vehicles under 7.5 tonnes maximum authorised mass',
                img: '',
            },
            {
                char: 'b',
                text: 'No goods vehicles over 7.5 tonnes maximum authorised mass',
                img: '',
            },
            {
                char: 'c',
                text: 'No goods vehicles over 7.5 metres overall height',
                img: '',
            },
            {
                char: 'd',
                text: 'No goods vehicles under 7.5 metres overall height',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5002',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What does this temporary sign mean for drivers of vehicles over 7.5 tonnes maximum authorised mass?',
        questionImg: 'TS4545.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use either the left-hand or middle lane',
                img: '',
            },
            {
                char: 'b',
                text: 'Use only the left-hand lane',
                img: '',
            },
            {
                char: 'c',
                text: 'Use only the middle lane',
                img: '',
            },
            {
                char: 'd',
                text: 'Use any lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5004',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'In England and Wales, what`s the national speed limit on a single carriageway road for a rigid lorry with a maximum authorised mass of more than 7.5 tonnes?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '30 mph',
                img: '',
            },
            {
                char: 'b',
                text: '40 mph',
                img: '',
            },
            {
                char: 'c',
                text: '50 mph',
                img: '',
            },
            {
                char: 'd',
                text: '60 mph',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5006',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a lorry with a maximum authorised mass of more than 7.5 tonnes along a three-lane motorway. When may you use the right-hand lane?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To overtake slower lorries',
                img: '',
            },
            {
                char: 'b',
                text: 'When the left-hand lane is closed',
                img: '',
            },
            {
                char: 'c',
                text: 'If you drive at more than 60 mph',
                img: '',
            },
            {
                char: 'd',
                text: 'If you`re travelling unladen',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5011',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'Where are you most likely to ground a low loader?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On rural roads',
                img: '',
            },
            {
                char: 'b',
                text: 'On traffic-calming humps',
                img: '',
            },
            {
                char: 'c',
                text: 'On yellow rumble strips',
                img: '',
            },
            {
                char: 'd',
                text: 'On hatched road markings',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5012',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a low loader and you see this sign. What`s your main concern at this hazard?',
        questionImg: 'TS4598.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The ground clearance',
                img: '',
            },
            {
                char: 'b',
                text: 'The weight limit',
                img: '',
            },
            {
                char: 'c',
                text: 'The height limit',
                img: '',
            },
            {
                char: 'd',
                text: 'The load`s security',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5013',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a vehicle that`s over 17 metres (55 feet) long. What should you do at a level crossing?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Cross over using your horn and hazard warning lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop before the crossing and phone the signal operator',
                img: '',
            },
            {
                char: 'c',
                text: 'Increase your speed to clear the crossing quickly',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop before the crossing and look both ways before going on',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5015',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What type of fastening or restraint should you use when carrying a load of steel?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Chains',
                img: '',
            },
            {
                char: 'b',
                text: 'Straps',
                img: '',
            },
            {
                char: 'c',
                text: 'Ropes',
                img: '',
            },
            {
                char: 'd',
                text: 'Sheeting',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5023',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a lorry carrying a load that`s 4.5 metres (14 feet 9 inches) wide. What`s the maximum speed you`re allowed to drive on a motorway?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '10 mph',
                img: '',
            },
            {
                char: 'b',
                text: '20 mph',
                img: '',
            },
            {
                char: 'c',
                text: '30 mph',
                img: '',
            },
            {
                char: 'd',
                text: '40 mph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5024',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What`s the speed limit on a dual carriageway when you`re carrying a load that`s 4.5 metres (14 feet 9 inches) wide?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '15 mph',
                img: '',
            },
            {
                char: 'b',
                text: '25 mph',
                img: '',
            },
            {
                char: 'c',
                text: '35 mph',
                img: '',
            },
            {
                char: 'd',
                text: '45 mph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5025',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What colour are the markings on the rear of lorries over 7.5 tonnes maximum authorised mass?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Red/white',
                img: '',
            },
            {
                char: 'b',
                text: 'Red/yellow',
                img: '',
            },
            {
                char: 'c',
                text: 'Black/yellow',
                img: '',
            },
            {
                char: 'd',
                text: 'Black/white',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5026',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'When this vehicle transporter turns, how will the overhanging top deck move?',
        questionImg: 'VL2510.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Through a greater arc than the cab',
                img: '',
            },
            {
                char: 'b',
                text: 'Through a lower arc than the cab',
                img: '',
            },
            {
                char: 'c',
                text: 'Through a smaller arc than the cab',
                img: '',
            },
            {
                char: 'd',
                text: 'Through the same arc as the cab',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5027',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re the driver of an articulated car transporter. How will the overhanging top deck move as you turn corners?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Through a smaller arc than the cab',
                img: '',
            },
            {
                char: 'b',
                text: 'Through a shorter arc than the cab',
                img: '',
            },
            {
                char: 'c',
                text: 'Through a lower arc than the cab',
                img: '',
            },
            {
                char: 'd',
                text: 'Through a greater arc than the cab',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5028',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'When would the driver of a car transporter need to be most aware of the front overhang of the trailer?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When overtaking',
                img: '',
            },
            {
                char: 'b',
                text: 'When turning',
                img: '',
            },
            {
                char: 'c',
                text: 'When loading',
                img: '',
            },
            {
                char: 'd',
                text: 'When braking',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5030',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a lorry with a maximum authorised mass of more than 7.5 tonnes. What`s the national speed limit for your vehicle on a dual carriageway in England and Wales?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '40 mph',
                img: '',
            },
            {
                char: 'b',
                text: '50 mph',
                img: '',
            },
            {
                char: 'c',
                text: '60 mph',
                img: '',
            },
            {
                char: 'd',
                text: '70 mph',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5031',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Which axle configuration is most effective at preventing petrol tankers from rolling over?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Tandem axles with double wheels',
                img: '',
            },
            {
                char: 'b',
                text: 'Tandem axles with air suspension',
                img: '',
            },
            {
                char: 'c',
                text: 'Tri-axles with single wheels',
                img: '',
            },
            {
                char: 'd',
                text: 'Tri-axles with double wheels',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5032',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What warning does the driver of a petrol tanker have that `rear wheel lift` is about to become `roll-over`?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The steering becomes heavy',
                img: '',
            },
            {
                char: 'b',
                text: 'The driver has very little warning',
                img: '',
            },
            {
                char: 'c',
                text: 'The air pressure drops',
                img: '',
            },
            {
                char: 'd',
                text: 'The diff-lock engages',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5033',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What effect could a load of hanging meat carcasses cause when you drive around corners or bends?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The wave effect',
                img: '',
            },
            {
                char: 'b',
                text: 'The camber effect',
                img: '',
            },
            {
                char: 'c',
                text: 'The gravity effect',
                img: '',
            },
            {
                char: 'd',
                text: 'The pendulum effect',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5034',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Why do many drivers park at overnight stops with their rear doors close to another lorry?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To keep the load safe',
                img: '',
            },
            {
                char: 'b',
                text: 'To ensure a clear path',
                img: '',
            },
            {
                char: 'c',
                text: 'To keep `same company` lorries together',
                img: '',
            },
            {
                char: 'd',
                text: 'To stop the theft of their fuel',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5256',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What markings should be fitted to a lorry with a maximum authorised mass of more than 7500 kg?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4612.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4543.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4581.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4577.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5257',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'How far can a load overhang at the rear before you must use projection marker boards?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '1 metre (3 feet 3 inches)',
                img: '',
            },
            {
                char: 'b',
                text: '1.5 metres (5 feet 0 inches)',
                img: '',
            },
            {
                char: 'c',
                text: '2 metres (6 feet 6 inches)',
                img: '',
            },
            {
                char: 'd',
                text: '2.9 metres (9 feet 5 inches)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5258',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'When must you notify telephone companies that you`re moving a high load?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When the load`s height exceeds 4.00 metres (13 feet)',
                img: '',
            },
            {
                char: 'b',
                text: 'When the load`s height exceeds 4.30 metres (14 feet 2 inches)',
                img: '',
            },
            {
                char: 'c',
                text: 'When the load`s height exceeds 5.00 metres (16 feet 6 inches)',
                img: '',
            },
            {
                char: 'd',
                text: 'When the load`s height exceeds 5.25 metres (17 feet 6 inches)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5259',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'How wide can a load be before you must use side markers?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '2.0 metres (6 feet 6 inches)',
                img: '',
            },
            {
                char: 'b',
                text: '2.9 metres (9 feet 5 inches)',
                img: '',
            },
            {
                char: 'c',
                text: '3.5 metres (11 feet 5 inches)',
                img: '',
            },
            {
                char: 'd',
                text: '4.3 metres (14 feet 2 inches)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5262',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Triangular projection markers are required when your load is wider than 2.9 metres (9 feet 5 inches). What colour are these markers?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Black/yellow',
                img: '',
            },
            {
                char: 'b',
                text: 'Red/yellow',
                img: '',
            },
            {
                char: 'c',
                text: 'Black/white',
                img: '',
            },
            {
                char: 'd',
                text: 'Red/white',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5341',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'How should you secure an ISO steel cargo container onto your vehicle or trailer?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Using battens and chocks',
                img: '',
            },
            {
                char: 'b',
                text: 'Using straps',
                img: '',
            },
            {
                char: 'c',
                text: 'Using twist locks',
                img: '',
            },
            {
                char: 'd',
                text: 'Using ropes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5342',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving an articulated lorry on a narrow road. There`s a left-hand bend ahead. Why may you need to move out before driving around the bend?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To leave more room for braking',
                img: '',
            },
            {
                char: 'b',
                text: 'To prevent anyone from overtaking',
                img: '',
            },
            {
                char: 'c',
                text: 'To make room for the trailer cutting in',
                img: '',
            },
            {
                char: 'd',
                text: 'To make sure oncoming drivers see you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6001 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: '626.2AV2.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Two-axled trailers are prohibited',
                img: '',
            },
            {
                char: 'b',
                text: 'The bridge is too narrow for vehicles over 7.5 tonnes',
                img: '',
            },
            {
                char: 'c',
                text: 'The bridge has an axle weight limit of 7.5 tonnes',
                img: '',
            },
            {
                char: 'd',
                text: 'Vehicles over the weight shown are prohibited',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6002',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4608a.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Slippery road',
                img: '',
            },
            {
                char: 'b',
                text: 'Double bend',
                img: '',
            },
            {
                char: 'c',
                text: 'Overhead electrified cable',
                img: '',
            },
            {
                char: 'd',
                text: 'Cable laying ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6003 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4575.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'No vehicles over 14 feet 6 inches (4.4 m) wide',
                img: '',
            },
            {
                char: 'b',
                text: 'No vehicles over 14 feet 6 inches (4.4 m) high ',
                img: '',
            },
            {
                char: 'c',
                text: 'Road humps 14 feet 6 inches (4.4 m) apart',
                img: '',
            },
            {
                char: 'd',
                text: 'No vehicles over 14 feet 6 inches (4.4 m) long',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6004 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign warn of?',
        questionImg: 'TS4548.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Low bridge ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'Incident ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'Tunnel ahead',
                img: '',
            },
            {
                char: 'd',
                text: 'Accident hotspot ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6005 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4547.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The length of a tunnel',
                img: '',
            },
            {
                char: 'b',
                text: 'The length of a low bridge',
                img: '',
            },
            {
                char: 'c',
                text: 'The distance to a tunnel',
                img: '',
            },
            {
                char: 'd',
                text: 'The distance to a low bridge',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6007',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'When must you take extra care if you`re driving a vehicle more than 3.0 metres (10 feet) high?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When driving over narrow bridges',
                img: '',
            },
            {
                char: 'b',
                text: 'When driving up steep hills',
                img: '',
            },
            {
                char: 'c',
                text: 'When driving near airports',
                img: '',
            },
            {
                char: 'd',
                text: 'When driving under overhead cables',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6009',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What`s the minimum height of an unmarked bridge?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '4.5 metres (15 feet)',
                img: '',
            },
            {
                char: 'b',
                text: '4.7 metres (15 feet 6 inches)',
                img: '',
            },
            {
                char: 'c',
                text: '4.8 metres (16 feet)',
                img: '',
            },
            {
                char: 'd',
                text: '5.0 metres (16 feet 6 inches)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6011',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'Who must you tell when your vehicle collides with a bridge?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The police',
                img: '',
            },
            {
                char: 'b',
                text: 'The local authority',
                img: '',
            },
            {
                char: 'c',
                text: 'Your local garage',
                img: '',
            },
            {
                char: 'd',
                text: 'The fire service',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD6012',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Your vehicle has collided with a railway bridge. What information must you give the railway authority when you telephone them?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The make and model of your vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'The type of bridge',
                img: '',
            },
            {
                char: 'c',
                text: 'The vehicle`s height',
                img: '',
            },
            {
                char: 'd',
                text: 'The bridge number',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6013 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What do bells hanging across the road warn drivers of?',
        questionImg: 'TS4542.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Weight restriction ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'Trams crossing ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'Overhead electric cables ahead',
                img: '',
            },
            {
                char: 'd',
                text: 'Railway level crossing ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6014 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4568.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The width of the road is 6 feet 6 inches (2 metres)',
                img: '',
            },
            {
                char: 'b',
                text: 'No vehicles over 6 feet 6 inches (2 metres) wide',
                img: '',
            },
            {
                char: 'c',
                text: 'No vehicles over 6 feet 6 inches (2 metres) high',
                img: '',
            },
            {
                char: 'd',
                text: 'Trailer length must not exceed 6 feet 6 inches (2 metres)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6016',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this motorway sign mean?',
        questionImg: 'TS4576.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '11 tonnes weight limit',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop: all lanes ahead closed',
                img: '',
            },
            {
                char: 'c',
                text: 'Leave the motorway at the next exit',
                img: '',
            },
            {
                char: 'd',
                text: 'Lane ahead closed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6017 ',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving on a motorway and you see this sign. What does it mean? ',
        questionImg: 'TS4522.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'End of restriction',
                img: '',
            },
            {
                char: 'b',
                text: 'End of crawler lane',
                img: '',
            },
            {
                char: 'c',
                text: 'End of weight limit',
                img: '',
            },
            {
                char: 'd',
                text: 'End of hard shoulder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6019',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'In which of these places might there be a restriction on vehicles over a certain length?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On motorways',
                img: '',
            },
            {
                char: 'b',
                text: 'At freight terminals',
                img: '',
            },
            {
                char: 'c',
                text: 'In road tunnels',
                img: '',
            },
            {
                char: 'd',
                text: 'On dual carriageways',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6021',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'At this roundabout, you want to take the fourth exit. What limit is in force on this road?',
        questionImg: 'TS4544.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Height ',
                img: '',
            },
            {
                char: 'b',
                text: 'Weight ',
                img: '',
            },
            {
                char: 'c',
                text: 'Width',
                img: '',
            },
            {
                char: 'd',
                text: 'Length\n',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6022',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a large vehicle on a narrow road with passing places. What will you need to be most aware of? ',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Its length',
                img: '',
            },
            {
                char: 'b',
                text: 'Its roof height',
                img: '',
            },
            {
                char: 'c',
                text: 'Its ground clearance',
                img: '',
            },
            {
                char: 'd',
                text: 'Its weight',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6026',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What type of road surface will increase your stopping distance by up to ten times?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Bumpy',
                img: '',
            },
            {
                char: 'b',
                text: 'Icy',
                img: '',
            },
            {
                char: 'c',
                text: 'Worn',
                img: '',
            },
            {
                char: 'd',
                text: 'Wet',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6027',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'By how much can your stopping distance increase in icy weather?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '2 times',
                img: '',
            },
            {
                char: 'b',
                text: '4 times',
                img: '',
            },
            {
                char: 'c',
                text: '10 times',
                img: '',
            },
            {
                char: 'd',
                text: '20 times',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6028',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What`s the maximum speed allowed for a vehicle towing a trailer on a motorway? ',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '40 mph',
                img: '',
            },
            {
                char: 'b',
                text: '50 mph',
                img: '',
            },
            {
                char: 'c',
                text: '60 mph',
                img: '',
            },
            {
                char: 'd',
                text: '70 mph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6043',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What should you check when you`ve just overtaken a motorcyclist on a motorway?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Your speedometer',
                img: '',
            },
            {
                char: 'b',
                text: 'Your left-hand mirror',
                img: '',
            },
            {
                char: 'c',
                text: 'Your right-hand mirror',
                img: '',
            },
            {
                char: 'd',
                text: 'The road ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6051',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a large vehicle in a straight line. When is it most stable?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'During harsh acceleration',
                img: '',
            },
            {
                char: 'b',
                text: 'During gentle braking',
                img: '',
            },
            {
                char: 'c',
                text: 'During gentle acceleration',
                img: '',
            },
            {
                char: 'd',
                text: 'During harsh braking',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6607 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4618.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Warning of lorry crossing a one-way road',
                img: '',
            },
            {
                char: 'b',
                text: 'No entry for vehicles over 32 feet \n6 inches (9.9 metres) long',
                img: '',
            },
            {
                char: 'c',
                text: 'No entry for vehicles over 32.6 tonnes',
                img: '',
            },
            {
                char: 'd',
                text: 'Warning of lorry straight ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6644',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a long vehicle. What should you do when you want to turn right at a painted mini-roundabout?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Make sure none of your wheels touch the roundabout',
                img: '',
            },
            {
                char: 'b',
                text: 'Avoid going over the roundabout if possible',
                img: '',
            },
            {
                char: 'c',
                text: 'Go ahead, and turn right at the next junction',
                img: '',
            },
            {
                char: 'd',
                text: 'Carefully mount the left-hand kerb to make more room',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6680',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What should you consider when planning a route for your journey?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Weight restrictions',
                img: '',
            },
            {
                char: 'b',
                text: 'Speed cameras',
                img: '',
            },
            {
                char: 'c',
                text: 'Speed-limit changes',
                img: '',
            },
            {
                char: 'd',
                text: 'One-way streets',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6681',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Your vehicle is more than 3 metres (9 feet 10 inches) high. Where is this information displayed?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On the windscreen',
                img: '',
            },
            {
                char: 'b',
                text: 'On the weight plate',
                img: '',
            },
            {
                char: 'c',
                text: 'In the driver`s cab',
                img: '',
            },
            {
                char: 'd',
                text: 'In the engine bay',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6682',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'The height of your vehicle is 4.2 metres \n(14 feet). What should you do as you approach this bridge?',
        questionImg: 'TS4511.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep to the centre of the arch and give way to oncoming traffic',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive through slowly, keeping to the left of the marked limits',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep to the centre of the arch and take priority over oncoming traffic',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive through quickly, keeping to the left of the marked limits',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6683',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Unless otherwise shown, what`s the minimum headroom under bridges in the UK?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '4.0 metres (13 feet)',
                img: '',
            },
            {
                char: 'b',
                text: '4.1 metres (13 feet 4 inches)',
                img: '',
            },
            {
                char: 'c',
                text: '5.0 metres (16 feet 6 inches)',
                img: '',
            },
            {
                char: 'd',
                text: '5.5 metres (18 feet)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6685',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Where can you park large vehicles at night without needing to use parking lights?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In an off-road parking area',
                img: '',
            },
            {
                char: 'b',
                text: 'On a road with a 20 mph speed limit',
                img: '',
            },
            {
                char: 'c',
                text: 'At least 10 metres (32 feet) away from any junction',
                img: '',
            },
            {
                char: 'd',
                text: 'In most lay-bys',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6758',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'When should you allow for the effects of a speed limiter?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you`re cornering',
                img: '',
            },
            {
                char: 'b',
                text: 'When you`re braking',
                img: '',
            },
            {
                char: 'c',
                text: 'When you`re overtaking',
                img: '',
            },
            {
                char: 'd',
                text: 'When you`re changing gear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6759',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'When should you consider the effect a speed limiter will have on your vehicle?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When braking',
                img: '',
            },
            {
                char: 'b',
                text: 'When changing gear',
                img: '',
            },
            {
                char: 'c',
                text: 'When overtaking',
                img: '',
            },
            {
                char: 'd',
                text: 'When reversing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7063',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4609.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Hump bridge',
                img: '',
            },
            {
                char: 'b',
                text: 'Risk of grounding',
                img: '',
            },
            {
                char: 'c',
                text: 'Uneven road',
                img: '',
            },
            {
                char: 'd',
                text: 'Road liable to subsidence',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7064',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What should be your main concern as you approach this sign?',
        questionImg: 'TS4598.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your vehicle`s height',
                img: '',
            },
            {
                char: 'b',
                text: 'Your vehicle`s width',
                img: '',
            },
            {
                char: 'c',
                text: 'Your vehicle`s weight',
                img: '',
            },
            {
                char: 'd',
                text: 'Your vehicle`s length',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7065',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a long vehicle on a two-lane road. What should you do if you want to turn left into a narrow side road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep well to the left on the approach',
                img: '',
            },
            {
                char: 'b',
                text: 'Move out to the right immediately before turning',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep to the left and turn later than normal',
                img: '',
            },
            {
                char: 'd',
                text: 'Straddle the lanes to make more room for the turn',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7066',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'Where must the repair of a speed limiter be carried out?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At an authorised speed-limiter centre',
                img: '',
            },
            {
                char: 'b',
                text: 'At any DVSA site',
                img: '',
            },
            {
                char: 'c',
                text: 'At any dealer centre',
                img: '',
            },
            {
                char: 'd',
                text: 'At the depot by a mechanic',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7355',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'Where can the axle weight limits be found?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On the vehicle plate',
                img: '',
            },
            {
                char: 'b',
                text: 'On the operator`s licence',
                img: '',
            },
            {
                char: 'c',
                text: 'On the wheel rims',
                img: '',
            },
            {
                char: 'd',
                text: 'On the weighbridge printout',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8003',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'By approximately how much would 15 passengers increase the weight of your vehicle?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '0.5 tonnes',
                img: '',
            },
            {
                char: 'b',
                text: '1 tonne',
                img: '',
            },
            {
                char: 'c',
                text: '2.5 tonnes',
                img: '',
            },
            {
                char: 'd',
                text: '3 tonnes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8004',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'As a guide, how many passengers equal 1 tonne?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '15',
                img: '',
            },
            {
                char: 'b',
                text: '20',
                img: '',
            },
            {
                char: 'c',
                text: '25',
                img: '',
            },
            {
                char: 'd',
                text: '30',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8005',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'How would you know that a weight-limit sign doesn`t apply to the bus you`re driving?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By a plate fitted beneath the weight-limit sign',
                img: '',
            },
            {
                char: 'b',
                text: 'By the colour of the weight-limit sign',
                img: '',
            },
            {
                char: 'c',
                text: 'By a plate attached to the vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'By a certificate carried by the driver',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8008 ',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a bus on a local service. When can you use this lane?',
        questionImg: 'TS4732.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Between 4.00 pm and 6.30 pm only',
                img: '',
            },
            {
                char: 'b',
                text: 'Before 4.00 pm and after 6.30 pm only',
                img: '',
            },
            {
                char: 'c',
                text: 'At any time of the day',
                img: '',
            },
            {
                char: 'd',
                text: 'Any time except Saturdays',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8009',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What`s the national speed limit for buses and coaches on a dual carriageway?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '55 mph',
                img: '',
            },
            {
                char: 'b',
                text: '60 mph',
                img: '',
            },
            {
                char: 'c',
                text: '65 mph',
                img: '',
            },
            {
                char: 'd',
                text: '70 mph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8176',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does a D1 category licence allow you to drive?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Buses with a maximum of 16 passenger seats',
                img: '',
            },
            {
                char: 'b',
                text: 'Buses with a maximum of 24 passenger seats',
                img: '',
            },
            {
                char: 'c',
                text: 'Buses with a maximum of 32 passenger seats',
                img: '',
            },
            {
                char: 'd',
                text: 'Buses with a maximum of 48 passenger seats',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8198',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Where can a driver find their vehicle`s unladen weight recorded?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On the dashboard of the vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'On the driver`s duty roster',
                img: '',
            },
            {
                char: 'c',
                text: 'On the side of the vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'On the depot noticeboard ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8201',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What category of licence is required to drive an articulated bus?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'D',
                img: '',
            },
            {
                char: 'b',
                text: 'DE',
                img: '',
            },
            {
                char: 'c',
                text: 'D1',
                img: '',
            },
            {
                char: 'd',
                text: 'D1E',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8202',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'The front of your bus overhangs well past the front wheels. Why should you allow for this when cornering?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The steering will be much heavier',
                img: '',
            },
            {
                char: 'b',
                text: 'Your speed will be more difficult to control',
                img: '',
            },
            {
                char: 'c',
                text: 'You might hit something close to the road',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll need to brake earlier than normal',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8225',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Your bus has a speed limiter fitted. What other related item must it have?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'An audible warning device for the driver',
                img: '',
            },
            {
                char: 'b',
                text: 'A plate in the cab showing the limited speed',
                img: '',
            },
            {
                char: 'c',
                text: 'A warning sign on the back of the bus',
                img: '',
            },
            {
                char: 'd',
                text: 'A manual override switch for emergencies',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8244',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'A speed limiter is fitted to a bus. Where must the speed-limiter setting be displayed?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In the driver`s cab',
                img: '',
            },
            {
                char: 'b',
                text: 'On the nearside of the vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'On the rear of the vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'On the driver`s side at the front of the vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8270',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does the term `maximum authorised mass` (MAM) mean?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The maximum permissible weight of your vehicle, with passengers but no luggage',
                img: '',
            },
            {
                char: 'b',
                text: 'The maximum permissible weight of your vehicle, without passengers or luggage',
                img: '',
            },
            {
                char: 'c',
                text: 'The maximum permissible weight of your vehicle, with luggage but no passengers',
                img: '',
            },
            {
                char: 'd',
                text: 'The maximum permissible weight of your vehicle, with both luggage and passengers',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8271',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'How do speed limiters normally work?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'By applying the service brake ',
                img: '',
            },
            {
                char: 'b',
                text: 'By applying the secondary brake',
                img: '',
            },
            {
                char: 'c',
                text: 'By reducing the fuel supplied to the engine',
                img: '',
            },
            {
                char: 'd',
                text: 'By changing to a lower or higher gear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8319',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What`s a vehicle`s turning circle?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The number of turns of the steering wheel between locks',
                img: '',
            },
            {
                char: 'b',
                text: 'The amount of space needed for the vehicle to turn',
                img: '',
            },
            {
                char: 'c',
                text: 'The amount by which the vehicle overhangs kerbs',
                img: '',
            },
            {
                char: 'd',
                text: 'The distance by which a vehicle cuts corners',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5035',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'Why are goods vehicle drivers` hours of work controlled?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To encourage vehicle sympathy',
                img: '',
            },
            {
                char: 'b',
                text: 'To help road safety',
                img: '',
            },
            {
                char: 'c',
                text: 'To ensure fair road use',
                img: '',
            },
            {
                char: 'd',
                text: 'To improve vehicle security',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5036',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What does controlling goods vehicle drivers` hours help to improve?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Fuel economy',
                img: '',
            },
            {
                char: 'b',
                text: 'Road safety',
                img: '',
            },
            {
                char: 'c',
                text: 'Traffic calming',
                img: '',
            },
            {
                char: 'd',
                text: 'Journey planning',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5037',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What must you do when driving under the rules for domestic drivers` hours?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep a written record of hours worked',
                img: '',
            },
            {
                char: 'b',
                text: 'Only record any driving off public roads',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep a written record of driving time only',
                img: '',
            },
            {
                char: 'd',
                text: 'Always use a vehicle fitted with a tachograph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5041',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You must have enough tachograph charts with you for your journey. When do you need to start a new chart?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Every 10 hours',
                img: '',
            },
            {
                char: 'b',
                text: 'Every 24 hours',
                img: '',
            },
            {
                char: 'c',
                text: 'Every 36 hours',
                img: '',
            },
            {
                char: 'd',
                text: 'Every 48 hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5042',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What period of time does one tachograph chart cover?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '24 hours',
                img: '',
            },
            {
                char: 'b',
                text: '48 hours',
                img: '',
            },
            {
                char: 'c',
                text: '5 days',
                img: '',
            },
            {
                char: 'd',
                text: '7 days',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5044',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if your tachograph chart becomes dirty or damaged?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue with the same chart and enter the details in writing',
                img: '',
            },
            {
                char: 'b',
                text: 'Use a spare chart and destroy the damaged one',
                img: '',
            },
            {
                char: 'c',
                text: 'Use a spare chart and attach it to the damaged one',
                img: '',
            },
            {
                char: 'd',
                text: 'Continue to use the chart',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5045',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'During your break, your vehicle will be moved by another person. What should you do with the tachograph chart?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Leave the chart in the vehicle and record the changes on the back',
                img: '',
            },
            {
                char: 'b',
                text: 'Put in a new chart on your return to the vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch to rest mode to record the break',
                img: '',
            },
            {
                char: 'd',
                text: 'Remove the chart and make a manual record of the break period',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5047',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`ve been driving a lorry without a break for four-and-a-half hours. Under EU rules, you must now take a break. How long must this break be?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '30 minutes',
                img: '',
            },
            {
                char: 'b',
                text: '35 minutes',
                img: '',
            },
            {
                char: 'c',
                text: '40 minutes',
                img: '',
            },
            {
                char: 'd',
                text: '45 minutes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5049',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving a lorry on a motorway and you start to feel drowsy. What should you do when there are no service areas or exits for some distance?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder and rest',
                img: '',
            },
            {
                char: 'b',
                text: 'Open the window and turn down the heating',
                img: '',
            },
            {
                char: 'c',
                text: 'Slow down and use the hazard warning lights',
                img: '',
            },
            {
                char: 'd',
                text: 'Increase your speed to get to the next service area sooner',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5050',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving a lorry. During the journey you begin to feel ill and are unable to concentrate. What should you do?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop in a safe place and seek help',
                img: '',
            },
            {
                char: 'b',
                text: 'Continue your journey and keep your windows open',
                img: '',
            },
            {
                char: 'c',
                text: 'Increase your speed to finish your work earlier',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep stopping at regular intervals for rest',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5051',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What should you do to prevent your load from being stolen?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Give a lift to a stranger',
                img: '',
            },
            {
                char: 'b',
                text: 'Make sure all doors and windows are locked',
                img: '',
            },
            {
                char: 'c',
                text: 'Discuss your load with members of the public',
                img: '',
            },
            {
                char: 'd',
                text: 'Have wind deflectors fitted',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5052',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'How can you reduce the likelihood of theft of your load when leaving your vehicle overnight?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Park with the rear doors close to another vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'Park with the rear doors well away from another vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'Park with the front doors well away from another vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Park with the front doors close to another vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5055',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What security precautions should you take if you`re carrying a high-value load and have to park and sleep overnight in the cab?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Lock the doors but leave a window open for ventilation',
                img: '',
            },
            {
                char: 'b',
                text: 'Make sure the doors and windows are secure',
                img: '',
            },
            {
                char: 'c',
                text: 'Stay at the same location regularly',
                img: '',
            },
            {
                char: 'd',
                text: 'Park in a quiet, unlit, non-residential area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5056',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re often involved in the carrying of high-value goods. What security measures can you adopt?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Vary your routes and rest stops',
                img: '',
            },
            {
                char: 'b',
                text: 'Always discuss details of your load',
                img: '',
            },
            {
                char: 'c',
                text: 'Give lifts to anyone for added security',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep your journeys to a strict routine',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5201',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Where should you park your trailer if you have to leave it unattended?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'In a public car park',
                img: '',
            },
            {
                char: 'b',
                text: 'On the public highway',
                img: '',
            },
            {
                char: 'c',
                text: 'On secure premises',
                img: '',
            },
            {
                char: 'd',
                text: 'In a quiet residential area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5203',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'When should your trailer be fitted with a kingpin or drawbar lock?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When it`s being driven on a motorway',
                img: '',
            },
            {
                char: 'b',
                text: 'When it`s being driven abroad',
                img: '',
            },
            {
                char: 'c',
                text: 'When it`s being used partially loaded',
                img: '',
            },
            {
                char: 'd',
                text: 'When it`s left unattended',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5263',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Before starting driving, which of the following should you complete on the centre field of your tachograph chart?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The starting point of your day`s journey',
                img: '',
            },
            {
                char: 'b',
                text: 'Details of the goods carried',
                img: '',
            },
            {
                char: 'c',
                text: 'The name and address of your employer',
                img: '',
            },
            {
                char: 'd',
                text: 'The amount of daily rest taken prior to starting the shift',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5335',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'During your working day, you change to another vehicle with the same type of tachograph. How should you keep your tachograph record up-to-date?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the chart that`s already in the other vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'Take the chart with you and use it in the other vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'Record your driving hours in a record book',
                img: '',
            },
            {
                char: 'd',
                text: 'Install a new chart in the other vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5339',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Which of the following is good practice in keeping your lorry and its load safe?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Parking in a quiet area, out \nof sight',
                img: '',
            },
            {
                char: 'b',
                text: 'Making sure the back doors are accessible',
                img: '',
            },
            {
                char: 'c',
                text: 'Parking in a well-lit lorry park',
                img: '',
            },
            {
                char: 'd',
                text: 'Showing your papers to anyone who stops you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5344',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving a lorry at night. What can you do to help yourself stay alert?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Eat a heavy meal before setting off',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep plenty of cool, fresh air moving through the cab',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep the cab warm and comfortable',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive faster to get to your destination sooner',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5345',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'How can you reduce the risk of your lorry or trailer being stolen?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Fit an alarm and immobiliser',
                img: '',
            },
            {
                char: 'b',
                text: 'Park alongside another vehicle or a wall',
                img: '',
            },
            {
                char: 'c',
                text: 'Use the same route and stop in the same places for your rest periods',
                img: '',
            },
            {
                char: 'd',
                text: 'Park in quiet areas, away from other vehicles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5346',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re planning to carry high-value goods on a regular basis. Whose advice should you seek?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Other drivers in your area ',
                img: '',
            },
            {
                char: 'b',
                text: 'Your local crime-prevention officer',
                img: '',
            },
            {
                char: 'c',
                text: 'Other operators in your area',
                img: '',
            },
            {
                char: 'd',
                text: 'Your local road-safety officer',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5347',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What period of time makes up a driver`s week?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '00.00 hours Monday to 24.00 hours the following Sunday',
                img: '',
            },
            {
                char: 'b',
                text: '00.00 hours Sunday to 24.00 hours the following Saturday',
                img: '',
            },
            {
                char: 'c',
                text: 'Any 7 consecutive days',
                img: '',
            },
            {
                char: 'd',
                text: 'Any 56 hours driven',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5466',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'While you`re driving, you notice your tachograph isn`t working. What should you do?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop immediately and don`t drive until it`s been repaired',
                img: '',
            },
            {
                char: 'b',
                text: 'Report it to the nearest police station ',
                img: '',
            },
            {
                char: 'c',
                text: 'Phone the vehicle testing authority and report the fault ',
                img: '',
            },
            {
                char: 'd',
                text: 'Continue your journey but make a manual record',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6071',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What can happen to drivers who break EU tachograph regulations?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They can be given three warnings',
                img: '',
            },
            {
                char: 'b',
                text: 'They can have their passport withdrawn',
                img: '',
            },
            {
                char: 'c',
                text: 'They can be heavily fined',
                img: '',
            },
            {
                char: 'd',
                text: 'They can be let off if they`re new to using tachographs',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6072 ',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What must you do when using a vehicle fitted with an analogue tachograph?',
        questionImg: 'VI4010.tif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Carry enough approved charts',
                img: '',
            },
            {
                char: 'b',
                text: 'Use damaged charts if they`re clean',
                img: '',
            },
            {
                char: 'c',
                text: 'Use dirty charts if they`re undamaged',
                img: '',
            },
            {
                char: 'd',
                text: 'Reuse charts twice',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6075',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'The analogue tachograph on your vehicle becomes faulty. How long do you have before you must have it repaired?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'One day',
                img: '',
            },
            {
                char: 'b',
                text: 'Three days',
                img: '',
            },
            {
                char: 'c',
                text: 'One week',
                img: '',
            },
            {
                char: 'd',
                text: 'Two weeks',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6076',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'An enforcement officer keeps one of your tachograph charts. Who should sign the back of the replacement chart?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You, the driver',
                img: '',
            },
            {
                char: 'b',
                text: 'Your transport manager',
                img: '',
            },
            {
                char: 'c',
                text: 'The vehicle owner',
                img: '',
            },
            {
                char: 'd',
                text: 'The officer',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6077',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'An enforcement officer keeps your analogue tachograph records. How should they endorse the replacement charts?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'With their name',
                img: '',
            },
            {
                char: 'b',
                text: 'With their service number',
                img: '',
            },
            {
                char: 'c',
                text: 'With their home address',
                img: '',
            },
            {
                char: 'd',
                text: 'With their date of birth',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6079',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'Why should you carry spare tachograph charts?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'As a defence against a speeding prosecution',
                img: '',
            },
            {
                char: 'b',
                text: 'To record when you`ve been in a traffic delay',
                img: '',
            },
            {
                char: 'c',
                text: 'For recording extra loading duties and overtime',
                img: '',
            },
            {
                char: 'd',
                text: 'To replace the original chart if it gets dirty',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6083',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, a driver must take regular breaks from driving. What maximum period of continuous driving is allowed?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '3 hours',
                img: '',
            },
            {
                char: 'b',
                text: '4 hours',
                img: '',
            },
            {
                char: 'c',
                text: '4.5 hours',
                img: '',
            },
            {
                char: 'd',
                text: '5.5 hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6084',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`ve been driving non-stop since 5.00 am. The time is now 9.30 am. Under EU rules, what length of break must you take?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'At least 15 minutes',
                img: '',
            },
            {
                char: 'b',
                text: 'At least 30 minutes',
                img: '',
            },
            {
                char: 'c',
                text: 'At least 45 minutes',
                img: '',
            },
            {
                char: 'd',
                text: 'At least 60 minutes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6088',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, what`s the maximum daily driving time allowed?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '9 hours, extended to 11 hours on three days of the week',
                img: '',
            },
            {
                char: 'b',
                text: '10 hours, extended to 11 hours on two days of the week',
                img: '',
            },
            {
                char: 'c',
                text: '9 hours, extended to 10 hours on two days of the week',
                img: '',
            },
            {
                char: 'd',
                text: '10 hours, extended to 11 hours on three days of the week',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6090',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, your minimum daily rest is 11 hours. On three days of the week this may be reduced to what length of time?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '7 hours',
                img: '',
            },
            {
                char: 'b',
                text: '8 hours',
                img: '',
            },
            {
                char: 'c',
                text: '9 hours',
                img: '',
            },
            {
                char: 'd',
                text: '10 hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6091',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, your daily rest can be reduced to 9 hours. For how many times between weekly rest periods is this allowed?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Once',
                img: '',
            },
            {
                char: 'b',
                text: 'Twice',
                img: '',
            },
            {
                char: 'c',
                text: 'Three times',
                img: '',
            },
            {
                char: 'd',
                text: 'Four times',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6092',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, how long should your normal daily rest period be?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '8 hours',
                img: '',
            },
            {
                char: 'b',
                text: '11 hours',
                img: '',
            },
            {
                char: 'c',
                text: '13 hours',
                img: '',
            },
            {
                char: 'd',
                text: '14 hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6093',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, what`s the normal weekly rest period that must be taken?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '40 hours',
                img: '',
            },
            {
                char: 'b',
                text: '41 hours',
                img: '',
            },
            {
                char: 'c',
                text: '42 hours',
                img: '',
            },
            {
                char: 'd',
                text: '45 hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6095',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'A vehicle fitted with an analogue tachograph has two drivers. How should they use the tachograph?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Share the same tachograph chart',
                img: '',
            },
            {
                char: 'b',
                text: 'Use a separate tachograph chart for every driving period',
                img: '',
            },
            {
                char: 'c',
                text: 'Use their own tachograph chart',
                img: '',
            },
            {
                char: 'd',
                text: 'Not use the tachograph for such duties',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6096',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re making a journey with a co-driver. When the other person is driving, how should you show this time? ',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'As a daily rest period',
                img: '',
            },
            {
                char: 'b',
                text: 'As a weekly rest period',
                img: '',
            },
            {
                char: 'c',
                text: 'As a break in daily driving',
                img: '',
            },
            {
                char: 'd',
                text: 'As driving time',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6097',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What does a tachograph record?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Load weight',
                img: '',
            },
            {
                char: 'b',
                text: 'Driving time',
                img: '',
            },
            {
                char: 'c',
                text: 'Fuel consumption',
                img: '',
            },
            {
                char: 'd',
                text: 'Engine temperature',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6099 ',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Which symbol on your tachograph shows your break/rest period?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'VI4008.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'VI4009.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'VI4007.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'VI4006.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6100 ',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What does this tachograph chart symbol mean?',
        questionImg: 'VI4008.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Driver at rest',
                img: '',
            },
            {
                char: 'b',
                text: 'Chart not required',
                img: '',
            },
            {
                char: 'c',
                text: 'Other work',
                img: '',
            },
            {
                char: 'd',
                text: 'Driving',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6102',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What is the `mode` switch on a tachograph used to record?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Who`s driving',
                img: '',
            },
            {
                char: 'b',
                text: 'Illness',
                img: '',
            },
            {
                char: 'c',
                text: 'Weekly rest periods',
                img: '',
            },
            {
                char: 'd',
                text: 'Other work',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6106',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'At the end of your working week, you`ve driven a total of 56 hours. Under EU rules, what`s the maximum number of hours you can drive in the following week?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '34',
                img: '',
            },
            {
                char: 'b',
                text: '36',
                img: '',
            },
            {
                char: 'c',
                text: '38',
                img: '',
            },
            {
                char: 'd',
                text: '40',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6107',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Your vehicle is fitted with an analogue tachograph. What should you do if you need to exceed the normal drivers` hours due to an emergency?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Continue using the same tachograph chart and write an explanation on the back',
                img: '',
            },
            {
                char: 'b',
                text: 'Remove the tachograph chart and make a manual record of the rest of the journey',
                img: '',
            },
            {
                char: 'c',
                text: 'Continue using the same tachograph chart, without any explanation or record',
                img: '',
            },
            {
                char: 'd',
                text: 'Remove the tachograph chart and tell your employer the reason',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6110',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What`s most likely to cause tiredness?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Making frequent and regular stops',
                img: '',
            },
            {
                char: 'b',
                text: 'Taking driving breaks on board the vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'Having insufficient breaks from driving',
                img: '',
            },
            {
                char: 'd',
                text: 'Using vehicles with automatic gearboxes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6112',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if you start to feel tired or unable to concentrate while you`re driving?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop as soon as it`s safe to do so',
                img: '',
            },
            {
                char: 'b',
                text: 'Wind down a window and carry on',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch on the radio and complete your journey',
                img: '',
            },
            {
                char: 'd',
                text: 'Speed up to get to your destination sooner',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6113',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if you feel tired after driving for two-and-a-half hours?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Slow down to a safer speed',
                img: '',
            },
            {
                char: 'b',
                text: 'Reduce your planned driving time to three hours',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop as soon as it`s safe to do so',
                img: '',
            },
            {
                char: 'd',
                text: 'Take a less busy route',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6114',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if you suddenly become tired while you`re driving on a motorway?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder and rest',
                img: '',
            },
            {
                char: 'b',
                text: 'Leave by the next exit and find a place to stop',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop on the next slip road and rest',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop on the verge of the motorway and rest',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6115',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Where can you stop if you feel tired while you`re driving on a motorway?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On the hard shoulder',
                img: '',
            },
            {
                char: 'b',
                text: 'At a service station',
                img: '',
            },
            {
                char: 'c',
                text: 'On a slip road',
                img: '',
            },
            {
                char: 'd',
                text: 'In a deceleration lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6116',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if you have to leave your vehicle unattended for a very short time?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Leave a note in the window explaining you`ll be back soon',
                img: '',
            },
            {
                char: 'b',
                text: 'Leave the keys available in case of obstruction',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep the engine running but lock the doors',
                img: '',
            },
            {
                char: 'd',
                text: 'Secure the vehicle and lock the doors',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6594',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'The time is 10.00 am. You`ve been driving non-stop since 6.00 am. Under EU rules, what`s the longest you may now drive without a break?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '15 minutes',
                img: '',
            },
            {
                char: 'b',
                text: '30 minutes',
                img: '',
            },
            {
                char: 'c',
                text: '40 minutes',
                img: '',
            },
            {
                char: 'd',
                text: '45 minutes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6595',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, you may drive for up to nine hours a day. What maximum may this be increased to on two days of the week?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '9.5 hours',
                img: '',
            },
            {
                char: 'b',
                text: '10 hours',
                img: '',
            },
            {
                char: 'c',
                text: '11 hours',
                img: '',
            },
            {
                char: 'd',
                text: '11.5 hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7107',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, you can drive for a maximum of nine hours a day. On how many days each week can this be extended to 10 hours?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'One day',
                img: '',
            },
            {
                char: 'b',
                text: 'Two days',
                img: '',
            },
            {
                char: 'c',
                text: 'Three days',
                img: '',
            },
            {
                char: 'd',
                text: 'Four days',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7283',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'How many days does a driver card normally cover?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '7',
                img: '',
            },
            {
                char: 'b',
                text: '14',
                img: '',
            },
            {
                char: 'c',
                text: '21',
                img: '',
            },
            {
                char: 'd',
                text: '28',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7289',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU drivers` hours regulations, a 45-minute break must be taken after 4.5 hours of driving. What shorter breaks can this be split into?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'One of 10 minutes, plus one of 35 ',
                img: '',
            },
            {
                char: 'b',
                text: 'One of 15 minutes, plus one of 30 ',
                img: '',
            },
            {
                char: 'c',
                text: 'One of 20 minutes, plus one of 25 ',
                img: '',
            },
            {
                char: 'd',
                text: 'One of 40 minutes, plus one of 5 ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7291',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving under EU tachograph regulations and lose your driver card. When must you inform the relevant authority?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Within 5 days',
                img: '',
            },
            {
                char: 'b',
                text: 'Within 7 days',
                img: '',
            },
            {
                char: 'c',
                text: 'Within 14 days',
                img: '',
            },
            {
                char: 'd',
                text: 'Within 28 days',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7292',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'How long is a digital tachograph driver card valid?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'One year',
                img: '',
            },
            {
                char: 'b',
                text: 'Three years',
                img: '',
            },
            {
                char: 'c',
                text: 'Five years',
                img: '',
            },
            {
                char: 'd',
                text: 'Ten years',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7293',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Which authority must you contact if your tachograph card is lost or stolen?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The police',
                img: '',
            },
            {
                char: 'b',
                text: 'The Driver and Vehicle Licensing Agency',
                img: '',
            },
            {
                char: 'c',
                text: 'A tachograph centre',
                img: '',
            },
            {
                char: 'd',
                text: 'The Driver and Vehicle Standards Agency',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7294',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'Where can you get a replacement driver tachograph card?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The Driver and Vehicle Licensing Agency',
                img: '',
            },
            {
                char: 'b',
                text: 'The Driver and Vehicle Standards Agency',
                img: '',
            },
            {
                char: 'c',
                text: 'Any MOT test centre',
                img: '',
            },
            {
                char: 'd',
                text: 'A tachograph centre',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7298',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'A driver is convicted of obstructing an enforcement officer in the course of their duties. Under EU drivers` hours regulations, what`s the maximum fine they can receive?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Unlimited',
                img: '',
            },
            {
                char: 'b',
                text: '�3000',
                img: '',
            },
            {
                char: 'c',
                text: '�4000',
                img: '',
            },
            {
                char: 'd',
                text: '�5000',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7336',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'When are you allowed to alter your tachograph record?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'If there are two or more drivers',
                img: '',
            },
            {
                char: 'b',
                text: 'If your journey is over 50 miles',
                img: '',
            },
            {
                char: 'c',
                text: 'At no time',
                img: '',
            },
            {
                char: 'd',
                text: 'When you have no spare charts',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7338',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving under EU drivers` hours. How is a week defined under these rules?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Between 00.00 hours on Monday and 24.00 hours the following Sunday',
                img: '',
            },
            {
                char: 'b',
                text: 'Any seven-day period',
                img: '',
            },
            {
                char: 'c',
                text: 'Between 00.00 hours and 24.00 hours six days later',
                img: '',
            },
            {
                char: 'd',
                text: 'A working period of 56 hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7339',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Which type of digital tachograph card is used by an approved calibration centre when they`re recalibrating the tachograph?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Control card',
                img: '',
            },
            {
                char: 'b',
                text: 'Company card',
                img: '',
            },
            {
                char: 'c',
                text: 'Driver card',
                img: '',
            },
            {
                char: 'd',
                text: 'Workshop card',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7340',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Which digital tachograph card is only available to enforcement authorities?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Control card',
                img: '',
            },
            {
                char: 'b',
                text: 'CPC card',
                img: '',
            },
            {
                char: 'c',
                text: 'Company card',
                img: '',
            },
            {
                char: 'd',
                text: 'Workshop card ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7347',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Drivers must have a driver card for use in digital tachographs. Where can you obtain a replacement driver card in Great Britain?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The Driver and Vehicle Licensing Agency',
                img: '',
            },
            {
                char: 'b',
                text: 'National Highways',
                img: '',
            },
            {
                char: 'c',
                text: 'A tachograph calibration centre',
                img: '',
            },
            {
                char: 'd',
                text: 'The Post Office',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7368',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Who`s responsible for the issue of tachograph charts to a bus or lorry driver?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The driver`s employer',
                img: '',
            },
            {
                char: 'b',
                text: 'The Driver and Vehicle Standards Agency',
                img: '',
            },
            {
                char: 'c',
                text: 'The authorised calibration centre',
                img: '',
            },
            {
                char: 'd',
                text: 'The local MOT testing centre',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7369',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'How can you find out when an analogue tachograph was last recalibrated?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'From a date on the tachograph chart',
                img: '',
            },
            {
                char: 'b',
                text: 'By contacting the vehicle`s manufacturer',
                img: '',
            },
            {
                char: 'c',
                text: 'By checking the vehicle`s service record',
                img: '',
            },
            {
                char: 'd',
                text: 'From a plaque on or near the tachograph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7370',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'When must an analogue tachograph be recalibrated?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Every two years',
                img: '',
            },
            {
                char: 'b',
                text: 'Every four years',
                img: '',
            },
            {
                char: 'c',
                text: 'Every six years',
                img: '',
            },
            {
                char: 'd',
                text: 'Every eight years',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7371',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Your vehicle breaks down during a journey. You continue by driving in another vehicle with the same type of tachograph. What must you do with your tachograph chart?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Leave it in the broken-down vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'Take it with you for security, but use a new chart in the new vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'Telephone the testing authority for permission to drive without a chart',
                img: '',
            },
            {
                char: 'd',
                text: 'Take it with you, and use it in the new vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7380',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, what`s the maximum driving time allowed in any two consecutive weeks?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '85 hours',
                img: '',
            },
            {
                char: 'b',
                text: '90 hours',
                img: '',
            },
            {
                char: 'c',
                text: '100 hours',
                img: '',
            },
            {
                char: 'd',
                text: '105 hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7387',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'How often must an analogue tachograph be checked at an approved calibration centre?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Every year',
                img: '',
            },
            {
                char: 'b',
                text: 'Every two years ',
                img: '',
            },
            {
                char: 'c',
                text: 'Every five years',
                img: '',
            },
            {
                char: 'd',
                text: 'Every six years',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8012',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving a bus with 18 seats on an excursion from London to Scotland. Which drivers` hours rules should you use?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'AETR only',
                img: '',
            },
            {
                char: 'b',
                text: 'Domestic',
                img: '',
            },
            {
                char: 'c',
                text: 'EU only',
                img: '',
            },
            {
                char: 'd',
                text: 'EU and AETR',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8013',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'After driving continuously for the maximum period under EU rules, a bus driver must take a break. What`s the minimum duration of this break?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '15 minutes',
                img: '',
            },
            {
                char: 'b',
                text: '30 minutes',
                img: '',
            },
            {
                char: 'c',
                text: '45 minutes',
                img: '',
            },
            {
                char: 'd',
                text: '60 minutes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8014',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'When may a driver take their rest period in a parked vehicle?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'If it`s fitted with a bunk',
                img: '',
            },
            {
                char: 'b',
                text: 'If a smoke alarm is fitted',
                img: '',
            },
            {
                char: 'c',
                text: 'If the vehicle`s in an authorised coach park',
                img: '',
            },
            {
                char: 'd',
                text: 'If there are no passengers on board',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8015',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if you`re asked to leave your bus by an official who isn`t in uniform?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Comply with the request',
                img: '',
            },
            {
                char: 'b',
                text: 'Ask to see a warrant card',
                img: '',
            },
            {
                char: 'c',
                text: 'Refuse to leave the vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Invite the official aboard',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8016',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What must the driver do when they leave their bus unattended?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check that the tachograph chart is removed',
                img: '',
            },
            {
                char: 'b',
                text: 'Check that the gear lever is in reverse',
                img: '',
            },
            {
                char: 'c',
                text: 'Check that the gear lever is in first ',
                img: '',
            },
            {
                char: 'd',
                text: 'Check that the parking brake is applied',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8338',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'When are bus operators required to use tachographs for regular journeys?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When the journey is more than 10 km',
                img: '',
            },
            {
                char: 'b',
                text: 'When the journey is more than 20 km',
                img: '',
            },
            {
                char: 'c',
                text: 'When the journey is more than 50 km',
                img: '',
            },
            {
                char: 'd',
                text: 'When the journey is more than 80 km',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5266',
        topicCode: 'Braking systems ',
        question:
            'When is trailer swing most likely to occur on a lorry and drawbar combination?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'While you`re braking on a bend',
                img: '',
            },
            {
                char: 'b',
                text: 'While you`re using an endurance brake',
                img: '',
            },
            {
                char: 'c',
                text: 'While you`re steering at slow speed and fully loaded',
                img: '',
            },
            {
                char: 'd',
                text: 'While you`re moving off at an angle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5267',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with a `diff-lock`. When would you normally use it?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'While driving on straight roads',
                img: '',
            },
            {
                char: 'b',
                text: 'While towing an empty trailer',
                img: '',
            },
            {
                char: 'c',
                text: 'While driving on muddy construction sites',
                img: '',
            },
            {
                char: 'd',
                text: 'While uncoupling a trailer',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5288',
        topicCode: 'Braking systems ',
        question:
            'What colour is the auxiliary line on a three-line braking system?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Red',
                img: '',
            },
            {
                char: 'b',
                text: 'Blue',
                img: '',
            },
            {
                char: 'c',
                text: 'Green',
                img: '',
            },
            {
                char: 'd',
                text: 'Yellow',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5289',
        topicCode: 'Braking systems ',
        question:
            'The emergency line is common to both two-line and three-line brake systems. What colour is it?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Red',
                img: '',
            },
            {
                char: 'b',
                text: 'Blue',
                img: '',
            },
            {
                char: 'c',
                text: 'Black',
                img: '',
            },
            {
                char: 'd',
                text: 'Yellow',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5290',
        topicCode: 'Braking systems ',
        question:
            'Air-brake systems usually have two lines. Which additional line is fitted on a three-line system?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Emergency',
                img: '',
            },
            {
                char: 'b',
                text: 'Service',
                img: '',
            },
            {
                char: 'c',
                text: 'Electrical',
                img: '',
            },
            {
                char: 'd',
                text: 'Auxiliary',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5291',
        topicCode: 'Braking systems ',
        question:
            'In frosty weather, what precaution could a lorry driver take to prevent moisture from freezing in the air-brake system?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drain the air tanks daily',
                img: '',
            },
            {
                char: 'b',
                text: 'Cover the air tanks with a blanket',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep the engine at high revs when starting',
                img: '',
            },
            {
                char: 'd',
                text: 'Pump the brakes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5293',
        topicCode: 'Braking systems ',
        question: 'How can a lorry driver avoid brake fade?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Ensure that the air tanks are drained before journeys',
                img: '',
            },
            {
                char: 'b',
                text: 'Check that the air pressure is correct',
                img: '',
            },
            {
                char: 'c',
                text: 'Make sure that the parking brake is applied before stopping',
                img: '',
            },
            {
                char: 'd',
                text: 'Select an appropriate gear before downhill gradients',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5294',
        topicCode: 'Braking systems ',
        question: 'When are exhaust brakes most efficient?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At high engine speed, while in low gears',
                img: '',
            },
            {
                char: 'b',
                text: 'At low engine speed, while in high gears',
                img: '',
            },
            {
                char: 'c',
                text: 'During stop/start town work',
                img: '',
            },
            {
                char: 'd',
                text: 'While travelling at a constant speed on a motorway',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5295',
        topicCode: 'Braking systems ',
        question: 'What`s the principal braking system on a lorry called?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The endurance brake',
                img: '',
            },
            {
                char: 'b',
                text: 'The service brake',
                img: '',
            },
            {
                char: 'c',
                text: 'The parking brake',
                img: '',
            },
            {
                char: 'd',
                text: 'The jake brake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5299',
        topicCode: 'Braking systems ',
        question:
            'You`re driving an articulated lorry. What could happen if you change to a lower gear while you`re going too fast?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The vehicle could jack-knife',
                img: '',
            },
            {
                char: 'b',
                text: 'The engine could stall',
                img: '',
            },
            {
                char: 'c',
                text: 'The brakes could fail',
                img: '',
            },
            {
                char: 'd',
                text: 'The trailer could uncouple',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5300',
        topicCode: 'Braking systems ',
        question:
            'When is an articulated vehicle most at risk of jack-knifing?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When it`s fitted with an endurance brake (retarder)',
                img: '',
            },
            {
                char: 'b',
                text: 'While it`s manoeuvring slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'While it`s under heavy braking',
                img: '',
            },
            {
                char: 'd',
                text: 'When it`s fully loaded',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5301',
        topicCode: 'Braking systems ',
        question:
            'Your lorry is stuck in snow. You use the diff-lock to move off. When should you switch the diff-lock off?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Only after selecting top gear',
                img: '',
            },
            {
                char: 'b',
                text: 'Once the engine has warmed up',
                img: '',
            },
            {
                char: 'c',
                text: 'As soon as the vehicle is moving',
                img: '',
            },
            {
                char: 'd',
                text: 'As soon as the snow has cleared',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5325',
        topicCode: 'Braking systems ',
        question:
            'Your tractor unit has three air lines. You`re connecting to a trailer that has two air-line couplings. What colour is the line you shouldn`t connect to the trailer?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Red',
                img: '',
            },
            {
                char: 'b',
                text: 'Yellow',
                img: '',
            },
            {
                char: 'c',
                text: 'Black',
                img: '',
            },
            {
                char: 'd',
                text: 'Blue',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5329',
        topicCode: 'Braking systems ',
        question:
            'You`re driving an articulated lorry that has three air lines connected to the trailer. What`s the purpose of the red line?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It`s the emergency line',
                img: '',
            },
            {
                char: 'b',
                text: 'It`s the service line',
                img: '',
            },
            {
                char: 'c',
                text: 'It`s the auxiliary line',
                img: '',
            },
            {
                char: 'd',
                text: 'It`s the electrical line',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5330',
        topicCode: 'Braking systems ',
        question:
            'You`re driving a tractor unit fitted with two air lines. You want to couple to a trailer that has three air-line couplings. How should the air lines be connected?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The trailer auxiliary line should be left unconnected',
                img: '',
            },
            {
                char: 'b',
                text: 'The trailer service line should be left unconnected',
                img: '',
            },
            {
                char: 'c',
                text: 'Only the service line should be connected',
                img: '',
            },
            {
                char: 'd',
                text: 'Only the auxiliary line should be connected',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5331',
        topicCode: 'Braking systems ',
        question:
            'Your lorry is equipped with anti-lock brakes. What`s the correct procedure for stopping in an emergency?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Apply the footbrake firmly in a pumping action until the vehicle has stopped',
                img: '',
            },
            {
                char: 'b',
                text: 'Apply the footbrake firmly and continuously until the vehicle has stopped',
                img: '',
            },
            {
                char: 'c',
                text: 'Apply the footbrake and handbrake until the vehicle has stopped',
                img: '',
            },
            {
                char: 'd',
                text: 'Apply the handbrake only',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5403',
        topicCode: 'Braking systems ',
        question:
            'What does changing to a lower gear on a long downhill gradient help to avoid?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Brake fade',
                img: '',
            },
            {
                char: 'b',
                text: 'Clutch slip',
                img: '',
            },
            {
                char: 'c',
                text: 'Excessive engine revs',
                img: '',
            },
            {
                char: 'd',
                text: 'Tyre wear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5467',
        topicCode: 'Braking systems ',
        question:
            'You have to drive onto a muddy building site. Why should you switch on your diff-lock?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To make your steering lighter',
                img: '',
            },
            {
                char: 'b',
                text: 'To improve your fuel consumption',
                img: '',
            },
            {
                char: 'c',
                text: 'To increase your engine power',
                img: '',
            },
            {
                char: 'd',
                text: 'To make the wheels less likely to spin',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6715',
        topicCode: 'Braking systems ',
        question: 'How will anti-lock brakes improve your vehicle`s safety?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They allow you to follow other vehicles more closely',
                img: '',
            },
            {
                char: 'b',
                text: 'They help you keep steering control while braking heavily',
                img: '',
            },
            {
                char: 'c',
                text: 'They let you drive faster on wet roads',
                img: '',
            },
            {
                char: 'd',
                text: 'They enable you to brake later than normal',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6805',
        topicCode: 'Braking systems ',
        question:
            'What could prevent air pressure from building up in an air-brake system in frosty weather?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Moisture in the air may form bubbles in the brake fluid',
                img: '',
            },
            {
                char: 'b',
                text: 'The air will contract, reducing the pressure',
                img: '',
            },
            {
                char: 'c',
                text: 'The dampness may cause valves to rust',
                img: '',
            },
            {
                char: 'd',
                text: 'Moisture drawn in with the air may freeze and cause a blockage',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6806',
        topicCode: 'Braking systems ',
        question:
            'What should you do if the brake air-pressure warning light comes on while you`re driving?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop and get help without delay',
                img: '',
            },
            {
                char: 'b',
                text: 'Report the fault when you return to your depot',
                img: '',
            },
            {
                char: 'c',
                text: 'Build up the pressure by accelerating',
                img: '',
            },
            {
                char: 'd',
                text: 'Drain the air tanks and continue normally',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6807',
        topicCode: 'Braking systems ',
        question:
            'You`ve just started the engine. What must you do if the brake air-pressure warning light is showing?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Report it as a fault ',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep the parking brake on',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch your engine off',
                img: '',
            },
            {
                char: 'd',
                text: 'Engage the clutch',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6808',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with an anti-lock braking system. What`s it designed to allow you to do?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drive at faster speeds',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake much later than normal',
                img: '',
            },
            {
                char: 'c',
                text: 'Apply the brakes more quickly',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop safely in an emergency',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6809',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with an anti-lock braking system. When should you check that it`s working properly?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Before each service',
                img: '',
            },
            {
                char: 'b',
                text: 'At the start of each working day',
                img: '',
            },
            {
                char: 'c',
                text: 'At the start of each working week',
                img: '',
            },
            {
                char: 'd',
                text: 'Before every journey',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6810',
        topicCode: 'Braking systems ',
        question:
            'What will `pumping` the brake pedal in a vehicle fitted with anti-lock brakes cause?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increased effectiveness',
                img: '',
            },
            {
                char: 'b',
                text: 'Reduced effectiveness',
                img: '',
            },
            {
                char: 'c',
                text: 'Reduced brake wear',
                img: '',
            },
            {
                char: 'd',
                text: 'Increased brake wear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6811',
        topicCode: 'Braking systems ',
        question:
            'You`re driving a vehicle fitted with anti-lock brakes. What should you do when braking in an emergency?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '`Pump` the brake pedal harshly',
                img: '',
            },
            {
                char: 'b',
                text: 'Apply minimum force to the brake pedal',
                img: '',
            },
            {
                char: 'c',
                text: 'Use the exhaust brake (retarder) before the footbrake',
                img: '',
            },
            {
                char: 'd',
                text: 'Apply firm, continuous pressure to the brake pedal',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6815',
        topicCode: 'Braking systems ',
        question: 'What`s `brake fade`?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Reduction of air pressure',
                img: '',
            },
            {
                char: 'b',
                text: 'Smooth progressive braking',
                img: '',
            },
            {
                char: 'c',
                text: 'Reduction of braking effectiveness',
                img: '',
            },
            {
                char: 'd',
                text: 'Low hydraulic brake fluid level',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6817',
        topicCode: 'Braking systems ',
        question:
            '`Brake fade` is a loss of effectiveness of the brakes when they overheat. When would `brake fade` be most likely to happen?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On a long journey',
                img: '',
            },
            {
                char: 'b',
                text: 'On a long downhill gradient',
                img: '',
            },
            {
                char: 'c',
                text: 'On the approach to hazards',
                img: '',
            },
            {
                char: 'd',
                text: 'On a long uphill gradient',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6818',
        topicCode: 'Braking systems ',
        question:
            'What should you do when driving a large vehicle down a steep hill? ',
        questionImg: 'TS4596.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Partly apply the parking brake',
                img: '',
            },
            {
                char: 'b',
                text: 'Select the vehicle`s highest gear',
                img: '',
            },
            {
                char: 'c',
                text: 'Use the endurance brake',
                img: '',
            },
            {
                char: 'd',
                text: 'Put the gear lever into neutral',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6819',
        topicCode: 'Braking systems ',
        question:
            'What should anti-lock brakes let you do when you have to stop in an emergency?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Brake more gently',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake much later',
                img: '',
            },
            {
                char: 'c',
                text: 'Maintain steering control',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop over a long distance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6821',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle has anti-lock brakes. How does this affect you when you`re braking normally? ',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'There`s no need to alter the way you brake',
                img: '',
            },
            {
                char: 'b',
                text: 'You`ll be able to brake much later',
                img: '',
            },
            {
                char: 'c',
                text: 'You`ll need to brake more firmly',
                img: '',
            },
            {
                char: 'd',
                text: 'There`s no need to brake so early',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6827',
        topicCode: 'Braking systems ',
        question:
            'When can an endurance brake (retarder) be especially useful?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'While driving down long hills',
                img: '',
            },
            {
                char: 'b',
                text: 'When driving on steep cambers',
                img: '',
            },
            {
                char: 'c',
                text: 'As a way to reduce gear changes',
                img: '',
            },
            {
                char: 'd',
                text: 'To improve fuel consumption',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6828',
        topicCode: 'Braking systems ',
        question:
            'You`re driving down a long hill. What should you use to prevent the brakes from overheating?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The anti-lock braking system',
                img: '',
            },
            {
                char: 'b',
                text: 'The footbrake',
                img: '',
            },
            {
                char: 'c',
                text: 'The secondary brake',
                img: '',
            },
            {
                char: 'd',
                text: 'The endurance brake (retarder)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6829',
        topicCode: 'Braking systems ',
        question:
            'What system is used to control a vehicle`s speed without using the footbrake?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A secondary brake',
                img: '',
            },
            {
                char: 'b',
                text: 'An endurance brake (retarder)',
                img: '',
            },
            {
                char: 'c',
                text: 'A differential lock',
                img: '',
            },
            {
                char: 'd',
                text: 'An emergency air system',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6832',
        topicCode: 'Braking systems ',
        question: 'When should an endurance brake (retarder) be used?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'On motorways only',
                img: '',
            },
            {
                char: 'b',
                text: 'When braking quickly',
                img: '',
            },
            {
                char: 'c',
                text: 'When you stop or park',
                img: '',
            },
            {
                char: 'd',
                text: 'On long downhill slopes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6838',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fully loaded. Where should you be braking when dealing with bends?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'As close to the bend as possible',
                img: '',
            },
            {
                char: 'b',
                text: 'As you start to turn the wheel',
                img: '',
            },
            {
                char: 'c',
                text: 'When halfway around the bend',
                img: '',
            },
            {
                char: 'd',
                text: 'When driving in a straight line',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6839',
        topicCode: 'Braking systems ',
        question:
            'A lorry is overtaking you on a two-lane motorway. What should you do if it doesn`t have the speed to get past?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Continue at the same speed',
                img: '',
            },
            {
                char: 'b',
                text: 'Be prepared to reduce your speed',
                img: '',
            },
            {
                char: 'c',
                text: 'Increase your speed and force the lorry to drop back',
                img: '',
            },
            {
                char: 'd',
                text: 'Brake hard to allow the other driver to cut in',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6846',
        topicCode: 'Braking systems ',
        question: 'What should you do after driving through a flood?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Carry out an emergency stop',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive in a low gear with the footbrake lightly applied',
                img: '',
            },
            {
                char: 'c',
                text: 'Avoid braking until the brakes have dried out',
                img: '',
            },
            {
                char: 'd',
                text: 'Pump the footbrake when approaching hazards',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6847',
        topicCode: 'Braking systems ',
        question: 'What can coasting downhill seriously affect?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The air brakes',
                img: '',
            },
            {
                char: 'b',
                text: 'The cooling system',
                img: '',
            },
            {
                char: 'c',
                text: 'The tachograph',
                img: '',
            },
            {
                char: 'd',
                text: 'The electrical systems',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7067',
        topicCode: 'Braking systems ',
        question: 'When does `brake fade` occur?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When the brakes get too hot',
                img: '',
            },
            {
                char: 'b',
                text: 'When the brakes get too cold',
                img: '',
            },
            {
                char: 'c',
                text: 'When the brakes get too dry',
                img: '',
            },
            {
                char: 'd',
                text: 'When the brakes get too wet',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7068',
        topicCode: 'Braking systems ',
        question: 'How can you help to prevent `brake fade`?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use the endurance brake ',
                img: '',
            },
            {
                char: 'b',
                text: 'Apply the parking brake',
                img: '',
            },
            {
                char: 'c',
                text: 'Select neutral for a short distance',
                img: '',
            },
            {
                char: 'd',
                text: 'Repeatedly pump the brake pedal',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7069',
        topicCode: 'Braking systems ',
        question: 'What causes `brake fade`?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Continuous use of the brakes',
                img: '',
            },
            {
                char: 'b',
                text: 'Repeated pumping of the brakes',
                img: '',
            },
            {
                char: 'c',
                text: 'Loss of air pressure in the system',
                img: '',
            },
            {
                char: 'd',
                text: 'Badly worn brake pads',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7071',
        topicCode: 'Braking systems ',
        question:
            'Where must extra care be taken when using an endurance brake (retarder)?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On uneven roads',
                img: '',
            },
            {
                char: 'b',
                text: 'On slippery roads',
                img: '',
            },
            {
                char: 'c',
                text: 'On downhill gradients',
                img: '',
            },
            {
                char: 'd',
                text: 'On uphill gradients',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7143',
        topicCode: 'Braking systems ',
        question:
            'You`re stationary. The brake air-pressure warning light comes on. Why should you keep the parking brake on?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Because the vehicle will suddenly roll backwards',
                img: '',
            },
            {
                char: 'b',
                text: 'Because it will cause the air pressure to rise',
                img: '',
            },
            {
                char: 'c',
                text: 'Because the service brake may not stop you ',
                img: '',
            },
            {
                char: 'd',
                text: 'Because it will make the warning light go out',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7310',
        topicCode: 'Braking systems ',
        question:
            'You`re about to drive a vehicle fitted with air-assisted hydraulic brakes. Why might the brake pedal feel hard when you press it?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The air compressor is not working',
                img: '',
            },
            {
                char: 'b',
                text: 'The pedal movement needs adjusting',
                img: '',
            },
            {
                char: 'c',
                text: 'The brakes are locked on fully',
                img: '',
            },
            {
                char: 'd',
                text: 'The brake-fluid reservoir is empty',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7311',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with an air-assisted hydraulic braking system. What would warn you that the air compressor is not working?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The brake pedal feels spongy when pressed',
                img: '',
            },
            {
                char: 'b',
                text: 'The brake pedal has little resistance',
                img: '',
            },
            {
                char: 'c',
                text: 'The brake pedal feels hard when pressed',
                img: '',
            },
            {
                char: 'd',
                text: 'The brake pedal travels a long way',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7312',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with hydraulic brakes. Why might the brake pedal go down too far when it`s pressed?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There`s too much fluid in the braking system',
                img: '',
            },
            {
                char: 'b',
                text: 'The pedal travel requires adjustment',
                img: '',
            },
            {
                char: 'c',
                text: 'The vacuum exhauster isn`t working',
                img: '',
            },
            {
                char: 'd',
                text: 'There isn`t enough fluid in the braking system',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7313',
        topicCode: 'Braking systems ',
        question:
            'You`re about to drive a vehicle fitted with hydraulic brakes. What should you check before driving the vehicle?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The hydraulic-brake fluid level',
                img: '',
            },
            {
                char: 'b',
                text: 'The power-steering fluid level',
                img: '',
            },
            {
                char: 'c',
                text: 'The cooling-system fluid level',
                img: '',
            },
            {
                char: 'd',
                text: 'The windscreen-washer fluid level',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7314',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with air-assisted hydraulic brakes. What would warn you that there isn`t enough air in the system?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'An increase in pressure on the air gauge',
                img: '',
            },
            {
                char: 'b',
                text: 'A buzzer or light',
                img: '',
            },
            {
                char: 'c',
                text: 'The exhaust brake won`t work',
                img: '',
            },
            {
                char: 'd',
                text: 'Brake fade',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7316',
        topicCode: 'Braking systems ',
        question:
            'Which coloured band on the rev counter makes the best use of engine braking?',
        questionImg: '85BW1908.jpg',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Blue',
                img: '',
            },
            {
                char: 'b',
                text: 'Red',
                img: '',
            },
            {
                char: 'c',
                text: 'Amber',
                img: '',
            },
            {
                char: 'd',
                text: 'Green',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7318',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with air brakes. What does it mean if a brake warning light shows when you`ve just started the engine?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Low air pressure',
                img: '',
            },
            {
                char: 'b',
                text: 'Increased air pressure',
                img: '',
            },
            {
                char: 'c',
                text: 'The parking brake isn`t working',
                img: '',
            },
            {
                char: 'd',
                text: 'The air reservoirs are fully charged',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7320',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with air-assisted hydraulic brakes. What fault would you suspect if the brake pedal becomes hard to press?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The brake system has a loss of air pressure',
                img: '',
            },
            {
                char: 'b',
                text: 'The brake linings are worn',
                img: '',
            },
            {
                char: 'c',
                text: 'The brake shoes need adjusting',
                img: '',
            },
            {
                char: 'd',
                text: 'The brake system requires more fluid',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7350',
        topicCode: 'Braking systems ',
        question: 'Which component will last longer when you use a retarder?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The brake linings',
                img: '',
            },
            {
                char: 'b',
                text: 'The catalytic converter',
                img: '',
            },
            {
                char: 'c',
                text: 'The exhaust system',
                img: '',
            },
            {
                char: 'd',
                text: 'The transmission',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7372',
        topicCode: 'Braking systems ',
        question:
            'What should you do when an air-pressure warning device activates?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue to drive the vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'Drain the air tanks',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop and have the fault put right',
                img: '',
            },
            {
                char: 'd',
                text: 'Pump the brake pedal repeatedly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7378',
        topicCode: 'Braking systems ',
        question:
            'You`re driving down a snow-covered hill. Why should you take care when using an independent endurance brake (retarder)?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your brakes could overheat',
                img: '',
            },
            {
                char: 'b',
                text: 'Your speed could increase',
                img: '',
            },
            {
                char: 'c',
                text: 'Compressed air could escape',
                img: '',
            },
            {
                char: 'd',
                text: 'The drive wheels could lock',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7379',
        topicCode: 'Braking systems ',
        question:
            'What should you avoid when using an independent endurance brake (retarder) on slippery roads?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The front wheels spinning',
                img: '',
            },
            {
                char: 'b',
                text: 'The drive wheels locking',
                img: '',
            },
            {
                char: 'c',
                text: 'Brake-pad wear',
                img: '',
            },
            {
                char: 'd',
                text: 'Anti-skid road surfaces',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7382',
        topicCode: 'Braking systems ',
        question:
            'You`re about to drive an unfamiliar vehicle. What should you do if you think there may be moisture in the air-brake reservoir?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Assume the system has automatic drain valves',
                img: '',
            },
            {
                char: 'b',
                text: 'Find out whether you need to drain the system manually',
                img: '',
            },
            {
                char: 'c',
                text: 'Nothing; it`s the vehicle owner`s responsibility',
                img: '',
            },
            {
                char: 'd',
                text: 'Leave the engine running for a while before driving',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8251',
        topicCode: 'Braking systems ',
        question:
            'You`re about to start a journey in very frosty weather. What`s the likely cause of low air-brake pressure?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Engine temperature too low',
                img: '',
            },
            {
                char: 'b',
                text: 'Weak engine anti-freeze mixture',
                img: '',
            },
            {
                char: 'c',
                text: 'Brake pedal needs adjustment',
                img: '',
            },
            {
                char: 'd',
                text: 'Frozen moisture in the storage tanks',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8253',
        topicCode: 'Braking systems ',
        question:
            'When should an anti-lock braking system (ABS) warning light turn off?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When the brakes are used for the first time',
                img: '',
            },
            {
                char: 'b',
                text: 'When the ABS comes into operation',
                img: '',
            },
            {
                char: 'c',
                text: 'When road speed is 6 mph (10 km/h) or more',
                img: '',
            },
            {
                char: 'd',
                text: 'When the secondary braking system is used',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8254',
        topicCode: 'Braking systems ',
        question: 'What`s the most powerful brake on a bus?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Secondary brake',
                img: '',
            },
            {
                char: 'b',
                text: 'Anti-lock braking system',
                img: '',
            },
            {
                char: 'c',
                text: 'Endurance brake (retarder)',
                img: '',
            },
            {
                char: 'd',
                text: 'Service brake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8255',
        topicCode: 'Braking systems ',
        question: 'What should you do when making a short stop, facing uphill?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Hold the vehicle on the clutch',
                img: '',
            },
            {
                char: 'b',
                text: 'Hold the vehicle on the footbrake',
                img: '',
            },
            {
                char: 'c',
                text: 'Select neutral and apply the parking brake',
                img: '',
            },
            {
                char: 'd',
                text: 'Apply the parking brake after stopping',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8256',
        topicCode: 'Braking systems ',
        question:
            'You`re about to move off in a vehicle that has automatic transmission. What must you do before you select `D` (drive)?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Put your foot on the footbrake',
                img: '',
            },
            {
                char: 'b',
                text: 'Signal to move off',
                img: '',
            },
            {
                char: 'c',
                text: 'Alter your seat position',
                img: '',
            },
            {
                char: 'd',
                text: 'Adjust your mirrors',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8257',
        topicCode: 'Braking systems ',
        question: 'What`s an advantage of progressive braking?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Improved passenger safety and comfort',
                img: '',
            },
            {
                char: 'b',
                text: 'Increased air-brake pressure',
                img: '',
            },
            {
                char: 'c',
                text: 'Avoidance of `brake fade`',
                img: '',
            },
            {
                char: 'd',
                text: 'Longer rest periods',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5230',
        topicCode: 'The driver',
        question:
            'You`re approaching a green traffic light and are going straight ahead. What should you do when the traffic ahead, beyond the junction, has stopped and is queuing? ',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Go forward if your vehicle will clear the junction',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive slowly across the junction',
                img: '',
            },
            {
                char: 'c',
                text: 'Maintain your speed and sound your horn',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop across the junction until the traffic clears',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5324',
        topicCode: 'The driver',
        question:
            'What rules apply to the wearing of seat belts fitted to your lorry?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It`s not advisable',
                img: '',
            },
            {
                char: 'b',
                text: 'It`s advisable',
                img: '',
            },
            {
                char: 'c',
                text: 'It`s required by law',
                img: '',
            },
            {
                char: 'd',
                text: 'It`s not required by law',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5337',
        topicCode: 'The driver',
        question:
            'You`re driving this lorry and are waiting to turn right. What should you do just before turning?',
        questionImg: 'J7505n1.tif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Cancel your signal',
                img: '',
            },
            {
                char: 'b',
                text: 'Check your left-hand mirror and blind spot',
                img: '',
            },
            {
                char: 'c',
                text: 'Wave out the green car (arrowed)',
                img: '',
            },
            {
                char: 'd',
                text: 'Check your right-hand mirror and blind spot',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5338',
        topicCode: 'The driver',
        question:
            'What will you have to deal with when you`re driving at night?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Headlight dazzle',
                img: '',
            },
            {
                char: 'b',
                text: 'Other drivers speeding',
                img: '',
            },
            {
                char: 'c',
                text: 'Cold weather conditions',
                img: '',
            },
            {
                char: 'd',
                text: 'Dazzle from shop windows',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5354',
        topicCode: 'The driver',
        question:
            'You`re driving a lorry in a busy town. A driver pulls out in front of you and you have to brake hard. What should you do?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtake as quickly as possible',
                img: '',
            },
            {
                char: 'b',
                text: 'Stay calm and accept the error',
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your lights to show your annoyance',
                img: '',
            },
            {
                char: 'd',
                text: 'Sound your horn and speed up',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5427',
        topicCode: 'The driver',
        question:
            'Your lorry is fitted with a driver`s seat belt. When may you drive without wearing it?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you`re making deliveries that are less than 50 metres apart',
                img: '',
            },
            {
                char: 'b',
                text: 'When you`re towing at less than 50 mph',
                img: '',
            },
            {
                char: 'c',
                text: 'When you`re working less than 50 hours in a week',
                img: '',
            },
            {
                char: 'd',
                text: 'When you`re less than 50 miles away from your depot',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5439',
        topicCode: 'The driver',
        question:
            'You`ve been issued with protective clothing. Who`s responsible for its use?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You, the driver',
                img: '',
            },
            {
                char: 'b',
                text: 'The insurance company',
                img: '',
            },
            {
                char: 'c',
                text: 'The Health and Safety Executive',
                img: '',
            },
            {
                char: 'd',
                text: 'Your employer',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6627',
        topicCode: 'The driver',
        question:
            'You`re driving on a motorway. What does it mean when a lorry ahead of you switches on its hazard warning lights?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There are speed cameras ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'The lorry is about to overtake',
                img: '',
            },
            {
                char: 'c',
                text: 'The lorry is leaving the motorway',
                img: '',
            },
            {
                char: 'd',
                text: 'Traffic further ahead may be stopping',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6629',
        topicCode: 'The driver',
        question: 'What should you do if you lose your way in heavy traffic?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop at traffic lights and ask pedestrians',
                img: '',
            },
            {
                char: 'b',
                text: 'Shout to other drivers to ask them the way',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive on until you find a safe place to stop',
                img: '',
            },
            {
                char: 'd',
                text: 'Check a map as you keep moving with the traffic',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6686',
        topicCode: 'The driver',
        question:
            'Where are you most likely to find pedestrians stepping into the road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Motorways',
                img: '',
            },
            {
                char: 'b',
                text: 'One-way streets',
                img: '',
            },
            {
                char: 'c',
                text: 'Wooded areas',
                img: '',
            },
            {
                char: 'd',
                text: 'Shopping areas',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6687',
        topicCode: 'The driver',
        question:
            'What`s most likely to cause danger to a group of horse riders?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Powerful brake lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Leaving plenty of room',
                img: '',
            },
            {
                char: 'c',
                text: 'The noise of your vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Reacting too early',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6688',
        topicCode: 'The driver',
        question: 'What should you do when passing sheep on a road?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pass quickly and quietly',
                img: '',
            },
            {
                char: 'b',
                text: 'Sound your horn gently',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive very slowly',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep your vehicle moving',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6702',
        topicCode: 'The driver',
        question:
            'When is your nearside mirror most likely to endanger pedestrians?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When driving over a speed hump',
                img: '',
            },
            {
                char: 'b',
                text: 'When driving near a hospital',
                img: '',
            },
            {
                char: 'c',
                text: 'When driving close to the kerb',
                img: '',
            },
            {
                char: 'd',
                text: 'When driving past a car park',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6712',
        topicCode: 'The driver',
        question:
            'What can prevent you from holding a bus or lorry driving licence?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Heart disorders ',
                img: '',
            },
            {
                char: 'b',
                text: 'Dyslexia',
                img: '',
            },
            {
                char: 'c',
                text: 'Skin problems',
                img: '',
            },
            {
                char: 'd',
                text: 'Stomach problems',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6761',
        topicCode: 'The driver',
        question:
            'You`re about to drive a vehicle you`ve never driven before. What should you consider when adjusting your seat?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your distance from the controls',
                img: '',
            },
            {
                char: 'b',
                text: 'Being able to reach your sat-nav',
                img: '',
            },
            {
                char: 'c',
                text: 'The tension in the seat belt',
                img: '',
            },
            {
                char: 'd',
                text: 'The wear on the seat fabric',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6762',
        topicCode: 'The driver',
        question: 'Why is it important to adjust your head restraint properly?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To make you more comfortable',
                img: '',
            },
            {
                char: 'b',
                text: 'To protect your neck in a collision',
                img: '',
            },
            {
                char: 'c',
                text: 'To help you relax while you`re driving',
                img: '',
            },
            {
                char: 'd',
                text: 'To maintain a good driving position',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6764',
        topicCode: 'The driver',
        question: 'When may you drive without wearing your seat belt? ',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When reversing',
                img: '',
            },
            {
                char: 'b',
                text: 'When carrying out a hill start',
                img: '',
            },
            {
                char: 'c',
                text: 'When making an emergency stop',
                img: '',
            },
            {
                char: 'd',
                text: 'When driving slowly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6858',
        topicCode: 'The driver',
        question:
            'You`re driving along this road. What should you do if the red car cuts in close in front of you?',
        questionImg: '85BW1457.jpg',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Accelerate to get closer to the red car',
                img: '',
            },
            {
                char: 'b',
                text: 'Give a long blast on the horn',
                img: '',
            },
            {
                char: 'c',
                text: 'Drop back to leave the correct separation distance',
                img: '',
            },
            {
                char: 'd',
                text: 'Flash your headlights several times',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6859',
        topicCode: 'The driver',
        question:
            'You`re approaching a large puddle near the left-hand kerb. What should you do if pedestrians are close to the water?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Ignore the puddle',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake suddenly and sound your horn',
                img: '',
            },
            {
                char: 'c',
                text: 'Try to avoid splashing the pedestrians',
                img: '',
            },
            {
                char: 'd',
                text: 'Wave at the pedestrians to keep back ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6860',
        topicCode: 'The driver',
        question:
            'What should you do if a long, heavily laden lorry is taking a long time to overtake you?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Speed up',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down',
                img: '',
            },
            {
                char: 'c',
                text: 'Hold your speed',
                img: '',
            },
            {
                char: 'd',
                text: 'Change direction',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6862',
        topicCode: 'The driver',
        question:
            'You`re driving a slow-moving vehicle on a narrow, winding road. What should you do to let other vehicles overtake you?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Wave them past',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop in a safe place',
                img: '',
            },
            {
                char: 'c',
                text: 'Show a left-turn signal',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive more slowly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6863',
        topicCode: 'The driver',
        question: 'When should you use your vehicle`s horn?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To warn others of your presence',
                img: '',
            },
            {
                char: 'b',
                text: 'To allow you right of way',
                img: '',
            },
            {
                char: 'c',
                text: 'To greet other road users',
                img: '',
            },
            {
                char: 'd',
                text: 'To signal your annoyance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6864',
        topicCode: 'The driver',
        question:
            'You`re following a car being driven slowly by a learner driver. What should you do if it isn`t safe to overtake it?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Flash your lights so the driver sees you',
                img: '',
            },
            {
                char: 'b',
                text: 'Be patient and stay well behind',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch your hazard lights on ',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive along the centre line of the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6865',
        topicCode: 'The driver',
        question:
            'What should you do if you`re signalled to stop by a police officer in a patrol car?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Brake harshly to a stop',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive on until you reach a side road',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop on the left as soon as it`s safe',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop immediately wherever you are',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6866',
        topicCode: 'The driver',
        question:
            'You`re being followed by a marked police car. As well as flashing the headlights, what will the police officer do to signal you to stop?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Signal with the right indicator',
                img: '',
            },
            {
                char: 'b',
                text: 'Signal with the left indicator',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch on the hazard warning lights',
                img: '',
            },
            {
                char: 'd',
                text: 'Switch on the rear fog lights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6868',
        topicCode: 'The driver',
        question:
            'Your vehicle is fitted with a hand-held telephone. What should you do before taking or making a call?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Find a safe place to stop',
                img: '',
            },
            {
                char: 'b',
                text: 'Reduce your speed to less than 30 mph',
                img: '',
            },
            {
                char: 'c',
                text: 'Steer your vehicle with one hand',
                img: '',
            },
            {
                char: 'd',
                text: 'Be very careful when dealing with junctions',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6869',
        topicCode: 'The driver',
        question:
            'A mobile telephone is fitted to your vehicle. When should it be used?',
        questionImg: 'VL2516.tif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you`re stopped in a safe place',
                img: '',
            },
            {
                char: 'b',
                text: 'When travelling slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'When on a motorway',
                img: '',
            },
            {
                char: 'd',
                text: 'When in light traffic',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6870',
        topicCode: 'The driver',
        question:
            'You approach a pelican crossing that goes straight across the road. How must you treat it if it has a central island?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'As one crossing in daylight only',
                img: '',
            },
            {
                char: 'b',
                text: 'As one continuous crossing',
                img: '',
            },
            {
                char: 'c',
                text: 'As two separate crossings',
                img: '',
            },
            {
                char: 'd',
                text: 'As two crossings during darkness',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6871',
        topicCode: 'The driver',
        question:
            'What does the flashing amber light mean at a pelican crossing?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop if you can do so safely',
                img: '',
            },
            {
                char: 'b',
                text: 'Give way to pedestrians already on the crossing',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop and wait for the green light',
                img: '',
            },
            {
                char: 'd',
                text: 'Give way to pedestrians waiting to cross',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6872',
        topicCode: 'The driver',
        question: 'What should you do at a zebra crossing?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Rev your engine to encourage pedestrians to cross quickly',
                img: '',
            },
            {
                char: 'b',
                text: 'Park only on the zigzag lines on the left',
                img: '',
            },
            {
                char: 'c',
                text: 'Always leave the crossing clear in traffic queues',
                img: '',
            },
            {
                char: 'd',
                text: 'Wave pedestrians to cross if you intend to wait for them',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6879',
        topicCode: 'The driver',
        question:
            'A coach is overtaking you. What should you do when it`s safe for the coach to move back to the left?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Do nothing and let the driver decide',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch your sidelights on and off',
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your headlights once',
                img: '',
            },
            {
                char: 'd',
                text: 'Flash your headlights twice',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6881',
        topicCode: 'The driver',
        question:
            'What should you do when you`re being followed by an ambulance showing a flashing blue light? ',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop to let it pass as soon as it`s safe to do so ',
                img: '',
            },
            {
                char: 'b',
                text: 'Accelerate quickly to get away from it',
                img: '',
            },
            {
                char: 'c',
                text: 'Ignore it if possible, unless you`re forced to let it pass',
                img: '',
            },
            {
                char: 'd',
                text: 'Brake harshly and immediately to a stop in the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6882',
        topicCode: 'The driver',
        question:
            'Should you give way to a car showing a flashing green beacon?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Yes, because it`s a doctor going to an emergency',
                img: '',
            },
            {
                char: 'b',
                text: 'Yes, because it`s a fire-crew support vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'No, because it`s a slow-moving vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'No, because it`s a breakdown vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6883',
        topicCode: 'The driver',
        question: 'What type of emergency vehicle has a green flashing beacon?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Fire engine',
                img: '',
            },
            {
                char: 'b',
                text: 'Road gritter',
                img: '',
            },
            {
                char: 'c',
                text: 'Ambulance',
                img: '',
            },
            {
                char: 'd',
                text: 'Doctor`s car',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6887',
        topicCode: 'The driver',
        question:
            'You stop for pedestrians at a zebra crossing. What should you do if they don`t start to cross immediately?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Be patient and wait',
                img: '',
            },
            {
                char: 'b',
                text: 'Sound your horn',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive on',
                img: '',
            },
            {
                char: 'd',
                text: 'Wave them to cross',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6889',
        topicCode: 'The driver',
        question:
            'Why could it be dangerous to wave people across at pedestrian crossings?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'There may be another vehicle coming',
                img: '',
            },
            {
                char: 'b',
                text: 'They may be distracted',
                img: '',
            },
            {
                char: 'c',
                text: 'They may not see your signal',
                img: '',
            },
            {
                char: 'd',
                text: 'They may not be ready to cross',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6890',
        topicCode: 'The driver',
        question:
            'What danger should you be most aware of if you`re driving close to the kerb in a busy shopping area?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The nearside mirror striking the heads of pedestrians',
                img: '',
            },
            {
                char: 'b',
                text: 'The amount of fuel being used when driving slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Solid white line markings in the centre of the road',
                img: '',
            },
            {
                char: 'd',
                text: 'Traffic lights that may suddenly change to green',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6893',
        topicCode: 'The driver',
        question:
            'Which of these is an unsafe place to park your vehicle or trailer?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At an overnight service area',
                img: '',
            },
            {
                char: 'b',
                text: 'Near the brow of a hill ',
                img: '',
            },
            {
                char: 'c',
                text: 'In the yard at a factory ',
                img: '',
            },
            {
                char: 'd',
                text: 'In a lay-by in a built-up area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6894',
        topicCode: 'The driver',
        question: 'What must you check before setting out on a journey?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your mirrors are tinted',
                img: '',
            },
            {
                char: 'b',
                text: 'Your mirrors are convex',
                img: '',
            },
            {
                char: 'c',
                text: 'Your mirrors are concave',
                img: '',
            },
            {
                char: 'd',
                text: 'Your mirrors are clean',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6896',
        topicCode: 'The driver',
        question:
            'A group of schoolchildren are standing close to the left-hand kerb. What should you do as you drive past?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Check your offside mirror',
                img: '',
            },
            {
                char: 'b',
                text: 'Check your nearside mirror',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch on your headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Switch on your hazard warning lights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6897',
        topicCode: 'The driver',
        question:
            'You`re driving at the legal speed limit.\nWhat should you do if a vehicle comes up quickly behind, flashing its headlights?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Accelerate to maintain a gap behind you',
                img: '',
            },
            {
                char: 'b',
                text: 'Touch the brake pedal sharply to show your brake lights',
                img: '',
            },
            {
                char: 'c',
                text: 'Maintain your speed and prevent the vehicle from overtaking',
                img: '',
            },
            {
                char: 'd',
                text: 'Allow the vehicle to overtake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6899',
        topicCode: 'The driver',
        question:
            'What should you do when a vehicle pulls out in front of you at a junction?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Swerve past it and sound your horn',
                img: '',
            },
            {
                char: 'b',
                text: 'Flash your headlights and drive up close behind',
                img: '',
            },
            {
                char: 'c',
                text: 'Slow down and be ready to stop',
                img: '',
            },
            {
                char: 'd',
                text: 'Accelerate past it immediately',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6905',
        topicCode: 'The driver',
        question: 'How is drinking alcohol likely to affect your driving?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You`ll have faster reactions',
                img: '',
            },
            {
                char: 'b',
                text: 'You`ll become colour-blind',
                img: '',
            },
            {
                char: 'c',
                text: 'You`ll feel more confident',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll be able to concentrate better',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6907',
        topicCode: 'The driver',
        question:
            'What can seriously affect your concentration while you`re driving?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Contact lenses',
                img: '',
            },
            {
                char: 'b',
                text: 'Fresh air',
                img: '',
            },
            {
                char: 'c',
                text: 'Tinted windows',
                img: '',
            },
            {
                char: 'd',
                text: 'Tiredness',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6908',
        topicCode: 'The driver',
        question: 'How does alcohol affect your driving?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It speeds up your reactions',
                img: '',
            },
            {
                char: 'b',
                text: 'It increases your awareness',
                img: '',
            },
            {
                char: 'c',
                text: 'It improves your coordination',
                img: '',
            },
            {
                char: 'd',
                text: 'It reduces your concentration',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6909',
        topicCode: 'The driver',
        question:
            'You`ve been convicted of driving while unfit through drink or drugs. What will increase in cost when you start driving again?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Vehicle tax',
                img: '',
            },
            {
                char: 'b',
                text: 'Insurance premiums',
                img: '',
            },
            {
                char: 'c',
                text: 'Vehicle test certificate',
                img: '',
            },
            {
                char: 'd',
                text: 'Driving licence',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6910',
        topicCode: 'The driver',
        question:
            'What should you do if you`ve had a few alcoholic drinks at a party?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Have a strong cup of coffee and then drive home',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive home carefully and slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Go home by public transport',
                img: '',
            },
            {
                char: 'd',
                text: 'Wait a short while and then drive home',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6911',
        topicCode: 'The driver',
        question:
            'As a driver, what should you do when you attend a social event?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drink plenty of coffee after drinking alcohol',
                img: '',
            },
            {
                char: 'b',
                text: 'Avoid busy roads after drinking alcohol',
                img: '',
            },
            {
                char: 'c',
                text: 'Avoid drinking alcohol completely',
                img: '',
            },
            {
                char: 'd',
                text: 'Avoid drinking alcohol on an empty stomach',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6912',
        topicCode: 'The driver',
        question:
            'It`s been eight hours since you last had an alcoholic drink. What effect could the alcohol have on your driving?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You may still be over the legal drink-drive limit',
                img: '',
            },
            {
                char: 'b',
                text: 'You`ll have no alcohol in your system',
                img: '',
            },
            {
                char: 'c',
                text: 'Your driving won`t be impaired',
                img: '',
            },
            {
                char: 'd',
                text: 'You can`t be breathalysed ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6913',
        topicCode: 'The driver',
        question:
            'Your doctor has given you a course of medicine. Why should you ask whether it`s safe to drive?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drugs make you a better driver by quickening your reactions',
                img: '',
            },
            {
                char: 'b',
                text: 'You`ll have to let your insurance company know about the medicine',
                img: '',
            },
            {
                char: 'c',
                text: 'Some types of medicine can cause your reactions to slow down',
                img: '',
            },
            {
                char: 'd',
                text: 'The medicine you take may affect your hearing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6914',
        topicCode: 'The driver',
        question:
            'You`ve been taking medicine for a few days, and it has made you feel drowsy. Today you feel better, but you still need to take the medicine. When should you drive?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only if your journey is necessary',
                img: '',
            },
            {
                char: 'b',
                text: 'Only at night on quiet roads',
                img: '',
            },
            {
                char: 'c',
                text: 'Only if someone goes with you',
                img: '',
            },
            {
                char: 'd',
                text: 'Only after checking with your doctor',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6915',
        topicCode: 'The driver',
        question:
            'What should you do if you aren`t sure whether your cough medicine will affect your driving?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Ask your doctor for advice',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive a little more slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive if you feel all right',
                img: '',
            },
            {
                char: 'd',
                text: 'Ask a friend for advice',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6916',
        topicCode: 'The driver',
        question:
            'You take some cough medicine given to you by a friend. What must you do before driving?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drink some strong coffee',
                img: '',
            },
            {
                char: 'b',
                text: 'Ask your friend whether taking the medicine affected their driving',
                img: '',
            },
            {
                char: 'c',
                text: 'Check the label to see whether the medicine will affect your driving',
                img: '',
            },
            {
                char: 'd',
                text: 'Make a short journey to see whether the medicine is affecting your driving',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6917',
        topicCode: 'The driver',
        question:
            'What should you do if you`re driving along a motorway and become tired?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder at a safe place to rest',
                img: '',
            },
            {
                char: 'b',
                text: 'Leave the motorway at the next exit and take a rest',
                img: '',
            },
            {
                char: 'c',
                text: 'Close your windows and turn up the radio volume',
                img: '',
            },
            {
                char: 'd',
                text: 'Close your windows and set the heating to warm',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6918',
        topicCode: 'The driver',
        question:
            'You`re about to drive home. What should you do if you feel very tired and have a severe headache?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Wait until you`re fit and well before driving',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive home, but take painkiller tablets',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive home if you can stay awake for the journey',
                img: '',
            },
            {
                char: 'd',
                text: 'Wait for a short time, then drive home slowly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6919',
        topicCode: 'The driver',
        question:
            'What should you do if you`re feeling tired but there`s nowhere to stop safely?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increase your speed to find a stopping place more quickly',
                img: '',
            },
            {
                char: 'b',
                text: 'Ensure a supply of fresh air',
                img: '',
            },
            {
                char: 'c',
                text: 'Gently tap the steering wheel',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep changing speed to improve your concentration',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6920',
        topicCode: 'The driver',
        question: 'When will your reactions be slower?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When driving while you`re tired',
                img: '',
            },
            {
                char: 'b',
                text: 'When driving in fog',
                img: '',
            },
            {
                char: 'c',
                text: 'When driving too quickly',
                img: '',
            },
            {
                char: 'd',
                text: 'When driving in rain',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6925',
        topicCode: 'The driver',
        question:
            'What should you do if you`re taking medication that could affect your driving?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Seek medical advice',
                img: '',
            },
            {
                char: 'b',
                text: 'Make short journeys only',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive only at night',
                img: '',
            },
            {
                char: 'd',
                text: 'Drink plenty of water',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6928',
        topicCode: 'The driver',
        question:
            'What should you do if you feel tired while driving on a motorway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder for a rest',
                img: '',
            },
            {
                char: 'b',
                text: 'Carry on, but drive slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Leave the motorway at the next exit',
                img: '',
            },
            {
                char: 'd',
                text: 'Try to complete your journey more quickly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6929',
        topicCode: 'The driver',
        question:
            'You`ve driven a long distance and feel tired. Your tachograph shows that you haven`t exceeded your driving hours. What should you do in these circumstances?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Park in a suitable place and rest',
                img: '',
            },
            {
                char: 'b',
                text: 'Reduce your speed and drive more slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Carry on driving to use up your hours',
                img: '',
            },
            {
                char: 'd',
                text: 'Increase your speed and reduce your journey time',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6932',
        topicCode: 'The driver',
        question: 'What might misuse of drugs or alcohol lead to?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Better concentration ',
                img: '',
            },
            {
                char: 'b',
                text: 'Better eyesight',
                img: '',
            },
            {
                char: 'c',
                text: 'Withdrawal of a driving licence',
                img: '',
            },
            {
                char: 'd',
                text: 'Faster reactions',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7040',
        topicCode: 'The driver',
        question:
            'What should you do if a front tyre bursts while you`re driving on a motorway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Loosen your grip on the steering wheel',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake firmly to a stop',
                img: '',
            },
            {
                char: 'c',
                text: 'Hold the steering wheel firmly',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive to the next service area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7047',
        topicCode: 'The driver',
        question:
            'Your vehicle breaks down on a motorway and you need to call for help. Why may it be better to use an emergency roadside telephone rather than a mobile phone?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It connects you to a local garage',
                img: '',
            },
            {
                char: 'b',
                text: 'Using a mobile phone will distract other drivers',
                img: '',
            },
            {
                char: 'c',
                text: 'It allows easy location by the emergency services',
                img: '',
            },
            {
                char: 'd',
                text: 'Mobile phones don`t work on motorways',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7050',
        topicCode: 'The driver',
        question:
            'When are you most likely to lose concentration while you`re driving?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you use a mobile phone',
                img: '',
            },
            {
                char: 'b',
                text: 'When you switch on the windscreen wipers',
                img: '',
            },
            {
                char: 'c',
                text: 'When you switch on the heated rear window',
                img: '',
            },
            {
                char: 'd',
                text: 'When you look at the door mirrors',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7051',
        topicCode: 'The driver',
        question:
            'What should you do if you want to make a business call on your mobile phone while you`re driving?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Make the call but take extra care',
                img: '',
            },
            {
                char: 'b',
                text: 'Use the cruise control while you`re making the call',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop in a safe place before making the call',
                img: '',
            },
            {
                char: 'd',
                text: 'Reduce speed while you make the call',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7054',
        topicCode: 'The driver',
        question:
            'You`re driving on a single carriageway. When may you use your mobile phone?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Only when you`re receiving a call',
                img: '',
            },
            {
                char: 'b',
                text: 'Only when you`re suitably parked',
                img: '',
            },
            {
                char: 'c',
                text: 'Only when you`re driving at less than 30 mph',
                img: '',
            },
            {
                char: 'd',
                text: 'Only when you`re driving an automatic vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7055',
        topicCode: 'The driver',
        question: 'What effect will using a mobile phone have on your driving?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your vehicle will be harder to steer',
                img: '',
            },
            {
                char: 'b',
                text: 'Your field of vision will be reduced',
                img: '',
            },
            {
                char: 'c',
                text: 'Your attention will be diverted from the road',
                img: '',
            },
            {
                char: 'd',
                text: 'Your vehicle`s electronic systems will be disrupted',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7056',
        topicCode: 'The driver',
        question:
            'Your vehicle breaks down on the hard shoulder of a motorway. What should you do if you decide to use your mobile phone to call for help?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stand at the rear of the vehicle while making the call',
                img: '',
            },
            {
                char: 'b',
                text: 'Use the speed-dial function to save time',
                img: '',
            },
            {
                char: 'c',
                text: 'Set the tachograph to `Other work` before making the call',
                img: '',
            },
            {
                char: 'd',
                text: 'Check your location from the marker posts on the left',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7057',
        topicCode: 'The driver',
        question:
            'How should you answer a mobile phone call while you`re driving?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reduce your speed wherever you are',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop safely before answering',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep one hand on the steering wheel',
                img: '',
            },
            {
                char: 'd',
                text: 'Slow down and allow others to overtake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7074',
        topicCode: 'The driver',
        question:
            'You`re overtaking a lorry. What should you do if you see the driver flash their headlights?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Move back to the left when you judge it`s safe to do so',
                img: '',
            },
            {
                char: 'b',
                text: 'Take their signal to mean it`s safe to move back to the left',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop; there must be something wrong with your vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Flash your hazard warning lights and move back to the left',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7075',
        topicCode: 'The driver',
        question:
            'A bus has stopped at a bus stop ahead of you. What should you do if its right-hand indicator is flashing?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights and slow down',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down and give way if it`s safe to do so',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn and keep going',
                img: '',
            },
            {
                char: 'd',
                text: 'Slow down and then sound your horn',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7076',
        topicCode: 'The driver',
        question:
            'You`ve stopped for an elderly pedestrian who`s slowly crossing the road. What should you do if traffic behind you is being held up?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Edge forward slowly and make them hurry',
                img: '',
            },
            {
                char: 'b',
                text: 'Stay where you are and allow them to cross in their own time',
                img: '',
            },
            {
                char: 'c',
                text: 'Steer slowly around them to ease the build-up of traffic',
                img: '',
            },
            {
                char: 'd',
                text: 'Get out of your vehicle and wave them across',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7077',
        topicCode: 'The driver',
        question:
            'How should you let other vehicles overtake when you`re driving a slow-moving vehicle along a narrow road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Maintain a steady speed',
                img: '',
            },
            {
                char: 'b',
                text: 'Wave them past ',
                img: '',
            },
            {
                char: 'c',
                text: 'Give a left-turn signal',
                img: '',
            },
            {
                char: 'd',
                text: 'Pull in when you can ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7082',
        topicCode: 'The driver',
        question:
            'How is using a hands-free phone likely to affect your driving?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It will improve your safety',
                img: '',
            },
            {
                char: 'b',
                text: 'It will increase your concentration ',
                img: '',
            },
            {
                char: 'c',
                text: 'It will reduce your view ',
                img: '',
            },
            {
                char: 'd',
                text: 'It will divert your attention ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7083',
        topicCode: 'The driver',
        question:
            'You`re driving on the motorway and want to use your mobile phone. What should you do before using it?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Reduce your speed to 40 mph',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop on the hard shoulder',
                img: '',
            },
            {
                char: 'c',
                text: 'Move into the left-hand lane',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop in a safe place when you can',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7084',
        topicCode: 'The driver',
        question: 'What effect will drinking alcohol have on your driving?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Better forward planning',
                img: '',
            },
            {
                char: 'b',
                text: 'A false sense of confidence',
                img: '',
            },
            {
                char: 'c',
                text: 'Faster reactions',
                img: '',
            },
            {
                char: 'd',
                text: 'Greater awareness of danger',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7102',
        topicCode: 'The driver',
        question:
            'You`re driving on a motorway. There`s been a collision on the opposite carriageway. What should you do if drivers ahead are slowing to look?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Concentrate on the road ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down to take a look',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop on the hard shoulder',
                img: '',
            },
            {
                char: 'd',
                text: 'Overtake using the hard shoulder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7116',
        topicCode: 'The driver',
        question:
            'What do you need to be aware of when driving a vehicle fitted with power-assisted steering? ',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It causes less tyre wear',
                img: '',
            },
            {
                char: 'b',
                text: 'It prevents you from oversteering',
                img: '',
            },
            {
                char: 'c',
                text: 'It makes it easier for you to steer',
                img: '',
            },
            {
                char: 'd',
                text: 'It only works at high speeds',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7148',
        topicCode: 'The driver',
        question:
            'What should you do if a car driver makes a mistake that causes you to brake?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep calm and don`t retaliate',
                img: '',
            },
            {
                char: 'b',
                text: 'Overtake and sound your horn',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive close behind and sound your horn',
                img: '',
            },
            {
                char: 'd',
                text: 'Flag the driver down and explain the mistake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7149',
        topicCode: 'The driver',
        question:
            'What should you do if you`re upset by another driver`s behaviour?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop and take a break',
                img: '',
            },
            {
                char: 'b',
                text: 'Shout abusive language',
                img: '',
            },
            {
                char: 'c',
                text: 'Gesture to them with your hand',
                img: '',
            },
            {
                char: 'd',
                text: 'Follow them, flashing your headlights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7150',
        topicCode: 'The driver',
        question:
            'What should you do if another driver does something that upsets you?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stay calm and don`t retaliate',
                img: '',
            },
            {
                char: 'b',
                text: 'Let them know how you feel',
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your headlights several times',
                img: '',
            },
            {
                char: 'd',
                text: 'Sound your horn',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7178',
        topicCode: 'The driver',
        question:
            'You`re driving in fast-moving traffic along a motorway. What should you do if there`s a stationary queue of traffic ahead?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Move to the hard shoulder',
                img: '',
            },
            {
                char: 'b',
                text: 'Change lanes',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch on your rear fog lights',
                img: '',
            },
            {
                char: 'd',
                text: 'Switch on your hazard warning lights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7179',
        topicCode: 'The driver',
        question:
            'You`re turning right onto a dual carriageway from a side road. What should you do if your vehicle is too long for the gap in the central reservation?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move forward and wait in the middle',
                img: '',
            },
            {
                char: 'b',
                text: 'Wait until it`s clear in both directions',
                img: '',
            },
            {
                char: 'c',
                text: 'Move out, blocking traffic from the right',
                img: '',
            },
            {
                char: 'd',
                text: 'Edge out slowly so other traffic will see you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7180',
        topicCode: 'The driver',
        question:
            'You want to turn left at a junction. What affects the position you take up as you approach the junction?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The length of your vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'The axle weight of your vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'The camber of the road',
                img: '',
            },
            {
                char: 'd',
                text: 'The type of road surface',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7257',
        topicCode: 'The driver',
        question: 'What should you do when you have to travel a long distance?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow plenty of time for your journey',
                img: '',
            },
            {
                char: 'b',
                text: 'Plan to go at busy times',
                img: '',
            },
            {
                char: 'c',
                text: 'Avoid all national-speed-limit roads',
                img: '',
            },
            {
                char: 'd',
                text: 'Prevent other drivers from overtaking',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7274',
        topicCode: 'The driver',
        question:
            'What can you do to help maintain concentration while you`re driving?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Eat sugary snacks when on duty',
                img: '',
            },
            {
                char: 'b',
                text: 'Have regular meals and rest breaks',
                img: '',
            },
            {
                char: 'c',
                text: 'Don`t eat at all when on duty',
                img: '',
            },
            {
                char: 'd',
                text: 'Avoid meals containing bread',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7280',
        topicCode: 'The driver',
        question:
            'What should you do to help your concentration when you have to drive through the night?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Eat lots of snacks while you`re driving ',
                img: '',
            },
            {
                char: 'b',
                text: 'Eat a big meal in the middle of your shift',
                img: '',
            },
            {
                char: 'c',
                text: 'Eat a meal at the beginning of your shift',
                img: '',
            },
            {
                char: 'd',
                text: 'Eat nothing during your period of work',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7305',
        topicCode: 'The driver',
        question: 'When is there a particular risk of sleep-related incidents?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Between midnight and 6 am',
                img: '',
            },
            {
                char: 'b',
                text: 'Between 11 pm and 2 am',
                img: '',
            },
            {
                char: 'c',
                text: 'Between 6 pm and 11 pm',
                img: '',
            },
            {
                char: 'd',
                text: 'Between 7 am and 2 pm',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7330',
        topicCode: 'The driver',
        question:
            'Poor eating habits can increase your risk of long-term health problems. What may result from a poor diet?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Deafness',
                img: '',
            },
            {
                char: 'b',
                text: 'Epilepsy',
                img: '',
            },
            {
                char: 'c',
                text: 'Lung disease',
                img: '',
            },
            {
                char: 'd',
                text: 'Heart disease',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7341',
        topicCode: 'The driver',
        question:
            'What should you do when you`ve been driving for a long time and are fighting sleep?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop and rest',
                img: '',
            },
            {
                char: 'b',
                text: 'Open a window',
                img: '',
            },
            {
                char: 'c',
                text: 'Play loud music ',
                img: '',
            },
            {
                char: 'd',
                text: 'Stretch your arms ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7357',
        topicCode: 'The driver',
        question:
            'What should you try to do when your vehicle has a front-tyre blow-out?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Hold the steering wheel firmly and slow down gradually',
                img: '',
            },
            {
                char: 'b',
                text: 'Steer to the right-hand side and brake firmly',
                img: '',
            },
            {
                char: 'c',
                text: 'Don`t use your brakes under any circumstances',
                img: '',
            },
            {
                char: 'd',
                text: 'Brake hard and steer towards the affected side',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7358',
        topicCode: 'The driver',
        question: 'When can you drive without wearing a seat belt?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you hold a medical exemption certificate',
                img: '',
            },
            {
                char: 'b',
                text: 'When the seat belt is too large for your use',
                img: '',
            },
            {
                char: 'c',
                text: 'When you`re driving on a motorway',
                img: '',
            },
            {
                char: 'd',
                text: 'When the speed limit is 30 mph or less',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7364',
        topicCode: 'The driver',
        question:
            'How will your body clock affect your driving between midnight and 6.00 am?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You`re more likely to fall asleep at the wheel',
                img: '',
            },
            {
                char: 'b',
                text: 'You`re more likely to feel road rage',
                img: '',
            },
            {
                char: 'c',
                text: 'You`re more likely to break the speed limit',
                img: '',
            },
            {
                char: 'd',
                text: 'You`re more likely to drive too close to the vehicle in front',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7384',
        topicCode: 'The driver',
        question:
            'What`s provided specifically to protect you against neck and whiplash injuries?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'An air-sprung seat',
                img: '',
            },
            {
                char: 'b',
                text: 'Anti-lock brakes',
                img: '',
            },
            {
                char: 'c',
                text: 'A collapsible steering wheel',
                img: '',
            },
            {
                char: 'd',
                text: 'A head restraint',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8245',
        topicCode: 'The driver',
        question:
            'When are you allowed to drive a bus without wearing the seat belt?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When the seat belt is uncomfortable',
                img: '',
            },
            {
                char: 'b',
                text: 'When it`s a lap-only type of seat belt',
                img: '',
            },
            {
                char: 'c',
                text: 'When you`re reversing the vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'When your passengers are children',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8290',
        topicCode: 'The driver',
        question: 'What must be clearly displayed on your bus?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The route timetable',
                img: '',
            },
            {
                char: 'b',
                text: 'The location of all bus stops',
                img: '',
            },
            {
                char: 'c',
                text: 'The emergency-exit location',
                img: '',
            },
            {
                char: 'd',
                text: 'Your employee number',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8303',
        topicCode: 'The driver',
        question:
            'You`re driving on a dual carriageway. When would you use the nearside mirror?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To check that the driver`s door is closed properly',
                img: '',
            },
            {
                char: 'b',
                text: 'After overtaking, to see whether it`s safe to return to the left',
                img: '',
            },
            {
                char: 'c',
                text: 'To see whether any passengers want the next bus stop',
                img: '',
            },
            {
                char: 'd',
                text: 'To look for following traffic moving out to overtake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8317',
        topicCode: 'The driver',
        question:
            'What should you do while you`re driving a bus in a built-up area?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep junctions clear',
                img: '',
            },
            {
                char: 'b',
                text: 'Reduce your stopping distance',
                img: '',
            },
            {
                char: 'c',
                text: 'Stay ahead of cyclists and motorcyclists',
                img: '',
            },
            {
                char: 'd',
                text: 'Allow less time for passengers to board',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8033',
        topicCode: 'Carrying passengers',
        question: 'What`s your main responsibility as a bus driver?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The safety and comfort of your passengers',
                img: '',
            },
            {
                char: 'b',
                text: 'Keeping to a strict timetable',
                img: '',
            },
            {
                char: 'c',
                text: 'The collecting of fares',
                img: '',
            },
            {
                char: 'd',
                text: 'The issuing of tickets',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8034',
        topicCode: 'Carrying passengers',
        question: 'How can a bus driver show care for their passengers?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'By taking fares while moving, to save time',
                img: '',
            },
            {
                char: 'b',
                text: 'By reaching destinations early',
                img: '',
            },
            {
                char: 'c',
                text: 'By not speaking when taking fares',
                img: '',
            },
            {
                char: 'd',
                text: 'By stopping close to the kerb',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8035',
        topicCode: 'Carrying passengers',
        question:
            'What`s the main reason for using smooth acceleration when you`re driving a bus?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To reduce wear on the tyres',
                img: '',
            },
            {
                char: 'b',
                text: 'To reduce wear on the engine',
                img: '',
            },
            {
                char: 'c',
                text: 'To improve fuel consumption',
                img: '',
            },
            {
                char: 'd',
                text: 'To improve passenger comfort',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8037',
        topicCode: 'Carrying passengers',
        question: 'How can you avoid harsh braking?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Pump the brakes when approaching a bus stop ',
                img: '',
            },
            {
                char: 'b',
                text: 'Use only the gears to slow down',
                img: '',
            },
            {
                char: 'c',
                text: 'Use the parking brake just before stopping ',
                img: '',
            },
            {
                char: 'd',
                text: 'Plan ahead and take early action on all stops ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8038',
        topicCode: 'Carrying passengers',
        question:
            'Where are passengers likely to be thrown when a bus driver brakes harshly?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To the front of the bus',
                img: '',
            },
            {
                char: 'b',
                text: 'To the rear of the bus',
                img: '',
            },
            {
                char: 'c',
                text: 'To the nearside',
                img: '',
            },
            {
                char: 'd',
                text: 'To the offside',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8039',
        topicCode: 'Carrying passengers',
        question: 'How can you avoid harsh braking?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Gently apply the parking brake',
                img: '',
            },
            {
                char: 'b',
                text: 'Plan ahead and take early action',
                img: '',
            },
            {
                char: 'c',
                text: 'Slow down by using your gears only',
                img: '',
            },
            {
                char: 'd',
                text: 'Pump the brake pedal several times',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8040',
        topicCode: 'Carrying passengers',
        question:
            'When would passengers be most likely to notice weight transfer?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When the vehicle is parking',
                img: '',
            },
            {
                char: 'b',
                text: 'When the vehicle is cornering',
                img: '',
            },
            {
                char: 'c',
                text: 'When the vehicle is reversing',
                img: '',
            },
            {
                char: 'd',
                text: 'When the vehicle is overtaking',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8041',
        topicCode: 'Carrying passengers',
        question:
            'Well ahead of you are traffic lights on green. What should you do in case the lights change to red?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Accelerate to make sure you can cross before they change',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down to avoid the need to stop suddenly',
                img: '',
            },
            {
                char: 'c',
                text: 'Accelerate, but warn your passengers you may have to stop',
                img: '',
            },
            {
                char: 'd',
                text: 'Carry on at a constant speed, but be ready to sound your horn',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8043',
        topicCode: 'Carrying passengers',
        question: 'Why should a bus driver avoid stopping harshly?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To preserve the tyres',
                img: '',
            },
            {
                char: 'b',
                text: 'To avoid wear on the brakes',
                img: '',
            },
            {
                char: 'c',
                text: 'To keep the passengers safe',
                img: '',
            },
            {
                char: 'd',
                text: 'To stop the suspension bouncing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8044',
        topicCode: 'Carrying passengers',
        question:
            'Where may passengers be thrown when a bus takes a bend too fast?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Towards the outside of the bend',
                img: '',
            },
            {
                char: 'b',
                text: 'Towards the inside of the bend',
                img: '',
            },
            {
                char: 'c',
                text: 'Towards the front of the bus',
                img: '',
            },
            {
                char: 'd',
                text: 'Towards the rear of the bus',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8045',
        topicCode: 'Carrying passengers',
        question:
            'What would contribute to the safety and comfort of your passengers?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Giving change on the move',
                img: '',
            },
            {
                char: 'b',
                text: 'Driving with the door open',
                img: '',
            },
            {
                char: 'c',
                text: 'Thinking and planning well ahead',
                img: '',
            },
            {
                char: 'd',
                text: 'Braking hard before reaching a bend',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8046',
        topicCode: 'Carrying passengers',
        question:
            'What should you be most aware of before moving off from a standstill?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Passengers making phone calls',
                img: '',
            },
            {
                char: 'b',
                text: 'Passengers smoking on the bus',
                img: '',
            },
            {
                char: 'c',
                text: 'Passengers asking you directions',
                img: '',
            },
            {
                char: 'd',
                text: 'Passengers getting off the bus',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8049',
        topicCode: 'Carrying passengers',
        question:
            'Your bus is fitted with seat belts. When should passengers wear them?\n',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'During journeys of more than 20 minutes',
                img: '',
            },
            {
                char: 'b',
                text: 'Only when travelling in EU countries',
                img: '',
            },
            {
                char: 'c',
                text: 'Only when travelling on motorways',
                img: '',
            },
            {
                char: 'd',
                text: 'At all times',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8050',
        topicCode: 'Carrying passengers',
        question: 'Which of these is a legal requirement for every bus?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A fire extinguisher',
                img: '',
            },
            {
                char: 'b',
                text: 'A current timetable',
                img: '',
            },
            {
                char: 'c',
                text: 'A mobile phone or radio',
                img: '',
            },
            {
                char: 'd',
                text: 'A working tachograph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8051',
        topicCode: 'Carrying passengers',
        question: 'What must be clearly labelled on a bus?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The location of the air vents',
                img: '',
            },
            {
                char: 'b',
                text: 'The location of the first-aid equipment',
                img: '',
            },
            {
                char: 'c',
                text: 'The location of the security cameras',
                img: '',
            },
            {
                char: 'd',
                text: 'The location of the bus station',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8053',
        topicCode: 'Carrying passengers',
        question:
            'A passenger is boarding your bus. What does it mean if they`re carrying a white stick with a red ring painted on it?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They have a learning difficulty',
                img: '',
            },
            {
                char: 'b',
                text: 'They have poor vision and hearing',
                img: '',
            },
            {
                char: 'c',
                text: 'They have a physical disability',
                img: '',
            },
            {
                char: 'd',
                text: 'They have a speech problem',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8056',
        topicCode: 'Carrying passengers',
        question:
            'What should a bus driver do to help passengers have a good journey?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep to the timetable regardless of comfort',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive on before people are seated',
                img: '',
            },
            {
                char: 'c',
                text: 'Look ahead when issuing tickets',
                img: '',
            },
            {
                char: 'd',
                text: 'Be courteous and polite',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8057 ',
        topicCode: 'Carrying passengers',
        question:
            'Why should you look at passengers when you`re collecting fares from them?',
        questionImg: 'VB3508.tif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To see if they`re carrying bags',
                img: '',
            },
            {
                char: 'b',
                text: 'To remove the threat of violence',
                img: '',
            },
            {
                char: 'c',
                text: 'To be courteous and polite',
                img: '',
            },
            {
                char: 'd',
                text: 'To show them you`re in charge',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8058',
        topicCode: 'Carrying passengers',
        question:
            'What should you do when dealing with passengers who have hearing difficulties?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Shout as loudly as you can',
                img: '',
            },
            {
                char: 'b',
                text: 'Ask another passenger to help them',
                img: '',
            },
            {
                char: 'c',
                text: 'Hurry to get them to their seats',
                img: '',
            },
            {
                char: 'd',
                text: 'Look at them when speaking to them',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8060',
        topicCode: 'Carrying passengers',
        question: 'What`s the purpose of a kneeling bus?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To improve passenger comfort on bumpy roads',
                img: '',
            },
            {
                char: 'b',
                text: 'To help with access under low bridges',
                img: '',
            },
            {
                char: 'c',
                text: 'To allow the step height to be raised and lowered',
                img: '',
            },
            {
                char: 'd',
                text: 'To give more clearance over speed ramps',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8061 ',
        topicCode: 'Carrying passengers',
        question:
            'Why would this sign be fitted to the front and rear of a bus?',
        questionImg: 'TS4546.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The bus may be carrying children',
                img: '',
            },
            {
                char: 'b',
                text: 'Children must be accompanied by an adult',
                img: '',
            },
            {
                char: 'c',
                text: 'The bus is carrying blind people',
                img: '',
            },
            {
                char: 'd',
                text: 'The driver will help disabled people',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8063 ',
        topicCode: 'Carrying passengers',
        question:
            'You`re driving a bus displaying this sign. When can you use its hazard warning lights?',
        questionImg: 'TS4546.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When stopped at a pedestrian crossing',
                img: '',
            },
            {
                char: 'b',
                text: 'When children are getting on or off the vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'When approaching a school crossing patrol',
                img: '',
            },
            {
                char: 'd',
                text: 'When there`s a sign warning of a school ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8067',
        topicCode: 'Carrying passengers',
        question:
            'Your bus has broken down at night. Why should you move your passengers to the front of the bus?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To keep the bus stable',
                img: '',
            },
            {
                char: 'b',
                text: 'To help you see clearly out of the back window',
                img: '',
            },
            {
                char: 'c',
                text: 'To limit injuries in the event of a rear-end collision',
                img: '',
            },
            {
                char: 'd',
                text: 'To keep them informed about the breakdown',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8069',
        topicCode: 'Carrying passengers',
        question:
            'What should you do when you`re driving a coach at night and you have passengers on board?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop more often',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch off the radio',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep the interior lit',
                img: '',
            },
            {
                char: 'd',
                text: 'Close the curtains',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8070 ',
        topicCode: 'Carrying passengers',
        question:
            'What should you do if there`s a fire on the upper deck of your bus?',
        questionImg: 'VB3506.tif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move all the passengers to the lower deck',
                img: '',
            },
            {
                char: 'b',
                text: 'Get all the passengers off the bus',
                img: '',
            },
            {
                char: 'c',
                text: 'Make sure passengers have their belongings',
                img: '',
            },
            {
                char: 'd',
                text: 'Open all the windows on the upper deck',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8179',
        topicCode: 'Carrying passengers',
        question: 'What are kneeling buses designed to improve?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Access for the driver',
                img: '',
            },
            {
                char: 'b',
                text: 'Access to the luggage bay',
                img: '',
            },
            {
                char: 'c',
                text: 'Access for passengers',
                img: '',
            },
            {
                char: 'd',
                text: 'Access for maintenance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8186',
        topicCode: 'Carrying passengers',
        question:
            'You`re driving a bus carrying passengers at night. Why should you always switch on the interior lights?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It will help you see the road ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'So that passengers can see to move around',
                img: '',
            },
            {
                char: 'c',
                text: 'It will help passengers to see outside ',
                img: '',
            },
            {
                char: 'd',
                text: 'So that you can see your controls',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8194',
        topicCode: 'Carrying passengers',
        question:
            'Which passengers should you especially watch for as you move off?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Those smoking in the lower saloon',
                img: '',
            },
            {
                char: 'b',
                text: 'Those standing in the upper saloon',
                img: '',
            },
            {
                char: 'c',
                text: 'Those avoiding paying the correct fare',
                img: '',
            },
            {
                char: 'd',
                text: 'Those attempting to board the bus',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8196',
        topicCode: 'Carrying passengers',
        question:
            'What could you do to help a passenger who has difficulty walking?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drive quickly, so that the passenger has a shorter journey',
                img: '',
            },
            {
                char: 'b',
                text: 'Wait until the passenger has sat down before moving away',
                img: '',
            },
            {
                char: 'c',
                text: 'Make sure the passenger has a window seat',
                img: '',
            },
            {
                char: 'd',
                text: 'Suggest that the passenger stands near the door',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8219',
        topicCode: 'Carrying passengers',
        question:
            'You`re the driver of a bus displaying reflective yellow school-bus signs. When are you allowed to use hazard warning lights?',
        questionImg: 'TS4546.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When parked to take a rest period',
                img: '',
            },
            {
                char: 'b',
                text: 'When children are boarding the bus',
                img: '',
            },
            {
                char: 'c',
                text: 'When slowing down to approach a bus stop',
                img: '',
            },
            {
                char: 'd',
                text: 'When slowing down to find a parking space',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8231',
        topicCode: 'Carrying passengers',
        question:
            'You`re parking your coach at a coastal resort. What should you do if your passengers will still have access to the vehicle?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Ask the passengers to take all of their belongings',
                img: '',
            },
            {
                char: 'b',
                text: 'Park with the gear lever in neutral',
                img: '',
            },
            {
                char: 'c',
                text: 'Ensure the storage lockers are left open',
                img: '',
            },
            {
                char: 'd',
                text: 'Leave a responsible person on the coach',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8233',
        topicCode: 'Carrying passengers',
        question:
            'What should you be especially aware of while you`re driving a double-deck bus on a road with a steep camber? ',
        questionImg: 'VB3501.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Lampposts',
                img: '',
            },
            {
                char: 'b',
                text: 'Parking meters',
                img: '',
            },
            {
                char: 'c',
                text: 'Parked cars',
                img: '',
            },
            {
                char: 'd',
                text: 'Litter bins',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8235',
        topicCode: 'Carrying passengers',
        question:
            'What`s the likely weight difference between an empty bus and a bus with 75 passengers on board?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '5 tonnes',
                img: '',
            },
            {
                char: 'b',
                text: '10 tonnes',
                img: '',
            },
            {
                char: 'c',
                text: '15 tonnes',
                img: '',
            },
            {
                char: 'd',
                text: '20 tonnes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8236',
        topicCode: 'Carrying passengers',
        question:
            'It`s important to be able to work out the weight difference between a full bus and an empty one. How many passengers will add about 1 tonne to the vehicle`s overall weight?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '8',
                img: '',
            },
            {
                char: 'b',
                text: '15',
                img: '',
            },
            {
                char: 'c',
                text: '25',
                img: '',
            },
            {
                char: 'd',
                text: '30',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8242',
        topicCode: 'Carrying passengers',
        question:
            'What must buses and coaches display when they`re used for school contract work?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'School-bus signs',
                img: '',
            },
            {
                char: 'b',
                text: 'Flashing amber beacons',
                img: '',
            },
            {
                char: 'c',
                text: 'Triangular warning signs',
                img: '',
            },
            {
                char: 'd',
                text: '`No overtaking` signs',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8276',
        topicCode: 'Carrying passengers',
        question:
            'What do you have to be aware of when driving a double-deck bus on a road that has a steep camber?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '`Keep left` islands',
                img: '',
            },
            {
                char: 'b',
                text: 'A smooth road surface',
                img: '',
            },
            {
                char: 'c',
                text: 'Pedestrian crossings',
                img: '',
            },
            {
                char: 'd',
                text: 'Overhanging trees',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8277',
        topicCode: 'Carrying passengers',
        question: 'What does good passenger care include?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Making criticisms of other road users',
                img: '',
            },
            {
                char: 'b',
                text: 'Providing a commentary on the route',
                img: '',
            },
            {
                char: 'c',
                text: 'Talking to passengers while driving',
                img: '',
            },
            {
                char: 'd',
                text: 'Helping passengers who need directions',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8278',
        topicCode: 'Carrying passengers',
        question:
            'Your bus is fitted with lifts or ramps for less mobile passengers. Who should operate this equipment?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Wheelchair attendants',
                img: '',
            },
            {
                char: 'b',
                text: 'Fully trained people',
                img: '',
            },
            {
                char: 'c',
                text: 'Bus-company employees',
                img: '',
            },
            {
                char: 'd',
                text: 'Accompanying nurses',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8284',
        topicCode: 'Carrying passengers',
        question: 'What does a kneeling bus improve?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Access for disabled people',
                img: '',
            },
            {
                char: 'b',
                text: 'Stability when cornering',
                img: '',
            },
            {
                char: 'c',
                text: 'Passenger comfort at higher speeds',
                img: '',
            },
            {
                char: 'd',
                text: 'Access for the driver',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8285',
        topicCode: 'Carrying passengers',
        question:
            'Your double-deck bus breaks down on a busy road. Where should you ask your passengers to move to?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The rear of the bus',
                img: '',
            },
            {
                char: 'b',
                text: 'The top deck',
                img: '',
            },
            {
                char: 'c',
                text: 'The lower deck',
                img: '',
            },
            {
                char: 'd',
                text: 'The front of the bus',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8286',
        topicCode: 'Carrying passengers',
        question:
            'What should you watch for when you drive away from a bus stop?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Passengers who avoid paying the correct fare',
                img: '',
            },
            {
                char: 'b',
                text: 'Passengers smoking in the lower saloon',
                img: '',
            },
            {
                char: 'c',
                text: 'Passengers leaving the bus',
                img: '',
            },
            {
                char: 'd',
                text: 'Passengers using expired travel passes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8287',
        topicCode: 'Carrying passengers',
        question:
            'What must you do before moving off when you`re driving a service bus?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Finish issuing tickets to passengers',
                img: '',
            },
            {
                char: 'b',
                text: 'Ensure your fuel tank is above a quarter full',
                img: '',
            },
            {
                char: 'c',
                text: 'Take off your sunglasses',
                img: '',
            },
            {
                char: 'd',
                text: 'Make sure all passengers have a seat',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8289',
        topicCode: 'Carrying passengers',
        question:
            'Your bus breaks down on the motorway. What should you do if it isn`t feasible to remove your passengers from the vehicle?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move passengers to the rear of the bus',
                img: '',
            },
            {
                char: 'b',
                text: 'Move passengers to the front of the bus',
                img: '',
            },
            {
                char: 'c',
                text: 'Move passengers to the middle of the bus',
                img: '',
            },
            {
                char: 'd',
                text: 'Tell passengers to stay in the same seats',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8299',
        topicCode: 'Carrying passengers',
        question: 'What`s a bus driver`s first priority?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The safety and comfort of passengers',
                img: '',
            },
            {
                char: 'b',
                text: 'Keeping to the timetable',
                img: '',
            },
            {
                char: 'c',
                text: 'Completing tachograph records correctly',
                img: '',
            },
            {
                char: 'd',
                text: 'Making sure the destination is clearly marked',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8301',
        topicCode: 'Carrying passengers',
        question:
            'You`re the driver of a one-person-operated double-deck bus. How do you stay aware of passengers on the top deck?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'By counting passengers up and down the staircase',
                img: '',
            },
            {
                char: 'b',
                text: 'By frequent checks upstairs while stopped at bus stops',
                img: '',
            },
            {
                char: 'c',
                text: 'By listening to passengers in the upstairs gangway when approaching bus stops',
                img: '',
            },
            {
                char: 'd',
                text: 'By making full use of the internal mirror system',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8302',
        topicCode: 'Carrying passengers',
        question:
            'You`re driving a double-deck bus. Why do you need to know if anyone is using the stairs?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The upper deck is only to be used when the lower deck is full',
                img: '',
            },
            {
                char: 'b',
                text: 'Tickets for the upper deck are more expensive',
                img: '',
            },
            {
                char: 'c',
                text: 'Passengers using the stairs could fall if the bus brakes or swerves',
                img: '',
            },
            {
                char: 'd',
                text: 'No-one under 18 years old may use the stairs',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8304',
        topicCode: 'Carrying passengers',
        question:
            'Where should you stop when you`re stopping to collect passengers at a bus stop?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Close to the kerb',
                img: '',
            },
            {
                char: 'b',
                text: 'Away from the kerb',
                img: '',
            },
            {
                char: 'c',
                text: 'After the bus stop',
                img: '',
            },
            {
                char: 'd',
                text: 'Before the bus stop',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8305',
        topicCode: 'Carrying passengers',
        question:
            'Where should you stop to make it easy for passengers leaving or joining your bus?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Next to soft grass',
                img: '',
            },
            {
                char: 'b',
                text: 'Alongside guard rails',
                img: '',
            },
            {
                char: 'c',
                text: 'Near parked cars',
                img: '',
            },
            {
                char: 'd',
                text: 'Close to the kerb',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8306',
        topicCode: 'Carrying passengers',
        question:
            'A bus stop is blocked and you can`t get into it. What`s the most important thing you should do before opening the exit door?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Try to get the bus stop cleared',
                img: '',
            },
            {
                char: 'b',
                text: 'Carry on to the next bus stop',
                img: '',
            },
            {
                char: 'c',
                text: 'Check for traffic on the left',
                img: '',
            },
            {
                char: 'd',
                text: 'Check for traffic on the right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8307',
        topicCode: 'Carrying passengers',
        question:
            'Several parked cars are blocking your bus stop. What should you do before allowing passengers to leave the bus?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move on to the next bus stop',
                img: '',
            },
            {
                char: 'b',
                text: 'Check it`s clear of traffic on the left',
                img: '',
            },
            {
                char: 'c',
                text: 'Try to find the car owners',
                img: '',
            },
            {
                char: 'd',
                text: 'Check it`s clear of traffic on the right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8308',
        topicCode: 'Carrying passengers',
        question: 'What should you do before allowing passengers off your bus?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Collect their used tickets',
                img: '',
            },
            {
                char: 'b',
                text: 'Activate an audible warning system',
                img: '',
            },
            {
                char: 'c',
                text: 'Check mirrors before opening doors',
                img: '',
            },
            {
                char: 'd',
                text: 'Ask if they have luggage to collect',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8309',
        topicCode: 'Carrying passengers',
        question:
            'Passengers may be in a hurry to get off the bus as you approach a bus stop. What should you do to reduce any dangers?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Insist that passengers stay seated until the bus stops',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop just before the bus stop and let passengers get off',
                img: '',
            },
            {
                char: 'c',
                text: 'Let passengers on to the bus before letting passengers off',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep the passenger doors closed until the bus has stopped',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8312',
        topicCode: 'Carrying passengers',
        question:
            'When can you drive a bus at night without having the interior lights switched on?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When the passengers want to sleep',
                img: '',
            },
            {
                char: 'b',
                text: 'When most passengers want the lights off',
                img: '',
            },
            {
                char: 'c',
                text: 'When there are no standing passengers',
                img: '',
            },
            {
                char: 'd',
                text: 'When there are no passengers',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8313',
        topicCode: 'Carrying passengers',
        question:
            'You`re driving a bus in hot weather. Can the passenger door be left open to let in fresh air?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Yes, this is normal practice',
                img: '',
            },
            {
                char: 'b',
                text: 'No, unless all passengers are seated',
                img: '',
            },
            {
                char: 'c',
                text: 'Yes, unless carrying schoolchildren',
                img: '',
            },
            {
                char: 'd',
                text: 'No, this isn`t allowed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8314',
        topicCode: 'Carrying passengers',
        question: 'How would your bus benefit from an air suspension system?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Fuel consumption will be reduced',
                img: '',
            },
            {
                char: 'b',
                text: 'Passenger comfort will be increased',
                img: '',
            },
            {
                char: 'c',
                text: 'It will allow you to drive faster',
                img: '',
            },
            {
                char: 'd',
                text: 'Your brakes will be more effective',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8315',
        topicCode: 'Carrying passengers',
        question:
            'A disabled person is getting on your bus. What should you do if they`re having problems, but say they can manage?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Be prepared to move off',
                img: '',
            },
            {
                char: 'b',
                text: 'Smile and offer to help them',
                img: '',
            },
            {
                char: 'c',
                text: 'Ask them politely to hurry up',
                img: '',
            },
            {
                char: 'd',
                text: 'Do nothing; you can`t leave your seat',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8320',
        topicCode: 'Carrying passengers',
        question:
            'When may the built-in TV and video equipment be used on a coach?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When the coach is moving slowly',
                img: '',
            },
            {
                char: 'b',
                text: 'When it can`t be seen by the driver',
                img: '',
            },
            {
                char: 'c',
                text: 'During long motorway journeys',
                img: '',
            },
            {
                char: 'd',
                text: 'During a coach tour',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8333',
        topicCode: 'Carrying passengers',
        question:
            'What must be fitted to new buses, to benefit people with disabilities?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Internal mirror',
                img: '',
            },
            {
                char: 'b',
                text: 'Radio telephone',
                img: '',
            },
            {
                char: 'c',
                text: 'Automatic transmission',
                img: '',
            },
            {
                char: 'd',
                text: 'Priority seating',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8334',
        topicCode: 'Carrying passengers',
        question: 'Who should benefit from priority seating?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Those with heavy luggage',
                img: '',
            },
            {
                char: 'b',
                text: 'Those with a weekly pass',
                img: '',
            },
            {
                char: 'c',
                text: 'Those who get on first',
                img: '',
            },
            {
                char: 'd',
                text: 'Those with disabilities',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8345',
        topicCode: 'Carrying passengers',
        question:
            'A passenger using a wheelchair wants to get on your bus. When may you need to deny them access?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When the wheelchair won`t fit in the luggage rack ',
                img: '',
            },
            {
                char: 'b',
                text: 'When the boarding device has failed to work',
                img: '',
            },
            {
                char: 'c',
                text: 'When the passenger must remain in a wheelchair',
                img: '',
            },
            {
                char: 'd',
                text: 'When the heater on the vehicle isn`t working',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8351',
        topicCode: 'Carrying passengers',
        question:
            'Your bus is accessible to wheelchair users. In what situation can you refuse to allow them access?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When the designated space is occupied',
                img: '',
            },
            {
                char: 'b',
                text: 'When you`re running behind schedule',
                img: '',
            },
            {
                char: 'c',
                text: 'When traffic behind you will be held up',
                img: '',
            },
            {
                char: 'd',
                text: 'When you`re shortly due to take a break',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8352',
        topicCode: 'Carrying passengers',
        question:
            'You`re driving a school bus carrying children. When can you make physical contact with a passenger?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In a medical emergency',
                img: '',
            },
            {
                char: 'b',
                text: 'To prevent fare dodging',
                img: '',
            },
            {
                char: 'c',
                text: 'When carrying luggage',
                img: '',
            },
            {
                char: 'd',
                text: 'When fastening seat belts',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8354',
        topicCode: 'Carrying passengers',
        question:
            'What should you wear when making a walk-round check of your coach?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Ear protectors',
                img: '',
            },
            {
                char: 'b',
                text: 'Protective goggles',
                img: '',
            },
            {
                char: 'c',
                text: 'High-visibility vest',
                img: '',
            },
            {
                char: 'd',
                text: 'Face mask',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8355',
        topicCode: 'Carrying passengers',
        question:
            'You`re about to drive on a route where you`ll be picking up wheelchair users. What must be checked before leaving the depot?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The boarding device',
                img: '',
            },
            {
                char: 'b',
                text: 'The radio',
                img: '',
            },
            {
                char: 'c',
                text: 'The door seals',
                img: '',
            },
            {
                char: 'd',
                text: 'The heater',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8356',
        topicCode: 'Carrying passengers',
        question: 'When can you refuse access to a wheelchair user?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When the lift has stopped working ',
                img: '',
            },
            {
                char: 'b',
                text: 'When the wheelchair won`t fold up ',
                img: '',
            },
            {
                char: 'c',
                text: 'When the heater has stopped working ',
                img: '',
            },
            {
                char: 'd',
                text: 'When the wheelchair is too heavy to lift manually',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8357',
        topicCode: 'Carrying passengers',
        question:
            'Why may you be unable to allow a person in a wheelchair to enter your bus?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Passengers are standing in a wheelchair space and can`t move elsewhere ',
                img: '',
            },
            {
                char: 'b',
                text: 'You`ll take time to load the wheelchair and fall behind schedule ',
                img: '',
            },
            {
                char: 'c',
                text: 'The wheelchair passenger will have to stand up',
                img: '',
            },
            {
                char: 'd',
                text: 'You can`t collapse the wheelchair ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8360',
        topicCode: 'Carrying passengers',
        question:
            'You`re at a bus stop. What should you do if passengers are standing on the open platform?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Put the chain across the platform',
                img: '',
            },
            {
                char: 'b',
                text: 'Ask them to hold on tight',
                img: '',
            },
            {
                char: 'c',
                text: 'Move off but drive more slowly',
                img: '',
            },
            {
                char: 'd',
                text: 'Wait until they`re inside the bus',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5235',
        topicCode: 'The road',
        question:
            'What should you do when you overtake a cyclist on a two-way road? ',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pass closely, staying about 1 metre (3 feet 3 inches) from the kerb',
                img: '',
            },
            {
                char: 'b',
                text: 'Go past quickly and move back to the left sharply',
                img: '',
            },
            {
                char: 'c',
                text: 'Leave plenty of room and check your nearside mirror before returning to the left',
                img: '',
            },
            {
                char: 'd',
                text: 'Give a right-turn signal after you`ve moved out to overtake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5241',
        topicCode: 'The road',
        question:
            'Your lorry has a curtain-sided body. Your route will take you over several high-level bridges. Why should you check the weather forecast before starting your journey? ',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Rain can make crossing bridges very difficult for large vehicles',
                img: '',
            },
            {
                char: 'b',
                text: 'In hot weather, the bridges might be closed to heavy traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'You won`t be able to cross the bridges if it`s frosty',
                img: '',
            },
            {
                char: 'd',
                text: 'High-level bridges may be closed to certain vehicles in windy weather',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5248',
        topicCode: 'The road',
        question:
            'What should you do when you want to join a motorway where traffic is flowing freely?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Keep to a low speed until you see a gap on the motorway',
                img: '',
            },
            {
                char: 'b',
                text: 'Build up your speed on the slip road before joining the motorway',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop at the start of the slip road and move off when you see a gap',
                img: '',
            },
            {
                char: 'd',
                text: 'Use the hard shoulder, if necessary, to build up speed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5280',
        topicCode: 'The road',
        question:
            'What should you do before driving your high-sided lorry in windy weather?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Check your wind deflector',
                img: '',
            },
            {
                char: 'b',
                text: 'Check your spray-suppression equipment',
                img: '',
            },
            {
                char: 'c',
                text: 'Plan your route in advance',
                img: '',
            },
            {
                char: 'd',
                text: 'Only half-load your lorry',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5303',
        topicCode: 'The road',
        question:
            'You`re overtaking another lorry. What should you do if you start to lose speed due to an uphill gradient?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue at the same speed and in the same position',
                img: '',
            },
            {
                char: 'b',
                text: 'Try to force the vehicle you were overtaking to drop back',
                img: '',
            },
            {
                char: 'c',
                text: 'Try to force the vehicle you were overtaking to speed up',
                img: '',
            },
            {
                char: 'd',
                text: 'Ease off and drop behind the vehicle you were trying to overtake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5304',
        topicCode: 'The road',
        question:
            'How could you reduce the problems caused by a strong side wind when driving an empty curtain-sided vehicle on an exposed bridge?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Tie one curtain open and lock open the rear doors',
                img: '',
            },
            {
                char: 'b',
                text: 'Leave both curtains closed',
                img: '',
            },
            {
                char: 'c',
                text: 'Tie both curtains open',
                img: '',
            },
            {
                char: 'd',
                text: 'Tie open the curtain on the side the wind`s blowing from',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5305',
        topicCode: 'The road',
        question: 'When is a high-sided vehicle most affected by side wind?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When it`s stationary',
                img: '',
            },
            {
                char: 'b',
                text: 'When it`s travelling loaded',
                img: '',
            },
            {
                char: 'c',
                text: 'When it`s being reversed',
                img: '',
            },
            {
                char: 'd',
                text: 'When it`s travelling empty',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5306',
        topicCode: 'The road',
        question:
            'You`re driving an empty curtain-sided vehicle. Why might you consider tying the curtains open?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To use less fuel',
                img: '',
            },
            {
                char: 'b',
                text: 'It`s a legal requirement',
                img: '',
            },
            {
                char: 'c',
                text: 'To prevent the curtains from tearing',
                img: '',
            },
            {
                char: 'd',
                text: 'To reduce the effect of side wind',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5308',
        topicCode: 'The road',
        question:
            'You`re driving a lorry towards a high bridge on a windy day. What should you expect?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Changed weight limits',
                img: '',
            },
            {
                char: 'b',
                text: 'No restrictions for lorries',
                img: '',
            },
            {
                char: 'c',
                text: 'Minimum speed limits',
                img: '',
            },
            {
                char: 'd',
                text: 'Lane closures',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5309',
        topicCode: 'The road',
        question:
            'Which of these vehicles is most at risk from strong side wind?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A laden lorry with box body',
                img: '',
            },
            {
                char: 'b',
                text: 'An unladen lorry with box body',
                img: '',
            },
            {
                char: 'c',
                text: 'An unladen lorry with platform body',
                img: '',
            },
            {
                char: 'd',
                text: 'A laden lorry with platform body',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5311',
        topicCode: 'The road',
        question:
            'In strong winds, an overtaking lorry can cause additional air turbulence that can affect other road users. Which vehicle is most at risk from this turbulence?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A car',
                img: '',
            },
            {
                char: 'b',
                text: 'A delivery van',
                img: '',
            },
            {
                char: 'c',
                text: 'A motorcycle',
                img: '',
            },
            {
                char: 'd',
                text: 'A coach',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5312',
        topicCode: 'The road',
        question: 'Which vehicle is most at risk in windy conditions?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'High-sided lorry',
                img: '',
            },
            {
                char: 'b',
                text: 'Saloon car',
                img: '',
            },
            {
                char: 'c',
                text: 'Tractor unit',
                img: '',
            },
            {
                char: 'd',
                text: 'Single-deck bus',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5313',
        topicCode: 'The road',
        question: 'When are air deflectors most effective?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When there`s a side wind',
                img: '',
            },
            {
                char: 'b',
                text: 'When there`s a headwind',
                img: '',
            },
            {
                char: 'c',
                text: 'When reversing',
                img: '',
            },
            {
                char: 'd',
                text: 'When there`s a strong tailwind',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5314',
        topicCode: 'The road',
        question:
            'You`re driving your lorry on the motorway. What should you do when visibility is reduced by heavy rain and spray?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Maintain a constant speed',
                img: '',
            },
            {
                char: 'b',
                text: 'Use main-beam headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Double your dry-weather separation distance',
                img: '',
            },
            {
                char: 'd',
                text: 'Stay in the left-hand lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5315',
        topicCode: 'The road',
        question:
            'What should you do before driving your lorry away from a wet construction site at the side of a motorway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Turn on your amber beacon',
                img: '',
            },
            {
                char: 'b',
                text: 'Drain the air tanks',
                img: '',
            },
            {
                char: 'c',
                text: 'Hose down the wheels',
                img: '',
            },
            {
                char: 'd',
                text: 'Set your tachograph to `other work`',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5316',
        topicCode: 'The road',
        question:
            'You`re driving a lorry from a wet construction site onto a motorway. Why must you take extra precautions before leaving the site?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your view from the cab will be obscured by plant machinery',
                img: '',
            },
            {
                char: 'b',
                text: 'It`s an offence to emerge from a works site onto a motorway',
                img: '',
            },
            {
                char: 'c',
                text: 'Your lorry`s spray-suppression equipment will be inoperative',
                img: '',
            },
            {
                char: 'd',
                text: 'It`s an offence to deposit mud on a road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5317',
        topicCode: 'The road',
        question:
            'What ground conditions are suitable for a tipper lorry to tip its load?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Soft and level',
                img: '',
            },
            {
                char: 'b',
                text: 'Soft and downhill',
                img: '',
            },
            {
                char: 'c',
                text: 'Solid and uphill',
                img: '',
            },
            {
                char: 'd',
                text: 'Solid and level',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5332',
        topicCode: 'The road',
        question:
            'You`re driving a lorry of more than 7.5 tonnes maximum authorised mass along a motorway. When can you use the right-hand lane to overtake?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When the motorway has two lanes',
                img: '',
            },
            {
                char: 'b',
                text: 'When the motorway has three lanes',
                img: '',
            },
            {
                char: 'c',
                text: 'When there`s a 50 mph speed limit',
                img: '',
            },
            {
                char: 'd',
                text: 'When there`s a 40 mph speed limit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5340',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway. You look in your mirrors and see smoke coming from your rear tyres. What should you do?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Reduce speed for the rest of your journey ',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive on the hard shoulder until the smoke stops',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop as soon as it`s safe to do so',
                img: '',
            },
            {
                char: 'd',
                text: 'Ignore it; this is normal when driving at speed ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5350',
        topicCode: 'The road',
        question:
            'You`re on a wet, level road, driving at 50 mph. What`s the minimum time gap you should leave between your vehicle and the one in front?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'One second',
                img: '',
            },
            {
                char: 'b',
                text: 'Two seconds',
                img: '',
            },
            {
                char: 'c',
                text: 'Three seconds',
                img: '',
            },
            {
                char: 'd',
                text: 'Four seconds',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5351',
        topicCode: 'The road',
        question:
            'You`re driving an articulated lorry on a three-lane motorway. When can you drive in the right-hand lane?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When overtaking a slow-moving car in the middle lane',
                img: '',
            },
            {
                char: 'b',
                text: 'When the escort vehicle of an oversized load signals you to pass',
                img: '',
            },
            {
                char: 'c',
                text: 'If no speed limiter is fitted to your lorry',
                img: '',
            },
            {
                char: 'd',
                text: 'If your lorry is unladen',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5352',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway and it`s raining heavily. What should you do when spray is causing poor visibility?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use dipped headlights',
                img: '',
            },
            {
                char: 'b',
                text: 'Use sidelights only',
                img: '',
            },
            {
                char: 'c',
                text: 'Remove spray-suppression equipment',
                img: '',
            },
            {
                char: 'd',
                text: 'Use the two-second rule',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC6616',
        topicCode: 'The road',
        question:
            'What might happen if using the brakes continuously causes them to overheat?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The brakes will work better',
                img: '',
            },
            {
                char: 'b',
                text: 'The brakes will be less effective',
                img: '',
            },
            {
                char: 'c',
                text: 'The brake pedal will become stiff',
                img: '',
            },
            {
                char: 'd',
                text: 'The air pressure will increase',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6620',
        topicCode: 'The road',
        question:
            'What do you need to be careful of when you`re driving in high winds?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Fallen trees',
                img: '',
            },
            {
                char: 'b',
                text: 'Poor visibility',
                img: '',
            },
            {
                char: 'c',
                text: 'A risk of grounding',
                img: '',
            },
            {
                char: 'd',
                text: 'Steep gradients',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6625',
        topicCode: 'The road',
        question:
            'What do you need to be aware of when you drive over an exposed suspension bridge?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The swaying of the bridge',
                img: '',
            },
            {
                char: 'b',
                text: 'The width of the lanes',
                img: '',
            },
            {
                char: 'c',
                text: 'The effect of strong side wind',
                img: '',
            },
            {
                char: 'd',
                text: 'The overhanging bridge cables',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6630',
        topicCode: 'The road',
        question:
            'You`re driving through the night. What could it mean if your steering feels lighter than normal?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your tyres are losing pressure ',
                img: '',
            },
            {
                char: 'b',
                text: 'There`s a leak in the power-steering pump',
                img: '',
            },
            {
                char: 'c',
                text: 'There`s ice or frost on the road',
                img: '',
            },
            {
                char: 'd',
                text: 'There isn`t enough tread on your tyres',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6645',
        topicCode: 'The road',
        question:
            'You`re in the centre lane of a motorway, overtaking another vehicle. What should you do before returning to the left-hand lane?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Signal left, then check your mirror',
                img: '',
            },
            {
                char: 'b',
                text: 'Wait for the other driver to flash their headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Check ahead and then your nearside mirror',
                img: '',
            },
            {
                char: 'd',
                text: 'Check behind for fast traffic in the right-hand lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6693',
        topicCode: 'The road',
        question: 'What should you do as you approach a zebra crossing?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop before the zigzag lines',
                img: '',
            },
            {
                char: 'b',
                text: 'Wave pedestrians across the road',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound the horn and flash headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Be prepared to stop in good time',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6695',
        topicCode: 'The road',
        question:
            'You`re driving a high-sided vehicle on a motorway. You should anticipate the effects of side wind. When is this most likely to happen?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When passing signs',
                img: '',
            },
            {
                char: 'b',
                text: 'On exposed sections',
                img: '',
            },
            {
                char: 'c',
                text: 'In contraflow systems',
                img: '',
            },
            {
                char: 'd',
                text: 'In service areas',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6696',
        topicCode: 'The road',
        question:
            'You`re driving a high-sided vehicle in very windy conditions. Where should you avoid travelling?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Across suspension bridges',
                img: '',
            },
            {
                char: 'b',
                text: 'Up steep hills',
                img: '',
            },
            {
                char: 'c',
                text: 'Along country lanes',
                img: '',
            },
            {
                char: 'd',
                text: 'Through road tunnels',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6698',
        topicCode: 'The road',
        question:
            'You`re driving in heavy rain. What should you do if your steering suddenly feels very light?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Brake very sharply ',
                img: '',
            },
            {
                char: 'b',
                text: 'Steer towards the centre line',
                img: '',
            },
            {
                char: 'c',
                text: 'Ease off the accelerator',
                img: '',
            },
            {
                char: 'd',
                text: 'Increase your speed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6699',
        topicCode: 'The road',
        question:
            'Why should you be especially aware of parked cars when you`re driving at night?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There are more of them',
                img: '',
            },
            {
                char: 'b',
                text: 'They`re more likely to move off',
                img: '',
            },
            {
                char: 'c',
                text: 'The drivers may be drunk',
                img: '',
            },
            {
                char: 'd',
                text: 'They can park without lights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6701',
        topicCode: 'The road',
        question:
            'You`re waiting at a T-junction. What should you do if you see a vehicle is coming from the right, with its left indicator flashing?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move out and accelerate hard',
                img: '',
            },
            {
                char: 'b',
                text: 'Wait until the vehicle starts to turn in',
                img: '',
            },
            {
                char: 'c',
                text: 'Pull out before the vehicle reaches the junction',
                img: '',
            },
            {
                char: 'd',
                text: 'Move out slowly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6703',
        topicCode: 'The road',
        question:
            'You`re driving along a motorway and see this sign. What does it mean?',
        questionImg: 'TS4503.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There`s a steep downhill section ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'Only lorries and buses are allowed to use that lane',
                img: '',
            },
            {
                char: 'c',
                text: 'Vehicles fitted with speed limiters must use that lane',
                img: '',
            },
            {
                char: 'd',
                text: 'There`s a long uphill gradient ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6710',
        topicCode: 'The road',
        question:
            'You`re about to pass this car. What`s the main hazard you should be aware of?',
        questionImg: 'IMG_9181.jpg',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sunlight reflecting off the car windscreen',
                img: '',
            },
            {
                char: 'b',
                text: 'The driver`s door may suddenly open',
                img: '',
            },
            {
                char: 'c',
                text: 'Its alarm may be activated',
                img: '',
            },
            {
                char: 'd',
                text: 'The narrow pavement on the right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6746',
        topicCode: 'The road',
        question:
            'What should you do when you park your vehicle on a two-way road at night?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use the parking lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch off all lights',
                img: '',
            },
            {
                char: 'c',
                text: 'Put a traffic cone behind your vehicle ',
                img: '',
            },
            {
                char: 'd',
                text: 'Park underneath a street lamp',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6747',
        topicCode: 'The road',
        question: 'When would weight transference be most likely to occur?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you`re reversing',
                img: '',
            },
            {
                char: 'b',
                text: 'When you`re loading',
                img: '',
            },
            {
                char: 'c',
                text: 'When you`re overtaking',
                img: '',
            },
            {
                char: 'd',
                text: 'When you`re cornering',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6752',
        topicCode: 'The road',
        question: 'How will gravity affect a laden vehicle going downhill?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The vehicle will use more fuel',
                img: '',
            },
            {
                char: 'b',
                text: 'Stopping distances will be decreased',
                img: '',
            },
            {
                char: 'c',
                text: 'More braking effort will be required',
                img: '',
            },
            {
                char: 'd',
                text: 'The load will be more stable',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6757',
        topicCode: 'The road',
        question: 'When do long vehicles sometimes need to straddle lanes?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When turning at tight junctions',
                img: '',
            },
            {
                char: 'b',
                text: 'When travelling empty',
                img: '',
            },
            {
                char: 'c',
                text: 'When driving on motorways',
                img: '',
            },
            {
                char: 'd',
                text: 'When coming to contraflow systems',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6765',
        topicCode: 'The road',
        question: 'What should you do when you drive in windy weather?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Maintain a constant speed in exposed areas',
                img: '',
            },
            {
                char: 'b',
                text: 'Anticipate how the weather may affect other road users',
                img: '',
            },
            {
                char: 'c',
                text: 'Always keep to your intended route',
                img: '',
            },
            {
                char: 'd',
                text: 'Stay close to smaller or vulnerable vehicles as you overtake them',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6767',
        topicCode: 'The road',
        question:
            'High-sided vehicles can be affected by side wind. On which type of road is this most likely?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Narrow country lanes',
                img: '',
            },
            {
                char: 'b',
                text: 'Open roads',
                img: '',
            },
            {
                char: 'c',
                text: 'Slip roads',
                img: '',
            },
            {
                char: 'd',
                text: 'Motorway underpasses',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6768',
        topicCode: 'The road',
        question:
            'Where would you anticipate problems when you`re driving a high-sided vehicle on a windy day?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In road tunnels',
                img: '',
            },
            {
                char: 'b',
                text: 'On high-level roads',
                img: '',
            },
            {
                char: 'c',
                text: 'In dead ground',
                img: '',
            },
            {
                char: 'd',
                text: 'On ring roads',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6769',
        topicCode: 'The road',
        question: 'Which vehicle is least likely to be affected by high wind?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'Motorcycle-icon.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'Car_icon.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'Caravan_icon.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'Lorry_icon.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6770',
        topicCode: 'The road',
        question: 'What`s a buffer lane?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A safety lane for vehicles blown off course',
                img: '',
            },
            {
                char: 'b',
                text: 'A lane for overtaking safely',
                img: '',
            },
            {
                char: 'c',
                text: 'A lane to park in until the wind drops',
                img: '',
            },
            {
                char: 'd',
                text: 'The only lane to be used in high winds',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6771',
        topicCode: 'The road',
        question: 'Where would you expect to find buffer lanes?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In built-up areas',
                img: '',
            },
            {
                char: 'b',
                text: 'On high-level bridges',
                img: '',
            },
            {
                char: 'c',
                text: 'On country roads',
                img: '',
            },
            {
                char: 'd',
                text: 'In roadworks',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6772',
        topicCode: 'The road',
        question: 'When is a buffer lane most likely to be in use?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When it`s windy',
                img: '',
            },
            {
                char: 'b',
                text: 'When it`s raining',
                img: '',
            },
            {
                char: 'c',
                text: 'When it`s foggy',
                img: '',
            },
            {
                char: 'd',
                text: 'When it`s icy',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6773',
        topicCode: 'The road',
        question:
            'What`s the best way to control your vehicle when driving on snow?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep the engine revs high and spin the wheels',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive in your vehicle`s lowest gear',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep the engine revs high and slip the clutch',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive slowly, in a higher gear than normal',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6775',
        topicCode: 'The road',
        question:
            'You`re driving a large vehicle in gusty conditions. Which vehicle is most likely to be affected by buffeting when you overtake it?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A motorcycle',
                img: '',
            },
            {
                char: 'b',
                text: 'A flat-bed lorry',
                img: '',
            },
            {
                char: 'c',
                text: 'A car',
                img: '',
            },
            {
                char: 'd',
                text: 'A loaded tanker',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6776',
        topicCode: 'The road',
        question:
            'It`s very windy and you`re overtaking a motorcyclist on a motorway. What should you be aware of that may cause them problems?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your exhaust smoke',
                img: '',
            },
            {
                char: 'b',
                text: 'Your engine noise',
                img: '',
            },
            {
                char: 'c',
                text: 'The buffeting effect',
                img: '',
            },
            {
                char: 'd',
                text: 'The tyre noise',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6777',
        topicCode: 'The road',
        question:
            'Why should you be aware of motorcyclists on a motorway when there are gusty winds?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They may be blown into your path',
                img: '',
            },
            {
                char: 'b',
                text: 'They may leave at the next exit',
                img: '',
            },
            {
                char: 'c',
                text: 'They may suddenly stop on the hard shoulder',
                img: '',
            },
            {
                char: 'd',
                text: 'They may position to turn right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6780',
        topicCode: 'The road',
        question:
            'Which road users are most likely to be affected by the turbulence created by large vehicles travelling at speed?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drivers of low-loaders',
                img: '',
            },
            {
                char: 'b',
                text: 'Drivers towing caravans',
                img: '',
            },
            {
                char: 'c',
                text: 'Drivers of tankers',
                img: '',
            },
            {
                char: 'd',
                text: 'Drivers of emergency vehicles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6781',
        topicCode: 'The road',
        question:
            'You`re overtaking a motorcycle in windy conditions. Why should you check your nearside mirror?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To check your road position',
                img: '',
            },
            {
                char: 'b',
                text: 'To see if the rider is in control of their motorcycle',
                img: '',
            },
            {
                char: 'c',
                text: 'To see if other vehicles have been affected',
                img: '',
            },
            {
                char: 'd',
                text: 'To check that it`s properly adjusted',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6782',
        topicCode: 'The road',
        question:
            'Which vehicles are most likely to be affected by high winds?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Slow-moving vehicles',
                img: '',
            },
            {
                char: 'b',
                text: 'Track-laying vehicles',
                img: '',
            },
            {
                char: 'c',
                text: 'Front-wheel-drive vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'Curtain-sided vehicles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6783',
        topicCode: 'The road',
        question:
            'You`re driving a high-sided vehicle on a motorway. Where should you be especially aware of the effects of side wind?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'In cuttings',
                img: '',
            },
            {
                char: 'b',
                text: 'Through tunnels',
                img: '',
            },
            {
                char: 'c',
                text: 'Across viaducts',
                img: '',
            },
            {
                char: 'd',
                text: 'Passing large signs',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6785',
        topicCode: 'The road',
        question:
            'You`re on a motorway and the surface is still wet after rain. Why should you take care when you`re overtaking?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wet roads may cause more buffeting',
                img: '',
            },
            {
                char: 'b',
                text: 'Other vehicles will have their lights on',
                img: '',
            },
            {
                char: 'c',
                text: 'Vehicles may be parked on the hard shoulder',
                img: '',
            },
            {
                char: 'd',
                text: 'The road may still be slippery',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6786',
        topicCode: 'The road',
        question:
            'It`s raining. Why would a motorcyclist steer around drain covers on a bend?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To reduce the risk of skidding',
                img: '',
            },
            {
                char: 'b',
                text: 'To avoid puncturing the tyres',
                img: '',
            },
            {
                char: 'c',
                text: 'To improve their view around the bend',
                img: '',
            },
            {
                char: 'd',
                text: 'To avoid splashing pedestrians',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6787',
        topicCode: 'The road',
        question:
            'What`s the minimum distance you should allow for braking when it`s raining heavily?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The normal distance',
                img: '',
            },
            {
                char: 'b',
                text: 'Twice the normal distance',
                img: '',
            },
            {
                char: 'c',
                text: 'Three times the normal distance',
                img: '',
            },
            {
                char: 'd',
                text: 'Five times the normal distance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6788',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway. What should you do if your view ahead is restricted by heavy spray?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move into the lane on the right',
                img: '',
            },
            {
                char: 'b',
                text: 'Use the two-second rule',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch on your dipped headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Leave the motorway at the next exit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6789',
        topicCode: 'The road',
        question:
            'What`s the greatest risk to your safety when you`re overtaking on a motorway in very wet weather?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your engine may get flooded',
                img: '',
            },
            {
                char: 'b',
                text: 'Your braking distance may be reduced',
                img: '',
            },
            {
                char: 'c',
                text: 'Your steering may become heavy',
                img: '',
            },
            {
                char: 'd',
                text: 'Your tyres may lose grip',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6790',
        topicCode: 'The road',
        question:
            'What should you be aware of when you`re overtaking on a motorway while it`s raining heavily?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Manhole covers will be slippery',
                img: '',
            },
            {
                char: 'b',
                text: 'Visibility will be reduced by spray from traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'Your braking distances will be reduced',
                img: '',
            },
            {
                char: 'd',
                text: 'There`ll be distracting bright reflections',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6791',
        topicCode: 'The road',
        question:
            'Why can visibility be worse when driving at high speed in wet weather?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drivers bunch together when it`s raining',
                img: '',
            },
            {
                char: 'b',
                text: 'Headlights will dazzle you more easily',
                img: '',
            },
            {
                char: 'c',
                text: 'Windscreen wipers obstruct your view',
                img: '',
            },
            {
                char: 'd',
                text: 'More spray will be thrown up',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6792',
        topicCode: 'The road',
        question:
            'What should you do if you intend to overtake a lorry that`s throwing up spray?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Get much closer before moving out',
                img: '',
            },
            {
                char: 'b',
                text: 'Wait until the other driver gives a left signal',
                img: '',
            },
            {
                char: 'c',
                text: 'Move out earlier than normal',
                img: '',
            },
            {
                char: 'd',
                text: 'Wait for the lorry to slow down on a hill',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6793',
        topicCode: 'The road',
        question:
            'You`re driving in wet weather. What effect will faulty spray-suppression equipment have on other drivers?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Their vision will be increased',
                img: '',
            },
            {
                char: 'b',
                text: 'Their vision will be reduced',
                img: '',
            },
            {
                char: 'c',
                text: 'They`ll be able to overtake more easily',
                img: '',
            },
            {
                char: 'd',
                text: 'They`ll need to use intermittent wipers',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6794',
        topicCode: 'The road',
        question: 'Why are brushes fitted to this vehicle`s wheel arch?',
        questionImg: 'VB3505.tif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To clear mud from the tyres on building sites',
                img: '',
            },
            {
                char: 'b',
                text: 'To remove objects from the tyre tread',
                img: '',
            },
            {
                char: 'c',
                text: 'To stop snow building up behind the wheel',
                img: '',
            },
            {
                char: 'd',
                text: 'To reduce spray on wet roads',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6795',
        topicCode: 'The road',
        question:
            'When should you check your vehicle`s spray-suppression equipment?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Only when you`ll be using a motorway',
                img: '',
            },
            {
                char: 'b',
                text: 'Before setting out on every journey',
                img: '',
            },
            {
                char: 'c',
                text: 'Only as part of a pre-winter check',
                img: '',
            },
            {
                char: 'd',
                text: 'Once per year before the MOT test',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6796',
        topicCode: 'The road',
        question:
            'What component fitted to your vehicle will help following drivers in wet weather?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Spray reducers',
                img: '',
            },
            {
                char: 'b',
                text: 'Side-panel skirts',
                img: '',
            },
            {
                char: 'c',
                text: 'Wind deflectors',
                img: '',
            },
            {
                char: 'd',
                text: 'Catalytic converter',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6797',
        topicCode: 'The road',
        question:
            'This vehicle is fitted with spray-suppression equipment. In what weather conditions will it be most useful?',
        questionImg: 'VB3505.tif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Rain',
                img: '',
            },
            {
                char: 'b',
                text: 'Snow',
                img: '',
            },
            {
                char: 'c',
                text: 'Wind',
                img: '',
            },
            {
                char: 'd',
                text: 'Fog',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6798',
        topicCode: 'The road',
        question: 'How should you drive through flood water?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slowly, in a low gear, with engine speed high',
                img: '',
            },
            {
                char: 'b',
                text: 'Slowly, in a high gear, with engine speed low',
                img: '',
            },
            {
                char: 'c',
                text: 'As quickly as possible to cause the least delay',
                img: '',
            },
            {
                char: 'd',
                text: 'At normal speed when you have spray reducers fitted',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6799',
        topicCode: 'The road',
        question:
            'You`re on a motorway, approaching a working snow plough. Why should you stay behind it?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It`s illegal to overtake snow ploughs',
                img: '',
            },
            {
                char: 'b',
                text: 'Snow ploughs are left-hand-drive only',
                img: '',
            },
            {
                char: 'c',
                text: 'Your speed could cause snow to drift behind',
                img: '',
            },
            {
                char: 'd',
                text: 'There may be deep snow ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6800',
        topicCode: 'The road',
        question:
            'You`re driving in heavy rain. Why do you need to increase your distance from the vehicle in front?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To prevent rain from entering the vehicle`s braking system',
                img: '',
            },
            {
                char: 'b',
                text: 'To let other motorists move into the gap',
                img: '',
            },
            {
                char: 'c',
                text: 'To allow for an increased stopping distance',
                img: '',
            },
            {
                char: 'd',
                text: 'To reduce the risk of water spraying into the filters',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6801',
        topicCode: 'The road',
        question:
            'You`re driving a large vehicle in heavy rain on a motorway. You slow down to reduce the risk of aquaplaning. For what other reason should you slow down? ',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To force other drivers to act properly and slow down',
                img: '',
            },
            {
                char: 'b',
                text: 'To reduce the amount of spray thrown up',
                img: '',
            },
            {
                char: 'c',
                text: 'To prevent water from entering the braking system',
                img: '',
            },
            {
                char: 'd',
                text: 'To stop the electrics getting wet',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6802',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway in heavy rain. When are you allowed to use high-intensity rear fog lights?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When visibility is more than 100 metres (328 feet) ',
                img: '',
            },
            {
                char: 'b',
                text: 'Only when the national speed limit applies',
                img: '',
            },
            {
                char: 'c',
                text: 'Only when you`re being followed closely by other traffic',
                img: '',
            },
            {
                char: 'd',
                text: 'When visibility is reduced to 100 metres (328 feet) or less',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6803',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway in heavy rain. What could cause your steering to become unresponsive?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Water reducing the tyres` grip on the road',
                img: '',
            },
            {
                char: 'b',
                text: 'Tyres becoming hotter in the bad weather',
                img: '',
            },
            {
                char: 'c',
                text: 'Braking gently and in good time',
                img: '',
            },
            {
                char: 'd',
                text: 'Water entering the braking system',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6926',
        topicCode: 'The road',
        question: 'You`re driving downhill. How will this affect your vehicle?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It will need more engine power',
                img: '',
            },
            {
                char: 'b',
                text: 'It will take longer to stop',
                img: '',
            },
            {
                char: 'c',
                text: 'It will increase fuel consumption',
                img: '',
            },
            {
                char: 'd',
                text: 'It will be easier to change direction',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6927',
        topicCode: 'The road',
        question:
            'The road is wet. Why should you slow down as you approach this pedestrian?',
        questionImg: 'IMG_2204.jpg',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Because there are no road markings',
                img: '',
            },
            {
                char: 'b',
                text: 'To avoid splashing them',
                img: '',
            },
            {
                char: 'c',
                text: 'Because they have priority',
                img: '',
            },
            {
                char: 'd',
                text: 'To encourage them to cross',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6930',
        topicCode: 'The road',
        question: 'Why is tailgating dangerous?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You`re likely to be distracted',
                img: '',
            },
            {
                char: 'b',
                text: 'Your engine will overheat',
                img: '',
            },
            {
                char: 'c',
                text: 'Your view to the rear is reduced',
                img: '',
            },
            {
                char: 'd',
                text: 'Your view ahead is reduced',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6931',
        topicCode: 'The road',
        question:
            'When may you use your vehicle`s hazard warning lights while it`s moving?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you`ve just overtaken another vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'When you need to reverse for some distance ',
                img: '',
            },
            {
                char: 'c',
                text: 'When you`re on a motorway and traffic ahead slows suddenly',
                img: '',
            },
            {
                char: 'd',
                text: 'When one of your lights has failed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6933',
        topicCode: 'The road',
        question:
            'You`re driving in town and see these lights flashing. What would you expect to see ahead?',
        questionImg: 'TS4622.tif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Contraflow system',
                img: '',
            },
            {
                char: 'b',
                text: 'Uneven road surface',
                img: '',
            },
            {
                char: 'c',
                text: 'Children crossing the road',
                img: '',
            },
            {
                char: 'd',
                text: 'Roadworks ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6935',
        topicCode: 'The road',
        question: 'Where are these lights found?',
        questionImg: 'TS4622.tif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'On approach to a level crossing',
                img: '',
            },
            {
                char: 'b',
                text: 'Near a fire station',
                img: '',
            },
            {
                char: 'c',
                text: 'On approach to a motorway',
                img: '',
            },
            {
                char: 'd',
                text: 'Near a school',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6937',
        topicCode: 'The road',
        question: 'What problem may you have when driving at night?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It`s more difficult to keep to speed limits',
                img: '',
            },
            {
                char: 'b',
                text: 'There`ll be an increase in traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'You`ll have reduced visibility',
                img: '',
            },
            {
                char: 'd',
                text: 'It takes longer to stop',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6939',
        topicCode: 'The road',
        question: 'Why should you take extra care when overtaking at night?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Every driver will normally be tired',
                img: '',
            },
            {
                char: 'b',
                text: 'Large vehicles are subject to a 10% speed reduction',
                img: '',
            },
            {
                char: 'c',
                text: 'Speed and distance are harder to judge',
                img: '',
            },
            {
                char: 'd',
                text: 'Most towns aren`t adequately lit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6940',
        topicCode: 'The road',
        question:
            'You`re driving along a motorway in thick fog at night. The reflective studs are red on your left and white on your right. Which lane are you in?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The right-hand lane',
                img: '',
            },
            {
                char: 'b',
                text: 'The hard shoulder',
                img: '',
            },
            {
                char: 'c',
                text: 'The left-hand lane',
                img: '',
            },
            {
                char: 'd',
                text: 'The middle lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6941',
        topicCode: 'The road',
        question:
            'You`re driving in the left-hand lane on a three-lane motorway. What should you check for before moving into the middle lane to overtake a slower vehicle?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Traffic behind in the right-hand lane, returning to the middle lane',
                img: '',
            },
            {
                char: 'b',
                text: 'Traffic that`s intending to leave at the next exit',
                img: '',
            },
            {
                char: 'c',
                text: 'Traffic ahead moving into the right-hand lane',
                img: '',
            },
            {
                char: 'd',
                text: 'Traffic behind that`s trying to pass on your left',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6942',
        topicCode: 'The road',
        question:
            'What should you do before changing lanes to overtake on a motorway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Check your mirrors carefully',
                img: '',
            },
            {
                char: 'b',
                text: 'Change to a lower gear',
                img: '',
            },
            {
                char: 'c',
                text: 'Look over your left shoulder',
                img: '',
            },
            {
                char: 'd',
                text: 'Increase your speed gently',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6943',
        topicCode: 'The road',
        question:
            'Which lane should you use when you`re driving on a clear motorway, at the speed limit for your vehicle?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Any lane',
                img: '',
            },
            {
                char: 'b',
                text: 'The middle lane',
                img: '',
            },
            {
                char: 'c',
                text: 'The right-hand lane',
                img: '',
            },
            {
                char: 'd',
                text: 'The left-hand lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6944',
        topicCode: 'The road',
        question:
            'You`re driving in the left-hand lane of a motorway. What should you do when you see a large vehicle merging from a slip road ahead?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Try to race and get ahead of it',
                img: '',
            },
            {
                char: 'b',
                text: 'Leave the other vehicle to adjust its speed',
                img: '',
            },
            {
                char: 'c',
                text: 'Stay at the maximum speed allowed for your vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Be ready to adjust your speed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6945',
        topicCode: 'The road',
        question:
            'You`re driving at the speed limit in the left-hand lane of a motorway. What should you do if you see lorries merging from a slip road ahead?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Try to accelerate past them',
                img: '',
            },
            {
                char: 'b',
                text: 'Move to the next lane if it`s safe',
                img: '',
            },
            {
                char: 'c',
                text: 'Brake heavily and let them merge',
                img: '',
            },
            {
                char: 'd',
                text: 'Expect them to stop and let you pass',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6946',
        topicCode: 'The road',
        question:
            'Why should you take care before moving into the centre lane of a three-lane motorway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The centre lane is narrower than the left-hand lane',
                img: '',
            },
            {
                char: 'b',
                text: 'The bridge height clearance will be less in the centre lane',
                img: '',
            },
            {
                char: 'c',
                text: 'Traffic in the centre lane may be travelling much faster than you',
                img: '',
            },
            {
                char: 'd',
                text: 'The reflective studs may be missing in the centre lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6947',
        topicCode: 'The road',
        question:
            'When may vehicles over 7.5 tonnes maximum authorised mass (MAM) use the right-hand lane of a motorway to overtake?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When the motorway has three lanes',
                img: '',
            },
            {
                char: 'b',
                text: 'When vehicles are stopped on the hard shoulder',
                img: '',
            },
            {
                char: 'c',
                text: 'When the motorway has two lanes',
                img: '',
            },
            {
                char: 'd',
                text: 'When other vehicles are turning right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6948',
        topicCode: 'The road',
        question:
            'You`ve just overtaken another vehicle on a motorway. What should you avoid when moving back to the left?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Cutting in',
                img: '',
            },
            {
                char: 'b',
                text: 'Increasing your speed',
                img: '',
            },
            {
                char: 'c',
                text: 'Changing gear',
                img: '',
            },
            {
                char: 'd',
                text: 'Signalling',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6949',
        topicCode: 'The road',
        question: 'What`s a crawler lane for?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To enable other traffic to overtake on the nearside',
                img: '',
            },
            {
                char: 'b',
                text: 'To enable large vehicles to park out of the way',
                img: '',
            },
            {
                char: 'c',
                text: 'To enable slow-moving traffic to move further over to the left on uphill gradients',
                img: '',
            },
            {
                char: 'd',
                text: 'To enable emergency vehicles to get quickly to the scene of an incident ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6950',
        topicCode: 'The road',
        question: 'What does this motorway sign mean?',
        questionImg: 'TS4503.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You`re approaching a long downhill slope',
                img: '',
            },
            {
                char: 'b',
                text: 'You`re approaching a long uphill slope',
                img: '',
            },
            {
                char: 'c',
                text: 'You`re approaching a `lorries only` lane',
                img: '',
            },
            {
                char: 'd',
                text: 'You`re approaching a service area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6951',
        topicCode: 'The road',
        question: 'When should you use a crawler lane?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When letting faster traffic overtake you',
                img: '',
            },
            {
                char: 'b',
                text: 'When turning right from a major road',
                img: '',
            },
            {
                char: 'c',
                text: 'When parking to have a rest',
                img: '',
            },
            {
                char: 'd',
                text: 'When slowing down for a motorway exit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6952',
        topicCode: 'The road',
        question:
            'What should you do before overtaking on a single carriageway road?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights at oncoming traffic',
                img: '',
            },
            {
                char: 'b',
                text: 'Look ahead for road junctions',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive very close to the vehicle in front',
                img: '',
            },
            {
                char: 'd',
                text: 'Make a final check in your left-hand mirror',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6953',
        topicCode: 'The road',
        question: 'When shouldn`t you overtake?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When the speed limit has been reduced',
                img: '',
            },
            {
                char: 'b',
                text: 'When you`re approaching motorway slip roads',
                img: '',
            },
            {
                char: 'c',
                text: 'When you would have to break the speed limit',
                img: '',
            },
            {
                char: 'd',
                text: 'When your view of the road ahead is clear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6955',
        topicCode: 'The road',
        question:
            'You`ve just overtaken another large vehicle. How do you know when it`s safe to move back to the nearside lane?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By waiting for the driver you`ve overtaken to flash their headlights',
                img: '',
            },
            {
                char: 'b',
                text: 'By checking your nearside mirror',
                img: '',
            },
            {
                char: 'c',
                text: 'By using your hazard warning lights as a signal',
                img: '',
            },
            {
                char: 'd',
                text: 'By moving to the nearside, hoping the other vehicle will slow down',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6957',
        topicCode: 'The road',
        question:
            'You`re driving on a dual carriageway and intend to overtake the vehicle ahead. What should you do if there`s a car approaching quickly behind you in the right-hand lane?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stay behind the slower vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'Signal right and move out',
                img: '',
            },
            {
                char: 'c',
                text: 'Move up closer to the slower vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Signal left while waiting for the car to pass',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6958',
        topicCode: 'The road',
        question: 'What should you do after overtaking on a dual carriageway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Move back to the left when it`s safe to do so',
                img: '',
            },
            {
                char: 'b',
                text: 'Indicate left, then right',
                img: '',
            },
            {
                char: 'c',
                text: 'Wait for the other driver to flash their headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Switch your rear lights on and off',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6959',
        topicCode: 'The road',
        question:
            'You`re driving a long vehicle and want to turn right at a roundabout ahead. How should you signal if you need to occupy the left-hand lane?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Signal left on approach',
                img: '',
            },
            {
                char: 'b',
                text: 'Signal right on approach',
                img: '',
            },
            {
                char: 'c',
                text: 'Give no signal on approach',
                img: '',
            },
            {
                char: 'd',
                text: 'Give a right signal after entering the roundabout',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6960',
        topicCode: 'The road',
        question: 'When do drivers of long vehicles need to straddle lanes?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When they need to avoid braking sharply',
                img: '',
            },
            {
                char: 'b',
                text: 'When driving on motorways',
                img: '',
            },
            {
                char: 'c',
                text: 'When they need to avoid mounting the kerb',
                img: '',
            },
            {
                char: 'd',
                text: 'When coming to contraflow systems',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6961',
        topicCode: 'The road',
        question: 'What should you do as you approach these roadworks?',
        questionImg: 'R8510.tif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Check your mirrors',
                img: '',
            },
            {
                char: 'b',
                text: 'Select a higher gear',
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Use your endurance brake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6962',
        topicCode: 'The road',
        question:
            'What should you do when you`re overtaking a motorcyclist in very windy conditions?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow extra room',
                img: '',
            },
            {
                char: 'b',
                text: 'Overtake slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn as you pass',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep close as you pass',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6963',
        topicCode: 'The road',
        question:
            'You`re driving behind two cyclists. They`re approaching a roundabout in the left-hand lane. What should you expect them to do?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Go in any direction',
                img: '',
            },
            {
                char: 'b',
                text: 'Turn left',
                img: '',
            },
            {
                char: 'c',
                text: 'Turn right',
                img: '',
            },
            {
                char: 'd',
                text: 'Go straight ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6965',
        topicCode: 'The road',
        question: 'What should you do before you start to overtake a lorry?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Look well ahead for uphill gradients',
                img: '',
            },
            {
                char: 'b',
                text: 'Check your position in the left-hand mirror',
                img: '',
            },
            {
                char: 'c',
                text: 'Change quickly to a higher gear',
                img: '',
            },
            {
                char: 'd',
                text: 'Close right up before pulling out',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6966',
        topicCode: 'The road',
        question:
            'You`re in the left-hand lane on a three-lane motorway. Why should you check for any vehicles in the right-hand lane before you overtake?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They may be moving faster than you',
                img: '',
            },
            {
                char: 'b',
                text: 'They may move back to the middle lane as you move out',
                img: '',
            },
            {
                char: 'c',
                text: 'They may cut in sharply behind you',
                img: '',
            },
            {
                char: 'd',
                text: 'They may accelerate briskly in front of you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7037',
        topicCode: 'The road',
        question:
            'What does it indicate if you see white lights on a vehicle at night?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It`s moving away from you',
                img: '',
            },
            {
                char: 'b',
                text: 'It`s stationary and facing away from you',
                img: '',
            },
            {
                char: 'c',
                text: 'It`s ahead of you and braking',
                img: '',
            },
            {
                char: 'd',
                text: 'It`s facing towards you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7038',
        topicCode: 'The road',
        question:
            'You`re driving at night. Why should you ensure that all your lights are clean and working correctly?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To allow following drivers to use dipped headlights',
                img: '',
            },
            {
                char: 'b',
                text: 'To prevent the battery from overcharging',
                img: '',
            },
            {
                char: 'c',
                text: 'So that other road users can see the size of your vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'So that the intensity of street lighting can be reduced',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7041',
        topicCode: 'The road',
        question:
            'You`re driving in fog. When should high-intensity rear fog lights be used?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When visibility falls below 100 metres (328 feet)',
                img: '',
            },
            {
                char: 'b',
                text: 'When visibility falls below 200 metres (656 feet)',
                img: '',
            },
            {
                char: 'c',
                text: 'When visibility falls below 300 metres (984 feet)',
                img: '',
            },
            {
                char: 'd',
                text: 'When visibility falls below 400 metres (1312 feet)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7045',
        topicCode: 'The road',
        question:
            'You`re driving in fog that`s starting to clear. When should you switch off your high-intensity rear fog lights?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When visibility is more than 10 metres (32 feet)',
                img: '',
            },
            {
                char: 'b',
                text: 'When visibility is more than 50 metres (164 feet)',
                img: '',
            },
            {
                char: 'c',
                text: 'When visibility is more than 75 metres (246 feet)',
                img: '',
            },
            {
                char: 'd',
                text: 'When visibility is more than 100 metres (328 feet)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7073',
        topicCode: 'The road',
        question:
            'In fast traffic, when should you leave a two-second gap between your vehicle and the one in front?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When the roads are dry',
                img: '',
            },
            {
                char: 'b',
                text: 'When it`s raining and the roads are wet',
                img: '',
            },
            {
                char: 'c',
                text: 'When the roads are icy',
                img: '',
            },
            {
                char: 'd',
                text: 'When you`re driving in fog',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7086',
        topicCode: 'The road',
        question:
            'What should you do if you see a vehicle too close behind when you`re driving in traffic on the motorway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Increase your distance from the vehicle in front',
                img: '',
            },
            {
                char: 'b',
                text: 'Touch the brake pedal sharply to show your brake lights',
                img: '',
            },
            {
                char: 'c',
                text: 'Briskly accelerate away from the vehicle behind',
                img: '',
            },
            {
                char: 'd',
                text: 'Switch your rear fog lamps on and off',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7093',
        topicCode: 'The road',
        question:
            'What should you do if an overtaking vehicle pulls in too close in front of you?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slow down',
                img: '',
            },
            {
                char: 'b',
                text: 'Stay close behind',
                img: '',
            },
            {
                char: 'c',
                text: 'Overtake when you can',
                img: '',
            },
            {
                char: 'd',
                text: 'Flash your headlights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7109',
        topicCode: 'The road',
        question:
            'You`re driving at 50 mph (80 km/h) on a dry, level road. What gap should you leave between your vehicle and the one in front?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'One vehicle length',
                img: '',
            },
            {
                char: 'b',
                text: 'Two vehicle lengths',
                img: '',
            },
            {
                char: 'c',
                text: 'At least a one-second gap',
                img: '',
            },
            {
                char: 'd',
                text: 'At least a two-second gap',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7110',
        topicCode: 'The road',
        question:
            'You`re following a large vehicle. How can you improve your view ahead?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drop further back',
                img: '',
            },
            {
                char: 'b',
                text: 'Move over to the right',
                img: '',
            },
            {
                char: 'c',
                text: 'Move over to the left',
                img: '',
            },
            {
                char: 'd',
                text: 'Overtake as soon as you can',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7111',
        topicCode: 'The road',
        question: 'What must you be certain of before you overtake at night?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You can see well ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'The road`s well lit',
                img: '',
            },
            {
                char: 'c',
                text: 'There`s an overtaking lane',
                img: '',
            },
            {
                char: 'd',
                text: 'You`re outside a built-up area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7112',
        topicCode: 'The road',
        question:
            'How much longer can your stopping distance be in snow than in dry weather?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Twice as long',
                img: '',
            },
            {
                char: 'b',
                text: 'Four times as long',
                img: '',
            },
            {
                char: 'c',
                text: 'Five times as long',
                img: '',
            },
            {
                char: 'd',
                text: 'Ten times as long',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7113',
        topicCode: 'The road',
        question:
            'How should you slow down or stop when you`re driving on an icy road?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Brake gently and in good time',
                img: '',
            },
            {
                char: 'b',
                text: 'Always use the retarder',
                img: '',
            },
            {
                char: 'c',
                text: 'Change down through the gears',
                img: '',
            },
            {
                char: 'd',
                text: 'Use the parking brake in a rapid on-and-off movement',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7114',
        topicCode: 'The road',
        question: 'How should you use the brakes in icy weather?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Suddenly',
                img: '',
            },
            {
                char: 'b',
                text: 'By pumping the brake pedal',
                img: '',
            },
            {
                char: 'c',
                text: 'Gently',
                img: '',
            },
            {
                char: 'd',
                text: 'After using the gears first',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7125',
        topicCode: 'The road',
        question: 'When should you use the two-second rule?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To keep a safe distance from the vehicle in front when it`s raining',
                img: '',
            },
            {
                char: 'b',
                text: 'To keep a safe distance from the vehicle in front when conditions are good',
                img: '',
            },
            {
                char: 'c',
                text: 'To keep a safe distance from the vehicle in front when it`s icy',
                img: '',
            },
            {
                char: 'd',
                text: 'To keep a safe distance from the vehicle in front in queuing traffic',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7129',
        topicCode: 'The road',
        question:
            'Why is it dangerous to follow a heavy goods vehicle too closely?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your field of vision will be seriously reduced',
                img: '',
            },
            {
                char: 'b',
                text: 'Your cab will fill with fumes',
                img: '',
            },
            {
                char: 'c',
                text: 'Your engine will overheat',
                img: '',
            },
            {
                char: 'd',
                text: 'Your brakes will overheat',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7130',
        topicCode: 'The road',
        question:
            'What time gap should you leave when you`re following a vehicle on a wet road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'At least one second',
                img: '',
            },
            {
                char: 'b',
                text: 'At least two seconds',
                img: '',
            },
            {
                char: 'c',
                text: 'At least three seconds',
                img: '',
            },
            {
                char: 'd',
                text: 'At least four seconds',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7136',
        topicCode: 'The road',
        question:
            'The entrances to roundabouts are often slippery when they`re wet. How should you deal with this hazard?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stay in the left-hand lane',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake in good time',
                img: '',
            },
            {
                char: 'c',
                text: 'Use the handbrake',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop before emerging',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7140',
        topicCode: 'The road',
        question:
            'You`re driving in wet conditions. What should you try to do before braking?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Make sure that the gear lever is in neutral ',
                img: '',
            },
            {
                char: 'b',
                text: 'Make sure that all spray-suppression equipment is \nworking',
                img: '',
            },
            {
                char: 'c',
                text: 'Make sure that there`s no mist on your rear-view mirrors',
                img: '',
            },
            {
                char: 'd',
                text: 'Make sure that your vehicle is travelling in a straight line',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7141',
        topicCode: 'The road',
        question:
            'You`re driving a fully laden vehicle approaching an uphill gradient. What will happen if you start to overtake?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You`ll be able to get past more quickly',
                img: '',
            },
            {
                char: 'b',
                text: 'The weight of the load will help you go faster',
                img: '',
            },
            {
                char: 'c',
                text: 'You`ll take longer to get past',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll need to use a high gear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7262',
        topicCode: 'The road',
        question:
            'You`re on a motorway and there`s a strong side wind. Which vehicle is particularly at risk?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A motorcycle',
                img: '',
            },
            {
                char: 'b',
                text: 'A taxi',
                img: '',
            },
            {
                char: 'c',
                text: 'A sports car',
                img: '',
            },
            {
                char: 'd',
                text: 'A road tanker',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7373',
        topicCode: 'The road',
        question:
            'You`re driving at a speed of 50 mph (80 km/h) in good, dry conditions. What distance should you stay behind the vehicle in front?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'At least 23 metres (75 feet)',
                img: '',
            },
            {
                char: 'b',
                text: 'At least 36 metres (118 feet)',
                img: '',
            },
            {
                char: 'c',
                text: 'At least 53 metres (175 feet)',
                img: '',
            },
            {
                char: 'd',
                text: 'At least 73 metres (240 feet)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7374',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway after it`s been raining heavily. What should you do if spray is being thrown up, causing poor visibility?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep a two-second gap',
                img: '',
            },
            {
                char: 'b',
                text: 'Reduce your separation distance',
                img: '',
            },
            {
                char: 'c',
                text: 'Remove spray-suppression equipment',
                img: '',
            },
            {
                char: 'd',
                text: 'Use dipped headlights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7391',
        topicCode: 'The road',
        question:
            'You have stopped in an emergency area. What must you do before you rejoin the carriageway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use the emergency telephone',
                img: '',
            },
            {
                char: 'b',
                text: 'Give an arm signal as you are moving off',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch on your vehicle`s headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Move away with your hazard lights on',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7392',
        topicCode: 'The road',
        question:
            'How should you rejoin the motorway after a breakdown on the hard shoulder?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Build up speed on the hard shoulder before looking for a safe gap in the traffic',
                img: '',
            },
            {
                char: 'b',
                text: 'Move straight out into the left-hand lane as you are not allowed to drive on the hard shoulder',
                img: '',
            },
            {
                char: 'c',
                text: 'Wait until a vehicle in the left-hand lane signals to you that it`s safe to rejoin',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep your hazard lights flashing until you have safely rejoined the carriageway',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8203',
        topicCode: 'The road',
        question:
            'You`ll be driving a high-floor coach. You`ll be going over several high bridges. Why should you check the weather forecast before starting your journey?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Rain can make crossing bridges very difficult for buses and coaches',
                img: '',
            },
            {
                char: 'b',
                text: 'In hot weather, the bridges might be closed to heavy traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'You won`t be able to climb the bridges if it`s frosty',
                img: '',
            },
            {
                char: 'd',
                text: 'Some roads may be closed to certain vehicles in high winds ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8222',
        topicCode: 'The road',
        question:
            'It`s raining heavily. What effect could this have when you overtake a cyclist?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Spray could affect their control',
                img: '',
            },
            {
                char: 'b',
                text: 'Exhaust fumes are more toxic when it`s raining',
                img: '',
            },
            {
                char: 'c',
                text: 'Noise from your engine will be louder',
                img: '',
            },
            {
                char: 'd',
                text: 'Buffeting will be reduced',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8246',
        topicCode: 'The road',
        question: 'How is a strong wind likely to affect your bus?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Steering will be easier',
                img: '',
            },
            {
                char: 'b',
                text: 'Your stopping distances will be reduced',
                img: '',
            },
            {
                char: 'c',
                text: 'Your stopping distances will be greater',
                img: '',
            },
            {
                char: 'd',
                text: 'Steering will be more difficult',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8247',
        topicCode: 'The road',
        question:
            'What will affect a double-deck bus more than a single-deck bus?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Strong wind',
                img: '',
            },
            {
                char: 'b',
                text: 'Heavy rain',
                img: '',
            },
            {
                char: 'c',
                text: 'Thick fog',
                img: '',
            },
            {
                char: 'd',
                text: 'Dense spray',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8248',
        topicCode: 'The road',
        question:
            'You`re driving a bus on a windy day. What should you do when you`re overtaking a motorcyclist?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pass close to shield them from the wind',
                img: '',
            },
            {
                char: 'b',
                text: 'Move back early to protect them from buffeting',
                img: '',
            },
            {
                char: 'c',
                text: 'Pass wide in case they`re blown off course',
                img: '',
            },
            {
                char: 'd',
                text: 'Signal left so they know you`re pulling in',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8249',
        topicCode: 'The road',
        question:
            'In which type of weather is spray-suppression equipment particularly useful?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Rain',
                img: '',
            },
            {
                char: 'b',
                text: 'Ice',
                img: '',
            },
            {
                char: 'c',
                text: 'Fog',
                img: '',
            },
            {
                char: 'd',
                text: 'Wind',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8262',
        topicCode: 'The road',
        question:
            'You`re driving a long bus. When would you need to straddle lanes?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only when joining a bus lane',
                img: '',
            },
            {
                char: 'b',
                text: 'On all bends and corners',
                img: '',
            },
            {
                char: 'c',
                text: 'On the approach to all roundabouts',
                img: '',
            },
            {
                char: 'd',
                text: 'To avoid mounting the kerb',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8267',
        topicCode: 'The road',
        question:
            'What must bus and coach drivers do when they park their vehicle on the road at night?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They must park under street lights',
                img: '',
            },
            {
                char: 'b',
                text: 'They must park within 25 metres (82 feet) of a street light',
                img: '',
            },
            {
                char: 'c',
                text: 'They must leave all the interior lights switched on',
                img: '',
            },
            {
                char: 'd',
                text: 'They must leave their parking lights switched on',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8268',
        topicCode: 'The road',
        question:
            'You`re driving a bus at night on a road without street lighting. Why could it be dangerous to overtake?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'There may be unseen dips or bends in the road',
                img: '',
            },
            {
                char: 'b',
                text: 'You may dazzle other drivers',
                img: '',
            },
            {
                char: 'c',
                text: 'It`s harder to concentrate',
                img: '',
            },
            {
                char: 'd',
                text: 'It`s harder to keep control in the dark',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8346',
        topicCode: 'The road',
        question:
            'You`re driving a bus. Where should you be aware of the risk of grounding?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On a hump bridge',
                img: '',
            },
            {
                char: 'b',
                text: 'In a crawler lane',
                img: '',
            },
            {
                char: 'c',
                text: 'On a left-hand bend',
                img: '',
            },
            {
                char: 'd',
                text: 'In a narrow street',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5194',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What should you do when there`s a fire in your vehicle`s engine compartment?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Open all windows',
                img: '',
            },
            {
                char: 'b',
                text: 'Try to remove the load',
                img: '',
            },
            {
                char: 'c',
                text: 'Flag down a passing motorist',
                img: '',
            },
            {
                char: 'd',
                text: 'Cut off the fuel supply',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5455',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What training must you take before driving a lorry loaded with toxic substances?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'How to use fire-fighting equipment',
                img: '',
            },
            {
                char: 'b',
                text: 'How to operate a forklift truck',
                img: '',
            },
            {
                char: 'c',
                text: 'How to operate a lorry-mounted crane',
                img: '',
            },
            {
                char: 'd',
                text: 'How to use breathing apparatus',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6247',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re approaching a bridge that has no height restriction on it. What`s the minimum height under the bridge?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '3.6 metres (11 feet 10 inches)',
                img: '',
            },
            {
                char: 'b',
                text: '4.4 metres (14 feet 5 inches)',
                img: '',
            },
            {
                char: 'c',
                text: '4.8 metres (16 feet)',
                img: '',
            },
            {
                char: 'd',
                text: '5 metres (16 feet 6 inches)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6250',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'What must you do if you`re involved in a traffic incident?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive on for help',
                img: '',
            },
            {
                char: 'b',
                text: 'Inform the police within seven days',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop at the scene',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive to the nearest police station',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6251',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your vehicle is involved in an incident where someone is injured. You don`t produce your insurance certificate at the time. How soon must you report the incident to the police?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '24 hours',
                img: '',
            },
            {
                char: 'b',
                text: '48 hours',
                img: '',
            },
            {
                char: 'c',
                text: '72 hours',
                img: '',
            },
            {
                char: 'd',
                text: 'Seven days',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD6252',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at the scene of an incident. What does it mean if there`s a plain orange rectangle displayed on one of the vehicles?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It`s carrying dangerous goods',
                img: '',
            },
            {
                char: 'b',
                text: 'It`s carrying a first-aid kit',
                img: '',
            },
            {
                char: 'c',
                text: 'It`s carrying medical supplies',
                img: '',
            },
            {
                char: 'd',
                text: 'It`s unladen',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6253',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at an incident where someone is suffering from severe burns. What should you do to help?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Douse the burns with cool water',
                img: '',
            },
            {
                char: 'b',
                text: 'Remove anything stuck to the burns',
                img: '',
            },
            {
                char: 'c',
                text: 'Burst blisters that form on the burns',
                img: '',
            },
            {
                char: 'd',
                text: 'Apply ointment to the burns',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6255',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re waiting for the emergency services to arrive at the scene of an incident. A pedestrian`s leg is bleeding heavily, but there`s nothing embedded in the wound. What could you do to help?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Apply firm pressure to the wound',
                img: '',
            },
            {
                char: 'b',
                text: 'Dab the wound to stop the bleeding',
                img: '',
            },
            {
                char: 'c',
                text: 'Put the casualty into the recovery position',
                img: '',
            },
            {
                char: 'd',
                text: 'Wrap an ice pack near the wound',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6256',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At the scene of an incident, an injured person is lying in a busy road. What`s the first thing you should do to help?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Treat the person for shock',
                img: '',
            },
            {
                char: 'b',
                text: 'Warn other traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'Place them in the recovery position',
                img: '',
            },
            {
                char: 'd',
                text: 'Make sure the injured person is kept warm',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6257',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re the first person to arrive at an incident where people are badly injured. What`s the first thing you should do?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch on your own hazard warning lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Contact the local radio station to tell them about the incident',
                img: '',
            },
            {
                char: 'c',
                text: 'Try and get people who are injured to drink something',
                img: '',
            },
            {
                char: 'd',
                text: 'Move the people who are injured clear of their vehicles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6259',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at an incident where a motorcyclist is lying in the road, unconscious and bleeding. The area is safe and the emergency services have been called. What`s the first priority when checking the rider?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Remove their helmet',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop the bleeding',
                img: '',
            },
            {
                char: 'c',
                text: 'Check their airway is open',
                img: '',
            },
            {
                char: 'd',
                text: 'Move them off the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6264',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident and someone is unconscious. What`s the first thing you should do to help them?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Take the numbers of the vehicles involved',
                img: '',
            },
            {
                char: 'b',
                text: 'Try to get them to drink water',
                img: '',
            },
            {
                char: 'c',
                text: 'Check that they`re breathing',
                img: '',
            },
            {
                char: 'd',
                text: 'Look for any witnesses',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6267',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`ve stopped at the scene of an incident where there are casualties. What should you do to help while waiting for the emergency services to arrive?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep injured people warm and comfortable',
                img: '',
            },
            {
                char: 'b',
                text: 'Clear debris from the road',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep injured people on the move by walking them around',
                img: '',
            },
            {
                char: 'd',
                text: 'Give injured people a warm drink',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6268',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident where someone is injured. What should be given urgent priority?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Deal with the danger from further collisions or fire',
                img: '',
            },
            {
                char: 'b',
                text: 'Get the casualty a warm drink',
                img: '',
            },
            {
                char: 'c',
                text: 'Take details of any witnesses',
                img: '',
            },
            {
                char: 'd',
                text: 'Take the numbers of the vehicles involved',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6270',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at the scene of an incident. How can you help someone suffering from shock?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Reassure them confidently',
                img: '',
            },
            {
                char: 'b',
                text: 'Offer them a cigarette',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep them moving',
                img: '',
            },
            {
                char: 'd',
                text: 'Give them a warm drink',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6271',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What should you do if you`re the first person to arrive at the scene of an incident?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Warn other traffic to prevent further collisions',
                img: '',
            },
            {
                char: 'b',
                text: 'Take photographs of the scene',
                img: '',
            },
            {
                char: 'c',
                text: 'Offer a calming cigarette to those involved ',
                img: '',
            },
            {
                char: 'd',
                text: 'Ask everyone who isn`t injured to leave',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6273',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'There`s been an incident. What can you do to help a driver who`s suffering from shock?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Give them a drink',
                img: '',
            },
            {
                char: 'b',
                text: 'Offer them a cigarette',
                img: '',
            },
            {
                char: 'c',
                text: 'Ask who caused the collision',
                img: '',
            },
            {
                char: 'd',
                text: 'Reassure them confidently',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6275',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident where a motorcyclist is lying in the middle of the road and unconscious. What`s the first thing you should do?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move the rider out of the road',
                img: '',
            },
            {
                char: 'b',
                text: 'Warn other traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'Clear the road of debris',
                img: '',
            },
            {
                char: 'd',
                text: 'Give the rider reassurance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6278',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re trying to resuscitate a casualty who isn`t breathing. For how long should you continue compressions if they haven`t started breathing again?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Give up if you think they`re dead',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep trying for up to two minutes',
                img: '',
            },
            {
                char: 'c',
                text: 'Until medical help arrives and takes over',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep trying for up to four minutes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6279',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'When should you stop trying to resuscitate a casualty?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When you think they`re dead',
                img: '',
            },
            {
                char: 'b',
                text: 'When they can breathe without help',
                img: '',
            },
            {
                char: 'c',
                text: 'When they`ve turned blue',
                img: '',
            },
            {
                char: 'd',
                text: 'When you think the ambulance is coming',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6283',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident. A casualty has an injured arm that`s bleeding heavily. What could you do to help while waiting for the emergency services to arrive?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Remove clothing around the wound',
                img: '',
            },
            {
                char: 'b',
                text: 'Dab the wound',
                img: '',
            },
            {
                char: 'c',
                text: 'Get them a drink',
                img: '',
            },
            {
                char: 'd',
                text: 'Try to stem the flow of blood',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6284',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident. The emergency services have already been called. A pedestrian is bleeding heavily from a leg wound, but their leg isn`t broken. What could you do to help them?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Dab the wound to stop the bleeding',
                img: '',
            },
            {
                char: 'b',
                text: 'Give them some painkiller tablets',
                img: '',
            },
            {
                char: 'c',
                text: 'Apply firm pressure to the wound',
                img: '',
            },
            {
                char: 'd',
                text: 'Fetch them a warm drink',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6285',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At an incident, a casualty is unconscious but still breathing. Why would you move them?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Because an ambulance is on the way',
                img: '',
            },
            {
                char: 'b',
                text: 'Because bystanders advise you to',
                img: '',
            },
            {
                char: 'c',
                text: 'Because there`s further danger',
                img: '',
            },
            {
                char: 'd',
                text: 'Because they look uncomfortable',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6286',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At an incident, you suspect a casualty has back injuries. What`s the best way to help them?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Offer them a drink',
                img: '',
            },
            {
                char: 'b',
                text: 'Leave them where they are',
                img: '',
            },
            {
                char: 'c',
                text: 'Raise their legs',
                img: '',
            },
            {
                char: 'd',
                text: 'Offer them a cigarette',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6287',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'The area around an incident is safe. What`s the best way to help an injured person?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Get them out of their vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'Give them a drink',
                img: '',
            },
            {
                char: 'c',
                text: 'Give them something to eat',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep them in the vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6290',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re stopped by a police officer for a suspected motoring offence. Which document will you always be asked to produce?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your driving licence',
                img: '',
            },
            {
                char: 'b',
                text: 'Your vehicle registration document',
                img: '',
            },
            {
                char: 'c',
                text: 'Your vehicle`s MOT certificate',
                img: '',
            },
            {
                char: 'd',
                text: 'Your theory test certificate',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6530',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At the scene of an incident, a person has become hysterical. How should you calm them down?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'By leaving them to quietly recover',
                img: '',
            },
            {
                char: 'b',
                text: 'By engaging them in banter',
                img: '',
            },
            {
                char: 'c',
                text: 'By giving them a hot drink',
                img: '',
            },
            {
                char: 'd',
                text: 'By talking to them quietly and firmly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6531',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at an incident. Why may it be harmful to move a casualty?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You could damage your back',
                img: '',
            },
            {
                char: 'b',
                text: 'You could get blood on your hands',
                img: '',
            },
            {
                char: 'c',
                text: 'You could be accused of assault',
                img: '',
            },
            {
                char: 'd',
                text: 'You could cause more injury',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6532',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At the scene of a crash, a casualty is in contact with live electrical cables. What should you use to break the electrical connection?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A metal pole',
                img: '',
            },
            {
                char: 'b',
                text: 'Woollen gloves',
                img: '',
            },
            {
                char: 'c',
                text: 'A damp piece of cloth',
                img: '',
            },
            {
                char: 'd',
                text: 'A length of wood',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6568',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Where should you stand when using a motorway emergency telephone?',
        questionImg: 'TS4621.tif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In front of the barrier',
                img: '',
            },
            {
                char: 'b',
                text: 'Facing the oncoming traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'With your back to the traffic',
                img: '',
            },
            {
                char: 'd',
                text: 'Looking towards the grass verge',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6611',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Which type of fire extinguisher shouldn`t be used on flammable liquids?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Water (red)',
                img: '',
            },
            {
                char: 'b',
                text: 'Foam (cream)',
                img: '',
            },
            {
                char: 'c',
                text: 'Dry powder (blue)',
                img: '',
            },
            {
                char: 'd',
                text: 'Carbon dioxide (black)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6640',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your vehicle breaks down on a motorway. What should you do if you can`t get it fully onto the hard shoulder?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stand at the edge of the carriageway to warn others',
                img: '',
            },
            {
                char: 'b',
                text: 'Place a warning triangle in the lane behind your vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'Wear a bright jacket and stand in the lane behind your vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Call for help using the nearest emergency telephone',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6755',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your engine catches fire. What should you do before attempting to put the fire out?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Shut off the fuel supply',
                img: '',
            },
            {
                char: 'b',
                text: 'Open the engine housing wide',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive to the nearest fire station',
                img: '',
            },
            {
                char: 'd',
                text: 'Empty the air tanks',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7027',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'What should you do before driving into a tunnel?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Switch off your radio',
                img: '',
            },
            {
                char: 'b',
                text: 'Remove your sunglasses',
                img: '',
            },
            {
                char: 'c',
                text: 'Close your sunroof',
                img: '',
            },
            {
                char: 'd',
                text: 'Switch on your windscreen wipers ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7028',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'What should you do when you drive into a tunnel?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Use parking lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Use front spotlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Use dipped headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Use rear fog lights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7029',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'What should you do before entering a tunnel?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Put on your sunglasses',
                img: '',
            },
            {
                char: 'b',
                text: 'Check your tyre pressures',
                img: '',
            },
            {
                char: 'c',
                text: 'Change to a lower gear',
                img: '',
            },
            {
                char: 'd',
                text: 'Tune your radio to a local channel',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7030',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re driving through a congested tunnel. What should you do if you have to stop?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop very close to the vehicle in front to save space',
                img: '',
            },
            {
                char: 'b',
                text: 'Ignore any message signs as they`re never up to date ',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep a safe distance from the vehicle in front ',
                img: '',
            },
            {
                char: 'd',
                text: 'Put your headlights on full beam',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7031',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re driving through a tunnel. What should you do if your vehicle breaks down?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch on hazard warning lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Remain in your vehicle ',
                img: '',
            },
            {
                char: 'c',
                text: 'Wait for the police to find you',
                img: '',
            },
            {
                char: 'd',
                text: 'Rely on CCTV cameras seeing you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7033',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your vehicle catches fire while you`re driving through a tunnel. What should you do if the vehicle can still be driven?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Leave it where it is, with the engine running',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop, then walk to an emergency telephone point',
                img: '',
            },
            {
                char: 'c',
                text: 'Park it away from the carriageway',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive it out of the tunnel if you can do so',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7035',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What should you do when you`re driving through a tunnel in heavy traffic?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stay close to the vehicle in front to reduce congestion',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch off your dipped headlights to reduce dazzle',
                img: '',
            },
            {
                char: 'c',
                text: 'Closely follow the tail lights of other vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'Follow the instructions given by variable message signs',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7152',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'A vehicle has rolled over and caught fire. The driver`s hands and arms have been burned. How could you help the driver?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Douse the burns with cool water',
                img: '',
            },
            {
                char: 'b',
                text: 'Try to put out the fire',
                img: '',
            },
            {
                char: 'c',
                text: 'Remove smouldering clothing',
                img: '',
            },
            {
                char: 'd',
                text: 'Remove anything sticking to the burns',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7153',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At an incident, a casualty has stopped breathing. How could you help them?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By opening their airway',
                img: '',
            },
            {
                char: 'b',
                text: 'By tilting their head as far forward as possible',
                img: '',
            },
            {
                char: 'c',
                text: 'By raising their legs',
                img: '',
            },
            {
                char: 'd',
                text: 'By giving them something to drink',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7156',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`ve been involved in an incident and damaged some property. What should you do if nobody else is present and your vehicle is still roadworthy?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop, then report the incident to the police within 24 hours',
                img: '',
            },
            {
                char: 'b',
                text: 'Leave the scene. Don`t report the incident if there are no witnesses ',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop, then report the incident to the police after 48 hours ',
                img: '',
            },
            {
                char: 'd',
                text: 'Leave the scene. Don`t report the incident if there were no injuries',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7157',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`ve had an incident while driving through a tunnel. You aren`t injured but your vehicle can`t be driven. What`s the first thing you should do in this situation?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Rely on other drivers to phone the police',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch off the engine and switch on hazard warning lights',
                img: '',
            },
            {
                char: 'c',
                text: 'Take the names of witnesses and other drivers',
                img: '',
            },
            {
                char: 'd',
                text: 'Sweep up any debris that`s in the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7158',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'While driving through a tunnel, your vehicle catches fire. What`s the first thing you should do if the vehicle can`t be driven out of the tunnel?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Wait for the police; tunnels are regularly patrolled ',
                img: '',
            },
            {
                char: 'b',
                text: 'Stay with your vehicle; you`ll be seen by the CCTV cameras',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop at the side of the road and switch off the engine',
                img: '',
            },
            {
                char: 'd',
                text: 'Don`t put out the fire; wait for the emergency services ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7281',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at the scene of an incident. What would suggest someone is suffering from shock?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A flushed complexion',
                img: '',
            },
            {
                char: 'b',
                text: 'Being alert',
                img: '',
            },
            {
                char: 'c',
                text: 'Rapid shallow breathing',
                img: '',
            },
            {
                char: 'd',
                text: 'Being very hungry',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7315',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What`s the first thing you should try to do if your vehicle catches fire while you`re driving through a tunnel?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drive out of the tunnel',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop at the side of the tunnel',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop and put out the fire',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop and leave the vehicle immediately',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7335',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident. How should you deal with someone who is hysterical?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Talk to them quietly and firmly ',
                img: '',
            },
            {
                char: 'b',
                text: 'Let them wander off to calm down',
                img: '',
            },
            {
                char: 'c',
                text: 'Restrain them physically',
                img: '',
            },
            {
                char: 'd',
                text: 'Shout loudly to get their attention',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7356',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at the scene of a traffic incident. What are the symptoms of someone suffering from shock?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Rapid pulse and sweating',
                img: '',
            },
            {
                char: 'b',
                text: 'Flushed complexion and deep breathing',
                img: '',
            },
            {
                char: 'c',
                text: 'Slow pulse and dry skin',
                img: '',
            },
            {
                char: 'd',
                text: 'Muscle spasms and an itchy rash',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7385',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at the scene of a collision. People are injured. What should be done when the risk of further collisions has been dealt with?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pull people who are hurt out of their vehicles',
                img: '',
            },
            {
                char: 'b',
                text: 'Clear a parking area for the emergency services',
                img: '',
            },
            {
                char: 'c',
                text: 'Make sure the emergency services have been called',
                img: '',
            },
            {
                char: 'd',
                text: 'Get the casualties to drink something sweet',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8076',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re driving a coach carrying elderly people. You arrive at the scene of an incident. What should you do if the emergency services have already arrived?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Ask your passengers to find out what`s happening',
                img: '',
            },
            {
                char: 'b',
                text: 'Don`t tell your passengers anything in case you upset them',
                img: '',
            },
            {
                char: 'c',
                text: 'Leave your passengers on the bus and see what`s happening',
                img: '',
            },
            {
                char: 'd',
                text: 'Tell your passengers what`s happening without upsetting them',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8077',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What should you do if your bus has been involved in an incident with other vehicles?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Switch off your headlights',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch off the fuel supply',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch off the air conditioning',
                img: '',
            },
            {
                char: 'd',
                text: 'Switch off the destination signs',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8078',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What must you do if your bus has hit a parked vehicle and the owner can`t be found?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Report the incident to the police within seven days',
                img: '',
            },
            {
                char: 'b',
                text: 'Report the incident to the owner as soon as possible',
                img: '',
            },
            {
                char: 'c',
                text: 'Report the incident to the owner within seven days',
                img: '',
            },
            {
                char: 'd',
                text: 'Report the incident to the police within 24 hours',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'DD8079',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'How should you care for a passenger who`s in shock?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Give them liquids',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep them moving',
                img: '',
            },
            {
                char: 'c',
                text: 'Encourage them to sleep',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep them warm',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8080',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'A passenger on your bus has stopped breathing. You help them by giving CPR. When should you stop doing this?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When they can breathe on their own',
                img: '',
            },
            {
                char: 'b',
                text: 'When you think the passenger has died',
                img: '',
            },
            {
                char: 'c',
                text: 'When their skin has turned blue',
                img: '',
            },
            {
                char: 'd',
                text: 'When you think the ambulance is coming',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8081',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your bus is involved in an incident. What should you do if you have a passenger who`s unconscious but still breathing?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Get medical help',
                img: '',
            },
            {
                char: 'b',
                text: 'Check their pulse',
                img: '',
            },
            {
                char: 'c',
                text: 'Give them liquid',
                img: '',
            },
            {
                char: 'd',
                text: 'Lie them on their back',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8173',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your bus has stopped at the scene of an incident. Why should you consider moving your passengers to the front of the bus?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To improve weight distribution',
                img: '',
            },
            {
                char: 'b',
                text: 'To reduce the risk of injury from a rear-end collision',
                img: '',
            },
            {
                char: 'c',
                text: 'To be closer to emergency exits',
                img: '',
            },
            {
                char: 'd',
                text: 'To be witnesses to the incident',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8221',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your bus hits a low railway bridge. Nobody is injured. When and to whom should you report the incident?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Immediately, to your employer',
                img: '',
            },
            {
                char: 'b',
                text: 'Within 24 hours, to the railway authority',
                img: '',
            },
            {
                char: 'c',
                text: 'Within seven days, to the police',
                img: '',
            },
            {
                char: 'd',
                text: 'Immediately, to the railway authority',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'DD8266',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'While driving through a tunnel, your coach catches fire. What should you do if the vehicle can`t be driven any further?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move the passengers to the rear of the coach',
                img: '',
            },
            {
                char: 'b',
                text: 'Get the passengers off and keep them together',
                img: '',
            },
            {
                char: 'c',
                text: 'Make sure the passengers stay in their seats',
                img: '',
            },
            {
                char: 'd',
                text: 'Move the passengers to the front of the coach',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8311',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re carrying a bus full of passengers. What must you do if you see smoke coming from the engine compartment?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Move the passengers to the front of the bus',
                img: '',
            },
            {
                char: 'b',
                text: 'Open the engine cover to investigate',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive to the bus station for a replacement bus',
                img: '',
            },
            {
                char: 'd',
                text: 'Get everyone off the bus quickly and safely',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8358',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your bus catches fire in a tunnel and can`t be driven any further. What should you do when you`ve stopped safely at the side of the road?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Move your passengers to the nearest tunnel exit',
                img: '',
            },
            {
                char: 'b',
                text: 'Use the extinguisher to put out the fire',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep your passengers together in front of the vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Stand behind your vehicle and warn other drivers',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5083',
        topicCode: 'Vehicle condition',
        question:
            'What`s the main reason for cleaning your wheels and tyres when you leave a building site?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To keep the tyres in good condition',
                img: '',
            },
            {
                char: 'b',
                text: 'To prevent the tyres from damaging the road surface',
                img: '',
            },
            {
                char: 'c',
                text: 'To reduce air leakage from the tyre valves',
                img: '',
            },
            {
                char: 'd',
                text: 'To stop mud dropping onto the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5084',
        topicCode: 'Vehicle condition',
        question:
            'Your vehicle has double rear wheels. Why should you check them before leaving a building site?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To make sure the diff-lock is engaged',
                img: '',
            },
            {
                char: 'b',
                text: 'To make sure the diff-lock is disengaged',
                img: '',
            },
            {
                char: 'c',
                text: 'To check that the load-sensing valve is operating correctly',
                img: '',
            },
            {
                char: 'd',
                text: 'To make sure bricks or debris aren`t wedged between the wheels',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5085',
        topicCode: 'Vehicle condition',
        question:
            'What should you check before you drive off a muddy building site onto the road?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The diff-lock is disengaged',
                img: '',
            },
            {
                char: 'b',
                text: 'The diff-lock is engaged',
                img: '',
            },
            {
                char: 'c',
                text: 'The steering lock is engaged',
                img: '',
            },
            {
                char: 'd',
                text: 'The twist lock is disengaged',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5086 ',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a lorry along a motorway. You notice that you`re losing tread from one of your tyres. What should you do?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder and phone for assistance',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop on the hard shoulder and change the wheel',
                img: '',
            },
            {
                char: 'c',
                text: 'Continue driving to the next service station',
                img: '',
            },
            {
                char: 'd',
                text: 'Continue driving and leave by the next exit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5087',
        topicCode: 'Vehicle condition',
        question:
            'What`s the minimum depth of tread required over three-quarters of the breadth of a lorry tyre?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '1 mm',
                img: '',
            },
            {
                char: 'b',
                text: '1.5 mm',
                img: '',
            },
            {
                char: 'c',
                text: '2.5 mm',
                img: '',
            },
            {
                char: 'd',
                text: '5 mm',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5088',
        topicCode: 'Vehicle condition',
        question:
            'What`s the final thing you should do after recoupling a trailer?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Connect the brake lines',
                img: '',
            },
            {
                char: 'b',
                text: 'Release the trailer parking brake',
                img: '',
            },
            {
                char: 'c',
                text: 'Connect the electrical lines',
                img: '',
            },
            {
                char: 'd',
                text: 'Raise the trailer legs',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5277',
        topicCode: 'Vehicle condition',
        question:
            'When should your lorry coupling system (fifth wheel) be checked and lubricated?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only prior to an MOT test',
                img: '',
            },
            {
                char: 'b',
                text: 'Every 6 months',
                img: '',
            },
            {
                char: 'c',
                text: 'Yearly',
                img: '',
            },
            {
                char: 'd',
                text: 'Regularly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5349',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a new articulated lorry that`s fully laden. You notice that the steering feels heavy. What`s the most likely reason?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The road is icy',
                img: '',
            },
            {
                char: 'b',
                text: 'The power steering is faulty',
                img: '',
            },
            {
                char: 'c',
                text: 'The lorry is new',
                img: '',
            },
            {
                char: 'd',
                text: 'The load on the trailer has shifted',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5356',
        topicCode: 'Vehicle condition',
        question: 'When should wheel nuts be checked?',
        questionImg: 'VL2517.tif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'After driving down a steep hill',
                img: '',
            },
            {
                char: 'b',
                text: 'Soon after initial tightening',
                img: '',
            },
            {
                char: 'c',
                text: 'Just after driving on a motorway',
                img: '',
            },
            {
                char: 'd',
                text: 'After unloading',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5387',
        topicCode: 'Vehicle condition',
        question: 'What would you secure with a dog clip?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The kingpin release handle',
                img: '',
            },
            {
                char: 'b',
                text: 'The air lines',
                img: '',
            },
            {
                char: 'c',
                text: 'The parking brake',
                img: '',
            },
            {
                char: 'd',
                text: 'The diff-lock',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5388',
        topicCode: 'Vehicle condition',
        question:
            'How frequently should the components of a fifth-wheel coupling be inspected?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Daily',
                img: '',
            },
            {
                char: 'b',
                text: 'Weekly',
                img: '',
            },
            {
                char: 'c',
                text: 'Monthly',
                img: '',
            },
            {
                char: 'd',
                text: 'Yearly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5389',
        topicCode: 'Vehicle condition',
        question: 'What should you check for wear or damage on a drawbar unit?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Dog clip',
                img: '',
            },
            {
                char: 'b',
                text: 'Fifth wheel',
                img: '',
            },
            {
                char: 'c',
                text: 'Kingpin release handle',
                img: '',
            },
            {
                char: 'd',
                text: 'Eyelet coupling',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5435',
        topicCode: 'Vehicle condition',
        question: 'What`s the fifth-wheel coupling used for?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To connect the tractor unit to the trailer',
                img: '',
            },
            {
                char: 'b',
                text: 'To support the trailer when it`s detached',
                img: '',
            },
            {
                char: 'c',
                text: 'To prevent the trailer from jack-knifing',
                img: '',
            },
            {
                char: 'd',
                text: 'To attach air lines to the trailer',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5436',
        topicCode: 'Vehicle condition',
        question:
            'How often should the components of the fifth-wheel coupling be inspected?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Every 3000 miles (5000 km)',
                img: '',
            },
            {
                char: 'b',
                text: 'Every 6000 miles (10 000 km)',
                img: '',
            },
            {
                char: 'c',
                text: 'Every 9000 miles (15 000 km)',
                img: '',
            },
            {
                char: 'd',
                text: 'Every 12 000 miles (20 000 km)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC6754',
        topicCode: 'Vehicle condition',
        question:
            'You`re uncoupling a trailer. What must you do before disconnecting any of the air lines?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drain the air tanks',
                img: '',
            },
            {
                char: 'b',
                text: 'Apply the trailer parking brake',
                img: '',
            },
            {
                char: 'c',
                text: 'Lower the landing gear',
                img: '',
            },
            {
                char: 'd',
                text: 'Disconnect the electrical line',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6291',
        topicCode: 'Vehicle condition',
        question:
            'You`re checking your vehicle`s tyres before starting a long motorway journey. What check should be made on each tyre?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Air pressure',
                img: '',
            },
            {
                char: 'b',
                text: 'Tracking',
                img: '',
            },
            {
                char: 'c',
                text: 'Valve clearance',
                img: '',
            },
            {
                char: 'd',
                text: 'Tyre profile',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6292',
        topicCode: 'Vehicle condition',
        question:
            'What should you do if you notice that two wheel nuts are missing from one of the wheels on your vehicle?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue your journey',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive to the nearest tyre depot',
                img: '',
            },
            {
                char: 'c',
                text: 'Use a nut from another wheel',
                img: '',
            },
            {
                char: 'd',
                text: 'Park and phone for assistance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6293',
        topicCode: 'Vehicle condition',
        question: 'What would be illegal?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Using different makes of tyre on the same axle',
                img: '',
            },
            {
                char: 'b',
                text: 'Using a tyre with a recut tread',
                img: '',
            },
            {
                char: 'c',
                text: 'Using a tyre with a tread depth of 1.3 mm',
                img: '',
            },
            {
                char: 'd',
                text: 'Using a tyre with exposed ply or cord',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6294',
        topicCode: 'Vehicle condition',
        question:
            'In very cold weather, moisture can freeze in your vehicle`s air storage tanks. What can you do to help prevent this from happening?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Cover the air tanks with a blanket',
                img: '',
            },
            {
                char: 'b',
                text: 'Drain the tanks daily',
                img: '',
            },
            {
                char: 'c',
                text: 'Use the brakes frequently',
                img: '',
            },
            {
                char: 'd',
                text: 'Pump the brakes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6295 ',
        topicCode: 'Vehicle condition',
        question: 'What does this warning light on the instrument panel mean?',
        questionImg: 'TS4036.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Low oil pressure',
                img: '',
            },
            {
                char: 'b',
                text: 'Battery discharge',
                img: '',
            },
            {
                char: 'c',
                text: 'Braking-system fault',
                img: '',
            },
            {
                char: 'd',
                text: 'Door open',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6296',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving along a motorway. What should you do if the air-pressure warning device starts to operate?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop immediately in the lane you`re in',
                img: '',
            },
            {
                char: 'b',
                text: 'Continue slowly to the next service area',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop on the hard shoulder as soon as possible',
                img: '',
            },
            {
                char: 'd',
                text: 'Leave the motorway at the next exit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6297',
        topicCode: 'Vehicle condition',
        question:
            'Your vehicle has broken down at night on a two-way road. How should you try to leave the vehicle?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On the left of the road',
                img: '',
            },
            {
                char: 'b',
                text: 'Partly on the pavement',
                img: '',
            },
            {
                char: 'c',
                text: 'On a grass verge',
                img: '',
            },
            {
                char: 'd',
                text: 'On the right of the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6305',
        topicCode: 'Vehicle condition',
        question:
            'What should you do if your power-assisted steering fails suddenly?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue driving to the nearest repair centre',
                img: '',
            },
            {
                char: 'b',
                text: 'Return to the depot',
                img: '',
            },
            {
                char: 'c',
                text: 'Continue your journey at a slower speed',
                img: '',
            },
            {
                char: 'd',
                text: 'Park and get help',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6306',
        topicCode: 'Vehicle condition',
        question:
            'Your steering suddenly becomes heavy to turn. What could make this happen?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'An uneven road surface',
                img: '',
            },
            {
                char: 'b',
                text: 'A loss of air-brake pressure',
                img: '',
            },
            {
                char: 'c',
                text: 'A faulty parking brake',
                img: '',
            },
            {
                char: 'd',
                text: 'A fault with the power-assisted steering',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6307',
        topicCode: 'Vehicle condition',
        question:
            'What should you do if the brake pedal becomes hard to press?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue to drive and report it at the end of the day',
                img: '',
            },
            {
                char: 'b',
                text: 'Pump the brake pedal continuously',
                img: '',
            },
            {
                char: 'c',
                text: 'Drain the air tanks and then continue',
                img: '',
            },
            {
                char: 'd',
                text: 'Park and phone for help',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6308',
        topicCode: 'Vehicle condition',
        question: 'Why do air tanks on brake systems need to be drained?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To remove excess coolant',
                img: '',
            },
            {
                char: 'b',
                text: 'To remove rain water that`s seeped into the system',
                img: '',
            },
            {
                char: 'c',
                text: 'To remove any oil leaks that collect here',
                img: '',
            },
            {
                char: 'd',
                text: 'To remove moisture drawn in from the atmosphere',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6309',
        topicCode: 'Vehicle condition',
        question:
            'You`re checking your vehicle. What should you do if you discover an air leak in the braking system?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive slowly to the nearest garage',
                img: '',
            },
            {
                char: 'b',
                text: 'Check the leak from time to time on your journey',
                img: '',
            },
            {
                char: 'c',
                text: 'Leave the vehicle parked and report the fault immediately',
                img: '',
            },
            {
                char: 'd',
                text: 'Start your journey and report the fault on your return',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6311',
        topicCode: 'Vehicle condition',
        question:
            'A loud buzzer sounds in your vehicle. What`s this most likely to indicate?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Low oil pressure',
                img: '',
            },
            {
                char: 'b',
                text: 'Low air pressure',
                img: '',
            },
            {
                char: 'c',
                text: 'Low tyre pressure',
                img: '',
            },
            {
                char: 'd',
                text: 'Low fuel level',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6317',
        topicCode: 'Vehicle condition',
        question:
            'What proportion of the width of a tyre must have at least the legal minimum depth of tread?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'One-quarter',
                img: '',
            },
            {
                char: 'b',
                text: 'One-half',
                img: '',
            },
            {
                char: 'c',
                text: 'Five-eighths',
                img: '',
            },
            {
                char: 'd',
                text: 'Three-quarters',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6322',
        topicCode: 'Vehicle condition',
        question:
            'You discover that one of your rear brake-light bulbs has failed. How soon should it be replaced?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Immediately',
                img: '',
            },
            {
                char: 'b',
                text: 'On return to your base',
                img: '',
            },
            {
                char: 'c',
                text: 'Within five days',
                img: '',
            },
            {
                char: 'd',
                text: 'At the next service',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6575',
        topicCode: 'Vehicle condition',
        question:
            'What can you add to diesel fuel to prevent it from becoming less effective at low temperatures? ',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Anti-freeze',
                img: '',
            },
            {
                char: 'b',
                text: 'Anti-waxing additives',
                img: '',
            },
            {
                char: 'c',
                text: 'Petrol ',
                img: '',
            },
            {
                char: 'd',
                text: 'Paraffin',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6626',
        topicCode: 'Vehicle condition',
        question:
            'You`re about to start a long journey midway through the day. What should you do if you notice that the sidelights work but the headlights are faulty?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Don`t drive until they`re repaired',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive only until the light begins to fade',
                img: '',
            },
            {
                char: 'c',
                text: 'Avoid driving on motorways after dark',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive only if the weather is good',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6628',
        topicCode: 'Vehicle condition',
        question:
            'Before starting a journey, you want to check your brake-system warning lights. What can you do when these aren`t operated by the ignition switch?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Look for a check switch on the dashboard',
                img: '',
            },
            {
                char: 'b',
                text: 'Get someone behind to check your brake lights',
                img: '',
            },
            {
                char: 'c',
                text: 'Check them at the end of your journey',
                img: '',
            },
            {
                char: 'd',
                text: 'Pump the brake pedal a number of times',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6633',
        topicCode: 'Vehicle condition',
        question:
            'On motorways, you`re usually driving at higher speeds for long distances. What effect can this have on your tyres?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They`ll be more likely to overheat and disintegrate',
                img: '',
            },
            {
                char: 'b',
                text: 'They`ll have lower rolling resistance',
                img: '',
            },
            {
                char: 'c',
                text: 'They`ll need less air pressure',
                img: '',
            },
            {
                char: 'd',
                text: 'They`ll become very slippery',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6639',
        topicCode: 'Vehicle condition',
        question:
            'You notice that one of your tyres has a bulge in the side wall. What will happen if you drive the vehicle?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your tachograph reading won`t be accurate',
                img: '',
            },
            {
                char: 'b',
                text: 'Your speedometer will give an incorrect reading',
                img: '',
            },
            {
                char: 'c',
                text: 'The vehicle will become unstable on corners',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll break the law and risk prosecution',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6648',
        topicCode: 'Vehicle condition',
        question: 'What`s the purpose of a preheating device?',
        questionImg: 'TS4035h.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To heat the cab',
                img: '',
            },
            {
                char: 'b',
                text: 'To heat the gearbox',
                img: '',
            },
            {
                char: 'c',
                text: 'To heat the combustion chambers',
                img: '',
            },
            {
                char: 'd',
                text: 'To heat the seat',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6649',
        topicCode: 'Vehicle condition',
        question: 'Where does a high-pressure fuel injector deliver fuel?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Into the carburettors',
                img: '',
            },
            {
                char: 'b',
                text: 'Into the combustion chamber',
                img: '',
            },
            {
                char: 'c',
                text: 'Into the manifold',
                img: '',
            },
            {
                char: 'd',
                text: 'Into the crankcase',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6656',
        topicCode: 'Vehicle condition',
        question:
            'Why is it important to avoid overfilling the engine with oil?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It could leave an oil stain on the road',
                img: '',
            },
            {
                char: 'b',
                text: 'It will increase the amount of exhaust gases',
                img: '',
            },
            {
                char: 'c',
                text: 'It could increase pressure in the engine and cause damage',
                img: '',
            },
            {
                char: 'd',
                text: 'It will damage the exhaust system',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6659',
        topicCode: 'Vehicle condition',
        question:
            'Why should you use an approved coolant solution in your engine`s cooling system?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To protect the coolant from freezing',
                img: '',
            },
            {
                char: 'b',
                text: 'For easier starting from cold',
                img: '',
            },
            {
                char: 'c',
                text: 'To prevent the air tank from freezing',
                img: '',
            },
            {
                char: 'd',
                text: 'For effective cab heating ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6666',
        topicCode: 'Vehicle condition',
        question: 'When should you check the oil level in your engine?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When the engine is running',
                img: '',
            },
            {
                char: 'b',
                text: 'When the engine is cold',
                img: '',
            },
            {
                char: 'c',
                text: 'When the engine is warm',
                img: '',
            },
            {
                char: 'd',
                text: 'When the engine is hot',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6667',
        topicCode: 'Vehicle condition',
        question: 'When should anti-freeze be used in the cooling system?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In winter only',
                img: '',
            },
            {
                char: 'b',
                text: 'All year round',
                img: '',
            },
            {
                char: 'c',
                text: 'In summer only',
                img: '',
            },
            {
                char: 'd',
                text: 'When starting from cold',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6669',
        topicCode: 'Vehicle condition',
        question: 'What does this warning light on the instrument panel mean?',
        questionImg: 'TS4035a.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Low fuel pressure',
                img: '',
            },
            {
                char: 'b',
                text: 'Low oil pressure',
                img: '',
            },
            {
                char: 'c',
                text: 'Low water pressure',
                img: '',
            },
            {
                char: 'd',
                text: 'Low air pressure',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6674',
        topicCode: 'Vehicle condition',
        question:
            'What does it mean if the ignition warning light comes on while you`re driving?',
        questionImg: 'TS4035b.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The oil pressure is low',
                img: '',
            },
            {
                char: 'b',
                text: 'There`s an electrical fault',
                img: '',
            },
            {
                char: 'c',
                text: 'The air pressure is low',
                img: '',
            },
            {
                char: 'd',
                text: 'There`s a hydraulic fault',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6706',
        topicCode: 'Vehicle condition',
        question:
            'What will happen if you follow a regular vehicle maintenance schedule?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It will reduce breakdowns',
                img: '',
            },
            {
                char: 'b',
                text: 'It will increase fuel bills',
                img: '',
            },
            {
                char: 'c',
                text: 'It will allow heavier loads to be carried',
                img: '',
            },
            {
                char: 'd',
                text: 'It will reduce insurance premiums',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6720',
        topicCode: 'Vehicle condition',
        question:
            'You`ve had to change a wheel on your vehicle. When should the wheel nuts be checked again?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'At the next service interval',
                img: '',
            },
            {
                char: 'b',
                text: 'When they`re cold',
                img: '',
            },
            {
                char: 'c',
                text: 'When they`re hot',
                img: '',
            },
            {
                char: 'd',
                text: 'Shortly afterwards',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6737',
        topicCode: 'Vehicle condition',
        question: 'How can vehicle breakdowns be reduced?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By driving slowly',
                img: '',
            },
            {
                char: 'b',
                text: 'By regular servicing',
                img: '',
            },
            {
                char: 'c',
                text: 'By regular cleaning',
                img: '',
            },
            {
                char: 'd',
                text: 'By avoiding bad weather',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6742',
        topicCode: 'Vehicle condition',
        question:
            'Why should your engine oil be changed at the recommended intervals?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To reduce friction and wear',
                img: '',
            },
            {
                char: 'b',
                text: 'For better steering control',
                img: '',
            },
            {
                char: 'c',
                text: 'To prevent oil leaks',
                img: '',
            },
            {
                char: 'd',
                text: 'To improve clutch wear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6744',
        topicCode: 'Vehicle condition',
        question:
            'Where should you park your vehicle before checking the engine oil level?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On sloping ground',
                img: '',
            },
            {
                char: 'b',
                text: 'On a steep gradient',
                img: '',
            },
            {
                char: 'c',
                text: 'On flat ground',
                img: '',
            },
            {
                char: 'd',
                text: 'On a downhill slope',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6745',
        topicCode: 'Vehicle condition',
        question: 'What could happen if you overfill your engine with oil?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The handling may improve',
                img: '',
            },
            {
                char: 'b',
                text: 'Exhaust emissions could be reduced',
                img: '',
            },
            {
                char: 'c',
                text: 'Some gaskets might be damaged',
                img: '',
            },
            {
                char: 'd',
                text: 'You could wait longer before the next service',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6753',
        topicCode: 'Vehicle condition',
        question:
            'You`ve stopped on a firm, level surface. What`s the first thing you must do before you uncouple the trailer?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Lower the trailer legs to the ground',
                img: '',
            },
            {
                char: 'b',
                text: 'Apply the parking brake',
                img: '',
            },
            {
                char: 'c',
                text: 'Release the brake air lines',
                img: '',
            },
            {
                char: 'd',
                text: 'Uncouple the electrical lines',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6857',
        topicCode: 'Vehicle condition',
        question: 'When should you check the wheel nuts on your vehicle?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Before any journey',
                img: '',
            },
            {
                char: 'b',
                text: 'Only before long trips',
                img: '',
            },
            {
                char: 'c',
                text: 'Every 1000 miles (1600 km)',
                img: '',
            },
            {
                char: 'd',
                text: 'Annually',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7085',
        topicCode: 'Vehicle condition',
        question:
            'What should you do if thick black smoke is coming from the exhaust of your vehicle?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue on to the nearest garage',
                img: '',
            },
            {
                char: 'b',
                text: 'Return to your depot and report the problem',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop in a safe place and get help',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive slowly with your hazard warning lights on',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7117',
        topicCode: 'Vehicle condition',
        question:
            'You hit the kerb at speed. What part of your vehicle should you check for damage?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Exhaust',
                img: '',
            },
            {
                char: 'b',
                text: 'Brakes',
                img: '',
            },
            {
                char: 'c',
                text: 'Lights',
                img: '',
            },
            {
                char: 'd',
                text: 'Tyres',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7118',
        topicCode: 'Vehicle condition',
        question: 'What`s most likely to cause a burst tyre?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Frequent gear changing in varying conditions',
                img: '',
            },
            {
                char: 'b',
                text: 'Running tyres under-inflated',
                img: '',
            },
            {
                char: 'c',
                text: 'Always operating in cool weather',
                img: '',
            },
            {
                char: 'd',
                text: 'Mixing tyres with different tread depth',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7121',
        topicCode: 'Vehicle condition',
        question:
            'When would you use `kickdown` on a vehicle that has automatic transmission?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To give quicker acceleration',
                img: '',
            },
            {
                char: 'b',
                text: 'To apply the emergency brakes',
                img: '',
            },
            {
                char: 'c',
                text: 'To stop more smoothly',
                img: '',
            },
            {
                char: 'd',
                text: 'To go down a steep hill',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7122',
        topicCode: 'Vehicle condition',
        question:
            'What`s the most likely cause if your steering starts to feel heavy?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Faulty power steering',
                img: '',
            },
            {
                char: 'b',
                text: 'An icy road',
                img: '',
            },
            {
                char: 'c',
                text: 'A burst rear tyre',
                img: '',
            },
            {
                char: 'd',
                text: 'A wet road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7123',
        topicCode: 'Vehicle condition',
        question:
            'Your vehicle suffers a tyre blow-out. How could this create a hazard for other road users?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Scattered debris',
                img: '',
            },
            {
                char: 'b',
                text: 'Skid marks',
                img: '',
            },
            {
                char: 'c',
                text: 'Suspension failure',
                img: '',
            },
            {
                char: 'd',
                text: 'Axle damage',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7159',
        topicCode: 'Vehicle condition',
        question:
            'The Driver and Vehicle Standards Agency (DVSA) and the police carry out spot checks for faulty vehicles. What will happen to the vehicle if serious defects are found?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It will be impounded until a new driver is found',
                img: '',
            },
            {
                char: 'b',
                text: 'It will be restricted to 30 mph for the remainder of the journey',
                img: '',
            },
            {
                char: 'c',
                text: 'It will be prohibited from further use until the defects are rectified',
                img: '',
            },
            {
                char: 'd',
                text: 'It will be ordered back to the depot to unload goods or passengers',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7160',
        topicCode: 'Vehicle condition',
        question:
            'At a Driver and Vehicle Standards Agency (DVSA) roadside check, your vehicle is found to have serious defects and you may no longer use it. Who will DVSA share this information with?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The Driver and Vehicle Licensing Agency',
                img: '',
            },
            {
                char: 'b',
                text: 'The Traffic Commissioner',
                img: '',
            },
            {
                char: 'c',
                text: 'The Road Transport Industry Training Body',
                img: '',
            },
            {
                char: 'd',
                text: 'The Bus, Coach and Commercial Vehicle Council',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7161',
        topicCode: 'Vehicle condition',
        question: 'What could happen if there isn`t enough oil in your engine?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It may run faster',
                img: '',
            },
            {
                char: 'b',
                text: 'It may break down',
                img: '',
            },
            {
                char: 'c',
                text: 'It may use less fuel',
                img: '',
            },
            {
                char: 'd',
                text: 'It may produce more power',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7162',
        topicCode: 'Vehicle condition',
        question:
            'While driving, your engine-oil warning light comes on. Why could it be dangerous to continue driving?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The brakes will fail',
                img: '',
            },
            {
                char: 'b',
                text: 'The engine may be damaged',
                img: '',
            },
            {
                char: 'c',
                text: 'You`ll need to have the vehicle serviced',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll need to replace the carburettor',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7165',
        topicCode: 'Vehicle condition',
        question:
            'A tyre has been replaced on your vehicle. What precautions should be taken when tightening the wheel nuts?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Tighten the nuts in a clockwise direction ',
                img: '',
            },
            {
                char: 'b',
                text: 'Fully tighten each nut before moving to the next',
                img: '',
            },
            {
                char: 'c',
                text: 'Tighten the nuts evenly with a torque wrench',
                img: '',
            },
            {
                char: 'd',
                text: 'Tighten the nuts with an air-operated power tool',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7170',
        topicCode: 'Vehicle condition',
        question: 'What could happen if you overfill your engine with oil?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Loss of power',
                img: '',
            },
            {
                char: 'b',
                text: 'Lower emissions',
                img: '',
            },
            {
                char: 'c',
                text: 'Better handling',
                img: '',
            },
            {
                char: 'd',
                text: 'Longer service intervals',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7322',
        topicCode: 'Vehicle condition',
        question: 'Which tool is essential for fitting a road wheel?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Torque wrench',
                img: '',
            },
            {
                char: 'b',
                text: 'Ring spanner',
                img: '',
            },
            {
                char: 'c',
                text: 'Open-end spanner',
                img: '',
            },
            {
                char: 'd',
                text: 'Adjustable wrench',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7352',
        topicCode: 'Vehicle condition',
        question:
            'What`s the most likely reason for a diesel-engined vehicle running erratically in very cold weather?\n',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The endurance brake engaging',
                img: '',
            },
            {
                char: 'b',
                text: 'The air conditioning not working',
                img: '',
            },
            {
                char: 'c',
                text: 'The speed limiter operating',
                img: '',
            },
            {
                char: 'd',
                text: 'The fuel partly solidifying',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7353',
        topicCode: 'Vehicle condition',
        question: 'What do heated fuel lines prevent?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The cab temperature from dropping',
                img: '',
            },
            {
                char: 'b',
                text: 'The radiator from freezing',
                img: '',
            },
            {
                char: 'c',
                text: 'The windows from misting',
                img: '',
            },
            {
                char: 'd',
                text: 'The diesel from solidifying',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7354',
        topicCode: 'Vehicle condition',
        question:
            'Why should you carry out a daily walk-round check before setting off?\n',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To check your route',
                img: '',
            },
            {
                char: 'b',
                text: 'To check for any parking violations',
                img: '',
            },
            {
                char: 'c',
                text: 'To check your schedule',
                img: '',
            },
            {
                char: 'd',
                text: 'To check for any defects',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7366',
        topicCode: 'Vehicle condition',
        question: 'What happens to diesel fuel when it gets hot?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It expands',
                img: '',
            },
            {
                char: 'b',
                text: 'It liquefies ',
                img: '',
            },
            {
                char: 'c',
                text: 'It shrinks ',
                img: '',
            },
            {
                char: 'd',
                text: 'It waxes ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7367',
        topicCode: 'Vehicle condition',
        question: 'What must vehicle operators provide for their drivers?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A system for reporting vehicle defects',
                img: '',
            },
            {
                char: 'b',
                text: 'A daily update on all motorway hold-ups',
                img: '',
            },
            {
                char: 'c',
                text: 'A hands-free mobile communications system',
                img: '',
            },
            {
                char: 'd',
                text: 'A fuel-saving incentive scheme',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7389',
        topicCode: 'Vehicle condition',
        question:
            'On your daily walk-round check, you see that one front tyre is more than 10 years old. What should you do before using the vehicle?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Check the tyre pressure',
                img: '',
            },
            {
                char: 'b',
                text: 'Get the tyre replaced',
                img: '',
            },
            {
                char: 'c',
                text: 'Record the tyre`s age on your log',
                img: '',
            },
            {
                char: 'd',
                text: 'Check the tread depth',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7390',
        topicCode: 'Vehicle condition',
        question: 'How can you check the age of a tyre fitted to your vehicle?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The date of manufacture of each tyre is displayed in the cab',
                img: '',
            },
            {
                char: 'b',
                text: 'From the tachograph`s tyre log',
                img: '',
            },
            {
                char: 'c',
                text: 'The date of tyre manufacture is shown on the tyre sidewall',
                img: '',
            },
            {
                char: 'd',
                text: 'From the tyre history on the vehicle plate',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8086',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a three-axle double-deck bus. Why should you take extra care when using full steering lock?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Passengers might alter the angle of tilt',
                img: '',
            },
            {
                char: 'b',
                text: 'The power steering might fail',
                img: '',
            },
            {
                char: 'c',
                text: 'You may damage the air suspension',
                img: '',
            },
            {
                char: 'd',
                text: 'You may scrub the rear tyres',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8087',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a three-axle double-deck bus and have the steering turned onto full lock. What should you do to avoid rear tyre scrub?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the highest gear possible',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive at a very low speed',
                img: '',
            },
            {
                char: 'c',
                text: 'Apply the exhaust brake (retarder)',
                img: '',
            },
            {
                char: 'd',
                text: 'Reduce the pressure in the rear tyres',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8088',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a double-deck bus. What`s the minimum depth of tread required over three-quarters of each tyre`s width?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '0.8 mm',
                img: '',
            },
            {
                char: 'b',
                text: '1 mm',
                img: '',
            },
            {
                char: 'c',
                text: '1.6 mm',
                img: '',
            },
            {
                char: 'd',
                text: '2 mm',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8091',
        topicCode: 'Vehicle condition',
        question:
            'What should you do if you notice that your coach`s right rear indicator isn`t working?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Continue your journey using arm signals',
                img: '',
            },
            {
                char: 'b',
                text: 'Get it repaired before continuing',
                img: '',
            },
            {
                char: 'c',
                text: 'Get it repaired on your return to the depot',
                img: '',
            },
            {
                char: 'd',
                text: 'Get your passengers to their destination and then repair it',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8092',
        topicCode: 'Vehicle condition',
        question:
            'Before each journey, you should check all warning lights. What should you do if a warning light remains lit?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Report the fault when you return',
                img: '',
            },
            {
                char: 'b',
                text: 'Have the fault checked before setting off',
                img: '',
            },
            {
                char: 'c',
                text: 'Have the fault checked at the next service',
                img: '',
            },
            {
                char: 'd',
                text: 'Ignore it until the fault shows up',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8197',
        topicCode: 'Vehicle condition',
        question:
            'Why should you check your tyres more frequently on a coach with three axles?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Punctures can be more difficult to detect',
                img: '',
            },
            {
                char: 'b',
                text: 'Air pressure is more easily lost',
                img: '',
            },
            {
                char: 'c',
                text: 'The wheels will need balancing more often',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ve no room for a spare wheel',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8212',
        topicCode: 'Vehicle condition',
        question:
            'How frequently should a driver carry out a walk-round check?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Daily',
                img: '',
            },
            {
                char: 'b',
                text: 'Weekly',
                img: '',
            },
            {
                char: 'c',
                text: 'Every 100 miles',
                img: '',
            },
            {
                char: 'd',
                text: 'Every 1000 miles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8223',
        topicCode: 'Vehicle condition',
        question:
            'A passenger tells you they`ve noticed that a wheel nut is missing from your bus. How often should you check your vehicle`s wheel nuts?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'At the end of every week',
                img: '',
            },
            {
                char: 'b',
                text: 'At the start of every week',
                img: '',
            },
            {
                char: 'c',
                text: 'Every day before starting out',
                img: '',
            },
            {
                char: 'd',
                text: 'Only at every service interval',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8229',
        topicCode: 'Vehicle condition',
        question:
            'Your coach often tows a trailer. How often should you check the trailer tyres for pressure?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At least once a week when they`re cold',
                img: '',
            },
            {
                char: 'b',
                text: 'At least once a month when they`re hot',
                img: '',
            },
            {
                char: 'c',
                text: 'At least once a week when they`re hot',
                img: '',
            },
            {
                char: 'd',
                text: 'At least once a month when the trailer is fully laden',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8274',
        topicCode: 'Vehicle condition',
        question:
            'The bus you`re driving is fitted with automatic transmission. When would you use kickdown?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When stopping in an emergency',
                img: '',
            },
            {
                char: 'b',
                text: 'When changing to a higher gear',
                img: '',
            },
            {
                char: 'c',
                text: 'When driving at slow speed',
                img: '',
            },
            {
                char: 'd',
                text: 'When needing brisk acceleration',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8275',
        topicCode: 'Vehicle condition',
        question:
            'Your coach is fully laden. What`s the most likely reason for the steering feeling heavy?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'An icy road',
                img: '',
            },
            {
                char: 'b',
                text: 'A burst rear tyre',
                img: '',
            },
            {
                char: 'c',
                text: 'Faulty power steering',
                img: '',
            },
            {
                char: 'd',
                text: 'Too many passengers',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8281',
        topicCode: 'Vehicle condition',
        question:
            'Why are frequent tyre checks advisable on a tri-axle double-deck vehicle?',
        questionImg: '85BW2483.jpg',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'These tyres are more likely to deflate',
                img: '',
            },
            {
                char: 'b',
                text: 'Punctures can be difficult to detect',
                img: '',
            },
            {
                char: 'c',
                text: 'Blow-outs are more common on these vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'Tyre pressures are difficult to maintain',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8282',
        topicCode: 'Vehicle condition',
        question: 'When should the driver of a coach wear gloves?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To load and stow passengers` luggage',
                img: '',
            },
            {
                char: 'b',
                text: 'To operate a lift for disabled passengers',
                img: '',
            },
            {
                char: 'c',
                text: 'To handle the fares',
                img: '',
            },
            {
                char: 'd',
                text: 'To top up the oil or water levels',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8288',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a six-wheeled double-deck bus. What do you need to know about punctures on the rear tyres?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They`re much easier to detect',
                img: '',
            },
            {
                char: 'b',
                text: 'They`re more likely to happen',
                img: '',
            },
            {
                char: 'c',
                text: 'They`re more difficult to detect',
                img: '',
            },
            {
                char: 'd',
                text: 'They`re less likely to happen',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8291',
        topicCode: 'Vehicle condition',
        question: 'What should you regularly check on the tyres of your bus?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The tyre manufacturer`s details are displayed',
                img: '',
            },
            {
                char: 'b',
                text: 'The tyre pressures are all correct',
                img: '',
            },
            {
                char: 'c',
                text: 'The dust caps are all in place',
                img: '',
            },
            {
                char: 'd',
                text: 'The tread depths are equal on all tyres',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8292',
        topicCode: 'Vehicle condition',
        question: 'What will result from having over-inflated tyres?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You`ll have improved acceleration',
                img: '',
            },
            {
                char: 'b',
                text: 'The tyres will wear more quickly',
                img: '',
            },
            {
                char: 'c',
                text: 'The tyres will give better grip',
                img: '',
            },
            {
                char: 'd',
                text: 'The fuel consumption will be reduced',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8293',
        topicCode: 'Vehicle condition',
        question:
            'You�re driving a coach that is towing a trailer. What should you do before uncoupling your trailer?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Disconnect the battery',
                img: '',
            },
            {
                char: 'b',
                text: 'Park on a firm, level surface',
                img: '',
            },
            {
                char: 'c',
                text: 'Park in a well-lit location',
                img: '',
            },
            {
                char: 'd',
                text: 'Unload some of the cargo',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5094',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should you be careful of when stopping on the left in a busy place?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'There`s good access to unload',
                img: '',
            },
            {
                char: 'b',
                text: 'You`ve disconnected all the air lines',
                img: '',
            },
            {
                char: 'c',
                text: 'Your nearside mirror doesn`t strike the head of a pedestrian',
                img: '',
            },
            {
                char: 'd',
                text: 'You change your tachograph mode',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5097',
        topicCode: 'Leaving the vehicle ',
        question:
            'You`ve just parked a lorry on the side of the road. What should you do just before dismounting from the cab?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Make sure the radio is turned down',
                img: '',
            },
            {
                char: 'b',
                text: 'Check the rear-view mirrors',
                img: '',
            },
            {
                char: 'c',
                text: 'Make sure the hazard warning lights are on',
                img: '',
            },
            {
                char: 'd',
                text: 'Check that all the windows are closed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5231',
        topicCode: 'Leaving the vehicle ',
        question: 'Where are you allowed to park a long, rigid vehicle?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'At a pedestrian crossing',
                img: '',
            },
            {
                char: 'b',
                text: 'At a bus stop',
                img: '',
            },
            {
                char: 'c',
                text: 'At a school entrance',
                img: '',
            },
            {
                char: 'd',
                text: 'At a service area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5268',
        topicCode: 'Leaving the vehicle ',
        question:
            'Where should you park a semi-trailer if you plan to leave it unattended?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On a residential street',
                img: '',
            },
            {
                char: 'b',
                text: 'On a steep hill',
                img: '',
            },
            {
                char: 'c',
                text: 'In a lorry park',
                img: '',
            },
            {
                char: 'd',
                text: 'In a lay-by',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5269',
        topicCode: 'Leaving the vehicle ',
        question:
            'Which of the following is important when you`re getting out of a lorry cab?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Checking your load is secure',
                img: '',
            },
            {
                char: 'b',
                text: 'Using the mirrors',
                img: '',
            },
            {
                char: 'c',
                text: 'Turning off the radio',
                img: '',
            },
            {
                char: 'd',
                text: 'Disconnecting the air lines',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5270',
        topicCode: 'Leaving the vehicle ',
        question:
            'You`re the driver of a fuel tanker. What danger should you be aware of when opening the tank hatches?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Low air pressure',
                img: '',
            },
            {
                char: 'b',
                text: 'Speed limiters',
                img: '',
            },
            {
                char: 'c',
                text: 'Slippery walkways',
                img: '',
            },
            {
                char: 'd',
                text: 'Emergency air lines',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5395',
        topicCode: 'Leaving the vehicle ',
        question:
            'You`re working on the platform of a flat-bed lorry. What`s the safest way to get down to the ground?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use a suitable set of steps',
                img: '',
            },
            {
                char: 'b',
                text: 'Jump down wearing non-slip shoes',
                img: '',
            },
            {
                char: 'c',
                text: 'Use ropes to lower yourself down',
                img: '',
            },
            {
                char: 'd',
                text: 'Climb down facing away from the vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5411',
        topicCode: 'Leaving the vehicle ',
        question:
            'What do you need to consider when transporting a high-value cargo of cigarettes?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'There`ll be a risk of theft or hijack',
                img: '',
            },
            {
                char: 'b',
                text: 'There`ll be more Revenue and Customs checks',
                img: '',
            },
            {
                char: 'c',
                text: 'You`ll be allowed to take fewer rest breaks',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll need to maintain your regular route',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5446',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should you consider having on your vehicle to combat theft?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Roof markings',
                img: '',
            },
            {
                char: 'b',
                text: 'Diff-lock',
                img: '',
            },
            {
                char: 'c',
                text: 'Air horns',
                img: '',
            },
            {
                char: 'd',
                text: 'Tinted windows',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC6323',
        topicCode: 'Leaving the vehicle ',
        question: 'When should you use your mirrors?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'As you signal',
                img: '',
            },
            {
                char: 'b',
                text: 'To check the blind spot',
                img: '',
            },
            {
                char: 'c',
                text: 'Occasionally',
                img: '',
            },
            {
                char: 'd',
                text: 'Before opening your door',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6325',
        topicCode: 'Leaving the vehicle ',
        question: 'What must you do before you leave your vehicle?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Empty the air tanks',
                img: '',
            },
            {
                char: 'b',
                text: 'Adjust your mirrors',
                img: '',
            },
            {
                char: 'c',
                text: 'Apply the parking brake',
                img: '',
            },
            {
                char: 'd',
                text: 'Check that the warning lights are working',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6328',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should you do before leaving your vehicle parked on a public road?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Remove your tachograph chart',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch off the engine',
                img: '',
            },
            {
                char: 'c',
                text: 'Adjust the mirrors',
                img: '',
            },
            {
                char: 'd',
                text: 'Put the gear lever into reverse',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6329',
        topicCode: 'Leaving the vehicle ',
        question: 'What should you be aware of before opening your cab door?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Vehicles passing near the door',
                img: '',
            },
            {
                char: 'b',
                text: 'The height of your cab from the ground',
                img: '',
            },
            {
                char: 'c',
                text: 'Loose grab rails near the door',
                img: '',
            },
            {
                char: 'd',
                text: 'People crossing the road behind you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6333',
        topicCode: 'Leaving the vehicle ',
        question: 'When should you use hazard warning lights?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To warn other drivers that you`re towing',
                img: '',
            },
            {
                char: 'b',
                text: 'When approaching queuing traffic on a motorway',
                img: '',
            },
            {
                char: 'c',
                text: 'When parked illegally on a busy road',
                img: '',
            },
            {
                char: 'd',
                text: 'To thank a driver for giving way to you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6614',
        topicCode: 'Leaving the vehicle ',
        question:
            'You need to stop and get out of your vehicle. When should you use the parking brake?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'After the service brake has been released',
                img: '',
            },
            {
                char: 'b',
                text: 'Only if you park on a gradient',
                img: '',
            },
            {
                char: 'c',
                text: 'Whenever you leave the vehicle ',
                img: '',
            },
            {
                char: 'd',
                text: 'After the air pressure has dropped',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7173',
        topicCode: 'Leaving the vehicle ',
        question:
            'You`ve parked on the roadside. What must you do before leaving the vehicle?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reset the retarder',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop the engine',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch off the tachograph',
                img: '',
            },
            {
                char: 'd',
                text: 'Remove your personal items',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7175',
        topicCode: 'Leaving the vehicle ',
        question: 'When may hazard warning lights be used while driving?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To thank a driver who has let you move back to the left after overtaking',
                img: '',
            },
            {
                char: 'b',
                text: 'As a warning to drivers that you`re towing another vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'To show you want to go ahead when your position suggests otherwise',
                img: '',
            },
            {
                char: 'd',
                text: 'When on motorways or dual carriageways, to warn drivers behind of a hazard ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7285',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should you try to do when you lift a heavy box or suitcase?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Lift and twist together',
                img: '',
            },
            {
                char: 'b',
                text: 'Look down all the time',
                img: '',
            },
            {
                char: 'c',
                text: 'Lean sideways and lift',
                img: '',
            },
            {
                char: 'd',
                text: 'Look ahead when the load is secure',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7286',
        topicCode: 'Leaving the vehicle ',
        question: 'What`s the best way to lift a heavy object?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Twist your back while lifting',
                img: '',
            },
            {
                char: 'b',
                text: 'Have a stable position',
                img: '',
            },
            {
                char: 'c',
                text: 'Hold the load at arm`s length',
                img: '',
            },
            {
                char: 'd',
                text: 'Lift the load as quickly as possible',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7325',
        topicCode: 'Leaving the vehicle ',
        question: 'How should you stand when you`re lifting a heavy object?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Leaning sideways',
                img: '',
            },
            {
                char: 'b',
                text: 'In a stable position',
                img: '',
            },
            {
                char: 'c',
                text: 'With one leg straight',
                img: '',
            },
            {
                char: 'd',
                text: 'Keeping your feet together',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8116',
        topicCode: 'Leaving the vehicle ',
        question: 'When can a bus driver use hazard warning lights?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When children are getting off a school bus',
                img: '',
            },
            {
                char: 'b',
                text: 'To thank a driver who has given way',
                img: '',
            },
            {
                char: 'c',
                text: 'When stopping at a pedestrian crossing',
                img: '',
            },
            {
                char: 'd',
                text: 'When parking a bus on yellow lines',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8241',
        topicCode: 'Leaving the vehicle ',
        question:
            'When do you need to take account of your vehicle having air suspension?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you`re passing animals or horse riders',
                img: '',
            },
            {
                char: 'b',
                text: 'When you`re travelling up a steep gradient',
                img: '',
            },
            {
                char: 'c',
                text: 'When you`re parked close to another vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'When you`re driving in falling snow',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8273',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should your passengers do with their belongings when you arrive at your destination?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Place them on luggage racks',
                img: '',
            },
            {
                char: 'b',
                text: 'Take everything with them',
                img: '',
            },
            {
                char: 'c',
                text: 'Place them on the seats',
                img: '',
            },
            {
                char: 'd',
                text: 'Leave them with you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8295',
        topicCode: 'Leaving the vehicle ',
        question: 'What should you do before getting out of your bus?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Apply the parking brake',
                img: '',
            },
            {
                char: 'b',
                text: 'Change the destination board',
                img: '',
            },
            {
                char: 'c',
                text: 'Put the hazard warning lights on',
                img: '',
            },
            {
                char: 'd',
                text: 'Check the air-pressure gauges read full',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8296',
        topicCode: 'Leaving the vehicle ',
        question: 'What must you do before leaving your bus?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Apply the parking brake',
                img: '',
            },
            {
                char: 'b',
                text: 'Count the fares',
                img: '',
            },
            {
                char: 'c',
                text: 'Reset the odometer',
                img: '',
            },
            {
                char: 'd',
                text: 'Operate the fuel cut-off switch',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8353',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should you wear while unloading luggage from your coach?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'High-visibility vest',
                img: '',
            },
            {
                char: 'b',
                text: 'Heatproof gloves',
                img: '',
            },
            {
                char: 'c',
                text: 'Safety goggles',
                img: '',
            },
            {
                char: 'd',
                text: 'Ear protectors',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5101',
        topicCode: 'Vehicle loading ',
        question: 'How should you load a vehicle?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Spread the load evenly',
                img: '',
            },
            {
                char: 'b',
                text: 'Load it towards the rear',
                img: '',
            },
            {
                char: 'c',
                text: 'Load it towards the front',
                img: '',
            },
            {
                char: 'd',
                text: 'Arrange the load to make it easy for unloading',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5102',
        topicCode: 'Vehicle loading ',
        question:
            'You`re going to drive an articulated lorry with an ISO container on the trailer. How should the container be secured to the trailer?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The container must be secured by ropes',
                img: '',
            },
            {
                char: 'b',
                text: 'The container must be secured using the locking levers',
                img: '',
            },
            {
                char: 'c',
                text: 'The container must be held up against the headboard',
                img: '',
            },
            {
                char: 'd',
                text: 'The container must be sealed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5106',
        topicCode: 'Vehicle loading ',
        question:
            'You`re using three sheets to cover your load. Which is the correct overlap?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'VL2511.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'VL2512.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'VL2513.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'VL2514.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5107',
        topicCode: 'Vehicle loading ',
        question:
            'You`re covering a load using more than one sheet. Why should you start with the rearmost sheet, then work forwards? ',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To stop you tripping when walking on the load',
                img: '',
            },
            {
                char: 'b',
                text: 'To stop wind and rain from getting under the sheets',
                img: '',
            },
            {
                char: 'c',
                text: 'To make it much easier to fold up the sheets',
                img: '',
            },
            {
                char: 'd',
                text: 'To make it easier to carry longer loads',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5108',
        topicCode: 'Vehicle loading ',
        question:
            'What`s the best knot to use when securing sheeting with ropes?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A dolly knot',
                img: '',
            },
            {
                char: 'b',
                text: 'A reef knot',
                img: '',
            },
            {
                char: 'c',
                text: 'A slip knot',
                img: '',
            },
            {
                char: 'd',
                text: 'A bowline knot',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5109',
        topicCode: 'Vehicle loading ',
        question:
            'Why are straps unsuitable to tie down a load of scrap metal?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Straps are hard to secure',
                img: '',
            },
            {
                char: 'b',
                text: 'Straps will slip in rain',
                img: '',
            },
            {
                char: 'c',
                text: 'Straps will damage the load',
                img: '',
            },
            {
                char: 'd',
                text: 'Straps can wear and snap',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5110',
        topicCode: 'Vehicle loading ',
        question:
            'You`re driving an open tipper lorry carrying loose dry sand. Why should you sheet this load?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To stop the handling from being affected',
                img: '',
            },
            {
                char: 'b',
                text: 'To stop the load from shifting',
                img: '',
            },
            {
                char: 'c',
                text: 'To stop the load from blowing away',
                img: '',
            },
            {
                char: 'd',
                text: 'To stop the tipper mechanism from accidentally operating',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5111',
        topicCode: 'Vehicle loading ',
        question:
            'What should you do if the load on your lorry becomes insecure?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue at a slower speed to ensure the load doesn`t fall off',
                img: '',
            },
            {
                char: 'b',
                text: 'Attach `hazard` boards to the load to warn other road users',
                img: '',
            },
            {
                char: 'c',
                text: 'Park and resecure the load before continuing',
                img: '',
            },
            {
                char: 'd',
                text: 'Inform base at the earliest opportunity',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5115',
        topicCode: 'Vehicle loading ',
        question:
            'Tankers carrying liquids can experience the `wave effect`. What helps to reduce this problem?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Spray guards',
                img: '',
            },
            {
                char: 'b',
                text: 'Harsh braking',
                img: '',
            },
            {
                char: 'c',
                text: 'Baffle plates',
                img: '',
            },
            {
                char: 'd',
                text: 'Wind deflectors',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5116',
        topicCode: 'Vehicle loading ',
        question:
            'You`re driving an articulated tanker on a straight road. How will the liquid load affect the vehicle as you brake to a stop?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It will try to push the vehicle forward',
                img: '',
            },
            {
                char: 'b',
                text: 'It will try to push the vehicle to the side',
                img: '',
            },
            {
                char: 'c',
                text: 'It will make the trailer wheels bounce',
                img: '',
            },
            {
                char: 'd',
                text: 'It will make the trailer wheels skid',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5117',
        topicCode: 'Vehicle loading ',
        question:
            'You`re driving a tanker that`s half full. The inside of the tank isn`t divided into compartments. How should you use the footbrake when you`re stopping?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep pressure on the brake pedal until you`ve stopped',
                img: '',
            },
            {
                char: 'b',
                text: 'Relax pressure on the brake pedal before you`ve stopped',
                img: '',
            },
            {
                char: 'c',
                text: 'Pump the brake pedal rapidly',
                img: '',
            },
            {
                char: 'd',
                text: 'Use the footbrake and parking brake together',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5118',
        topicCode: 'Vehicle loading ',
        question:
            'Which type of load would benefit most from being carried on a lorry fitted with road-friendly suspension?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Steel',
                img: '',
            },
            {
                char: 'b',
                text: 'Timber',
                img: '',
            },
            {
                char: 'c',
                text: 'Glass',
                img: '',
            },
            {
                char: 'd',
                text: 'Cables',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5119',
        topicCode: 'Vehicle loading ',
        question:
            'How wide does a load need to be before an attendant is required?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '2.6 metres (8 feet 5 inches)',
                img: '',
            },
            {
                char: 'b',
                text: '3.0 metres (9 feet 9 inches)',
                img: '',
            },
            {
                char: 'c',
                text: '3.3 metres (10 feet 9 inches)',
                img: '',
            },
            {
                char: 'd',
                text: '3.5 metres (11 feet 5 inches)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5121',
        topicCode: 'Vehicle loading ',
        question: 'When is an articulated lorry most likely to jack-knife?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When it`s carrying a high load',
                img: '',
            },
            {
                char: 'b',
                text: 'When its load is carried at the rear of the trailer',
                img: '',
            },
            {
                char: 'c',
                text: 'When it`s unloaded',
                img: '',
            },
            {
                char: 'd',
                text: 'When it`s fully loaded',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5122',
        topicCode: 'Vehicle loading ',
        question:
            'You`ve finished recoupling. How should you make sure that the tractor and trailer are secure?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Try to move forward with the trailer parking brake on',
                img: '',
            },
            {
                char: 'b',
                text: 'Reverse with the trailer parking brake on',
                img: '',
            },
            {
                char: 'c',
                text: 'Try to move forward with the trailer parking brake off',
                img: '',
            },
            {
                char: 'd',
                text: 'Reverse with the trailer parking brake off',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5123',
        topicCode: 'Vehicle loading ',
        question:
            'What must you check first when uncoupling or recoupling your trailer?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The lights are working',
                img: '',
            },
            {
                char: 'b',
                text: 'The tilt-cab mechanism is secure',
                img: '',
            },
            {
                char: 'c',
                text: 'The trailer brake is applied',
                img: '',
            },
            {
                char: 'd',
                text: 'The air lines are safely stowed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5124',
        topicCode: 'Vehicle loading ',
        question:
            'You`re uncoupling a lorry and trailer. What should you do after disconnecting the electrical line?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stow it away safely',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive forward slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Lower the landing gear',
                img: '',
            },
            {
                char: 'd',
                text: 'Apply the trailer brake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5125',
        topicCode: 'Vehicle loading ',
        question:
            'Your lorry has a demountable body. What should you check before demounting the body?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The rear doors are open',
                img: '',
            },
            {
                char: 'b',
                text: 'The legs are up',
                img: '',
            },
            {
                char: 'c',
                text: 'The body is unloaded and empty',
                img: '',
            },
            {
                char: 'd',
                text: 'The surface is firm and level',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5126',
        topicCode: 'Vehicle loading ',
        question:
            'How should you adjust your mirrors after recoupling your trailer?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To give a full view of your load',
                img: '',
            },
            {
                char: 'b',
                text: 'To give a clear view of both pairs of rear wheels',
                img: '',
            },
            {
                char: 'c',
                text: 'To give a view down each side of the trailer',
                img: '',
            },
            {
                char: 'd',
                text: 'To give a view of the road on the other side',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5128',
        topicCode: 'Vehicle loading ',
        question:
            'Which vehicle is most likely to be affected by `vehicle bounce`?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A long-wheelbase empty vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'A short-wheelbase laden vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'A short-wheelbase empty vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'A long-wheelbase laden vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5181',
        topicCode: 'Vehicle loading ',
        question: 'Which type of load should be secured using chains?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Timber planks',
                img: '',
            },
            {
                char: 'b',
                text: 'Hay bales',
                img: '',
            },
            {
                char: 'c',
                text: 'Steel plates',
                img: '',
            },
            {
                char: 'd',
                text: 'Canvas sacks',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5182',
        topicCode: 'Vehicle loading ',
        question:
            'Which load is most likely to move forward with some force when you brake sharply?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Heavy material in canvas sacks',
                img: '',
            },
            {
                char: 'b',
                text: 'Loose sand',
                img: '',
            },
            {
                char: 'c',
                text: 'Timber secured with dolly knots',
                img: '',
            },
            {
                char: 'd',
                text: 'Tubular metal',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5183',
        topicCode: 'Vehicle loading ',
        question:
            'You`re part-loading a lorry with an empty ISO container. Where should you position it on the trailer?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Close to the fifth wheel',
                img: '',
            },
            {
                char: 'b',
                text: 'Over the front axle',
                img: '',
            },
            {
                char: 'c',
                text: 'Close to the trailer edge',
                img: '',
            },
            {
                char: 'd',
                text: 'Over the rear axles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5185',
        topicCode: 'Vehicle loading ',
        question: 'How must spare sheets and ropes be carried on your trailer?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Laid out flat',
                img: '',
            },
            {
                char: 'b',
                text: 'Visible from the cab',
                img: '',
            },
            {
                char: 'c',
                text: 'Tied down securely',
                img: '',
            },
            {
                char: 'd',
                text: 'Stacked loosely',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5186',
        topicCode: 'Vehicle loading ',
        question: 'Which articulated trailer is most at risk of jack-knifing?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A loaded flat-bed trailer',
                img: '',
            },
            {
                char: 'b',
                text: 'A laden fuel tanker',
                img: '',
            },
            {
                char: 'c',
                text: 'A loaded high-sided trailer',
                img: '',
            },
            {
                char: 'd',
                text: 'An unladen trailer',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5187',
        topicCode: 'Vehicle loading ',
        question:
            'In what circumstances will short-wheelbase vehicles bounce more noticeably than long-wheelbase vehicles?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When laden',
                img: '',
            },
            {
                char: 'b',
                text: 'When turning',
                img: '',
            },
            {
                char: 'c',
                text: 'When empty',
                img: '',
            },
            {
                char: 'd',
                text: 'When travelling slowly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5188',
        topicCode: 'Vehicle loading ',
        question: 'What`s the main cause of a lorry shedding its load?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Driving on motorways',
                img: '',
            },
            {
                char: 'b',
                text: 'Driving too fast',
                img: '',
            },
            {
                char: 'c',
                text: 'Driving over a level crossing',
                img: '',
            },
            {
                char: 'd',
                text: 'Driving in wet weather',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5238',
        topicCode: 'Vehicle loading ',
        question:
            'What could happen if you drive a double-deck lorry with the top deck loaded and the lower deck empty? ',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The lorry will become unstable under normal braking',
                img: '',
            },
            {
                char: 'b',
                text: 'The brakes will be less effective',
                img: '',
            },
            {
                char: 'c',
                text: 'The lorry may overturn when cornering',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll need to change gear more often',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5239',
        topicCode: 'Vehicle loading ',
        question:
            'Your lorry has a double-deck body. The top tier is loaded and the lower deck is empty. When will the vehicle be most at risk of overturning? ',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In thick fog',
                img: '',
            },
            {
                char: 'b',
                text: 'In high winds',
                img: '',
            },
            {
                char: 'c',
                text: 'In hot weather',
                img: '',
            },
            {
                char: 'd',
                text: 'In heavy rain',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5240',
        topicCode: 'Vehicle loading ',
        question:
            'You`re carrying another vehicle piggyback on your lorry. Chocks should be used to secure the wheels. What else should you use to secure the load?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Baffle plates',
                img: '',
            },
            {
                char: 'b',
                text: 'Axle stands',
                img: '',
            },
            {
                char: 'c',
                text: 'Restraining straps',
                img: '',
            },
            {
                char: 'd',
                text: 'A scaffolding bar',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5243',
        topicCode: 'Vehicle loading ',
        question:
            'The lorry you`re driving is heavily laden. How will the load affect the vehicle if you approach a left-hand bend too fast?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The load will push the lorry to the left',
                img: '',
            },
            {
                char: 'b',
                text: 'The load will pull the lorry to the right',
                img: '',
            },
            {
                char: 'c',
                text: 'The load will push the lorry straight on',
                img: '',
            },
            {
                char: 'd',
                text: 'The load will hold the lorry back',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5247',
        topicCode: 'Vehicle loading ',
        question:
            'You`re driving a vehicle with an unladen trailer. What could happen if you change down to a low gear while travelling at speed?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your vehicle may suddenly accelerate',
                img: '',
            },
            {
                char: 'b',
                text: 'The endurance brake will come on',
                img: '',
            },
            {
                char: 'c',
                text: 'You won`t be able to brake',
                img: '',
            },
            {
                char: 'd',
                text: 'You could lose control of your vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5254',
        topicCode: 'Vehicle loading ',
        question:
            'Your lorry has a crane fitted. You`re loading very heavy items. What should you do when you feel that the straps may break?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reposition the load',
                img: '',
            },
            {
                char: 'b',
                text: 'Use chains and tensioners',
                img: '',
            },
            {
                char: 'c',
                text: 'Tie two straps together',
                img: '',
            },
            {
                char: 'd',
                text: 'Continue loading carefully',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5255',
        topicCode: 'Vehicle loading ',
        question:
            'When you`re carrying other vehicles piggyback, you should use restraints and the parking brake on each vehicle. What else should you do?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Make sure the vehicles are sheeted',
                img: '',
            },
            {
                char: 'b',
                text: 'Place chocks under the wheels',
                img: '',
            },
            {
                char: 'c',
                text: 'Put the heavy vehicles at the top',
                img: '',
            },
            {
                char: 'd',
                text: 'Rope the vehicles together',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5271',
        topicCode: 'Vehicle loading ',
        question: 'When will an articulated car transporter be least stable?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When only the lower deck is loaded',
                img: '',
            },
            {
                char: 'b',
                text: 'When only the top deck is loaded',
                img: '',
            },
            {
                char: 'c',
                text: 'When it`s fully laden',
                img: '',
            },
            {
                char: 'd',
                text: 'When it`s unladen',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5283',
        topicCode: 'Vehicle loading ',
        question: 'What do the legs on a demountable body enable you to do?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Load and unload the body without stopping',
                img: '',
            },
            {
                char: 'b',
                text: 'Stack one body on top of another',
                img: '',
            },
            {
                char: 'c',
                text: 'Alter the overall height of the vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Demount the body without a crane or lift',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5333',
        topicCode: 'Vehicle loading ',
        question:
            'What shape are the labels that indicate a vehicle is carrying hazardous cargo?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Diamond',
                img: '',
            },
            {
                char: 'b',
                text: 'Triangle',
                img: '',
            },
            {
                char: 'c',
                text: 'Circle',
                img: '',
            },
            {
                char: 'd',
                text: 'Oval',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5359',
        topicCode: 'Vehicle loading ',
        question: 'Why are baffle plates fitted to tankers carrying liquids?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To reduce wind resistance',
                img: '',
            },
            {
                char: 'b',
                text: 'To reduce the wave effect',
                img: '',
            },
            {
                char: 'c',
                text: 'To stop the brakes from locking',
                img: '',
            },
            {
                char: 'd',
                text: 'To make the steering lighter',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5360',
        topicCode: 'Vehicle loading ',
        question:
            'Which of these vehicles will be most at risk of `roll-over` when laden?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'VL2508.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'VL2518.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'VL2504.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'VL2509.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5361',
        topicCode: 'Vehicle loading ',
        question:
            'You`re unloading an end-tipper lorry. What should you do before tipping the body?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Make sure the vehicle is on a firm, level surface',
                img: '',
            },
            {
                char: 'b',
                text: 'Park facing uphill to make unloading easy',
                img: '',
            },
            {
                char: 'c',
                text: 'Make sure the vehicle is on a soft, sloping surface',
                img: '',
            },
            {
                char: 'd',
                text: 'Park downhill for easier unloading',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5362',
        topicCode: 'Vehicle loading ',
        question:
            'Who must you inform if the load on your trailer hits a railway bridge?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The local authority',
                img: '',
            },
            {
                char: 'b',
                text: 'DVLA',
                img: '',
            },
            {
                char: 'c',
                text: 'National Highways',
                img: '',
            },
            {
                char: 'd',
                text: 'The railway authority',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5380',
        topicCode: 'Vehicle loading ',
        question: 'Which of these best describes a vehicle`s payload?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The maximum load the vehicle can carry',
                img: '',
            },
            {
                char: 'b',
                text: 'The maximum load over each axle',
                img: '',
            },
            {
                char: 'c',
                text: 'The maximum load plus the weight of the vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'The maximum load each tyre can take',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5382',
        topicCode: 'Vehicle loading ',
        question:
            'What additional training do you need before transporting frozen foods?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Packaging procedures',
                img: '',
            },
            {
                char: 'b',
                text: 'Weight-distribution procedures',
                img: '',
            },
            {
                char: 'c',
                text: 'Waste-handling procedures',
                img: '',
            },
            {
                char: 'd',
                text: 'Hygiene procedures',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5384',
        topicCode: 'Vehicle loading ',
        question:
            'You`ve parked your vehicle on level ground to deliver a load of building materials. What should you do before using the vehicle-mounted crane?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Switch the engine off',
                img: '',
            },
            {
                char: 'b',
                text: 'Turn the steering wheels to the left',
                img: '',
            },
            {
                char: 'c',
                text: 'Lower the stabilising legs',
                img: '',
            },
            {
                char: 'd',
                text: 'Set out warning cones',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5393',
        topicCode: 'Vehicle loading ',
        question:
            'You`re loading goods of varying weights. How should they be distributed over the width of the vehicle?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Heavy items at the front, light items at the rear',
                img: '',
            },
            {
                char: 'b',
                text: 'Light items near the centre line, heavy items towards the sides',
                img: '',
            },
            {
                char: 'c',
                text: 'Heavy items near the centre line, light items towards the sides',
                img: '',
            },
            {
                char: 'd',
                text: 'Light items at the front, heavy items at the rear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5394',
        topicCode: 'Vehicle loading ',
        question:
            'What should you do when you`re working on a vehicle platform?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Make sure you can jump down',
                img: '',
            },
            {
                char: 'b',
                text: 'Walk forward near the edges',
                img: '',
            },
            {
                char: 'c',
                text: 'Work in stockinged feet',
                img: '',
            },
            {
                char: 'd',
                text: 'Walk backwards near the edges',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5397',
        topicCode: 'Vehicle loading ',
        question:
            'Which of these loads needs to be transported at a controlled temperature?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Frozen foods',
                img: '',
            },
            {
                char: 'b',
                text: 'Timber',
                img: '',
            },
            {
                char: 'c',
                text: 'Bulk grain',
                img: '',
            },
            {
                char: 'd',
                text: 'Cement',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5398',
        topicCode: 'Vehicle loading ',
        question:
            'What will you need to transport livestock on journeys of less than 65 km (40 miles)?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Practical experience in the care of animals',
                img: '',
            },
            {
                char: 'b',
                text: 'Membership of the RSPCA',
                img: '',
            },
            {
                char: 'c',
                text: 'No driving convictions',
                img: '',
            },
            {
                char: 'd',
                text: 'The ability to drive abroad',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5399',
        topicCode: 'Vehicle loading ',
        question:
            'What should you do when transporting a small quantity of livestock that doesn`t fill the vehicle?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Allow no direct access to the animals',
                img: '',
            },
            {
                char: 'b',
                text: 'Check them for disease before you load',
                img: '',
            },
            {
                char: 'c',
                text: 'Give the animals plenty of space',
                img: '',
            },
            {
                char: 'd',
                text: 'Create compartments using moveable panels',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5405',
        topicCode: 'Vehicle loading ',
        question:
            'Your vehicle has a maximum authorised mass of 40 tonnes. The kerbside weight is 15 tonnes. What`s your maximum payload?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '15 tonnes',
                img: '',
            },
            {
                char: 'b',
                text: '25 tonnes',
                img: '',
            },
            {
                char: 'c',
                text: '35 tonnes',
                img: '',
            },
            {
                char: 'd',
                text: '45 tonnes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5406',
        topicCode: 'Vehicle loading ',
        question:
            'You`re making several deliveries. What problems may the decreasing payload cause?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You might overload an axle',
                img: '',
            },
            {
                char: 'b',
                text: 'You`ll always have heavy items remaining',
                img: '',
            },
            {
                char: 'c',
                text: 'You might exceed your kerbside weight',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll damage the rest of the load',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5408',
        topicCode: 'Vehicle loading ',
        question: 'What can result from overloading an axle?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Reduced braking efficiency',
                img: '',
            },
            {
                char: 'b',
                text: 'Reduced braking distance',
                img: '',
            },
            {
                char: 'c',
                text: 'Increased kerbside weight',
                img: '',
            },
            {
                char: 'd',
                text: 'Increased fuel efficiency',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5409',
        topicCode: 'Vehicle loading ',
        question:
            'What could be the result of overloading an axle while loading a lorry?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reduced tyre temperature',
                img: '',
            },
            {
                char: 'b',
                text: 'Damage to the road surface',
                img: '',
            },
            {
                char: 'c',
                text: 'Damage to the tachograph',
                img: '',
            },
            {
                char: 'd',
                text: 'Increased tyre life',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5413',
        topicCode: 'Vehicle loading ',
        question:
            'You`re transporting a skip carrying loose waste. How should the material be carried?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Covered',
                img: '',
            },
            {
                char: 'b',
                text: 'Shrink-wrapped',
                img: '',
            },
            {
                char: 'c',
                text: 'While displaying a warning beacon',
                img: '',
            },
            {
                char: 'd',
                text: 'Under a waterproof membrane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5415',
        topicCode: 'Vehicle loading ',
        question:
            'You`re securing a very heavy load with a ratchet strap. Which anchorage point is unsafe to use with ratchet straps?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Rope hook',
                img: '',
            },
            {
                char: 'b',
                text: 'Eye bolt',
                img: '',
            },
            {
                char: 'c',
                text: 'Shackle',
                img: '',
            },
            {
                char: 'd',
                text: '`D` link',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5418',
        topicCode: 'Vehicle loading ',
        question:
            'You`re securing a load using chains. Which type of chain is unsafe for securing a load?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Short-link',
                img: '',
            },
            {
                char: 'b',
                text: 'Round-link',
                img: '',
            },
            {
                char: 'c',
                text: 'Oval-link',
                img: '',
            },
            {
                char: 'd',
                text: 'Split-link',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5421',
        topicCode: 'Vehicle loading ',
        question:
            'You`re loading timber onto a flat-bed lorry. You want to cover it with sheets. Which sheet should be positioned first?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Front',
                img: '',
            },
            {
                char: 'b',
                text: 'Middle',
                img: '',
            },
            {
                char: 'c',
                text: 'Rear',
                img: '',
            },
            {
                char: 'd',
                text: 'Side',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5433',
        topicCode: 'Vehicle loading ',
        question:
            'What`s the main reason for covering a skip that you`re transporting?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To prevent any spillage',
                img: '',
            },
            {
                char: 'b',
                text: 'To stop children climbing in',
                img: '',
            },
            {
                char: 'c',
                text: 'To keep the contents dry',
                img: '',
            },
            {
                char: 'd',
                text: 'To prevent theft',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5437',
        topicCode: 'Vehicle loading',
        question:
            'Which cargo needs to be transported at a controlled temperature?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Perishable foods',
                img: '',
            },
            {
                char: 'b',
                text: 'Barrels of beer',
                img: '',
            },
            {
                char: 'c',
                text: 'Cement',
                img: '',
            },
            {
                char: 'd',
                text: 'Silage',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5438',
        topicCode: 'Vehicle loading ',
        question:
            'Which load may need to be transported at a controlled temperature?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Chemicals',
                img: '',
            },
            {
                char: 'b',
                text: 'Bulk grain',
                img: '',
            },
            {
                char: 'c',
                text: 'Sugar',
                img: '',
            },
            {
                char: 'd',
                text: 'Beer barrels',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5447',
        topicCode: 'Vehicle loading ',
        question:
            'Which symbol on a lorry means it`s likely to be carrying compressed gases?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4752.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4751.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4753.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4754.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5448',
        topicCode: 'Vehicle loading ',
        question: 'What`s being carried on a lorry displaying this symbol?',
        questionImg: 'TS4751.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Corrosive materials',
                img: '',
            },
            {
                char: 'b',
                text: 'Compressed gases',
                img: '',
            },
            {
                char: 'c',
                text: 'Oxidising agents',
                img: '',
            },
            {
                char: 'd',
                text: 'Radioactive materials',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5449',
        topicCode: 'Vehicle loading ',
        question:
            'Which symbol on the back of a lorry means it`s carrying a corrosive substance?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4752.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4751.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4753.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4754.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5450',
        topicCode: 'Vehicle loading ',
        question:
            'Which symbol on a lorry shows its load is dangerous when wet?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4752.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4755.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4753.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4756.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5451',
        topicCode: 'Vehicle loading ',
        question:
            'You`re driving a loaded lorry with curtain sides. What should you do when you see the curtain bulging on one side?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Check the load by carefully entering through the rear door or opposite curtain',
                img: '',
            },
            {
                char: 'b',
                text: 'Check the load by carefully opening the curtain in the affected area',
                img: '',
            },
            {
                char: 'c',
                text: 'Continue driving, as this is normal for these types of vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'Continue driving at a much reduced speed ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5453',
        topicCode: 'Vehicle loading ',
        question:
            'You`re loading a curtain-sided vehicle. What are the curtains for?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Restraint ',
                img: '',
            },
            {
                char: 'b',
                text: 'Protection from the weather ',
                img: '',
            },
            {
                char: 'c',
                text: 'Improved visibility',
                img: '',
            },
            {
                char: 'd',
                text: 'To reduce noise',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5456',
        topicCode: 'Vehicle loading ',
        question:
            'You`re using a lorry-mounted crane to unload building materials. What safety features should you use?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wheel clamps ',
                img: '',
            },
            {
                char: 'b',
                text: 'Kingpin locks ',
                img: '',
            },
            {
                char: 'c',
                text: 'Jockey wheels ',
                img: '',
            },
            {
                char: 'd',
                text: 'Vehicle stabilisers ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5458',
        topicCode: 'Vehicle loading ',
        question:
            'You intend to move a heavy object using a barrow or trolley. What`s the best height for the handles?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Between the shoulder and the waist',
                img: '',
            },
            {
                char: 'b',
                text: 'As high as you can reach',
                img: '',
            },
            {
                char: 'c',
                text: 'Between the knee and the waist',
                img: '',
            },
            {
                char: 'd',
                text: 'As low as possible for comfort',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5465',
        topicCode: 'Vehicle loading ',
        question:
            'Your vehicle has a maximum authorised mass of 40 tonnes. The tare weight is 10 tonnes. What`s your maximum payload?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '20 tonnes',
                img: '',
            },
            {
                char: 'b',
                text: '30 tonnes',
                img: '',
            },
            {
                char: 'c',
                text: '40 tonnes',
                img: '',
            },
            {
                char: 'd',
                text: '50 tonnes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5129',
        topicCode: 'Restricted view ',
        question:
            'Some lorries have an extra mirror angled down towards the nearside front wheel. What`s this mirror especially useful for?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtaking',
                img: '',
            },
            {
                char: 'b',
                text: 'Parking',
                img: '',
            },
            {
                char: 'c',
                text: 'Checking your trailer',
                img: '',
            },
            {
                char: 'd',
                text: 'Turning right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5131',
        topicCode: 'Restricted view ',
        question:
            'What should you look for when choosing a site to park your trailer?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The site should be level',
                img: '',
            },
            {
                char: 'b',
                text: 'The site should be made of concrete',
                img: '',
            },
            {
                char: 'c',
                text: 'The site should be sheltered',
                img: '',
            },
            {
                char: 'd',
                text: 'The site should have marked parking bays',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5133',
        topicCode: 'Restricted view ',
        question:
            'You`re behind a parked car. What should you do when you`re about to move off?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Start to signal when you`ve started moving',
                img: '',
            },
            {
                char: 'b',
                text: 'Move off when there`s no oncoming traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'Check the blind spots before you start moving',
                img: '',
            },
            {
                char: 'd',
                text: 'Only use your mirrors after you`ve started moving',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5134 ',
        topicCode: 'Restricted view ',
        question:
            'You�re driving a lorry. Why do you need to take extra care when turning left at this junction?',
        questionImg: 'MC6501n1.tif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'There are no bollards in the middle of the road',
                img: '',
            },
            {
                char: 'b',
                text: 'It`s a closed junction',
                img: '',
            },
            {
                char: 'c',
                text: 'There`s a motorcycle on the left',
                img: '',
            },
            {
                char: 'd',
                text: 'There`s a grass verge on the left',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5137 ',
        topicCode: 'Restricted view ',
        question:
            'You`re driving this lorry (arrowed). What should you do about the emergency vehicle that`s trying to emerge from the side road?',
        questionImg: 'J7507.tif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Brake hard to a stop and wave it out',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake smoothly and allow it to emerge',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive on; you`re on the major road',
                img: '',
            },
            {
                char: 'd',
                text: 'Turn left to give it a clear view',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5139',
        topicCode: 'Restricted view ',
        question:
            'What should you do when you`re unable to see clearly while you`re reversing into a loading bay?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Get someone to guide you into the bay',
                img: '',
            },
            {
                char: 'b',
                text: 'Use an audible warning signal while reversing',
                img: '',
            },
            {
                char: 'c',
                text: 'Reverse into the bay until your bumper touches the end wall',
                img: '',
            },
            {
                char: 'd',
                text: 'Open your door and lean well out while reversing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5141 ',
        topicCode: 'Restricted view ',
        question:
            'This lorry is turning right from the side road. What should the driver be especially aware of?',
        questionImg: 'R8504n1.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The motorcyclist from the right passing the parked van',
                img: '',
            },
            {
                char: 'b',
                text: 'The vehicles coming from the left along the main road',
                img: '',
            },
            {
                char: 'c',
                text: 'The pedestrians on the footpath by the main road',
                img: '',
            },
            {
                char: 'd',
                text: 'The vehicles behind on the minor road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5276',
        topicCode: 'Restricted view ',
        question:
            'You`re parking your lorry at night. Where must you use parking lights?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On the road',
                img: '',
            },
            {
                char: 'b',
                text: 'In a motorway service area',
                img: '',
            },
            {
                char: 'c',
                text: 'In a factory entrance',
                img: '',
            },
            {
                char: 'd',
                text: 'In dock-authority areas',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5353',
        topicCode: 'Restricted view ',
        question:
            'You`re driving a lorry with a sleeper cab. When would a quick sideways glance be helpful?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'After driving over a pedestrian crossing',
                img: '',
            },
            {
                char: 'b',
                text: 'When traffic is merging from the right or left',
                img: '',
            },
            {
                char: 'c',
                text: 'Before climbing a steep hill',
                img: '',
            },
            {
                char: 'd',
                text: 'When driving round sharp bends',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5364',
        topicCode: 'Restricted view ',
        question:
            'Your lorry has a sleeper cab. Why could this make your driving more difficult?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It increases your blind spots',
                img: '',
            },
            {
                char: 'b',
                text: 'It increases your view of the road ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'It increases your view in the right-hand mirror ',
                img: '',
            },
            {
                char: 'd',
                text: 'It increases your view in the left-hand mirror',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5365',
        topicCode: 'Restricted view ',
        question:
            'You`re waiting to turn right in this lorry (arrowed). Which road user has priority?',
        questionImg: 'J7506n1.tif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The motorcyclist',
                img: '',
            },
            {
                char: 'b',
                text: 'The driver in the red car',
                img: '',
            },
            {
                char: 'c',
                text: 'The driver in the green car',
                img: '',
            },
            {
                char: 'd',
                text: 'The pedestrain',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC7337',
        topicCode: 'Restricted view ',
        question:
            'Many modern vehicles are fitted with an additional nearside mirror. What does this help the driver to see?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The front wheel in relation to the kerb',
                img: '',
            },
            {
                char: 'b',
                text: 'The exhaust to check for emissions',
                img: '',
            },
            {
                char: 'c',
                text: 'The rear of the vehicle when reversing',
                img: '',
            },
            {
                char: 'd',
                text: 'The distance of the following vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC7338',
        topicCode: 'Restricted view',
        question:
            'Your lorry has a mirror to show the area immediately in front of the vehicle. When should you use this mirror?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Before moving off',
                img: '',
            },
            {
                char: 'b',
                text: 'Before you change lane on a motorway',
                img: '',
            },
            {
                char: 'c',
                text: 'While you`re reversing',
                img: '',
            },
            {
                char: 'd',
                text: 'Before getting out of the cab',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC7339',
        topicCode: 'Restricted view',
        question:
            'You�re driving your lorry through a busy area and you�ve stopped at a pedestrian crossing. What should you do before you move off?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Check the Class VI mirror on the front of your lorry',
                img: '',
            },
            {
                char: 'b',
                text: 'Wave any remaining pedestrians across the road',
                img: '',
            },
            {
                char: 'c',
                text: 'Ease forward onto the crossing to check that it�s clear',
                img: '',
            },
            {
                char: 'd',
                text: 'Rev your engine',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6350',
        topicCode: 'Restricted view ',
        question:
            'What`s the first thing you should check before moving to the left?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The nearside mirror',
                img: '',
            },
            {
                char: 'b',
                text: 'The offside mirror',
                img: '',
            },
            {
                char: 'c',
                text: 'Behind, over your right shoulder',
                img: '',
            },
            {
                char: 'd',
                text: 'Behind, over your left shoulder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6352',
        topicCode: 'Restricted view ',
        question:
            'What`s the first thing you should check before moving to the right?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The nearside mirror',
                img: '',
            },
            {
                char: 'b',
                text: 'Behind, over your left shoulder',
                img: '',
            },
            {
                char: 'c',
                text: 'Behind, over your right shoulder',
                img: '',
            },
            {
                char: 'd',
                text: 'The offside mirror',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6353',
        topicCode: 'Restricted view ',
        question: 'What should you do before moving off?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Extend your right arm out of the window',
                img: '',
            },
            {
                char: 'b',
                text: 'Just use the offside mirror and move away quickly',
                img: '',
            },
            {
                char: 'c',
                text: 'Signal right with indicator and arm together',
                img: '',
            },
            {
                char: 'd',
                text: 'Use your mirrors and look behind',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6355',
        topicCode: 'Restricted view ',
        question: 'When would you need to check your nearside mirror?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'As a final check before turning right',
                img: '',
            },
            {
                char: 'b',
                text: 'After passing cars parked on the left',
                img: '',
            },
            {
                char: 'c',
                text: 'Before moving into the lane on your right',
                img: '',
            },
            {
                char: 'd',
                text: 'When getting out of your cab on the driver`s side',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6356',
        topicCode: 'Restricted view ',
        question:
            'The MSM routine should be used when you negotiate a hazard. What do the initials MSM stand for?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Mirrors, signal, manoeuvre',
                img: '',
            },
            {
                char: 'b',
                text: 'Manoeuvre, speed, mirrors',
                img: '',
            },
            {
                char: 'c',
                text: 'Mirrors, speed, manoeuvre',
                img: '',
            },
            {
                char: 'd',
                text: 'Manoeuvre, signal, mirrors',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6357',
        topicCode: 'Restricted view ',
        question: 'What does this sign mean?',
        questionImg: 'TS4704.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Contraflow bus and cycle lane',
                img: '',
            },
            {
                char: 'b',
                text: 'With-flow bus and cycle lane',
                img: '',
            },
            {
                char: 'c',
                text: 'No buses or cycles',
                img: '',
            },
            {
                char: 'd',
                text: 'Priority to buses or cycles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6370',
        topicCode: 'Restricted view ',
        question:
            'What must you do to ensure good all-round vision when driving?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Keep your windows open',
                img: '',
            },
            {
                char: 'b',
                text: 'Have a sun visor fitted',
                img: '',
            },
            {
                char: 'c',
                text: 'Adjust your seat properly',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep your lights clean',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6378',
        topicCode: 'Restricted view ',
        question:
            'When may an audible warning device for reversing be used in areas with a 30 mph speed limit?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Between 7.00 am and 11.30 pm',
                img: '',
            },
            {
                char: 'b',
                text: 'Between 11.30 pm and 7.00 am',
                img: '',
            },
            {
                char: 'c',
                text: 'During daylight hours only',
                img: '',
            },
            {
                char: 'd',
                text: 'At any time of the day or night',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6379',
        topicCode: 'Restricted view ',
        question:
            'What will happen if you drive too close to the vehicle in front?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your view ahead will be reduced',
                img: '',
            },
            {
                char: 'b',
                text: 'Your view ahead will be increased',
                img: '',
            },
            {
                char: 'c',
                text: 'Your view of following drivers will be increased',
                img: '',
            },
            {
                char: 'd',
                text: 'Your view of following drivers will be reduced',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6381',
        topicCode: 'Restricted view ',
        question:
            'Why might it be difficult to see motorcyclists at junctions?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They can be hidden in blind spots',
                img: '',
            },
            {
                char: 'b',
                text: 'They always ride in the gutter',
                img: '',
            },
            {
                char: 'c',
                text: 'They wear bright clothing',
                img: '',
            },
            {
                char: 'd',
                text: 'They ride with their headlights on',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6384',
        topicCode: 'Restricted view ',
        question:
            'Why should you check your right-hand mirror just before turning right from a main road into a side road?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'There may be pedestrians stepping off the kerb',
                img: '',
            },
            {
                char: 'b',
                text: 'You need to check your position',
                img: '',
            },
            {
                char: 'c',
                text: 'Someone may be overtaking you',
                img: '',
            },
            {
                char: 'd',
                text: 'Your rear view to the left is blocked',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6385',
        topicCode: 'Restricted view ',
        question: 'What should you check just before you turn left?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The left-hand mirror',
                img: '',
            },
            {
                char: 'b',
                text: 'The interior mirror',
                img: '',
            },
            {
                char: 'c',
                text: 'The right-hand mirror',
                img: '',
            },
            {
                char: 'd',
                text: 'The overtaking mirror',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6583',
        topicCode: 'Restricted view ',
        question:
            'You`re driving a long vehicle. What should you be especially careful of before turning left onto a main road?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Pedestrians on the opposite kerb ',
                img: '',
            },
            {
                char: 'b',
                text: 'Cyclists on your left',
                img: '',
            },
            {
                char: 'c',
                text: 'Solid white lines in the centre of the road',
                img: '',
            },
            {
                char: 'd',
                text: 'Vehicles directly behind you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6586',
        topicCode: 'Restricted view ',
        question:
            'You want to turn right at a roundabout marked with two right-turn lanes. What should you do if there`s ample room for your vehicle in either lane?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the right-hand of the two lanes',
                img: '',
            },
            {
                char: 'b',
                text: 'Use the left-hand of the two lanes',
                img: '',
            },
            {
                char: 'c',
                text: 'Use the left-hand lane, then move to the right as you enter the roundabout',
                img: '',
            },
            {
                char: 'd',
                text: 'Use the right-hand lane, then move to the left as you enter the roundabout',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6708',
        topicCode: 'Restricted view ',
        question:
            'Your vehicle is fitted with a reverse warning bleeper. How will this affect you when you`re reversing?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You`ll be able to reverse more accurately',
                img: '',
            },
            {
                char: 'b',
                text: 'You`ll only need to use the offside mirror',
                img: '',
            },
            {
                char: 'c',
                text: 'You`ll need to take all-round observation',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll only need to use the nearside mirror',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7126',
        topicCode: 'Restricted view ',
        question: 'What does `blind spot` mean?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'An area of road covered by your right-hand mirror',
                img: '',
            },
            {
                char: 'b',
                text: 'An area of road covered by your left-hand mirror',
                img: '',
            },
            {
                char: 'c',
                text: 'An area of road that can`t be seen, even with mirrors',
                img: '',
            },
            {
                char: 'd',
                text: 'An area of road that isn`t lit by your headlights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7151',
        topicCode: 'Restricted view ',
        question:
            'You`re driving a large vehicle. How does its size and design affect the blind spots?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It will have fewer blind spots than smaller vehicles',
                img: '',
            },
            {
                char: 'b',
                text: 'It will have more blind spots than smaller vehicles',
                img: '',
            },
            {
                char: 'c',
                text: 'It will have the same blind spots as other vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'It will have no blind spots whatsoever',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7176',
        topicCode: 'Restricted view ',
        question:
            'You`re turning right at a T-junction. What should you do when your view to the right and left is blocked by parked vehicles?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Lean forward to get a better view without crossing the `give way` lines',
                img: '',
            },
            {
                char: 'b',
                text: 'Edge out until you`re about 1 metre (3 feet 3 inches) over the `give way` lines',
                img: '',
            },
            {
                char: 'c',
                text: 'Ease forward until you can see clearly in all directions',
                img: '',
            },
            {
                char: 'd',
                text: 'Ask a passenger to assist by waving you out when it`s clear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7177',
        topicCode: 'Restricted view ',
        question: 'What must you do before you start reversing?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Remove your seat belt',
                img: '',
            },
            {
                char: 'b',
                text: 'Look all around',
                img: '',
            },
            {
                char: 'c',
                text: 'Use an audible warning device',
                img: '',
            },
            {
                char: 'd',
                text: 'Change the tachograph mode',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7226',
        topicCode: 'Restricted view ',
        question:
            'You`re reversing your vehicle. What should you do while the audible warning device is operating?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Rely on a clear path behind',
                img: '',
            },
            {
                char: 'b',
                text: 'Expect others to be aware of your course',
                img: '',
            },
            {
                char: 'c',
                text: 'Be cautious and keep looking all around',
                img: '',
            },
            {
                char: 'd',
                text: 'Concentrate solely on your blind areas',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8139',
        topicCode: 'Restricted view ',
        question:
            'Some coaches have a mirror on their nearside, angled down to show the front nearside wheel. When should this extra mirror be used?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When you`re pulling in after overtaking',
                img: '',
            },
            {
                char: 'b',
                text: 'When you`re pulling in to park at the kerb',
                img: '',
            },
            {
                char: 'c',
                text: 'Before you pass parked cars',
                img: '',
            },
            {
                char: 'd',
                text: 'Before you change lanes on a motorway',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8145',
        topicCode: 'Restricted view ',
        question:
            'What must you be aware of when you`re driving a bus with a high driving position?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The blind area close in front',
                img: '',
            },
            {
                char: 'b',
                text: 'Passengers will have to look up to you',
                img: '',
            },
            {
                char: 'c',
                text: 'Your judgement of speed will be impaired',
                img: '',
            },
            {
                char: 'd',
                text: 'The lack of headroom in the cab',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8213',
        topicCode: 'Restricted view ',
        question:
            'On a coach with high side windows, it can be difficult to see either side. What should you do before you move off in one of these vehicles?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Get out of your vehicle and stop the traffic ',
                img: '',
            },
            {
                char: 'b',
                text: 'Ask a passenger to make sure it`s safe to move off',
                img: '',
            },
            {
                char: 'c',
                text: 'Indicate before checking all of your mirrors',
                img: '',
            },
            {
                char: 'd',
                text: 'Open the window and look down and round to the right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8220',
        topicCode: 'Restricted view ',
        question:
            'Your bus has a high seating position. What may be out of sight below the windscreen line?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Following vehicles',
                img: '',
            },
            {
                char: 'b',
                text: 'Overtaking vehicles',
                img: '',
            },
            {
                char: 'c',
                text: 'Cyclists and pedestrians',
                img: '',
            },
            {
                char: 'd',
                text: 'Other buses',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5286',
        topicCode: 'Essential documents',
        question:
            'You`ve been asked to drive a fully loaded petrol tanker back to the depot. It has a maximum authorised mass of 10 tonnes. What must you have before you can drive this vehicle?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A request from the police to move a dangerous load',
                img: '',
            },
            {
                char: 'b',
                text: 'A fully qualified tanker driver with you for the journey',
                img: '',
            },
            {
                char: 'c',
                text: 'A valid ADR driver training certificate',
                img: '',
            },
            {
                char: 'd',
                text: 'A copy of the vehicle`s insurance certificate',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5287',
        topicCode: 'Essential documents',
        question:
            'Who`s responsible for making sure that cargo arrives undamaged?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The packer',
                img: '',
            },
            {
                char: 'b',
                text: 'The driver',
                img: '',
            },
            {
                char: 'c',
                text: 'The sender',
                img: '',
            },
            {
                char: 'd',
                text: 'The loader',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5366',
        topicCode: 'Essential documents',
        question: 'How many copies of the CMR consignment note are required?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Two',
                img: '',
            },
            {
                char: 'b',
                text: 'Three',
                img: '',
            },
            {
                char: 'c',
                text: 'Four',
                img: '',
            },
            {
                char: 'd',
                text: 'Five',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5385',
        topicCode: 'Essential documents',
        question:
            'You hold a full category C licence. What does this entitle you to tow?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A trailer of any weight',
                img: '',
            },
            {
                char: 'b',
                text: 'A trailer with more than one axle',
                img: '',
            },
            {
                char: 'c',
                text: 'A trailer up to 750 kg',
                img: '',
            },
            {
                char: 'd',
                text: 'A curtain-sided trailer',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5463',
        topicCode: 'Essential documents',
        question:
            'You`re delivering boxes of chilled food to a supermarket. What specific training would you need?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Hygiene procedures',
                img: '',
            },
            {
                char: 'b',
                text: 'ADR procedures',
                img: '',
            },
            {
                char: 'c',
                text: 'Waste-handling procedures',
                img: '',
            },
            {
                char: 'd',
                text: 'Fuel-efficient driving procedures',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6668',
        topicCode: 'Essential documents',
        question:
            'You`ll be driving your vehicle in Europe. Which of these documents must you carry?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The vehicle service record',
                img: '',
            },
            {
                char: 'b',
                text: 'Your medical examination form',
                img: '',
            },
            {
                char: 'c',
                text: 'Your national driving licence ',
                img: '',
            },
            {
                char: 'd',
                text: 'The vehicle workshop manual',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6713',
        topicCode: 'Essential documents',
        question:
            'What condition could prevent you from holding a lorry or bus licence?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Dyslexia',
                img: '',
            },
            {
                char: 'b',
                text: 'Partial blindness',
                img: '',
            },
            {
                char: 'c',
                text: 'Dermatitis',
                img: '',
            },
            {
                char: 'd',
                text: 'Stomach upset',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7059',
        topicCode: 'Essential documents',
        question:
            'You`ve been convicted of a drink-drive offence and banned from driving. Which entitlement will this ban affect?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your entitlement to drive all motor vehicles',
                img: '',
            },
            {
                char: 'b',
                text: 'Your car entitlement',
                img: '',
            },
            {
                char: 'c',
                text: 'Your lorry entitlement',
                img: '',
            },
            {
                char: 'd',
                text: 'Your bus entitlement',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7193',
        topicCode: 'Essential documents',
        question:
            'You`re found to be two-and-a-half times over the legal drink-drive limit and are disqualified from driving. Before regaining your licence, who will you have to satisfy that you don`t have an alcohol problem?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The local hospital',
                img: '',
            },
            {
                char: 'b',
                text: 'The Driver and Vehicle Licensing Agency',
                img: '',
            },
            {
                char: 'c',
                text: 'Alcoholics Anonymous',
                img: '',
            },
            {
                char: 'd',
                text: 'The Driver and Vehicle Standards Agency',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7228',
        topicCode: 'Essential documents',
        question:
            'For how long is a Statutory Off-Road Notification (SORN) valid?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Until the vehicle is taxed, sold or scrapped',
                img: '',
            },
            {
                char: 'b',
                text: 'Until the vehicle is insured and MOT`d',
                img: '',
            },
            {
                char: 'c',
                text: 'Until the vehicle is repaired or modified',
                img: '',
            },
            {
                char: 'd',
                text: 'Until the vehicle is used on the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7229',
        topicCode: 'Essential documents',
        question: 'What`s a Statutory Off-Road Notification (SORN)?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A notification to tell DVSA that a vehicle doesn`t have a current MOT',
                img: '',
            },
            {
                char: 'b',
                text: 'Information kept by the police about the owner of the vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'A notification to tell DVLA that a vehicle isn`t being used on the road',
                img: '',
            },
            {
                char: 'd',
                text: 'Information held by insurance companies to check the vehicle is insured',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7258',
        topicCode: 'Essential documents',
        question: 'What`s the maximum fine for driving without insurance?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Unlimited',
                img: '',
            },
            {
                char: 'b',
                text: '�500',
                img: '',
            },
            {
                char: 'c',
                text: '�1000',
                img: '',
            },
            {
                char: 'd',
                text: '�5000',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7265',
        topicCode: 'Essential documents',
        question:
            'Drivers can be fined for bringing illegal immigrants into the UK. Who else can be fined?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The vehicle repairer',
                img: '',
            },
            {
                char: 'b',
                text: 'The vehicle insurer',
                img: '',
            },
            {
                char: 'c',
                text: 'The vehicle manufacturer',
                img: '',
            },
            {
                char: 'd',
                text: 'The vehicle hirer',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7266',
        topicCode: 'Essential documents',
        question:
            'How can vehicle operators help to prevent the carriage of illegal immigrants?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By using an effective vehicle security system',
                img: '',
            },
            {
                char: 'b',
                text: 'By using vehicle tracking devices',
                img: '',
            },
            {
                char: 'c',
                text: 'By taking out liability insurance',
                img: '',
            },
            {
                char: 'd',
                text: 'By having effective mobile communications ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7267',
        topicCode: 'Essential documents',
        question:
            'You`re returning to the UK and are about to board a ferry. An immigration officer asks to see your documentation. What must you show them immediately?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your vehicle registration document',
                img: '',
            },
            {
                char: 'b',
                text: 'Your driver`s hours record',
                img: '',
            },
            {
                char: 'c',
                text: 'Your operator documentation',
                img: '',
            },
            {
                char: 'd',
                text: 'Your driving licence',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7268',
        topicCode: 'Essential documents',
        question:
            'A driver is convicted of bringing illegal immigrants into the UK. How is the fine calculated?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'For each family group they bring in',
                img: '',
            },
            {
                char: 'b',
                text: 'For each court attendance they make',
                img: '',
            },
            {
                char: 'c',
                text: 'For each person they bring in',
                img: '',
            },
            {
                char: 'd',
                text: 'For each journey they made in the last year',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7275',
        topicCode: 'Essential documents',
        question:
            'The Driver Certificate of Professional Competence (Driver CPC) requires you to take training every five years. How many hours of training must you take?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '30 hours',
                img: '',
            },
            {
                char: 'b',
                text: '35 hours',
                img: '',
            },
            {
                char: 'c',
                text: '40 hours',
                img: '',
            },
            {
                char: 'd',
                text: '45 hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7276',
        topicCode: 'Essential documents',
        question:
            'You`ll need to take 35 hours of training to maintain your Driver Certificate of Professional Competence (Driver CPC). Over what period must this be carried out?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'One year',
                img: '',
            },
            {
                char: 'b',
                text: 'Three years',
                img: '',
            },
            {
                char: 'c',
                text: 'Five years',
                img: '',
            },
            {
                char: 'd',
                text: 'Ten years',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7279',
        topicCode: 'Essential documents',
        question:
            'Every five years, you must complete further training to keep your Driver Certificate of Professional Competence (Driver CPC). How many hours of training must you complete over those five years?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '25 hours',
                img: '',
            },
            {
                char: 'b',
                text: '30 hours',
                img: '',
            },
            {
                char: 'c',
                text: '35 hours',
                img: '',
            },
            {
                char: 'd',
                text: '40 hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7324',
        topicCode: 'Essential documents',
        question:
            'You`re applying for an HGV or PCV licence for the first time. What will your medical examination include?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'An eyesight test',
                img: '',
            },
            {
                char: 'b',
                text: 'A numeracy test',
                img: '',
            },
            {
                char: 'c',
                text: 'A hygiene test',
                img: '',
            },
            {
                char: 'd',
                text: 'A literacy test',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8321',
        topicCode: 'Essential documents',
        question:
            'Which category of licence do you need to drive a tri-axle double-deck coach?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'D1',
                img: '',
            },
            {
                char: 'b',
                text: 'D',
                img: '',
            },
            {
                char: 'c',
                text: 'D1E',
                img: '',
            },
            {
                char: 'd',
                text: 'C',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8327',
        topicCode: 'Essential documents',
        question:
            'Why may coaches be subject to a search by immigration authorities at international ports?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'For national security',
                img: '',
            },
            {
                char: 'b',
                text: 'To check for red diesel',
                img: '',
            },
            {
                char: 'c',
                text: 'For tachograph regulations',
                img: '',
            },
            {
                char: 'd',
                text: 'To check vehicle condition',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8328',
        topicCode: 'Essential documents',
        question:
            'You`re driving a coach, returning from a European trip. Why should you search the vehicle at the port?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To look for missing property',
                img: '',
            },
            {
                char: 'b',
                text: 'To ensure duty-free limits aren`t exceeded',
                img: '',
            },
            {
                char: 'c',
                text: 'To prevent the carriage of illegal immigrants',
                img: '',
            },
            {
                char: 'd',
                text: 'To ensure the vehicle has the correct documentation',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8329',
        topicCode: 'Essential documents',
        question:
            'You`re making a journey that crosses international borders. Which document should you produce at immigration control?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A list of passengers',
                img: '',
            },
            {
                char: 'b',
                text: 'A breakdown insurance certificate',
                img: '',
            },
            {
                char: 'c',
                text: 'A route plan',
                img: '',
            },
            {
                char: 'd',
                text: 'A list of alcohol on board',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8335',
        topicCode: 'Essential documents',
        question:
            'Which licence category do you need to drive an articulated bus (`bendy bus`)?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'D1E',
                img: '',
            },
            {
                char: 'b',
                text: 'D',
                img: '',
            },
            {
                char: 'c',
                text: 'DE',
                img: '',
            },
            {
                char: 'd',
                text: 'D1',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8336',
        topicCode: 'Essential documents',
        question:
            'What size of trailer can be towed by the holder of a full category D licence?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '750 kg',
                img: '',
            },
            {
                char: 'b',
                text: '1000 kg',
                img: '',
            },
            {
                char: 'c',
                text: '1250 kg',
                img: '',
            },
            {
                char: 'd',
                text: '1500 kg',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8337',
        topicCode: 'Essential documents',
        question:
            'You hold a full category D licence. What entitlement does this give you for towing?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You can`t tow a trailer at all',
                img: '',
            },
            {
                char: 'b',
                text: 'You can tow a trailer not exceeding 750 kg',
                img: '',
            },
            {
                char: 'c',
                text: 'You can tow a trailer of any weight',
                img: '',
            },
            {
                char: 'd',
                text: 'You can`t tow a trailer with more than one axle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8343',
        topicCode: 'Essential documents',
        question:
            'You intend to drive a midibus for hire or reward. It has more than 16 passenger seats. What`s the minimum licence entitlement you need?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'C',
                img: '',
            },
            {
                char: 'b',
                text: 'C1',
                img: '',
            },
            {
                char: 'c',
                text: 'D',
                img: '',
            },
            {
                char: 'd',
                text: 'D1',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8344',
        topicCode: 'Essential documents',
        question:
            'Which licence category do you need to drive a bus with 25 passenger seats?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'D',
                img: '',
            },
            {
                char: 'b',
                text: 'D1',
                img: '',
            },
            {
                char: 'c',
                text: 'DE',
                img: '',
            },
            {
                char: 'd',
                text: 'D1E',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8361',
        topicCode: 'Essential documents',
        question:
            'Which authority has the power to impose conditions on a passenger-carrying vehicle (PCV) operator`s licence?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The Traffic Commissioner',
                img: '',
            },
            {
                char: 'b',
                text: 'DVLA',
                img: '',
            },
            {
                char: 'c',
                text: 'DVSA',
                img: '',
            },
            {
                char: 'd',
                text: 'National Highways',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5145',
        topicCode: 'Environmental issues ',
        question:
            'Your lorry has been fitted with wind deflectors. How will they affect your vehicle?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They`ll increase the fuel consumption',
                img: '',
            },
            {
                char: 'b',
                text: 'They`ll reduce the stability',
                img: '',
            },
            {
                char: 'c',
                text: 'They`ll require increased tyre pressures',
                img: '',
            },
            {
                char: 'd',
                text: 'They`ll reduce the wind resistance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5146',
        topicCode: 'Environmental issues ',
        question: 'What can cab-mounted wind deflectors reduce?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Journey times',
                img: '',
            },
            {
                char: 'b',
                text: 'Load capacity',
                img: '',
            },
            {
                char: 'c',
                text: 'Tyre wear',
                img: '',
            },
            {
                char: 'd',
                text: 'Fuel consumption',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5147',
        topicCode: 'Environmental issues ',
        question: 'How could you reduce your lorry`s fuel consumption?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Fit new brake linings',
                img: '',
            },
            {
                char: 'b',
                text: 'Fit a high-level exhaust pipe',
                img: '',
            },
            {
                char: 'c',
                text: 'Fit a larger fuel tank',
                img: '',
            },
            {
                char: 'd',
                text: 'Fit wind deflectors',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5148',
        topicCode: 'Environmental issues ',
        question:
            'You`re a driver who`s certified to carry dangerous goods. How long is your certificate valid?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'One year',
                img: '',
            },
            {
                char: 'b',
                text: 'Two years',
                img: '',
            },
            {
                char: 'c',
                text: 'Five years',
                img: '',
            },
            {
                char: 'd',
                text: 'Ten years',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5150',
        topicCode: 'Environmental issues ',
        question:
            'What would help to reduce the impact that your lorry has on the environment?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Driving through town centres',
                img: '',
            },
            {
                char: 'b',
                text: 'Braking in good time',
                img: '',
            },
            {
                char: 'c',
                text: 'Planning routes to avoid motorways',
                img: '',
            },
            {
                char: 'd',
                text: 'Racing to make up time',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5151',
        topicCode: 'Environmental issues ',
        question:
            'What`s reduced by fitting a fly sheet tightly over a tipper body?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drag effect',
                img: '',
            },
            {
                char: 'b',
                text: 'Steering effort',
                img: '',
            },
            {
                char: 'c',
                text: 'Legal load weight',
                img: '',
            },
            {
                char: 'd',
                text: 'Load capacity',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5180',
        topicCode: 'Environmental issues ',
        question: 'How could you reduce the fuel consumption of your lorry?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Brake late as often as you can',
                img: '',
            },
            {
                char: 'b',
                text: 'Fit a cab-mounted wind deflector',
                img: '',
            },
            {
                char: 'c',
                text: 'Avoid sheeting any bulky loads',
                img: '',
            },
            {
                char: 'd',
                text: 'Try to increase your overall speed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5209',
        topicCode: 'Environmental issues ',
        question: 'When may red diesel be used?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'For operators to reduce running costs',
                img: '',
            },
            {
                char: 'b',
                text: 'For authorised purposes only',
                img: '',
            },
            {
                char: 'c',
                text: 'For garages to test-drive repaired vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'For environmental purposes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5278',
        topicCode: 'Environmental issues ',
        question:
            'You`re driving a lorry with a loaded skip. Why should the skip be covered with a net?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To prevent rubbish from falling out of it',
                img: '',
            },
            {
                char: 'b',
                text: 'To protect the contents from the weather',
                img: '',
            },
            {
                char: 'c',
                text: 'To make it more visible to other traffic',
                img: '',
            },
            {
                char: 'd',
                text: 'To stop others from adding to the load',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5367',
        topicCode: 'Environmental issues ',
        question:
            'What must you do when you park a lorry weighing more than 7.5 tonnes on a verge for essential loading?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sign the collection note',
                img: '',
            },
            {
                char: 'b',
                text: 'Display an orange badge',
                img: '',
            },
            {
                char: 'c',
                text: 'Obtain the owner`s permission',
                img: '',
            },
            {
                char: 'd',
                text: 'Make sure the lorry is always attended',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5368',
        topicCode: 'Environmental issues ',
        question:
            'What must you have before you can leave a lorry weighing more than 7.5 tonnes unattended on a verge?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Police permission',
                img: '',
            },
            {
                char: 'b',
                text: 'A warning triangle',
                img: '',
            },
            {
                char: 'c',
                text: 'The owner`s permission',
                img: '',
            },
            {
                char: 'd',
                text: 'A loading permit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5404',
        topicCode: 'Environmental issues ',
        question: 'What can help to reduce fuel consumption?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Changing filters regularly',
                img: '',
            },
            {
                char: 'b',
                text: 'Keeping tyres under-inflated',
                img: '',
            },
            {
                char: 'c',
                text: 'Always using gears in sequence',
                img: '',
            },
            {
                char: 'd',
                text: 'Keeping the rev counter in the amber band',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5444',
        topicCode: 'Environmental issues ',
        question: 'What will a correctly adjusted air deflector do?',
        questionImg: 'VL2520.tif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Save fuel',
                img: '',
            },
            {
                char: 'b',
                text: 'Reduce tyre wear',
                img: '',
            },
            {
                char: 'c',
                text: 'Reduce road-surface wear',
                img: '',
            },
            {
                char: 'd',
                text: 'Cut loading time ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5457',
        topicCode: 'Environmental issues ',
        question:
            'What would staff from HM Revenue and Customs (HMRC) be looking for at a roadside check?\n ',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Red diesel ',
                img: '',
            },
            {
                char: 'b',
                text: 'Vehicle defects',
                img: '',
            },
            {
                char: 'c',
                text: 'Drivers` hours records ',
                img: '',
            },
            {
                char: 'd',
                text: 'Exhaust emissions',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5460',
        topicCode: 'Environmental issues ',
        question: 'Why should the height of a load be kept to a minimum?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To reduce aerodynamic drag',
                img: '',
            },
            {
                char: 'b',
                text: 'To increase rolling resistance',
                img: '',
            },
            {
                char: 'c',
                text: 'To increase momentum',
                img: '',
            },
            {
                char: 'd',
                text: 'To reduce unloading time',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6420',
        topicCode: 'Environmental issues ',
        question: 'What makes the pictured vehicle environmentally friendly?',
        questionImg: 'TS4536.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It uses solar power',
                img: '',
            },
            {
                char: 'b',
                text: 'It uses diesel fuel',
                img: '',
            },
            {
                char: 'c',
                text: 'It uses electricity',
                img: '',
            },
            {
                char: 'd',
                text: 'It uses unleaded fuel',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6424',
        topicCode: 'Environmental issues ',
        question:
            'How can you help to reduce the impact of road transport on the environment?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'By avoiding high gears',
                img: '',
            },
            {
                char: 'b',
                text: 'By reducing rest periods',
                img: '',
            },
            {
                char: 'c',
                text: 'By braking in good time',
                img: '',
            },
            {
                char: 'd',
                text: 'By increasing your overall speed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6426',
        topicCode: 'Environmental issues ',
        question: 'How can you help to protect the environment?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By driving faster to reduce travelling time',
                img: '',
            },
            {
                char: 'b',
                text: 'By using bypasses and avoiding town centres',
                img: '',
            },
            {
                char: 'c',
                text: 'By filling your fuel tank with red diesel fuel',
                img: '',
            },
            {
                char: 'd',
                text: 'By leaving your engine running in traffic jams',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6429',
        topicCode: 'Environmental issues ',
        question: 'How could a professional driver improve their efficiency?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Keep to maximum speeds for shorter journeys',
                img: '',
            },
            {
                char: 'b',
                text: 'Plan routes to avoid busy times and congestion',
                img: '',
            },
            {
                char: 'c',
                text: 'Avoid route-planning because of the time it takes',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive at a faster speed through hazardous areas',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6430',
        topicCode: 'Environmental issues ',
        question:
            'You`ve just refilled your fuel tank. What must you check before driving away from the fuel pump?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'That the tank is completely full up to the filler neck',
                img: '',
            },
            {
                char: 'b',
                text: 'That the filler cap is vented correctly by keeping it loose',
                img: '',
            },
            {
                char: 'c',
                text: 'That the filler cap is properly closed and secure',
                img: '',
            },
            {
                char: 'd',
                text: 'That the tank is nearly full and the filler cap is slightly loose',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6432',
        topicCode: 'Environmental issues ',
        question: 'What should you do to prevent fuel spillage?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop refuelling when the tank is half full',
                img: '',
            },
            {
                char: 'b',
                text: 'Use a filtered fuel system',
                img: '',
            },
            {
                char: 'c',
                text: 'Close and secure the filler cap',
                img: '',
            },
            {
                char: 'd',
                text: 'Place the drip tray correctly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6433',
        topicCode: 'Environmental issues ',
        question:
            'You`re following a lorry that`s leaking fuel. What should you be especially aware of?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The road may be very slippery',
                img: '',
            },
            {
                char: 'b',
                text: 'The fuel may splash your vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'Your brake linings will become slippery',
                img: '',
            },
            {
                char: 'd',
                text: 'Your spray reducers won`t be effective',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6511',
        topicCode: 'Environmental issues ',
        question: 'How could you save fuel?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'By extending the vehicle`s service times',
                img: '',
            },
            {
                char: 'b',
                text: 'By braking as late as you can',
                img: '',
            },
            {
                char: 'c',
                text: 'By planning routes to avoid congestion',
                img: '',
            },
            {
                char: 'd',
                text: 'By selecting lower gears',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6606',
        topicCode: 'Environmental issues ',
        question: 'What must you do after filling your fuel tanks?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Check your fuel gauge',
                img: '',
            },
            {
                char: 'b',
                text: 'Check your tachograph',
                img: '',
            },
            {
                char: 'c',
                text: 'Securely close the filler caps',
                img: '',
            },
            {
                char: 'd',
                text: 'Complete the fuel log sheets',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6709',
        topicCode: 'Environmental issues ',
        question:
            'You`re driving between the hours of 11.30 pm and 7.00 am. When must you switch off your vehicle`s reverse warning bleeper?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Before reversing on a road that has a 30 mph speed limit',
                img: '',
            },
            {
                char: 'b',
                text: 'Before reversing on a road that has a temporary speed limit',
                img: '',
            },
            {
                char: 'c',
                text: 'Before reversing on a road that has the national speed limit',
                img: '',
            },
            {
                char: 'd',
                text: 'Before reversing on a road that has a 40 mph speed limit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7039',
        topicCode: 'Environmental issues ',
        question:
            'You`re driving in a built-up area. Your vehicle is fitted with an audible warning device that sounds when it`s reversing. When must you turn off this alarm?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Between midnight and 6.30 am',
                img: '',
            },
            {
                char: 'b',
                text: 'Between 11.30 pm and 6.30 am',
                img: '',
            },
            {
                char: 'c',
                text: 'Between 11.30 pm and 7.00 am',
                img: '',
            },
            {
                char: 'd',
                text: 'Between 12.30 am and 7.00 am',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7096',
        topicCode: 'Environmental issues ',
        question:
            'What are the consequences of driving your vehicle when it`s emitting excessive exhaust smoke?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Its fuel consumption will improve ',
                img: '',
            },
            {
                char: 'b',
                text: 'Your vision ahead will be reduced',
                img: '',
            },
            {
                char: 'c',
                text: 'The brakes will fade more easily',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll be breaking the law',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7195',
        topicCode: 'Environmental issues ',
        question: 'How can you help to ease traffic congestion?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Plan journeys to avoid busy times',
                img: '',
            },
            {
                char: 'b',
                text: 'Plan journeys to avoid quiet times',
                img: '',
            },
            {
                char: 'c',
                text: 'Use motorways for all journeys',
                img: '',
            },
            {
                char: 'd',
                text: 'Avoid motorways altogether',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7196',
        topicCode: 'Environmental issues ',
        question:
            'You`ve parked for a short time in a town while you plan your route. What should you do while your vehicle is parked?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep the engine running on tick-over',
                img: '',
            },
            {
                char: 'b',
                text: 'Rev the engine occasionally to maintain air pressure',
                img: '',
            },
            {
                char: 'c',
                text: 'Hold the engine at a fast tick-over to maintain air pressure',
                img: '',
            },
            {
                char: 'd',
                text: 'Switch off the engine',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7197',
        topicCode: 'Environmental issues ',
        question: 'What can cause unnecessary pollution to the environment?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'High-level exhaust systems',
                img: '',
            },
            {
                char: 'b',
                text: 'Regular servicing',
                img: '',
            },
            {
                char: 'c',
                text: 'Weak radiator coolant',
                img: '',
            },
            {
                char: 'd',
                text: 'Poorly maintained vehicles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7198',
        topicCode: 'Environmental issues ',
        question:
            'Diesel fuel has been spilled on the road. Which road users will this be a particular danger for? ',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Lorry drivers',
                img: '',
            },
            {
                char: 'b',
                text: 'Motorcyclists',
                img: '',
            },
            {
                char: 'c',
                text: 'Horse riders',
                img: '',
            },
            {
                char: 'd',
                text: 'Car drivers',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7200',
        topicCode: 'Environmental issues ',
        question:
            'You`re driving in a built-up area between 11.30 pm and 7.00 am. For what reason can you sound the vehicle`s horn?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To greet a friend',
                img: '',
            },
            {
                char: 'b',
                text: 'To get another driver to move out of your way',
                img: '',
            },
            {
                char: 'c',
                text: 'To let another road user know you`re giving way',
                img: '',
            },
            {
                char: 'd',
                text: 'To warn another road user who poses a danger',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7201',
        topicCode: 'Environmental issues ',
        question:
            'Spilled diesel makes the road very slippery. Which vehicles will be most at risk from this hazard?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Motorcycles',
                img: '',
            },
            {
                char: 'b',
                text: 'Tractors ',
                img: '',
            },
            {
                char: 'c',
                text: 'Buses',
                img: '',
            },
            {
                char: 'd',
                text: 'Lorries',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7203',
        topicCode: 'Environmental issues ',
        question:
            'What should you do if you`ve lost the filler cap for your diesel tank?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Get a replacement before driving',
                img: '',
            },
            {
                char: 'b',
                text: 'Push a rag into the filler pipe',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive slowly back to your depot',
                img: '',
            },
            {
                char: 'd',
                text: 'Only fill the tank half-full',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7250',
        topicCode: 'Environmental issues ',
        question:
            'Why is it a good idea to plan your journey to avoid travelling at busy times?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your vehicle will use more fuel',
                img: '',
            },
            {
                char: 'b',
                text: 'There`ll be fewer roadworks',
                img: '',
            },
            {
                char: 'c',
                text: 'It will help to ease congestion ',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll travel a much shorter distance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7252',
        topicCode: 'Environmental issues ',
        question:
            'Planning your route before starting a journey is a good idea. Why should you also plan an alternative route?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your original route may be blocked',
                img: '',
            },
            {
                char: 'b',
                text: 'Your maps may have different scales',
                img: '',
            },
            {
                char: 'c',
                text: 'It may be more scenic ',
                img: '',
            },
            {
                char: 'd',
                text: 'You may get held up by a tractor',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7259',
        topicCode: 'Environmental issues ',
        question: 'What will happen if you drive smoothly? ',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You`ll reduce journey times by about 15%',
                img: '',
            },
            {
                char: 'b',
                text: 'You`ll increase fuel consumption by about 15%',
                img: '',
            },
            {
                char: 'c',
                text: 'You`ll reduce fuel consumption by about 15%',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll increase journey times by about 15%',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7270',
        topicCode: 'Environmental issues ',
        question:
            'Usually, a rev counter is divided into coloured bands. Which band should you stay in for maximum fuel economy?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Blue',
                img: '',
            },
            {
                char: 'b',
                text: 'Green',
                img: '',
            },
            {
                char: 'c',
                text: 'Amber',
                img: '',
            },
            {
                char: 'd',
                text: 'Red',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7272',
        topicCode: 'Environmental issues ',
        question:
            'What would be the most likely effect of driving with the rev counter in the red band?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You would have optimum fuel economy',
                img: '',
            },
            {
                char: 'b',
                text: 'You would improve engine efficiency',
                img: '',
            },
            {
                char: 'c',
                text: 'You would damage the engine',
                img: '',
            },
            {
                char: 'd',
                text: 'You would create a false tachograph reading',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7304',
        topicCode: 'Environmental issues ',
        question:
            'What can be expected after drivers complete a Driver Certificate of Professional Competence (Driver CPC)?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Increased vehicle breakdowns',
                img: '',
            },
            {
                char: 'b',
                text: 'Increased fuel consumption',
                img: '',
            },
            {
                char: 'c',
                text: 'Reduced traffic volume',
                img: '',
            },
            {
                char: 'd',
                text: 'Reduced engine emissions',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7321',
        topicCode: 'Environmental issues ',
        question:
            'Your vehicle is fitted with an engine management system. What will happen if you press the accelerator when you`re starting the engine?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'An excessive amount of fuel will be used',
                img: '',
            },
            {
                char: 'b',
                text: 'There`ll be an excessive build-up of air pressure',
                img: '',
            },
            {
                char: 'c',
                text: 'Exhaust emissions will be reduced',
                img: '',
            },
            {
                char: 'd',
                text: 'Oil consumption will be reduced',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7323',
        topicCode: 'Environmental issues ',
        question:
            'What benefit is expected to come from having a Driver Certificate of Professional Competence (Driver CPC) qualification?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A reduction in fuel consumption',
                img: '',
            },
            {
                char: 'b',
                text: 'An exemption from tachograph regulations',
                img: '',
            },
            {
                char: 'c',
                text: 'A reduction in vehicle tax',
                img: '',
            },
            {
                char: 'd',
                text: 'An exemption from all congestion charges',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7344',
        topicCode: 'Environmental issues ',
        question:
            'You`ve been stopped at a roadside check.\nWhat would staff from the environmental health department be checking?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Licence entitlement ',
                img: '',
            },
            {
                char: 'b',
                text: 'Exhaust emissions ',
                img: '',
            },
            {
                char: 'c',
                text: 'Tachograph changes ',
                img: '',
            },
            {
                char: 'd',
                text: 'Illegal immigrants ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7346',
        topicCode: 'Environmental issues ',
        question: 'What helps you to become a fuel-efficient driver?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Being aware of hazards',
                img: '',
            },
            {
                char: 'b',
                text: 'Avoiding block changing',
                img: '',
            },
            {
                char: 'c',
                text: 'Accelerating rapidly',
                img: '',
            },
            {
                char: 'd',
                text: 'Using air conditioning',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7348',
        topicCode: 'Environmental issues ',
        question: 'What can help to maximise fuel economy?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Cruise control',
                img: '',
            },
            {
                char: 'b',
                text: 'Air suspension',
                img: '',
            },
            {
                char: 'c',
                text: 'Re-grooved tyres',
                img: '',
            },
            {
                char: 'd',
                text: 'Diff-lock',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7359',
        topicCode: 'Environmental issues ',
        question:
            'How would you benefit from forward planning and early recognition of potential hazards?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You`ll use less fuel',
                img: '',
            },
            {
                char: 'b',
                text: 'You`ll use more fuel',
                img: '',
            },
            {
                char: 'c',
                text: 'You`ll be able to stop more quickly',
                img: '',
            },
            {
                char: 'd',
                text: 'You`ll reduce journey times',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8154',
        topicCode: 'Environmental issues ',
        question:
            'You`ll be waiting at a terminus for some time. How can you reduce pollution?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By revving your engine',
                img: '',
            },
            {
                char: 'b',
                text: 'By switching off your engine',
                img: '',
            },
            {
                char: 'c',
                text: 'By leaving your engine on tick-over',
                img: '',
            },
            {
                char: 'd',
                text: 'By keeping your engine at high revs',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8170',
        topicCode: 'Environmental issues ',
        question:
            'You`re waiting for some time in a stationary traffic queue. Why should you switch off your engine?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To keep your passengers cool',
                img: '',
            },
            {
                char: 'b',
                text: 'To save on vehicle air pressure',
                img: '',
            },
            {
                char: 'c',
                text: 'To reduce exhaust emissions',
                img: '',
            },
            {
                char: 'd',
                text: 'To reduce radio interference',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8171',
        topicCode: 'Environmental issues ',
        question:
            'You`ve been waiting in a traffic queue for several minutes. What should you do if it`s clear that you won`t be moving soon?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Keep your engine at tick-over speed',
                img: '',
            },
            {
                char: 'b',
                text: 'Rev your engine occasionally',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch off your engine',
                img: '',
            },
            {
                char: 'd',
                text: 'Run the engine at a constant higher speed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8218',
        topicCode: 'Environmental issues ',
        question:
            'When starting your bus, how should air pressure be built up? ',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'With the doors open',
                img: '',
            },
            {
                char: 'b',
                text: 'With the service brake on',
                img: '',
            },
            {
                char: 'c',
                text: 'With the engine ticking over',
                img: '',
            },
            {
                char: 'd',
                text: 'With the engine revving up',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8322',
        topicCode: 'Environmental issues ',
        question: 'What must you check after refuelling your bus?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your filler caps are securely closed',
                img: '',
            },
            {
                char: 'b',
                text: 'Your tank is full to the top',
                img: '',
            },
            {
                char: 'c',
                text: 'The position of the emergency fuel cut-off switch',
                img: '',
            },
            {
                char: 'd',
                text: 'The low-fuel warning light is working',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6748',
        topicCode: 'Other road users ',
        question:
            'Your vehicle leaks diesel fuel on a roundabout. Who will this affect most?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drivers of three-wheeled vehicles',
                img: '',
            },
            {
                char: 'b',
                text: 'Motorcyclists',
                img: '',
            },
            {
                char: 'c',
                text: 'Towed vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'Car drivers',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6751',
        topicCode: 'Other road users ',
        question: 'Which vehicles are most likely to be affected by side wind?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Flat-bed lorries',
                img: '',
            },
            {
                char: 'b',
                text: 'Tractors',
                img: '',
            },
            {
                char: 'c',
                text: 'Motorcycles',
                img: '',
            },
            {
                char: 'd',
                text: 'Estate cars',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6967',
        topicCode: 'Other road users ',
        question:
            'What should you do if the vehicle ahead is being driven by a learner?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep calm and be patient',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive up close behind',
                img: '',
            },
            {
                char: 'c',
                text: 'Put your headlights on full beam',
                img: '',
            },
            {
                char: 'd',
                text: 'Sound your horn and overtake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6968',
        topicCode: 'Other road users ',
        question:
            'You`re about to overtake horse riders. What could scare the horses?',
        questionImg: 'P5503.tif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Sounding your horn',
                img: '',
            },
            {
                char: 'b',
                text: 'Giving arm signals',
                img: '',
            },
            {
                char: 'c',
                text: 'Driving slowly',
                img: '',
            },
            {
                char: 'd',
                text: 'Keeping well back',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6970',
        topicCode: 'Other road users ',
        question:
            'You`ve stopped at a pelican crossing. What should you do if the lights have changed to green but a disabled person is still crossing?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Give way to them',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive in front of them',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive behind them',
                img: '',
            },
            {
                char: 'd',
                text: 'Sound your horn at them',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6971',
        topicCode: 'Other road users ',
        question:
            'Which sign means that there may be people walking along the road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4672.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4703.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4646.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4647.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6973',
        topicCode: 'Other road users ',
        question:
            'You`re turning left from a main road into a side road. What should you do if people are already crossing the road into which you`re turning?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue, as you have right of way',
                img: '',
            },
            {
                char: 'b',
                text: 'Signal to them to continue crossing',
                img: '',
            },
            {
                char: 'c',
                text: 'Wait and allow them to cross',
                img: '',
            },
            {
                char: 'd',
                text: 'Sound your horn to warn them of your presence',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6974',
        topicCode: 'Other road users ',
        question:
            'You`re at a road junction, turning into a minor road. What should you do if there are pedestrians crossing the minor road?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop and wave the pedestrians across',
                img: '',
            },
            {
                char: 'b',
                text: 'Sound your horn to let the pedestrians know that you`re there',
                img: '',
            },
            {
                char: 'c',
                text: 'Give way to the pedestrians who are already crossing',
                img: '',
            },
            {
                char: 'd',
                text: 'Carry on; the pedestrians should give way to you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6975',
        topicCode: 'Other road users ',
        question:
            'Why should you check for motorcyclists just before turning right into a side road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They might be overtaking on your left',
                img: '',
            },
            {
                char: 'b',
                text: 'They might be following you closely',
                img: '',
            },
            {
                char: 'c',
                text: 'They might be emerging from the side road',
                img: '',
            },
            {
                char: 'd',
                text: 'They might be overtaking on your right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6976',
        topicCode: 'Other road users ',
        question: 'Why is a toucan crossing different from a puffin crossing?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Moped riders can use it',
                img: '',
            },
            {
                char: 'b',
                text: 'It`s controlled by a traffic warden',
                img: '',
            },
            {
                char: 'c',
                text: 'It`s controlled by two flashing lights',
                img: '',
            },
            {
                char: 'd',
                text: 'Pedestrians and cyclists can use it together',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6977',
        topicCode: 'Other road users ',
        question: 'What happens at toucan crossings?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You only stop when a pedestrian is waiting',
                img: '',
            },
            {
                char: 'b',
                text: 'Cyclists aren`t permitted',
                img: '',
            },
            {
                char: 'c',
                text: 'There`s a continuously flashing amber beacon',
                img: '',
            },
            {
                char: 'd',
                text: 'Pedestrians and cyclists may cross together',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6979',
        topicCode: 'Other road users ',
        question: 'Where would you see this sign?',
        questionImg: 'TS4546.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'In the window of a car taking children to school',
                img: '',
            },
            {
                char: 'b',
                text: 'At the side of the road',
                img: '',
            },
            {
                char: 'c',
                text: 'At playground areas',
                img: '',
            },
            {
                char: 'd',
                text: 'On the rear of a school bus or coach',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6980',
        topicCode: 'Other road users ',
        question: 'What does this sign mean?',
        questionImg: 'TS4702.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'No route for pedestrians and cyclists',
                img: '',
            },
            {
                char: 'b',
                text: 'A route for pedestrians only',
                img: '',
            },
            {
                char: 'c',
                text: 'A route for cyclists only',
                img: '',
            },
            {
                char: 'd',
                text: 'A route for pedestrians and cyclists ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6981',
        topicCode: 'Other road users ',
        question:
            'What action would you take when elderly people are crossing the road?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Wave them across so they know that you`ve seen them',
                img: '',
            },
            {
                char: 'b',
                text: 'Be patient and allow them to cross in their own time',
                img: '',
            },
            {
                char: 'c',
                text: 'Rev the engine to let them know that you`re waiting',
                img: '',
            },
            {
                char: 'd',
                text: 'Tap the horn in case they`re hard of hearing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6982',
        topicCode: 'Other road users ',
        question:
            'What should you do if you see two elderly pedestrians about to cross the road ahead?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Expect them to wait for you to pass',
                img: '',
            },
            {
                char: 'b',
                text: 'Speed up to get past them quickly',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop and wave them across the road',
                img: '',
            },
            {
                char: 'd',
                text: 'Be careful; they might misjudge your speed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6983',
        topicCode: 'Other road users ',
        question:
            'You`re approaching a roundabout. What should you do if you see a cyclist signalling to turn right?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake on the right',
                img: '',
            },
            {
                char: 'b',
                text: 'Give a warning with your horn',
                img: '',
            },
            {
                char: 'c',
                text: 'Signal the cyclist to move across',
                img: '',
            },
            {
                char: 'd',
                text: 'Give the cyclist plenty of room',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6984',
        topicCode: 'Other road users ',
        question:
            'You`re approaching this roundabout and see the cyclist signal right. Why is the cyclist keeping to the left?',
        questionImg: '85BW2956.jpg',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It`s a quicker route',
                img: '',
            },
            {
                char: 'b',
                text: 'They`re going to turn left instead',
                img: '',
            },
            {
                char: 'c',
                text: 'The Highway Code doesn`t apply to cyclists',
                img: '',
            },
            {
                char: 'd',
                text: 'They may use the left-hand lane to turn right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6985',
        topicCode: 'Other road users ',
        question:
            'You`re waiting to come out of a side road. Why should you look carefully for motorcycles?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Motorcycles are usually faster than cars',
                img: '',
            },
            {
                char: 'b',
                text: 'Police patrols often use motorcycles',
                img: '',
            },
            {
                char: 'c',
                text: 'Motorcycles are small and hard to see',
                img: '',
            },
            {
                char: 'd',
                text: 'Motorcycles have right of way',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6986',
        topicCode: 'Other road users ',
        question: 'Why do motorcyclists use dipped headlights in the daytime?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To make themselves more easily seen',
                img: '',
            },
            {
                char: 'b',
                text: 'To stop the battery overcharging',
                img: '',
            },
            {
                char: 'c',
                text: 'To improve their vision',
                img: '',
            },
            {
                char: 'd',
                text: 'To scare wildlife off the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6987',
        topicCode: 'Other road users ',
        question: 'Why are motorcyclists advised to wear bright clothing?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They must do so by law',
                img: '',
            },
            {
                char: 'b',
                text: 'It helps to keep them cool in summer',
                img: '',
            },
            {
                char: 'c',
                text: 'The colours are popular',
                img: '',
            },
            {
                char: 'd',
                text: 'To help other road users to see them',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6989',
        topicCode: 'Other road users ',
        question:
            'Why do motorcyclists often look over their right shoulder just before turning right?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They need to listen for following traffic',
                img: '',
            },
            {
                char: 'b',
                text: 'Motorcycles don`t have mirrors',
                img: '',
            },
            {
                char: 'c',
                text: 'Looking around helps them balance as they turn',
                img: '',
            },
            {
                char: 'd',
                text: 'They need to check for traffic in their blind area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6992',
        topicCode: 'Other road users ',
        question:
            'You`re approaching a roundabout. What should you do if there are horses being ridden ahead of you?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Give them plenty of room',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop and wait for them to get off the road',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn as a warning',
                img: '',
            },
            {
                char: 'd',
                text: 'Accelerate past as quickly as possible',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6993',
        topicCode: 'Other road users ',
        question: 'What should you do when passing sheep on a road?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Keep close to avoid oncoming traffic',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive very slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Pass quickly but quietly',
                img: '',
            },
            {
                char: 'd',
                text: 'Briefly sound your horn',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6994',
        topicCode: 'Other road users ',
        question:
            'You`re driving at night. What does it mean if you see a pedestrian wearing reflective clothing and carrying a red light?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You`re approaching roadworks',
                img: '',
            },
            {
                char: 'b',
                text: 'You`re approaching an organised walk',
                img: '',
            },
            {
                char: 'c',
                text: 'You`re approaching a slow-moving vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'You`re approaching an accident hotspot',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6996',
        topicCode: 'Other road users ',
        question:
            'What action should you take if there are flashing amber lights under a school warning sign?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Reduce speed until you`re clear of the area',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep up your speed and sound the horn',
                img: '',
            },
            {
                char: 'c',
                text: 'Increase your speed to clear the area quickly',
                img: '',
            },
            {
                char: 'd',
                text: 'Wait at the lights until they change to green',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6997',
        topicCode: 'Other road users ',
        question:
            'What should you do when you`re approaching this zebra crossing?',
        questionImg: 'R8538.tif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Prepare to slow down and stop',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop and wave the pedestrians across',
                img: '',
            },
            {
                char: 'c',
                text: 'Speed up and pass by quickly',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive on unless the pedestrians step out',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6998',
        topicCode: 'Other road users ',
        question: 'Why must these road markings be kept clear?',
        questionImg: 'TS4715.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To allow schoolchildren to be dropped off ',
                img: '',
            },
            {
                char: 'b',
                text: 'To allow teachers to park',
                img: '',
            },
            {
                char: 'c',
                text: 'To allow schoolchildren to be picked up ',
                img: '',
            },
            {
                char: 'd',
                text: 'To allow an unobstructed view of the area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6999',
        topicCode: 'Other road users ',
        question: 'Why mustn`t you stop on these road markings?',
        questionImg: 'TS4715.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It would obstruct everyone`s view of the area',
                img: '',
            },
            {
                char: 'b',
                text: 'It would obstruct teachers` access to the school',
                img: '',
            },
            {
                char: 'c',
                text: 'It would obstruct delivery vehicles` access to the school',
                img: '',
            },
            {
                char: 'd',
                text: 'It would obstruct emergency vehicles` access to the school',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7003',
        topicCode: 'Other road users ',
        question:
            'You`re following two cyclists as they approach a roundabout in the left-hand lane. In which direction should you expect them to go?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Left',
                img: '',
            },
            {
                char: 'b',
                text: 'Right',
                img: '',
            },
            {
                char: 'c',
                text: 'Any direction',
                img: '',
            },
            {
                char: 'd',
                text: 'Straight ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7004',
        topicCode: 'Other road users ',
        question:
            'You`re travelling behind a moped. What should you do if you want to turn left a short distance ahead?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake the moped before the junction',
                img: '',
            },
            {
                char: 'b',
                text: 'Pull alongside the moped and stay level until just before the junction',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn as a warning and turn in front of the moped',
                img: '',
            },
            {
                char: 'd',
                text: 'Stay behind until the moped has passed the junction',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7006',
        topicCode: 'Other road users ',
        question:
            'You see a horse rider as you approach a roundabout. What should you do if they`re signalling right but keeping well to the left?',
        questionImg: 'R8519.tif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Proceed as normal',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep close to them',
                img: '',
            },
            {
                char: 'c',
                text: 'Cut in front of them',
                img: '',
            },
            {
                char: 'd',
                text: 'Stay well back',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7007',
        topicCode: 'Other road users ',
        question:
            'How would you react to drivers who appear to be inexperienced?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound your horn to warn them of your presence',
                img: '',
            },
            {
                char: 'b',
                text: 'Be patient and prepare for them to react more slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your headlights to tell them it`s safe for them to proceed',
                img: '',
            },
            {
                char: 'd',
                text: 'Overtake them as soon as possible',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7008',
        topicCode: 'Other road users ',
        question:
            'What should you do if you`re following a learner driver who stalls at a junction?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Be patient, as you expect them to make mistakes',
                img: '',
            },
            {
                char: 'b',
                text: 'Stay very close behind and flash your headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Start to rev your engine if they take too long to restart',
                img: '',
            },
            {
                char: 'd',
                text: 'Immediately steer around them and drive on',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7009',
        topicCode: 'Other road users ',
        question:
            'You`re on a country road. What should you expect to see coming towards you on your side of the road?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Motorcycles',
                img: '',
            },
            {
                char: 'b',
                text: 'Bicycles',
                img: '',
            },
            {
                char: 'c',
                text: 'Pedestrians',
                img: '',
            },
            {
                char: 'd',
                text: 'Horse riders',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7011',
        topicCode: 'Other road users ',
        question:
            'What should you do when you`re following a car driven by an elderly driver?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Expect the driver to drive badly',
                img: '',
            },
            {
                char: 'b',
                text: 'Flash your lights and overtake',
                img: '',
            },
            {
                char: 'c',
                text: 'Be aware that the driver`s reactions may not be as fast as yours',
                img: '',
            },
            {
                char: 'd',
                text: 'Stay very close behind but be careful',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7012',
        topicCode: 'Other road users ',
        question:
            'You`re following a cyclist. What should you do if you wish to turn left a short distance ahead?',
        questionImg: 'DSCF2611.jpg',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Overtake the cyclist before the junction',
                img: '',
            },
            {
                char: 'b',
                text: 'Pull alongside the cyclist and stay level until after the junction',
                img: '',
            },
            {
                char: 'c',
                text: 'Hold back until the cyclist has passed the junction',
                img: '',
            },
            {
                char: 'd',
                text: 'Go around the cyclist on the junction',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7013',
        topicCode: 'Other road users ',
        question:
            'A horse rider is in the left-hand lane approaching a roundabout. What should you expect the rider to do?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Go in any direction',
                img: '',
            },
            {
                char: 'b',
                text: 'Turn right',
                img: '',
            },
            {
                char: 'c',
                text: 'Turn left',
                img: '',
            },
            {
                char: 'd',
                text: 'Go ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7014',
        topicCode: 'Other road users ',
        question:
            'You`re at the front of a queue of traffic waiting to turn right into a side road. Why should you check your right-hand mirror just before turning?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To look for pedestrians about to cross',
                img: '',
            },
            {
                char: 'b',
                text: 'To check for overtaking vehicles',
                img: '',
            },
            {
                char: 'c',
                text: 'To make sure the side road is clear',
                img: '',
            },
            {
                char: 'd',
                text: 'To check for emerging traffic',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7017',
        topicCode: 'Other road users ',
        question:
            'You`re driving past a line of parked cars. What should you do if you notice a ball bouncing out into the road ahead?',
        questionImg: 'IMG_1290.jpg',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue driving at the same speed and sound your horn',
                img: '',
            },
            {
                char: 'b',
                text: 'Continue driving at the same speed and flash your headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Slow down and be prepared to stop for children',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop and wave the children across to fetch their ball',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7018',
        topicCode: 'Other road users ',
        question:
            'What should you do just before turning right from a main road into a side road?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Cancel your right-turn signal',
                img: '',
            },
            {
                char: 'b',
                text: 'Select first gear',
                img: '',
            },
            {
                char: 'c',
                text: 'Check for traffic passing on your right',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop and set the handbrake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7019',
        topicCode: 'Other road users ',
        question:
            'You`re driving past a bus that`s waiting at a bus stop on the other side of the road. Why should you be careful?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The bus may have broken down',
                img: '',
            },
            {
                char: 'b',
                text: 'Pedestrians may come from behind the bus',
                img: '',
            },
            {
                char: 'c',
                text: 'The bus may move off suddenly',
                img: '',
            },
            {
                char: 'd',
                text: 'The bus may remain stationary',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7020',
        topicCode: 'Other road users ',
        question: 'How should you overtake horse riders?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drive up close and overtake as soon as possible',
                img: '',
            },
            {
                char: 'b',
                text: 'Speed isn`t important but allow plenty of room',
                img: '',
            },
            {
                char: 'c',
                text: 'Use your horn just once to warn them',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive slowly and leave plenty of room',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7024',
        topicCode: 'Other road users ',
        question: 'Where in particular should you look out for motorcyclists?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At a filling station',
                img: '',
            },
            {
                char: 'b',
                text: 'At a road junction',
                img: '',
            },
            {
                char: 'c',
                text: 'Near a service area',
                img: '',
            },
            {
                char: 'd',
                text: 'When entering a car park',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7061',
        topicCode: 'Other road users',
        question:
            'While driving at night, you see a pedestrian ahead. What does it mean if they`re wearing reflective clothing and carrying a red light?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You`re approaching road workers',
                img: '',
            },
            {
                char: 'b',
                text: 'You`re approaching an organised walk',
                img: '',
            },
            {
                char: 'c',
                text: 'You`re approaching an accident hotspot',
                img: '',
            },
            {
                char: 'd',
                text: 'You`re approaching slow-moving vehicles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7080',
        topicCode: 'Other road users',
        question:
            'Which road users are more vulnerable at night in built-up areas?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drivers of black taxi cabs',
                img: '',
            },
            {
                char: 'b',
                text: 'Drivers of double-deck vehicles',
                img: '',
            },
            {
                char: 'c',
                text: 'Cyclists',
                img: '',
            },
            {
                char: 'd',
                text: 'Ambulance drivers',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7088',
        topicCode: 'Other road users',
        question:
            'You`re about to overtake a motorcyclist when they look around over their right shoulder. What`s the most likely reason for them doing this?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The rider intends to move to the right',
                img: '',
            },
            {
                char: 'b',
                text: 'Something has fallen from the machine',
                img: '',
            },
            {
                char: 'c',
                text: 'The drive chain is slack',
                img: '',
            },
            {
                char: 'd',
                text: 'The rear tyre is flat',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7091',
        topicCode: 'Other road users',
        question:
            'Why should you allow extra room for motorcyclists when they`re riding through roadworks?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'There may be a reduced speed limit',
                img: '',
            },
            {
                char: 'b',
                text: 'There may be temporary traffic lights',
                img: '',
            },
            {
                char: 'c',
                text: 'They may swerve to avoid potholes',
                img: '',
            },
            {
                char: 'd',
                text: 'The traffic may be in single file',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7092',
        topicCode: 'Other road users',
        question:
            'You`re following a motorcyclist along a potholed road. How should you adjust your driving to take account of this situation?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Give them extra room',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive alongside them',
                img: '',
            },
            {
                char: 'c',
                text: 'Try to pass them',
                img: '',
            },
            {
                char: 'd',
                text: 'Stay close behind them',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7094',
        topicCode: 'Other road users',
        question: 'Which vehicles are most at risk from spilt diesel fuel?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Motorcycles',
                img: '',
            },
            {
                char: 'b',
                text: 'Empty tankers',
                img: '',
            },
            {
                char: 'c',
                text: 'Towed vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'Fire engines',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7095',
        topicCode: 'Other road users',
        question:
            'You`re driving in a town. What should you do when you see this sign on a stationary bus ahead?',
        questionImg: 'TS4546.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Accelerate quickly',
                img: '',
            },
            {
                char: 'b',
                text: 'Wait until it moves off',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive past slowly',
                img: '',
            },
            {
                char: 'd',
                text: 'Expect the driver will be looking after the children',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7097',
        topicCode: 'Other road users',
        question:
            'What should you do when you`re following a scooter on a poor road surface?',
        questionImg: 'MC6503.tif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Overtake without any delay',
                img: '',
            },
            {
                char: 'b',
                text: 'Stay close behind until you can pass',
                img: '',
            },
            {
                char: 'c',
                text: 'Stay well back and allow them room',
                img: '',
            },
            {
                char: 'd',
                text: 'Sound your horn as you get close',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7124',
        topicCode: 'Other road users',
        question:
            'At toucan crossings, pedestrians share the crossing with which other road users?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Horse riders',
                img: '',
            },
            {
                char: 'b',
                text: 'Cyclists',
                img: '',
            },
            {
                char: 'c',
                text: 'Motorcyclists',
                img: '',
            },
            {
                char: 'd',
                text: 'Trams',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7137',
        topicCode: 'Other road users',
        question:
            'You`re driving on a dual carriageway. What type of vehicle must use a flashing amber beacon on this road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'An ambulance',
                img: '',
            },
            {
                char: 'b',
                text: 'A fire engine ',
                img: '',
            },
            {
                char: 'c',
                text: 'A doctor`s car on call',
                img: '',
            },
            {
                char: 'd',
                text: 'A mobility scooter',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7144',
        topicCode: 'Other road users',
        question:
            'You`re driving near a school in heavy traffic. What should you do when there are children walking close to the kerb on your side of the road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Move to the other side of the road',
                img: '',
            },
            {
                char: 'b',
                text: 'Wave at them to move back from the kerb',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop for a moment to see what they do',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive slowly until you`re clear of the area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7146',
        topicCode: 'Other road users',
        question:
            'You`re driving on a road with an uneven surface. What should you do if you`re following a motorcyclist along this road?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow extra room in case the rider swerves to avoid potholes',
                img: '',
            },
            {
                char: 'b',
                text: 'Leave less room so the rider can see you in their mirrors',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive close behind and get ready to overtake',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive closely to shield the rider',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7181',
        topicCode: 'Other road users',
        question:
            'You wish to turn left into a side road. What should you do if there`s a cyclist in front as you approach the junction?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtake the cyclist before the junction',
                img: '',
            },
            {
                char: 'b',
                text: 'Wait until the cyclist has passed the junction',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn to warn the cyclist to wait',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive alongside and watch the cyclist in your mirrors',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7182',
        topicCode: 'Other road users',
        question:
            'You`re waiting to turn left at a junction. In your mirror you can see a cyclist moving up between the kerb and the nearside of your vehicle. How should you deal with the cyclist?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow them to move in front of you',
                img: '',
            },
            {
                char: 'b',
                text: 'Move off and make them wait for you',
                img: '',
            },
            {
                char: 'c',
                text: 'Steer to the left to make them dismount',
                img: '',
            },
            {
                char: 'd',
                text: 'Tell them to move out of your way',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7183',
        topicCode: 'Other road users',
        question:
            'You`re approaching a roundabout. You see a cyclist signal right. Why do they keep to the left?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It`s a quicker route for a cyclist',
                img: '',
            },
            {
                char: 'b',
                text: 'They`re going to turn left',
                img: '',
            },
            {
                char: 'c',
                text: 'It`s a safer route for a cyclist',
                img: '',
            },
            {
                char: 'd',
                text: 'The Highway Code doesn`t apply to cyclists',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7184',
        topicCode: 'Other road users',
        question:
            'You`re entering a roundabout. What should you do if a cyclist in front of you is signalling to turn right?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake on the right',
                img: '',
            },
            {
                char: 'b',
                text: 'Sound the horn',
                img: '',
            },
            {
                char: 'c',
                text: 'Overtake on the left',
                img: '',
            },
            {
                char: 'd',
                text: 'Allow plenty of room',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7185',
        topicCode: 'Other road users',
        question:
            'A group of horse riders comes towards you. What should you do if the leading rider`s horse becomes nervous of your presence?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Brake gently to a stop until they`ve passed',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake quickly to a stop, applying the parking brake',
                img: '',
            },
            {
                char: 'c',
                text: 'Continue driving, keeping well to the left',
                img: '',
            },
            {
                char: 'd',
                text: 'Increase speed to pass the riders quickly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7186',
        topicCode: 'Other road users',
        question:
            'You`re emerging from a side road into a queue of traffic. Which of these vehicles is especially hard to see?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Bicycle',
                img: '',
            },
            {
                char: 'b',
                text: 'Tractor',
                img: '',
            },
            {
                char: 'c',
                text: 'Van',
                img: '',
            },
            {
                char: 'd',
                text: 'Car',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7187',
        topicCode: 'Other road users',
        question: 'Why are motorcyclists more at risk from other road users?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They`re easy to see',
                img: '',
            },
            {
                char: 'b',
                text: 'They often break down',
                img: '',
            },
            {
                char: 'c',
                text: 'They can`t give arm signals',
                img: '',
            },
            {
                char: 'd',
                text: 'They`re easily overlooked',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7188',
        topicCode: 'Other road users',
        question:
            'Which of these is the main cause of collisions involving motorcycles?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Other drivers',
                img: '',
            },
            {
                char: 'b',
                text: 'Other motorcyclists',
                img: '',
            },
            {
                char: 'c',
                text: 'Wet roads',
                img: '',
            },
            {
                char: 'd',
                text: 'Icy roads',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7189',
        topicCode: 'Other road users',
        question:
            'What should you be on the lookout for before changing lanes in slow-moving queuing traffic?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Private-hire taxis',
                img: '',
            },
            {
                char: 'b',
                text: 'Breakdown vehicles',
                img: '',
            },
            {
                char: 'c',
                text: 'Filtering motorcyclists',
                img: '',
            },
            {
                char: 'd',
                text: 'Traffic cones',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7190',
        topicCode: 'Other road users',
        question: 'Which road users are especially at risk at a road junction?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Motorcyclists',
                img: '',
            },
            {
                char: 'b',
                text: 'Lorry drivers',
                img: '',
            },
            {
                char: 'c',
                text: 'Car drivers',
                img: '',
            },
            {
                char: 'd',
                text: 'Bus drivers',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7191',
        topicCode: 'Other road users',
        question: 'When are motorcyclists particularly vulnerable?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Near zebra crossings',
                img: '',
            },
            {
                char: 'b',
                text: 'In gusting winds ',
                img: '',
            },
            {
                char: 'c',
                text: 'When leaving motorways',
                img: '',
            },
            {
                char: 'd',
                text: 'At traffic lights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7204',
        topicCode: 'Other road users ',
        question:
            'You`re driving towards a zebra crossing. What should you do if you see that a person in a wheelchair is waiting to cross? ',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue on your way',
                img: '',
            },
            {
                char: 'b',
                text: 'Wave to the person to cross',
                img: '',
            },
            {
                char: 'c',
                text: 'Wave to the person to wait',
                img: '',
            },
            {
                char: 'd',
                text: 'Be prepared to stop',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7205',
        topicCode: 'Other road users ',
        question: 'How will a school crossing patrol signal you to stop?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'By pointing to children on the opposite pavement',
                img: '',
            },
            {
                char: 'b',
                text: 'By displaying a red light',
                img: '',
            },
            {
                char: 'c',
                text: 'By displaying a `stop` sign',
                img: '',
            },
            {
                char: 'd',
                text: 'By giving you an arm signal',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7206',
        topicCode: 'Other road users ',
        question:
            'There`s a slow-moving motorcyclist ahead of you. What should you do if you`re unsure what the rider is going to do?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pass on the left',
                img: '',
            },
            {
                char: 'b',
                text: 'Pass on the right',
                img: '',
            },
            {
                char: 'c',
                text: 'Stay behind',
                img: '',
            },
            {
                char: 'd',
                text: 'Move closer',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7207',
        topicCode: 'Other road users ',
        question: 'Which road users are more vulnerable at road junctions?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Cyclists',
                img: '',
            },
            {
                char: 'b',
                text: 'Car drivers',
                img: '',
            },
            {
                char: 'c',
                text: 'Lorry drivers',
                img: '',
            },
            {
                char: 'd',
                text: 'Taxi drivers',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7208',
        topicCode: 'Other road users ',
        question:
            'You`re driving on a single carriageway road. What should you do when you see horse riders ahead?',
        questionImg: 'P5503.tif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move into the middle of the road',
                img: '',
            },
            {
                char: 'b',
                text: 'Check your mirrors and prepare to slow down',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch on your vehicle`s hazard warning lights',
                img: '',
            },
            {
                char: 'd',
                text: 'Signal right to show you`re going to pass them',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7209',
        topicCode: 'Other road users ',
        question:
            'As you approach a pelican crossing, the lights change to green. What should you do if an elderly couple are halfway across?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wave at them to cross as quickly as they can',
                img: '',
            },
            {
                char: 'b',
                text: 'Rev your engine to make them hurry',
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your lights in case they haven`t heard you',
                img: '',
            },
            {
                char: 'd',
                text: 'Wait patiently and give them time to finish crossing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7211',
        topicCode: 'Other road users ',
        question:
            'What should you do when you`re following a motorcyclist on an uneven road?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Allow less room, so you can be seen in their mirrors',
                img: '',
            },
            {
                char: 'b',
                text: 'Overtake them immediately',
                img: '',
            },
            {
                char: 'c',
                text: 'Allow extra room, in case they swerve to avoid potholes',
                img: '',
            },
            {
                char: 'd',
                text: 'Allow the same room as you would any other road user',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7212',
        topicCode: 'Other road users ',
        question:
            'Why do you have to be alert for motorcyclists in queues of traffic?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They may have panniers fitted to their motorcycle',
                img: '',
            },
            {
                char: 'b',
                text: 'They may ride in single file',
                img: '',
            },
            {
                char: 'c',
                text: 'They may be filtering between the lanes',
                img: '',
            },
            {
                char: 'd',
                text: 'They may ride with their headlights on dipped beam',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7213',
        topicCode: 'Other road users ',
        question:
            'You`re driving past parked cars. What should you do if you notice a bicycle wheel sticking out between them?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Accelerate past quickly and sound your horn',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down and wave the cyclist across',
                img: '',
            },
            {
                char: 'c',
                text: 'Brake sharply and flash your headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Slow down and be prepared to stop for a cyclist',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7214',
        topicCode: 'Other road users ',
        question:
            'What do yellow zigzag lines on the road outside a school mean?',
        questionImg: 'TS4715.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Sound your horn to alert other road users',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop to allow children to cross',
                img: '',
            },
            {
                char: 'c',
                text: 'You mustn`t wait or park on these lines',
                img: '',
            },
            {
                char: 'd',
                text: 'You mustn`t drive over these lines',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7215',
        topicCode: 'Other road users ',
        question:
            'You`re driving on a main road. What should you do just before turning right into a side road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Adjust your interior mirror',
                img: '',
            },
            {
                char: 'b',
                text: 'Flash your headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Steer over to the left',
                img: '',
            },
            {
                char: 'd',
                text: 'Check for traffic overtaking on your right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7216',
        topicCode: 'Other road users ',
        question:
            'Where should you take particular care to look for motorcyclists and cyclists?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On dual carriageways',
                img: '',
            },
            {
                char: 'b',
                text: 'At junctions',
                img: '',
            },
            {
                char: 'c',
                text: 'At zebra crossings',
                img: '',
            },
            {
                char: 'd',
                text: 'In one-way streets',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7393',
        topicCode: 'Other road users',
        question:
            'You`re turning right from a main road into a side road. There`s no oncoming traffic. What should you do if pedestrians are standing on the pavement waiting to cross the side road?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Turn in because the pedestrians are safe on the pavement',
                img: '',
            },
            {
                char: 'b',
                text: 'Wave at the pedestrians, inviting them to cross the road',
                img: '',
            },
            {
                char: 'c',
                text: 'Wait and give way to the pedestrians',
                img: '',
            },
            {
                char: 'd',
                text: 'Sound your horn to alert the pedestrians to your presence',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7394',
        topicCode: 'Other road users',
        question:
            'You`re travelling on a narrow section of road. What should you do if a horse rider ahead is riding in the centre of the lane?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound your horn to alert them to your presence',
                img: '',
            },
            {
                char: 'b',
                text: 'Stay behind and allow them to ride in this position',
                img: '',
            },
            {
                char: 'c',
                text: 'Move across to the right and try to ease past them',
                img: '',
            },
            {
                char: 'd',
                text: 'Get up close behind to encourage them to move aside',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7395',
        topicCode: 'Other road users',
        question:
            'You�re about to overtake a cyclist on a road that has a 30 mph speed limit. How much room should you leave them as you overtake?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At least as much room as you would if you were overtaking a car',
                img: '',
            },
            {
                char: 'b',
                text: 'At least a car�s width',
                img: '',
            },
            {
                char: 'c',
                text: 'At least a car�s length',
                img: '',
            },
            {
                char: 'd',
                text: 'At least 2 car widths',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7396',
        topicCode: 'Other road users',
        question:
            'You`re turning left from a main road into a side road. What should you do if there�s a pedestrian on the pavement waiting to cross the side road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Flash your lights to encourage the pedestrian to cross',
                img: '',
            },
            {
                char: 'b',
                text: 'Carry on turning into the side road',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn to let the pedestrian know you�re there',
                img: '',
            },
            {
                char: 'd',
                text: 'Wait and give way to the pedestrian',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'DD8316',
        topicCode: 'Other road users',
        question:
            'What should you do when you`re driving through a bus station?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Change your destination boards ',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive through quickly if you`re not stopping',
                img: '',
            },
            {
                char: 'c',
                text: 'Look for people leaving buses',
                img: '',
            },
            {
                char: 'd',
                text: 'Sound your horn as you enter',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5195 ',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry with a maximum authorised mass of 38 tonnes on a single carriageway road in England. What`s the speed limit for your vehicle after passing this sign?',
        questionImg: 'TS4534.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '40 mph',
                img: '',
            },
            {
                char: 'b',
                text: '50 mph',
                img: '',
            },
            {
                char: 'c',
                text: '60 mph',
                img: '',
            },
            {
                char: 'd',
                text: '70 mph',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5196 ',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a laden articulated lorry with a maximum authorised mass of 38 tonnes on a dual carriageway in England. What speed limit applies to your vehicle after passing this sign?',
        questionImg: 'TS4534.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '40 mph',
                img: '',
            },
            {
                char: 'b',
                text: '50 mph',
                img: '',
            },
            {
                char: 'c',
                text: '60 mph',
                img: '',
            },
            {
                char: 'd',
                text: '70 mph',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5210',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving an articulated lorry. What should you do when you see this sign?',
        questionImg: 'TS4611.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Turn round and find an alternative route',
                img: '',
            },
            {
                char: 'b',
                text: 'Park safely and arrange alternative transport for the goods',
                img: '',
            },
            {
                char: 'c',
                text: 'Inform your vehicle operator and await further instructions',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive past the sign because it doesn`t apply to you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5214',
        topicCode: 'Road and traffic signs',
        question:
            'Which of these signs means you can`t drive your lorry past this point?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4611.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4669.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4691.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4690.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5215',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry 30 feet long and towing a trailer 15 feet long. What should you do when you see this sign?',
        questionImg: 'TS4618.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Find an alternative route to your destination',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop and wait for a police escort',
                img: '',
            },
            {
                char: 'c',
                text: 'Continue past the sign but reduce your speed',
                img: '',
            },
            {
                char: 'd',
                text: 'Carry on; the sign applies to the towing vehicle only',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5245',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry that`s carrying a heavy load. What should you be prepared to do when you see this sign ahead?',
        questionImg: 'TS4597.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Brake to a lower speed',
                img: '',
            },
            {
                char: 'b',
                text: 'Change to a higher gear',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop to check your load',
                img: '',
            },
            {
                char: 'd',
                text: 'Change to a lower gear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5274',
        topicCode: 'Road and traffic signs',
        question:
            'You`re on a motorway. Your lorry has a maximum authorised mass of more than 7.5 tonnes. What does this sign mean to you?',
        questionImg: 'TS4733.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You mustn`t use the right-hand lane ',
                img: '',
            },
            {
                char: 'b',
                text: 'You can only use the right-hand lane',
                img: '',
            },
            {
                char: 'c',
                text: 'You can`t leave the motorway at this junction',
                img: '',
            },
            {
                char: 'd',
                text: 'You can use the middle or right-hand lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5348',
        topicCode: 'Road and traffic signs',
        question:
            'What`s the national speed limit on a motorway for a lorry weighing over 7.5 tonnes?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '50 mph (80 km/h)',
                img: '',
            },
            {
                char: 'b',
                text: '55 mph (88 km/h)',
                img: '',
            },
            {
                char: 'c',
                text: '60 mph (96 km/h)',
                img: '',
            },
            {
                char: 'd',
                text: '70 mph (112 km/h)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5370',
        topicCode: 'Road and traffic signs',
        question: 'When must these two signs be used?',
        questionImg: 'TS4583.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you`re carrying a load that overhangs the front or rear of the vehicle by more than 1 metre (3 feet 3 inches)',
                img: '',
            },
            {
                char: 'b',
                text: 'Whenever your vehicle is being towed',
                img: '',
            },
            {
                char: 'c',
                text: 'Whenever a police escort is required',
                img: '',
            },
            {
                char: 'd',
                text: 'When you`re carrying a load that overhangs the front or rear of the vehicle by more than 2 metres (6 feet 6 inches)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5371',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry weighing more than 7.5 tonnes on a motorway. What does this sign mean?',
        questionImg: 'TS4534.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Maximum speed 40 mph',
                img: '',
            },
            {
                char: 'b',
                text: 'Maximum speed 50 mph',
                img: '',
            },
            {
                char: 'c',
                text: 'Maximum speed 60 mph',
                img: '',
            },
            {
                char: 'd',
                text: 'Maximum speed 70 mph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5372',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry weighing more than 7.5 tonnes on a dual carriageway in England. What does this sign mean?',
        questionImg: 'TS4534.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Maximum speed 40 mph',
                img: '',
            },
            {
                char: 'b',
                text: 'Maximum speed 50 mph',
                img: '',
            },
            {
                char: 'c',
                text: 'Maximum speed 60 mph',
                img: '',
            },
            {
                char: 'd',
                text: 'Maximum speed 70 mph',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5373',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry weighing more than 7.5 tonnes on a single carriageway road in England. What does this sign mean?',
        questionImg: 'TS4534.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Maximum speed 30 mph',
                img: '',
            },
            {
                char: 'b',
                text: 'Maximum speed 40 mph',
                img: '',
            },
            {
                char: 'c',
                text: 'Maximum speed 50 mph',
                img: '',
            },
            {
                char: 'd',
                text: 'Maximum speed 60 mph',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5374',
        topicCode: 'Road and traffic signs',
        question: 'What`s prohibited when a Red Route is in operation?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stopping or parking',
                img: '',
            },
            {
                char: 'b',
                text: 'Overtaking',
                img: '',
            },
            {
                char: 'c',
                text: 'Changing lanes',
                img: '',
            },
            {
                char: 'd',
                text: 'Straddling the lines',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6480',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4533.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'End of restricted speed area',
                img: '',
            },
            {
                char: 'b',
                text: 'End of restricted parking area',
                img: '',
            },
            {
                char: 'c',
                text: 'End of clearway',
                img: '',
            },
            {
                char: 'd',
                text: 'End of cycle route',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6481',
        topicCode: 'Road and traffic signs',
        question: 'Which sign means `No stopping`?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4674.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4691.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4534.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4670.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6483 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4699.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Give way to traffic from the opposite direction',
                img: '',
            },
            {
                char: 'b',
                text: 'You`re entering a one-way street',
                img: '',
            },
            {
                char: 'c',
                text: 'Two-way traffic ahead',
                img: '',
            },
            {
                char: 'd',
                text: 'You have priority over vehicles from the opposite direction',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6484 ',
        topicCode: 'Road and traffic signs',
        question:
            'At a junction, you see this sign partly covered by snow. What does it mean?',
        questionImg: 'TS4558.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Crossroads',
                img: '',
            },
            {
                char: 'b',
                text: 'Give way',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop',
                img: '',
            },
            {
                char: 'd',
                text: 'Turn right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6485 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4535.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Service area 30 miles ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'Maximum speed 30 mph',
                img: '',
            },
            {
                char: 'c',
                text: 'Minimum speed 30 mph',
                img: '',
            },
            {
                char: 'd',
                text: 'Lay-by 30 miles ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6486 ',
        topicCode: 'Road and traffic signs',
        question: 'Which of these signs means turn left ahead?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4659.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4660.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4661.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4662.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6487 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4554.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Route for trams',
                img: '',
            },
            {
                char: 'b',
                text: 'Give way to trams',
                img: '',
            },
            {
                char: 'c',
                text: 'Route for buses',
                img: '',
            },
            {
                char: 'd',
                text: 'Give way to buses',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6488 ',
        topicCode: 'Road and traffic signs',
        question:
            'Which of these signs means that you`re entering a one-way street?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4659.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4693.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4666.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4699.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6489 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4540.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Bus station on the right',
                img: '',
            },
            {
                char: 'b',
                text: 'Contraflow bus lane',
                img: '',
            },
            {
                char: 'c',
                text: 'With-flow bus lane',
                img: '',
            },
            {
                char: 'd',
                text: 'Give way to buses',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6491 ',
        topicCode: 'Road and traffic signs',
        question: 'Which hazard would be shown in a triangular road sign?',
        questionImg: 'TS4501.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Road narrows',
                img: '',
            },
            {
                char: 'b',
                text: 'One-way street',
                img: '',
            },
            {
                char: 'c',
                text: 'Bus lane',
                img: '',
            },
            {
                char: 'd',
                text: 'Minimum speed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6492',
        topicCode: 'Road and traffic signs',
        question:
            'Which sign means that pedestrians may be walking along the road?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4647.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4648.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4646.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4649.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6493 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4518.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Side wind',
                img: '',
            },
            {
                char: 'b',
                text: 'Road noise',
                img: '',
            },
            {
                char: 'c',
                text: 'Airport',
                img: '',
            },
            {
                char: 'd',
                text: 'Adverse camber',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6494 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this traffic sign mean?',
        questionImg: 'TS4517.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Slippery road ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'Tyres liable to puncture ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'Danger ahead',
                img: '',
            },
            {
                char: 'd',
                text: 'Service area ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6495 ',
        topicCode: 'Road and traffic signs',
        question:
            'What should you do if you see this sign when you`re about to overtake?',
        questionImg: 'TS4084.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake the other driver as quickly as possible',
                img: '',
            },
            {
                char: 'b',
                text: 'Move to the right to get a better view',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch your headlights on before overtaking',
                img: '',
            },
            {
                char: 'd',
                text: 'Hold back until you can see clearly ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6496 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4516.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Uneven road surface',
                img: '',
            },
            {
                char: 'b',
                text: 'Bridge over the road',
                img: '',
            },
            {
                char: 'c',
                text: 'Road ahead ends',
                img: '',
            },
            {
                char: 'd',
                text: 'Water across the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6497 ',
        topicCode: 'Road and traffic signs',
        question:
            'You see this traffic light ahead. Which light or lights will come on next?',
        questionImg: 'TS4506.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Red alone',
                img: '',
            },
            {
                char: 'b',
                text: 'Red and amber together',
                img: '',
            },
            {
                char: 'c',
                text: 'Green and amber together',
                img: '',
            },
            {
                char: 'd',
                text: 'Green alone',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6499 ',
        topicCode: 'Road and traffic signs',
        question: 'Where would you find these flashing red lights?',
        questionImg: 'TS4507.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At a pelican crossing',
                img: '',
            },
            {
                char: 'b',
                text: 'At a level crossing',
                img: '',
            },
            {
                char: 'c',
                text: 'At a zebra crossing',
                img: '',
            },
            {
                char: 'd',
                text: 'At a school crossing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6534 ',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving through roadworks. What information does this sign give you?',
        questionImg: 'TS4595.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Large vehicles must go straight ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'Traffic is joining from the left',
                img: '',
            },
            {
                char: 'c',
                text: 'All traffic must leave at the next exit',
                img: '',
            },
            {
                char: 'd',
                text: 'The distance to the next exit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6536 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4691.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop only to pick up passengers',
                img: '',
            },
            {
                char: 'b',
                text: 'No stopping at any time',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop only to set down passengers',
                img: '',
            },
            {
                char: 'd',
                text: 'No stopping at peak times',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6537 ',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving on a motorway and there`s no traffic ahead. You see this sign. Which lane should you use?',
        questionImg: 'TS4585.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The right-hand lane',
                img: '',
            },
            {
                char: 'b',
                text: 'The hard shoulder',
                img: '',
            },
            {
                char: 'c',
                text: 'The left-hand lane',
                img: '',
            },
            {
                char: 'd',
                text: 'The middle lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6540 ',
        topicCode: 'Road and traffic signs',
        question: 'Which of these signs shows an uphill gradient?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4596.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4599.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4597.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4601.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6541 ',
        topicCode: 'Road and traffic signs',
        question: 'Which of these signs means `uneven road`?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4598.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4601.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4602.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4609.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6542 ',
        topicCode: 'Road and traffic signs',
        question: 'What are these advanced stop lines for?',
        questionImg: 'J7509.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To allow room for pedestrians to cross the road',
                img: '',
            },
            {
                char: 'b',
                text: 'To allow space for large vehicles to turn',
                img: '',
            },
            {
                char: 'c',
                text: 'To allow cyclists to position in front of other traffic',
                img: '',
            },
            {
                char: 'd',
                text: 'To allow you to select where to stop',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6545 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this arm signal mean?',
        questionImg: 'IMG_055.jpg',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The driver intends to turn left',
                img: '',
            },
            {
                char: 'b',
                text: 'The driver intends to slow down',
                img: '',
            },
            {
                char: 'c',
                text: 'The driver wants you to keep back',
                img: '',
            },
            {
                char: 'd',
                text: 'The driver wants you to go past',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6546 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this motorway sign mean?',
        questionImg: 'TS4579.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Use the hard shoulder',
                img: '',
            },
            {
                char: 'b',
                text: 'Contraflow system ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'Overhead bridge repairs',
                img: '',
            },
            {
                char: 'd',
                text: 'All lanes closed ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6547 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign warn of?',
        questionImg: 'TS4608.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Slippery road',
                img: '',
            },
            {
                char: 'b',
                text: 'Double bend',
                img: '',
            },
            {
                char: 'c',
                text: 'Overhead electrified cable',
                img: '',
            },
            {
                char: 'd',
                text: 'Series of bends',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6548 ',
        topicCode: 'Road and traffic signs',
        question: 'Who has priority when you`re approaching this sign?',
        questionImg: 'TS4605.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Larger vehicles',
                img: '',
            },
            {
                char: 'b',
                text: 'Oncoming traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'Smaller vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'You have priority',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6549',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4591.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Car lane only',
                img: '',
            },
            {
                char: 'b',
                text: 'Single file only',
                img: '',
            },
            {
                char: 'c',
                text: 'Queues likely',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep your distance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6550 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4584.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Road flooded',
                img: '',
            },
            {
                char: 'b',
                text: 'Risk of punctures',
                img: '',
            },
            {
                char: 'c',
                text: 'Loose chippings',
                img: '',
            },
            {
                char: 'd',
                text: 'Uneven surface',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6551 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: '626.2AV2.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You`re allowed to carry on, but only with a police escort',
                img: '',
            },
            {
                char: 'b',
                text: 'You should continue slowly if your weight is above the limit',
                img: '',
            },
            {
                char: 'c',
                text: 'Don`t cross unless the bridge is clear of other vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'Don`t cross the bridge if your weight exceeds the limit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6554 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this marker count down to?',
        questionImg: 'TS4610.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A motorway slip road',
                img: '',
            },
            {
                char: 'b',
                text: 'A primary road junction',
                img: '',
            },
            {
                char: 'c',
                text: 'A concealed level crossing',
                img: '',
            },
            {
                char: 'd',
                text: 'A roadside rest area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6581',
        topicCode: 'Road and traffic signs',
        question:
            'What does it mean when there are double red lines running along the edge of a road?',
        questionImg: 'TS4728.tif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Limited loading',
                img: '',
            },
            {
                char: 'b',
                text: 'No stopping',
                img: '',
            },
            {
                char: 'c',
                text: 'Bus route',
                img: '',
            },
            {
                char: 'd',
                text: 'Short-term parking',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6582',
        topicCode: 'Road and traffic signs',
        question: 'Where would you expect to see these road markings?',
        questionImg: 'J7510.tif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At the entrance to a car park',
                img: '',
            },
            {
                char: 'b',
                text: 'On the approach to an arched bridge',
                img: '',
            },
            {
                char: 'c',
                text: 'At the start of a cycle lane',
                img: '',
            },
            {
                char: 'd',
                text: 'On the approach to a lifting barrier',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6591',
        topicCode: 'Road and traffic signs',
        question:
            'You`re approaching traffic lights. Only the red light is showing. Which series of lights will show next?',
        questionImg: 'TS4505.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Red and amber, then green',
                img: '',
            },
            {
                char: 'b',
                text: 'Green, then amber',
                img: '',
            },
            {
                char: 'c',
                text: 'Amber, then green',
                img: '',
            },
            {
                char: 'd',
                text: 'Green and amber, then green',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6593 ',
        topicCode: 'Road and traffic signs',
        question:
            'The double white line along the centre of the road is unbroken on your side. When may you cross the line? ',
        questionImg: 'TS4582.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: `To overtake any maintenance vehicle in front`,
                img: '',
            },
            {
                char: 'b',
                text: 'To overtake a pedal cycle travelling at 10 mph or less',
                img: '',
            },
            {
                char: 'c',
                text: 'To check it`s safe to overtake the vehicle in front',
                img: '',
            },
            {
                char: 'd',
                text: 'To overtake a driver travelling at 20 mph or less',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6632',
        topicCode: 'Road and traffic signs',
        question: 'What should you do when you see this sign ahead?',
        questionImg: 'TS4699.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Accelerate because you have priority',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down; the road may be narrow ahead ',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop and give way to oncoming traffic',
                img: '',
            },
            {
                char: 'd',
                text: 'Maintain your speed; it`s just an information sign ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6636',
        topicCode: 'Road and traffic signs',
        question: 'Why should you slow down when you see this sign?',
        questionImg: 'TS4649.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Because pedestrians have right of way',
                img: '',
            },
            {
                char: 'b',
                text: 'There`s a `road race` in progress',
                img: '',
            },
            {
                char: 'c',
                text: 'There`s a pedestrian crossing ahead',
                img: '',
            },
            {
                char: 'd',
                text: 'Because children may be crossing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6684',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4572.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Vehicle carrying dangerous goods in packages',
                img: '',
            },
            {
                char: 'b',
                text: 'Vehicle broken down ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'Holiday route',
                img: '',
            },
            {
                char: 'd',
                text: 'Emergency diversion route for motorway traffic',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7060',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving in fog on a three-lane motorway. Which lane are you in when you can see red reflective studs on your left and white reflective studs on your right?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The hard shoulder',
                img: '',
            },
            {
                char: 'b',
                text: 'The middle lane',
                img: '',
            },
            {
                char: 'c',
                text: 'The right-hand lane',
                img: '',
            },
            {
                char: 'd',
                text: 'The left-hand lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7062',
        topicCode: 'Road and traffic signs',
        question:
            'Which drivers are given instructions by diamond-shaped signs?',
        questionImg: 'TS4508.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drivers of lorries',
                img: '',
            },
            {
                char: 'b',
                text: 'Drivers of trams',
                img: '',
            },
            {
                char: 'c',
                text: 'Drivers of buses',
                img: '',
            },
            {
                char: 'd',
                text: 'Drivers of tractors',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7089',
        topicCode: 'Road and traffic signs',
        question: 'What`s a `Red Route`?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'An area where special waiting restrictions apply',
                img: '',
            },
            {
                char: 'b',
                text: 'An area where part-time traffic lights operate',
                img: '',
            },
            {
                char: 'c',
                text: 'An area where drivers have to pay a toll',
                img: '',
            },
            {
                char: 'd',
                text: 'An area where night-time and weekend weight limits apply',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7103',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving on a motorway. What colour are the reflective studs on the right-hand edge of the carriageway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Amber',
                img: '',
            },
            {
                char: 'b',
                text: 'Green ',
                img: '',
            },
            {
                char: 'c',
                text: 'Red',
                img: '',
            },
            {
                char: 'd',
                text: 'White',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7104',
        topicCode: 'Road and traffic signs',
        question:
            'What`s the purpose of green-and-yellow fluorescent studs on a motorway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They mark the lanes in a contraflow system',
                img: '',
            },
            {
                char: 'b',
                text: 'They separate the slip road from the motorway',
                img: '',
            },
            {
                char: 'c',
                text: 'They mark access points for emergency services',
                img: '',
            },
            {
                char: 'd',
                text: 'They separate the edge of the hard shoulder from the grass verge',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7105',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4508.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Tramway speed limit',
                img: '',
            },
            {
                char: 'b',
                text: 'Distance to level crossing',
                img: '',
            },
            {
                char: 'c',
                text: 'Maximum passenger capacity',
                img: '',
            },
            {
                char: 'd',
                text: 'Goods-vehicle weight limit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7127',
        topicCode: 'Road and traffic signs',
        question: 'Which light won`t show to a driver at a puffin crossing?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Flashing amber',
                img: '',
            },
            {
                char: 'b',
                text: 'Red',
                img: '',
            },
            {
                char: 'c',
                text: 'Steady amber',
                img: '',
            },
            {
                char: 'd',
                text: 'Green',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7128',
        topicCode: 'Road and traffic signs',
        question:
            'You`re approaching a red light at a puffin crossing. Pedestrians are on the crossing. How long will the red light stay on?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Until you start to edge forward onto the crossing',
                img: '',
            },
            {
                char: 'b',
                text: 'Until the pedestrians have reached a safe position',
                img: '',
            },
            {
                char: 'c',
                text: 'Until the pedestrians are clear of the front of your vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Until a driver from the opposite direction reaches the crossing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7131',
        topicCode: 'Road and traffic signs',
        question:
            'A bus-lane sign shows no hours of operation. When is the bus lane in operation?',
        questionImg: 'R8501.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The bus lane isn`t in operation at all',
                img: '',
            },
            {
                char: 'b',
                text: 'The bus lane is only in operation at peak times',
                img: '',
            },
            {
                char: 'c',
                text: 'The bus lane is in operation 24 hours a day',
                img: '',
            },
            {
                char: 'd',
                text: 'The bus lane is only in operation in daylight hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7132',
        topicCode: 'Road and traffic signs',
        question: 'What colour follows the green signal at a puffin crossing?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Steady red',
                img: '',
            },
            {
                char: 'b',
                text: 'Flashing amber',
                img: '',
            },
            {
                char: 'c',
                text: 'Steady amber',
                img: '',
            },
            {
                char: 'd',
                text: 'Flashing green',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7133',
        topicCode: 'Road and traffic signs',
        question:
            'What must you do when you`re approaching a pelican crossing in its flashing amber phase?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Give way to pedestrians on the crossing',
                img: '',
            },
            {
                char: 'b',
                text: 'Encourage pedestrians to cross',
                img: '',
            },
            {
                char: 'c',
                text: 'Wait until the green light appears',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop even if the crossing is clear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7134',
        topicCode: 'Road and traffic signs',
        question: 'What should the hard shoulder on a motorway be used for?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'As a place to stop to answer a mobile phone',
                img: '',
            },
            {
                char: 'b',
                text: 'As a place to stop when an emergency arises',
                img: '',
            },
            {
                char: 'c',
                text: 'As a place to stop for a short rest when you`re tired',
                img: '',
            },
            {
                char: 'd',
                text: 'As a place to stop to check a road atlas',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7135',
        topicCode: 'Road and traffic signs',
        question: 'When must you stop on a motorway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you`re tired and need to walk in the fresh air',
                img: '',
            },
            {
                char: 'b',
                text: 'When you`re picking up hitchhikers',
                img: '',
            },
            {
                char: 'c',
                text: 'When you`re signalled to do so by flashing red lights',
                img: '',
            },
            {
                char: 'd',
                text: 'When you need to answer your mobile phone',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7218',
        topicCode: 'Road and traffic signs',
        question: 'Which sign means `no overtaking`?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4669.eps',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4674.eps',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4699.eps',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4641.eps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7219',
        topicCode: 'Road and traffic signs',
        question: 'What does this motorway sign mean?',
        questionImg: 'TS4593.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Right-hand lane closed ahead',
                img: '',
            },
            {
                char: 'b',
                text: '1 tonne weight limit ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'Left-hand lane closed ahead',
                img: '',
            },
            {
                char: 'd',
                text: 'T-junction 1 mile ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7221',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4604.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'No U-turns',
                img: '',
            },
            {
                char: 'b',
                text: 'Two-way traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'One-way system',
                img: '',
            },
            {
                char: 'd',
                text: 'End of one-way system',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7222',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4548.eps',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Low bridge',
                img: '',
            },
            {
                char: 'b',
                text: 'Tunnel ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'Accident hotspot',
                img: '',
            },
            {
                char: 'd',
                text: 'Speed camera',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7223',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4601.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Rumble strips',
                img: '',
            },
            {
                char: 'b',
                text: 'Road humps',
                img: '',
            },
            {
                char: 'c',
                text: 'Uneven road',
                img: '',
            },
            {
                char: 'd',
                text: 'Double hump bridge',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7225',
        topicCode: 'Road and traffic signs',
        question: 'Why should you slow down when you see this sign?',
        questionImg: 'TS4584.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To reduce the risk of a blow-out',
                img: '',
            },
            {
                char: 'b',
                text: 'To avoid splashing others with water',
                img: '',
            },
            {
                char: 'c',
                text: 'To avoid throwing up loose chippings',
                img: '',
            },
            {
                char: 'd',
                text: 'To prevent grit from blocking your air filter',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7227',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving on a motorway. What`s the speed limit when the hard shoulder is being used as a running lane?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The speed limit is always 60 mph',
                img: '',
            },
            {
                char: 'b',
                text: 'The national speed limit applies',
                img: '',
            },
            {
                char: 'c',
                text: 'The speed limit is displayed above the hard shoulder',
                img: '',
            },
            {
                char: 'd',
                text: 'The speed limit is always 30 mph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7232',
        topicCode: 'Road and traffic signs',
        question: 'What`s the purpose of an emergency area on a motorway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It`s for use in case of emergency or breakdown',
                img: '',
            },
            {
                char: 'b',
                text: 'It`s for use if you think you`ll be involved in a road-rage incident ',
                img: '',
            },
            {
                char: 'c',
                text: 'It`s for a police patrol to park and watch traffic',
                img: '',
            },
            {
                char: 'd',
                text: 'It`s for construction and road workers to store emergency equipment ',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7234',
        topicCode: 'Road and traffic signs',
        question: 'What are traffic officers authorised to do?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Carry out enforcement duties',
                img: '',
            },
            {
                char: 'b',
                text: 'Issue fixed penalty notices',
                img: '',
            },
            {
                char: 'c',
                text: 'Test drivers suspected of drink-driving',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop and direct anyone on a motorway',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7235',
        topicCode: 'Road and traffic signs',
        question:
            'You`re on a motorway. What does it mean when a red cross is displayed above the hard shoulder?',
        questionImg: 'TS4748.tif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop in this lane to answer your mobile phone',
                img: '',
            },
            {
                char: 'b',
                text: 'You may use this lane as a running lane ',
                img: '',
            },
            {
                char: 'c',
                text: 'This lane can be used if you need a rest',
                img: '',
            },
            {
                char: 'd',
                text: 'You shouldn`t use this lane as a running lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7236',
        topicCode: 'Road and traffic signs',
        question:
            'You`re on a motorway. What does it mean when a mandatory speed limit is displayed above the hard shoulder?',
        questionImg: 'TS4747.tif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You shouldn`t use the hard shoulder as a running lane',
                img: '',
            },
            {
                char: 'b',
                text: 'The hard shoulder can be used as a running lane',
                img: '',
            },
            {
                char: 'c',
                text: 'You can park on the hard shoulder if you feel tired',
                img: '',
            },
            {
                char: 'd',
                text: 'Large vehicles must use the hard shoulder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7237',
        topicCode: 'Road and traffic signs',
        question: 'What`s the aim of variable speed limits on a motorway?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To prevent overtaking',
                img: '',
            },
            {
                char: 'b',
                text: 'To reduce rest stops',
                img: '',
            },
            {
                char: 'c',
                text: 'To prevent tailgating',
                img: '',
            },
            {
                char: 'd',
                text: 'To reduce congestion',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7238',
        topicCode: 'Road and traffic signs',
        question:
            'You`re on a motorway. What do the speed-limit signs inside a red circle indicate?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The speed limit on the sign is advisory',
                img: '',
            },
            {
                char: 'b',
                text: 'The national speed limit will always apply',
                img: '',
            },
            {
                char: 'c',
                text: 'The speed limit is always 30 mph',
                img: '',
            },
            {
                char: 'd',
                text: 'The speed limit on the sign must be obeyed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7239',
        topicCode: 'Road and traffic signs',
        question:
            'You`re travelling on a motorway. A red cross is displayed on the gantry signals above the hard shoulder and mandatory speed limits are shown above all other lanes. What does the red cross mean?',
        questionImg: 'TS4749.tif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The hard shoulder can be used as a rest area if you feel tired',
                img: '',
            },
            {
                char: 'b',
                text: 'The hard shoulder is for emergency or breakdown use only',
                img: '',
            },
            {
                char: 'c',
                text: 'The hard shoulder can be used as a normal running lane ',
                img: '',
            },
            {
                char: 'd',
                text: 'The hard shoulder has a speed limit of 50 mph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7241',
        topicCode: 'Road and traffic signs',
        question: 'You see this sign on a motorway. Which lane can you use?',
        questionImg: 'TS4750.tif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Any lane except the hard shoulder',
                img: '',
            },
            {
                char: 'b',
                text: 'The hard shoulder only',
                img: '',
            },
            {
                char: 'c',
                text: 'The three right-hand lanes only',
                img: '',
            },
            {
                char: 'd',
                text: 'Permitted lanes, including the hard shoulder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7243',
        topicCode: 'Road and traffic signs',
        question: 'When can you travel on the hard shoulder of a motorway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When taking the next exit',
                img: '',
            },
            {
                char: 'b',
                text: 'When traffic has stopped',
                img: '',
            },
            {
                char: 'c',
                text: 'When signs show that you can',
                img: '',
            },
            {
                char: 'd',
                text: 'When traffic is moving slowly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7386',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4734.eps',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Soft verges',
                img: '',
            },
            {
                char: 'b',
                text: 'Only cars may park here',
                img: '',
            },
            {
                char: 'c',
                text: 'Parking restrictions apply',
                img: '',
            },
            {
                char: 'd',
                text: 'Fuel and water tanks will leak',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8174',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4611.eps',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Buses only',
                img: '',
            },
            {
                char: 'b',
                text: 'Bus lane',
                img: '',
            },
            {
                char: 'c',
                text: 'No buses',
                img: '',
            },
            {
                char: 'd',
                text: 'Bus stop',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8318',
        topicCode: 'Road and traffic signs',
        question: 'Which road user is sometimes allowed to share a bus lane?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Learner driver',
                img: '',
            },
            {
                char: 'b',
                text: 'Lorry driver',
                img: '',
            },
            {
                char: 'c',
                text: 'Disabled driver',
                img: '',
            },
            {
                char: 'd',
                text: 'Taxi driver',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8323',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a fully loaded coach that`s 12 metres long. What should you do when you approach this sign?',
        questionImg: '622.1A.eps',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Don`t proceed past the sign but find another route',
                img: '',
            },
            {
                char: 'b',
                text: 'Set down all your passengers at a safe place before the sign',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop and check the legal lettering on the side panel',
                img: '',
            },
            {
                char: 'd',
                text: 'Proceed as normal; the sign doesn`t apply to you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
];

export default questions;
