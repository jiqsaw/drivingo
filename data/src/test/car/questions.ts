import type { IQuestion } from '@drivingo/models';

const questions: IQuestion[] = [
    {
        code: 'AB2001',
        topicCode: 'alertness',
        question: 'What should you do before making a U-turn?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Give an arm signal as well as using your indicators',
            },
            {
                char: 'b',
                text: 'Check road markings to see that U-turns are permitted',
            },
            {
                char: 'c',
                text: 'Look over your shoulder for a final check',
            },
            {
                char: 'd',
                text: 'Select a higher gear than normal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2003',
        topicCode: 'alertness',
        question: 'What should you do as you approach this bridge?',
        questionImg: 'IMG_1263.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Move to the right',
            },
            {
                char: 'b',
                text: 'Slow down',
            },
            {
                char: 'c',
                text: 'Change gear',
            },
            {
                char: 'd',
                text: 'Keep to 30 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2005',
        topicCode: 'alertness',
        question: 'Where should you avoid overtaking?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Just after a bend',
            },
            {
                char: 'b',
                text: 'In a one-way street',
            },
            {
                char: 'c',
                text: 'On a 30 mph road',
            },
            {
                char: 'd',
                text: 'Approaching a dip in the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2007',
        topicCode: 'alertness',
        question: 'What does this curved arrow road marking mean?',
        questionImg: 'IMG_1887.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Heavy vehicles should take the next road on the left to avoid a weight limit',
            },
            {
                char: 'b',
                text: 'The road ahead bends to the left',
            },
            {
                char: 'c',
                text: 'Overtaking traffic should move back to the left',
            },
            {
                char: 'd',
                text: 'The road ahead has a camber to the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2008',
        topicCode: 'alertness',
        question:
            "What should you do if your mobile phone rings while you're driving or riding?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop immediately',
            },
            {
                char: 'b',
                text: 'Answer it immediately',
            },
            {
                char: 'c',
                text: 'Leave it until you have stopped in a safe place',
            },
            {
                char: 'd',
                text: 'Pull up at the nearest kerb',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2009',
        topicCode: 'alertness',
        question: 'Why are these yellow lines painted across the road?',
        questionImg: '85BW9937.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To help you choose the correct lane',
            },
            {
                char: 'b',
                text: 'To help you keep the correct separation distance',
            },
            {
                char: 'c',
                text: 'To make you aware of your speed',
            },
            {
                char: 'd',
                text: 'To tell you the distance to the roundabout',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2501',
        topicCode: 'alertness',
        question:
            "What should you do when you're approaching traffic lights that have been green for some time?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Accelerate hard',
            },
            {
                char: 'b',
                text: 'Maintain your speed',
            },
            {
                char: 'c',
                text: 'Be ready to stop',
            },
            {
                char: 'd',
                text: 'Brake hard',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2636',
        topicCode: 'alertness',
        question:
            'What should you do before slowing down or stopping your vehicle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound the horn',
            },
            {
                char: 'b',
                text: 'Use the mirrors',
            },
            {
                char: 'c',
                text: 'Select a higher gear',
            },
            {
                char: 'd',
                text: 'Flash the headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2702',
        topicCode: 'alertness',
        question:
            "You're following a large vehicle. Why should you stay a safe distance behind it?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "You'll be able to corner more quickly",
            },
            {
                char: 'b',
                text: "You'll help the large vehicle to stop more easily",
            },
            {
                char: 'c',
                text: "You'll give the driver a chance to see you in their mirrors",
            },
            {
                char: 'd',
                text: "You'll keep out of the wind better",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2828',
        topicCode: 'alertness',
        question:
            'Why should you use your mirrors when you see a hazard ahead?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "Because you'll need to accelerate out of danger",
            },
            {
                char: 'b',
                text: 'To assess how your actions will affect the traffic behind',
            },
            {
                char: 'c',
                text: "Because you'll need to brake sharply and stop",
            },
            {
                char: 'd',
                text: "To check what's happening on the road ahead",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2829',
        topicCode: 'alertness',
        question:
            "You're waiting to turn right at the end of a road. What should you do if your view is obstructed by parked vehicles?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop and then move forward slowly and carefully for a clear view',
            },
            {
                char: 'b',
                text: 'Move quickly to where you can see so you only block traffic from one direction',
            },
            {
                char: 'c',
                text: "Wait for a pedestrian to let you know when it's safe for you to emerge",
            },
            {
                char: 'd',
                text: 'Turn your vehicle around immediately and find another junction to use',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1002',
        topicCode: 'alertness',
        question:
            'There are objects hanging from your interior mirror. Why could this be a hazard?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your view could be obstructed',
            },
            {
                char: 'b',
                text: 'Your sun visor might get tangled',
            },
            {
                char: 'c',
                text: 'Your radio reception might be affected',
            },
            {
                char: 'd',
                text: 'Your windscreen could mist up more easily',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1005',
        topicCode: 'alertness',
        question:
            "You're on a long motorway journey. What should you do if you start to feel sleepy?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Play some loud music',
            },
            {
                char: 'b',
                text: 'Stop on the hard shoulder for a rest',
            },
            {
                char: 'c',
                text: 'Drive faster to complete your journey sooner',
            },
            {
                char: 'd',
                text: 'Leave the motorway and stop in a safe place',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1007',
        topicCode: 'alertness',
        question:
            'Why should you switch your headlights on when it first starts to get dark?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To make your dials easier to see',
            },
            {
                char: 'b',
                text: 'So others can see you more easily',
            },
            {
                char: 'c',
                text: 'So that you blend in with other drivers',
            },
            {
                char: 'd',
                text: 'Because the street lights are lit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1287',
        topicCode: 'alertness',
        question: 'What’s most likely to distract you while you’re driving?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Using a mobile phone',
            },
            {
                char: 'b',
                text: 'Using the windscreen wipers',
            },
            {
                char: 'c',
                text: 'Using the demisters',
            },
            {
                char: 'd',
                text: 'Using the mirrors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1294',
        topicCode: 'alertness',
        question:
            "You're driving your car. When may you use a hand-held mobile phone?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "When you're receiving a call",
            },
            {
                char: 'b',
                text: "When you've parked safely",
            },
            {
                char: 'c',
                text: "When you're driving at less than 30 mph",
            },
            {
                char: 'd',
                text: 'When your car has automatic transmission',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1366',
        topicCode: 'alertness',
        question:
            "You're driving on a wet road. What should you do if you have to stop your vehicle in an emergency?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Apply the parking brake and footbrake together',
            },
            {
                char: 'b',
                text: 'Keep both hands on the steering wheel',
            },
            {
                char: 'c',
                text: 'Select reverse gear',
            },
            {
                char: 'd',
                text: 'Give an arm signal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1390',
        topicCode: 'alertness',
        question:
            'What should you do when you move off from behind a parked car?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Give a signal after moving off',
            },
            {
                char: 'b',
                text: 'Look around before moving off',
            },
            {
                char: 'c',
                text: 'Look around after moving off',
            },
            {
                char: 'd',
                text: 'Use the exterior mirrors only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1439',
        topicCode: 'alertness',
        question:
            "You're travelling along this road. How should you pass the cyclist?",
        questionImg: 'IMG_2018.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Sound your horn as you pass',
            },
            {
                char: 'b',
                text: 'Keep close to them as you pass',
            },
            {
                char: 'c',
                text: 'Leave them plenty of room as you pass',
            },
            {
                char: 'd',
                text: 'Change down one gear before you pass',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1573',
        topicCode: 'alertness',
        question:
            'When do windscreen pillars cause a serious obstruction to your view?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "When you're driving on a motorway",
            },
            {
                char: 'b',
                text: "When you're driving on a dual carriageway",
            },
            {
                char: 'c',
                text: "When you're approaching a one-way street",
            },
            {
                char: 'd',
                text: "When you're approaching bends and junctions",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1595',
        topicCode: 'alertness',
        question:
            "What should you do if you can't see clearly behind when you're reversing?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Open the window to look behind',
            },
            {
                char: 'b',
                text: 'Open the door to look behind',
            },
            {
                char: 'c',
                text: 'Look in the nearside mirror',
            },
            {
                char: 'd',
                text: 'Ask someone to guide you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1626',
        topicCode: 'alertness',
        question: 'What does the term ‘blind spot’ mean?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'An area covered by your right-hand mirror',
            },
            {
                char: 'b',
                text: 'An area not covered by your headlights',
            },
            {
                char: 'c',
                text: 'An area covered by your left-hand mirror',
            },
            {
                char: 'd',
                text: 'An area not visible to the driver',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1629',
        topicCode: 'alertness',
        question:
            "What's likely to happen if you use a hands-free phone while you're driving?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It will improve your safety',
            },
            {
                char: 'b',
                text: 'It will increase your concentration',
            },
            {
                char: 'c',
                text: 'It will reduce your view',
            },
            {
                char: 'd',
                text: 'It will divert your attention',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1632',
        topicCode: 'alertness',
        question:
            "You're turning right onto a dual carriageway. What should you do before emerging?",
        questionImg: 'IMG_2815.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop, apply the parking brake and then select a low gear',
            },
            {
                char: 'b',
                text: 'Position your vehicle well to the left of the side road',
            },
            {
                char: 'c',
                text: 'Check that the central reservation is wide enough for your vehicle',
            },
            {
                char: 'd',
                text: 'Make sure that you leave enough room for a vehicle behind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1633',
        topicCode: 'alertness',
        question:
            "You're waiting to emerge from a junction. The windscreen pillar is restricting your view. What should you be particularly aware of?",
        questionImg: 'VC1505.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Lorries',
            },
            {
                char: 'b',
                text: 'Buses',
            },
            {
                char: 'c',
                text: 'Motorcyclists',
            },
            {
                char: 'd',
                text: 'Coaches',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1726',
        topicCode: 'alertness',
        question:
            "How can you make sure that a satellite navigation (satnav) system doesn't distract you when you're driving?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "Turn it off while you're driving in built-up areas",
            },
            {
                char: 'b',
                text: 'Choose a voice that you find calming',
            },
            {
                char: 'c',
                text: "Only set the destination when you're lost",
            },
            {
                char: 'd',
                text: 'Set it before starting your journey',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2012',
        topicCode: 'attitude',
        question:
            'What must you do when the amber light is flashing at a pelican crossing?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop and wait for the green light',
            },
            {
                char: 'b',
                text: 'Stop and wait for the red light',
            },
            {
                char: 'c',
                text: 'Give way to pedestrians waiting to cross',
            },
            {
                char: 'd',
                text: 'Give way to pedestrians already on the crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2015',
        topicCode: 'attitude',
        question:
            'Why should you never wave people across at pedestrian crossings?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Another vehicle may be coming',
            },
            {
                char: 'b',
                text: 'They may not be looking',
            },
            {
                char: 'c',
                text: "It's safer for you to carry on",
            },
            {
                char: 'd',
                text: 'They may not be ready to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2022',
        topicCode: 'attitude',
        question:
            'Why is it dangerous to drive too close to the vehicle ahead?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your engine will overheat',
            },
            {
                char: 'b',
                text: 'Your mirrors will need adjusting',
            },
            {
                char: 'c',
                text: 'Your view of the road ahead will be restricted',
            },
            {
                char: 'd',
                text: 'Your satnav will be confused',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2023',
        topicCode: 'attitude',
        question: 'What will happen if you follow this vehicle too closely?',
        questionImg: 'IMG_1279.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your brakes will overheat',
            },
            {
                char: 'b',
                text: 'Your fuel consumption will be increased',
            },
            {
                char: 'c',
                text: 'Your engine will overheat',
            },
            {
                char: 'd',
                text: 'Your view ahead will be reduced',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2025',
        topicCode: 'attitude',
        question:
            "What's the minimum time gap you should leave when following a vehicle on a wet road?",
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
        code: 'AB2028',
        topicCode: 'attitude',
        question:
            "You're being overtaken by a long, heavily laden lorry. What should you do if it's taking a long time for it to overtake?",
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
        code: 'AB2029',
        topicCode: 'attitude',
        question: 'Which vehicle will use a blue flashing beacon?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Motorway maintenance',
            },
            {
                char: 'b',
                text: 'Bomb disposal',
            },
            {
                char: 'c',
                text: 'Snow plough',
            },
            {
                char: 'd',
                text: 'Breakdown recovery',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2031',
        topicCode: 'attitude',
        question:
            "What should you do if you're being followed by an ambulance showing flashing blue lights?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "Pull over as soon as it's safe to do so",
            },
            {
                char: 'b',
                text: 'Accelerate hard to get away from it',
            },
            {
                char: 'c',
                text: 'Maintain your speed and course',
            },
            {
                char: 'd',
                text: 'Brake harshly and stop well out into the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2033',
        topicCode: 'attitude',
        question:
            'What type of emergency vehicle is fitted with a green flashing beacon?',
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
                text: "Doctor's car",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2036',
        topicCode: 'attitude',
        question: 'Who should obey diamond-shaped traffic signs?',
        questionImg: 'TS4023.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Tram drivers',
            },
            {
                char: 'b',
                text: 'Bus drivers',
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
        code: 'AB2037',
        topicCode: 'attitude',
        question:
            'On a road where trams operate, which vehicles will be most at risk from the tram rails?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Cars',
            },
            {
                char: 'b',
                text: 'Cycles',
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
        code: 'AB2039',
        topicCode: 'attitude',
        question: "When should you use your vehicle's horn?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To alert others to your presence',
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
        code: 'AB2040',
        topicCode: 'attitude',
        question:
            "You're in a one-way street and want to turn right. Where should you position your vehicle when there are two lanes?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In the right-hand lane',
            },
            {
                char: 'b',
                text: 'In the left-hand lane',
            },
            {
                char: 'c',
                text: 'In either lane, depending on the traffic',
            },
            {
                char: 'd',
                text: 'Just left of the centre line',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2041',
        topicCode: 'attitude',
        question:
            'You wish to turn right ahead. Why should you take up the correct position in good time?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To allow other drivers to pull out in front of you',
            },
            {
                char: 'b',
                text: "To give a better view into the road that you're joining",
            },
            {
                char: 'c',
                text: 'To help other road users know what you intend to do',
            },
            {
                char: 'd',
                text: 'To allow drivers to pass you on the right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2503',
        topicCode: 'attitude',
        question:
            'Which type of crossing allows cyclists to ride across while pedestrians are also crossing?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Toucan',
            },
            {
                char: 'b',
                text: 'Puffin',
            },
            {
                char: 'c',
                text: 'Pelican',
            },
            {
                char: 'd',
                text: 'Zebra',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2620',
        topicCode: 'attitude',
        question:
            "You're travelling at the legal speed limit. What should you do if the vehicle behind approaches quickly, flashing its headlights?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Accelerate to make a gap behind you',
            },
            {
                char: 'b',
                text: 'Touch the brakes sharply to show your brake lights',
            },
            {
                char: 'c',
                text: 'Maintain your speed to prevent the vehicle from overtaking',
            },
            {
                char: 'd',
                text: 'Allow the vehicle to overtake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2643',
        topicCode: 'attitude',
        question: 'When should you flash your headlights at other road users?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "When showing that you're giving way",
            },
            {
                char: 'b',
                text: "When showing that you're about to turn",
            },
            {
                char: 'c',
                text: 'When telling them that you have right of way',
            },
            {
                char: 'd',
                text: "When letting them know that you're there",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2644',
        topicCode: 'attitude',
        question:
            "You're approaching an unmarked crossroads. How should you deal with the junction?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Accelerate and keep to the middle',
            },
            {
                char: 'b',
                text: 'Slow down and keep to the right',
            },
            {
                char: 'c',
                text: 'Accelerate and look to the left',
            },
            {
                char: 'd',
                text: 'Slow down and look both ways',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2699',
        topicCode: 'attitude',
        question:
            "The conditions are good and dry. When should you use the 'two-second rule'?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Before restarting the engine after it has stalled',
            },
            {
                char: 'b',
                text: 'When checking your gap from the vehicle in front',
            },
            {
                char: 'c',
                text: "Before using the 'Mirrors - Signal - Manoeuvre' routine",
            },
            {
                char: 'd',
                text: 'When traffic lights change to green',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2703',
        topicCode: 'attitude',
        question: 'Which colour follows the green signal at a puffin crossing?',
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
        code: 'AB2704',
        topicCode: 'attitude',
        question:
            "You're in a line of traffic. What action should you take if the driver behind is following very closely?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Ignore the driver behind and continue to travel within the speed limit',
            },
            {
                char: 'b',
                text: 'Slow down, gradually increasing the gap between you and the vehicle in front',
            },
            {
                char: 'c',
                text: 'Signal left and wave the driver behind to come past',
            },
            {
                char: 'd',
                text: 'Move over to a position just left of the centre line of the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1011',
        topicCode: 'attitude',
        question:
            "You're driving on a clear night. Which lights should you use if the national speed limit applies and there's a steady stream of oncoming traffic?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Full-beam headlights',
            },
            {
                char: 'b',
                text: 'Sidelights',
            },
            {
                char: 'c',
                text: 'Dipped headlights',
            },
            {
                char: 'd',
                text: 'Fog lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1012',
        topicCode: 'attitude',
        question:
            "You're driving behind a large goods vehicle. What should you do if it signals left but steers to the right?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slow down and let the vehicle turn',
            },
            {
                char: 'b',
                text: 'Drive on, keeping to the left',
            },
            {
                char: 'c',
                text: 'Overtake on the right of it',
            },
            {
                char: 'd',
                text: 'Hold your speed and sound your horn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1013',
        topicCode: 'attitude',
        question:
            "You're driving along this road. What should you do if the red car cuts in close in front of you?",
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
        code: 'BB1014',
        topicCode: 'attitude',
        question:
            "You're waiting in a traffic queue at night. How can you avoid dazzling drivers behind you?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use the parking brake and release the footbrake',
            },
            {
                char: 'b',
                text: 'Keep your foot on the footbrake',
            },
            {
                char: 'c',
                text: 'Balance the clutch with the accelerator',
            },
            {
                char: 'd',
                text: 'Use the parking brake and footbrake together',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1016',
        topicCode: 'attitude',
        question:
            "You're driving in traffic at the speed limit for the road. What should you do if the driver behind is trying to overtake?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move closer to the car ahead, so the driver behind has no room to overtake',
            },
            {
                char: 'b',
                text: "Wave the driver behind to overtake when it's safe",
            },
            {
                char: 'c',
                text: 'Keep a steady course and allow the driver behind to overtake',
            },
            {
                char: 'd',
                text: 'Accelerate to get away from the driver behind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1022',
        topicCode: 'attitude',
        question:
            'What does it mean if the signs at a bus lane show no times of operation?',
        questionImg: 'Bus_Lane_no_times.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "The lane isn't in operation",
            },
            {
                char: 'b',
                text: 'The lane is only in operation at peak times',
            },
            {
                char: 'c',
                text: 'The lane is in operation 24 hours a day',
            },
            {
                char: 'd',
                text: 'The lane is only in operation in daylight hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1026',
        topicCode: 'attitude',
        question:
            'What should you do when a person herding sheep asks you to stop?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Ignore them as they have no authority',
            },
            {
                char: 'b',
                text: 'Stop and switch off your engine',
            },
            {
                char: 'c',
                text: 'Continue on but drive slowly',
            },
            {
                char: 'd',
                text: 'Try to get past quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1027',
        topicCode: 'attitude',
        question:
            "What should you do when you're overtaking a horse and rider?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sound your horn as a warning',
            },
            {
                char: 'b',
                text: 'Go past as quickly as possible',
            },
            {
                char: 'c',
                text: 'Flash your headlights as a warning',
            },
            {
                char: 'd',
                text: 'Go past slowly and carefully',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1440',
        topicCode: 'attitude',
        question:
            "You're approaching a zebra crossing. What should you do if pedestrians are waiting to cross?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Give way to older and infirm people only',
            },
            {
                char: 'b',
                text: 'Slow down and prepare to stop',
            },
            {
                char: 'c',
                text: 'Use your headlights to indicate they can cross',
            },
            {
                char: 'd',
                text: 'Wave at them to cross the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1444',
        topicCode: 'attitude',
        question:
            'What should you do if a vehicle pulls out in front of you at a junction?',
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
        code: 'BB1555',
        topicCode: 'attitude',
        question:
            "You're approaching a red light at a puffin crossing. Pedestrians are on the crossing. When will the red light change?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When you start to edge forward onto the crossing',
            },
            {
                char: 'b',
                text: 'When the pedestrians have cleared the crossing',
            },
            {
                char: 'c',
                text: 'When the pedestrians push the button on the far side of the crossing',
            },
            {
                char: 'd',
                text: 'When a driver from the opposite direction reaches the crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1591',
        topicCode: 'attitude',
        question:
            'Which instrument-panel warning light would show that headlights are on main beam?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4035f.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4035c.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4035i.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4039.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1636',
        topicCode: 'attitude',
        question:
            'When should you leave a two-second gap between your vehicle and the one in front?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "When it's raining",
            },
            {
                char: 'b',
                text: "When it's dry",
            },
            {
                char: 'c',
                text: "When it's icy",
            },
            {
                char: 'd',
                text: "When it's foggy",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1637',
        topicCode: 'attitude',
        question:
            "You're driving at night on an unlit road. What should you do if you're following another vehicle?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights',
            },
            {
                char: 'b',
                text: 'Use dipped headlights',
            },
            {
                char: 'c',
                text: 'Switch off your headlights',
            },
            {
                char: 'd',
                text: 'Use full-beam headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1638',
        topicCode: 'attitude',
        question:
            "What should you do if you're driving a slow-moving vehicle on a narrow winding road?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Keep well out to stop vehicles overtaking dangerously',
            },
            {
                char: 'b',
                text: 'Wave the vehicles behind to come past you if you think they can overtake quickly',
            },
            {
                char: 'c',
                text: 'Pull in when you can, to let the vehicles behind overtake',
            },
            {
                char: 'd',
                text: "Give a left signal when it's safe for vehicles to overtake you",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1642',
        topicCode: 'attitude',
        question:
            "You're driving a car that has a diesel engine. What can a loose filler cap on your fuel tank cause?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It can make the engine difficult to start',
            },
            {
                char: 'b',
                text: 'It can make the roads slippery for other road users',
            },
            {
                char: 'c',
                text: 'It can improve your vehicle’s fuel consumption',
            },
            {
                char: 'd',
                text: 'It can increase the level of exhaust emissions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1643',
        topicCode: 'attitude',
        question: 'What should you do to avoid fuel spillage?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check that your tank is only three-quarters full',
            },
            {
                char: 'b',
                text: "Check that you've used a locking filler cap",
            },
            {
                char: 'c',
                text: 'Check that your fuel gauge is working',
            },
            {
                char: 'd',
                text: 'Check that your filler cap is securely fastened',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1725',
        topicCode: 'attitude',
        question: 'What style of driving causes increased risk to everyone?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Considerate',
            },
            {
                char: 'b',
                text: 'Defensive',
            },
            {
                char: 'c',
                text: 'Competitive',
            },
            {
                char: 'd',
                text: 'Responsible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2045',
        topicCode: 'safety_and_your_vehicle',
        question: 'How would under-inflated tyres affect your vehicle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "The vehicle's stopping distance would increase",
            },
            {
                char: 'b',
                text: "The flash rate of the vehicle's indicators would increase",
            },
            {
                char: 'c',
                text: "The vehicle's gear change mechanism would become stiff",
            },
            {
                char: 'd',
                text: "The vehicle's headlights would aim high",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2056',
        topicCode: 'safety_and_your_vehicle',
        question: "When are you not allowed to sound your vehicle's horn?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Between 10.00 pm and 6.00 am in a built-up area',
            },
            {
                char: 'b',
                text: 'At any time in a built-up area',
            },
            {
                char: 'c',
                text: 'Between 11.30 pm and 7.00 am in a built-up area',
            },
            {
                char: 'd',
                text: 'Between 11.30 pm and 6.00 am on any road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2060',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What makes the vehicle in the picture 'environmentally friendly'?",
        questionImg: 'TS4681.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "It's powered by gravity",
            },
            {
                char: 'b',
                text: "It's powered by diesel",
            },
            {
                char: 'c',
                text: "It's powered by electricity",
            },
            {
                char: 'd',
                text: "It's powered by unleaded petrol",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2062',
        topicCode: 'safety_and_your_vehicle',
        question: "Why have 'red routes' been introduced in major cities?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To raise the speed limits',
            },
            {
                char: 'b',
                text: 'To help the traffic flow',
            },
            {
                char: 'c',
                text: 'To provide better parking',
            },
            {
                char: 'd',
                text: 'To allow lorries to load more freely',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2064',
        topicCode: 'safety_and_your_vehicle',
        question: "What's the purpose of road humps, chicanes and narrowings?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To separate lanes of traffic',
            },
            {
                char: 'b',
                text: 'To increase traffic speed',
            },
            {
                char: 'c',
                text: 'To allow pedestrians to cross',
            },
            {
                char: 'd',
                text: 'To reduce traffic speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2508',
        topicCode: 'safety_and_your_vehicle',
        question: "What's the purpose of a catalytic converter?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To reduce fuel consumption',
            },
            {
                char: 'b',
                text: 'To reduce the risk of fire',
            },
            {
                char: 'c',
                text: 'To reduce harmful exhaust gases',
            },
            {
                char: 'd',
                text: 'To reduce engine wear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2550',
        topicCode: 'safety_and_your_vehicle',
        question: 'When should tyre pressures be checked?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'After any lengthy journey',
            },
            {
                char: 'b',
                text: 'After travelling at high speed',
            },
            {
                char: 'c',
                text: 'When tyres are hot',
            },
            {
                char: 'd',
                text: 'When tyres are cold',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2637',
        topicCode: 'safety_and_your_vehicle',
        question: 'When will your vehicle use more fuel?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When its tyres are under-inflated',
            },
            {
                char: 'b',
                text: 'When its tyres are of different makes',
            },
            {
                char: 'c',
                text: 'When its tyres are over-inflated',
            },
            {
                char: 'd',
                text: 'When its tyres are new',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2638',
        topicCode: 'safety_and_your_vehicle',
        question: 'How should you dispose of a used vehicle battery?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Bury it in your garden',
            },
            {
                char: 'b',
                text: 'Put it in the dustbin',
            },
            {
                char: 'c',
                text: 'Take it to a local-authority disposal site',
            },
            {
                char: 'd',
                text: 'Leave it on waste land',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2641',
        topicCode: 'safety_and_your_vehicle',
        question: "What's most likely to increase fuel consumption?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Poor steering control',
            },
            {
                char: 'b',
                text: 'Accelerating around bends',
            },
            {
                char: 'c',
                text: 'Staying in high gears',
            },
            {
                char: 'd',
                text: 'Harsh braking and accelerating',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2647',
        topicCode: 'safety_and_your_vehicle',
        question:
            'The fluid level in your battery is low. What fluid should you use to top it up?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Battery acid',
            },
            {
                char: 'b',
                text: 'Distilled water',
            },
            {
                char: 'c',
                text: 'Engine oil',
            },
            {
                char: 'd',
                text: 'Engine coolant',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2689',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're parked on the road at night. When must you use parking lights?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When there are continuous white lines in the middle of the road',
            },
            {
                char: 'b',
                text: 'When the speed limit exceeds 30 mph',
            },
            {
                char: 'c',
                text: "When you're facing oncoming traffic",
            },
            {
                char: 'd',
                text: "When you're near a bus stop",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2707',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How can you reduce the environmental harm caused by your motor vehicle?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only use it for short journeys',
            },
            {
                char: 'b',
                text: "Don't service it",
            },
            {
                char: 'c',
                text: 'Drive faster than normal',
            },
            {
                char: 'd',
                text: 'Keep engine revs low',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2708',
        topicCode: 'safety_and_your_vehicle',
        question: 'What can cause excessive or uneven tyre wear?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A faulty gearbox',
            },
            {
                char: 'b',
                text: 'A faulty braking system',
            },
            {
                char: 'c',
                text: 'A faulty electrical system',
            },
            {
                char: 'd',
                text: 'A faulty exhaust system',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2710',
        topicCode: 'safety_and_your_vehicle',
        question:
            'You need to top up your battery with distilled water. What level should you fill it to?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The top of the battery',
            },
            {
                char: 'b',
                text: 'Halfway up the battery',
            },
            {
                char: 'c',
                text: 'Just below the cell plates',
            },
            {
                char: 'd',
                text: 'Just above the cell plates',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2800',
        topicCode: 'safety_and_your_vehicle',
        question: 'How can you plan your route before starting a long journey?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Check your vehicle handbook',
            },
            {
                char: 'b',
                text: 'Ask your local garage',
            },
            {
                char: 'c',
                text: 'Use a route planner on the internet',
            },
            {
                char: 'd',
                text: 'Consult a travel agent',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2802',
        topicCode: 'safety_and_your_vehicle',
        question:
            'Why is it a good idea to plan your journey to avoid busy times?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "You'll have an easier journey",
            },
            {
                char: 'b',
                text: "You'll have a more stressful journey",
            },
            {
                char: 'c',
                text: 'Your journey time will be longer',
            },
            {
                char: 'd',
                text: 'It will cause more traffic congestion',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2805',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How will your journey be affected by travelling outside the busy times of day?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your journey will use more fuel',
            },
            {
                char: 'b',
                text: 'Your journey will take longer',
            },
            {
                char: 'c',
                text: 'Your journey will be more hazardous',
            },
            {
                char: 'd',
                text: 'Your journey will have fewer delays',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2813',
        topicCode: 'safety_and_your_vehicle',
        question:
            'You plan your route before starting a journey. Why should you also plan an alternative route?',
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
                text: 'You may find you have to pay a congestion charge',
            },
            {
                char: 'd',
                text: 'You may get held up by a tractor',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2818',
        topicCode: 'safety_and_your_vehicle',
        question:
            'You have to arrive on time for an appointment. How should you plan for the journey?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow plenty of time for the trip',
            },
            {
                char: 'b',
                text: 'Plan to travel at busy times',
            },
            {
                char: 'c',
                text: 'Avoid roads with the national speed limit',
            },
            {
                char: 'd',
                text: 'Prevent other drivers from overtaking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2830',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What can you expect if you drive using rapid acceleration and heavy braking?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reduced pollution',
            },
            {
                char: 'b',
                text: 'Increased fuel consumption',
            },
            {
                char: 'c',
                text: 'Reduced exhaust emissions',
            },
            {
                char: 'd',
                text: 'Increased road safety',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2940',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What could cause you to crash if the level is allowed to get too low?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Anti-freeze level',
            },
            {
                char: 'b',
                text: 'Brake-fluid level',
            },
            {
                char: 'c',
                text: 'Battery-water level',
            },
            {
                char: 'd',
                text: 'Radiator-coolant level',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1036',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What should you do if your anti-lock brakes (ABS) warning light stays on?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check the brake-fluid level',
            },
            {
                char: 'b',
                text: 'Check the footbrake free play',
            },
            {
                char: 'c',
                text: 'Check that the parking brake is released',
            },
            {
                char: 'd',
                text: 'Have the brakes checked immediately',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1039',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What does it mean if this light comes on while you're driving?",
        questionImg: 'TS4035i.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A fault in the braking system',
            },
            {
                char: 'b',
                text: 'The engine oil is low',
            },
            {
                char: 'c',
                text: 'A rear light has failed',
            },
            {
                char: 'd',
                text: "Your seat belt isn't fastened",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1043',
        topicCode: 'safety_and_your_vehicle',
        question:
            "Why is it important to wear suitable shoes when you're driving?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To prevent wear on the pedals',
            },
            {
                char: 'b',
                text: 'To maintain control of the pedals',
            },
            {
                char: 'c',
                text: 'To enable you to adjust your seat',
            },
            {
                char: 'd',
                text: 'To enable you to walk for assistance if you break down',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1045',
        topicCode: 'safety_and_your_vehicle',
        question:
            "If you're involved in a collision, what will reduce the risk of neck injury?",
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
                text: 'A properly adjusted head restraint',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1048',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What does it mean if your vehicle keeps bouncing after you sharply press down and release on the bodywork over a wheel?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The tyres are worn',
            },
            {
                char: 'b',
                text: 'The tyres are under inflated',
            },
            {
                char: 'c',
                text: 'The vehicle is on soft ground',
            },
            {
                char: 'd',
                text: 'The shock absorbers are worn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1052',
        topicCode: 'safety_and_your_vehicle',
        question: 'How will a roof rack affect your car?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There will be less wind noise',
            },
            {
                char: 'b',
                text: 'The engine will use more oil',
            },
            {
                char: 'c',
                text: 'The car will accelerate faster',
            },
            {
                char: 'd',
                text: 'Fuel consumption will increase',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1278',
        topicCode: 'safety_and_your_vehicle',
        question: 'What makes your tyres illegal?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'If they were bought second-hand',
            },
            {
                char: 'b',
                text: 'If they have any large, deep cuts in the side wall',
            },
            {
                char: 'c',
                text: "If they're of different makes",
            },
            {
                char: 'd',
                text: 'If they have different tread patterns',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1279',
        topicCode: 'safety_and_your_vehicle',
        question: "What's the legal minimum depth of tread for car tyres?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '1 mm',
            },
            {
                char: 'b',
                text: '1.6 mm',
            },
            {
                char: 'c',
                text: '2.5 mm',
            },
            {
                char: 'd',
                text: '4 mm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1280',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're carrying two 13-year-old children and their parents in your car. Who's responsible for seeing that the children wear seat belts?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "The children's parents",
            },
            {
                char: 'b',
                text: 'You, the driver',
            },
            {
                char: 'c',
                text: 'The front-seat passenger',
            },
            {
                char: 'd',
                text: 'The children',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1301',
        topicCode: 'safety_and_your_vehicle',
        question: 'How can drivers help the environment?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By accelerating harshly',
            },
            {
                char: 'b',
                text: 'By accelerating gently',
            },
            {
                char: 'c',
                text: 'By using leaded fuel',
            },
            {
                char: 'd',
                text: 'By driving faster',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1302',
        topicCode: 'safety_and_your_vehicle',
        question: 'How can you avoid wasting fuel?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By having your vehicle serviced regularly',
            },
            {
                char: 'b',
                text: 'By revving the engine in the lower gears',
            },
            {
                char: 'c',
                text: 'By keeping an empty roof rack on your vehicle',
            },
            {
                char: 'd',
                text: 'By driving at higher speeds where possible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1303',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What could you do to reduce the volume of traffic on the roads?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive in a bus lane',
            },
            {
                char: 'b',
                text: 'Use a car with a smaller engine',
            },
            {
                char: 'c',
                text: 'Walk or cycle on short journeys',
            },
            {
                char: 'd',
                text: 'Travel by car at all times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1304',
        topicCode: 'safety_and_your_vehicle',
        question: "What's most likely to waste fuel?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Reducing your speed',
            },
            {
                char: 'b',
                text: 'Driving on motorways',
            },
            {
                char: 'c',
                text: 'Using different brands of fuel',
            },
            {
                char: 'd',
                text: 'Under-inflated tyres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1347',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What part of the car does the law require you to keep in good condition?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The gearbox',
            },
            {
                char: 'b',
                text: 'The transmission',
            },
            {
                char: 'c',
                text: 'The door locks',
            },
            {
                char: 'd',
                text: 'The seat belts',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1348',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How much more fuel will you use by driving at 70 mph, compared with driving at 50 mph?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'About 5%',
            },
            {
                char: 'b',
                text: 'About 15%',
            },
            {
                char: 'c',
                text: 'About 75%',
            },
            {
                char: 'd',
                text: 'About 100%',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1368',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What should you do if your vehicle pulls to one side when you use the brakes?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increase the pressure in your tyres',
            },
            {
                char: 'b',
                text: 'Have the brakes checked as soon as possible',
            },
            {
                char: 'c',
                text: 'Change gear and pump the brake pedal',
            },
            {
                char: 'd',
                text: 'Use your parking brake at the same time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1392',
        topicCode: 'safety_and_your_vehicle',
        question: "What will happen if your car's wheels are unbalanced?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The steering will pull to one side',
            },
            {
                char: 'b',
                text: 'The steering will vibrate',
            },
            {
                char: 'c',
                text: 'The brakes will fail',
            },
            {
                char: 'd',
                text: 'The tyres will deflate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1393',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What can be damaged if you turn the steering wheel when the car isn't moving?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The gearbox',
            },
            {
                char: 'b',
                text: 'The engine',
            },
            {
                char: 'c',
                text: 'The brakes',
            },
            {
                char: 'd',
                text: 'The tyres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1414',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What’s the safest thing to do if you have to leave valuables in your car?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Put them in a carrier bag',
            },
            {
                char: 'b',
                text: 'Park near a school entrance',
            },
            {
                char: 'c',
                text: 'Lock them out of sight',
            },
            {
                char: 'd',
                text: 'Park near a bus stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1416',
        topicCode: 'safety_and_your_vehicle',
        question: 'What may help to deter a thief from stealing your car?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Always keeping the headlights on',
            },
            {
                char: 'b',
                text: 'Fitting reflective glass windows',
            },
            {
                char: 'c',
                text: 'Always keeping the interior light on',
            },
            {
                char: 'd',
                text: 'Etching the registration number on the windows',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1418',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What should you remove from your car before leaving it unattended?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The car dealer’s details',
            },
            {
                char: 'b',
                text: 'The owner’s manual',
            },
            {
                char: 'c',
                text: 'The service record',
            },
            {
                char: 'd',
                text: 'The vehicle registration document',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1430',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What should you do when leaving your vehicle parked and unattended?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Park near a busy junction',
            },
            {
                char: 'b',
                text: 'Park in a housing estate',
            },
            {
                char: 'c',
                text: 'Lock it and remove the key',
            },
            {
                char: 'd',
                text: 'Leave the left indicator on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1500',
        topicCode: 'safety_and_your_vehicle',
        question: 'What will reduce fuel consumption?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Driving more slowly',
            },
            {
                char: 'b',
                text: 'Accelerating rapidly',
            },
            {
                char: 'c',
                text: 'Late and heavy braking',
            },
            {
                char: 'd',
                text: 'Staying in lower gears',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1508',
        topicCode: 'safety_and_your_vehicle',
        question:
            'You service your own vehicle. How should you dispose of the old engine oil?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Take it to a local-authority site',
            },
            {
                char: 'b',
                text: 'Pour it down a drain',
            },
            {
                char: 'c',
                text: 'Tip it into a hole in the ground',
            },
            {
                char: 'd',
                text: 'Put it in your dustbin',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1511',
        topicCode: 'safety_and_your_vehicle',
        question: 'Why do MOT tests include an exhaust emission test?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To recover the cost of expensive garage equipment',
            },
            {
                char: 'b',
                text: 'To help protect the environment against pollution',
            },
            {
                char: 'c',
                text: 'To discover which fuel supplier is used the most',
            },
            {
                char: 'd',
                text: 'To make sure diesel and petrol engines emit the same fumes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1512',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How can you reduce the damage your vehicle causes to the environment?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Use narrow side streets',
            },
            {
                char: 'b',
                text: 'Brake heavily',
            },
            {
                char: 'c',
                text: 'Use busy routes',
            },
            {
                char: 'd',
                text: 'Anticipate well ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1557',
        topicCode: 'safety_and_your_vehicle',
        question:
            "How will you benefit from following the manufacturer's service schedule for your vehicle?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your vehicle will be cheaper to insure',
            },
            {
                char: 'b',
                text: 'Your vehicle tax will be lower',
            },
            {
                char: 'c',
                text: 'Your vehicle will remain reliable',
            },
            {
                char: 'd',
                text: 'Your journey times will be reduced',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1558',
        topicCode: 'safety_and_your_vehicle',
        question:
            "How should you drive when you're driving along a road that has road humps?",
        questionImg: 'IMG_1747.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Maintain a reduced speed throughout',
            },
            {
                char: 'b',
                text: 'Accelerate quickly between the humps',
            },
            {
                char: 'c',
                text: 'Always keep to the maximum legal speed',
            },
            {
                char: 'd',
                text: 'Drive slowly at school times only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1602',
        topicCode: 'safety_and_your_vehicle',
        question: 'When should you check the engine oil level?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Before a long journey',
            },
            {
                char: 'b',
                text: 'When the engine is hot',
            },
            {
                char: 'c',
                text: 'Early in the morning',
            },
            {
                char: 'd',
                text: 'Every time you drive the car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1603',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're having difficulty finding a parking space in a busy town. Can you park on the zigzag lines of a zebra crossing?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'No, not unless you stay with your car',
            },
            {
                char: 'b',
                text: 'Yes, in order to drop off a passenger',
            },
            {
                char: 'c',
                text: "Yes, if you don't block people from crossing",
            },
            {
                char: 'd',
                text: 'No, not under any circumstances',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1604',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What should you do when you leave your car unattended for a few minutes?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Leave the engine running',
            },
            {
                char: 'b',
                text: 'Switch the engine off but leave the key in',
            },
            {
                char: 'c',
                text: 'Lock it and remove the key',
            },
            {
                char: 'd',
                text: 'Park near a traffic warden',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1607',
        topicCode: 'safety_and_your_vehicle',
        question: 'Why should you try and park in a secure car park?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It makes it easy to find your car',
            },
            {
                char: 'b',
                text: 'It helps deter thieves',
            },
            {
                char: 'c',
                text: 'It stops the car being exposed to bad weather',
            },
            {
                char: 'd',
                text: "It doesn't cost anything to park here",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1609',
        topicCode: 'safety_and_your_vehicle',
        question: 'Where would parking your vehicle cause an obstruction?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Alongside a parking meter',
            },
            {
                char: 'b',
                text: 'In front of a property entrance',
            },
            {
                char: 'c',
                text: 'On your driveway',
            },
            {
                char: 'd',
                text: 'In a marked parking space',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1640',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What's the most important reason for having a properly adjusted head restraint?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To make you more comfortable',
            },
            {
                char: 'b',
                text: 'To help you avoid neck injury',
            },
            {
                char: 'c',
                text: 'To help you relax',
            },
            {
                char: 'd',
                text: 'To help you maintain your driving position',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1644',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What can you do to reduce environmental damage caused by your vehicle?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Avoid using the cruise control',
            },
            {
                char: 'b',
                text: 'Use the air conditioning whenever you drive',
            },
            {
                char: 'c',
                text: 'Use the gears to slow the vehicle',
            },
            {
                char: 'd',
                text: 'Avoid making a lot of short journeys',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1646',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What can people who live or work in towns and cities do to help reduce urban pollution levels?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive more quickly',
            },
            {
                char: 'b',
                text: 'Over-rev in a low gear',
            },
            {
                char: 'c',
                text: 'Walk or cycle',
            },
            {
                char: 'd',
                text: 'Drive short journeys',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1647',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How can you reduce the chances of your car being broken into when leaving it unattended?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Take all valuables with you',
            },
            {
                char: 'b',
                text: 'Park near a taxi rank',
            },
            {
                char: 'c',
                text: 'Place any valuables on the floor',
            },
            {
                char: 'd',
                text: 'Park near a fire station',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1648',
        topicCode: 'safety_and_your_vehicle',
        question: 'How can you help to prevent your car radio being stolen?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Park in an unlit area',
            },
            {
                char: 'b',
                text: 'Leave the radio turned on',
            },
            {
                char: 'c',
                text: 'Park near a busy junction',
            },
            {
                char: 'd',
                text: 'Install a security-coded radio',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1653',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How can you reduce the risk of your vehicle being broken into at night?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Leave it in a well-lit area',
            },
            {
                char: 'b',
                text: 'Park in a quiet side road',
            },
            {
                char: 'c',
                text: 'Don’t engage the steering lock',
            },
            {
                char: 'd',
                text: 'Park in a poorly lit area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1654',
        topicCode: 'safety_and_your_vehicle',
        question: 'What will help you to keep your car secure?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Being a member of a vehicle breakdown organisation',
            },
            {
                char: 'b',
                text: 'Registering with a Vehicle Watch scheme',
            },
            {
                char: 'c',
                text: 'Passing an advanced driving test',
            },
            {
                char: 'd',
                text: 'Taking car maintenance classes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1655',
        topicCode: 'safety_and_your_vehicle',
        question: 'On a vehicle, where would you find a catalytic converter?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'In the fuel tank',
            },
            {
                char: 'b',
                text: 'In the air filter',
            },
            {
                char: 'c',
                text: 'On the cooling system',
            },
            {
                char: 'd',
                text: 'On the exhaust system',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1710',
        topicCode: 'safety_and_your_vehicle',
        question: 'What can you achieve if you drive smoothly?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Reduction in journey times by about 15%',
            },
            {
                char: 'b',
                text: 'Increase in fuel consumption by about 15%',
            },
            {
                char: 'c',
                text: 'Reduction in fuel consumption by about 15%',
            },
            {
                char: 'd',
                text: 'Increase in journey times by about 15%',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1711',
        topicCode: 'safety_and_your_vehicle',
        question: 'Which driving technique can help you save fuel?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Using lower gears as often as possible',
            },
            {
                char: 'b',
                text: 'Accelerating sharply in each gear',
            },
            {
                char: 'c',
                text: 'Using each gear in turn',
            },
            {
                char: 'd',
                text: 'Missing out some gears',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1722',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How can driving in a fuel-efficient manner help protect the environment?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Through the legal enforcement of speed regulations',
            },
            {
                char: 'b',
                text: 'By increasing the number of cars on the road',
            },
            {
                char: 'c',
                text: 'Through increased fuel bills',
            },
            {
                char: 'd',
                text: 'By reducing exhaust emissions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1723',
        topicCode: 'safety_and_your_vehicle',
        question: 'What does fuel-efficient driving achieve?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increased fuel consumption',
            },
            {
                char: 'b',
                text: 'Improved road safety',
            },
            {
                char: 'c',
                text: 'Damage to the environment',
            },
            {
                char: 'd',
                text: 'Increased exhaust emissions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1737',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What's the legal minimum tread depth for tyres on your trailer or caravan?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '1 mm',
            },
            {
                char: 'b',
                text: '1.6 mm',
            },
            {
                char: 'c',
                text: '2 mm',
            },
            {
                char: 'd',
                text: '2.6 mm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1741',
        topicCode: 'safety_and_your_vehicle',
        question: 'When is fuel consumption at its highest?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "When you're braking",
            },
            {
                char: 'b',
                text: "When you're coasting",
            },
            {
                char: 'c',
                text: "When you're accelerating",
            },
            {
                char: 'd',
                text: "When you're turning sharply",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1752',
        topicCode: 'safety_and_your_vehicle',
        question:
            'When may a passenger travel in a car without wearing a seat belt?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "When they're under 14 years old",
            },
            {
                char: 'b',
                text: "When they're under 1.5 metres (5 feet) in height",
            },
            {
                char: 'c',
                text: "When they're sitting in the rear seat",
            },
            {
                char: 'd',
                text: "When they're exempt for medical reasons",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1755',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're driving a friend's children home from school. They're both under 14 years old. Who's responsible for making sure they wear a seat belt or approved child restraint where required?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'An adult passenger',
            },
            {
                char: 'b',
                text: 'The children',
            },
            {
                char: 'c',
                text: 'You, the driver',
            },
            {
                char: 'd',
                text: 'Your friend',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1756',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What's likely to happen if you put too much oil in your engine?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The clutch pedal will lock',
            },
            {
                char: 'b',
                text: 'The air intake will become blocked',
            },
            {
                char: 'c',
                text: 'The timing belt will slip',
            },
            {
                char: 'd',
                text: 'The oil seals will leak',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1763',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You have to make an unexpected journey. You're carrying a five-year-old child on the back seat of your car. They're under 1.35 metres (4 feet 5 inches) tall. How should you seat them if a correct child restraint isn't available?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Behind the passenger seat',
            },
            {
                char: 'b',
                text: 'Using an adult seat belt',
            },
            {
                char: 'c',
                text: 'Sharing a belt with an adult',
            },
            {
                char: 'd',
                text: 'Between two other children',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1765',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're carrying an 11-year-old child on the front seat of your car. They're under 1.35 metres (4 feet 5 inches) tall. What seat belt security must be in place?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They must use an adult seat belt',
            },
            {
                char: 'b',
                text: 'They must be able to fasten their own seat belt',
            },
            {
                char: 'c',
                text: 'They must use a suitable child restraint',
            },
            {
                char: 'd',
                text: 'They must be able to see clearly out of the front window',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1769',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're stopped at the side of the road. What must you do if you'll be waiting there for some time?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch off the engine',
            },
            {
                char: 'b',
                text: 'Apply the steering lock',
            },
            {
                char: 'c',
                text: 'Switch off the radio',
            },
            {
                char: 'd',
                text: 'Use your headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1770',
        topicCode: 'safety_and_your_vehicle',
        question:
            'You want to put a rear-facing baby seat on the front passenger seat. What must you do if the passenger seat is protected by a frontal airbag?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Deactivate the airbag',
            },
            {
                char: 'b',
                text: 'Turn the seat to face sideways',
            },
            {
                char: 'c',
                text: 'Ask a passenger to hold the baby',
            },
            {
                char: 'd',
                text: 'Put the child in an adult seat belt',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1777',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're leaving your vehicle parked on a road and unattended. When may you leave the engine running?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "If you'll be parking for less than five minutes",
            },
            {
                char: 'b',
                text: 'If the battery keeps going flat',
            },
            {
                char: 'c',
                text: 'When parked in a 20 mph zone',
            },
            {
                char: 'd',
                text: "Never if you're away from the vehicle",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB4417',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What does it mean if the Electronic Stability Control (ESC) indicator lamp lights up while you’re driving?',
        questionImg: 'BB4417.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The ESC system has activated',
            },
            {
                char: 'b',
                text: 'The ESC system has a fault',
            },
            {
                char: 'c',
                text: 'The ESC system is running a routine test',
            },
            {
                char: 'd',
                text: 'The ESC system is switched off',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2076',
        topicCode: 'safety_margins',
        question: 'How much can stopping distances increase in icy conditions?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Two times',
            },
            {
                char: 'b',
                text: 'Three times',
            },
            {
                char: 'c',
                text: 'Five times',
            },
            {
                char: 'd',
                text: 'Ten times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2080',
        topicCode: 'safety_margins',
        question:
            "What requires extra care when you're driving or riding in windy conditions?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Using the brakes',
            },
            {
                char: 'b',
                text: 'Moving off on a hill',
            },
            {
                char: 'c',
                text: 'Turning into a narrow road',
            },
            {
                char: 'd',
                text: 'Passing pedal cyclists',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2624',
        topicCode: 'safety_margins',
        question:
            'Why should you keep well to the left as you approach a right-hand bend?',
        questionImg: 'TS4636.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To improve your view of the road',
            },
            {
                char: 'b',
                text: 'To overcome the effect of the road’s slope',
            },
            {
                char: 'c',
                text: 'To let faster traffic from behind overtake',
            },
            {
                char: 'd',
                text: 'To be positioned safely if you skid',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2639',
        topicCode: 'safety_margins',
        question:
            'You’ve just gone through flood water. What should you do to make sure your brakes are working properly?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Accelerate and keep to a high speed for a short time',
            },
            {
                char: 'b',
                text: 'Go slowly while gently applying the brakes',
            },
            {
                char: 'c',
                text: 'Avoid using the brakes at all for a few miles',
            },
            {
                char: 'd',
                text: 'Stop for at least an hour to allow them time to dry',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2712',
        topicCode: 'safety_margins',
        question:
            'What will be affected if the road surface becomes soft in very hot weather?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The suspension',
            },
            {
                char: 'b',
                text: 'The exhaust emissions',
            },
            {
                char: 'c',
                text: 'The fuel consumption',
            },
            {
                char: 'd',
                text: 'The tyre grip',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2713',
        topicCode: 'safety_margins',
        question:
            'Where is your vehicle most likely to be affected by side winds?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On a narrow country lane',
            },
            {
                char: 'b',
                text: 'On an open stretch of road',
            },
            {
                char: 'c',
                text: 'On a busy stretch of road',
            },
            {
                char: 'd',
                text: 'On a long, straight road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2740',
        topicCode: 'safety_margins',
        question:
            "You're following a vehicle on a wet road. You stay a safe distance behind it. What should you do if a driver overtakes you and pulls into the gap you've left?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights as a warning',
            },
            {
                char: 'b',
                text: 'Try to overtake safely as soon as you can',
            },
            {
                char: 'c',
                text: 'Drop back to regain a safe distance',
            },
            {
                char: 'd',
                text: 'Stay close to the other vehicle until it moves on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2911',
        topicCode: 'safety_margins',
        question:
            "You're travelling on the motorway. How can you lower the risk of a collision when the vehicle behind is following too closely?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Increase your distance from the vehicle in front',
            },
            {
                char: 'b',
                text: 'Brake sharply',
            },
            {
                char: 'c',
                text: 'Switch on your hazard warning lights',
            },
            {
                char: 'd',
                text: 'Move onto the hard shoulder and stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2942',
        topicCode: 'safety_margins',
        question:
            "You're following other vehicles in fog. You have your headlights on dipped beam. What else can you do to reduce the chances of being in a collision?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep close to the vehicle in front',
            },
            {
                char: 'b',
                text: 'Use main beam instead of dipped headlights',
            },
            {
                char: 'c',
                text: 'Keep up with the faster vehicles',
            },
            {
                char: 'd',
                text: 'Keep a safe distance from the vehicle in front',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2944',
        topicCode: 'safety_margins',
        question: "What should you do when you're using a contraflow system?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Choose an appropriate lane in good time',
            },
            {
                char: 'b',
                text: 'Switch lanes to make better progress',
            },
            {
                char: 'c',
                text: 'Increase speed to get through the contraflow more quickly',
            },
            {
                char: 'd',
                text: 'Follow other motorists closely to avoid long queues',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1059',
        topicCode: 'safety_margins',
        question:
            "How can you avoid wheelspin when you're driving on an icy road?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drive at a slow speed in the highest gear possible',
            },
            {
                char: 'b',
                text: 'Use the parking brake if the wheels start to slip',
            },
            {
                char: 'c',
                text: 'Brake gently and repeatedly',
            },
            {
                char: 'd',
                text: 'Drive in a low gear at all times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1060',
        topicCode: 'safety_margins',
        question: "What's the main cause of skidding?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The weather',
            },
            {
                char: 'b',
                text: 'The driver',
            },
            {
                char: 'c',
                text: 'The vehicle',
            },
            {
                char: 'd',
                text: 'The road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1062',
        topicCode: 'safety_margins',
        question:
            "You're driving in freezing conditions. What should you do as you approach a sharp bend?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Coast into the bend',
            },
            {
                char: 'b',
                text: 'Apply your parking brake',
            },
            {
                char: 'c',
                text: 'Firmly use your footbrake',
            },
            {
                char: 'd',
                text: 'Slow down gently',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1066',
        topicCode: 'safety_margins',
        question:
            "You're about to start a journey in freezing weather. What part of your vehicle should you clear of ice and snow?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The aerial',
            },
            {
                char: 'b',
                text: 'The windows',
            },
            {
                char: 'c',
                text: 'The bumper',
            },
            {
                char: 'd',
                text: 'The boot',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1068',
        topicCode: 'safety_margins',
        question: 'What will help you to move off on a snowy surface?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "Using the car's lowest gear",
            },
            {
                char: 'b',
                text: 'Using a higher gear than normal',
            },
            {
                char: 'c',
                text: 'Using a high engine speed',
            },
            {
                char: 'd',
                text: 'Using the parking brake and footbrake together',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1069',
        topicCode: 'safety_margins',
        question: "What should you do when you're driving in snowy conditions?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Brake firmly and quickly',
            },
            {
                char: 'b',
                text: 'Be ready to steer sharply',
            },
            {
                char: 'c',
                text: 'Use sidelights only',
            },
            {
                char: 'd',
                text: 'Brake gently in plenty of time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1070',
        topicCode: 'safety_margins',
        question:
            "What's the main benefit of driving a four-wheel-drive vehicle?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Improved grip on the road',
            },
            {
                char: 'b',
                text: 'Lower fuel consumption',
            },
            {
                char: 'c',
                text: 'Shorter stopping distances',
            },
            {
                char: 'd',
                text: 'Improved passenger comfort',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1073',
        topicCode: 'safety_margins',
        question:
            "You're about to go down a steep hill. What should you do to control the speed of your vehicle?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Select a high gear and use the brakes carefully',
            },
            {
                char: 'b',
                text: 'Select a high gear and use the brakes firmly',
            },
            {
                char: 'c',
                text: 'Select a low gear and use the brakes carefully',
            },
            {
                char: 'd',
                text: 'Select a low gear and avoid using the brakes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1075',
        topicCode: 'safety_margins',
        question: 'What should you do when you park a car facing downhill?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Turn the steering wheel towards the kerb',
            },
            {
                char: 'b',
                text: 'Park close to the bumper of another car',
            },
            {
                char: 'c',
                text: 'Park with two wheels on the kerb',
            },
            {
                char: 'd',
                text: 'Turn the steering wheel away from the kerb',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1076',
        topicCode: 'safety_margins',
        question:
            "You're driving in a built-up area that has traffic-calming measures. What should you do when you approach a road hump?",
        questionImg: '85BW9958.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move across to the left-hand side of the road',
            },
            {
                char: 'b',
                text: 'Wait for any pedestrians to cross',
            },
            {
                char: 'c',
                text: 'Check your mirror and slow down',
            },
            {
                char: 'd',
                text: 'Stop and check both pavements',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1317',
        topicCode: 'safety_margins',
        question:
            'On what type of road surface may anti-lock brakes be ineffective?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Dry',
            },
            {
                char: 'b',
                text: 'Loose',
            },
            {
                char: 'c',
                text: 'Firm',
            },
            {
                char: 'd',
                text: 'Smooth',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1322',
        topicCode: 'safety_margins',
        question:
            "You're driving a vehicle that has anti-lock brakes. How should you apply the footbrake when you need to stop in an emergency?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Slowly and gently',
            },
            {
                char: 'b',
                text: 'Slowly but firmly',
            },
            {
                char: 'c',
                text: 'Rapidly and gently',
            },
            {
                char: 'd',
                text: 'Rapidly and firmly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1351',
        topicCode: 'safety_margins',
        question:
            "You're driving along a country road. You see this sign. What should you do after dealing safely with the hazard?",
        questionImg: 'TS4516.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check your tyre pressures',
            },
            {
                char: 'b',
                text: 'Switch on your hazard warning lights',
            },
            {
                char: 'c',
                text: 'Accelerate briskly',
            },
            {
                char: 'd',
                text: 'Test your brakes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1396',
        topicCode: 'safety_margins',
        question: "What would suggest you're driving on an icy road?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "There's less wind noise",
            },
            {
                char: 'b',
                text: "There's less tyre noise",
            },
            {
                char: 'c',
                text: "There's less transmission noise",
            },
            {
                char: 'd',
                text: "There's less engine noise",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1405',
        topicCode: 'safety_margins',
        question:
            "You're driving along a wet road. How can you tell if your vehicle’s tyres are losing their grip on the surface?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The engine will stall',
            },
            {
                char: 'b',
                text: 'The steering will feel very heavy',
            },
            {
                char: 'c',
                text: 'The engine noise will increase',
            },
            {
                char: 'd',
                text: 'The steering will feel very light',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1448',
        topicCode: 'safety_margins',
        question:
            'In which conditions will your overall stopping distance increase?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In the rain',
            },
            {
                char: 'b',
                text: 'In fog',
            },
            {
                char: 'c',
                text: 'At night',
            },
            {
                char: 'd',
                text: 'In strong winds',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1657',
        topicCode: 'safety_margins',
        question:
            "You're driving on an open road in dry weather. What distance should you keep from the vehicle in front?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A two-second time gap',
            },
            {
                char: 'b',
                text: 'One car length',
            },
            {
                char: 'c',
                text: 'Two metres (6 feet 6 inches)',
            },
            {
                char: 'd',
                text: 'Two car lengths',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1659',
        topicCode: 'safety_margins',
        question: "How can you use your vehicle's engine as a brake?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By changing to a lower gear',
            },
            {
                char: 'b',
                text: 'By selecting reverse gear',
            },
            {
                char: 'c',
                text: 'By changing to a higher gear',
            },
            {
                char: 'd',
                text: 'By selecting neutral gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1660',
        topicCode: 'safety_margins',
        question:
            'How should you use anti-lock brakes when you need to stop in an emergency?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Keep pumping the footbrake to prevent skidding',
            },
            {
                char: 'b',
                text: 'Brake normally but grip the steering wheel tightly',
            },
            {
                char: 'c',
                text: "Brake promptly and firmly until you've stopped",
            },
            {
                char: 'd',
                text: 'Apply the parking brake to reduce the stopping distance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1681',
        topicCode: 'safety_margins',
        question:
            "What lights should you use when you're driving on a wet motorway and vehicles are throwing up surface spray?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Hazard warning lights',
            },
            {
                char: 'b',
                text: 'Dipped headlights',
            },
            {
                char: 'c',
                text: 'Rear fog lights',
            },
            {
                char: 'd',
                text: 'Sidelights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1742',
        topicCode: 'safety_margins',
        question:
            'What can result when you travel for long distances in neutral (known as coasting)?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Improvement in control',
            },
            {
                char: 'b',
                text: 'Easier steering',
            },
            {
                char: 'c',
                text: 'Reduction in control',
            },
            {
                char: 'd',
                text: 'Increased fuel consumption',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1774',
        topicCode: 'safety_margins',
        question:
            'What should you do before starting a journey in foggy weather?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Wear a hi-visibility jacket',
            },
            {
                char: 'b',
                text: 'Have a caffeinated drink',
            },
            {
                char: 'c',
                text: 'Allow more time',
            },
            {
                char: 'd',
                text: 'Reduce your tyre pressures',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB2894',
        topicCode: 'safety_margins',
        question:
            "What should you do when you're overtaking a motorcyclist on a windy day?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pass closely',
            },
            {
                char: 'b',
                text: 'Pass very slowly',
            },
            {
                char: 'c',
                text: 'Pass widely',
            },
            {
                char: 'd',
                text: 'Pass immediately',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2085',
        topicCode: 'hazard_awareness',
        question: 'Where would you expect to see these markers?',
        questionImg: 'TS4027.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On a motorway sign',
            },
            {
                char: 'b',
                text: 'On a railway bridge',
            },
            {
                char: 'c',
                text: 'On a large goods vehicle',
            },
            {
                char: 'd',
                text: 'On a diversion sign',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2087',
        topicCode: 'hazard_awareness',
        question: "What's the main hazard shown in this picture?",
        questionImg: 'J7512.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Vehicles turning right',
            },
            {
                char: 'b',
                text: 'Vehicles doing U-turns',
            },
            {
                char: 'c',
                text: 'The cyclist crossing the road',
            },
            {
                char: 'd',
                text: 'Parked cars around the corner',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2088',
        topicCode: 'hazard_awareness',
        question: 'Which road user has caused a hazard?',
        questionImg: 'R8515.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The parked car (arrowed A)',
            },
            {
                char: 'b',
                text: 'The pedestrian waiting to cross (arrowed B)',
            },
            {
                char: 'c',
                text: 'The moving car (arrowed C)',
            },
            {
                char: 'd',
                text: 'The car turning (arrowed D)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2089',
        topicCode: 'hazard_awareness',
        question:
            'What should the driver of the car approaching the crossing do?',
        questionImg: 'P5505.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue at the same speed',
            },
            {
                char: 'b',
                text: 'Sound the horn',
            },
            {
                char: 'c',
                text: 'Drive through quickly',
            },
            {
                char: 'd',
                text: 'Slow down and get ready to stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2091',
        topicCode: 'hazard_awareness',
        question:
            'What should the driver of the grey car be especially aware of?',
        questionImg: 'IMG_1196.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The uneven road surface',
            },
            {
                char: 'b',
                text: 'Traffic following behind',
            },
            {
                char: 'c',
                text: 'Doors opening on parked cars',
            },
            {
                char: 'd',
                text: 'Empty parking spaces',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2098',
        topicCode: 'hazard_awareness',
        question: 'What should you expect if you see this sign ahead?',
        questionImg: 'TS4577.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The road will go steeply uphill',
            },
            {
                char: 'b',
                text: 'The road will go steeply downhill',
            },
            {
                char: 'c',
                text: 'The road will bend sharply to the left',
            },
            {
                char: 'd',
                text: 'The road will bend sharply to the right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2099',
        topicCode: 'hazard_awareness',
        question: 'What should you do as you approach this cyclist?',
        questionImg: 'IMG_5169.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Try to overtake before the cyclist gets to the junction',
            },
            {
                char: 'b',
                text: 'Flash your headlights at the cyclist',
            },
            {
                char: 'c',
                text: 'Slow down and allow the cyclist to turn',
            },
            {
                char: 'd',
                text: "Rev your engine so the cyclist knows you're following behind",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2100',
        topicCode: 'hazard_awareness',
        question:
            'Why must you take great care when emerging from this junction?',
        questionImg: 'IMG_1742.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The road surface is poor',
            },
            {
                char: 'b',
                text: 'The footpath is narrow',
            },
            {
                char: 'c',
                text: 'The kerbs are high',
            },
            {
                char: 'd',
                text: 'The view is restricted',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2102',
        topicCode: 'hazard_awareness',
        question:
            'Which type of vehicle should you be ready to give way to as you approach this bridge?',
        questionImg: 'IMG_9457.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Bicycles',
            },
            {
                char: 'b',
                text: 'Buses',
            },
            {
                char: 'c',
                text: 'Motorcycles',
            },
            {
                char: 'd',
                text: 'Cars',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2103',
        topicCode: 'hazard_awareness',
        question:
            'What type of vehicle could you expect to meet in the middle of the road?',
        questionImg: 'IMG_9457.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Lorry',
            },
            {
                char: 'b',
                text: 'Bicycle',
            },
            {
                char: 'c',
                text: 'Car',
            },
            {
                char: 'd',
                text: 'Motorcycle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2105',
        topicCode: 'hazard_awareness',
        question: 'What must you do at this junction?',
        questionImg: 'IMG_1286.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop behind the line, then edge forward to see clearly',
            },
            {
                char: 'b',
                text: 'Stop beyond the line, at a point where you can see clearly',
            },
            {
                char: 'c',
                text: "Stop only if there's traffic on the main road",
            },
            {
                char: 'd',
                text: "Stop only if you're turning right",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2114',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if a driver pulls out of a side road in front of you, causing you to brake hard?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Ignore the error and stay calm',
            },
            {
                char: 'b',
                text: 'Flash your lights to show your annoyance',
            },
            {
                char: 'c',
                text: 'Sound your horn to show your annoyance',
            },
            {
                char: 'd',
                text: 'Overtake as soon as possible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2116',
        topicCode: 'hazard_awareness',
        question: "How would age affect an older person's driving ability?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "They won't be able to obtain car insurance",
            },
            {
                char: 'b',
                text: "They'll need glasses to read road signs",
            },
            {
                char: 'c',
                text: "They'll take longer to react to hazards",
            },
            {
                char: 'd',
                text: "They won't signal at junctions",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2558',
        topicCode: 'hazard_awareness',
        question:
            'Do you need to plan rest stops when you’re planning a long journey?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Yes, you should plan to stop every half an hour',
            },
            {
                char: 'b',
                text: 'Yes, regular stops help concentration',
            },
            {
                char: 'c',
                text: 'No, you’ll be less tired if you get there as soon as possible',
            },
            {
                char: 'd',
                text: 'No, only fuel stops will be needed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2596',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if the red lights start flashing as you approach a level crossing?',
        questionImg: '85BW4460.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Go over it quickly',
            },
            {
                char: 'b',
                text: 'Go over it carefully',
            },
            {
                char: 'c',
                text: 'Stop before the barrier',
            },
            {
                char: 'd',
                text: 'Switch on your hazard warning lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2651',
        topicCode: 'hazard_awareness',
        question:
            "You're approaching a crossroads. What should you do if the traffic lights have failed?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Brake and stop only for large vehicles',
            },
            {
                char: 'b',
                text: 'Brake sharply to a stop before looking',
            },
            {
                char: 'c',
                text: 'Be prepared to brake sharply to a stop',
            },
            {
                char: 'd',
                text: 'Be prepared to stop for any traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2657',
        topicCode: 'hazard_awareness',
        question: 'What should the driver of the red car (arrowed) do?',
        questionImg: 'P5504.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Wave towards the pedestrians who are waiting to cross',
            },
            {
                char: 'b',
                text: 'Wait for the pedestrian in the road to cross',
            },
            {
                char: 'c',
                text: 'Quickly drive behind the pedestrian in the road',
            },
            {
                char: 'd',
                text: "Tell the pedestrian in the road she shouldn't have crossed",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2658',
        topicCode: 'hazard_awareness',
        question:
            "You're following a slower-moving vehicle. What should you do if there's a junction just ahead on the right?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtake after checking your mirrors and signalling',
            },
            {
                char: 'b',
                text: "Only consider overtaking when you're past the junction",
            },
            {
                char: 'c',
                text: 'Accelerate quickly to overtake before reaching the junction',
            },
            {
                char: 'd',
                text: 'Slow down and prepare to overtake on the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2659',
        topicCode: 'hazard_awareness',
        question: 'What should you do as you approach this overhead bridge?',
        questionImg: 'R8543.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move out to the centre of the road before going through',
            },
            {
                char: 'b',
                text: 'Find another route; this one is only for high vehicles',
            },
            {
                char: 'c',
                text: 'Be prepared to give way to large vehicles in the middle of the road',
            },
            {
                char: 'd',
                text: 'Move across to the right-hand side before going through',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2687',
        topicCode: 'hazard_awareness',
        question: 'Why are vehicle mirrors often slightly curved (convex)?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They give a wider field of vision',
            },
            {
                char: 'b',
                text: 'They totally cover blind spots',
            },
            {
                char: 'c',
                text: 'They make it easier to judge the speed of the traffic behind',
            },
            {
                char: 'd',
                text: 'They make the traffic behind look bigger',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2701',
        topicCode: 'hazard_awareness',
        question:
            "You're on a three-lane motorway. How should you overtake a slow-moving lorry in the middle lane if it's showing this sign?",
        questionImg: 'TS4058.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Cautiously approach the lorry, then overtake on either side',
            },
            {
                char: 'b',
                text: 'Follow the lorry until you can leave the motorway',
            },
            {
                char: 'c',
                text: 'Use the right-hand lane and overtake the lorry normally',
            },
            {
                char: 'd',
                text: 'Approach with care and overtake on the left of the lorry',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2716',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if you think the driver of the vehicle in front has forgotten to cancel their right indicator?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Flash your lights to alert the driver',
            },
            {
                char: 'b',
                text: 'Sound your horn before overtaking',
            },
            {
                char: 'c',
                text: "Overtake on the left if there's room",
            },
            {
                char: 'd',
                text: "Stay behind and don't overtake",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2717',
        topicCode: 'hazard_awareness',
        question:
            "What's the main hazard the driver of the red car (arrowed) should be aware of?",
        questionImg: 'R8518.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "Glare from the sun may affect the driver's vision",
            },
            {
                char: 'b',
                text: 'The black car may stop suddenly',
            },
            {
                char: 'c',
                text: 'The bus may move out into the road',
            },
            {
                char: 'd',
                text: 'Oncoming vehicles will assume the driver is turning right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2718',
        topicCode: 'hazard_awareness',
        question: 'What type of vehicle displays this yellow sign?',
        questionImg: 'TS4546.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A broken-down vehicle',
            },
            {
                char: 'b',
                text: 'A school bus',
            },
            {
                char: 'c',
                text: 'An ice-cream van',
            },
            {
                char: 'd',
                text: 'A private ambulance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2719',
        topicCode: 'hazard_awareness',
        question:
            'What hazard should you be aware of when travelling along this street?',
        questionImg: 'IMG_1291.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Glare from the sun',
            },
            {
                char: 'b',
                text: 'Lack of road markings',
            },
            {
                char: 'c',
                text: 'Children running out between vehicles',
            },
            {
                char: 'd',
                text: 'Large goods vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2720',
        topicCode: 'hazard_awareness',
        question:
            "What's the main hazard you should be aware of when following this cyclist?",
        questionImg: 'IMG_1294.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The cyclist may move to the left and dismount',
            },
            {
                char: 'b',
                text: 'The cyclist may swerve into the road',
            },
            {
                char: 'c',
                text: 'The cyclist may get off and push their bicycle',
            },
            {
                char: 'd',
                text: 'The cyclist may wish to turn right at the end of the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2721',
        topicCode: 'hazard_awareness',
        question:
            'A driver’s behaviour has upset you. How can you get over this incident safely?',
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
        code: 'AB2723',
        topicCode: 'hazard_awareness',
        question:
            'How should you drive in areas with traffic-calming measures?',
        questionImg: 'IMG_1292.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At a reduced speed',
            },
            {
                char: 'b',
                text: 'At the speed limit',
            },
            {
                char: 'c',
                text: 'In the centre of the road',
            },
            {
                char: 'd',
                text: 'With headlights on dipped beam',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2724',
        topicCode: 'hazard_awareness',
        question: 'Why should you slow down as you approach this hazard?',
        questionImg: 'R8531.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Because of the level crossing',
            },
            {
                char: 'b',
                text: 'Because it’s hard to see to the right',
            },
            {
                char: 'c',
                text: 'Because of approaching traffic',
            },
            {
                char: 'd',
                text: 'Because of animals crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2725',
        topicCode: 'hazard_awareness',
        question: 'Why are place names painted on the road surface?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To restrict the flow of traffic',
            },
            {
                char: 'b',
                text: 'To warn of oncoming traffic',
            },
            {
                char: 'c',
                text: 'To help you select the correct lane in good time',
            },
            {
                char: 'd',
                text: 'To prevent you from changing lanes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2736',
        topicCode: 'hazard_awareness',
        question:
            'Some two-way roads are divided into three lanes. Why are they particularly dangerous?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Traffic in both directions can use the middle lane to overtake',
            },
            {
                char: 'b',
                text: 'Traffic can travel faster in poor weather conditions',
            },
            {
                char: 'c',
                text: 'Traffic can overtake on the left',
            },
            {
                char: 'd',
                text: 'Traffic uses the middle lane for emergencies only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2844',
        topicCode: 'hazard_awareness',
        question:
            'What type of vehicle uses an amber flashing beacon on a dual carriageway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'An ambulance',
            },
            {
                char: 'b',
                text: 'A fire engine',
            },
            {
                char: 'c',
                text: 'A doctor on call',
            },
            {
                char: 'd',
                text: 'A tractor',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2847',
        topicCode: 'hazard_awareness',
        question:
            'What does this signal from a police officer mean to oncoming traffic?',
        questionImg: '85BW0962.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Go ahead',
            },
            {
                char: 'b',
                text: 'Stop',
            },
            {
                char: 'c',
                text: 'Turn left',
            },
            {
                char: 'd',
                text: 'Turn right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2848',
        topicCode: 'hazard_awareness',
        question:
            'Why should you be cautious when going past this bus waiting at a bus stop?',
        questionImg: 'IMG_1986.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "There's a zebra crossing ahead",
            },
            {
                char: 'b',
                text: 'There are driveways on the left',
            },
            {
                char: 'c',
                text: 'People may cross the road in front of it',
            },
            {
                char: 'd',
                text: 'The road surface will be slippery',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2871',
        topicCode: 'hazard_awareness',
        question: 'Where would it be unsafe to overtake?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On a single carriageway',
            },
            {
                char: 'b',
                text: 'On a one-way street',
            },
            {
                char: 'c',
                text: 'Approaching a junction',
            },
            {
                char: 'd',
                text: 'Travelling up a long hill',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2902',
        topicCode: 'hazard_awareness',
        question: 'How can drinking alcohol affect your ability to drive?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your ability to judge speed will be reduced',
            },
            {
                char: 'b',
                text: 'Your confidence will be reduced',
            },
            {
                char: 'c',
                text: 'Your reactions will be faster',
            },
            {
                char: 'd',
                text: 'Your awareness of danger will be improved',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1081',
        topicCode: 'hazard_awareness',
        question:
            'What does the solid white line at the side of the road indicate?',
        questionImg: 'DSCF2715.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Traffic lights ahead',
            },
            {
                char: 'b',
                text: 'Edge of the carriageway',
            },
            {
                char: 'c',
                text: 'Footpath on the left',
            },
            {
                char: 'd',
                text: 'Cycle path',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1085',
        topicCode: 'hazard_awareness',
        question:
            "You're driving towards this level crossing. What would be the first warning of an approaching train?",
        questionImg: '85BW4461.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Both half-barriers down',
            },
            {
                char: 'b',
                text: 'A steady amber light',
            },
            {
                char: 'c',
                text: 'One half-barrier down',
            },
            {
                char: 'd',
                text: 'Twin flashing red lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1087',
        topicCode: 'hazard_awareness',
        question:
            "You're behind this cyclist. When the traffic lights change, what should you do?",
        questionImg: 'IMG_1983.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Try to move off before the cyclist',
            },
            {
                char: 'b',
                text: 'Allow the cyclist time and room',
            },
            {
                char: 'c',
                text: 'Turn right but give the cyclist room',
            },
            {
                char: 'd',
                text: 'Tap your horn and drive through first',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1095',
        topicCode: 'hazard_awareness',
        question:
            'You intend to turn left at the traffic lights. What should you do just before turning?',
        questionImg: '85BW6802.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check your right mirror',
            },
            {
                char: 'b',
                text: 'Move up closer to the car ahead',
            },
            {
                char: 'c',
                text: 'Move out to the right',
            },
            {
                char: 'd',
                text: 'Check for bicycles on your left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1096',
        topicCode: 'hazard_awareness',
        question: 'Why should you reduce your speed here?',
        questionImg: 'IMG_2355.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A staggered junction is ahead',
            },
            {
                char: 'b',
                text: 'A low bridge is ahead',
            },
            {
                char: 'c',
                text: 'The road surface changes ahead',
            },
            {
                char: 'd',
                text: 'The road narrows ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1099',
        topicCode: 'hazard_awareness',
        question: 'What might you expect to happen in this situation?',
        questionImg: 'IMG_1758.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Traffic will move into the right-hand lane',
            },
            {
                char: 'b',
                text: 'Traffic speed will increase',
            },
            {
                char: 'c',
                text: 'Traffic will move into the left-hand lane',
            },
            {
                char: 'd',
                text: "Traffic won't need to change position",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1100',
        topicCode: 'hazard_awareness',
        question:
            "You're driving on a road with several lanes. What do these signs above the lanes mean?",
        questionImg: 'TS4064.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The two right lanes are open',
            },
            {
                char: 'b',
                text: 'The two left lanes are open',
            },
            {
                char: 'c',
                text: 'Traffic in the left lanes should stop',
            },
            {
                char: 'd',
                text: 'Traffic in the right lanes should stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1109',
        topicCode: 'hazard_awareness',
        question:
            "You're invited to a pub lunch. What should you do if you know that you'll have to drive in the evening?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Avoid mixing your alcoholic drinks',
            },
            {
                char: 'b',
                text: "Don't drink any alcohol at all",
            },
            {
                char: 'c',
                text: 'Have some milk before drinking alcohol',
            },
            {
                char: 'd',
                text: 'Eat a hot meal with your alcoholic drinks',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1112',
        topicCode: 'hazard_awareness',
        question:
            "What will become more expensive after you've been convicted of driving while unfit through drink or drugs?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Road fund licence',
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
        code: 'BB1113',
        topicCode: 'hazard_awareness',
        question:
            'What advice should you give to a driver who has had a few alcoholic drinks at a party?',
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
        code: 'BB1115',
        topicCode: 'hazard_awareness',
        question:
            "What should you do about driving if you've been taking medicine that causes drowsiness?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only drive if your journey is necessary',
            },
            {
                char: 'b',
                text: 'Drive on quiet roads',
            },
            {
                char: 'c',
                text: 'Ask someone to come with you',
            },
            {
                char: 'd',
                text: 'Avoid driving and check with your doctor',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1116',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if a doctor prescribes drugs that are likely to affect your driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Only drive if someone is with you',
            },
            {
                char: 'b',
                text: 'Avoid driving on motorways',
            },
            {
                char: 'c',
                text: 'Get someone else to drive',
            },
            {
                char: 'd',
                text: 'Never drive at more than 30 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1117',
        topicCode: 'hazard_awareness',
        question:
            'What must you do if your ability to drive is impaired during a period of illness?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'See your doctor each time before you drive',
            },
            {
                char: 'b',
                text: 'Take smaller doses of any medicines',
            },
            {
                char: 'c',
                text: "Stop driving until you're fit to drive again",
            },
            {
                char: 'd',
                text: 'Take all your medicines with you when you drive',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1120',
        topicCode: 'hazard_awareness',
        question:
            "What should you do if you begin to feel drowsy while you're driving?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop and rest as soon as possible',
            },
            {
                char: 'b',
                text: 'Turn the heater up to keep you warm and comfortable',
            },
            {
                char: 'c',
                text: 'Close the car windows to help you concentrate',
            },
            {
                char: 'd',
                text: 'Continue with your journey but drive more slowly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1121',
        topicCode: 'hazard_awareness',
        question:
            "What should you do if you become tired while you're driving on a motorway?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Pull up on the hard shoulder and change drivers',
            },
            {
                char: 'b',
                text: 'Leave the motorway at the next exit and rest',
            },
            {
                char: 'c',
                text: 'Increase your speed and turn up the radio volume',
            },
            {
                char: 'd',
                text: 'Close all your windows and set the heating to warm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1123',
        topicCode: 'hazard_awareness',
        question:
            "You're about to drive home. What should you do if you feel very tired and have a severe headache?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "Wait until you're fit and well before driving",
            },
            {
                char: 'b',
                text: 'Drive home, but take a tablet for headaches',
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
        code: 'BB1127',
        topicCode: 'hazard_awareness',
        question:
            'What can you do to help prevent tiredness on a long journey?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Eat a large meal before driving',
            },
            {
                char: 'b',
                text: 'Take regular refreshment breaks',
            },
            {
                char: 'c',
                text: 'Play loud music in the car',
            },
            {
                char: 'd',
                text: 'Complete the journey without stopping',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1284',
        topicCode: 'hazard_awareness',
        question:
            'You take some cough medicine given to you by a friend. What should you do before driving your car?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Ask your friend if taking the medicine affected their driving',
            },
            {
                char: 'b',
                text: 'Drink some strong coffee one hour before driving',
            },
            {
                char: 'c',
                text: 'Check the label to see if the medicine will affect your driving',
            },
            {
                char: 'd',
                text: 'Drive a short distance to see if the medicine is affecting your driving',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1353',
        topicCode: 'hazard_awareness',
        question:
            "You're driving on a one-way street. What should you do if you realise you've taken the wrong route?",
        questionImg: 'TS4693.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Reverse out of the road',
            },
            {
                char: 'b',
                text: 'Turn around in a side road',
            },
            {
                char: 'c',
                text: 'Continue and find another route',
            },
            {
                char: 'd',
                text: 'Reverse into a driveway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1380',
        topicCode: 'hazard_awareness',
        question: "What will be a serious distraction while you're driving?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Looking at road maps',
            },
            {
                char: 'b',
                text: 'Switching on your demister',
            },
            {
                char: 'c',
                text: 'Using your windscreen washers',
            },
            {
                char: 'd',
                text: 'Looking in your door mirror',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1397',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if the vehicle starts reversing off the driveway?',
        questionImg: 'IMG_1798.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move to the opposite side of the road',
            },
            {
                char: 'b',
                text: 'Drive through as you have priority',
            },
            {
                char: 'c',
                text: 'Sound your horn and be prepared to stop',
            },
            {
                char: 'd',
                text: 'Speed up and drive through quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1398',
        topicCode: 'hazard_awareness',
        question:
            "You've been involved in an argument that's made you feel angry. What should you do before starting your journey?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Open a window',
            },
            {
                char: 'b',
                text: 'Turn on your radio',
            },
            {
                char: 'c',
                text: 'Have an alcoholic drink',
            },
            {
                char: 'd',
                text: 'Calm down',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1454',
        topicCode: 'hazard_awareness',
        question:
            "You're driving on this dual carriageway. Why may you need to slow down?",
        questionImg: 'IMG_1776.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "There's a broken white line in the centre",
            },
            {
                char: 'b',
                text: 'There are solid white lines on either side',
            },
            {
                char: 'c',
                text: 'There are roadworks ahead of you',
            },
            {
                char: 'd',
                text: 'There are no footpaths',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1455',
        topicCode: 'hazard_awareness',
        question:
            "You've just been overtaken by this motorcyclist. What should you do if the rider cuts in sharply?",
        questionImg: 'R8525.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Sound the horn',
            },
            {
                char: 'b',
                text: 'Brake firmly',
            },
            {
                char: 'c',
                text: 'Keep a safe gap',
            },
            {
                char: 'd',
                text: 'Flash your lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1457',
        topicCode: 'hazard_awareness',
        question:
            "You're about to drive your car. What should you do if you can't find the glasses you need to wear?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drive home slowly, keeping to quiet roads',
            },
            {
                char: 'b',
                text: 'Borrow a friend’s glasses and use those',
            },
            {
                char: 'c',
                text: 'Drive home at night, so that the lights will help you',
            },
            {
                char: 'd',
                text: 'Find a way of getting home without driving',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1459',
        topicCode: 'hazard_awareness',
        question: 'How does drinking alcohol affect your driving behaviour?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It improves judgement skills',
            },
            {
                char: 'b',
                text: 'It increases confidence',
            },
            {
                char: 'c',
                text: 'It leads to faster reactions',
            },
            {
                char: 'd',
                text: 'It increases concentration',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1461',
        topicCode: 'hazard_awareness',
        question:
            'Why should you check the information leaflet before taking any medicine?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drug companies want customer feedback on their products',
            },
            {
                char: 'b',
                text: 'You may have to let your insurance company know about the medicine',
            },
            {
                char: 'c',
                text: 'Some types of medicine can affect your ability to drive safely',
            },
            {
                char: 'd',
                text: 'The medicine you take may affect your hearing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1514',
        topicCode: 'hazard_awareness',
        question:
            'You need glasses to read a vehicle number plate at the required distance. When must you wear them?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Only in bad weather conditions',
            },
            {
                char: 'b',
                text: "Whenever you're driving",
            },
            {
                char: 'c',
                text: "When you think it's necessary",
            },
            {
                char: 'd',
                text: 'Only at night time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1546',
        topicCode: 'hazard_awareness',
        question:
            'Which type of glasses would make driving at night more difficult?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Half-moon',
            },
            {
                char: 'b',
                text: 'Round',
            },
            {
                char: 'c',
                text: 'Bifocal',
            },
            {
                char: 'd',
                text: 'Tinted',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1564',
        topicCode: 'hazard_awareness',
        question: 'What can seriously reduce your ability to concentrate?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drugs',
            },
            {
                char: 'b',
                text: 'Busy roads',
            },
            {
                char: 'c',
                text: 'Tinted windows',
            },
            {
                char: 'd',
                text: 'Weather conditions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1568',
        topicCode: 'hazard_awareness',
        question:
            "What must you do if your eyesight has become very poor and you're no longer able to meet the driver's eyesight requirements?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Tell the driver licensing authority',
            },
            {
                char: 'b',
                text: 'Tell your doctor',
            },
            {
                char: 'c',
                text: 'Tell the police',
            },
            {
                char: 'd',
                text: 'Tell your optician',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1575',
        topicCode: 'hazard_awareness',
        question: 'When should you use hazard warning lights?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "When you're double-parked on a two-way road",
            },
            {
                char: 'b',
                text: "When your direction indicators aren't working",
            },
            {
                char: 'c',
                text: 'When warning oncoming traffic that you intend to stop',
            },
            {
                char: 'd',
                text: 'When your vehicle has broken down and is causing an obstruction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1576',
        topicCode: 'hazard_awareness',
        question:
            'You want to turn left at this junction. What should you do if your view of the main road is restricted?',
        questionImg: 'IMG_1732.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stay well back and wait to see if anything comes',
            },
            {
                char: 'b',
                text: 'Build up your speed so that you can emerge quickly',
            },
            {
                char: 'c',
                text: 'Stop and apply the parking brake even if the road is clear',
            },
            {
                char: 'd',
                text: 'Approach slowly and edge out until you can see more clearly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1596',
        topicCode: 'hazard_awareness',
        question:
            "You're driving a car fitted with automatic transmission. When would you use ‘kick down’?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To engage cruise control',
            },
            {
                char: 'b',
                text: 'To accelerate quickly',
            },
            {
                char: 'c',
                text: 'To brake progressively',
            },
            {
                char: 'd',
                text: 'To improve fuel economy',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1664',
        topicCode: 'hazard_awareness',
        question:
            "What should you do if it's raining and you're following this lorry on a motorway?",
        questionImg: 'IMG_1897.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Allow a two-second separation gap',
            },
            {
                char: 'b',
                text: 'Switch your headlights onto main beam',
            },
            {
                char: 'c',
                text: 'Move into a lane that has less spray',
            },
            {
                char: 'd',
                text: 'Be aware of spray reducing your vision',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1665',
        topicCode: 'hazard_awareness',
        question:
            "You're driving towards this left-hand bend. What danger should you be anticipating?",
        questionImg: 'IMG_1218.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A vehicle overtaking you',
            },
            {
                char: 'b',
                text: 'Mud on the road',
            },
            {
                char: 'c',
                text: 'The road getting narrower',
            },
            {
                char: 'd',
                text: 'Pedestrians walking towards you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1666',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if the traffic in the left-hand lane is slowing?',
        questionImg: 'IMG_1758.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slow down, keeping a safe separation distance',
            },
            {
                char: 'b',
                text: 'Accelerate past the vehicles in the left-hand lane',
            },
            {
                char: 'c',
                text: 'Pull up on the left-hand verge',
            },
            {
                char: 'd',
                text: 'Move across and continue in the right-hand lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1670',
        topicCode: 'hazard_awareness',
        question: 'When may you use hazard warning lights?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When driving on a motorway to warn traffic behind of a hazard ahead',
            },
            {
                char: 'b',
                text: "When you're double-parked on a two-way road",
            },
            {
                char: 'c',
                text: "When your direction indicators aren't working",
            },
            {
                char: 'd',
                text: 'When warning oncoming traffic that you intend to stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1727',
        topicCode: 'hazard_awareness',
        question:
            "You're waiting to emerge at a junction. Your view is restricted by parked vehicles. What can help you to see traffic on the road you're joining?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Looking for traffic behind you',
            },
            {
                char: 'b',
                text: 'Reflections of traffic in windows',
            },
            {
                char: 'c',
                text: 'Making eye contact with other road users',
            },
            {
                char: 'd',
                text: 'Checking for traffic in your interior mirror',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1743',
        topicCode: 'hazard_awareness',
        question: 'What must you do if poor health affects your driving?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Inform your local police',
            },
            {
                char: 'b',
                text: 'Avoid using motorways',
            },
            {
                char: 'c',
                text: 'Always drive accompanied',
            },
            {
                char: 'd',
                text: 'Inform the licensing authority',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1748',
        topicCode: 'hazard_awareness',
        question: 'Why should the junction on the left be kept clear?',
        questionImg: 'R8532.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To allow vehicles to enter and emerge',
            },
            {
                char: 'b',
                text: 'To allow the bus to reverse',
            },
            {
                char: 'c',
                text: 'To allow vehicles to make a U-turn',
            },
            {
                char: 'd',
                text: 'To allow vehicles to park',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1779',
        topicCode: 'hazard_awareness',
        question:
            "What should you do if you start to feel drowsy while you're driving on a motorway?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder for a sleep',
            },
            {
                char: 'b',
                text: 'Open a window and stop as soon as it’s safe and legal',
            },
            {
                char: 'c',
                text: 'Speed up to arrive at your destination sooner',
            },
            {
                char: 'd',
                text: 'Slow down and let other drivers overtake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2117',
        topicCode: 'vulnerable_road_users',
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
        code: 'AB2119',
        topicCode: 'vulnerable_road_users',
        question:
            'What should you do if you want to turn left at a junction where pedestrians have started to cross?',
        questionImg: 'P5506.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Go around them, leaving plenty of room',
            },
            {
                char: 'b',
                text: 'Stop and wave at them to cross',
            },
            {
                char: 'c',
                text: 'Sound your horn and proceed',
            },
            {
                char: 'd',
                text: 'Give way to them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2122',
        topicCode: 'vulnerable_road_users',
        question:
            "What hazard should you be especially aware of if you're turning left into a side road?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'One-way street',
            },
            {
                char: 'b',
                text: 'Pedestrians',
            },
            {
                char: 'c',
                text: 'Traffic congestion',
            },
            {
                char: 'd',
                text: 'Parked vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2123',
        topicCode: 'vulnerable_road_users',
        question:
            'Why should you check for motorcyclists just before turning right into a side road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They may be overtaking on your left',
            },
            {
                char: 'b',
                text: 'They may be following you closely',
            },
            {
                char: 'c',
                text: 'They may be emerging from the side road',
            },
            {
                char: 'd',
                text: 'They may be overtaking on your right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2124',
        topicCode: 'vulnerable_road_users',
        question: 'Why is a toucan crossing different from other crossings?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Moped riders can use it',
            },
            {
                char: 'b',
                text: "It's controlled by a traffic warden",
            },
            {
                char: 'c',
                text: "It's controlled by two flashing lights",
            },
            {
                char: 'd',
                text: 'Cyclists can use it',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2128',
        topicCode: 'vulnerable_road_users',
        question: 'How will a school crossing patrol signal you to stop?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'By pointing to children waiting to cross',
            },
            {
                char: 'b',
                text: 'By displaying a red light',
            },
            {
                char: 'c',
                text: "By displaying a 'stop' sign",
            },
            {
                char: 'd',
                text: 'By giving you an arm signal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2129',
        topicCode: 'vulnerable_road_users',
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
        code: 'AB2134',
        topicCode: 'vulnerable_road_users',
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
                text: 'A route for pedestrians and cyclists',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2136',
        topicCode: 'vulnerable_road_users',
        question:
            'You see a pedestrian carrying a white stick that also has a red band. What does this mean?',
        questionImg: 'IMG_0822.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They have limited mobility',
            },
            {
                char: 'b',
                text: "They're deaf",
            },
            {
                char: 'c',
                text: "They're blind",
            },
            {
                char: 'd',
                text: "They're deaf and blind",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2138',
        topicCode: 'vulnerable_road_users',
        question:
            'What would you do if you see older people crossing the road ahead?',
        questionImg: 'TS4648.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "Wave them across so they know that you've seen them",
            },
            {
                char: 'b',
                text: 'Be patient and allow them to cross in their own time',
            },
            {
                char: 'c',
                text: "Rev the engine to let them know that you're waiting",
            },
            {
                char: 'd',
                text: "Tap the horn in case they're hard of hearing",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2139',
        topicCode: 'vulnerable_road_users',
        question:
            'What should you do when you see an older person about to cross the road ahead?',
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
                text: 'Be careful; they may misjudge your speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2143',
        topicCode: 'vulnerable_road_users',
        question:
            "You're approaching a roundabout. What should you do if a cyclist ahead is signalling to turn right?",
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
        code: 'AB2147',
        topicCode: 'vulnerable_road_users',
        question:
            'Which vehicle should you allow extra room as you overtake them?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Lorry',
            },
            {
                char: 'b',
                text: 'Tractor',
            },
            {
                char: 'c',
                text: 'Bicycle',
            },
            {
                char: 'd',
                text: 'Road-sweeper',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2150',
        topicCode: 'vulnerable_road_users',
        question:
            'Why should you look carefully for motorcyclists and cyclists at junctions?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They may want to turn into the side road',
            },
            {
                char: 'b',
                text: 'They may slow down to let you turn',
            },
            {
                char: 'c',
                text: "They're harder to see",
            },
            {
                char: 'd',
                text: 'They might not see you turn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2151',
        topicCode: 'vulnerable_road_users',
        question:
            "You're waiting to come out of a side road. Why should you look carefully for motorcycles?",
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
                text: 'Motorcycles can easily be hidden behind obstructions',
            },
            {
                char: 'd',
                text: 'Motorcycles have right of way',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2153',
        topicCode: 'vulnerable_road_users',
        question: 'Why do motorcyclists use dipped headlights in daylight?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'So that the rider can be seen more easily',
            },
            {
                char: 'b',
                text: 'To stop the battery overcharging',
            },
            {
                char: 'c',
                text: 'To improve the rider’s vision',
            },
            {
                char: 'd',
                text: 'The rider is inviting you to proceed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2156',
        topicCode: 'vulnerable_road_users',
        question: 'Why do motorcyclists wear bright clothing?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They must do so by law',
            },
            {
                char: 'b',
                text: 'It helps keep them cool in summer',
            },
            {
                char: 'c',
                text: 'The colours are popular',
            },
            {
                char: 'd',
                text: 'To make them more visible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2160',
        topicCode: 'vulnerable_road_users',
        question:
            'Why do motorcyclists often look round over their right shoulder just before turning right?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To listen for traffic behind them',
            },
            {
                char: 'b',
                text: "Motorcycles don't have mirrors",
            },
            {
                char: 'c',
                text: 'It helps them balance as they turn',
            },
            {
                char: 'd',
                text: 'To check for traffic in their blind area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2161',
        topicCode: 'vulnerable_road_users',
        question: 'Which is the most vulnerable road user?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Car driver',
            },
            {
                char: 'b',
                text: 'Tractor driver',
            },
            {
                char: 'c',
                text: 'Lorry driver',
            },
            {
                char: 'd',
                text: 'Motorcyclist',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2168',
        topicCode: 'vulnerable_road_users',
        question:
            "You're approaching a roundabout. What should you do if there are horses being ridden in front of you?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Sound your horn as a warning',
            },
            {
                char: 'b',
                text: 'Treat them like any other vehicle',
            },
            {
                char: 'c',
                text: 'Give them plenty of room',
            },
            {
                char: 'd',
                text: 'Accelerate past as quickly as possible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2491',
        topicCode: 'vulnerable_road_users',
        question:
            'As you approach a pelican crossing, the lights change to green. What should you do if older people are still crossing?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wave them to cross as quickly as they can',
            },
            {
                char: 'b',
                text: 'Rev your engine to make them hurry',
            },
            {
                char: 'c',
                text: "Flash your lights in case they haven't noticed you",
            },
            {
                char: 'd',
                text: 'Wait patiently while they cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2516',
        topicCode: 'vulnerable_road_users',
        question:
            'What action should you take when you see flashing amber lights under a school warning sign?',
        questionImg: '85BW5908.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "Reduce speed until you're clear of the area",
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
                text: 'Wait at the lights until they stop flashing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2545',
        topicCode: 'vulnerable_road_users',
        question: 'Why should these road markings be kept clear?',
        questionImg: 'TS4715.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To allow children to be dropped off at school',
            },
            {
                char: 'b',
                text: 'To allow teachers to park',
            },
            {
                char: 'c',
                text: 'To allow children to be picked up after school',
            },
            {
                char: 'd',
                text: "To allow children to see and be seen when they're crossing the road",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2559',
        topicCode: 'vulnerable_road_users',
        question: 'Where would you see this sign?',
        questionImg: 'TS4546.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Near a school crossing',
            },
            {
                char: 'b',
                text: 'At a playground entrance',
            },
            {
                char: 'c',
                text: 'On a school bus',
            },
            {
                char: 'd',
                text: 'At a ‘pedestrians only’ area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2561',
        topicCode: 'vulnerable_road_users',
        question:
            "You're following two cyclists as they approach a roundabout in the left-hand lane. Where would you expect the cyclists to go?",
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
        code: 'AB2562',
        topicCode: 'vulnerable_road_users',
        question:
            "You're travelling behind a moped. What should you do if you want to turn left a short distance ahead?",
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
                text: 'Sound your horn as a warning and pull in front of the moped',
            },
            {
                char: 'd',
                text: 'Stay behind until the moped has passed the junction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2564',
        topicCode: 'vulnerable_road_users',
        question:
            "You see a horse rider as you approach a roundabout. What should you do if they're signalling right but keeping well to the left?",
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
        code: 'AB2565',
        topicCode: 'vulnerable_road_users',
        question: 'How should you react to inexperienced drivers?',
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
                text: "Flash your headlights to indicate that it's safe for them to proceed",
            },
            {
                char: 'd',
                text: 'Overtake them as soon as possible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2566',
        topicCode: 'vulnerable_road_users',
        question:
            "What should you do when you're following a learner driver who stalls at a junction?",
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
        code: 'AB2587',
        topicCode: 'vulnerable_road_users',
        question:
            "You're on a country road that has no pavement. What should you anticipate finding on your side of the road?",
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
        code: 'AB2601',
        topicCode: 'vulnerable_road_users',
        question:
            "You're following a cyclist. What should you do when you wish to turn left a short distance ahead?",
        questionImg: 'DSCF2611.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Overtake the cyclist before you reach the junction',
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
        code: 'AB2602',
        topicCode: 'vulnerable_road_users',
        question:
            'A horse rider is in the left-hand lane approaching a roundabout. Where should you expect the rider to go?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In any direction',
            },
            {
                char: 'b',
                text: 'To the right',
            },
            {
                char: 'c',
                text: 'To the left',
            },
            {
                char: 'd',
                text: 'Straight ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2660',
        topicCode: 'vulnerable_road_users',
        question:
            "Powered vehicles used by disabled people are small and can be hard to see. What must they display if they're travelling on a dual carriageway?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Flashing red beacon',
            },
            {
                char: 'b',
                text: 'Flashing green beacon',
            },
            {
                char: 'c',
                text: 'Flashing blue beacon',
            },
            {
                char: 'd',
                text: 'Flashing amber beacon',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2696',
        topicCode: 'vulnerable_road_users',
        question:
            'What does it mean when a moving vehicle is showing a flashing amber beacon?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The vehicle is slow moving',
            },
            {
                char: 'b',
                text: 'The vehicle has broken down',
            },
            {
                char: 'c',
                text: "The vehicle is a doctor's car",
            },
            {
                char: 'd',
                text: 'The vehicle belongs to a school crossing patrol',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2726',
        topicCode: 'vulnerable_road_users',
        question: 'What does this sign mean?',
        questionImg: 'TS4706.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Contraflow cycle lane',
            },
            {
                char: 'b',
                text: 'With-flow cycle lane',
            },
            {
                char: 'c',
                text: 'Cycles and buses only',
            },
            {
                char: 'd',
                text: 'No cycles or buses',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2727',
        topicCode: 'vulnerable_road_users',
        question:
            'What should you do when you see these horse riders in front?',
        questionImg: 'IMG_6187.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Pull out to the middle of the road',
            },
            {
                char: 'b',
                text: 'Slow down and be ready to stop',
            },
            {
                char: 'c',
                text: 'Switch on your hazard warning lights',
            },
            {
                char: 'd',
                text: 'Give a right-turn signal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2729',
        topicCode: 'vulnerable_road_users',
        question: "What's the purpose of these road markings?",
        questionImg: 'TS4715.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "To ensure children can see and be seen when they're crossing the road",
            },
            {
                char: 'b',
                text: 'To enable teachers to have clear access to the school',
            },
            {
                char: 'c',
                text: 'To ensure delivery vehicles have easy access to the school',
            },
            {
                char: 'd',
                text: 'To enable parents to pick up or drop off children safely',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2730',
        topicCode: 'vulnerable_road_users',
        question:
            'What should you do if the left-hand pavement is closed due to street repairs?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Watch out for pedestrians walking in the road',
            },
            {
                char: 'b',
                text: 'Use your right-hand mirror more often',
            },
            {
                char: 'c',
                text: 'Speed up to get past the roadworks more quickly',
            },
            {
                char: 'd',
                text: 'Position close to the left-hand kerb',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2731',
        topicCode: 'vulnerable_road_users',
        question:
            "What should you do when you're following a motorcyclist along a road that has a poor surface?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Follow closely so they can see you in their mirrors',
            },
            {
                char: 'b',
                text: 'Overtake immediately to avoid delays',
            },
            {
                char: 'c',
                text: 'Allow extra room in case they swerve to avoid potholes',
            },
            {
                char: 'd',
                text: 'Allow the same room as normal to avoid wasting road space',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2840',
        topicCode: 'vulnerable_road_users',
        question: 'What does this sign mean?',
        questionImg: 'TS4683.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'No cycling',
            },
            {
                char: 'b',
                text: 'Cycle route ahead',
            },
            {
                char: 'c',
                text: 'Cycle parking only',
            },
            {
                char: 'd',
                text: 'End of cycle route',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2849',
        topicCode: 'vulnerable_road_users',
        question:
            "You're approaching this roundabout. What should you do when a cyclist is keeping to the left while signalling to turn right?",
        questionImg: '85BW2956.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sound your horn',
            },
            {
                char: 'b',
                text: 'Overtake them',
            },
            {
                char: 'c',
                text: "Assume they're turning left",
            },
            {
                char: 'd',
                text: 'Allow them space to turn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2850',
        topicCode: 'vulnerable_road_users',
        question: "What should you do when you're approaching this crossing?",
        questionImg: 'R8014.png',
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
                text: 'Continue unless the pedestrians step out',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2851',
        topicCode: 'vulnerable_road_users',
        question:
            'What does it mean if you see a pedestrian with a dog that has a yellow or burgundy coat?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The pedestrian is an older person',
            },
            {
                char: 'b',
                text: 'The pedestrian is a dog trainer',
            },
            {
                char: 'c',
                text: 'The pedestrian is colour-blind',
            },
            {
                char: 'd',
                text: 'The pedestrian is deaf',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2854',
        topicCode: 'vulnerable_road_users',
        question: 'Who may use toucan crossings?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Motorcyclists and cyclists',
            },
            {
                char: 'b',
                text: 'Motorcyclists and pedestrians',
            },
            {
                char: 'c',
                text: 'Only cyclists',
            },
            {
                char: 'd',
                text: 'Cyclists and pedestrians',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2860',
        topicCode: 'vulnerable_road_users',
        question:
            "This junction, controlled by traffic lights, has a marked area between two stop lines. What's this for?",
        questionImg: 'IMG_1360.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To allow taxis to position in front of other traffic',
            },
            {
                char: 'b',
                text: 'To allow people with disabilities to cross the road',
            },
            {
                char: 'c',
                text: 'To allow cyclists and pedestrians to cross the road together',
            },
            {
                char: 'd',
                text: 'To allow cyclists to position in front of other traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2896',
        topicCode: 'vulnerable_road_users',
        question:
            "You're about to overtake a cyclist. Why should you leave them as much room as you would give to a car?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The cyclist might speed up',
            },
            {
                char: 'b',
                text: 'The cyclist might get off their bicycle',
            },
            {
                char: 'c',
                text: 'The cyclist might be unsettled if you pass too near them',
            },
            {
                char: 'd',
                text: 'The cyclist might have to make a left turn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2908',
        topicCode: 'vulnerable_road_users',
        question:
            "What should you do when you're passing loose sheep on the road?",
        questionImg: 'IMG_2983.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Briefly sound your horn',
            },
            {
                char: 'b',
                text: 'Go very slowly',
            },
            {
                char: 'c',
                text: 'Pass quickly but quietly',
            },
            {
                char: 'd',
                text: 'Herd them to the side of the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2941',
        topicCode: 'vulnerable_road_users',
        question:
            'At night, what does it mean if you see a pedestrian wearing reflective clothing and carrying a bright red light?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "You're approaching roadworks",
            },
            {
                char: 'b',
                text: "You're approaching an organised walk",
            },
            {
                char: 'c',
                text: "You're approaching a slow-moving vehicle",
            },
            {
                char: 'd',
                text: "You're approaching a traffic danger spot",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2943',
        topicCode: 'vulnerable_road_users',
        question:
            'You’ve just passed your driving test. How can you reduce your risk of being involved in a collision?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'By always staying close to the vehicle in front',
            },
            {
                char: 'b',
                text: 'By never going over 40 mph',
            },
            {
                char: 'c',
                text: 'By staying in the left-hand lane on all roads',
            },
            {
                char: 'd',
                text: 'By taking further training',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1131',
        topicCode: 'vulnerable_road_users',
        question:
            "You want to reverse into a side road. What should you do if you aren't sure that the area behind your car is clear?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Look through the rear window only',
            },
            {
                char: 'b',
                text: 'Get out and check',
            },
            {
                char: 'c',
                text: 'Check the mirrors only',
            },
            {
                char: 'd',
                text: "Carry on, assuming it's clear",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1132',
        topicCode: 'vulnerable_road_users',
        question:
            "You're about to reverse into a side road. What should you do if a pedestrian is waiting to cross behind your car?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Wave to the pedestrian to stop',
            },
            {
                char: 'b',
                text: 'Give way to the pedestrian',
            },
            {
                char: 'c',
                text: 'Sound your horn to warn the pedestrian',
            },
            {
                char: 'd',
                text: 'Reverse before the pedestrian starts to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1133',
        topicCode: 'vulnerable_road_users',
        question:
            "Which road users are most difficult to see when you're reversing your car?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Motorcyclists',
            },
            {
                char: 'b',
                text: 'Car drivers',
            },
            {
                char: 'c',
                text: 'Cyclists',
            },
            {
                char: 'd',
                text: 'Children',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1135',
        topicCode: 'vulnerable_road_users',
        question:
            'You want to turn right from a junction. What should you do if your view is restricted by parked vehicles?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move out quickly, but be prepared to stop',
            },
            {
                char: 'b',
                text: "Sound your horn and pull out if there's no reply",
            },
            {
                char: 'c',
                text: 'Stop, then move forward slowly until you have a clear view',
            },
            {
                char: 'd',
                text: 'Stop, get out and look along the main road to check',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1136',
        topicCode: 'vulnerable_road_users',
        question:
            "You're at the front of a queue of traffic waiting to turn right into a side road. Why is it important to check your right mirror just before turning?",
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
        code: 'BB1139',
        topicCode: 'vulnerable_road_users',
        question:
            "You've driven up to a pelican crossing. What must you do while the amber light is flashing?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Signal the pedestrian to cross',
            },
            {
                char: 'b',
                text: 'Always wait for the green light before proceeding',
            },
            {
                char: 'c',
                text: 'Give way to any pedestrians on the crossing',
            },
            {
                char: 'd',
                text: 'Wait for the red-and-amber light before proceeding',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1140',
        topicCode: 'vulnerable_road_users',
        question:
            "You've stopped at a pelican crossing. What should you do if a disabled person is crossing slowly in front of you and the lights change to green?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Wait for them to finish crossing',
            },
            {
                char: 'b',
                text: 'Drive in front of them',
            },
            {
                char: 'c',
                text: 'Edge forward slowly',
            },
            {
                char: 'd',
                text: 'Sound your horn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1142',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving past a line of parked cars. What should you do if a ball bounces out into the road ahead?",
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
        code: 'BB1145',
        topicCode: 'vulnerable_road_users',
        question:
            'You want to turn right from a main road into a side road. What should you do just before turning?',
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
                text: 'Check for traffic overtaking on your right',
            },
            {
                char: 'd',
                text: 'Stop and set the parking brake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1147',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving in a slow-moving queue of traffic. What should you do just before changing lane?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound the horn and flash your lights',
            },
            {
                char: 'b',
                text: 'Look for motorcyclists filtering through the traffic',
            },
            {
                char: 'c',
                text: 'Give a ‘slowing down’ arm signal',
            },
            {
                char: 'd',
                text: 'Change down to first gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1148',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving in town. Why should you be careful if there's a bus at a bus stop on the other side of the road?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The bus might have broken down',
            },
            {
                char: 'b',
                text: 'Pedestrians might come from behind the bus',
            },
            {
                char: 'c',
                text: 'The bus might move off suddenly',
            },
            {
                char: 'd',
                text: 'The bus might remain stationary',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1149',
        topicCode: 'vulnerable_road_users',
        question: 'How should you overtake horse riders?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drive up close and overtake as soon as possible',
            },
            {
                char: 'b',
                text: "Speed isn't important but allow plenty of room",
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
        code: 'BB1516',
        topicCode: 'vulnerable_road_users',
        question:
            'Why should you allow extra room while overtaking a motorcyclist on a windy day?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The rider may turn off suddenly to get out of the wind',
            },
            {
                char: 'b',
                text: 'The rider may be blown in front of you',
            },
            {
                char: 'c',
                text: 'The rider may stop suddenly',
            },
            {
                char: 'd',
                text: 'The rider may be travelling faster than normal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1563',
        topicCode: 'vulnerable_road_users',
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
                text: 'On one-way streets',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1577',
        topicCode: 'vulnerable_road_users',
        question:
            'The road outside this school is marked with yellow zigzag lines. What do these lines mean?',
        questionImg: 'IMG_1964.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You may park on the lines when dropping off schoolchildren',
            },
            {
                char: 'b',
                text: 'You may park on the lines when picking up schoolchildren',
            },
            {
                char: 'c',
                text: "You shouldn't wait or park your vehicle here",
            },
            {
                char: 'd',
                text: 'You must stay with your vehicle if you park here',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1672',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving past parked cars. What should you do if you see a bicycle wheel sticking out between the cars?",
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
        code: 'BB1674',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving at night. What should you do if you're dazzled by a vehicle behind you?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Set your mirror to the anti-dazzle position',
            },
            {
                char: 'b',
                text: 'Set your mirror to dazzle the other driver',
            },
            {
                char: 'c',
                text: 'Brake sharply to a stop',
            },
            {
                char: 'd',
                text: 'Switch your rear lights on and off',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1678',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving towards a zebra crossing. What should you do if a person in a wheelchair is waiting to cross?",
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
        code: 'AB2176',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're about to overtake a slow-moving motorcyclist. Which sign would make you take special care?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4518.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4664.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4693.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4691.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2177',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're waiting to turn right out of a minor road. It's clear to the left but a lorry is coming from the right. Why should you wait, even if you have enough time to turn?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Anything overtaking the lorry will be hidden from view',
            },
            {
                char: 'b',
                text: 'The lorry could suddenly speed up',
            },
            {
                char: 'c',
                text: 'The lorry might be slowing down',
            },
            {
                char: 'd',
                text: 'The load on the lorry might be unstable',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2179',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're following a long vehicle as it approaches a crossroads. What should you do if it signals left but moves out to the right?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Get closer in order to pass it quickly',
            },
            {
                char: 'b',
                text: 'Stay well back and give it room',
            },
            {
                char: 'c',
                text: "Assume the signal is wrong and that it's turning right",
            },
            {
                char: 'd',
                text: 'Overtake it as it starts to slow down',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2180',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're following a long vehicle approaching a crossroads. What should you do if the driver signals right but moves close to the left-hand kerb?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Warn the driver about the wrong signal',
            },
            {
                char: 'b',
                text: 'Wait behind the long vehicle',
            },
            {
                char: 'c',
                text: 'Report the driver to the police',
            },
            {
                char: 'd',
                text: 'Overtake on the right-hand side',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2181',
        topicCode: 'other_types_of_vehicle',
        question:
            'You’re approaching a mini-roundabout. What should you do if a long vehicle in front signals left but positions over to the right?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sound your horn',
            },
            {
                char: 'b',
                text: 'Overtake on the left',
            },
            {
                char: 'c',
                text: 'Follow the same course as the lorry',
            },
            {
                char: 'd',
                text: 'Keep well back',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2184',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're driving on a single carriageway road. Why should you keep well back while you're following a large vehicle?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To give yourself acceleration space if you decide to overtake',
            },
            {
                char: 'b',
                text: 'To get the best view of the road ahead',
            },
            {
                char: 'c',
                text: 'To leave a gap in case the vehicle stops and rolls back',
            },
            {
                char: 'd',
                text: 'To offer other drivers a safe gap if they want to overtake you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2189',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're travelling behind a bus. What should you do if it pulls up at a bus stop?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Accelerate past the bus',
            },
            {
                char: 'b',
                text: 'Look for pedestrians',
            },
            {
                char: 'c',
                text: 'Sound your horn',
            },
            {
                char: 'd',
                text: 'Pull in closely behind the bus',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2193',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're following a lorry on a wet road. What should you do when spray makes it difficult to see the road ahead?",
        questionImg: 'IMG_1940.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drop back until you can see better',
            },
            {
                char: 'b',
                text: 'Put your headlights on full beam',
            },
            {
                char: 'c',
                text: 'Keep close to the lorry, away from the spray',
            },
            {
                char: 'd',
                text: 'Speed up and overtake quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2568',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're leaving a safe gap as you follow a large vehicle. What should you do if a car moves into this gap?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound your horn',
            },
            {
                char: 'b',
                text: 'Drop back further',
            },
            {
                char: 'c',
                text: 'Flash your headlights',
            },
            {
                char: 'd',
                text: 'Start to overtake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2733',
        topicCode: 'other_types_of_vehicle',
        question:
            "What should you do when you're approaching a bus that's signalling to move away from a bus stop?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Get past before it moves',
            },
            {
                char: 'b',
                text: "Allow it to pull away, if it's safe to do so",
            },
            {
                char: 'c',
                text: 'Flash your headlights as you approach',
            },
            {
                char: 'd',
                text: 'Signal left and wave the bus on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2734',
        topicCode: 'other_types_of_vehicle',
        question:
            'What should you do if you want to overtake a long, slow-moving vehicle on a busy road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Follow it closely and keep moving out to see the road ahead',
            },
            {
                char: 'b',
                text: 'Flash your headlights for the oncoming traffic to give way',
            },
            {
                char: 'c',
                text: 'Stay behind until the driver waves you past',
            },
            {
                char: 'd',
                text: 'Keep well back so that you get a good view of the road ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2735',
        topicCode: 'other_types_of_vehicle',
        question:
            'Which vehicles are least likely to be affected by side wind?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Cyclists',
            },
            {
                char: 'b',
                text: 'Motorcyclists',
            },
            {
                char: 'c',
                text: 'High-sided vehicles',
            },
            {
                char: 'd',
                text: 'Cars',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2737',
        topicCode: 'other_types_of_vehicle',
        question: 'What should you do as you approach this lorry?',
        questionImg: 'VL2011.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slow down and be prepared to wait',
            },
            {
                char: 'b',
                text: 'Make the lorry wait for you',
            },
            {
                char: 'c',
                text: 'Flash your lights at the lorry',
            },
            {
                char: 'd',
                text: 'Move to the right-hand side of the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2739',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're following a large vehicle as it approaches a crossroads. What should you do if the driver signals to turn left?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake if you can leave plenty of room',
            },
            {
                char: 'b',
                text: 'Overtake if there are no oncoming vehicles',
            },
            {
                char: 'c',
                text: 'Wait for the driver to cancel their signal',
            },
            {
                char: 'd',
                text: 'Wait for the vehicle to finish turning',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2881',
        topicCode: 'other_types_of_vehicle',
        question:
            'Why is it more difficult to overtake a large vehicle than a car?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It will take longer to overtake a large vehicle',
            },
            {
                char: 'b',
                text: 'A large vehicle will be fitted with a speed limiter',
            },
            {
                char: 'c',
                text: 'A large vehicle will have air brakes',
            },
            {
                char: 'd',
                text: 'It will take longer for a large vehicle to accelerate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1157',
        topicCode: 'other_types_of_vehicle',
        question:
            "It's very windy. What should you do if you're behind a motorcyclist who's overtaking a high-sided vehicle?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtake the motorcyclist immediately',
            },
            {
                char: 'b',
                text: 'Keep well back',
            },
            {
                char: 'c',
                text: 'Stay level with the motorcyclist',
            },
            {
                char: 'd',
                text: 'Keep close to the motorcyclist',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1162',
        topicCode: 'other_types_of_vehicle',
        question:
            "What should you do if there's a bus at a bus stop ahead of you?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Flash your lights to warn the driver of your presence',
            },
            {
                char: 'b',
                text: 'Continue at the same speed but sound your horn as a warning',
            },
            {
                char: 'c',
                text: 'Watch carefully for the sudden appearance of pedestrians',
            },
            {
                char: 'd',
                text: 'Pass the bus as quickly as you possibly can',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1399',
        topicCode: 'other_types_of_vehicle',
        question: 'What should you be prepared to do in this situation?',
        questionImg: 'VL2012.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound your horn and continue',
            },
            {
                char: 'b',
                text: 'Slow down and give way',
            },
            {
                char: 'c',
                text: 'Report the driver to the police',
            },
            {
                char: 'd',
                text: 'Squeeze through the gap',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1578',
        topicCode: 'other_types_of_vehicle',
        question:
            'Why should drivers be more careful on roads where trams also operate?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "Because trams don't have a horn",
            },
            {
                char: 'b',
                text: "Because trams can't stop for cars",
            },
            {
                char: 'c',
                text: "Because trams don't have lights",
            },
            {
                char: 'd',
                text: "Because trams can't steer to avoid obstructions",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1679',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're towing a caravan. Which is the safest type of rear-view mirror to use?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Interior wide-angle mirror',
            },
            {
                char: 'b',
                text: 'Extended-arm side mirrors',
            },
            {
                char: 'c',
                text: 'Ordinary door mirrors',
            },
            {
                char: 'd',
                text: 'Ordinary interior mirror',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1680',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're driving in heavy traffic on a wet road. Which lights should you use if there's a lot of surface spray?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Main-beam headlights',
            },
            {
                char: 'b',
                text: 'Sidelights only',
            },
            {
                char: 'c',
                text: 'Rear fog lights if visibility is more than 100 metres (328 feet)',
            },
            {
                char: 'd',
                text: 'Dipped headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1720',
        topicCode: 'other_types_of_vehicle',
        question:
            "What should you do if you overtake a cyclist when it's very windy?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake very slowly',
            },
            {
                char: 'b',
                text: 'Keep close as you pass',
            },
            {
                char: 'c',
                text: 'Sound your horn repeatedly',
            },
            {
                char: 'd',
                text: 'Allow extra room',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2199',
        topicCode: 'vehicle_handling',
        question: 'When may you overtake another vehicle on their left?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you’re in a one-way street',
            },
            {
                char: 'b',
                text: 'When approaching a motorway slip road where you’ll be turning off',
            },
            {
                char: 'c',
                text: 'When the vehicle in front is signalling to turn left',
            },
            {
                char: 'd',
                text: 'When a slower vehicle is travelling in the right-hand lane of a dual carriageway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2201',
        topicCode: 'vehicle_handling',
        question:
            "You're travelling in very heavy rain. How is this likely to affect your overall stopping distance?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It will be doubled',
            },
            {
                char: 'b',
                text: 'It will be halved',
            },
            {
                char: 'c',
                text: 'It will be ten times greater',
            },
            {
                char: 'd',
                text: 'It will be no different',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2208',
        topicCode: 'vehicle_handling',
        question: "What should you do when you're overtaking at night?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wait until a bend so that you can see oncoming headlights',
            },
            {
                char: 'b',
                text: 'Sound your horn twice before moving out',
            },
            {
                char: 'c',
                text: 'Go past slowly so that you can react to unseen hazards',
            },
            {
                char: 'd',
                text: 'Beware of bends in the road ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2211',
        topicCode: 'vehicle_handling',
        question: 'When may you wait in a box junction?',
        questionImg: 'J7003.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "When you're stationary in a queue of traffic",
            },
            {
                char: 'b',
                text: 'When approaching a pelican crossing',
            },
            {
                char: 'c',
                text: 'When approaching a zebra crossing',
            },
            {
                char: 'd',
                text: 'When oncoming traffic prevents you turning right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2212',
        topicCode: 'vehicle_handling',
        question: 'Which plate may appear with this road sign?',
        questionImg: 'TS4602.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4654.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4090.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4065.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4067.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2524',
        topicCode: 'vehicle_handling',
        question: "What's the reason for traffic-calming measures?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To stop road rage',
            },
            {
                char: 'b',
                text: 'To make overtaking easier',
            },
            {
                char: 'c',
                text: 'To slow traffic down',
            },
            {
                char: 'd',
                text: 'To make parking easier',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2570',
        topicCode: 'vehicle_handling',
        question:
            'What colour are the reflective studs along the left-hand edge of the motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Green',
            },
            {
                char: 'b',
                text: 'Amber',
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
        code: 'AB2572',
        topicCode: 'vehicle_handling',
        question: "What's a rumble device designed to do?",
        questionImg: '85BW9940.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Give directions',
            },
            {
                char: 'b',
                text: 'Prevent cattle escaping',
            },
            {
                char: 'c',
                text: 'Alert you to low tyre pressure',
            },
            {
                char: 'd',
                text: 'Alert you to a hazard',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2605',
        topicCode: 'vehicle_handling',
        question:
            'What should you do if you have to make a journey in foggy conditions?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Follow other vehicles’ tail lights closely',
            },
            {
                char: 'b',
                text: 'Avoid using dipped headlights',
            },
            {
                char: 'c',
                text: 'Leave plenty of time for your journey',
            },
            {
                char: 'd',
                text: 'Keep two seconds behind the vehicle ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2606',
        topicCode: 'vehicle_handling',
        question: "What must you do when you're overtaking a car at night?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights before overtaking',
            },
            {
                char: 'b',
                text: 'Select a higher gear',
            },
            {
                char: 'c',
                text: 'Switch your headlights to main beam before overtaking',
            },
            {
                char: 'd',
                text: "Make sure you don't dazzle other road users",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2640',
        topicCode: 'vehicle_handling',
        question:
            "You're travelling on a road that has road humps. What should you do when the driver in front is travelling more slowly than you?",
        questionImg: 'TS4602.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sound your horn',
            },
            {
                char: 'b',
                text: 'Overtake as soon as you can',
            },
            {
                char: 'c',
                text: 'Flash your headlights',
            },
            {
                char: 'd',
                text: 'Slow down and stay behind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2665',
        topicCode: 'vehicle_handling',
        question:
            'What’s the purpose of the yellow lines painted across the road?',
        questionImg: '85BW9937.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To show a safe distance between vehicles',
            },
            {
                char: 'b',
                text: 'To keep the area clear of traffic',
            },
            {
                char: 'c',
                text: 'To make you aware of your speed',
            },
            {
                char: 'd',
                text: 'To warn you to change direction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2742',
        topicCode: 'vehicle_handling',
        question:
            'What should you do when you meet an oncoming vehicle on a single-track road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Reverse back to the main road',
            },
            {
                char: 'b',
                text: 'Carry out an emergency stop',
            },
            {
                char: 'c',
                text: 'Stop at a passing place',
            },
            {
                char: 'd',
                text: 'Switch on your hazard warning lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2820',
        topicCode: 'vehicle_handling',
        question:
            'The road is wet. Why would a motorcyclist steer around drain covers while they were cornering?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To avoid puncturing the tyres on the edge of the drain covers',
            },
            {
                char: 'b',
                text: 'To prevent the motorcycle sliding on the metal drain covers',
            },
            {
                char: 'c',
                text: 'To help judge the bend using the drain covers as marker points',
            },
            {
                char: 'd',
                text: 'To avoid splashing pedestrians on the pavement',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2821',
        topicCode: 'vehicle_handling',
        question: 'Why should you test your brakes after this hazard?',
        questionImg: 'TS4516.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "You'll be on a slippery road",
            },
            {
                char: 'b',
                text: 'Your brakes will be wet',
            },
            {
                char: 'c',
                text: "You'll be going down a long hill",
            },
            {
                char: 'd',
                text: "You'll have just crossed a long bridge",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2822',
        topicCode: 'vehicle_handling',
        question:
            "Why should you reduce your speed when you're driving or riding in fog?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "The brakes don't work as well",
            },
            {
                char: 'b',
                text: "You'll be dazzled by other headlights",
            },
            {
                char: 'c',
                text: 'The engine will take longer to warm up',
            },
            {
                char: 'd',
                text: "It's more difficult to see what's ahead",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1166',
        topicCode: 'vehicle_handling',
        question:
            'What will happen to your car when you drive up a steep hill?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The high gears will pull better',
            },
            {
                char: 'b',
                text: 'The steering will feel heavier',
            },
            {
                char: 'c',
                text: 'Overtaking will be easier',
            },
            {
                char: 'd',
                text: 'The engine will work harder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1168',
        topicCode: 'vehicle_handling',
        question:
            "You're driving on the motorway in windy conditions. What should you do as you overtake a high-sided vehicle?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increase your speed',
            },
            {
                char: 'b',
                text: 'Be wary of a sudden gust',
            },
            {
                char: 'c',
                text: 'Drive alongside very closely',
            },
            {
                char: 'd',
                text: 'Expect normal conditions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1177',
        topicCode: 'vehicle_handling',
        question:
            "You're driving in fog. Why should you keep well back from the vehicle in front?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'In case it changes direction suddenly',
            },
            {
                char: 'b',
                text: 'In case its fog lights dazzle you',
            },
            {
                char: 'c',
                text: 'In case it stops suddenly',
            },
            {
                char: 'd',
                text: 'In case its brake lights dazzle you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1181',
        topicCode: 'vehicle_handling',
        question: "What should you do if you park on the road when it's foggy?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Leave parking lights switched on',
            },
            {
                char: 'b',
                text: 'Leave dipped headlights and fog lights switched on',
            },
            {
                char: 'c',
                text: 'Leave dipped headlights switched on',
            },
            {
                char: 'd',
                text: 'Leave main-beam headlights switched on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1186',
        topicCode: 'vehicle_handling',
        question:
            "You're driving at night. What should you do if you're dazzled by headlights coming towards you?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Pull down your sun visor',
            },
            {
                char: 'b',
                text: 'Slow down or stop',
            },
            {
                char: 'c',
                text: 'Flash your main-beam headlights',
            },
            {
                char: 'd',
                text: 'Shade your eyes with your hand',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1325',
        topicCode: 'vehicle_handling',
        question: 'When may front fog lights be used?',
        questionImg: '85BW3359.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When visibility is seriously reduced',
            },
            {
                char: 'b',
                text: "When they're fitted above the bumper",
            },
            {
                char: 'c',
                text: "When they aren't as bright as the headlights",
            },
            {
                char: 'd',
                text: 'When an audible warning device is used',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1330',
        topicCode: 'vehicle_handling',
        question:
            "You're driving with your front fog lights switched on. What should you do if the fog has cleared?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Leave them on if other drivers have their lights on',
            },
            {
                char: 'b',
                text: 'Switch them off as long as visibility remains good',
            },
            {
                char: 'c',
                text: "Flash them to warn oncoming traffic that it's foggy",
            },
            {
                char: 'd',
                text: 'Drive with them on instead of your headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1339',
        topicCode: 'vehicle_handling',
        question:
            'Why should you switch off your rear fog lights when the fog has cleared?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To allow your headlights to work',
            },
            {
                char: 'b',
                text: 'To stop draining the battery',
            },
            {
                char: 'c',
                text: 'To stop the engine losing power',
            },
            {
                char: 'd',
                text: 'To prevent dazzling drivers behind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1343',
        topicCode: 'vehicle_handling',
        question:
            'What will happen if you use rear fog lights in good conditions?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "They'll make it safer when towing a trailer",
            },
            {
                char: 'b',
                text: "They'll protect you from larger vehicles",
            },
            {
                char: 'c',
                text: "They'll dazzle other drivers",
            },
            {
                char: 'd',
                text: "They'll make drivers behind keep back",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1400',
        topicCode: 'vehicle_handling',
        question: 'Why would you fit chains to your wheels?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To help prevent damage to the road surface',
            },
            {
                char: 'b',
                text: 'To help prevent wear to the tyres',
            },
            {
                char: 'c',
                text: 'To help prevent skidding in deep snow',
            },
            {
                char: 'd',
                text: 'To help prevent the brakes locking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1408',
        topicCode: 'vehicle_handling',
        question:
            "How can you use your vehicle's engine to control your speed?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By changing to a lower gear',
            },
            {
                char: 'b',
                text: 'By selecting reverse gear',
            },
            {
                char: 'c',
                text: 'By changing to a higher gear',
            },
            {
                char: 'd',
                text: 'By selecting neutral',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1433',
        topicCode: 'vehicle_handling',
        question:
            "Why could it be dangerous to keep the clutch down, or select neutral, for long periods of time while you're driving?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Fuel spillage will occur',
            },
            {
                char: 'b',
                text: 'Engine damage may be caused',
            },
            {
                char: 'c',
                text: "You'll have less steering and braking control",
            },
            {
                char: 'd',
                text: 'It will wear tyres out more quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1470',
        topicCode: 'vehicle_handling',
        question:
            "You're driving on an icy road. What distance from the car in front should you drive?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Four times the normal distance',
            },
            {
                char: 'b',
                text: 'Six times the normal distance',
            },
            {
                char: 'c',
                text: 'Eight times the normal distance',
            },
            {
                char: 'd',
                text: 'Ten times the normal distance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1473',
        topicCode: 'vehicle_handling',
        question:
            "Which lights must you use if you're driving on a well-lit motorway at night?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use only your sidelights',
            },
            {
                char: 'b',
                text: 'Use your headlights',
            },
            {
                char: 'c',
                text: 'Use rear fog lights',
            },
            {
                char: 'd',
                text: 'Use front fog lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1474',
        topicCode: 'vehicle_handling',
        question:
            "You're driving on a motorway at night. Which lights should you have on if there are other vehicles just ahead of you?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Front fog lights',
            },
            {
                char: 'b',
                text: 'Main-beam headlights',
            },
            {
                char: 'c',
                text: 'Sidelights only',
            },
            {
                char: 'd',
                text: 'Dipped headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1518',
        topicCode: 'vehicle_handling',
        question: "What will affect your vehicle's stopping distance?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The speed limit',
            },
            {
                char: 'b',
                text: 'The street lighting',
            },
            {
                char: 'c',
                text: 'The time of day',
            },
            {
                char: 'd',
                text: 'The condition of the tyres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1579',
        topicCode: 'vehicle_handling',
        question: 'When will you feel the effects of engine braking?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you only use the parking brake',
            },
            {
                char: 'b',
                text: "When you're in neutral",
            },
            {
                char: 'c',
                text: 'When you change to a lower gear',
            },
            {
                char: 'd',
                text: 'When you change to a higher gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1597',
        topicCode: 'vehicle_handling',
        question:
            'Which lights should you switch on when daytime visibility is poor but not seriously reduced?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Headlights and fog lights',
            },
            {
                char: 'b',
                text: 'Front fog lights',
            },
            {
                char: 'c',
                text: 'Dipped headlights',
            },
            {
                char: 'd',
                text: 'Rear fog lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1598',
        topicCode: 'vehicle_handling',
        question: 'Why are vehicles fitted with rear fog lights?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To make them more visible when driving at high speed',
            },
            {
                char: 'b',
                text: "To show when they've broken down in a dangerous position",
            },
            {
                char: 'c',
                text: 'To make them more visible in thick fog',
            },
            {
                char: 'd',
                text: 'To warn drivers following closely to drop back',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1621',
        topicCode: 'vehicle_handling',
        question:
            "There's been a heavy fall of snow. What should you consider before driving in these conditions?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Whether you should fit an amber flashing beacon to your car',
            },
            {
                char: 'b',
                text: 'Whether you should drive without wearing your seat belt',
            },
            {
                char: 'c',
                text: 'Whether you should wear sunglasses to reduce the glare',
            },
            {
                char: 'd',
                text: 'Whether your journey is essential',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1682',
        topicCode: 'vehicle_handling',
        question:
            'What should you check before you start a journey in foggy weather?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The radiator has enough anti-freeze',
            },
            {
                char: 'b',
                text: 'You have a warning triangle in the vehicle',
            },
            {
                char: 'c',
                text: 'The windows and lights are clean and clear',
            },
            {
                char: 'd',
                text: 'You have a mobile phone with you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1683',
        topicCode: 'vehicle_handling',
        question:
            "You've been driving in fog. What must you do when the visibility improves?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch off your fog lights',
            },
            {
                char: 'b',
                text: 'Keep your rear fog lights switched on',
            },
            {
                char: 'c',
                text: 'Keep your front fog lights switched on',
            },
            {
                char: 'd',
                text: 'Leave your fog lights switched on in case the fog returns',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1685',
        topicCode: 'vehicle_handling',
        question:
            'Why is it dangerous to leave rear fog lights switched on after the fog has cleared?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They may be confused with brake lights',
            },
            {
                char: 'b',
                text: 'The bulbs would fail',
            },
            {
                char: 'c',
                text: 'Electrical systems could be overloaded',
            },
            {
                char: 'd',
                text: 'Direction indicators may not work properly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1686',
        topicCode: 'vehicle_handling',
        question:
            'What will happen if you hold the clutch pedal down or roll in neutral for too long?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It will use more fuel',
            },
            {
                char: 'b',
                text: 'It will cause the engine to overheat',
            },
            {
                char: 'c',
                text: 'It will reduce your control',
            },
            {
                char: 'd',
                text: 'It will improve tyre wear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1717',
        topicCode: 'vehicle_handling',
        question:
            "Why is it bad technique to coast when you're driving downhill?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The fuel consumption will increase',
            },
            {
                char: 'b',
                text: 'The engine will overheat',
            },
            {
                char: 'c',
                text: 'The tyres will wear more quickly',
            },
            {
                char: 'd',
                text: 'The vehicle will gain speed more quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1718',
        topicCode: 'vehicle_handling',
        question: 'What should you do when dealing with this hazard?',
        questionImg: 'TS4516.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Switch on your hazard warning lights',
            },
            {
                char: 'b',
                text: 'Use a low gear and drive slowly',
            },
            {
                char: 'c',
                text: 'Use a high gear to prevent wheelspin',
            },
            {
                char: 'd',
                text: 'Switch on your windscreen wipers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1744',
        topicCode: 'vehicle_handling',
        question:
            'Why is travelling in neutral for long distances (known as coasting) bad driving technique?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It will cause the car to skid',
            },
            {
                char: 'b',
                text: 'It will make the engine stall',
            },
            {
                char: 'c',
                text: 'The engine will run faster',
            },
            {
                char: 'd',
                text: "There won't be any engine braking",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1749',
        topicCode: 'vehicle_handling',
        question: 'When must you use dipped headlights during the day?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "All the time you're driving",
            },
            {
                char: 'b',
                text: "When you're driving along narrow streets",
            },
            {
                char: 'c',
                text: "When you're driving in poor visibility",
            },
            {
                char: 'd',
                text: "When you're parking",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2219',
        topicCode: 'motorway_rules',
        question:
            "You're joining a motorway from a slip road. How should you deal with traffic already on the motorway?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Carry on along the hard shoulder until you see a safe gap',
            },
            {
                char: 'b',
                text: 'Stop at the end of the slip road and look for a safe gap',
            },
            {
                char: 'c',
                text: "Use the slip road to accelerate until you're moving much faster than the motorway traffic",
            },
            {
                char: 'd',
                text: 'Match your speed to traffic in the left-hand lane and filter into a safe gap',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2222',
        topicCode: 'motorway_rules',
        question:
            "What's the national speed limit on motorways for cars and motorcycles?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '30 mph',
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
        code: 'AB2223',
        topicCode: 'motorway_rules',
        question:
            'Which vehicles should use the left-hand lane on a three-lane motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "Any vehicle that isn't overtaking",
            },
            {
                char: 'b',
                text: 'Large vehicles only',
            },
            {
                char: 'c',
                text: 'Emergency vehicles only',
            },
            {
                char: 'd',
                text: 'Slow vehicles only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2225',
        topicCode: 'motorway_rules',
        question:
            "Which vehicles aren't allowed to use the right-hand lane of a three-lane motorway?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Small delivery vans',
            },
            {
                char: 'b',
                text: 'Motorcycles',
            },
            {
                char: 'c',
                text: 'Vehicles towing a trailer',
            },
            {
                char: 'd',
                text: 'Motorcycle and sidecar outfits',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2232',
        topicCode: 'motorway_rules',
        question:
            'Your vehicle breaks down on a motorway and you need to call for help. Why might it be better to use an emergency roadside telephone rather than a mobile phone?',
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
                text: "Mobile phones don't work on motorways",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2236',
        topicCode: 'motorway_rules',
        question:
            'Your vehicle broke down on the hard shoulder of a motorway, but has now been repaired. How should you rejoin the main carriageway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move out onto the carriageway, then build up your speed',
            },
            {
                char: 'b',
                text: 'Move out onto the carriageway using your hazard warning lights',
            },
            {
                char: 'c',
                text: 'Gain speed on the hard shoulder before moving out onto the carriageway',
            },
            {
                char: 'd',
                text: 'Wait on the hard shoulder until someone flashes their headlights at you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2237',
        topicCode: 'motorway_rules',
        question:
            "You're travelling along a motorway. Where would you find a crawler or climbing lane?",
        questionImg: 'TS4503.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On a steep gradient',
            },
            {
                char: 'b',
                text: 'Before a service area',
            },
            {
                char: 'c',
                text: 'Before a junction',
            },
            {
                char: 'd',
                text: 'Along the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2241',
        topicCode: 'motorway_rules',
        question: 'What do these motorway signs mean?',
        questionImg: 'TS4049.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "They're countdown markers to a bridge",
            },
            {
                char: 'b',
                text: "They're distance markers to the next telephone",
            },
            {
                char: 'c',
                text: "They're countdown markers to the next exit",
            },
            {
                char: 'd',
                text: 'They warn of a police control ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2242',
        topicCode: 'motorway_rules',
        question: 'Where are amber reflective studs found on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Between the hard shoulder and the carriageway',
            },
            {
                char: 'b',
                text: 'Between the acceleration lane and the carriageway',
            },
            {
                char: 'c',
                text: 'Between the central reservation and the carriageway',
            },
            {
                char: 'd',
                text: 'Between each pair of lanes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2243',
        topicCode: 'motorway_rules',
        question:
            'What colour are the reflective studs between the lanes on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Green',
            },
            {
                char: 'b',
                text: 'Amber',
            },
            {
                char: 'c',
                text: 'White',
            },
            {
                char: 'd',
                text: 'Red',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2244',
        topicCode: 'motorway_rules',
        question:
            'What colour are the reflective studs between a motorway and a slip road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Amber',
            },
            {
                char: 'b',
                text: 'White',
            },
            {
                char: 'c',
                text: 'Green',
            },
            {
                char: 'd',
                text: 'Red',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2525',
        topicCode: 'motorway_rules',
        question:
            'Your vehicle has broken down on a motorway. In which direction should you walk to find the nearest emergency telephone?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'With the traffic flow',
            },
            {
                char: 'b',
                text: 'Facing oncoming traffic',
            },
            {
                char: 'c',
                text: 'In the direction shown on the marker posts',
            },
            {
                char: 'd',
                text: 'In the direction of the nearest exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2573',
        topicCode: 'motorway_rules',
        question:
            'Why is it important to make full use of the slip road as you join a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "Because there's space available to turn round if you need to",
            },
            {
                char: 'b',
                text: 'To allow you direct access to the overtaking lanes',
            },
            {
                char: 'c',
                text: 'To allow you to fit safely into the traffic flow in the left-hand lane',
            },
            {
                char: 'd',
                text: 'Because you can continue on the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2575',
        topicCode: 'motorway_rules',
        question:
            'How should you position yourself when you use the emergency telephone on a motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stay close to the carriageway',
            },
            {
                char: 'b',
                text: 'Face the oncoming traffic',
            },
            {
                char: 'c',
                text: 'Keep your back to the traffic',
            },
            {
                char: 'd',
                text: 'Stand on the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2576',
        topicCode: 'motorway_rules',
        question:
            'What colour are the reflective studs between the hard shoulder and the left-hand lane of a motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Green',
            },
            {
                char: 'b',
                text: 'Red',
            },
            {
                char: 'c',
                text: 'White',
            },
            {
                char: 'd',
                text: 'Amber',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2609',
        topicCode: 'motorway_rules',
        question:
            "On a three-lane motorway, which lane should you use if there's no traffic ahead?",
        answer: 'a',
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
                text: 'Centre',
            },
            {
                char: 'd',
                text: 'Either the right or centre',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2611',
        topicCode: 'motorway_rules',
        question:
            'What should you do when going through a contraflow system on a motorway?',
        questionImg: 'TS4578.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use dipped headlights',
            },
            {
                char: 'b',
                text: 'Keep a good distance from the vehicle ahead',
            },
            {
                char: 'c',
                text: 'Switch lanes to keep the traffic flowing',
            },
            {
                char: 'd',
                text: 'Stay close to the vehicle ahead to reduce queues',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2612',
        topicCode: 'motorway_rules',
        question:
            "You're on a three-lane motorway. Which lane are you in if there are red reflective studs on your left and white ones to your right?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'In the right-hand lane',
            },
            {
                char: 'b',
                text: 'In the middle lane',
            },
            {
                char: 'c',
                text: 'On the hard shoulder',
            },
            {
                char: 'd',
                text: 'In the left-hand lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2694',
        topicCode: 'motorway_rules',
        question:
            "What should you do when you're approaching roadworks on a motorway?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Speed up to clear the area quickly',
            },
            {
                char: 'b',
                text: 'Always use the hard shoulder',
            },
            {
                char: 'c',
                text: 'Obey the speed limit',
            },
            {
                char: 'd',
                text: 'Stay very close to the vehicle in front',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2743',
        topicCode: 'motorway_rules',
        question: 'Which vehicles are prohibited from using the motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Powered mobility scooters',
            },
            {
                char: 'b',
                text: 'Motorcycles over 50 cc',
            },
            {
                char: 'c',
                text: 'Double-deck buses',
            },
            {
                char: 'd',
                text: 'Cars with automatic transmission',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2744',
        topicCode: 'motorway_rules',
        question:
            "What should you do while you're driving or riding along a motorway?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Look much further ahead than you would on other roads',
            },
            {
                char: 'b',
                text: 'Travel much faster than you would on other roads',
            },
            {
                char: 'c',
                text: 'Maintain a shorter separation distance than you would on other roads',
            },
            {
                char: 'd',
                text: 'Concentrate more than you would on other roads',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2745',
        topicCode: 'motorway_rules',
        question: 'What should you do immediately after joining a motorway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Try to overtake',
            },
            {
                char: 'b',
                text: 'Re-adjust your mirrors',
            },
            {
                char: 'c',
                text: 'Position your vehicle in the centre lane',
            },
            {
                char: 'd',
                text: 'Stay in the left-hand lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2746',
        topicCode: 'motorway_rules',
        question:
            'When would you use the right-hand lane on a three-lane motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "When you're turning right",
            },
            {
                char: 'b',
                text: "When you're overtaking",
            },
            {
                char: 'c',
                text: "When you're travelling above the speed limit",
            },
            {
                char: 'd',
                text: "When you're trying to save fuel",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2747',
        topicCode: 'motorway_rules',
        question:
            "You're on a motorway that isn't subject to smart motorway regulations. When should you use the hard shoulder?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "When you're stopping in an emergency",
            },
            {
                char: 'b',
                text: "When you're leaving the motorway",
            },
            {
                char: 'c',
                text: "When you're stopping for a rest",
            },
            {
                char: 'd',
                text: "When you're joining the motorway",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2748',
        topicCode: 'motorway_rules',
        question:
            "You're in the right-hand lane of a three-lane motorway. What do these overhead signs mean?",
        questionImg: 'TS4063.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Move to the left and reduce your speed to 50 mph',
            },
            {
                char: 'b',
                text: 'There are roadworks 50 metres (55 yards) ahead',
            },
            {
                char: 'c',
                text: "Use the hard shoulder until you've passed the hazard",
            },
            {
                char: 'd',
                text: 'Leave the motorway at the next exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2749',
        topicCode: 'motorway_rules',
        question: 'When are you allowed to stop on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you need to walk and get fresh air',
            },
            {
                char: 'b',
                text: 'When you wish to pick up hitchhikers',
            },
            {
                char: 'c',
                text: "When you're signalled to do so by traffic signals",
            },
            {
                char: 'd',
                text: 'When you need to use a mobile telephone',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2750',
        topicCode: 'motorway_rules',
        question:
            "You're travelling in the left-hand lane of a three-lane motorway. How should you react to traffic joining from a slip road?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increase your speed to ensure they join behind you',
            },
            {
                char: 'b',
                text: 'Adjust your speed or change lane if you can do so safely',
            },
            {
                char: 'c',
                text: 'Maintain a steady speed',
            },
            {
                char: 'd',
                text: 'Switch on your hazard warning lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2751',
        topicCode: 'motorway_rules',
        question: 'How should you use the lanes on a motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the lane that has the least traffic',
            },
            {
                char: 'b',
                text: "Keep to the left-hand lane unless you're overtaking",
            },
            {
                char: 'c',
                text: 'Overtake using the lane that’s clearest',
            },
            {
                char: 'd',
                text: 'Stay in one lane until you reach your exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2752',
        topicCode: 'motorway_rules',
        question:
            "You're travelling along a motorway. When are you allowed to overtake on the left?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you can see well ahead that the hard shoulder is clear',
            },
            {
                char: 'b',
                text: 'When the traffic in the right-hand lane is signalling right',
            },
            {
                char: 'c',
                text: 'When you warn drivers behind by signalling left',
            },
            {
                char: 'd',
                text: 'When in queues and traffic to your right is moving more slowly than you are',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2786',
        topicCode: 'motorway_rules',
        question:
            'When would you use an emergency refuge area on a smart motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In cases of emergency or breakdown',
            },
            {
                char: 'b',
                text: "If you think you'll be involved in a road rage incident",
            },
            {
                char: 'c',
                text: 'To stop and check where you are',
            },
            {
                char: 'd',
                text: 'To make a private phone call',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2788',
        topicCode: 'motorway_rules',
        question:
            'Traffic officers operate on motorways and some primary routes in England and Wales. What are they authorised to do?',
        questionImg: 'IMG_1666.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop and arrest drivers who break the law',
            },
            {
                char: 'b',
                text: 'Repair broken-down vehicles on the motorway',
            },
            {
                char: 'c',
                text: 'Issue fixed penalty notices',
            },
            {
                char: 'd',
                text: 'Stop and direct anyone on a motorway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2789',
        topicCode: 'motorway_rules',
        question:
            "You're on a smart motorway. What does it mean when a red cross is displayed above the hard shoulder?",
        questionImg: 'TS4748.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Pull up in this lane to answer your mobile phone',
            },
            {
                char: 'b',
                text: 'Use this lane as a running lane',
            },
            {
                char: 'c',
                text: 'This lane can be used if you need a rest',
            },
            {
                char: 'd',
                text: "You shouldn't travel in this lane",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2790',
        topicCode: 'motorway_rules',
        question:
            "You're on a smart motorway. What does it mean when a mandatory speed limit is displayed above the hard shoulder?",
        questionImg: 'TS4747.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "You shouldn't travel in this lane",
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
                text: 'You can pull up in this lane to answer a mobile phone',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2792',
        topicCode: 'motorway_rules',
        question: 'How do smart motorways prevent traffic bunching?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'By using higher speed limits',
            },
            {
                char: 'b',
                text: 'By using advisory speed limits',
            },
            {
                char: 'c',
                text: 'By using minimum speed limits',
            },
            {
                char: 'd',
                text: 'By using variable speed limits',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2839',
        topicCode: 'motorway_rules',
        question: 'What helps to reduce traffic bunching on a motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Variable speed limits',
            },
            {
                char: 'b',
                text: 'Contraflow systems',
            },
            {
                char: 'c',
                text: 'National speed limits',
            },
            {
                char: 'd',
                text: 'Lane closures',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2843',
        topicCode: 'motorway_rules',
        question: 'When may you stop on a motorway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'If you have to read a map',
            },
            {
                char: 'b',
                text: "When you're tired and need a rest",
            },
            {
                char: 'c',
                text: 'If your mobile phone rings',
            },
            {
                char: 'd',
                text: 'In an emergency or breakdown',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2845',
        topicCode: 'motorway_rules',
        question:
            "What's the national speed limit for a car or motorcycle on a motorway?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '50 mph',
            },
            {
                char: 'b',
                text: '60 mph',
            },
            {
                char: 'c',
                text: '70 mph',
            },
            {
                char: 'd',
                text: '80 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2846',
        topicCode: 'motorway_rules',
        question:
            "You stop on the hard shoulder of a motorway and use the emergency telephone. Where's the best place to wait for help to arrive?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Next to the phone',
            },
            {
                char: 'b',
                text: 'Well away from the carriageway',
            },
            {
                char: 'c',
                text: 'With your vehicle',
            },
            {
                char: 'd',
                text: 'On the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2852',
        topicCode: 'motorway_rules',
        question:
            "You're on a motorway. What must you do if there's a red cross showing above every lane?",
        questionImg: 'Gantry_cross_all_lanes.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Pull onto the hard shoulder',
            },
            {
                char: 'b',
                text: 'Slow down and watch for further signals',
            },
            {
                char: 'c',
                text: 'Leave at the next exit',
            },
            {
                char: 'd',
                text: 'Stop and wait',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2856',
        topicCode: 'motorway_rules',
        question:
            "You're on a smart motorway. What does it mean if a red cross is showing above the hard shoulder and mandatory speed limits above all other lanes?",
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
                text: 'The hard shoulder can be used as a normal running lane',
            },
            {
                char: 'd',
                text: 'The hard shoulder has a speed limit of 50 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2857',
        topicCode: 'motorway_rules',
        question: 'On a smart motorway, what does this sign mean?',
        questionImg: 'TS4750.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Use any lane except the hard shoulder',
            },
            {
                char: 'b',
                text: 'Use the hard shoulder only',
            },
            {
                char: 'c',
                text: 'Use the three right-hand lanes only',
            },
            {
                char: 'd',
                text: 'Use all the lanes, including the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2882',
        topicCode: 'motorway_rules',
        question:
            "Where should you stop to rest if you feel tired while you're travelling along a motorway?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On the hard shoulder',
            },
            {
                char: 'b',
                text: 'At the nearest service area',
            },
            {
                char: 'c',
                text: 'On a slip road',
            },
            {
                char: 'd',
                text: 'On the central reservation',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1193',
        topicCode: 'motorway_rules',
        question:
            "What's the speed limit for a car towing a trailer on a motorway?",
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
        code: 'BB1197',
        topicCode: 'motorway_rules',
        question: 'When should you use the left-hand lane of a motorway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When your vehicle breaks down',
            },
            {
                char: 'b',
                text: "When you're overtaking slower traffic in the other lanes",
            },
            {
                char: 'c',
                text: "When you're making a phone call",
            },
            {
                char: 'd',
                text: 'When the road ahead is clear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1198',
        topicCode: 'motorway_rules',
        question:
            "You're driving on a motorway and have to slow down suddenly due to a hazard ahead. How can you warn drivers behind of the hazard?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch on your hazard warning lights',
            },
            {
                char: 'b',
                text: 'Switch on your headlights',
            },
            {
                char: 'c',
                text: 'Sound your horn',
            },
            {
                char: 'd',
                text: 'Flash your headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1199',
        topicCode: 'motorway_rules',
        question:
            "Your car gets a puncture while you're driving on the motorway. What should you do when you've stopped on the hard shoulder?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Carefully change the wheel yourself',
            },
            {
                char: 'b',
                text: 'Use an emergency telephone and call for help',
            },
            {
                char: 'c',
                text: 'Try to wave down another vehicle for help',
            },
            {
                char: 'd',
                text: 'Only change the wheel if you have a passenger to help you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1204',
        topicCode: 'motorway_rules',
        question:
            "What should you do if you're driving on a motorway and you miss the exit that you wanted to take?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Carefully reverse along the hard shoulder',
            },
            {
                char: 'b',
                text: 'Carry on to the next exit',
            },
            {
                char: 'c',
                text: 'Carefully reverse in the left-hand lane',
            },
            {
                char: 'd',
                text: 'Make a U-turn at the next gap in the central reservation',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1481',
        topicCode: 'motorway_rules',
        question:
            "Your vehicle has broken down on a motorway. What should you do if you aren't able to get onto the hard shoulder?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch on your hazard warning lights',
            },
            {
                char: 'b',
                text: 'Stop the traffic behind and ask for help',
            },
            {
                char: 'c',
                text: 'Attempt to repair your vehicle quickly',
            },
            {
                char: 'd',
                text: 'Stand behind your vehicle to warn others',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1520',
        topicCode: 'motorway_rules',
        question:
            'Why is it particularly important to check your vehicle before making a long motorway journey?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "You'll have to do more harsh braking on motorways",
            },
            {
                char: 'b',
                text: "Motorway services areas don't deal with breakdowns",
            },
            {
                char: 'c',
                text: 'The road surface will wear down the tyres faster',
            },
            {
                char: 'd',
                text: 'Continuous high speeds increase the risk of your vehicle breaking down',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1523',
        topicCode: 'motorway_rules',
        question:
            "You're driving on a motorway. What does it mean if the car in front shows its hazard warning lights for a short time?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The driver wants you to overtake',
            },
            {
                char: 'b',
                text: 'The other car is going to change lanes',
            },
            {
                char: 'c',
                text: 'Traffic ahead is slowing or stopping suddenly',
            },
            {
                char: 'd',
                text: "There's a police speed check ahead",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1525',
        topicCode: 'motorway_rules',
        question:
            "You're driving on the motorway. Which lane should you get into well before you reach your exit?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The middle lane',
            },
            {
                char: 'b',
                text: 'The left-hand lane',
            },
            {
                char: 'c',
                text: 'The hard shoulder',
            },
            {
                char: 'd',
                text: 'The right-hand lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1618',
        topicCode: 'motorway_rules',
        question:
            'What restrictions apply to people who have a provisional driving licence?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "They can't drive over 30 mph",
            },
            {
                char: 'b',
                text: "They can't drive at night",
            },
            {
                char: 'c',
                text: "They can't drive unaccompanied",
            },
            {
                char: 'd',
                text: "They can't drive with more than one passenger",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1688',
        topicCode: 'motorway_rules',
        question:
            'Your vehicle breaks down on a motorway and you manage to stop on the hard shoulder. What should you do if you use your mobile phone to call for help?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stand at the rear of the vehicle while making the call',
            },
            {
                char: 'b',
                text: 'Phone a friend and ask them to come and collect you',
            },
            {
                char: 'c',
                text: 'Wait in the car for the emergency services to arrive',
            },
            {
                char: 'd',
                text: 'Check your location from the nearest marker posts beside the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1689',
        topicCode: 'motorway_rules',
        question:
            "You're towing a trailer along a three-lane motorway. When may you use the right-hand lane?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When there are lane closures',
            },
            {
                char: 'b',
                text: "When there's slow-moving traffic",
            },
            {
                char: 'c',
                text: 'When you can maintain a high speed',
            },
            {
                char: 'd',
                text: 'When large vehicles are in the left and centre lanes',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'BB1690',
        topicCode: 'motorway_rules',
        question:
            'What would you expect to find at a contraflow system on a motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Temporary traffic lights',
            },
            {
                char: 'b',
                text: 'Lower speed limits',
            },
            {
                char: 'c',
                text: 'Wider lanes than normal',
            },
            {
                char: 'd',
                text: 'Road humps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2246',
        topicCode: 'rules_of_the_road',
        question: "What's the meaning of this sign?",
        questionImg: 'TS4675.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Local speed limit applies',
            },
            {
                char: 'b',
                text: 'No waiting on the carriageway',
            },
            {
                char: 'c',
                text: 'National speed limit applies',
            },
            {
                char: 'd',
                text: 'No entry for vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2248',
        topicCode: 'rules_of_the_road',
        question:
            "What's the national speed limit for cars and motorcycles on a dual carriageway?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '30 mph',
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
        code: 'AB2249',
        topicCode: 'rules_of_the_road',
        question:
            'There are no speed-limit signs on the road. How is a 30 mph limit generally indicated?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By hazard warning lines',
            },
            {
                char: 'b',
                text: 'By street lighting',
            },
            {
                char: 'c',
                text: 'By pedestrian islands',
            },
            {
                char: 'd',
                text: 'By double or single yellow lines',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2250',
        topicCode: 'rules_of_the_road',
        question:
            'What will the speed limit usually be where you can see street lights but no speed-limit signs?',
        answer: 'a',
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
        isNIExempts: false,
    },
    {
        code: 'AB2254',
        topicCode: 'rules_of_the_road',
        question: 'What does this sign mean?',
        questionImg: 'TS4698.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Minimum speed 30 mph',
            },
            {
                char: 'b',
                text: 'End of maximum speed',
            },
            {
                char: 'c',
                text: 'End of minimum speed',
            },
            {
                char: 'd',
                text: 'Maximum speed 30 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2255',
        topicCode: 'rules_of_the_road',
        question:
            "What should you do if you want to overtake a tractor but aren't sure that it's safe?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Follow another vehicle as it overtakes the tractor',
            },
            {
                char: 'b',
                text: 'Sound your horn to make the tractor driver pull over',
            },
            {
                char: 'c',
                text: 'Speed past, flashing your lights at oncoming traffic',
            },
            {
                char: 'd',
                text: "Stay behind it if you're in any doubt",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2256',
        topicCode: 'rules_of_the_road',
        question:
            'Which vehicle is most likely to take an unusual course at a roundabout?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Estate car',
            },
            {
                char: 'b',
                text: 'Milk float',
            },
            {
                char: 'c',
                text: 'Delivery van',
            },
            {
                char: 'd',
                text: 'Long vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2262',
        topicCode: 'rules_of_the_road',
        question: 'When may you stop on a clearway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Never',
            },
            {
                char: 'b',
                text: "When it's busy",
            },
            {
                char: 'c',
                text: 'In the rush hour',
            },
            {
                char: 'd',
                text: 'During daylight hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2264',
        topicCode: 'rules_of_the_road',
        question: "What's the meaning of this sign?",
        questionImg: 'TS4690.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'No entry',
            },
            {
                char: 'b',
                text: 'Waiting restrictions',
            },
            {
                char: 'c',
                text: 'National speed limit',
            },
            {
                char: 'd',
                text: 'School crossing patrol',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2268',
        topicCode: 'rules_of_the_road',
        question:
            "You're looking for somewhere to park at night. When may you park on the right-hand side of the road?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "When you're in a one-way street",
            },
            {
                char: 'b',
                text: 'When you have your sidelights on',
            },
            {
                char: 'c',
                text: "When you're more than 10 metres (32 feet) from a junction",
            },
            {
                char: 'd',
                text: "When you're under a lamppost",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2269',
        topicCode: 'rules_of_the_road',
        question:
            'When should you use the right-hand lane of a three-lane dual carriageway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "When you're overtaking only",
            },
            {
                char: 'b',
                text: "When you're overtaking or turning right",
            },
            {
                char: 'c',
                text: "When you're using cruise control",
            },
            {
                char: 'd',
                text: "When you're turning right only",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2272',
        topicCode: 'rules_of_the_road',
        question:
            "You're approaching a busy junction. What should you do when, at the last moment, you realise you're in the wrong lane?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Continue in that lane',
            },
            {
                char: 'b',
                text: 'Force your way into the lane you need',
            },
            {
                char: 'c',
                text: 'Stop until the area has cleared',
            },
            {
                char: 'd',
                text: 'Use arm signals to help you change lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2273',
        topicCode: 'rules_of_the_road',
        question: 'Where may you overtake on a one-way street?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only on the left-hand side',
            },
            {
                char: 'b',
                text: "Overtaking isn't allowed",
            },
            {
                char: 'c',
                text: 'Only on the right-hand side',
            },
            {
                char: 'd',
                text: 'On either the right or the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2275',
        topicCode: 'rules_of_the_road',
        question:
            "What signal should you give when you're going straight ahead at a roundabout?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Signal left before leaving the roundabout',
            },
            {
                char: 'b',
                text: "Don't signal at any time",
            },
            {
                char: 'c',
                text: "Signal right when you're approaching the roundabout",
            },
            {
                char: 'd',
                text: "Signal left when you're approaching the roundabout",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2276',
        topicCode: 'rules_of_the_road',
        question:
            'Which vehicle might have to take a different course from normal at a roundabout?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sports car',
            },
            {
                char: 'b',
                text: 'Van',
            },
            {
                char: 'c',
                text: 'Estate car',
            },
            {
                char: 'd',
                text: 'Long vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2281',
        topicCode: 'rules_of_the_road',
        question: 'When may you enter a box junction?',
        questionImg: '85BW1216.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When there are fewer than two vehicles ahead',
            },
            {
                char: 'b',
                text: 'When signalled by another road user',
            },
            {
                char: 'c',
                text: 'When your exit road is clear',
            },
            {
                char: 'd',
                text: 'When traffic signs direct you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2282',
        topicCode: 'rules_of_the_road',
        question: 'When may you stop and wait in a box junction?',
        questionImg: '85BW1216.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When oncoming traffic prevents you from turning right',
            },
            {
                char: 'b',
                text: "When you're in a queue of traffic turning left",
            },
            {
                char: 'c',
                text: "When you're in a queue of traffic going ahead",
            },
            {
                char: 'd',
                text: "When you're on a roundabout",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2284',
        topicCode: 'rules_of_the_road',
        question: 'Who is authorised to signal you to stop?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A motorcyclist',
            },
            {
                char: 'b',
                text: 'A pedestrian',
            },
            {
                char: 'c',
                text: 'A police officer',
            },
            {
                char: 'd',
                text: 'A bus driver',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2288',
        topicCode: 'rules_of_the_road',
        question:
            'What should you do if you see a pedestrian waiting at a zebra crossing?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Go on quickly before they step onto the crossing',
            },
            {
                char: 'b',
                text: 'Stop before you reach the zigzag lines and let them cross',
            },
            {
                char: 'c',
                text: 'Be ready to slow down or stop to let them cross',
            },
            {
                char: 'd',
                text: "Ignore them as they're still on the pavement",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2290',
        topicCode: 'rules_of_the_road',
        question: 'Which road users benefit from toucan crossings?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Car drivers and motorcyclists',
            },
            {
                char: 'b',
                text: 'Cyclists and pedestrians',
            },
            {
                char: 'c',
                text: 'Bus and lorry drivers',
            },
            {
                char: 'd',
                text: 'Tram and train drivers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2292',
        topicCode: 'rules_of_the_road',
        question:
            'You’re waiting at a pelican crossing. What does it mean when the red light changes to flashing amber?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Give way to pedestrians on the crossing',
            },
            {
                char: 'b',
                text: 'Move off immediately without any hesitation',
            },
            {
                char: 'c',
                text: 'Wait for the green light before moving off',
            },
            {
                char: 'd',
                text: 'Get ready and go when the continuous amber light shows',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2528',
        topicCode: 'rules_of_the_road',
        question:
            'You see these double white lines along the centre of the road. When may you park on the left?',
        questionImg: 'IMG_1873.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'If the line nearest to you is broken',
            },
            {
                char: 'b',
                text: 'When there are no yellow lines',
            },
            {
                char: 'c',
                text: 'To pick up or set down passengers',
            },
            {
                char: 'd',
                text: 'During daylight hours only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2577',
        topicCode: 'rules_of_the_road',
        question:
            "You're turning right at a crossroads. An oncoming driver is also turning right. What's the advantage of turning behind the oncoming vehicle?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "You'll have a clearer view of any approaching traffic",
            },
            {
                char: 'b',
                text: "You'll use less fuel because you can stay in a higher gear",
            },
            {
                char: 'c',
                text: "You'll have more time to turn",
            },
            {
                char: 'd',
                text: "You'll be able to turn without stopping",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2614',
        topicCode: 'rules_of_the_road',
        question:
            "You're travelling along a residential street. There are parked vehicles on the left-hand side. Why should you keep your speed down?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'So that oncoming traffic can see you more clearly',
            },
            {
                char: 'b',
                text: 'You may set off car alarms',
            },
            {
                char: 'c',
                text: 'There may be delivery lorries on the street',
            },
            {
                char: 'd',
                text: 'Children may run out from between the vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2615',
        topicCode: 'rules_of_the_road',
        question:
            "What should you do when there's an obstruction on your side of the road?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Carry on, as you have priority',
            },
            {
                char: 'b',
                text: 'Give way to oncoming traffic',
            },
            {
                char: 'c',
                text: 'Wave oncoming vehicles through',
            },
            {
                char: 'd',
                text: 'Accelerate to get past first',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2616',
        topicCode: 'rules_of_the_road',
        question:
            'When would you use the right-hand lane of a two-lane dual carriageway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "When you're turning right or overtaking",
            },
            {
                char: 'b',
                text: "When you're passing a side road on the left",
            },
            {
                char: 'c',
                text: "When you're staying at the minimum allowed speed",
            },
            {
                char: 'd',
                text: "When you're travelling at a constant high speed",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2617',
        topicCode: 'rules_of_the_road',
        question: 'Who has priority at an unmarked crossroads?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The larger vehicle',
            },
            {
                char: 'b',
                text: 'No-one has priority',
            },
            {
                char: 'c',
                text: 'The faster vehicle',
            },
            {
                char: 'd',
                text: 'The smaller vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2628',
        topicCode: 'rules_of_the_road',
        question: "What's the nearest you may park to a junction?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '10 metres (32 feet)',
            },
            {
                char: 'b',
                text: '12 metres (39 feet)',
            },
            {
                char: 'c',
                text: '15 metres (49 feet)',
            },
            {
                char: 'd',
                text: '20 metres (66 feet)',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'AB2629',
        topicCode: 'rules_of_the_road',
        question:
            "You're looking for somewhere to safely park your vehicle. Where would you choose to park?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At or near a bus stop',
            },
            {
                char: 'b',
                text: 'In a designated parking space',
            },
            {
                char: 'c',
                text: 'Near the brow of a hill',
            },
            {
                char: 'd',
                text: 'On the approach to a level crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2630',
        topicCode: 'rules_of_the_road',
        question:
            "You're waiting at a level crossing. What must you do if a train passes but the lights keep flashing?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Carry on waiting',
            },
            {
                char: 'b',
                text: 'Phone the signal operator',
            },
            {
                char: 'c',
                text: 'Edge over the stop line and look for trains',
            },
            {
                char: 'd',
                text: 'Park and investigate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2669',
        topicCode: 'rules_of_the_road',
        question: 'What does this sign mean?',
        questionImg: '664.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'No through road',
            },
            {
                char: 'b',
                text: 'End of traffic-calming zone',
            },
            {
                char: 'c',
                text: 'Free-parking zone ends',
            },
            {
                char: 'd',
                text: 'End of controlled parking zone',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2698',
        topicCode: 'rules_of_the_road',
        question:
            'What must you do if you come across roadworks that have a temporary speed limit displayed?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Obey the speed limit',
            },
            {
                char: 'b',
                text: 'Obey the limit, but only during rush hour',
            },
            {
                char: 'c',
                text: 'Ignore the displayed limit',
            },
            {
                char: 'd',
                text: 'Use your own judgment; the limit is only advisory',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2754',
        topicCode: 'rules_of_the_road',
        question:
            "You're in a built-up area at night and the road is well lit. Why should you use dipped headlights?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'So that you can see further along the road',
            },
            {
                char: 'b',
                text: 'So that you can go at a much faster speed',
            },
            {
                char: 'c',
                text: 'So that you can switch to main beam quickly',
            },
            {
                char: 'd',
                text: 'So that you can be easily seen by others',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2755',
        topicCode: 'rules_of_the_road',
        question:
            "You're turning right onto a dual carriageway. What should you do if the central reservation is too narrow to contain your vehicle?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Proceed to the central reservation and wait',
            },
            {
                char: 'b',
                text: 'Wait until the road is clear in both directions',
            },
            {
                char: 'c',
                text: 'Stop in the first lane so that other vehicles give way',
            },
            {
                char: 'd',
                text: 'Emerge slightly to show your intentions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2824',
        topicCode: 'rules_of_the_road',
        question:
            "What's the national speed limit on a single carriageway road for cars and motorcycles?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '30 mph',
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
        code: 'AB2825',
        topicCode: 'rules_of_the_road',
        question:
            'What should you do when you park at night on a road that has a 40 mph speed limit?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Park facing the traffic',
            },
            {
                char: 'b',
                text: 'Leave parking lights switched on',
            },
            {
                char: 'c',
                text: 'Leave dipped headlights switched on',
            },
            {
                char: 'd',
                text: 'Park near a street light',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2826',
        topicCode: 'rules_of_the_road',
        question: 'Where will you see these red and white markers?',
        questionImg: 'TS4059.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Approaching the end of a motorway',
            },
            {
                char: 'b',
                text: 'Approaching a concealed level crossing',
            },
            {
                char: 'c',
                text: 'Approaching a concealed speed-limit sign',
            },
            {
                char: 'd',
                text: 'Approaching the end of a dual carriageway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2832',
        topicCode: 'rules_of_the_road',
        question:
            "You're travelling on a motorway in England. When must you stop your vehicle?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When signalled to stop by a roadworks supervisor',
            },
            {
                char: 'b',
                text: 'When signalled to stop by a traffic officer',
            },
            {
                char: 'c',
                text: 'When signalled to stop by a pedestrian on the hard shoulder',
            },
            {
                char: 'd',
                text: 'When signalled to stop by a driver who has broken down',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2884',
        topicCode: 'rules_of_the_road',
        question:
            "How should you signal if you're going straight ahead at a roundabout?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Signal right on the approach and then left to leave the roundabout',
            },
            {
                char: 'b',
                text: 'Signal left after you leave the roundabout and enter the new road',
            },
            {
                char: 'c',
                text: 'Signal right on the approach to the roundabout and keep the signal on',
            },
            {
                char: 'd',
                text: "Signal left just after you pass the exit before the one you're going to take",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1206',
        topicCode: 'rules_of_the_road',
        question: 'When may you drive over a pavement?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To overtake slow-moving traffic',
            },
            {
                char: 'b',
                text: 'When the pavement is very wide',
            },
            {
                char: 'c',
                text: 'If there are no pedestrians nearby',
            },
            {
                char: 'd',
                text: 'To gain access to a property',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1207',
        topicCode: 'rules_of_the_road',
        question:
            "A single carriageway road has this sign. What's the maximum permitted speed for a car towing a trailer?",
        questionImg: 'TS4675.png',
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
        isNIExempts: false,
    },
    {
        code: 'BB1209',
        topicCode: 'rules_of_the_road',
        question:
            "What's the speed limit for a car towing a caravan on a dual carriageway?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '50 mph',
            },
            {
                char: 'b',
                text: '40 mph',
            },
            {
                char: 'c',
                text: '70 mph',
            },
            {
                char: 'd',
                text: '60 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1213',
        topicCode: 'rules_of_the_road',
        question:
            'You want to park and you see this sign. What should you do on the days and times shown?',
        questionImg: 'TS4694.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Park in a bay and not pay',
            },
            {
                char: 'b',
                text: 'Park on yellow lines and pay',
            },
            {
                char: 'c',
                text: 'Park on yellow lines and not pay',
            },
            {
                char: 'd',
                text: 'Park in a bay and pay',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1220',
        topicCode: 'rules_of_the_road',
        question:
            'A cycle lane, marked by a solid white line, is in operation. What does this mean for car drivers?',
        questionImg: 'IMG_1149.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They may park in the lane',
            },
            {
                char: 'b',
                text: 'They may drive in the lane at any time',
            },
            {
                char: 'c',
                text: 'They may use the lane when necessary',
            },
            {
                char: 'd',
                text: "They mustn't drive along the lane",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1225',
        topicCode: 'rules_of_the_road',
        question:
            "You're going to turn left from a main road into a minor road. What should you do as you approach the junction?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep just left of the middle of the road',
            },
            {
                char: 'b',
                text: 'Keep in the middle of the road',
            },
            {
                char: 'c',
                text: 'Swing out to the right just before turning',
            },
            {
                char: 'd',
                text: 'Keep well to the left of the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1226',
        topicCode: 'rules_of_the_road',
        question:
            "You're waiting at a level crossing. What should you do if the red warning lights continue to flash after a train has passed by?",
        questionImg: 'TS4507.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Get out and investigate',
            },
            {
                char: 'b',
                text: 'Telephone the signal operator',
            },
            {
                char: 'c',
                text: 'Continue to wait',
            },
            {
                char: 'd',
                text: 'Drive across carefully',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1227',
        topicCode: 'rules_of_the_road',
        question:
            "What should you do if the amber lights come on and a warning sounds while you're driving over a level crossing?",
        questionImg: 'TS4507.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Get everyone out of the vehicle immediately',
            },
            {
                char: 'b',
                text: 'Stop and reverse back to clear the crossing',
            },
            {
                char: 'c',
                text: 'Keep going and clear the crossing',
            },
            {
                char: 'd',
                text: 'Stop immediately and use your hazard warning lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1228',
        topicCode: 'rules_of_the_road',
        question:
            "You're driving on a busy main road. What should you do if you find that you're driving in the wrong direction?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Turn into a side road on the right and reverse into the main road',
            },
            {
                char: 'b',
                text: 'Make a U-turn in the main road',
            },
            {
                char: 'c',
                text: 'Make a ‘three-point’ turn in the main road',
            },
            {
                char: 'd',
                text: 'Turn around in a side road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1229',
        topicCode: 'rules_of_the_road',
        question: 'When may you drive without wearing your seat belt?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "When you're carrying out a manoeuvre that includes reversing",
            },
            {
                char: 'b',
                text: "When you're moving off on a hill",
            },
            {
                char: 'c',
                text: "When you're testing your brakes",
            },
            {
                char: 'd',
                text: "When you're driving slowly in queuing traffic",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1230',
        topicCode: 'rules_of_the_road',
        question: 'How far are you allowed to reverse?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'No further than is necessary',
            },
            {
                char: 'b',
                text: 'No more than a car’s length',
            },
            {
                char: 'c',
                text: 'As far as it takes to reverse around a corner',
            },
            {
                char: 'd',
                text: 'The length of a residential street',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1232',
        topicCode: 'rules_of_the_road',
        question:
            "What should you do when you're unsure whether it's safe to reverse your vehicle?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Sound your horn',
            },
            {
                char: 'b',
                text: 'Rev your engine',
            },
            {
                char: 'c',
                text: 'Get out and check',
            },
            {
                char: 'd',
                text: 'Reverse slowly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1233',
        topicCode: 'rules_of_the_road',
        question:
            'Why could it be dangerous to reverse from a side road into a main road?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Your reverse sensors will beep',
            },
            {
                char: 'b',
                text: 'Your view will be restricted',
            },
            {
                char: 'c',
                text: 'Your reversing lights will be hidden',
            },
            {
                char: 'd',
                text: 'Your mirrors will need adjusting',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1355',
        topicCode: 'rules_of_the_road',
        question:
            "You want to turn right at a box junction. What should you do if there's oncoming traffic?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Wait in the box junction if your exit is clear',
            },
            {
                char: 'b',
                text: "Wait before the junction until it's clear of all traffic",
            },
            {
                char: 'c',
                text: "Drive on; you can't turn right at a box junction",
            },
            {
                char: 'd',
                text: 'Drive slowly into the box junction when signalled by oncoming traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1381',
        topicCode: 'rules_of_the_road',
        question:
            "You're reversing into a side road. When would your vehicle be the greatest hazard to passing traffic?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'After you’ve completed the manoeuvre',
            },
            {
                char: 'b',
                text: 'Just before you begin to manoeuvre',
            },
            {
                char: 'c',
                text: 'After you’ve entered the side road',
            },
            {
                char: 'd',
                text: 'When the front of your vehicle swings out',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1435',
        topicCode: 'rules_of_the_road',
        question: "Where's the safest place to park your vehicle at night?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In a garage',
            },
            {
                char: 'b',
                text: 'On a busy road',
            },
            {
                char: 'c',
                text: 'In a quiet car park',
            },
            {
                char: 'd',
                text: 'Near a red route',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1527',
        topicCode: 'rules_of_the_road',
        question: 'When may you stop on an urban clearway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To set down and pick up passengers',
            },
            {
                char: 'b',
                text: 'To use a mobile telephone',
            },
            {
                char: 'c',
                text: 'To ask for directions',
            },
            {
                char: 'd',
                text: 'To load or unload goods',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1528',
        topicCode: 'rules_of_the_road',
        question:
            "You're looking for somewhere to park your vehicle. What should you do if the only free spaces are marked for disabled drivers?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Use one of these spaces',
            },
            {
                char: 'b',
                text: 'Park in one of these spaces but stay with your vehicle',
            },
            {
                char: 'c',
                text: 'Use one of the spaces as long as one is kept free',
            },
            {
                char: 'd',
                text: 'Wait for a regular parking space to become free',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1554',
        topicCode: 'rules_of_the_road',
        question:
            "You're on a road that's only wide enough for one vehicle. What should you do if a car is coming towards you?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Pull into a passing place on your right',
            },
            {
                char: 'b',
                text: 'Force the other driver to reverse',
            },
            {
                char: 'c',
                text: 'Pull into a passing place if your vehicle is wider',
            },
            {
                char: 'd',
                text: 'Pull into a passing place on your left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1566',
        topicCode: 'rules_of_the_road',
        question:
            "You're driving at night with your headlights on main beam. A vehicle is overtaking you. When should you dip your headlights?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Some time after the vehicle has passed you',
            },
            {
                char: 'b',
                text: 'Before the vehicle starts to pass you',
            },
            {
                char: 'c',
                text: 'Only if the other driver dips their headlights',
            },
            {
                char: 'd',
                text: 'As soon as the vehicle passes you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1581',
        topicCode: 'rules_of_the_road',
        question: 'When may you drive a car in this bus lane?',
        questionImg: 'TS4565.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Outside its hours of operation',
            },
            {
                char: 'b',
                text: 'To get to the front of a traffic queue',
            },
            {
                char: 'c',
                text: 'You may not use it at any time',
            },
            {
                char: 'd',
                text: 'To overtake slow-moving traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1622',
        topicCode: 'rules_of_the_road',
        question:
            'Other than direction indicators, how can you give signals to other road users?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By using brake lights',
            },
            {
                char: 'b',
                text: 'By using sidelights',
            },
            {
                char: 'c',
                text: 'By using fog lights',
            },
            {
                char: 'd',
                text: 'By using interior lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1692',
        topicCode: 'rules_of_the_road',
        question:
            "You're parked in a busy high street. What's the safest way to turn your vehicle around so you can drive in the opposite direction?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Turn around in a quiet side road',
            },
            {
                char: 'b',
                text: 'Drive into a side road and reverse out into the main road',
            },
            {
                char: 'c',
                text: 'Ask someone to stop the traffic',
            },
            {
                char: 'd',
                text: 'Carry out a U-turn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1693',
        topicCode: 'rules_of_the_road',
        question: 'Where should you park your vehicle at night?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Near a police station',
            },
            {
                char: 'b',
                text: 'In a quiet road',
            },
            {
                char: 'c',
                text: 'On a red route',
            },
            {
                char: 'd',
                text: 'In a well-lit area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1694',
        topicCode: 'rules_of_the_road',
        question:
            "You're driving in the right-hand lane of a dual carriageway. What should you do if you see a sign showing that the right-hand lane is closed 800 yards ahead?",
        questionImg: 'TS4050n1.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep in that lane until you reach the queue',
            },
            {
                char: 'b',
                text: 'Move to the left immediately',
            },
            {
                char: 'c',
                text: 'Wait and see which lane is moving faster',
            },
            {
                char: 'd',
                text: 'Move to the left in good time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1747',
        topicCode: 'rules_of_the_road',
        question:
            "You're driving on a road that has a cycle lane. What does it mean if the lane is marked by a broken white line?",
        questionImg: 'DSCF2385.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "You shouldn't drive in the lane unless it's unavoidable",
            },
            {
                char: 'b',
                text: "There's a reduced speed limit for motor vehicles using the lane",
            },
            {
                char: 'c',
                text: 'Cyclists can travel in both directions in that lane',
            },
            {
                char: 'd',
                text: 'The lane must be used by motorcyclists in heavy traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1784',
        topicCode: 'rules_of_the_road',
        question:
            'When are you allowed to park in a parking bay for disabled drivers?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you have a Blue Badge',
            },
            {
                char: 'b',
                text: 'When you have a wheelchair',
            },
            {
                char: 'c',
                text: 'When you have an advanced driver certificate',
            },
            {
                char: 'd',
                text: 'When you have an adapted vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1794',
        topicCode: 'rules_of_the_road',
        question: 'When must you stop your vehicle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'If you’re involved in an incident that causes damage or injury',
            },
            {
                char: 'b',
                text: 'At a junction where there are ‘give way’ lines',
            },
            {
                char: 'c',
                text: 'At the end of a one-way street',
            },
            {
                char: 'd',
                text: 'Before merging onto a motorway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2293',
        topicCode: 'road_and_traffic_signs',
        question: 'How can you identify traffic signs that give orders?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "They're rectangular with a yellow border",
            },
            {
                char: 'b',
                text: "They're triangular with a blue border",
            },
            {
                char: 'c',
                text: "They're square with a brown border",
            },
            {
                char: 'd',
                text: "They're circular with a red border",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2294',
        topicCode: 'road_and_traffic_signs',
        question: 'What shape are traffic signs giving orders?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4073b.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4073d.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4629.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4668.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2295',
        topicCode: 'road_and_traffic_signs',
        question: 'Which type of sign tells you what you must not do?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4668.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4003.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4004.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4005.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2296',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4677.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Maximum speed limit with traffic calming',
            },
            {
                char: 'b',
                text: 'Minimum speed limit with traffic calming',
            },
            {
                char: 'c',
                text: '‘20 cars only’ parking zone',
            },
            {
                char: 'd',
                text: 'Only 20 cars allowed at any one time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2299',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4678.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'New speed limit 20 mph',
            },
            {
                char: 'b',
                text: 'No vehicles over 30 tonnes',
            },
            {
                char: 'c',
                text: 'Minimum speed limit 30 mph',
            },
            {
                char: 'd',
                text: 'End of 20 mph zone',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2301',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4669.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'No overtaking',
            },
            {
                char: 'b',
                text: 'No motor vehicles',
            },
            {
                char: 'c',
                text: 'Clearway (no stopping)',
            },
            {
                char: 'd',
                text: 'Cars and motorcycles only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2302',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4667.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'No parking',
            },
            {
                char: 'b',
                text: 'No road markings',
            },
            {
                char: 'c',
                text: 'No through road',
            },
            {
                char: 'd',
                text: 'No entry',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2303',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4665.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Bend to the right',
            },
            {
                char: 'b',
                text: 'Road on the right closed',
            },
            {
                char: 'c',
                text: 'No traffic from the right',
            },
            {
                char: 'd',
                text: 'No right turn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2304',
        topicCode: 'road_and_traffic_signs',
        question: "Which sign means 'no entry'?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4691.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4690.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4675.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4667.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2305',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4085.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Route for trams only',
            },
            {
                char: 'b',
                text: 'Route for buses only',
            },
            {
                char: 'c',
                text: 'Parking for buses only',
            },
            {
                char: 'd',
                text: 'Parking for trams only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2306',
        topicCode: 'road_and_traffic_signs',
        question: 'Which type of vehicle does this sign apply to?',
        questionImg: 'TS4673.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Wide vehicles',
            },
            {
                char: 'b',
                text: 'Long vehicles',
            },
            {
                char: 'c',
                text: 'High vehicles',
            },
            {
                char: 'd',
                text: 'Heavy vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2307',
        topicCode: 'road_and_traffic_signs',
        question: 'Which sign means no motor vehicles allowed?',
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
                img: 'TS4669.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4670.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4672.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2308',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4674.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You have priority',
            },
            {
                char: 'b',
                text: 'No motor vehicles',
            },
            {
                char: 'c',
                text: 'Two-way traffic',
            },
            {
                char: 'd',
                text: 'No overtaking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2311',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4690.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Waiting restrictions apply',
            },
            {
                char: 'b',
                text: 'Waiting permitted',
            },
            {
                char: 'c',
                text: 'National speed limit applies',
            },
            {
                char: 'd',
                text: 'Clearway (no stopping)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2313',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4676.png',
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
        code: 'AB2314',
        topicCode: 'road_and_traffic_signs',
        question: "Which sign means 'no stopping'?",
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
                img: 'TS4675.png',
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
        code: 'AB2316',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4691.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'National speed limit applies',
            },
            {
                char: 'b',
                text: 'Waiting restrictions apply',
            },
            {
                char: 'c',
                text: 'No stopping',
            },
            {
                char: 'd',
                text: 'No entry',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2317',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4709.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Distance to parking place ahead',
            },
            {
                char: 'b',
                text: 'Distance to public telephone ahead',
            },
            {
                char: 'c',
                text: 'Distance to public house ahead',
            },
            {
                char: 'd',
                text: 'Distance to passing place ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2318',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4695.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Vehicles may not park on the verge or footway',
            },
            {
                char: 'b',
                text: 'Vehicles may park on the left-hand side of the road only',
            },
            {
                char: 'c',
                text: 'Vehicles may park fully on the verge or footway',
            },
            {
                char: 'd',
                text: 'Vehicles may park on the right-hand side of the road only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2319',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this traffic sign mean?',
        questionImg: 'TS4666.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'No overtaking allowed',
            },
            {
                char: 'b',
                text: 'Give priority to oncoming traffic',
            },
            {
                char: 'c',
                text: 'Two-way traffic',
            },
            {
                char: 'd',
                text: 'One-way traffic only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2320',
        topicCode: 'road_and_traffic_signs',
        question: "What's the meaning of this traffic sign?",
        questionImg: 'TS4699.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'End of two-way road',
            },
            {
                char: 'b',
                text: 'Give priority to vehicles coming towards you',
            },
            {
                char: 'c',
                text: 'You have priority over vehicles coming towards you',
            },
            {
                char: 'd',
                text: 'Bus lane ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2324',
        topicCode: 'road_and_traffic_signs',
        question: "What shape is a 'stop' sign?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4668.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4629a.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4002.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4031.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2325',
        topicCode: 'road_and_traffic_signs',
        question:
            'In winter, road signs can become covered by snow. What does this sign mean?',
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
        code: 'AB2327',
        topicCode: 'road_and_traffic_signs',
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
        code: 'AB2331',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4526.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Give way to oncoming vehicles',
            },
            {
                char: 'b',
                text: 'Approaching traffic passes you on both sides',
            },
            {
                char: 'c',
                text: 'Turn off at the next available junction',
            },
            {
                char: 'd',
                text: 'Pass either side to get to the same destination',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2332',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4085.png',
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
        code: 'AB2333',
        topicCode: 'road_and_traffic_signs',
        question:
            'What messages are given by circular traffic signs that have a blue background?',
        questionImg: 'TS4003.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They give temporary directions during a diversion',
            },
            {
                char: 'b',
                text: 'They give directions to car parks',
            },
            {
                char: 'c',
                text: 'They give motorway information',
            },
            {
                char: 'd',
                text: 'They give mandatory instructions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2335',
        topicCode: 'road_and_traffic_signs',
        question: 'Where would you see a contraflow bus lane?',
        questionImg: 'TS4708.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'On a dual carriageway',
            },
            {
                char: 'b',
                text: 'On a roundabout',
            },
            {
                char: 'c',
                text: 'On an urban motorway',
            },
            {
                char: 'd',
                text: 'On a one-way street',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2336',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4708.png',
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
        code: 'AB2338',
        topicCode: 'road_and_traffic_signs',
        question: 'What does a sign with a brown background show?',
        questionImg: 'TS4010.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Tourist directions',
            },
            {
                char: 'b',
                text: 'Primary roads',
            },
            {
                char: 'c',
                text: 'Motorway routes',
            },
            {
                char: 'd',
                text: 'Minor roads',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2339',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4686.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Tourist attraction',
            },
            {
                char: 'b',
                text: 'Beware of trains',
            },
            {
                char: 'c',
                text: 'Level crossing',
            },
            {
                char: 'd',
                text: 'Beware of trams',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2340',
        topicCode: 'road_and_traffic_signs',
        question: "What's the purpose of triangular shaped signs?",
        questionImg: 'TS4629.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To give warnings',
            },
            {
                char: 'b',
                text: 'To give information',
            },
            {
                char: 'c',
                text: 'To give orders',
            },
            {
                char: 'd',
                text: 'To give directions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2341',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4632.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Turn left ahead',
            },
            {
                char: 'b',
                text: 'T-junction',
            },
            {
                char: 'c',
                text: 'No through road',
            },
            {
                char: 'd',
                text: 'Give way',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2342',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4651.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Multi-exit roundabout',
            },
            {
                char: 'b',
                text: 'Risk of ice',
            },
            {
                char: 'c',
                text: 'Six roads converge',
            },
            {
                char: 'd',
                text: 'Place of historical interest',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2343',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4631.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Crossroads',
            },
            {
                char: 'b',
                text: 'Level crossing with gate',
            },
            {
                char: 'c',
                text: 'Level crossing without gate',
            },
            {
                char: 'd',
                text: 'Ahead only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2344',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4634.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Ring road',
            },
            {
                char: 'b',
                text: 'Mini-roundabout',
            },
            {
                char: 'c',
                text: 'No vehicles',
            },
            {
                char: 'd',
                text: 'Roundabout',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2345',
        topicCode: 'road_and_traffic_signs',
        question: 'What information would be shown in a triangular road sign?',
        questionImg: 'TS4629.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Road narrows',
            },
            {
                char: 'b',
                text: 'Ahead only',
            },
            {
                char: 'c',
                text: 'Keep left',
            },
            {
                char: 'd',
                text: 'Minimum speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2346',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4683.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Cyclists must dismount',
            },
            {
                char: 'b',
                text: "Cycles aren't allowed",
            },
            {
                char: 'c',
                text: 'Cycle route ahead',
            },
            {
                char: 'd',
                text: 'Cycle in single file',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2347',
        topicCode: 'road_and_traffic_signs',
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
        code: 'AB2351',
        topicCode: 'road_and_traffic_signs',
        question: "Which sign means there's a double bend ahead?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4577.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4637.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4636.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4635.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2352',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4088.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Wait at the barriers',
            },
            {
                char: 'b',
                text: 'Wait at the crossroads',
            },
            {
                char: 'c',
                text: 'Give way to trams',
            },
            {
                char: 'd',
                text: 'Give way to farm vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2353',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4602.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Hump bridge',
            },
            {
                char: 'b',
                text: 'Humps in the road',
            },
            {
                char: 'c',
                text: 'Entrance to tunnel',
            },
            {
                char: 'd',
                text: 'Soft verges',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2357',
        topicCode: 'road_and_traffic_signs',
        question: 'Which sign means the end of a dual carriageway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4638.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4639.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4642.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4640.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2358',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4640.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'End of dual carriageway',
            },
            {
                char: 'b',
                text: 'Tall bridge',
            },
            {
                char: 'c',
                text: 'Road narrows',
            },
            {
                char: 'd',
                text: 'End of narrow bridge',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2360',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4518.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Side winds',
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
        code: 'AB2361',
        topicCode: 'road_and_traffic_signs',
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
                text: 'Tyres liable to punctures ahead',
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
        code: 'AB2362',
        topicCode: 'road_and_traffic_signs',
        question:
            "You're about to overtake. What should you do when you see this sign?",
        questionImg: 'TS4549.png',
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
        code: 'AB2363',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4679.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Level crossing with gate or barrier',
            },
            {
                char: 'b',
                text: 'Gated road ahead',
            },
            {
                char: 'c',
                text: 'Level crossing without gate or barrier',
            },
            {
                char: 'd',
                text: 'Cattle grid ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2364',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4680.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'No trams ahead',
            },
            {
                char: 'b',
                text: 'Oncoming trams',
            },
            {
                char: 'c',
                text: 'Trams crossing ahead',
            },
            {
                char: 'd',
                text: 'Trams only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2365',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4643.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Adverse camber',
            },
            {
                char: 'b',
                text: 'Steep hill downwards',
            },
            {
                char: 'c',
                text: 'Uneven road',
            },
            {
                char: 'd',
                text: 'Steep hill upwards',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2367',
        topicCode: 'road_and_traffic_signs',
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
        code: 'AB2369',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4701.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Turn left for parking area',
            },
            {
                char: 'b',
                text: 'No through road on the left',
            },
            {
                char: 'c',
                text: 'No entry for traffic turning left',
            },
            {
                char: 'd',
                text: 'Turn left for ferry terminal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2370',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4700.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'T-junction',
            },
            {
                char: 'b',
                text: 'No through road',
            },
            {
                char: 'c',
                text: 'Telephone box ahead',
            },
            {
                char: 'd',
                text: 'Toilet ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2375',
        topicCode: 'road_and_traffic_signs',
        question: 'Which is the sign for a ring road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4663.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4634.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4685.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4691.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2378',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4057.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The right-hand lane ahead is narrow',
            },
            {
                char: 'b',
                text: 'Right-hand lane for buses only',
            },
            {
                char: 'c',
                text: 'Right-hand lane for turning right',
            },
            {
                char: 'd',
                text: 'The right-hand lane is closed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2379',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4578.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Change to the left-hand lane',
            },
            {
                char: 'b',
                text: 'Leave at the next exit',
            },
            {
                char: 'c',
                text: 'Contraflow system',
            },
            {
                char: 'd',
                text: 'One-way street',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2381',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4503.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Leave motorway at next exit',
            },
            {
                char: 'b',
                text: 'Lane for heavy and slow vehicles',
            },
            {
                char: 'c',
                text: 'All lorries use the hard shoulder',
            },
            {
                char: 'd',
                text: 'Rest area for lorries',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2384',
        topicCode: 'road_and_traffic_signs',
        question: 'What does a red traffic light mean?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You should stop unless turning left',
            },
            {
                char: 'b',
                text: "Stop, if you're able to brake safely",
            },
            {
                char: 'c',
                text: 'You must stop and wait behind the stop line',
            },
            {
                char: 'd',
                text: 'Proceed with care',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2385',
        topicCode: 'road_and_traffic_signs',
        question:
            'At traffic lights, what does it mean when the amber light shows on its own?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Prepare to go',
            },
            {
                char: 'b',
                text: 'Go if the way is clear',
            },
            {
                char: 'c',
                text: 'Go if no pedestrians are crossing',
            },
            {
                char: 'd',
                text: 'Stop at the stop line',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2388',
        topicCode: 'road_and_traffic_signs',
        question:
            "You're at a junction controlled by traffic lights. When should you wait at a green light?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When pedestrians are waiting to cross',
            },
            {
                char: 'b',
                text: 'When your exit from the junction is blocked',
            },
            {
                char: 'c',
                text: 'When you think the lights may be about to change',
            },
            {
                char: 'd',
                text: 'When you intend to turn right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2389',
        topicCode: 'road_and_traffic_signs',
        question:
            "You're in the left-hand lane at traffic lights, waiting to turn left. Which signal means you must wait?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4014.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4015.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4013.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4016.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2390',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'Out_of_order_tlights.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Traffic lights out of order',
            },
            {
                char: 'b',
                text: 'Amber signal out of order',
            },
            {
                char: 'c',
                text: 'Temporary traffic lights ahead',
            },
            {
                char: 'd',
                text: 'New traffic lights ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2392',
        topicCode: 'road_and_traffic_signs',
        question: 'Who has priority when traffic lights are out of order?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Traffic going straight on',
            },
            {
                char: 'b',
                text: 'Traffic turning right',
            },
            {
                char: 'c',
                text: 'Nobody',
            },
            {
                char: 'd',
                text: 'Traffic turning left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2393',
        topicCode: 'road_and_traffic_signs',
        question: 'Where would you find these flashing red light signals?',
        questionImg: 'TS4507b.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Pelican crossings',
            },
            {
                char: 'b',
                text: 'Motorway exits',
            },
            {
                char: 'c',
                text: 'Zebra crossings',
            },
            {
                char: 'd',
                text: 'Level crossings',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2394',
        topicCode: 'road_and_traffic_signs',
        question: 'What do these zigzag white lines mean?',
        questionImg: 'DSCF2954.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'No parking at any time',
            },
            {
                char: 'b',
                text: 'Parking allowed only for a short time',
            },
            {
                char: 'c',
                text: 'Slow down to 20 mph',
            },
            {
                char: 'd',
                text: "Sounding horns isn't allowed",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2396',
        topicCode: 'road_and_traffic_signs',
        question:
            'When may you cross a double solid white line in the middle of the road?',
        questionImg: 'IMG_1871.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "To pass traffic that's queuing back at a junction",
            },
            {
                char: 'b',
                text: 'To pass a car signalling to turn left ahead',
            },
            {
                char: 'c',
                text: 'To pass a road maintenance vehicle travelling at 10 mph or less',
            },
            {
                char: 'd',
                text: "To pass a vehicle that's towing a trailer",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2398',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this road marking mean?',
        questionImg: 'IMG_4674.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "Don't cross the line",
            },
            {
                char: 'b',
                text: 'No stopping allowed',
            },
            {
                char: 'c',
                text: "You're approaching a hazard",
            },
            {
                char: 'd',
                text: 'No overtaking allowed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2400',
        topicCode: 'road_and_traffic_signs',
        question: 'Where would you see this road marking?',
        questionImg: 'TS4076.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At traffic lights',
            },
            {
                char: 'b',
                text: 'On road humps',
            },
            {
                char: 'c',
                text: 'Near a level crossing',
            },
            {
                char: 'd',
                text: 'At a box junction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2401',
        topicCode: 'road_and_traffic_signs',
        question: 'Which diagram shows a hazard warning line?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4045.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4046.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4047.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4048.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2402',
        topicCode: 'road_and_traffic_signs',
        question:
            "Why does this junction have a 'stop' sign and a stop line on the road?",
        questionImg: 'IMG_1286.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Speed on the major road is derestricted',
            },
            {
                char: 'b',
                text: "It's a busy junction",
            },
            {
                char: 'c',
                text: 'Visibility along the major road is restricted',
            },
            {
                char: 'd',
                text: 'The junction is on a downhill gradient',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2403',
        topicCode: 'road_and_traffic_signs',
        question:
            'What does this line across the road at the entrance to a roundabout mean?',
        questionImg: 'IMG_0874.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Give way to traffic from the right',
            },
            {
                char: 'b',
                text: 'Traffic from the left has right of way',
            },
            {
                char: 'c',
                text: 'You have right of way',
            },
            {
                char: 'd',
                text: 'Stop at the line',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2405',
        topicCode: 'road_and_traffic_signs',
        question:
            'How will a police officer in a patrol vehicle signal for you to stop?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Flash the headlights, indicate left and point to the left',
            },
            {
                char: 'b',
                text: 'Overtake and give a slowing down arm signal',
            },
            {
                char: 'c',
                text: 'Use the siren, overtake, cut in front and stop',
            },
            {
                char: 'd',
                text: 'Pull alongside you, use the siren and wave you to stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2407',
        topicCode: 'road_and_traffic_signs',
        question:
            "You're approaching a junction where the traffic lights aren't working. What should you do when a police officer gives this signal?",
        questionImg: '85BW0961.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Turn left only',
            },
            {
                char: 'b',
                text: 'Turn right only',
            },
            {
                char: 'c',
                text: 'Continue ahead only',
            },
            {
                char: 'd',
                text: 'Stop at the stop line',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2408',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this arm signal mean?',
        questionImg: 'IMG_055.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The driver is slowing down',
            },
            {
                char: 'b',
                text: 'The driver intends to turn right',
            },
            {
                char: 'c',
                text: 'The driver wishes to overtake',
            },
            {
                char: 'd',
                text: 'The driver intends to turn left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2418',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this motorway sign mean?',
        questionImg: 'TS4025.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Change to the lane on your left',
            },
            {
                char: 'b',
                text: 'Leave the motorway at the next exit',
            },
            {
                char: 'c',
                text: 'Change to the opposite carriageway',
            },
            {
                char: 'd',
                text: 'Pull up on the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2419',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this motorway sign mean?',
        questionImg: 'TS4028.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Temporary minimum speed 50 mph',
            },
            {
                char: 'b',
                text: 'No services for 50 miles',
            },
            {
                char: 'c',
                text: 'Obstruction 50 metres (164 feet) ahead',
            },
            {
                char: 'd',
                text: 'Temporary maximum speed 50 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2420',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4030.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Through traffic to use left lane',
            },
            {
                char: 'b',
                text: 'Right-hand lane T-junction only',
            },
            {
                char: 'c',
                text: 'Right-hand lane closed ahead',
            },
            {
                char: 'd',
                text: '11 tonne weight limit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2422',
        topicCode: 'road_and_traffic_signs',
        question: "What does '25' mean on this motorway sign?",
        questionImg: 'TS4011.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The distance to the nearest town',
            },
            {
                char: 'b',
                text: 'The route number of the road',
            },
            {
                char: 'c',
                text: 'The number of the next junction',
            },
            {
                char: 'd',
                text: 'The speed limit on the slip road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2423',
        topicCode: 'road_and_traffic_signs',
        question:
            'How should the right-hand lane of a three-lane motorway be used?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'As a high-speed lane',
            },
            {
                char: 'b',
                text: 'As an overtaking lane',
            },
            {
                char: 'c',
                text: 'As a right-turn lane',
            },
            {
                char: 'd',
                text: 'As an acceleration lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2424',
        topicCode: 'road_and_traffic_signs',
        question: 'Where can you find reflective amber studs on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Separating the slip road from the motorway',
            },
            {
                char: 'b',
                text: 'On the left-hand edge of the road',
            },
            {
                char: 'c',
                text: 'On the right-hand edge of the road',
            },
            {
                char: 'd',
                text: 'Separating the lanes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2425',
        topicCode: 'road_and_traffic_signs',
        question: 'Where would you find green reflective studs on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Separating driving lanes',
            },
            {
                char: 'b',
                text: 'Between the hard shoulder and the carriageway',
            },
            {
                char: 'c',
                text: 'At slip-road entrances and exits',
            },
            {
                char: 'd',
                text: 'Between the carriageway and the central reservation',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2426',
        topicCode: 'road_and_traffic_signs',
        question:
            'What should you do when you see this sign as you travel along a motorway?',
        questionImg: 'TS4029.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Leave the motorway at the next exit',
            },
            {
                char: 'b',
                text: 'Turn left immediately',
            },
            {
                char: 'c',
                text: 'Change lane',
            },
            {
                char: 'd',
                text: 'Move onto the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2428',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4590.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'No motor vehicles',
            },
            {
                char: 'b',
                text: 'End of motorway',
            },
            {
                char: 'c',
                text: 'No through road',
            },
            {
                char: 'd',
                text: 'End of bus lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2429',
        topicCode: 'road_and_traffic_signs',
        question: 'Which sign means that the national speed limit applies?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4667.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4668.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4691.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4675.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2430',
        topicCode: 'road_and_traffic_signs',
        question:
            "What's the national speed limit on a single carriageway road?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '50 mph',
            },
            {
                char: 'b',
                text: '60 mph',
            },
            {
                char: 'c',
                text: '40 mph',
            },
            {
                char: 'd',
                text: '70 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2529',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4086.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'End of motorway',
            },
            {
                char: 'b',
                text: 'End of restriction',
            },
            {
                char: 'c',
                text: 'Lane ends ahead',
            },
            {
                char: 'd',
                text: 'Free recovery ends',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2530',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign indicate?',
        questionImg: 'TS4572.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A diversion route',
            },
            {
                char: 'b',
                text: 'A picnic area',
            },
            {
                char: 'c',
                text: 'A pedestrian zone',
            },
            {
                char: 'd',
                text: 'A cycle route',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2578',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this traffic sign mean?',
        questionImg: '50_mph_roadworks.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Compulsory maximum speed limit',
            },
            {
                char: 'b',
                text: 'Advisory maximum speed limit',
            },
            {
                char: 'c',
                text: 'Compulsory minimum speed limit',
            },
            {
                char: 'd',
                text: 'Advised separation distance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2579',
        topicCode: 'road_and_traffic_signs',
        question: 'What should you do when you see this sign at a crossroads?',
        questionImg: 'Out_of_order_tlights.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Maintain the same speed',
            },
            {
                char: 'b',
                text: 'Carry on with great care',
            },
            {
                char: 'c',
                text: 'Find another route',
            },
            {
                char: 'd',
                text: 'Telephone the police',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2591',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4671.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Motorcycles only',
            },
            {
                char: 'b',
                text: 'No cars',
            },
            {
                char: 'c',
                text: 'Cars only',
            },
            {
                char: 'd',
                text: 'No motorcycles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2592',
        topicCode: 'road_and_traffic_signs',
        question:
            "You're on a motorway. A lorry has stopped in the right-hand lane. What should you do when you see this sign on the lorry?",
        questionImg: 'TS4058.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move into the right-hand lane',
            },
            {
                char: 'b',
                text: 'Stop behind the flashing lights',
            },
            {
                char: 'c',
                text: 'Pass the lorry on the left',
            },
            {
                char: 'd',
                text: 'Leave the motorway at the next exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2623',
        topicCode: 'road_and_traffic_signs',
        question:
            "You're on a motorway. What should you do if there's a red cross showing on the signs above your lane only?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Continue in that lane and look for further information',
            },
            {
                char: 'b',
                text: "Don't continue in that lane",
            },
            {
                char: 'c',
                text: 'Pull onto the hard shoulder',
            },
            {
                char: 'd',
                text: 'Stop and wait for an instruction to proceed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2634',
        topicCode: 'road_and_traffic_signs',
        question: "When may you sound your vehicle's horn?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To give you right of way',
            },
            {
                char: 'b',
                text: 'To attract a friend’s attention',
            },
            {
                char: 'c',
                text: 'To warn others of your presence',
            },
            {
                char: 'd',
                text: 'To make slower drivers move over',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2635',
        topicCode: 'road_and_traffic_signs',
        question: 'Your vehicle is stationary. When may you use its horn?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When another road user poses a danger',
            },
            {
                char: 'b',
                text: 'When the road is blocked by queuing traffic',
            },
            {
                char: 'c',
                text: "When it's used only briefly",
            },
            {
                char: 'd',
                text: "When signalling that you've just arrived",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2670',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4692.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You can park on the days and times shown',
            },
            {
                char: 'b',
                text: 'No parking on the days and times shown',
            },
            {
                char: 'c',
                text: 'No parking at all from Monday to Friday',
            },
            {
                char: 'd',
                text: 'End of the urban clearway restrictions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2671',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4652.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Quayside or river bank',
            },
            {
                char: 'b',
                text: 'Steep hill downwards',
            },
            {
                char: 'c',
                text: 'Uneven road surface',
            },
            {
                char: 'd',
                text: 'Road liable to flooding',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2674',
        topicCode: 'road_and_traffic_signs',
        question: 'Which sign means you have priority over oncoming vehicles?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4057.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4509.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4699.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4666.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2676',
        topicCode: 'road_and_traffic_signs',
        question:
            'What do the long white lines along the centre of the road mean?',
        questionImg: 'IMG_4674.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Bus lane',
            },
            {
                char: 'b',
                text: 'Hazard warning',
            },
            {
                char: 'c',
                text: 'Give way',
            },
            {
                char: 'd',
                text: 'Lane marking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2681',
        topicCode: 'road_and_traffic_signs',
        question:
            "What's the reason for the hatched area along the centre of this road?",
        questionImg: 'IMG_1165.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It separates traffic flowing in opposite directions',
            },
            {
                char: 'b',
                text: 'It marks an area to be used by overtaking motorcyclists',
            },
            {
                char: 'c',
                text: "It's a temporary marking to warn of the roadworks",
            },
            {
                char: 'd',
                text: 'It separates the two sides of the dual carriageway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2693',
        topicCode: 'road_and_traffic_signs',
        question:
            "Other drivers may sometimes flash their headlights at you. What's the official meaning of this signal?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "There's a radar speed trap ahead",
            },
            {
                char: 'b',
                text: "They're giving way to you",
            },
            {
                char: 'c',
                text: "They're warning you of their presence",
            },
            {
                char: 'd',
                text: "There's a fault with your vehicle",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2738',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this signal mean?',
        questionImg: 'TS4072.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Cars must stop',
            },
            {
                char: 'b',
                text: 'Trams must stop',
            },
            {
                char: 'c',
                text: 'Both trams and cars must stop',
            },
            {
                char: 'd',
                text: 'Both trams and cars can continue',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2756',
        topicCode: 'road_and_traffic_signs',
        question: 'Where would you find these road markings?',
        questionImg: 'TS4054.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At a railway crossing',
            },
            {
                char: 'b',
                text: 'At a mini-roundabout',
            },
            {
                char: 'c',
                text: 'On a motorway',
            },
            {
                char: 'd',
                text: 'On a pedestrian crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2757',
        topicCode: 'road_and_traffic_signs',
        question:
            'A police car is following you. What should you do if the police officer flashes the headlights and points to the left?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Turn left at the next junction',
            },
            {
                char: 'b',
                text: 'Pull up on the left',
            },
            {
                char: 'c',
                text: 'Stop immediately',
            },
            {
                char: 'd',
                text: 'Move over to the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2758',
        topicCode: 'road_and_traffic_signs',
        question:
            'You see this amber traffic light ahead. Which light, or lights, will come on next?',
        questionImg: '85BW0508n1.png',
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
        code: 'AB2760',
        topicCode: 'road_and_traffic_signs',
        question: 'What does it mean if you see this signal on the motorway?',
        questionImg: 'TS4026.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Leave the motorway at the next exit',
            },
            {
                char: 'b',
                text: 'All vehicles use the hard shoulder',
            },
            {
                char: 'c',
                text: 'Sharp bend to the left ahead',
            },
            {
                char: 'd',
                text: 'Stop: all lanes ahead closed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2762',
        topicCode: 'road_and_traffic_signs',
        question: 'What must you do when you see this sign?',
        questionImg: 'TS4657.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop only if traffic is approaching',
            },
            {
                char: 'b',
                text: 'Stop even if the road is clear',
            },
            {
                char: 'c',
                text: 'Stop only if children are waiting to cross',
            },
            {
                char: 'd',
                text: 'Stop only if a red light is showing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2763',
        topicCode: 'road_and_traffic_signs',
        question: "Which shape is used for a 'give way' sign?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4629a.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4668.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4031.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4630.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2764',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4663.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Buses turning',
            },
            {
                char: 'b',
                text: 'Ring road',
            },
            {
                char: 'c',
                text: 'Mini-roundabout',
            },
            {
                char: 'd',
                text: 'Keep right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2765',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4642.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Two-way traffic straight ahead',
            },
            {
                char: 'b',
                text: 'Two-way traffic crosses a one-way road',
            },
            {
                char: 'c',
                text: 'Two-way traffic over a bridge',
            },
            {
                char: 'd',
                text: 'Two-way traffic crosses a two-way road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2766',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4641.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Two-way traffic crosses a one-way road',
            },
            {
                char: 'b',
                text: 'Traffic approaching you has priority',
            },
            {
                char: 'c',
                text: 'Two-way traffic straight ahead',
            },
            {
                char: 'd',
                text: 'Motorway contraflow system ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2767',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4644.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Hump bridge',
            },
            {
                char: 'b',
                text: 'Traffic-calming hump',
            },
            {
                char: 'c',
                text: 'Low bridge',
            },
            {
                char: 'd',
                text: 'Uneven road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2768',
        topicCode: 'road_and_traffic_signs',
        question:
            "Which sign informs you that you're coming to a 'no through road'?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4632.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4682.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4700.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4030.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2769',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4070.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Direction to park-and-ride car park',
            },
            {
                char: 'b',
                text: 'No parking for buses or coaches',
            },
            {
                char: 'c',
                text: 'Direction to bus and coach park',
            },
            {
                char: 'd',
                text: 'Parking area for cars and coaches',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2771',
        topicCode: 'road_and_traffic_signs',
        question:
            "What should you do when you're approaching traffic lights that have red and amber showing together?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pass the lights if the road is clear',
            },
            {
                char: 'b',
                text: "Take care because there's a fault with the lights",
            },
            {
                char: 'c',
                text: 'Wait for the green light',
            },
            {
                char: 'd',
                text: 'Stop because the lights are changing to red',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2778',
        topicCode: 'road_and_traffic_signs',
        question:
            "You've stopped at a railway level crossing. What should you do if the red lights continue to flash after a train has gone by?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Phone the signal operator',
            },
            {
                char: 'b',
                text: 'Alert drivers behind you',
            },
            {
                char: 'c',
                text: 'Wait',
            },
            {
                char: 'd',
                text: 'Proceed with caution',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2841',
        topicCode: 'road_and_traffic_signs',
        question:
            "You're in a tunnel and you see this sign. What does it mean?",
        questionImg: 'TS4687.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Direction to an emergency pedestrian exit',
            },
            {
                char: 'b',
                text: 'Beware of pedestrians: no footpath ahead',
            },
            {
                char: 'c',
                text: 'No access for pedestrians',
            },
            {
                char: 'd',
                text: 'Beware of pedestrians crossing ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2885',
        topicCode: 'road_and_traffic_signs',
        question: "Which sign shows that you're entering a one-way system?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4604.png',
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
        code: 'AB2886',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4757.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'With-flow bus and cycle lane',
            },
            {
                char: 'b',
                text: 'Contraflow bus and cycle lane',
            },
            {
                char: 'c',
                text: 'No buses and cycles allowed',
            },
            {
                char: 'd',
                text: 'No waiting for buses and cycles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2887',
        topicCode: 'road_and_traffic_signs',
        question: 'Which of these signs warns you of a zebra crossing?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4646.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4647.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4648.png',
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
        code: 'AB2889',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4646.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'School crossing patrol',
            },
            {
                char: 'b',
                text: 'No pedestrians allowed',
            },
            {
                char: 'c',
                text: 'Pedestrian zone - no vehicles',
            },
            {
                char: 'd',
                text: 'Zebra crossing ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2890',
        topicCode: 'road_and_traffic_signs',
        question:
            'Which sign means there will be two-way traffic crossing your route ahead?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4666.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4642.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4641.png',
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
        code: 'AB2892',
        topicCode: 'road_and_traffic_signs',
        question:
            "Which arm signal tells you that the car you're following is going to pull up?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'IMG_055.png',
            },
            {
                char: 'b',
                text: '',
                img: 'IMG_055b.png',
            },
            {
                char: 'c',
                text: '',
                img: 'IMG_055c.png',
            },
            {
                char: 'd',
                text: '',
                img: 'IMG_055a.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2897',
        topicCode: 'road_and_traffic_signs',
        question: 'Which sign means turn left ahead?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4523.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4524.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4525.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4526.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2899',
        topicCode: 'road_and_traffic_signs',
        question:
            "What should you be aware of if you've just passed this sign?",
        questionImg: 'TS4693.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'This is a single-track road',
            },
            {
                char: 'b',
                text: "You can't stop on this road",
            },
            {
                char: 'c',
                text: 'Only one lane is in use',
            },
            {
                char: 'd',
                text: 'All traffic is going one way',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2909',
        topicCode: 'road_and_traffic_signs',
        question:
            "You're approaching traffic lights and the red light is showing. What signal will show next?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Red and amber',
            },
            {
                char: 'b',
                text: 'Green alone',
            },
            {
                char: 'c',
                text: 'Amber alone',
            },
            {
                char: 'd',
                text: 'Green and amber',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2912',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this sign mean?',
        questionImg: 'TS4548.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Low bridge ahead',
            },
            {
                char: 'b',
                text: 'Tunnel ahead',
            },
            {
                char: 'c',
                text: 'Ancient monument ahead',
            },
            {
                char: 'd',
                text: 'Traffic danger spot ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1235',
        topicCode: 'road_and_traffic_signs',
        question:
            'What does the white line along the side of the road indicate?',
        questionImg: 'DSCF2715.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The edge of the carriageway',
            },
            {
                char: 'b',
                text: 'The approach to a hazard',
            },
            {
                char: 'c',
                text: 'No parking',
            },
            {
                char: 'd',
                text: 'No overtaking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1236',
        topicCode: 'road_and_traffic_signs',
        question: 'What does this white arrow on the road mean?',
        questionImg: 'IMG_1887.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Entrance on the left',
            },
            {
                char: 'b',
                text: 'All vehicles turn left',
            },
            {
                char: 'c',
                text: 'Return to your side of the road',
            },
            {
                char: 'd',
                text: 'Road bends to the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1237',
        topicCode: 'road_and_traffic_signs',
        question: 'How should you give an arm signal to turn left?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'IMG_055a.png',
            },
            {
                char: 'b',
                text: '',
                img: 'IMG_055c.png',
            },
            {
                char: 'c',
                text: '',
                img: 'IMG_055.png',
            },
            {
                char: 'd',
                text: '',
                img: 'IMG_055b.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1239',
        topicCode: 'road_and_traffic_signs',
        question:
            "You're waiting at a T-junction. What should you do if a vehicle is coming from the right, with its left indicator flashing?",
        questionImg: 'R8013.png',
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
        code: 'BB1240',
        topicCode: 'road_and_traffic_signs',
        question:
            "When may you use hazard warning lights while you're driving?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Instead of sounding the horn in a built-up area between 11.30 pm and 7.00 am',
            },
            {
                char: 'b',
                text: 'On a motorway or unrestricted dual carriageway, to warn of a hazard ahead',
            },
            {
                char: 'c',
                text: 'On rural routes, after a sign warning of animals',
            },
            {
                char: 'd',
                text: 'On the approach to toucan crossings, where cyclists are waiting to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1582',
        topicCode: 'road_and_traffic_signs',
        question:
            'Why should you make sure that your indicators are cancelled after turning at a junction?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To avoid flattening the battery',
            },
            {
                char: 'b',
                text: 'To avoid misleading other road users',
            },
            {
                char: 'c',
                text: 'To avoid dazzling other road users',
            },
            {
                char: 'd',
                text: 'To avoid damage to the indicator relay',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1583',
        topicCode: 'road_and_traffic_signs',
        question:
            "You're driving in busy traffic. You want to pull up just after a junction on the left. When should you signal?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "As you're passing or just after the junction",
            },
            {
                char: 'b',
                text: 'Just before you reach the junction',
            },
            {
                char: 'c',
                text: 'Well before you reach the junction',
            },
            {
                char: 'd',
                text: 'It would be better not to signal at all',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2436',
        topicCode: 'essential_documents',
        question: 'For how long is an MOT certificate normally valid?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Three years after the date it was issued',
            },
            {
                char: 'b',
                text: '10,000 miles',
            },
            {
                char: 'c',
                text: 'One year after the date it was issued',
            },
            {
                char: 'd',
                text: '30,000 miles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2536',
        topicCode: 'essential_documents',
        question: "What's a cover note?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A document issued before you receive your driving licence',
            },
            {
                char: 'b',
                text: 'A document issued before you receive your insurance certificate',
            },
            {
                char: 'c',
                text: 'A document issued before you receive your registration document',
            },
            {
                char: 'd',
                text: 'A document issued before you receive your MOT certificate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2682',
        topicCode: 'essential_documents',
        question:
            "You've just passed your first practical driving test. What will you have to do if you get six penalty points on your licence in the next two years?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Retake only your theory test',
            },
            {
                char: 'b',
                text: 'Retake your theory and practical tests',
            },
            {
                char: 'c',
                text: 'Retake only your practical test',
            },
            {
                char: 'd',
                text: 'Reapply for your full licence immediately',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2782',
        topicCode: 'essential_documents',
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
                text: "Until the vehicle is insured and MOT'd",
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
        code: 'AB2783',
        topicCode: 'essential_documents',
        question: "What's a Statutory Off-Road Notification (SORN)?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "A notification to tell DVSA that a vehicle doesn't have a current MOT",
            },
            {
                char: 'b',
                text: 'Information kept by the police about the owner of a vehicle',
            },
            {
                char: 'c',
                text: "A notification to tell DVLA that a vehicle isn't being used on the road",
            },
            {
                char: 'd',
                text: 'Information held by insurance companies to check a vehicle is insured',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2819',
        topicCode: 'essential_documents',
        question:
            "What's the maximum fine for driving or riding without insurance?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Unlimited',
            },
            {
                char: 'b',
                text: '£500',
            },
            {
                char: 'c',
                text: '£1000',
            },
            {
                char: 'd',
                text: '£5000',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'AB2838',
        topicCode: 'essential_documents',
        question:
            "Who's legally responsible for ensuring that a vehicle registration certificate (V5C) is updated?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The registered vehicle keeper',
            },
            {
                char: 'b',
                text: 'The vehicle manufacturer',
            },
            {
                char: 'c',
                text: 'Your insurance company',
            },
            {
                char: 'd',
                text: 'The licensing authority',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2874',
        topicCode: 'essential_documents',
        question:
            'Your insurer will issue you with an insurance certificate. When must you produce this document for inspection?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When making a SORN',
            },
            {
                char: 'b',
                text: 'When buying or selling a vehicle',
            },
            {
                char: 'c',
                text: 'When a police officer asks you for it',
            },
            {
                char: 'd',
                text: 'When your vehicle is having an MOT test',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2875',
        topicCode: 'essential_documents',
        question: 'When must your vehicle have valid insurance cover?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Before you can make a SORN',
            },
            {
                char: 'b',
                text: 'Before you can sell the vehicle',
            },
            {
                char: 'c',
                text: 'Before you can scrap the vehicle',
            },
            {
                char: 'd',
                text: 'Before you can tax the vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2877',
        topicCode: 'essential_documents',
        question:
            'What do you need before you can legally use a motor vehicle on the road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'An appropriate driving licence',
            },
            {
                char: 'b',
                text: 'Breakdown cover',
            },
            {
                char: 'c',
                text: 'Proof of your identity',
            },
            {
                char: 'd',
                text: 'A vehicle handbook',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2878',
        topicCode: 'essential_documents',
        question:
            'What must you have when you apply to renew your vehicle tax?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Valid insurance',
            },
            {
                char: 'b',
                text: "The vehicle's chassis number",
            },
            {
                char: 'c',
                text: 'The handbook',
            },
            {
                char: 'd',
                text: 'A valid driving licence',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2901',
        topicCode: 'essential_documents',
        question:
            "A police officer asks to see your documents. You don't have them with you. How many days do you have to produce them at a police station?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '5 days',
            },
            {
                char: 'b',
                text: '7 days',
            },
            {
                char: 'c',
                text: '14 days',
            },
            {
                char: 'd',
                text: '21 days',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2948',
        topicCode: 'essential_documents',
        question:
            'When should you update your vehicle registration certificate?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When you pass your driving test',
            },
            {
                char: 'b',
                text: 'When you move house',
            },
            {
                char: 'c',
                text: 'When your vehicle needs an MOT',
            },
            {
                char: 'd',
                text: 'When you have a collision',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1243',
        topicCode: 'essential_documents',
        question:
            "What must you check before you drive someone else's vehicle?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'That the vehicle owner has third-party insurance cover',
            },
            {
                char: 'b',
                text: 'That your own vehicle has insurance cover',
            },
            {
                char: 'c',
                text: 'That the vehicle is insured for your use',
            },
            {
                char: 'd',
                text: 'That the insurance documents are in the vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1245',
        topicCode: 'essential_documents',
        question:
            'Your car needs to pass an MOT test. What may be invalidated if you drive the car without a current MOT certificate?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The vehicle service record',
            },
            {
                char: 'b',
                text: 'The vehicle insurance',
            },
            {
                char: 'c',
                text: 'The vehicle tax',
            },
            {
                char: 'd',
                text: 'The vehicle registration document',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1404',
        topicCode: 'essential_documents',
        question:
            'What legal requirement must be met by a newly qualified driver?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They must display green L plates',
            },
            {
                char: 'b',
                text: 'They must have a new photograph taken for their full licence',
            },
            {
                char: 'c',
                text: 'They must be accompanied on their first motorway journey',
            },
            {
                char: 'd',
                text: 'They must have valid motor insurance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1506',
        topicCode: 'essential_documents',
        question: "What's covered by third-party insurance?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Damage to your vehicle',
            },
            {
                char: 'b',
                text: 'Fire damage to your vehicle',
            },
            {
                char: 'c',
                text: 'Flood damage to your vehicle',
            },
            {
                char: 'd',
                text: 'Damage to other vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1533',
        topicCode: 'essential_documents',
        question: "Who's responsible for paying the vehicle tax?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The driver of the vehicle',
            },
            {
                char: 'b',
                text: 'The registered keeper of the vehicle',
            },
            {
                char: 'c',
                text: 'The car dealer',
            },
            {
                char: 'd',
                text: 'The Driver and Vehicle Licensing Agency (DVLA)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1537',
        topicCode: 'essential_documents',
        question:
            'What information is found on a vehicle registration document?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The registered keeper',
            },
            {
                char: 'b',
                text: 'The type of insurance cover',
            },
            {
                char: 'c',
                text: 'The service history details',
            },
            {
                char: 'd',
                text: 'The date of the MOT',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1538',
        topicCode: 'essential_documents',
        question:
            'When must you contact the Driver and Vehicle Licensing Agency (DVLA)?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When you get a parking ticket',
            },
            {
                char: 'b',
                text: 'When you change your vehicle',
            },
            {
                char: 'c',
                text: 'When you use your vehicle for work',
            },
            {
                char: 'd',
                text: "When your vehicle's insurance is due",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1539',
        topicCode: 'essential_documents',
        question:
            'What circumstances require you to notify the Driver and Vehicle Licensing Agency (DVLA)?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When your health affects your driving',
            },
            {
                char: 'b',
                text: 'When you have to work abroad',
            },
            {
                char: 'c',
                text: 'When you lend your vehicle to someone',
            },
            {
                char: 'd',
                text: 'When your vehicle needs an MOT certificate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1599',
        topicCode: 'essential_documents',
        question: 'When could the cost of your insurance be reduced?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "When you're under 25 years old",
            },
            {
                char: 'b',
                text: "When you don't wear glasses",
            },
            {
                char: 'c',
                text: 'When you pass the driving test first time',
            },
            {
                char: 'd',
                text: 'When you complete the Pass Plus scheme',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'BB1696',
        topicCode: 'essential_documents',
        question:
            'In order to supervise a learner driver you need to have held a full driving licence for the same category of vehicle, for at least three years. What other requirement must you meet?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To have a car with dual controls',
            },
            {
                char: 'b',
                text: 'To be at least 21 years old',
            },
            {
                char: 'c',
                text: 'To be an approved driving instructor',
            },
            {
                char: 'd',
                text: 'To hold an advanced driving certificate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1697',
        topicCode: 'essential_documents',
        question:
            'Your car requires an MOT certificate. When is it legal to drive it without an MOT certificate?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Up to seven days after the old certificate has run out',
            },
            {
                char: 'b',
                text: 'When driving to an MOT centre to arrange an appointment',
            },
            {
                char: 'c',
                text: 'When driving the car with the owner’s permission',
            },
            {
                char: 'd',
                text: 'When driving to an appointment at an MOT centre',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1698',
        topicCode: 'essential_documents',
        question: 'When will a new car need its first MOT test?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "When it's one year old",
            },
            {
                char: 'b',
                text: "When it's three years old",
            },
            {
                char: 'c',
                text: "When it's five years old",
            },
            {
                char: 'd',
                text: "When it's seven years old",
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'BB1713',
        topicCode: 'essential_documents',
        question: 'What does third-party insurance cover?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Damage to your vehicle',
            },
            {
                char: 'b',
                text: 'Damage to other vehicles',
            },
            {
                char: 'c',
                text: 'Injury to yourself',
            },
            {
                char: 'd',
                text: 'All damage and injury',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1714',
        topicCode: 'essential_documents',
        question:
            "What's the legal minimum insurance cover you must have to drive on public roads?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Third party, fire and theft',
            },
            {
                char: 'b',
                text: 'Comprehensive',
            },
            {
                char: 'c',
                text: 'Third party only',
            },
            {
                char: 'd',
                text: 'Personal injury cover',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1715',
        topicCode: 'essential_documents',
        question:
            'What does it mean if your insurance policy has an excess of £500?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The insurance company will pay the first £500 of any claim',
            },
            {
                char: 'b',
                text: "You'll be paid £500 if you don't claim within one year",
            },
            {
                char: 'c',
                text: "Your vehicle is insured for a value of £500 if it's stolen",
            },
            {
                char: 'd',
                text: "You'll have to pay the first £500 of the cost of any claim",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2618',
        topicCode: 'incidents-accidents_and_emergencies',
        question: 'When are you allowed to use hazard warning lights?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When stopped and temporarily obstructing traffic',
            },
            {
                char: 'b',
                text: 'When travelling during darkness without headlights',
            },
            {
                char: 'c',
                text: 'When parked on double yellow lines to visit a shop',
            },
            {
                char: 'd',
                text: "When travelling slowly because you're lost",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2690',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "What should you do if you have to stop while you're going through a congested tunnel?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pull up very close to the vehicle in front to save space',
            },
            {
                char: 'b',
                text: "Ignore any message signs, as they're never up to date",
            },
            {
                char: 'c',
                text: 'Keep a safe distance from the vehicle in front',
            },
            {
                char: 'd',
                text: 'Make a U-turn and find another route',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2855',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'You arrive at the scene of a crash where someone is bleeding heavily from a wound in their arm. Nothing is embedded in the wound. What could you do to help?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Walk them around and keep them talking',
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
                text: 'Apply pressure over the wound',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2862',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "You're at an incident. What could you do to help an unconscious casualty?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Take photographs of the scene',
            },
            {
                char: 'b',
                text: "Check that they're breathing normally",
            },
            {
                char: 'c',
                text: 'Move them to somewhere more comfortable',
            },
            {
                char: 'd',
                text: 'Splash their face with cool water',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2865',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "A casualty isn't breathing normally and needs CPR. At what rate should you press down and release on the centre of their chest?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '10 times per minute',
            },
            {
                char: 'b',
                text: '120 times per minute',
            },
            {
                char: 'c',
                text: '60 times per minute',
            },
            {
                char: 'd',
                text: '240 times per minute',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2867',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'Following a collision, a person has been injured. What would be a warning sign for shock?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Flushed complexion',
            },
            {
                char: 'b',
                text: 'Warm dry skin',
            },
            {
                char: 'c',
                text: 'Slow pulse',
            },
            {
                char: 'd',
                text: 'Rapid shallow breathing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2870',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "An injured person has been placed in the recovery position. They're unconscious but breathing normally. What else should be done?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Press firmly between their shoulders',
            },
            {
                char: 'b',
                text: 'Place their arms by their side',
            },
            {
                char: 'c',
                text: 'Give them a hot sweet drink',
            },
            {
                char: 'd',
                text: 'Check their airway remains open',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2879',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "An injured motorcyclist is lying unconscious in the road. The traffic has stopped and there's no further danger. What could you do to help?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Remove their safety helmet',
            },
            {
                char: 'b',
                text: 'Seek medical assistance',
            },
            {
                char: 'c',
                text: 'Move the person off the road',
            },
            {
                char: 'd',
                text: 'Remove their leather jacket',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2891',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'What should you do if you see a large box fall from a lorry onto the motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Go to the next emergency telephone and report the hazard',
            },
            {
                char: 'b',
                text: "Catch up with the lorry and try to get the driver's attention",
            },
            {
                char: 'c',
                text: 'Stop close to the box until the police arrive',
            },
            {
                char: 'd',
                text: 'Pull over to the hard shoulder, then remove the box',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2900',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "You're going through a long tunnel. What will warn you of congestion or an incident ahead?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Hazard warning lines',
            },
            {
                char: 'b',
                text: 'Other drivers flashing their lights',
            },
            {
                char: 'c',
                text: 'Variable message signs',
            },
            {
                char: 'd',
                text: 'Areas with hatch markings',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2905',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "An adult casualty isn't breathing. To maintain circulation, CPR should be given. What's the correct depth to press down on their chest?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '1 to 2 centimetres',
            },
            {
                char: 'b',
                text: '5 to 6 centimetres',
            },
            {
                char: 'c',
                text: '10 to 15 centimetres',
            },
            {
                char: 'd',
                text: '15 to 20 centimetres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2914',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "You're the first person to arrive at an incident where people are badly injured. You’ve switched on your hazard warning lights and checked all engines are stopped. What else should you do?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Make sure that an ambulance has been called',
            },
            {
                char: 'b',
                text: 'Stop other cars and ask the drivers for help',
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
        code: 'AB2915',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'You arrive at the scene of a motorcycle crash. The rider is injured. When should their helmet be removed?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "Only when it's essential",
            },
            {
                char: 'b',
                text: 'Always straight away',
            },
            {
                char: 'c',
                text: 'Only when the motorcyclist asks',
            },
            {
                char: 'd',
                text: "Always, unless they're in shock",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2917',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "You arrive at an incident. There's no danger from fire or further collisions and the emergency services have been called. What's your first priority when attending to an unconscious motorcyclist?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "Check whether they're breathing normally",
            },
            {
                char: 'b',
                text: "Check whether they're bleeding",
            },
            {
                char: 'c',
                text: 'Check whether they have any broken bones',
            },
            {
                char: 'd',
                text: 'Check whether they have any bruising',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2920',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'At an incident, someone is unconscious and you want to help. What would be the first thing to check?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Whether their vehicle is insured',
            },
            {
                char: 'b',
                text: 'Whether they have any allergies',
            },
            {
                char: 'c',
                text: "Whether they're comfortable",
            },
            {
                char: 'd',
                text: 'Whether their airway is open',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2921',
        topicCode: 'incidents-accidents_and_emergencies',
        question: 'What could you do to help injured people at an incident?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep them warm and comfortable',
            },
            {
                char: 'b',
                text: 'Give them something to eat',
            },
            {
                char: 'c',
                text: 'Keep them on the move by walking them around',
            },
            {
                char: 'd',
                text: 'Give them a warm drink',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2924',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "There's been a collision. How can you help a driver who's suffering from shock?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Give them a drink',
            },
            {
                char: 'b',
                text: 'Reassure them confidently',
            },
            {
                char: 'c',
                text: 'Ask who caused the incident',
            },
            {
                char: 'd',
                text: 'Offer them a cigarette',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2926',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "You arrive at the scene of a motorcycle crash. No other vehicle is involved. The rider is unconscious and lying in the middle of the road. What's the first thing you should do at the scene?",
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
        code: 'AB2927',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "At an incident, how could you help a small child who isn't breathing?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "Find their parents and explain what's happening",
            },
            {
                char: 'b',
                text: 'Open their airway and begin CPR',
            },
            {
                char: 'c',
                text: 'Put them in the recovery position and slap their back',
            },
            {
                char: 'd',
                text: 'Talk to them confidently until an ambulance arrives',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2928',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "At an incident, a casualty isn't breathing. What should you do while helping them to start breathing again?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Put their arms across their chest',
            },
            {
                char: 'b',
                text: 'Shake them firmly',
            },
            {
                char: 'c',
                text: 'Roll them onto their side',
            },
            {
                char: 'd',
                text: 'Open their airway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2930',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'At an incident, someone is suffering from severe burns. How could you help them?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Apply lotions to the injury',
            },
            {
                char: 'b',
                text: 'Burst any blisters',
            },
            {
                char: 'c',
                text: 'Remove anything sticking to the burns',
            },
            {
                char: 'd',
                text: 'Douse the burns with clean, cool water',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2931',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "You arrive at an incident. A pedestrian is bleeding heavily from a leg wound. The leg isn't broken and there's nothing in the wound. How could you help?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Dab the wound to stop the bleeding',
            },
            {
                char: 'b',
                text: "Keep the casualty's legs flat on the ground",
            },
            {
                char: 'c',
                text: 'Give them a warm drink',
            },
            {
                char: 'd',
                text: 'Apply firm pressure over the wound',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2932',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'At an incident, a casualty is unconscious but breathing. When should you move them?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When an ambulance is on its way',
            },
            {
                char: 'b',
                text: 'When bystanders tell you to move them',
            },
            {
                char: 'c',
                text: "When there's a risk of further danger",
            },
            {
                char: 'd',
                text: 'When bystanders offer to help you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2934',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "At an incident, it's important to look after any casualties. What should you do with them when the area is safe?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Move them away from the vehicles',
            },
            {
                char: 'b',
                text: 'Ask them how it happened',
            },
            {
                char: 'c',
                text: 'Give them something to eat',
            },
            {
                char: 'd',
                text: 'Keep them where they are',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2935',
        topicCode: 'incidents-accidents_and_emergencies',
        question: 'Which sign shows that a tanker is carrying dangerous goods?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4055.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4051.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4627.png',
            },
            {
                char: 'd',
                text: '',
                img: 'TS4517.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2936',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "Which document may the police ask you to produce after you've been involved in a collision?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Your vehicle registration document',
            },
            {
                char: 'b',
                text: 'Your driving licence',
            },
            {
                char: 'c',
                text: 'Your theory test certificate',
            },
            {
                char: 'd',
                text: 'Your vehicle service record',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2937',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'After a collision, someone is unconscious in their vehicle. When should you call the emergency services?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Only as a last resort',
            },
            {
                char: 'b',
                text: 'As soon as possible',
            },
            {
                char: 'c',
                text: "After you've woken them up",
            },
            {
                char: 'd',
                text: 'After checking for broken bones',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2945',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'A collision has just happened. An injured person is lying in a busy road. What’s the first thing you should do?',
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
        code: 'AB2946',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'At an incident, how could you help a casualty who has stopped breathing?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Keep their head tilted forwards as far as possible',
            },
            {
                char: 'b',
                text: 'Follow the DR ABC code',
            },
            {
                char: 'c',
                text: 'Raise their legs to help with circulation',
            },
            {
                char: 'd',
                text: 'Try to give them something to drink',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2947',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "You’re at the scene of an incident. How could you help someone who's suffering from shock?",
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
                text: 'Give them a warm drink',
            },
            {
                char: 'd',
                text: 'Offer them some food',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2949',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "There's been a collision. A motorcyclist is lying injured and unconscious. Why should you only remove their helmet if it’s essential?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They might not want you to remove it',
            },
            {
                char: 'b',
                text: 'Removing it could make any injuries worse',
            },
            {
                char: 'c',
                text: 'Removing it could let them get cold',
            },
            {
                char: 'd',
                text: 'You could scratch the helmet as you remove it',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1252',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "You've broken down on a two-way road. You have a warning triangle. At least how far from your vehicle should you place the warning triangle?",
        questionImg: '85BW1961.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '5 metres (16 feet)',
            },
            {
                char: 'b',
                text: '25 metres (82 feet)',
            },
            {
                char: 'c',
                text: '45 metres (147 feet)',
            },
            {
                char: 'd',
                text: '100 metres (328 feet)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1254',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "Your car breaks down on a level crossing. What's the first thing you should do?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "Tell drivers behind what's happened",
            },
            {
                char: 'b',
                text: 'Leave your vehicle and get everyone clear',
            },
            {
                char: 'c',
                text: 'Walk down the track and signal the next train',
            },
            {
                char: 'd',
                text: "Stay in your car until you're told to move",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1256',
        topicCode: 'incidents-accidents_and_emergencies',
        question: 'What should you do if a tyre bursts while you’re driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pull on the parking brake',
            },
            {
                char: 'b',
                text: 'Brake as quickly as possible',
            },
            {
                char: 'c',
                text: 'Pull up slowly at the side of the road',
            },
            {
                char: 'd',
                text: 'Continue on at a normal speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1259',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'What should you do if your vehicle has a puncture on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive slowly to the next service area to get assistance',
            },
            {
                char: 'b',
                text: 'Pull up on the hard shoulder or in an emergency refuge area. Change the wheel as quickly as possible',
            },
            {
                char: 'c',
                text: 'Pull up on the hard shoulder or in an emergency refuge area and call for assistance',
            },
            {
                char: 'd',
                text: 'Switch on your hazard warning lights. Stop in your lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1363',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "Your vehicle has stalled in the middle of a level crossing. What should you do if the warning bells start to ring while you're trying to restart the engine?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Get out of the car and clear of the crossing',
            },
            {
                char: 'b',
                text: 'Run down the track to warn the signal operator',
            },
            {
                char: 'c',
                text: 'Carry on trying to restart the engine',
            },
            {
                char: 'd',
                text: 'Push the vehicle clear of the crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1611',
        topicCode: 'incidents-accidents_and_emergencies',
        question: 'What should you do before driving into a tunnel?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Switch off your radio',
            },
            {
                char: 'b',
                text: 'Take off your sunglasses',
            },
            {
                char: 'c',
                text: 'Close your sunroof',
            },
            {
                char: 'd',
                text: 'Switch on your windscreen wipers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1612',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "Which lights should you use when you're driving in a tunnel?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Sidelights',
            },
            {
                char: 'b',
                text: 'Front spotlights',
            },
            {
                char: 'c',
                text: 'Dipped headlights',
            },
            {
                char: 'd',
                text: 'Rear fog lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1623',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'What should you do to reduce the risk of your vehicle catching fire?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Keep water levels above maximum',
            },
            {
                char: 'b',
                text: 'Check out any strong smell of fuel',
            },
            {
                char: 'c',
                text: 'Avoid driving with a full tank of fuel',
            },
            {
                char: 'd',
                text: 'Use fuel additives',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1649',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "You're driving on the motorway. What should you do if luggage falls from your vehicle?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop at the next emergency telephone and report the incident',
            },
            {
                char: 'b',
                text: 'Stop on the motorway and switch on hazard warning lights while you pick it up',
            },
            {
                char: 'c',
                text: 'Walk back up the motorway to pick it up',
            },
            {
                char: 'd',
                text: 'Pull up on the hard shoulder and wave traffic down',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1700',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "What should you do if an instrument panel warning light comes on while you're driving?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue if the engine sounds all right',
            },
            {
                char: 'b',
                text: "Hope that it's just a temporary electrical fault",
            },
            {
                char: 'c',
                text: "Deal with the problem when there's more time",
            },
            {
                char: 'd',
                text: 'Check out the problem quickly and safely',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1704',
        topicCode: 'incidents-accidents_and_emergencies',
        question: 'What should you do if your vehicle breaks down in a tunnel?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stay in your vehicle and wait for the police',
            },
            {
                char: 'b',
                text: 'Stand in the lane behind your vehicle to warn others',
            },
            {
                char: 'c',
                text: 'Stand in front of your vehicle to warn oncoming drivers',
            },
            {
                char: 'd',
                text: 'Switch on hazard warning lights, then go and call for help',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1721',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "What should you do if your vehicle catches fire while you're driving through a tunnel?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Leave it where it is, with the engine running',
            },
            {
                char: 'b',
                text: 'Pull up, then walk to an emergency telephone',
            },
            {
                char: 'c',
                text: 'Park it away from the carriageway',
            },
            {
                char: 'd',
                text: "Drive it out of the tunnel if it's safe to do so",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1785',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'What should you do first if your vehicle has broken down on an automatic railway level crossing?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Get everyone out of the vehicle and clear of the crossing',
            },
            {
                char: 'b',
                text: 'Telephone your vehicle recovery service to move it',
            },
            {
                char: 'c',
                text: 'Walk along the track to give warning to any approaching trains',
            },
            {
                char: 'd',
                text: 'Try to push the vehicle clear of the crossing as soon as possible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1788',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "What's the first thing you must do if you have a collision while you're driving your car?",
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop only if someone waves at you',
            },
            {
                char: 'b',
                text: 'Call the emergency services',
            },
            {
                char: 'c',
                text: 'Stop at the scene of the incident',
            },
            {
                char: 'd',
                text: 'Call your insurance company',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1790',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            'What information should you share if you’re involved in a collision that causes damage to another vehicle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Your occupation and reason for your journey',
            },
            {
                char: 'b',
                text: 'Your name, address and vehicle registration number',
            },
            {
                char: 'c',
                text: 'Your national insurance number',
            },
            {
                char: 'd',
                text: 'Your internet service provider',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1792',
        topicCode: 'incidents-accidents_and_emergencies',
        question:
            "You lose control of your car and damage a garden wall. What must you do if the property owner isn't available?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Report the incident to the police within 24 hours',
            },
            {
                char: 'b',
                text: 'Go back to tell the house owner the next day',
            },
            {
                char: 'c',
                text: 'Report the incident to your insurance company when you get home',
            },
            {
                char: 'd',
                text: 'Find someone in the area to tell them about it immediately',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'AB2488',
        topicCode: 'vehicle_loading',
        question:
            "What restrictions apply if you're towing a trailer on a three-lane motorway?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "You mustn't exceed 50 mph",
            },
            {
                char: 'b',
                text: "You mustn't overtake",
            },
            {
                char: 'c',
                text: 'You must have a stabiliser fitted',
            },
            {
                char: 'd',
                text: "You mustn't use the right-hand lane",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1271',
        topicCode: 'vehicle_loading',
        question:
            "What should you do if you're towing a trailer and it starts to swing from side to side?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Ease off the accelerator to reduce your speed',
            },
            {
                char: 'b',
                text: 'Let go of the steering wheel and let it correct itself',
            },
            {
                char: 'c',
                text: 'Brake hard and hold the pedal down',
            },
            {
                char: 'd',
                text: 'Accelerate until it stabilises',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1364',
        topicCode: 'vehicle_loading',
        question:
            "When would you increase the pressure in your tyres so that it's above the normal value?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When the roads are slippery',
            },
            {
                char: 'b',
                text: 'When the vehicle is fitted with anti-lock brakes',
            },
            {
                char: 'c',
                text: 'When the tyre tread is worn below 2 mm',
            },
            {
                char: 'd',
                text: 'When carrying a heavy load',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1365',
        topicCode: 'vehicle_loading',
        question:
            "How will a heavy load on your roof rack affect your vehicle's handling?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It will improve the road holding',
            },
            {
                char: 'b',
                text: 'It will reduce the stopping distance',
            },
            {
                char: 'c',
                text: 'It will make the steering lighter',
            },
            {
                char: 'd',
                text: 'It will reduce stability',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1543',
        topicCode: 'vehicle_loading',
        question:
            'What would be affected if you carry a very heavy load on your vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "The vehicle's gearbox",
            },
            {
                char: 'b',
                text: "The vehicle's ventilation",
            },
            {
                char: 'c',
                text: "The vehicle's handling",
            },
            {
                char: 'd',
                text: "The vehicle's battery",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1544',
        topicCode: 'vehicle_loading',
        question:
            "Who's responsible for making sure that a vehicle isn't overloaded?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The driver of the vehicle',
            },
            {
                char: 'b',
                text: 'The owner of the items being carried',
            },
            {
                char: 'c',
                text: 'The person who loaded the vehicle',
            },
            {
                char: 'd',
                text: 'The licensing authority',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1706',
        topicCode: 'vehicle_loading',
        question:
            "You're planning to tow a caravan. What will help the handling of the combination?",
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A jockey wheel fitted to the tow bar',
            },
            {
                char: 'b',
                text: 'Power steering fitted to the towing vehicle',
            },
            {
                char: 'c',
                text: 'Anti-lock brakes fitted to the towing vehicle',
            },
            {
                char: 'd',
                text: 'A stabiliser fitted to the tow bar',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1707',
        topicCode: 'vehicle_loading',
        question:
            "Are passengers allowed to ride in a caravan that's being towed?",
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "Yes, if they're over 14",
            },
            {
                char: 'b',
                text: 'No, not at any time',
            },
            {
                char: 'c',
                text: 'Only if all the seats in the towing vehicle are full',
            },
            {
                char: 'd',
                text: 'Only if a stabiliser is fitted',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1708',
        topicCode: 'vehicle_loading',
        question:
            'What safety device must be fitted to a trailer braking system?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stabiliser',
            },
            {
                char: 'b',
                text: 'Jockey wheel',
            },
            {
                char: 'c',
                text: 'Corner steadies',
            },
            {
                char: 'd',
                text: 'Breakaway cable',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1735',
        topicCode: 'vehicle_loading',
        question:
            'You wish to tow a trailer. Where would you find the maximum noseweight for your vehicle’s tow hitch?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In the vehicle handbook',
            },
            {
                char: 'b',
                text: 'In The Highway Code',
            },
            {
                char: 'c',
                text: 'In your vehicle registration certificate',
            },
            {
                char: 'd',
                text: 'In your licence documents',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1745',
        topicCode: 'vehicle_loading',
        question: 'How should a load be carried on your roof rack?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Securely fastened with suitable restraints',
            },
            {
                char: 'b',
                text: 'Loaded towards the rear of the vehicle',
            },
            {
                char: 'c',
                text: 'Visible in your exterior mirror',
            },
            {
                char: 'd',
                text: 'Covered with plastic sheeting',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1754',
        topicCode: 'vehicle_loading',
        question:
            "You're carrying a child under three years old in your car. Which restraint is suitable for a child of this age?",
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A child seat',
            },
            {
                char: 'b',
                text: 'An adult holding a child',
            },
            {
                char: 'c',
                text: 'An adult seat belt',
            },
            {
                char: 'd',
                text: 'An adult lap belt',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2016_1',
        topicCode: 'videos',
        question: 'When are you allowed to wait on the yellow grid markings?',
        questionVideo: 'box_junction',
        answer: 'c',
        options: [
            {
                text: 'When you are going straight on',
                char: 'a',
            },
            {
                text: 'When you are turning left',
                char: 'b',
            },
            {
                text: 'When you are turning right',
                char: 'c',
            },
            {
                char: 'd',
                text: 'Never',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2016_2',
        topicCode: 'videos',
        question: 'Why did the lorry driver start turning so late?',
        questionVideo: 'box_junction',
        answer: 'a',
        options: [
            {
                text: 'Because the lorry needs the room to turn',
                char: 'a',
            },
            {
                text: 'Because the driver was late checking their right mirror',
                char: 'b',
            },
            {
                char: 'c',
                text: 'Because the driver was making room for the cyclist',
            },
            {
                text: 'Because the lorry set off too fast',
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2016_3',
        topicCode: 'videos',
        question: 'When may you wait in the area marked with a cycle?',
        questionVideo: 'box_junction',
        answer: 'd',
        options: [
            {
                text: "When you've checked your mirrors for cyclists",
                char: 'a',
            },
            {
                char: 'b',
                text: 'When there are no cycles in the marked area',
            },
            {
                text: "When you've turned on your hazard warning lights",
                char: 'c',
            },
            {
                text: "When the traffic lights change to amber after you've passed the first line",
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2040_1',
        topicCode: 'videos',
        question:
            'What hazard do you need to look out for as you drive under the bridge?',
        questionVideo: 'rural_railway_crossing',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Pedestrians walking in the road',
            },
            {
                text: 'Overhanging tree branches',
                char: 'b',
            },
            {
                text: 'A narrowing of the road',
                char: 'c',
            },
            {
                char: 'd',
                text: 'The height of the bridge',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2040_2',
        topicCode: 'videos',
        question: "What's the speed limit on this road?",
        questionVideo: 'rural_railway_crossing',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '30 mph',
            },
            {
                text: '40 mph',
                char: 'b',
            },
            {
                text: '50 mph',
                char: 'c',
            },
            {
                char: 'd',
                text: '60 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2040_3',
        topicCode: 'videos',
        question:
            'What does the single yellow line along the side of the road mean?',
        questionVideo: 'rural_railway_crossing',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Waiting restrictions apply at certain times',
            },
            {
                char: 'b',
                text: 'It marks the edge of the road',
            },
            {
                char: 'c',
                text: 'No stopping at any time',
            },
            {
                text: 'No waiting at any time',
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2044_1',
        topicCode: 'videos',
        question:
            "What's the speed limit for the car towing the caravan on this road?",
        questionVideo: 'caravan',
        answer: 'a',
        options: [
            {
                text: '60 mph',
                char: 'a',
            },
            {
                text: '70 mph',
                char: 'b',
            },
            {
                char: 'c',
                text: '50 mph',
            },
            {
                char: 'd',
                text: '40 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2044_2',
        topicCode: 'videos',
        question:
            'The caravan starts to swing from side to side. What should the driver do to bring it back under control?',
        questionVideo: 'caravan',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Brake firmly until the swinging stops',
            },
            {
                text: "Steer sharply in the opposite direction to the caravan's swing",
                char: 'b',
            },
            {
                text: 'Ease off the accelerator to slow down',
                char: 'c',
            },
            {
                char: 'd',
                text: 'Accelerate until the swinging stops',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2044_3',
        topicCode: 'videos',
        question: 'Why is the caravan unstable and swinging from side to side?',
        questionVideo: 'caravan',
        answer: 'd',
        options: [
            {
                text: 'Because the other cars are passing too close to it',
                char: 'a',
            },
            {
                char: 'b',
                text: 'Because there are traffic cones on the road',
            },
            {
                char: 'c',
                text: "Because it's in the wrong lane",
            },
            {
                text: 'Because of side winds',
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2052_1',
        topicCode: 'videos',
        question: "Why is there a warning 'Reduce speed now'?",
        questionVideo: 'hadley_road',
        answer: 'c',
        options: [
            {
                text: 'Traffic is merging from the left',
                char: 'a',
            },
            {
                char: 'b',
                text: "There's a T-junction ahead",
            },
            {
                text: "There's a crossroads and a double bend ahead",
                char: 'c',
            },
            {
                char: 'd',
                text: "There's a staggered junction ahead",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2052_2',
        topicCode: 'videos',
        question: 'Why has the line in the centre of the road changed?',
        questionVideo: 'hadley_road',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To warn you the speed limit has changed',
            },
            {
                text: 'To warn of hazards ahead',
                char: 'b',
            },
            {
                text: "To warn you there's a speed camera ahead",
                char: 'c',
            },
            {
                text: 'To warn you not to change lanes',
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2052_3',
        topicCode: 'videos',
        question:
            'The driver towing the caravan wants to turn right onto the dual carriageway. What should they do?',
        questionVideo: 'hadley_road',
        answer: 'd',
        options: [
            {
                text: "Move partly into the central reservation and wait until it's safe to turn",
                char: 'a',
            },
            {
                char: 'b',
                text: 'Move out when an approaching driver flashes their headlights',
            },
            {
                text: 'Turn left and find a suitable place to turn around.',
                char: 'c',
            },
            {
                char: 'd',
                text: 'Wait until the road is clear in both directions before turning',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2053_1',
        topicCode: 'videos',
        question: 'What do the lines along the centre of the road mean?',
        questionVideo: 'hill_farm',
        answer: 'd',
        options: [
            {
                text: 'No stopping',
                char: 'a',
            },
            {
                char: 'b',
                text: 'No overtaking',
            },
            {
                text: 'They mark the centre of the road',
                char: 'c',
            },
            {
                text: "There's a hazard ahead",
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2053_2',
        topicCode: 'videos',
        question: 'You want to overtake the tractor. What should you do?',
        questionVideo: 'hill_farm',
        answer: 'b',
        options: [
            {
                text: 'Speed up and overtake before you get to the bend',
                char: 'a',
            },
            {
                char: 'b',
                text: 'Stay behind and wait until you have a clear view',
            },
            {
                text: 'Overtake straight after the oncoming car passes',
                char: 'c',
            },
            {
                text: 'Sound your horn and make the tractor pull over',
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2053_3',
        topicCode: 'videos',
        question: 'Why has the tractor got flashing amber lights?',
        questionVideo: 'hill_farm',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "To warn you it's a slow-moving vehicle",
            },
            {
                char: 'b',
                text: 'To warn you it has a wide load',
            },
            {
                text: 'To tell you not to overtake',
                char: 'c',
            },
            {
                text: "To warn you it's breaking down",
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2063_1',
        topicCode: 'videos',
        question:
            'Why should you take care driving past the man with the cane?',
        questionVideo: 'zebra_crossing',
        answer: 'c',
        options: [
            {
                text: "He's deaf",
                char: 'a',
            },
            {
                text: "He's blind",
                char: 'b',
            },
            {
                char: 'c',
                text: "He's deaf and blind",
            },
            {
                char: 'd',
                text: "He's physically disabled",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2063_2',
        topicCode: 'videos',
        question: 'How should you approach the zebra crossing?',
        questionVideo: 'zebra_crossing',
        answer: 'a',
        options: [
            {
                text: 'Be ready to slow down or stop to allow pedestrians to cross',
                char: 'a',
            },
            {
                char: 'b',
                text: 'Slow down and wave the pedestrians across',
            },
            {
                char: 'c',
                text: 'Speed up to get past the crossing',
            },
            {
                text: 'Sound your horn to warn the pedestrians',
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2063_3',
        topicCode: 'videos',
        question:
            "You've stopped at the zebra crossing. When may you move off?",
        questionVideo: 'zebra_crossing',
        answer: 'b',
        options: [
            {
                text: 'When the pedestrians have cleared your side of the road',
                char: 'a',
            },
            {
                text: 'When the pedestrians have completely crossed',
                char: 'b',
            },
            {
                char: 'c',
                text: 'When the oncoming car moves off',
            },
            {
                char: 'd',
                text: 'When the driver behind you sounds their horn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2067_1',
        topicCode: 'videos',
        question:
            "As you approach the roundabout, there's a sign showing a single white bar on a green background. What does this sign tell you?",
        questionVideo: 'multi_lane',
        answer: 'c',
        options: [
            {
                text: 'There are chevrons on the roundabout',
                char: 'a',
            },
            {
                char: 'b',
                text: 'The roundabout is 50 yards ahead',
            },
            {
                char: 'c',
                text: 'The roundabout is 100 yards ahead',
            },
            {
                text: 'Give way at the roundabout',
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2067_2',
        topicCode: 'videos',
        question:
            'As you approach the roundabout, you want to change lanes. What routine should you follow?',
        questionVideo: 'multi_lane',
        answer: 'a',
        options: [
            {
                text: 'Mirrors, signal, manoeuvre',
                char: 'a',
            },
            {
                char: 'b',
                text: 'Signal, mirrors, manoeuvre',
            },
            {
                char: 'c',
                text: 'Manoeuvre, signal, mirrors',
            },
            {
                char: 'd',
                text: 'Manoeuvre, mirrors, signal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2067_3',
        topicCode: 'videos',
        question:
            'You want to travel on the A61. Which lane should you use at the roundabout?',
        questionVideo: 'multi_lane',
        answer: 'b',
        options: [
            {
                text: 'Only the left lane',
                char: 'a',
            },
            {
                char: 'b',
                text: 'Either the left lane or middle lane',
            },
            {
                char: 'c',
                text: 'Only the middle lane',
            },
            {
                char: 'd',
                text: 'Either the middle lane or right lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2070_1',
        topicCode: 'videos',
        question: 'Why has the bus driver positioned the bus on the left?',
        questionVideo: 'roundabout_bus',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In case the pedestrian wants to get on the bus',
            },
            {
                char: 'b',
                text: 'The bus needs extra room to get around the roundabout',
            },
            {
                text: "The sign on the roundabout is directing traffic to 'keep left'",
                char: 'c',
            },
            {
                text: 'To get a better view of the roundabout',
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2070_2',
        topicCode: 'videos',
        question:
            'Why does the cyclist take the longer route around the roundabout?',
        questionVideo: 'roundabout_bus',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The cyclist is riding into a one-way street',
            },
            {
                text: "It's easier to give arm signals while you're on the left",
                char: 'b',
            },
            {
                char: 'c',
                text: 'Cyclists may keep to the left for safety',
            },
            {
                text: 'To avoid being dazzled by the sun',
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2070_3',
        topicCode: 'videos',
        question: 'What do the yellow lines along the edge of the road mean?',
        questionVideo: 'roundabout_bus',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They are rumble strips',
            },
            {
                text: 'They mark the edge of the road',
                char: 'b',
            },
            {
                text: "Pedestrians shouldn't cross where there are yellow lines",
                char: 'c',
            },
            {
                char: 'd',
                text: 'No waiting',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2071_1',
        topicCode: 'videos',
        question: 'Why is it dangerous to overtake near a junction?',
        questionVideo: 'motorcycles_overtaking',
        answer: 'b',
        options: [
            {
                text: 'The road surface will be slippery',
                char: 'a',
            },
            {
                char: 'b',
                text: 'A driver waiting to emerge might not see you',
            },
            {
                char: 'c',
                text: "You'll be in the blind spot of the driver waiting to emerge",
            },
            {
                char: 'd',
                text: 'Your signal would be hard to see',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2071_2',
        topicCode: 'videos',
        question:
            'What is the speed limit on this road for the car towing the caravan?',
        questionVideo: 'motorcycles_overtaking',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '60 mph',
            },
            {
                char: 'b',
                text: '30 mph',
            },
            {
                text: '40 mph',
                char: 'c',
            },
            {
                text: '50 mph',
                char: 'd',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'VM2071_3',
        topicCode: 'videos',
        question:
            'What do the white diagonal stripe markings in the middle of the road mean?',
        questionVideo: 'motorcycles_overtaking',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'No overtaking',
            },
            {
                text: "You must not enter the area unless it's an emergency",
                char: 'b',
            },
            {
                text: "You should not enter the area unless it's necessary and you can see it's safe",
                char: 'c',
            },
            {
                char: 'd',
                text: "It's an overtaking area for motorcyclists",
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2952',
        topicCode: 'vulnerable_road_users',
        question:
            "You're turning right from a main road into a side road. There's no oncoming traffic. What should you do if pedestrians are standing on the pavement waiting to cross the side road?",
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
        isNIExempts: false,
    },
    {
        code: 'AB2953',
        topicCode: 'vulnerable_road_users',
        question:
            'You are travelling on a narrow section of road. What should you do if a horse rider ahead is riding in the centre of the lane?',
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
        isNIExempts: false,
    },
    {
        code: 'AB2954',
        topicCode: 'vulnerable_road_users',
        question:
            'You are about to overtake a cyclist on a road that has a 30 mph speed limit. How much room should you leave them as you overtake?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At least as much room as you would if you were overtaking a car',
            },
            {
                char: 'b',
                text: 'At least a car’s width',
            },
            {
                char: 'c',
                text: 'At least a car’s length',
            },
            {
                char: 'd',
                text: 'At least 2 car widths',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2955',
        topicCode: 'vulnerable_road_users',
        question:
            'You are turning left from a main road into a side road. What should you do if there’s a pedestrian on the pavement waiting to cross the side road?',
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
                text: 'Sound your horn to let the pedestrian know you’re there',
            },
            {
                char: 'd',
                text: 'Wait and give way to the pedestrian',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2950',
        topicCode: 'motorway_rules',
        question:
            'You have stopped in an emergency refuge area. What must you do before you rejoin the carriageway?',
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
                text: "Switch on your vehicle's headlights",
            },
            {
                char: 'd',
                text: 'Move away with your hazard lights on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2951',
        topicCode: 'motorway_rules',
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
                text: "Wait until a vehicle in the left-hand lane signals to you that it's safe to rejoin",
            },
            {
                char: 'd',
                text: 'Keep your hazard lights flashing until you have safely rejoined the carriageway.',
            },
        ],
        isNIExempts: false,
    },
];

export default questions;
