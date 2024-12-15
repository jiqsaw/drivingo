import type { IQuestion } from '@drivingo/models';

const questions: IQuestion[] = [
    {
        code: 'CC5001',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this road sign mean?',
        questionImg: '622.1A.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'No goods vehicles under 7.5 tonnes maximum authorised mass',
            },
            {
                char: 'b',
                text: 'No goods vehicles over 7.5 tonnes maximum authorised mass',
            },
            {
                char: 'c',
                text: 'No goods vehicles over 7.5 metres overall height',
            },
            {
                char: 'd',
                text: 'No goods vehicles under 7.5 metres overall height',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5002',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What does this temporary sign mean for drivers of vehicles over 7.5 tonnes maximum authorised mass?',
        questionImg: 'TS4545.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use either the left-hand or middle lane',
            },
            {
                char: 'b',
                text: 'Use only the left-hand lane',
            },
            {
                char: 'c',
                text: 'Use only the middle lane',
            },
            {
                char: 'd',
                text: 'Use any lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5004',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'In England and Wales, what`s the national speed limit on a single carriageway road for a rigid lorry with a maximum authorised mass of more than 7.5 tonnes?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '30 mph',
            },
            {
                char: 'b',
                text: '40 mph',
            },
            {
                char: 'c',
                text: '50 mph',
            },
            {
                char: 'd',
                text: '60 mph',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5006',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a lorry with a maximum authorised mass of more than 7.5 tonnes along a three-lane motorway. When may you use the right-hand lane?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To overtake slower lorries',
            },
            {
                char: 'b',
                text: 'When the left-hand lane is closed',
            },
            {
                char: 'c',
                text: 'If you drive at more than 60 mph',
            },
            {
                char: 'd',
                text: 'If you`re travelling unladen',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5011',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'Where are you most likely to ground a low loader?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On rural roads',
            },
            {
                char: 'b',
                text: 'On traffic-calming humps',
            },
            {
                char: 'c',
                text: 'On yellow rumble strips',
            },
            {
                char: 'd',
                text: 'On hatched road markings',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5012',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a low loader and you see this sign. What`s your main concern at this hazard?',
        questionImg: 'TS4598.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The ground clearance',
            },
            {
                char: 'b',
                text: 'The weight limit',
            },
            {
                char: 'c',
                text: 'The height limit',
            },
            {
                char: 'd',
                text: 'The load`s security',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5013',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a vehicle that`s over 17 metres (55 feet) long. What should you do at a level crossing?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Cross over using your horn and hazard warning lights',
            },
            {
                char: 'b',
                text: 'Stop before the crossing and phone the signal operator',
            },
            {
                char: 'c',
                text: 'Increase your speed to clear the crossing quickly',
            },
            {
                char: 'd',
                text: 'Stop before the crossing and look both ways before going on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5015',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What type of fastening or restraint should you use when carrying a load of steel?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Chains',
            },
            {
                char: 'b',
                text: 'Straps',
            },
            {
                char: 'c',
                text: 'Ropes',
            },
            {
                char: 'd',
                text: 'Sheeting',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5023',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a lorry carrying a load that`s 4.5 metres (14 feet 9 inches) wide. What`s the maximum speed you`re allowed to drive on a motorway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '10 mph',
            },
            {
                char: 'b',
                text: '20 mph',
            },
            {
                char: 'c',
                text: '30 mph',
            },
            {
                char: 'd',
                text: '40 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5024',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What`s the speed limit on a dual carriageway when you`re carrying a load that`s 4.5 metres (14 feet 9 inches) wide?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '15 mph',
            },
            {
                char: 'b',
                text: '25 mph',
            },
            {
                char: 'c',
                text: '35 mph',
            },
            {
                char: 'd',
                text: '45 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5025',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What colour are the markings on the rear of lorries over 7.5 tonnes maximum authorised mass?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Red/white',
            },
            {
                char: 'b',
                text: 'Red/yellow',
            },
            {
                char: 'c',
                text: 'Black/yellow',
            },
            {
                char: 'd',
                text: 'Black/white',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5026',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'When this vehicle transporter turns, how will the overhanging top deck move?',
        questionImg: 'VL2510.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Through a greater arc than the cab',
            },
            {
                char: 'b',
                text: 'Through a lower arc than the cab',
            },
            {
                char: 'c',
                text: 'Through a smaller arc than the cab',
            },
            {
                char: 'd',
                text: 'Through the same arc as the cab',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5027',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re the driver of an articulated car transporter. How will the overhanging top deck move as you turn corners?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Through a smaller arc than the cab',
            },
            {
                char: 'b',
                text: 'Through a shorter arc than the cab',
            },
            {
                char: 'c',
                text: 'Through a lower arc than the cab',
            },
            {
                char: 'd',
                text: 'Through a greater arc than the cab',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5028',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'When would the driver of a car transporter need to be most aware of the front overhang of the trailer?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When overtaking',
            },
            {
                char: 'b',
                text: 'When turning',
            },
            {
                char: 'c',
                text: 'When loading',
            },
            {
                char: 'd',
                text: 'When braking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5030',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a lorry with a maximum authorised mass of more than 7.5 tonnes. What`s the national speed limit for your vehicle on a dual carriageway in England and Wales?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '40 mph',
            },
            {
                char: 'b',
                text: '50 mph',
            },
            {
                char: 'c',
                text: '60 mph',
            },
            {
                char: 'd',
                text: '70 mph',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5031',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Which axle configuration is most effective at preventing petrol tankers from rolling over?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Tandem axles with double wheels',
            },
            {
                char: 'b',
                text: 'Tandem axles with air suspension',
            },
            {
                char: 'c',
                text: 'Tri-axles with single wheels',
            },
            {
                char: 'd',
                text: 'Tri-axles with double wheels',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5032',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What warning does the driver of a petrol tanker have that `rear wheel lift` is about to become `roll-over`?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The steering becomes heavy',
            },
            {
                char: 'b',
                text: 'The driver has very little warning',
            },
            {
                char: 'c',
                text: 'The air pressure drops',
            },
            {
                char: 'd',
                text: 'The diff-lock engages',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5033',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What effect could a load of hanging meat carcasses cause when you drive around corners or bends?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The wave effect',
            },
            {
                char: 'b',
                text: 'The camber effect',
            },
            {
                char: 'c',
                text: 'The gravity effect',
            },
            {
                char: 'd',
                text: 'The pendulum effect',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5034',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Why do many drivers park at overnight stops with their rear doors close to another lorry?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To keep the load safe',
            },
            {
                char: 'b',
                text: 'To ensure a clear path',
            },
            {
                char: 'c',
                text: 'To keep `same company` lorries together',
            },
            {
                char: 'd',
                text: 'To stop the theft of their fuel',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5256',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What markings should be fitted to a lorry with a maximum authorised mass of more than 7500 kg?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4612.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4543.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4581.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4577.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5257',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'How far can a load overhang at the rear before you must use projection marker boards?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '1 metre (3 feet 3 inches)',
            },
            {
                char: 'b',
                text: '1.5 metres (5 feet 0 inches)',
            },
            {
                char: 'c',
                text: '2 metres (6 feet 6 inches)',
            },
            {
                char: 'd',
                text: '2.9 metres (9 feet 5 inches)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5258',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'When must you notify telephone companies that you`re moving a high load?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When the load`s height exceeds 4.00 metres (13 feet)',
            },
            {
                char: 'b',
                text: 'When the load`s height exceeds 4.30 metres (14 feet 2 inches)',
            },
            {
                char: 'c',
                text: 'When the load`s height exceeds 5.00 metres (16 feet 6 inches)',
            },
            {
                char: 'd',
                text: 'When the load`s height exceeds 5.25 metres (17 feet 6 inches)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5259',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'How wide can a load be before you must use side markers?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '2.0 metres (6 feet 6 inches)',
            },
            {
                char: 'b',
                text: '2.9 metres (9 feet 5 inches)',
            },
            {
                char: 'c',
                text: '3.5 metres (11 feet 5 inches)',
            },
            {
                char: 'd',
                text: '4.3 metres (14 feet 2 inches)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5262',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Triangular projection markers are required when your load is wider than 2.9 metres (9 feet 5 inches). What colour are these markers?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Black/yellow',
            },
            {
                char: 'b',
                text: 'Red/yellow',
            },
            {
                char: 'c',
                text: 'Black/white',
            },
            {
                char: 'd',
                text: 'Red/white',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5341',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'How should you secure an ISO steel cargo container onto your vehicle or trailer?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Using battens and chocks',
            },
            {
                char: 'b',
                text: 'Using straps',
            },
            {
                char: 'c',
                text: 'Using twist locks',
            },
            {
                char: 'd',
                text: 'Using ropes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5342',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving an articulated lorry on a narrow road. There`s a left-hand bend ahead. Why may you need to move out before driving around the bend?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To leave more room for braking',
            },
            {
                char: 'b',
                text: 'To prevent anyone from overtaking',
            },
            {
                char: 'c',
                text: 'To make room for the trailer cutting in',
            },
            {
                char: 'd',
                text: 'To make sure oncoming drivers see you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6001 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: '626.2AV2.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Two-axled trailers are prohibited',
            },
            {
                char: 'b',
                text: 'The bridge is too narrow for vehicles over 7.5 tonnes',
            },
            {
                char: 'c',
                text: 'The bridge has an axle weight limit of 7.5 tonnes',
            },
            {
                char: 'd',
                text: 'Vehicles over the weight shown are prohibited',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6002',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4608a.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Slippery road',
            },
            {
                char: 'b',
                text: 'Double bend',
            },
            {
                char: 'c',
                text: 'Overhead electrified cable',
            },
            {
                char: 'd',
                text: 'Cable laying ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6003 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4575.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'No vehicles over 14 feet 6 inches (4.4 m) wide',
            },
            {
                char: 'b',
                text: 'No vehicles over 14 feet 6 inches (4.4 m) high ',
            },
            {
                char: 'c',
                text: 'Road humps 14 feet 6 inches (4.4 m) apart',
            },
            {
                char: 'd',
                text: 'No vehicles over 14 feet 6 inches (4.4 m) long',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6004 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign warn of?',
        questionImg: 'TS4548.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Low bridge ahead',
            },
            {
                char: 'b',
                text: 'Incident ahead',
            },
            {
                char: 'c',
                text: 'Tunnel ahead',
            },
            {
                char: 'd',
                text: 'Accident hotspot ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6005 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4547.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The length of a tunnel',
            },
            {
                char: 'b',
                text: 'The length of a low bridge',
            },
            {
                char: 'c',
                text: 'The distance to a tunnel',
            },
            {
                char: 'd',
                text: 'The distance to a low bridge',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6007',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'When must you take extra care if you`re driving a vehicle more than 3.0 metres (10 feet) high?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When driving over narrow bridges',
            },
            {
                char: 'b',
                text: 'When driving up steep hills',
            },
            {
                char: 'c',
                text: 'When driving near airports',
            },
            {
                char: 'd',
                text: 'When driving under overhead cables',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6009',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What`s the minimum height of an unmarked bridge?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '4.5 metres (15 feet)',
            },
            {
                char: 'b',
                text: '4.7 metres (15 feet 6 inches)',
            },
            {
                char: 'c',
                text: '4.8 metres (16 feet)',
            },
            {
                char: 'd',
                text: '5.0 metres (16 feet 6 inches)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6011',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'Who must you tell when your vehicle collides with a bridge?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The police',
            },
            {
                char: 'b',
                text: 'The local authority',
            },
            {
                char: 'c',
                text: 'Your local garage',
            },
            {
                char: 'd',
                text: 'The fire service',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD6012',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Your vehicle has collided with a railway bridge. What information must you give the railway authority when you telephone them?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The make and model of your vehicle',
            },
            {
                char: 'b',
                text: 'The type of bridge',
            },
            {
                char: 'c',
                text: 'The vehicle`s height',
            },
            {
                char: 'd',
                text: 'The bridge number',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6013 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What do bells hanging across the road warn drivers of?',
        questionImg: 'TS4542.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Weight restriction ahead',
            },
            {
                char: 'b',
                text: 'Trams crossing ahead',
            },
            {
                char: 'c',
                text: 'Overhead electric cables ahead',
            },
            {
                char: 'd',
                text: 'Railway level crossing ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6014 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4568.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The width of the road is 6 feet 6 inches (2 metres)',
            },
            {
                char: 'b',
                text: 'No vehicles over 6 feet 6 inches (2 metres) wide',
            },
            {
                char: 'c',
                text: 'No vehicles over 6 feet 6 inches (2 metres) high',
            },
            {
                char: 'd',
                text: 'Trailer length must not exceed 6 feet 6 inches (2 metres)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6016',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this motorway sign mean?',
        questionImg: 'TS4576.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '11 tonnes weight limit',
            },
            {
                char: 'b',
                text: 'Stop: all lanes ahead closed',
            },
            {
                char: 'c',
                text: 'Leave the motorway at the next exit',
            },
            {
                char: 'd',
                text: 'Lane ahead closed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6017 ',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving on a motorway and you see this sign. What does it mean? ',
        questionImg: 'TS4522.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'End of restriction',
            },
            {
                char: 'b',
                text: 'End of crawler lane',
            },
            {
                char: 'c',
                text: 'End of weight limit',
            },
            {
                char: 'd',
                text: 'End of hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6019',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'In which of these places might there be a restriction on vehicles over a certain length?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On motorways',
            },
            {
                char: 'b',
                text: 'At freight terminals',
            },
            {
                char: 'c',
                text: 'In road tunnels',
            },
            {
                char: 'd',
                text: 'On dual carriageways',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6021',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'At this roundabout, you want to take the fourth exit. What limit is in force on this road?',
        questionImg: 'TS4544.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Height ',
            },
            {
                char: 'b',
                text: 'Weight ',
            },
            {
                char: 'c',
                text: 'Width',
            },
            {
                char: 'd',
                text: 'Length\n',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6022',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a large vehicle on a narrow road with passing places. What will you need to be most aware of? ',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Its length',
            },
            {
                char: 'b',
                text: 'Its roof height',
            },
            {
                char: 'c',
                text: 'Its ground clearance',
            },
            {
                char: 'd',
                text: 'Its weight',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6026',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What type of road surface will increase your stopping distance by up to ten times?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Bumpy',
            },
            {
                char: 'b',
                text: 'Icy',
            },
            {
                char: 'c',
                text: 'Worn',
            },
            {
                char: 'd',
                text: 'Wet',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6027',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'By how much can your stopping distance increase in icy weather?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '2 times',
            },
            {
                char: 'b',
                text: '4 times',
            },
            {
                char: 'c',
                text: '10 times',
            },
            {
                char: 'd',
                text: '20 times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6028',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What`s the maximum speed allowed for a vehicle towing a trailer on a motorway? ',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '40 mph',
            },
            {
                char: 'b',
                text: '50 mph',
            },
            {
                char: 'c',
                text: '60 mph',
            },
            {
                char: 'd',
                text: '70 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6043',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What should you check when you`ve just overtaken a motorcyclist on a motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Your speedometer',
            },
            {
                char: 'b',
                text: 'Your left-hand mirror',
            },
            {
                char: 'c',
                text: 'Your right-hand mirror',
            },
            {
                char: 'd',
                text: 'The road ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6051',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a large vehicle in a straight line. When is it most stable?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'During harsh acceleration',
            },
            {
                char: 'b',
                text: 'During gentle braking',
            },
            {
                char: 'c',
                text: 'During gentle acceleration',
            },
            {
                char: 'd',
                text: 'During harsh braking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6607 ',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4618.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Warning of lorry crossing a one-way road',
            },
            {
                char: 'b',
                text: 'No entry for vehicles over 32 feet \n6 inches (9.9 metres) long',
            },
            {
                char: 'c',
                text: 'No entry for vehicles over 32.6 tonnes',
            },
            {
                char: 'd',
                text: 'Warning of lorry straight ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6644',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a long vehicle. What should you do when you want to turn right at a painted mini-roundabout?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Make sure none of your wheels touch the roundabout',
            },
            {
                char: 'b',
                text: 'Avoid going over the roundabout if possible',
            },
            {
                char: 'c',
                text: 'Go ahead, and turn right at the next junction',
            },
            {
                char: 'd',
                text: 'Carefully mount the left-hand kerb to make more room',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6680',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What should you consider when planning a route for your journey?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Weight restrictions',
            },
            {
                char: 'b',
                text: 'Speed cameras',
            },
            {
                char: 'c',
                text: 'Speed-limit changes',
            },
            {
                char: 'd',
                text: 'One-way streets',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6681',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Your vehicle is more than 3 metres (9 feet 10 inches) high. Where is this information displayed?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On the windscreen',
            },
            {
                char: 'b',
                text: 'On the weight plate',
            },
            {
                char: 'c',
                text: 'In the driver`s cab',
            },
            {
                char: 'd',
                text: 'In the engine bay',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6682',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'The height of your vehicle is 4.2 metres \n(14 feet). What should you do as you approach this bridge?',
        questionImg: 'TS4511.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep to the centre of the arch and give way to oncoming traffic',
            },
            {
                char: 'b',
                text: 'Drive through slowly, keeping to the left of the marked limits',
            },
            {
                char: 'c',
                text: 'Keep to the centre of the arch and take priority over oncoming traffic',
            },
            {
                char: 'd',
                text: 'Drive through quickly, keeping to the left of the marked limits',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6683',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Unless otherwise shown, what`s the minimum headroom under bridges in the UK?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '4.0 metres (13 feet)',
            },
            {
                char: 'b',
                text: '4.1 metres (13 feet 4 inches)',
            },
            {
                char: 'c',
                text: '5.0 metres (16 feet 6 inches)',
            },
            {
                char: 'd',
                text: '5.5 metres (18 feet)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6685',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Where can you park large vehicles at night without needing to use parking lights?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In an off-road parking area',
            },
            {
                char: 'b',
                text: 'On a road with a 20 mph speed limit',
            },
            {
                char: 'c',
                text: 'At least 10 metres (32 feet) away from any junction',
            },
            {
                char: 'd',
                text: 'In most lay-bys',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6758',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'When should you allow for the effects of a speed limiter?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you`re cornering',
            },
            {
                char: 'b',
                text: 'When you`re braking',
            },
            {
                char: 'c',
                text: 'When you`re overtaking',
            },
            {
                char: 'd',
                text: 'When you`re changing gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6759',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'When should you consider the effect a speed limiter will have on your vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When braking',
            },
            {
                char: 'b',
                text: 'When changing gear',
            },
            {
                char: 'c',
                text: 'When overtaking',
            },
            {
                char: 'd',
                text: 'When reversing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7063',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does this sign mean?',
        questionImg: 'TS4609.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Hump bridge',
            },
            {
                char: 'b',
                text: 'Risk of grounding',
            },
            {
                char: 'c',
                text: 'Uneven road',
            },
            {
                char: 'd',
                text: 'Road liable to subsidence',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7064',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What should be your main concern as you approach this sign?',
        questionImg: 'TS4598.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your vehicle`s height',
            },
            {
                char: 'b',
                text: 'Your vehicle`s width',
            },
            {
                char: 'c',
                text: 'Your vehicle`s weight',
            },
            {
                char: 'd',
                text: 'Your vehicle`s length',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7065',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a long vehicle on a two-lane road. What should you do if you want to turn left into a narrow side road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep well to the left on the approach',
            },
            {
                char: 'b',
                text: 'Move out to the right immediately before turning',
            },
            {
                char: 'c',
                text: 'Keep to the left and turn later than normal',
            },
            {
                char: 'd',
                text: 'Straddle the lanes to make more room for the turn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7066',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'Where must the repair of a speed limiter be carried out?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At an authorised speed-limiter centre',
            },
            {
                char: 'b',
                text: 'At any DVSA site',
            },
            {
                char: 'c',
                text: 'At any dealer centre',
            },
            {
                char: 'd',
                text: 'At the depot by a mechanic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7355',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'Where can the axle weight limits be found?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On the vehicle plate',
            },
            {
                char: 'b',
                text: 'On the operator`s licence',
            },
            {
                char: 'c',
                text: 'On the wheel rims',
            },
            {
                char: 'd',
                text: 'On the weighbridge printout',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8003',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'By approximately how much would 15 passengers increase the weight of your vehicle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '0.5 tonnes',
            },
            {
                char: 'b',
                text: '1 tonne',
            },
            {
                char: 'c',
                text: '2.5 tonnes',
            },
            {
                char: 'd',
                text: '3 tonnes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8004',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'As a guide, how many passengers equal 1 tonne?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '15',
            },
            {
                char: 'b',
                text: '20',
            },
            {
                char: 'c',
                text: '25',
            },
            {
                char: 'd',
                text: '30',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8005',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'How would you know that a weight-limit sign doesn`t apply to the bus you`re driving?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By a plate fitted beneath the weight-limit sign',
            },
            {
                char: 'b',
                text: 'By the colour of the weight-limit sign',
            },
            {
                char: 'c',
                text: 'By a plate attached to the vehicle',
            },
            {
                char: 'd',
                text: 'By a certificate carried by the driver',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8008 ',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'You`re driving a bus on a local service. When can you use this lane?',
        questionImg: 'TS4732.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Between 4.00 pm and 6.30 pm only',
            },
            {
                char: 'b',
                text: 'Before 4.00 pm and after 6.30 pm only',
            },
            {
                char: 'c',
                text: 'At any time of the day',
            },
            {
                char: 'd',
                text: 'Any time except Saturdays',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8009',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What`s the national speed limit for buses and coaches on a dual carriageway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '55 mph',
            },
            {
                char: 'b',
                text: '60 mph',
            },
            {
                char: 'c',
                text: '65 mph',
            },
            {
                char: 'd',
                text: '70 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8176',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does a D1 category licence allow you to drive?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Buses with a maximum of 16 passenger seats',
            },
            {
                char: 'b',
                text: 'Buses with a maximum of 24 passenger seats',
            },
            {
                char: 'c',
                text: 'Buses with a maximum of 32 passenger seats',
            },
            {
                char: 'd',
                text: 'Buses with a maximum of 48 passenger seats',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8198',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Where can a driver find their vehicle`s unladen weight recorded?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On the dashboard of the vehicle',
            },
            {
                char: 'b',
                text: 'On the driver`s duty roster',
            },
            {
                char: 'c',
                text: 'On the side of the vehicle',
            },
            {
                char: 'd',
                text: 'On the depot noticeboard ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8201',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'What category of licence is required to drive an articulated bus?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'D',
            },
            {
                char: 'b',
                text: 'DE',
            },
            {
                char: 'c',
                text: 'D1',
            },
            {
                char: 'd',
                text: 'D1E',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8202',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'The front of your bus overhangs well past the front wheels. Why should you allow for this when cornering?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The steering will be much heavier',
            },
            {
                char: 'b',
                text: 'Your speed will be more difficult to control',
            },
            {
                char: 'c',
                text: 'You might hit something close to the road',
            },
            {
                char: 'd',
                text: 'You`ll need to brake earlier than normal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8225',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'Your bus has a speed limiter fitted. What other related item must it have?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'An audible warning device for the driver',
            },
            {
                char: 'b',
                text: 'A plate in the cab showing the limited speed',
            },
            {
                char: 'c',
                text: 'A warning sign on the back of the bus',
            },
            {
                char: 'd',
                text: 'A manual override switch for emergencies',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8244',
        topicCode: 'Vehicle weights and dimensions ',
        question:
            'A speed limiter is fitted to a bus. Where must the speed-limiter setting be displayed?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In the driver`s cab',
            },
            {
                char: 'b',
                text: 'On the nearside of the vehicle',
            },
            {
                char: 'c',
                text: 'On the rear of the vehicle',
            },
            {
                char: 'd',
                text: 'On the driver`s side at the front of the vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8270',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What does the term `maximum authorised mass` (MAM) mean?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The maximum permissible weight of your vehicle, with passengers but no luggage',
            },
            {
                char: 'b',
                text: 'The maximum permissible weight of your vehicle, without passengers or luggage',
            },
            {
                char: 'c',
                text: 'The maximum permissible weight of your vehicle, with luggage but no passengers',
            },
            {
                char: 'd',
                text: 'The maximum permissible weight of your vehicle, with both luggage and passengers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8271',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'How do speed limiters normally work?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'By applying the service brake ',
            },
            {
                char: 'b',
                text: 'By applying the secondary brake',
            },
            {
                char: 'c',
                text: 'By reducing the fuel supplied to the engine',
            },
            {
                char: 'd',
                text: 'By changing to a lower or higher gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8319',
        topicCode: 'Vehicle weights and dimensions ',
        question: 'What`s a vehicle`s turning circle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The number of turns of the steering wheel between locks',
            },
            {
                char: 'b',
                text: 'The amount of space needed for the vehicle to turn',
            },
            {
                char: 'c',
                text: 'The amount by which the vehicle overhangs kerbs',
            },
            {
                char: 'd',
                text: 'The distance by which a vehicle cuts corners',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5035',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'Why are goods vehicle drivers` hours of work controlled?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To encourage vehicle sympathy',
            },
            {
                char: 'b',
                text: 'To help road safety',
            },
            {
                char: 'c',
                text: 'To ensure fair road use',
            },
            {
                char: 'd',
                text: 'To improve vehicle security',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5036',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What does controlling goods vehicle drivers` hours help to improve?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Fuel economy',
            },
            {
                char: 'b',
                text: 'Road safety',
            },
            {
                char: 'c',
                text: 'Traffic calming',
            },
            {
                char: 'd',
                text: 'Journey planning',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5037',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What must you do when driving under the rules for domestic drivers` hours?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep a written record of hours worked',
            },
            {
                char: 'b',
                text: 'Only record any driving off public roads',
            },
            {
                char: 'c',
                text: 'Keep a written record of driving time only',
            },
            {
                char: 'd',
                text: 'Always use a vehicle fitted with a tachograph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5041',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You must have enough tachograph charts with you for your journey. When do you need to start a new chart?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Every 10 hours',
            },
            {
                char: 'b',
                text: 'Every 24 hours',
            },
            {
                char: 'c',
                text: 'Every 36 hours',
            },
            {
                char: 'd',
                text: 'Every 48 hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5042',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What period of time does one tachograph chart cover?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '24 hours',
            },
            {
                char: 'b',
                text: '48 hours',
            },
            {
                char: 'c',
                text: '5 days',
            },
            {
                char: 'd',
                text: '7 days',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5044',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if your tachograph chart becomes dirty or damaged?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue with the same chart and enter the details in writing',
            },
            {
                char: 'b',
                text: 'Use a spare chart and destroy the damaged one',
            },
            {
                char: 'c',
                text: 'Use a spare chart and attach it to the damaged one',
            },
            {
                char: 'd',
                text: 'Continue to use the chart',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5045',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'During your break, your vehicle will be moved by another person. What should you do with the tachograph chart?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Leave the chart in the vehicle and record the changes on the back',
            },
            {
                char: 'b',
                text: 'Put in a new chart on your return to the vehicle',
            },
            {
                char: 'c',
                text: 'Switch to rest mode to record the break',
            },
            {
                char: 'd',
                text: 'Remove the chart and make a manual record of the break period',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5047',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`ve been driving a lorry without a break for four-and-a-half hours. Under EU rules, you must now take a break. How long must this break be?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '30 minutes',
            },
            {
                char: 'b',
                text: '35 minutes',
            },
            {
                char: 'c',
                text: '40 minutes',
            },
            {
                char: 'd',
                text: '45 minutes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5049',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving a lorry on a motorway and you start to feel drowsy. What should you do when there are no service areas or exits for some distance?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder and rest',
            },
            {
                char: 'b',
                text: 'Open the window and turn down the heating',
            },
            {
                char: 'c',
                text: 'Slow down and use the hazard warning lights',
            },
            {
                char: 'd',
                text: 'Increase your speed to get to the next service area sooner',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5050',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving a lorry. During the journey you begin to feel ill and are unable to concentrate. What should you do?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop in a safe place and seek help',
            },
            {
                char: 'b',
                text: 'Continue your journey and keep your windows open',
            },
            {
                char: 'c',
                text: 'Increase your speed to finish your work earlier',
            },
            {
                char: 'd',
                text: 'Keep stopping at regular intervals for rest',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5051',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What should you do to prevent your load from being stolen?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Give a lift to a stranger',
            },
            {
                char: 'b',
                text: 'Make sure all doors and windows are locked',
            },
            {
                char: 'c',
                text: 'Discuss your load with members of the public',
            },
            {
                char: 'd',
                text: 'Have wind deflectors fitted',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5052',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'How can you reduce the likelihood of theft of your load when leaving your vehicle overnight?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Park with the rear doors close to another vehicle',
            },
            {
                char: 'b',
                text: 'Park with the rear doors well away from another vehicle',
            },
            {
                char: 'c',
                text: 'Park with the front doors well away from another vehicle',
            },
            {
                char: 'd',
                text: 'Park with the front doors close to another vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5055',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What security precautions should you take if you`re carrying a high-value load and have to park and sleep overnight in the cab?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Lock the doors but leave a window open for ventilation',
            },
            {
                char: 'b',
                text: 'Make sure the doors and windows are secure',
            },
            {
                char: 'c',
                text: 'Stay at the same location regularly',
            },
            {
                char: 'd',
                text: 'Park in a quiet, unlit, non-residential area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5056',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re often involved in the carrying of high-value goods. What security measures can you adopt?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Vary your routes and rest stops',
            },
            {
                char: 'b',
                text: 'Always discuss details of your load',
            },
            {
                char: 'c',
                text: 'Give lifts to anyone for added security',
            },
            {
                char: 'd',
                text: 'Keep your journeys to a strict routine',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5201',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Where should you park your trailer if you have to leave it unattended?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'In a public car park',
            },
            {
                char: 'b',
                text: 'On the public highway',
            },
            {
                char: 'c',
                text: 'On secure premises',
            },
            {
                char: 'd',
                text: 'In a quiet residential area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5203',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'When should your trailer be fitted with a kingpin or drawbar lock?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When it`s being driven on a motorway',
            },
            {
                char: 'b',
                text: 'When it`s being driven abroad',
            },
            {
                char: 'c',
                text: 'When it`s being used partially loaded',
            },
            {
                char: 'd',
                text: 'When it`s left unattended',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5263',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Before starting driving, which of the following should you complete on the centre field of your tachograph chart?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The starting point of your day`s journey',
            },
            {
                char: 'b',
                text: 'Details of the goods carried',
            },
            {
                char: 'c',
                text: 'The name and address of your employer',
            },
            {
                char: 'd',
                text: 'The amount of daily rest taken prior to starting the shift',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5335',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'During your working day, you change to another vehicle with the same type of tachograph. How should you keep your tachograph record up-to-date?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the chart that`s already in the other vehicle',
            },
            {
                char: 'b',
                text: 'Take the chart with you and use it in the other vehicle',
            },
            {
                char: 'c',
                text: 'Record your driving hours in a record book',
            },
            {
                char: 'd',
                text: 'Install a new chart in the other vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5339',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Which of the following is good practice in keeping your lorry and its load safe?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Parking in a quiet area, out \nof sight',
            },
            {
                char: 'b',
                text: 'Making sure the back doors are accessible',
            },
            {
                char: 'c',
                text: 'Parking in a well-lit lorry park',
            },
            {
                char: 'd',
                text: 'Showing your papers to anyone who stops you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5344',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving a lorry at night. What can you do to help yourself stay alert?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Eat a heavy meal before setting off',
            },
            {
                char: 'b',
                text: 'Keep plenty of cool, fresh air moving through the cab',
            },
            {
                char: 'c',
                text: 'Keep the cab warm and comfortable',
            },
            {
                char: 'd',
                text: 'Drive faster to get to your destination sooner',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5345',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'How can you reduce the risk of your lorry or trailer being stolen?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Fit an alarm and immobiliser',
            },
            {
                char: 'b',
                text: 'Park alongside another vehicle or a wall',
            },
            {
                char: 'c',
                text: 'Use the same route and stop in the same places for your rest periods',
            },
            {
                char: 'd',
                text: 'Park in quiet areas, away from other vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5346',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re planning to carry high-value goods on a regular basis. Whose advice should you seek?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Other drivers in your area ',
            },
            {
                char: 'b',
                text: 'Your local crime-prevention officer',
            },
            {
                char: 'c',
                text: 'Other operators in your area',
            },
            {
                char: 'd',
                text: 'Your local road-safety officer',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5347',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What period of time makes up a driver`s week?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '00.00 hours Monday to 24.00 hours the following Sunday',
            },
            {
                char: 'b',
                text: '00.00 hours Sunday to 24.00 hours the following Saturday',
            },
            {
                char: 'c',
                text: 'Any 7 consecutive days',
            },
            {
                char: 'd',
                text: 'Any 56 hours driven',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5466',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'While you`re driving, you notice your tachograph isn`t working. What should you do?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop immediately and don`t drive until it`s been repaired',
            },
            {
                char: 'b',
                text: 'Report it to the nearest police station ',
            },
            {
                char: 'c',
                text: 'Phone the vehicle testing authority and report the fault ',
            },
            {
                char: 'd',
                text: 'Continue your journey but make a manual record',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6071',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What can happen to drivers who break EU tachograph regulations?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They can be given three warnings',
            },
            {
                char: 'b',
                text: 'They can have their passport withdrawn',
            },
            {
                char: 'c',
                text: 'They can be heavily fined',
            },
            {
                char: 'd',
                text: 'They can be let off if they`re new to using tachographs',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6072 ',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What must you do when using a vehicle fitted with an analogue tachograph?',
        questionImg: 'VI4010.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Carry enough approved charts',
            },
            {
                char: 'b',
                text: 'Use damaged charts if they`re clean',
            },
            {
                char: 'c',
                text: 'Use dirty charts if they`re undamaged',
            },
            {
                char: 'd',
                text: 'Reuse charts twice',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6075',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'The analogue tachograph on your vehicle becomes faulty. How long do you have before you must have it repaired?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'One day',
            },
            {
                char: 'b',
                text: 'Three days',
            },
            {
                char: 'c',
                text: 'One week',
            },
            {
                char: 'd',
                text: 'Two weeks',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6076',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'An enforcement officer keeps one of your tachograph charts. Who should sign the back of the replacement chart?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You, the driver',
            },
            {
                char: 'b',
                text: 'Your transport manager',
            },
            {
                char: 'c',
                text: 'The vehicle owner',
            },
            {
                char: 'd',
                text: 'The officer',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6077',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'An enforcement officer keeps your analogue tachograph records. How should they endorse the replacement charts?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'With their name',
            },
            {
                char: 'b',
                text: 'With their service number',
            },
            {
                char: 'c',
                text: 'With their home address',
            },
            {
                char: 'd',
                text: 'With their date of birth',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6079',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'Why should you carry spare tachograph charts?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'As a defence against a speeding prosecution',
            },
            {
                char: 'b',
                text: 'To record when you`ve been in a traffic delay',
            },
            {
                char: 'c',
                text: 'For recording extra loading duties and overtime',
            },
            {
                char: 'd',
                text: 'To replace the original chart if it gets dirty',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6083',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, a driver must take regular breaks from driving. What maximum period of continuous driving is allowed?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '3 hours',
            },
            {
                char: 'b',
                text: '4 hours',
            },
            {
                char: 'c',
                text: '4.5 hours',
            },
            {
                char: 'd',
                text: '5.5 hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6084',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`ve been driving non-stop since 5.00 am. The time is now 9.30 am. Under EU rules, what length of break must you take?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'At least 15 minutes',
            },
            {
                char: 'b',
                text: 'At least 30 minutes',
            },
            {
                char: 'c',
                text: 'At least 45 minutes',
            },
            {
                char: 'd',
                text: 'At least 60 minutes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6088',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, what`s the maximum daily driving time allowed?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '9 hours, extended to 11 hours on three days of the week',
            },
            {
                char: 'b',
                text: '10 hours, extended to 11 hours on two days of the week',
            },
            {
                char: 'c',
                text: '9 hours, extended to 10 hours on two days of the week',
            },
            {
                char: 'd',
                text: '10 hours, extended to 11 hours on three days of the week',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6090',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, your minimum daily rest is 11 hours. On three days of the week this may be reduced to what length of time?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '7 hours',
            },
            {
                char: 'b',
                text: '8 hours',
            },
            {
                char: 'c',
                text: '9 hours',
            },
            {
                char: 'd',
                text: '10 hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6091',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, your daily rest can be reduced to 9 hours. For how many times between weekly rest periods is this allowed?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Once',
            },
            {
                char: 'b',
                text: 'Twice',
            },
            {
                char: 'c',
                text: 'Three times',
            },
            {
                char: 'd',
                text: 'Four times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6092',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, how long should your normal daily rest period be?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '8 hours',
            },
            {
                char: 'b',
                text: '11 hours',
            },
            {
                char: 'c',
                text: '13 hours',
            },
            {
                char: 'd',
                text: '14 hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6093',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, what`s the normal weekly rest period that must be taken?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '40 hours',
            },
            {
                char: 'b',
                text: '41 hours',
            },
            {
                char: 'c',
                text: '42 hours',
            },
            {
                char: 'd',
                text: '45 hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6095',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'A vehicle fitted with an analogue tachograph has two drivers. How should they use the tachograph?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Share the same tachograph chart',
            },
            {
                char: 'b',
                text: 'Use a separate tachograph chart for every driving period',
            },
            {
                char: 'c',
                text: 'Use their own tachograph chart',
            },
            {
                char: 'd',
                text: 'Not use the tachograph for such duties',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6096',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re making a journey with a co-driver. When the other person is driving, how should you show this time? ',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'As a daily rest period',
            },
            {
                char: 'b',
                text: 'As a weekly rest period',
            },
            {
                char: 'c',
                text: 'As a break in daily driving',
            },
            {
                char: 'd',
                text: 'As driving time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6097',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What does a tachograph record?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Load weight',
            },
            {
                char: 'b',
                text: 'Driving time',
            },
            {
                char: 'c',
                text: 'Fuel consumption',
            },
            {
                char: 'd',
                text: 'Engine temperature',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6099 ',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Which symbol on your tachograph shows your break/rest period?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'VI4008.png',
            },
            {
                char: 'b',
                text: '',
                img: 'VI4009.png',
            },
            {
                char: 'c',
                text: '',
                img: 'VI4007.png',
            },
            {
                char: 'd',
                text: '',
                img: 'VI4006.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6100 ',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What does this tachograph chart symbol mean?',
        questionImg: 'VI4008.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Driver at rest',
            },
            {
                char: 'b',
                text: 'Chart not required',
            },
            {
                char: 'c',
                text: 'Other work',
            },
            {
                char: 'd',
                text: 'Driving',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6102',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What is the `mode` switch on a tachograph used to record?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Who`s driving',
            },
            {
                char: 'b',
                text: 'Illness',
            },
            {
                char: 'c',
                text: 'Weekly rest periods',
            },
            {
                char: 'd',
                text: 'Other work',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6106',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'At the end of your working week, you`ve driven a total of 56 hours. Under EU rules, what`s the maximum number of hours you can drive in the following week?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '34',
            },
            {
                char: 'b',
                text: '36',
            },
            {
                char: 'c',
                text: '38',
            },
            {
                char: 'd',
                text: '40',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6107',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Your vehicle is fitted with an analogue tachograph. What should you do if you need to exceed the normal drivers` hours due to an emergency?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Continue using the same tachograph chart and write an explanation on the back',
            },
            {
                char: 'b',
                text: 'Remove the tachograph chart and make a manual record of the rest of the journey',
            },
            {
                char: 'c',
                text: 'Continue using the same tachograph chart, without any explanation or record',
            },
            {
                char: 'd',
                text: 'Remove the tachograph chart and tell your employer the reason',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6110',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'What`s most likely to cause tiredness?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Making frequent and regular stops',
            },
            {
                char: 'b',
                text: 'Taking driving breaks on board the vehicle',
            },
            {
                char: 'c',
                text: 'Having insufficient breaks from driving',
            },
            {
                char: 'd',
                text: 'Using vehicles with automatic gearboxes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6112',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if you start to feel tired or unable to concentrate while you`re driving?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop as soon as it`s safe to do so',
            },
            {
                char: 'b',
                text: 'Wind down a window and carry on',
            },
            {
                char: 'c',
                text: 'Switch on the radio and complete your journey',
            },
            {
                char: 'd',
                text: 'Speed up to get to your destination sooner',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6113',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if you feel tired after driving for two-and-a-half hours?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Slow down to a safer speed',
            },
            {
                char: 'b',
                text: 'Reduce your planned driving time to three hours',
            },
            {
                char: 'c',
                text: 'Stop as soon as it`s safe to do so',
            },
            {
                char: 'd',
                text: 'Take a less busy route',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6114',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if you suddenly become tired while you`re driving on a motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder and rest',
            },
            {
                char: 'b',
                text: 'Leave by the next exit and find a place to stop',
            },
            {
                char: 'c',
                text: 'Stop on the next slip road and rest',
            },
            {
                char: 'd',
                text: 'Stop on the verge of the motorway and rest',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6115',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Where can you stop if you feel tired while you`re driving on a motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On the hard shoulder',
            },
            {
                char: 'b',
                text: 'At a service station',
            },
            {
                char: 'c',
                text: 'On a slip road',
            },
            {
                char: 'd',
                text: 'In a deceleration lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6116',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if you have to leave your vehicle unattended for a very short time?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Leave a note in the window explaining you`ll be back soon',
            },
            {
                char: 'b',
                text: 'Leave the keys available in case of obstruction',
            },
            {
                char: 'c',
                text: 'Keep the engine running but lock the doors',
            },
            {
                char: 'd',
                text: 'Secure the vehicle and lock the doors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6594',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'The time is 10.00 am. You`ve been driving non-stop since 6.00 am. Under EU rules, what`s the longest you may now drive without a break?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '15 minutes',
            },
            {
                char: 'b',
                text: '30 minutes',
            },
            {
                char: 'c',
                text: '40 minutes',
            },
            {
                char: 'd',
                text: '45 minutes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6595',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, you may drive for up to nine hours a day. What maximum may this be increased to on two days of the week?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '9.5 hours',
            },
            {
                char: 'b',
                text: '10 hours',
            },
            {
                char: 'c',
                text: '11 hours',
            },
            {
                char: 'd',
                text: '11.5 hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7107',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, you can drive for a maximum of nine hours a day. On how many days each week can this be extended to 10 hours?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'One day',
            },
            {
                char: 'b',
                text: 'Two days',
            },
            {
                char: 'c',
                text: 'Three days',
            },
            {
                char: 'd',
                text: 'Four days',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7283',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'How many days does a driver card normally cover?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '7',
            },
            {
                char: 'b',
                text: '14',
            },
            {
                char: 'c',
                text: '21',
            },
            {
                char: 'd',
                text: '28',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7289',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU drivers` hours regulations, a 45-minute break must be taken after 4.5 hours of driving. What shorter breaks can this be split into?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'One of 10 minutes, plus one of 35 ',
            },
            {
                char: 'b',
                text: 'One of 15 minutes, plus one of 30 ',
            },
            {
                char: 'c',
                text: 'One of 20 minutes, plus one of 25 ',
            },
            {
                char: 'd',
                text: 'One of 40 minutes, plus one of 5 ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7291',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving under EU tachograph regulations and lose your driver card. When must you inform the relevant authority?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Within 5 days',
            },
            {
                char: 'b',
                text: 'Within 7 days',
            },
            {
                char: 'c',
                text: 'Within 14 days',
            },
            {
                char: 'd',
                text: 'Within 28 days',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7292',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'How long is a digital tachograph driver card valid?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'One year',
            },
            {
                char: 'b',
                text: 'Three years',
            },
            {
                char: 'c',
                text: 'Five years',
            },
            {
                char: 'd',
                text: 'Ten years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7293',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Which authority must you contact if your tachograph card is lost or stolen?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The police',
            },
            {
                char: 'b',
                text: 'The Driver and Vehicle Licensing Agency',
            },
            {
                char: 'c',
                text: 'A tachograph centre',
            },
            {
                char: 'd',
                text: 'The Driver and Vehicle Standards Agency',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7294',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'Where can you get a replacement driver tachograph card?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The Driver and Vehicle Licensing Agency',
            },
            {
                char: 'b',
                text: 'The Driver and Vehicle Standards Agency',
            },
            {
                char: 'c',
                text: 'Any MOT test centre',
            },
            {
                char: 'd',
                text: 'A tachograph centre',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7298',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'A driver is convicted of obstructing an enforcement officer in the course of their duties. Under EU drivers` hours regulations, what`s the maximum fine they can receive?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Unlimited',
            },
            {
                char: 'b',
                text: '�3000',
            },
            {
                char: 'c',
                text: '�4000',
            },
            {
                char: 'd',
                text: '�5000',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7336',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'When are you allowed to alter your tachograph record?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'If there are two or more drivers',
            },
            {
                char: 'b',
                text: 'If your journey is over 50 miles',
            },
            {
                char: 'c',
                text: 'At no time',
            },
            {
                char: 'd',
                text: 'When you have no spare charts',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7338',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving under EU drivers` hours. How is a week defined under these rules?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Between 00.00 hours on Monday and 24.00 hours the following Sunday',
            },
            {
                char: 'b',
                text: 'Any seven-day period',
            },
            {
                char: 'c',
                text: 'Between 00.00 hours and 24.00 hours six days later',
            },
            {
                char: 'd',
                text: 'A working period of 56 hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7339',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Which type of digital tachograph card is used by an approved calibration centre when they`re recalibrating the tachograph?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Control card',
            },
            {
                char: 'b',
                text: 'Company card',
            },
            {
                char: 'c',
                text: 'Driver card',
            },
            {
                char: 'd',
                text: 'Workshop card',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7340',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Which digital tachograph card is only available to enforcement authorities?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Control card',
            },
            {
                char: 'b',
                text: 'CPC card',
            },
            {
                char: 'c',
                text: 'Company card',
            },
            {
                char: 'd',
                text: 'Workshop card ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7347',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Drivers must have a driver card for use in digital tachographs. Where can you obtain a replacement driver card in Great Britain?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The Driver and Vehicle Licensing Agency',
            },
            {
                char: 'b',
                text: 'National Highways',
            },
            {
                char: 'c',
                text: 'A tachograph calibration centre',
            },
            {
                char: 'd',
                text: 'The Post Office',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7368',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Who`s responsible for the issue of tachograph charts to a bus or lorry driver?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The driver`s employer',
            },
            {
                char: 'b',
                text: 'The Driver and Vehicle Standards Agency',
            },
            {
                char: 'c',
                text: 'The authorised calibration centre',
            },
            {
                char: 'd',
                text: 'The local MOT testing centre',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7369',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'How can you find out when an analogue tachograph was last recalibrated?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'From a date on the tachograph chart',
            },
            {
                char: 'b',
                text: 'By contacting the vehicle`s manufacturer',
            },
            {
                char: 'c',
                text: 'By checking the vehicle`s service record',
            },
            {
                char: 'd',
                text: 'From a plaque on or near the tachograph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7370',
        topicCode: 'Drivers` hours and rest periods ',
        question: 'When must an analogue tachograph be recalibrated?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Every two years',
            },
            {
                char: 'b',
                text: 'Every four years',
            },
            {
                char: 'c',
                text: 'Every six years',
            },
            {
                char: 'd',
                text: 'Every eight years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7371',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Your vehicle breaks down during a journey. You continue by driving in another vehicle with the same type of tachograph. What must you do with your tachograph chart?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Leave it in the broken-down vehicle',
            },
            {
                char: 'b',
                text: 'Take it with you for security, but use a new chart in the new vehicle',
            },
            {
                char: 'c',
                text: 'Telephone the testing authority for permission to drive without a chart',
            },
            {
                char: 'd',
                text: 'Take it with you, and use it in the new vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7380',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'Under EU rules, what`s the maximum driving time allowed in any two consecutive weeks?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '85 hours',
            },
            {
                char: 'b',
                text: '90 hours',
            },
            {
                char: 'c',
                text: '100 hours',
            },
            {
                char: 'd',
                text: '105 hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7387',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'How often must an analogue tachograph be checked at an approved calibration centre?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Every year',
            },
            {
                char: 'b',
                text: 'Every two years ',
            },
            {
                char: 'c',
                text: 'Every five years',
            },
            {
                char: 'd',
                text: 'Every six years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8012',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'You`re driving a bus with 18 seats on an excursion from London to Scotland. Which drivers` hours rules should you use?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'AETR only',
            },
            {
                char: 'b',
                text: 'Domestic',
            },
            {
                char: 'c',
                text: 'EU only',
            },
            {
                char: 'd',
                text: 'EU and AETR',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8013',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'After driving continuously for the maximum period under EU rules, a bus driver must take a break. What`s the minimum duration of this break?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '15 minutes',
            },
            {
                char: 'b',
                text: '30 minutes',
            },
            {
                char: 'c',
                text: '45 minutes',
            },
            {
                char: 'd',
                text: '60 minutes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8014',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'When may a driver take their rest period in a parked vehicle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'If it`s fitted with a bunk',
            },
            {
                char: 'b',
                text: 'If a smoke alarm is fitted',
            },
            {
                char: 'c',
                text: 'If the vehicle`s in an authorised coach park',
            },
            {
                char: 'd',
                text: 'If there are no passengers on board',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8015',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What should you do if you`re asked to leave your bus by an official who isn`t in uniform?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Comply with the request',
            },
            {
                char: 'b',
                text: 'Ask to see a warrant card',
            },
            {
                char: 'c',
                text: 'Refuse to leave the vehicle',
            },
            {
                char: 'd',
                text: 'Invite the official aboard',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8016',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'What must the driver do when they leave their bus unattended?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check that the tachograph chart is removed',
            },
            {
                char: 'b',
                text: 'Check that the gear lever is in reverse',
            },
            {
                char: 'c',
                text: 'Check that the gear lever is in first ',
            },
            {
                char: 'd',
                text: 'Check that the parking brake is applied',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8338',
        topicCode: 'Drivers` hours and rest periods ',
        question:
            'When are bus operators required to use tachographs for regular journeys?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When the journey is more than 10 km',
            },
            {
                char: 'b',
                text: 'When the journey is more than 20 km',
            },
            {
                char: 'c',
                text: 'When the journey is more than 50 km',
            },
            {
                char: 'd',
                text: 'When the journey is more than 80 km',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5266',
        topicCode: 'Braking systems ',
        question:
            'When is trailer swing most likely to occur on a lorry and drawbar combination?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'While you`re braking on a bend',
            },
            {
                char: 'b',
                text: 'While you`re using an endurance brake',
            },
            {
                char: 'c',
                text: 'While you`re steering at slow speed and fully loaded',
            },
            {
                char: 'd',
                text: 'While you`re moving off at an angle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5267',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with a `diff-lock`. When would you normally use it?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'While driving on straight roads',
            },
            {
                char: 'b',
                text: 'While towing an empty trailer',
            },
            {
                char: 'c',
                text: 'While driving on muddy construction sites',
            },
            {
                char: 'd',
                text: 'While uncoupling a trailer',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5288',
        topicCode: 'Braking systems ',
        question:
            'What colour is the auxiliary line on a three-line braking system?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Red',
            },
            {
                char: 'b',
                text: 'Blue',
            },
            {
                char: 'c',
                text: 'Green',
            },
            {
                char: 'd',
                text: 'Yellow',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5289',
        topicCode: 'Braking systems ',
        question:
            'The emergency line is common to both two-line and three-line brake systems. What colour is it?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Red',
            },
            {
                char: 'b',
                text: 'Blue',
            },
            {
                char: 'c',
                text: 'Black',
            },
            {
                char: 'd',
                text: 'Yellow',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5290',
        topicCode: 'Braking systems ',
        question:
            'Air-brake systems usually have two lines. Which additional line is fitted on a three-line system?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Emergency',
            },
            {
                char: 'b',
                text: 'Service',
            },
            {
                char: 'c',
                text: 'Electrical',
            },
            {
                char: 'd',
                text: 'Auxiliary',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5291',
        topicCode: 'Braking systems ',
        question:
            'In frosty weather, what precaution could a lorry driver take to prevent moisture from freezing in the air-brake system?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drain the air tanks daily',
            },
            {
                char: 'b',
                text: 'Cover the air tanks with a blanket',
            },
            {
                char: 'c',
                text: 'Keep the engine at high revs when starting',
            },
            {
                char: 'd',
                text: 'Pump the brakes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5293',
        topicCode: 'Braking systems ',
        question: 'How can a lorry driver avoid brake fade?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Ensure that the air tanks are drained before journeys',
            },
            {
                char: 'b',
                text: 'Check that the air pressure is correct',
            },
            {
                char: 'c',
                text: 'Make sure that the parking brake is applied before stopping',
            },
            {
                char: 'd',
                text: 'Select an appropriate gear before downhill gradients',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5294',
        topicCode: 'Braking systems ',
        question: 'When are exhaust brakes most efficient?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At high engine speed, while in low gears',
            },
            {
                char: 'b',
                text: 'At low engine speed, while in high gears',
            },
            {
                char: 'c',
                text: 'During stop/start town work',
            },
            {
                char: 'd',
                text: 'While travelling at a constant speed on a motorway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5295',
        topicCode: 'Braking systems ',
        question: 'What`s the principal braking system on a lorry called?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The endurance brake',
            },
            {
                char: 'b',
                text: 'The service brake',
            },
            {
                char: 'c',
                text: 'The parking brake',
            },
            {
                char: 'd',
                text: 'The jake brake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5299',
        topicCode: 'Braking systems ',
        question:
            'You`re driving an articulated lorry. What could happen if you change to a lower gear while you`re going too fast?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The vehicle could jack-knife',
            },
            {
                char: 'b',
                text: 'The engine could stall',
            },
            {
                char: 'c',
                text: 'The brakes could fail',
            },
            {
                char: 'd',
                text: 'The trailer could uncouple',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5300',
        topicCode: 'Braking systems ',
        question:
            'When is an articulated vehicle most at risk of jack-knifing?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When it`s fitted with an endurance brake (retarder)',
            },
            {
                char: 'b',
                text: 'While it`s manoeuvring slowly',
            },
            {
                char: 'c',
                text: 'While it`s under heavy braking',
            },
            {
                char: 'd',
                text: 'When it`s fully loaded',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5301',
        topicCode: 'Braking systems ',
        question:
            'Your lorry is stuck in snow. You use the diff-lock to move off. When should you switch the diff-lock off?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Only after selecting top gear',
            },
            {
                char: 'b',
                text: 'Once the engine has warmed up',
            },
            {
                char: 'c',
                text: 'As soon as the vehicle is moving',
            },
            {
                char: 'd',
                text: 'As soon as the snow has cleared',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5325',
        topicCode: 'Braking systems ',
        question:
            'Your tractor unit has three air lines. You`re connecting to a trailer that has two air-line couplings. What colour is the line you shouldn`t connect to the trailer?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Red',
            },
            {
                char: 'b',
                text: 'Yellow',
            },
            {
                char: 'c',
                text: 'Black',
            },
            {
                char: 'd',
                text: 'Blue',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5329',
        topicCode: 'Braking systems ',
        question:
            'You`re driving an articulated lorry that has three air lines connected to the trailer. What`s the purpose of the red line?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It`s the emergency line',
            },
            {
                char: 'b',
                text: 'It`s the service line',
            },
            {
                char: 'c',
                text: 'It`s the auxiliary line',
            },
            {
                char: 'd',
                text: 'It`s the electrical line',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5330',
        topicCode: 'Braking systems ',
        question:
            'You`re driving a tractor unit fitted with two air lines. You want to couple to a trailer that has three air-line couplings. How should the air lines be connected?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The trailer auxiliary line should be left unconnected',
            },
            {
                char: 'b',
                text: 'The trailer service line should be left unconnected',
            },
            {
                char: 'c',
                text: 'Only the service line should be connected',
            },
            {
                char: 'd',
                text: 'Only the auxiliary line should be connected',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5331',
        topicCode: 'Braking systems ',
        question:
            'Your lorry is equipped with anti-lock brakes. What`s the correct procedure for stopping in an emergency?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Apply the footbrake firmly in a pumping action until the vehicle has stopped',
            },
            {
                char: 'b',
                text: 'Apply the footbrake firmly and continuously until the vehicle has stopped',
            },
            {
                char: 'c',
                text: 'Apply the footbrake and handbrake until the vehicle has stopped',
            },
            {
                char: 'd',
                text: 'Apply the handbrake only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5403',
        topicCode: 'Braking systems ',
        question:
            'What does changing to a lower gear on a long downhill gradient help to avoid?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Brake fade',
            },
            {
                char: 'b',
                text: 'Clutch slip',
            },
            {
                char: 'c',
                text: 'Excessive engine revs',
            },
            {
                char: 'd',
                text: 'Tyre wear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5467',
        topicCode: 'Braking systems ',
        question:
            'You have to drive onto a muddy building site. Why should you switch on your diff-lock?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To make your steering lighter',
            },
            {
                char: 'b',
                text: 'To improve your fuel consumption',
            },
            {
                char: 'c',
                text: 'To increase your engine power',
            },
            {
                char: 'd',
                text: 'To make the wheels less likely to spin',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6715',
        topicCode: 'Braking systems ',
        question: 'How will anti-lock brakes improve your vehicle`s safety?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They allow you to follow other vehicles more closely',
            },
            {
                char: 'b',
                text: 'They help you keep steering control while braking heavily',
            },
            {
                char: 'c',
                text: 'They let you drive faster on wet roads',
            },
            {
                char: 'd',
                text: 'They enable you to brake later than normal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6805',
        topicCode: 'Braking systems ',
        question:
            'What could prevent air pressure from building up in an air-brake system in frosty weather?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Moisture in the air may form bubbles in the brake fluid',
            },
            {
                char: 'b',
                text: 'The air will contract, reducing the pressure',
            },
            {
                char: 'c',
                text: 'The dampness may cause valves to rust',
            },
            {
                char: 'd',
                text: 'Moisture drawn in with the air may freeze and cause a blockage',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6806',
        topicCode: 'Braking systems ',
        question:
            'What should you do if the brake air-pressure warning light comes on while you`re driving?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop and get help without delay',
            },
            {
                char: 'b',
                text: 'Report the fault when you return to your depot',
            },
            {
                char: 'c',
                text: 'Build up the pressure by accelerating',
            },
            {
                char: 'd',
                text: 'Drain the air tanks and continue normally',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6807',
        topicCode: 'Braking systems ',
        question:
            'You`ve just started the engine. What must you do if the brake air-pressure warning light is showing?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Report it as a fault ',
            },
            {
                char: 'b',
                text: 'Keep the parking brake on',
            },
            {
                char: 'c',
                text: 'Switch your engine off',
            },
            {
                char: 'd',
                text: 'Engage the clutch',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6808',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with an anti-lock braking system. What`s it designed to allow you to do?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drive at faster speeds',
            },
            {
                char: 'b',
                text: 'Brake much later than normal',
            },
            {
                char: 'c',
                text: 'Apply the brakes more quickly',
            },
            {
                char: 'd',
                text: 'Stop safely in an emergency',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6809',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with an anti-lock braking system. When should you check that it`s working properly?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Before each service',
            },
            {
                char: 'b',
                text: 'At the start of each working day',
            },
            {
                char: 'c',
                text: 'At the start of each working week',
            },
            {
                char: 'd',
                text: 'Before every journey',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6810',
        topicCode: 'Braking systems ',
        question:
            'What will `pumping` the brake pedal in a vehicle fitted with anti-lock brakes cause?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increased effectiveness',
            },
            {
                char: 'b',
                text: 'Reduced effectiveness',
            },
            {
                char: 'c',
                text: 'Reduced brake wear',
            },
            {
                char: 'd',
                text: 'Increased brake wear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6811',
        topicCode: 'Braking systems ',
        question:
            'You`re driving a vehicle fitted with anti-lock brakes. What should you do when braking in an emergency?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '`Pump` the brake pedal harshly',
            },
            {
                char: 'b',
                text: 'Apply minimum force to the brake pedal',
            },
            {
                char: 'c',
                text: 'Use the exhaust brake (retarder) before the footbrake',
            },
            {
                char: 'd',
                text: 'Apply firm, continuous pressure to the brake pedal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6815',
        topicCode: 'Braking systems ',
        question: 'What`s `brake fade`?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Reduction of air pressure',
            },
            {
                char: 'b',
                text: 'Smooth progressive braking',
            },
            {
                char: 'c',
                text: 'Reduction of braking effectiveness',
            },
            {
                char: 'd',
                text: 'Low hydraulic brake fluid level',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6817',
        topicCode: 'Braking systems ',
        question:
            '`Brake fade` is a loss of effectiveness of the brakes when they overheat. When would `brake fade` be most likely to happen?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On a long journey',
            },
            {
                char: 'b',
                text: 'On a long downhill gradient',
            },
            {
                char: 'c',
                text: 'On the approach to hazards',
            },
            {
                char: 'd',
                text: 'On a long uphill gradient',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6818',
        topicCode: 'Braking systems ',
        question:
            'What should you do when driving a large vehicle down a steep hill? ',
        questionImg: 'TS4596.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Partly apply the parking brake',
            },
            {
                char: 'b',
                text: 'Select the vehicle`s highest gear',
            },
            {
                char: 'c',
                text: 'Use the endurance brake',
            },
            {
                char: 'd',
                text: 'Put the gear lever into neutral',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6819',
        topicCode: 'Braking systems ',
        question:
            'What should anti-lock brakes let you do when you have to stop in an emergency?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Brake more gently',
            },
            {
                char: 'b',
                text: 'Brake much later',
            },
            {
                char: 'c',
                text: 'Maintain steering control',
            },
            {
                char: 'd',
                text: 'Stop over a long distance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6821',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle has anti-lock brakes. How does this affect you when you`re braking normally? ',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'There`s no need to alter the way you brake',
            },
            {
                char: 'b',
                text: 'You`ll be able to brake much later',
            },
            {
                char: 'c',
                text: 'You`ll need to brake more firmly',
            },
            {
                char: 'd',
                text: 'There`s no need to brake so early',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6827',
        topicCode: 'Braking systems ',
        question:
            'When can an endurance brake (retarder) be especially useful?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'While driving down long hills',
            },
            {
                char: 'b',
                text: 'When driving on steep cambers',
            },
            {
                char: 'c',
                text: 'As a way to reduce gear changes',
            },
            {
                char: 'd',
                text: 'To improve fuel consumption',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6828',
        topicCode: 'Braking systems ',
        question:
            'You`re driving down a long hill. What should you use to prevent the brakes from overheating?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The anti-lock braking system',
            },
            {
                char: 'b',
                text: 'The footbrake',
            },
            {
                char: 'c',
                text: 'The secondary brake',
            },
            {
                char: 'd',
                text: 'The endurance brake (retarder)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6829',
        topicCode: 'Braking systems ',
        question:
            'What system is used to control a vehicle`s speed without using the footbrake?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A secondary brake',
            },
            {
                char: 'b',
                text: 'An endurance brake (retarder)',
            },
            {
                char: 'c',
                text: 'A differential lock',
            },
            {
                char: 'd',
                text: 'An emergency air system',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6832',
        topicCode: 'Braking systems ',
        question: 'When should an endurance brake (retarder) be used?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'On motorways only',
            },
            {
                char: 'b',
                text: 'When braking quickly',
            },
            {
                char: 'c',
                text: 'When you stop or park',
            },
            {
                char: 'd',
                text: 'On long downhill slopes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6838',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fully loaded. Where should you be braking when dealing with bends?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'As close to the bend as possible',
            },
            {
                char: 'b',
                text: 'As you start to turn the wheel',
            },
            {
                char: 'c',
                text: 'When halfway around the bend',
            },
            {
                char: 'd',
                text: 'When driving in a straight line',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6839',
        topicCode: 'Braking systems ',
        question:
            'A lorry is overtaking you on a two-lane motorway. What should you do if it doesn`t have the speed to get past?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Continue at the same speed',
            },
            {
                char: 'b',
                text: 'Be prepared to reduce your speed',
            },
            {
                char: 'c',
                text: 'Increase your speed and force the lorry to drop back',
            },
            {
                char: 'd',
                text: 'Brake hard to allow the other driver to cut in',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6846',
        topicCode: 'Braking systems ',
        question: 'What should you do after driving through a flood?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Carry out an emergency stop',
            },
            {
                char: 'b',
                text: 'Drive in a low gear with the footbrake lightly applied',
            },
            {
                char: 'c',
                text: 'Avoid braking until the brakes have dried out',
            },
            {
                char: 'd',
                text: 'Pump the footbrake when approaching hazards',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6847',
        topicCode: 'Braking systems ',
        question: 'What can coasting downhill seriously affect?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The air brakes',
            },
            {
                char: 'b',
                text: 'The cooling system',
            },
            {
                char: 'c',
                text: 'The tachograph',
            },
            {
                char: 'd',
                text: 'The electrical systems',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7067',
        topicCode: 'Braking systems ',
        question: 'When does `brake fade` occur?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When the brakes get too hot',
            },
            {
                char: 'b',
                text: 'When the brakes get too cold',
            },
            {
                char: 'c',
                text: 'When the brakes get too dry',
            },
            {
                char: 'd',
                text: 'When the brakes get too wet',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7068',
        topicCode: 'Braking systems ',
        question: 'How can you help to prevent `brake fade`?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use the endurance brake ',
            },
            {
                char: 'b',
                text: 'Apply the parking brake',
            },
            {
                char: 'c',
                text: 'Select neutral for a short distance',
            },
            {
                char: 'd',
                text: 'Repeatedly pump the brake pedal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7069',
        topicCode: 'Braking systems ',
        question: 'What causes `brake fade`?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Continuous use of the brakes',
            },
            {
                char: 'b',
                text: 'Repeated pumping of the brakes',
            },
            {
                char: 'c',
                text: 'Loss of air pressure in the system',
            },
            {
                char: 'd',
                text: 'Badly worn brake pads',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7071',
        topicCode: 'Braking systems ',
        question:
            'Where must extra care be taken when using an endurance brake (retarder)?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On uneven roads',
            },
            {
                char: 'b',
                text: 'On slippery roads',
            },
            {
                char: 'c',
                text: 'On downhill gradients',
            },
            {
                char: 'd',
                text: 'On uphill gradients',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7143',
        topicCode: 'Braking systems ',
        question:
            'You`re stationary. The brake air-pressure warning light comes on. Why should you keep the parking brake on?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Because the vehicle will suddenly roll backwards',
            },
            {
                char: 'b',
                text: 'Because it will cause the air pressure to rise',
            },
            {
                char: 'c',
                text: 'Because the service brake may not stop you ',
            },
            {
                char: 'd',
                text: 'Because it will make the warning light go out',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7310',
        topicCode: 'Braking systems ',
        question:
            'You`re about to drive a vehicle fitted with air-assisted hydraulic brakes. Why might the brake pedal feel hard when you press it?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The air compressor is not working',
            },
            {
                char: 'b',
                text: 'The pedal movement needs adjusting',
            },
            {
                char: 'c',
                text: 'The brakes are locked on fully',
            },
            {
                char: 'd',
                text: 'The brake-fluid reservoir is empty',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7311',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with an air-assisted hydraulic braking system. What would warn you that the air compressor is not working?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The brake pedal feels spongy when pressed',
            },
            {
                char: 'b',
                text: 'The brake pedal has little resistance',
            },
            {
                char: 'c',
                text: 'The brake pedal feels hard when pressed',
            },
            {
                char: 'd',
                text: 'The brake pedal travels a long way',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7312',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with hydraulic brakes. Why might the brake pedal go down too far when it`s pressed?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There`s too much fluid in the braking system',
            },
            {
                char: 'b',
                text: 'The pedal travel requires adjustment',
            },
            {
                char: 'c',
                text: 'The vacuum exhauster isn`t working',
            },
            {
                char: 'd',
                text: 'There isn`t enough fluid in the braking system',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7313',
        topicCode: 'Braking systems ',
        question:
            'You`re about to drive a vehicle fitted with hydraulic brakes. What should you check before driving the vehicle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The hydraulic-brake fluid level',
            },
            {
                char: 'b',
                text: 'The power-steering fluid level',
            },
            {
                char: 'c',
                text: 'The cooling-system fluid level',
            },
            {
                char: 'd',
                text: 'The windscreen-washer fluid level',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7314',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with air-assisted hydraulic brakes. What would warn you that there isn`t enough air in the system?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'An increase in pressure on the air gauge',
            },
            {
                char: 'b',
                text: 'A buzzer or light',
            },
            {
                char: 'c',
                text: 'The exhaust brake won`t work',
            },
            {
                char: 'd',
                text: 'Brake fade',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7316',
        topicCode: 'Braking systems ',
        question:
            'Which coloured band on the rev counter makes the best use of engine braking?',
        questionImg: '85BW1908.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Blue',
            },
            {
                char: 'b',
                text: 'Red',
            },
            {
                char: 'c',
                text: 'Amber',
            },
            {
                char: 'd',
                text: 'Green',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7318',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with air brakes. What does it mean if a brake warning light shows when you`ve just started the engine?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Low air pressure',
            },
            {
                char: 'b',
                text: 'Increased air pressure',
            },
            {
                char: 'c',
                text: 'The parking brake isn`t working',
            },
            {
                char: 'd',
                text: 'The air reservoirs are fully charged',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7320',
        topicCode: 'Braking systems ',
        question:
            'Your vehicle is fitted with air-assisted hydraulic brakes. What fault would you suspect if the brake pedal becomes hard to press?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The brake system has a loss of air pressure',
            },
            {
                char: 'b',
                text: 'The brake linings are worn',
            },
            {
                char: 'c',
                text: 'The brake shoes need adjusting',
            },
            {
                char: 'd',
                text: 'The brake system requires more fluid',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7350',
        topicCode: 'Braking systems ',
        question: 'Which component will last longer when you use a retarder?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The brake linings',
            },
            {
                char: 'b',
                text: 'The catalytic converter',
            },
            {
                char: 'c',
                text: 'The exhaust system',
            },
            {
                char: 'd',
                text: 'The transmission',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7372',
        topicCode: 'Braking systems ',
        question:
            'What should you do when an air-pressure warning device activates?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue to drive the vehicle',
            },
            {
                char: 'b',
                text: 'Drain the air tanks',
            },
            {
                char: 'c',
                text: 'Stop and have the fault put right',
            },
            {
                char: 'd',
                text: 'Pump the brake pedal repeatedly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7378',
        topicCode: 'Braking systems ',
        question:
            'You`re driving down a snow-covered hill. Why should you take care when using an independent endurance brake (retarder)?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your brakes could overheat',
            },
            {
                char: 'b',
                text: 'Your speed could increase',
            },
            {
                char: 'c',
                text: 'Compressed air could escape',
            },
            {
                char: 'd',
                text: 'The drive wheels could lock',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7379',
        topicCode: 'Braking systems ',
        question:
            'What should you avoid when using an independent endurance brake (retarder) on slippery roads?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The front wheels spinning',
            },
            {
                char: 'b',
                text: 'The drive wheels locking',
            },
            {
                char: 'c',
                text: 'Brake-pad wear',
            },
            {
                char: 'd',
                text: 'Anti-skid road surfaces',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7382',
        topicCode: 'Braking systems ',
        question:
            'You`re about to drive an unfamiliar vehicle. What should you do if you think there may be moisture in the air-brake reservoir?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Assume the system has automatic drain valves',
            },
            {
                char: 'b',
                text: 'Find out whether you need to drain the system manually',
            },
            {
                char: 'c',
                text: 'Nothing; it`s the vehicle owner`s responsibility',
            },
            {
                char: 'd',
                text: 'Leave the engine running for a while before driving',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8251',
        topicCode: 'Braking systems ',
        question:
            'You`re about to start a journey in very frosty weather. What`s the likely cause of low air-brake pressure?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Engine temperature too low',
            },
            {
                char: 'b',
                text: 'Weak engine anti-freeze mixture',
            },
            {
                char: 'c',
                text: 'Brake pedal needs adjustment',
            },
            {
                char: 'd',
                text: 'Frozen moisture in the storage tanks',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8253',
        topicCode: 'Braking systems ',
        question:
            'When should an anti-lock braking system (ABS) warning light turn off?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When the brakes are used for the first time',
            },
            {
                char: 'b',
                text: 'When the ABS comes into operation',
            },
            {
                char: 'c',
                text: 'When road speed is 6 mph (10 km/h) or more',
            },
            {
                char: 'd',
                text: 'When the secondary braking system is used',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8254',
        topicCode: 'Braking systems ',
        question: 'What`s the most powerful brake on a bus?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Secondary brake',
            },
            {
                char: 'b',
                text: 'Anti-lock braking system',
            },
            {
                char: 'c',
                text: 'Endurance brake (retarder)',
            },
            {
                char: 'd',
                text: 'Service brake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8255',
        topicCode: 'Braking systems ',
        question: 'What should you do when making a short stop, facing uphill?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Hold the vehicle on the clutch',
            },
            {
                char: 'b',
                text: 'Hold the vehicle on the footbrake',
            },
            {
                char: 'c',
                text: 'Select neutral and apply the parking brake',
            },
            {
                char: 'd',
                text: 'Apply the parking brake after stopping',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8256',
        topicCode: 'Braking systems ',
        question:
            'You`re about to move off in a vehicle that has automatic transmission. What must you do before you select `D` (drive)?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Put your foot on the footbrake',
            },
            {
                char: 'b',
                text: 'Signal to move off',
            },
            {
                char: 'c',
                text: 'Alter your seat position',
            },
            {
                char: 'd',
                text: 'Adjust your mirrors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8257',
        topicCode: 'Braking systems ',
        question: 'What`s an advantage of progressive braking?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Improved passenger safety and comfort',
            },
            {
                char: 'b',
                text: 'Increased air-brake pressure',
            },
            {
                char: 'c',
                text: 'Avoidance of `brake fade`',
            },
            {
                char: 'd',
                text: 'Longer rest periods',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5230',
        topicCode: 'The driver',
        question:
            'You`re approaching a green traffic light and are going straight ahead. What should you do when the traffic ahead, beyond the junction, has stopped and is queuing? ',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Go forward if your vehicle will clear the junction',
            },
            {
                char: 'b',
                text: 'Drive slowly across the junction',
            },
            {
                char: 'c',
                text: 'Maintain your speed and sound your horn',
            },
            {
                char: 'd',
                text: 'Stop across the junction until the traffic clears',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5324',
        topicCode: 'The driver',
        question:
            'What rules apply to the wearing of seat belts fitted to your lorry?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It`s not advisable',
            },
            {
                char: 'b',
                text: 'It`s advisable',
            },
            {
                char: 'c',
                text: 'It`s required by law',
            },
            {
                char: 'd',
                text: 'It`s not required by law',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5337',
        topicCode: 'The driver',
        question:
            'You`re driving this lorry and are waiting to turn right. What should you do just before turning?',
        questionImg: 'J7505n1.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Cancel your signal',
            },
            {
                char: 'b',
                text: 'Check your left-hand mirror and blind spot',
            },
            {
                char: 'c',
                text: 'Wave out the green car (arrowed)',
            },
            {
                char: 'd',
                text: 'Check your right-hand mirror and blind spot',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5338',
        topicCode: 'The driver',
        question:
            'What will you have to deal with when you`re driving at night?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Headlight dazzle',
            },
            {
                char: 'b',
                text: 'Other drivers speeding',
            },
            {
                char: 'c',
                text: 'Cold weather conditions',
            },
            {
                char: 'd',
                text: 'Dazzle from shop windows',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5354',
        topicCode: 'The driver',
        question:
            'You`re driving a lorry in a busy town. A driver pulls out in front of you and you have to brake hard. What should you do?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtake as quickly as possible',
            },
            {
                char: 'b',
                text: 'Stay calm and accept the error',
            },
            {
                char: 'c',
                text: 'Flash your lights to show your annoyance',
            },
            {
                char: 'd',
                text: 'Sound your horn and speed up',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5427',
        topicCode: 'The driver',
        question:
            'Your lorry is fitted with a driver`s seat belt. When may you drive without wearing it?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you`re making deliveries that are less than 50 metres apart',
            },
            {
                char: 'b',
                text: 'When you`re towing at less than 50 mph',
            },
            {
                char: 'c',
                text: 'When you`re working less than 50 hours in a week',
            },
            {
                char: 'd',
                text: 'When you`re less than 50 miles away from your depot',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5439',
        topicCode: 'The driver',
        question:
            'You`ve been issued with protective clothing. Who`s responsible for its use?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You, the driver',
            },
            {
                char: 'b',
                text: 'The insurance company',
            },
            {
                char: 'c',
                text: 'The Health and Safety Executive',
            },
            {
                char: 'd',
                text: 'Your employer',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6627',
        topicCode: 'The driver',
        question:
            'You`re driving on a motorway. What does it mean when a lorry ahead of you switches on its hazard warning lights?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There are speed cameras ahead',
            },
            {
                char: 'b',
                text: 'The lorry is about to overtake',
            },
            {
                char: 'c',
                text: 'The lorry is leaving the motorway',
            },
            {
                char: 'd',
                text: 'Traffic further ahead may be stopping',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6629',
        topicCode: 'The driver',
        question: 'What should you do if you lose your way in heavy traffic?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop at traffic lights and ask pedestrians',
            },
            {
                char: 'b',
                text: 'Shout to other drivers to ask them the way',
            },
            {
                char: 'c',
                text: 'Drive on until you find a safe place to stop',
            },
            {
                char: 'd',
                text: 'Check a map as you keep moving with the traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6686',
        topicCode: 'The driver',
        question:
            'Where are you most likely to find pedestrians stepping into the road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Motorways',
            },
            {
                char: 'b',
                text: 'One-way streets',
            },
            {
                char: 'c',
                text: 'Wooded areas',
            },
            {
                char: 'd',
                text: 'Shopping areas',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6687',
        topicCode: 'The driver',
        question:
            'What`s most likely to cause danger to a group of horse riders?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Powerful brake lights',
            },
            {
                char: 'b',
                text: 'Leaving plenty of room',
            },
            {
                char: 'c',
                text: 'The noise of your vehicle',
            },
            {
                char: 'd',
                text: 'Reacting too early',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6688',
        topicCode: 'The driver',
        question: 'What should you do when passing sheep on a road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pass quickly and quietly',
            },
            {
                char: 'b',
                text: 'Sound your horn gently',
            },
            {
                char: 'c',
                text: 'Drive very slowly',
            },
            {
                char: 'd',
                text: 'Keep your vehicle moving',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6702',
        topicCode: 'The driver',
        question:
            'When is your nearside mirror most likely to endanger pedestrians?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When driving over a speed hump',
            },
            {
                char: 'b',
                text: 'When driving near a hospital',
            },
            {
                char: 'c',
                text: 'When driving close to the kerb',
            },
            {
                char: 'd',
                text: 'When driving past a car park',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6712',
        topicCode: 'The driver',
        question:
            'What can prevent you from holding a bus or lorry driving licence?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Heart disorders ',
            },
            {
                char: 'b',
                text: 'Dyslexia',
            },
            {
                char: 'c',
                text: 'Skin problems',
            },
            {
                char: 'd',
                text: 'Stomach problems',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6761',
        topicCode: 'The driver',
        question:
            'You`re about to drive a vehicle you`ve never driven before. What should you consider when adjusting your seat?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your distance from the controls',
            },
            {
                char: 'b',
                text: 'Being able to reach your sat-nav',
            },
            {
                char: 'c',
                text: 'The tension in the seat belt',
            },
            {
                char: 'd',
                text: 'The wear on the seat fabric',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6762',
        topicCode: 'The driver',
        question: 'Why is it important to adjust your head restraint properly?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To make you more comfortable',
            },
            {
                char: 'b',
                text: 'To protect your neck in a collision',
            },
            {
                char: 'c',
                text: 'To help you relax while you`re driving',
            },
            {
                char: 'd',
                text: 'To maintain a good driving position',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6764',
        topicCode: 'The driver',
        question: 'When may you drive without wearing your seat belt? ',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When reversing',
            },
            {
                char: 'b',
                text: 'When carrying out a hill start',
            },
            {
                char: 'c',
                text: 'When making an emergency stop',
            },
            {
                char: 'd',
                text: 'When driving slowly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6858',
        topicCode: 'The driver',
        question:
            'You`re driving along this road. What should you do if the red car cuts in close in front of you?',
        questionImg: '85BW1457.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Accelerate to get closer to the red car',
            },
            {
                char: 'b',
                text: 'Give a long blast on the horn',
            },
            {
                char: 'c',
                text: 'Drop back to leave the correct separation distance',
            },
            {
                char: 'd',
                text: 'Flash your headlights several times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6859',
        topicCode: 'The driver',
        question:
            'You`re approaching a large puddle near the left-hand kerb. What should you do if pedestrians are close to the water?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Ignore the puddle',
            },
            {
                char: 'b',
                text: 'Brake suddenly and sound your horn',
            },
            {
                char: 'c',
                text: 'Try to avoid splashing the pedestrians',
            },
            {
                char: 'd',
                text: 'Wave at the pedestrians to keep back ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6860',
        topicCode: 'The driver',
        question:
            'What should you do if a long, heavily laden lorry is taking a long time to overtake you?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Speed up',
            },
            {
                char: 'b',
                text: 'Slow down',
            },
            {
                char: 'c',
                text: 'Hold your speed',
            },
            {
                char: 'd',
                text: 'Change direction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6862',
        topicCode: 'The driver',
        question:
            'You`re driving a slow-moving vehicle on a narrow, winding road. What should you do to let other vehicles overtake you?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Wave them past',
            },
            {
                char: 'b',
                text: 'Stop in a safe place',
            },
            {
                char: 'c',
                text: 'Show a left-turn signal',
            },
            {
                char: 'd',
                text: 'Drive more slowly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6863',
        topicCode: 'The driver',
        question: 'When should you use your vehicle`s horn?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To warn others of your presence',
            },
            {
                char: 'b',
                text: 'To allow you right of way',
            },
            {
                char: 'c',
                text: 'To greet other road users',
            },
            {
                char: 'd',
                text: 'To signal your annoyance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6864',
        topicCode: 'The driver',
        question:
            'You`re following a car being driven slowly by a learner driver. What should you do if it isn`t safe to overtake it?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Flash your lights so the driver sees you',
            },
            {
                char: 'b',
                text: 'Be patient and stay well behind',
            },
            {
                char: 'c',
                text: 'Switch your hazard lights on ',
            },
            {
                char: 'd',
                text: 'Drive along the centre line of the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6865',
        topicCode: 'The driver',
        question:
            'What should you do if you`re signalled to stop by a police officer in a patrol car?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Brake harshly to a stop',
            },
            {
                char: 'b',
                text: 'Drive on until you reach a side road',
            },
            {
                char: 'c',
                text: 'Stop on the left as soon as it`s safe',
            },
            {
                char: 'd',
                text: 'Stop immediately wherever you are',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6866',
        topicCode: 'The driver',
        question:
            'You`re being followed by a marked police car. As well as flashing the headlights, what will the police officer do to signal you to stop?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Signal with the right indicator',
            },
            {
                char: 'b',
                text: 'Signal with the left indicator',
            },
            {
                char: 'c',
                text: 'Switch on the hazard warning lights',
            },
            {
                char: 'd',
                text: 'Switch on the rear fog lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6868',
        topicCode: 'The driver',
        question:
            'Your vehicle is fitted with a hand-held telephone. What should you do before taking or making a call?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Find a safe place to stop',
            },
            {
                char: 'b',
                text: 'Reduce your speed to less than 30 mph',
            },
            {
                char: 'c',
                text: 'Steer your vehicle with one hand',
            },
            {
                char: 'd',
                text: 'Be very careful when dealing with junctions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6869',
        topicCode: 'The driver',
        question:
            'A mobile telephone is fitted to your vehicle. When should it be used?',
        questionImg: 'VL2516.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you`re stopped in a safe place',
            },
            {
                char: 'b',
                text: 'When travelling slowly',
            },
            {
                char: 'c',
                text: 'When on a motorway',
            },
            {
                char: 'd',
                text: 'When in light traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6870',
        topicCode: 'The driver',
        question:
            'You approach a pelican crossing that goes straight across the road. How must you treat it if it has a central island?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'As one crossing in daylight only',
            },
            {
                char: 'b',
                text: 'As one continuous crossing',
            },
            {
                char: 'c',
                text: 'As two separate crossings',
            },
            {
                char: 'd',
                text: 'As two crossings during darkness',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6871',
        topicCode: 'The driver',
        question:
            'What does the flashing amber light mean at a pelican crossing?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop if you can do so safely',
            },
            {
                char: 'b',
                text: 'Give way to pedestrians already on the crossing',
            },
            {
                char: 'c',
                text: 'Stop and wait for the green light',
            },
            {
                char: 'd',
                text: 'Give way to pedestrians waiting to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6872',
        topicCode: 'The driver',
        question: 'What should you do at a zebra crossing?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Rev your engine to encourage pedestrians to cross quickly',
            },
            {
                char: 'b',
                text: 'Park only on the zigzag lines on the left',
            },
            {
                char: 'c',
                text: 'Always leave the crossing clear in traffic queues',
            },
            {
                char: 'd',
                text: 'Wave pedestrians to cross if you intend to wait for them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6879',
        topicCode: 'The driver',
        question:
            'A coach is overtaking you. What should you do when it`s safe for the coach to move back to the left?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Do nothing and let the driver decide',
            },
            {
                char: 'b',
                text: 'Switch your sidelights on and off',
            },
            {
                char: 'c',
                text: 'Flash your headlights once',
            },
            {
                char: 'd',
                text: 'Flash your headlights twice',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6881',
        topicCode: 'The driver',
        question:
            'What should you do when you`re being followed by an ambulance showing a flashing blue light? ',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop to let it pass as soon as it`s safe to do so ',
            },
            {
                char: 'b',
                text: 'Accelerate quickly to get away from it',
            },
            {
                char: 'c',
                text: 'Ignore it if possible, unless you`re forced to let it pass',
            },
            {
                char: 'd',
                text: 'Brake harshly and immediately to a stop in the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6882',
        topicCode: 'The driver',
        question:
            'Should you give way to a car showing a flashing green beacon?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Yes, because it`s a doctor going to an emergency',
            },
            {
                char: 'b',
                text: 'Yes, because it`s a fire-crew support vehicle',
            },
            {
                char: 'c',
                text: 'No, because it`s a slow-moving vehicle',
            },
            {
                char: 'd',
                text: 'No, because it`s a breakdown vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6883',
        topicCode: 'The driver',
        question: 'What type of emergency vehicle has a green flashing beacon?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Fire engine',
            },
            {
                char: 'b',
                text: 'Road gritter',
            },
            {
                char: 'c',
                text: 'Ambulance',
            },
            {
                char: 'd',
                text: 'Doctor`s car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6887',
        topicCode: 'The driver',
        question:
            'You stop for pedestrians at a zebra crossing. What should you do if they don`t start to cross immediately?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Be patient and wait',
            },
            {
                char: 'b',
                text: 'Sound your horn',
            },
            {
                char: 'c',
                text: 'Drive on',
            },
            {
                char: 'd',
                text: 'Wave them to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6889',
        topicCode: 'The driver',
        question:
            'Why could it be dangerous to wave people across at pedestrian crossings?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'There may be another vehicle coming',
            },
            {
                char: 'b',
                text: 'They may be distracted',
            },
            {
                char: 'c',
                text: 'They may not see your signal',
            },
            {
                char: 'd',
                text: 'They may not be ready to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6890',
        topicCode: 'The driver',
        question:
            'What danger should you be most aware of if you`re driving close to the kerb in a busy shopping area?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The nearside mirror striking the heads of pedestrians',
            },
            {
                char: 'b',
                text: 'The amount of fuel being used when driving slowly',
            },
            {
                char: 'c',
                text: 'Solid white line markings in the centre of the road',
            },
            {
                char: 'd',
                text: 'Traffic lights that may suddenly change to green',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6893',
        topicCode: 'The driver',
        question:
            'Which of these is an unsafe place to park your vehicle or trailer?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At an overnight service area',
            },
            {
                char: 'b',
                text: 'Near the brow of a hill ',
            },
            {
                char: 'c',
                text: 'In the yard at a factory ',
            },
            {
                char: 'd',
                text: 'In a lay-by in a built-up area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6894',
        topicCode: 'The driver',
        question: 'What must you check before setting out on a journey?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your mirrors are tinted',
            },
            {
                char: 'b',
                text: 'Your mirrors are convex',
            },
            {
                char: 'c',
                text: 'Your mirrors are concave',
            },
            {
                char: 'd',
                text: 'Your mirrors are clean',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6896',
        topicCode: 'The driver',
        question:
            'A group of schoolchildren are standing close to the left-hand kerb. What should you do as you drive past?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Check your offside mirror',
            },
            {
                char: 'b',
                text: 'Check your nearside mirror',
            },
            {
                char: 'c',
                text: 'Switch on your headlights',
            },
            {
                char: 'd',
                text: 'Switch on your hazard warning lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6897',
        topicCode: 'The driver',
        question:
            'You`re driving at the legal speed limit.\nWhat should you do if a vehicle comes up quickly behind, flashing its headlights?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Accelerate to maintain a gap behind you',
            },
            {
                char: 'b',
                text: 'Touch the brake pedal sharply to show your brake lights',
            },
            {
                char: 'c',
                text: 'Maintain your speed and prevent the vehicle from overtaking',
            },
            {
                char: 'd',
                text: 'Allow the vehicle to overtake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6899',
        topicCode: 'The driver',
        question:
            'What should you do when a vehicle pulls out in front of you at a junction?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Swerve past it and sound your horn',
            },
            {
                char: 'b',
                text: 'Flash your headlights and drive up close behind',
            },
            {
                char: 'c',
                text: 'Slow down and be ready to stop',
            },
            {
                char: 'd',
                text: 'Accelerate past it immediately',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6905',
        topicCode: 'The driver',
        question: 'How is drinking alcohol likely to affect your driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You`ll have faster reactions',
            },
            {
                char: 'b',
                text: 'You`ll become colour-blind',
            },
            {
                char: 'c',
                text: 'You`ll feel more confident',
            },
            {
                char: 'd',
                text: 'You`ll be able to concentrate better',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6907',
        topicCode: 'The driver',
        question:
            'What can seriously affect your concentration while you`re driving?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Contact lenses',
            },
            {
                char: 'b',
                text: 'Fresh air',
            },
            {
                char: 'c',
                text: 'Tinted windows',
            },
            {
                char: 'd',
                text: 'Tiredness',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6908',
        topicCode: 'The driver',
        question: 'How does alcohol affect your driving?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It speeds up your reactions',
            },
            {
                char: 'b',
                text: 'It increases your awareness',
            },
            {
                char: 'c',
                text: 'It improves your coordination',
            },
            {
                char: 'd',
                text: 'It reduces your concentration',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6909',
        topicCode: 'The driver',
        question:
            'You`ve been convicted of driving while unfit through drink or drugs. What will increase in cost when you start driving again?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Vehicle tax',
            },
            {
                char: 'b',
                text: 'Insurance premiums',
            },
            {
                char: 'c',
                text: 'Vehicle test certificate',
            },
            {
                char: 'd',
                text: 'Driving licence',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6910',
        topicCode: 'The driver',
        question:
            'What should you do if you`ve had a few alcoholic drinks at a party?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Have a strong cup of coffee and then drive home',
            },
            {
                char: 'b',
                text: 'Drive home carefully and slowly',
            },
            {
                char: 'c',
                text: 'Go home by public transport',
            },
            {
                char: 'd',
                text: 'Wait a short while and then drive home',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6911',
        topicCode: 'The driver',
        question:
            'As a driver, what should you do when you attend a social event?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drink plenty of coffee after drinking alcohol',
            },
            {
                char: 'b',
                text: 'Avoid busy roads after drinking alcohol',
            },
            {
                char: 'c',
                text: 'Avoid drinking alcohol completely',
            },
            {
                char: 'd',
                text: 'Avoid drinking alcohol on an empty stomach',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6912',
        topicCode: 'The driver',
        question:
            'It`s been eight hours since you last had an alcoholic drink. What effect could the alcohol have on your driving?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You may still be over the legal drink-drive limit',
            },
            {
                char: 'b',
                text: 'You`ll have no alcohol in your system',
            },
            {
                char: 'c',
                text: 'Your driving won`t be impaired',
            },
            {
                char: 'd',
                text: 'You can`t be breathalysed ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6913',
        topicCode: 'The driver',
        question:
            'Your doctor has given you a course of medicine. Why should you ask whether it`s safe to drive?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drugs make you a better driver by quickening your reactions',
            },
            {
                char: 'b',
                text: 'You`ll have to let your insurance company know about the medicine',
            },
            {
                char: 'c',
                text: 'Some types of medicine can cause your reactions to slow down',
            },
            {
                char: 'd',
                text: 'The medicine you take may affect your hearing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6914',
        topicCode: 'The driver',
        question:
            'You`ve been taking medicine for a few days, and it has made you feel drowsy. Today you feel better, but you still need to take the medicine. When should you drive?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only if your journey is necessary',
            },
            {
                char: 'b',
                text: 'Only at night on quiet roads',
            },
            {
                char: 'c',
                text: 'Only if someone goes with you',
            },
            {
                char: 'd',
                text: 'Only after checking with your doctor',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6915',
        topicCode: 'The driver',
        question:
            'What should you do if you aren`t sure whether your cough medicine will affect your driving?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Ask your doctor for advice',
            },
            {
                char: 'b',
                text: 'Drive a little more slowly',
            },
            {
                char: 'c',
                text: 'Drive if you feel all right',
            },
            {
                char: 'd',
                text: 'Ask a friend for advice',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6916',
        topicCode: 'The driver',
        question:
            'You take some cough medicine given to you by a friend. What must you do before driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drink some strong coffee',
            },
            {
                char: 'b',
                text: 'Ask your friend whether taking the medicine affected their driving',
            },
            {
                char: 'c',
                text: 'Check the label to see whether the medicine will affect your driving',
            },
            {
                char: 'd',
                text: 'Make a short journey to see whether the medicine is affecting your driving',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6917',
        topicCode: 'The driver',
        question:
            'What should you do if you`re driving along a motorway and become tired?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder at a safe place to rest',
            },
            {
                char: 'b',
                text: 'Leave the motorway at the next exit and take a rest',
            },
            {
                char: 'c',
                text: 'Close your windows and turn up the radio volume',
            },
            {
                char: 'd',
                text: 'Close your windows and set the heating to warm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6918',
        topicCode: 'The driver',
        question:
            'You`re about to drive home. What should you do if you feel very tired and have a severe headache?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Wait until you`re fit and well before driving',
            },
            {
                char: 'b',
                text: 'Drive home, but take painkiller tablets',
            },
            {
                char: 'c',
                text: 'Drive home if you can stay awake for the journey',
            },
            {
                char: 'd',
                text: 'Wait for a short time, then drive home slowly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6919',
        topicCode: 'The driver',
        question:
            'What should you do if you`re feeling tired but there`s nowhere to stop safely?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increase your speed to find a stopping place more quickly',
            },
            {
                char: 'b',
                text: 'Ensure a supply of fresh air',
            },
            {
                char: 'c',
                text: 'Gently tap the steering wheel',
            },
            {
                char: 'd',
                text: 'Keep changing speed to improve your concentration',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6920',
        topicCode: 'The driver',
        question: 'When will your reactions be slower?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When driving while you`re tired',
            },
            {
                char: 'b',
                text: 'When driving in fog',
            },
            {
                char: 'c',
                text: 'When driving too quickly',
            },
            {
                char: 'd',
                text: 'When driving in rain',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6925',
        topicCode: 'The driver',
        question:
            'What should you do if you`re taking medication that could affect your driving?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Seek medical advice',
            },
            {
                char: 'b',
                text: 'Make short journeys only',
            },
            {
                char: 'c',
                text: 'Drive only at night',
            },
            {
                char: 'd',
                text: 'Drink plenty of water',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6928',
        topicCode: 'The driver',
        question:
            'What should you do if you feel tired while driving on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder for a rest',
            },
            {
                char: 'b',
                text: 'Carry on, but drive slowly',
            },
            {
                char: 'c',
                text: 'Leave the motorway at the next exit',
            },
            {
                char: 'd',
                text: 'Try to complete your journey more quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6929',
        topicCode: 'The driver',
        question:
            'You`ve driven a long distance and feel tired. Your tachograph shows that you haven`t exceeded your driving hours. What should you do in these circumstances?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Park in a suitable place and rest',
            },
            {
                char: 'b',
                text: 'Reduce your speed and drive more slowly',
            },
            {
                char: 'c',
                text: 'Carry on driving to use up your hours',
            },
            {
                char: 'd',
                text: 'Increase your speed and reduce your journey time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6932',
        topicCode: 'The driver',
        question: 'What might misuse of drugs or alcohol lead to?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Better concentration ',
            },
            {
                char: 'b',
                text: 'Better eyesight',
            },
            {
                char: 'c',
                text: 'Withdrawal of a driving licence',
            },
            {
                char: 'd',
                text: 'Faster reactions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7040',
        topicCode: 'The driver',
        question:
            'What should you do if a front tyre bursts while you`re driving on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Loosen your grip on the steering wheel',
            },
            {
                char: 'b',
                text: 'Brake firmly to a stop',
            },
            {
                char: 'c',
                text: 'Hold the steering wheel firmly',
            },
            {
                char: 'd',
                text: 'Drive to the next service area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7047',
        topicCode: 'The driver',
        question:
            'Your vehicle breaks down on a motorway and you need to call for help. Why may it be better to use an emergency roadside telephone rather than a mobile phone?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It connects you to a local garage',
            },
            {
                char: 'b',
                text: 'Using a mobile phone will distract other drivers',
            },
            {
                char: 'c',
                text: 'It allows easy location by the emergency services',
            },
            {
                char: 'd',
                text: 'Mobile phones don`t work on motorways',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7050',
        topicCode: 'The driver',
        question:
            'When are you most likely to lose concentration while you`re driving?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you use a mobile phone',
            },
            {
                char: 'b',
                text: 'When you switch on the windscreen wipers',
            },
            {
                char: 'c',
                text: 'When you switch on the heated rear window',
            },
            {
                char: 'd',
                text: 'When you look at the door mirrors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7051',
        topicCode: 'The driver',
        question:
            'What should you do if you want to make a business call on your mobile phone while you`re driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Make the call but take extra care',
            },
            {
                char: 'b',
                text: 'Use the cruise control while you`re making the call',
            },
            {
                char: 'c',
                text: 'Stop in a safe place before making the call',
            },
            {
                char: 'd',
                text: 'Reduce speed while you make the call',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7054',
        topicCode: 'The driver',
        question:
            'You`re driving on a single carriageway. When may you use your mobile phone?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Only when you`re receiving a call',
            },
            {
                char: 'b',
                text: 'Only when you`re suitably parked',
            },
            {
                char: 'c',
                text: 'Only when you`re driving at less than 30 mph',
            },
            {
                char: 'd',
                text: 'Only when you`re driving an automatic vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7055',
        topicCode: 'The driver',
        question: 'What effect will using a mobile phone have on your driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your vehicle will be harder to steer',
            },
            {
                char: 'b',
                text: 'Your field of vision will be reduced',
            },
            {
                char: 'c',
                text: 'Your attention will be diverted from the road',
            },
            {
                char: 'd',
                text: 'Your vehicle`s electronic systems will be disrupted',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7056',
        topicCode: 'The driver',
        question:
            'Your vehicle breaks down on the hard shoulder of a motorway. What should you do if you decide to use your mobile phone to call for help?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stand at the rear of the vehicle while making the call',
            },
            {
                char: 'b',
                text: 'Use the speed-dial function to save time',
            },
            {
                char: 'c',
                text: 'Set the tachograph to `Other work` before making the call',
            },
            {
                char: 'd',
                text: 'Check your location from the marker posts on the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7057',
        topicCode: 'The driver',
        question:
            'How should you answer a mobile phone call while you`re driving?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reduce your speed wherever you are',
            },
            {
                char: 'b',
                text: 'Stop safely before answering',
            },
            {
                char: 'c',
                text: 'Keep one hand on the steering wheel',
            },
            {
                char: 'd',
                text: 'Slow down and allow others to overtake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7074',
        topicCode: 'The driver',
        question:
            'You`re overtaking a lorry. What should you do if you see the driver flash their headlights?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Move back to the left when you judge it`s safe to do so',
            },
            {
                char: 'b',
                text: 'Take their signal to mean it`s safe to move back to the left',
            },
            {
                char: 'c',
                text: 'Stop; there must be something wrong with your vehicle',
            },
            {
                char: 'd',
                text: 'Flash your hazard warning lights and move back to the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7075',
        topicCode: 'The driver',
        question:
            'A bus has stopped at a bus stop ahead of you. What should you do if its right-hand indicator is flashing?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights and slow down',
            },
            {
                char: 'b',
                text: 'Slow down and give way if it`s safe to do so',
            },
            {
                char: 'c',
                text: 'Sound your horn and keep going',
            },
            {
                char: 'd',
                text: 'Slow down and then sound your horn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7076',
        topicCode: 'The driver',
        question:
            'You`ve stopped for an elderly pedestrian who`s slowly crossing the road. What should you do if traffic behind you is being held up?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Edge forward slowly and make them hurry',
            },
            {
                char: 'b',
                text: 'Stay where you are and allow them to cross in their own time',
            },
            {
                char: 'c',
                text: 'Steer slowly around them to ease the build-up of traffic',
            },
            {
                char: 'd',
                text: 'Get out of your vehicle and wave them across',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7077',
        topicCode: 'The driver',
        question:
            'How should you let other vehicles overtake when you`re driving a slow-moving vehicle along a narrow road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Maintain a steady speed',
            },
            {
                char: 'b',
                text: 'Wave them past ',
            },
            {
                char: 'c',
                text: 'Give a left-turn signal',
            },
            {
                char: 'd',
                text: 'Pull in when you can ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7082',
        topicCode: 'The driver',
        question:
            'How is using a hands-free phone likely to affect your driving?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It will improve your safety',
            },
            {
                char: 'b',
                text: 'It will increase your concentration ',
            },
            {
                char: 'c',
                text: 'It will reduce your view ',
            },
            {
                char: 'd',
                text: 'It will divert your attention ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7083',
        topicCode: 'The driver',
        question:
            'You`re driving on the motorway and want to use your mobile phone. What should you do before using it?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Reduce your speed to 40 mph',
            },
            {
                char: 'b',
                text: 'Stop on the hard shoulder',
            },
            {
                char: 'c',
                text: 'Move into the left-hand lane',
            },
            {
                char: 'd',
                text: 'Stop in a safe place when you can',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7084',
        topicCode: 'The driver',
        question: 'What effect will drinking alcohol have on your driving?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Better forward planning',
            },
            {
                char: 'b',
                text: 'A false sense of confidence',
            },
            {
                char: 'c',
                text: 'Faster reactions',
            },
            {
                char: 'd',
                text: 'Greater awareness of danger',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7102',
        topicCode: 'The driver',
        question:
            'You`re driving on a motorway. There`s been a collision on the opposite carriageway. What should you do if drivers ahead are slowing to look?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Concentrate on the road ahead',
            },
            {
                char: 'b',
                text: 'Slow down to take a look',
            },
            {
                char: 'c',
                text: 'Stop on the hard shoulder',
            },
            {
                char: 'd',
                text: 'Overtake using the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7116',
        topicCode: 'The driver',
        question:
            'What do you need to be aware of when driving a vehicle fitted with power-assisted steering? ',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It causes less tyre wear',
            },
            {
                char: 'b',
                text: 'It prevents you from oversteering',
            },
            {
                char: 'c',
                text: 'It makes it easier for you to steer',
            },
            {
                char: 'd',
                text: 'It only works at high speeds',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7148',
        topicCode: 'The driver',
        question:
            'What should you do if a car driver makes a mistake that causes you to brake?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep calm and don`t retaliate',
            },
            {
                char: 'b',
                text: 'Overtake and sound your horn',
            },
            {
                char: 'c',
                text: 'Drive close behind and sound your horn',
            },
            {
                char: 'd',
                text: 'Flag the driver down and explain the mistake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7149',
        topicCode: 'The driver',
        question:
            'What should you do if you`re upset by another driver`s behaviour?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop and take a break',
            },
            {
                char: 'b',
                text: 'Shout abusive language',
            },
            {
                char: 'c',
                text: 'Gesture to them with your hand',
            },
            {
                char: 'd',
                text: 'Follow them, flashing your headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7150',
        topicCode: 'The driver',
        question:
            'What should you do if another driver does something that upsets you?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stay calm and don`t retaliate',
            },
            {
                char: 'b',
                text: 'Let them know how you feel',
            },
            {
                char: 'c',
                text: 'Flash your headlights several times',
            },
            {
                char: 'd',
                text: 'Sound your horn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7178',
        topicCode: 'The driver',
        question:
            'You`re driving in fast-moving traffic along a motorway. What should you do if there`s a stationary queue of traffic ahead?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Move to the hard shoulder',
            },
            {
                char: 'b',
                text: 'Change lanes',
            },
            {
                char: 'c',
                text: 'Switch on your rear fog lights',
            },
            {
                char: 'd',
                text: 'Switch on your hazard warning lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7179',
        topicCode: 'The driver',
        question:
            'You`re turning right onto a dual carriageway from a side road. What should you do if your vehicle is too long for the gap in the central reservation?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move forward and wait in the middle',
            },
            {
                char: 'b',
                text: 'Wait until it`s clear in both directions',
            },
            {
                char: 'c',
                text: 'Move out, blocking traffic from the right',
            },
            {
                char: 'd',
                text: 'Edge out slowly so other traffic will see you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7180',
        topicCode: 'The driver',
        question:
            'You want to turn left at a junction. What affects the position you take up as you approach the junction?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The length of your vehicle',
            },
            {
                char: 'b',
                text: 'The axle weight of your vehicle',
            },
            {
                char: 'c',
                text: 'The camber of the road',
            },
            {
                char: 'd',
                text: 'The type of road surface',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7257',
        topicCode: 'The driver',
        question: 'What should you do when you have to travel a long distance?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow plenty of time for your journey',
            },
            {
                char: 'b',
                text: 'Plan to go at busy times',
            },
            {
                char: 'c',
                text: 'Avoid all national-speed-limit roads',
            },
            {
                char: 'd',
                text: 'Prevent other drivers from overtaking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7274',
        topicCode: 'The driver',
        question:
            'What can you do to help maintain concentration while you`re driving?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Eat sugary snacks when on duty',
            },
            {
                char: 'b',
                text: 'Have regular meals and rest breaks',
            },
            {
                char: 'c',
                text: 'Don`t eat at all when on duty',
            },
            {
                char: 'd',
                text: 'Avoid meals containing bread',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7280',
        topicCode: 'The driver',
        question:
            'What should you do to help your concentration when you have to drive through the night?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Eat lots of snacks while you`re driving ',
            },
            {
                char: 'b',
                text: 'Eat a big meal in the middle of your shift',
            },
            {
                char: 'c',
                text: 'Eat a meal at the beginning of your shift',
            },
            {
                char: 'd',
                text: 'Eat nothing during your period of work',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7305',
        topicCode: 'The driver',
        question: 'When is there a particular risk of sleep-related incidents?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Between midnight and 6 am',
            },
            {
                char: 'b',
                text: 'Between 11 pm and 2 am',
            },
            {
                char: 'c',
                text: 'Between 6 pm and 11 pm',
            },
            {
                char: 'd',
                text: 'Between 7 am and 2 pm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7330',
        topicCode: 'The driver',
        question:
            'Poor eating habits can increase your risk of long-term health problems. What may result from a poor diet?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Deafness',
            },
            {
                char: 'b',
                text: 'Epilepsy',
            },
            {
                char: 'c',
                text: 'Lung disease',
            },
            {
                char: 'd',
                text: 'Heart disease',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7341',
        topicCode: 'The driver',
        question:
            'What should you do when you`ve been driving for a long time and are fighting sleep?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop and rest',
            },
            {
                char: 'b',
                text: 'Open a window',
            },
            {
                char: 'c',
                text: 'Play loud music ',
            },
            {
                char: 'd',
                text: 'Stretch your arms ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7357',
        topicCode: 'The driver',
        question:
            'What should you try to do when your vehicle has a front-tyre blow-out?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Hold the steering wheel firmly and slow down gradually',
            },
            {
                char: 'b',
                text: 'Steer to the right-hand side and brake firmly',
            },
            {
                char: 'c',
                text: 'Don`t use your brakes under any circumstances',
            },
            {
                char: 'd',
                text: 'Brake hard and steer towards the affected side',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7358',
        topicCode: 'The driver',
        question: 'When can you drive without wearing a seat belt?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you hold a medical exemption certificate',
            },
            {
                char: 'b',
                text: 'When the seat belt is too large for your use',
            },
            {
                char: 'c',
                text: 'When you`re driving on a motorway',
            },
            {
                char: 'd',
                text: 'When the speed limit is 30 mph or less',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7364',
        topicCode: 'The driver',
        question:
            'How will your body clock affect your driving between midnight and 6.00 am?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You`re more likely to fall asleep at the wheel',
            },
            {
                char: 'b',
                text: 'You`re more likely to feel road rage',
            },
            {
                char: 'c',
                text: 'You`re more likely to break the speed limit',
            },
            {
                char: 'd',
                text: 'You`re more likely to drive too close to the vehicle in front',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7384',
        topicCode: 'The driver',
        question:
            'What`s provided specifically to protect you against neck and whiplash injuries?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'An air-sprung seat',
            },
            {
                char: 'b',
                text: 'Anti-lock brakes',
            },
            {
                char: 'c',
                text: 'A collapsible steering wheel',
            },
            {
                char: 'd',
                text: 'A head restraint',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8245',
        topicCode: 'The driver',
        question:
            'When are you allowed to drive a bus without wearing the seat belt?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When the seat belt is uncomfortable',
            },
            {
                char: 'b',
                text: 'When it`s a lap-only type of seat belt',
            },
            {
                char: 'c',
                text: 'When you`re reversing the vehicle',
            },
            {
                char: 'd',
                text: 'When your passengers are children',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8290',
        topicCode: 'The driver',
        question: 'What must be clearly displayed on your bus?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The route timetable',
            },
            {
                char: 'b',
                text: 'The location of all bus stops',
            },
            {
                char: 'c',
                text: 'The emergency-exit location',
            },
            {
                char: 'd',
                text: 'Your employee number',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8303',
        topicCode: 'The driver',
        question:
            'You`re driving on a dual carriageway. When would you use the nearside mirror?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To check that the driver`s door is closed properly',
            },
            {
                char: 'b',
                text: 'After overtaking, to see whether it`s safe to return to the left',
            },
            {
                char: 'c',
                text: 'To see whether any passengers want the next bus stop',
            },
            {
                char: 'd',
                text: 'To look for following traffic moving out to overtake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8317',
        topicCode: 'The driver',
        question:
            'What should you do while you`re driving a bus in a built-up area?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep junctions clear',
            },
            {
                char: 'b',
                text: 'Reduce your stopping distance',
            },
            {
                char: 'c',
                text: 'Stay ahead of cyclists and motorcyclists',
            },
            {
                char: 'd',
                text: 'Allow less time for passengers to board',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8033',
        topicCode: 'Carrying passengers',
        question: 'What`s your main responsibility as a bus driver?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The safety and comfort of your passengers',
            },
            {
                char: 'b',
                text: 'Keeping to a strict timetable',
            },
            {
                char: 'c',
                text: 'The collecting of fares',
            },
            {
                char: 'd',
                text: 'The issuing of tickets',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8034',
        topicCode: 'Carrying passengers',
        question: 'How can a bus driver show care for their passengers?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'By taking fares while moving, to save time',
            },
            {
                char: 'b',
                text: 'By reaching destinations early',
            },
            {
                char: 'c',
                text: 'By not speaking when taking fares',
            },
            {
                char: 'd',
                text: 'By stopping close to the kerb',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8035',
        topicCode: 'Carrying passengers',
        question:
            'What`s the main reason for using smooth acceleration when you`re driving a bus?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To reduce wear on the tyres',
            },
            {
                char: 'b',
                text: 'To reduce wear on the engine',
            },
            {
                char: 'c',
                text: 'To improve fuel consumption',
            },
            {
                char: 'd',
                text: 'To improve passenger comfort',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8037',
        topicCode: 'Carrying passengers',
        question: 'How can you avoid harsh braking?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Pump the brakes when approaching a bus stop ',
            },
            {
                char: 'b',
                text: 'Use only the gears to slow down',
            },
            {
                char: 'c',
                text: 'Use the parking brake just before stopping ',
            },
            {
                char: 'd',
                text: 'Plan ahead and take early action on all stops ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8038',
        topicCode: 'Carrying passengers',
        question:
            'Where are passengers likely to be thrown when a bus driver brakes harshly?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To the front of the bus',
            },
            {
                char: 'b',
                text: 'To the rear of the bus',
            },
            {
                char: 'c',
                text: 'To the nearside',
            },
            {
                char: 'd',
                text: 'To the offside',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8039',
        topicCode: 'Carrying passengers',
        question: 'How can you avoid harsh braking?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Gently apply the parking brake',
            },
            {
                char: 'b',
                text: 'Plan ahead and take early action',
            },
            {
                char: 'c',
                text: 'Slow down by using your gears only',
            },
            {
                char: 'd',
                text: 'Pump the brake pedal several times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8040',
        topicCode: 'Carrying passengers',
        question:
            'When would passengers be most likely to notice weight transfer?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When the vehicle is parking',
            },
            {
                char: 'b',
                text: 'When the vehicle is cornering',
            },
            {
                char: 'c',
                text: 'When the vehicle is reversing',
            },
            {
                char: 'd',
                text: 'When the vehicle is overtaking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8041',
        topicCode: 'Carrying passengers',
        question:
            'Well ahead of you are traffic lights on green. What should you do in case the lights change to red?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Accelerate to make sure you can cross before they change',
            },
            {
                char: 'b',
                text: 'Slow down to avoid the need to stop suddenly',
            },
            {
                char: 'c',
                text: 'Accelerate, but warn your passengers you may have to stop',
            },
            {
                char: 'd',
                text: 'Carry on at a constant speed, but be ready to sound your horn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8043',
        topicCode: 'Carrying passengers',
        question: 'Why should a bus driver avoid stopping harshly?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To preserve the tyres',
            },
            {
                char: 'b',
                text: 'To avoid wear on the brakes',
            },
            {
                char: 'c',
                text: 'To keep the passengers safe',
            },
            {
                char: 'd',
                text: 'To stop the suspension bouncing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8044',
        topicCode: 'Carrying passengers',
        question:
            'Where may passengers be thrown when a bus takes a bend too fast?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Towards the outside of the bend',
            },
            {
                char: 'b',
                text: 'Towards the inside of the bend',
            },
            {
                char: 'c',
                text: 'Towards the front of the bus',
            },
            {
                char: 'd',
                text: 'Towards the rear of the bus',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8045',
        topicCode: 'Carrying passengers',
        question:
            'What would contribute to the safety and comfort of your passengers?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Giving change on the move',
            },
            {
                char: 'b',
                text: 'Driving with the door open',
            },
            {
                char: 'c',
                text: 'Thinking and planning well ahead',
            },
            {
                char: 'd',
                text: 'Braking hard before reaching a bend',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8046',
        topicCode: 'Carrying passengers',
        question:
            'What should you be most aware of before moving off from a standstill?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Passengers making phone calls',
            },
            {
                char: 'b',
                text: 'Passengers smoking on the bus',
            },
            {
                char: 'c',
                text: 'Passengers asking you directions',
            },
            {
                char: 'd',
                text: 'Passengers getting off the bus',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8049',
        topicCode: 'Carrying passengers',
        question:
            'Your bus is fitted with seat belts. When should passengers wear them?\n',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'During journeys of more than 20 minutes',
            },
            {
                char: 'b',
                text: 'Only when travelling in EU countries',
            },
            {
                char: 'c',
                text: 'Only when travelling on motorways',
            },
            {
                char: 'd',
                text: 'At all times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8050',
        topicCode: 'Carrying passengers',
        question: 'Which of these is a legal requirement for every bus?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A fire extinguisher',
            },
            {
                char: 'b',
                text: 'A current timetable',
            },
            {
                char: 'c',
                text: 'A mobile phone or radio',
            },
            {
                char: 'd',
                text: 'A working tachograph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8051',
        topicCode: 'Carrying passengers',
        question: 'What must be clearly labelled on a bus?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The location of the air vents',
            },
            {
                char: 'b',
                text: 'The location of the first-aid equipment',
            },
            {
                char: 'c',
                text: 'The location of the security cameras',
            },
            {
                char: 'd',
                text: 'The location of the bus station',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8053',
        topicCode: 'Carrying passengers',
        question:
            'A passenger is boarding your bus. What does it mean if they`re carrying a white stick with a red ring painted on it?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They have a learning difficulty',
            },
            {
                char: 'b',
                text: 'They have poor vision and hearing',
            },
            {
                char: 'c',
                text: 'They have a physical disability',
            },
            {
                char: 'd',
                text: 'They have a speech problem',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8056',
        topicCode: 'Carrying passengers',
        question:
            'What should a bus driver do to help passengers have a good journey?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep to the timetable regardless of comfort',
            },
            {
                char: 'b',
                text: 'Drive on before people are seated',
            },
            {
                char: 'c',
                text: 'Look ahead when issuing tickets',
            },
            {
                char: 'd',
                text: 'Be courteous and polite',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8057 ',
        topicCode: 'Carrying passengers',
        question:
            'Why should you look at passengers when you`re collecting fares from them?',
        questionImg: 'VB3508.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To see if they`re carrying bags',
            },
            {
                char: 'b',
                text: 'To remove the threat of violence',
            },
            {
                char: 'c',
                text: 'To be courteous and polite',
            },
            {
                char: 'd',
                text: 'To show them you`re in charge',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8058',
        topicCode: 'Carrying passengers',
        question:
            'What should you do when dealing with passengers who have hearing difficulties?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Shout as loudly as you can',
            },
            {
                char: 'b',
                text: 'Ask another passenger to help them',
            },
            {
                char: 'c',
                text: 'Hurry to get them to their seats',
            },
            {
                char: 'd',
                text: 'Look at them when speaking to them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8060',
        topicCode: 'Carrying passengers',
        question: 'What`s the purpose of a kneeling bus?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To improve passenger comfort on bumpy roads',
            },
            {
                char: 'b',
                text: 'To help with access under low bridges',
            },
            {
                char: 'c',
                text: 'To allow the step height to be raised and lowered',
            },
            {
                char: 'd',
                text: 'To give more clearance over speed ramps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8061 ',
        topicCode: 'Carrying passengers',
        question:
            'Why would this sign be fitted to the front and rear of a bus?',
        questionImg: 'TS4546.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The bus may be carrying children',
            },
            {
                char: 'b',
                text: 'Children must be accompanied by an adult',
            },
            {
                char: 'c',
                text: 'The bus is carrying blind people',
            },
            {
                char: 'd',
                text: 'The driver will help disabled people',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8063 ',
        topicCode: 'Carrying passengers',
        question:
            'You`re driving a bus displaying this sign. When can you use its hazard warning lights?',
        questionImg: 'TS4546.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When stopped at a pedestrian crossing',
            },
            {
                char: 'b',
                text: 'When children are getting on or off the vehicle',
            },
            {
                char: 'c',
                text: 'When approaching a school crossing patrol',
            },
            {
                char: 'd',
                text: 'When there`s a sign warning of a school ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8067',
        topicCode: 'Carrying passengers',
        question:
            'Your bus has broken down at night. Why should you move your passengers to the front of the bus?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To keep the bus stable',
            },
            {
                char: 'b',
                text: 'To help you see clearly out of the back window',
            },
            {
                char: 'c',
                text: 'To limit injuries in the event of a rear-end collision',
            },
            {
                char: 'd',
                text: 'To keep them informed about the breakdown',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8069',
        topicCode: 'Carrying passengers',
        question:
            'What should you do when you`re driving a coach at night and you have passengers on board?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop more often',
            },
            {
                char: 'b',
                text: 'Switch off the radio',
            },
            {
                char: 'c',
                text: 'Keep the interior lit',
            },
            {
                char: 'd',
                text: 'Close the curtains',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8070 ',
        topicCode: 'Carrying passengers',
        question:
            'What should you do if there`s a fire on the upper deck of your bus?',
        questionImg: 'VB3506.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move all the passengers to the lower deck',
            },
            {
                char: 'b',
                text: 'Get all the passengers off the bus',
            },
            {
                char: 'c',
                text: 'Make sure passengers have their belongings',
            },
            {
                char: 'd',
                text: 'Open all the windows on the upper deck',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8179',
        topicCode: 'Carrying passengers',
        question: 'What are kneeling buses designed to improve?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Access for the driver',
            },
            {
                char: 'b',
                text: 'Access to the luggage bay',
            },
            {
                char: 'c',
                text: 'Access for passengers',
            },
            {
                char: 'd',
                text: 'Access for maintenance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8186',
        topicCode: 'Carrying passengers',
        question:
            'You`re driving a bus carrying passengers at night. Why should you always switch on the interior lights?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It will help you see the road ahead',
            },
            {
                char: 'b',
                text: 'So that passengers can see to move around',
            },
            {
                char: 'c',
                text: 'It will help passengers to see outside ',
            },
            {
                char: 'd',
                text: 'So that you can see your controls',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8194',
        topicCode: 'Carrying passengers',
        question:
            'Which passengers should you especially watch for as you move off?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Those smoking in the lower saloon',
            },
            {
                char: 'b',
                text: 'Those standing in the upper saloon',
            },
            {
                char: 'c',
                text: 'Those avoiding paying the correct fare',
            },
            {
                char: 'd',
                text: 'Those attempting to board the bus',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8196',
        topicCode: 'Carrying passengers',
        question:
            'What could you do to help a passenger who has difficulty walking?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drive quickly, so that the passenger has a shorter journey',
            },
            {
                char: 'b',
                text: 'Wait until the passenger has sat down before moving away',
            },
            {
                char: 'c',
                text: 'Make sure the passenger has a window seat',
            },
            {
                char: 'd',
                text: 'Suggest that the passenger stands near the door',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8219',
        topicCode: 'Carrying passengers',
        question:
            'You`re the driver of a bus displaying reflective yellow school-bus signs. When are you allowed to use hazard warning lights?',
        questionImg: 'TS4546.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When parked to take a rest period',
            },
            {
                char: 'b',
                text: 'When children are boarding the bus',
            },
            {
                char: 'c',
                text: 'When slowing down to approach a bus stop',
            },
            {
                char: 'd',
                text: 'When slowing down to find a parking space',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8231',
        topicCode: 'Carrying passengers',
        question:
            'You`re parking your coach at a coastal resort. What should you do if your passengers will still have access to the vehicle?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Ask the passengers to take all of their belongings',
            },
            {
                char: 'b',
                text: 'Park with the gear lever in neutral',
            },
            {
                char: 'c',
                text: 'Ensure the storage lockers are left open',
            },
            {
                char: 'd',
                text: 'Leave a responsible person on the coach',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8233',
        topicCode: 'Carrying passengers',
        question:
            'What should you be especially aware of while you`re driving a double-deck bus on a road with a steep camber? ',
        questionImg: 'VB3501.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Lampposts',
            },
            {
                char: 'b',
                text: 'Parking meters',
            },
            {
                char: 'c',
                text: 'Parked cars',
            },
            {
                char: 'd',
                text: 'Litter bins',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8235',
        topicCode: 'Carrying passengers',
        question:
            'What`s the likely weight difference between an empty bus and a bus with 75 passengers on board?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '5 tonnes',
            },
            {
                char: 'b',
                text: '10 tonnes',
            },
            {
                char: 'c',
                text: '15 tonnes',
            },
            {
                char: 'd',
                text: '20 tonnes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8236',
        topicCode: 'Carrying passengers',
        question:
            'It`s important to be able to work out the weight difference between a full bus and an empty one. How many passengers will add about 1 tonne to the vehicle`s overall weight?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '8',
            },
            {
                char: 'b',
                text: '15',
            },
            {
                char: 'c',
                text: '25',
            },
            {
                char: 'd',
                text: '30',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8242',
        topicCode: 'Carrying passengers',
        question:
            'What must buses and coaches display when they`re used for school contract work?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'School-bus signs',
            },
            {
                char: 'b',
                text: 'Flashing amber beacons',
            },
            {
                char: 'c',
                text: 'Triangular warning signs',
            },
            {
                char: 'd',
                text: '`No overtaking` signs',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8276',
        topicCode: 'Carrying passengers',
        question:
            'What do you have to be aware of when driving a double-deck bus on a road that has a steep camber?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '`Keep left` islands',
            },
            {
                char: 'b',
                text: 'A smooth road surface',
            },
            {
                char: 'c',
                text: 'Pedestrian crossings',
            },
            {
                char: 'd',
                text: 'Overhanging trees',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8277',
        topicCode: 'Carrying passengers',
        question: 'What does good passenger care include?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Making criticisms of other road users',
            },
            {
                char: 'b',
                text: 'Providing a commentary on the route',
            },
            {
                char: 'c',
                text: 'Talking to passengers while driving',
            },
            {
                char: 'd',
                text: 'Helping passengers who need directions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8278',
        topicCode: 'Carrying passengers',
        question:
            'Your bus is fitted with lifts or ramps for less mobile passengers. Who should operate this equipment?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Wheelchair attendants',
            },
            {
                char: 'b',
                text: 'Fully trained people',
            },
            {
                char: 'c',
                text: 'Bus-company employees',
            },
            {
                char: 'd',
                text: 'Accompanying nurses',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8284',
        topicCode: 'Carrying passengers',
        question: 'What does a kneeling bus improve?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Access for disabled people',
            },
            {
                char: 'b',
                text: 'Stability when cornering',
            },
            {
                char: 'c',
                text: 'Passenger comfort at higher speeds',
            },
            {
                char: 'd',
                text: 'Access for the driver',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8285',
        topicCode: 'Carrying passengers',
        question:
            'Your double-deck bus breaks down on a busy road. Where should you ask your passengers to move to?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The rear of the bus',
            },
            {
                char: 'b',
                text: 'The top deck',
            },
            {
                char: 'c',
                text: 'The lower deck',
            },
            {
                char: 'd',
                text: 'The front of the bus',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8286',
        topicCode: 'Carrying passengers',
        question:
            'What should you watch for when you drive away from a bus stop?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Passengers who avoid paying the correct fare',
            },
            {
                char: 'b',
                text: 'Passengers smoking in the lower saloon',
            },
            {
                char: 'c',
                text: 'Passengers leaving the bus',
            },
            {
                char: 'd',
                text: 'Passengers using expired travel passes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8287',
        topicCode: 'Carrying passengers',
        question:
            'What must you do before moving off when you`re driving a service bus?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Finish issuing tickets to passengers',
            },
            {
                char: 'b',
                text: 'Ensure your fuel tank is above a quarter full',
            },
            {
                char: 'c',
                text: 'Take off your sunglasses',
            },
            {
                char: 'd',
                text: 'Make sure all passengers have a seat',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8289',
        topicCode: 'Carrying passengers',
        question:
            'Your bus breaks down on the motorway. What should you do if it isn`t feasible to remove your passengers from the vehicle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move passengers to the rear of the bus',
            },
            {
                char: 'b',
                text: 'Move passengers to the front of the bus',
            },
            {
                char: 'c',
                text: 'Move passengers to the middle of the bus',
            },
            {
                char: 'd',
                text: 'Tell passengers to stay in the same seats',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8299',
        topicCode: 'Carrying passengers',
        question: 'What`s a bus driver`s first priority?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The safety and comfort of passengers',
            },
            {
                char: 'b',
                text: 'Keeping to the timetable',
            },
            {
                char: 'c',
                text: 'Completing tachograph records correctly',
            },
            {
                char: 'd',
                text: 'Making sure the destination is clearly marked',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8301',
        topicCode: 'Carrying passengers',
        question:
            'You`re the driver of a one-person-operated double-deck bus. How do you stay aware of passengers on the top deck?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'By counting passengers up and down the staircase',
            },
            {
                char: 'b',
                text: 'By frequent checks upstairs while stopped at bus stops',
            },
            {
                char: 'c',
                text: 'By listening to passengers in the upstairs gangway when approaching bus stops',
            },
            {
                char: 'd',
                text: 'By making full use of the internal mirror system',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8302',
        topicCode: 'Carrying passengers',
        question:
            'You`re driving a double-deck bus. Why do you need to know if anyone is using the stairs?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The upper deck is only to be used when the lower deck is full',
            },
            {
                char: 'b',
                text: 'Tickets for the upper deck are more expensive',
            },
            {
                char: 'c',
                text: 'Passengers using the stairs could fall if the bus brakes or swerves',
            },
            {
                char: 'd',
                text: 'No-one under 18 years old may use the stairs',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8304',
        topicCode: 'Carrying passengers',
        question:
            'Where should you stop when you`re stopping to collect passengers at a bus stop?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Close to the kerb',
            },
            {
                char: 'b',
                text: 'Away from the kerb',
            },
            {
                char: 'c',
                text: 'After the bus stop',
            },
            {
                char: 'd',
                text: 'Before the bus stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8305',
        topicCode: 'Carrying passengers',
        question:
            'Where should you stop to make it easy for passengers leaving or joining your bus?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Next to soft grass',
            },
            {
                char: 'b',
                text: 'Alongside guard rails',
            },
            {
                char: 'c',
                text: 'Near parked cars',
            },
            {
                char: 'd',
                text: 'Close to the kerb',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8306',
        topicCode: 'Carrying passengers',
        question:
            'A bus stop is blocked and you can`t get into it. What`s the most important thing you should do before opening the exit door?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Try to get the bus stop cleared',
            },
            {
                char: 'b',
                text: 'Carry on to the next bus stop',
            },
            {
                char: 'c',
                text: 'Check for traffic on the left',
            },
            {
                char: 'd',
                text: 'Check for traffic on the right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8307',
        topicCode: 'Carrying passengers',
        question:
            'Several parked cars are blocking your bus stop. What should you do before allowing passengers to leave the bus?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move on to the next bus stop',
            },
            {
                char: 'b',
                text: 'Check it`s clear of traffic on the left',
            },
            {
                char: 'c',
                text: 'Try to find the car owners',
            },
            {
                char: 'd',
                text: 'Check it`s clear of traffic on the right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8308',
        topicCode: 'Carrying passengers',
        question: 'What should you do before allowing passengers off your bus?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Collect their used tickets',
            },
            {
                char: 'b',
                text: 'Activate an audible warning system',
            },
            {
                char: 'c',
                text: 'Check mirrors before opening doors',
            },
            {
                char: 'd',
                text: 'Ask if they have luggage to collect',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8309',
        topicCode: 'Carrying passengers',
        question:
            'Passengers may be in a hurry to get off the bus as you approach a bus stop. What should you do to reduce any dangers?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Insist that passengers stay seated until the bus stops',
            },
            {
                char: 'b',
                text: 'Stop just before the bus stop and let passengers get off',
            },
            {
                char: 'c',
                text: 'Let passengers on to the bus before letting passengers off',
            },
            {
                char: 'd',
                text: 'Keep the passenger doors closed until the bus has stopped',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8312',
        topicCode: 'Carrying passengers',
        question:
            'When can you drive a bus at night without having the interior lights switched on?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When the passengers want to sleep',
            },
            {
                char: 'b',
                text: 'When most passengers want the lights off',
            },
            {
                char: 'c',
                text: 'When there are no standing passengers',
            },
            {
                char: 'd',
                text: 'When there are no passengers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8313',
        topicCode: 'Carrying passengers',
        question:
            'You`re driving a bus in hot weather. Can the passenger door be left open to let in fresh air?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Yes, this is normal practice',
            },
            {
                char: 'b',
                text: 'No, unless all passengers are seated',
            },
            {
                char: 'c',
                text: 'Yes, unless carrying schoolchildren',
            },
            {
                char: 'd',
                text: 'No, this isn`t allowed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8314',
        topicCode: 'Carrying passengers',
        question: 'How would your bus benefit from an air suspension system?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Fuel consumption will be reduced',
            },
            {
                char: 'b',
                text: 'Passenger comfort will be increased',
            },
            {
                char: 'c',
                text: 'It will allow you to drive faster',
            },
            {
                char: 'd',
                text: 'Your brakes will be more effective',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8315',
        topicCode: 'Carrying passengers',
        question:
            'A disabled person is getting on your bus. What should you do if they`re having problems, but say they can manage?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Be prepared to move off',
            },
            {
                char: 'b',
                text: 'Smile and offer to help them',
            },
            {
                char: 'c',
                text: 'Ask them politely to hurry up',
            },
            {
                char: 'd',
                text: 'Do nothing; you can`t leave your seat',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8320',
        topicCode: 'Carrying passengers',
        question:
            'When may the built-in TV and video equipment be used on a coach?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When the coach is moving slowly',
            },
            {
                char: 'b',
                text: 'When it can`t be seen by the driver',
            },
            {
                char: 'c',
                text: 'During long motorway journeys',
            },
            {
                char: 'd',
                text: 'During a coach tour',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8333',
        topicCode: 'Carrying passengers',
        question:
            'What must be fitted to new buses, to benefit people with disabilities?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Internal mirror',
            },
            {
                char: 'b',
                text: 'Radio telephone',
            },
            {
                char: 'c',
                text: 'Automatic transmission',
            },
            {
                char: 'd',
                text: 'Priority seating',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8334',
        topicCode: 'Carrying passengers',
        question: 'Who should benefit from priority seating?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Those with heavy luggage',
            },
            {
                char: 'b',
                text: 'Those with a weekly pass',
            },
            {
                char: 'c',
                text: 'Those who get on first',
            },
            {
                char: 'd',
                text: 'Those with disabilities',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8345',
        topicCode: 'Carrying passengers',
        question:
            'A passenger using a wheelchair wants to get on your bus. When may you need to deny them access?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When the wheelchair won`t fit in the luggage rack ',
            },
            {
                char: 'b',
                text: 'When the boarding device has failed to work',
            },
            {
                char: 'c',
                text: 'When the passenger must remain in a wheelchair',
            },
            {
                char: 'd',
                text: 'When the heater on the vehicle isn`t working',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8351',
        topicCode: 'Carrying passengers',
        question:
            'Your bus is accessible to wheelchair users. In what situation can you refuse to allow them access?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When the designated space is occupied',
            },
            {
                char: 'b',
                text: 'When you`re running behind schedule',
            },
            {
                char: 'c',
                text: 'When traffic behind you will be held up',
            },
            {
                char: 'd',
                text: 'When you`re shortly due to take a break',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8352',
        topicCode: 'Carrying passengers',
        question:
            'You`re driving a school bus carrying children. When can you make physical contact with a passenger?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In a medical emergency',
            },
            {
                char: 'b',
                text: 'To prevent fare dodging',
            },
            {
                char: 'c',
                text: 'When carrying luggage',
            },
            {
                char: 'd',
                text: 'When fastening seat belts',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8354',
        topicCode: 'Carrying passengers',
        question:
            'What should you wear when making a walk-round check of your coach?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Ear protectors',
            },
            {
                char: 'b',
                text: 'Protective goggles',
            },
            {
                char: 'c',
                text: 'High-visibility vest',
            },
            {
                char: 'd',
                text: 'Face mask',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8355',
        topicCode: 'Carrying passengers',
        question:
            'You`re about to drive on a route where you`ll be picking up wheelchair users. What must be checked before leaving the depot?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The boarding device',
            },
            {
                char: 'b',
                text: 'The radio',
            },
            {
                char: 'c',
                text: 'The door seals',
            },
            {
                char: 'd',
                text: 'The heater',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8356',
        topicCode: 'Carrying passengers',
        question: 'When can you refuse access to a wheelchair user?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When the lift has stopped working ',
            },
            {
                char: 'b',
                text: 'When the wheelchair won`t fold up ',
            },
            {
                char: 'c',
                text: 'When the heater has stopped working ',
            },
            {
                char: 'd',
                text: 'When the wheelchair is too heavy to lift manually',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8357',
        topicCode: 'Carrying passengers',
        question:
            'Why may you be unable to allow a person in a wheelchair to enter your bus?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Passengers are standing in a wheelchair space and can`t move elsewhere ',
            },
            {
                char: 'b',
                text: 'You`ll take time to load the wheelchair and fall behind schedule ',
            },
            {
                char: 'c',
                text: 'The wheelchair passenger will have to stand up',
            },
            {
                char: 'd',
                text: 'You can`t collapse the wheelchair ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8360',
        topicCode: 'Carrying passengers',
        question:
            'You`re at a bus stop. What should you do if passengers are standing on the open platform?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Put the chain across the platform',
            },
            {
                char: 'b',
                text: 'Ask them to hold on tight',
            },
            {
                char: 'c',
                text: 'Move off but drive more slowly',
            },
            {
                char: 'd',
                text: 'Wait until they`re inside the bus',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5235',
        topicCode: 'The road',
        question:
            'What should you do when you overtake a cyclist on a two-way road? ',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pass closely, staying about 1 metre (3 feet 3 inches) from the kerb',
            },
            {
                char: 'b',
                text: 'Go past quickly and move back to the left sharply',
            },
            {
                char: 'c',
                text: 'Leave plenty of room and check your nearside mirror before returning to the left',
            },
            {
                char: 'd',
                text: 'Give a right-turn signal after you`ve moved out to overtake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5241',
        topicCode: 'The road',
        question:
            'Your lorry has a curtain-sided body. Your route will take you over several high-level bridges. Why should you check the weather forecast before starting your journey? ',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Rain can make crossing bridges very difficult for large vehicles',
            },
            {
                char: 'b',
                text: 'In hot weather, the bridges might be closed to heavy traffic',
            },
            {
                char: 'c',
                text: 'You won`t be able to cross the bridges if it`s frosty',
            },
            {
                char: 'd',
                text: 'High-level bridges may be closed to certain vehicles in windy weather',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5248',
        topicCode: 'The road',
        question:
            'What should you do when you want to join a motorway where traffic is flowing freely?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Keep to a low speed until you see a gap on the motorway',
            },
            {
                char: 'b',
                text: 'Build up your speed on the slip road before joining the motorway',
            },
            {
                char: 'c',
                text: 'Stop at the start of the slip road and move off when you see a gap',
            },
            {
                char: 'd',
                text: 'Use the hard shoulder, if necessary, to build up speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5280',
        topicCode: 'The road',
        question:
            'What should you do before driving your high-sided lorry in windy weather?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Check your wind deflector',
            },
            {
                char: 'b',
                text: 'Check your spray-suppression equipment',
            },
            {
                char: 'c',
                text: 'Plan your route in advance',
            },
            {
                char: 'd',
                text: 'Only half-load your lorry',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5303',
        topicCode: 'The road',
        question:
            'You`re overtaking another lorry. What should you do if you start to lose speed due to an uphill gradient?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue at the same speed and in the same position',
            },
            {
                char: 'b',
                text: 'Try to force the vehicle you were overtaking to drop back',
            },
            {
                char: 'c',
                text: 'Try to force the vehicle you were overtaking to speed up',
            },
            {
                char: 'd',
                text: 'Ease off and drop behind the vehicle you were trying to overtake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5304',
        topicCode: 'The road',
        question:
            'How could you reduce the problems caused by a strong side wind when driving an empty curtain-sided vehicle on an exposed bridge?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Tie one curtain open and lock open the rear doors',
            },
            {
                char: 'b',
                text: 'Leave both curtains closed',
            },
            {
                char: 'c',
                text: 'Tie both curtains open',
            },
            {
                char: 'd',
                text: 'Tie open the curtain on the side the wind`s blowing from',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5305',
        topicCode: 'The road',
        question: 'When is a high-sided vehicle most affected by side wind?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When it`s stationary',
            },
            {
                char: 'b',
                text: 'When it`s travelling loaded',
            },
            {
                char: 'c',
                text: 'When it`s being reversed',
            },
            {
                char: 'd',
                text: 'When it`s travelling empty',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5306',
        topicCode: 'The road',
        question:
            'You`re driving an empty curtain-sided vehicle. Why might you consider tying the curtains open?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To use less fuel',
            },
            {
                char: 'b',
                text: 'It`s a legal requirement',
            },
            {
                char: 'c',
                text: 'To prevent the curtains from tearing',
            },
            {
                char: 'd',
                text: 'To reduce the effect of side wind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5308',
        topicCode: 'The road',
        question:
            'You`re driving a lorry towards a high bridge on a windy day. What should you expect?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Changed weight limits',
            },
            {
                char: 'b',
                text: 'No restrictions for lorries',
            },
            {
                char: 'c',
                text: 'Minimum speed limits',
            },
            {
                char: 'd',
                text: 'Lane closures',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5309',
        topicCode: 'The road',
        question:
            'Which of these vehicles is most at risk from strong side wind?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A laden lorry with box body',
            },
            {
                char: 'b',
                text: 'An unladen lorry with box body',
            },
            {
                char: 'c',
                text: 'An unladen lorry with platform body',
            },
            {
                char: 'd',
                text: 'A laden lorry with platform body',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5311',
        topicCode: 'The road',
        question:
            'In strong winds, an overtaking lorry can cause additional air turbulence that can affect other road users. Which vehicle is most at risk from this turbulence?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A car',
            },
            {
                char: 'b',
                text: 'A delivery van',
            },
            {
                char: 'c',
                text: 'A motorcycle',
            },
            {
                char: 'd',
                text: 'A coach',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5312',
        topicCode: 'The road',
        question: 'Which vehicle is most at risk in windy conditions?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'High-sided lorry',
            },
            {
                char: 'b',
                text: 'Saloon car',
            },
            {
                char: 'c',
                text: 'Tractor unit',
            },
            {
                char: 'd',
                text: 'Single-deck bus',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5313',
        topicCode: 'The road',
        question: 'When are air deflectors most effective?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When there`s a side wind',
            },
            {
                char: 'b',
                text: 'When there`s a headwind',
            },
            {
                char: 'c',
                text: 'When reversing',
            },
            {
                char: 'd',
                text: 'When there`s a strong tailwind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5314',
        topicCode: 'The road',
        question:
            'You`re driving your lorry on the motorway. What should you do when visibility is reduced by heavy rain and spray?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Maintain a constant speed',
            },
            {
                char: 'b',
                text: 'Use main-beam headlights',
            },
            {
                char: 'c',
                text: 'Double your dry-weather separation distance',
            },
            {
                char: 'd',
                text: 'Stay in the left-hand lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5315',
        topicCode: 'The road',
        question:
            'What should you do before driving your lorry away from a wet construction site at the side of a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Turn on your amber beacon',
            },
            {
                char: 'b',
                text: 'Drain the air tanks',
            },
            {
                char: 'c',
                text: 'Hose down the wheels',
            },
            {
                char: 'd',
                text: 'Set your tachograph to `other work`',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5316',
        topicCode: 'The road',
        question:
            'You`re driving a lorry from a wet construction site onto a motorway. Why must you take extra precautions before leaving the site?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your view from the cab will be obscured by plant machinery',
            },
            {
                char: 'b',
                text: 'It`s an offence to emerge from a works site onto a motorway',
            },
            {
                char: 'c',
                text: 'Your lorry`s spray-suppression equipment will be inoperative',
            },
            {
                char: 'd',
                text: 'It`s an offence to deposit mud on a road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5317',
        topicCode: 'The road',
        question:
            'What ground conditions are suitable for a tipper lorry to tip its load?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Soft and level',
            },
            {
                char: 'b',
                text: 'Soft and downhill',
            },
            {
                char: 'c',
                text: 'Solid and uphill',
            },
            {
                char: 'd',
                text: 'Solid and level',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5332',
        topicCode: 'The road',
        question:
            'You`re driving a lorry of more than 7.5 tonnes maximum authorised mass along a motorway. When can you use the right-hand lane to overtake?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When the motorway has two lanes',
            },
            {
                char: 'b',
                text: 'When the motorway has three lanes',
            },
            {
                char: 'c',
                text: 'When there`s a 50 mph speed limit',
            },
            {
                char: 'd',
                text: 'When there`s a 40 mph speed limit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5340',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway. You look in your mirrors and see smoke coming from your rear tyres. What should you do?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Reduce speed for the rest of your journey ',
            },
            {
                char: 'b',
                text: 'Drive on the hard shoulder until the smoke stops',
            },
            {
                char: 'c',
                text: 'Stop as soon as it`s safe to do so',
            },
            {
                char: 'd',
                text: 'Ignore it; this is normal when driving at speed ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5350',
        topicCode: 'The road',
        question:
            'You`re on a wet, level road, driving at 50 mph. What`s the minimum time gap you should leave between your vehicle and the one in front?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'One second',
            },
            {
                char: 'b',
                text: 'Two seconds',
            },
            {
                char: 'c',
                text: 'Three seconds',
            },
            {
                char: 'd',
                text: 'Four seconds',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5351',
        topicCode: 'The road',
        question:
            'You`re driving an articulated lorry on a three-lane motorway. When can you drive in the right-hand lane?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When overtaking a slow-moving car in the middle lane',
            },
            {
                char: 'b',
                text: 'When the escort vehicle of an oversized load signals you to pass',
            },
            {
                char: 'c',
                text: 'If no speed limiter is fitted to your lorry',
            },
            {
                char: 'd',
                text: 'If your lorry is unladen',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5352',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway and it`s raining heavily. What should you do when spray is causing poor visibility?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use dipped headlights',
            },
            {
                char: 'b',
                text: 'Use sidelights only',
            },
            {
                char: 'c',
                text: 'Remove spray-suppression equipment',
            },
            {
                char: 'd',
                text: 'Use the two-second rule',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC6616',
        topicCode: 'The road',
        question:
            'What might happen if using the brakes continuously causes them to overheat?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The brakes will work better',
            },
            {
                char: 'b',
                text: 'The brakes will be less effective',
            },
            {
                char: 'c',
                text: 'The brake pedal will become stiff',
            },
            {
                char: 'd',
                text: 'The air pressure will increase',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6620',
        topicCode: 'The road',
        question:
            'What do you need to be careful of when you`re driving in high winds?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Fallen trees',
            },
            {
                char: 'b',
                text: 'Poor visibility',
            },
            {
                char: 'c',
                text: 'A risk of grounding',
            },
            {
                char: 'd',
                text: 'Steep gradients',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6625',
        topicCode: 'The road',
        question:
            'What do you need to be aware of when you drive over an exposed suspension bridge?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The swaying of the bridge',
            },
            {
                char: 'b',
                text: 'The width of the lanes',
            },
            {
                char: 'c',
                text: 'The effect of strong side wind',
            },
            {
                char: 'd',
                text: 'The overhanging bridge cables',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6630',
        topicCode: 'The road',
        question:
            'You`re driving through the night. What could it mean if your steering feels lighter than normal?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your tyres are losing pressure ',
            },
            {
                char: 'b',
                text: 'There`s a leak in the power-steering pump',
            },
            {
                char: 'c',
                text: 'There`s ice or frost on the road',
            },
            {
                char: 'd',
                text: 'There isn`t enough tread on your tyres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6645',
        topicCode: 'The road',
        question:
            'You`re in the centre lane of a motorway, overtaking another vehicle. What should you do before returning to the left-hand lane?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Signal left, then check your mirror',
            },
            {
                char: 'b',
                text: 'Wait for the other driver to flash their headlights',
            },
            {
                char: 'c',
                text: 'Check ahead and then your nearside mirror',
            },
            {
                char: 'd',
                text: 'Check behind for fast traffic in the right-hand lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6693',
        topicCode: 'The road',
        question: 'What should you do as you approach a zebra crossing?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop before the zigzag lines',
            },
            {
                char: 'b',
                text: 'Wave pedestrians across the road',
            },
            {
                char: 'c',
                text: 'Sound the horn and flash headlights',
            },
            {
                char: 'd',
                text: 'Be prepared to stop in good time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6695',
        topicCode: 'The road',
        question:
            'You`re driving a high-sided vehicle on a motorway. You should anticipate the effects of side wind. When is this most likely to happen?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When passing signs',
            },
            {
                char: 'b',
                text: 'On exposed sections',
            },
            {
                char: 'c',
                text: 'In contraflow systems',
            },
            {
                char: 'd',
                text: 'In service areas',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6696',
        topicCode: 'The road',
        question:
            'You`re driving a high-sided vehicle in very windy conditions. Where should you avoid travelling?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Across suspension bridges',
            },
            {
                char: 'b',
                text: 'Up steep hills',
            },
            {
                char: 'c',
                text: 'Along country lanes',
            },
            {
                char: 'd',
                text: 'Through road tunnels',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6698',
        topicCode: 'The road',
        question:
            'You`re driving in heavy rain. What should you do if your steering suddenly feels very light?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Brake very sharply ',
            },
            {
                char: 'b',
                text: 'Steer towards the centre line',
            },
            {
                char: 'c',
                text: 'Ease off the accelerator',
            },
            {
                char: 'd',
                text: 'Increase your speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6699',
        topicCode: 'The road',
        question:
            'Why should you be especially aware of parked cars when you`re driving at night?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There are more of them',
            },
            {
                char: 'b',
                text: 'They`re more likely to move off',
            },
            {
                char: 'c',
                text: 'The drivers may be drunk',
            },
            {
                char: 'd',
                text: 'They can park without lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6701',
        topicCode: 'The road',
        question:
            'You`re waiting at a T-junction. What should you do if you see a vehicle is coming from the right, with its left indicator flashing?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move out and accelerate hard',
            },
            {
                char: 'b',
                text: 'Wait until the vehicle starts to turn in',
            },
            {
                char: 'c',
                text: 'Pull out before the vehicle reaches the junction',
            },
            {
                char: 'd',
                text: 'Move out slowly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6703',
        topicCode: 'The road',
        question:
            'You`re driving along a motorway and see this sign. What does it mean?',
        questionImg: 'TS4503.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There`s a steep downhill section ahead',
            },
            {
                char: 'b',
                text: 'Only lorries and buses are allowed to use that lane',
            },
            {
                char: 'c',
                text: 'Vehicles fitted with speed limiters must use that lane',
            },
            {
                char: 'd',
                text: 'There`s a long uphill gradient ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6710',
        topicCode: 'The road',
        question:
            'You`re about to pass this car. What`s the main hazard you should be aware of?',
        questionImg: 'IMG_9181.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sunlight reflecting off the car windscreen',
            },
            {
                char: 'b',
                text: 'The driver`s door may suddenly open',
            },
            {
                char: 'c',
                text: 'Its alarm may be activated',
            },
            {
                char: 'd',
                text: 'The narrow pavement on the right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6746',
        topicCode: 'The road',
        question:
            'What should you do when you park your vehicle on a two-way road at night?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use the parking lights',
            },
            {
                char: 'b',
                text: 'Switch off all lights',
            },
            {
                char: 'c',
                text: 'Put a traffic cone behind your vehicle ',
            },
            {
                char: 'd',
                text: 'Park underneath a street lamp',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6747',
        topicCode: 'The road',
        question: 'When would weight transference be most likely to occur?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you`re reversing',
            },
            {
                char: 'b',
                text: 'When you`re loading',
            },
            {
                char: 'c',
                text: 'When you`re overtaking',
            },
            {
                char: 'd',
                text: 'When you`re cornering',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6752',
        topicCode: 'The road',
        question: 'How will gravity affect a laden vehicle going downhill?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The vehicle will use more fuel',
            },
            {
                char: 'b',
                text: 'Stopping distances will be decreased',
            },
            {
                char: 'c',
                text: 'More braking effort will be required',
            },
            {
                char: 'd',
                text: 'The load will be more stable',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6757',
        topicCode: 'The road',
        question: 'When do long vehicles sometimes need to straddle lanes?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When turning at tight junctions',
            },
            {
                char: 'b',
                text: 'When travelling empty',
            },
            {
                char: 'c',
                text: 'When driving on motorways',
            },
            {
                char: 'd',
                text: 'When coming to contraflow systems',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6765',
        topicCode: 'The road',
        question: 'What should you do when you drive in windy weather?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Maintain a constant speed in exposed areas',
            },
            {
                char: 'b',
                text: 'Anticipate how the weather may affect other road users',
            },
            {
                char: 'c',
                text: 'Always keep to your intended route',
            },
            {
                char: 'd',
                text: 'Stay close to smaller or vulnerable vehicles as you overtake them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6767',
        topicCode: 'The road',
        question:
            'High-sided vehicles can be affected by side wind. On which type of road is this most likely?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Narrow country lanes',
            },
            {
                char: 'b',
                text: 'Open roads',
            },
            {
                char: 'c',
                text: 'Slip roads',
            },
            {
                char: 'd',
                text: 'Motorway underpasses',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6768',
        topicCode: 'The road',
        question:
            'Where would you anticipate problems when you`re driving a high-sided vehicle on a windy day?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In road tunnels',
            },
            {
                char: 'b',
                text: 'On high-level roads',
            },
            {
                char: 'c',
                text: 'In dead ground',
            },
            {
                char: 'd',
                text: 'On ring roads',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6769',
        topicCode: 'The road',
        question: 'Which vehicle is least likely to be affected by high wind?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'Motorcycle-icon.png',
            },
            {
                char: 'b',
                text: '',
                img: 'Car_icon.png',
            },
            {
                char: 'c',
                text: '',
                img: 'Caravan_icon.png',
            },
            {
                char: 'd',
                text: '',
                img: 'Lorry_icon.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6770',
        topicCode: 'The road',
        question: 'What`s a buffer lane?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A safety lane for vehicles blown off course',
            },
            {
                char: 'b',
                text: 'A lane for overtaking safely',
            },
            {
                char: 'c',
                text: 'A lane to park in until the wind drops',
            },
            {
                char: 'd',
                text: 'The only lane to be used in high winds',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6771',
        topicCode: 'The road',
        question: 'Where would you expect to find buffer lanes?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In built-up areas',
            },
            {
                char: 'b',
                text: 'On high-level bridges',
            },
            {
                char: 'c',
                text: 'On country roads',
            },
            {
                char: 'd',
                text: 'In roadworks',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6772',
        topicCode: 'The road',
        question: 'When is a buffer lane most likely to be in use?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When it`s windy',
            },
            {
                char: 'b',
                text: 'When it`s raining',
            },
            {
                char: 'c',
                text: 'When it`s foggy',
            },
            {
                char: 'd',
                text: 'When it`s icy',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6773',
        topicCode: 'The road',
        question:
            'What`s the best way to control your vehicle when driving on snow?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep the engine revs high and spin the wheels',
            },
            {
                char: 'b',
                text: 'Drive in your vehicle`s lowest gear',
            },
            {
                char: 'c',
                text: 'Keep the engine revs high and slip the clutch',
            },
            {
                char: 'd',
                text: 'Drive slowly, in a higher gear than normal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6775',
        topicCode: 'The road',
        question:
            'You`re driving a large vehicle in gusty conditions. Which vehicle is most likely to be affected by buffeting when you overtake it?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A motorcycle',
            },
            {
                char: 'b',
                text: 'A flat-bed lorry',
            },
            {
                char: 'c',
                text: 'A car',
            },
            {
                char: 'd',
                text: 'A loaded tanker',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6776',
        topicCode: 'The road',
        question:
            'It`s very windy and you`re overtaking a motorcyclist on a motorway. What should you be aware of that may cause them problems?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your exhaust smoke',
            },
            {
                char: 'b',
                text: 'Your engine noise',
            },
            {
                char: 'c',
                text: 'The buffeting effect',
            },
            {
                char: 'd',
                text: 'The tyre noise',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6777',
        topicCode: 'The road',
        question:
            'Why should you be aware of motorcyclists on a motorway when there are gusty winds?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They may be blown into your path',
            },
            {
                char: 'b',
                text: 'They may leave at the next exit',
            },
            {
                char: 'c',
                text: 'They may suddenly stop on the hard shoulder',
            },
            {
                char: 'd',
                text: 'They may position to turn right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6780',
        topicCode: 'The road',
        question:
            'Which road users are most likely to be affected by the turbulence created by large vehicles travelling at speed?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drivers of low-loaders',
            },
            {
                char: 'b',
                text: 'Drivers towing caravans',
            },
            {
                char: 'c',
                text: 'Drivers of tankers',
            },
            {
                char: 'd',
                text: 'Drivers of emergency vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6781',
        topicCode: 'The road',
        question:
            'You`re overtaking a motorcycle in windy conditions. Why should you check your nearside mirror?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To check your road position',
            },
            {
                char: 'b',
                text: 'To see if the rider is in control of their motorcycle',
            },
            {
                char: 'c',
                text: 'To see if other vehicles have been affected',
            },
            {
                char: 'd',
                text: 'To check that it`s properly adjusted',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6782',
        topicCode: 'The road',
        question:
            'Which vehicles are most likely to be affected by high winds?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Slow-moving vehicles',
            },
            {
                char: 'b',
                text: 'Track-laying vehicles',
            },
            {
                char: 'c',
                text: 'Front-wheel-drive vehicles',
            },
            {
                char: 'd',
                text: 'Curtain-sided vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6783',
        topicCode: 'The road',
        question:
            'You`re driving a high-sided vehicle on a motorway. Where should you be especially aware of the effects of side wind?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'In cuttings',
            },
            {
                char: 'b',
                text: 'Through tunnels',
            },
            {
                char: 'c',
                text: 'Across viaducts',
            },
            {
                char: 'd',
                text: 'Passing large signs',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6785',
        topicCode: 'The road',
        question:
            'You`re on a motorway and the surface is still wet after rain. Why should you take care when you`re overtaking?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wet roads may cause more buffeting',
            },
            {
                char: 'b',
                text: 'Other vehicles will have their lights on',
            },
            {
                char: 'c',
                text: 'Vehicles may be parked on the hard shoulder',
            },
            {
                char: 'd',
                text: 'The road may still be slippery',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6786',
        topicCode: 'The road',
        question:
            'It`s raining. Why would a motorcyclist steer around drain covers on a bend?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To reduce the risk of skidding',
            },
            {
                char: 'b',
                text: 'To avoid puncturing the tyres',
            },
            {
                char: 'c',
                text: 'To improve their view around the bend',
            },
            {
                char: 'd',
                text: 'To avoid splashing pedestrians',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6787',
        topicCode: 'The road',
        question:
            'What`s the minimum distance you should allow for braking when it`s raining heavily?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The normal distance',
            },
            {
                char: 'b',
                text: 'Twice the normal distance',
            },
            {
                char: 'c',
                text: 'Three times the normal distance',
            },
            {
                char: 'd',
                text: 'Five times the normal distance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6788',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway. What should you do if your view ahead is restricted by heavy spray?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move into the lane on the right',
            },
            {
                char: 'b',
                text: 'Use the two-second rule',
            },
            {
                char: 'c',
                text: 'Switch on your dipped headlights',
            },
            {
                char: 'd',
                text: 'Leave the motorway at the next exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6789',
        topicCode: 'The road',
        question:
            'What`s the greatest risk to your safety when you`re overtaking on a motorway in very wet weather?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your engine may get flooded',
            },
            {
                char: 'b',
                text: 'Your braking distance may be reduced',
            },
            {
                char: 'c',
                text: 'Your steering may become heavy',
            },
            {
                char: 'd',
                text: 'Your tyres may lose grip',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6790',
        topicCode: 'The road',
        question:
            'What should you be aware of when you`re overtaking on a motorway while it`s raining heavily?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Manhole covers will be slippery',
            },
            {
                char: 'b',
                text: 'Visibility will be reduced by spray from traffic',
            },
            {
                char: 'c',
                text: 'Your braking distances will be reduced',
            },
            {
                char: 'd',
                text: 'There`ll be distracting bright reflections',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6791',
        topicCode: 'The road',
        question:
            'Why can visibility be worse when driving at high speed in wet weather?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drivers bunch together when it`s raining',
            },
            {
                char: 'b',
                text: 'Headlights will dazzle you more easily',
            },
            {
                char: 'c',
                text: 'Windscreen wipers obstruct your view',
            },
            {
                char: 'd',
                text: 'More spray will be thrown up',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6792',
        topicCode: 'The road',
        question:
            'What should you do if you intend to overtake a lorry that`s throwing up spray?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Get much closer before moving out',
            },
            {
                char: 'b',
                text: 'Wait until the other driver gives a left signal',
            },
            {
                char: 'c',
                text: 'Move out earlier than normal',
            },
            {
                char: 'd',
                text: 'Wait for the lorry to slow down on a hill',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6793',
        topicCode: 'The road',
        question:
            'You`re driving in wet weather. What effect will faulty spray-suppression equipment have on other drivers?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Their vision will be increased',
            },
            {
                char: 'b',
                text: 'Their vision will be reduced',
            },
            {
                char: 'c',
                text: 'They`ll be able to overtake more easily',
            },
            {
                char: 'd',
                text: 'They`ll need to use intermittent wipers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6794',
        topicCode: 'The road',
        question: 'Why are brushes fitted to this vehicle`s wheel arch?',
        questionImg: 'VB3505.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To clear mud from the tyres on building sites',
            },
            {
                char: 'b',
                text: 'To remove objects from the tyre tread',
            },
            {
                char: 'c',
                text: 'To stop snow building up behind the wheel',
            },
            {
                char: 'd',
                text: 'To reduce spray on wet roads',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6795',
        topicCode: 'The road',
        question:
            'When should you check your vehicle`s spray-suppression equipment?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Only when you`ll be using a motorway',
            },
            {
                char: 'b',
                text: 'Before setting out on every journey',
            },
            {
                char: 'c',
                text: 'Only as part of a pre-winter check',
            },
            {
                char: 'd',
                text: 'Once per year before the MOT test',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6796',
        topicCode: 'The road',
        question:
            'What component fitted to your vehicle will help following drivers in wet weather?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Spray reducers',
            },
            {
                char: 'b',
                text: 'Side-panel skirts',
            },
            {
                char: 'c',
                text: 'Wind deflectors',
            },
            {
                char: 'd',
                text: 'Catalytic converter',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6797',
        topicCode: 'The road',
        question:
            'This vehicle is fitted with spray-suppression equipment. In what weather conditions will it be most useful?',
        questionImg: 'VB3505.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Rain',
            },
            {
                char: 'b',
                text: 'Snow',
            },
            {
                char: 'c',
                text: 'Wind',
            },
            {
                char: 'd',
                text: 'Fog',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6798',
        topicCode: 'The road',
        question: 'How should you drive through flood water?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slowly, in a low gear, with engine speed high',
            },
            {
                char: 'b',
                text: 'Slowly, in a high gear, with engine speed low',
            },
            {
                char: 'c',
                text: 'As quickly as possible to cause the least delay',
            },
            {
                char: 'd',
                text: 'At normal speed when you have spray reducers fitted',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6799',
        topicCode: 'The road',
        question:
            'You`re on a motorway, approaching a working snow plough. Why should you stay behind it?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It`s illegal to overtake snow ploughs',
            },
            {
                char: 'b',
                text: 'Snow ploughs are left-hand-drive only',
            },
            {
                char: 'c',
                text: 'Your speed could cause snow to drift behind',
            },
            {
                char: 'd',
                text: 'There may be deep snow ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6800',
        topicCode: 'The road',
        question:
            'You`re driving in heavy rain. Why do you need to increase your distance from the vehicle in front?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To prevent rain from entering the vehicle`s braking system',
            },
            {
                char: 'b',
                text: 'To let other motorists move into the gap',
            },
            {
                char: 'c',
                text: 'To allow for an increased stopping distance',
            },
            {
                char: 'd',
                text: 'To reduce the risk of water spraying into the filters',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6801',
        topicCode: 'The road',
        question:
            'You`re driving a large vehicle in heavy rain on a motorway. You slow down to reduce the risk of aquaplaning. For what other reason should you slow down? ',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To force other drivers to act properly and slow down',
            },
            {
                char: 'b',
                text: 'To reduce the amount of spray thrown up',
            },
            {
                char: 'c',
                text: 'To prevent water from entering the braking system',
            },
            {
                char: 'd',
                text: 'To stop the electrics getting wet',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6802',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway in heavy rain. When are you allowed to use high-intensity rear fog lights?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When visibility is more than 100 metres (328 feet) ',
            },
            {
                char: 'b',
                text: 'Only when the national speed limit applies',
            },
            {
                char: 'c',
                text: 'Only when you`re being followed closely by other traffic',
            },
            {
                char: 'd',
                text: 'When visibility is reduced to 100 metres (328 feet) or less',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6803',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway in heavy rain. What could cause your steering to become unresponsive?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Water reducing the tyres` grip on the road',
            },
            {
                char: 'b',
                text: 'Tyres becoming hotter in the bad weather',
            },
            {
                char: 'c',
                text: 'Braking gently and in good time',
            },
            {
                char: 'd',
                text: 'Water entering the braking system',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6926',
        topicCode: 'The road',
        question: 'You`re driving downhill. How will this affect your vehicle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It will need more engine power',
            },
            {
                char: 'b',
                text: 'It will take longer to stop',
            },
            {
                char: 'c',
                text: 'It will increase fuel consumption',
            },
            {
                char: 'd',
                text: 'It will be easier to change direction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6927',
        topicCode: 'The road',
        question:
            'The road is wet. Why should you slow down as you approach this pedestrian?',
        questionImg: 'IMG_2204.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Because there are no road markings',
            },
            {
                char: 'b',
                text: 'To avoid splashing them',
            },
            {
                char: 'c',
                text: 'Because they have priority',
            },
            {
                char: 'd',
                text: 'To encourage them to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6930',
        topicCode: 'The road',
        question: 'Why is tailgating dangerous?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You`re likely to be distracted',
            },
            {
                char: 'b',
                text: 'Your engine will overheat',
            },
            {
                char: 'c',
                text: 'Your view to the rear is reduced',
            },
            {
                char: 'd',
                text: 'Your view ahead is reduced',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6931',
        topicCode: 'The road',
        question:
            'When may you use your vehicle`s hazard warning lights while it`s moving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you`ve just overtaken another vehicle',
            },
            {
                char: 'b',
                text: 'When you need to reverse for some distance ',
            },
            {
                char: 'c',
                text: 'When you`re on a motorway and traffic ahead slows suddenly',
            },
            {
                char: 'd',
                text: 'When one of your lights has failed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6933',
        topicCode: 'The road',
        question:
            'You`re driving in town and see these lights flashing. What would you expect to see ahead?',
        questionImg: 'TS4622.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Contraflow system',
            },
            {
                char: 'b',
                text: 'Uneven road surface',
            },
            {
                char: 'c',
                text: 'Children crossing the road',
            },
            {
                char: 'd',
                text: 'Roadworks ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6935',
        topicCode: 'The road',
        question: 'Where are these lights found?',
        questionImg: 'TS4622.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'On approach to a level crossing',
            },
            {
                char: 'b',
                text: 'Near a fire station',
            },
            {
                char: 'c',
                text: 'On approach to a motorway',
            },
            {
                char: 'd',
                text: 'Near a school',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6937',
        topicCode: 'The road',
        question: 'What problem may you have when driving at night?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It`s more difficult to keep to speed limits',
            },
            {
                char: 'b',
                text: 'There`ll be an increase in traffic',
            },
            {
                char: 'c',
                text: 'You`ll have reduced visibility',
            },
            {
                char: 'd',
                text: 'It takes longer to stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6939',
        topicCode: 'The road',
        question: 'Why should you take extra care when overtaking at night?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Every driver will normally be tired',
            },
            {
                char: 'b',
                text: 'Large vehicles are subject to a 10% speed reduction',
            },
            {
                char: 'c',
                text: 'Speed and distance are harder to judge',
            },
            {
                char: 'd',
                text: 'Most towns aren`t adequately lit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6940',
        topicCode: 'The road',
        question:
            'You`re driving along a motorway in thick fog at night. The reflective studs are red on your left and white on your right. Which lane are you in?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The right-hand lane',
            },
            {
                char: 'b',
                text: 'The hard shoulder',
            },
            {
                char: 'c',
                text: 'The left-hand lane',
            },
            {
                char: 'd',
                text: 'The middle lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6941',
        topicCode: 'The road',
        question:
            'You`re driving in the left-hand lane on a three-lane motorway. What should you check for before moving into the middle lane to overtake a slower vehicle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Traffic behind in the right-hand lane, returning to the middle lane',
            },
            {
                char: 'b',
                text: 'Traffic that`s intending to leave at the next exit',
            },
            {
                char: 'c',
                text: 'Traffic ahead moving into the right-hand lane',
            },
            {
                char: 'd',
                text: 'Traffic behind that`s trying to pass on your left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6942',
        topicCode: 'The road',
        question:
            'What should you do before changing lanes to overtake on a motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Check your mirrors carefully',
            },
            {
                char: 'b',
                text: 'Change to a lower gear',
            },
            {
                char: 'c',
                text: 'Look over your left shoulder',
            },
            {
                char: 'd',
                text: 'Increase your speed gently',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6943',
        topicCode: 'The road',
        question:
            'Which lane should you use when you`re driving on a clear motorway, at the speed limit for your vehicle?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Any lane',
            },
            {
                char: 'b',
                text: 'The middle lane',
            },
            {
                char: 'c',
                text: 'The right-hand lane',
            },
            {
                char: 'd',
                text: 'The left-hand lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6944',
        topicCode: 'The road',
        question:
            'You`re driving in the left-hand lane of a motorway. What should you do when you see a large vehicle merging from a slip road ahead?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Try to race and get ahead of it',
            },
            {
                char: 'b',
                text: 'Leave the other vehicle to adjust its speed',
            },
            {
                char: 'c',
                text: 'Stay at the maximum speed allowed for your vehicle',
            },
            {
                char: 'd',
                text: 'Be ready to adjust your speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6945',
        topicCode: 'The road',
        question:
            'You`re driving at the speed limit in the left-hand lane of a motorway. What should you do if you see lorries merging from a slip road ahead?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Try to accelerate past them',
            },
            {
                char: 'b',
                text: 'Move to the next lane if it`s safe',
            },
            {
                char: 'c',
                text: 'Brake heavily and let them merge',
            },
            {
                char: 'd',
                text: 'Expect them to stop and let you pass',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6946',
        topicCode: 'The road',
        question:
            'Why should you take care before moving into the centre lane of a three-lane motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The centre lane is narrower than the left-hand lane',
            },
            {
                char: 'b',
                text: 'The bridge height clearance will be less in the centre lane',
            },
            {
                char: 'c',
                text: 'Traffic in the centre lane may be travelling much faster than you',
            },
            {
                char: 'd',
                text: 'The reflective studs may be missing in the centre lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6947',
        topicCode: 'The road',
        question:
            'When may vehicles over 7.5 tonnes maximum authorised mass (MAM) use the right-hand lane of a motorway to overtake?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When the motorway has three lanes',
            },
            {
                char: 'b',
                text: 'When vehicles are stopped on the hard shoulder',
            },
            {
                char: 'c',
                text: 'When the motorway has two lanes',
            },
            {
                char: 'd',
                text: 'When other vehicles are turning right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6948',
        topicCode: 'The road',
        question:
            'You`ve just overtaken another vehicle on a motorway. What should you avoid when moving back to the left?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Cutting in',
            },
            {
                char: 'b',
                text: 'Increasing your speed',
            },
            {
                char: 'c',
                text: 'Changing gear',
            },
            {
                char: 'd',
                text: 'Signalling',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6949',
        topicCode: 'The road',
        question: 'What`s a crawler lane for?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To enable other traffic to overtake on the nearside',
            },
            {
                char: 'b',
                text: 'To enable large vehicles to park out of the way',
            },
            {
                char: 'c',
                text: 'To enable slow-moving traffic to move further over to the left on uphill gradients',
            },
            {
                char: 'd',
                text: 'To enable emergency vehicles to get quickly to the scene of an incident ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6950',
        topicCode: 'The road',
        question: 'What does this motorway sign mean?',
        questionImg: 'TS4503.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You`re approaching a long downhill slope',
            },
            {
                char: 'b',
                text: 'You`re approaching a long uphill slope',
            },
            {
                char: 'c',
                text: 'You`re approaching a `lorries only` lane',
            },
            {
                char: 'd',
                text: 'You`re approaching a service area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6951',
        topicCode: 'The road',
        question: 'When should you use a crawler lane?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When letting faster traffic overtake you',
            },
            {
                char: 'b',
                text: 'When turning right from a major road',
            },
            {
                char: 'c',
                text: 'When parking to have a rest',
            },
            {
                char: 'd',
                text: 'When slowing down for a motorway exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6952',
        topicCode: 'The road',
        question:
            'What should you do before overtaking on a single carriageway road?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights at oncoming traffic',
            },
            {
                char: 'b',
                text: 'Look ahead for road junctions',
            },
            {
                char: 'c',
                text: 'Drive very close to the vehicle in front',
            },
            {
                char: 'd',
                text: 'Make a final check in your left-hand mirror',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6953',
        topicCode: 'The road',
        question: 'When shouldn`t you overtake?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When the speed limit has been reduced',
            },
            {
                char: 'b',
                text: 'When you`re approaching motorway slip roads',
            },
            {
                char: 'c',
                text: 'When you would have to break the speed limit',
            },
            {
                char: 'd',
                text: 'When your view of the road ahead is clear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6955',
        topicCode: 'The road',
        question:
            'You`ve just overtaken another large vehicle. How do you know when it`s safe to move back to the nearside lane?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By waiting for the driver you`ve overtaken to flash their headlights',
            },
            {
                char: 'b',
                text: 'By checking your nearside mirror',
            },
            {
                char: 'c',
                text: 'By using your hazard warning lights as a signal',
            },
            {
                char: 'd',
                text: 'By moving to the nearside, hoping the other vehicle will slow down',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6957',
        topicCode: 'The road',
        question:
            'You`re driving on a dual carriageway and intend to overtake the vehicle ahead. What should you do if there`s a car approaching quickly behind you in the right-hand lane?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stay behind the slower vehicle',
            },
            {
                char: 'b',
                text: 'Signal right and move out',
            },
            {
                char: 'c',
                text: 'Move up closer to the slower vehicle',
            },
            {
                char: 'd',
                text: 'Signal left while waiting for the car to pass',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6958',
        topicCode: 'The road',
        question: 'What should you do after overtaking on a dual carriageway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Move back to the left when it`s safe to do so',
            },
            {
                char: 'b',
                text: 'Indicate left, then right',
            },
            {
                char: 'c',
                text: 'Wait for the other driver to flash their headlights',
            },
            {
                char: 'd',
                text: 'Switch your rear lights on and off',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6959',
        topicCode: 'The road',
        question:
            'You`re driving a long vehicle and want to turn right at a roundabout ahead. How should you signal if you need to occupy the left-hand lane?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Signal left on approach',
            },
            {
                char: 'b',
                text: 'Signal right on approach',
            },
            {
                char: 'c',
                text: 'Give no signal on approach',
            },
            {
                char: 'd',
                text: 'Give a right signal after entering the roundabout',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6960',
        topicCode: 'The road',
        question: 'When do drivers of long vehicles need to straddle lanes?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When they need to avoid braking sharply',
            },
            {
                char: 'b',
                text: 'When driving on motorways',
            },
            {
                char: 'c',
                text: 'When they need to avoid mounting the kerb',
            },
            {
                char: 'd',
                text: 'When coming to contraflow systems',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6961',
        topicCode: 'The road',
        question: 'What should you do as you approach these roadworks?',
        questionImg: 'R8510.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Check your mirrors',
            },
            {
                char: 'b',
                text: 'Select a higher gear',
            },
            {
                char: 'c',
                text: 'Flash your headlights',
            },
            {
                char: 'd',
                text: 'Use your endurance brake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6962',
        topicCode: 'The road',
        question:
            'What should you do when you`re overtaking a motorcyclist in very windy conditions?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow extra room',
            },
            {
                char: 'b',
                text: 'Overtake slowly',
            },
            {
                char: 'c',
                text: 'Sound your horn as you pass',
            },
            {
                char: 'd',
                text: 'Keep close as you pass',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6963',
        topicCode: 'The road',
        question:
            'You`re driving behind two cyclists. They`re approaching a roundabout in the left-hand lane. What should you expect them to do?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Go in any direction',
            },
            {
                char: 'b',
                text: 'Turn left',
            },
            {
                char: 'c',
                text: 'Turn right',
            },
            {
                char: 'd',
                text: 'Go straight ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6965',
        topicCode: 'The road',
        question: 'What should you do before you start to overtake a lorry?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Look well ahead for uphill gradients',
            },
            {
                char: 'b',
                text: 'Check your position in the left-hand mirror',
            },
            {
                char: 'c',
                text: 'Change quickly to a higher gear',
            },
            {
                char: 'd',
                text: 'Close right up before pulling out',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6966',
        topicCode: 'The road',
        question:
            'You`re in the left-hand lane on a three-lane motorway. Why should you check for any vehicles in the right-hand lane before you overtake?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They may be moving faster than you',
            },
            {
                char: 'b',
                text: 'They may move back to the middle lane as you move out',
            },
            {
                char: 'c',
                text: 'They may cut in sharply behind you',
            },
            {
                char: 'd',
                text: 'They may accelerate briskly in front of you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7037',
        topicCode: 'The road',
        question:
            'What does it indicate if you see white lights on a vehicle at night?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It`s moving away from you',
            },
            {
                char: 'b',
                text: 'It`s stationary and facing away from you',
            },
            {
                char: 'c',
                text: 'It`s ahead of you and braking',
            },
            {
                char: 'd',
                text: 'It`s facing towards you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7038',
        topicCode: 'The road',
        question:
            'You`re driving at night. Why should you ensure that all your lights are clean and working correctly?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To allow following drivers to use dipped headlights',
            },
            {
                char: 'b',
                text: 'To prevent the battery from overcharging',
            },
            {
                char: 'c',
                text: 'So that other road users can see the size of your vehicle',
            },
            {
                char: 'd',
                text: 'So that the intensity of street lighting can be reduced',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7041',
        topicCode: 'The road',
        question:
            'You`re driving in fog. When should high-intensity rear fog lights be used?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When visibility falls below 100 metres (328 feet)',
            },
            {
                char: 'b',
                text: 'When visibility falls below 200 metres (656 feet)',
            },
            {
                char: 'c',
                text: 'When visibility falls below 300 metres (984 feet)',
            },
            {
                char: 'd',
                text: 'When visibility falls below 400 metres (1312 feet)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7045',
        topicCode: 'The road',
        question:
            'You`re driving in fog that`s starting to clear. When should you switch off your high-intensity rear fog lights?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When visibility is more than 10 metres (32 feet)',
            },
            {
                char: 'b',
                text: 'When visibility is more than 50 metres (164 feet)',
            },
            {
                char: 'c',
                text: 'When visibility is more than 75 metres (246 feet)',
            },
            {
                char: 'd',
                text: 'When visibility is more than 100 metres (328 feet)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7073',
        topicCode: 'The road',
        question:
            'In fast traffic, when should you leave a two-second gap between your vehicle and the one in front?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When the roads are dry',
            },
            {
                char: 'b',
                text: 'When it`s raining and the roads are wet',
            },
            {
                char: 'c',
                text: 'When the roads are icy',
            },
            {
                char: 'd',
                text: 'When you`re driving in fog',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7086',
        topicCode: 'The road',
        question:
            'What should you do if you see a vehicle too close behind when you`re driving in traffic on the motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Increase your distance from the vehicle in front',
            },
            {
                char: 'b',
                text: 'Touch the brake pedal sharply to show your brake lights',
            },
            {
                char: 'c',
                text: 'Briskly accelerate away from the vehicle behind',
            },
            {
                char: 'd',
                text: 'Switch your rear fog lamps on and off',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7093',
        topicCode: 'The road',
        question:
            'What should you do if an overtaking vehicle pulls in too close in front of you?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slow down',
            },
            {
                char: 'b',
                text: 'Stay close behind',
            },
            {
                char: 'c',
                text: 'Overtake when you can',
            },
            {
                char: 'd',
                text: 'Flash your headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7109',
        topicCode: 'The road',
        question:
            'You`re driving at 50 mph (80 km/h) on a dry, level road. What gap should you leave between your vehicle and the one in front?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'One vehicle length',
            },
            {
                char: 'b',
                text: 'Two vehicle lengths',
            },
            {
                char: 'c',
                text: 'At least a one-second gap',
            },
            {
                char: 'd',
                text: 'At least a two-second gap',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7110',
        topicCode: 'The road',
        question:
            'You`re following a large vehicle. How can you improve your view ahead?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drop further back',
            },
            {
                char: 'b',
                text: 'Move over to the right',
            },
            {
                char: 'c',
                text: 'Move over to the left',
            },
            {
                char: 'd',
                text: 'Overtake as soon as you can',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7111',
        topicCode: 'The road',
        question: 'What must you be certain of before you overtake at night?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You can see well ahead',
            },
            {
                char: 'b',
                text: 'The road`s well lit',
            },
            {
                char: 'c',
                text: 'There`s an overtaking lane',
            },
            {
                char: 'd',
                text: 'You`re outside a built-up area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7112',
        topicCode: 'The road',
        question:
            'How much longer can your stopping distance be in snow than in dry weather?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Twice as long',
            },
            {
                char: 'b',
                text: 'Four times as long',
            },
            {
                char: 'c',
                text: 'Five times as long',
            },
            {
                char: 'd',
                text: 'Ten times as long',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7113',
        topicCode: 'The road',
        question:
            'How should you slow down or stop when you`re driving on an icy road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Brake gently and in good time',
            },
            {
                char: 'b',
                text: 'Always use the retarder',
            },
            {
                char: 'c',
                text: 'Change down through the gears',
            },
            {
                char: 'd',
                text: 'Use the parking brake in a rapid on-and-off movement',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7114',
        topicCode: 'The road',
        question: 'How should you use the brakes in icy weather?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Suddenly',
            },
            {
                char: 'b',
                text: 'By pumping the brake pedal',
            },
            {
                char: 'c',
                text: 'Gently',
            },
            {
                char: 'd',
                text: 'After using the gears first',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7125',
        topicCode: 'The road',
        question: 'When should you use the two-second rule?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To keep a safe distance from the vehicle in front when it`s raining',
            },
            {
                char: 'b',
                text: 'To keep a safe distance from the vehicle in front when conditions are good',
            },
            {
                char: 'c',
                text: 'To keep a safe distance from the vehicle in front when it`s icy',
            },
            {
                char: 'd',
                text: 'To keep a safe distance from the vehicle in front in queuing traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7129',
        topicCode: 'The road',
        question:
            'Why is it dangerous to follow a heavy goods vehicle too closely?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your field of vision will be seriously reduced',
            },
            {
                char: 'b',
                text: 'Your cab will fill with fumes',
            },
            {
                char: 'c',
                text: 'Your engine will overheat',
            },
            {
                char: 'd',
                text: 'Your brakes will overheat',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7130',
        topicCode: 'The road',
        question:
            'What time gap should you leave when you`re following a vehicle on a wet road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'At least one second',
            },
            {
                char: 'b',
                text: 'At least two seconds',
            },
            {
                char: 'c',
                text: 'At least three seconds',
            },
            {
                char: 'd',
                text: 'At least four seconds',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7136',
        topicCode: 'The road',
        question:
            'The entrances to roundabouts are often slippery when they`re wet. How should you deal with this hazard?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stay in the left-hand lane',
            },
            {
                char: 'b',
                text: 'Brake in good time',
            },
            {
                char: 'c',
                text: 'Use the handbrake',
            },
            {
                char: 'd',
                text: 'Stop before emerging',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7140',
        topicCode: 'The road',
        question:
            'You`re driving in wet conditions. What should you try to do before braking?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Make sure that the gear lever is in neutral ',
            },
            {
                char: 'b',
                text: 'Make sure that all spray-suppression equipment is \nworking',
            },
            {
                char: 'c',
                text: 'Make sure that there`s no mist on your rear-view mirrors',
            },
            {
                char: 'd',
                text: 'Make sure that your vehicle is travelling in a straight line',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7141',
        topicCode: 'The road',
        question:
            'You`re driving a fully laden vehicle approaching an uphill gradient. What will happen if you start to overtake?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You`ll be able to get past more quickly',
            },
            {
                char: 'b',
                text: 'The weight of the load will help you go faster',
            },
            {
                char: 'c',
                text: 'You`ll take longer to get past',
            },
            {
                char: 'd',
                text: 'You`ll need to use a high gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7262',
        topicCode: 'The road',
        question:
            'You`re on a motorway and there`s a strong side wind. Which vehicle is particularly at risk?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A motorcycle',
            },
            {
                char: 'b',
                text: 'A taxi',
            },
            {
                char: 'c',
                text: 'A sports car',
            },
            {
                char: 'd',
                text: 'A road tanker',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7373',
        topicCode: 'The road',
        question:
            'You`re driving at a speed of 50 mph (80 km/h) in good, dry conditions. What distance should you stay behind the vehicle in front?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'At least 23 metres (75 feet)',
            },
            {
                char: 'b',
                text: 'At least 36 metres (118 feet)',
            },
            {
                char: 'c',
                text: 'At least 53 metres (175 feet)',
            },
            {
                char: 'd',
                text: 'At least 73 metres (240 feet)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7374',
        topicCode: 'The road',
        question:
            'You`re driving on a motorway after it`s been raining heavily. What should you do if spray is being thrown up, causing poor visibility?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep a two-second gap',
            },
            {
                char: 'b',
                text: 'Reduce your separation distance',
            },
            {
                char: 'c',
                text: 'Remove spray-suppression equipment',
            },
            {
                char: 'd',
                text: 'Use dipped headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7391',
        topicCode: 'The road',
        question:
            'You have stopped in an emergency area. What must you do before you rejoin the carriageway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use the emergency telephone',
            },
            {
                char: 'b',
                text: 'Give an arm signal as you are moving off',
            },
            {
                char: 'c',
                text: 'Switch on your vehicle`s headlights',
            },
            {
                char: 'd',
                text: 'Move away with your hazard lights on',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7392',
        topicCode: 'The road',
        question:
            'How should you rejoin the motorway after a breakdown on the hard shoulder?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Build up speed on the hard shoulder before looking for a safe gap in the traffic',
            },
            {
                char: 'b',
                text: 'Move straight out into the left-hand lane as you are not allowed to drive on the hard shoulder',
            },
            {
                char: 'c',
                text: 'Wait until a vehicle in the left-hand lane signals to you that it`s safe to rejoin',
            },
            {
                char: 'd',
                text: 'Keep your hazard lights flashing until you have safely rejoined the carriageway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8203',
        topicCode: 'The road',
        question:
            'You`ll be driving a high-floor coach. You`ll be going over several high bridges. Why should you check the weather forecast before starting your journey?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Rain can make crossing bridges very difficult for buses and coaches',
            },
            {
                char: 'b',
                text: 'In hot weather, the bridges might be closed to heavy traffic',
            },
            {
                char: 'c',
                text: 'You won`t be able to climb the bridges if it`s frosty',
            },
            {
                char: 'd',
                text: 'Some roads may be closed to certain vehicles in high winds ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8222',
        topicCode: 'The road',
        question:
            'It`s raining heavily. What effect could this have when you overtake a cyclist?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Spray could affect their control',
            },
            {
                char: 'b',
                text: 'Exhaust fumes are more toxic when it`s raining',
            },
            {
                char: 'c',
                text: 'Noise from your engine will be louder',
            },
            {
                char: 'd',
                text: 'Buffeting will be reduced',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8246',
        topicCode: 'The road',
        question: 'How is a strong wind likely to affect your bus?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Steering will be easier',
            },
            {
                char: 'b',
                text: 'Your stopping distances will be reduced',
            },
            {
                char: 'c',
                text: 'Your stopping distances will be greater',
            },
            {
                char: 'd',
                text: 'Steering will be more difficult',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8247',
        topicCode: 'The road',
        question:
            'What will affect a double-deck bus more than a single-deck bus?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Strong wind',
            },
            {
                char: 'b',
                text: 'Heavy rain',
            },
            {
                char: 'c',
                text: 'Thick fog',
            },
            {
                char: 'd',
                text: 'Dense spray',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8248',
        topicCode: 'The road',
        question:
            'You`re driving a bus on a windy day. What should you do when you`re overtaking a motorcyclist?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pass close to shield them from the wind',
            },
            {
                char: 'b',
                text: 'Move back early to protect them from buffeting',
            },
            {
                char: 'c',
                text: 'Pass wide in case they`re blown off course',
            },
            {
                char: 'd',
                text: 'Signal left so they know you`re pulling in',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8249',
        topicCode: 'The road',
        question:
            'In which type of weather is spray-suppression equipment particularly useful?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Rain',
            },
            {
                char: 'b',
                text: 'Ice',
            },
            {
                char: 'c',
                text: 'Fog',
            },
            {
                char: 'd',
                text: 'Wind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8262',
        topicCode: 'The road',
        question:
            'You`re driving a long bus. When would you need to straddle lanes?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only when joining a bus lane',
            },
            {
                char: 'b',
                text: 'On all bends and corners',
            },
            {
                char: 'c',
                text: 'On the approach to all roundabouts',
            },
            {
                char: 'd',
                text: 'To avoid mounting the kerb',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8267',
        topicCode: 'The road',
        question:
            'What must bus and coach drivers do when they park their vehicle on the road at night?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They must park under street lights',
            },
            {
                char: 'b',
                text: 'They must park within 25 metres (82 feet) of a street light',
            },
            {
                char: 'c',
                text: 'They must leave all the interior lights switched on',
            },
            {
                char: 'd',
                text: 'They must leave their parking lights switched on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8268',
        topicCode: 'The road',
        question:
            'You`re driving a bus at night on a road without street lighting. Why could it be dangerous to overtake?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'There may be unseen dips or bends in the road',
            },
            {
                char: 'b',
                text: 'You may dazzle other drivers',
            },
            {
                char: 'c',
                text: 'It`s harder to concentrate',
            },
            {
                char: 'd',
                text: 'It`s harder to keep control in the dark',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8346',
        topicCode: 'The road',
        question:
            'You`re driving a bus. Where should you be aware of the risk of grounding?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On a hump bridge',
            },
            {
                char: 'b',
                text: 'In a crawler lane',
            },
            {
                char: 'c',
                text: 'On a left-hand bend',
            },
            {
                char: 'd',
                text: 'In a narrow street',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5194',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What should you do when there`s a fire in your vehicle`s engine compartment?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Open all windows',
            },
            {
                char: 'b',
                text: 'Try to remove the load',
            },
            {
                char: 'c',
                text: 'Flag down a passing motorist',
            },
            {
                char: 'd',
                text: 'Cut off the fuel supply',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5455',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What training must you take before driving a lorry loaded with toxic substances?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'How to use fire-fighting equipment',
            },
            {
                char: 'b',
                text: 'How to operate a forklift truck',
            },
            {
                char: 'c',
                text: 'How to operate a lorry-mounted crane',
            },
            {
                char: 'd',
                text: 'How to use breathing apparatus',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6247',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re approaching a bridge that has no height restriction on it. What`s the minimum height under the bridge?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '3.6 metres (11 feet 10 inches)',
            },
            {
                char: 'b',
                text: '4.4 metres (14 feet 5 inches)',
            },
            {
                char: 'c',
                text: '4.8 metres (16 feet)',
            },
            {
                char: 'd',
                text: '5 metres (16 feet 6 inches)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6250',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'What must you do if you`re involved in a traffic incident?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive on for help',
            },
            {
                char: 'b',
                text: 'Inform the police within seven days',
            },
            {
                char: 'c',
                text: 'Stop at the scene',
            },
            {
                char: 'd',
                text: 'Drive to the nearest police station',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6251',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your vehicle is involved in an incident where someone is injured. You don`t produce your insurance certificate at the time. How soon must you report the incident to the police?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '24 hours',
            },
            {
                char: 'b',
                text: '48 hours',
            },
            {
                char: 'c',
                text: '72 hours',
            },
            {
                char: 'd',
                text: 'Seven days',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD6252',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at the scene of an incident. What does it mean if there`s a plain orange rectangle displayed on one of the vehicles?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It`s carrying dangerous goods',
            },
            {
                char: 'b',
                text: 'It`s carrying a first-aid kit',
            },
            {
                char: 'c',
                text: 'It`s carrying medical supplies',
            },
            {
                char: 'd',
                text: 'It`s unladen',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6253',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at an incident where someone is suffering from severe burns. What should you do to help?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Douse the burns with cool water',
            },
            {
                char: 'b',
                text: 'Remove anything stuck to the burns',
            },
            {
                char: 'c',
                text: 'Burst blisters that form on the burns',
            },
            {
                char: 'd',
                text: 'Apply ointment to the burns',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6255',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re waiting for the emergency services to arrive at the scene of an incident. A pedestrian`s leg is bleeding heavily, but there`s nothing embedded in the wound. What could you do to help?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Apply firm pressure to the wound',
            },
            {
                char: 'b',
                text: 'Dab the wound to stop the bleeding',
            },
            {
                char: 'c',
                text: 'Put the casualty into the recovery position',
            },
            {
                char: 'd',
                text: 'Wrap an ice pack near the wound',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6256',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At the scene of an incident, an injured person is lying in a busy road. What`s the first thing you should do to help?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Treat the person for shock',
            },
            {
                char: 'b',
                text: 'Warn other traffic',
            },
            {
                char: 'c',
                text: 'Place them in the recovery position',
            },
            {
                char: 'd',
                text: 'Make sure the injured person is kept warm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6257',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re the first person to arrive at an incident where people are badly injured. What`s the first thing you should do?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch on your own hazard warning lights',
            },
            {
                char: 'b',
                text: 'Contact the local radio station to tell them about the incident',
            },
            {
                char: 'c',
                text: 'Try and get people who are injured to drink something',
            },
            {
                char: 'd',
                text: 'Move the people who are injured clear of their vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6259',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at an incident where a motorcyclist is lying in the road, unconscious and bleeding. The area is safe and the emergency services have been called. What`s the first priority when checking the rider?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Remove their helmet',
            },
            {
                char: 'b',
                text: 'Stop the bleeding',
            },
            {
                char: 'c',
                text: 'Check their airway is open',
            },
            {
                char: 'd',
                text: 'Move them off the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6264',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident and someone is unconscious. What`s the first thing you should do to help them?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Take the numbers of the vehicles involved',
            },
            {
                char: 'b',
                text: 'Try to get them to drink water',
            },
            {
                char: 'c',
                text: 'Check that they`re breathing',
            },
            {
                char: 'd',
                text: 'Look for any witnesses',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6267',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`ve stopped at the scene of an incident where there are casualties. What should you do to help while waiting for the emergency services to arrive?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep injured people warm and comfortable',
            },
            {
                char: 'b',
                text: 'Clear debris from the road',
            },
            {
                char: 'c',
                text: 'Keep injured people on the move by walking them around',
            },
            {
                char: 'd',
                text: 'Give injured people a warm drink',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6268',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident where someone is injured. What should be given urgent priority?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Deal with the danger from further collisions or fire',
            },
            {
                char: 'b',
                text: 'Get the casualty a warm drink',
            },
            {
                char: 'c',
                text: 'Take details of any witnesses',
            },
            {
                char: 'd',
                text: 'Take the numbers of the vehicles involved',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6270',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at the scene of an incident. How can you help someone suffering from shock?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Reassure them confidently',
            },
            {
                char: 'b',
                text: 'Offer them a cigarette',
            },
            {
                char: 'c',
                text: 'Keep them moving',
            },
            {
                char: 'd',
                text: 'Give them a warm drink',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6271',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What should you do if you`re the first person to arrive at the scene of an incident?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Warn other traffic to prevent further collisions',
            },
            {
                char: 'b',
                text: 'Take photographs of the scene',
            },
            {
                char: 'c',
                text: 'Offer a calming cigarette to those involved ',
            },
            {
                char: 'd',
                text: 'Ask everyone who isn`t injured to leave',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6273',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'There`s been an incident. What can you do to help a driver who`s suffering from shock?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Give them a drink',
            },
            {
                char: 'b',
                text: 'Offer them a cigarette',
            },
            {
                char: 'c',
                text: 'Ask who caused the collision',
            },
            {
                char: 'd',
                text: 'Reassure them confidently',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6275',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident where a motorcyclist is lying in the middle of the road and unconscious. What`s the first thing you should do?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move the rider out of the road',
            },
            {
                char: 'b',
                text: 'Warn other traffic',
            },
            {
                char: 'c',
                text: 'Clear the road of debris',
            },
            {
                char: 'd',
                text: 'Give the rider reassurance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6278',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re trying to resuscitate a casualty who isn`t breathing. For how long should you continue compressions if they haven`t started breathing again?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Give up if you think they`re dead',
            },
            {
                char: 'b',
                text: 'Keep trying for up to two minutes',
            },
            {
                char: 'c',
                text: 'Until medical help arrives and takes over',
            },
            {
                char: 'd',
                text: 'Keep trying for up to four minutes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6279',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'When should you stop trying to resuscitate a casualty?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When you think they`re dead',
            },
            {
                char: 'b',
                text: 'When they can breathe without help',
            },
            {
                char: 'c',
                text: 'When they`ve turned blue',
            },
            {
                char: 'd',
                text: 'When you think the ambulance is coming',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6283',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident. A casualty has an injured arm that`s bleeding heavily. What could you do to help while waiting for the emergency services to arrive?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Remove clothing around the wound',
            },
            {
                char: 'b',
                text: 'Dab the wound',
            },
            {
                char: 'c',
                text: 'Get them a drink',
            },
            {
                char: 'd',
                text: 'Try to stem the flow of blood',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6284',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident. The emergency services have already been called. A pedestrian is bleeding heavily from a leg wound, but their leg isn`t broken. What could you do to help them?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Dab the wound to stop the bleeding',
            },
            {
                char: 'b',
                text: 'Give them some painkiller tablets',
            },
            {
                char: 'c',
                text: 'Apply firm pressure to the wound',
            },
            {
                char: 'd',
                text: 'Fetch them a warm drink',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6285',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At an incident, a casualty is unconscious but still breathing. Why would you move them?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Because an ambulance is on the way',
            },
            {
                char: 'b',
                text: 'Because bystanders advise you to',
            },
            {
                char: 'c',
                text: 'Because there`s further danger',
            },
            {
                char: 'd',
                text: 'Because they look uncomfortable',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6286',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At an incident, you suspect a casualty has back injuries. What`s the best way to help them?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Offer them a drink',
            },
            {
                char: 'b',
                text: 'Leave them where they are',
            },
            {
                char: 'c',
                text: 'Raise their legs',
            },
            {
                char: 'd',
                text: 'Offer them a cigarette',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6287',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'The area around an incident is safe. What`s the best way to help an injured person?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Get them out of their vehicle',
            },
            {
                char: 'b',
                text: 'Give them a drink',
            },
            {
                char: 'c',
                text: 'Give them something to eat',
            },
            {
                char: 'd',
                text: 'Keep them in the vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6290',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re stopped by a police officer for a suspected motoring offence. Which document will you always be asked to produce?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your driving licence',
            },
            {
                char: 'b',
                text: 'Your vehicle registration document',
            },
            {
                char: 'c',
                text: 'Your vehicle`s MOT certificate',
            },
            {
                char: 'd',
                text: 'Your theory test certificate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6530',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At the scene of an incident, a person has become hysterical. How should you calm them down?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'By leaving them to quietly recover',
            },
            {
                char: 'b',
                text: 'By engaging them in banter',
            },
            {
                char: 'c',
                text: 'By giving them a hot drink',
            },
            {
                char: 'd',
                text: 'By talking to them quietly and firmly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6531',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at an incident. Why may it be harmful to move a casualty?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You could damage your back',
            },
            {
                char: 'b',
                text: 'You could get blood on your hands',
            },
            {
                char: 'c',
                text: 'You could be accused of assault',
            },
            {
                char: 'd',
                text: 'You could cause more injury',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6532',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At the scene of a crash, a casualty is in contact with live electrical cables. What should you use to break the electrical connection?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A metal pole',
            },
            {
                char: 'b',
                text: 'Woollen gloves',
            },
            {
                char: 'c',
                text: 'A damp piece of cloth',
            },
            {
                char: 'd',
                text: 'A length of wood',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6568',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Where should you stand when using a motorway emergency telephone?',
        questionImg: 'TS4621.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In front of the barrier',
            },
            {
                char: 'b',
                text: 'Facing the oncoming traffic',
            },
            {
                char: 'c',
                text: 'With your back to the traffic',
            },
            {
                char: 'd',
                text: 'Looking towards the grass verge',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6611',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Which type of fire extinguisher shouldn`t be used on flammable liquids?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Water (red)',
            },
            {
                char: 'b',
                text: 'Foam (cream)',
            },
            {
                char: 'c',
                text: 'Dry powder (blue)',
            },
            {
                char: 'd',
                text: 'Carbon dioxide (black)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6640',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your vehicle breaks down on a motorway. What should you do if you can`t get it fully onto the hard shoulder?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stand at the edge of the carriageway to warn others',
            },
            {
                char: 'b',
                text: 'Place a warning triangle in the lane behind your vehicle',
            },
            {
                char: 'c',
                text: 'Wear a bright jacket and stand in the lane behind your vehicle',
            },
            {
                char: 'd',
                text: 'Call for help using the nearest emergency telephone',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6755',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your engine catches fire. What should you do before attempting to put the fire out?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Shut off the fuel supply',
            },
            {
                char: 'b',
                text: 'Open the engine housing wide',
            },
            {
                char: 'c',
                text: 'Drive to the nearest fire station',
            },
            {
                char: 'd',
                text: 'Empty the air tanks',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7027',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'What should you do before driving into a tunnel?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Switch off your radio',
            },
            {
                char: 'b',
                text: 'Remove your sunglasses',
            },
            {
                char: 'c',
                text: 'Close your sunroof',
            },
            {
                char: 'd',
                text: 'Switch on your windscreen wipers ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7028',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'What should you do when you drive into a tunnel?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Use parking lights',
            },
            {
                char: 'b',
                text: 'Use front spotlights',
            },
            {
                char: 'c',
                text: 'Use dipped headlights',
            },
            {
                char: 'd',
                text: 'Use rear fog lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7029',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'What should you do before entering a tunnel?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Put on your sunglasses',
            },
            {
                char: 'b',
                text: 'Check your tyre pressures',
            },
            {
                char: 'c',
                text: 'Change to a lower gear',
            },
            {
                char: 'd',
                text: 'Tune your radio to a local channel',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7030',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re driving through a congested tunnel. What should you do if you have to stop?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop very close to the vehicle in front to save space',
            },
            {
                char: 'b',
                text: 'Ignore any message signs as they`re never up to date ',
            },
            {
                char: 'c',
                text: 'Keep a safe distance from the vehicle in front ',
            },
            {
                char: 'd',
                text: 'Put your headlights on full beam',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7031',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re driving through a tunnel. What should you do if your vehicle breaks down?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch on hazard warning lights',
            },
            {
                char: 'b',
                text: 'Remain in your vehicle ',
            },
            {
                char: 'c',
                text: 'Wait for the police to find you',
            },
            {
                char: 'd',
                text: 'Rely on CCTV cameras seeing you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7033',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your vehicle catches fire while you`re driving through a tunnel. What should you do if the vehicle can still be driven?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Leave it where it is, with the engine running',
            },
            {
                char: 'b',
                text: 'Stop, then walk to an emergency telephone point',
            },
            {
                char: 'c',
                text: 'Park it away from the carriageway',
            },
            {
                char: 'd',
                text: 'Drive it out of the tunnel if you can do so',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7035',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What should you do when you`re driving through a tunnel in heavy traffic?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stay close to the vehicle in front to reduce congestion',
            },
            {
                char: 'b',
                text: 'Switch off your dipped headlights to reduce dazzle',
            },
            {
                char: 'c',
                text: 'Closely follow the tail lights of other vehicles',
            },
            {
                char: 'd',
                text: 'Follow the instructions given by variable message signs',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7152',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'A vehicle has rolled over and caught fire. The driver`s hands and arms have been burned. How could you help the driver?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Douse the burns with cool water',
            },
            {
                char: 'b',
                text: 'Try to put out the fire',
            },
            {
                char: 'c',
                text: 'Remove smouldering clothing',
            },
            {
                char: 'd',
                text: 'Remove anything sticking to the burns',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7153',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'At an incident, a casualty has stopped breathing. How could you help them?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By opening their airway',
            },
            {
                char: 'b',
                text: 'By tilting their head as far forward as possible',
            },
            {
                char: 'c',
                text: 'By raising their legs',
            },
            {
                char: 'd',
                text: 'By giving them something to drink',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7156',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`ve been involved in an incident and damaged some property. What should you do if nobody else is present and your vehicle is still roadworthy?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop, then report the incident to the police within 24 hours',
            },
            {
                char: 'b',
                text: 'Leave the scene. Don`t report the incident if there are no witnesses ',
            },
            {
                char: 'c',
                text: 'Stop, then report the incident to the police after 48 hours ',
            },
            {
                char: 'd',
                text: 'Leave the scene. Don`t report the incident if there were no injuries',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7157',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`ve had an incident while driving through a tunnel. You aren`t injured but your vehicle can`t be driven. What`s the first thing you should do in this situation?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Rely on other drivers to phone the police',
            },
            {
                char: 'b',
                text: 'Switch off the engine and switch on hazard warning lights',
            },
            {
                char: 'c',
                text: 'Take the names of witnesses and other drivers',
            },
            {
                char: 'd',
                text: 'Sweep up any debris that`s in the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7158',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'While driving through a tunnel, your vehicle catches fire. What`s the first thing you should do if the vehicle can`t be driven out of the tunnel?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Wait for the police; tunnels are regularly patrolled ',
            },
            {
                char: 'b',
                text: 'Stay with your vehicle; you`ll be seen by the CCTV cameras',
            },
            {
                char: 'c',
                text: 'Stop at the side of the road and switch off the engine',
            },
            {
                char: 'd',
                text: 'Don`t put out the fire; wait for the emergency services ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7281',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at the scene of an incident. What would suggest someone is suffering from shock?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A flushed complexion',
            },
            {
                char: 'b',
                text: 'Being alert',
            },
            {
                char: 'c',
                text: 'Rapid shallow breathing',
            },
            {
                char: 'd',
                text: 'Being very hungry',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7315',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What`s the first thing you should try to do if your vehicle catches fire while you`re driving through a tunnel?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drive out of the tunnel',
            },
            {
                char: 'b',
                text: 'Stop at the side of the tunnel',
            },
            {
                char: 'c',
                text: 'Stop and put out the fire',
            },
            {
                char: 'd',
                text: 'Stop and leave the vehicle immediately',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7335',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You arrive at the scene of an incident. How should you deal with someone who is hysterical?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Talk to them quietly and firmly ',
            },
            {
                char: 'b',
                text: 'Let them wander off to calm down',
            },
            {
                char: 'c',
                text: 'Restrain them physically',
            },
            {
                char: 'd',
                text: 'Shout loudly to get their attention',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7356',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at the scene of a traffic incident. What are the symptoms of someone suffering from shock?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Rapid pulse and sweating',
            },
            {
                char: 'b',
                text: 'Flushed complexion and deep breathing',
            },
            {
                char: 'c',
                text: 'Slow pulse and dry skin',
            },
            {
                char: 'd',
                text: 'Muscle spasms and an itchy rash',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7385',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re at the scene of a collision. People are injured. What should be done when the risk of further collisions has been dealt with?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pull people who are hurt out of their vehicles',
            },
            {
                char: 'b',
                text: 'Clear a parking area for the emergency services',
            },
            {
                char: 'c',
                text: 'Make sure the emergency services have been called',
            },
            {
                char: 'd',
                text: 'Get the casualties to drink something sweet',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8076',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re driving a coach carrying elderly people. You arrive at the scene of an incident. What should you do if the emergency services have already arrived?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Ask your passengers to find out what`s happening',
            },
            {
                char: 'b',
                text: 'Don`t tell your passengers anything in case you upset them',
            },
            {
                char: 'c',
                text: 'Leave your passengers on the bus and see what`s happening',
            },
            {
                char: 'd',
                text: 'Tell your passengers what`s happening without upsetting them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8077',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What should you do if your bus has been involved in an incident with other vehicles?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Switch off your headlights',
            },
            {
                char: 'b',
                text: 'Switch off the fuel supply',
            },
            {
                char: 'c',
                text: 'Switch off the air conditioning',
            },
            {
                char: 'd',
                text: 'Switch off the destination signs',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8078',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'What must you do if your bus has hit a parked vehicle and the owner can`t be found?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Report the incident to the police within seven days',
            },
            {
                char: 'b',
                text: 'Report the incident to the owner as soon as possible',
            },
            {
                char: 'c',
                text: 'Report the incident to the owner within seven days',
            },
            {
                char: 'd',
                text: 'Report the incident to the police within 24 hours',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'DD8079',
        topicCode: 'Incidents, accidents and emergencies',
        question: 'How should you care for a passenger who`s in shock?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Give them liquids',
            },
            {
                char: 'b',
                text: 'Keep them moving',
            },
            {
                char: 'c',
                text: 'Encourage them to sleep',
            },
            {
                char: 'd',
                text: 'Keep them warm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8080',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'A passenger on your bus has stopped breathing. You help them by giving CPR. When should you stop doing this?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When they can breathe on their own',
            },
            {
                char: 'b',
                text: 'When you think the passenger has died',
            },
            {
                char: 'c',
                text: 'When their skin has turned blue',
            },
            {
                char: 'd',
                text: 'When you think the ambulance is coming',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8081',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your bus is involved in an incident. What should you do if you have a passenger who`s unconscious but still breathing?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Get medical help',
            },
            {
                char: 'b',
                text: 'Check their pulse',
            },
            {
                char: 'c',
                text: 'Give them liquid',
            },
            {
                char: 'd',
                text: 'Lie them on their back',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8173',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your bus has stopped at the scene of an incident. Why should you consider moving your passengers to the front of the bus?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To improve weight distribution',
            },
            {
                char: 'b',
                text: 'To reduce the risk of injury from a rear-end collision',
            },
            {
                char: 'c',
                text: 'To be closer to emergency exits',
            },
            {
                char: 'd',
                text: 'To be witnesses to the incident',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8221',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your bus hits a low railway bridge. Nobody is injured. When and to whom should you report the incident?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Immediately, to your employer',
            },
            {
                char: 'b',
                text: 'Within 24 hours, to the railway authority',
            },
            {
                char: 'c',
                text: 'Within seven days, to the police',
            },
            {
                char: 'd',
                text: 'Immediately, to the railway authority',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'DD8266',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'While driving through a tunnel, your coach catches fire. What should you do if the vehicle can`t be driven any further?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move the passengers to the rear of the coach',
            },
            {
                char: 'b',
                text: 'Get the passengers off and keep them together',
            },
            {
                char: 'c',
                text: 'Make sure the passengers stay in their seats',
            },
            {
                char: 'd',
                text: 'Move the passengers to the front of the coach',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8311',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'You`re carrying a bus full of passengers. What must you do if you see smoke coming from the engine compartment?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Move the passengers to the front of the bus',
            },
            {
                char: 'b',
                text: 'Open the engine cover to investigate',
            },
            {
                char: 'c',
                text: 'Drive to the bus station for a replacement bus',
            },
            {
                char: 'd',
                text: 'Get everyone off the bus quickly and safely',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8358',
        topicCode: 'Incidents, accidents and emergencies',
        question:
            'Your bus catches fire in a tunnel and can`t be driven any further. What should you do when you`ve stopped safely at the side of the road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Move your passengers to the nearest tunnel exit',
            },
            {
                char: 'b',
                text: 'Use the extinguisher to put out the fire',
            },
            {
                char: 'c',
                text: 'Keep your passengers together in front of the vehicle',
            },
            {
                char: 'd',
                text: 'Stand behind your vehicle and warn other drivers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5083',
        topicCode: 'Vehicle condition',
        question:
            'What`s the main reason for cleaning your wheels and tyres when you leave a building site?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To keep the tyres in good condition',
            },
            {
                char: 'b',
                text: 'To prevent the tyres from damaging the road surface',
            },
            {
                char: 'c',
                text: 'To reduce air leakage from the tyre valves',
            },
            {
                char: 'd',
                text: 'To stop mud dropping onto the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5084',
        topicCode: 'Vehicle condition',
        question:
            'Your vehicle has double rear wheels. Why should you check them before leaving a building site?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To make sure the diff-lock is engaged',
            },
            {
                char: 'b',
                text: 'To make sure the diff-lock is disengaged',
            },
            {
                char: 'c',
                text: 'To check that the load-sensing valve is operating correctly',
            },
            {
                char: 'd',
                text: 'To make sure bricks or debris aren`t wedged between the wheels',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5085',
        topicCode: 'Vehicle condition',
        question:
            'What should you check before you drive off a muddy building site onto the road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The diff-lock is disengaged',
            },
            {
                char: 'b',
                text: 'The diff-lock is engaged',
            },
            {
                char: 'c',
                text: 'The steering lock is engaged',
            },
            {
                char: 'd',
                text: 'The twist lock is disengaged',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5086 ',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a lorry along a motorway. You notice that you`re losing tread from one of your tyres. What should you do?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder and phone for assistance',
            },
            {
                char: 'b',
                text: 'Stop on the hard shoulder and change the wheel',
            },
            {
                char: 'c',
                text: 'Continue driving to the next service station',
            },
            {
                char: 'd',
                text: 'Continue driving and leave by the next exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5087',
        topicCode: 'Vehicle condition',
        question:
            'What`s the minimum depth of tread required over three-quarters of the breadth of a lorry tyre?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '1 mm',
            },
            {
                char: 'b',
                text: '1.5 mm',
            },
            {
                char: 'c',
                text: '2.5 mm',
            },
            {
                char: 'd',
                text: '5 mm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5088',
        topicCode: 'Vehicle condition',
        question:
            'What`s the final thing you should do after recoupling a trailer?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Connect the brake lines',
            },
            {
                char: 'b',
                text: 'Release the trailer parking brake',
            },
            {
                char: 'c',
                text: 'Connect the electrical lines',
            },
            {
                char: 'd',
                text: 'Raise the trailer legs',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5277',
        topicCode: 'Vehicle condition',
        question:
            'When should your lorry coupling system (fifth wheel) be checked and lubricated?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only prior to an MOT test',
            },
            {
                char: 'b',
                text: 'Every 6 months',
            },
            {
                char: 'c',
                text: 'Yearly',
            },
            {
                char: 'd',
                text: 'Regularly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5349',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a new articulated lorry that`s fully laden. You notice that the steering feels heavy. What`s the most likely reason?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The road is icy',
            },
            {
                char: 'b',
                text: 'The power steering is faulty',
            },
            {
                char: 'c',
                text: 'The lorry is new',
            },
            {
                char: 'd',
                text: 'The load on the trailer has shifted',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5356',
        topicCode: 'Vehicle condition',
        question: 'When should wheel nuts be checked?',
        questionImg: 'VL2517.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'After driving down a steep hill',
            },
            {
                char: 'b',
                text: 'Soon after initial tightening',
            },
            {
                char: 'c',
                text: 'Just after driving on a motorway',
            },
            {
                char: 'd',
                text: 'After unloading',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5387',
        topicCode: 'Vehicle condition',
        question: 'What would you secure with a dog clip?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The kingpin release handle',
            },
            {
                char: 'b',
                text: 'The air lines',
            },
            {
                char: 'c',
                text: 'The parking brake',
            },
            {
                char: 'd',
                text: 'The diff-lock',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5388',
        topicCode: 'Vehicle condition',
        question:
            'How frequently should the components of a fifth-wheel coupling be inspected?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Daily',
            },
            {
                char: 'b',
                text: 'Weekly',
            },
            {
                char: 'c',
                text: 'Monthly',
            },
            {
                char: 'd',
                text: 'Yearly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5389',
        topicCode: 'Vehicle condition',
        question: 'What should you check for wear or damage on a drawbar unit?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Dog clip',
            },
            {
                char: 'b',
                text: 'Fifth wheel',
            },
            {
                char: 'c',
                text: 'Kingpin release handle',
            },
            {
                char: 'd',
                text: 'Eyelet coupling',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5435',
        topicCode: 'Vehicle condition',
        question: 'What`s the fifth-wheel coupling used for?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To connect the tractor unit to the trailer',
            },
            {
                char: 'b',
                text: 'To support the trailer when it`s detached',
            },
            {
                char: 'c',
                text: 'To prevent the trailer from jack-knifing',
            },
            {
                char: 'd',
                text: 'To attach air lines to the trailer',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5436',
        topicCode: 'Vehicle condition',
        question:
            'How often should the components of the fifth-wheel coupling be inspected?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Every 3000 miles (5000 km)',
            },
            {
                char: 'b',
                text: 'Every 6000 miles (10 000 km)',
            },
            {
                char: 'c',
                text: 'Every 9000 miles (15 000 km)',
            },
            {
                char: 'd',
                text: 'Every 12 000 miles (20 000 km)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC6754',
        topicCode: 'Vehicle condition',
        question:
            'You`re uncoupling a trailer. What must you do before disconnecting any of the air lines?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drain the air tanks',
            },
            {
                char: 'b',
                text: 'Apply the trailer parking brake',
            },
            {
                char: 'c',
                text: 'Lower the landing gear',
            },
            {
                char: 'd',
                text: 'Disconnect the electrical line',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6291',
        topicCode: 'Vehicle condition',
        question:
            'You`re checking your vehicle`s tyres before starting a long motorway journey. What check should be made on each tyre?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Air pressure',
            },
            {
                char: 'b',
                text: 'Tracking',
            },
            {
                char: 'c',
                text: 'Valve clearance',
            },
            {
                char: 'd',
                text: 'Tyre profile',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6292',
        topicCode: 'Vehicle condition',
        question:
            'What should you do if you notice that two wheel nuts are missing from one of the wheels on your vehicle?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue your journey',
            },
            {
                char: 'b',
                text: 'Drive to the nearest tyre depot',
            },
            {
                char: 'c',
                text: 'Use a nut from another wheel',
            },
            {
                char: 'd',
                text: 'Park and phone for assistance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6293',
        topicCode: 'Vehicle condition',
        question: 'What would be illegal?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Using different makes of tyre on the same axle',
            },
            {
                char: 'b',
                text: 'Using a tyre with a recut tread',
            },
            {
                char: 'c',
                text: 'Using a tyre with a tread depth of 1.3 mm',
            },
            {
                char: 'd',
                text: 'Using a tyre with exposed ply or cord',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6294',
        topicCode: 'Vehicle condition',
        question:
            'In very cold weather, moisture can freeze in your vehicle`s air storage tanks. What can you do to help prevent this from happening?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Cover the air tanks with a blanket',
            },
            {
                char: 'b',
                text: 'Drain the tanks daily',
            },
            {
                char: 'c',
                text: 'Use the brakes frequently',
            },
            {
                char: 'd',
                text: 'Pump the brakes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6295 ',
        topicCode: 'Vehicle condition',
        question: 'What does this warning light on the instrument panel mean?',
        questionImg: 'TS4036.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Low oil pressure',
            },
            {
                char: 'b',
                text: 'Battery discharge',
            },
            {
                char: 'c',
                text: 'Braking-system fault',
            },
            {
                char: 'd',
                text: 'Door open',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6296',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving along a motorway. What should you do if the air-pressure warning device starts to operate?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop immediately in the lane you`re in',
            },
            {
                char: 'b',
                text: 'Continue slowly to the next service area',
            },
            {
                char: 'c',
                text: 'Stop on the hard shoulder as soon as possible',
            },
            {
                char: 'd',
                text: 'Leave the motorway at the next exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6297',
        topicCode: 'Vehicle condition',
        question:
            'Your vehicle has broken down at night on a two-way road. How should you try to leave the vehicle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On the left of the road',
            },
            {
                char: 'b',
                text: 'Partly on the pavement',
            },
            {
                char: 'c',
                text: 'On a grass verge',
            },
            {
                char: 'd',
                text: 'On the right of the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6305',
        topicCode: 'Vehicle condition',
        question:
            'What should you do if your power-assisted steering fails suddenly?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue driving to the nearest repair centre',
            },
            {
                char: 'b',
                text: 'Return to the depot',
            },
            {
                char: 'c',
                text: 'Continue your journey at a slower speed',
            },
            {
                char: 'd',
                text: 'Park and get help',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6306',
        topicCode: 'Vehicle condition',
        question:
            'Your steering suddenly becomes heavy to turn. What could make this happen?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'An uneven road surface',
            },
            {
                char: 'b',
                text: 'A loss of air-brake pressure',
            },
            {
                char: 'c',
                text: 'A faulty parking brake',
            },
            {
                char: 'd',
                text: 'A fault with the power-assisted steering',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6307',
        topicCode: 'Vehicle condition',
        question:
            'What should you do if the brake pedal becomes hard to press?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue to drive and report it at the end of the day',
            },
            {
                char: 'b',
                text: 'Pump the brake pedal continuously',
            },
            {
                char: 'c',
                text: 'Drain the air tanks and then continue',
            },
            {
                char: 'd',
                text: 'Park and phone for help',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6308',
        topicCode: 'Vehicle condition',
        question: 'Why do air tanks on brake systems need to be drained?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To remove excess coolant',
            },
            {
                char: 'b',
                text: 'To remove rain water that`s seeped into the system',
            },
            {
                char: 'c',
                text: 'To remove any oil leaks that collect here',
            },
            {
                char: 'd',
                text: 'To remove moisture drawn in from the atmosphere',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6309',
        topicCode: 'Vehicle condition',
        question:
            'You`re checking your vehicle. What should you do if you discover an air leak in the braking system?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive slowly to the nearest garage',
            },
            {
                char: 'b',
                text: 'Check the leak from time to time on your journey',
            },
            {
                char: 'c',
                text: 'Leave the vehicle parked and report the fault immediately',
            },
            {
                char: 'd',
                text: 'Start your journey and report the fault on your return',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6311',
        topicCode: 'Vehicle condition',
        question:
            'A loud buzzer sounds in your vehicle. What`s this most likely to indicate?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Low oil pressure',
            },
            {
                char: 'b',
                text: 'Low air pressure',
            },
            {
                char: 'c',
                text: 'Low tyre pressure',
            },
            {
                char: 'd',
                text: 'Low fuel level',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6317',
        topicCode: 'Vehicle condition',
        question:
            'What proportion of the width of a tyre must have at least the legal minimum depth of tread?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'One-quarter',
            },
            {
                char: 'b',
                text: 'One-half',
            },
            {
                char: 'c',
                text: 'Five-eighths',
            },
            {
                char: 'd',
                text: 'Three-quarters',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6322',
        topicCode: 'Vehicle condition',
        question:
            'You discover that one of your rear brake-light bulbs has failed. How soon should it be replaced?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Immediately',
            },
            {
                char: 'b',
                text: 'On return to your base',
            },
            {
                char: 'c',
                text: 'Within five days',
            },
            {
                char: 'd',
                text: 'At the next service',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6575',
        topicCode: 'Vehicle condition',
        question:
            'What can you add to diesel fuel to prevent it from becoming less effective at low temperatures? ',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Anti-freeze',
            },
            {
                char: 'b',
                text: 'Anti-waxing additives',
            },
            {
                char: 'c',
                text: 'Petrol ',
            },
            {
                char: 'd',
                text: 'Paraffin',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6626',
        topicCode: 'Vehicle condition',
        question:
            'You`re about to start a long journey midway through the day. What should you do if you notice that the sidelights work but the headlights are faulty?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Don`t drive until they`re repaired',
            },
            {
                char: 'b',
                text: 'Drive only until the light begins to fade',
            },
            {
                char: 'c',
                text: 'Avoid driving on motorways after dark',
            },
            {
                char: 'd',
                text: 'Drive only if the weather is good',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6628',
        topicCode: 'Vehicle condition',
        question:
            'Before starting a journey, you want to check your brake-system warning lights. What can you do when these aren`t operated by the ignition switch?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Look for a check switch on the dashboard',
            },
            {
                char: 'b',
                text: 'Get someone behind to check your brake lights',
            },
            {
                char: 'c',
                text: 'Check them at the end of your journey',
            },
            {
                char: 'd',
                text: 'Pump the brake pedal a number of times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6633',
        topicCode: 'Vehicle condition',
        question:
            'On motorways, you`re usually driving at higher speeds for long distances. What effect can this have on your tyres?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They`ll be more likely to overheat and disintegrate',
            },
            {
                char: 'b',
                text: 'They`ll have lower rolling resistance',
            },
            {
                char: 'c',
                text: 'They`ll need less air pressure',
            },
            {
                char: 'd',
                text: 'They`ll become very slippery',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6639',
        topicCode: 'Vehicle condition',
        question:
            'You notice that one of your tyres has a bulge in the side wall. What will happen if you drive the vehicle?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your tachograph reading won`t be accurate',
            },
            {
                char: 'b',
                text: 'Your speedometer will give an incorrect reading',
            },
            {
                char: 'c',
                text: 'The vehicle will become unstable on corners',
            },
            {
                char: 'd',
                text: 'You`ll break the law and risk prosecution',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6648',
        topicCode: 'Vehicle condition',
        question: 'What`s the purpose of a preheating device?',
        questionImg: 'TS4035h.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To heat the cab',
            },
            {
                char: 'b',
                text: 'To heat the gearbox',
            },
            {
                char: 'c',
                text: 'To heat the combustion chambers',
            },
            {
                char: 'd',
                text: 'To heat the seat',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6649',
        topicCode: 'Vehicle condition',
        question: 'Where does a high-pressure fuel injector deliver fuel?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Into the carburettors',
            },
            {
                char: 'b',
                text: 'Into the combustion chamber',
            },
            {
                char: 'c',
                text: 'Into the manifold',
            },
            {
                char: 'd',
                text: 'Into the crankcase',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6656',
        topicCode: 'Vehicle condition',
        question:
            'Why is it important to avoid overfilling the engine with oil?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It could leave an oil stain on the road',
            },
            {
                char: 'b',
                text: 'It will increase the amount of exhaust gases',
            },
            {
                char: 'c',
                text: 'It could increase pressure in the engine and cause damage',
            },
            {
                char: 'd',
                text: 'It will damage the exhaust system',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6659',
        topicCode: 'Vehicle condition',
        question:
            'Why should you use an approved coolant solution in your engine`s cooling system?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To protect the coolant from freezing',
            },
            {
                char: 'b',
                text: 'For easier starting from cold',
            },
            {
                char: 'c',
                text: 'To prevent the air tank from freezing',
            },
            {
                char: 'd',
                text: 'For effective cab heating ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6666',
        topicCode: 'Vehicle condition',
        question: 'When should you check the oil level in your engine?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When the engine is running',
            },
            {
                char: 'b',
                text: 'When the engine is cold',
            },
            {
                char: 'c',
                text: 'When the engine is warm',
            },
            {
                char: 'd',
                text: 'When the engine is hot',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6667',
        topicCode: 'Vehicle condition',
        question: 'When should anti-freeze be used in the cooling system?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In winter only',
            },
            {
                char: 'b',
                text: 'All year round',
            },
            {
                char: 'c',
                text: 'In summer only',
            },
            {
                char: 'd',
                text: 'When starting from cold',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6669',
        topicCode: 'Vehicle condition',
        question: 'What does this warning light on the instrument panel mean?',
        questionImg: 'TS4035a.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Low fuel pressure',
            },
            {
                char: 'b',
                text: 'Low oil pressure',
            },
            {
                char: 'c',
                text: 'Low water pressure',
            },
            {
                char: 'd',
                text: 'Low air pressure',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6674',
        topicCode: 'Vehicle condition',
        question:
            'What does it mean if the ignition warning light comes on while you`re driving?',
        questionImg: 'TS4035b.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The oil pressure is low',
            },
            {
                char: 'b',
                text: 'There`s an electrical fault',
            },
            {
                char: 'c',
                text: 'The air pressure is low',
            },
            {
                char: 'd',
                text: 'There`s a hydraulic fault',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6706',
        topicCode: 'Vehicle condition',
        question:
            'What will happen if you follow a regular vehicle maintenance schedule?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It will reduce breakdowns',
            },
            {
                char: 'b',
                text: 'It will increase fuel bills',
            },
            {
                char: 'c',
                text: 'It will allow heavier loads to be carried',
            },
            {
                char: 'd',
                text: 'It will reduce insurance premiums',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6720',
        topicCode: 'Vehicle condition',
        question:
            'You`ve had to change a wheel on your vehicle. When should the wheel nuts be checked again?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'At the next service interval',
            },
            {
                char: 'b',
                text: 'When they`re cold',
            },
            {
                char: 'c',
                text: 'When they`re hot',
            },
            {
                char: 'd',
                text: 'Shortly afterwards',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6737',
        topicCode: 'Vehicle condition',
        question: 'How can vehicle breakdowns be reduced?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By driving slowly',
            },
            {
                char: 'b',
                text: 'By regular servicing',
            },
            {
                char: 'c',
                text: 'By regular cleaning',
            },
            {
                char: 'd',
                text: 'By avoiding bad weather',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6742',
        topicCode: 'Vehicle condition',
        question:
            'Why should your engine oil be changed at the recommended intervals?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To reduce friction and wear',
            },
            {
                char: 'b',
                text: 'For better steering control',
            },
            {
                char: 'c',
                text: 'To prevent oil leaks',
            },
            {
                char: 'd',
                text: 'To improve clutch wear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6744',
        topicCode: 'Vehicle condition',
        question:
            'Where should you park your vehicle before checking the engine oil level?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On sloping ground',
            },
            {
                char: 'b',
                text: 'On a steep gradient',
            },
            {
                char: 'c',
                text: 'On flat ground',
            },
            {
                char: 'd',
                text: 'On a downhill slope',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6745',
        topicCode: 'Vehicle condition',
        question: 'What could happen if you overfill your engine with oil?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The handling may improve',
            },
            {
                char: 'b',
                text: 'Exhaust emissions could be reduced',
            },
            {
                char: 'c',
                text: 'Some gaskets might be damaged',
            },
            {
                char: 'd',
                text: 'You could wait longer before the next service',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6753',
        topicCode: 'Vehicle condition',
        question:
            'You`ve stopped on a firm, level surface. What`s the first thing you must do before you uncouple the trailer?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Lower the trailer legs to the ground',
            },
            {
                char: 'b',
                text: 'Apply the parking brake',
            },
            {
                char: 'c',
                text: 'Release the brake air lines',
            },
            {
                char: 'd',
                text: 'Uncouple the electrical lines',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6857',
        topicCode: 'Vehicle condition',
        question: 'When should you check the wheel nuts on your vehicle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Before any journey',
            },
            {
                char: 'b',
                text: 'Only before long trips',
            },
            {
                char: 'c',
                text: 'Every 1000 miles (1600 km)',
            },
            {
                char: 'd',
                text: 'Annually',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7085',
        topicCode: 'Vehicle condition',
        question:
            'What should you do if thick black smoke is coming from the exhaust of your vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue on to the nearest garage',
            },
            {
                char: 'b',
                text: 'Return to your depot and report the problem',
            },
            {
                char: 'c',
                text: 'Stop in a safe place and get help',
            },
            {
                char: 'd',
                text: 'Drive slowly with your hazard warning lights on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7117',
        topicCode: 'Vehicle condition',
        question:
            'You hit the kerb at speed. What part of your vehicle should you check for damage?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Exhaust',
            },
            {
                char: 'b',
                text: 'Brakes',
            },
            {
                char: 'c',
                text: 'Lights',
            },
            {
                char: 'd',
                text: 'Tyres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7118',
        topicCode: 'Vehicle condition',
        question: 'What`s most likely to cause a burst tyre?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Frequent gear changing in varying conditions',
            },
            {
                char: 'b',
                text: 'Running tyres under-inflated',
            },
            {
                char: 'c',
                text: 'Always operating in cool weather',
            },
            {
                char: 'd',
                text: 'Mixing tyres with different tread depth',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7121',
        topicCode: 'Vehicle condition',
        question:
            'When would you use `kickdown` on a vehicle that has automatic transmission?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To give quicker acceleration',
            },
            {
                char: 'b',
                text: 'To apply the emergency brakes',
            },
            {
                char: 'c',
                text: 'To stop more smoothly',
            },
            {
                char: 'd',
                text: 'To go down a steep hill',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7122',
        topicCode: 'Vehicle condition',
        question:
            'What`s the most likely cause if your steering starts to feel heavy?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Faulty power steering',
            },
            {
                char: 'b',
                text: 'An icy road',
            },
            {
                char: 'c',
                text: 'A burst rear tyre',
            },
            {
                char: 'd',
                text: 'A wet road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7123',
        topicCode: 'Vehicle condition',
        question:
            'Your vehicle suffers a tyre blow-out. How could this create a hazard for other road users?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Scattered debris',
            },
            {
                char: 'b',
                text: 'Skid marks',
            },
            {
                char: 'c',
                text: 'Suspension failure',
            },
            {
                char: 'd',
                text: 'Axle damage',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7159',
        topicCode: 'Vehicle condition',
        question:
            'The Driver and Vehicle Standards Agency (DVSA) and the police carry out spot checks for faulty vehicles. What will happen to the vehicle if serious defects are found?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It will be impounded until a new driver is found',
            },
            {
                char: 'b',
                text: 'It will be restricted to 30 mph for the remainder of the journey',
            },
            {
                char: 'c',
                text: 'It will be prohibited from further use until the defects are rectified',
            },
            {
                char: 'd',
                text: 'It will be ordered back to the depot to unload goods or passengers',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7160',
        topicCode: 'Vehicle condition',
        question:
            'At a Driver and Vehicle Standards Agency (DVSA) roadside check, your vehicle is found to have serious defects and you may no longer use it. Who will DVSA share this information with?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The Driver and Vehicle Licensing Agency',
            },
            {
                char: 'b',
                text: 'The Traffic Commissioner',
            },
            {
                char: 'c',
                text: 'The Road Transport Industry Training Body',
            },
            {
                char: 'd',
                text: 'The Bus, Coach and Commercial Vehicle Council',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7161',
        topicCode: 'Vehicle condition',
        question: 'What could happen if there isn`t enough oil in your engine?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It may run faster',
            },
            {
                char: 'b',
                text: 'It may break down',
            },
            {
                char: 'c',
                text: 'It may use less fuel',
            },
            {
                char: 'd',
                text: 'It may produce more power',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7162',
        topicCode: 'Vehicle condition',
        question:
            'While driving, your engine-oil warning light comes on. Why could it be dangerous to continue driving?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The brakes will fail',
            },
            {
                char: 'b',
                text: 'The engine may be damaged',
            },
            {
                char: 'c',
                text: 'You`ll need to have the vehicle serviced',
            },
            {
                char: 'd',
                text: 'You`ll need to replace the carburettor',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7165',
        topicCode: 'Vehicle condition',
        question:
            'A tyre has been replaced on your vehicle. What precautions should be taken when tightening the wheel nuts?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Tighten the nuts in a clockwise direction ',
            },
            {
                char: 'b',
                text: 'Fully tighten each nut before moving to the next',
            },
            {
                char: 'c',
                text: 'Tighten the nuts evenly with a torque wrench',
            },
            {
                char: 'd',
                text: 'Tighten the nuts with an air-operated power tool',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7170',
        topicCode: 'Vehicle condition',
        question: 'What could happen if you overfill your engine with oil?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Loss of power',
            },
            {
                char: 'b',
                text: 'Lower emissions',
            },
            {
                char: 'c',
                text: 'Better handling',
            },
            {
                char: 'd',
                text: 'Longer service intervals',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7322',
        topicCode: 'Vehicle condition',
        question: 'Which tool is essential for fitting a road wheel?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Torque wrench',
            },
            {
                char: 'b',
                text: 'Ring spanner',
            },
            {
                char: 'c',
                text: 'Open-end spanner',
            },
            {
                char: 'd',
                text: 'Adjustable wrench',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7352',
        topicCode: 'Vehicle condition',
        question:
            'What`s the most likely reason for a diesel-engined vehicle running erratically in very cold weather?\n',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The endurance brake engaging',
            },
            {
                char: 'b',
                text: 'The air conditioning not working',
            },
            {
                char: 'c',
                text: 'The speed limiter operating',
            },
            {
                char: 'd',
                text: 'The fuel partly solidifying',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7353',
        topicCode: 'Vehicle condition',
        question: 'What do heated fuel lines prevent?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The cab temperature from dropping',
            },
            {
                char: 'b',
                text: 'The radiator from freezing',
            },
            {
                char: 'c',
                text: 'The windows from misting',
            },
            {
                char: 'd',
                text: 'The diesel from solidifying',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7354',
        topicCode: 'Vehicle condition',
        question:
            'Why should you carry out a daily walk-round check before setting off?\n',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To check your route',
            },
            {
                char: 'b',
                text: 'To check for any parking violations',
            },
            {
                char: 'c',
                text: 'To check your schedule',
            },
            {
                char: 'd',
                text: 'To check for any defects',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7366',
        topicCode: 'Vehicle condition',
        question: 'What happens to diesel fuel when it gets hot?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It expands',
            },
            {
                char: 'b',
                text: 'It liquefies ',
            },
            {
                char: 'c',
                text: 'It shrinks ',
            },
            {
                char: 'd',
                text: 'It waxes ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7367',
        topicCode: 'Vehicle condition',
        question: 'What must vehicle operators provide for their drivers?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A system for reporting vehicle defects',
            },
            {
                char: 'b',
                text: 'A daily update on all motorway hold-ups',
            },
            {
                char: 'c',
                text: 'A hands-free mobile communications system',
            },
            {
                char: 'd',
                text: 'A fuel-saving incentive scheme',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7389',
        topicCode: 'Vehicle condition',
        question:
            'On your daily walk-round check, you see that one front tyre is more than 10 years old. What should you do before using the vehicle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Check the tyre pressure',
            },
            {
                char: 'b',
                text: 'Get the tyre replaced',
            },
            {
                char: 'c',
                text: 'Record the tyre`s age on your log',
            },
            {
                char: 'd',
                text: 'Check the tread depth',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7390',
        topicCode: 'Vehicle condition',
        question: 'How can you check the age of a tyre fitted to your vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The date of manufacture of each tyre is displayed in the cab',
            },
            {
                char: 'b',
                text: 'From the tachograph`s tyre log',
            },
            {
                char: 'c',
                text: 'The date of tyre manufacture is shown on the tyre sidewall',
            },
            {
                char: 'd',
                text: 'From the tyre history on the vehicle plate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8086',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a three-axle double-deck bus. Why should you take extra care when using full steering lock?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Passengers might alter the angle of tilt',
            },
            {
                char: 'b',
                text: 'The power steering might fail',
            },
            {
                char: 'c',
                text: 'You may damage the air suspension',
            },
            {
                char: 'd',
                text: 'You may scrub the rear tyres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8087',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a three-axle double-deck bus and have the steering turned onto full lock. What should you do to avoid rear tyre scrub?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the highest gear possible',
            },
            {
                char: 'b',
                text: 'Drive at a very low speed',
            },
            {
                char: 'c',
                text: 'Apply the exhaust brake (retarder)',
            },
            {
                char: 'd',
                text: 'Reduce the pressure in the rear tyres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8088',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a double-deck bus. What`s the minimum depth of tread required over three-quarters of each tyre`s width?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '0.8 mm',
            },
            {
                char: 'b',
                text: '1 mm',
            },
            {
                char: 'c',
                text: '1.6 mm',
            },
            {
                char: 'd',
                text: '2 mm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8091',
        topicCode: 'Vehicle condition',
        question:
            'What should you do if you notice that your coach`s right rear indicator isn`t working?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Continue your journey using arm signals',
            },
            {
                char: 'b',
                text: 'Get it repaired before continuing',
            },
            {
                char: 'c',
                text: 'Get it repaired on your return to the depot',
            },
            {
                char: 'd',
                text: 'Get your passengers to their destination and then repair it',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8092',
        topicCode: 'Vehicle condition',
        question:
            'Before each journey, you should check all warning lights. What should you do if a warning light remains lit?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Report the fault when you return',
            },
            {
                char: 'b',
                text: 'Have the fault checked before setting off',
            },
            {
                char: 'c',
                text: 'Have the fault checked at the next service',
            },
            {
                char: 'd',
                text: 'Ignore it until the fault shows up',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8197',
        topicCode: 'Vehicle condition',
        question:
            'Why should you check your tyres more frequently on a coach with three axles?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Punctures can be more difficult to detect',
            },
            {
                char: 'b',
                text: 'Air pressure is more easily lost',
            },
            {
                char: 'c',
                text: 'The wheels will need balancing more often',
            },
            {
                char: 'd',
                text: 'You`ve no room for a spare wheel',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8212',
        topicCode: 'Vehicle condition',
        question:
            'How frequently should a driver carry out a walk-round check?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Daily',
            },
            {
                char: 'b',
                text: 'Weekly',
            },
            {
                char: 'c',
                text: 'Every 100 miles',
            },
            {
                char: 'd',
                text: 'Every 1000 miles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8223',
        topicCode: 'Vehicle condition',
        question:
            'A passenger tells you they`ve noticed that a wheel nut is missing from your bus. How often should you check your vehicle`s wheel nuts?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'At the end of every week',
            },
            {
                char: 'b',
                text: 'At the start of every week',
            },
            {
                char: 'c',
                text: 'Every day before starting out',
            },
            {
                char: 'd',
                text: 'Only at every service interval',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8229',
        topicCode: 'Vehicle condition',
        question:
            'Your coach often tows a trailer. How often should you check the trailer tyres for pressure?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At least once a week when they`re cold',
            },
            {
                char: 'b',
                text: 'At least once a month when they`re hot',
            },
            {
                char: 'c',
                text: 'At least once a week when they`re hot',
            },
            {
                char: 'd',
                text: 'At least once a month when the trailer is fully laden',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8274',
        topicCode: 'Vehicle condition',
        question:
            'The bus you`re driving is fitted with automatic transmission. When would you use kickdown?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When stopping in an emergency',
            },
            {
                char: 'b',
                text: 'When changing to a higher gear',
            },
            {
                char: 'c',
                text: 'When driving at slow speed',
            },
            {
                char: 'd',
                text: 'When needing brisk acceleration',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8275',
        topicCode: 'Vehicle condition',
        question:
            'Your coach is fully laden. What`s the most likely reason for the steering feeling heavy?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'An icy road',
            },
            {
                char: 'b',
                text: 'A burst rear tyre',
            },
            {
                char: 'c',
                text: 'Faulty power steering',
            },
            {
                char: 'd',
                text: 'Too many passengers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8281',
        topicCode: 'Vehicle condition',
        question:
            'Why are frequent tyre checks advisable on a tri-axle double-deck vehicle?',
        questionImg: '85BW2483.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'These tyres are more likely to deflate',
            },
            {
                char: 'b',
                text: 'Punctures can be difficult to detect',
            },
            {
                char: 'c',
                text: 'Blow-outs are more common on these vehicles',
            },
            {
                char: 'd',
                text: 'Tyre pressures are difficult to maintain',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8282',
        topicCode: 'Vehicle condition',
        question: 'When should the driver of a coach wear gloves?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To load and stow passengers` luggage',
            },
            {
                char: 'b',
                text: 'To operate a lift for disabled passengers',
            },
            {
                char: 'c',
                text: 'To handle the fares',
            },
            {
                char: 'd',
                text: 'To top up the oil or water levels',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8288',
        topicCode: 'Vehicle condition',
        question:
            'You`re driving a six-wheeled double-deck bus. What do you need to know about punctures on the rear tyres?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They`re much easier to detect',
            },
            {
                char: 'b',
                text: 'They`re more likely to happen',
            },
            {
                char: 'c',
                text: 'They`re more difficult to detect',
            },
            {
                char: 'd',
                text: 'They`re less likely to happen',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8291',
        topicCode: 'Vehicle condition',
        question: 'What should you regularly check on the tyres of your bus?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The tyre manufacturer`s details are displayed',
            },
            {
                char: 'b',
                text: 'The tyre pressures are all correct',
            },
            {
                char: 'c',
                text: 'The dust caps are all in place',
            },
            {
                char: 'd',
                text: 'The tread depths are equal on all tyres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8292',
        topicCode: 'Vehicle condition',
        question: 'What will result from having over-inflated tyres?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You`ll have improved acceleration',
            },
            {
                char: 'b',
                text: 'The tyres will wear more quickly',
            },
            {
                char: 'c',
                text: 'The tyres will give better grip',
            },
            {
                char: 'd',
                text: 'The fuel consumption will be reduced',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8293',
        topicCode: 'Vehicle condition',
        question:
            'You�re driving a coach that is towing a trailer. What should you do before uncoupling your trailer?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Disconnect the battery',
            },
            {
                char: 'b',
                text: 'Park on a firm, level surface',
            },
            {
                char: 'c',
                text: 'Park in a well-lit location',
            },
            {
                char: 'd',
                text: 'Unload some of the cargo',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5094',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should you be careful of when stopping on the left in a busy place?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'There`s good access to unload',
            },
            {
                char: 'b',
                text: 'You`ve disconnected all the air lines',
            },
            {
                char: 'c',
                text: 'Your nearside mirror doesn`t strike the head of a pedestrian',
            },
            {
                char: 'd',
                text: 'You change your tachograph mode',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5097',
        topicCode: 'Leaving the vehicle ',
        question:
            'You`ve just parked a lorry on the side of the road. What should you do just before dismounting from the cab?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Make sure the radio is turned down',
            },
            {
                char: 'b',
                text: 'Check the rear-view mirrors',
            },
            {
                char: 'c',
                text: 'Make sure the hazard warning lights are on',
            },
            {
                char: 'd',
                text: 'Check that all the windows are closed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5231',
        topicCode: 'Leaving the vehicle ',
        question: 'Where are you allowed to park a long, rigid vehicle?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'At a pedestrian crossing',
            },
            {
                char: 'b',
                text: 'At a bus stop',
            },
            {
                char: 'c',
                text: 'At a school entrance',
            },
            {
                char: 'd',
                text: 'At a service area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5268',
        topicCode: 'Leaving the vehicle ',
        question:
            'Where should you park a semi-trailer if you plan to leave it unattended?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On a residential street',
            },
            {
                char: 'b',
                text: 'On a steep hill',
            },
            {
                char: 'c',
                text: 'In a lorry park',
            },
            {
                char: 'd',
                text: 'In a lay-by',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5269',
        topicCode: 'Leaving the vehicle ',
        question:
            'Which of the following is important when you`re getting out of a lorry cab?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Checking your load is secure',
            },
            {
                char: 'b',
                text: 'Using the mirrors',
            },
            {
                char: 'c',
                text: 'Turning off the radio',
            },
            {
                char: 'd',
                text: 'Disconnecting the air lines',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5270',
        topicCode: 'Leaving the vehicle ',
        question:
            'You`re the driver of a fuel tanker. What danger should you be aware of when opening the tank hatches?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Low air pressure',
            },
            {
                char: 'b',
                text: 'Speed limiters',
            },
            {
                char: 'c',
                text: 'Slippery walkways',
            },
            {
                char: 'd',
                text: 'Emergency air lines',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5395',
        topicCode: 'Leaving the vehicle ',
        question:
            'You`re working on the platform of a flat-bed lorry. What`s the safest way to get down to the ground?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use a suitable set of steps',
            },
            {
                char: 'b',
                text: 'Jump down wearing non-slip shoes',
            },
            {
                char: 'c',
                text: 'Use ropes to lower yourself down',
            },
            {
                char: 'd',
                text: 'Climb down facing away from the vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5411',
        topicCode: 'Leaving the vehicle ',
        question:
            'What do you need to consider when transporting a high-value cargo of cigarettes?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'There`ll be a risk of theft or hijack',
            },
            {
                char: 'b',
                text: 'There`ll be more Revenue and Customs checks',
            },
            {
                char: 'c',
                text: 'You`ll be allowed to take fewer rest breaks',
            },
            {
                char: 'd',
                text: 'You`ll need to maintain your regular route',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5446',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should you consider having on your vehicle to combat theft?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Roof markings',
            },
            {
                char: 'b',
                text: 'Diff-lock',
            },
            {
                char: 'c',
                text: 'Air horns',
            },
            {
                char: 'd',
                text: 'Tinted windows',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC6323',
        topicCode: 'Leaving the vehicle ',
        question: 'When should you use your mirrors?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'As you signal',
            },
            {
                char: 'b',
                text: 'To check the blind spot',
            },
            {
                char: 'c',
                text: 'Occasionally',
            },
            {
                char: 'd',
                text: 'Before opening your door',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6325',
        topicCode: 'Leaving the vehicle ',
        question: 'What must you do before you leave your vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Empty the air tanks',
            },
            {
                char: 'b',
                text: 'Adjust your mirrors',
            },
            {
                char: 'c',
                text: 'Apply the parking brake',
            },
            {
                char: 'd',
                text: 'Check that the warning lights are working',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6328',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should you do before leaving your vehicle parked on a public road?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Remove your tachograph chart',
            },
            {
                char: 'b',
                text: 'Switch off the engine',
            },
            {
                char: 'c',
                text: 'Adjust the mirrors',
            },
            {
                char: 'd',
                text: 'Put the gear lever into reverse',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6329',
        topicCode: 'Leaving the vehicle ',
        question: 'What should you be aware of before opening your cab door?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Vehicles passing near the door',
            },
            {
                char: 'b',
                text: 'The height of your cab from the ground',
            },
            {
                char: 'c',
                text: 'Loose grab rails near the door',
            },
            {
                char: 'd',
                text: 'People crossing the road behind you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6333',
        topicCode: 'Leaving the vehicle ',
        question: 'When should you use hazard warning lights?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To warn other drivers that you`re towing',
            },
            {
                char: 'b',
                text: 'When approaching queuing traffic on a motorway',
            },
            {
                char: 'c',
                text: 'When parked illegally on a busy road',
            },
            {
                char: 'd',
                text: 'To thank a driver for giving way to you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6614',
        topicCode: 'Leaving the vehicle ',
        question:
            'You need to stop and get out of your vehicle. When should you use the parking brake?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'After the service brake has been released',
            },
            {
                char: 'b',
                text: 'Only if you park on a gradient',
            },
            {
                char: 'c',
                text: 'Whenever you leave the vehicle ',
            },
            {
                char: 'd',
                text: 'After the air pressure has dropped',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7173',
        topicCode: 'Leaving the vehicle ',
        question:
            'You`ve parked on the roadside. What must you do before leaving the vehicle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reset the retarder',
            },
            {
                char: 'b',
                text: 'Stop the engine',
            },
            {
                char: 'c',
                text: 'Switch off the tachograph',
            },
            {
                char: 'd',
                text: 'Remove your personal items',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7175',
        topicCode: 'Leaving the vehicle ',
        question: 'When may hazard warning lights be used while driving?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To thank a driver who has let you move back to the left after overtaking',
            },
            {
                char: 'b',
                text: 'As a warning to drivers that you`re towing another vehicle',
            },
            {
                char: 'c',
                text: 'To show you want to go ahead when your position suggests otherwise',
            },
            {
                char: 'd',
                text: 'When on motorways or dual carriageways, to warn drivers behind of a hazard ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7285',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should you try to do when you lift a heavy box or suitcase?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Lift and twist together',
            },
            {
                char: 'b',
                text: 'Look down all the time',
            },
            {
                char: 'c',
                text: 'Lean sideways and lift',
            },
            {
                char: 'd',
                text: 'Look ahead when the load is secure',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7286',
        topicCode: 'Leaving the vehicle ',
        question: 'What`s the best way to lift a heavy object?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Twist your back while lifting',
            },
            {
                char: 'b',
                text: 'Have a stable position',
            },
            {
                char: 'c',
                text: 'Hold the load at arm`s length',
            },
            {
                char: 'd',
                text: 'Lift the load as quickly as possible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7325',
        topicCode: 'Leaving the vehicle ',
        question: 'How should you stand when you`re lifting a heavy object?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Leaning sideways',
            },
            {
                char: 'b',
                text: 'In a stable position',
            },
            {
                char: 'c',
                text: 'With one leg straight',
            },
            {
                char: 'd',
                text: 'Keeping your feet together',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8116',
        topicCode: 'Leaving the vehicle ',
        question: 'When can a bus driver use hazard warning lights?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When children are getting off a school bus',
            },
            {
                char: 'b',
                text: 'To thank a driver who has given way',
            },
            {
                char: 'c',
                text: 'When stopping at a pedestrian crossing',
            },
            {
                char: 'd',
                text: 'When parking a bus on yellow lines',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8241',
        topicCode: 'Leaving the vehicle ',
        question:
            'When do you need to take account of your vehicle having air suspension?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you`re passing animals or horse riders',
            },
            {
                char: 'b',
                text: 'When you`re travelling up a steep gradient',
            },
            {
                char: 'c',
                text: 'When you`re parked close to another vehicle',
            },
            {
                char: 'd',
                text: 'When you`re driving in falling snow',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8273',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should your passengers do with their belongings when you arrive at your destination?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Place them on luggage racks',
            },
            {
                char: 'b',
                text: 'Take everything with them',
            },
            {
                char: 'c',
                text: 'Place them on the seats',
            },
            {
                char: 'd',
                text: 'Leave them with you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8295',
        topicCode: 'Leaving the vehicle ',
        question: 'What should you do before getting out of your bus?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Apply the parking brake',
            },
            {
                char: 'b',
                text: 'Change the destination board',
            },
            {
                char: 'c',
                text: 'Put the hazard warning lights on',
            },
            {
                char: 'd',
                text: 'Check the air-pressure gauges read full',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8296',
        topicCode: 'Leaving the vehicle ',
        question: 'What must you do before leaving your bus?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Apply the parking brake',
            },
            {
                char: 'b',
                text: 'Count the fares',
            },
            {
                char: 'c',
                text: 'Reset the odometer',
            },
            {
                char: 'd',
                text: 'Operate the fuel cut-off switch',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8353',
        topicCode: 'Leaving the vehicle ',
        question:
            'What should you wear while unloading luggage from your coach?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'High-visibility vest',
            },
            {
                char: 'b',
                text: 'Heatproof gloves',
            },
            {
                char: 'c',
                text: 'Safety goggles',
            },
            {
                char: 'd',
                text: 'Ear protectors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5101',
        topicCode: 'Vehicle loading ',
        question: 'How should you load a vehicle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Spread the load evenly',
            },
            {
                char: 'b',
                text: 'Load it towards the rear',
            },
            {
                char: 'c',
                text: 'Load it towards the front',
            },
            {
                char: 'd',
                text: 'Arrange the load to make it easy for unloading',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5102',
        topicCode: 'Vehicle loading ',
        question:
            'You`re going to drive an articulated lorry with an ISO container on the trailer. How should the container be secured to the trailer?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The container must be secured by ropes',
            },
            {
                char: 'b',
                text: 'The container must be secured using the locking levers',
            },
            {
                char: 'c',
                text: 'The container must be held up against the headboard',
            },
            {
                char: 'd',
                text: 'The container must be sealed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5106',
        topicCode: 'Vehicle loading ',
        question:
            'You`re using three sheets to cover your load. Which is the correct overlap?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'VL2511.png',
            },
            {
                char: 'b',
                text: '',
                img: 'VL2512.png',
            },
            {
                char: 'c',
                text: '',
                img: 'VL2513.png',
            },
            {
                char: 'd',
                text: '',
                img: 'VL2514.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5107',
        topicCode: 'Vehicle loading ',
        question:
            'You`re covering a load using more than one sheet. Why should you start with the rearmost sheet, then work forwards? ',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To stop you tripping when walking on the load',
            },
            {
                char: 'b',
                text: 'To stop wind and rain from getting under the sheets',
            },
            {
                char: 'c',
                text: 'To make it much easier to fold up the sheets',
            },
            {
                char: 'd',
                text: 'To make it easier to carry longer loads',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5108',
        topicCode: 'Vehicle loading ',
        question:
            'What`s the best knot to use when securing sheeting with ropes?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A dolly knot',
            },
            {
                char: 'b',
                text: 'A reef knot',
            },
            {
                char: 'c',
                text: 'A slip knot',
            },
            {
                char: 'd',
                text: 'A bowline knot',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5109',
        topicCode: 'Vehicle loading ',
        question:
            'Why are straps unsuitable to tie down a load of scrap metal?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Straps are hard to secure',
            },
            {
                char: 'b',
                text: 'Straps will slip in rain',
            },
            {
                char: 'c',
                text: 'Straps will damage the load',
            },
            {
                char: 'd',
                text: 'Straps can wear and snap',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5110',
        topicCode: 'Vehicle loading ',
        question:
            'You`re driving an open tipper lorry carrying loose dry sand. Why should you sheet this load?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To stop the handling from being affected',
            },
            {
                char: 'b',
                text: 'To stop the load from shifting',
            },
            {
                char: 'c',
                text: 'To stop the load from blowing away',
            },
            {
                char: 'd',
                text: 'To stop the tipper mechanism from accidentally operating',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5111',
        topicCode: 'Vehicle loading ',
        question:
            'What should you do if the load on your lorry becomes insecure?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue at a slower speed to ensure the load doesn`t fall off',
            },
            {
                char: 'b',
                text: 'Attach `hazard` boards to the load to warn other road users',
            },
            {
                char: 'c',
                text: 'Park and resecure the load before continuing',
            },
            {
                char: 'd',
                text: 'Inform base at the earliest opportunity',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5115',
        topicCode: 'Vehicle loading ',
        question:
            'Tankers carrying liquids can experience the `wave effect`. What helps to reduce this problem?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Spray guards',
            },
            {
                char: 'b',
                text: 'Harsh braking',
            },
            {
                char: 'c',
                text: 'Baffle plates',
            },
            {
                char: 'd',
                text: 'Wind deflectors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5116',
        topicCode: 'Vehicle loading ',
        question:
            'You`re driving an articulated tanker on a straight road. How will the liquid load affect the vehicle as you brake to a stop?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It will try to push the vehicle forward',
            },
            {
                char: 'b',
                text: 'It will try to push the vehicle to the side',
            },
            {
                char: 'c',
                text: 'It will make the trailer wheels bounce',
            },
            {
                char: 'd',
                text: 'It will make the trailer wheels skid',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5117',
        topicCode: 'Vehicle loading ',
        question:
            'You`re driving a tanker that`s half full. The inside of the tank isn`t divided into compartments. How should you use the footbrake when you`re stopping?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep pressure on the brake pedal until you`ve stopped',
            },
            {
                char: 'b',
                text: 'Relax pressure on the brake pedal before you`ve stopped',
            },
            {
                char: 'c',
                text: 'Pump the brake pedal rapidly',
            },
            {
                char: 'd',
                text: 'Use the footbrake and parking brake together',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5118',
        topicCode: 'Vehicle loading ',
        question:
            'Which type of load would benefit most from being carried on a lorry fitted with road-friendly suspension?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Steel',
            },
            {
                char: 'b',
                text: 'Timber',
            },
            {
                char: 'c',
                text: 'Glass',
            },
            {
                char: 'd',
                text: 'Cables',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5119',
        topicCode: 'Vehicle loading ',
        question:
            'How wide does a load need to be before an attendant is required?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '2.6 metres (8 feet 5 inches)',
            },
            {
                char: 'b',
                text: '3.0 metres (9 feet 9 inches)',
            },
            {
                char: 'c',
                text: '3.3 metres (10 feet 9 inches)',
            },
            {
                char: 'd',
                text: '3.5 metres (11 feet 5 inches)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5121',
        topicCode: 'Vehicle loading ',
        question: 'When is an articulated lorry most likely to jack-knife?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When it`s carrying a high load',
            },
            {
                char: 'b',
                text: 'When its load is carried at the rear of the trailer',
            },
            {
                char: 'c',
                text: 'When it`s unloaded',
            },
            {
                char: 'd',
                text: 'When it`s fully loaded',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5122',
        topicCode: 'Vehicle loading ',
        question:
            'You`ve finished recoupling. How should you make sure that the tractor and trailer are secure?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Try to move forward with the trailer parking brake on',
            },
            {
                char: 'b',
                text: 'Reverse with the trailer parking brake on',
            },
            {
                char: 'c',
                text: 'Try to move forward with the trailer parking brake off',
            },
            {
                char: 'd',
                text: 'Reverse with the trailer parking brake off',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5123',
        topicCode: 'Vehicle loading ',
        question:
            'What must you check first when uncoupling or recoupling your trailer?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The lights are working',
            },
            {
                char: 'b',
                text: 'The tilt-cab mechanism is secure',
            },
            {
                char: 'c',
                text: 'The trailer brake is applied',
            },
            {
                char: 'd',
                text: 'The air lines are safely stowed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5124',
        topicCode: 'Vehicle loading ',
        question:
            'You`re uncoupling a lorry and trailer. What should you do after disconnecting the electrical line?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stow it away safely',
            },
            {
                char: 'b',
                text: 'Drive forward slowly',
            },
            {
                char: 'c',
                text: 'Lower the landing gear',
            },
            {
                char: 'd',
                text: 'Apply the trailer brake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5125',
        topicCode: 'Vehicle loading ',
        question:
            'Your lorry has a demountable body. What should you check before demounting the body?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The rear doors are open',
            },
            {
                char: 'b',
                text: 'The legs are up',
            },
            {
                char: 'c',
                text: 'The body is unloaded and empty',
            },
            {
                char: 'd',
                text: 'The surface is firm and level',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5126',
        topicCode: 'Vehicle loading ',
        question:
            'How should you adjust your mirrors after recoupling your trailer?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To give a full view of your load',
            },
            {
                char: 'b',
                text: 'To give a clear view of both pairs of rear wheels',
            },
            {
                char: 'c',
                text: 'To give a view down each side of the trailer',
            },
            {
                char: 'd',
                text: 'To give a view of the road on the other side',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5128',
        topicCode: 'Vehicle loading ',
        question:
            'Which vehicle is most likely to be affected by `vehicle bounce`?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A long-wheelbase empty vehicle',
            },
            {
                char: 'b',
                text: 'A short-wheelbase laden vehicle',
            },
            {
                char: 'c',
                text: 'A short-wheelbase empty vehicle',
            },
            {
                char: 'd',
                text: 'A long-wheelbase laden vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5181',
        topicCode: 'Vehicle loading ',
        question: 'Which type of load should be secured using chains?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Timber planks',
            },
            {
                char: 'b',
                text: 'Hay bales',
            },
            {
                char: 'c',
                text: 'Steel plates',
            },
            {
                char: 'd',
                text: 'Canvas sacks',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5182',
        topicCode: 'Vehicle loading ',
        question:
            'Which load is most likely to move forward with some force when you brake sharply?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Heavy material in canvas sacks',
            },
            {
                char: 'b',
                text: 'Loose sand',
            },
            {
                char: 'c',
                text: 'Timber secured with dolly knots',
            },
            {
                char: 'd',
                text: 'Tubular metal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5183',
        topicCode: 'Vehicle loading ',
        question:
            'You`re part-loading a lorry with an empty ISO container. Where should you position it on the trailer?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Close to the fifth wheel',
            },
            {
                char: 'b',
                text: 'Over the front axle',
            },
            {
                char: 'c',
                text: 'Close to the trailer edge',
            },
            {
                char: 'd',
                text: 'Over the rear axles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5185',
        topicCode: 'Vehicle loading ',
        question: 'How must spare sheets and ropes be carried on your trailer?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Laid out flat',
            },
            {
                char: 'b',
                text: 'Visible from the cab',
            },
            {
                char: 'c',
                text: 'Tied down securely',
            },
            {
                char: 'd',
                text: 'Stacked loosely',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5186',
        topicCode: 'Vehicle loading ',
        question: 'Which articulated trailer is most at risk of jack-knifing?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A loaded flat-bed trailer',
            },
            {
                char: 'b',
                text: 'A laden fuel tanker',
            },
            {
                char: 'c',
                text: 'A loaded high-sided trailer',
            },
            {
                char: 'd',
                text: 'An unladen trailer',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5187',
        topicCode: 'Vehicle loading ',
        question:
            'In what circumstances will short-wheelbase vehicles bounce more noticeably than long-wheelbase vehicles?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When laden',
            },
            {
                char: 'b',
                text: 'When turning',
            },
            {
                char: 'c',
                text: 'When empty',
            },
            {
                char: 'd',
                text: 'When travelling slowly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5188',
        topicCode: 'Vehicle loading ',
        question: 'What`s the main cause of a lorry shedding its load?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Driving on motorways',
            },
            {
                char: 'b',
                text: 'Driving too fast',
            },
            {
                char: 'c',
                text: 'Driving over a level crossing',
            },
            {
                char: 'd',
                text: 'Driving in wet weather',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5238',
        topicCode: 'Vehicle loading ',
        question:
            'What could happen if you drive a double-deck lorry with the top deck loaded and the lower deck empty? ',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The lorry will become unstable under normal braking',
            },
            {
                char: 'b',
                text: 'The brakes will be less effective',
            },
            {
                char: 'c',
                text: 'The lorry may overturn when cornering',
            },
            {
                char: 'd',
                text: 'You`ll need to change gear more often',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5239',
        topicCode: 'Vehicle loading ',
        question:
            'Your lorry has a double-deck body. The top tier is loaded and the lower deck is empty. When will the vehicle be most at risk of overturning? ',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In thick fog',
            },
            {
                char: 'b',
                text: 'In high winds',
            },
            {
                char: 'c',
                text: 'In hot weather',
            },
            {
                char: 'd',
                text: 'In heavy rain',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5240',
        topicCode: 'Vehicle loading ',
        question:
            'You`re carrying another vehicle piggyback on your lorry. Chocks should be used to secure the wheels. What else should you use to secure the load?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Baffle plates',
            },
            {
                char: 'b',
                text: 'Axle stands',
            },
            {
                char: 'c',
                text: 'Restraining straps',
            },
            {
                char: 'd',
                text: 'A scaffolding bar',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5243',
        topicCode: 'Vehicle loading ',
        question:
            'The lorry you`re driving is heavily laden. How will the load affect the vehicle if you approach a left-hand bend too fast?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The load will push the lorry to the left',
            },
            {
                char: 'b',
                text: 'The load will pull the lorry to the right',
            },
            {
                char: 'c',
                text: 'The load will push the lorry straight on',
            },
            {
                char: 'd',
                text: 'The load will hold the lorry back',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5247',
        topicCode: 'Vehicle loading ',
        question:
            'You`re driving a vehicle with an unladen trailer. What could happen if you change down to a low gear while travelling at speed?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your vehicle may suddenly accelerate',
            },
            {
                char: 'b',
                text: 'The endurance brake will come on',
            },
            {
                char: 'c',
                text: 'You won`t be able to brake',
            },
            {
                char: 'd',
                text: 'You could lose control of your vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5254',
        topicCode: 'Vehicle loading ',
        question:
            'Your lorry has a crane fitted. You`re loading very heavy items. What should you do when you feel that the straps may break?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reposition the load',
            },
            {
                char: 'b',
                text: 'Use chains and tensioners',
            },
            {
                char: 'c',
                text: 'Tie two straps together',
            },
            {
                char: 'd',
                text: 'Continue loading carefully',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5255',
        topicCode: 'Vehicle loading ',
        question:
            'When you`re carrying other vehicles piggyback, you should use restraints and the parking brake on each vehicle. What else should you do?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Make sure the vehicles are sheeted',
            },
            {
                char: 'b',
                text: 'Place chocks under the wheels',
            },
            {
                char: 'c',
                text: 'Put the heavy vehicles at the top',
            },
            {
                char: 'd',
                text: 'Rope the vehicles together',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5271',
        topicCode: 'Vehicle loading ',
        question: 'When will an articulated car transporter be least stable?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When only the lower deck is loaded',
            },
            {
                char: 'b',
                text: 'When only the top deck is loaded',
            },
            {
                char: 'c',
                text: 'When it`s fully laden',
            },
            {
                char: 'd',
                text: 'When it`s unladen',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5283',
        topicCode: 'Vehicle loading ',
        question: 'What do the legs on a demountable body enable you to do?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Load and unload the body without stopping',
            },
            {
                char: 'b',
                text: 'Stack one body on top of another',
            },
            {
                char: 'c',
                text: 'Alter the overall height of the vehicle',
            },
            {
                char: 'd',
                text: 'Demount the body without a crane or lift',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5333',
        topicCode: 'Vehicle loading ',
        question:
            'What shape are the labels that indicate a vehicle is carrying hazardous cargo?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Diamond',
            },
            {
                char: 'b',
                text: 'Triangle',
            },
            {
                char: 'c',
                text: 'Circle',
            },
            {
                char: 'd',
                text: 'Oval',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5359',
        topicCode: 'Vehicle loading ',
        question: 'Why are baffle plates fitted to tankers carrying liquids?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To reduce wind resistance',
            },
            {
                char: 'b',
                text: 'To reduce the wave effect',
            },
            {
                char: 'c',
                text: 'To stop the brakes from locking',
            },
            {
                char: 'd',
                text: 'To make the steering lighter',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5360',
        topicCode: 'Vehicle loading ',
        question:
            'Which of these vehicles will be most at risk of `roll-over` when laden?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'VL2508.png',
            },
            {
                char: 'b',
                text: '',
                img: 'VL2518.png',
            },
            {
                char: 'c',
                text: '',
                img: 'VL2504.png',
            },
            {
                char: 'd',
                text: '',
                img: 'VL2509.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5361',
        topicCode: 'Vehicle loading ',
        question:
            'You`re unloading an end-tipper lorry. What should you do before tipping the body?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Make sure the vehicle is on a firm, level surface',
            },
            {
                char: 'b',
                text: 'Park facing uphill to make unloading easy',
            },
            {
                char: 'c',
                text: 'Make sure the vehicle is on a soft, sloping surface',
            },
            {
                char: 'd',
                text: 'Park downhill for easier unloading',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5362',
        topicCode: 'Vehicle loading ',
        question:
            'Who must you inform if the load on your trailer hits a railway bridge?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The local authority',
            },
            {
                char: 'b',
                text: 'DVLA',
            },
            {
                char: 'c',
                text: 'National Highways',
            },
            {
                char: 'd',
                text: 'The railway authority',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5380',
        topicCode: 'Vehicle loading ',
        question: 'Which of these best describes a vehicle`s payload?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The maximum load the vehicle can carry',
            },
            {
                char: 'b',
                text: 'The maximum load over each axle',
            },
            {
                char: 'c',
                text: 'The maximum load plus the weight of the vehicle',
            },
            {
                char: 'd',
                text: 'The maximum load each tyre can take',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5382',
        topicCode: 'Vehicle loading ',
        question:
            'What additional training do you need before transporting frozen foods?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Packaging procedures',
            },
            {
                char: 'b',
                text: 'Weight-distribution procedures',
            },
            {
                char: 'c',
                text: 'Waste-handling procedures',
            },
            {
                char: 'd',
                text: 'Hygiene procedures',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5384',
        topicCode: 'Vehicle loading ',
        question:
            'You`ve parked your vehicle on level ground to deliver a load of building materials. What should you do before using the vehicle-mounted crane?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Switch the engine off',
            },
            {
                char: 'b',
                text: 'Turn the steering wheels to the left',
            },
            {
                char: 'c',
                text: 'Lower the stabilising legs',
            },
            {
                char: 'd',
                text: 'Set out warning cones',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5393',
        topicCode: 'Vehicle loading ',
        question:
            'You`re loading goods of varying weights. How should they be distributed over the width of the vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Heavy items at the front, light items at the rear',
            },
            {
                char: 'b',
                text: 'Light items near the centre line, heavy items towards the sides',
            },
            {
                char: 'c',
                text: 'Heavy items near the centre line, light items towards the sides',
            },
            {
                char: 'd',
                text: 'Light items at the front, heavy items at the rear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5394',
        topicCode: 'Vehicle loading ',
        question:
            'What should you do when you`re working on a vehicle platform?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Make sure you can jump down',
            },
            {
                char: 'b',
                text: 'Walk forward near the edges',
            },
            {
                char: 'c',
                text: 'Work in stockinged feet',
            },
            {
                char: 'd',
                text: 'Walk backwards near the edges',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5397',
        topicCode: 'Vehicle loading ',
        question:
            'Which of these loads needs to be transported at a controlled temperature?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Frozen foods',
            },
            {
                char: 'b',
                text: 'Timber',
            },
            {
                char: 'c',
                text: 'Bulk grain',
            },
            {
                char: 'd',
                text: 'Cement',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5398',
        topicCode: 'Vehicle loading ',
        question:
            'What will you need to transport livestock on journeys of less than 65 km (40 miles)?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Practical experience in the care of animals',
            },
            {
                char: 'b',
                text: 'Membership of the RSPCA',
            },
            {
                char: 'c',
                text: 'No driving convictions',
            },
            {
                char: 'd',
                text: 'The ability to drive abroad',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5399',
        topicCode: 'Vehicle loading ',
        question:
            'What should you do when transporting a small quantity of livestock that doesn`t fill the vehicle?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Allow no direct access to the animals',
            },
            {
                char: 'b',
                text: 'Check them for disease before you load',
            },
            {
                char: 'c',
                text: 'Give the animals plenty of space',
            },
            {
                char: 'd',
                text: 'Create compartments using moveable panels',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5405',
        topicCode: 'Vehicle loading ',
        question:
            'Your vehicle has a maximum authorised mass of 40 tonnes. The kerbside weight is 15 tonnes. What`s your maximum payload?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '15 tonnes',
            },
            {
                char: 'b',
                text: '25 tonnes',
            },
            {
                char: 'c',
                text: '35 tonnes',
            },
            {
                char: 'd',
                text: '45 tonnes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5406',
        topicCode: 'Vehicle loading ',
        question:
            'You`re making several deliveries. What problems may the decreasing payload cause?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You might overload an axle',
            },
            {
                char: 'b',
                text: 'You`ll always have heavy items remaining',
            },
            {
                char: 'c',
                text: 'You might exceed your kerbside weight',
            },
            {
                char: 'd',
                text: 'You`ll damage the rest of the load',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5408',
        topicCode: 'Vehicle loading ',
        question: 'What can result from overloading an axle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Reduced braking efficiency',
            },
            {
                char: 'b',
                text: 'Reduced braking distance',
            },
            {
                char: 'c',
                text: 'Increased kerbside weight',
            },
            {
                char: 'd',
                text: 'Increased fuel efficiency',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5409',
        topicCode: 'Vehicle loading ',
        question:
            'What could be the result of overloading an axle while loading a lorry?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reduced tyre temperature',
            },
            {
                char: 'b',
                text: 'Damage to the road surface',
            },
            {
                char: 'c',
                text: 'Damage to the tachograph',
            },
            {
                char: 'd',
                text: 'Increased tyre life',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5413',
        topicCode: 'Vehicle loading ',
        question:
            'You`re transporting a skip carrying loose waste. How should the material be carried?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Covered',
            },
            {
                char: 'b',
                text: 'Shrink-wrapped',
            },
            {
                char: 'c',
                text: 'While displaying a warning beacon',
            },
            {
                char: 'd',
                text: 'Under a waterproof membrane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5415',
        topicCode: 'Vehicle loading ',
        question:
            'You`re securing a very heavy load with a ratchet strap. Which anchorage point is unsafe to use with ratchet straps?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Rope hook',
            },
            {
                char: 'b',
                text: 'Eye bolt',
            },
            {
                char: 'c',
                text: 'Shackle',
            },
            {
                char: 'd',
                text: '`D` link',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5418',
        topicCode: 'Vehicle loading ',
        question:
            'You`re securing a load using chains. Which type of chain is unsafe for securing a load?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Short-link',
            },
            {
                char: 'b',
                text: 'Round-link',
            },
            {
                char: 'c',
                text: 'Oval-link',
            },
            {
                char: 'd',
                text: 'Split-link',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5421',
        topicCode: 'Vehicle loading ',
        question:
            'You`re loading timber onto a flat-bed lorry. You want to cover it with sheets. Which sheet should be positioned first?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Front',
            },
            {
                char: 'b',
                text: 'Middle',
            },
            {
                char: 'c',
                text: 'Rear',
            },
            {
                char: 'd',
                text: 'Side',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5433',
        topicCode: 'Vehicle loading ',
        question:
            'What`s the main reason for covering a skip that you`re transporting?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To prevent any spillage',
            },
            {
                char: 'b',
                text: 'To stop children climbing in',
            },
            {
                char: 'c',
                text: 'To keep the contents dry',
            },
            {
                char: 'd',
                text: 'To prevent theft',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5437',
        topicCode: 'Vehicle loading',
        question:
            'Which cargo needs to be transported at a controlled temperature?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Perishable foods',
            },
            {
                char: 'b',
                text: 'Barrels of beer',
            },
            {
                char: 'c',
                text: 'Cement',
            },
            {
                char: 'd',
                text: 'Silage',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5438',
        topicCode: 'Vehicle loading ',
        question:
            'Which load may need to be transported at a controlled temperature?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Chemicals',
            },
            {
                char: 'b',
                text: 'Bulk grain',
            },
            {
                char: 'c',
                text: 'Sugar',
            },
            {
                char: 'd',
                text: 'Beer barrels',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5447',
        topicCode: 'Vehicle loading ',
        question:
            'Which symbol on a lorry means it`s likely to be carrying compressed gases?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4752.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4751.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4753.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4754.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5448',
        topicCode: 'Vehicle loading ',
        question: 'What`s being carried on a lorry displaying this symbol?',
        questionImg: 'TS4751.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Corrosive materials',
            },
            {
                char: 'b',
                text: 'Compressed gases',
            },
            {
                char: 'c',
                text: 'Oxidising agents',
            },
            {
                char: 'd',
                text: 'Radioactive materials',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5449',
        topicCode: 'Vehicle loading ',
        question:
            'Which symbol on the back of a lorry means it`s carrying a corrosive substance?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4752.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4751.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4753.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4754.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5450',
        topicCode: 'Vehicle loading ',
        question:
            'Which symbol on a lorry shows its load is dangerous when wet?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4752.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4755.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4753.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4756.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5451',
        topicCode: 'Vehicle loading ',
        question:
            'You`re driving a loaded lorry with curtain sides. What should you do when you see the curtain bulging on one side?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Check the load by carefully entering through the rear door or opposite curtain',
            },
            {
                char: 'b',
                text: 'Check the load by carefully opening the curtain in the affected area',
            },
            {
                char: 'c',
                text: 'Continue driving, as this is normal for these types of vehicles',
            },
            {
                char: 'd',
                text: 'Continue driving at a much reduced speed ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5453',
        topicCode: 'Vehicle loading ',
        question:
            'You`re loading a curtain-sided vehicle. What are the curtains for?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Restraint ',
            },
            {
                char: 'b',
                text: 'Protection from the weather ',
            },
            {
                char: 'c',
                text: 'Improved visibility',
            },
            {
                char: 'd',
                text: 'To reduce noise',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5456',
        topicCode: 'Vehicle loading ',
        question:
            'You`re using a lorry-mounted crane to unload building materials. What safety features should you use?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wheel clamps ',
            },
            {
                char: 'b',
                text: 'Kingpin locks ',
            },
            {
                char: 'c',
                text: 'Jockey wheels ',
            },
            {
                char: 'd',
                text: 'Vehicle stabilisers ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5458',
        topicCode: 'Vehicle loading ',
        question:
            'You intend to move a heavy object using a barrow or trolley. What`s the best height for the handles?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Between the shoulder and the waist',
            },
            {
                char: 'b',
                text: 'As high as you can reach',
            },
            {
                char: 'c',
                text: 'Between the knee and the waist',
            },
            {
                char: 'd',
                text: 'As low as possible for comfort',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5465',
        topicCode: 'Vehicle loading ',
        question:
            'Your vehicle has a maximum authorised mass of 40 tonnes. The tare weight is 10 tonnes. What`s your maximum payload?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '20 tonnes',
            },
            {
                char: 'b',
                text: '30 tonnes',
            },
            {
                char: 'c',
                text: '40 tonnes',
            },
            {
                char: 'd',
                text: '50 tonnes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5129',
        topicCode: 'Restricted view ',
        question:
            'Some lorries have an extra mirror angled down towards the nearside front wheel. What`s this mirror especially useful for?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtaking',
            },
            {
                char: 'b',
                text: 'Parking',
            },
            {
                char: 'c',
                text: 'Checking your trailer',
            },
            {
                char: 'd',
                text: 'Turning right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5131',
        topicCode: 'Restricted view ',
        question:
            'What should you look for when choosing a site to park your trailer?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The site should be level',
            },
            {
                char: 'b',
                text: 'The site should be made of concrete',
            },
            {
                char: 'c',
                text: 'The site should be sheltered',
            },
            {
                char: 'd',
                text: 'The site should have marked parking bays',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5133',
        topicCode: 'Restricted view ',
        question:
            'You`re behind a parked car. What should you do when you`re about to move off?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Start to signal when you`ve started moving',
            },
            {
                char: 'b',
                text: 'Move off when there`s no oncoming traffic',
            },
            {
                char: 'c',
                text: 'Check the blind spots before you start moving',
            },
            {
                char: 'd',
                text: 'Only use your mirrors after you`ve started moving',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5134 ',
        topicCode: 'Restricted view ',
        question:
            'You�re driving a lorry. Why do you need to take extra care when turning left at this junction?',
        questionImg: 'MC6501n1.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'There are no bollards in the middle of the road',
            },
            {
                char: 'b',
                text: 'It`s a closed junction',
            },
            {
                char: 'c',
                text: 'There`s a motorcycle on the left',
            },
            {
                char: 'd',
                text: 'There`s a grass verge on the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5137 ',
        topicCode: 'Restricted view ',
        question:
            'You`re driving this lorry (arrowed). What should you do about the emergency vehicle that`s trying to emerge from the side road?',
        questionImg: 'J7507.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Brake hard to a stop and wave it out',
            },
            {
                char: 'b',
                text: 'Brake smoothly and allow it to emerge',
            },
            {
                char: 'c',
                text: 'Drive on; you`re on the major road',
            },
            {
                char: 'd',
                text: 'Turn left to give it a clear view',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5139',
        topicCode: 'Restricted view ',
        question:
            'What should you do when you`re unable to see clearly while you`re reversing into a loading bay?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Get someone to guide you into the bay',
            },
            {
                char: 'b',
                text: 'Use an audible warning signal while reversing',
            },
            {
                char: 'c',
                text: 'Reverse into the bay until your bumper touches the end wall',
            },
            {
                char: 'd',
                text: 'Open your door and lean well out while reversing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5141 ',
        topicCode: 'Restricted view ',
        question:
            'This lorry is turning right from the side road. What should the driver be especially aware of?',
        questionImg: 'R8504n1.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The motorcyclist from the right passing the parked van',
            },
            {
                char: 'b',
                text: 'The vehicles coming from the left along the main road',
            },
            {
                char: 'c',
                text: 'The pedestrians on the footpath by the main road',
            },
            {
                char: 'd',
                text: 'The vehicles behind on the minor road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5276',
        topicCode: 'Restricted view ',
        question:
            'You`re parking your lorry at night. Where must you use parking lights?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On the road',
            },
            {
                char: 'b',
                text: 'In a motorway service area',
            },
            {
                char: 'c',
                text: 'In a factory entrance',
            },
            {
                char: 'd',
                text: 'In dock-authority areas',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5353',
        topicCode: 'Restricted view ',
        question:
            'You`re driving a lorry with a sleeper cab. When would a quick sideways glance be helpful?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'After driving over a pedestrian crossing',
            },
            {
                char: 'b',
                text: 'When traffic is merging from the right or left',
            },
            {
                char: 'c',
                text: 'Before climbing a steep hill',
            },
            {
                char: 'd',
                text: 'When driving round sharp bends',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5364',
        topicCode: 'Restricted view ',
        question:
            'Your lorry has a sleeper cab. Why could this make your driving more difficult?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It increases your blind spots',
            },
            {
                char: 'b',
                text: 'It increases your view of the road ahead',
            },
            {
                char: 'c',
                text: 'It increases your view in the right-hand mirror ',
            },
            {
                char: 'd',
                text: 'It increases your view in the left-hand mirror',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5365',
        topicCode: 'Restricted view ',
        question:
            'You`re waiting to turn right in this lorry (arrowed). Which road user has priority?',
        questionImg: 'J7506n1.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The motorcyclist',
            },
            {
                char: 'b',
                text: 'The driver in the red car',
            },
            {
                char: 'c',
                text: 'The driver in the green car',
            },
            {
                char: 'd',
                text: 'The pedestrain',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC7337',
        topicCode: 'Restricted view ',
        question:
            'Many modern vehicles are fitted with an additional nearside mirror. What does this help the driver to see?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The front wheel in relation to the kerb',
            },
            {
                char: 'b',
                text: 'The exhaust to check for emissions',
            },
            {
                char: 'c',
                text: 'The rear of the vehicle when reversing',
            },
            {
                char: 'd',
                text: 'The distance of the following vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC7338',
        topicCode: 'Restricted view',
        question:
            'Your lorry has a mirror to show the area immediately in front of the vehicle. When should you use this mirror?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Before moving off',
            },
            {
                char: 'b',
                text: 'Before you change lane on a motorway',
            },
            {
                char: 'c',
                text: 'While you`re reversing',
            },
            {
                char: 'd',
                text: 'Before getting out of the cab',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC7339',
        topicCode: 'Restricted view',
        question:
            'You�re driving your lorry through a busy area and you�ve stopped at a pedestrian crossing. What should you do before you move off?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Check the Class VI mirror on the front of your lorry',
            },
            {
                char: 'b',
                text: 'Wave any remaining pedestrians across the road',
            },
            {
                char: 'c',
                text: 'Ease forward onto the crossing to check that it�s clear',
            },
            {
                char: 'd',
                text: 'Rev your engine',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6350',
        topicCode: 'Restricted view ',
        question:
            'What`s the first thing you should check before moving to the left?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The nearside mirror',
            },
            {
                char: 'b',
                text: 'The offside mirror',
            },
            {
                char: 'c',
                text: 'Behind, over your right shoulder',
            },
            {
                char: 'd',
                text: 'Behind, over your left shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6352',
        topicCode: 'Restricted view ',
        question:
            'What`s the first thing you should check before moving to the right?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The nearside mirror',
            },
            {
                char: 'b',
                text: 'Behind, over your left shoulder',
            },
            {
                char: 'c',
                text: 'Behind, over your right shoulder',
            },
            {
                char: 'd',
                text: 'The offside mirror',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6353',
        topicCode: 'Restricted view ',
        question: 'What should you do before moving off?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Extend your right arm out of the window',
            },
            {
                char: 'b',
                text: 'Just use the offside mirror and move away quickly',
            },
            {
                char: 'c',
                text: 'Signal right with indicator and arm together',
            },
            {
                char: 'd',
                text: 'Use your mirrors and look behind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6355',
        topicCode: 'Restricted view ',
        question: 'When would you need to check your nearside mirror?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'As a final check before turning right',
            },
            {
                char: 'b',
                text: 'After passing cars parked on the left',
            },
            {
                char: 'c',
                text: 'Before moving into the lane on your right',
            },
            {
                char: 'd',
                text: 'When getting out of your cab on the driver`s side',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6356',
        topicCode: 'Restricted view ',
        question:
            'The MSM routine should be used when you negotiate a hazard. What do the initials MSM stand for?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Mirrors, signal, manoeuvre',
            },
            {
                char: 'b',
                text: 'Manoeuvre, speed, mirrors',
            },
            {
                char: 'c',
                text: 'Mirrors, speed, manoeuvre',
            },
            {
                char: 'd',
                text: 'Manoeuvre, signal, mirrors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6357',
        topicCode: 'Restricted view ',
        question: 'What does this sign mean?',
        questionImg: 'TS4704.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Contraflow bus and cycle lane',
            },
            {
                char: 'b',
                text: 'With-flow bus and cycle lane',
            },
            {
                char: 'c',
                text: 'No buses or cycles',
            },
            {
                char: 'd',
                text: 'Priority to buses or cycles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6370',
        topicCode: 'Restricted view ',
        question:
            'What must you do to ensure good all-round vision when driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Keep your windows open',
            },
            {
                char: 'b',
                text: 'Have a sun visor fitted',
            },
            {
                char: 'c',
                text: 'Adjust your seat properly',
            },
            {
                char: 'd',
                text: 'Keep your lights clean',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6378',
        topicCode: 'Restricted view ',
        question:
            'When may an audible warning device for reversing be used in areas with a 30 mph speed limit?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Between 7.00 am and 11.30 pm',
            },
            {
                char: 'b',
                text: 'Between 11.30 pm and 7.00 am',
            },
            {
                char: 'c',
                text: 'During daylight hours only',
            },
            {
                char: 'd',
                text: 'At any time of the day or night',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6379',
        topicCode: 'Restricted view ',
        question:
            'What will happen if you drive too close to the vehicle in front?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your view ahead will be reduced',
            },
            {
                char: 'b',
                text: 'Your view ahead will be increased',
            },
            {
                char: 'c',
                text: 'Your view of following drivers will be increased',
            },
            {
                char: 'd',
                text: 'Your view of following drivers will be reduced',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6381',
        topicCode: 'Restricted view ',
        question:
            'Why might it be difficult to see motorcyclists at junctions?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They can be hidden in blind spots',
            },
            {
                char: 'b',
                text: 'They always ride in the gutter',
            },
            {
                char: 'c',
                text: 'They wear bright clothing',
            },
            {
                char: 'd',
                text: 'They ride with their headlights on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6384',
        topicCode: 'Restricted view ',
        question:
            'Why should you check your right-hand mirror just before turning right from a main road into a side road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'There may be pedestrians stepping off the kerb',
            },
            {
                char: 'b',
                text: 'You need to check your position',
            },
            {
                char: 'c',
                text: 'Someone may be overtaking you',
            },
            {
                char: 'd',
                text: 'Your rear view to the left is blocked',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6385',
        topicCode: 'Restricted view ',
        question: 'What should you check just before you turn left?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The left-hand mirror',
            },
            {
                char: 'b',
                text: 'The interior mirror',
            },
            {
                char: 'c',
                text: 'The right-hand mirror',
            },
            {
                char: 'd',
                text: 'The overtaking mirror',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6583',
        topicCode: 'Restricted view ',
        question:
            'You`re driving a long vehicle. What should you be especially careful of before turning left onto a main road?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Pedestrians on the opposite kerb ',
            },
            {
                char: 'b',
                text: 'Cyclists on your left',
            },
            {
                char: 'c',
                text: 'Solid white lines in the centre of the road',
            },
            {
                char: 'd',
                text: 'Vehicles directly behind you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6586',
        topicCode: 'Restricted view ',
        question:
            'You want to turn right at a roundabout marked with two right-turn lanes. What should you do if there`s ample room for your vehicle in either lane?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the right-hand of the two lanes',
            },
            {
                char: 'b',
                text: 'Use the left-hand of the two lanes',
            },
            {
                char: 'c',
                text: 'Use the left-hand lane, then move to the right as you enter the roundabout',
            },
            {
                char: 'd',
                text: 'Use the right-hand lane, then move to the left as you enter the roundabout',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6708',
        topicCode: 'Restricted view ',
        question:
            'Your vehicle is fitted with a reverse warning bleeper. How will this affect you when you`re reversing?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You`ll be able to reverse more accurately',
            },
            {
                char: 'b',
                text: 'You`ll only need to use the offside mirror',
            },
            {
                char: 'c',
                text: 'You`ll need to take all-round observation',
            },
            {
                char: 'd',
                text: 'You`ll only need to use the nearside mirror',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7126',
        topicCode: 'Restricted view ',
        question: 'What does `blind spot` mean?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'An area of road covered by your right-hand mirror',
            },
            {
                char: 'b',
                text: 'An area of road covered by your left-hand mirror',
            },
            {
                char: 'c',
                text: 'An area of road that can`t be seen, even with mirrors',
            },
            {
                char: 'd',
                text: 'An area of road that isn`t lit by your headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7151',
        topicCode: 'Restricted view ',
        question:
            'You`re driving a large vehicle. How does its size and design affect the blind spots?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It will have fewer blind spots than smaller vehicles',
            },
            {
                char: 'b',
                text: 'It will have more blind spots than smaller vehicles',
            },
            {
                char: 'c',
                text: 'It will have the same blind spots as other vehicles',
            },
            {
                char: 'd',
                text: 'It will have no blind spots whatsoever',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7176',
        topicCode: 'Restricted view ',
        question:
            'You`re turning right at a T-junction. What should you do when your view to the right and left is blocked by parked vehicles?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Lean forward to get a better view without crossing the `give way` lines',
            },
            {
                char: 'b',
                text: 'Edge out until you`re about 1 metre (3 feet 3 inches) over the `give way` lines',
            },
            {
                char: 'c',
                text: 'Ease forward until you can see clearly in all directions',
            },
            {
                char: 'd',
                text: 'Ask a passenger to assist by waving you out when it`s clear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7177',
        topicCode: 'Restricted view ',
        question: 'What must you do before you start reversing?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Remove your seat belt',
            },
            {
                char: 'b',
                text: 'Look all around',
            },
            {
                char: 'c',
                text: 'Use an audible warning device',
            },
            {
                char: 'd',
                text: 'Change the tachograph mode',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7226',
        topicCode: 'Restricted view ',
        question:
            'You`re reversing your vehicle. What should you do while the audible warning device is operating?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Rely on a clear path behind',
            },
            {
                char: 'b',
                text: 'Expect others to be aware of your course',
            },
            {
                char: 'c',
                text: 'Be cautious and keep looking all around',
            },
            {
                char: 'd',
                text: 'Concentrate solely on your blind areas',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8139',
        topicCode: 'Restricted view ',
        question:
            'Some coaches have a mirror on their nearside, angled down to show the front nearside wheel. When should this extra mirror be used?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When you`re pulling in after overtaking',
            },
            {
                char: 'b',
                text: 'When you`re pulling in to park at the kerb',
            },
            {
                char: 'c',
                text: 'Before you pass parked cars',
            },
            {
                char: 'd',
                text: 'Before you change lanes on a motorway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8145',
        topicCode: 'Restricted view ',
        question:
            'What must you be aware of when you`re driving a bus with a high driving position?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The blind area close in front',
            },
            {
                char: 'b',
                text: 'Passengers will have to look up to you',
            },
            {
                char: 'c',
                text: 'Your judgement of speed will be impaired',
            },
            {
                char: 'd',
                text: 'The lack of headroom in the cab',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8213',
        topicCode: 'Restricted view ',
        question:
            'On a coach with high side windows, it can be difficult to see either side. What should you do before you move off in one of these vehicles?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Get out of your vehicle and stop the traffic ',
            },
            {
                char: 'b',
                text: 'Ask a passenger to make sure it`s safe to move off',
            },
            {
                char: 'c',
                text: 'Indicate before checking all of your mirrors',
            },
            {
                char: 'd',
                text: 'Open the window and look down and round to the right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8220',
        topicCode: 'Restricted view ',
        question:
            'Your bus has a high seating position. What may be out of sight below the windscreen line?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Following vehicles',
            },
            {
                char: 'b',
                text: 'Overtaking vehicles',
            },
            {
                char: 'c',
                text: 'Cyclists and pedestrians',
            },
            {
                char: 'd',
                text: 'Other buses',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5286',
        topicCode: 'Essential documents',
        question:
            'You`ve been asked to drive a fully loaded petrol tanker back to the depot. It has a maximum authorised mass of 10 tonnes. What must you have before you can drive this vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A request from the police to move a dangerous load',
            },
            {
                char: 'b',
                text: 'A fully qualified tanker driver with you for the journey',
            },
            {
                char: 'c',
                text: 'A valid ADR driver training certificate',
            },
            {
                char: 'd',
                text: 'A copy of the vehicle`s insurance certificate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5287',
        topicCode: 'Essential documents',
        question:
            'Who`s responsible for making sure that cargo arrives undamaged?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The packer',
            },
            {
                char: 'b',
                text: 'The driver',
            },
            {
                char: 'c',
                text: 'The sender',
            },
            {
                char: 'd',
                text: 'The loader',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5366',
        topicCode: 'Essential documents',
        question: 'How many copies of the CMR consignment note are required?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Two',
            },
            {
                char: 'b',
                text: 'Three',
            },
            {
                char: 'c',
                text: 'Four',
            },
            {
                char: 'd',
                text: 'Five',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5385',
        topicCode: 'Essential documents',
        question:
            'You hold a full category C licence. What does this entitle you to tow?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A trailer of any weight',
            },
            {
                char: 'b',
                text: 'A trailer with more than one axle',
            },
            {
                char: 'c',
                text: 'A trailer up to 750 kg',
            },
            {
                char: 'd',
                text: 'A curtain-sided trailer',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5463',
        topicCode: 'Essential documents',
        question:
            'You`re delivering boxes of chilled food to a supermarket. What specific training would you need?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Hygiene procedures',
            },
            {
                char: 'b',
                text: 'ADR procedures',
            },
            {
                char: 'c',
                text: 'Waste-handling procedures',
            },
            {
                char: 'd',
                text: 'Fuel-efficient driving procedures',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6668',
        topicCode: 'Essential documents',
        question:
            'You`ll be driving your vehicle in Europe. Which of these documents must you carry?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The vehicle service record',
            },
            {
                char: 'b',
                text: 'Your medical examination form',
            },
            {
                char: 'c',
                text: 'Your national driving licence ',
            },
            {
                char: 'd',
                text: 'The vehicle workshop manual',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6713',
        topicCode: 'Essential documents',
        question:
            'What condition could prevent you from holding a lorry or bus licence?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Dyslexia',
            },
            {
                char: 'b',
                text: 'Partial blindness',
            },
            {
                char: 'c',
                text: 'Dermatitis',
            },
            {
                char: 'd',
                text: 'Stomach upset',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7059',
        topicCode: 'Essential documents',
        question:
            'You`ve been convicted of a drink-drive offence and banned from driving. Which entitlement will this ban affect?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your entitlement to drive all motor vehicles',
            },
            {
                char: 'b',
                text: 'Your car entitlement',
            },
            {
                char: 'c',
                text: 'Your lorry entitlement',
            },
            {
                char: 'd',
                text: 'Your bus entitlement',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7193',
        topicCode: 'Essential documents',
        question:
            'You`re found to be two-and-a-half times over the legal drink-drive limit and are disqualified from driving. Before regaining your licence, who will you have to satisfy that you don`t have an alcohol problem?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The local hospital',
            },
            {
                char: 'b',
                text: 'The Driver and Vehicle Licensing Agency',
            },
            {
                char: 'c',
                text: 'Alcoholics Anonymous',
            },
            {
                char: 'd',
                text: 'The Driver and Vehicle Standards Agency',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7228',
        topicCode: 'Essential documents',
        question:
            'For how long is a Statutory Off-Road Notification (SORN) valid?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Until the vehicle is taxed, sold or scrapped',
            },
            {
                char: 'b',
                text: 'Until the vehicle is insured and MOT`d',
            },
            {
                char: 'c',
                text: 'Until the vehicle is repaired or modified',
            },
            {
                char: 'd',
                text: 'Until the vehicle is used on the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7229',
        topicCode: 'Essential documents',
        question: 'What`s a Statutory Off-Road Notification (SORN)?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A notification to tell DVSA that a vehicle doesn`t have a current MOT',
            },
            {
                char: 'b',
                text: 'Information kept by the police about the owner of the vehicle',
            },
            {
                char: 'c',
                text: 'A notification to tell DVLA that a vehicle isn`t being used on the road',
            },
            {
                char: 'd',
                text: 'Information held by insurance companies to check the vehicle is insured',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7258',
        topicCode: 'Essential documents',
        question: 'What`s the maximum fine for driving without insurance?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Unlimited',
            },
            {
                char: 'b',
                text: '�500',
            },
            {
                char: 'c',
                text: '�1000',
            },
            {
                char: 'd',
                text: '�5000',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7265',
        topicCode: 'Essential documents',
        question:
            'Drivers can be fined for bringing illegal immigrants into the UK. Who else can be fined?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The vehicle repairer',
            },
            {
                char: 'b',
                text: 'The vehicle insurer',
            },
            {
                char: 'c',
                text: 'The vehicle manufacturer',
            },
            {
                char: 'd',
                text: 'The vehicle hirer',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7266',
        topicCode: 'Essential documents',
        question:
            'How can vehicle operators help to prevent the carriage of illegal immigrants?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By using an effective vehicle security system',
            },
            {
                char: 'b',
                text: 'By using vehicle tracking devices',
            },
            {
                char: 'c',
                text: 'By taking out liability insurance',
            },
            {
                char: 'd',
                text: 'By having effective mobile communications ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7267',
        topicCode: 'Essential documents',
        question:
            'You`re returning to the UK and are about to board a ferry. An immigration officer asks to see your documentation. What must you show them immediately?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your vehicle registration document',
            },
            {
                char: 'b',
                text: 'Your driver`s hours record',
            },
            {
                char: 'c',
                text: 'Your operator documentation',
            },
            {
                char: 'd',
                text: 'Your driving licence',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7268',
        topicCode: 'Essential documents',
        question:
            'A driver is convicted of bringing illegal immigrants into the UK. How is the fine calculated?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'For each family group they bring in',
            },
            {
                char: 'b',
                text: 'For each court attendance they make',
            },
            {
                char: 'c',
                text: 'For each person they bring in',
            },
            {
                char: 'd',
                text: 'For each journey they made in the last year',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7275',
        topicCode: 'Essential documents',
        question:
            'The Driver Certificate of Professional Competence (Driver CPC) requires you to take training every five years. How many hours of training must you take?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '30 hours',
            },
            {
                char: 'b',
                text: '35 hours',
            },
            {
                char: 'c',
                text: '40 hours',
            },
            {
                char: 'd',
                text: '45 hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7276',
        topicCode: 'Essential documents',
        question:
            'You`ll need to take 35 hours of training to maintain your Driver Certificate of Professional Competence (Driver CPC). Over what period must this be carried out?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'One year',
            },
            {
                char: 'b',
                text: 'Three years',
            },
            {
                char: 'c',
                text: 'Five years',
            },
            {
                char: 'd',
                text: 'Ten years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7279',
        topicCode: 'Essential documents',
        question:
            'Every five years, you must complete further training to keep your Driver Certificate of Professional Competence (Driver CPC). How many hours of training must you complete over those five years?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '25 hours',
            },
            {
                char: 'b',
                text: '30 hours',
            },
            {
                char: 'c',
                text: '35 hours',
            },
            {
                char: 'd',
                text: '40 hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7324',
        topicCode: 'Essential documents',
        question:
            'You`re applying for an HGV or PCV licence for the first time. What will your medical examination include?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'An eyesight test',
            },
            {
                char: 'b',
                text: 'A numeracy test',
            },
            {
                char: 'c',
                text: 'A hygiene test',
            },
            {
                char: 'd',
                text: 'A literacy test',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8321',
        topicCode: 'Essential documents',
        question:
            'Which category of licence do you need to drive a tri-axle double-deck coach?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'D1',
            },
            {
                char: 'b',
                text: 'D',
            },
            {
                char: 'c',
                text: 'D1E',
            },
            {
                char: 'd',
                text: 'C',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8327',
        topicCode: 'Essential documents',
        question:
            'Why may coaches be subject to a search by immigration authorities at international ports?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'For national security',
            },
            {
                char: 'b',
                text: 'To check for red diesel',
            },
            {
                char: 'c',
                text: 'For tachograph regulations',
            },
            {
                char: 'd',
                text: 'To check vehicle condition',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8328',
        topicCode: 'Essential documents',
        question:
            'You`re driving a coach, returning from a European trip. Why should you search the vehicle at the port?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To look for missing property',
            },
            {
                char: 'b',
                text: 'To ensure duty-free limits aren`t exceeded',
            },
            {
                char: 'c',
                text: 'To prevent the carriage of illegal immigrants',
            },
            {
                char: 'd',
                text: 'To ensure the vehicle has the correct documentation',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8329',
        topicCode: 'Essential documents',
        question:
            'You`re making a journey that crosses international borders. Which document should you produce at immigration control?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A list of passengers',
            },
            {
                char: 'b',
                text: 'A breakdown insurance certificate',
            },
            {
                char: 'c',
                text: 'A route plan',
            },
            {
                char: 'd',
                text: 'A list of alcohol on board',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8335',
        topicCode: 'Essential documents',
        question:
            'Which licence category do you need to drive an articulated bus (`bendy bus`)?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'D1E',
            },
            {
                char: 'b',
                text: 'D',
            },
            {
                char: 'c',
                text: 'DE',
            },
            {
                char: 'd',
                text: 'D1',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8336',
        topicCode: 'Essential documents',
        question:
            'What size of trailer can be towed by the holder of a full category D licence?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '750 kg',
            },
            {
                char: 'b',
                text: '1000 kg',
            },
            {
                char: 'c',
                text: '1250 kg',
            },
            {
                char: 'd',
                text: '1500 kg',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8337',
        topicCode: 'Essential documents',
        question:
            'You hold a full category D licence. What entitlement does this give you for towing?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You can`t tow a trailer at all',
            },
            {
                char: 'b',
                text: 'You can tow a trailer not exceeding 750 kg',
            },
            {
                char: 'c',
                text: 'You can tow a trailer of any weight',
            },
            {
                char: 'd',
                text: 'You can`t tow a trailer with more than one axle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8343',
        topicCode: 'Essential documents',
        question:
            'You intend to drive a midibus for hire or reward. It has more than 16 passenger seats. What`s the minimum licence entitlement you need?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'C',
            },
            {
                char: 'b',
                text: 'C1',
            },
            {
                char: 'c',
                text: 'D',
            },
            {
                char: 'd',
                text: 'D1',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8344',
        topicCode: 'Essential documents',
        question:
            'Which licence category do you need to drive a bus with 25 passenger seats?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'D',
            },
            {
                char: 'b',
                text: 'D1',
            },
            {
                char: 'c',
                text: 'DE',
            },
            {
                char: 'd',
                text: 'D1E',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8361',
        topicCode: 'Essential documents',
        question:
            'Which authority has the power to impose conditions on a passenger-carrying vehicle (PCV) operator`s licence?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The Traffic Commissioner',
            },
            {
                char: 'b',
                text: 'DVLA',
            },
            {
                char: 'c',
                text: 'DVSA',
            },
            {
                char: 'd',
                text: 'National Highways',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5145',
        topicCode: 'Environmental issues ',
        question:
            'Your lorry has been fitted with wind deflectors. How will they affect your vehicle?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They`ll increase the fuel consumption',
            },
            {
                char: 'b',
                text: 'They`ll reduce the stability',
            },
            {
                char: 'c',
                text: 'They`ll require increased tyre pressures',
            },
            {
                char: 'd',
                text: 'They`ll reduce the wind resistance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5146',
        topicCode: 'Environmental issues ',
        question: 'What can cab-mounted wind deflectors reduce?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Journey times',
            },
            {
                char: 'b',
                text: 'Load capacity',
            },
            {
                char: 'c',
                text: 'Tyre wear',
            },
            {
                char: 'd',
                text: 'Fuel consumption',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5147',
        topicCode: 'Environmental issues ',
        question: 'How could you reduce your lorry`s fuel consumption?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Fit new brake linings',
            },
            {
                char: 'b',
                text: 'Fit a high-level exhaust pipe',
            },
            {
                char: 'c',
                text: 'Fit a larger fuel tank',
            },
            {
                char: 'd',
                text: 'Fit wind deflectors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5148',
        topicCode: 'Environmental issues ',
        question:
            'You`re a driver who`s certified to carry dangerous goods. How long is your certificate valid?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'One year',
            },
            {
                char: 'b',
                text: 'Two years',
            },
            {
                char: 'c',
                text: 'Five years',
            },
            {
                char: 'd',
                text: 'Ten years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5150',
        topicCode: 'Environmental issues ',
        question:
            'What would help to reduce the impact that your lorry has on the environment?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Driving through town centres',
            },
            {
                char: 'b',
                text: 'Braking in good time',
            },
            {
                char: 'c',
                text: 'Planning routes to avoid motorways',
            },
            {
                char: 'd',
                text: 'Racing to make up time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5151',
        topicCode: 'Environmental issues ',
        question:
            'What`s reduced by fitting a fly sheet tightly over a tipper body?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drag effect',
            },
            {
                char: 'b',
                text: 'Steering effort',
            },
            {
                char: 'c',
                text: 'Legal load weight',
            },
            {
                char: 'd',
                text: 'Load capacity',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5180',
        topicCode: 'Environmental issues ',
        question: 'How could you reduce the fuel consumption of your lorry?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Brake late as often as you can',
            },
            {
                char: 'b',
                text: 'Fit a cab-mounted wind deflector',
            },
            {
                char: 'c',
                text: 'Avoid sheeting any bulky loads',
            },
            {
                char: 'd',
                text: 'Try to increase your overall speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5209',
        topicCode: 'Environmental issues ',
        question: 'When may red diesel be used?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'For operators to reduce running costs',
            },
            {
                char: 'b',
                text: 'For authorised purposes only',
            },
            {
                char: 'c',
                text: 'For garages to test-drive repaired vehicles',
            },
            {
                char: 'd',
                text: 'For environmental purposes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5278',
        topicCode: 'Environmental issues ',
        question:
            'You`re driving a lorry with a loaded skip. Why should the skip be covered with a net?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To prevent rubbish from falling out of it',
            },
            {
                char: 'b',
                text: 'To protect the contents from the weather',
            },
            {
                char: 'c',
                text: 'To make it more visible to other traffic',
            },
            {
                char: 'd',
                text: 'To stop others from adding to the load',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5367',
        topicCode: 'Environmental issues ',
        question:
            'What must you do when you park a lorry weighing more than 7.5 tonnes on a verge for essential loading?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sign the collection note',
            },
            {
                char: 'b',
                text: 'Display an orange badge',
            },
            {
                char: 'c',
                text: 'Obtain the owner`s permission',
            },
            {
                char: 'd',
                text: 'Make sure the lorry is always attended',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5368',
        topicCode: 'Environmental issues ',
        question:
            'What must you have before you can leave a lorry weighing more than 7.5 tonnes unattended on a verge?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Police permission',
            },
            {
                char: 'b',
                text: 'A warning triangle',
            },
            {
                char: 'c',
                text: 'The owner`s permission',
            },
            {
                char: 'd',
                text: 'A loading permit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5404',
        topicCode: 'Environmental issues ',
        question: 'What can help to reduce fuel consumption?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Changing filters regularly',
            },
            {
                char: 'b',
                text: 'Keeping tyres under-inflated',
            },
            {
                char: 'c',
                text: 'Always using gears in sequence',
            },
            {
                char: 'd',
                text: 'Keeping the rev counter in the amber band',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5444',
        topicCode: 'Environmental issues ',
        question: 'What will a correctly adjusted air deflector do?',
        questionImg: 'VL2520.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Save fuel',
            },
            {
                char: 'b',
                text: 'Reduce tyre wear',
            },
            {
                char: 'c',
                text: 'Reduce road-surface wear',
            },
            {
                char: 'd',
                text: 'Cut loading time ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5457',
        topicCode: 'Environmental issues ',
        question:
            'What would staff from HM Revenue and Customs (HMRC) be looking for at a roadside check?\n ',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Red diesel ',
            },
            {
                char: 'b',
                text: 'Vehicle defects',
            },
            {
                char: 'c',
                text: 'Drivers` hours records ',
            },
            {
                char: 'd',
                text: 'Exhaust emissions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5460',
        topicCode: 'Environmental issues ',
        question: 'Why should the height of a load be kept to a minimum?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To reduce aerodynamic drag',
            },
            {
                char: 'b',
                text: 'To increase rolling resistance',
            },
            {
                char: 'c',
                text: 'To increase momentum',
            },
            {
                char: 'd',
                text: 'To reduce unloading time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6420',
        topicCode: 'Environmental issues ',
        question: 'What makes the pictured vehicle environmentally friendly?',
        questionImg: 'TS4536.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It uses solar power',
            },
            {
                char: 'b',
                text: 'It uses diesel fuel',
            },
            {
                char: 'c',
                text: 'It uses electricity',
            },
            {
                char: 'd',
                text: 'It uses unleaded fuel',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6424',
        topicCode: 'Environmental issues ',
        question:
            'How can you help to reduce the impact of road transport on the environment?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'By avoiding high gears',
            },
            {
                char: 'b',
                text: 'By reducing rest periods',
            },
            {
                char: 'c',
                text: 'By braking in good time',
            },
            {
                char: 'd',
                text: 'By increasing your overall speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6426',
        topicCode: 'Environmental issues ',
        question: 'How can you help to protect the environment?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By driving faster to reduce travelling time',
            },
            {
                char: 'b',
                text: 'By using bypasses and avoiding town centres',
            },
            {
                char: 'c',
                text: 'By filling your fuel tank with red diesel fuel',
            },
            {
                char: 'd',
                text: 'By leaving your engine running in traffic jams',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6429',
        topicCode: 'Environmental issues ',
        question: 'How could a professional driver improve their efficiency?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Keep to maximum speeds for shorter journeys',
            },
            {
                char: 'b',
                text: 'Plan routes to avoid busy times and congestion',
            },
            {
                char: 'c',
                text: 'Avoid route-planning because of the time it takes',
            },
            {
                char: 'd',
                text: 'Drive at a faster speed through hazardous areas',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6430',
        topicCode: 'Environmental issues ',
        question:
            'You`ve just refilled your fuel tank. What must you check before driving away from the fuel pump?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'That the tank is completely full up to the filler neck',
            },
            {
                char: 'b',
                text: 'That the filler cap is vented correctly by keeping it loose',
            },
            {
                char: 'c',
                text: 'That the filler cap is properly closed and secure',
            },
            {
                char: 'd',
                text: 'That the tank is nearly full and the filler cap is slightly loose',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6432',
        topicCode: 'Environmental issues ',
        question: 'What should you do to prevent fuel spillage?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop refuelling when the tank is half full',
            },
            {
                char: 'b',
                text: 'Use a filtered fuel system',
            },
            {
                char: 'c',
                text: 'Close and secure the filler cap',
            },
            {
                char: 'd',
                text: 'Place the drip tray correctly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6433',
        topicCode: 'Environmental issues ',
        question:
            'You`re following a lorry that`s leaking fuel. What should you be especially aware of?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The road may be very slippery',
            },
            {
                char: 'b',
                text: 'The fuel may splash your vehicle',
            },
            {
                char: 'c',
                text: 'Your brake linings will become slippery',
            },
            {
                char: 'd',
                text: 'Your spray reducers won`t be effective',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6511',
        topicCode: 'Environmental issues ',
        question: 'How could you save fuel?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'By extending the vehicle`s service times',
            },
            {
                char: 'b',
                text: 'By braking as late as you can',
            },
            {
                char: 'c',
                text: 'By planning routes to avoid congestion',
            },
            {
                char: 'd',
                text: 'By selecting lower gears',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6606',
        topicCode: 'Environmental issues ',
        question: 'What must you do after filling your fuel tanks?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Check your fuel gauge',
            },
            {
                char: 'b',
                text: 'Check your tachograph',
            },
            {
                char: 'c',
                text: 'Securely close the filler caps',
            },
            {
                char: 'd',
                text: 'Complete the fuel log sheets',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6709',
        topicCode: 'Environmental issues ',
        question:
            'You`re driving between the hours of 11.30 pm and 7.00 am. When must you switch off your vehicle`s reverse warning bleeper?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Before reversing on a road that has a 30 mph speed limit',
            },
            {
                char: 'b',
                text: 'Before reversing on a road that has a temporary speed limit',
            },
            {
                char: 'c',
                text: 'Before reversing on a road that has the national speed limit',
            },
            {
                char: 'd',
                text: 'Before reversing on a road that has a 40 mph speed limit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7039',
        topicCode: 'Environmental issues ',
        question:
            'You`re driving in a built-up area. Your vehicle is fitted with an audible warning device that sounds when it`s reversing. When must you turn off this alarm?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Between midnight and 6.30 am',
            },
            {
                char: 'b',
                text: 'Between 11.30 pm and 6.30 am',
            },
            {
                char: 'c',
                text: 'Between 11.30 pm and 7.00 am',
            },
            {
                char: 'd',
                text: 'Between 12.30 am and 7.00 am',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7096',
        topicCode: 'Environmental issues ',
        question:
            'What are the consequences of driving your vehicle when it`s emitting excessive exhaust smoke?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Its fuel consumption will improve ',
            },
            {
                char: 'b',
                text: 'Your vision ahead will be reduced',
            },
            {
                char: 'c',
                text: 'The brakes will fade more easily',
            },
            {
                char: 'd',
                text: 'You`ll be breaking the law',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7195',
        topicCode: 'Environmental issues ',
        question: 'How can you help to ease traffic congestion?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Plan journeys to avoid busy times',
            },
            {
                char: 'b',
                text: 'Plan journeys to avoid quiet times',
            },
            {
                char: 'c',
                text: 'Use motorways for all journeys',
            },
            {
                char: 'd',
                text: 'Avoid motorways altogether',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7196',
        topicCode: 'Environmental issues ',
        question:
            'You`ve parked for a short time in a town while you plan your route. What should you do while your vehicle is parked?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep the engine running on tick-over',
            },
            {
                char: 'b',
                text: 'Rev the engine occasionally to maintain air pressure',
            },
            {
                char: 'c',
                text: 'Hold the engine at a fast tick-over to maintain air pressure',
            },
            {
                char: 'd',
                text: 'Switch off the engine',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7197',
        topicCode: 'Environmental issues ',
        question: 'What can cause unnecessary pollution to the environment?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'High-level exhaust systems',
            },
            {
                char: 'b',
                text: 'Regular servicing',
            },
            {
                char: 'c',
                text: 'Weak radiator coolant',
            },
            {
                char: 'd',
                text: 'Poorly maintained vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7198',
        topicCode: 'Environmental issues ',
        question:
            'Diesel fuel has been spilled on the road. Which road users will this be a particular danger for? ',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Lorry drivers',
            },
            {
                char: 'b',
                text: 'Motorcyclists',
            },
            {
                char: 'c',
                text: 'Horse riders',
            },
            {
                char: 'd',
                text: 'Car drivers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7200',
        topicCode: 'Environmental issues ',
        question:
            'You`re driving in a built-up area between 11.30 pm and 7.00 am. For what reason can you sound the vehicle`s horn?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To greet a friend',
            },
            {
                char: 'b',
                text: 'To get another driver to move out of your way',
            },
            {
                char: 'c',
                text: 'To let another road user know you`re giving way',
            },
            {
                char: 'd',
                text: 'To warn another road user who poses a danger',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7201',
        topicCode: 'Environmental issues ',
        question:
            'Spilled diesel makes the road very slippery. Which vehicles will be most at risk from this hazard?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Motorcycles',
            },
            {
                char: 'b',
                text: 'Tractors ',
            },
            {
                char: 'c',
                text: 'Buses',
            },
            {
                char: 'd',
                text: 'Lorries',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7203',
        topicCode: 'Environmental issues ',
        question:
            'What should you do if you`ve lost the filler cap for your diesel tank?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Get a replacement before driving',
            },
            {
                char: 'b',
                text: 'Push a rag into the filler pipe',
            },
            {
                char: 'c',
                text: 'Drive slowly back to your depot',
            },
            {
                char: 'd',
                text: 'Only fill the tank half-full',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7250',
        topicCode: 'Environmental issues ',
        question:
            'Why is it a good idea to plan your journey to avoid travelling at busy times?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your vehicle will use more fuel',
            },
            {
                char: 'b',
                text: 'There`ll be fewer roadworks',
            },
            {
                char: 'c',
                text: 'It will help to ease congestion ',
            },
            {
                char: 'd',
                text: 'You`ll travel a much shorter distance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7252',
        topicCode: 'Environmental issues ',
        question:
            'Planning your route before starting a journey is a good idea. Why should you also plan an alternative route?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your original route may be blocked',
            },
            {
                char: 'b',
                text: 'Your maps may have different scales',
            },
            {
                char: 'c',
                text: 'It may be more scenic ',
            },
            {
                char: 'd',
                text: 'You may get held up by a tractor',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7259',
        topicCode: 'Environmental issues ',
        question: 'What will happen if you drive smoothly? ',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You`ll reduce journey times by about 15%',
            },
            {
                char: 'b',
                text: 'You`ll increase fuel consumption by about 15%',
            },
            {
                char: 'c',
                text: 'You`ll reduce fuel consumption by about 15%',
            },
            {
                char: 'd',
                text: 'You`ll increase journey times by about 15%',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7270',
        topicCode: 'Environmental issues ',
        question:
            'Usually, a rev counter is divided into coloured bands. Which band should you stay in for maximum fuel economy?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Blue',
            },
            {
                char: 'b',
                text: 'Green',
            },
            {
                char: 'c',
                text: 'Amber',
            },
            {
                char: 'd',
                text: 'Red',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7272',
        topicCode: 'Environmental issues ',
        question:
            'What would be the most likely effect of driving with the rev counter in the red band?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You would have optimum fuel economy',
            },
            {
                char: 'b',
                text: 'You would improve engine efficiency',
            },
            {
                char: 'c',
                text: 'You would damage the engine',
            },
            {
                char: 'd',
                text: 'You would create a false tachograph reading',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7304',
        topicCode: 'Environmental issues ',
        question:
            'What can be expected after drivers complete a Driver Certificate of Professional Competence (Driver CPC)?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Increased vehicle breakdowns',
            },
            {
                char: 'b',
                text: 'Increased fuel consumption',
            },
            {
                char: 'c',
                text: 'Reduced traffic volume',
            },
            {
                char: 'd',
                text: 'Reduced engine emissions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7321',
        topicCode: 'Environmental issues ',
        question:
            'Your vehicle is fitted with an engine management system. What will happen if you press the accelerator when you`re starting the engine?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'An excessive amount of fuel will be used',
            },
            {
                char: 'b',
                text: 'There`ll be an excessive build-up of air pressure',
            },
            {
                char: 'c',
                text: 'Exhaust emissions will be reduced',
            },
            {
                char: 'd',
                text: 'Oil consumption will be reduced',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7323',
        topicCode: 'Environmental issues ',
        question:
            'What benefit is expected to come from having a Driver Certificate of Professional Competence (Driver CPC) qualification?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A reduction in fuel consumption',
            },
            {
                char: 'b',
                text: 'An exemption from tachograph regulations',
            },
            {
                char: 'c',
                text: 'A reduction in vehicle tax',
            },
            {
                char: 'd',
                text: 'An exemption from all congestion charges',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7344',
        topicCode: 'Environmental issues ',
        question:
            'You`ve been stopped at a roadside check.\nWhat would staff from the environmental health department be checking?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Licence entitlement ',
            },
            {
                char: 'b',
                text: 'Exhaust emissions ',
            },
            {
                char: 'c',
                text: 'Tachograph changes ',
            },
            {
                char: 'd',
                text: 'Illegal immigrants ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7346',
        topicCode: 'Environmental issues ',
        question: 'What helps you to become a fuel-efficient driver?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Being aware of hazards',
            },
            {
                char: 'b',
                text: 'Avoiding block changing',
            },
            {
                char: 'c',
                text: 'Accelerating rapidly',
            },
            {
                char: 'd',
                text: 'Using air conditioning',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7348',
        topicCode: 'Environmental issues ',
        question: 'What can help to maximise fuel economy?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Cruise control',
            },
            {
                char: 'b',
                text: 'Air suspension',
            },
            {
                char: 'c',
                text: 'Re-grooved tyres',
            },
            {
                char: 'd',
                text: 'Diff-lock',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7359',
        topicCode: 'Environmental issues ',
        question:
            'How would you benefit from forward planning and early recognition of potential hazards?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You`ll use less fuel',
            },
            {
                char: 'b',
                text: 'You`ll use more fuel',
            },
            {
                char: 'c',
                text: 'You`ll be able to stop more quickly',
            },
            {
                char: 'd',
                text: 'You`ll reduce journey times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8154',
        topicCode: 'Environmental issues ',
        question:
            'You`ll be waiting at a terminus for some time. How can you reduce pollution?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By revving your engine',
            },
            {
                char: 'b',
                text: 'By switching off your engine',
            },
            {
                char: 'c',
                text: 'By leaving your engine on tick-over',
            },
            {
                char: 'd',
                text: 'By keeping your engine at high revs',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8170',
        topicCode: 'Environmental issues ',
        question:
            'You`re waiting for some time in a stationary traffic queue. Why should you switch off your engine?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To keep your passengers cool',
            },
            {
                char: 'b',
                text: 'To save on vehicle air pressure',
            },
            {
                char: 'c',
                text: 'To reduce exhaust emissions',
            },
            {
                char: 'd',
                text: 'To reduce radio interference',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8171',
        topicCode: 'Environmental issues ',
        question:
            'You`ve been waiting in a traffic queue for several minutes. What should you do if it`s clear that you won`t be moving soon?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Keep your engine at tick-over speed',
            },
            {
                char: 'b',
                text: 'Rev your engine occasionally',
            },
            {
                char: 'c',
                text: 'Switch off your engine',
            },
            {
                char: 'd',
                text: 'Run the engine at a constant higher speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8218',
        topicCode: 'Environmental issues ',
        question:
            'When starting your bus, how should air pressure be built up? ',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'With the doors open',
            },
            {
                char: 'b',
                text: 'With the service brake on',
            },
            {
                char: 'c',
                text: 'With the engine ticking over',
            },
            {
                char: 'd',
                text: 'With the engine revving up',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8322',
        topicCode: 'Environmental issues ',
        question: 'What must you check after refuelling your bus?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your filler caps are securely closed',
            },
            {
                char: 'b',
                text: 'Your tank is full to the top',
            },
            {
                char: 'c',
                text: 'The position of the emergency fuel cut-off switch',
            },
            {
                char: 'd',
                text: 'The low-fuel warning light is working',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6748',
        topicCode: 'Other road users ',
        question:
            'Your vehicle leaks diesel fuel on a roundabout. Who will this affect most?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drivers of three-wheeled vehicles',
            },
            {
                char: 'b',
                text: 'Motorcyclists',
            },
            {
                char: 'c',
                text: 'Towed vehicles',
            },
            {
                char: 'd',
                text: 'Car drivers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6751',
        topicCode: 'Other road users ',
        question: 'Which vehicles are most likely to be affected by side wind?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Flat-bed lorries',
            },
            {
                char: 'b',
                text: 'Tractors',
            },
            {
                char: 'c',
                text: 'Motorcycles',
            },
            {
                char: 'd',
                text: 'Estate cars',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6967',
        topicCode: 'Other road users ',
        question:
            'What should you do if the vehicle ahead is being driven by a learner?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep calm and be patient',
            },
            {
                char: 'b',
                text: 'Drive up close behind',
            },
            {
                char: 'c',
                text: 'Put your headlights on full beam',
            },
            {
                char: 'd',
                text: 'Sound your horn and overtake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6968',
        topicCode: 'Other road users ',
        question:
            'You`re about to overtake horse riders. What could scare the horses?',
        questionImg: 'P5503.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Sounding your horn',
            },
            {
                char: 'b',
                text: 'Giving arm signals',
            },
            {
                char: 'c',
                text: 'Driving slowly',
            },
            {
                char: 'd',
                text: 'Keeping well back',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6970',
        topicCode: 'Other road users ',
        question:
            'You`ve stopped at a pelican crossing. What should you do if the lights have changed to green but a disabled person is still crossing?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Give way to them',
            },
            {
                char: 'b',
                text: 'Drive in front of them',
            },
            {
                char: 'c',
                text: 'Drive behind them',
            },
            {
                char: 'd',
                text: 'Sound your horn at them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6971',
        topicCode: 'Other road users ',
        question:
            'Which sign means that there may be people walking along the road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4672.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4703.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4646.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4647.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6973',
        topicCode: 'Other road users ',
        question:
            'You`re turning left from a main road into a side road. What should you do if people are already crossing the road into which you`re turning?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue, as you have right of way',
            },
            {
                char: 'b',
                text: 'Signal to them to continue crossing',
            },
            {
                char: 'c',
                text: 'Wait and allow them to cross',
            },
            {
                char: 'd',
                text: 'Sound your horn to warn them of your presence',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6974',
        topicCode: 'Other road users ',
        question:
            'You`re at a road junction, turning into a minor road. What should you do if there are pedestrians crossing the minor road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop and wave the pedestrians across',
            },
            {
                char: 'b',
                text: 'Sound your horn to let the pedestrians know that you`re there',
            },
            {
                char: 'c',
                text: 'Give way to the pedestrians who are already crossing',
            },
            {
                char: 'd',
                text: 'Carry on; the pedestrians should give way to you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6975',
        topicCode: 'Other road users ',
        question:
            'Why should you check for motorcyclists just before turning right into a side road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They might be overtaking on your left',
            },
            {
                char: 'b',
                text: 'They might be following you closely',
            },
            {
                char: 'c',
                text: 'They might be emerging from the side road',
            },
            {
                char: 'd',
                text: 'They might be overtaking on your right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6976',
        topicCode: 'Other road users ',
        question: 'Why is a toucan crossing different from a puffin crossing?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Moped riders can use it',
            },
            {
                char: 'b',
                text: 'It`s controlled by a traffic warden',
            },
            {
                char: 'c',
                text: 'It`s controlled by two flashing lights',
            },
            {
                char: 'd',
                text: 'Pedestrians and cyclists can use it together',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6977',
        topicCode: 'Other road users ',
        question: 'What happens at toucan crossings?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You only stop when a pedestrian is waiting',
            },
            {
                char: 'b',
                text: 'Cyclists aren`t permitted',
            },
            {
                char: 'c',
                text: 'There`s a continuously flashing amber beacon',
            },
            {
                char: 'd',
                text: 'Pedestrians and cyclists may cross together',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6979',
        topicCode: 'Other road users ',
        question: 'Where would you see this sign?',
        questionImg: 'TS4546.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'In the window of a car taking children to school',
            },
            {
                char: 'b',
                text: 'At the side of the road',
            },
            {
                char: 'c',
                text: 'At playground areas',
            },
            {
                char: 'd',
                text: 'On the rear of a school bus or coach',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6980',
        topicCode: 'Other road users ',
        question: 'What does this sign mean?',
        questionImg: 'TS4702.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'No route for pedestrians and cyclists',
            },
            {
                char: 'b',
                text: 'A route for pedestrians only',
            },
            {
                char: 'c',
                text: 'A route for cyclists only',
            },
            {
                char: 'd',
                text: 'A route for pedestrians and cyclists ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6981',
        topicCode: 'Other road users ',
        question:
            'What action would you take when elderly people are crossing the road?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Wave them across so they know that you`ve seen them',
            },
            {
                char: 'b',
                text: 'Be patient and allow them to cross in their own time',
            },
            {
                char: 'c',
                text: 'Rev the engine to let them know that you`re waiting',
            },
            {
                char: 'd',
                text: 'Tap the horn in case they`re hard of hearing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6982',
        topicCode: 'Other road users ',
        question:
            'What should you do if you see two elderly pedestrians about to cross the road ahead?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Expect them to wait for you to pass',
            },
            {
                char: 'b',
                text: 'Speed up to get past them quickly',
            },
            {
                char: 'c',
                text: 'Stop and wave them across the road',
            },
            {
                char: 'd',
                text: 'Be careful; they might misjudge your speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6983',
        topicCode: 'Other road users ',
        question:
            'You`re approaching a roundabout. What should you do if you see a cyclist signalling to turn right?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake on the right',
            },
            {
                char: 'b',
                text: 'Give a warning with your horn',
            },
            {
                char: 'c',
                text: 'Signal the cyclist to move across',
            },
            {
                char: 'd',
                text: 'Give the cyclist plenty of room',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6984',
        topicCode: 'Other road users ',
        question:
            'You`re approaching this roundabout and see the cyclist signal right. Why is the cyclist keeping to the left?',
        questionImg: '85BW2956.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It`s a quicker route',
            },
            {
                char: 'b',
                text: 'They`re going to turn left instead',
            },
            {
                char: 'c',
                text: 'The Highway Code doesn`t apply to cyclists',
            },
            {
                char: 'd',
                text: 'They may use the left-hand lane to turn right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6985',
        topicCode: 'Other road users ',
        question:
            'You`re waiting to come out of a side road. Why should you look carefully for motorcycles?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Motorcycles are usually faster than cars',
            },
            {
                char: 'b',
                text: 'Police patrols often use motorcycles',
            },
            {
                char: 'c',
                text: 'Motorcycles are small and hard to see',
            },
            {
                char: 'd',
                text: 'Motorcycles have right of way',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6986',
        topicCode: 'Other road users ',
        question: 'Why do motorcyclists use dipped headlights in the daytime?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To make themselves more easily seen',
            },
            {
                char: 'b',
                text: 'To stop the battery overcharging',
            },
            {
                char: 'c',
                text: 'To improve their vision',
            },
            {
                char: 'd',
                text: 'To scare wildlife off the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6987',
        topicCode: 'Other road users ',
        question: 'Why are motorcyclists advised to wear bright clothing?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They must do so by law',
            },
            {
                char: 'b',
                text: 'It helps to keep them cool in summer',
            },
            {
                char: 'c',
                text: 'The colours are popular',
            },
            {
                char: 'd',
                text: 'To help other road users to see them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6989',
        topicCode: 'Other road users ',
        question:
            'Why do motorcyclists often look over their right shoulder just before turning right?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They need to listen for following traffic',
            },
            {
                char: 'b',
                text: 'Motorcycles don`t have mirrors',
            },
            {
                char: 'c',
                text: 'Looking around helps them balance as they turn',
            },
            {
                char: 'd',
                text: 'They need to check for traffic in their blind area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6992',
        topicCode: 'Other road users ',
        question:
            'You`re approaching a roundabout. What should you do if there are horses being ridden ahead of you?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Give them plenty of room',
            },
            {
                char: 'b',
                text: 'Stop and wait for them to get off the road',
            },
            {
                char: 'c',
                text: 'Sound your horn as a warning',
            },
            {
                char: 'd',
                text: 'Accelerate past as quickly as possible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6993',
        topicCode: 'Other road users ',
        question: 'What should you do when passing sheep on a road?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Keep close to avoid oncoming traffic',
            },
            {
                char: 'b',
                text: 'Drive very slowly',
            },
            {
                char: 'c',
                text: 'Pass quickly but quietly',
            },
            {
                char: 'd',
                text: 'Briefly sound your horn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6994',
        topicCode: 'Other road users ',
        question:
            'You`re driving at night. What does it mean if you see a pedestrian wearing reflective clothing and carrying a red light?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You`re approaching roadworks',
            },
            {
                char: 'b',
                text: 'You`re approaching an organised walk',
            },
            {
                char: 'c',
                text: 'You`re approaching a slow-moving vehicle',
            },
            {
                char: 'd',
                text: 'You`re approaching an accident hotspot',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6996',
        topicCode: 'Other road users ',
        question:
            'What action should you take if there are flashing amber lights under a school warning sign?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Reduce speed until you`re clear of the area',
            },
            {
                char: 'b',
                text: 'Keep up your speed and sound the horn',
            },
            {
                char: 'c',
                text: 'Increase your speed to clear the area quickly',
            },
            {
                char: 'd',
                text: 'Wait at the lights until they change to green',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6997',
        topicCode: 'Other road users ',
        question:
            'What should you do when you`re approaching this zebra crossing?',
        questionImg: 'R8538.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Prepare to slow down and stop',
            },
            {
                char: 'b',
                text: 'Stop and wave the pedestrians across',
            },
            {
                char: 'c',
                text: 'Speed up and pass by quickly',
            },
            {
                char: 'd',
                text: 'Drive on unless the pedestrians step out',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6998',
        topicCode: 'Other road users ',
        question: 'Why must these road markings be kept clear?',
        questionImg: 'TS4715.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To allow schoolchildren to be dropped off ',
            },
            {
                char: 'b',
                text: 'To allow teachers to park',
            },
            {
                char: 'c',
                text: 'To allow schoolchildren to be picked up ',
            },
            {
                char: 'd',
                text: 'To allow an unobstructed view of the area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6999',
        topicCode: 'Other road users ',
        question: 'Why mustn`t you stop on these road markings?',
        questionImg: 'TS4715.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It would obstruct everyone`s view of the area',
            },
            {
                char: 'b',
                text: 'It would obstruct teachers` access to the school',
            },
            {
                char: 'c',
                text: 'It would obstruct delivery vehicles` access to the school',
            },
            {
                char: 'd',
                text: 'It would obstruct emergency vehicles` access to the school',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7003',
        topicCode: 'Other road users ',
        question:
            'You`re following two cyclists as they approach a roundabout in the left-hand lane. In which direction should you expect them to go?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Left',
            },
            {
                char: 'b',
                text: 'Right',
            },
            {
                char: 'c',
                text: 'Any direction',
            },
            {
                char: 'd',
                text: 'Straight ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7004',
        topicCode: 'Other road users ',
        question:
            'You`re travelling behind a moped. What should you do if you want to turn left a short distance ahead?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake the moped before the junction',
            },
            {
                char: 'b',
                text: 'Pull alongside the moped and stay level until just before the junction',
            },
            {
                char: 'c',
                text: 'Sound your horn as a warning and turn in front of the moped',
            },
            {
                char: 'd',
                text: 'Stay behind until the moped has passed the junction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7006',
        topicCode: 'Other road users ',
        question:
            'You see a horse rider as you approach a roundabout. What should you do if they`re signalling right but keeping well to the left?',
        questionImg: 'R8519.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Proceed as normal',
            },
            {
                char: 'b',
                text: 'Keep close to them',
            },
            {
                char: 'c',
                text: 'Cut in front of them',
            },
            {
                char: 'd',
                text: 'Stay well back',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7007',
        topicCode: 'Other road users ',
        question:
            'How would you react to drivers who appear to be inexperienced?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound your horn to warn them of your presence',
            },
            {
                char: 'b',
                text: 'Be patient and prepare for them to react more slowly',
            },
            {
                char: 'c',
                text: 'Flash your headlights to tell them it`s safe for them to proceed',
            },
            {
                char: 'd',
                text: 'Overtake them as soon as possible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7008',
        topicCode: 'Other road users ',
        question:
            'What should you do if you`re following a learner driver who stalls at a junction?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Be patient, as you expect them to make mistakes',
            },
            {
                char: 'b',
                text: 'Stay very close behind and flash your headlights',
            },
            {
                char: 'c',
                text: 'Start to rev your engine if they take too long to restart',
            },
            {
                char: 'd',
                text: 'Immediately steer around them and drive on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7009',
        topicCode: 'Other road users ',
        question:
            'You`re on a country road. What should you expect to see coming towards you on your side of the road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Motorcycles',
            },
            {
                char: 'b',
                text: 'Bicycles',
            },
            {
                char: 'c',
                text: 'Pedestrians',
            },
            {
                char: 'd',
                text: 'Horse riders',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7011',
        topicCode: 'Other road users ',
        question:
            'What should you do when you`re following a car driven by an elderly driver?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Expect the driver to drive badly',
            },
            {
                char: 'b',
                text: 'Flash your lights and overtake',
            },
            {
                char: 'c',
                text: 'Be aware that the driver`s reactions may not be as fast as yours',
            },
            {
                char: 'd',
                text: 'Stay very close behind but be careful',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7012',
        topicCode: 'Other road users ',
        question:
            'You`re following a cyclist. What should you do if you wish to turn left a short distance ahead?',
        questionImg: 'DSCF2611.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Overtake the cyclist before the junction',
            },
            {
                char: 'b',
                text: 'Pull alongside the cyclist and stay level until after the junction',
            },
            {
                char: 'c',
                text: 'Hold back until the cyclist has passed the junction',
            },
            {
                char: 'd',
                text: 'Go around the cyclist on the junction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7013',
        topicCode: 'Other road users ',
        question:
            'A horse rider is in the left-hand lane approaching a roundabout. What should you expect the rider to do?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Go in any direction',
            },
            {
                char: 'b',
                text: 'Turn right',
            },
            {
                char: 'c',
                text: 'Turn left',
            },
            {
                char: 'd',
                text: 'Go ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7014',
        topicCode: 'Other road users ',
        question:
            'You`re at the front of a queue of traffic waiting to turn right into a side road. Why should you check your right-hand mirror just before turning?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To look for pedestrians about to cross',
            },
            {
                char: 'b',
                text: 'To check for overtaking vehicles',
            },
            {
                char: 'c',
                text: 'To make sure the side road is clear',
            },
            {
                char: 'd',
                text: 'To check for emerging traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7017',
        topicCode: 'Other road users ',
        question:
            'You`re driving past a line of parked cars. What should you do if you notice a ball bouncing out into the road ahead?',
        questionImg: 'IMG_1290.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue driving at the same speed and sound your horn',
            },
            {
                char: 'b',
                text: 'Continue driving at the same speed and flash your headlights',
            },
            {
                char: 'c',
                text: 'Slow down and be prepared to stop for children',
            },
            {
                char: 'd',
                text: 'Stop and wave the children across to fetch their ball',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7018',
        topicCode: 'Other road users ',
        question:
            'What should you do just before turning right from a main road into a side road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Cancel your right-turn signal',
            },
            {
                char: 'b',
                text: 'Select first gear',
            },
            {
                char: 'c',
                text: 'Check for traffic passing on your right',
            },
            {
                char: 'd',
                text: 'Stop and set the handbrake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7019',
        topicCode: 'Other road users ',
        question:
            'You`re driving past a bus that`s waiting at a bus stop on the other side of the road. Why should you be careful?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The bus may have broken down',
            },
            {
                char: 'b',
                text: 'Pedestrians may come from behind the bus',
            },
            {
                char: 'c',
                text: 'The bus may move off suddenly',
            },
            {
                char: 'd',
                text: 'The bus may remain stationary',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7020',
        topicCode: 'Other road users ',
        question: 'How should you overtake horse riders?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drive up close and overtake as soon as possible',
            },
            {
                char: 'b',
                text: 'Speed isn`t important but allow plenty of room',
            },
            {
                char: 'c',
                text: 'Use your horn just once to warn them',
            },
            {
                char: 'd',
                text: 'Drive slowly and leave plenty of room',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7024',
        topicCode: 'Other road users ',
        question: 'Where in particular should you look out for motorcyclists?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At a filling station',
            },
            {
                char: 'b',
                text: 'At a road junction',
            },
            {
                char: 'c',
                text: 'Near a service area',
            },
            {
                char: 'd',
                text: 'When entering a car park',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7061',
        topicCode: 'Other road users',
        question:
            'While driving at night, you see a pedestrian ahead. What does it mean if they`re wearing reflective clothing and carrying a red light?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You`re approaching road workers',
            },
            {
                char: 'b',
                text: 'You`re approaching an organised walk',
            },
            {
                char: 'c',
                text: 'You`re approaching an accident hotspot',
            },
            {
                char: 'd',
                text: 'You`re approaching slow-moving vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7080',
        topicCode: 'Other road users',
        question:
            'Which road users are more vulnerable at night in built-up areas?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drivers of black taxi cabs',
            },
            {
                char: 'b',
                text: 'Drivers of double-deck vehicles',
            },
            {
                char: 'c',
                text: 'Cyclists',
            },
            {
                char: 'd',
                text: 'Ambulance drivers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7088',
        topicCode: 'Other road users',
        question:
            'You`re about to overtake a motorcyclist when they look around over their right shoulder. What`s the most likely reason for them doing this?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The rider intends to move to the right',
            },
            {
                char: 'b',
                text: 'Something has fallen from the machine',
            },
            {
                char: 'c',
                text: 'The drive chain is slack',
            },
            {
                char: 'd',
                text: 'The rear tyre is flat',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7091',
        topicCode: 'Other road users',
        question:
            'Why should you allow extra room for motorcyclists when they`re riding through roadworks?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'There may be a reduced speed limit',
            },
            {
                char: 'b',
                text: 'There may be temporary traffic lights',
            },
            {
                char: 'c',
                text: 'They may swerve to avoid potholes',
            },
            {
                char: 'd',
                text: 'The traffic may be in single file',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7092',
        topicCode: 'Other road users',
        question:
            'You`re following a motorcyclist along a potholed road. How should you adjust your driving to take account of this situation?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Give them extra room',
            },
            {
                char: 'b',
                text: 'Drive alongside them',
            },
            {
                char: 'c',
                text: 'Try to pass them',
            },
            {
                char: 'd',
                text: 'Stay close behind them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7094',
        topicCode: 'Other road users',
        question: 'Which vehicles are most at risk from spilt diesel fuel?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Motorcycles',
            },
            {
                char: 'b',
                text: 'Empty tankers',
            },
            {
                char: 'c',
                text: 'Towed vehicles',
            },
            {
                char: 'd',
                text: 'Fire engines',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7095',
        topicCode: 'Other road users',
        question:
            'You`re driving in a town. What should you do when you see this sign on a stationary bus ahead?',
        questionImg: 'TS4546.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Accelerate quickly',
            },
            {
                char: 'b',
                text: 'Wait until it moves off',
            },
            {
                char: 'c',
                text: 'Drive past slowly',
            },
            {
                char: 'd',
                text: 'Expect the driver will be looking after the children',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7097',
        topicCode: 'Other road users',
        question:
            'What should you do when you`re following a scooter on a poor road surface?',
        questionImg: 'MC6503.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Overtake without any delay',
            },
            {
                char: 'b',
                text: 'Stay close behind until you can pass',
            },
            {
                char: 'c',
                text: 'Stay well back and allow them room',
            },
            {
                char: 'd',
                text: 'Sound your horn as you get close',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7124',
        topicCode: 'Other road users',
        question:
            'At toucan crossings, pedestrians share the crossing with which other road users?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Horse riders',
            },
            {
                char: 'b',
                text: 'Cyclists',
            },
            {
                char: 'c',
                text: 'Motorcyclists',
            },
            {
                char: 'd',
                text: 'Trams',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7137',
        topicCode: 'Other road users',
        question:
            'You`re driving on a dual carriageway. What type of vehicle must use a flashing amber beacon on this road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'An ambulance',
            },
            {
                char: 'b',
                text: 'A fire engine ',
            },
            {
                char: 'c',
                text: 'A doctor`s car on call',
            },
            {
                char: 'd',
                text: 'A mobility scooter',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7144',
        topicCode: 'Other road users',
        question:
            'You`re driving near a school in heavy traffic. What should you do when there are children walking close to the kerb on your side of the road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Move to the other side of the road',
            },
            {
                char: 'b',
                text: 'Wave at them to move back from the kerb',
            },
            {
                char: 'c',
                text: 'Stop for a moment to see what they do',
            },
            {
                char: 'd',
                text: 'Drive slowly until you`re clear of the area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7146',
        topicCode: 'Other road users',
        question:
            'You`re driving on a road with an uneven surface. What should you do if you`re following a motorcyclist along this road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow extra room in case the rider swerves to avoid potholes',
            },
            {
                char: 'b',
                text: 'Leave less room so the rider can see you in their mirrors',
            },
            {
                char: 'c',
                text: 'Drive close behind and get ready to overtake',
            },
            {
                char: 'd',
                text: 'Drive closely to shield the rider',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7181',
        topicCode: 'Other road users',
        question:
            'You wish to turn left into a side road. What should you do if there`s a cyclist in front as you approach the junction?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtake the cyclist before the junction',
            },
            {
                char: 'b',
                text: 'Wait until the cyclist has passed the junction',
            },
            {
                char: 'c',
                text: 'Sound your horn to warn the cyclist to wait',
            },
            {
                char: 'd',
                text: 'Drive alongside and watch the cyclist in your mirrors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7182',
        topicCode: 'Other road users',
        question:
            'You`re waiting to turn left at a junction. In your mirror you can see a cyclist moving up between the kerb and the nearside of your vehicle. How should you deal with the cyclist?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow them to move in front of you',
            },
            {
                char: 'b',
                text: 'Move off and make them wait for you',
            },
            {
                char: 'c',
                text: 'Steer to the left to make them dismount',
            },
            {
                char: 'd',
                text: 'Tell them to move out of your way',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7183',
        topicCode: 'Other road users',
        question:
            'You`re approaching a roundabout. You see a cyclist signal right. Why do they keep to the left?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It`s a quicker route for a cyclist',
            },
            {
                char: 'b',
                text: 'They`re going to turn left',
            },
            {
                char: 'c',
                text: 'It`s a safer route for a cyclist',
            },
            {
                char: 'd',
                text: 'The Highway Code doesn`t apply to cyclists',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7184',
        topicCode: 'Other road users',
        question:
            'You`re entering a roundabout. What should you do if a cyclist in front of you is signalling to turn right?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake on the right',
            },
            {
                char: 'b',
                text: 'Sound the horn',
            },
            {
                char: 'c',
                text: 'Overtake on the left',
            },
            {
                char: 'd',
                text: 'Allow plenty of room',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7185',
        topicCode: 'Other road users',
        question:
            'A group of horse riders comes towards you. What should you do if the leading rider`s horse becomes nervous of your presence?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Brake gently to a stop until they`ve passed',
            },
            {
                char: 'b',
                text: 'Brake quickly to a stop, applying the parking brake',
            },
            {
                char: 'c',
                text: 'Continue driving, keeping well to the left',
            },
            {
                char: 'd',
                text: 'Increase speed to pass the riders quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7186',
        topicCode: 'Other road users',
        question:
            'You`re emerging from a side road into a queue of traffic. Which of these vehicles is especially hard to see?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Bicycle',
            },
            {
                char: 'b',
                text: 'Tractor',
            },
            {
                char: 'c',
                text: 'Van',
            },
            {
                char: 'd',
                text: 'Car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7187',
        topicCode: 'Other road users',
        question: 'Why are motorcyclists more at risk from other road users?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They`re easy to see',
            },
            {
                char: 'b',
                text: 'They often break down',
            },
            {
                char: 'c',
                text: 'They can`t give arm signals',
            },
            {
                char: 'd',
                text: 'They`re easily overlooked',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7188',
        topicCode: 'Other road users',
        question:
            'Which of these is the main cause of collisions involving motorcycles?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Other drivers',
            },
            {
                char: 'b',
                text: 'Other motorcyclists',
            },
            {
                char: 'c',
                text: 'Wet roads',
            },
            {
                char: 'd',
                text: 'Icy roads',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7189',
        topicCode: 'Other road users',
        question:
            'What should you be on the lookout for before changing lanes in slow-moving queuing traffic?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Private-hire taxis',
            },
            {
                char: 'b',
                text: 'Breakdown vehicles',
            },
            {
                char: 'c',
                text: 'Filtering motorcyclists',
            },
            {
                char: 'd',
                text: 'Traffic cones',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7190',
        topicCode: 'Other road users',
        question: 'Which road users are especially at risk at a road junction?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Motorcyclists',
            },
            {
                char: 'b',
                text: 'Lorry drivers',
            },
            {
                char: 'c',
                text: 'Car drivers',
            },
            {
                char: 'd',
                text: 'Bus drivers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7191',
        topicCode: 'Other road users',
        question: 'When are motorcyclists particularly vulnerable?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Near zebra crossings',
            },
            {
                char: 'b',
                text: 'In gusting winds ',
            },
            {
                char: 'c',
                text: 'When leaving motorways',
            },
            {
                char: 'd',
                text: 'At traffic lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7204',
        topicCode: 'Other road users ',
        question:
            'You`re driving towards a zebra crossing. What should you do if you see that a person in a wheelchair is waiting to cross? ',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue on your way',
            },
            {
                char: 'b',
                text: 'Wave to the person to cross',
            },
            {
                char: 'c',
                text: 'Wave to the person to wait',
            },
            {
                char: 'd',
                text: 'Be prepared to stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7205',
        topicCode: 'Other road users ',
        question: 'How will a school crossing patrol signal you to stop?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'By pointing to children on the opposite pavement',
            },
            {
                char: 'b',
                text: 'By displaying a red light',
            },
            {
                char: 'c',
                text: 'By displaying a `stop` sign',
            },
            {
                char: 'd',
                text: 'By giving you an arm signal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7206',
        topicCode: 'Other road users ',
        question:
            'There`s a slow-moving motorcyclist ahead of you. What should you do if you`re unsure what the rider is going to do?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pass on the left',
            },
            {
                char: 'b',
                text: 'Pass on the right',
            },
            {
                char: 'c',
                text: 'Stay behind',
            },
            {
                char: 'd',
                text: 'Move closer',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7207',
        topicCode: 'Other road users ',
        question: 'Which road users are more vulnerable at road junctions?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Cyclists',
            },
            {
                char: 'b',
                text: 'Car drivers',
            },
            {
                char: 'c',
                text: 'Lorry drivers',
            },
            {
                char: 'd',
                text: 'Taxi drivers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7208',
        topicCode: 'Other road users ',
        question:
            'You`re driving on a single carriageway road. What should you do when you see horse riders ahead?',
        questionImg: 'P5503.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move into the middle of the road',
            },
            {
                char: 'b',
                text: 'Check your mirrors and prepare to slow down',
            },
            {
                char: 'c',
                text: 'Switch on your vehicle`s hazard warning lights',
            },
            {
                char: 'd',
                text: 'Signal right to show you`re going to pass them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7209',
        topicCode: 'Other road users ',
        question:
            'As you approach a pelican crossing, the lights change to green. What should you do if an elderly couple are halfway across?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wave at them to cross as quickly as they can',
            },
            {
                char: 'b',
                text: 'Rev your engine to make them hurry',
            },
            {
                char: 'c',
                text: 'Flash your lights in case they haven`t heard you',
            },
            {
                char: 'd',
                text: 'Wait patiently and give them time to finish crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7211',
        topicCode: 'Other road users ',
        question:
            'What should you do when you`re following a motorcyclist on an uneven road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Allow less room, so you can be seen in their mirrors',
            },
            {
                char: 'b',
                text: 'Overtake them immediately',
            },
            {
                char: 'c',
                text: 'Allow extra room, in case they swerve to avoid potholes',
            },
            {
                char: 'd',
                text: 'Allow the same room as you would any other road user',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7212',
        topicCode: 'Other road users ',
        question:
            'Why do you have to be alert for motorcyclists in queues of traffic?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They may have panniers fitted to their motorcycle',
            },
            {
                char: 'b',
                text: 'They may ride in single file',
            },
            {
                char: 'c',
                text: 'They may be filtering between the lanes',
            },
            {
                char: 'd',
                text: 'They may ride with their headlights on dipped beam',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7213',
        topicCode: 'Other road users ',
        question:
            'You`re driving past parked cars. What should you do if you notice a bicycle wheel sticking out between them?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Accelerate past quickly and sound your horn',
            },
            {
                char: 'b',
                text: 'Slow down and wave the cyclist across',
            },
            {
                char: 'c',
                text: 'Brake sharply and flash your headlights',
            },
            {
                char: 'd',
                text: 'Slow down and be prepared to stop for a cyclist',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7214',
        topicCode: 'Other road users ',
        question:
            'What do yellow zigzag lines on the road outside a school mean?',
        questionImg: 'TS4715.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Sound your horn to alert other road users',
            },
            {
                char: 'b',
                text: 'Stop to allow children to cross',
            },
            {
                char: 'c',
                text: 'You mustn`t wait or park on these lines',
            },
            {
                char: 'd',
                text: 'You mustn`t drive over these lines',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7215',
        topicCode: 'Other road users ',
        question:
            'You`re driving on a main road. What should you do just before turning right into a side road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Adjust your interior mirror',
            },
            {
                char: 'b',
                text: 'Flash your headlights',
            },
            {
                char: 'c',
                text: 'Steer over to the left',
            },
            {
                char: 'd',
                text: 'Check for traffic overtaking on your right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7216',
        topicCode: 'Other road users ',
        question:
            'Where should you take particular care to look for motorcyclists and cyclists?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On dual carriageways',
            },
            {
                char: 'b',
                text: 'At junctions',
            },
            {
                char: 'c',
                text: 'At zebra crossings',
            },
            {
                char: 'd',
                text: 'In one-way streets',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7393',
        topicCode: 'Other road users',
        question:
            'You`re turning right from a main road into a side road. There`s no oncoming traffic. What should you do if pedestrians are standing on the pavement waiting to cross the side road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Turn in because the pedestrians are safe on the pavement',
            },
            {
                char: 'b',
                text: 'Wave at the pedestrians, inviting them to cross the road',
            },
            {
                char: 'c',
                text: 'Wait and give way to the pedestrians',
            },
            {
                char: 'd',
                text: 'Sound your horn to alert the pedestrians to your presence',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7394',
        topicCode: 'Other road users',
        question:
            'You`re travelling on a narrow section of road. What should you do if a horse rider ahead is riding in the centre of the lane?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound your horn to alert them to your presence',
            },
            {
                char: 'b',
                text: 'Stay behind and allow them to ride in this position',
            },
            {
                char: 'c',
                text: 'Move across to the right and try to ease past them',
            },
            {
                char: 'd',
                text: 'Get up close behind to encourage them to move aside',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CD7395',
        topicCode: 'Other road users',
        question:
            'You�re about to overtake a cyclist on a road that has a 30 mph speed limit. How much room should you leave them as you overtake?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At least as much room as you would if you were overtaking a car',
            },
            {
                char: 'b',
                text: 'At least a car�s width',
            },
            {
                char: 'c',
                text: 'At least a car�s length',
            },
            {
                char: 'd',
                text: 'At least 2 car widths',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7396',
        topicCode: 'Other road users',
        question:
            'You`re turning left from a main road into a side road. What should you do if there�s a pedestrian on the pavement waiting to cross the side road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Flash your lights to encourage the pedestrian to cross',
            },
            {
                char: 'b',
                text: 'Carry on turning into the side road',
            },
            {
                char: 'c',
                text: 'Sound your horn to let the pedestrian know you�re there',
            },
            {
                char: 'd',
                text: 'Wait and give way to the pedestrian',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'DD8316',
        topicCode: 'Other road users',
        question:
            'What should you do when you`re driving through a bus station?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Change your destination boards ',
            },
            {
                char: 'b',
                text: 'Drive through quickly if you`re not stopping',
            },
            {
                char: 'c',
                text: 'Look for people leaving buses',
            },
            {
                char: 'd',
                text: 'Sound your horn as you enter',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5195 ',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry with a maximum authorised mass of 38 tonnes on a single carriageway road in England. What`s the speed limit for your vehicle after passing this sign?',
        questionImg: 'TS4534.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '40 mph',
            },
            {
                char: 'b',
                text: '50 mph',
            },
            {
                char: 'c',
                text: '60 mph',
            },
            {
                char: 'd',
                text: '70 mph',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5196 ',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a laden articulated lorry with a maximum authorised mass of 38 tonnes on a dual carriageway in England. What speed limit applies to your vehicle after passing this sign?',
        questionImg: 'TS4534.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '40 mph',
            },
            {
                char: 'b',
                text: '50 mph',
            },
            {
                char: 'c',
                text: '60 mph',
            },
            {
                char: 'd',
                text: '70 mph',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5210',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving an articulated lorry. What should you do when you see this sign?',
        questionImg: 'TS4611.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Turn round and find an alternative route',
            },
            {
                char: 'b',
                text: 'Park safely and arrange alternative transport for the goods',
            },
            {
                char: 'c',
                text: 'Inform your vehicle operator and await further instructions',
            },
            {
                char: 'd',
                text: 'Drive past the sign because it doesn`t apply to you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5214',
        topicCode: 'Road and traffic signs',
        question:
            'Which of these signs means you can`t drive your lorry past this point?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4611.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4669.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4691.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4690.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5215',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry 30 feet long and towing a trailer 15 feet long. What should you do when you see this sign?',
        questionImg: 'TS4618.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Find an alternative route to your destination',
            },
            {
                char: 'b',
                text: 'Stop and wait for a police escort',
            },
            {
                char: 'c',
                text: 'Continue past the sign but reduce your speed',
            },
            {
                char: 'd',
                text: 'Carry on; the sign applies to the towing vehicle only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5245',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry that`s carrying a heavy load. What should you be prepared to do when you see this sign ahead?',
        questionImg: 'TS4597.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Brake to a lower speed',
            },
            {
                char: 'b',
                text: 'Change to a higher gear',
            },
            {
                char: 'c',
                text: 'Stop to check your load',
            },
            {
                char: 'd',
                text: 'Change to a lower gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5274',
        topicCode: 'Road and traffic signs',
        question:
            'You`re on a motorway. Your lorry has a maximum authorised mass of more than 7.5 tonnes. What does this sign mean to you?',
        questionImg: 'TS4733.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You mustn`t use the right-hand lane ',
            },
            {
                char: 'b',
                text: 'You can only use the right-hand lane',
            },
            {
                char: 'c',
                text: 'You can`t leave the motorway at this junction',
            },
            {
                char: 'd',
                text: 'You can use the middle or right-hand lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5348',
        topicCode: 'Road and traffic signs',
        question:
            'What`s the national speed limit on a motorway for a lorry weighing over 7.5 tonnes?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '50 mph (80 km/h)',
            },
            {
                char: 'b',
                text: '55 mph (88 km/h)',
            },
            {
                char: 'c',
                text: '60 mph (96 km/h)',
            },
            {
                char: 'd',
                text: '70 mph (112 km/h)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5370',
        topicCode: 'Road and traffic signs',
        question: 'When must these two signs be used?',
        questionImg: 'TS4583.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you`re carrying a load that overhangs the front or rear of the vehicle by more than 1 metre (3 feet 3 inches)',
            },
            {
                char: 'b',
                text: 'Whenever your vehicle is being towed',
            },
            {
                char: 'c',
                text: 'Whenever a police escort is required',
            },
            {
                char: 'd',
                text: 'When you`re carrying a load that overhangs the front or rear of the vehicle by more than 2 metres (6 feet 6 inches)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5371',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry weighing more than 7.5 tonnes on a motorway. What does this sign mean?',
        questionImg: 'TS4534.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Maximum speed 40 mph',
            },
            {
                char: 'b',
                text: 'Maximum speed 50 mph',
            },
            {
                char: 'c',
                text: 'Maximum speed 60 mph',
            },
            {
                char: 'd',
                text: 'Maximum speed 70 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CC5372',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry weighing more than 7.5 tonnes on a dual carriageway in England. What does this sign mean?',
        questionImg: 'TS4534.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Maximum speed 40 mph',
            },
            {
                char: 'b',
                text: 'Maximum speed 50 mph',
            },
            {
                char: 'c',
                text: 'Maximum speed 60 mph',
            },
            {
                char: 'd',
                text: 'Maximum speed 70 mph',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5373',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a lorry weighing more than 7.5 tonnes on a single carriageway road in England. What does this sign mean?',
        questionImg: 'TS4534.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Maximum speed 30 mph',
            },
            {
                char: 'b',
                text: 'Maximum speed 40 mph',
            },
            {
                char: 'c',
                text: 'Maximum speed 50 mph',
            },
            {
                char: 'd',
                text: 'Maximum speed 60 mph',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'CC5374',
        topicCode: 'Road and traffic signs',
        question: 'What`s prohibited when a Red Route is in operation?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stopping or parking',
            },
            {
                char: 'b',
                text: 'Overtaking',
            },
            {
                char: 'c',
                text: 'Changing lanes',
            },
            {
                char: 'd',
                text: 'Straddling the lines',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6480',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4533.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'End of restricted speed area',
            },
            {
                char: 'b',
                text: 'End of restricted parking area',
            },
            {
                char: 'c',
                text: 'End of clearway',
            },
            {
                char: 'd',
                text: 'End of cycle route',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6481',
        topicCode: 'Road and traffic signs',
        question: 'Which sign means `No stopping`?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4674.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4691.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4534.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4670.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6483 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4699.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Give way to traffic from the opposite direction',
            },
            {
                char: 'b',
                text: 'You`re entering a one-way street',
            },
            {
                char: 'c',
                text: 'Two-way traffic ahead',
            },
            {
                char: 'd',
                text: 'You have priority over vehicles from the opposite direction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6484 ',
        topicCode: 'Road and traffic signs',
        question:
            'At a junction, you see this sign partly covered by snow. What does it mean?',
        questionImg: 'TS4558.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Crossroads',
            },
            {
                char: 'b',
                text: 'Give way',
            },
            {
                char: 'c',
                text: 'Stop',
            },
            {
                char: 'd',
                text: 'Turn right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6485 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4535.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Service area 30 miles ahead',
            },
            {
                char: 'b',
                text: 'Maximum speed 30 mph',
            },
            {
                char: 'c',
                text: 'Minimum speed 30 mph',
            },
            {
                char: 'd',
                text: 'Lay-by 30 miles ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6486 ',
        topicCode: 'Road and traffic signs',
        question: 'Which of these signs means turn left ahead?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4659.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4660.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4661.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4662.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6487 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4554.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Route for trams',
            },
            {
                char: 'b',
                text: 'Give way to trams',
            },
            {
                char: 'c',
                text: 'Route for buses',
            },
            {
                char: 'd',
                text: 'Give way to buses',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6488 ',
        topicCode: 'Road and traffic signs',
        question:
            'Which of these signs means that you`re entering a one-way street?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4659.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4693.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4666.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4699.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6489 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4540.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Bus station on the right',
            },
            {
                char: 'b',
                text: 'Contraflow bus lane',
            },
            {
                char: 'c',
                text: 'With-flow bus lane',
            },
            {
                char: 'd',
                text: 'Give way to buses',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6491 ',
        topicCode: 'Road and traffic signs',
        question: 'Which hazard would be shown in a triangular road sign?',
        questionImg: 'TS4501.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Road narrows',
            },
            {
                char: 'b',
                text: 'One-way street',
            },
            {
                char: 'c',
                text: 'Bus lane',
            },
            {
                char: 'd',
                text: 'Minimum speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6492',
        topicCode: 'Road and traffic signs',
        question:
            'Which sign means that pedestrians may be walking along the road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4647.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4648.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4646.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4649.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6493 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4518.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Side wind',
            },
            {
                char: 'b',
                text: 'Road noise',
            },
            {
                char: 'c',
                text: 'Airport',
            },
            {
                char: 'd',
                text: 'Adverse camber',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6494 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this traffic sign mean?',
        questionImg: 'TS4517.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Slippery road ahead',
            },
            {
                char: 'b',
                text: 'Tyres liable to puncture ahead',
            },
            {
                char: 'c',
                text: 'Danger ahead',
            },
            {
                char: 'd',
                text: 'Service area ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6495 ',
        topicCode: 'Road and traffic signs',
        question:
            'What should you do if you see this sign when you`re about to overtake?',
        questionImg: 'TS4084.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake the other driver as quickly as possible',
            },
            {
                char: 'b',
                text: 'Move to the right to get a better view',
            },
            {
                char: 'c',
                text: 'Switch your headlights on before overtaking',
            },
            {
                char: 'd',
                text: 'Hold back until you can see clearly ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6496 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4516.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Uneven road surface',
            },
            {
                char: 'b',
                text: 'Bridge over the road',
            },
            {
                char: 'c',
                text: 'Road ahead ends',
            },
            {
                char: 'd',
                text: 'Water across the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6497 ',
        topicCode: 'Road and traffic signs',
        question:
            'You see this traffic light ahead. Which light or lights will come on next?',
        questionImg: 'TS4506.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Red alone',
            },
            {
                char: 'b',
                text: 'Red and amber together',
            },
            {
                char: 'c',
                text: 'Green and amber together',
            },
            {
                char: 'd',
                text: 'Green alone',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6499 ',
        topicCode: 'Road and traffic signs',
        question: 'Where would you find these flashing red lights?',
        questionImg: 'TS4507.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At a pelican crossing',
            },
            {
                char: 'b',
                text: 'At a level crossing',
            },
            {
                char: 'c',
                text: 'At a zebra crossing',
            },
            {
                char: 'd',
                text: 'At a school crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6534 ',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving through roadworks. What information does this sign give you?',
        questionImg: 'TS4595.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Large vehicles must go straight ahead',
            },
            {
                char: 'b',
                text: 'Traffic is joining from the left',
            },
            {
                char: 'c',
                text: 'All traffic must leave at the next exit',
            },
            {
                char: 'd',
                text: 'The distance to the next exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6536 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4691.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop only to pick up passengers',
            },
            {
                char: 'b',
                text: 'No stopping at any time',
            },
            {
                char: 'c',
                text: 'Stop only to set down passengers',
            },
            {
                char: 'd',
                text: 'No stopping at peak times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6537 ',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving on a motorway and there`s no traffic ahead. You see this sign. Which lane should you use?',
        questionImg: 'TS4585.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The right-hand lane',
            },
            {
                char: 'b',
                text: 'The hard shoulder',
            },
            {
                char: 'c',
                text: 'The left-hand lane',
            },
            {
                char: 'd',
                text: 'The middle lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6540 ',
        topicCode: 'Road and traffic signs',
        question: 'Which of these signs shows an uphill gradient?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4596.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4599.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4597.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4601.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6541 ',
        topicCode: 'Road and traffic signs',
        question: 'Which of these signs means `uneven road`?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4598.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4601.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4602.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4609.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6542 ',
        topicCode: 'Road and traffic signs',
        question: 'What are these advanced stop lines for?',
        questionImg: 'J7509.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To allow room for pedestrians to cross the road',
            },
            {
                char: 'b',
                text: 'To allow space for large vehicles to turn',
            },
            {
                char: 'c',
                text: 'To allow cyclists to position in front of other traffic',
            },
            {
                char: 'd',
                text: 'To allow you to select where to stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6545 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this arm signal mean?',
        questionImg: 'IMG_055.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The driver intends to turn left',
            },
            {
                char: 'b',
                text: 'The driver intends to slow down',
            },
            {
                char: 'c',
                text: 'The driver wants you to keep back',
            },
            {
                char: 'd',
                text: 'The driver wants you to go past',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6546 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this motorway sign mean?',
        questionImg: 'TS4579.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Use the hard shoulder',
            },
            {
                char: 'b',
                text: 'Contraflow system ahead',
            },
            {
                char: 'c',
                text: 'Overhead bridge repairs',
            },
            {
                char: 'd',
                text: 'All lanes closed ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6547 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign warn of?',
        questionImg: 'TS4608.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Slippery road',
            },
            {
                char: 'b',
                text: 'Double bend',
            },
            {
                char: 'c',
                text: 'Overhead electrified cable',
            },
            {
                char: 'd',
                text: 'Series of bends',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6548 ',
        topicCode: 'Road and traffic signs',
        question: 'Who has priority when you`re approaching this sign?',
        questionImg: 'TS4605.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Larger vehicles',
            },
            {
                char: 'b',
                text: 'Oncoming traffic',
            },
            {
                char: 'c',
                text: 'Smaller vehicles',
            },
            {
                char: 'd',
                text: 'You have priority',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6549',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4591.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Car lane only',
            },
            {
                char: 'b',
                text: 'Single file only',
            },
            {
                char: 'c',
                text: 'Queues likely',
            },
            {
                char: 'd',
                text: 'Keep your distance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6550 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4584.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Road flooded',
            },
            {
                char: 'b',
                text: 'Risk of punctures',
            },
            {
                char: 'c',
                text: 'Loose chippings',
            },
            {
                char: 'd',
                text: 'Uneven surface',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6551 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: '626.2AV2.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You`re allowed to carry on, but only with a police escort',
            },
            {
                char: 'b',
                text: 'You should continue slowly if your weight is above the limit',
            },
            {
                char: 'c',
                text: 'Don`t cross unless the bridge is clear of other vehicles',
            },
            {
                char: 'd',
                text: 'Don`t cross the bridge if your weight exceeds the limit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6554 ',
        topicCode: 'Road and traffic signs',
        question: 'What does this marker count down to?',
        questionImg: 'TS4610.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A motorway slip road',
            },
            {
                char: 'b',
                text: 'A primary road junction',
            },
            {
                char: 'c',
                text: 'A concealed level crossing',
            },
            {
                char: 'd',
                text: 'A roadside rest area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6581',
        topicCode: 'Road and traffic signs',
        question:
            'What does it mean when there are double red lines running along the edge of a road?',
        questionImg: 'TS4728.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Limited loading',
            },
            {
                char: 'b',
                text: 'No stopping',
            },
            {
                char: 'c',
                text: 'Bus route',
            },
            {
                char: 'd',
                text: 'Short-term parking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6582',
        topicCode: 'Road and traffic signs',
        question: 'Where would you expect to see these road markings?',
        questionImg: 'J7510.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At the entrance to a car park',
            },
            {
                char: 'b',
                text: 'On the approach to an arched bridge',
            },
            {
                char: 'c',
                text: 'At the start of a cycle lane',
            },
            {
                char: 'd',
                text: 'On the approach to a lifting barrier',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6591',
        topicCode: 'Road and traffic signs',
        question:
            'You`re approaching traffic lights. Only the red light is showing. Which series of lights will show next?',
        questionImg: 'TS4505.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Red and amber, then green',
            },
            {
                char: 'b',
                text: 'Green, then amber',
            },
            {
                char: 'c',
                text: 'Amber, then green',
            },
            {
                char: 'd',
                text: 'Green and amber, then green',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6593 ',
        topicCode: 'Road and traffic signs',
        question:
            'The double white line along the centre of the road is unbroken on your side. When may you cross the line? ',
        questionImg: 'TS4582.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To overtake any maintenance vehicle in front',
            },
            {
                char: 'b',
                text: 'To overtake a pedal cycle travelling at 10 mph or less',
            },
            {
                char: 'c',
                text: 'To check it`s safe to overtake the vehicle in front',
            },
            {
                char: 'd',
                text: 'To overtake a driver travelling at 20 mph or less',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6632',
        topicCode: 'Road and traffic signs',
        question: 'What should you do when you see this sign ahead?',
        questionImg: 'TS4699.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Accelerate because you have priority',
            },
            {
                char: 'b',
                text: 'Slow down; the road may be narrow ahead ',
            },
            {
                char: 'c',
                text: 'Stop and give way to oncoming traffic',
            },
            {
                char: 'd',
                text: 'Maintain your speed; it`s just an information sign ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6636',
        topicCode: 'Road and traffic signs',
        question: 'Why should you slow down when you see this sign?',
        questionImg: 'TS4649.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Because pedestrians have right of way',
            },
            {
                char: 'b',
                text: 'There`s a `road race` in progress',
            },
            {
                char: 'c',
                text: 'There`s a pedestrian crossing ahead',
            },
            {
                char: 'd',
                text: 'Because children may be crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD6684',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4572.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Vehicle carrying dangerous goods in packages',
            },
            {
                char: 'b',
                text: 'Vehicle broken down ahead',
            },
            {
                char: 'c',
                text: 'Holiday route',
            },
            {
                char: 'd',
                text: 'Emergency diversion route for motorway traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7060',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving in fog on a three-lane motorway. Which lane are you in when you can see red reflective studs on your left and white reflective studs on your right?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The hard shoulder',
            },
            {
                char: 'b',
                text: 'The middle lane',
            },
            {
                char: 'c',
                text: 'The right-hand lane',
            },
            {
                char: 'd',
                text: 'The left-hand lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7062',
        topicCode: 'Road and traffic signs',
        question:
            'Which drivers are given instructions by diamond-shaped signs?',
        questionImg: 'TS4508.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drivers of lorries',
            },
            {
                char: 'b',
                text: 'Drivers of trams',
            },
            {
                char: 'c',
                text: 'Drivers of buses',
            },
            {
                char: 'd',
                text: 'Drivers of tractors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7089',
        topicCode: 'Road and traffic signs',
        question: 'What`s a `Red Route`?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'An area where special waiting restrictions apply',
            },
            {
                char: 'b',
                text: 'An area where part-time traffic lights operate',
            },
            {
                char: 'c',
                text: 'An area where drivers have to pay a toll',
            },
            {
                char: 'd',
                text: 'An area where night-time and weekend weight limits apply',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7103',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving on a motorway. What colour are the reflective studs on the right-hand edge of the carriageway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Amber',
            },
            {
                char: 'b',
                text: 'Green ',
            },
            {
                char: 'c',
                text: 'Red',
            },
            {
                char: 'd',
                text: 'White',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7104',
        topicCode: 'Road and traffic signs',
        question:
            'What`s the purpose of green-and-yellow fluorescent studs on a motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They mark the lanes in a contraflow system',
            },
            {
                char: 'b',
                text: 'They separate the slip road from the motorway',
            },
            {
                char: 'c',
                text: 'They mark access points for emergency services',
            },
            {
                char: 'd',
                text: 'They separate the edge of the hard shoulder from the grass verge',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7105',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4508.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Tramway speed limit',
            },
            {
                char: 'b',
                text: 'Distance to level crossing',
            },
            {
                char: 'c',
                text: 'Maximum passenger capacity',
            },
            {
                char: 'd',
                text: 'Goods-vehicle weight limit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7127',
        topicCode: 'Road and traffic signs',
        question: 'Which light won`t show to a driver at a puffin crossing?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Flashing amber',
            },
            {
                char: 'b',
                text: 'Red',
            },
            {
                char: 'c',
                text: 'Steady amber',
            },
            {
                char: 'd',
                text: 'Green',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7128',
        topicCode: 'Road and traffic signs',
        question:
            'You`re approaching a red light at a puffin crossing. Pedestrians are on the crossing. How long will the red light stay on?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Until you start to edge forward onto the crossing',
            },
            {
                char: 'b',
                text: 'Until the pedestrians have reached a safe position',
            },
            {
                char: 'c',
                text: 'Until the pedestrians are clear of the front of your vehicle',
            },
            {
                char: 'd',
                text: 'Until a driver from the opposite direction reaches the crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7131',
        topicCode: 'Road and traffic signs',
        question:
            'A bus-lane sign shows no hours of operation. When is the bus lane in operation?',
        questionImg: 'R8501.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The bus lane isn`t in operation at all',
            },
            {
                char: 'b',
                text: 'The bus lane is only in operation at peak times',
            },
            {
                char: 'c',
                text: 'The bus lane is in operation 24 hours a day',
            },
            {
                char: 'd',
                text: 'The bus lane is only in operation in daylight hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7132',
        topicCode: 'Road and traffic signs',
        question: 'What colour follows the green signal at a puffin crossing?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Steady red',
            },
            {
                char: 'b',
                text: 'Flashing amber',
            },
            {
                char: 'c',
                text: 'Steady amber',
            },
            {
                char: 'd',
                text: 'Flashing green',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7133',
        topicCode: 'Road and traffic signs',
        question:
            'What must you do when you`re approaching a pelican crossing in its flashing amber phase?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Give way to pedestrians on the crossing',
            },
            {
                char: 'b',
                text: 'Encourage pedestrians to cross',
            },
            {
                char: 'c',
                text: 'Wait until the green light appears',
            },
            {
                char: 'd',
                text: 'Stop even if the crossing is clear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7134',
        topicCode: 'Road and traffic signs',
        question: 'What should the hard shoulder on a motorway be used for?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'As a place to stop to answer a mobile phone',
            },
            {
                char: 'b',
                text: 'As a place to stop when an emergency arises',
            },
            {
                char: 'c',
                text: 'As a place to stop for a short rest when you`re tired',
            },
            {
                char: 'd',
                text: 'As a place to stop to check a road atlas',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7135',
        topicCode: 'Road and traffic signs',
        question: 'When must you stop on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you`re tired and need to walk in the fresh air',
            },
            {
                char: 'b',
                text: 'When you`re picking up hitchhikers',
            },
            {
                char: 'c',
                text: 'When you`re signalled to do so by flashing red lights',
            },
            {
                char: 'd',
                text: 'When you need to answer your mobile phone',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7218',
        topicCode: 'Road and traffic signs',
        question: 'Which sign means `no overtaking`?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4669.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4674.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4699.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4641.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7219',
        topicCode: 'Road and traffic signs',
        question: 'What does this motorway sign mean?',
        questionImg: 'TS4593.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Right-hand lane closed ahead',
            },
            {
                char: 'b',
                text: '1 tonne weight limit ahead',
            },
            {
                char: 'c',
                text: 'Left-hand lane closed ahead',
            },
            {
                char: 'd',
                text: 'T-junction 1 mile ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7221',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4604.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'No U-turns',
            },
            {
                char: 'b',
                text: 'Two-way traffic',
            },
            {
                char: 'c',
                text: 'One-way system',
            },
            {
                char: 'd',
                text: 'End of one-way system',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7222',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4548.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Low bridge',
            },
            {
                char: 'b',
                text: 'Tunnel ahead',
            },
            {
                char: 'c',
                text: 'Accident hotspot',
            },
            {
                char: 'd',
                text: 'Speed camera',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7223',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4601.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Rumble strips',
            },
            {
                char: 'b',
                text: 'Road humps',
            },
            {
                char: 'c',
                text: 'Uneven road',
            },
            {
                char: 'd',
                text: 'Double hump bridge',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7225',
        topicCode: 'Road and traffic signs',
        question: 'Why should you slow down when you see this sign?',
        questionImg: 'TS4584.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To reduce the risk of a blow-out',
            },
            {
                char: 'b',
                text: 'To avoid splashing others with water',
            },
            {
                char: 'c',
                text: 'To avoid throwing up loose chippings',
            },
            {
                char: 'd',
                text: 'To prevent grit from blocking your air filter',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7227',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving on a motorway. What`s the speed limit when the hard shoulder is being used as a running lane?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The speed limit is always 60 mph',
            },
            {
                char: 'b',
                text: 'The national speed limit applies',
            },
            {
                char: 'c',
                text: 'The speed limit is displayed above the hard shoulder',
            },
            {
                char: 'd',
                text: 'The speed limit is always 30 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7232',
        topicCode: 'Road and traffic signs',
        question: 'What`s the purpose of an emergency area on a motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It`s for use in case of emergency or breakdown',
            },
            {
                char: 'b',
                text: 'It`s for use if you think you`ll be involved in a road-rage incident ',
            },
            {
                char: 'c',
                text: 'It`s for a police patrol to park and watch traffic',
            },
            {
                char: 'd',
                text: 'It`s for construction and road workers to store emergency equipment ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7234',
        topicCode: 'Road and traffic signs',
        question: 'What are traffic officers authorised to do?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Carry out enforcement duties',
            },
            {
                char: 'b',
                text: 'Issue fixed penalty notices',
            },
            {
                char: 'c',
                text: 'Test drivers suspected of drink-driving',
            },
            {
                char: 'd',
                text: 'Stop and direct anyone on a motorway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7235',
        topicCode: 'Road and traffic signs',
        question:
            'You`re on a motorway. What does it mean when a red cross is displayed above the hard shoulder?',
        questionImg: 'TS4748.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop in this lane to answer your mobile phone',
            },
            {
                char: 'b',
                text: 'You may use this lane as a running lane ',
            },
            {
                char: 'c',
                text: 'This lane can be used if you need a rest',
            },
            {
                char: 'd',
                text: 'You shouldn`t use this lane as a running lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7236',
        topicCode: 'Road and traffic signs',
        question:
            'You`re on a motorway. What does it mean when a mandatory speed limit is displayed above the hard shoulder?',
        questionImg: 'TS4747.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You shouldn`t use the hard shoulder as a running lane',
            },
            {
                char: 'b',
                text: 'The hard shoulder can be used as a running lane',
            },
            {
                char: 'c',
                text: 'You can park on the hard shoulder if you feel tired',
            },
            {
                char: 'd',
                text: 'Large vehicles must use the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7237',
        topicCode: 'Road and traffic signs',
        question: 'What`s the aim of variable speed limits on a motorway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To prevent overtaking',
            },
            {
                char: 'b',
                text: 'To reduce rest stops',
            },
            {
                char: 'c',
                text: 'To prevent tailgating',
            },
            {
                char: 'd',
                text: 'To reduce congestion',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7238',
        topicCode: 'Road and traffic signs',
        question:
            'You`re on a motorway. What do the speed-limit signs inside a red circle indicate?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The speed limit on the sign is advisory',
            },
            {
                char: 'b',
                text: 'The national speed limit will always apply',
            },
            {
                char: 'c',
                text: 'The speed limit is always 30 mph',
            },
            {
                char: 'd',
                text: 'The speed limit on the sign must be obeyed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7239',
        topicCode: 'Road and traffic signs',
        question:
            'You`re travelling on a motorway. A red cross is displayed on the gantry signals above the hard shoulder and mandatory speed limits are shown above all other lanes. What does the red cross mean?',
        questionImg: 'TS4749.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The hard shoulder can be used as a rest area if you feel tired',
            },
            {
                char: 'b',
                text: 'The hard shoulder is for emergency or breakdown use only',
            },
            {
                char: 'c',
                text: 'The hard shoulder can be used as a normal running lane ',
            },
            {
                char: 'd',
                text: 'The hard shoulder has a speed limit of 50 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7241',
        topicCode: 'Road and traffic signs',
        question: 'You see this sign on a motorway. Which lane can you use?',
        questionImg: 'TS4750.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Any lane except the hard shoulder',
            },
            {
                char: 'b',
                text: 'The hard shoulder only',
            },
            {
                char: 'c',
                text: 'The three right-hand lanes only',
            },
            {
                char: 'd',
                text: 'Permitted lanes, including the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7243',
        topicCode: 'Road and traffic signs',
        question: 'When can you travel on the hard shoulder of a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When taking the next exit',
            },
            {
                char: 'b',
                text: 'When traffic has stopped',
            },
            {
                char: 'c',
                text: 'When signs show that you can',
            },
            {
                char: 'd',
                text: 'When traffic is moving slowly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'CD7386',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4734.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Soft verges',
            },
            {
                char: 'b',
                text: 'Only cars may park here',
            },
            {
                char: 'c',
                text: 'Parking restrictions apply',
            },
            {
                char: 'd',
                text: 'Fuel and water tanks will leak',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8174',
        topicCode: 'Road and traffic signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4611.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Buses only',
            },
            {
                char: 'b',
                text: 'Bus lane',
            },
            {
                char: 'c',
                text: 'No buses',
            },
            {
                char: 'd',
                text: 'Bus stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8318',
        topicCode: 'Road and traffic signs',
        question: 'Which road user is sometimes allowed to share a bus lane?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Learner driver',
            },
            {
                char: 'b',
                text: 'Lorry driver',
            },
            {
                char: 'c',
                text: 'Disabled driver',
            },
            {
                char: 'd',
                text: 'Taxi driver',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'DD8323',
        topicCode: 'Road and traffic signs',
        question:
            'You`re driving a fully loaded coach that`s 12 metres long. What should you do when you approach this sign?',
        questionImg: '622.1A.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Don`t proceed past the sign but find another route',
            },
            {
                char: 'b',
                text: 'Set down all your passengers at a safe place before the sign',
            },
            {
                char: 'c',
                text: 'Stop and check the legal lettering on the side panel',
            },
            {
                char: 'd',
                text: 'Proceed as normal; the sign doesn`t apply to you',
            },
        ],
        isNIExempts: false,
    },
];

export default questions;
