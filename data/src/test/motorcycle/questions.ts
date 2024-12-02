import type { IQuestion } from '@drivingo/models';

const questions: IQuestion[] = [
    {
        code: 'AB2005',
        topicCode: 'alertness',
        question: 'MTRC Where should you avoid overtaking?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Just after a bend',
                img: '',
            },
            {
                char: 'b',
                text: 'In a one-way street',
                img: '',
            },
            {
                char: 'c',
                text: 'On a 30 mph road',
                img: '',
            },
            {
                char: 'd',
                text: 'Approaching a dip in the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2007',
        topicCode: 'alertness',
        question: 'MTRC What does this curved arrow road marking mean?',
        questionImg: 'AB2007n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Heavy vehicles should take the next road on the left to avoid a weight limit',
                img: '',
            },
            {
                char: 'b',
                text: 'The road ahead bends to the left',
                img: '',
            },
            {
                char: 'c',
                text: 'Overtaking traffic should move back to the left',
                img: '',
            },
            {
                char: 'd',
                text: 'The road ahead has a camber to the left',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2008',
        topicCode: 'alertness',
        question:
            "What should you do if your mobile phone rings while you're driving or riding?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop immediately',
                img: '',
            },
            {
                char: 'b',
                text: 'Answer it immediately',
                img: '',
            },
            {
                char: 'c',
                text: 'Leave it until you have stopped in a safe place',
                img: '',
            },
            {
                char: 'd',
                text: 'Pull up at the nearest kerb',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2009',
        topicCode: 'alertness',
        question: 'MTRC Why are these yellow lines painted across the road?',
        questionImg: 'AB2009n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To help you choose the correct lane',
                img: '',
            },
            {
                char: 'b',
                text: 'To help you keep the correct separation distance',
                img: '',
            },
            {
                char: 'c',
                text: 'To make you aware of your speed',
                img: '',
            },
            {
                char: 'd',
                text: 'To tell you the distance to the roundabout',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2501',
        topicCode: 'alertness',
        question:
            "What should you do when you're approaching traffic lights that have been green for some time?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Accelerate hard',
                img: '',
            },
            {
                char: 'b',
                text: 'Maintain your speed',
                img: '',
            },
            {
                char: 'c',
                text: 'Be ready to stop',
                img: '',
            },
            {
                char: 'd',
                text: 'Brake hard',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2636',
        topicCode: 'alertness',
        question:
            'What should you do before slowing down or stopping your vehicle?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound the horn',
                img: '',
            },
            {
                char: 'b',
                text: 'Use the mirrors',
                img: '',
            },
            {
                char: 'c',
                text: 'Select a higher gear',
                img: '',
            },
            {
                char: 'd',
                text: 'Flash the headlights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2702',
        topicCode: 'alertness',
        question:
            "You're following a large vehicle. Why should you stay a safe distance behind it?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "You'll be able to corner more quickly",
                img: '',
            },
            {
                char: 'b',
                text: "You'll help the large vehicle to stop more easily",
                img: '',
            },
            {
                char: 'c',
                text: "You'll give the driver a chance to see you in their mirrors",
                img: '',
            },
            {
                char: 'd',
                text: "You'll keep out of the wind better",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2828',
        topicCode: 'alertness',
        question:
            'Why should you use your mirrors when you see a hazard ahead?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "Because you'll need to accelerate out of danger",
                img: '',
            },
            {
                char: 'b',
                text: 'To assess how your actions will affect the traffic behind',
                img: '',
            },
            {
                char: 'c',
                text: "Because you'll need to brake sharply and stop",
                img: '',
            },
            {
                char: 'd',
                text: "To check what's happening on the road ahead",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2829',
        topicCode: 'alertness',
        question:
            "You're waiting to turn right at the end of a road. What should you do if your view is obstructed by parked vehicles?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop and then move forward slowly and carefully for a clear view',
                img: '',
            },
            {
                char: 'b',
                text: 'Move quickly to where you can see so you only block traffic from one direction',
                img: '',
            },
            {
                char: 'c',
                text: "Wait for a pedestrian to let you know when it's safe for you to emerge",
                img: '',
            },
            {
                char: 'd',
                text: 'Turn your vehicle around immediately and find another junction to use',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1002',
        topicCode: 'alertness',
        question:
            'There are objects hanging from your interior mirror. Why could this be a hazard?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your view could be obstructed',
                img: '',
            },
            {
                char: 'b',
                text: 'Your sun visor might get tangled',
                img: '',
            },
            {
                char: 'c',
                text: 'Your radio reception might be affected',
                img: '',
            },
            {
                char: 'd',
                text: 'Your windscreen could mist up more easily',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1005',
        topicCode: 'alertness',
        question:
            "You're on a long motorway journey. What should you do if you start to feel sleepy?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Play some loud music',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop on the hard shoulder for a rest',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive faster to complete your journey sooner',
                img: '',
            },
            {
                char: 'd',
                text: 'Leave the motorway and stop in a safe place',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1007',
        topicCode: 'alertness',
        question:
            'Why should you switch your headlights on when it first starts to get dark?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To make your dials easier to see',
                img: '',
            },
            {
                char: 'b',
                text: 'So others can see you more easily',
                img: '',
            },
            {
                char: 'c',
                text: 'So that you blend in with other drivers',
                img: '',
            },
            {
                char: 'd',
                text: 'Because the street lights are lit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1287',
        topicCode: 'alertness',
        question:
            'MTRC What’s most likely to distract you while you’re driving?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Using a mobile phone',
                img: '',
            },
            {
                char: 'b',
                text: 'Using the windscreen wipers',
                img: '',
            },
            {
                char: 'c',
                text: 'Using the demisters',
                img: '',
            },
            {
                char: 'd',
                text: 'Using the mirrors',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1294',
        topicCode: 'alertness',
        question:
            "You're driving your car. When may you use a hand-held mobile phone?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "When you're receiving a call",
                img: '',
            },
            {
                char: 'b',
                text: "When you've parked safely",
                img: '',
            },
            {
                char: 'c',
                text: "When you're driving at less than 30 mph",
                img: '',
            },
            {
                char: 'd',
                text: 'When your car has automatic transmission',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1366',
        topicCode: 'alertness',
        question:
            "You're driving on a wet road. What should you do if you have to stop your vehicle in an emergency?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Apply the parking brake and footbrake together',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep both hands on the steering wheel',
                img: '',
            },
            {
                char: 'c',
                text: 'Select reverse gear',
                img: '',
            },
            {
                char: 'd',
                text: 'Give an arm signal',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1390',
        topicCode: 'alertness',
        question:
            'What should you do when you move off from behind a parked car?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Give a signal after moving off',
                img: '',
            },
            {
                char: 'b',
                text: 'Look around before moving off',
                img: '',
            },
            {
                char: 'c',
                text: 'Look around after moving off',
                img: '',
            },
            {
                char: 'd',
                text: 'Use the exterior mirrors only',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1439',
        topicCode: 'alertness',
        question:
            "You're travelling along this road. How should you pass the cyclist?",
        questionImg: 'BB1439n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Sound your horn as you pass',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep close to them as you pass',
                img: '',
            },
            {
                char: 'c',
                text: 'Leave them plenty of room as you pass',
                img: '',
            },
            {
                char: 'd',
                text: 'Change down one gear before you pass',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1573',
        topicCode: 'alertness',
        question:
            'When do windscreen pillars cause a serious obstruction to your view?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "When you're driving on a motorway",
                img: '',
            },
            {
                char: 'b',
                text: "When you're driving on a dual carriageway",
                img: '',
            },
            {
                char: 'c',
                text: "When you're approaching a one-way street",
                img: '',
            },
            {
                char: 'd',
                text: "When you're approaching bends and junctions",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1595',
        topicCode: 'alertness',
        question:
            "What should you do if you can't see clearly behind when you're reversing?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Open the window to look behind',
                img: '',
            },
            {
                char: 'b',
                text: 'Open the door to look behind',
                img: '',
            },
            {
                char: 'c',
                text: 'Look in the nearside mirror',
                img: '',
            },
            {
                char: 'd',
                text: 'Ask someone to guide you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1626',
        topicCode: 'alertness',
        question: 'MTRC What does the term ‘blind spot’ mean?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'An area covered by your right-hand mirror',
                img: '',
            },
            {
                char: 'b',
                text: 'An area not covered by your headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'An area covered by your left-hand mirror',
                img: '',
            },
            {
                char: 'd',
                text: 'An area not visible to the driver',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1629',
        topicCode: 'alertness',
        question:
            "What's likely to happen if you use a hands-free phone while you're driving?",
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
                text: 'It will increase your concentration',
                img: '',
            },
            {
                char: 'c',
                text: 'It will reduce your view',
                img: '',
            },
            {
                char: 'd',
                text: 'It will divert your attention',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1632',
        topicCode: 'alertness',
        question:
            "You're turning right onto a dual carriageway. What should you do before emerging?",
        questionImg: 'BB1632.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop, apply the parking brake and then select a low gear',
                img: '',
            },
            {
                char: 'b',
                text: 'Position your vehicle well to the left of the side road',
                img: '',
            },
            {
                char: 'c',
                text: 'Check that the central reservation is wide enough for your vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Make sure that you leave enough room for a vehicle behind',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1633',
        topicCode: 'alertness',
        question:
            "You're waiting to emerge from a junction. The windscreen pillar is restricting your view. What should you be particularly aware of?",
        questionImg: 'BB1633.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Lorries',
                img: '',
            },
            {
                char: 'b',
                text: 'Buses',
                img: '',
            },
            {
                char: 'c',
                text: 'Motorcyclists',
                img: '',
            },
            {
                char: 'd',
                text: 'Coaches',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1726',
        topicCode: 'alertness',
        question:
            "How can you make sure that a satellite navigation (satnav) system doesn't distract you when you're driving?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "Turn it off while you're driving in built-up areas",
                img: '',
            },
            {
                char: 'b',
                text: 'Choose a voice that you find calming',
                img: '',
            },
            {
                char: 'c',
                text: "Only set the destination when you're lost",
                img: '',
            },
            {
                char: 'd',
                text: 'Set it before starting your journey',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2012',
        topicCode: 'attitude',
        question:
            'What must you do when the amber light is flashing at a pelican crossing?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop and wait for the green light',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop and wait for the red light',
                img: '',
            },
            {
                char: 'c',
                text: 'Give way to pedestrians waiting to cross',
                img: '',
            },
            {
                char: 'd',
                text: 'Give way to pedestrians already on the crossing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2015',
        topicCode: 'attitude',
        question:
            'Why should you never wave people across at pedestrian crossings?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Another vehicle may be coming',
                img: '',
            },
            {
                char: 'b',
                text: 'They may not be looking',
                img: '',
            },
            {
                char: 'c',
                text: "It's safer for you to carry on",
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
        code: 'AB2022',
        topicCode: 'attitude',
        question:
            'Why is it dangerous to drive too close to the vehicle ahead?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your engine will overheat',
                img: '',
            },
            {
                char: 'b',
                text: 'Your mirrors will need adjusting',
                img: '',
            },
            {
                char: 'c',
                text: 'Your view of the road ahead will be restricted',
                img: '',
            },
            {
                char: 'd',
                text: 'Your satnav will be confused',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2023',
        topicCode: 'attitude',
        question:
            'MTRC What will happen if you follow this vehicle too closely?',
        questionImg: 'AB2023n1.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your brakes will overheat',
                img: '',
            },
            {
                char: 'b',
                text: 'Your fuel consumption will be increased',
                img: '',
            },
            {
                char: 'c',
                text: 'Your engine will overheat',
                img: '',
            },
            {
                char: 'd',
                text: 'Your view ahead will be reduced',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2025',
        topicCode: 'attitude',
        question:
            "What's the minimum time gap you should leave when following a vehicle on a wet road?",
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
        code: 'AB2028',
        topicCode: 'attitude',
        question:
            "You're being overtaken by a long, heavily laden lorry. What should you do if it's taking a long time for it to overtake?",
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
        code: 'AB2029',
        topicCode: 'attitude',
        question: 'MTRC Which vehicle will use a blue flashing beacon?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Motorway maintenance',
                img: '',
            },
            {
                char: 'b',
                text: 'Bomb disposal',
                img: '',
            },
            {
                char: 'c',
                text: 'Snow plough',
                img: '',
            },
            {
                char: 'd',
                text: 'Breakdown recovery',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2031',
        topicCode: 'attitude',
        question:
            "What should you do if you're being followed by an ambulance showing flashing blue lights?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "Pull over as soon as it's safe to do so",
                img: '',
            },
            {
                char: 'b',
                text: 'Accelerate hard to get away from it',
                img: '',
            },
            {
                char: 'c',
                text: 'Maintain your speed and course',
                img: '',
            },
            {
                char: 'd',
                text: 'Brake harshly and stop well out into the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2033',
        topicCode: 'attitude',
        question:
            'What type of emergency vehicle is fitted with a green flashing beacon?',
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
                text: "Doctor's car",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2036',
        topicCode: 'attitude',
        question: 'MTRC Who should obey diamond-shaped traffic signs?',
        questionImg: 'AB2036.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Tram drivers',
                img: '',
            },
            {
                char: 'b',
                text: 'Bus drivers',
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
        code: 'AB2037',
        topicCode: 'attitude',
        question:
            'On a road where trams operate, which vehicles will be most at risk from the tram rails?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Cars',
                img: '',
            },
            {
                char: 'b',
                text: 'Cycles',
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
        code: 'AB2039',
        topicCode: 'attitude',
        question: "When should you use your vehicle's horn?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To alert others to your presence',
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
        code: 'AB2040',
        topicCode: 'attitude',
        question:
            "You're in a one-way street and want to turn right. Where should you position your vehicle when there are two lanes?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In the right-hand lane',
                img: '',
            },
            {
                char: 'b',
                text: 'In the left-hand lane',
                img: '',
            },
            {
                char: 'c',
                text: 'In either lane, depending on the traffic',
                img: '',
            },
            {
                char: 'd',
                text: 'Just left of the centre line',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2041',
        topicCode: 'attitude',
        question:
            'You wish to turn right ahead. Why should you take up the correct position in good time?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To allow other drivers to pull out in front of you',
                img: '',
            },
            {
                char: 'b',
                text: "To give a better view into the road that you're joining",
                img: '',
            },
            {
                char: 'c',
                text: 'To help other road users know what you intend to do',
                img: '',
            },
            {
                char: 'd',
                text: 'To allow drivers to pass you on the right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2503',
        topicCode: 'attitude',
        question:
            'Which type of crossing allows cyclists to ride across while pedestrians are also crossing?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Toucan',
                img: '',
            },
            {
                char: 'b',
                text: 'Puffin',
                img: '',
            },
            {
                char: 'c',
                text: 'Pelican',
                img: '',
            },
            {
                char: 'd',
                text: 'Zebra',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2620',
        topicCode: 'attitude',
        question:
            "You're travelling at the legal speed limit. What should you do if the vehicle behind approaches quickly, flashing its headlights?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Accelerate to make a gap behind you',
                img: '',
            },
            {
                char: 'b',
                text: 'Touch the brakes sharply to show your brake lights',
                img: '',
            },
            {
                char: 'c',
                text: 'Maintain your speed to prevent the vehicle from overtaking',
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
        code: 'AB2643',
        topicCode: 'attitude',
        question:
            'MTRC When should you flash your headlights at other road users?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "When showing that you're giving way",
                img: '',
            },
            {
                char: 'b',
                text: "When showing that you're about to turn",
                img: '',
            },
            {
                char: 'c',
                text: 'When telling them that you have right of way',
                img: '',
            },
            {
                char: 'd',
                text: "When letting them know that you're there",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2644',
        topicCode: 'attitude',
        question:
            "You're approaching an unmarked crossroads. How should you deal with the junction?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Accelerate and keep to the middle',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down and keep to the right',
                img: '',
            },
            {
                char: 'c',
                text: 'Accelerate and look to the left',
                img: '',
            },
            {
                char: 'd',
                text: 'Slow down and look both ways',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2699',
        topicCode: 'attitude',
        question:
            "The conditions are good and dry. When should you use the 'two-second rule'?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Before restarting the engine after it has stalled',
                img: '',
            },
            {
                char: 'b',
                text: 'When checking your gap from the vehicle in front',
                img: '',
            },
            {
                char: 'c',
                text: "Before using the 'Mirrors - Signal - Manoeuvre' routine",
                img: '',
            },
            {
                char: 'd',
                text: 'When traffic lights change to green',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2703',
        topicCode: 'attitude',
        question:
            'MTRC Which colour follows the green signal at a puffin crossing?',
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
        code: 'AB2704',
        topicCode: 'attitude',
        question:
            "You're in a line of traffic. What action should you take if the driver behind is following very closely?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Ignore the driver behind and continue to travel within the speed limit',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down, gradually increasing the gap between you and the vehicle in front',
                img: '',
            },
            {
                char: 'c',
                text: 'Signal left and wave the driver behind to come past',
                img: '',
            },
            {
                char: 'd',
                text: 'Move over to a position just left of the centre line of the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1011',
        topicCode: 'attitude',
        question:
            "You're driving on a clear night. Which lights should you use if the national speed limit applies and there's a steady stream of oncoming traffic?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Full-beam headlights',
                img: '',
            },
            {
                char: 'b',
                text: 'Sidelights',
                img: '',
            },
            {
                char: 'c',
                text: 'Dipped headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Fog lights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1012',
        topicCode: 'attitude',
        question:
            "You're driving behind a large goods vehicle. What should you do if it signals left but steers to the right?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slow down and let the vehicle turn',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive on, keeping to the left',
                img: '',
            },
            {
                char: 'c',
                text: 'Overtake on the right of it',
                img: '',
            },
            {
                char: 'd',
                text: 'Hold your speed and sound your horn',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1013',
        topicCode: 'attitude',
        question:
            "You're driving along this road. What should you do if the red car cuts in close in front of you?",
        questionImg: 'BB1013n1.gif',
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
        code: 'BB1014',
        topicCode: 'attitude',
        question:
            "You're waiting in a traffic queue at night. How can you avoid dazzling drivers behind you?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use the parking brake and release the footbrake',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep your foot on the footbrake',
                img: '',
            },
            {
                char: 'c',
                text: 'Balance the clutch with the accelerator',
                img: '',
            },
            {
                char: 'd',
                text: 'Use the parking brake and footbrake together',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1016',
        topicCode: 'attitude',
        question:
            "You're driving in traffic at the speed limit for the road. What should you do if the driver behind is trying to overtake?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move closer to the car ahead, so the driver behind has no room to overtake',
                img: '',
            },
            {
                char: 'b',
                text: "Wave the driver behind to overtake when it's safe",
                img: '',
            },
            {
                char: 'c',
                text: 'Keep a steady course and allow the driver behind to overtake',
                img: '',
            },
            {
                char: 'd',
                text: 'Accelerate to get away from the driver behind',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1022',
        topicCode: 'attitude',
        question:
            'What does it mean if the signs at a bus lane show no times of operation?',
        questionImg: 'BB1022n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "The lane isn't in operation",
                img: '',
            },
            {
                char: 'b',
                text: 'The lane is only in operation at peak times',
                img: '',
            },
            {
                char: 'c',
                text: 'The lane is in operation 24 hours a day',
                img: '',
            },
            {
                char: 'd',
                text: 'The lane is only in operation in daylight hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1026',
        topicCode: 'attitude',
        question:
            'What should you do when a person herding sheep asks you to stop?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Ignore them as they have no authority',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop and switch off your engine',
                img: '',
            },
            {
                char: 'c',
                text: 'Continue on but drive slowly',
                img: '',
            },
            {
                char: 'd',
                text: 'Try to get past quickly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1027',
        topicCode: 'attitude',
        question:
            "What should you do when you're overtaking a horse and rider?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sound your horn as a warning',
                img: '',
            },
            {
                char: 'b',
                text: 'Go past as quickly as possible',
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your headlights as a warning',
                img: '',
            },
            {
                char: 'd',
                text: 'Go past slowly and carefully',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1440',
        topicCode: 'attitude',
        question:
            "You're approaching a zebra crossing. What should you do if pedestrians are waiting to cross?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Give way to older and infirm people only',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down and prepare to stop',
                img: '',
            },
            {
                char: 'c',
                text: 'Use your headlights to indicate they can cross',
                img: '',
            },
            {
                char: 'd',
                text: 'Wave at them to cross the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1444',
        topicCode: 'attitude',
        question:
            'What should you do if a vehicle pulls out in front of you at a junction?',
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
        code: 'BB1555',
        topicCode: 'attitude',
        question:
            "You're approaching a red light at a puffin crossing. Pedestrians are on the crossing. When will the red light change?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When you start to edge forward onto the crossing',
                img: '',
            },
            {
                char: 'b',
                text: 'When the pedestrians have cleared the crossing',
                img: '',
            },
            {
                char: 'c',
                text: 'When the pedestrians push the button on the far side of the crossing',
                img: '',
            },
            {
                char: 'd',
                text: 'When a driver from the opposite direction reaches the crossing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1591',
        topicCode: 'attitude',
        question:
            'Which instrument-panel warning light would show that headlights are on main beam?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'BB1591a.gif',
            },
            {
                char: 'b',
                text: '',
                img: 'BB1591b.gif',
            },
            {
                char: 'c',
                text: '',
                img: 'BB1591c.gif',
            },
            {
                char: 'd',
                text: '',
                img: 'BB1591d.gif',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1636',
        topicCode: 'attitude',
        question:
            'When should you leave a two-second gap between your vehicle and the one in front?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "When it's raining",
                img: '',
            },
            {
                char: 'b',
                text: "When it's dry",
                img: '',
            },
            {
                char: 'c',
                text: "When it's icy",
                img: '',
            },
            {
                char: 'd',
                text: "When it's foggy",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1637',
        topicCode: 'attitude',
        question:
            "You're driving at night on an unlit road. What should you do if you're following another vehicle?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights',
                img: '',
            },
            {
                char: 'b',
                text: 'Use dipped headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch off your headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Use full-beam headlights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1638',
        topicCode: 'attitude',
        question:
            "What should you do if you're driving a slow-moving vehicle on a narrow winding road?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Keep well out to stop vehicles overtaking dangerously',
                img: '',
            },
            {
                char: 'b',
                text: 'Wave the vehicles behind to come past you if you think they can overtake quickly',
                img: '',
            },
            {
                char: 'c',
                text: 'Pull in when you can, to let the vehicles behind overtake',
                img: '',
            },
            {
                char: 'd',
                text: "Give a left signal when it's safe for vehicles to overtake you",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1642',
        topicCode: 'attitude',
        question:
            "You're driving a car that has a diesel engine. What can a loose filler cap on your fuel tank cause?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It can make the engine difficult to start',
                img: '',
            },
            {
                char: 'b',
                text: 'It can make the roads slippery for other road users',
                img: '',
            },
            {
                char: 'c',
                text: 'It can improve your vehicle’s fuel consumption',
                img: '',
            },
            {
                char: 'd',
                text: 'It can increase the level of exhaust emissions',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1643',
        topicCode: 'attitude',
        question: 'MTRC What should you do to avoid fuel spillage?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check that your tank is only three-quarters full',
                img: '',
            },
            {
                char: 'b',
                text: "Check that you've used a locking filler cap",
                img: '',
            },
            {
                char: 'c',
                text: 'Check that your fuel gauge is working',
                img: '',
            },
            {
                char: 'd',
                text: 'Check that your filler cap is securely fastened',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1725',
        topicCode: 'attitude',
        question:
            'MTRC What style of driving causes increased risk to everyone?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Considerate',
                img: '',
            },
            {
                char: 'b',
                text: 'Defensive',
                img: '',
            },
            {
                char: 'c',
                text: 'Competitive',
                img: '',
            },
            {
                char: 'd',
                text: 'Responsible',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2045',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC How would under-inflated tyres affect your vehicle?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "The vehicle's stopping distance would increase",
                img: '',
            },
            {
                char: 'b',
                text: "The flash rate of the vehicle's indicators would increase",
                img: '',
            },
            {
                char: 'c',
                text: "The vehicle's gear change mechanism would become stiff",
                img: '',
            },
            {
                char: 'd',
                text: "The vehicle's headlights would aim high",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2056',
        topicCode: 'safety_and_your_vehicle',
        question: "When are you not allowed to sound your vehicle's horn?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Between 10.00 pm and 6.00 am in a built-up area',
                img: '',
            },
            {
                char: 'b',
                text: 'At any time in a built-up area',
                img: '',
            },
            {
                char: 'c',
                text: 'Between 11.30 pm and 7.00 am in a built-up area',
                img: '',
            },
            {
                char: 'd',
                text: 'Between 11.30 pm and 6.00 am on any road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2060',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What makes the vehicle in the picture 'environmentally friendly'?",
        questionImg: 'AB2060.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "It's powered by gravity",
                img: '',
            },
            {
                char: 'b',
                text: "It's powered by diesel",
                img: '',
            },
            {
                char: 'c',
                text: "It's powered by electricity",
                img: '',
            },
            {
                char: 'd',
                text: "It's powered by unleaded petrol",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2062',
        topicCode: 'safety_and_your_vehicle',
        question: "Why have 'red routes' been introduced in major cities?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To raise the speed limits',
                img: '',
            },
            {
                char: 'b',
                text: 'To help the traffic flow',
                img: '',
            },
            {
                char: 'c',
                text: 'To provide better parking',
                img: '',
            },
            {
                char: 'd',
                text: 'To allow lorries to load more freely',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2064',
        topicCode: 'safety_and_your_vehicle',
        question: "What's the purpose of road humps, chicanes and narrowings?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To separate lanes of traffic',
                img: '',
            },
            {
                char: 'b',
                text: 'To increase traffic speed',
                img: '',
            },
            {
                char: 'c',
                text: 'To allow pedestrians to cross',
                img: '',
            },
            {
                char: 'd',
                text: 'To reduce traffic speed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2508',
        topicCode: 'safety_and_your_vehicle',
        question: "What's the purpose of a catalytic converter?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To reduce fuel consumption',
                img: '',
            },
            {
                char: 'b',
                text: 'To reduce the risk of fire',
                img: '',
            },
            {
                char: 'c',
                text: 'To reduce harmful exhaust gases',
                img: '',
            },
            {
                char: 'd',
                text: 'To reduce engine wear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2550',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC When should tyre pressures be checked?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'After any lengthy journey',
                img: '',
            },
            {
                char: 'b',
                text: 'After travelling at high speed',
                img: '',
            },
            {
                char: 'c',
                text: 'When tyres are hot',
                img: '',
            },
            {
                char: 'd',
                text: 'When tyres are cold',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2637',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC When will your vehicle use more fuel?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When its tyres are under-inflated',
                img: '',
            },
            {
                char: 'b',
                text: 'When its tyres are of different makes',
                img: '',
            },
            {
                char: 'c',
                text: 'When its tyres are over-inflated',
                img: '',
            },
            {
                char: 'd',
                text: 'When its tyres are new',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2638',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC How should you dispose of a used vehicle battery?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Bury it in your garden',
                img: '',
            },
            {
                char: 'b',
                text: 'Put it in the dustbin',
                img: '',
            },
            {
                char: 'c',
                text: 'Take it to a local-authority disposal site',
                img: '',
            },
            {
                char: 'd',
                text: 'Leave it on waste land',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2641',
        topicCode: 'safety_and_your_vehicle',
        question: "What's most likely to increase fuel consumption?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Poor steering control',
                img: '',
            },
            {
                char: 'b',
                text: 'Accelerating around bends',
                img: '',
            },
            {
                char: 'c',
                text: 'Staying in high gears',
                img: '',
            },
            {
                char: 'd',
                text: 'Harsh braking and accelerating',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2647',
        topicCode: 'safety_and_your_vehicle',
        question:
            'The fluid level in your battery is low. What fluid should you use to top it up?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Battery acid',
                img: '',
            },
            {
                char: 'b',
                text: 'Distilled water',
                img: '',
            },
            {
                char: 'c',
                text: 'Engine oil',
                img: '',
            },
            {
                char: 'd',
                text: 'Engine coolant',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2689',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're parked on the road at night. When must you use parking lights?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When there are continuous white lines in the middle of the road',
                img: '',
            },
            {
                char: 'b',
                text: 'When the speed limit exceeds 30 mph',
                img: '',
            },
            {
                char: 'c',
                text: "When you're facing oncoming traffic",
                img: '',
            },
            {
                char: 'd',
                text: "When you're near a bus stop",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2707',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How can you reduce the environmental harm caused by your motor vehicle?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only use it for short journeys',
                img: '',
            },
            {
                char: 'b',
                text: "Don't service it",
                img: '',
            },
            {
                char: 'c',
                text: 'Drive faster than normal',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep engine revs low',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2708',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC What can cause excessive or uneven tyre wear?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A faulty gearbox',
                img: '',
            },
            {
                char: 'b',
                text: 'A faulty braking system',
                img: '',
            },
            {
                char: 'c',
                text: 'A faulty electrical system',
                img: '',
            },
            {
                char: 'd',
                text: 'A faulty exhaust system',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2710',
        topicCode: 'safety_and_your_vehicle',
        question:
            'You need to top up your battery with distilled water. What level should you fill it to?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The top of the battery',
                img: '',
            },
            {
                char: 'b',
                text: 'Halfway up the battery',
                img: '',
            },
            {
                char: 'c',
                text: 'Just below the cell plates',
                img: '',
            },
            {
                char: 'd',
                text: 'Just above the cell plates',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2800',
        topicCode: 'safety_and_your_vehicle',
        question:
            'MTRC How can you plan your route before starting a long journey?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Check your vehicle handbook',
                img: '',
            },
            {
                char: 'b',
                text: 'Ask your local garage',
                img: '',
            },
            {
                char: 'c',
                text: 'Use a route planner on the internet',
                img: '',
            },
            {
                char: 'd',
                text: 'Consult a travel agent',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2802',
        topicCode: 'safety_and_your_vehicle',
        question:
            'Why is it a good idea to plan your journey to avoid busy times?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "You'll have an easier journey",
                img: '',
            },
            {
                char: 'b',
                text: "You'll have a more stressful journey",
                img: '',
            },
            {
                char: 'c',
                text: 'Your journey time will be longer',
                img: '',
            },
            {
                char: 'd',
                text: 'It will cause more traffic congestion',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2805',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How will your journey be affected by travelling outside the busy times of day?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your journey will use more fuel',
                img: '',
            },
            {
                char: 'b',
                text: 'Your journey will take longer',
                img: '',
            },
            {
                char: 'c',
                text: 'Your journey will be more hazardous',
                img: '',
            },
            {
                char: 'd',
                text: 'Your journey will have fewer delays',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2813',
        topicCode: 'safety_and_your_vehicle',
        question:
            'You plan your route before starting a journey. Why should you also plan an alternative route?',
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
                text: 'You may find you have to pay a congestion charge',
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
        code: 'AB2818',
        topicCode: 'safety_and_your_vehicle',
        question:
            'You have to arrive on time for an appointment. How should you plan for the journey?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow plenty of time for the trip',
                img: '',
            },
            {
                char: 'b',
                text: 'Plan to travel at busy times',
                img: '',
            },
            {
                char: 'c',
                text: 'Avoid roads with the national speed limit',
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
        code: 'AB2830',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What can you expect if you drive using rapid acceleration and heavy braking?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reduced pollution',
                img: '',
            },
            {
                char: 'b',
                text: 'Increased fuel consumption',
                img: '',
            },
            {
                char: 'c',
                text: 'Reduced exhaust emissions',
                img: '',
            },
            {
                char: 'd',
                text: 'Increased road safety',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2940',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What could cause you to crash if the level is allowed to get too low?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Anti-freeze level',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake-fluid level',
                img: '',
            },
            {
                char: 'c',
                text: 'Battery-water level',
                img: '',
            },
            {
                char: 'd',
                text: 'Radiator-coolant level',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1036',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What should you do if your anti-lock brakes (ABS) warning light stays on?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check the brake-fluid level',
                img: '',
            },
            {
                char: 'b',
                text: 'Check the footbrake free play',
                img: '',
            },
            {
                char: 'c',
                text: 'Check that the parking brake is released',
                img: '',
            },
            {
                char: 'd',
                text: 'Have the brakes checked immediately',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1039',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What does it mean if this light comes on while you're driving?",
        questionImg: 'BB1039.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A fault in the braking system',
                img: '',
            },
            {
                char: 'b',
                text: 'The engine oil is low',
                img: '',
            },
            {
                char: 'c',
                text: 'A rear light has failed',
                img: '',
            },
            {
                char: 'd',
                text: "Your seat belt isn't fastened",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1043',
        topicCode: 'safety_and_your_vehicle',
        question:
            "Why is it important to wear suitable shoes when you're driving?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To prevent wear on the pedals',
                img: '',
            },
            {
                char: 'b',
                text: 'To maintain control of the pedals',
                img: '',
            },
            {
                char: 'c',
                text: 'To enable you to adjust your seat',
                img: '',
            },
            {
                char: 'd',
                text: 'To enable you to walk for assistance if you break down',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1045',
        topicCode: 'safety_and_your_vehicle',
        question:
            "If you're involved in a collision, what will reduce the risk of neck injury?",
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
                text: 'A properly adjusted head restraint',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1048',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What does it mean if your vehicle keeps bouncing after you sharply press down and release on the bodywork over a wheel?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The tyres are worn',
                img: '',
            },
            {
                char: 'b',
                text: 'The tyres are under inflated',
                img: '',
            },
            {
                char: 'c',
                text: 'The vehicle is on soft ground',
                img: '',
            },
            {
                char: 'd',
                text: 'The shock absorbers are worn',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1052',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC How will a roof rack affect your car?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There will be less wind noise',
                img: '',
            },
            {
                char: 'b',
                text: 'The engine will use more oil',
                img: '',
            },
            {
                char: 'c',
                text: 'The car will accelerate faster',
                img: '',
            },
            {
                char: 'd',
                text: 'Fuel consumption will increase',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1278',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC What makes your tyres illegal?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'If they were bought second-hand',
                img: '',
            },
            {
                char: 'b',
                text: 'If they have any large, deep cuts in the side wall',
                img: '',
            },
            {
                char: 'c',
                text: "If they're of different makes",
                img: '',
            },
            {
                char: 'd',
                text: 'If they have different tread patterns',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1279',
        topicCode: 'safety_and_your_vehicle',
        question: "What's the legal minimum depth of tread for car tyres?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '1 mm',
                img: '',
            },
            {
                char: 'b',
                text: '1.6 mm',
                img: '',
            },
            {
                char: 'c',
                text: '2.5 mm',
                img: '',
            },
            {
                char: 'd',
                text: '4 mm',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1280',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're carrying two 13-year-old children and their parents in your car. Who's responsible for seeing that the children wear seat belts?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "The children's parents",
                img: '',
            },
            {
                char: 'b',
                text: 'You, the driver',
                img: '',
            },
            {
                char: 'c',
                text: 'The front-seat passenger',
                img: '',
            },
            {
                char: 'd',
                text: 'The children',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1301',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC How can drivers help the environment?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By accelerating harshly',
                img: '',
            },
            {
                char: 'b',
                text: 'By accelerating gently',
                img: '',
            },
            {
                char: 'c',
                text: 'By using leaded fuel',
                img: '',
            },
            {
                char: 'd',
                text: 'By driving faster',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1302',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC How can you avoid wasting fuel?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By having your vehicle serviced regularly',
                img: '',
            },
            {
                char: 'b',
                text: 'By revving the engine in the lower gears',
                img: '',
            },
            {
                char: 'c',
                text: 'By keeping an empty roof rack on your vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'By driving at higher speeds where possible',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1303',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What could you do to reduce the volume of traffic on the roads?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive in a bus lane',
                img: '',
            },
            {
                char: 'b',
                text: 'Use a car with a smaller engine',
                img: '',
            },
            {
                char: 'c',
                text: 'Walk or cycle on short journeys',
                img: '',
            },
            {
                char: 'd',
                text: 'Travel by car at all times',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1304',
        topicCode: 'safety_and_your_vehicle',
        question: "What's most likely to waste fuel?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Reducing your speed',
                img: '',
            },
            {
                char: 'b',
                text: 'Driving on motorways',
                img: '',
            },
            {
                char: 'c',
                text: 'Using different brands of fuel',
                img: '',
            },
            {
                char: 'd',
                text: 'Under-inflated tyres',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1347',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What part of the car does the law require you to keep in good condition?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The gearbox',
                img: '',
            },
            {
                char: 'b',
                text: 'The transmission',
                img: '',
            },
            {
                char: 'c',
                text: 'The door locks',
                img: '',
            },
            {
                char: 'd',
                text: 'The seat belts',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1348',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How much more fuel will you use by driving at 70 mph, compared with driving at 50 mph?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'About 5%',
                img: '',
            },
            {
                char: 'b',
                text: 'About 15%',
                img: '',
            },
            {
                char: 'c',
                text: 'About 75%',
                img: '',
            },
            {
                char: 'd',
                text: 'About 100%',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1368',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What should you do if your vehicle pulls to one side when you use the brakes?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increase the pressure in your tyres',
                img: '',
            },
            {
                char: 'b',
                text: 'Have the brakes checked as soon as possible',
                img: '',
            },
            {
                char: 'c',
                text: 'Change gear and pump the brake pedal',
                img: '',
            },
            {
                char: 'd',
                text: 'Use your parking brake at the same time',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1392',
        topicCode: 'safety_and_your_vehicle',
        question: "What will happen if your car's wheels are unbalanced?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The steering will pull to one side',
                img: '',
            },
            {
                char: 'b',
                text: 'The steering will vibrate',
                img: '',
            },
            {
                char: 'c',
                text: 'The brakes will fail',
                img: '',
            },
            {
                char: 'd',
                text: 'The tyres will deflate',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1393',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What can be damaged if you turn the steering wheel when the car isn't moving?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The gearbox',
                img: '',
            },
            {
                char: 'b',
                text: 'The engine',
                img: '',
            },
            {
                char: 'c',
                text: 'The brakes',
                img: '',
            },
            {
                char: 'd',
                text: 'The tyres',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1414',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What’s the safest thing to do if you have to leave valuables in your car?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Put them in a carrier bag',
                img: '',
            },
            {
                char: 'b',
                text: 'Park near a school entrance',
                img: '',
            },
            {
                char: 'c',
                text: 'Lock them out of sight',
                img: '',
            },
            {
                char: 'd',
                text: 'Park near a bus stop',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1416',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC What may help to deter a thief from stealing your car?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Always keeping the headlights on',
                img: '',
            },
            {
                char: 'b',
                text: 'Fitting reflective glass windows',
                img: '',
            },
            {
                char: 'c',
                text: 'Always keeping the interior light on',
                img: '',
            },
            {
                char: 'd',
                text: 'Etching the registration number on the windows',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1418',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What should you remove from your car before leaving it unattended?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The car dealer’s details',
                img: '',
            },
            {
                char: 'b',
                text: 'The owner’s manual',
                img: '',
            },
            {
                char: 'c',
                text: 'The service record',
                img: '',
            },
            {
                char: 'd',
                text: 'The vehicle registration document',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1430',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What should you do when leaving your vehicle parked and unattended?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Park near a busy junction',
                img: '',
            },
            {
                char: 'b',
                text: 'Park in a housing estate',
                img: '',
            },
            {
                char: 'c',
                text: 'Lock it and remove the key',
                img: '',
            },
            {
                char: 'd',
                text: 'Leave the left indicator on',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1500',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC What will reduce fuel consumption?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Driving more slowly',
                img: '',
            },
            {
                char: 'b',
                text: 'Accelerating rapidly',
                img: '',
            },
            {
                char: 'c',
                text: 'Late and heavy braking',
                img: '',
            },
            {
                char: 'd',
                text: 'Staying in lower gears',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1508',
        topicCode: 'safety_and_your_vehicle',
        question:
            'You service your own vehicle. How should you dispose of the old engine oil?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Take it to a local-authority site',
                img: '',
            },
            {
                char: 'b',
                text: 'Pour it down a drain',
                img: '',
            },
            {
                char: 'c',
                text: 'Tip it into a hole in the ground',
                img: '',
            },
            {
                char: 'd',
                text: 'Put it in your dustbin',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1511',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC Why do MOT tests include an exhaust emission test?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To recover the cost of expensive garage equipment',
                img: '',
            },
            {
                char: 'b',
                text: 'To help protect the environment against pollution',
                img: '',
            },
            {
                char: 'c',
                text: 'To discover which fuel supplier is used the most',
                img: '',
            },
            {
                char: 'd',
                text: 'To make sure diesel and petrol engines emit the same fumes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1512',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How can you reduce the damage your vehicle causes to the environment?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Use narrow side streets',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake heavily',
                img: '',
            },
            {
                char: 'c',
                text: 'Use busy routes',
                img: '',
            },
            {
                char: 'd',
                text: 'Anticipate well ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1557',
        topicCode: 'safety_and_your_vehicle',
        question:
            "How will you benefit from following the manufacturer's service schedule for your vehicle?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Your vehicle will be cheaper to insure',
                img: '',
            },
            {
                char: 'b',
                text: 'Your vehicle tax will be lower',
                img: '',
            },
            {
                char: 'c',
                text: 'Your vehicle will remain reliable',
                img: '',
            },
            {
                char: 'd',
                text: 'Your journey times will be reduced',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1558',
        topicCode: 'safety_and_your_vehicle',
        question:
            "How should you drive when you're driving along a road that has road humps?",
        questionImg: 'BB1558n2.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Maintain a reduced speed throughout',
                img: '',
            },
            {
                char: 'b',
                text: 'Accelerate quickly between the humps',
                img: '',
            },
            {
                char: 'c',
                text: 'Always keep to the maximum legal speed',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive slowly at school times only',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1602',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC When should you check the engine oil level?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Before a long journey',
                img: '',
            },
            {
                char: 'b',
                text: 'When the engine is hot',
                img: '',
            },
            {
                char: 'c',
                text: 'Early in the morning',
                img: '',
            },
            {
                char: 'd',
                text: 'Every time you drive the car',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1603',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're having difficulty finding a parking space in a busy town. Can you park on the zigzag lines of a zebra crossing?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'No, not unless you stay with your car',
                img: '',
            },
            {
                char: 'b',
                text: 'Yes, in order to drop off a passenger',
                img: '',
            },
            {
                char: 'c',
                text: "Yes, if you don't block people from crossing",
                img: '',
            },
            {
                char: 'd',
                text: 'No, not under any circumstances',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1604',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What should you do when you leave your car unattended for a few minutes?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Leave the engine running',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch the engine off but leave the key in',
                img: '',
            },
            {
                char: 'c',
                text: 'Lock it and remove the key',
                img: '',
            },
            {
                char: 'd',
                text: 'Park near a traffic warden',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1607',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC Why should you try and park in a secure car park?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It makes it easy to find your car',
                img: '',
            },
            {
                char: 'b',
                text: 'It helps deter thieves',
                img: '',
            },
            {
                char: 'c',
                text: 'It stops the car being exposed to bad weather',
                img: '',
            },
            {
                char: 'd',
                text: "It doesn't cost anything to park here",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1609',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC Where would parking your vehicle cause an obstruction?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Alongside a parking meter',
                img: '',
            },
            {
                char: 'b',
                text: 'In front of a property entrance',
                img: '',
            },
            {
                char: 'c',
                text: 'On your driveway',
                img: '',
            },
            {
                char: 'd',
                text: 'In a marked parking space',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1640',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What's the most important reason for having a properly adjusted head restraint?",
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
                text: 'To help you avoid neck injury',
                img: '',
            },
            {
                char: 'c',
                text: 'To help you relax',
                img: '',
            },
            {
                char: 'd',
                text: 'To help you maintain your driving position',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1644',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What can you do to reduce environmental damage caused by your vehicle?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Avoid using the cruise control',
                img: '',
            },
            {
                char: 'b',
                text: 'Use the air conditioning whenever you drive',
                img: '',
            },
            {
                char: 'c',
                text: 'Use the gears to slow the vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'Avoid making a lot of short journeys',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1646',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What can people who live or work in towns and cities do to help reduce urban pollution levels?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive more quickly',
                img: '',
            },
            {
                char: 'b',
                text: 'Over-rev in a low gear',
                img: '',
            },
            {
                char: 'c',
                text: 'Walk or cycle',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive short journeys',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1647',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How can you reduce the chances of your car being broken into when leaving it unattended?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Take all valuables with you',
                img: '',
            },
            {
                char: 'b',
                text: 'Park near a taxi rank',
                img: '',
            },
            {
                char: 'c',
                text: 'Place any valuables on the floor',
                img: '',
            },
            {
                char: 'd',
                text: 'Park near a fire station',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1648',
        topicCode: 'safety_and_your_vehicle',
        question:
            'MTRC How can you help to prevent your car radio being stolen?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Park in an unlit area',
                img: '',
            },
            {
                char: 'b',
                text: 'Leave the radio turned on',
                img: '',
            },
            {
                char: 'c',
                text: 'Park near a busy junction',
                img: '',
            },
            {
                char: 'd',
                text: 'Install a security-coded radio',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1653',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How can you reduce the risk of your vehicle being broken into at night?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Leave it in a well-lit area',
                img: '',
            },
            {
                char: 'b',
                text: 'Park in a quiet side road',
                img: '',
            },
            {
                char: 'c',
                text: 'Don’t engage the steering lock',
                img: '',
            },
            {
                char: 'd',
                text: 'Park in a poorly lit area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1654',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC What will help you to keep your car secure?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Being a member of a vehicle breakdown organisation',
                img: '',
            },
            {
                char: 'b',
                text: 'Registering with a Vehicle Watch scheme',
                img: '',
            },
            {
                char: 'c',
                text: 'Passing an advanced driving test',
                img: '',
            },
            {
                char: 'd',
                text: 'Taking car maintenance classes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1655',
        topicCode: 'safety_and_your_vehicle',
        question:
            'MTRC On a vehicle, where would you find a catalytic converter?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'In the fuel tank',
                img: '',
            },
            {
                char: 'b',
                text: 'In the air filter',
                img: '',
            },
            {
                char: 'c',
                text: 'On the cooling system',
                img: '',
            },
            {
                char: 'd',
                text: 'On the exhaust system',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1710',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC What can you achieve if you drive smoothly?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Reduction in journey times by about 15%',
                img: '',
            },
            {
                char: 'b',
                text: 'Increase in fuel consumption by about 15%',
                img: '',
            },
            {
                char: 'c',
                text: 'Reduction in fuel consumption by about 15%',
                img: '',
            },
            {
                char: 'd',
                text: 'Increase in journey times by about 15%',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1711',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC Which driving technique can help you save fuel?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Using lower gears as often as possible',
                img: '',
            },
            {
                char: 'b',
                text: 'Accelerating sharply in each gear',
                img: '',
            },
            {
                char: 'c',
                text: 'Using each gear in turn',
                img: '',
            },
            {
                char: 'd',
                text: 'Missing out some gears',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1722',
        topicCode: 'safety_and_your_vehicle',
        question:
            'How can driving in a fuel-efficient manner help protect the environment?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Through the legal enforcement of speed regulations',
                img: '',
            },
            {
                char: 'b',
                text: 'By increasing the number of cars on the road',
                img: '',
            },
            {
                char: 'c',
                text: 'Through increased fuel bills',
                img: '',
            },
            {
                char: 'd',
                text: 'By reducing exhaust emissions',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1723',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC What does fuel-efficient driving achieve?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increased fuel consumption',
                img: '',
            },
            {
                char: 'b',
                text: 'Improved road safety',
                img: '',
            },
            {
                char: 'c',
                text: 'Damage to the environment',
                img: '',
            },
            {
                char: 'd',
                text: 'Increased exhaust emissions',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1737',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What's the legal minimum tread depth for tyres on your trailer or caravan?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '1 mm',
                img: '',
            },
            {
                char: 'b',
                text: '1.6 mm',
                img: '',
            },
            {
                char: 'c',
                text: '2 mm',
                img: '',
            },
            {
                char: 'd',
                text: '2.6 mm',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1741',
        topicCode: 'safety_and_your_vehicle',
        question: 'MTRC When is fuel consumption at its highest?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "When you're braking",
                img: '',
            },
            {
                char: 'b',
                text: "When you're coasting",
                img: '',
            },
            {
                char: 'c',
                text: "When you're accelerating",
                img: '',
            },
            {
                char: 'd',
                text: "When you're turning sharply",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1752',
        topicCode: 'safety_and_your_vehicle',
        question:
            'When may a passenger travel in a car without wearing a seat belt?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "When they're under 14 years old",
                img: '',
            },
            {
                char: 'b',
                text: "When they're under 1.5 metres (5 feet) in height",
                img: '',
            },
            {
                char: 'c',
                text: "When they're sitting in the rear seat",
                img: '',
            },
            {
                char: 'd',
                text: "When they're exempt for medical reasons",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1755',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're driving a friend's children home from school. They're both under 14 years old. Who's responsible for making sure they wear a seat belt or approved child restraint where required?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'An adult passenger',
                img: '',
            },
            {
                char: 'b',
                text: 'The children',
                img: '',
            },
            {
                char: 'c',
                text: 'You, the driver',
                img: '',
            },
            {
                char: 'd',
                text: 'Your friend',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1756',
        topicCode: 'safety_and_your_vehicle',
        question:
            "What's likely to happen if you put too much oil in your engine?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The clutch pedal will lock',
                img: '',
            },
            {
                char: 'b',
                text: 'The air intake will become blocked',
                img: '',
            },
            {
                char: 'c',
                text: 'The timing belt will slip',
                img: '',
            },
            {
                char: 'd',
                text: 'The oil seals will leak',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1763',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You have to make an unexpected journey. You're carrying a five-year-old child on the back seat of your car. They're under 1.35 metres (4 feet 5 inches) tall. How should you seat them if a correct child restraint isn't available?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Behind the passenger seat',
                img: '',
            },
            {
                char: 'b',
                text: 'Using an adult seat belt',
                img: '',
            },
            {
                char: 'c',
                text: 'Sharing a belt with an adult',
                img: '',
            },
            {
                char: 'd',
                text: 'Between two other children',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1765',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're carrying an 11-year-old child on the front seat of your car. They're under 1.35 metres (4 feet 5 inches) tall. What seat belt security must be in place?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They must use an adult seat belt',
                img: '',
            },
            {
                char: 'b',
                text: 'They must be able to fasten their own seat belt',
                img: '',
            },
            {
                char: 'c',
                text: 'They must use a suitable child restraint',
                img: '',
            },
            {
                char: 'd',
                text: 'They must be able to see clearly out of the front window',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1769',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're stopped at the side of the road. What must you do if you'll be waiting there for some time?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch off the engine',
                img: '',
            },
            {
                char: 'b',
                text: 'Apply the steering lock',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch off the radio',
                img: '',
            },
            {
                char: 'd',
                text: 'Use your headlights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1770',
        topicCode: 'safety_and_your_vehicle',
        question:
            'You want to put a rear-facing baby seat on the front passenger seat. What must you do if the passenger seat is protected by a frontal airbag?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Deactivate the airbag',
                img: '',
            },
            {
                char: 'b',
                text: 'Turn the seat to face sideways',
                img: '',
            },
            {
                char: 'c',
                text: 'Ask a passenger to hold the baby',
                img: '',
            },
            {
                char: 'd',
                text: 'Put the child in an adult seat belt',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1777',
        topicCode: 'safety_and_your_vehicle',
        question:
            "You're leaving your vehicle parked on a road and unattended. When may you leave the engine running?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "If you'll be parking for less than five minutes",
                img: '',
            },
            {
                char: 'b',
                text: 'If the battery keeps going flat',
                img: '',
            },
            {
                char: 'c',
                text: 'When parked in a 20 mph zone',
                img: '',
            },
            {
                char: 'd',
                text: "Never if you're away from the vehicle",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB4417',
        topicCode: 'safety_and_your_vehicle',
        question:
            'What does it mean if the Electronic Stability Control (ESC) indicator lamp lights up while you’re driving?',
        questionImg: 'BB4417.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The ESC system has activated',
                img: '',
            },
            {
                char: 'b',
                text: 'The ESC system has a fault',
                img: '',
            },
            {
                char: 'c',
                text: 'The ESC system is running a routine test',
                img: '',
            },
            {
                char: 'd',
                text: 'The ESC system is switched off',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2076',
        topicCode: 'safety_margins',
        question:
            'MTRC How much can stopping distances increase in icy conditions?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Two times',
                img: '',
            },
            {
                char: 'b',
                text: 'Three times',
                img: '',
            },
            {
                char: 'c',
                text: 'Five times',
                img: '',
            },
            {
                char: 'd',
                text: 'Ten times',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2080',
        topicCode: 'safety_margins',
        question:
            "What requires extra care when you're driving or riding in windy conditions?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Using the brakes',
                img: '',
            },
            {
                char: 'b',
                text: 'Moving off on a hill',
                img: '',
            },
            {
                char: 'c',
                text: 'Turning into a narrow road',
                img: '',
            },
            {
                char: 'd',
                text: 'Passing pedal cyclists',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2624',
        topicCode: 'safety_margins',
        question:
            'Why should you keep well to the left as you approach a right-hand bend?',
        questionImg: 'AB2624.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To improve your view of the road',
                img: '',
            },
            {
                char: 'b',
                text: 'To overcome the effect of the road’s slope',
                img: '',
            },
            {
                char: 'c',
                text: 'To let faster traffic from behind overtake',
                img: '',
            },
            {
                char: 'd',
                text: 'To be positioned safely if you skid',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2639',
        topicCode: 'safety_margins',
        question:
            'You’ve just gone through flood water. What should you do to make sure your brakes are working properly?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Accelerate and keep to a high speed for a short time',
                img: '',
            },
            {
                char: 'b',
                text: 'Go slowly while gently applying the brakes',
                img: '',
            },
            {
                char: 'c',
                text: 'Avoid using the brakes at all for a few miles',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop for at least an hour to allow them time to dry',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2712',
        topicCode: 'safety_margins',
        question:
            'What will be affected if the road surface becomes soft in very hot weather?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The suspension',
                img: '',
            },
            {
                char: 'b',
                text: 'The exhaust emissions',
                img: '',
            },
            {
                char: 'c',
                text: 'The fuel consumption',
                img: '',
            },
            {
                char: 'd',
                text: 'The tyre grip',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2713',
        topicCode: 'safety_margins',
        question:
            'Where is your vehicle most likely to be affected by side winds?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On a narrow country lane',
                img: '',
            },
            {
                char: 'b',
                text: 'On an open stretch of road',
                img: '',
            },
            {
                char: 'c',
                text: 'On a busy stretch of road',
                img: '',
            },
            {
                char: 'd',
                text: 'On a long, straight road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2740',
        topicCode: 'safety_margins',
        question:
            "You're following a vehicle on a wet road. You stay a safe distance behind it. What should you do if a driver overtakes you and pulls into the gap you've left?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights as a warning',
                img: '',
            },
            {
                char: 'b',
                text: 'Try to overtake safely as soon as you can',
                img: '',
            },
            {
                char: 'c',
                text: 'Drop back to regain a safe distance',
                img: '',
            },
            {
                char: 'd',
                text: 'Stay close to the other vehicle until it moves on',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2911',
        topicCode: 'safety_margins',
        question:
            "You're travelling on the motorway. How can you lower the risk of a collision when the vehicle behind is following too closely?",
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
                text: 'Brake sharply',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch on your hazard warning lights',
                img: '',
            },
            {
                char: 'd',
                text: 'Move onto the hard shoulder and stop',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2942',
        topicCode: 'safety_margins',
        question:
            "You're following other vehicles in fog. You have your headlights on dipped beam. What else can you do to reduce the chances of being in a collision?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep close to the vehicle in front',
                img: '',
            },
            {
                char: 'b',
                text: 'Use main beam instead of dipped headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep up with the faster vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep a safe distance from the vehicle in front',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2944',
        topicCode: 'safety_margins',
        question: "What should you do when you're using a contraflow system?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Choose an appropriate lane in good time',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch lanes to make better progress',
                img: '',
            },
            {
                char: 'c',
                text: 'Increase speed to get through the contraflow more quickly',
                img: '',
            },
            {
                char: 'd',
                text: 'Follow other motorists closely to avoid long queues',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1059',
        topicCode: 'safety_margins',
        question:
            "How can you avoid wheelspin when you're driving on an icy road?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drive at a slow speed in the highest gear possible',
                img: '',
            },
            {
                char: 'b',
                text: 'Use the parking brake if the wheels start to slip',
                img: '',
            },
            {
                char: 'c',
                text: 'Brake gently and repeatedly',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive in a low gear at all times',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1060',
        topicCode: 'safety_margins',
        question: "What's the main cause of skidding?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The weather',
                img: '',
            },
            {
                char: 'b',
                text: 'The driver',
                img: '',
            },
            {
                char: 'c',
                text: 'The vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'The road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1062',
        topicCode: 'safety_margins',
        question:
            "You're driving in freezing conditions. What should you do as you approach a sharp bend?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Coast into the bend',
                img: '',
            },
            {
                char: 'b',
                text: 'Apply your parking brake',
                img: '',
            },
            {
                char: 'c',
                text: 'Firmly use your footbrake',
                img: '',
            },
            {
                char: 'd',
                text: 'Slow down gently',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1066',
        topicCode: 'safety_margins',
        question:
            "You're about to start a journey in freezing weather. What part of your vehicle should you clear of ice and snow?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The aerial',
                img: '',
            },
            {
                char: 'b',
                text: 'The windows',
                img: '',
            },
            {
                char: 'c',
                text: 'The bumper',
                img: '',
            },
            {
                char: 'd',
                text: 'The boot',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1068',
        topicCode: 'safety_margins',
        question: 'MTRC What will help you to move off on a snowy surface?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "Using the car's lowest gear",
                img: '',
            },
            {
                char: 'b',
                text: 'Using a higher gear than normal',
                img: '',
            },
            {
                char: 'c',
                text: 'Using a high engine speed',
                img: '',
            },
            {
                char: 'd',
                text: 'Using the parking brake and footbrake together',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1069',
        topicCode: 'safety_margins',
        question: "What should you do when you're driving in snowy conditions?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Brake firmly and quickly',
                img: '',
            },
            {
                char: 'b',
                text: 'Be ready to steer sharply',
                img: '',
            },
            {
                char: 'c',
                text: 'Use sidelights only',
                img: '',
            },
            {
                char: 'd',
                text: 'Brake gently in plenty of time',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1070',
        topicCode: 'safety_margins',
        question:
            "What's the main benefit of driving a four-wheel-drive vehicle?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Improved grip on the road',
                img: '',
            },
            {
                char: 'b',
                text: 'Lower fuel consumption',
                img: '',
            },
            {
                char: 'c',
                text: 'Shorter stopping distances',
                img: '',
            },
            {
                char: 'd',
                text: 'Improved passenger comfort',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1073',
        topicCode: 'safety_margins',
        question:
            "You're about to go down a steep hill. What should you do to control the speed of your vehicle?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Select a high gear and use the brakes carefully',
                img: '',
            },
            {
                char: 'b',
                text: 'Select a high gear and use the brakes firmly',
                img: '',
            },
            {
                char: 'c',
                text: 'Select a low gear and use the brakes carefully',
                img: '',
            },
            {
                char: 'd',
                text: 'Select a low gear and avoid using the brakes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1075',
        topicCode: 'safety_margins',
        question:
            'MTRC What should you do when you park a car facing downhill?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Turn the steering wheel towards the kerb',
                img: '',
            },
            {
                char: 'b',
                text: 'Park close to the bumper of another car',
                img: '',
            },
            {
                char: 'c',
                text: 'Park with two wheels on the kerb',
                img: '',
            },
            {
                char: 'd',
                text: 'Turn the steering wheel away from the kerb',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1076',
        topicCode: 'safety_margins',
        question:
            "You're driving in a built-up area that has traffic-calming measures. What should you do when you approach a road hump?",
        questionImg: 'BB1076n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move across to the left-hand side of the road',
                img: '',
            },
            {
                char: 'b',
                text: 'Wait for any pedestrians to cross',
                img: '',
            },
            {
                char: 'c',
                text: 'Check your mirror and slow down',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop and check both pavements',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1317',
        topicCode: 'safety_margins',
        question:
            'On what type of road surface may anti-lock brakes be ineffective?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Dry',
                img: '',
            },
            {
                char: 'b',
                text: 'Loose',
                img: '',
            },
            {
                char: 'c',
                text: 'Firm',
                img: '',
            },
            {
                char: 'd',
                text: 'Smooth',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1322',
        topicCode: 'safety_margins',
        question:
            "You're driving a vehicle that has anti-lock brakes. How should you apply the footbrake when you need to stop in an emergency?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Slowly and gently',
                img: '',
            },
            {
                char: 'b',
                text: 'Slowly but firmly',
                img: '',
            },
            {
                char: 'c',
                text: 'Rapidly and gently',
                img: '',
            },
            {
                char: 'd',
                text: 'Rapidly and firmly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1351',
        topicCode: 'safety_margins',
        question:
            "You're driving along a country road. You see this sign. What should you do after dealing safely with the hazard?",
        questionImg: 'BB1351.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check your tyre pressures',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch on your hazard warning lights',
                img: '',
            },
            {
                char: 'c',
                text: 'Accelerate briskly',
                img: '',
            },
            {
                char: 'd',
                text: 'Test your brakes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1396',
        topicCode: 'safety_margins',
        question: "What would suggest you're driving on an icy road?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "There's less wind noise",
                img: '',
            },
            {
                char: 'b',
                text: "There's less tyre noise",
                img: '',
            },
            {
                char: 'c',
                text: "There's less transmission noise",
                img: '',
            },
            {
                char: 'd',
                text: "There's less engine noise",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1405',
        topicCode: 'safety_margins',
        question:
            "You're driving along a wet road. How can you tell if your vehicle’s tyres are losing their grip on the surface?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The engine will stall',
                img: '',
            },
            {
                char: 'b',
                text: 'The steering will feel very heavy',
                img: '',
            },
            {
                char: 'c',
                text: 'The engine noise will increase',
                img: '',
            },
            {
                char: 'd',
                text: 'The steering will feel very light',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1448',
        topicCode: 'safety_margins',
        question:
            'In which conditions will your overall stopping distance increase?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In the rain',
                img: '',
            },
            {
                char: 'b',
                text: 'In fog',
                img: '',
            },
            {
                char: 'c',
                text: 'At night',
                img: '',
            },
            {
                char: 'd',
                text: 'In strong winds',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1657',
        topicCode: 'safety_margins',
        question:
            "You're driving on an open road in dry weather. What distance should you keep from the vehicle in front?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A two-second time gap',
                img: '',
            },
            {
                char: 'b',
                text: 'One car length',
                img: '',
            },
            {
                char: 'c',
                text: 'Two metres (6 feet 6 inches)',
                img: '',
            },
            {
                char: 'd',
                text: 'Two car lengths',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1659',
        topicCode: 'safety_margins',
        question: "How can you use your vehicle's engine as a brake?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By changing to a lower gear',
                img: '',
            },
            {
                char: 'b',
                text: 'By selecting reverse gear',
                img: '',
            },
            {
                char: 'c',
                text: 'By changing to a higher gear',
                img: '',
            },
            {
                char: 'd',
                text: 'By selecting neutral gear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1660',
        topicCode: 'safety_margins',
        question:
            'How should you use anti-lock brakes when you need to stop in an emergency?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Keep pumping the footbrake to prevent skidding',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake normally but grip the steering wheel tightly',
                img: '',
            },
            {
                char: 'c',
                text: "Brake promptly and firmly until you've stopped",
                img: '',
            },
            {
                char: 'd',
                text: 'Apply the parking brake to reduce the stopping distance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1681',
        topicCode: 'safety_margins',
        question:
            "What lights should you use when you're driving on a wet motorway and vehicles are throwing up surface spray?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Hazard warning lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Dipped headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Rear fog lights',
                img: '',
            },
            {
                char: 'd',
                text: 'Sidelights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1742',
        topicCode: 'safety_margins',
        question:
            'What can result when you travel for long distances in neutral (known as coasting)?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Improvement in control',
                img: '',
            },
            {
                char: 'b',
                text: 'Easier steering',
                img: '',
            },
            {
                char: 'c',
                text: 'Reduction in control',
                img: '',
            },
            {
                char: 'd',
                text: 'Increased fuel consumption',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1774',
        topicCode: 'safety_margins',
        question:
            'What should you do before starting a journey in foggy weather?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Wear a hi-visibility jacket',
                img: '',
            },
            {
                char: 'b',
                text: 'Have a caffeinated drink',
                img: '',
            },
            {
                char: 'c',
                text: 'Allow more time',
                img: '',
            },
            {
                char: 'd',
                text: 'Reduce your tyre pressures',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB2894',
        topicCode: 'safety_margins',
        question:
            "What should you do when you're overtaking a motorcyclist on a windy day?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pass closely',
                img: '',
            },
            {
                char: 'b',
                text: 'Pass very slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Pass widely',
                img: '',
            },
            {
                char: 'd',
                text: 'Pass immediately',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2085',
        topicCode: 'hazard_awareness',
        question: 'MTRC Where would you expect to see these markers?',
        questionImg: 'AB2085.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On a motorway sign',
                img: '',
            },
            {
                char: 'b',
                text: 'On a railway bridge',
                img: '',
            },
            {
                char: 'c',
                text: 'On a large goods vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'On a diversion sign',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2087',
        topicCode: 'hazard_awareness',
        question: "What's the main hazard shown in this picture?",
        questionImg: 'AB2087.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Vehicles turning right',
                img: '',
            },
            {
                char: 'b',
                text: 'Vehicles doing U-turns',
                img: '',
            },
            {
                char: 'c',
                text: 'The cyclist crossing the road',
                img: '',
            },
            {
                char: 'd',
                text: 'Parked cars around the corner',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2088',
        topicCode: 'hazard_awareness',
        question: 'MTRC Which road user has caused a hazard?',
        questionImg: 'AB2088.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The parked car (arrowed A)',
                img: '',
            },
            {
                char: 'b',
                text: 'The pedestrian waiting to cross (arrowed B)',
                img: '',
            },
            {
                char: 'c',
                text: 'The moving car (arrowed C)',
                img: '',
            },
            {
                char: 'd',
                text: 'The car turning (arrowed D)',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2089',
        topicCode: 'hazard_awareness',
        question:
            'What should the driver of the car approaching the crossing do?',
        questionImg: 'AB2089.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue at the same speed',
                img: '',
            },
            {
                char: 'b',
                text: 'Sound the horn',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive through quickly',
                img: '',
            },
            {
                char: 'd',
                text: 'Slow down and get ready to stop',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2091',
        topicCode: 'hazard_awareness',
        question:
            'What should the driver of the grey car be especially aware of?',
        questionImg: 'AB2091n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The uneven road surface',
                img: '',
            },
            {
                char: 'b',
                text: 'Traffic following behind',
                img: '',
            },
            {
                char: 'c',
                text: 'Doors opening on parked cars',
                img: '',
            },
            {
                char: 'd',
                text: 'Empty parking spaces',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2098',
        topicCode: 'hazard_awareness',
        question: 'MTRC What should you expect if you see this sign ahead?',
        questionImg: 'AB2098.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The road will go steeply uphill',
                img: '',
            },
            {
                char: 'b',
                text: 'The road will go steeply downhill',
                img: '',
            },
            {
                char: 'c',
                text: 'The road will bend sharply to the left',
                img: '',
            },
            {
                char: 'd',
                text: 'The road will bend sharply to the right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2099',
        topicCode: 'hazard_awareness',
        question: 'MTRC What should you do as you approach this cyclist?',
        questionImg: 'AB2099n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Try to overtake before the cyclist gets to the junction',
                img: '',
            },
            {
                char: 'b',
                text: 'Flash your headlights at the cyclist',
                img: '',
            },
            {
                char: 'c',
                text: 'Slow down and allow the cyclist to turn',
                img: '',
            },
            {
                char: 'd',
                text: "Rev your engine so the cyclist knows you're following behind",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2100',
        topicCode: 'hazard_awareness',
        question:
            'Why must you take great care when emerging from this junction?',
        questionImg: 'AB2100n1.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The road surface is poor',
                img: '',
            },
            {
                char: 'b',
                text: 'The footpath is narrow',
                img: '',
            },
            {
                char: 'c',
                text: 'The kerbs are high',
                img: '',
            },
            {
                char: 'd',
                text: 'The view is restricted',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2102',
        topicCode: 'hazard_awareness',
        question:
            'Which type of vehicle should you be ready to give way to as you approach this bridge?',
        questionImg: 'AB2102n1.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Bicycles',
                img: '',
            },
            {
                char: 'b',
                text: 'Buses',
                img: '',
            },
            {
                char: 'c',
                text: 'Motorcycles',
                img: '',
            },
            {
                char: 'd',
                text: 'Cars',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2103',
        topicCode: 'hazard_awareness',
        question:
            'What type of vehicle could you expect to meet in the middle of the road?',
        questionImg: 'AB2103n1.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Lorry',
                img: '',
            },
            {
                char: 'b',
                text: 'Bicycle',
                img: '',
            },
            {
                char: 'c',
                text: 'Car',
                img: '',
            },
            {
                char: 'd',
                text: 'Motorcycle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2105',
        topicCode: 'hazard_awareness',
        question: 'MTRC What must you do at this junction?',
        questionImg: 'AB2105n1.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop behind the line, then edge forward to see clearly',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop beyond the line, at a point where you can see clearly',
                img: '',
            },
            {
                char: 'c',
                text: "Stop only if there's traffic on the main road",
                img: '',
            },
            {
                char: 'd',
                text: "Stop only if you're turning right",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2114',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if a driver pulls out of a side road in front of you, causing you to brake hard?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Ignore the error and stay calm',
                img: '',
            },
            {
                char: 'b',
                text: 'Flash your lights to show your annoyance',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn to show your annoyance',
                img: '',
            },
            {
                char: 'd',
                text: 'Overtake as soon as possible',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2116',
        topicCode: 'hazard_awareness',
        question: "How would age affect an older person's driving ability?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "They won't be able to obtain car insurance",
                img: '',
            },
            {
                char: 'b',
                text: "They'll need glasses to read road signs",
                img: '',
            },
            {
                char: 'c',
                text: "They'll take longer to react to hazards",
                img: '',
            },
            {
                char: 'd',
                text: "They won't signal at junctions",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2558',
        topicCode: 'hazard_awareness',
        question:
            'Do you need to plan rest stops when you’re planning a long journey?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Yes, you should plan to stop every half an hour',
                img: '',
            },
            {
                char: 'b',
                text: 'Yes, regular stops help concentration',
                img: '',
            },
            {
                char: 'c',
                text: 'No, you’ll be less tired if you get there as soon as possible',
                img: '',
            },
            {
                char: 'd',
                text: 'No, only fuel stops will be needed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2596',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if the red lights start flashing as you approach a level crossing?',
        questionImg: 'AB2596n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Go over it quickly',
                img: '',
            },
            {
                char: 'b',
                text: 'Go over it carefully',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop before the barrier',
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
        code: 'AB2651',
        topicCode: 'hazard_awareness',
        question:
            "You're approaching a crossroads. What should you do if the traffic lights have failed?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Brake and stop only for large vehicles',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake sharply to a stop before looking',
                img: '',
            },
            {
                char: 'c',
                text: 'Be prepared to brake sharply to a stop',
                img: '',
            },
            {
                char: 'd',
                text: 'Be prepared to stop for any traffic',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2657',
        topicCode: 'hazard_awareness',
        question: 'MTRC What should the driver of the red car (arrowed) do?',
        questionImg: 'AB2657.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Wave towards the pedestrians who are waiting to cross',
                img: '',
            },
            {
                char: 'b',
                text: 'Wait for the pedestrian in the road to cross',
                img: '',
            },
            {
                char: 'c',
                text: 'Quickly drive behind the pedestrian in the road',
                img: '',
            },
            {
                char: 'd',
                text: "Tell the pedestrian in the road she shouldn't have crossed",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2658',
        topicCode: 'hazard_awareness',
        question:
            "You're following a slower-moving vehicle. What should you do if there's a junction just ahead on the right?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtake after checking your mirrors and signalling',
                img: '',
            },
            {
                char: 'b',
                text: "Only consider overtaking when you're past the junction",
                img: '',
            },
            {
                char: 'c',
                text: 'Accelerate quickly to overtake before reaching the junction',
                img: '',
            },
            {
                char: 'd',
                text: 'Slow down and prepare to overtake on the left',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2659',
        topicCode: 'hazard_awareness',
        question:
            'MTRC What should you do as you approach this overhead bridge?',
        questionImg: 'AB2659.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move out to the centre of the road before going through',
                img: '',
            },
            {
                char: 'b',
                text: 'Find another route; this one is only for high vehicles',
                img: '',
            },
            {
                char: 'c',
                text: 'Be prepared to give way to large vehicles in the middle of the road',
                img: '',
            },
            {
                char: 'd',
                text: 'Move across to the right-hand side before going through',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2687',
        topicCode: 'hazard_awareness',
        question:
            'MTRC Why are vehicle mirrors often slightly curved (convex)?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They give a wider field of vision',
                img: '',
            },
            {
                char: 'b',
                text: 'They totally cover blind spots',
                img: '',
            },
            {
                char: 'c',
                text: 'They make it easier to judge the speed of the traffic behind',
                img: '',
            },
            {
                char: 'd',
                text: 'They make the traffic behind look bigger',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2701',
        topicCode: 'hazard_awareness',
        question:
            "You're on a three-lane motorway. How should you overtake a slow-moving lorry in the middle lane if it's showing this sign?",
        questionImg: 'AB2701.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Cautiously approach the lorry, then overtake on either side',
                img: '',
            },
            {
                char: 'b',
                text: 'Follow the lorry until you can leave the motorway',
                img: '',
            },
            {
                char: 'c',
                text: 'Use the right-hand lane and overtake the lorry normally',
                img: '',
            },
            {
                char: 'd',
                text: 'Approach with care and overtake on the left of the lorry',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2716',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if you think the driver of the vehicle in front has forgotten to cancel their right indicator?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Flash your lights to alert the driver',
                img: '',
            },
            {
                char: 'b',
                text: 'Sound your horn before overtaking',
                img: '',
            },
            {
                char: 'c',
                text: "Overtake on the left if there's room",
                img: '',
            },
            {
                char: 'd',
                text: "Stay behind and don't overtake",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2717',
        topicCode: 'hazard_awareness',
        question:
            "What's the main hazard the driver of the red car (arrowed) should be aware of?",
        questionImg: 'AB2717.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "Glare from the sun may affect the driver's vision",
                img: '',
            },
            {
                char: 'b',
                text: 'The black car may stop suddenly',
                img: '',
            },
            {
                char: 'c',
                text: 'The bus may move out into the road',
                img: '',
            },
            {
                char: 'd',
                text: 'Oncoming vehicles will assume the driver is turning right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2718',
        topicCode: 'hazard_awareness',
        question: 'MTRC What type of vehicle displays this yellow sign?',
        questionImg: 'AB2718.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A broken-down vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'A school bus',
                img: '',
            },
            {
                char: 'c',
                text: 'An ice-cream van',
                img: '',
            },
            {
                char: 'd',
                text: 'A private ambulance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2719',
        topicCode: 'hazard_awareness',
        question:
            'What hazard should you be aware of when travelling along this street?',
        questionImg: 'AB2719n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Glare from the sun',
                img: '',
            },
            {
                char: 'b',
                text: 'Lack of road markings',
                img: '',
            },
            {
                char: 'c',
                text: 'Children running out between vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'Large goods vehicles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2720',
        topicCode: 'hazard_awareness',
        question:
            "What's the main hazard you should be aware of when following this cyclist?",
        questionImg: 'AB2720n1.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The cyclist may move to the left and dismount',
                img: '',
            },
            {
                char: 'b',
                text: 'The cyclist may swerve into the road',
                img: '',
            },
            {
                char: 'c',
                text: 'The cyclist may get off and push their bicycle',
                img: '',
            },
            {
                char: 'd',
                text: 'The cyclist may wish to turn right at the end of the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2721',
        topicCode: 'hazard_awareness',
        question:
            'A driver’s behaviour has upset you. How can you get over this incident safely?',
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
        code: 'AB2723',
        topicCode: 'hazard_awareness',
        question:
            'How should you drive in areas with traffic-calming measures?',
        questionImg: 'AB2723n1.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At a reduced speed',
                img: '',
            },
            {
                char: 'b',
                text: 'At the speed limit',
                img: '',
            },
            {
                char: 'c',
                text: 'In the centre of the road',
                img: '',
            },
            {
                char: 'd',
                text: 'With headlights on dipped beam',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2724',
        topicCode: 'hazard_awareness',
        question: 'MTRC Why should you slow down as you approach this hazard?',
        questionImg: 'AB2724.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Because of the level crossing',
                img: '',
            },
            {
                char: 'b',
                text: 'Because it’s hard to see to the right',
                img: '',
            },
            {
                char: 'c',
                text: 'Because of approaching traffic',
                img: '',
            },
            {
                char: 'd',
                text: 'Because of animals crossing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2725',
        topicCode: 'hazard_awareness',
        question: 'MTRC Why are place names painted on the road surface?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To restrict the flow of traffic',
                img: '',
            },
            {
                char: 'b',
                text: 'To warn of oncoming traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'To help you select the correct lane in good time',
                img: '',
            },
            {
                char: 'd',
                text: 'To prevent you from changing lanes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2736',
        topicCode: 'hazard_awareness',
        question:
            'Some two-way roads are divided into three lanes. Why are they particularly dangerous?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Traffic in both directions can use the middle lane to overtake',
                img: '',
            },
            {
                char: 'b',
                text: 'Traffic can travel faster in poor weather conditions',
                img: '',
            },
            {
                char: 'c',
                text: 'Traffic can overtake on the left',
                img: '',
            },
            {
                char: 'd',
                text: 'Traffic uses the middle lane for emergencies only',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2844',
        topicCode: 'hazard_awareness',
        question:
            'What type of vehicle uses an amber flashing beacon on a dual carriageway?',
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
                text: 'A fire engine',
                img: '',
            },
            {
                char: 'c',
                text: 'A doctor on call',
                img: '',
            },
            {
                char: 'd',
                text: 'A tractor',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2847',
        topicCode: 'hazard_awareness',
        question:
            'What does this signal from a police officer mean to oncoming traffic?',
        questionImg: 'AB2847n1.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Go ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop',
                img: '',
            },
            {
                char: 'c',
                text: 'Turn left',
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
        code: 'AB2848',
        topicCode: 'hazard_awareness',
        question:
            'Why should you be cautious when going past this bus waiting at a bus stop?',
        questionImg: 'AB2848n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "There's a zebra crossing ahead",
                img: '',
            },
            {
                char: 'b',
                text: 'There are driveways on the left',
                img: '',
            },
            {
                char: 'c',
                text: 'People may cross the road in front of it',
                img: '',
            },
            {
                char: 'd',
                text: 'The road surface will be slippery',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2871',
        topicCode: 'hazard_awareness',
        question: 'MTRC Where would it be unsafe to overtake?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On a single carriageway',
                img: '',
            },
            {
                char: 'b',
                text: 'On a one-way street',
                img: '',
            },
            {
                char: 'c',
                text: 'Approaching a junction',
                img: '',
            },
            {
                char: 'd',
                text: 'Travelling up a long hill',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2902',
        topicCode: 'hazard_awareness',
        question: 'MTRC How can drinking alcohol affect your ability to drive?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Your ability to judge speed will be reduced',
                img: '',
            },
            {
                char: 'b',
                text: 'Your confidence will be reduced',
                img: '',
            },
            {
                char: 'c',
                text: 'Your reactions will be faster',
                img: '',
            },
            {
                char: 'd',
                text: 'Your awareness of danger will be improved',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1081',
        topicCode: 'hazard_awareness',
        question:
            'What does the solid white line at the side of the road indicate?',
        questionImg: 'BB1081n1.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Traffic lights ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'Edge of the carriageway',
                img: '',
            },
            {
                char: 'c',
                text: 'Footpath on the left',
                img: '',
            },
            {
                char: 'd',
                text: 'Cycle path',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1085',
        topicCode: 'hazard_awareness',
        question:
            "You're driving towards this level crossing. What would be the first warning of an approaching train?",
        questionImg: 'BB1085n1.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Both half-barriers down',
                img: '',
            },
            {
                char: 'b',
                text: 'A steady amber light',
                img: '',
            },
            {
                char: 'c',
                text: 'One half-barrier down',
                img: '',
            },
            {
                char: 'd',
                text: 'Twin flashing red lights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1087',
        topicCode: 'hazard_awareness',
        question:
            "You're behind this cyclist. When the traffic lights change, what should you do?",
        questionImg: 'BB1087n1.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Try to move off before the cyclist',
                img: '',
            },
            {
                char: 'b',
                text: 'Allow the cyclist time and room',
                img: '',
            },
            {
                char: 'c',
                text: 'Turn right but give the cyclist room',
                img: '',
            },
            {
                char: 'd',
                text: 'Tap your horn and drive through first',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1095',
        topicCode: 'hazard_awareness',
        question:
            'You intend to turn left at the traffic lights. What should you do just before turning?',
        questionImg: 'BB1095n1.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check your right mirror',
                img: '',
            },
            {
                char: 'b',
                text: 'Move up closer to the car ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'Move out to the right',
                img: '',
            },
            {
                char: 'd',
                text: 'Check for bicycles on your left',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1096',
        topicCode: 'hazard_awareness',
        question: 'MTRC Why should you reduce your speed here?',
        questionImg: 'BB1096n1.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'A staggered junction is ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'A low bridge is ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'The road surface changes ahead',
                img: '',
            },
            {
                char: 'd',
                text: 'The road narrows ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1099',
        topicCode: 'hazard_awareness',
        question: 'MTRC What might you expect to happen in this situation?',
        questionImg: 'BB1099n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Traffic will move into the right-hand lane',
                img: '',
            },
            {
                char: 'b',
                text: 'Traffic speed will increase',
                img: '',
            },
            {
                char: 'c',
                text: 'Traffic will move into the left-hand lane',
                img: '',
            },
            {
                char: 'd',
                text: "Traffic won't need to change position",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1100',
        topicCode: 'hazard_awareness',
        question:
            "You're driving on a road with several lanes. What do these signs above the lanes mean?",
        questionImg: 'BB1100.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The two right lanes are open',
                img: '',
            },
            {
                char: 'b',
                text: 'The two left lanes are open',
                img: '',
            },
            {
                char: 'c',
                text: 'Traffic in the left lanes should stop',
                img: '',
            },
            {
                char: 'd',
                text: 'Traffic in the right lanes should stop',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1109',
        topicCode: 'hazard_awareness',
        question:
            "You're invited to a pub lunch. What should you do if you know that you'll have to drive in the evening?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Avoid mixing your alcoholic drinks',
                img: '',
            },
            {
                char: 'b',
                text: "Don't drink any alcohol at all",
                img: '',
            },
            {
                char: 'c',
                text: 'Have some milk before drinking alcohol',
                img: '',
            },
            {
                char: 'd',
                text: 'Eat a hot meal with your alcoholic drinks',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1112',
        topicCode: 'hazard_awareness',
        question:
            "What will become more expensive after you've been convicted of driving while unfit through drink or drugs?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Road fund licence',
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
        code: 'BB1113',
        topicCode: 'hazard_awareness',
        question:
            'What advice should you give to a driver who has had a few alcoholic drinks at a party?',
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
        code: 'BB1115',
        topicCode: 'hazard_awareness',
        question:
            "What should you do about driving if you've been taking medicine that causes drowsiness?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only drive if your journey is necessary',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive on quiet roads',
                img: '',
            },
            {
                char: 'c',
                text: 'Ask someone to come with you',
                img: '',
            },
            {
                char: 'd',
                text: 'Avoid driving and check with your doctor',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1116',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if a doctor prescribes drugs that are likely to affect your driving?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Only drive if someone is with you',
                img: '',
            },
            {
                char: 'b',
                text: 'Avoid driving on motorways',
                img: '',
            },
            {
                char: 'c',
                text: 'Get someone else to drive',
                img: '',
            },
            {
                char: 'd',
                text: 'Never drive at more than 30 mph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1117',
        topicCode: 'hazard_awareness',
        question:
            'What must you do if your ability to drive is impaired during a period of illness?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'See your doctor each time before you drive',
                img: '',
            },
            {
                char: 'b',
                text: 'Take smaller doses of any medicines',
                img: '',
            },
            {
                char: 'c',
                text: "Stop driving until you're fit to drive again",
                img: '',
            },
            {
                char: 'd',
                text: 'Take all your medicines with you when you drive',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1120',
        topicCode: 'hazard_awareness',
        question:
            "What should you do if you begin to feel drowsy while you're driving?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop and rest as soon as possible',
                img: '',
            },
            {
                char: 'b',
                text: 'Turn the heater up to keep you warm and comfortable',
                img: '',
            },
            {
                char: 'c',
                text: 'Close the car windows to help you concentrate',
                img: '',
            },
            {
                char: 'd',
                text: 'Continue with your journey but drive more slowly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1121',
        topicCode: 'hazard_awareness',
        question:
            "What should you do if you become tired while you're driving on a motorway?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Pull up on the hard shoulder and change drivers',
                img: '',
            },
            {
                char: 'b',
                text: 'Leave the motorway at the next exit and rest',
                img: '',
            },
            {
                char: 'c',
                text: 'Increase your speed and turn up the radio volume',
                img: '',
            },
            {
                char: 'd',
                text: 'Close all your windows and set the heating to warm',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1123',
        topicCode: 'hazard_awareness',
        question:
            "You're about to drive home. What should you do if you feel very tired and have a severe headache?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "Wait until you're fit and well before driving",
                img: '',
            },
            {
                char: 'b',
                text: 'Drive home, but take a tablet for headaches',
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
        code: 'BB1127',
        topicCode: 'hazard_awareness',
        question:
            'What can you do to help prevent tiredness on a long journey?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Eat a large meal before driving',
                img: '',
            },
            {
                char: 'b',
                text: 'Take regular refreshment breaks',
                img: '',
            },
            {
                char: 'c',
                text: 'Play loud music in the car',
                img: '',
            },
            {
                char: 'd',
                text: 'Complete the journey without stopping',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1284',
        topicCode: 'hazard_awareness',
        question:
            'You take some cough medicine given to you by a friend. What should you do before driving your car?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Ask your friend if taking the medicine affected their driving',
                img: '',
            },
            {
                char: 'b',
                text: 'Drink some strong coffee one hour before driving',
                img: '',
            },
            {
                char: 'c',
                text: 'Check the label to see if the medicine will affect your driving',
                img: '',
            },
            {
                char: 'd',
                text: 'Drive a short distance to see if the medicine is affecting your driving',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1353',
        topicCode: 'hazard_awareness',
        question:
            "You're driving on a one-way street. What should you do if you realise you've taken the wrong route?",
        questionImg: 'BB1353.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Reverse out of the road',
                img: '',
            },
            {
                char: 'b',
                text: 'Turn around in a side road',
                img: '',
            },
            {
                char: 'c',
                text: 'Continue and find another route',
                img: '',
            },
            {
                char: 'd',
                text: 'Reverse into a driveway',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1380',
        topicCode: 'hazard_awareness',
        question: "What will be a serious distraction while you're driving?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Looking at road maps',
                img: '',
            },
            {
                char: 'b',
                text: 'Switching on your demister',
                img: '',
            },
            {
                char: 'c',
                text: 'Using your windscreen washers',
                img: '',
            },
            {
                char: 'd',
                text: 'Looking in your door mirror',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1397',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if the vehicle starts reversing off the driveway?',
        questionImg: 'BB1397n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move to the opposite side of the road',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive through as you have priority',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn and be prepared to stop',
                img: '',
            },
            {
                char: 'd',
                text: 'Speed up and drive through quickly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1398',
        topicCode: 'hazard_awareness',
        question:
            "You've been involved in an argument that's made you feel angry. What should you do before starting your journey?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Open a window',
                img: '',
            },
            {
                char: 'b',
                text: 'Turn on your radio',
                img: '',
            },
            {
                char: 'c',
                text: 'Have an alcoholic drink',
                img: '',
            },
            {
                char: 'd',
                text: 'Calm down',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1454',
        topicCode: 'hazard_awareness',
        question:
            "You're driving on this dual carriageway. Why may you need to slow down?",
        questionImg: 'BB1454n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "There's a broken white line in the centre",
                img: '',
            },
            {
                char: 'b',
                text: 'There are solid white lines on either side',
                img: '',
            },
            {
                char: 'c',
                text: 'There are roadworks ahead of you',
                img: '',
            },
            {
                char: 'd',
                text: 'There are no footpaths',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1455',
        topicCode: 'hazard_awareness',
        question:
            "You've just been overtaken by this motorcyclist. What should you do if the rider cuts in sharply?",
        questionImg: 'BB1455.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Sound the horn',
                img: '',
            },
            {
                char: 'b',
                text: 'Brake firmly',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep a safe gap',
                img: '',
            },
            {
                char: 'd',
                text: 'Flash your lights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1457',
        topicCode: 'hazard_awareness',
        question:
            "You're about to drive your car. What should you do if you can't find the glasses you need to wear?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drive home slowly, keeping to quiet roads',
                img: '',
            },
            {
                char: 'b',
                text: 'Borrow a friend’s glasses and use those',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive home at night, so that the lights will help you',
                img: '',
            },
            {
                char: 'd',
                text: 'Find a way of getting home without driving',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1459',
        topicCode: 'hazard_awareness',
        question:
            'MTRC How does drinking alcohol affect your driving behaviour?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It improves judgement skills',
                img: '',
            },
            {
                char: 'b',
                text: 'It increases confidence',
                img: '',
            },
            {
                char: 'c',
                text: 'It leads to faster reactions',
                img: '',
            },
            {
                char: 'd',
                text: 'It increases concentration',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1461',
        topicCode: 'hazard_awareness',
        question:
            'Why should you check the information leaflet before taking any medicine?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drug companies want customer feedback on their products',
                img: '',
            },
            {
                char: 'b',
                text: 'You may have to let your insurance company know about the medicine',
                img: '',
            },
            {
                char: 'c',
                text: 'Some types of medicine can affect your ability to drive safely',
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
        code: 'BB1514',
        topicCode: 'hazard_awareness',
        question:
            'You need glasses to read a vehicle number plate at the required distance. When must you wear them?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Only in bad weather conditions',
                img: '',
            },
            {
                char: 'b',
                text: "Whenever you're driving",
                img: '',
            },
            {
                char: 'c',
                text: "When you think it's necessary",
                img: '',
            },
            {
                char: 'd',
                text: 'Only at night time',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1546',
        topicCode: 'hazard_awareness',
        question:
            'Which type of glasses would make driving at night more difficult?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Half-moon',
                img: '',
            },
            {
                char: 'b',
                text: 'Round',
                img: '',
            },
            {
                char: 'c',
                text: 'Bifocal',
                img: '',
            },
            {
                char: 'd',
                text: 'Tinted',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1564',
        topicCode: 'hazard_awareness',
        question: 'MTRC What can seriously reduce your ability to concentrate?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drugs',
                img: '',
            },
            {
                char: 'b',
                text: 'Busy roads',
                img: '',
            },
            {
                char: 'c',
                text: 'Tinted windows',
                img: '',
            },
            {
                char: 'd',
                text: 'Weather conditions',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1568',
        topicCode: 'hazard_awareness',
        question:
            "What must you do if your eyesight has become very poor and you're no longer able to meet the driver's eyesight requirements?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Tell the driver licensing authority',
                img: '',
            },
            {
                char: 'b',
                text: 'Tell your doctor',
                img: '',
            },
            {
                char: 'c',
                text: 'Tell the police',
                img: '',
            },
            {
                char: 'd',
                text: 'Tell your optician',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1575',
        topicCode: 'hazard_awareness',
        question: 'MTRC When should you use hazard warning lights?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "When you're double-parked on a two-way road",
                img: '',
            },
            {
                char: 'b',
                text: "When your direction indicators aren't working",
                img: '',
            },
            {
                char: 'c',
                text: 'When warning oncoming traffic that you intend to stop',
                img: '',
            },
            {
                char: 'd',
                text: 'When your vehicle has broken down and is causing an obstruction',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1576',
        topicCode: 'hazard_awareness',
        question:
            'You want to turn left at this junction. What should you do if your view of the main road is restricted?',
        questionImg: 'BB1576n1.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stay well back and wait to see if anything comes',
                img: '',
            },
            {
                char: 'b',
                text: 'Build up your speed so that you can emerge quickly',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop and apply the parking brake even if the road is clear',
                img: '',
            },
            {
                char: 'd',
                text: 'Approach slowly and edge out until you can see more clearly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1596',
        topicCode: 'hazard_awareness',
        question:
            "You're driving a car fitted with automatic transmission. When would you use ‘kick down’?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To engage cruise control',
                img: '',
            },
            {
                char: 'b',
                text: 'To accelerate quickly',
                img: '',
            },
            {
                char: 'c',
                text: 'To brake progressively',
                img: '',
            },
            {
                char: 'd',
                text: 'To improve fuel economy',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1664',
        topicCode: 'hazard_awareness',
        question:
            "What should you do if it's raining and you're following this lorry on a motorway?",
        questionImg: 'BB1664n1.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Allow a two-second separation gap',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch your headlights onto main beam',
                img: '',
            },
            {
                char: 'c',
                text: 'Move into a lane that has less spray',
                img: '',
            },
            {
                char: 'd',
                text: 'Be aware of spray reducing your vision',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1665',
        topicCode: 'hazard_awareness',
        question:
            "You're driving towards this left-hand bend. What danger should you be anticipating?",
        questionImg: 'BB1665n1.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A vehicle overtaking you',
                img: '',
            },
            {
                char: 'b',
                text: 'Mud on the road',
                img: '',
            },
            {
                char: 'c',
                text: 'The road getting narrower',
                img: '',
            },
            {
                char: 'd',
                text: 'Pedestrians walking towards you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1666',
        topicCode: 'hazard_awareness',
        question:
            'What should you do if the traffic in the left-hand lane is slowing?',
        questionImg: 'BB1666n1.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slow down, keeping a safe separation distance',
                img: '',
            },
            {
                char: 'b',
                text: 'Accelerate past the vehicles in the left-hand lane',
                img: '',
            },
            {
                char: 'c',
                text: 'Pull up on the left-hand verge',
                img: '',
            },
            {
                char: 'd',
                text: 'Move across and continue in the right-hand lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1670',
        topicCode: 'hazard_awareness',
        question: 'MTRC When may you use hazard warning lights?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When driving on a motorway to warn traffic behind of a hazard ahead',
                img: '',
            },
            {
                char: 'b',
                text: "When you're double-parked on a two-way road",
                img: '',
            },
            {
                char: 'c',
                text: "When your direction indicators aren't working",
                img: '',
            },
            {
                char: 'd',
                text: 'When warning oncoming traffic that you intend to stop',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1727',
        topicCode: 'hazard_awareness',
        question:
            "You're waiting to emerge at a junction. Your view is restricted by parked vehicles. What can help you to see traffic on the road you're joining?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Looking for traffic behind you',
                img: '',
            },
            {
                char: 'b',
                text: 'Reflections of traffic in windows',
                img: '',
            },
            {
                char: 'c',
                text: 'Making eye contact with other road users',
                img: '',
            },
            {
                char: 'd',
                text: 'Checking for traffic in your interior mirror',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1743',
        topicCode: 'hazard_awareness',
        question: 'MTRC What must you do if poor health affects your driving?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Inform your local police',
                img: '',
            },
            {
                char: 'b',
                text: 'Avoid using motorways',
                img: '',
            },
            {
                char: 'c',
                text: 'Always drive accompanied',
                img: '',
            },
            {
                char: 'd',
                text: 'Inform the licensing authority',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1748',
        topicCode: 'hazard_awareness',
        question: 'MTRC Why should the junction on the left be kept clear?',
        questionImg: 'BB1748.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To allow vehicles to enter and emerge',
                img: '',
            },
            {
                char: 'b',
                text: 'To allow the bus to reverse',
                img: '',
            },
            {
                char: 'c',
                text: 'To allow vehicles to make a U-turn',
                img: '',
            },
            {
                char: 'd',
                text: 'To allow vehicles to park',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1779',
        topicCode: 'hazard_awareness',
        question:
            "What should you do if you start to feel drowsy while you're driving on a motorway?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder for a sleep',
                img: '',
            },
            {
                char: 'b',
                text: 'Open a window and stop as soon as it’s safe and legal',
                img: '',
            },
            {
                char: 'c',
                text: 'Speed up to arrive at your destination sooner',
                img: '',
            },
            {
                char: 'd',
                text: 'Slow down and let other drivers overtake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2117',
        topicCode: 'vulnerable_road_users',
        question:
            'Which sign means that there may be people walking along the road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'AB2117a.gif',
            },
            {
                char: 'b',
                text: '',
                img: 'AB2117b.gif',
            },
            {
                char: 'c',
                text: '',
                img: 'AB2117c.gif',
            },
            {
                char: 'd',
                text: '',
                img: 'AB2117d.gif',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2119',
        topicCode: 'vulnerable_road_users',
        question:
            'What should you do if you want to turn left at a junction where pedestrians have started to cross?',
        questionImg: 'AB2119.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Go around them, leaving plenty of room',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop and wave at them to cross',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn and proceed',
                img: '',
            },
            {
                char: 'd',
                text: 'Give way to them',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2122',
        topicCode: 'vulnerable_road_users',
        question:
            "What hazard should you be especially aware of if you're turning left into a side road?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'One-way street',
                img: '',
            },
            {
                char: 'b',
                text: 'Pedestrians',
                img: '',
            },
            {
                char: 'c',
                text: 'Traffic congestion',
                img: '',
            },
            {
                char: 'd',
                text: 'Parked vehicles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2123',
        topicCode: 'vulnerable_road_users',
        question:
            'Why should you check for motorcyclists just before turning right into a side road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They may be overtaking on your left',
                img: '',
            },
            {
                char: 'b',
                text: 'They may be following you closely',
                img: '',
            },
            {
                char: 'c',
                text: 'They may be emerging from the side road',
                img: '',
            },
            {
                char: 'd',
                text: 'They may be overtaking on your right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2124',
        topicCode: 'vulnerable_road_users',
        question:
            'MTRC Why is a toucan crossing different from other crossings?',
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
                text: "It's controlled by a traffic warden",
                img: '',
            },
            {
                char: 'c',
                text: "It's controlled by two flashing lights",
                img: '',
            },
            {
                char: 'd',
                text: 'Cyclists can use it',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2128',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC How will a school crossing patrol signal you to stop?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'By pointing to children waiting to cross',
                img: '',
            },
            {
                char: 'b',
                text: 'By displaying a red light',
                img: '',
            },
            {
                char: 'c',
                text: "By displaying a 'stop' sign",
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
        code: 'AB2129',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC Where would you see this sign?',
        questionImg: 'AB2129.gif',
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
        code: 'AB2134',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC What does this sign mean?',
        questionImg: 'AB2134.gif',
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
                text: 'A route for pedestrians and cyclists',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2136',
        topicCode: 'vulnerable_road_users',
        question:
            'You see a pedestrian carrying a white stick that also has a red band. What does this mean?',
        questionImg: 'AB2136n1.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They have limited mobility',
                img: '',
            },
            {
                char: 'b',
                text: "They're deaf",
                img: '',
            },
            {
                char: 'c',
                text: "They're blind",
                img: '',
            },
            {
                char: 'd',
                text: "They're deaf and blind",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2138',
        topicCode: 'vulnerable_road_users',
        question:
            'What would you do if you see older people crossing the road ahead?',
        questionImg: 'AB2138.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "Wave them across so they know that you've seen them",
                img: '',
            },
            {
                char: 'b',
                text: 'Be patient and allow them to cross in their own time',
                img: '',
            },
            {
                char: 'c',
                text: "Rev the engine to let them know that you're waiting",
                img: '',
            },
            {
                char: 'd',
                text: "Tap the horn in case they're hard of hearing",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2139',
        topicCode: 'vulnerable_road_users',
        question:
            'What should you do when you see an older person about to cross the road ahead?',
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
                text: 'Be careful; they may misjudge your speed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2143',
        topicCode: 'vulnerable_road_users',
        question:
            "You're approaching a roundabout. What should you do if a cyclist ahead is signalling to turn right?",
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
        code: 'AB2147',
        topicCode: 'vulnerable_road_users',
        question:
            'Which vehicle should you allow extra room as you overtake them?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Lorry',
                img: '',
            },
            {
                char: 'b',
                text: 'Tractor',
                img: '',
            },
            {
                char: 'c',
                text: 'Bicycle',
                img: '',
            },
            {
                char: 'd',
                text: 'Road-sweeper',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2150',
        topicCode: 'vulnerable_road_users',
        question:
            'Why should you look carefully for motorcyclists and cyclists at junctions?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They may want to turn into the side road',
                img: '',
            },
            {
                char: 'b',
                text: 'They may slow down to let you turn',
                img: '',
            },
            {
                char: 'c',
                text: "They're harder to see",
                img: '',
            },
            {
                char: 'd',
                text: 'They might not see you turn',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2151',
        topicCode: 'vulnerable_road_users',
        question:
            "You're waiting to come out of a side road. Why should you look carefully for motorcycles?",
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
                text: 'Motorcycles can easily be hidden behind obstructions',
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
        code: 'AB2153',
        topicCode: 'vulnerable_road_users',
        question:
            'MTRC Why do motorcyclists use dipped headlights in daylight?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'So that the rider can be seen more easily',
                img: '',
            },
            {
                char: 'b',
                text: 'To stop the battery overcharging',
                img: '',
            },
            {
                char: 'c',
                text: 'To improve the rider’s vision',
                img: '',
            },
            {
                char: 'd',
                text: 'The rider is inviting you to proceed',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2156',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC Why do motorcyclists wear bright clothing?',
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
                text: 'It helps keep them cool in summer',
                img: '',
            },
            {
                char: 'c',
                text: 'The colours are popular',
                img: '',
            },
            {
                char: 'd',
                text: 'To make them more visible',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2160',
        topicCode: 'vulnerable_road_users',
        question:
            'Why do motorcyclists often look round over their right shoulder just before turning right?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To listen for traffic behind them',
                img: '',
            },
            {
                char: 'b',
                text: "Motorcycles don't have mirrors",
                img: '',
            },
            {
                char: 'c',
                text: 'It helps them balance as they turn',
                img: '',
            },
            {
                char: 'd',
                text: 'To check for traffic in their blind area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2161',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC Which is the most vulnerable road user?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Car driver',
                img: '',
            },
            {
                char: 'b',
                text: 'Tractor driver',
                img: '',
            },
            {
                char: 'c',
                text: 'Lorry driver',
                img: '',
            },
            {
                char: 'd',
                text: 'Motorcyclist',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2168',
        topicCode: 'vulnerable_road_users',
        question:
            "You're approaching a roundabout. What should you do if there are horses being ridden in front of you?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Sound your horn as a warning',
                img: '',
            },
            {
                char: 'b',
                text: 'Treat them like any other vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'Give them plenty of room',
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
        code: 'AB2491',
        topicCode: 'vulnerable_road_users',
        question:
            'As you approach a pelican crossing, the lights change to green. What should you do if older people are still crossing?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wave them to cross as quickly as they can',
                img: '',
            },
            {
                char: 'b',
                text: 'Rev your engine to make them hurry',
                img: '',
            },
            {
                char: 'c',
                text: "Flash your lights in case they haven't noticed you",
                img: '',
            },
            {
                char: 'd',
                text: 'Wait patiently while they cross',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2516',
        topicCode: 'vulnerable_road_users',
        question:
            'What action should you take when you see flashing amber lights under a school warning sign?',
        questionImg: 'AB2516n1.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "Reduce speed until you're clear of the area",
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
                text: 'Wait at the lights until they stop flashing',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2545',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC Why should these road markings be kept clear?',
        questionImg: 'AB2545.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To allow children to be dropped off at school',
                img: '',
            },
            {
                char: 'b',
                text: 'To allow teachers to park',
                img: '',
            },
            {
                char: 'c',
                text: 'To allow children to be picked up after school',
                img: '',
            },
            {
                char: 'd',
                text: "To allow children to see and be seen when they're crossing the road",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2559',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC Where would you see this sign?',
        questionImg: 'AB2559.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Near a school crossing',
                img: '',
            },
            {
                char: 'b',
                text: 'At a playground entrance',
                img: '',
            },
            {
                char: 'c',
                text: 'On a school bus',
                img: '',
            },
            {
                char: 'd',
                text: 'At a ‘pedestrians only’ area',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2561',
        topicCode: 'vulnerable_road_users',
        question:
            "You're following two cyclists as they approach a roundabout in the left-hand lane. Where would you expect the cyclists to go?",
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
        code: 'AB2562',
        topicCode: 'vulnerable_road_users',
        question:
            "You're travelling behind a moped. What should you do if you want to turn left a short distance ahead?",
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
                text: 'Sound your horn as a warning and pull in front of the moped',
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
        code: 'AB2564',
        topicCode: 'vulnerable_road_users',
        question:
            "You see a horse rider as you approach a roundabout. What should you do if they're signalling right but keeping well to the left?",
        questionImg: '',
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
        code: 'AB2565',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC How should you react to inexperienced drivers?',
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
                text: "Flash your headlights to indicate that it's safe for them to proceed",
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
        code: 'AB2566',
        topicCode: 'vulnerable_road_users',
        question:
            "What should you do when you're following a learner driver who stalls at a junction?",
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
        code: 'AB2587',
        topicCode: 'vulnerable_road_users',
        question:
            "You're on a country road that has no pavement. What should you anticipate finding on your side of the road?",
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
        code: 'AB2601',
        topicCode: 'vulnerable_road_users',
        question:
            "You're following a cyclist. What should you do when you wish to turn left a short distance ahead?",
        questionImg: 'AB2601n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Overtake the cyclist before you reach the junction',
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
        code: 'AB2602',
        topicCode: 'vulnerable_road_users',
        question:
            'A horse rider is in the left-hand lane approaching a roundabout. Where should you expect the rider to go?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In any direction',
                img: '',
            },
            {
                char: 'b',
                text: 'To the right',
                img: '',
            },
            {
                char: 'c',
                text: 'To the left',
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
        code: 'AB2660',
        topicCode: 'vulnerable_road_users',
        question:
            "Powered vehicles used by disabled people are small and can be hard to see. What must they display if they're travelling on a dual carriageway?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Flashing red beacon',
                img: '',
            },
            {
                char: 'b',
                text: 'Flashing green beacon',
                img: '',
            },
            {
                char: 'c',
                text: 'Flashing blue beacon',
                img: '',
            },
            {
                char: 'd',
                text: 'Flashing amber beacon',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2696',
        topicCode: 'vulnerable_road_users',
        question:
            'What does it mean when a moving vehicle is showing a flashing amber beacon?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The vehicle is slow moving',
                img: '',
            },
            {
                char: 'b',
                text: 'The vehicle has broken down',
                img: '',
            },
            {
                char: 'c',
                text: "The vehicle is a doctor's car",
                img: '',
            },
            {
                char: 'd',
                text: 'The vehicle belongs to a school crossing patrol',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2726',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC What does this sign mean?',
        questionImg: 'AB2726.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Contraflow cycle lane',
                img: '',
            },
            {
                char: 'b',
                text: 'With-flow cycle lane',
                img: '',
            },
            {
                char: 'c',
                text: 'Cycles and buses only',
                img: '',
            },
            {
                char: 'd',
                text: 'No cycles or buses',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2727',
        topicCode: 'vulnerable_road_users',
        question:
            'What should you do when you see these horse riders in front?',
        questionImg: 'AB2727n1.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Pull out to the middle of the road',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down and be ready to stop',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch on your hazard warning lights',
                img: '',
            },
            {
                char: 'd',
                text: 'Give a right-turn signal',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2729',
        topicCode: 'vulnerable_road_users',
        question: "What's the purpose of these road markings?",
        questionImg: 'AB2729.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "To ensure children can see and be seen when they're crossing the road",
                img: '',
            },
            {
                char: 'b',
                text: 'To enable teachers to have clear access to the school',
                img: '',
            },
            {
                char: 'c',
                text: 'To ensure delivery vehicles have easy access to the school',
                img: '',
            },
            {
                char: 'd',
                text: 'To enable parents to pick up or drop off children safely',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2730',
        topicCode: 'vulnerable_road_users',
        question:
            'What should you do if the left-hand pavement is closed due to street repairs?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Watch out for pedestrians walking in the road',
                img: '',
            },
            {
                char: 'b',
                text: 'Use your right-hand mirror more often',
                img: '',
            },
            {
                char: 'c',
                text: 'Speed up to get past the roadworks more quickly',
                img: '',
            },
            {
                char: 'd',
                text: 'Position close to the left-hand kerb',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2731',
        topicCode: 'vulnerable_road_users',
        question:
            "What should you do when you're following a motorcyclist along a road that has a poor surface?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Follow closely so they can see you in their mirrors',
                img: '',
            },
            {
                char: 'b',
                text: 'Overtake immediately to avoid delays',
                img: '',
            },
            {
                char: 'c',
                text: 'Allow extra room in case they swerve to avoid potholes',
                img: '',
            },
            {
                char: 'd',
                text: 'Allow the same room as normal to avoid wasting road space',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2840',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC What does this sign mean?',
        questionImg: 'AB2840.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'No cycling',
                img: '',
            },
            {
                char: 'b',
                text: 'Cycle route ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'Cycle parking only',
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
        code: 'AB2849',
        topicCode: 'vulnerable_road_users',
        question:
            "You're approaching this roundabout. What should you do when a cyclist is keeping to the left while signalling to turn right?",
        questionImg: 'AB2849n1.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sound your horn',
                img: '',
            },
            {
                char: 'b',
                text: 'Overtake them',
                img: '',
            },
            {
                char: 'c',
                text: "Assume they're turning left",
                img: '',
            },
            {
                char: 'd',
                text: 'Allow them space to turn',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2850',
        topicCode: 'vulnerable_road_users',
        question: "What should you do when you're approaching this crossing?",
        questionImg: 'AB2850.gif',
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
                text: 'Continue unless the pedestrians step out',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2851',
        topicCode: 'vulnerable_road_users',
        question:
            'What does it mean if you see a pedestrian with a dog that has a yellow or burgundy coat?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The pedestrian is an older person',
                img: '',
            },
            {
                char: 'b',
                text: 'The pedestrian is a dog trainer',
                img: '',
            },
            {
                char: 'c',
                text: 'The pedestrian is colour-blind',
                img: '',
            },
            {
                char: 'd',
                text: 'The pedestrian is deaf',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2854',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC Who may use toucan crossings?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Motorcyclists and cyclists',
                img: '',
            },
            {
                char: 'b',
                text: 'Motorcyclists and pedestrians',
                img: '',
            },
            {
                char: 'c',
                text: 'Only cyclists',
                img: '',
            },
            {
                char: 'd',
                text: 'Cyclists and pedestrians',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2860',
        topicCode: 'vulnerable_road_users',
        question:
            "This junction, controlled by traffic lights, has a marked area between two stop lines. What's this for?",
        questionImg: 'AB2860n1.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To allow taxis to position in front of other traffic',
                img: '',
            },
            {
                char: 'b',
                text: 'To allow people with disabilities to cross the road',
                img: '',
            },
            {
                char: 'c',
                text: 'To allow cyclists and pedestrians to cross the road together',
                img: '',
            },
            {
                char: 'd',
                text: 'To allow cyclists to position in front of other traffic',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2896',
        topicCode: 'vulnerable_road_users',
        question:
            "You're about to overtake a cyclist. Why should you leave them as much room as you would give to a car?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The cyclist might speed up',
                img: '',
            },
            {
                char: 'b',
                text: 'The cyclist might get off their bicycle',
                img: '',
            },
            {
                char: 'c',
                text: 'The cyclist might be unsettled if you pass too near them',
                img: '',
            },
            {
                char: 'd',
                text: 'The cyclist might have to make a left turn',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2908',
        topicCode: 'vulnerable_road_users',
        question:
            "What should you do when you're passing loose sheep on the road?",
        questionImg: 'AB2908n.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Briefly sound your horn',
                img: '',
            },
            {
                char: 'b',
                text: 'Go very slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Pass quickly but quietly',
                img: '',
            },
            {
                char: 'd',
                text: 'Herd them to the side of the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2941',
        topicCode: 'vulnerable_road_users',
        question:
            'At night, what does it mean if you see a pedestrian wearing reflective clothing and carrying a bright red light?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "You're approaching roadworks",
                img: '',
            },
            {
                char: 'b',
                text: "You're approaching an organised walk",
                img: '',
            },
            {
                char: 'c',
                text: "You're approaching a slow-moving vehicle",
                img: '',
            },
            {
                char: 'd',
                text: "You're approaching a traffic danger spot",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2943',
        topicCode: 'vulnerable_road_users',
        question:
            'You’ve just passed your driving test. How can you reduce your risk of being involved in a collision?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'By always staying close to the vehicle in front',
                img: '',
            },
            {
                char: 'b',
                text: 'By never going over 40 mph',
                img: '',
            },
            {
                char: 'c',
                text: 'By staying in the left-hand lane on all roads',
                img: '',
            },
            {
                char: 'd',
                text: 'By taking further training',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1131',
        topicCode: 'vulnerable_road_users',
        question:
            "You want to reverse into a side road. What should you do if you aren't sure that the area behind your car is clear?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Look through the rear window only',
                img: '',
            },
            {
                char: 'b',
                text: 'Get out and check',
                img: '',
            },
            {
                char: 'c',
                text: 'Check the mirrors only',
                img: '',
            },
            {
                char: 'd',
                text: "Carry on, assuming it's clear",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1132',
        topicCode: 'vulnerable_road_users',
        question:
            "You're about to reverse into a side road. What should you do if a pedestrian is waiting to cross behind your car?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Wave to the pedestrian to stop',
                img: '',
            },
            {
                char: 'b',
                text: 'Give way to the pedestrian',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn to warn the pedestrian',
                img: '',
            },
            {
                char: 'd',
                text: 'Reverse before the pedestrian starts to cross',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1133',
        topicCode: 'vulnerable_road_users',
        question:
            "Which road users are most difficult to see when you're reversing your car?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Motorcyclists',
                img: '',
            },
            {
                char: 'b',
                text: 'Car drivers',
                img: '',
            },
            {
                char: 'c',
                text: 'Cyclists',
                img: '',
            },
            {
                char: 'd',
                text: 'Children',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1135',
        topicCode: 'vulnerable_road_users',
        question:
            'You want to turn right from a junction. What should you do if your view is restricted by parked vehicles?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move out quickly, but be prepared to stop',
                img: '',
            },
            {
                char: 'b',
                text: "Sound your horn and pull out if there's no reply",
                img: '',
            },
            {
                char: 'c',
                text: 'Stop, then move forward slowly until you have a clear view',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop, get out and look along the main road to check',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1136',
        topicCode: 'vulnerable_road_users',
        question:
            "You're at the front of a queue of traffic waiting to turn right into a side road. Why is it important to check your right mirror just before turning?",
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
        code: 'BB1139',
        topicCode: 'vulnerable_road_users',
        question:
            "You've driven up to a pelican crossing. What must you do while the amber light is flashing?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Signal the pedestrian to cross',
                img: '',
            },
            {
                char: 'b',
                text: 'Always wait for the green light before proceeding',
                img: '',
            },
            {
                char: 'c',
                text: 'Give way to any pedestrians on the crossing',
                img: '',
            },
            {
                char: 'd',
                text: 'Wait for the red-and-amber light before proceeding',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1140',
        topicCode: 'vulnerable_road_users',
        question:
            "You've stopped at a pelican crossing. What should you do if a disabled person is crossing slowly in front of you and the lights change to green?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Wait for them to finish crossing',
                img: '',
            },
            {
                char: 'b',
                text: 'Drive in front of them',
                img: '',
            },
            {
                char: 'c',
                text: 'Edge forward slowly',
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
        code: 'BB1142',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving past a line of parked cars. What should you do if a ball bounces out into the road ahead?",
        questionImg: 'BB1142n1.gif',
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
        code: 'BB1145',
        topicCode: 'vulnerable_road_users',
        question:
            'You want to turn right from a main road into a side road. What should you do just before turning?',
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
                text: 'Check for traffic overtaking on your right',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop and set the parking brake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1147',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving in a slow-moving queue of traffic. What should you do just before changing lane?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound the horn and flash your lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Look for motorcyclists filtering through the traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'Give a ‘slowing down’ arm signal',
                img: '',
            },
            {
                char: 'd',
                text: 'Change down to first gear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1148',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving in town. Why should you be careful if there's a bus at a bus stop on the other side of the road?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The bus might have broken down',
                img: '',
            },
            {
                char: 'b',
                text: 'Pedestrians might come from behind the bus',
                img: '',
            },
            {
                char: 'c',
                text: 'The bus might move off suddenly',
                img: '',
            },
            {
                char: 'd',
                text: 'The bus might remain stationary',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1149',
        topicCode: 'vulnerable_road_users',
        question: 'MTRC How should you overtake horse riders?',
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
                text: "Speed isn't important but allow plenty of room",
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
        code: 'BB1516',
        topicCode: 'vulnerable_road_users',
        question:
            'Why should you allow extra room while overtaking a motorcyclist on a windy day?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The rider may turn off suddenly to get out of the wind',
                img: '',
            },
            {
                char: 'b',
                text: 'The rider may be blown in front of you',
                img: '',
            },
            {
                char: 'c',
                text: 'The rider may stop suddenly',
                img: '',
            },
            {
                char: 'd',
                text: 'The rider may be travelling faster than normal',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1563',
        topicCode: 'vulnerable_road_users',
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
                text: 'On one-way streets',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1577',
        topicCode: 'vulnerable_road_users',
        question:
            'The road outside this school is marked with yellow zigzag lines. What do these lines mean?',
        questionImg: 'BB1577n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You may park on the lines when dropping off schoolchildren',
                img: '',
            },
            {
                char: 'b',
                text: 'You may park on the lines when picking up schoolchildren',
                img: '',
            },
            {
                char: 'c',
                text: "You shouldn't wait or park your vehicle here",
                img: '',
            },
            {
                char: 'd',
                text: 'You must stay with your vehicle if you park here',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1672',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving past parked cars. What should you do if you see a bicycle wheel sticking out between the cars?",
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
        code: 'BB1674',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving at night. What should you do if you're dazzled by a vehicle behind you?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Set your mirror to the anti-dazzle position',
                img: '',
            },
            {
                char: 'b',
                text: 'Set your mirror to dazzle the other driver',
                img: '',
            },
            {
                char: 'c',
                text: 'Brake sharply to a stop',
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
        code: 'BB1678',
        topicCode: 'vulnerable_road_users',
        question:
            "You're driving towards a zebra crossing. What should you do if a person in a wheelchair is waiting to cross?",
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
        code: 'AB2176',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're about to overtake a slow-moving motorcyclist. Which sign would make you take special care?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'AB2176a.gif',
            },
            {
                char: 'b',
                text: '',
                img: 'AB2176b.gif',
            },
            {
                char: 'c',
                text: '',
                img: 'AB2176c.gif',
            },
            {
                char: 'd',
                text: '',
                img: 'AB2176d.gif',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2177',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're waiting to turn right out of a minor road. It's clear to the left but a lorry is coming from the right. Why should you wait, even if you have enough time to turn?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Anything overtaking the lorry will be hidden from view',
                img: '',
            },
            {
                char: 'b',
                text: 'The lorry could suddenly speed up',
                img: '',
            },
            {
                char: 'c',
                text: 'The lorry might be slowing down',
                img: '',
            },
            {
                char: 'd',
                text: 'The load on the lorry might be unstable',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2179',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're following a long vehicle as it approaches a crossroads. What should you do if it signals left but moves out to the right?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Get closer in order to pass it quickly',
                img: '',
            },
            {
                char: 'b',
                text: 'Stay well back and give it room',
                img: '',
            },
            {
                char: 'c',
                text: "Assume the signal is wrong and that it's turning right",
                img: '',
            },
            {
                char: 'd',
                text: 'Overtake it as it starts to slow down',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2180',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're following a long vehicle approaching a crossroads. What should you do if the driver signals right but moves close to the left-hand kerb?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Warn the driver about the wrong signal',
                img: '',
            },
            {
                char: 'b',
                text: 'Wait behind the long vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'Report the driver to the police',
                img: '',
            },
            {
                char: 'd',
                text: 'Overtake on the right-hand side',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2181',
        topicCode: 'other_types_of_vehicle',
        question:
            'You’re approaching a mini-roundabout. What should you do if a long vehicle in front signals left but positions over to the right?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sound your horn',
                img: '',
            },
            {
                char: 'b',
                text: 'Overtake on the left',
                img: '',
            },
            {
                char: 'c',
                text: 'Follow the same course as the lorry',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep well back',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2184',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're driving on a single carriageway road. Why should you keep well back while you're following a large vehicle?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To give yourself acceleration space if you decide to overtake',
                img: '',
            },
            {
                char: 'b',
                text: 'To get the best view of the road ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'To leave a gap in case the vehicle stops and rolls back',
                img: '',
            },
            {
                char: 'd',
                text: 'To offer other drivers a safe gap if they want to overtake you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2189',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're travelling behind a bus. What should you do if it pulls up at a bus stop?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Accelerate past the bus',
                img: '',
            },
            {
                char: 'b',
                text: 'Look for pedestrians',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn',
                img: '',
            },
            {
                char: 'd',
                text: 'Pull in closely behind the bus',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2193',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're following a lorry on a wet road. What should you do when spray makes it difficult to see the road ahead?",
        questionImg: 'AB2193n1.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drop back until you can see better',
                img: '',
            },
            {
                char: 'b',
                text: 'Put your headlights on full beam',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep close to the lorry, away from the spray',
                img: '',
            },
            {
                char: 'd',
                text: 'Speed up and overtake quickly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2568',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're leaving a safe gap as you follow a large vehicle. What should you do if a car moves into this gap?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound your horn',
                img: '',
            },
            {
                char: 'b',
                text: 'Drop back further',
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Start to overtake',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2733',
        topicCode: 'other_types_of_vehicle',
        question:
            "What should you do when you're approaching a bus that's signalling to move away from a bus stop?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Get past before it moves',
                img: '',
            },
            {
                char: 'b',
                text: "Allow it to pull away, if it's safe to do so",
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your headlights as you approach',
                img: '',
            },
            {
                char: 'd',
                text: 'Signal left and wave the bus on',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2734',
        topicCode: 'other_types_of_vehicle',
        question:
            'What should you do if you want to overtake a long, slow-moving vehicle on a busy road?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Follow it closely and keep moving out to see the road ahead',
                img: '',
            },
            {
                char: 'b',
                text: 'Flash your headlights for the oncoming traffic to give way',
                img: '',
            },
            {
                char: 'c',
                text: 'Stay behind until the driver waves you past',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep well back so that you get a good view of the road ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2735',
        topicCode: 'other_types_of_vehicle',
        question:
            'Which vehicles are least likely to be affected by side wind?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Cyclists',
                img: '',
            },
            {
                char: 'b',
                text: 'Motorcyclists',
                img: '',
            },
            {
                char: 'c',
                text: 'High-sided vehicles',
                img: '',
            },
            {
                char: 'd',
                text: 'Cars',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2737',
        topicCode: 'other_types_of_vehicle',
        question: 'MTRC What should you do as you approach this lorry?',
        questionImg: 'AB2737.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slow down and be prepared to wait',
                img: '',
            },
            {
                char: 'b',
                text: 'Make the lorry wait for you',
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your lights at the lorry',
                img: '',
            },
            {
                char: 'd',
                text: 'Move to the right-hand side of the road',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2739',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're following a large vehicle as it approaches a crossroads. What should you do if the driver signals to turn left?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake if you can leave plenty of room',
                img: '',
            },
            {
                char: 'b',
                text: 'Overtake if there are no oncoming vehicles',
                img: '',
            },
            {
                char: 'c',
                text: 'Wait for the driver to cancel their signal',
                img: '',
            },
            {
                char: 'd',
                text: 'Wait for the vehicle to finish turning',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2881',
        topicCode: 'other_types_of_vehicle',
        question:
            'Why is it more difficult to overtake a large vehicle than a car?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It will take longer to overtake a large vehicle',
                img: '',
            },
            {
                char: 'b',
                text: 'A large vehicle will be fitted with a speed limiter',
                img: '',
            },
            {
                char: 'c',
                text: 'A large vehicle will have air brakes',
                img: '',
            },
            {
                char: 'd',
                text: 'It will take longer for a large vehicle to accelerate',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1157',
        topicCode: 'other_types_of_vehicle',
        question:
            "It's very windy. What should you do if you're behind a motorcyclist who's overtaking a high-sided vehicle?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtake the motorcyclist immediately',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep well back',
                img: '',
            },
            {
                char: 'c',
                text: 'Stay level with the motorcyclist',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep close to the motorcyclist',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1162',
        topicCode: 'other_types_of_vehicle',
        question:
            "What should you do if there's a bus at a bus stop ahead of you?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Flash your lights to warn the driver of your presence',
                img: '',
            },
            {
                char: 'b',
                text: 'Continue at the same speed but sound your horn as a warning',
                img: '',
            },
            {
                char: 'c',
                text: 'Watch carefully for the sudden appearance of pedestrians',
                img: '',
            },
            {
                char: 'd',
                text: 'Pass the bus as quickly as you possibly can',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1399',
        topicCode: 'other_types_of_vehicle',
        question: 'MTRC What should you be prepared to do in this situation?',
        questionImg: 'BB1399.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound your horn and continue',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down and give way',
                img: '',
            },
            {
                char: 'c',
                text: 'Report the driver to the police',
                img: '',
            },
            {
                char: 'd',
                text: 'Squeeze through the gap',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1578',
        topicCode: 'other_types_of_vehicle',
        question:
            'Why should drivers be more careful on roads where trams also operate?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "Because trams don't have a horn",
                img: '',
            },
            {
                char: 'b',
                text: "Because trams can't stop for cars",
                img: '',
            },
            {
                char: 'c',
                text: "Because trams don't have lights",
                img: '',
            },
            {
                char: 'd',
                text: "Because trams can't steer to avoid obstructions",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1679',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're towing a caravan. Which is the safest type of rear-view mirror to use?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Interior wide-angle mirror',
                img: '',
            },
            {
                char: 'b',
                text: 'Extended-arm side mirrors',
                img: '',
            },
            {
                char: 'c',
                text: 'Ordinary door mirrors',
                img: '',
            },
            {
                char: 'd',
                text: 'Ordinary interior mirror',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1680',
        topicCode: 'other_types_of_vehicle',
        question:
            "You're driving in heavy traffic on a wet road. Which lights should you use if there's a lot of surface spray?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Main-beam headlights',
                img: '',
            },
            {
                char: 'b',
                text: 'Sidelights only',
                img: '',
            },
            {
                char: 'c',
                text: 'Rear fog lights if visibility is more than 100 metres (328 feet)',
                img: '',
            },
            {
                char: 'd',
                text: 'Dipped headlights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1720',
        topicCode: 'other_types_of_vehicle',
        question:
            "What should you do if you overtake a cyclist when it's very windy?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake very slowly',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep close as you pass',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn repeatedly',
                img: '',
            },
            {
                char: 'd',
                text: 'Allow extra room',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2199',
        topicCode: 'vehicle_handling',
        question: 'MTRC When may you overtake another vehicle on their left?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you’re in a one-way street',
                img: '',
            },
            {
                char: 'b',
                text: 'When approaching a motorway slip road where you’ll be turning off',
                img: '',
            },
            {
                char: 'c',
                text: 'When the vehicle in front is signalling to turn left',
                img: '',
            },
            {
                char: 'd',
                text: 'When a slower vehicle is travelling in the right-hand lane of a dual carriageway',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2201',
        topicCode: 'vehicle_handling',
        question:
            "You're travelling in very heavy rain. How is this likely to affect your overall stopping distance?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It will be doubled',
                img: '',
            },
            {
                char: 'b',
                text: 'It will be halved',
                img: '',
            },
            {
                char: 'c',
                text: 'It will be ten times greater',
                img: '',
            },
            {
                char: 'd',
                text: 'It will be no different',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2208',
        topicCode: 'vehicle_handling',
        question: "What should you do when you're overtaking at night?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wait until a bend so that you can see oncoming headlights',
                img: '',
            },
            {
                char: 'b',
                text: 'Sound your horn twice before moving out',
                img: '',
            },
            {
                char: 'c',
                text: 'Go past slowly so that you can react to unseen hazards',
                img: '',
            },
            {
                char: 'd',
                text: 'Beware of bends in the road ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2211',
        topicCode: 'vehicle_handling',
        question: 'MTRC When may you wait in a box junction?',
        questionImg: 'AB2211.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "When you're stationary in a queue of traffic",
                img: '',
            },
            {
                char: 'b',
                text: 'When approaching a pelican crossing',
                img: '',
            },
            {
                char: 'c',
                text: 'When approaching a zebra crossing',
                img: '',
            },
            {
                char: 'd',
                text: 'When oncoming traffic prevents you turning right',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2212',
        topicCode: 'vehicle_handling',
        question: 'MTRC Which plate may appear with this road sign?',
        questionImg: 'AB2212.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '',
                img: 'AB2212a.gif',
            },
            {
                char: 'b',
                text: '',
                img: 'AB2212b.gif',
            },
            {
                char: 'c',
                text: '',
                img: 'AB2212c.gif',
            },
            {
                char: 'd',
                text: '',
                img: 'AB2212d.gif',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2524',
        topicCode: 'vehicle_handling',
        question: "What's the reason for traffic-calming measures?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To stop road rage',
                img: '',
            },
            {
                char: 'b',
                text: 'To make overtaking easier',
                img: '',
            },
            {
                char: 'c',
                text: 'To slow traffic down',
                img: '',
            },
            {
                char: 'd',
                text: 'To make parking easier',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2570',
        topicCode: 'vehicle_handling',
        question:
            'What colour are the reflective studs along the left-hand edge of the motorway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Green',
                img: '',
            },
            {
                char: 'b',
                text: 'Amber',
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
        code: 'AB2572',
        topicCode: 'vehicle_handling',
        question: "What's a rumble device designed to do?",
        questionImg: 'AB2572n1.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Give directions',
                img: '',
            },
            {
                char: 'b',
                text: 'Prevent cattle escaping',
                img: '',
            },
            {
                char: 'c',
                text: 'Alert you to low tyre pressure',
                img: '',
            },
            {
                char: 'd',
                text: 'Alert you to a hazard',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2605',
        topicCode: 'vehicle_handling',
        question:
            'What should you do if you have to make a journey in foggy conditions?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Follow other vehicles’ tail lights closely',
                img: '',
            },
            {
                char: 'b',
                text: 'Avoid using dipped headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Leave plenty of time for your journey',
                img: '',
            },
            {
                char: 'd',
                text: 'Keep two seconds behind the vehicle ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2606',
        topicCode: 'vehicle_handling',
        question: "What must you do when you're overtaking a car at night?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights before overtaking',
                img: '',
            },
            {
                char: 'b',
                text: 'Select a higher gear',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch your headlights to main beam before overtaking',
                img: '',
            },
            {
                char: 'd',
                text: "Make sure you don't dazzle other road users",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2640',
        topicCode: 'vehicle_handling',
        question:
            "You're travelling on a road that has road humps. What should you do when the driver in front is travelling more slowly than you?",
        questionImg: 'AB2640n1.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sound your horn',
                img: '',
            },
            {
                char: 'b',
                text: 'Overtake as soon as you can',
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Slow down and stay behind',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2665',
        topicCode: 'vehicle_handling',
        question:
            'What’s the purpose of the yellow lines painted across the road?',
        questionImg: 'AB2665n1.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To show a safe distance between vehicles',
                img: '',
            },
            {
                char: 'b',
                text: 'To keep the area clear of traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'To make you aware of your speed',
                img: '',
            },
            {
                char: 'd',
                text: 'To warn you to change direction',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2742',
        topicCode: 'vehicle_handling',
        question:
            'What should you do when you meet an oncoming vehicle on a single-track road?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Reverse back to the main road',
                img: '',
            },
            {
                char: 'b',
                text: 'Carry out an emergency stop',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop at a passing place',
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
        code: 'AB2820',
        topicCode: 'vehicle_handling',
        question:
            'The road is wet. Why would a motorcyclist steer around drain covers while they were cornering?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To avoid puncturing the tyres on the edge of the drain covers',
                img: '',
            },
            {
                char: 'b',
                text: 'To prevent the motorcycle sliding on the metal drain covers',
                img: '',
            },
            {
                char: 'c',
                text: 'To help judge the bend using the drain covers as marker points',
                img: '',
            },
            {
                char: 'd',
                text: 'To avoid splashing pedestrians on the pavement',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2821',
        topicCode: 'vehicle_handling',
        question: 'MTRC Why should you test your brakes after this hazard?',
        questionImg: 'AB2821.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "You'll be on a slippery road",
                img: '',
            },
            {
                char: 'b',
                text: 'Your brakes will be wet',
                img: '',
            },
            {
                char: 'c',
                text: "You'll be going down a long hill",
                img: '',
            },
            {
                char: 'd',
                text: "You'll have just crossed a long bridge",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2822',
        topicCode: 'vehicle_handling',
        question:
            "Why should you reduce your speed when you're driving or riding in fog?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "The brakes don't work as well",
                img: '',
            },
            {
                char: 'b',
                text: "You'll be dazzled by other headlights",
                img: '',
            },
            {
                char: 'c',
                text: 'The engine will take longer to warm up',
                img: '',
            },
            {
                char: 'd',
                text: "It's more difficult to see what's ahead",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1166',
        topicCode: 'vehicle_handling',
        question:
            'What will happen to your car when you drive up a steep hill?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The high gears will pull better',
                img: '',
            },
            {
                char: 'b',
                text: 'The steering will feel heavier',
                img: '',
            },
            {
                char: 'c',
                text: 'Overtaking will be easier',
                img: '',
            },
            {
                char: 'd',
                text: 'The engine will work harder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1168',
        topicCode: 'vehicle_handling',
        question:
            "You're driving on the motorway in windy conditions. What should you do as you overtake a high-sided vehicle?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increase your speed',
                img: '',
            },
            {
                char: 'b',
                text: 'Be wary of a sudden gust',
                img: '',
            },
            {
                char: 'c',
                text: 'Drive alongside very closely',
                img: '',
            },
            {
                char: 'd',
                text: 'Expect normal conditions',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1177',
        topicCode: 'vehicle_handling',
        question:
            "You're driving in fog. Why should you keep well back from the vehicle in front?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'In case it changes direction suddenly',
                img: '',
            },
            {
                char: 'b',
                text: 'In case its fog lights dazzle you',
                img: '',
            },
            {
                char: 'c',
                text: 'In case it stops suddenly',
                img: '',
            },
            {
                char: 'd',
                text: 'In case its brake lights dazzle you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1181',
        topicCode: 'vehicle_handling',
        question: "What should you do if you park on the road when it's foggy?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Leave parking lights switched on',
                img: '',
            },
            {
                char: 'b',
                text: 'Leave dipped headlights and fog lights switched on',
                img: '',
            },
            {
                char: 'c',
                text: 'Leave dipped headlights switched on',
                img: '',
            },
            {
                char: 'd',
                text: 'Leave main-beam headlights switched on',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1186',
        topicCode: 'vehicle_handling',
        question:
            "You're driving at night. What should you do if you're dazzled by headlights coming towards you?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Pull down your sun visor',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down or stop',
                img: '',
            },
            {
                char: 'c',
                text: 'Flash your main-beam headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Shade your eyes with your hand',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1325',
        topicCode: 'vehicle_handling',
        question: 'MTRC When may front fog lights be used?',
        questionImg: 'BB1325n1.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When visibility is seriously reduced',
                img: '',
            },
            {
                char: 'b',
                text: "When they're fitted above the bumper",
                img: '',
            },
            {
                char: 'c',
                text: "When they aren't as bright as the headlights",
                img: '',
            },
            {
                char: 'd',
                text: 'When an audible warning device is used',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1330',
        topicCode: 'vehicle_handling',
        question:
            "You're driving with your front fog lights switched on. What should you do if the fog has cleared?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Leave them on if other drivers have their lights on',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch them off as long as visibility remains good',
                img: '',
            },
            {
                char: 'c',
                text: "Flash them to warn oncoming traffic that it's foggy",
                img: '',
            },
            {
                char: 'd',
                text: 'Drive with them on instead of your headlights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1339',
        topicCode: 'vehicle_handling',
        question:
            'Why should you switch off your rear fog lights when the fog has cleared?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To allow your headlights to work',
                img: '',
            },
            {
                char: 'b',
                text: 'To stop draining the battery',
                img: '',
            },
            {
                char: 'c',
                text: 'To stop the engine losing power',
                img: '',
            },
            {
                char: 'd',
                text: 'To prevent dazzling drivers behind',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1343',
        topicCode: 'vehicle_handling',
        question:
            'What will happen if you use rear fog lights in good conditions?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "They'll make it safer when towing a trailer",
                img: '',
            },
            {
                char: 'b',
                text: "They'll protect you from larger vehicles",
                img: '',
            },
            {
                char: 'c',
                text: "They'll dazzle other drivers",
                img: '',
            },
            {
                char: 'd',
                text: "They'll make drivers behind keep back",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1400',
        topicCode: 'vehicle_handling',
        question: 'MTRC Why would you fit chains to your wheels?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To help prevent damage to the road surface',
                img: '',
            },
            {
                char: 'b',
                text: 'To help prevent wear to the tyres',
                img: '',
            },
            {
                char: 'c',
                text: 'To help prevent skidding in deep snow',
                img: '',
            },
            {
                char: 'd',
                text: 'To help prevent the brakes locking',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1408',
        topicCode: 'vehicle_handling',
        question:
            "How can you use your vehicle's engine to control your speed?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By changing to a lower gear',
                img: '',
            },
            {
                char: 'b',
                text: 'By selecting reverse gear',
                img: '',
            },
            {
                char: 'c',
                text: 'By changing to a higher gear',
                img: '',
            },
            {
                char: 'd',
                text: 'By selecting neutral',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1433',
        topicCode: 'vehicle_handling',
        question:
            "Why could it be dangerous to keep the clutch down, or select neutral, for long periods of time while you're driving?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Fuel spillage will occur',
                img: '',
            },
            {
                char: 'b',
                text: 'Engine damage may be caused',
                img: '',
            },
            {
                char: 'c',
                text: "You'll have less steering and braking control",
                img: '',
            },
            {
                char: 'd',
                text: 'It will wear tyres out more quickly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1470',
        topicCode: 'vehicle_handling',
        question:
            "You're driving on an icy road. What distance from the car in front should you drive?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Four times the normal distance',
                img: '',
            },
            {
                char: 'b',
                text: 'Six times the normal distance',
                img: '',
            },
            {
                char: 'c',
                text: 'Eight times the normal distance',
                img: '',
            },
            {
                char: 'd',
                text: 'Ten times the normal distance',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1473',
        topicCode: 'vehicle_handling',
        question:
            "Which lights must you use if you're driving on a well-lit motorway at night?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use only your sidelights',
                img: '',
            },
            {
                char: 'b',
                text: 'Use your headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Use rear fog lights',
                img: '',
            },
            {
                char: 'd',
                text: 'Use front fog lights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1474',
        topicCode: 'vehicle_handling',
        question:
            "You're driving on a motorway at night. Which lights should you have on if there are other vehicles just ahead of you?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Front fog lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Main-beam headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Sidelights only',
                img: '',
            },
            {
                char: 'd',
                text: 'Dipped headlights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1518',
        topicCode: 'vehicle_handling',
        question: "What will affect your vehicle's stopping distance?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The speed limit',
                img: '',
            },
            {
                char: 'b',
                text: 'The street lighting',
                img: '',
            },
            {
                char: 'c',
                text: 'The time of day',
                img: '',
            },
            {
                char: 'd',
                text: 'The condition of the tyres',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1579',
        topicCode: 'vehicle_handling',
        question: 'MTRC When will you feel the effects of engine braking?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you only use the parking brake',
                img: '',
            },
            {
                char: 'b',
                text: "When you're in neutral",
                img: '',
            },
            {
                char: 'c',
                text: 'When you change to a lower gear',
                img: '',
            },
            {
                char: 'd',
                text: 'When you change to a higher gear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1597',
        topicCode: 'vehicle_handling',
        question:
            'Which lights should you switch on when daytime visibility is poor but not seriously reduced?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Headlights and fog lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Front fog lights',
                img: '',
            },
            {
                char: 'c',
                text: 'Dipped headlights',
                img: '',
            },
            {
                char: 'd',
                text: 'Rear fog lights',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1598',
        topicCode: 'vehicle_handling',
        question: 'MTRC Why are vehicles fitted with rear fog lights?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To make them more visible when driving at high speed',
                img: '',
            },
            {
                char: 'b',
                text: "To show when they've broken down in a dangerous position",
                img: '',
            },
            {
                char: 'c',
                text: 'To make them more visible in thick fog',
                img: '',
            },
            {
                char: 'd',
                text: 'To warn drivers following closely to drop back',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1621',
        topicCode: 'vehicle_handling',
        question:
            "There's been a heavy fall of snow. What should you consider before driving in these conditions?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Whether you should fit an amber flashing beacon to your car',
                img: '',
            },
            {
                char: 'b',
                text: 'Whether you should drive without wearing your seat belt',
                img: '',
            },
            {
                char: 'c',
                text: 'Whether you should wear sunglasses to reduce the glare',
                img: '',
            },
            {
                char: 'd',
                text: 'Whether your journey is essential',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1682',
        topicCode: 'vehicle_handling',
        question:
            'What should you check before you start a journey in foggy weather?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The radiator has enough anti-freeze',
                img: '',
            },
            {
                char: 'b',
                text: 'You have a warning triangle in the vehicle',
                img: '',
            },
            {
                char: 'c',
                text: 'The windows and lights are clean and clear',
                img: '',
            },
            {
                char: 'd',
                text: 'You have a mobile phone with you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1683',
        topicCode: 'vehicle_handling',
        question:
            "You've been driving in fog. What must you do when the visibility improves?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch off your fog lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep your rear fog lights switched on',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep your front fog lights switched on',
                img: '',
            },
            {
                char: 'd',
                text: 'Leave your fog lights switched on in case the fog returns',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1685',
        topicCode: 'vehicle_handling',
        question:
            'Why is it dangerous to leave rear fog lights switched on after the fog has cleared?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They may be confused with brake lights',
                img: '',
            },
            {
                char: 'b',
                text: 'The bulbs would fail',
                img: '',
            },
            {
                char: 'c',
                text: 'Electrical systems could be overloaded',
                img: '',
            },
            {
                char: 'd',
                text: 'Direction indicators may not work properly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1686',
        topicCode: 'vehicle_handling',
        question:
            'What will happen if you hold the clutch pedal down or roll in neutral for too long?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It will use more fuel',
                img: '',
            },
            {
                char: 'b',
                text: 'It will cause the engine to overheat',
                img: '',
            },
            {
                char: 'c',
                text: 'It will reduce your control',
                img: '',
            },
            {
                char: 'd',
                text: 'It will improve tyre wear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1717',
        topicCode: 'vehicle_handling',
        question:
            "Why is it bad technique to coast when you're driving downhill?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The fuel consumption will increase',
                img: '',
            },
            {
                char: 'b',
                text: 'The engine will overheat',
                img: '',
            },
            {
                char: 'c',
                text: 'The tyres will wear more quickly',
                img: '',
            },
            {
                char: 'd',
                text: 'The vehicle will gain speed more quickly',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1718',
        topicCode: 'vehicle_handling',
        question: 'MTRC What should you do when dealing with this hazard?',
        questionImg: 'BB1718.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Switch on your hazard warning lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Use a low gear and drive slowly',
                img: '',
            },
            {
                char: 'c',
                text: 'Use a high gear to prevent wheelspin',
                img: '',
            },
            {
                char: 'd',
                text: 'Switch on your windscreen wipers',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1744',
        topicCode: 'vehicle_handling',
        question:
            'Why is travelling in neutral for long distances (known as coasting) bad driving technique?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It will cause the car to skid',
                img: '',
            },
            {
                char: 'b',
                text: 'It will make the engine stall',
                img: '',
            },
            {
                char: 'c',
                text: 'The engine will run faster',
                img: '',
            },
            {
                char: 'd',
                text: "There won't be any engine braking",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1749',
        topicCode: 'vehicle_handling',
        question: 'MTRC When must you use dipped headlights during the day?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "All the time you're driving",
                img: '',
            },
            {
                char: 'b',
                text: "When you're driving along narrow streets",
                img: '',
            },
            {
                char: 'c',
                text: "When you're driving in poor visibility",
                img: '',
            },
            {
                char: 'd',
                text: "When you're parking",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2219',
        topicCode: 'motorway_rules',
        question:
            "You're joining a motorway from a slip road. How should you deal with traffic already on the motorway?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Carry on along the hard shoulder until you see a safe gap',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop at the end of the slip road and look for a safe gap',
                img: '',
            },
            {
                char: 'c',
                text: "Use the slip road to accelerate until you're moving much faster than the motorway traffic",
                img: '',
            },
            {
                char: 'd',
                text: 'Match your speed to traffic in the left-hand lane and filter into a safe gap',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2222',
        topicCode: 'motorway_rules',
        question:
            "What's the national speed limit on motorways for cars and motorcycles?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '30 mph',
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
        code: 'AB2223',
        topicCode: 'motorway_rules',
        question:
            'Which vehicles should use the left-hand lane on a three-lane motorway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "Any vehicle that isn't overtaking",
                img: '',
            },
            {
                char: 'b',
                text: 'Large vehicles only',
                img: '',
            },
            {
                char: 'c',
                text: 'Emergency vehicles only',
                img: '',
            },
            {
                char: 'd',
                text: 'Slow vehicles only',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2225',
        topicCode: 'motorway_rules',
        question:
            "Which vehicles aren't allowed to use the right-hand lane of a three-lane motorway?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Small delivery vans',
                img: '',
            },
            {
                char: 'b',
                text: 'Motorcycles',
                img: '',
            },
            {
                char: 'c',
                text: 'Vehicles towing a trailer',
                img: '',
            },
            {
                char: 'd',
                text: 'Motorcycle and sidecar outfits',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2232',
        topicCode: 'motorway_rules',
        question:
            'Your vehicle breaks down on a motorway and you need to call for help. Why might it be better to use an emergency roadside telephone rather than a mobile phone?',
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
                text: "Mobile phones don't work on motorways",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2236',
        topicCode: 'motorway_rules',
        question:
            'Your vehicle broke down on the hard shoulder of a motorway, but has now been repaired. How should you rejoin the main carriageway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move out onto the carriageway, then build up your speed',
                img: '',
            },
            {
                char: 'b',
                text: 'Move out onto the carriageway using your hazard warning lights',
                img: '',
            },
            {
                char: 'c',
                text: 'Gain speed on the hard shoulder before moving out onto the carriageway',
                img: '',
            },
            {
                char: 'd',
                text: 'Wait on the hard shoulder until someone flashes their headlights at you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2237',
        topicCode: 'motorway_rules',
        question:
            "You're travelling along a motorway. Where would you find a crawler or climbing lane?",
        questionImg: 'AB2237.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On a steep gradient',
                img: '',
            },
            {
                char: 'b',
                text: 'Before a service area',
                img: '',
            },
            {
                char: 'c',
                text: 'Before a junction',
                img: '',
            },
            {
                char: 'd',
                text: 'Along the hard shoulder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2241',
        topicCode: 'motorway_rules',
        question: 'MTRC What do these motorway signs mean?',
        questionImg: 'AB2241.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "They're countdown markers to a bridge",
                img: '',
            },
            {
                char: 'b',
                text: "They're distance markers to the next telephone",
                img: '',
            },
            {
                char: 'c',
                text: "They're countdown markers to the next exit",
                img: '',
            },
            {
                char: 'd',
                text: 'They warn of a police control ahead',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2242',
        topicCode: 'motorway_rules',
        question: 'MTRC Where are amber reflective studs found on a motorway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Between the hard shoulder and the carriageway',
                img: '',
            },
            {
                char: 'b',
                text: 'Between the acceleration lane and the carriageway',
                img: '',
            },
            {
                char: 'c',
                text: 'Between the central reservation and the carriageway',
                img: '',
            },
            {
                char: 'd',
                text: 'Between each pair of lanes',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2243',
        topicCode: 'motorway_rules',
        question:
            'What colour are the reflective studs between the lanes on a motorway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Green',
                img: '',
            },
            {
                char: 'b',
                text: 'Amber',
                img: '',
            },
            {
                char: 'c',
                text: 'White',
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
        code: 'AB2244',
        topicCode: 'motorway_rules',
        question:
            'What colour are the reflective studs between a motorway and a slip road?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Amber',
                img: '',
            },
            {
                char: 'b',
                text: 'White',
                img: '',
            },
            {
                char: 'c',
                text: 'Green',
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
        code: 'AB2525',
        topicCode: 'motorway_rules',
        question:
            'Your vehicle has broken down on a motorway. In which direction should you walk to find the nearest emergency telephone?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'With the traffic flow',
                img: '',
            },
            {
                char: 'b',
                text: 'Facing oncoming traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'In the direction shown on the marker posts',
                img: '',
            },
            {
                char: 'd',
                text: 'In the direction of the nearest exit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2573',
        topicCode: 'motorway_rules',
        question:
            'Why is it important to make full use of the slip road as you join a motorway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "Because there's space available to turn round if you need to",
                img: '',
            },
            {
                char: 'b',
                text: 'To allow you direct access to the overtaking lanes',
                img: '',
            },
            {
                char: 'c',
                text: 'To allow you to fit safely into the traffic flow in the left-hand lane',
                img: '',
            },
            {
                char: 'd',
                text: 'Because you can continue on the hard shoulder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2575',
        topicCode: 'motorway_rules',
        question:
            'How should you position yourself when you use the emergency telephone on a motorway?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stay close to the carriageway',
                img: '',
            },
            {
                char: 'b',
                text: 'Face the oncoming traffic',
                img: '',
            },
            {
                char: 'c',
                text: 'Keep your back to the traffic',
                img: '',
            },
            {
                char: 'd',
                text: 'Stand on the hard shoulder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2576',
        topicCode: 'motorway_rules',
        question:
            'What colour are the reflective studs between the hard shoulder and the left-hand lane of a motorway?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Green',
                img: '',
            },
            {
                char: 'b',
                text: 'Red',
                img: '',
            },
            {
                char: 'c',
                text: 'White',
                img: '',
            },
            {
                char: 'd',
                text: 'Amber',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2609',
        topicCode: 'motorway_rules',
        question:
            "On a three-lane motorway, which lane should you use if there's no traffic ahead?",
        questionImg: '',
        answer: 'a',
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
                text: 'Centre',
                img: '',
            },
            {
                char: 'd',
                text: 'Either the right or centre',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2611',
        topicCode: 'motorway_rules',
        question:
            'What should you do when going through a contraflow system on a motorway?',
        questionImg: 'AB2611n1.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use dipped headlights',
                img: '',
            },
            {
                char: 'b',
                text: 'Keep a good distance from the vehicle ahead',
                img: '',
            },
            {
                char: 'c',
                text: 'Switch lanes to keep the traffic flowing',
                img: '',
            },
            {
                char: 'd',
                text: 'Stay close to the vehicle ahead to reduce queues',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2612',
        topicCode: 'motorway_rules',
        question:
            "You're on a three-lane motorway. Which lane are you in if there are red reflective studs on your left and white ones to your right?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'In the right-hand lane',
                img: '',
            },
            {
                char: 'b',
                text: 'In the middle lane',
                img: '',
            },
            {
                char: 'c',
                text: 'On the hard shoulder',
                img: '',
            },
            {
                char: 'd',
                text: 'In the left-hand lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2694',
        topicCode: 'motorway_rules',
        question:
            "What should you do when you're approaching roadworks on a motorway?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Speed up to clear the area quickly',
                img: '',
            },
            {
                char: 'b',
                text: 'Always use the hard shoulder',
                img: '',
            },
            {
                char: 'c',
                text: 'Obey the speed limit',
                img: '',
            },
            {
                char: 'd',
                text: 'Stay very close to the vehicle in front',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2743',
        topicCode: 'motorway_rules',
        question: 'MTRC Which vehicles are prohibited from using the motorway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Powered mobility scooters',
                img: '',
            },
            {
                char: 'b',
                text: 'Motorcycles over 50 cc',
                img: '',
            },
            {
                char: 'c',
                text: 'Double-deck buses',
                img: '',
            },
            {
                char: 'd',
                text: 'Cars with automatic transmission',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2744',
        topicCode: 'motorway_rules',
        question:
            "What should you do while you're driving or riding along a motorway?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Look much further ahead than you would on other roads',
                img: '',
            },
            {
                char: 'b',
                text: 'Travel much faster than you would on other roads',
                img: '',
            },
            {
                char: 'c',
                text: 'Maintain a shorter separation distance than you would on other roads',
                img: '',
            },
            {
                char: 'd',
                text: 'Concentrate more than you would on other roads',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2745',
        topicCode: 'motorway_rules',
        question:
            'MTRC What should you do immediately after joining a motorway?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Try to overtake',
                img: '',
            },
            {
                char: 'b',
                text: 'Re-adjust your mirrors',
                img: '',
            },
            {
                char: 'c',
                text: 'Position your vehicle in the centre lane',
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
        code: 'AB2746',
        topicCode: 'motorway_rules',
        question:
            'When would you use the right-hand lane on a three-lane motorway?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "When you're turning right",
                img: '',
            },
            {
                char: 'b',
                text: "When you're overtaking",
                img: '',
            },
            {
                char: 'c',
                text: "When you're travelling above the speed limit",
                img: '',
            },
            {
                char: 'd',
                text: "When you're trying to save fuel",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2747',
        topicCode: 'motorway_rules',
        question:
            "You're on a motorway that isn't subject to smart motorway regulations. When should you use the hard shoulder?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "When you're stopping in an emergency",
                img: '',
            },
            {
                char: 'b',
                text: "When you're leaving the motorway",
                img: '',
            },
            {
                char: 'c',
                text: "When you're stopping for a rest",
                img: '',
            },
            {
                char: 'd',
                text: "When you're joining the motorway",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2748',
        topicCode: 'motorway_rules',
        question:
            "You're in the right-hand lane of a three-lane motorway. What do these overhead signs mean?",
        questionImg: 'AB2748.gif',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Move to the left and reduce your speed to 50 mph',
                img: '',
            },
            {
                char: 'b',
                text: 'There are roadworks 50 metres (55 yards) ahead',
                img: '',
            },
            {
                char: 'c',
                text: "Use the hard shoulder until you've passed the hazard",
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
        code: 'AB2749',
        topicCode: 'motorway_rules',
        question: 'MTRC When are you allowed to stop on a motorway?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you need to walk and get fresh air',
                img: '',
            },
            {
                char: 'b',
                text: 'When you wish to pick up hitchhikers',
                img: '',
            },
            {
                char: 'c',
                text: "When you're signalled to do so by traffic signals",
                img: '',
            },
            {
                char: 'd',
                text: 'When you need to use a mobile telephone',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2750',
        topicCode: 'motorway_rules',
        question:
            "You're travelling in the left-hand lane of a three-lane motorway. How should you react to traffic joining from a slip road?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increase your speed to ensure they join behind you',
                img: '',
            },
            {
                char: 'b',
                text: 'Adjust your speed or change lane if you can do so safely',
                img: '',
            },
            {
                char: 'c',
                text: 'Maintain a steady speed',
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
        code: 'AB2751',
        topicCode: 'motorway_rules',
        question: 'MTRC How should you use the lanes on a motorway?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the lane that has the least traffic',
                img: '',
            },
            {
                char: 'b',
                text: "Keep to the left-hand lane unless you're overtaking",
                img: '',
            },
            {
                char: 'c',
                text: 'Overtake using the lane that’s clearest',
                img: '',
            },
            {
                char: 'd',
                text: 'Stay in one lane until you reach your exit',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2752',
        topicCode: 'motorway_rules',
        question:
            "You're travelling along a motorway. When are you allowed to overtake on the left?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you can see well ahead that the hard shoulder is clear',
                img: '',
            },
            {
                char: 'b',
                text: 'When the traffic in the right-hand lane is signalling right',
                img: '',
            },
            {
                char: 'c',
                text: 'When you warn drivers behind by signalling left',
                img: '',
            },
            {
                char: 'd',
                text: 'When in queues and traffic to your right is moving more slowly than you are',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2786',
        topicCode: 'motorway_rules',
        question:
            'When would you use an emergency refuge area on a smart motorway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In cases of emergency or breakdown',
                img: '',
            },
            {
                char: 'b',
                text: "If you think you'll be involved in a road rage incident",
                img: '',
            },
            {
                char: 'c',
                text: 'To stop and check where you are',
                img: '',
            },
            {
                char: 'd',
                text: 'To make a private phone call',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2788',
        topicCode: 'motorway_rules',
        question:
            'Traffic officers operate on motorways and some primary routes in England and Wales. What are they authorised to do?',
        questionImg: 'AB2788n.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop and arrest drivers who break the law',
                img: '',
            },
            {
                char: 'b',
                text: 'Repair broken-down vehicles on the motorway',
                img: '',
            },
            {
                char: 'c',
                text: 'Issue fixed penalty notices',
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
        code: 'AB2789',
        topicCode: 'motorway_rules',
        question:
            "You're on a smart motorway. What does it mean when a red cross is displayed above the hard shoulder?",
        questionImg: 'AB2789.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Pull up in this lane to answer your mobile phone',
                img: '',
            },
            {
                char: 'b',
                text: 'Use this lane as a running lane',
                img: '',
            },
            {
                char: 'c',
                text: 'This lane can be used if you need a rest',
                img: '',
            },
            {
                char: 'd',
                text: "You shouldn't travel in this lane",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2790',
        topicCode: 'motorway_rules',
        question:
            "You're on a smart motorway. What does it mean when a mandatory speed limit is displayed above the hard shoulder?",
        questionImg: 'AB2790.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "You shouldn't travel in this lane",
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
                text: 'You can pull up in this lane to answer a mobile phone',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2792',
        topicCode: 'motorway_rules',
        question: 'MTRC How do smart motorways prevent traffic bunching?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'By using higher speed limits',
                img: '',
            },
            {
                char: 'b',
                text: 'By using advisory speed limits',
                img: '',
            },
            {
                char: 'c',
                text: 'By using minimum speed limits',
                img: '',
            },
            {
                char: 'd',
                text: 'By using variable speed limits',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2839',
        topicCode: 'motorway_rules',
        question: 'MTRC What helps to reduce traffic bunching on a motorway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Variable speed limits',
                img: '',
            },
            {
                char: 'b',
                text: 'Contraflow systems',
                img: '',
            },
            {
                char: 'c',
                text: 'National speed limits',
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
        code: 'AB2843',
        topicCode: 'motorway_rules',
        question: 'MTRC When may you stop on a motorway?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'If you have to read a map',
                img: '',
            },
            {
                char: 'b',
                text: "When you're tired and need a rest",
                img: '',
            },
            {
                char: 'c',
                text: 'If your mobile phone rings',
                img: '',
            },
            {
                char: 'd',
                text: 'In an emergency or breakdown',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2845',
        topicCode: 'motorway_rules',
        question:
            "What's the national speed limit for a car or motorcycle on a motorway?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '50 mph',
                img: '',
            },
            {
                char: 'b',
                text: '60 mph',
                img: '',
            },
            {
                char: 'c',
                text: '70 mph',
                img: '',
            },
            {
                char: 'd',
                text: '80 mph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2846',
        topicCode: 'motorway_rules',
        question:
            "You stop on the hard shoulder of a motorway and use the emergency telephone. Where's the best place to wait for help to arrive?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Next to the phone',
                img: '',
            },
            {
                char: 'b',
                text: 'Well away from the carriageway',
                img: '',
            },
            {
                char: 'c',
                text: 'With your vehicle',
                img: '',
            },
            {
                char: 'd',
                text: 'On the hard shoulder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2852',
        topicCode: 'motorway_rules',
        question:
            "You're on a motorway. What must you do if there's a red cross showing above every lane?",
        questionImg: 'AB2852n.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Pull onto the hard shoulder',
                img: '',
            },
            {
                char: 'b',
                text: 'Slow down and watch for further signals',
                img: '',
            },
            {
                char: 'c',
                text: 'Leave at the next exit',
                img: '',
            },
            {
                char: 'd',
                text: 'Stop and wait',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2856',
        topicCode: 'motorway_rules',
        question:
            "You're on a smart motorway. What does it mean if a red cross is showing above the hard shoulder and mandatory speed limits above all other lanes?",
        questionImg: 'AB2856.gif',
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
                text: 'The hard shoulder can be used as a normal running lane',
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
        code: 'AB2857',
        topicCode: 'motorway_rules',
        question: 'MTRC On a smart motorway, what does this sign mean?',
        questionImg: 'AB2857.gif',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Use any lane except the hard shoulder',
                img: '',
            },
            {
                char: 'b',
                text: 'Use the hard shoulder only',
                img: '',
            },
            {
                char: 'c',
                text: 'Use the three right-hand lanes only',
                img: '',
            },
            {
                char: 'd',
                text: 'Use all the lanes, including the hard shoulder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2882',
        topicCode: 'motorway_rules',
        question:
            "Where should you stop to rest if you feel tired while you're travelling along a motorway?",
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
                text: 'At the nearest service area',
                img: '',
            },
            {
                char: 'c',
                text: 'On a slip road',
                img: '',
            },
            {
                char: 'd',
                text: 'On the central reservation',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1193',
        topicCode: 'motorway_rules',
        question:
            "What's the speed limit for a car towing a trailer on a motorway?",
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
        code: 'BB1197',
        topicCode: 'motorway_rules',
        question: 'MTRC When should you use the left-hand lane of a motorway?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When your vehicle breaks down',
                img: '',
            },
            {
                char: 'b',
                text: "When you're overtaking slower traffic in the other lanes",
                img: '',
            },
            {
                char: 'c',
                text: "When you're making a phone call",
                img: '',
            },
            {
                char: 'd',
                text: 'When the road ahead is clear',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1198',
        topicCode: 'motorway_rules',
        question:
            "You're driving on a motorway and have to slow down suddenly due to a hazard ahead. How can you warn drivers behind of the hazard?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch on your hazard warning lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Switch on your headlights',
                img: '',
            },
            {
                char: 'c',
                text: 'Sound your horn',
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
        code: 'BB1199',
        topicCode: 'motorway_rules',
        question:
            "Your car gets a puncture while you're driving on the motorway. What should you do when you've stopped on the hard shoulder?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Carefully change the wheel yourself',
                img: '',
            },
            {
                char: 'b',
                text: 'Use an emergency telephone and call for help',
                img: '',
            },
            {
                char: 'c',
                text: 'Try to wave down another vehicle for help',
                img: '',
            },
            {
                char: 'd',
                text: 'Only change the wheel if you have a passenger to help you',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1204',
        topicCode: 'motorway_rules',
        question:
            "What should you do if you're driving on a motorway and you miss the exit that you wanted to take?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Carefully reverse along the hard shoulder',
                img: '',
            },
            {
                char: 'b',
                text: 'Carry on to the next exit',
                img: '',
            },
            {
                char: 'c',
                text: 'Carefully reverse in the left-hand lane',
                img: '',
            },
            {
                char: 'd',
                text: 'Make a U-turn at the next gap in the central reservation',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1481',
        topicCode: 'motorway_rules',
        question:
            "Your vehicle has broken down on a motorway. What should you do if you aren't able to get onto the hard shoulder?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch on your hazard warning lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Stop the traffic behind and ask for help',
                img: '',
            },
            {
                char: 'c',
                text: 'Attempt to repair your vehicle quickly',
                img: '',
            },
            {
                char: 'd',
                text: 'Stand behind your vehicle to warn others',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1520',
        topicCode: 'motorway_rules',
        question:
            'Why is it particularly important to check your vehicle before making a long motorway journey?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: "You'll have to do more harsh braking on motorways",
                img: '',
            },
            {
                char: 'b',
                text: "Motorway services areas don't deal with breakdowns",
                img: '',
            },
            {
                char: 'c',
                text: 'The road surface will wear down the tyres faster',
                img: '',
            },
            {
                char: 'd',
                text: 'Continuous high speeds increase the risk of your vehicle breaking down',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1523',
        topicCode: 'motorway_rules',
        question:
            "You're driving on a motorway. What does it mean if the car in front shows its hazard warning lights for a short time?",
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The driver wants you to overtake',
                img: '',
            },
            {
                char: 'b',
                text: 'The other car is going to change lanes',
                img: '',
            },
            {
                char: 'c',
                text: 'Traffic ahead is slowing or stopping suddenly',
                img: '',
            },
            {
                char: 'd',
                text: "There's a police speed check ahead",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1525',
        topicCode: 'motorway_rules',
        question:
            "You're driving on the motorway. Which lane should you get into well before you reach your exit?",
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The middle lane',
                img: '',
            },
            {
                char: 'b',
                text: 'The left-hand lane',
                img: '',
            },
            {
                char: 'c',
                text: 'The hard shoulder',
                img: '',
            },
            {
                char: 'd',
                text: 'The right-hand lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1618',
        topicCode: 'motorway_rules',
        question:
            'What restrictions apply to people who have a provisional driving licence?',
        questionImg: '',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: "They can't drive over 30 mph",
                img: '',
            },
            {
                char: 'b',
                text: "They can't drive at night",
                img: '',
            },
            {
                char: 'c',
                text: "They can't drive unaccompanied",
                img: '',
            },
            {
                char: 'd',
                text: "They can't drive with more than one passenger",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1688',
        topicCode: 'motorway_rules',
        question:
            'Your vehicle breaks down on a motorway and you manage to stop on the hard shoulder. What should you do if you use your mobile phone to call for help?',
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
                text: 'Phone a friend and ask them to come and collect you',
                img: '',
            },
            {
                char: 'c',
                text: 'Wait in the car for the emergency services to arrive',
                img: '',
            },
            {
                char: 'd',
                text: 'Check your location from the nearest marker posts beside the hard shoulder',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'BB1689',
        topicCode: 'motorway_rules',
        question:
            "You're towing a trailer along a three-lane motorway. When may you use the right-hand lane?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When there are lane closures',
                img: '',
            },
            {
                char: 'b',
                text: "When there's slow-moving traffic",
                img: '',
            },
            {
                char: 'c',
                text: 'When you can maintain a high speed',
                img: '',
            },
            {
                char: 'd',
                text: 'When large vehicles are in the left and centre lanes',
                img: '',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'BB1690',
        topicCode: 'motorway_rules',
        question:
            'What would you expect to find at a contraflow system on a motorway?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Temporary traffic lights',
                img: '',
            },
            {
                char: 'b',
                text: 'Lower speed limits',
                img: '',
            },
            {
                char: 'c',
                text: 'Wider lanes than normal',
                img: '',
            },
            {
                char: 'd',
                text: 'Road humps',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2246',
        topicCode: 'rules_of_the_road',
        question: "What's the meaning of this sign?",
        questionImg: 'AB2246.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Local speed limit applies',
                img: '',
            },
            {
                char: 'b',
                text: 'No waiting on the carriageway',
                img: '',
            },
            {
                char: 'c',
                text: 'National speed limit applies',
                img: '',
            },
            {
                char: 'd',
                text: 'No entry for vehicles',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2248',
        topicCode: 'rules_of_the_road',
        question:
            "What's the national speed limit for cars and motorcycles on a dual carriageway?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '30 mph',
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
        code: 'AB2249',
        topicCode: 'rules_of_the_road',
        question:
            'There are no speed-limit signs on the road. How is a 30 mph limit generally indicated?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By hazard warning lines',
                img: '',
            },
            {
                char: 'b',
                text: 'By street lighting',
                img: '',
            },
            {
                char: 'c',
                text: 'By pedestrian islands',
                img: '',
            },
            {
                char: 'd',
                text: 'By double or single yellow lines',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2250',
        topicCode: 'rules_of_the_road',
        question:
            'What will the speed limit usually be where you can see street lights but no speed-limit signs?',
        questionImg: '',
        answer: 'a',
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
        isNIExempts: false,
    },
    {
        code: 'AB2254',
        topicCode: 'rules_of_the_road',
        question: 'MTRC What does this sign mean?',
        questionImg: 'AB2254.gif',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Minimum speed 30 mph',
                img: '',
            },
            {
                char: 'b',
                text: 'End of maximum speed',
                img: '',
            },
            {
                char: 'c',
                text: 'End of minimum speed',
                img: '',
            },
            {
                char: 'd',
                text: 'Maximum speed 30 mph',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2255',
        topicCode: 'rules_of_the_road',
        question:
            "What should you do if you want to overtake a tractor but aren't sure that it's safe?",
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Follow another vehicle as it overtakes the tractor',
                img: '',
            },
            {
                char: 'b',
                text: 'Sound your horn to make the tractor driver pull over',
                img: '',
            },
            {
                char: 'c',
                text: 'Speed past, flashing your lights at oncoming traffic',
                img: '',
            },
            {
                char: 'd',
                text: "Stay behind it if you're in any doubt",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2256',
        topicCode: 'rules_of_the_road',
        question:
            'Which vehicle is most likely to take an unusual course at a roundabout?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Estate car',
                img: '',
            },
            {
                char: 'b',
                text: 'Milk float',
                img: '',
            },
            {
                char: 'c',
                text: 'Delivery van',
                img: '',
            },
            {
                char: 'd',
                text: 'Long vehicle',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2262',
        topicCode: 'rules_of_the_road',
        question: 'MTRC When may you stop on a clearway?',
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Never',
                img: '',
            },
            {
                char: 'b',
                text: "When it's busy",
                img: '',
            },
            {
                char: 'c',
                text: 'In the rush hour',
                img: '',
            },
            {
                char: 'd',
                text: 'During daylight hours',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2264',
        topicCode: 'rules_of_the_road',
        question: "What's the meaning of this sign?",
        questionImg: 'AB2264.gif',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'No entry',
                img: '',
            },
            {
                char: 'b',
                text: 'Waiting restrictions',
                img: '',
            },
            {
                char: 'c',
                text: 'National speed limit',
                img: '',
            },
            {
                char: 'd',
                text: 'School crossing patrol',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2268',
        topicCode: 'rules_of_the_road',
        question:
            "You're looking for somewhere to park at night. When may you park on the right-hand side of the road?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: "When you're in a one-way street",
                img: '',
            },
            {
                char: 'b',
                text: 'When you have your sidelights on',
                img: '',
            },
            {
                char: 'c',
                text: "When you're more than 10 metres (32 feet) from a junction",
                img: '',
            },
            {
                char: 'd',
                text: "When you're under a lamppost",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2269',
        topicCode: 'rules_of_the_road',
        question:
            'When should you use the right-hand lane of a three-lane dual carriageway?',
        questionImg: '',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: "When you're overtaking only",
                img: '',
            },
            {
                char: 'b',
                text: "When you're overtaking or turning right",
                img: '',
            },
            {
                char: 'c',
                text: "When you're using cruise control",
                img: '',
            },
            {
                char: 'd',
                text: "When you're turning right only",
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2272',
        topicCode: 'rules_of_the_road',
        question:
            "You're approaching a busy junction. What should you do when, at the last moment, you realise you're in the wrong lane?",
        questionImg: '',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Continue in that lane',
                img: '',
            },
            {
                char: 'b',
                text: 'Force your way into the lane you need',
                img: '',
            },
            {
                char: 'c',
                text: 'Stop until the area has cleared',
                img: '',
            },
            {
                char: 'd',
                text: 'Use arm signals to help you change lane',
                img: '',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'AB2273',
        topicCode: 'rules_of_the_road',
        question: 'MTRC Where may you overtake on a one-way street?',
        questionImg: '',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only on the left-hand side',
                img: '',
            },
            {
                char: 'b',
                text: "Overtaking isn't allowed",
                img: '',
            },
            {
                char: 'c',
                text: 'Only on the right-hand side',
                img: '',
            },
            {
                char: 'd',
                text: 'On either the right or the left',
                img: '',
            },
        ],
        isNIExempts: false,
    },
];

export default questions;
