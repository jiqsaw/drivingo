import type { IQuestion } from '@drivingo/models';

const questions: IQuestion[] = [
    {
        code: 'adi2001',
        topicCode: 'road_procedure',
        question:
            'How must you treat a pelican crossing that crosses the road in a straight line and has a central island?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'As one crossing in daylight only',
            },
            {
                char: 'b',
                text: 'As one complete crossing',
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
        code: 'adi2004',
        topicCode: 'road_procedure',
        question:
            'You want to turn into the next side road on the left. What should you do if you`re following a cyclist as you approach the junction?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep following the cyclist and turn behind them',
            },
            {
                char: 'b',
                text: 'Overtake the cyclist briskly and turn in front of them',
            },
            {
                char: 'c',
                text: 'Sound your horn to warn the cyclist you want to turn',
            },
            {
                char: 'd',
                text: 'Allow extra room when you overtake the cyclist, so that you can turn across them easily',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2005',
        topicCode: 'road_procedure',
        question:
            'What should you do if you wish to overtake a long, slow-moving vehicle on a busy road?',
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
                text: 'Keep well back until you can see that it`s clear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2006',
        topicCode: 'road_procedure',
        question:
            'Who has priority at a crossroads where there are no signs or road markings?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'No-one',
            },
            {
                char: 'b',
                text: 'The vehicle travelling the fastest',
            },
            {
                char: 'c',
                text: 'Oncoming vehicles turning right',
            },
            {
                char: 'd',
                text: 'Vehicles approaching from the right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2008',
        topicCode: 'road_procedure',
        question:
            'Why should you keep well back when you`re following a large vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To prevent diesel exhaust particles from being sucked into your engine',
            },
            {
                char: 'b',
                text: 'To prevent radio or sat-nav interference',
            },
            {
                char: 'c',
                text: 'To help the driver see you in their mirrors',
            },
            {
                char: 'd',
                text: 'To help you save fuel',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2013',
        topicCode: 'road_procedure',
        question: 'When should you use the `two-second rule`?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Before restarting the engine after it has stalled',
            },
            {
                char: 'b',
                text: 'To keep a safe distance from the vehicle in front',
            },
            {
                char: 'c',
                text: 'Before using the `Mirrors-Signal-Manoeuvre` routine',
            },
            {
                char: 'd',
                text: 'When emerging on wet roads',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2014',
        topicCode: 'road_procedure',
        question: 'What does `tailgating` mean?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Using the rear door of a hatchback car',
            },
            {
                char: 'b',
                text: 'Reversing into a parking space',
            },
            {
                char: 'c',
                text: 'Following another vehicle too closely',
            },
            {
                char: 'd',
                text: 'Driving with rear fog lights on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2015',
        topicCode: 'road_procedure',
        question:
            'You`re driving behind a large vehicle. What will happen if you`re too close to it?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your vehicle`s brakes will overheat',
            },
            {
                char: 'b',
                text: 'Your view ahead will be increased',
            },
            {
                char: 'c',
                text: 'Your vehicle`s engine will overheat',
            },
            {
                char: 'd',
                text: 'Your view ahead will be reduced',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2016',
        topicCode: 'road_procedure',
        question:
            'You`re following a vehicle on a wet road. What time gap should you leave between your vehicle and the one in front?',
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
        code: 'adi2017',
        topicCode: 'road_procedure',
        question:
            'You`re in a line of traffic. What action should you take if the driver behind you is following very closely?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Ignore the following driver and continue to drive within the speed limit',
            },
            {
                char: 'b',
                text: 'Slow down, gradually increasing the gap between your vehicle and the one in front',
            },
            {
                char: 'c',
                text: 'Signal left and wave the following driver past',
            },
            {
                char: 'd',
                text: 'Move over to a position just left of the centre line of the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2023',
        topicCode: 'road_procedure',
        question:
            'On a road where trams operate, which vehicles are most at risk from the tram rails?',
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
        code: 'adi2024',
        topicCode: 'road_procedure',
        question: 'When should a vehicle`s horn be used?',
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
        code: 'adi2025',
        topicCode: 'road_procedure',
        question:
            'You`re driving in a one-way street. Where should you position the car to turn right?',
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
        code: 'adi2026',
        topicCode: 'road_procedure',
        question:
            'You wish to turn right. Why should you take up the correct position in good time?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To allow other drivers to pull out in front of you',
            },
            {
                char: 'b',
                text: 'To give a better view into the road that you`re joining',
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
        code: 'adi2036',
        topicCode: 'road_procedure',
        question:
            'Where are vehicles most likely to be affected by a side wind?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On a narrow country lane',
            },
            {
                char: 'b',
                text: 'On an exposed stretch of road',
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
        code: 'adi2037',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a windy day. When do you need to take account of the weather conditions?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you`re using the brakes',
            },
            {
                char: 'b',
                text: 'When you`re making a hill start',
            },
            {
                char: 'c',
                text: 'When you`re turning into a narrow road',
            },
            {
                char: 'd',
                text: 'When you`re passing cyclists',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2038',
        topicCode: 'road_procedure',
        question:
            'What should you do if you think the driver of the vehicle in front has forgotten to cancel their right indicator?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights to alert the driver',
            },
            {
                char: 'b',
                text: 'Sound your horn before overtaking',
            },
            {
                char: 'c',
                text: 'Overtake on the left if there`s room',
            },
            {
                char: 'd',
                text: 'Stay behind and don`t overtake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2043',
        topicCode: 'road_procedure',
        question: 'What must you do when you arrive at a blind junction?',
        questionImg: '85BW9626.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only stop if you`re turning to the right',
            },
            {
                char: 'b',
                text: 'Stop beyond the line at a point where you can see clearly',
            },
            {
                char: 'c',
                text: 'Only stop if there`s traffic on the main road',
            },
            {
                char: 'd',
                text: 'Stop behind the line, then edge forward to see clearly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2044',
        topicCode: 'road_procedure',
        question:
            'What should you do if a driver comes out of a side road, causing you to brake hard?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Ignore the error and stay calm',
            },
            {
                char: 'b',
                text: 'Flash your headlights to show your annoyance',
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
        code: 'adi2046',
        topicCode: 'road_procedure',
        question:
            'You`re driving in a town and want to turn left at a junction. What should you do if pedestrians are crossing at the junction?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drive on, giving them plenty of room',
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
        code: 'adi2051',
        topicCode: 'road_procedure',
        question:
            'What should you do when you come to a place where elderly people are crossing the road?',
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
        code: 'adi2053',
        topicCode: 'road_procedure',
        question:
            'You`re driving up to a roundabout. What should you do if a cyclist, positioned to the left, is signalling to turn right?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake on the right',
            },
            {
                char: 'b',
                text: 'Sound your horn as a warning',
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
        code: 'adi2054',
        topicCode: 'road_procedure',
        question:
            'Why should you look very carefully for motorcyclists and cyclists at junctions?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Because they may want to turn into the side road',
            },
            {
                char: 'b',
                text: 'Because they may slow down to let you turn',
            },
            {
                char: 'c',
                text: 'Because they can be difficult to see',
            },
            {
                char: 'd',
                text: 'Because they might not see you turn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2055',
        topicCode: 'road_procedure',
        question:
            'You`re waiting to drive out of a side road. Why should you look carefully for motorcycles?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Because motorcycles are usually faster than cars',
            },
            {
                char: 'b',
                text: 'Because police patrols often use motorcycles',
            },
            {
                char: 'c',
                text: 'Because motorcycles are narrow and hard to see',
            },
            {
                char: 'd',
                text: 'Because motorcycles have right of way',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2056',
        topicCode: 'road_procedure',
        question: 'Why would a motorcyclist use dipped headlights in daylight?',
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
                text: 'So that the rider can see further ahead',
            },
            {
                char: 'd',
                text: 'To intimidate other road users',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2058',
        topicCode: 'road_procedure',
        question:
            'The vehicle ahead is being driven slowly. What should you do if you`re unsure of the driver`s intentions?',
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
        code: 'adi2059',
        topicCode: 'road_procedure',
        question:
            'Why do motorcyclists often look over their right shoulder just before turning right?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They need to listen for traffic behind',
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
        code: 'adi2062',
        topicCode: 'road_procedure',
        question:
            'What should you do if you`re approaching a roundabout and there`s a horse and rider ahead of you?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Be prepared to stop',
            },
            {
                char: 'b',
                text: 'Treat them like any other vehicle',
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
        code: 'adi2064',
        topicCode: 'road_procedure',
        question:
            'It`s raining and you`re following a motorcyclist as they ride around a bend. Why would the motorcyclist steer around a metal drain cover?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To avoid puncturing the tyres on the edge of the drain cover',
            },
            {
                char: 'b',
                text: 'To prevent the motorcycle from sliding on the metal drain cover',
            },
            {
                char: 'c',
                text: 'To help judge the bend, using the drain cover as a marker point',
            },
            {
                char: 'd',
                text: 'To avoid splashing pedestrians on the pavement',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2065',
        topicCode: 'road_procedure',
        question:
            'You`re waiting to turn right out of a minor road. A large vehicle is approaching from the right. Why should you wait, even if you have time to turn in front of it?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Large vehicles can hide an overtaking vehicle',
            },
            {
                char: 'b',
                text: 'Large vehicles are unpredictable',
            },
            {
                char: 'c',
                text: 'Large vehicles are difficult to steer in a straight line',
            },
            {
                char: 'd',
                text: 'Large vehicles have priority',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2066',
        topicCode: 'road_procedure',
        question:
            'You`re following a long vehicle. What should you do if it approaches a crossroads and signals left, but moves out to the right?',
        questionImg: 'VL2003.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Get closer, then pass the vehicle quickly',
            },
            {
                char: 'b',
                text: 'Stay well back and give the vehicle room',
            },
            {
                char: 'c',
                text: 'Assume the vehicle is actually turning right',
            },
            {
                char: 'd',
                text: 'Overtake as the vehicle starts to slow down',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2067',
        topicCode: 'road_procedure',
        question:
            'You`re following a long vehicle approaching a crossroads. What should you do if the driver signals right but moves close to the left-hand kerb?',
        questionImg: 'VL2005.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Warn the driver of the wrong signal',
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
        code: 'adi2069',
        topicCode: 'road_procedure',
        question: 'Why is overtaking a lorry more risky than overtaking a car?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Lorries are longer than cars',
            },
            {
                char: 'b',
                text: 'Lorries may suddenly pull up',
            },
            {
                char: 'c',
                text: 'Lorry brakes aren`t as good as car brakes',
            },
            {
                char: 'd',
                text: 'Lorries are fitted with speed limiters',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2073',
        topicCode: 'road_procedure',
        question:
            'Some two-way roads are divided into three lanes. Why are these particularly dangerous?',
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
                text: 'Traffic using the middle lane has priority',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2074',
        topicCode: 'road_procedure',
        question:
            'You`re following a vehicle at a safe distance on a wet road. What should you do if another driver overtakes you and pulls into the safe gap you`ve allowed?',
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
        code: 'adi2077',
        topicCode: 'road_procedure',
        question:
            'You`re parking on a two-way road at night. How should you park if the speed limit is 40 mph?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On the left, with parking lights switched on',
            },
            {
                char: 'b',
                text: 'On the left, with no lights switched on',
            },
            {
                char: 'c',
                text: 'On the right, with parking lights switched on',
            },
            {
                char: 'd',
                text: 'On the right, with dipped headlights switched on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2080',
        topicCode: 'road_procedure',
        question: 'What should you do immediately after joining a motorway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Try to overtake',
            },
            {
                char: 'b',
                text: 'Adjust your mirrors',
            },
            {
                char: 'c',
                text: 'Position your vehicle in the centre lane',
            },
            {
                char: 'd',
                text: 'Keep in the left-hand lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2081',
        topicCode: 'road_procedure',
        question: 'What should you do when you`re joining a motorway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Use the hard shoulder',
            },
            {
                char: 'b',
                text: 'Stop at the end of the acceleration lane',
            },
            {
                char: 'c',
                text: 'Come to a stop before joining the motorway',
            },
            {
                char: 'd',
                text: 'Give priority to traffic already on the motorway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2083',
        topicCode: 'road_procedure',
        question:
            'Which vehicles should use the left-hand lane on a three-lane motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Any vehicle that isn`t overtaking',
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
        code: 'adi2084',
        topicCode: 'road_procedure',
        question:
            'What`s the right-hand lane used for on a three-lane motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Emergency vehicles only',
            },
            {
                char: 'b',
                text: 'Overtaking',
            },
            {
                char: 'c',
                text: 'Vehicles towing trailers',
            },
            {
                char: 'd',
                text: 'Coaches only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2086',
        topicCode: 'road_procedure',
        question:
            'You`re driving along a motorway. When may you overtake on the left?',
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
                text: 'When there`s queuing traffic and traffic in your lane is moving faster than traffic in the lane on your right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2087',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a motorway. What should you do if you start to feel tired?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder',
            },
            {
                char: 'b',
                text: 'Leave by the next exit',
            },
            {
                char: 'c',
                text: 'Slow down until the feeling has passed',
            },
            {
                char: 'd',
                text: 'Keep going and move your arms and legs to help your circulation',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2088',
        topicCode: 'road_procedure',
        question:
            'You break down on a motorway. You need to call for help. Why may it be better to use an emergency roadside telephone rather than a mobile phone?',
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
        code: 'adi2090',
        topicCode: 'road_procedure',
        question:
            'You`re on the hard shoulder of a motorway, following a breakdown. How should you rejoin the main carriageway when your vehicle has been repaired?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move out onto the carriageway, then build up your speed',
            },
            {
                char: 'b',
                text: 'Move out onto the carriageway, using your hazard warning lights',
            },
            {
                char: 'c',
                text: 'Gain speed on the hard shoulder before moving safely onto the carriageway',
            },
            {
                char: 'd',
                text: 'Wait on the hard shoulder until someone flashes their headlights at you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2091',
        topicCode: 'road_procedure',
        question: 'Where would you find a crawler lane on a motorway?',
        questionImg: 'TS4503.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'On an uphill gradient',
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
                text: 'Across an exposed bridge',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2099',
        topicCode: 'road_procedure',
        question:
            'What`s the speed limit likely to be where you see street lights but no speed-limit signs?',
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
        code: 'adi2100',
        topicCode: 'road_procedure',
        question:
            'What should you do if you want to overtake a slow tractor but you`re not sure if it`s safe to do so?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Follow another overtaking vehicle',
            },
            {
                char: 'b',
                text: 'Sound your horn to signal the tractor driver to pull over',
            },
            {
                char: 'c',
                text: 'Flash your headlights to oncoming traffic and then overtake',
            },
            {
                char: 'd',
                text: 'Wait if you`re in any doubt',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2101',
        topicCode: 'road_procedure',
        question:
            'Which vehicle is most likely to follow an unusual course at a roundabout?',
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
        code: 'adi2105',
        topicCode: 'road_procedure',
        question:
            'When would you use the right-hand lane of a three-lane dual carriageway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Only when you`re overtaking',
            },
            {
                char: 'b',
                text: 'When you`re overtaking or turning right',
            },
            {
                char: 'c',
                text: 'When you`re driving fast',
            },
            {
                char: 'd',
                text: 'Only when you`re turning right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2107',
        topicCode: 'road_procedure',
        question:
            'You`re approaching a busy junction. There are several lanes with road markings. What should you do when, at the last moment, you realise that you`re in the wrong lane?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Use clear arm signals to get into the lane you want',
            },
            {
                char: 'b',
                text: 'Force your way into the lane you want',
            },
            {
                char: 'c',
                text: 'Stop until the area has cleared',
            },
            {
                char: 'd',
                text: 'Continue in that lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2108',
        topicCode: 'road_procedure',
        question:
            'How is overtaking in a one-way street different from overtaking on a two-way road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'In a one-way street, you can only overtake on the left-hand side',
            },
            {
                char: 'b',
                text: 'In a one-way street, overtaking isn`t allowed',
            },
            {
                char: 'c',
                text: 'In a one-way street, you can only overtake on the right-hand side',
            },
            {
                char: 'd',
                text: 'In a one-way street, you can overtake on the right or the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2111',
        topicCode: 'road_procedure',
        question: 'Which vehicle might have to straddle lanes at a roundabout?',
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
        code: 'adi2116',
        topicCode: 'road_procedure',
        question:
            'You`re driving towards a zebra crossing. What should you do if you see someone has started to cross at the crossing?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Go on quickly before they obstruct you',
            },
            {
                char: 'b',
                text: 'Stop before you reach the zigzag lines and let them cross',
            },
            {
                char: 'c',
                text: 'Stop at the `give way` line and wait patiently while they cross',
            },
            {
                char: 'd',
                text: 'Carefully steer around them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2127',
        topicCode: 'road_procedure',
        question: 'What should you do when you approach a contraflow system?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Follow other motorists closely to avoid long queues',
            },
            {
                char: 'b',
                text: 'Switch lanes at any time to make progress',
            },
            {
                char: 'c',
                text: 'Choose an appropriate lane in good time',
            },
            {
                char: 'd',
                text: 'Increase speed to pass through quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2138',
        topicCode: 'road_procedure',
        question:
            'When may you overtake another vehicle by passing on its left-hand side?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'On a free-flowing dual carriageway or motorway',
            },
            {
                char: 'b',
                text: 'On a dual carriageway or motorway when the traffic is moving slowly in queues',
            },
            {
                char: 'c',
                text: 'On a two-way road when traffic is moving slowly',
            },
            {
                char: 'd',
                text: 'On a two-way road when the car in front is signalling to turn left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2139',
        topicCode: 'road_procedure',
        question:
            'When should drivers use the right-hand lane of a three-lane motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'For passing slip roads joining on the left',
            },
            {
                char: 'b',
                text: 'For overtaking',
            },
            {
                char: 'c',
                text: 'For turning right',
            },
            {
                char: 'd',
                text: 'For driving fast',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2167',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a motorway that isn`t controlled by smart motorway technology. When should you use the hard shoulder?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To answer a mobile phone',
            },
            {
                char: 'b',
                text: 'When your vehicle breaks down',
            },
            {
                char: 'c',
                text: 'For a short rest when you`re tired',
            },
            {
                char: 'd',
                text: 'To check a road atlas',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2170',
        topicCode: 'road_procedure',
        question:
            'You`re approaching traffic lights. What should you do if the green light has been showing for some time?',
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
        code: 'adi2177',
        topicCode: 'road_procedure',
        question: 'What should you do as you drive towards a zebra crossing?',
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
        code: 'adi2179',
        topicCode: 'road_procedure',
        question: 'Why are traffic-calming measures put in place?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To stop road rage',
            },
            {
                char: 'b',
                text: 'To help overtaking',
            },
            {
                char: 'c',
                text: 'To slow traffic down',
            },
            {
                char: 'd',
                text: 'To help parking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2180',
        topicCode: 'road_procedure',
        question:
            'Your vehicle has broken down on a motorway. How would you know where to find the nearest emergency telephone?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Walk in the direction you were travelling',
            },
            {
                char: 'b',
                text: 'Walk so you`re facing oncoming traffic',
            },
            {
                char: 'c',
                text: 'Walk in the direction shown on the marker posts',
            },
            {
                char: 'd',
                text: 'Walk in the direction of the nearest exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2181',
        topicCode: 'road_procedure',
        question:
            'You`re driving along the left-hand lane of a three-lane motorway. You see traffic is joining from a slip road ahead. What should you do to help maintain the traffic flow?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Pace the other vehicles',
            },
            {
                char: 'b',
                text: 'Move to another lane',
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
        code: 'adi2184',
        topicCode: 'road_procedure',
        question:
            'How should you drive in areas where there are traffic-calming measures?',
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
                text: 'In third gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2185',
        topicCode: 'road_procedure',
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
                text: 'Position your vehicle close to the left-hand kerb',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2191',
        topicCode: 'road_procedure',
        question:
            'You`re planning a long journey. What should you include in your journey plan?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Taking food and drink to avoid unhealthy eating',
            },
            {
                char: 'b',
                text: 'Regular rest stops',
            },
            {
                char: 'c',
                text: 'A detour to make the journey more interesting',
            },
            {
                char: 'd',
                text: 'Loud music to play if you feel tired',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2192',
        topicCode: 'road_procedure',
        question:
            'What should you do when you`re following a motorcyclist along an uneven road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive closer to them so you can be seen in their mirrors',
            },
            {
                char: 'b',
                text: 'Overtake them immediately',
            },
            {
                char: 'c',
                text: 'Allow extra room in case they swerve to avoid potholes',
            },
            {
                char: 'd',
                text: 'Allow the same room as normal because road surfaces do not affect motorcyclists',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2193',
        topicCode: 'road_procedure',
        question:
            'You`re driving behind two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?',
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
        code: 'adi2194',
        topicCode: 'road_procedure',
        question:
            'You`re following a moped. What should you do if you want to turn left a short distance ahead?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake the moped before you reach the junction',
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
        code: 'adi2195',
        topicCode: 'road_procedure',
        question:
            'As you drive towards a roundabout, you see a horse and rider ahead. What should you do if the rider is signalling right but keeping well to the left?',
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
        code: 'adi2196',
        topicCode: 'road_procedure',
        question:
            'How should you react to drivers who appear to be inexperienced?',
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
                text: 'Flash your headlights to indicate that it`s safe for them to proceed',
            },
            {
                char: 'd',
                text: 'Overtake them as soon as possible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2197',
        topicCode: 'road_procedure',
        question:
            'You keep well back while waiting to overtake a large vehicle. What should you do if another car fills the gap?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sound your horn',
            },
            {
                char: 'b',
                text: 'Drop further back',
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
        code: 'adi2198',
        topicCode: 'road_procedure',
        question:
            'Why should you reduce your speed when you`re driving in fog?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The brakes don`t work as well as they do on a clear day',
            },
            {
                char: 'b',
                text: 'You could be dazzled by other people`s fog lights',
            },
            {
                char: 'c',
                text: 'The engine runs colder and so uses more fuel than on a clear day',
            },
            {
                char: 'd',
                text: 'You won`t be able to see as far ahead as you can on a clear day',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2200',
        topicCode: 'road_procedure',
        question:
            'You`re joining a motorway. Why is it important to make full use of the slip road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To give yourself space to turn around if you need to',
            },
            {
                char: 'b',
                text: 'To allow you direct access to the overtaking lanes',
            },
            {
                char: 'c',
                text: 'To build up a speed similar to traffic already on the motorway',
            },
            {
                char: 'd',
                text: 'To give you immediate access to the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2201',
        topicCode: 'road_procedure',
        question:
            'What should you do when you use the emergency telephone on a motorway?',
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
        code: 'adi2202',
        topicCode: 'road_procedure',
        question:
            'You`re intending to turn right at a crossroads. An approaching driver is also turning right. What danger exists if you turn in front of each other?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The approaching vehicle will block your view of oncoming vehicles',
            },
            {
                char: 'b',
                text: 'The view in your offside mirror will be blocked',
            },
            {
                char: 'c',
                text: 'The time it takes to turn will be increased',
            },
            {
                char: 'd',
                text: 'The angle of turn will be tighter than if you turned behind each other',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2203',
        topicCode: 'road_procedure',
        question:
            'You`re signalling to turn right in busy traffic. How could you emphasise your intention?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By sounding the horn',
            },
            {
                char: 'b',
                text: 'By giving an arm signal',
            },
            {
                char: 'c',
                text: 'By flashing your headlights',
            },
            {
                char: 'd',
                text: 'By positioning over the centre line',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2207',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a country road that has no pavement. What should you be prepared to find coming towards you, on your side of the road?',
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
        code: 'adi2209',
        topicCode: 'road_procedure',
        question:
            'You`re turning left into a side road. What must you do if pedestrians are crossing the road at the junction?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wave them on',
            },
            {
                char: 'b',
                text: 'Sound your horn',
            },
            {
                char: 'c',
                text: 'Switch on your hazard warning lights',
            },
            {
                char: 'd',
                text: 'Wait for them to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2210',
        topicCode: 'road_procedure',
        question:
            'What should you do if a driver does something that upsets you?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Try not to react',
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
        code: 'adi2211',
        topicCode: 'road_procedure',
        question:
            'What should you do if you`re following a car driven by an elderly driver?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Expect the driver to drive badly',
            },
            {
                char: 'b',
                text: 'Flash your headlights and overtake',
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
        code: 'adi2215',
        topicCode: 'road_procedure',
        question: 'What should you do when you`re driving in foggy conditions?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Follow other vehicles` tail lights closely',
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
                text: 'Keep two seconds behind other vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2216',
        topicCode: 'road_procedure',
        question:
            'What should you do when you`re overtaking another car at night?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights before overtaking',
            },
            {
                char: 'b',
                text: 'Leave your headlights on dipped beam after you`ve overtaken',
            },
            {
                char: 'c',
                text: 'Switch your headlights to full beam before overtaking',
            },
            {
                char: 'd',
                text: 'Wait until you`ve overtaken before switching your headlights to full beam',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2217',
        topicCode: 'road_procedure',
        question:
            'What should you do if you`re driving on a single-track road and you see an oncoming vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights',
            },
            {
                char: 'b',
                text: 'Stop immediately',
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
        code: 'adi2218',
        topicCode: 'road_procedure',
        question:
            'Which lane should you normally use on a three-lane motorway?',
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
        code: 'adi2219',
        topicCode: 'road_procedure',
        question: 'What should you do when you`re driving on a motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the lane that has the least traffic',
            },
            {
                char: 'b',
                text: 'Use the left-hand lane unless you`re overtaking',
            },
            {
                char: 'c',
                text: 'Overtake using the lane that has the least traffic',
            },
            {
                char: 'd',
                text: 'Keep above 50 mph to prevent congestion',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2220',
        topicCode: 'road_procedure',
        question:
            'What should you do when you`re driving through a contraflow system on a motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Ensure that you don`t exceed 30 mph',
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
        code: 'adi2228',
        topicCode: 'road_procedure',
        question:
            'You`re driving at the legal speed limit. What should you do if a vehicle comes up quickly behind, flashing its headlights?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Accelerate to open a gap behind you',
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
        code: 'adi2231',
        topicCode: 'road_procedure',
        question:
            'You`re driving towards a right-hand bend. Why should you position yourself well to the left?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To improve your view of the road',
            },
            {
                char: 'b',
                text: 'To overcome the effect of the road`s slope',
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
        code: 'adi2232',
        topicCode: 'road_procedure',
        question: 'What may help if a driver`s behaviour has upset you?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stopping and taking a break',
            },
            {
                char: 'b',
                text: 'Shouting abusive language',
            },
            {
                char: 'c',
                text: 'Gesturing to them with your hand',
            },
            {
                char: 'd',
                text: 'Following their car and flashing your headlights aggressively',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2236',
        topicCode: 'road_procedure',
        question: 'When should you use your vehicle`s horn?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To give you right of way',
            },
            {
                char: 'b',
                text: 'To attract a friend`s attention',
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
        code: 'adi2238',
        topicCode: 'road_procedure',
        question:
            'What should you do before stopping to park on the side of the road?',
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
                text: 'Flash your headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2241',
        topicCode: 'road_procedure',
        question:
            'You`re on a road that has speed humps. What should you do if the driver in front is travelling slowly?',
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
        code: 'adi2245',
        topicCode: 'road_procedure',
        question:
            'Where would you usually find the first information sign indicating that you`re approaching an exit from a motorway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'At the first countdown marker',
            },
            {
                char: 'b',
                text: 'Half a mile before the exit',
            },
            {
                char: 'c',
                text: 'At the beginning of the slip road',
            },
            {
                char: 'd',
                text: 'One mile before the exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2246',
        topicCode: 'road_procedure',
        question:
            'You leave a motorway, following a long period of fast driving. How is your judgement of speed likely to be affected?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You`re likely to drive faster than you realise',
            },
            {
                char: 'b',
                text: 'Your judgement of speed is likely to be unaltered',
            },
            {
                char: 'c',
                text: 'You`re likely to drive more slowly than you realise',
            },
            {
                char: 'd',
                text: 'Your judgement of speed is likely to be improved',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2247',
        topicCode: 'road_procedure',
        question:
            'You break down on a dual carriageway. How far behind your vehicle should you place a red warning triangle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '45 metres (147 feet)',
            },
            {
                char: 'b',
                text: '90 metres (294 feet)',
            },
            {
                char: 'c',
                text: '125 metres (408 feet)',
            },
            {
                char: 'd',
                text: '150 metres (490 feet)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2250',
        topicCode: 'road_procedure',
        question: 'What should you do when you`re driving in poor visibility?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Make sure you can stop within your thinking distance',
            },
            {
                char: 'b',
                text: 'Use your vehicle`s sidelights to reduce the glare for other drivers',
            },
            {
                char: 'c',
                text: 'Use the tail lights of other vehicles as a guide',
            },
            {
                char: 'd',
                text: 'Make sure you can stop within the distance you can see to be clear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2251',
        topicCode: 'road_procedure',
        question:
            'What should you do when you`re driving at night and are dazzled by the headlights of an approaching vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Flash your headlights',
            },
            {
                char: 'b',
                text: 'Continue to drive on full beam',
            },
            {
                char: 'c',
                text: 'Slow down or stop',
            },
            {
                char: 'd',
                text: 'Drive faster past the oncoming car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2252',
        topicCode: 'road_procedure',
        question:
            'What should you do before turning left from a busy major road into a minor road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Look out for vehicles in front that may be stopping',
            },
            {
                char: 'b',
                text: 'Move out to the right to make the turn easier',
            },
            {
                char: 'c',
                text: 'Sound your horn to pedestrians who are in the road',
            },
            {
                char: 'd',
                text: 'Always select first gear on approach',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2254',
        topicCode: 'road_procedure',
        question:
            'You`re parking your car facing uphill with a kerb on your left. You apply the parking brake. What else should you do for added security?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Leave the front wheels turned to the left, with the vehicle in first gear',
            },
            {
                char: 'b',
                text: 'Leave the front wheels turned to the left, with the vehicle in reverse gear',
            },
            {
                char: 'c',
                text: 'Leave the front wheels turned to the right, with the vehicle in first gear',
            },
            {
                char: 'd',
                text: 'Leave the front wheels turned to the right, with the vehicle in reverse gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2255',
        topicCode: 'road_procedure',
        question: 'When should you use hazard warning lights?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When you stop on double yellow lines',
            },
            {
                char: 'b',
                text: 'When your vehicle is stationary and temporarily obstructing traffic',
            },
            {
                char: 'c',
                text: 'When you park your vehicle on the pavement',
            },
            {
                char: 'd',
                text: 'When you park in a restricted area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2258',
        topicCode: 'road_procedure',
        question:
            'You`re waiting to emerge from a junction. What should you do if a vehicle is approaching quickly from your right with its left indicator flashing?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Apply the parking brake, select neutral and wait',
            },
            {
                char: 'b',
                text: 'Make sure the vehicle is turning left before proceeding',
            },
            {
                char: 'c',
                text: 'Assume the vehicle is turning left and proceed',
            },
            {
                char: 'd',
                text: 'Cancel your signal to avoid causing confusion',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2259',
        topicCode: 'road_procedure',
        question:
            'You`re turning right at a crossroads. An oncoming vehicle is also turning right. What`s the advantage in turning behind the oncoming vehicle?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You`ll be able to turn without stopping',
            },
            {
                char: 'b',
                text: 'You`ll use less fuel because you can stay in a high gear',
            },
            {
                char: 'c',
                text: 'You`ll have more time to turn',
            },
            {
                char: 'd',
                text: 'You`ll have a clearer view of any approaching traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2262',
        topicCode: 'road_procedure',
        question:
            'You need to reverse park between two vehicles. As a guide, what`s the minimum gap you`ll need between the two vehicles?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'One-and-a-half times the length of your car',
            },
            {
                char: 'b',
                text: 'One-and-a-half times the length of the front car',
            },
            {
                char: 'c',
                text: 'Twice the length of your car',
            },
            {
                char: 'd',
                text: 'Twice the length of the rear car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2264',
        topicCode: 'road_procedure',
        question: 'How should you turn right at a mini-roundabout?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drive around the central markings',
            },
            {
                char: 'b',
                text: 'Take the shortest route',
            },
            {
                char: 'c',
                text: 'Drive over the central markings',
            },
            {
                char: 'd',
                text: 'Take the most direct route',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2265',
        topicCode: 'road_procedure',
        question:
            'You intend to turn left at traffic lights. What should you do just before turning?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check your right-hand mirror',
            },
            {
                char: 'b',
                text: 'Move closer to the vehicle in front',
            },
            {
                char: 'c',
                text: 'Straddle the lanes',
            },
            {
                char: 'd',
                text: 'Check for cyclists on your left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2268',
        topicCode: 'road_procedure',
        question:
            'Where should you position your vehicle when you`re driving towards a left-hand bend?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Where you get the best view',
            },
            {
                char: 'b',
                text: 'Towards the centre of the road',
            },
            {
                char: 'c',
                text: 'Towards the right of your lane',
            },
            {
                char: 'd',
                text: 'In the centre of your lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2318',
        topicCode: 'road_procedure',
        question:
            'You`re driving along a three-lane motorway. When may you overtake on the left?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'If you`re within 1 mile of your exit',
            },
            {
                char: 'b',
                text: 'If the driver ahead is hogging the right-hand lane',
            },
            {
                char: 'c',
                text: 'If you`re driving in a slow-moving traffic queue',
            },
            {
                char: 'd',
                text: 'If you`re in stationary traffic but the hard shoulder is clear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2343',
        topicCode: 'road_procedure',
        question:
            'You`re turning right across a dual carriageway from a side road. What should you do if the gap in the central reservation isn`t wide enough to contain your vehicle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Turn left onto the dual carriageway and turn around at the next roundabout',
            },
            {
                char: 'b',
                text: 'Wait in the side road until you can turn across the dual carriageway in one movement',
            },
            {
                char: 'c',
                text: 'Wait in the central reservation and complete the turn when it`s safe',
            },
            {
                char: 'd',
                text: 'Turn left onto the dual carriageway and perform a U-turn at the next gap in the central reservation',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2345',
        topicCode: 'road_procedure',
        question:
            'When should drivers use the centre lane of a three-lane motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When overtaking slower-moving vehicles in the left-hand lane',
            },
            {
                char: 'b',
                text: 'When overtaking vehicles in the right-hand lane',
            },
            {
                char: 'c',
                text: 'When driving at a constant speed of 60 mph or less',
            },
            {
                char: 'd',
                text: 'When driving at a speed between 60 mph and 70 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2349',
        topicCode: 'road_procedure',
        question:
            'Where should you position the car when you`re driving in traffic lanes?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Well to the left of the lane',
            },
            {
                char: 'b',
                text: 'Well to the right of the lane',
            },
            {
                char: 'c',
                text: 'In the centre of the lane',
            },
            {
                char: 'd',
                text: 'Anywhere within the lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2351',
        topicCode: 'road_procedure',
        question:
            'When leaving a motorway, many drivers fail to realise how fast they`re going. How can you make sure you`re not driving too fast?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When you leave the motorway, check that your speed is below that of vehicles in the left-hand lane',
            },
            {
                char: 'b',
                text: 'As you enter the slip road, check your speed by glancing down at the speedometer',
            },
            {
                char: 'c',
                text: 'Maintain your speed until you get close to the junction at the end of the slip road',
            },
            {
                char: 'd',
                text: 'Always use the gears to assist in the reduction of speed when leaving the motorway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2355',
        topicCode: 'road_procedure',
        question:
            'What`s the most important factor affecting the speed you choose to drive?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You should drive at the speed limit wherever possible',
            },
            {
                char: 'b',
                text: 'You should drive at a speed that doesn`t impede other road users',
            },
            {
                char: 'c',
                text: 'You should be able to stop within the distance you can see to be clear',
            },
            {
                char: 'd',
                text: 'You should keep up with the traffic in front',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2358',
        topicCode: 'road_procedure',
        question:
            'How should you treat a zebra crossing that`s split by an island?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'As a traffic-calming measure',
            },
            {
                char: 'b',
                text: 'As one crossing',
            },
            {
                char: 'c',
                text: 'As two crossings',
            },
            {
                char: 'd',
                text: 'As any part of the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2359',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a two-lane motorway. What should you do if a lorry is taking a long time to overtake you?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slow down and let the lorry pass',
            },
            {
                char: 'b',
                text: 'Maintain a steady speed and let the lorry driver decide what to do',
            },
            {
                char: 'c',
                text: 'Increase speed slowly, so the lorry can move into the left-hand lane behind you',
            },
            {
                char: 'd',
                text: 'Slow down and flash your headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2360',
        topicCode: 'road_procedure',
        question:
            'You want to reverse park a car between two vehicles on the side of the road. As a guide, what would be the minimum size for a suitable parking space?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'One car length',
            },
            {
                char: 'b',
                text: 'One-and-a-half car lengths',
            },
            {
                char: 'c',
                text: 'Two car lengths',
            },
            {
                char: 'd',
                text: 'Two-and-a-half car lengths',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2362',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a country road. What should you be prepared for if there are no pavements?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Vehicles parked on the road',
            },
            {
                char: 'b',
                text: 'Soft verges',
            },
            {
                char: 'c',
                text: 'Reduced visibility on bends',
            },
            {
                char: 'd',
                text: 'Pedestrians in the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2363',
        topicCode: 'road_procedure',
        question:
            'You`re driving a car at night. The vehicle behind starts to overtake. When should you dip your headlights?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Well before the vehicle passes you',
            },
            {
                char: 'b',
                text: 'As soon as the vehicle passes you',
            },
            {
                char: 'c',
                text: 'Well after the vehicle passes you',
            },
            {
                char: 'd',
                text: 'When the other vehicle flashes its headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2364',
        topicCode: 'road_procedure',
        question:
            'You`re driving at night. When would you dip your headlights earlier than normal?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you`re approaching a left-hand bend',
            },
            {
                char: 'b',
                text: 'When you`re approaching a bend on a downhill slope',
            },
            {
                char: 'c',
                text: 'When you`re approaching a right-hand bend',
            },
            {
                char: 'd',
                text: 'When you`re driving uphill',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2365',
        topicCode: 'road_procedure',
        question:
            'Where should you position your car as you approach a sharp left-hand bend?',
        questionImg: 'TS4577.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In the centre of your lane',
            },
            {
                char: 'b',
                text: 'Well to the left',
            },
            {
                char: 'c',
                text: 'Close to the centre line',
            },
            {
                char: 'd',
                text: 'Close to the vehicle in front',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2414',
        topicCode: 'road_procedure',
        question:
            'What should you teach your pupils to do before they emerge from a road junction?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Look left, then right',
            },
            {
                char: 'b',
                text: 'Take effective observation',
            },
            {
                char: 'c',
                text: 'Look right only',
            },
            {
                char: 'd',
                text: 'Look left only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2417',
        topicCode: 'road_procedure',
        question:
            'Which lane should you use when you`re going ahead at a roundabout that has two lanes on the approach and no lane direction arrows?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The left-hand lane if it`s clear, and keep to that lane on the roundabout',
            },
            {
                char: 'b',
                text: 'The left-hand lane, and use the right-hand lane on the roundabout',
            },
            {
                char: 'c',
                text: 'The right-hand lane, and change to the left-hand lane on the roundabout',
            },
            {
                char: 'd',
                text: 'The right-hand lane, and stay in that lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2435',
        topicCode: 'road_procedure',
        question:
            'What`s the first thing you should do after emerging from a junction, turning either left or right?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep well to the left to allow traffic behind to overtake',
            },
            {
                char: 'b',
                text: 'Drive away slowly and cancel the signal',
            },
            {
                char: 'c',
                text: 'Get used to the speed of the traffic flow',
            },
            {
                char: 'd',
                text: 'Check your mirrors to assess the speed and position of traffic behind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2436',
        topicCode: 'road_procedure',
        question:
            'Normally, how far apart are emergency telephones on a motorway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Half a mile',
            },
            {
                char: 'b',
                text: '1 mile',
            },
            {
                char: 'c',
                text: '2 miles',
            },
            {
                char: 'd',
                text: '3 miles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2437',
        topicCode: 'road_procedure',
        question:
            'What`s usually the speed limit on a road that has street lights?',
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
                text: '70 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2438',
        topicCode: 'road_procedure',
        question:
            'After a breakdown on the motorway, how should you rejoin the carriageway from the hard shoulder?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Wait until the motorway is clear, then get into the left-hand lane',
            },
            {
                char: 'b',
                text: 'Signal right and drive straight back onto the motorway',
            },
            {
                char: 'c',
                text: 'Build up speed on the hard shoulder and join the left-hand lane when there`s a suitable gap',
            },
            {
                char: 'd',
                text: 'Follow the breakdown recovery vehicle onto the motorway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2439',
        topicCode: 'road_procedure',
        question:
            'What should you do if another vehicle is taking a long time to overtake you?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Accelerate to allow sufficient room for it to move back to the left',
            },
            {
                char: 'b',
                text: 'Slow down and let it pass',
            },
            {
                char: 'c',
                text: 'Continue at a constant speed',
            },
            {
                char: 'd',
                text: 'Ignore the other vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2442',
        topicCode: 'road_procedure',
        question:
            'You`ve left a motorway after a long period of driving at 70 mph. How is your judgement of speed likely to be affected?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You`ll think you`re going more slowly than you are',
            },
            {
                char: 'b',
                text: 'Your judgement of speed will be improved',
            },
            {
                char: 'c',
                text: 'You`ll think you`re going faster than you are',
            },
            {
                char: 'd',
                text: 'Your judgement of speed will be unaffected',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2443',
        topicCode: 'road_procedure',
        question:
            'You park facing uphill and apply the parking brake. As an added precaution, you should also leave the car in gear. Which would be the most appropriate gear to select?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reverse',
            },
            {
                char: 'b',
                text: 'First',
            },
            {
                char: 'c',
                text: 'Neutral',
            },
            {
                char: 'd',
                text: 'Fourth',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2445',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a dual carriageway. What`s the first thing you should do if you see a broken-down vehicle in the left-hand lane?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Look in your mirrors',
            },
            {
                char: 'b',
                text: 'Check for road signs',
            },
            {
                char: 'c',
                text: 'Reduce your speed',
            },
            {
                char: 'd',
                text: 'Change to a lower gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2449',
        topicCode: 'road_procedure',
        question: 'What is road camber?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The anti-slip road surface used near some hazards',
            },
            {
                char: 'b',
                text: 'The way the road surface slopes to help drainage',
            },
            {
                char: 'c',
                text: 'The measure of the steepness of a hill',
            },
            {
                char: 'd',
                text: 'The measure of the sharpness of a bend',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2452',
        topicCode: 'road_procedure',
        question:
            'You`re driving around a left-hand bend at night. Which lights should you use if there`s oncoming traffic?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Dipped beam, then main beam',
            },
            {
                char: 'b',
                text: 'Main beam',
            },
            {
                char: 'c',
                text: 'Dipped beam',
            },
            {
                char: 'd',
                text: 'Sidelights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2457',
        topicCode: 'road_procedure',
        question:
            'What should you do if your vehicle gets a puncture while you`re driving on a motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use the motorway telephone and call for assistance',
            },
            {
                char: 'b',
                text: 'Change the wheel yourself',
            },
            {
                char: 'c',
                text: 'Use the motorway telephone and then try to change the wheel',
            },
            {
                char: 'd',
                text: 'Drive along the hard shoulder to reach the next service area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2464',
        topicCode: 'road_procedure',
        question: 'What`s the routine for preparing to move off downhill?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Engage the appropriate gear; apply the footbrake; release the parking brake, keeping the footbrake applied',
            },
            {
                char: 'b',
                text: 'Engage first gear; press the accelerator slightly; release the parking brake',
            },
            {
                char: 'c',
                text: 'Engage the appropriate gear; release the footbrake and parking brake together',
            },
            {
                char: 'd',
                text: 'Engage a high gear; ride the clutch until the correct speed has been reached',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2503',
        topicCode: 'road_procedure',
        question:
            'When can you overtake on the left while you`re driving on a three-lane motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'If the traffic queue on your right is moving more slowly than you',
            },
            {
                char: 'b',
                text: 'When the right-hand lane is closed',
            },
            {
                char: 'c',
                text: 'At any time',
            },
            {
                char: 'd',
                text: 'Never',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2523',
        topicCode: 'road_procedure',
        question:
            'You intend to turn right at a roundabout. When should you give a left signal?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Immediately on entering the roundabout',
            },
            {
                char: 'b',
                text: 'In good time on approach to the roundabout',
            },
            {
                char: 'c',
                text: 'After passing the exit before the one you want',
            },
            {
                char: 'd',
                text: 'When entering the exit you wish to take',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2526',
        topicCode: 'road_procedure',
        question: 'What should a driver do just before they move off?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Look around',
            },
            {
                char: 'b',
                text: 'Give a signal',
            },
            {
                char: 'c',
                text: 'Use the mirrors',
            },
            {
                char: 'd',
                text: 'Engage first gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2527',
        topicCode: 'road_procedure',
        question:
            'Where should you position your vehicle when you`re driving in lanes of traffic?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Well to the left of the lane',
            },
            {
                char: 'b',
                text: 'In the centre of the lane',
            },
            {
                char: 'c',
                text: 'Slightly to the right of the lane',
            },
            {
                char: 'd',
                text: 'Wherever you feel comfortable',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2528',
        topicCode: 'road_procedure',
        question:
            'You`re driving at the speed limit, in the right-hand lane of a dual carriageway. A faster car is approaching from behind. What should you do if the driver wishes to overtake?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Feather the footbrake to warn them off',
            },
            {
                char: 'b',
                text: 'Remain in the right-hand lane',
            },
            {
                char: 'c',
                text: 'Move over when it`s safe',
            },
            {
                char: 'd',
                text: 'Slow down and indicate left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2529',
        topicCode: 'road_procedure',
        question:
            'You`re waiting to turn right onto a main road. The only vehicle in sight is approaching from the right with its left indicator flashing. When should you move out?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Straight away',
            },
            {
                char: 'b',
                text: 'After the vehicle has begun to turn',
            },
            {
                char: 'c',
                text: 'When the vehicle starts to slow down',
            },
            {
                char: 'd',
                text: 'Just before the vehicle starts to turn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2531',
        topicCode: 'road_procedure',
        question:
            'You`re following another vehicle in good weather conditions at 70 mph. What`s the minimum separation distance you should allow?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Two seconds',
            },
            {
                char: 'b',
                text: 'Three seconds',
            },
            {
                char: 'c',
                text: 'Four seconds',
            },
            {
                char: 'd',
                text: 'Ten seconds',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2532',
        topicCode: 'road_procedure',
        question:
            'You`re driving in a stream of traffic. What should you do if the vehicle behind is too close?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Increase the distance between your vehicle and the one behind you',
            },
            {
                char: 'b',
                text: 'Increase the distance between your vehicle and the one in front',
            },
            {
                char: 'c',
                text: 'Nothing; keep driving the same way you have been',
            },
            {
                char: 'd',
                text: 'Flash your brake lights and slow down',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2533',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a three-lane motorway. When would you use the right-hand lane?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you`re turning right',
            },
            {
                char: 'b',
                text: 'When you`re towing a trailer',
            },
            {
                char: 'c',
                text: 'When you`re driving at high speed',
            },
            {
                char: 'd',
                text: 'When you`re overtaking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2535',
        topicCode: 'road_procedure',
        question:
            'You`re waiting in a side road to cross a dual carriageway. What should you do if your car would safely fit in the gap in the central reservation?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When the first carriageway is clear, drive into the gap in the central reservation and give way to traffic from the left',
            },
            {
                char: 'b',
                text: 'Wait for both carriageways to be clear before driving straight across',
            },
            {
                char: 'c',
                text: 'Turn left onto the first carriageway, then drive to the next gap in the central reservation and turn right',
            },
            {
                char: 'd',
                text: 'Block the first carriageway and wait for someone from the left to give way to you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2537',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a motorway in daylight. What lights should you use in misty or hazy conditions?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Dipped headlights',
            },
            {
                char: 'b',
                text: 'Full-beam headlights',
            },
            {
                char: 'c',
                text: 'Side and rear lights only',
            },
            {
                char: 'd',
                text: 'Hazard warning lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2538',
        topicCode: 'road_procedure',
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
        code: 'adi2539',
        topicCode: 'road_procedure',
        question:
            'What should your first action be when you`re approaching a hazard?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Reduce speed',
            },
            {
                char: 'b',
                text: 'Get in the right gear',
            },
            {
                char: 'c',
                text: 'Flash your headlights',
            },
            {
                char: 'd',
                text: 'Look in the mirrors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2544',
        topicCode: 'road_procedure',
        question:
            'You`re driving at 70 mph on a two-lane motorway. You`re overtaking vehicles on your left. What should you do if a vehicle approaches fast from behind?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Maintain your speed and position',
            },
            {
                char: 'b',
                text: 'Move over when it`s safe and let the other vehicle overtake',
            },
            {
                char: 'c',
                text: 'Increase your speed to avoid holding up the other vehicle',
            },
            {
                char: 'd',
                text: 'Flash your brake lights to alert the other driver',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2545',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a motorway at night. What should you do if you need to slow down because you`re dazzled by headlights?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Brake gently',
            },
            {
                char: 'b',
                text: 'Pump the footbrake',
            },
            {
                char: 'c',
                text: 'Brake firmly and move to a lane on your left',
            },
            {
                char: 'd',
                text: 'Pull up on the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2555',
        topicCode: 'road_procedure',
        question: 'What does the phrase `thinking distance` mean?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The distance a vehicle travels from the moment the driver recognises the need to brake, until they begin braking',
            },
            {
                char: 'b',
                text: 'The distance a vehicle travels from the moment the driver recognises the need to brake, until the vehicle stops',
            },
            {
                char: 'c',
                text: 'The distance a vehicle travels from the moment the driver begins to brake, until the vehicle stops',
            },
            {
                char: 'd',
                text: 'The distance a vehicle travels from the moment the driver thinks about stopping, until the vehicle stops',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2614',
        topicCode: 'road_procedure',
        question:
            'You`re turning right onto a dual carriageway. What should you do before emerging?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop, apply the handbrake and then select a low gear',
            },
            {
                char: 'b',
                text: 'Position your vehicle well to the left of the side road',
            },
            {
                char: 'c',
                text: 'Check that your vehicle will fit in the gap in the central reservation',
            },
            {
                char: 'd',
                text: 'Make sure that you leave enough room for a following vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2617',
        topicCode: 'road_procedure',
        question:
            'Trams can move both quietly and quickly. What other feature of trams should you be especially aware of?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They don`t have a horn',
            },
            {
                char: 'b',
                text: 'They can`t stop for cars',
            },
            {
                char: 'c',
                text: 'They don`t have lights',
            },
            {
                char: 'd',
                text: 'They can`t steer to avoid you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2618',
        topicCode: 'road_procedure',
        question: 'What does the term `blind spot` mean?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'An area covered by your right-hand mirror',
            },
            {
                char: 'b',
                text: 'An area not lit by your headlights',
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
        code: 'adi2620',
        topicCode: 'road_procedure',
        question:
            'In what conditions should you leave a two-second separation gap?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When conditions are wet',
            },
            {
                char: 'b',
                text: 'When conditions are good',
            },
            {
                char: 'c',
                text: 'When conditions are damp',
            },
            {
                char: 'd',
                text: 'When conditions are foggy',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2621',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a clear night, on a road where the national speed limit applies. Which lights should you use if there`s a steady stream of oncoming traffic?',
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
        code: 'adi2622',
        topicCode: 'road_procedure',
        question:
            'You`re driving behind a large goods vehicle. What should you do if it signals left but steers to the right?',
        questionImg: 'VL2003.png',
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
                text: 'Overtake it on the right',
            },
            {
                char: 'd',
                text: 'Hold your speed and sound your horn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2623',
        topicCode: 'road_procedure',
        question:
            'What should you do if an overtaking vehicle cuts in close in front of you?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Accelerate to get closer to the vehicle',
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
        code: 'adi2624',
        topicCode: 'road_procedure',
        question:
            'You`re waiting in a traffic queue at night. What should you do to avoid dazzling drivers behind?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Apply the parking brake only',
            },
            {
                char: 'b',
                text: 'Apply the footbrake only',
            },
            {
                char: 'c',
                text: 'Switch off your headlights',
            },
            {
                char: 'd',
                text: 'Use both the parking brake and footbrake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2625',
        topicCode: 'road_procedure',
        question:
            'You`re driving in traffic at the speed limit for the road. What should you do if the driver behind is trying to overtake?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move closer to the car ahead, so the driver behind has no room to overtake',
            },
            {
                char: 'b',
                text: 'Wave the driver behind to overtake when it`s safe',
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
        code: 'adi2626',
        topicCode: 'road_procedure',
        question:
            'You`re driving at night on an unlit road. What should you do if you`re following a slower-moving vehicle?',
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
        code: 'adi2628',
        topicCode: 'road_procedure',
        question:
            'You`re driving along a country road. What should you do if you see a horse and rider approaching?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Increase your speed',
            },
            {
                char: 'b',
                text: 'Sound your horn',
            },
            {
                char: 'c',
                text: 'Flash your headlights',
            },
            {
                char: 'd',
                text: 'Drive slowly past',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2629',
        topicCode: 'road_procedure',
        question:
            'What should you do if a person herding sheep asks you to stop?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Ignore them, as they have no authority',
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
        code: 'adi2630',
        topicCode: 'road_procedure',
        question: 'What should you do when you overtake a horse and rider?',
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
        code: 'adi2642',
        topicCode: 'road_procedure',
        question:
            'What should you do if you can`t see clearly behind when you`re reversing?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Open your window to look behind',
            },
            {
                char: 'b',
                text: 'Open the door and look behind',
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
        code: 'adi2645',
        topicCode: 'road_procedure',
        question:
            'You`re on a fast, open road in good conditions. How can you judge a safe distance from the vehicle in front?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow a two-second time gap',
            },
            {
                char: 'b',
                text: 'Allow one car length',
            },
            {
                char: 'c',
                text: 'Allow 2 metres (6 feet 6 inches)',
            },
            {
                char: 'd',
                text: 'Allow two car lengths',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2646',
        topicCode: 'road_procedure',
        question: 'What`s the most common cause of skidding?',
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
        code: 'adi2649',
        topicCode: 'road_procedure',
        question:
            'You`re driving in freezing conditions. What should you do when you approach a sharp bend?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Steer smoothly and gently',
            },
            {
                char: 'b',
                text: 'Gently apply your parking brake',
            },
            {
                char: 'c',
                text: 'Firmly use your footbrake',
            },
            {
                char: 'd',
                text: 'Coast into the bend',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2653',
        topicCode: 'road_procedure',
        question:
            'You`re starting a journey in freezing weather. What should you make sure is clear of snow and ice?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The aerial',
            },
            {
                char: 'b',
                text: 'The mirrors',
            },
            {
                char: 'c',
                text: 'The bumpers',
            },
            {
                char: 'd',
                text: 'The wheel trims',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2654',
        topicCode: 'road_procedure',
        question:
            'What should you do when you`re trying to move off on a snow-covered road?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the lowest gear you can',
            },
            {
                char: 'b',
                text: 'Use the highest gear you can',
            },
            {
                char: 'c',
                text: 'Use a high engine speed',
            },
            {
                char: 'd',
                text: 'Use the handbrake and footbrake together',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2655',
        topicCode: 'road_procedure',
        question: 'What should you do when you`re driving in falling snow?',
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
                text: 'Brake gently and in plenty of time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2659',
        topicCode: 'road_procedure',
        question: 'What should you do when you park facing downhill?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Turn the front wheels towards the kerb',
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
                text: 'Turn the front wheels away from the kerb',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2660',
        topicCode: 'road_procedure',
        question:
            'What should you do when you`re driving in a built-up area and you approach a speed hump?',
        questionImg: '85BW9960.png',
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
                text: 'Slow down',
            },
            {
                char: 'd',
                text: 'Stop and check both pavements',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2663',
        topicCode: 'road_procedure',
        question:
            'You`re driving along a motorway in heavy rain. What should you be aware of if you see several lorries ahead?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keeping a two-second gap',
            },
            {
                char: 'b',
                text: 'Objects falling from the lorries',
            },
            {
                char: 'c',
                text: 'The lorries will block your view of road signs',
            },
            {
                char: 'd',
                text: 'Spray thrown up by the lorries can reduce your vision',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2664',
        topicCode: 'road_procedure',
        question:
            'You`re driving towards a left-hand bend on a country road. What should you anticipate if there are no pavements?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Adverse camber',
            },
            {
                char: 'b',
                text: 'No white lines showing the edge of the road',
            },
            {
                char: 'c',
                text: 'No bend marker posts',
            },
            {
                char: 'd',
                text: 'Pedestrians walking in the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2675',
        topicCode: 'road_procedure',
        question: 'What should you do if you feel drowsy while you`re driving?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop and get some rest as soon as possible',
            },
            {
                char: 'b',
                text: 'Turn the heater up to keep yourself warm and comfortable',
            },
            {
                char: 'c',
                text: 'Close the car windows to help you concentrate',
            },
            {
                char: 'd',
                text: 'Continue with your journey, but drive more slowly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2679',
        topicCode: 'road_procedure',
        question:
            'What should you do if your motorway journey seems boring and you start to feel drowsy?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Open a window and drive to the next exit',
            },
            {
                char: 'b',
                text: 'Stop on the hard shoulder for a sleep',
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
        code: 'adi2680',
        topicCode: 'road_procedure',
        question:
            'You want to reverse into a side road. What should you do if you`re not sure whether the area behind your car is clear?',
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
                text: 'Carry on, assuming it`s clear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2682',
        topicCode: 'road_procedure',
        question:
            'You`re reversing your car. Which road user will be especially hard to see?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A motorcyclist',
            },
            {
                char: 'b',
                text: 'A car driver',
            },
            {
                char: 'c',
                text: 'A cyclist',
            },
            {
                char: 'd',
                text: 'A child',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2683',
        topicCode: 'road_procedure',
        question:
            'You`re reversing into a side road. What should you do if you see a pedestrian crossing the road behind your vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Slow down and direct the pedestrian to cross quickly',
            },
            {
                char: 'b',
                text: 'Continue reversing and steer round the pedestrian',
            },
            {
                char: 'c',
                text: 'Stop and give way',
            },
            {
                char: 'd',
                text: 'Continue reversing and sound your horn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2684',
        topicCode: 'road_procedure',
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
                text: 'Sound your horn and pull out if there`s no reply',
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
        code: 'adi2685',
        topicCode: 'road_procedure',
        question:
            'You`re at the front of a queue of traffic waiting to turn right into a side road. Why is it important to check your offside mirror just before turning?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To look for pedestrians about to cross',
            },
            {
                char: 'b',
                text: 'To check for emerging traffic',
            },
            {
                char: 'c',
                text: 'To make sure the side road is clear',
            },
            {
                char: 'd',
                text: 'To check for overtaking vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2689',
        topicCode: 'road_procedure',
        question:
            'What should you do if you`re driving past parked cars and you notice a bicycle wheel sticking out between the cars?',
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
                text: 'Slow down and be prepared to stop for the cyclist',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2690',
        topicCode: 'road_procedure',
        question:
            'You`re driving past a line of parked cars. What should you do if a ball suddenly bounces out into the road ahead?',
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
                text: 'Slow down and be prepared to stop',
            },
            {
                char: 'd',
                text: 'Stop and move the ball onto the pavement',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2691',
        topicCode: 'road_procedure',
        question:
            'What should you do just before turning right from a main road into a side road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Cancel your right turn signal',
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
                text: 'Stop and apply the parking brake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2692',
        topicCode: 'road_procedure',
        question:
            'You`re driving in slow-moving queues of traffic. What should you do just before you change lane?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sound the horn',
            },
            {
                char: 'b',
                text: 'Change down to first gear',
            },
            {
                char: 'c',
                text: 'Give a `slowing down` arm signal',
            },
            {
                char: 'd',
                text: 'Look for motorcyclists filtering through the traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2693',
        topicCode: 'road_procedure',
        question:
            'You`re driving in town. Why should you be careful if there`s a bus at a bus stop on the other side of the road?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The bus may have broken down',
            },
            {
                char: 'b',
                text: 'Pedestrians may step out from behind the bus',
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
        code: 'adi2696',
        topicCode: 'road_procedure',
        question:
            'You`re driving at night. What should you do if the headlights of a following vehicle are causing dazzle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Set your mirror to anti-dazzle',
            },
            {
                char: 'b',
                text: 'Adjust your mirror to dazzle the other driver',
            },
            {
                char: 'c',
                text: 'Brake sharply to a stop',
            },
            {
                char: 'd',
                text: 'Switch your high-intensity rear fog lights on and off',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2697',
        topicCode: 'road_procedure',
        question:
            'It`s very windy. What should you do if you`re behind a motorcyclist who`s overtaking a high-sided vehicle?',
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
        code: 'adi2698',
        topicCode: 'road_procedure',
        question:
            'What should you do when it`s windy and you overtake a motorcyclist?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake slowly',
            },
            {
                char: 'b',
                text: 'Pass close to shield the rider',
            },
            {
                char: 'c',
                text: 'Sound your horn',
            },
            {
                char: 'd',
                text: 'Allow extra room',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2703',
        topicCode: 'road_procedure',
        question:
            'You`re driving on the motorway in windy conditions. What should you do when you`re passing high-sided vehicles?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Increase your speed',
            },
            {
                char: 'b',
                text: 'Expect normal conditions',
            },
            {
                char: 'c',
                text: 'Drive along the left-hand edge of your lane',
            },
            {
                char: 'd',
                text: 'Prepare for a sudden gust as you pass',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2709',
        topicCode: 'road_procedure',
        question:
            'Which lights should you use if you have to park on the road in fog?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Parking lights',
            },
            {
                char: 'b',
                text: 'Dipped headlights and fog lights',
            },
            {
                char: 'c',
                text: 'Dipped headlights',
            },
            {
                char: 'd',
                text: 'Main-beam headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2710',
        topicCode: 'road_procedure',
        question:
            'It`s a foggy day. What should you do if you have to park your car on the road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Leave the car`s headlights on',
            },
            {
                char: 'b',
                text: 'Leave the car`s fog lights on',
            },
            {
                char: 'c',
                text: 'Leave the car`s parking lights on',
            },
            {
                char: 'd',
                text: 'Leave the car`s hazard warning lights on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2711',
        topicCode: 'road_procedure',
        question:
            'You`re driving at night. What should you do if you`re dazzled by headlights coming towards you?',
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
                text: 'Switch on your main-beam headlights',
            },
            {
                char: 'd',
                text: 'Keep driving as you were',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2714',
        topicCode: 'road_procedure',
        question: 'When should drivers use the left-hand lane of a motorway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'For breakdowns and emergencies only',
            },
            {
                char: 'b',
                text: 'For overtaking slower traffic in the other lanes',
            },
            {
                char: 'c',
                text: 'For driving slowly',
            },
            {
                char: 'd',
                text: 'For normal driving',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2715',
        topicCode: 'road_procedure',
        question:
            'You`re driving along the motorway. What should you do if you have to slow down due to a hazard ahead?',
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
        code: 'adi2716',
        topicCode: 'road_procedure',
        question:
            'Your vehicle gets a puncture while you`re driving on the motorway. What should you do when you`ve stopped safely on the hard shoulder or in an emergency refuge area?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Change the wheel yourself',
            },
            {
                char: 'b',
                text: 'Use the emergency telephone to call for assistance',
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
        code: 'adi2717',
        topicCode: 'road_procedure',
        question:
            'What should you do when you`re driving on a motorway and you miss the exit that you wanted to take?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Carefully reverse on the hard shoulder',
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
        code: 'adi2718',
        topicCode: 'road_procedure',
        question: 'When may you drive over a footpath?',
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
                text: 'If no pedestrians are near',
            },
            {
                char: 'd',
                text: 'To get into a property',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2723',
        topicCode: 'road_procedure',
        question:
            'You intend to turn left into a minor road. What should you do as you approach the junction?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep just left of the middle of the road',
            },
            {
                char: 'b',
                text: 'Position in the middle of the road',
            },
            {
                char: 'c',
                text: 'Swing out wide just before turning',
            },
            {
                char: 'd',
                text: 'Stay in your normal driving position',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2726',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a busy main road. What should you do if you find that you`re travelling in the wrong direction?',
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
                text: 'Drive on to the next mini-roundabout and make a U-turn',
            },
            {
                char: 'd',
                text: 'Turn around in a side road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2728',
        topicCode: 'road_procedure',
        question:
            'You`re parked in a busy high street. What`s the safest way to turn your vehicle around?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Find a quiet side road where you can turn around',
            },
            {
                char: 'b',
                text: 'Drive into a side road and reverse out onto the main road',
            },
            {
                char: 'c',
                text: 'Get someone to stop the traffic',
            },
            {
                char: 'd',
                text: 'Make a U-turn on the main road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2729',
        topicCode: 'road_procedure',
        question:
            'What should you do if you`re not sure that it`s safe to reverse your vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Use your horn',
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
        code: 'adi2730',
        topicCode: 'road_procedure',
        question:
            'What advice should you give to a pupil about parking in a driveway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only use the driveway if the road is clear of traffic',
            },
            {
                char: 'b',
                text: 'Drive forwards into the driveway, so that you can reverse onto the road',
            },
            {
                char: 'c',
                text: 'Don`t reverse into a driveway after dark',
            },
            {
                char: 'd',
                text: 'Reverse into the driveway, so that you can drive forwards onto the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2732',
        topicCode: 'road_procedure',
        question:
            'You`re waiting at a T-junction. What should you do if you see a vehicle coming from the right with its left indicator flashing?',
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
        code: 'adi2739',
        topicCode: 'road_procedure',
        question:
            'What`s the first thing you should do if your vehicle has broken down on an automatic railway level crossing?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Get everyone out of the vehicle and clear of the crossing',
            },
            {
                char: 'b',
                text: 'Phone the signal operator so that trains can be stopped',
            },
            {
                char: 'c',
                text: 'Walk along the track to give warning to any approaching trains',
            },
            {
                char: 'd',
                text: 'Try to push the vehicle clear of the crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2754',
        topicCode: 'road_procedure',
        question:
            'Your vehicle is broken down on the hard shoulder of a motorway. What should you do if you decide to use your mobile phone to call for help?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stand at the rear of the vehicle while making the call',
            },
            {
                char: 'b',
                text: 'Have your insurance policy number to hand',
            },
            {
                char: 'c',
                text: 'Get out of the driver`s seat before making the call',
            },
            {
                char: 'd',
                text: 'Check your location from the marker posts on the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2782',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a foggy night. Why should you switch off your rear fog lights as the fog clears?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To avoid being distracted by the instrument warning light',
            },
            {
                char: 'b',
                text: 'To make the bulbs last longer',
            },
            {
                char: 'c',
                text: 'To improve your view of the road ahead',
            },
            {
                char: 'd',
                text: 'To avoid dazzling drivers behind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2787',
        topicCode: 'road_procedure',
        question:
            'What could happen if you use front fog lights in clear daytime conditions?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You could use less fuel',
            },
            {
                char: 'b',
                text: 'You could reduce your journey time',
            },
            {
                char: 'c',
                text: 'You could save money on your insurance',
            },
            {
                char: 'd',
                text: 'You could dazzle approaching drivers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2788',
        topicCode: 'road_procedure',
        question: 'What should you do when you`re driving in foggy weather?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Use sidelights only',
            },
            {
                char: 'b',
                text: 'Use headlights on full beam',
            },
            {
                char: 'c',
                text: 'Allow more time for your journey',
            },
            {
                char: 'd',
                text: 'Keep close to the car in front',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2790',
        topicCode: 'road_procedure',
        question:
            'You`re driving in falling snow. What should you do if your wipers aren`t clearing the windscreen?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Set the windscreen demister to cool',
            },
            {
                char: 'b',
                text: 'Be prepared to clear the windscreen by hand',
            },
            {
                char: 'c',
                text: 'Use the windscreen washers',
            },
            {
                char: 'd',
                text: 'Partly open the front windows',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2791',
        topicCode: 'road_procedure',
        question:
            'What should you do if you take a wrong turning that leads you into a one-way street?',
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
                text: 'Continue to the end of the road',
            },
            {
                char: 'd',
                text: 'Reverse into a driveway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2794',
        topicCode: 'road_procedure',
        question:
            'You`ve stalled in the middle of a level crossing and can`t restart the engine. What should you do if the warning bell starts to ring?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Get out and clear of the crossing',
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
        code: 'adi2804',
        topicCode: 'road_procedure',
        question:
            'You`re reversing your car into a side road. When will it present the greatest obstruction to passing traffic?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'After you`ve completed the manoeuvre',
            },
            {
                char: 'b',
                text: 'Just before you actually begin to manoeuvre',
            },
            {
                char: 'c',
                text: 'After you`ve entered the side road',
            },
            {
                char: 'd',
                text: 'When the front of the car swings out',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2805',
        topicCode: 'road_procedure',
        question:
            'What should you do when you`re moving off from behind a parked car?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Look around before you move off',
            },
            {
                char: 'b',
                text: 'Give a signal after moving off',
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
        code: 'adi2809',
        topicCode: 'road_procedure',
        question: 'How should you drive when the roads are icy?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Slowly, and in the highest gear possible',
            },
            {
                char: 'b',
                text: 'Slowly, and in the lowest gear possible',
            },
            {
                char: 'c',
                text: 'Slowly, and with the parking brake partly on',
            },
            {
                char: 'd',
                text: 'Slowly, and with your left foot on the brake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2811',
        topicCode: 'road_procedure',
        question:
            'You`re driving along a residential road. What should you do if a car is reversing into your path from a driveway on your left?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move to the opposite side of the road',
            },
            {
                char: 'b',
                text: 'Drive on, as you have priority',
            },
            {
                char: 'c',
                text: 'Sound your horn and be prepared to stop',
            },
            {
                char: 'd',
                text: 'Speed up and drive past quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2813',
        topicCode: 'road_procedure',
        question:
            'You`re driving along a two-way road. What should you be prepared to do if an articulated lorry starts to emerge from a junction on your right?',
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
        code: 'adi2831',
        topicCode: 'road_procedure',
        question:
            'What would you expect to find at a motorway contraflow system?',
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
                text: 'Speed humps',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2832',
        topicCode: 'road_procedure',
        question:
            'What should you do if you start to feel tired while you`re driving?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Increase your speed slightly',
            },
            {
                char: 'b',
                text: 'Reduce your speed slightly',
            },
            {
                char: 'c',
                text: 'Find a less busy route',
            },
            {
                char: 'd',
                text: 'Stop at a safe place to rest',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2836',
        topicCode: 'road_procedure',
        question:
            'What should you do if a driver pulls out of a junction, causing you to take avoiding action?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Swerve past the vehicle and sound your horn',
            },
            {
                char: 'b',
                text: 'Drive up close behind the vehicle and flash your headlights',
            },
            {
                char: 'c',
                text: 'Slow down and be ready to stop',
            },
            {
                char: 'd',
                text: 'Accelerate and overtake immediately',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2837',
        topicCode: 'road_procedure',
        question:
            'You stop for pedestrians waiting to cross at a zebra crossing. What should you do if they don`t start to cross promptly?',
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
                text: 'Carry on',
            },
            {
                char: 'd',
                text: 'Wave them to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2839',
        topicCode: 'road_procedure',
        question: 'When will your overall stopping distance be increased?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you`re driving in the rain',
            },
            {
                char: 'b',
                text: 'When you`re driving uphill',
            },
            {
                char: 'c',
                text: 'When you`re driving at night',
            },
            {
                char: 'd',
                text: 'When you`re driving in strong winds',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2841',
        topicCode: 'road_procedure',
        question:
            'What should you do if you`ve just been overtaken by a motorcyclist who cuts back in front of you?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Sound the horn',
            },
            {
                char: 'b',
                text: 'Maintain your speed',
            },
            {
                char: 'c',
                text: 'Open up a safe gap',
            },
            {
                char: 'd',
                text: 'Flash your headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2845',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a main road. You intend to turn right into a side road. What should you do just before turning?',
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
                text: 'Check for overtaking traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2846',
        topicCode: 'road_procedure',
        question:
            'Which lights should you use if you`re on a wet motorway where there`s surface spray?',
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
        code: 'adi2847',
        topicCode: 'road_procedure',
        question:
            'You`re driving on an icy road. What distance should you drive from the car in front?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Four times the distance you would leave in good conditions',
            },
            {
                char: 'b',
                text: 'Six times the distance you would leave in good conditions',
            },
            {
                char: 'c',
                text: 'Eight times the distance you would leave in good conditions',
            },
            {
                char: 'd',
                text: 'Ten times the distance you would leave in good conditions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2848',
        topicCode: 'road_procedure',
        question:
            'Your vehicle has broken down on a smart motorway. What should you do if you can`t get it into an emergency refuge area?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch on your hazard warning lights',
            },
            {
                char: 'b',
                text: 'Stop traffic behind and ask for help',
            },
            {
                char: 'c',
                text: 'Try to repair your vehicle quickly',
            },
            {
                char: 'd',
                text: 'Stand behind your vehicle to warn others',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2860',
        topicCode: 'road_procedure',
        question:
            'Why should you allow extra room when you`re overtaking a motorcyclist on a windy day?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They may turn off suddenly to get out of the wind',
            },
            {
                char: 'b',
                text: 'They may be travelling faster than normal',
            },
            {
                char: 'c',
                text: 'They may have to stop suddenly',
            },
            {
                char: 'd',
                text: 'They may be blown across in front of you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2862',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a motorway at night. When can you switch off your headlights?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When there are vehicles close in front of you',
            },
            {
                char: 'b',
                text: 'When you`re travelling below 50 mph',
            },
            {
                char: 'c',
                text: 'When the motorway is lit',
            },
            {
                char: 'd',
                text: 'When your vehicle is broken down on the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2864',
        topicCode: 'road_procedure',
        question: 'What should the right-hand lane of a motorway be used for?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keeping out of the way of lorries',
            },
            {
                char: 'b',
                text: 'Driving at more than 70 mph',
            },
            {
                char: 'c',
                text: 'Turning right',
            },
            {
                char: 'd',
                text: 'Overtaking other vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2867',
        topicCode: 'road_procedure',
        question:
            'You want to leave the motorway at the next exit. Where should you position your vehicle as you approach the exit?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In the middle lane',
            },
            {
                char: 'b',
                text: 'In the left-hand lane',
            },
            {
                char: 'c',
                text: 'On the hard shoulder',
            },
            {
                char: 'd',
                text: 'In any lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2882',
        topicCode: 'road_procedure',
        question:
            'You`re on a road that`s only wide enough for one vehicle. What should you do if there`s a car coming towards you?',
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
        code: 'adi2886',
        topicCode: 'road_procedure',
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
        code: 'adi2887',
        topicCode: 'road_procedure',
        question:
            'You`re driving at night with your headlights on main beam. A vehicle overtakes you. When should you dip your headlights?',
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
                text: 'When the other driver dips their headlights',
            },
            {
                char: 'd',
                text: 'As soon as the vehicle passes you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2888',
        topicCode: 'road_procedure',
        question:
            'What should you do if you`re about to start a journey and you notice it`s snowing heavily?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only drive if you have experience of driving in snow',
            },
            {
                char: 'b',
                text: 'Only drive if you have a mobile phone',
            },
            {
                char: 'c',
                text: 'Only drive if your journey is short',
            },
            {
                char: 'd',
                text: 'Only drive if it`s essential',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2892',
        topicCode: 'road_procedure',
        question:
            'What`s the first thing you should do if your car breaks down on a half-barrier level crossing?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Push the car clear of the crossing',
            },
            {
                char: 'b',
                text: 'Telephone the signal operator',
            },
            {
                char: 'c',
                text: 'Wait to be towed off the crossing',
            },
            {
                char: 'd',
                text: 'Get everyone out of the car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2906',
        topicCode: 'road_procedure',
        question:
            'What advice should you give your pupils about turning right around to check blind spots while they`re driving?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It`s always necessary when you`re about to change lanes',
            },
            {
                char: 'b',
                text: 'Always do it when you`re driving at high speeds',
            },
            {
                char: 'c',
                text: 'Do it regularly when you`re driving in heavy traffic',
            },
            {
                char: 'd',
                text: 'It`s unnecessary and potentially dangerous',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2910',
        topicCode: 'road_procedure',
        question:
            'You`re planning to turn right onto a major road at a Y-junction. Where should you position your vehicle in order to improve your view?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Just left of the centre line on the minor road',
            },
            {
                char: 'b',
                text: 'Close to the left-hand side of the minor road',
            },
            {
                char: 'c',
                text: 'Parallel to the centre line on the minor road',
            },
            {
                char: 'd',
                text: 'At a right angle to the stop or `give way` lines',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2941',
        topicCode: 'road_procedure',
        question:
            'What should you do when you drive through roadworks on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Speed up to clear the area quickly',
            },
            {
                char: 'b',
                text: 'Use the hard shoulder',
            },
            {
                char: 'c',
                text: 'Obey reduced speed limits',
            },
            {
                char: 'd',
                text: 'Stay very close to the vehicle in front',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2969',
        topicCode: 'road_procedure',
        question:
            'You`re driving in heavy motorway traffic. What should you do if you`re being followed too closely by the vehicle behind?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Increase your distance from the vehicle in front',
            },
            {
                char: 'b',
                text: 'Tap your foot on the brake pedal sharply',
            },
            {
                char: 'c',
                text: 'Switch on your hazard warning lights',
            },
            {
                char: 'd',
                text: 'Move onto the hard shoulder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2970',
        topicCode: 'road_procedure',
        question:
            'How should you signal when you`re going ahead at a roundabout and taking the second exit?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Indicate left just after you`ve passed the first exit',
            },
            {
                char: 'b',
                text: 'Don`t indicate at any time',
            },
            {
                char: 'c',
                text: 'Indicate right when you`re approaching the roundabout',
            },
            {
                char: 'd',
                text: 'Indicate left when you`re approaching the roundabout',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2973',
        topicCode: 'road_procedure',
        question:
            'You come to an obstruction on your side of a narrow road. What should you do if there`s oncoming traffic?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Carry on; the oncoming drivers can always make room',
            },
            {
                char: 'b',
                text: 'Drive around the obstruction, flashing your headlights as a warning',
            },
            {
                char: 'c',
                text: 'Wave oncoming vehicles through',
            },
            {
                char: 'd',
                text: 'Wait until there`s a chance to drive safely around the obstruction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2974',
        topicCode: 'road_procedure',
        question:
            'You`re on a two-lane dual carriageway. When would you use the right-hand lane?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When overtaking slower traffic',
            },
            {
                char: 'b',
                text: 'When making normal progress',
            },
            {
                char: 'c',
                text: 'When driving at the minimum allowed speed',
            },
            {
                char: 'd',
                text: 'When driving at a constant high speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2976',
        topicCode: 'road_procedure',
        question:
            'You`re following other vehicles in fog and you have your dipped headlights switched on. How else can you reduce the risk of being involved in a collision?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep close to the vehicle in front and use their lights to guide you',
            },
            {
                char: 'b',
                text: 'Use your main beam instead of dipped beam',
            },
            {
                char: 'c',
                text: 'Speed up to get away from vehicles behind',
            },
            {
                char: 'd',
                text: 'Reduce your speed and keep a safe distance from the vehicle in front',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2977',
        topicCode: 'road_procedure',
        question:
            'A pupil asks about driving a right-hand-drive car in a European country where they drive on the right. What should your advice include?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Make full use of the mirrors',
            },
            {
                char: 'b',
                text: 'Give signals earlier',
            },
            {
                char: 'c',
                text: 'Keep closer to the kerb than normal',
            },
            {
                char: 'd',
                text: 'Keep further to the left than normal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2979',
        topicCode: 'road_procedure',
        question:
            'You`re driving at night on a road that has no street lighting. Which lights must you use?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Front spotlights',
            },
            {
                char: 'b',
                text: 'Sidelights only',
            },
            {
                char: 'c',
                text: 'Headlights',
            },
            {
                char: 'd',
                text: 'Fog lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2980',
        topicCode: 'road_procedure',
        question:
            'Where is it too dangerous to use a breakdown warning triangle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On a dual carriageway',
            },
            {
                char: 'b',
                text: 'On a single-track road',
            },
            {
                char: 'c',
                text: 'On a motorway',
            },
            {
                char: 'd',
                text: 'On a one-way street',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2982',
        topicCode: 'road_procedure',
        question:
            'You`re driving in heavy traffic. What should you do if a vehicle is following very closely?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Brake to warn the vehicle behind to slow down',
            },
            {
                char: 'b',
                text: 'Gradually increase the distance between your vehicle and the one in front',
            },
            {
                char: 'c',
                text: 'Continue at the same speed and ignore the vehicle behind',
            },
            {
                char: 'd',
                text: 'Move closer to the vehicle in front, to leave more space for the vehicle behind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2984',
        topicCode: 'road_procedure',
        question:
            'Your vehicle breaks down while you`re driving on a two-way road. What`s the minimum distance behind your vehicle you should place a warning triangle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '25 metres (82 feet)',
            },
            {
                char: 'b',
                text: '45 metres (147 feet)',
            },
            {
                char: 'c',
                text: '90 metres (294 feet)',
            },
            {
                char: 'd',
                text: '125 metres (408 feet)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2986',
        topicCode: 'road_procedure',
        question:
            'You`re driving a vehicle towing a trailer on a three-lane motorway. When can you use the right-hand lane?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When there are lane closures',
            },
            {
                char: 'b',
                text: 'When there`s slow-moving traffic',
            },
            {
                char: 'c',
                text: 'When you want to maintain a high speed',
            },
            {
                char: 'd',
                text: 'When slower vehicles are in the left and centre lanes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2987',
        topicCode: 'road_procedure',
        question: 'When may you drive without wearing your seat belt?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you`re carrying out a manoeuvre that involves reversing',
            },
            {
                char: 'b',
                text: 'When you`re starting off uphill',
            },
            {
                char: 'c',
                text: 'When you`re in slow queuing traffic',
            },
            {
                char: 'd',
                text: 'When you`re making a journey of less than 1 mile',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2988',
        topicCode: 'road_procedure',
        question:
            'You`re driving down a steep hill on a two-way road. A car is parked ahead on the other side of the road. What should you do if a lorry coming uphill is going to arrive at the parked car at the same time as you?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Keep going, because you have the priority',
            },
            {
                char: 'b',
                text: 'Consider slowing down and giving way',
            },
            {
                char: 'c',
                text: 'Speed up and get past quickly',
            },
            {
                char: 'd',
                text: 'Pull over on the right behind the parked car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2989',
        topicCode: 'road_procedure',
        question:
            'You`re following a large vehicle around a slight left-hand bend. How would you get the best view of the road ahead?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'By keeping out towards the centre of the road',
            },
            {
                char: 'b',
                text: 'By keeping well over to the left-hand side of the road',
            },
            {
                char: 'c',
                text: 'By keeping well back from the vehicle',
            },
            {
                char: 'd',
                text: 'By keeping close to the rear of the vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3031',
        topicCode: 'road_procedure',
        question:
            'There`s been a crash and a motorcyclist is lying injured and unconscious. What`s the main reason you should leave their helmet in place?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They may not want it removed',
            },
            {
                char: 'b',
                text: 'Removing it could cause a more serious injury',
            },
            {
                char: 'c',
                text: 'They`ll lose body heat if you remove their helmet',
            },
            {
                char: 'd',
                text: 'You`ll damage the helmet if you remove it incorrectly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3038',
        topicCode: 'road_procedure',
        question:
            'Your vehicle breaks down on a very narrow road. Where should you place a red warning triangle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Behind the vehicle, on the offside of the road',
            },
            {
                char: 'b',
                text: 'In front of the vehicle, in the middle of the road',
            },
            {
                char: 'c',
                text: 'Behind the vehicle, on the nearside verge or footpath',
            },
            {
                char: 'd',
                text: 'In front of the vehicle, on the offside verge or footpath',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3040',
        topicCode: 'road_procedure',
        question:
            'You want to turn right onto a dual carriageway. What should you do if the central reservation is too small for your vehicle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When it`s safe, move to the centre of the road and wait',
            },
            {
                char: 'b',
                text: 'Wait until the road is clear in both directions',
            },
            {
                char: 'c',
                text: 'Stop in the first lane, so that other vehicles give way',
            },
            {
                char: 'd',
                text: 'Emerge slightly to show your intentions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3043',
        topicCode: 'road_procedure',
        question:
            'What should you do if an injured motorcyclist is lying unconscious in the road?',
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
        code: 'adi3046',
        topicCode: 'road_procedure',
        question:
            'What should you do if you feel drowsy while you`re driving on a motorway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder for a sleep',
            },
            {
                char: 'b',
                text: 'Speed up to arrive at your destination sooner',
            },
            {
                char: 'c',
                text: 'Slow down and let other drivers overtake',
            },
            {
                char: 'd',
                text: 'Leave the motorway and find a safe place to park',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3047',
        topicCode: 'road_procedure',
        question: 'How can you help prevent your car radio from being stolen?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Park in an unlit area',
            },
            {
                char: 'b',
                text: 'Hide it with a blanket',
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
        code: 'adi3048',
        topicCode: 'road_procedure',
        question:
            'What should you do when you`re approaching an unmarked crossroads?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Maintain a steady speed',
            },
            {
                char: 'b',
                text: 'Give priority to the right',
            },
            {
                char: 'c',
                text: 'Give priority to the left',
            },
            {
                char: 'd',
                text: 'Never assume priority',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3052',
        topicCode: 'road_procedure',
        question: 'Why are destination markings painted on the road?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To restrict the flow of traffic',
            },
            {
                char: 'b',
                text: 'To warn you of oncoming traffic',
            },
            {
                char: 'c',
                text: 'To prevent you from changing lanes',
            },
            {
                char: 'd',
                text: 'To guide you into the correct lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3056',
        topicCode: 'road_procedure',
        question: 'Why are hatch markings painted in the centre of the road?',
        questionImg: '85BW6768.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To make space for emergency vehicles',
            },
            {
                char: 'b',
                text: 'To mark an area to be used by overtaking motorcyclists',
            },
            {
                char: 'c',
                text: 'To warn of a lower speed limit ahead',
            },
            {
                char: 'd',
                text: 'To separate traffic flowing in opposite directions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3057',
        topicCode: 'road_procedure',
        question:
            'A road-incident casualty has an injured arm that`s bleeding but not broken. Why should the arm be kept in a raised position?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It helps to ease the pain',
            },
            {
                char: 'b',
                text: 'It helps them to be seen more easily',
            },
            {
                char: 'c',
                text: 'It helps them to breathe more easily',
            },
            {
                char: 'd',
                text: 'It helps to reduce the bleeding',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3085',
        topicCode: 'road_procedure',
        question:
            'What does it mean when an area of road is painted with white diagonal stripes and surrounded by a broken white line?',
        questionImg: '85BW6768.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The area should be used to create an extra lane when traffic is very heavy',
            },
            {
                char: 'b',
                text: 'Never enter the area until the broken lines become continuous',
            },
            {
                char: 'c',
                text: 'Don`t enter the area unless it`s necessary and you can see it`s safe',
            },
            {
                char: 'd',
                text: 'The area should be used to overtake vehicles that are turning left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3086',
        topicCode: 'road_procedure',
        question:
            'What should you check when you`re leaving a motorway after driving at speed for some time?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The time',
            },
            {
                char: 'b',
                text: 'The engine temperature',
            },
            {
                char: 'c',
                text: 'The brakes',
            },
            {
                char: 'd',
                text: 'The speedometer',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3091',
        topicCode: 'road_procedure',
        question: 'What can cause the most harm to the environment?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Choosing an expensive vehicle',
            },
            {
                char: 'b',
                text: 'Making a lot of short journeys',
            },
            {
                char: 'c',
                text: 'Driving in the highest gear possible',
            },
            {
                char: 'd',
                text: 'Having your vehicle serviced regularly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3092',
        topicCode: 'road_procedure',
        question:
            'When should you hold back and not attempt to overtake a cyclist?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Just before turning left',
            },
            {
                char: 'b',
                text: 'Just after changing gear',
            },
            {
                char: 'c',
                text: 'On a one-way street',
            },
            {
                char: 'd',
                text: 'On a dual carriageway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3099',
        topicCode: 'road_procedure',
        question:
            'Where should your headlight beam fall when you`re following another vehicle at night?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Beyond the vehicle in front',
            },
            {
                char: 'b',
                text: '100 metres (328 feet) ahead',
            },
            {
                char: 'c',
                text: 'Short of the rear of the vehicle in front',
            },
            {
                char: 'd',
                text: 'As far as the next bend or junction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3101',
        topicCode: 'road_procedure',
        question: 'What should you do before you make a U-turn in the road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Give an arm signal as well as using your indicators',
            },
            {
                char: 'b',
                text: 'Signal so that other drivers can slow down for you',
            },
            {
                char: 'c',
                text: 'Check all around for any possible hazards',
            },
            {
                char: 'd',
                text: 'Select a higher gear than normal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3104',
        topicCode: 'road_procedure',
        question:
            'Why should you keep well back before overtaking a large vehicle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To enable you to overtake quickly on blind bends',
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
        code: 'adi3105',
        topicCode: 'road_procedure',
        question:
            'You`re following a lorry on a wet road. What should you do if spray makes it difficult to see?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drop back until visibility improves',
            },
            {
                char: 'b',
                text: 'Switch your headlights to full beam',
            },
            {
                char: 'c',
                text: 'Overtake quickly, keeping very close',
            },
            {
                char: 'd',
                text: 'Position just over the centre line of the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3106',
        topicCode: 'road_procedure',
        question:
            'You`re driving in very heavy rain. How will your overall stopping distance be affected?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It will be at least double the dry-weather stopping distance',
            },
            {
                char: 'b',
                text: 'It will be half the dry-weather stopping distance',
            },
            {
                char: 'c',
                text: 'It will be up to ten times the dry-weather stopping distance',
            },
            {
                char: 'd',
                text: 'It will have no effect on the overall stopping distance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3107',
        topicCode: 'road_procedure',
        question:
            'You`re on a smart motorway where the active traffic management (ATM) isn`t in operation. When should you use the hard shoulder?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To stop in an emergency',
            },
            {
                char: 'b',
                text: 'To leave the motorway',
            },
            {
                char: 'c',
                text: 'To stop when you`re tired',
            },
            {
                char: 'd',
                text: 'To join the motorway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3108',
        topicCode: 'road_procedure',
        question:
            'You`re driving up to a roundabout. What signal should you give if you`re going ahead and taking the second exit?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Right on approach and then left to leave the roundabout',
            },
            {
                char: 'b',
                text: 'No signal as you enter and right to leave the roundabout',
            },
            {
                char: 'c',
                text: 'Left on approach and keep the signal on to leave the roundabout',
            },
            {
                char: 'd',
                text: 'No signal as you enter and left after you pass the first exit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3109',
        topicCode: 'road_procedure',
        question: 'How should you overtake a horse and rider?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drive up close behind, then pull out slowly',
            },
            {
                char: 'b',
                text: 'Pull out wide while revving the engine',
            },
            {
                char: 'c',
                text: 'Sound your horn once to warn them you`re approaching',
            },
            {
                char: 'd',
                text: 'Pass them slowly, leaving plenty of room',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3113',
        topicCode: 'road_procedure',
        question:
            'A crash has just happened. A casualty is lying in the busy road. What`s the first thing you should do to help?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Treat the casualty for shock',
            },
            {
                char: 'b',
                text: 'Warn other traffic',
            },
            {
                char: 'c',
                text: 'Place the casualty in the recovery position',
            },
            {
                char: 'd',
                text: 'Make sure the casualty is kept warm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3114',
        topicCode: 'road_procedure',
        question:
            'You arrive at the scene of a motorcycle crash. The rider is injured. When would you remove the rider`s helmet?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When it`s essential',
            },
            {
                char: 'b',
                text: 'Straight away',
            },
            {
                char: 'c',
                text: 'When the rider asks you to',
            },
            {
                char: 'd',
                text: 'Before you move the rider',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3115',
        topicCode: 'road_procedure',
        question:
            'You arrive at a serious motorcycle crash. The scene has been made safe. What`s the first thing you should check on an unconscious rider?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Whether they`re comfortable',
            },
            {
                char: 'b',
                text: 'Whether they have any broken bones',
            },
            {
                char: 'c',
                text: 'Whether they`re breathing',
            },
            {
                char: 'd',
                text: 'Whether they`re bleeding',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3117',
        topicCode: 'road_procedure',
        question:
            'At an incident, a casualty has stopped breathing. What should you do to help them?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Ensure their airway is clear and kept open',
            },
            {
                char: 'b',
                text: 'Keep their head tilted forwards as far as possible',
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
        code: 'adi3119',
        topicCode: 'road_procedure',
        question:
            'There`s been a crash. What should you do to help a driver who`s suffering from shock?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Give them a drink',
            },
            {
                char: 'b',
                text: 'Ask who caused the incident',
            },
            {
                char: 'c',
                text: 'Reassure them confidently',
            },
            {
                char: 'd',
                text: 'Offer them a cigarette',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3120',
        topicCode: 'road_procedure',
        question:
            'What should you do if you have to treat someone for shock at the scene of a collision?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Reassure them confidently',
            },
            {
                char: 'b',
                text: 'Walk them around to calm them down',
            },
            {
                char: 'c',
                text: 'Give them something cold to drink',
            },
            {
                char: 'd',
                text: 'Cool them down as soon as possible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3121',
        topicCode: 'road_procedure',
        question:
            'You`re the first person to arrive at the scene of a motorcycle crash. No other vehicle is involved. The rider is unconscious and lying in the middle of the road. What should you do first?',
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
        code: 'adi3123',
        topicCode: 'road_procedure',
        question:
            'A casualty has stopped breathing and you`ve started giving them chest compressions. How long should you continue trying to resuscitate them?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Until someone has called the emergency services',
            },
            {
                char: 'b',
                text: 'Until they can breathe unaided or until medical help arrives',
            },
            {
                char: 'c',
                text: 'Until you feel there`s no hope of them recovering',
            },
            {
                char: 'd',
                text: 'Until the colour of their skin becomes pink',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3124',
        topicCode: 'road_procedure',
        question:
            'You arrive at the scene of an incident. There`s been an engine fire. What should you do to help someone whose hands and arms have been burnt?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Douse the burns thoroughly with clean, cool liquid',
            },
            {
                char: 'b',
                text: 'Check their pulse',
            },
            {
                char: 'c',
                text: 'Remove anything sticking to the burn',
            },
            {
                char: 'd',
                text: 'Try to find out whether it was a petrol or diesel engine',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3125',
        topicCode: 'road_procedure',
        question:
            'You arrive at an incident where someone is suffering from severe burns. How could you help?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Burst any blisters',
            },
            {
                char: 'b',
                text: 'Pour cool liquid over the burns',
            },
            {
                char: 'c',
                text: 'Apply lotions to the injury',
            },
            {
                char: 'd',
                text: 'Remove anything sticking to the burns',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3126',
        topicCode: 'road_procedure',
        question:
            'At the scene of an incident, a pedestrian`s leg is bleeding heavily. It`s not broken and there are no objects in the wound. How could you help stop the bleeding?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Remove their shoes and socks',
            },
            {
                char: 'b',
                text: 'Keep both legs flat on the ground',
            },
            {
                char: 'c',
                text: 'Apply firm pressure to the wound',
            },
            {
                char: 'd',
                text: 'Roll the person into the recovery position',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3127',
        topicCode: 'road_procedure',
        question:
            'You arrive at the scene of a car crash. A passenger is bleeding heavily from an arm wound. How should the arm be treated if it`s clear that there are no objects in the wound?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Keep the arm low and allow the blood flow to stop naturally',
            },
            {
                char: 'b',
                text: 'Rub the wound in a circular motion',
            },
            {
                char: 'c',
                text: 'Get them to swing their arm briskly up and down',
            },
            {
                char: 'd',
                text: 'Apply firm pressure to the area and raise the arm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3128',
        topicCode: 'road_procedure',
        question:
            'You`re at the scene of an incident. Why would you move a casualty who`s unconscious but still breathing?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Because an ambulance is on its way',
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
                text: 'Because it will clear the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3129',
        topicCode: 'road_procedure',
        question:
            'At an incident, you suspect a casualty has back injuries. What should you do when the area is safe?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Offer them a drink but no food',
            },
            {
                char: 'b',
                text: 'Keep them calm but don`t move them',
            },
            {
                char: 'c',
                text: 'Raise their legs and make them comfortable',
            },
            {
                char: 'd',
                text: 'Ask for their name and address',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3130',
        topicCode: 'road_procedure',
        question:
            'You`re at an incident. What should you do for any injured people, once the area is safe?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Get them out of the vehicle',
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
        code: 'adi3134',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a motorway. You see a large box fall onto the road from a lorry. What should you do if the lorry doesn`t stop?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Go to the next emergency telephone and tell the authorities',
            },
            {
                char: 'b',
                text: 'Catch up with the lorry and try to get the driver`s attention',
            },
            {
                char: 'c',
                text: 'Stop close to the box until the police arrive',
            },
            {
                char: 'd',
                text: 'Drive over to the hard shoulder, then remove the box',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3135',
        topicCode: 'road_procedure',
        question:
            'What should you do if you`re driving on a motorway and begin to feel drowsy?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pull over onto the hard shoulder when it`s convenient',
            },
            {
                char: 'b',
                text: 'Switch on your heater to circulate warm air',
            },
            {
                char: 'c',
                text: 'Open a window and leave the motorway by the next exit',
            },
            {
                char: 'd',
                text: 'Increase your speed to reduce your journey time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3137',
        topicCode: 'road_procedure',
        question: 'When can you park on the verge or footpath?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When parking signs allow it',
            },
            {
                char: 'b',
                text: 'To load and unload',
            },
            {
                char: 'c',
                text: 'When you`re stopping outside retail premises',
            },
            {
                char: 'd',
                text: 'To pick up passengers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3145',
        topicCode: 'road_procedure',
        question:
            'You`re driving on a motorway. Something falls from your vehicle. What should you do after you`ve stopped on the hard shoulder or in an emergency refuge area?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Place a warning triangle behind your vehicle',
            },
            {
                char: 'b',
                text: 'Wait in your vehicle for the emergency services',
            },
            {
                char: 'c',
                text: 'Remove the object from the carriageway immediately',
            },
            {
                char: 'd',
                text: 'Use the nearest motorway telephone to inform the authorities',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3146',
        topicCode: 'road_procedure',
        question:
            'Which lights should you use when you`re driving on a busy, well-lit motorway at night?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Sidelights',
            },
            {
                char: 'b',
                text: 'Dipped headlights',
            },
            {
                char: 'c',
                text: 'Daytime running lights',
            },
            {
                char: 'd',
                text: 'Main-beam headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3147',
        topicCode: 'road_procedure',
        question:
            'You arrive at the scene of a crash. The scene has been made safe and there`s a casualty in a vehicle. What should you do if the casualty is conscious and breathing?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Leave the casualty in the vehicle in case they`re seriously injured',
            },
            {
                char: 'b',
                text: 'Remove the casualty and place them in the recovery position',
            },
            {
                char: 'c',
                text: 'Get the casualty out of the vehicle and off the road',
            },
            {
                char: 'd',
                text: 'Keep the casualty warm and give them a warm drink',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3160',
        topicCode: 'road_procedure',
        question:
            'You`re in a one-way street and intend to go ahead. Unless road markings indicate otherwise, which lane should you use?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Always the left-hand lane',
            },
            {
                char: 'b',
                text: 'The right-hand lane',
            },
            {
                char: 'c',
                text: 'The most appropriate lane',
            },
            {
                char: 'd',
                text: 'The middle lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3162',
        topicCode: 'road_procedure',
        question:
            'During a driving lesson, your vehicle is involved in a collision. What should you do if your pupil is physically unhurt but is suffering from shock?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep them warm and reassure them confidently',
            },
            {
                char: 'b',
                text: 'Keep them warm and give them a hot drink if available',
            },
            {
                char: 'c',
                text: 'Encourage them to continue with the lesson to regain confidence',
            },
            {
                char: 'd',
                text: 'Tell the medical branch of the appropriate licensing authority',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3163',
        topicCode: 'road_procedure',
        question:
            'How should you adjust your speed when you`re joining a busy motorway from a slip road?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Accelerate so that you`re travelling slightly faster than the traffic in the left-hand lane',
            },
            {
                char: 'b',
                text: 'Try to match the speed of the traffic in the left-hand lane',
            },
            {
                char: 'c',
                text: 'Drive at a slower speed than the traffic in the left-hand lane',
            },
            {
                char: 'd',
                text: 'Make sure you reach the maximum speed allowed for the slip road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3173',
        topicCode: 'road_procedure',
        question:
            'Is it necessary to give a signal when you`re passing parked vehicles?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It`s only necessary when there`s traffic behind',
            },
            {
                char: 'b',
                text: 'It`s only necessary when there`s oncoming traffic',
            },
            {
                char: 'c',
                text: 'It`s always necessary',
            },
            {
                char: 'd',
                text: 'It might not be necessary',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3185',
        topicCode: 'road_procedure',
        question:
            'What should you do if luggage falls from your vehicle while you`re driving on the motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Stop at the next emergency telephone and contact the authorities',
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
        code: 'adi3188',
        topicCode: 'road_procedure',
        question:
            'When emerging at a junction, what can significantly obstruct a driver`s vision?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Windscreen pillars',
            },
            {
                char: 'b',
                text: 'Steering wheel',
            },
            {
                char: 'c',
                text: 'Interior mirror',
            },
            {
                char: 'd',
                text: 'Windscreen wipers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3194',
        topicCode: 'road_procedure',
        question: 'When may you stop on the hard shoulder of a motorway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'In an emergency',
            },
            {
                char: 'b',
                text: 'If you feel tired and need to rest',
            },
            {
                char: 'c',
                text: 'If you miss the exit you wanted to take',
            },
            {
                char: 'd',
                text: 'To pick up a hitchhiker',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3202',
        topicCode: 'road_procedure',
        question:
            'You`re being overtaken by a heavily laden lorry. What should you do if it`s taking a long time to come past?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Match their speed',
            },
            {
                char: 'b',
                text: 'Be prepared to slow down',
            },
            {
                char: 'c',
                text: 'Maintain your speed',
            },
            {
                char: 'd',
                text: 'Change direction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3205',
        topicCode: 'road_procedure',
        question:
            'What should you do when you`re planning to overtake at night?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Wait until a bend to see approaching headlights',
            },
            {
                char: 'b',
                text: 'Sound your horn twice before moving out',
            },
            {
                char: 'c',
                text: 'Make sure you can see the road ahead is clear',
            },
            {
                char: 'd',
                text: 'Approach with headlights on full beam',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3209',
        topicCode: 'road_procedure',
        question:
            'You`re driving in fog. What should you do if you use front fog lights?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Switch them off if you drive into a built-up area',
            },
            {
                char: 'b',
                text: 'Switch off your headlights while your fog lights are on',
            },
            {
                char: 'c',
                text: 'Use them with main-beam headlights',
            },
            {
                char: 'd',
                text: 'Switch them off when visibility improves',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3210',
        topicCode: 'road_procedure',
        question:
            'Where should a driver position their vehicle before turning left?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Well to the left of the road',
            },
            {
                char: 'b',
                text: 'With the offside wheels close to the centre line',
            },
            {
                char: 'c',
                text: 'Slightly over the centre line',
            },
            {
                char: 'd',
                text: 'They should swing out to the right before the turn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3212',
        topicCode: 'road_procedure',
        question: 'What should a motorway slip road be used for?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To increase your speed to match that of the fastest vehicles on the motorway',
            },
            {
                char: 'b',
                text: 'To select which lane you`re going to use once you`ve joined the motorway',
            },
            {
                char: 'c',
                text: 'To adjust your speed to match that of the traffic in the left-hand lane of the motorway',
            },
            {
                char: 'd',
                text: 'To get used to the speed of traffic on the motorway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3213',
        topicCode: 'road_procedure',
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
        code: 'adi3214',
        topicCode: 'road_procedure',
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
        code: 'adi3215',
        topicCode: 'road_procedure',
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
        code: 'adi3216',
        topicCode: 'road_procedure',
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
        code: 'adi3217',
        topicCode: 'road_procedure',
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
        code: 'adi3218',
        topicCode: 'road_procedure',
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
        code: 'adi3219',
        topicCode: 'road_procedure',
        question:
            'You`ve stopped in an emergency area. What must you do before you rejoin the carriageway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use the emergency telephone',
            },
            {
                char: 'b',
                text: 'Give an arm signal to show you are moving off',
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
        isNIExempts: false,
    },
    {
        code: 'adi3232',
        topicCode: 'road_procedure',
        question:
            'What should you do when you`re driving along a road that has a series of road humps?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Brake firmly when you reach each road hump',
            },
            {
                char: 'b',
                text: 'Vary your speed between each road hump',
            },
            {
                char: 'c',
                text: 'Stay at a reduced speed for the whole stretch of road',
            },
            {
                char: 'd',
                text: 'Set your car`s cruise control',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3233',
        topicCode: 'road_procedure',
        question:
            'You�re travelling along a single-track road. There�s a passing place on your right. What should you do if you see a vehicle coming towards you?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue along the single-track road',
            },
            {
                char: 'b',
                text: 'Stop in the passing place',
            },
            {
                char: 'c',
                text: 'Move over onto the verge',
            },
            {
                char: 'd',
                text: 'Wait opposite the passing place ',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2000',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'The traffic light ahead is showing an amber light. Which colour light(s) will it show next?',
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
        code: 'adi2009',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What`s the purpose of the yellow lines painted across the road?',
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
                text: 'To warn you to slow down',
            },
            {
                char: 'd',
                text: 'To tell you the distance to the roundabout',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2010',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re at a pelican crossing. What does the flashing amber light mean?',
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
                text: 'Give way to pedestrians on the crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2011',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Why should you never wave people across at pedestrian crossings?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Because there may be another vehicle coming',
            },
            {
                char: 'b',
                text: 'Because they may not be looking',
            },
            {
                char: 'c',
                text: 'Because it`s safer for you to carry on',
            },
            {
                char: 'd',
                text: 'Because they may not be ready to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2012',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'At a puffin crossing, which colour traffic light follows the green light?',
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
        code: 'adi2019',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do when you`re being followed by an ambulance showing a flashing blue beacon?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Move over as soon as it`s safe to do so',
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
                text: 'Brake harshly and immediately stop in the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2020',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
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
                text: 'Doctor`s car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2022',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Diamond-shaped signs give instructions to drivers of which vehicles?',
        questionImg: 'TS4023.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Trams',
            },
            {
                char: 'b',
                text: 'Buses',
            },
            {
                char: 'c',
                text: 'Lorries',
            },
            {
                char: 'd',
                text: 'Taxis',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2027',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Apart from routine maintenance, when should you check your engine`s oil level?',
        answer: 'd',
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
                text: 'Before carrying a passenger',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2032',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Why have `Red Routes` been introduced into major cities?',
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
        code: 'adi2034',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What`s the purpose of these road humps?',
        questionImg: '85BW9960.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To prevent buses from using these roads',
            },
            {
                char: 'b',
                text: 'To test vehicle suspension units',
            },
            {
                char: 'c',
                text: 'To calibrate satellite navigation systems',
            },
            {
                char: 'd',
                text: 'To slow traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2040',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What does this sign mean?',
        questionImg: 'TS4577.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The road goes steeply uphill',
            },
            {
                char: 'b',
                text: 'The road goes steeply downhill',
            },
            {
                char: 'c',
                text: 'The road bends sharply to the left',
            },
            {
                char: 'd',
                text: 'The road is closed further ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2041',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do if you`re driving behind a cyclist who`s giving a right turn signal?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Overtake before the cyclist gets to the junction',
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
                text: 'Squeeze past the cyclist on the left-hand side',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2047',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Why is a toucan crossing different from other crossings?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Moped riders can ride across it with pedestrians',
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
        code: 'adi2048',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How is a toucan crossing different from a pelican crossing?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At a toucan crossing, cyclists can cross with pedestrians',
            },
            {
                char: 'b',
                text: 'There are no road markings at a toucan crossing',
            },
            {
                char: 'c',
                text: 'There`s a continuously flashing amber beacon at a toucan crossing',
            },
            {
                char: 'd',
                text: 'At a toucan crossing, you only stop if someone is waiting to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2049',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
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
        code: 'adi2050',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What does it mean when you see a pedestrian carrying a white stick that has a red band or bands?',
        questionImg: 'IMG_0822.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The person is physically disabled',
            },
            {
                char: 'b',
                text: 'The person is a pensioner',
            },
            {
                char: 'c',
                text: 'The person has memory problems',
            },
            {
                char: 'd',
                text: 'The person is deaf and blind',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2052',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
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
                text: 'Be careful; they may misjudge your speed',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2070',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do when you approach a bus signalling to move away from a bus stop?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Get past before it moves',
            },
            {
                char: 'b',
                text: 'Allow it to move off, if it`s safe to do so',
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
        code: 'adi2071',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Which vehicle is least likely to be affected by side winds?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Bicycle',
            },
            {
                char: 'b',
                text: 'Motorcycle',
            },
            {
                char: 'c',
                text: 'High-sided vehicle',
            },
            {
                char: 'd',
                text: 'Car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2082',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What`s the national speed limit on the motorway for a car?',
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
        code: 'adi2092',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving on a motorway. What must you do if you see this signal above every lane?',
        questionImg: 'Gantry_red_cross.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop on the hard shoulder',
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
        code: 'adi2093',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Where are the amber reflective studs on a motorway?',
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
        code: 'adi2094',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
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
        code: 'adi2095',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What colour are the reflective studs where a slip road joins a motorway?',
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
        code: 'adi2097',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What`s the national speed limit for cars and motorcycles on a dual carriageway?',
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
        code: 'adi2098',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'There are no speed-limit signs on the road. What would suggest a 30 mph speed limit?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Hazard warning lines',
            },
            {
                char: 'b',
                text: 'Double or single yellow lines',
            },
            {
                char: 'c',
                text: 'Pedestrian islands',
            },
            {
                char: 'd',
                text: 'Street lighting',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2109',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Signals are normally given by direction indicators and brake lights. What should drivers do before giving a signal?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Check the mirrors',
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
                text: 'Look all around',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2114',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'When may you wait in a box junction?',
        questionImg: '85BW1216.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When oncoming traffic prevents you from turning right',
            },
            {
                char: 'b',
                text: 'When you`re in a queue of traffic turning left',
            },
            {
                char: 'c',
                text: 'When you`re in a queue of traffic to go ahead',
            },
            {
                char: 'd',
                text: 'When traffic lights are green',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2115',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What do these signs indicate?',
        questionImg: 'TS4059.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You`re approaching the end of a motorway',
            },
            {
                char: 'b',
                text: 'You`re approaching the end of a dual carriageway',
            },
            {
                char: 'c',
                text: 'You`re approaching a concealed depot entrance',
            },
            {
                char: 'd',
                text: 'You`re approaching a concealed level crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2117',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Apart from pedestrians, what should you be aware of at toucan crossings?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Emergency vehicles emerging',
            },
            {
                char: 'b',
                text: 'Buses pulling out',
            },
            {
                char: 'c',
                text: 'Trams crossing in front',
            },
            {
                char: 'd',
                text: 'Cyclists riding across',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2121',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How would you recognise signs giving orders?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They`re rectangular',
            },
            {
                char: 'b',
                text: 'They`re triangular',
            },
            {
                char: 'c',
                text: 'They`re square',
            },
            {
                char: 'd',
                text: 'They`re circular',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2122',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What shape is a `stop` sign at a junction?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Circular',
            },
            {
                char: 'b',
                text: 'Triangular',
            },
            {
                char: 'c',
                text: 'Rectangular',
            },
            {
                char: 'd',
                text: 'Octagonal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2123',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving in snow and you see this sign as you approach a junction. What does it mean?',
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
        code: 'adi2124',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What shape is a `give way` sign?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Square',
            },
            {
                char: 'b',
                text: 'Circular',
            },
            {
                char: 'c',
                text: 'Octagonal',
            },
            {
                char: 'd',
                text: 'Triangular',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2126',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What sort of message is given by a triangular sign?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Warning',
            },
            {
                char: 'b',
                text: 'Information',
            },
            {
                char: 'c',
                text: 'Order',
            },
            {
                char: 'd',
                text: 'Direction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2128',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Which traffic-light signal will follow a red light?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Red and amber',
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
                text: 'Amber and green',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2130',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re approaching traffic lights. What does the amber light on its own mean?',
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
        code: 'adi2131',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re approaching traffic lights. What should you do if the red and amber lights are showing together?',
        questionImg: 'IMG_4667.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive past the lights if the road is clear',
            },
            {
                char: 'b',
                text: 'Take care: there`s a fault with the lights',
            },
            {
                char: 'c',
                text: 'Wait for the green light and only drive on if the road is clear',
            },
            {
                char: 'd',
                text: 'Stop, because the lights are about to change to red',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2132',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re at a junction controlled by traffic lights. When should you wait, even if the green light is showing?',
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
        code: 'adi2133',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
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
        code: 'adi2135',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving on a road that has double solid white lines in the middle of the road. When may you cross these lines to overtake?',
        questionImg: 'IMG_1871.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To pass a queue of traffic at a junction',
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
                text: 'To pass a vehicle towing a trailer',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2136',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'A police car is following you. What should you do if the police officer flashes the headlights and points to the left?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Turn at the next left',
            },
            {
                char: 'b',
                text: 'Stop on the left',
            },
            {
                char: 'c',
                text: 'Continue your journey',
            },
            {
                char: 'd',
                text: 'Move over to the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2141',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'On a motorway, where would you see green reflective studs?',
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
        code: 'adi2142',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What`s the national speed limit for a car on a single carriageway?',
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
        code: 'adi2168',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re waiting at a pelican crossing. What should you do if pedestrians are halfway across when the lights change to green?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drive on as soon as your way is clear',
            },
            {
                char: 'b',
                text: 'Rev your engine to make them hurry',
            },
            {
                char: 'c',
                text: 'Flash your headlights in case they`ve not heard you',
            },
            {
                char: 'd',
                text: 'Wait for them to finish crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2169',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'When are you allowed to stop on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'If you need to walk and get fresh air',
            },
            {
                char: 'b',
                text: 'If you wish to pick up hitchhikers',
            },
            {
                char: 'c',
                text: 'When there`s a red cross with flashing red lights above every lane',
            },
            {
                char: 'd',
                text: 'When you need to use your mobile telephone',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2171',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'At which type of crossing are cyclists and pedestrians allowed to cross together?',
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
        code: 'adi2172',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What`s the purpose of a catalytic converter?',
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
                text: 'To reduce toxic exhaust gases',
            },
            {
                char: 'd',
                text: 'To reduce engine wear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2174',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving in town and see these lights flashing. What hazard would you expect to see next?',
        questionImg: 'TS4622.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A level crossing with no barrier',
            },
            {
                char: 'b',
                text: 'An ambulance station',
            },
            {
                char: 'c',
                text: 'A school crossing patrol',
            },
            {
                char: 'd',
                text: 'An opening bridge',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2175',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do if there are flashing amber lights under a school warning sign?',
        questionImg: 'School warning.png',
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
        code: 'adi2182',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving at night in a built-up area. The road is well lit. Why should you use dipped headlights?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To help you to see further along the road',
            },
            {
                char: 'b',
                text: 'To make it possible to go at a much faster speed',
            },
            {
                char: 'c',
                text: 'To help your indicators to show more clearly',
            },
            {
                char: 'd',
                text: 'To make it easy for other road users to see your vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2186',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'When should regular tyre-pressure checks be made?',
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
        code: 'adi2188',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Why are vehicle mirrors often slightly convex?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To give a wider field of vision',
            },
            {
                char: 'b',
                text: 'To totally cover blind spots',
            },
            {
                char: 'c',
                text: 'To make it easier to judge the speed of traffic behind',
            },
            {
                char: 'd',
                text: 'To make traffic behind look bigger',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2199',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What colour are the reflective studs at the left-hand edge of the motorway?',
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
        code: 'adi2206',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
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
        code: 'adi2214',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Why should you test your brakes after driving through a ford?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To check your brake lights are working',
            },
            {
                char: 'b',
                text: 'To make sure you can stop safely',
            },
            {
                char: 'c',
                text: 'To bleed air from the brake system',
            },
            {
                char: 'd',
                text: 'To remove the water from your tyres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2221',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving on a three-lane motorway. There are red reflective road studs to your left and white ones to your right. Which lane are you using?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The right-hand lane',
            },
            {
                char: 'b',
                text: 'The middle lane',
            },
            {
                char: 'c',
                text: 'The hard shoulder',
            },
            {
                char: 'd',
                text: 'The left-hand lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2226',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'When are you allowed to use your vehicle`s hazard warning lights?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you`ve stopped your vehicle and it`s temporarily obstructing traffic',
            },
            {
                char: 'b',
                text: 'When you`re driving at night without headlights',
            },
            {
                char: 'c',
                text: 'When you`ve parked on double yellow lines',
            },
            {
                char: 'd',
                text: 'When you`re driving slowly because you`re lost',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2229',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'When must you stop on a motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you have to read a map',
            },
            {
                char: 'b',
                text: 'When you`re tired and need a rest',
            },
            {
                char: 'c',
                text: 'When a red cross with flashing red lights shows above every lane',
            },
            {
                char: 'd',
                text: 'When your mobile phone rings',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2230',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving on a motorway. What should you do if the overhead signs show a red cross with red flashing lights above your lane?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Continue in that lane and look for further information',
            },
            {
                char: 'b',
                text: 'Move into another lane as soon as you can do so safely',
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
        code: 'adi2234',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re waiting at a level crossing. What must you do if a train has passed but the lights keep flashing?',
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
        code: 'adi2235',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What does a red traffic light mean?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drivers must stop behind the white stop line',
            },
            {
                char: 'b',
                text: 'Drivers may go straight on if there`s no other traffic',
            },
            {
                char: 'c',
                text: 'Drivers may turn left if it`s safe to do so',
            },
            {
                char: 'd',
                text: 'Drivers must slow down and prepare to stop if traffic has started to cross',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2239',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What will increase your vehicle`s fuel consumption?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Under-inflated tyres',
            },
            {
                char: 'b',
                text: 'Using tyres of different makes',
            },
            {
                char: 'c',
                text: 'Over-inflated tyres',
            },
            {
                char: 'd',
                text: 'Using tyres that are new or hardly used',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2243',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Why would you flash your headlights to another road user?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To show that you`re giving way to them',
            },
            {
                char: 'b',
                text: 'To show that you`re about to turn',
            },
            {
                char: 'c',
                text: 'To tell them that you have right of way',
            },
            {
                char: 'd',
                text: 'To let them know that you`re there',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2253',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What effect does a convex mirror have on the appearance of following vehicles?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They appear to be moving faster than they really are',
            },
            {
                char: 'b',
                text: 'They appear to be closer than they really are',
            },
            {
                char: 'c',
                text: 'They appear to be further away than they really are',
            },
            {
                char: 'd',
                text: 'They appear to be larger than they really are',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2270',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'There are double white lines in the middle of the road. What does it mean when the line nearest to you is broken?',
        questionImg: 'IMG_1880.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You may park on the left',
            },
            {
                char: 'b',
                text: 'You may overtake, but you mustn`t cross the line',
            },
            {
                char: 'c',
                text: 'You may overtake if it`s safe to do so',
            },
            {
                char: 'd',
                text: 'You may park on the right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2271',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving in the right-hand lane on a three-lane motorway. What should you do when you see this sign?',
        questionImg: 'TS4025.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move to the left-hand lane',
            },
            {
                char: 'b',
                text: 'Leave the motorway at the next exit',
            },
            {
                char: 'c',
                text: 'Move to the middle lane',
            },
            {
                char: 'd',
                text: 'Stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2272',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Where are fluorescent green/yellow reflective studs used to mark the carriageway?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At contraflow systems and roadworks',
            },
            {
                char: 'b',
                text: 'At slip-road exits and entrances',
            },
            {
                char: 'c',
                text: 'Between the edge of the carriageway and the central reservation',
            },
            {
                char: 'd',
                text: 'Across the road, marking where roadworks start and finish',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2289',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What will happen if the power-assisted steering system fails?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The steering mechanism will lock',
            },
            {
                char: 'b',
                text: 'The steering will become hard to turn',
            },
            {
                char: 'c',
                text: 'The tyres will wear more',
            },
            {
                char: 'd',
                text: 'The steering will become very loose',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2316',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What type of vehicle would have a green flashing beacon?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A fire engine',
            },
            {
                char: 'b',
                text: 'A coastguard patrol car',
            },
            {
                char: 'c',
                text: 'An ambulance',
            },
            {
                char: 'd',
                text: 'A doctor`s car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2368',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What do these lines along the centre of the road mean?',
        questionImg: 'IMG_4674.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'There`s a hazard ahead',
            },
            {
                char: 'b',
                text: 'They`re lane markings',
            },
            {
                char: 'c',
                text: 'No stopping on the carriageway',
            },
            {
                char: 'd',
                text: 'No overtaking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2369',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'There`s a `give way` sign where a one-way street joins a main road. What road markings would you see across the mouth of the junction?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A single broken white line across the whole width of the minor road',
            },
            {
                char: 'b',
                text: 'Double broken white lines across the left-hand side of the minor road',
            },
            {
                char: 'c',
                text: 'Double broken white lines across the whole width of the minor road',
            },
            {
                char: 'd',
                text: 'A single white line across the whole width of the minor road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2370',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What colour are circular traffic signs that give positive instructions?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Red',
            },
            {
                char: 'b',
                text: 'Red and blue',
            },
            {
                char: 'c',
                text: 'Blue',
            },
            {
                char: 'd',
                text: 'Red and white',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2371',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Which stream of traffic has priority at a roundabout?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Traffic on the roundabout always has priority',
            },
            {
                char: 'b',
                text: 'Vehicles approaching a roundabout always have priority',
            },
            {
                char: 'c',
                text: 'Signs, road markings or traffic lights show the priority',
            },
            {
                char: 'd',
                text: 'Priority should be given to cars towing a trailer or caravan',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2373',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Where would you see a contraflow bus and cycle lane?',
        questionImg: '960.png',
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
        code: 'adi2377',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving a vehicle that has automatic transmission. How are you advised to negotiate corners safely?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Select the appropriate gear for the speed required and lock it in that position',
            },
            {
                char: 'b',
                text: 'Slow down before the corner and then accelerate gently as you turn',
            },
            {
                char: 'c',
                text: 'Use the kick-down facility to select a lower gear',
            },
            {
                char: 'd',
                text: 'Brake gently while driving round the corner',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2382',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What does it mean when the amber light is flashing at a pelican crossing?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You must give way to pedestrians waiting to cross',
            },
            {
                char: 'b',
                text: 'You must stop and wait for the green light',
            },
            {
                char: 'c',
                text: 'You must give way to pedestrians on the crossing',
            },
            {
                char: 'd',
                text: 'You must wait for the amber light to stop flashing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2383',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re approaching a junction where the traffic lights aren`t working. What should you do when a police officer gives this signal?',
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
                text: 'Stop level with the officer`s arm',
            },
            {
                char: 'd',
                text: 'Stop at the stop line',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2385',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Can you park on the zigzag lines of a zebra crossing when there are no other parking spaces to be found?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'No, unless you stay with your car',
            },
            {
                char: 'b',
                text: 'Yes, in order to drop off a passenger',
            },
            {
                char: 'c',
                text: 'Yes, if you don`t block people from crossing',
            },
            {
                char: 'd',
                text: 'No, not under any circumstances',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2386',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What does excessive wear on the outer edges of the tread of a car`s tyre generally indicate?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The tyre has been used over-inflated',
            },
            {
                char: 'b',
                text: 'The tyre has been used at excessive speed',
            },
            {
                char: 'c',
                text: 'The tyre has been used under-inflated',
            },
            {
                char: 'd',
                text: 'The tyre has been used on the wrong axle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2387',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do if you discover that the coolant in the vehicle radiator needs topping up during a long journey?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Hose down the engine to cool it before refilling',
            },
            {
                char: 'b',
                text: 'Let it cool before removing the filler cap',
            },
            {
                char: 'c',
                text: 'Keep the engine running and fill it with coolant immediately',
            },
            {
                char: 'd',
                text: 'Keep driving, as the fan will cool the engine',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2388',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What fault would you suspect if the footbrake on your car starts to feel spongy?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The wrong brake pads are fitted',
            },
            {
                char: 'b',
                text: 'The hydraulic system contains air',
            },
            {
                char: 'c',
                text: 'The brake pads are worn',
            },
            {
                char: 'd',
                text: 'The brake discs are worn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2389',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How often should you check your brake lights are working?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Before each journey',
            },
            {
                char: 'b',
                text: 'After each journey',
            },
            {
                char: 'c',
                text: 'Weekly',
            },
            {
                char: 'd',
                text: 'Monthly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2447',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How do following vehicles appear in a convex door mirror?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Closer than they are',
            },
            {
                char: 'b',
                text: 'Further away than they are',
            },
            {
                char: 'c',
                text: 'Larger than they are',
            },
            {
                char: 'd',
                text: 'Travelling faster than they are',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2451',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What will happen if you brake firmly as you drive around a right-hand bend?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Most of the weight of the car will be transferred onto the front offside wheel',
            },
            {
                char: 'b',
                text: 'Most of the weight of the car will be transferred onto the rear nearside wheel',
            },
            {
                char: 'c',
                text: 'Most of the weight of the car will be transferred onto the front nearside wheel',
            },
            {
                char: 'd',
                text: 'Most of the weight of the car will be transferred onto the rear offside wheel',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2454',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'When can car drivers use a bus lane identified by this sign?',
        questionImg: 'Bus_lane.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'During the hours of daylight',
            },
            {
                char: 'b',
                text: 'When it`s clear of buses',
            },
            {
                char: 'c',
                text: 'At no time',
            },
            {
                char: 'd',
                text: 'When other cars are using it',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2459',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What warning is given by a large white triangle painted on the road surface before a junction?',
        questionImg: 'TS4075b.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop at the junction',
            },
            {
                char: 'b',
                text: 'Give way at the junction',
            },
            {
                char: 'c',
                text: 'The road widens ahead',
            },
            {
                char: 'd',
                text: 'Two-way traffic ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2460',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How can you identify motorway signs?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They have white letters and figures on a blue background',
            },
            {
                char: 'b',
                text: 'They have black letters and figures on a white background',
            },
            {
                char: 'c',
                text: 'They have white letters and figures on a green background',
            },
            {
                char: 'd',
                text: 'They have white letters and figures on a brown background',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2463',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'When can you enter this hatched area?',
        questionImg: '85BW6768.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Only in an emergency',
            },
            {
                char: 'b',
                text: 'Never under any circumstances',
            },
            {
                char: 'c',
                text: 'When necessary and you can see it`s safe to do so',
            },
            {
                char: 'd',
                text: 'Only to overtake large vehicles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2465',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving a car that has manual transmission. What should you do if you have to drive through shallow flood water?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drive slowly, in as high a gear as possible, slipping the clutch if necessary',
            },
            {
                char: 'b',
                text: 'Drive slowly, in first gear and with a high engine speed, slipping the clutch if necessary',
            },
            {
                char: 'c',
                text: 'Drive as quickly as possible, in a low gear, without slipping the clutch',
            },
            {
                char: 'd',
                text: 'Drive as quickly as possible, in a high gear, slipping the clutch if necessary',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2466',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re going to drive a car that you haven`t driven before. What`s the most important consideration when you`re adjusting the seat?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Make sure the head restraint doesn`t obstruct the view in the mirror',
            },
            {
                char: 'b',
                text: 'Make sure there`s room for rear-seat passengers',
            },
            {
                char: 'c',
                text: 'Make sure you can reach and operate the controls',
            },
            {
                char: 'd',
                text: 'Make sure you can open the door while wearing the seat belt',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2467',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You park on the left, facing uphill. In which position should you leave the steering wheel?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Turned to the right',
            },
            {
                char: 'b',
                text: 'Turned to the left',
            },
            {
                char: 'c',
                text: 'Straight ahead',
            },
            {
                char: 'd',
                text: 'In the locked position',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2468',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'How will a convex mirror affect the appearance of following vehicles?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They`ll seem to be nearer',
            },
            {
                char: 'b',
                text: 'They`ll seem to be clearer',
            },
            {
                char: 'c',
                text: 'They`ll seem to be further away',
            },
            {
                char: 'd',
                text: 'They`ll seem to be driving faster',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2471',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What happens if your vehicle starts to aquaplane?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You lose control of the steering and brakes',
            },
            {
                char: 'b',
                text: 'You lose control of the brakes only',
            },
            {
                char: 'c',
                text: 'You lose control of the steering only',
            },
            {
                char: 'd',
                text: 'You lose control of the washers and wipers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2475',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Which colour light shows before the flashing amber signal at a pelican crossing?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Red',
            },
            {
                char: 'b',
                text: 'Green',
            },
            {
                char: 'c',
                text: 'Steady amber',
            },
            {
                char: 'd',
                text: 'Red and amber together',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2477',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What does excessive wear of the central area of tread on a car tyre suggest?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The tyre has been used under-inflated',
            },
            {
                char: 'b',
                text: 'The shock absorbers are faulty',
            },
            {
                char: 'c',
                text: 'The tyre has been used over-inflated',
            },
            {
                char: 'd',
                text: 'The wheels are out of alignment',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2480',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'The car`s ignition light comes on during a journey. What fault does this indicate?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The engine is overheating',
            },
            {
                char: 'b',
                text: 'The battery needs charging',
            },
            {
                char: 'c',
                text: 'The charging system is faulty',
            },
            {
                char: 'd',
                text: 'The oil level may be low',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2481',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What would a spongy-feeling footbrake indicate?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Brake fluid on the linings or brake pads',
            },
            {
                char: 'b',
                text: 'Badly adjusted brakes',
            },
            {
                char: 'c',
                text: 'Air in the braking system',
            },
            {
                char: 'd',
                text: 'Worn brake pads',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2534',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'How does a convex mirror affect the appearance of a following vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It makes it look closer than it really is',
            },
            {
                char: 'b',
                text: 'It makes it look larger than it really is',
            },
            {
                char: 'c',
                text: 'It makes it look further away than it really is',
            },
            {
                char: 'd',
                text: 'It makes it look like it`s travelling faster than it really is',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2547',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving on a motorway. What should you do if there`s a red cross with flashing red lights on the gantry above your lane?',
        questionImg: 'Gantry_red_cross.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Move to another lane and stop',
            },
            {
                char: 'b',
                text: 'Leave the motorway at the next exit',
            },
            {
                char: 'c',
                text: 'Don`t go beyond the signal in that lane',
            },
            {
                char: 'd',
                text: 'Slow down to 50 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2549',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Where are amber reflective road studs used?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Across the entrance to a service area',
            },
            {
                char: 'b',
                text: 'Across the road at a pedestrian crossing',
            },
            {
                char: 'c',
                text: 'Along the edge of an escape lane on a steep downhill gradient',
            },
            {
                char: 'd',
                text: 'Along the central reservation on a motorway or dual carriageway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2550',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'When could you stop here on this road?',
        questionImg: 'IMG_4621.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To park during the hours of darkness',
            },
            {
                char: 'b',
                text: 'To rest if you`re tired',
            },
            {
                char: 'c',
                text: 'To set down or pick up passengers',
            },
            {
                char: 'd',
                text: 'To park during daylight hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2551',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Who should obey diamond-shaped signs?',
        questionImg: 'TS4023.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Pedestrians',
            },
            {
                char: 'b',
                text: 'Car drivers',
            },
            {
                char: 'c',
                text: 'Tram drivers',
            },
            {
                char: 'd',
                text: 'Cyclists',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2553',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving a car fitted with automatic transmission. What should you do when you approach a very steep downhill gradient?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Remain in `D` (Drive) and keep the speed in check with the footbrake',
            },
            {
                char: 'b',
                text: 'Slow down and use the gear selector to hold the car in a low gear',
            },
            {
                char: 'c',
                text: 'Slow down, so that the automatic transmission changes down to a lower gear',
            },
            {
                char: 'd',
                text: 'Use `kick-down` to change the vehicle into a lower gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2554',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You park on a hill in a vehicle that has automatic transmission. When you leave the vehicle, in which position would you put the gear selector?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Drive',
            },
            {
                char: 'b',
                text: 'Reverse',
            },
            {
                char: 'c',
                text: 'Park',
            },
            {
                char: 'd',
                text: 'Neutral',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2556',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You apply the brakes while you`re travelling forwards and in a straight line. How will this affect the grip of the tyres on the road?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The grip will remain constant on all four tyres',
            },
            {
                char: 'b',
                text: 'The front tyres will grip the road more than the rear tyres',
            },
            {
                char: 'c',
                text: 'The rear tyres will grip the road more than the front tyres',
            },
            {
                char: 'd',
                text: 'The tyres won`t grip until you brake firmly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2558',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do when you`re cornering on an icy or snow-covered road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Approach the corner at a steady speed, using the highest gear possible',
            },
            {
                char: 'b',
                text: 'Drive slowly throughout, keeping the engine speed high',
            },
            {
                char: 'c',
                text: 'Approach the corner at a constant speed, using the lowest gear possible',
            },
            {
                char: 'd',
                text: 'Hold the clutch pedal down and control your speed with the brakes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2561',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving a car that`s skidding, with the rear wheels sliding to the left. What`s likely to happen if you oversteer to the left?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You`ll increase the skid to the left',
            },
            {
                char: 'b',
                text: 'You`ll improve your control over the vehicle',
            },
            {
                char: 'c',
                text: 'You`ll cause a skid in the opposite direction',
            },
            {
                char: 'd',
                text: 'You`ll stop the car quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2563',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Which road users can use a toucan crossing?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Moped riders and cyclists',
            },
            {
                char: 'b',
                text: 'Horse riders and pedestrians',
            },
            {
                char: 'c',
                text: 'Cyclists and pedestrians',
            },
            {
                char: 'd',
                text: 'Horse riders and cyclists',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2564',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'As a recommendation, how often should you check the brake lights on the car you use?',
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
                text: 'Monthly',
            },
            {
                char: 'd',
                text: 'Annually',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2566',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How often should tyre pressures be checked?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Every time the car is driven',
            },
            {
                char: 'b',
                text: 'At least once a week',
            },
            {
                char: 'c',
                text: 'At least once a month',
            },
            {
                char: 'd',
                text: 'Only when the tyres look soft',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2567',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What will happen if the brake-fluid level falls too low?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The brakes will become spongy and inefficient',
            },
            {
                char: 'b',
                text: 'The brakes will overheat',
            },
            {
                char: 'c',
                text: 'The brakes will suddenly stop working',
            },
            {
                char: 'd',
                text: 'The parking brake will fail',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2568',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How does a puffin crossing operate?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A sensor holds the lights on amber for traffic while pedestrians are still crossing',
            },
            {
                char: 'b',
                text: 'A sensor holds the lights on red for traffic while pedestrians are still crossing',
            },
            {
                char: 'c',
                text: 'A sensor holds the lights on flashing amber for traffic while pedestrians are still crossing',
            },
            {
                char: 'd',
                text: 'A sensor holds the lights on green for traffic while pedestrians are still crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2591',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'How much more than the normal braking distance should you allow in icy weather?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Twice the normal distance',
            },
            {
                char: 'b',
                text: 'Five times the normal distance',
            },
            {
                char: 'c',
                text: 'Seven times the normal distance',
            },
            {
                char: 'd',
                text: 'Ten times the normal distance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2611',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Why should you make sure that your indicators are cancelled after turning?',
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
        code: 'adi2612',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'When may you use hazard warning lights while you`re driving?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you slow down suddenly on a motorway',
            },
            {
                char: 'b',
                text: 'When you slow down at a pedestrian crossing',
            },
            {
                char: 'c',
                text: 'When your direction indicators aren`t working properly',
            },
            {
                char: 'd',
                text: 'When you need to warn oncoming traffic that you intend to stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2619',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
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
        code: 'adi2627',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What does it mean if a bus-lane sign shows no times of operation?',
        questionImg: 'Bus_lane.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It`s not in operation at all',
            },
            {
                char: 'b',
                text: 'It`s only in operation at peak times',
            },
            {
                char: 'c',
                text: 'It`s in operation 24 hours a day',
            },
            {
                char: 'd',
                text: 'It`s only in operation in daylight hours',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2631',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Why are new vehicles fitted with catalytic converters?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To control exhaust noise levels',
            },
            {
                char: 'b',
                text: 'To prolong the life of the exhaust system',
            },
            {
                char: 'c',
                text: 'To allow the exhaust system to be recycled',
            },
            {
                char: 'd',
                text: 'To reduce harmful exhaust emissions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2632',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What can cause heavy steering?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Driving on ice',
            },
            {
                char: 'b',
                text: 'Badly worn brakes',
            },
            {
                char: 'c',
                text: 'Over-inflated tyres',
            },
            {
                char: 'd',
                text: 'Under-inflated tyres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2634',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do if the warning light for your anti-lock brakes stays on?',
        questionImg: 'C3.1.png',
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
        code: 'adi2641',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re testing your vehicle`s suspension. What does it mean if the vehicle continues to bounce when you test it?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The tyres are worn',
            },
            {
                char: 'b',
                text: 'The tyres are under-inflated',
            },
            {
                char: 'c',
                text: 'The steering is unstable',
            },
            {
                char: 'd',
                text: 'The shock absorbers are worn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2643',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving a car fitted with automatic transmission. Why would you use kick-down?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To engage cruise control',
            },
            {
                char: 'b',
                text: 'To improve acceleration',
            },
            {
                char: 'c',
                text: 'To stop in an emergency',
            },
            {
                char: 'd',
                text: 'To reduce fuel consumption',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2644',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What effect will a roof rack have when it`s fitted to your car?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your car will use less fuel',
            },
            {
                char: 'b',
                text: 'Your car will handle better',
            },
            {
                char: 'c',
                text: 'Your car will be able to go faster',
            },
            {
                char: 'd',
                text: 'Your car will use more fuel',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2647',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'How can you avoid wheelspin when you`re driving on an icy road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drive at a slow speed, in as high a gear as possible',
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
        code: 'adi2652',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'How does coasting affect a driver`s control of their vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It improves the driver`s control',
            },
            {
                char: 'b',
                text: 'It makes steering easier',
            },
            {
                char: 'c',
                text: 'It reduces the driver`s control',
            },
            {
                char: 'd',
                text: 'It has no effect on the driver`s control',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2656',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What`s the main benefit in having four-wheel drive?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Improved road-holding',
            },
            {
                char: 'b',
                text: 'Improved fuel economy',
            },
            {
                char: 'c',
                text: 'Improved manoeuvrability while parking',
            },
            {
                char: 'd',
                text: 'Improved passenger comfort',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2658',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re about to drive down a steep hill. What should you do to control the speed of your vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Select a high gear and pump the footbrake',
            },
            {
                char: 'b',
                text: 'Select a high gear and use the footbrake with the parking brake',
            },
            {
                char: 'c',
                text: 'Select a low gear and use the footbrake',
            },
            {
                char: 'd',
                text: 'Select a low gear and use the footbrake with the parking brake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2662',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving towards a level crossing. What would be the first warning of an approaching train?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Both half barriers coming down',
            },
            {
                char: 'b',
                text: 'A steady amber light',
            },
            {
                char: 'c',
                text: 'One half barrier coming down',
            },
            {
                char: 'd',
                text: 'Twin flashing red lights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2687',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What must a driver do at a pelican crossing when the amber light is flashing?',
        answer: 'd',
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
                text: 'Wait for the red-and-amber light before proceeding',
            },
            {
                char: 'd',
                text: 'Give way to any pedestrians on the crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2688',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`ve stopped at a pelican crossing. What should you do if the lights change to green while someone is crossing slowly in front of you?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Allow the person to cross',
            },
            {
                char: 'b',
                text: 'Drive in front of the person',
            },
            {
                char: 'c',
                text: 'Drive behind the person',
            },
            {
                char: 'd',
                text: 'Sound your horn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2702',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Why is coasting a bad driving technique?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It increases fuel consumption',
            },
            {
                char: 'b',
                text: 'It causes the engine to stall',
            },
            {
                char: 'c',
                text: 'It makes the engine run faster',
            },
            {
                char: 'd',
                text: 'It stops engine braking from slowing the car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2705',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You have to make a journey in fog. What`s the most important thing you should do before you set out?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Top up the radiator with anti-freeze',
            },
            {
                char: 'b',
                text: 'Make sure you have a warning triangle',
            },
            {
                char: 'c',
                text: 'Make sure your lights are working',
            },
            {
                char: 'd',
                text: 'Check the battery is fully charged',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2719',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving towards roadworks and you see this temporary speed-limit sign. When must you comply with the sign?',
        questionImg: '50_mph_roadworks.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'During the working day',
            },
            {
                char: 'b',
                text: 'At all times',
            },
            {
                char: 'c',
                text: 'When the lanes are narrow',
            },
            {
                char: 'd',
                text: 'During the hours of darkness',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2722',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'When may you drive or park in a cycle lane marked by a solid white line?',
        questionImg: 'Cyclelane.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'During the hours of daylight',
            },
            {
                char: 'b',
                text: 'Outside peak times',
            },
            {
                char: 'c',
                text: 'During the hours of darkness',
            },
            {
                char: 'd',
                text: 'Outside its period of operation',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2724',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re waiting at a level crossing. What should you do if the red warning lights continue to flash after a train has passed?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Get out and investigate',
            },
            {
                char: 'b',
                text: 'Zigzag around the barriers',
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
        code: 'adi2725',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving over a level crossing. What should you do if the warning lights come on and a bell rings?',
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
        code: 'adi2731',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What does the white line along the edge of the road mean?',
        questionImg: 'DSCF2715.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'It shows the edge of the carriageway',
            },
            {
                char: 'b',
                text: 'It shows the approach to a hazard',
            },
            {
                char: 'c',
                text: 'It means no parking',
            },
            {
                char: 'd',
                text: 'It means no overtaking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2738',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do if a dashboard warning light comes on while you`re driving?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Continue if the engine sounds all right',
            },
            {
                char: 'b',
                text: 'Hope that it`s just a temporary electrical fault',
            },
            {
                char: 'c',
                text: 'Deal with the problem when there`s more time',
            },
            {
                char: 'd',
                text: 'Check out the problem quickly and safely',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2743',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What must you do to any load that you carry on a roof rack?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Fasten it securely',
            },
            {
                char: 'b',
                text: 'Remove it when you park on the side of the road',
            },
            {
                char: 'c',
                text: 'Make it as light as possible',
            },
            {
                char: 'd',
                text: 'Cover it with plastic sheeting',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2747',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re on a long downhill slope. What should you do to help control the speed of your vehicle?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Select neutral',
            },
            {
                char: 'b',
                text: 'Select a lower gear',
            },
            {
                char: 'c',
                text: 'Turn off the engine',
            },
            {
                char: 'd',
                text: 'Apply the parking brake gently',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2755',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How can you help the environment and avoid wasting fuel?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By having your vehicle properly serviced',
            },
            {
                char: 'b',
                text: 'By keeping an empty roof rack on your car',
            },
            {
                char: 'c',
                text: 'By always using the same brand of fuel',
            },
            {
                char: 'd',
                text: 'By driving with your windows open',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2757',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What`s most likely to waste fuel?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reducing your speed',
            },
            {
                char: 'b',
                text: 'Having an empty roof rack on your car',
            },
            {
                char: 'c',
                text: 'Using the wrong grade of fuel',
            },
            {
                char: 'd',
                text: 'Driving within the speed limit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2758',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'How can you avoid fuel spillage after you`ve refuelled your car?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Fill the tank to the top, so that no air remains in the tank',
            },
            {
                char: 'b',
                text: 'Use a locking filler cap',
            },
            {
                char: 'c',
                text: 'Check your fuel gauge is working',
            },
            {
                char: 'd',
                text: 'Securely fasten the filler cap',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2761',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Why should you take care to avoid spillage when refuelling a vehicle fitted with a diesel engine?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Diesel is sticky',
            },
            {
                char: 'b',
                text: 'Diesel is odourless',
            },
            {
                char: 'c',
                text: 'Diesel is unstable',
            },
            {
                char: 'd',
                text: 'Diesel is slippery',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2762',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What can you do to help protect the environment?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use your car for very short journeys',
            },
            {
                char: 'b',
                text: 'Remove your roof rack when it`s unloaded',
            },
            {
                char: 'c',
                text: 'Drive faster to reduce journey times',
            },
            {
                char: 'd',
                text: 'Avoid using cruise control',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2763',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Your vehicle is fitted with anti-lock brakes. How should you use your brakes to stop quickly in an emergency?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Brake firmly and pump the brake pedal on and off',
            },
            {
                char: 'b',
                text: 'Brake rapidly and firmly, without releasing the brake pedal',
            },
            {
                char: 'c',
                text: 'Brake gently and pump the brake pedal on and off',
            },
            {
                char: 'd',
                text: 'Brake rapidly once, and immediately release the brake pedal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2764',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Anti-lock brakes prevent the vehicle`s wheels from locking under heavy braking. What will this help to reduce?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Aquaplaning',
            },
            {
                char: 'b',
                text: 'Skidding',
            },
            {
                char: 'c',
                text: 'Understeering',
            },
            {
                char: 'd',
                text: 'Oversteering',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2767',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Your car is fitted with anti-lock brakes. What technique should you use to stop in an emergency?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Brake normally and avoid turning the steering wheel',
            },
            {
                char: 'b',
                text: 'Press the brake pedal firmly until you`ve stopped',
            },
            {
                char: 'c',
                text: 'Keep pushing and releasing the footbrake quickly to prevent skidding',
            },
            {
                char: 'd',
                text: 'Apply the parking brake to reduce the stopping distance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2769',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Which road surface may cause anti-lock brakes to be less effective?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A dry surface',
            },
            {
                char: 'b',
                text: 'A loose surface',
            },
            {
                char: 'c',
                text: 'A firm surface',
            },
            {
                char: 'd',
                text: 'A good surface',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2770',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How do anti-lock brakes help drivers?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They allow vehicles to travel faster',
            },
            {
                char: 'b',
                text: 'They help drivers keep steering control during heavy braking',
            },
            {
                char: 'c',
                text: 'They help drivers keep control when they`re accelerating',
            },
            {
                char: 'd',
                text: 'They make motorway driving easier',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2773',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Your vehicle has anti-lock brakes. In which conditions may they be ineffective at preventing skidding?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In foggy conditions',
            },
            {
                char: 'b',
                text: 'On surface water',
            },
            {
                char: 'c',
                text: 'At night on unlit roads',
            },
            {
                char: 'd',
                text: 'On dry tarmac',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2774',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'When will anti-lock brakes be activated?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When you don`t brake quickly enough',
            },
            {
                char: 'b',
                text: 'When excessive brake pressure has been applied',
            },
            {
                char: 'c',
                text: 'When you haven`t seen a hazard ahead',
            },
            {
                char: 'd',
                text: 'When you`re speeding on a slippery road surface',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2780',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Why are vehicles fitted with high-intensity rear fog lights?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To help them to be seen when they`re being driven at high speed',
            },
            {
                char: 'b',
                text: 'In case they break down in a dangerous position',
            },
            {
                char: 'c',
                text: 'To make them more visible in thick fog',
            },
            {
                char: 'd',
                text: 'To warn drivers following too closely to drop back',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2789',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`ve driven through a ford. What should you do when you`re out of the water?',
        questionImg: 'TS4516.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Check your tyre pressures',
            },
            {
                char: 'b',
                text: 'Switch on your headlights',
            },
            {
                char: 'c',
                text: 'Accelerate quickly',
            },
            {
                char: 'd',
                text: 'Test your brakes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2792',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You want to turn right at a box junction. What should you do if there`s oncoming traffic?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Wait in the box junction if your exit road is clear',
            },
            {
                char: 'b',
                text: 'Wait before the junction until it`s clear of all traffic',
            },
            {
                char: 'c',
                text: 'Drive on, because you can`t turn right at a box junction',
            },
            {
                char: 'd',
                text: 'Drive into the box junction when signalled by oncoming traffic',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2795',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'When would you inflate your tyres above the recommended normal pressure?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When the roads are slippery',
            },
            {
                char: 'b',
                text: 'When you`ll be driving in cold weather',
            },
            {
                char: 'c',
                text: 'When the tyre tread is worn below 2 mm',
            },
            {
                char: 'd',
                text: 'When you`ll be driving fast for a long distance',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2796',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What will a heavy load on your roof rack cause?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Improved road-holding',
            },
            {
                char: 'b',
                text: 'Reduction in stopping distance',
            },
            {
                char: 'c',
                text: 'Lighter steering',
            },
            {
                char: 'd',
                text: 'Reduction in stability',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2797',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do if you have to stop your vehicle in an emergency?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Apply the parking brake and footbrake together',
            },
            {
                char: 'b',
                text: 'Keep both hands on the wheel',
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
        code: 'adi2798',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do if your vehicle pulls to one side when you`re braking?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Change the tyres around',
            },
            {
                char: 'b',
                text: 'Consult your garage as soon as possible',
            },
            {
                char: 'c',
                text: 'Pump the pedal when braking',
            },
            {
                char: 'd',
                text: 'Use your parking brake at the same time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2800',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving a car on a motorway. Unless signs show otherwise, what`s the speed limit?',
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
        code: 'adi2802',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving in heavy rain. What should you do if your steering suddenly feels very light?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Steer towards the side of the road',
            },
            {
                char: 'b',
                text: 'Apply gentle acceleration',
            },
            {
                char: 'c',
                text: 'Brake firmly to reduce speed',
            },
            {
                char: 'd',
                text: 'Ease off the accelerator',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2803',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How can you tell when you`re driving on black ice?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It`s easier to brake',
            },
            {
                char: 'b',
                text: 'The noise from your tyres sounds louder',
            },
            {
                char: 'c',
                text: 'You see black ice on the road',
            },
            {
                char: 'd',
                text: 'Your steering feels light',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2807',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Your car`s front wheels are out of balance. How will this affect your car?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They`ll cause the steering to pull to one side',
            },
            {
                char: 'b',
                text: 'They`ll cause the brakes to fail',
            },
            {
                char: 'c',
                text: 'They`ll cause the tyres to deflate',
            },
            {
                char: 'd',
                text: 'They`ll cause the steering to vibrate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2814',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Why would you fit chains to your wheels?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To prevent damage to the road surface',
            },
            {
                char: 'b',
                text: 'To prevent wear to the tyres',
            },
            {
                char: 'c',
                text: 'To prevent skidding in deep snow',
            },
            {
                char: 'd',
                text: 'To prevent the brakes from locking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2819',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving along a wet road. How might you tell that your vehicle`s tyres are losing their grip on the surface?',
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
        code: 'adi2821',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'While you`re driving, what will happen if you hold the clutch pedal down or roll in neutral for too long?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You`ll increase the amount of fuel the vehicle uses',
            },
            {
                char: 'b',
                text: 'You`ll cause the engine to overheat',
            },
            {
                char: 'c',
                text: 'You`ll reduce your control over the vehicle',
            },
            {
                char: 'd',
                text: 'You`ll wear out the tyres more quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2822',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'How can you use your vehicle`s engine to help control your speed?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Change to a lower gear',
            },
            {
                char: 'b',
                text: 'Select reverse gear',
            },
            {
                char: 'c',
                text: 'Change to a higher gear',
            },
            {
                char: 'd',
                text: 'Select neutral',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2823',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving down a steep hill. Why could keeping the clutch down or selecting neutral for too long be dangerous?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Your power steering will fail',
            },
            {
                char: 'b',
                text: 'Your vehicle will pick up speed',
            },
            {
                char: 'c',
                text: 'Your engine will be damaged',
            },
            {
                char: 'd',
                text: 'Your front tyres will wear very quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2834',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Why could keeping the clutch down or selecting neutral for long periods of time be dangerous?',
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
                text: 'You`ll have less steering and braking control',
            },
            {
                char: 'd',
                text: 'The tyres will wear out more quickly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2835',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving towards a zebra crossing. What should you do if pedestrians are waiting to cross?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Give way to the elderly and infirm only',
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
        code: 'adi2854',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What will improve your vehicle`s fuel consumption?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Making short journeys with a cold engine',
            },
            {
                char: 'b',
                text: 'Planning well ahead',
            },
            {
                char: 'c',
                text: 'Late and harsh braking',
            },
            {
                char: 'd',
                text: 'Driving in lower gears',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2855',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re in the right-hand lane of a dual carriageway. What should you do when you see this sign?',
        questionImg: '800yds.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Move into a lane on your left in good time',
            },
            {
                char: 'b',
                text: 'Move into a lane on your left immediately',
            },
            {
                char: 'c',
                text: 'Wait to see which lane is moving faster',
            },
            {
                char: 'd',
                text: 'Keep in the right-hand lane for as long as you can',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2857',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Where would you find a catalytic converter on your vehicle?',
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
        code: 'adi2863',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Why is it particularly important to carry out a check on your vehicle before making a long motorway journey?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You`ll have to do more harsh braking on motorways',
            },
            {
                char: 'b',
                text: 'Motorway service areas don`t deal with breakdowns',
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
        code: 'adi2866',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving on a motorway. What does it mean if the car ahead shows its hazard warning lights for a short time?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The driver wants you to overtake',
            },
            {
                char: 'b',
                text: 'The driver is going to change lanes',
            },
            {
                char: 'c',
                text: 'Traffic ahead is slowing or stopping suddenly',
            },
            {
                char: 'd',
                text: 'There`s a police speed check ahead',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2869',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving on an urban clearway during its time of operation. Apart from breakdowns, when may you stop on this road?',
        questionImg: 'Urban clearway.png',
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
        code: 'adi2870',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re looking for somewhere to park your vehicle. Neither you or your passenger are disabled. What should you do if the only spaces available are marked for disabled use?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Park in these spaces because everywhere else is full',
            },
            {
                char: 'b',
                text: 'Double park in the aisle and switch on your hazard warning lights',
            },
            {
                char: 'c',
                text: 'Use these spaces because the disabled markings aren`t enforceable',
            },
            {
                char: 'd',
                text: 'Find somewhere else to park, unless you`re a registered disabled driver',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2872',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Another driver flashes their headlights at you. How should you interpret this signal?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'There`s a radar speed trap ahead',
            },
            {
                char: 'b',
                text: 'They`re giving way to you',
            },
            {
                char: 'c',
                text: 'They`re warning you of their presence',
            },
            {
                char: 'd',
                text: 'There`s something wrong with your vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2876',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What will be affected if you overload your vehicle?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The gearbox',
            },
            {
                char: 'b',
                text: 'The journey time',
            },
            {
                char: 'c',
                text: 'The handling',
            },
            {
                char: 'd',
                text: 'The battery life',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2878',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What does your vehicle`s catalytic converter reduce?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'How long it takes for the engine to warm up',
            },
            {
                char: 'b',
                text: 'Damage to the engine caused by using dirty fuel',
            },
            {
                char: 'c',
                text: 'Harmful compounds in the exhaust emissions',
            },
            {
                char: 'd',
                text: 'How much noise the engine produces',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2884',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How should you drive on a road where there are road humps?',
        questionImg: '85BW9960.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Maintain a reduced speed throughout',
            },
            {
                char: 'b',
                text: 'Accelerate quickly between each one',
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
        code: 'adi2885',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving towards a zebra crossing. What should you do if you see a person in a wheelchair waiting to cross?',
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
        code: 'adi2908',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What does the curved direction arrow on the road indicate?',
        questionImg: 'IMG_1887.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The lane to follow for your destination',
            },
            {
                char: 'b',
                text: 'Traffic should turn left ahead',
            },
            {
                char: 'c',
                text: 'There`s a turning place ahead',
            },
            {
                char: 'd',
                text: 'The direction in which you should pass solid double white lines',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2914',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving on a motorway that has chevrons painted on the carriageway. In good weather, at least how many chevrons should be visible between you and the next vehicle in your lane?',
        questionImg: '85BW1572.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'One',
            },
            {
                char: 'b',
                text: 'Two',
            },
            {
                char: 'c',
                text: 'Three',
            },
            {
                char: 'd',
                text: 'Four',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2950',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re waiting at a railway level crossing. What should you do if the red lights keep flashing after a train has passed?',
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
                text: 'Continue to wait',
            },
            {
                char: 'd',
                text: 'Proceed with caution',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2951',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Why are these yellow lines painted across the carriageway?',
        questionImg: '85BW9937.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To make drivers aware of their speed',
            },
            {
                char: 'b',
                text: 'To help drivers keep the correct separation distance',
            },
            {
                char: 'c',
                text: 'To tell drivers not to change lanes',
            },
            {
                char: 'd',
                text: 'To indicate a `no parking` area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2952',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What`s the purpose of a continuous white line along the side of the road?',
        questionImg: 'DSCF2715.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To show a `no parking` zone',
            },
            {
                char: 'b',
                text: 'To show a 30 mph zone',
            },
            {
                char: 'c',
                text: 'To show the edge of the carriageway',
            },
            {
                char: 'd',
                text: 'To show you`re approaching a level crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2955',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Why are yellow lines painted across the road on the approach to some roundabouts?',
        questionImg: '85BW9937.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They show a `no overtaking` area',
            },
            {
                char: 'b',
                text: 'To warn you to choose the correct lane',
            },
            {
                char: 'c',
                text: 'To make you aware of your speed',
            },
            {
                char: 'd',
                text: 'They warn of a change in speed limit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2956',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What does it mean if you see a vehicle showing a flashing green light?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The vehicle is being used by the police on non-urgent duties',
            },
            {
                char: 'b',
                text: 'The vehicle is being used by a doctor on an emergency call',
            },
            {
                char: 'c',
                text: 'The vehicle is being used by a road safety patrol',
            },
            {
                char: 'd',
                text: 'The vehicle is being used to carry a wide load',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2957',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What`s most likely to cause a crash, if it`s allowed to get too low?',
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
                text: 'Battery electrolyte level',
            },
            {
                char: 'd',
                text: 'Radiator coolant level',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2958',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What does the continuous white line at the side of the road indicate?',
        questionImg: 'DSCF2426.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There are traffic lights ahead',
            },
            {
                char: 'b',
                text: 'No overtaking',
            },
            {
                char: 'c',
                text: 'The footpath on the left',
            },
            {
                char: 'd',
                text: 'The edge of the carriageway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2960',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What does this sign mean?',
        questionImg: 'Advisory speed on bend.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You mustn`t exceed 20 mph on the bend',
            },
            {
                char: 'b',
                text: 'There`s a 20 mph zone with traffic-calming features',
            },
            {
                char: 'c',
                text: 'There`s a 20 mph speed limit after the bend',
            },
            {
                char: 'd',
                text: 'You`re advised not to exceed 20 mph on the bend',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2961',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What type of road uses direction signs with a green background?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Urban motorway',
            },
            {
                char: 'b',
                text: 'Cycle route',
            },
            {
                char: 'c',
                text: 'Tourist route',
            },
            {
                char: 'd',
                text: 'Primary route',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3007',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You see a pedestrian with a dog. What does it mean if the dog is wearing a distinctive yellow or burgundy coat?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The person is elderly',
            },
            {
                char: 'b',
                text: 'The person is colour-blind',
            },
            {
                char: 'c',
                text: 'The person is dog-training',
            },
            {
                char: 'd',
                text: 'The person has hearing difficulties',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3008',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re parking on the left, facing downhill. You apply the parking brake firmly. What further safety precautions should you take?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Turn your wheels to the left and select reverse gear',
            },
            {
                char: 'b',
                text: 'Turn your wheels to the right and select reverse gear',
            },
            {
                char: 'c',
                text: 'Keep your wheels straight and select fifth gear',
            },
            {
                char: 'd',
                text: 'Keep your wheels straight and select neutral',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3009',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re making a right turn. What could you do if you think your indicators might be difficult to see?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Put the indicator on later',
            },
            {
                char: 'b',
                text: 'Give an arm signal to emphasise the indicator',
            },
            {
                char: 'c',
                text: 'Veer from side to side as you slow down',
            },
            {
                char: 'd',
                text: 'Turn as quickly as you can',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3010',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re giving a lesson in a car fitted with automatic transmission. What should you tell the pupil to do whenever the vehicle is stationary?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Keep their foot firmly on the accelerator',
            },
            {
                char: 'b',
                text: 'Put the gear selector in the `D` position',
            },
            {
                char: 'c',
                text: 'Apply the parking brake fully',
            },
            {
                char: 'd',
                text: 'Put the gear selector in the `R` position',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3011',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'How should you apply the footbrake when you`re stopping normally?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Progressively and smoothly, easing off the brake as the car comes to a rest',
            },
            {
                char: 'b',
                text: 'Sharply, maintaining firm pressure until the car stops',
            },
            {
                char: 'c',
                text: 'Lightly at first, then by rapid cadence braking',
            },
            {
                char: 'd',
                text: 'Gently, well after selecting a low gear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3012',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'When are you advised to increase your tyre pressures so that they`re higher than normal?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you`ll be filling the fuel tank',
            },
            {
                char: 'b',
                text: 'When you`ll be driving on very rough roads',
            },
            {
                char: 'c',
                text: 'When you`ll be driving in cold or wet weather',
            },
            {
                char: 'd',
                text: 'When you`ll be driving at high speeds over long distances',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3015',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Why should you make sure your head restraint is properly adjusted?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It makes you more comfortable',
            },
            {
                char: 'b',
                text: 'It protects you from whiplash injury',
            },
            {
                char: 'c',
                text: 'It makes you relax',
            },
            {
                char: 'd',
                text: 'It helps you to maintain your concentration',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3042',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You see white diagonal lines, bounded by broken lines, painted on the road. One of their uses is to protect traffic turning right. What other purpose do these markings have?',
        questionImg: 'Hatch_markings.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To allow extra space for wide loads',
            },
            {
                char: 'b',
                text: 'To provide a space for emergency vehicles',
            },
            {
                char: 'c',
                text: 'To separate streams of traffic',
            },
            {
                char: 'd',
                text: 'To provide space for overtaking motorcyclists',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3049',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What liquid should you use to top up your battery?',
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
                text: 'Tap water',
            },
            {
                char: 'd',
                text: 'Diluted anti-freeze',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3050',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What could happen if you put too much oil in your engine?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The oil filter will become blocked',
            },
            {
                char: 'b',
                text: 'The engine oil will overheat',
            },
            {
                char: 'c',
                text: 'The engine will use less oil',
            },
            {
                char: 'd',
                text: 'The oil seals may be damaged',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3058',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What happens in a controlled zone?',
        questionImg: 'ContZone.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Cyclists have priority over motor vehicles',
            },
            {
                char: 'b',
                text: 'Waiting restrictions are normally indicated by yellow time plates',
            },
            {
                char: 'c',
                text: 'Speed is controlled by traffic-calming measures',
            },
            {
                char: 'd',
                text: 'Waiting restrictions are normally indicated by yellow lines only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3059',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Which road users are most likely to be permitted to share a bus lane during its times of operation?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Cyclists',
            },
            {
                char: 'b',
                text: 'Drivers towing caravans',
            },
            {
                char: 'c',
                text: 'Drivers of small vans',
            },
            {
                char: 'd',
                text: 'Delivery drivers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3060',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'As you`re approaching this junction, the green light changes to amber. What should you do if you`re unable to stop at the first white line?',
        questionImg: 'J7525.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Proceed carefully through the junction, ignoring the second stop line',
            },
            {
                char: 'b',
                text: 'Stop just beyond the second line, keeping the junction clear',
            },
            {
                char: 'c',
                text: 'Stop at the second line, in the area marked for cyclists',
            },
            {
                char: 'd',
                text: 'Stop as soon as you can and reverse back to the first stop line',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3061',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Which type of vehicle is allowed to pass this sign?',
        questionImg: 'TS4669.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Small lorry',
            },
            {
                char: 'b',
                text: 'Minibus',
            },
            {
                char: 'c',
                text: 'Pedal cycle',
            },
            {
                char: 'd',
                text: 'Private taxi',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3062',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you advise your pupil to do when they see this sign?',
        questionImg: 'Busncycles.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Proceed past the sign, as only buses and cycles are prohibited from using the route',
            },
            {
                char: 'b',
                text: 'Keep right, as the left-hand side of the road ahead is for buses and cycles only',
            },
            {
                char: 'c',
                text: 'Choose another route, as the road ahead is for buses and cycles only',
            },
            {
                char: 'd',
                text: 'Avoid stopping on the road ahead, as parking places are provided for buses and cycles only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3063',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Where do waiting restrictions allow you to stop to pick up or set down passengers?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'At school entrances',
            },
            {
                char: 'b',
                text: 'At bus stops',
            },
            {
                char: 'c',
                text: 'On Red Routes',
            },
            {
                char: 'd',
                text: 'On urban clearways',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3064',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you tell your pupil if they ask you what this sign means?',
        questionImg: 'Speedcamera.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'There`s a viewpoint or area of outstanding natural beauty ahead',
            },
            {
                char: 'b',
                text: 'Only roadside mobile cameras are currently in use',
            },
            {
                char: 'c',
                text: 'You should turn on your speed-camera detection equipment',
            },
            {
                char: 'd',
                text: 'Traffic regulations are enforced by cameras in this area',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3065',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What advice should you give to your pupils about using cruise control?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'In the UK, there are no opportunities for learners to drive at a steady cruising speed',
            },
            {
                char: 'b',
                text: 'Figures show that the driver is much better than cruise control at keeping to a steady speed',
            },
            {
                char: 'c',
                text: 'You could benefit from using cruise control if you can see well ahead and the road conditions are good',
            },
            {
                char: 'd',
                text: 'Because of new technology, modern cars do not need the driver to be fuel-efficient',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3066',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re giving a driving lesson in an unfamiliar town. What should you tell your pupil if you see this sign?',
        questionImg: 'TS4085.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Drive on; it doesn`t apply to you',
            },
            {
                char: 'b',
                text: 'Follow the park-and-ride signs',
            },
            {
                char: 'c',
                text: 'Give way only to trams from the right',
            },
            {
                char: 'd',
                text: 'Don`t drive past this traffic sign',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3067',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'On a motorway, where would vehicles travelling in opposite directions share the same carriageway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'In the acceleration lane',
            },
            {
                char: 'b',
                text: 'In a contraflow system',
            },
            {
                char: 'c',
                text: 'On the hard shoulder',
            },
            {
                char: 'd',
                text: 'In a congested section',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3068',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What does this sign mean?',
        questionImg: 'Chippings20mph.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Loose chippings',
            },
            {
                char: 'b',
                text: 'Road flooded',
            },
            {
                char: 'c',
                text: 'Loose rocks',
            },
            {
                char: 'd',
                text: 'Bumpy road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3069',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Your pupil is driving in a stream of traffic. You see this sign ahead. What advice should you give to your pupil?',
        questionImg: 'Chippings20mph.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Keep well back from the vehicle in front',
            },
            {
                char: 'b',
                text: 'Slow down at once by braking sharply',
            },
            {
                char: 'c',
                text: 'Look out for water on the roads',
            },
            {
                char: 'd',
                text: 'Slow down and try your brakes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3070',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Why should you tell your pupil to obey the speed limit shown on this sign?',
        questionImg: 'Chippings20mph.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To reduce the amount of chippings thrown up by the tyres',
            },
            {
                char: 'b',
                text: 'To prevent other drivers from driving too fast over the chippings',
            },
            {
                char: 'c',
                text: 'To prevent damage to the new road surface',
            },
            {
                char: 'd',
                text: 'To comply with the law',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3071',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Your pupil asks you about this sign, which they`ve seen recently. What should you tell them it means?',
        questionImg: 'TS4685.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Ring road on a primary route',
            },
            {
                char: 'b',
                text: 'Restricted route on a main road',
            },
            {
                char: 'c',
                text: 'Road restricted on a tram route',
            },
            {
                char: 'd',
                text: 'Red Route on a primary route',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3072',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What advice should you give to a pupil who asks whether it`s permitted to drive on the hatch markings?',
        questionImg: '85BW6768.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You can drive on the hatch markings, but only if it`s necessary and safe',
            },
            {
                char: 'b',
                text: 'You should always position well to the left of the markings',
            },
            {
                char: 'c',
                text: 'You should always wait in this area when you`re turning right',
            },
            {
                char: 'd',
                text: 'You should never enter the hatched area under any circumstances',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3073',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What does this white arrow on the road mean?',
        questionImg: 'IMG_1887.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'All traffic must turn left at the next junction',
            },
            {
                char: 'b',
                text: 'You may overtake on the left if it`s safe to do so',
            },
            {
                char: 'c',
                text: 'Overtaking vehicles should return to the left',
            },
            {
                char: 'd',
                text: 'The road ahead has a camber to the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3075',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What should you be aware of when you see this sign?',
        questionImg: 'TS4549.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Possible flooding or deep water at a ford',
            },
            {
                char: 'b',
                text: 'There may be oncoming vehicles out of sight',
            },
            {
                char: 'c',
                text: 'A sudden change in the road surface condition',
            },
            {
                char: 'd',
                text: 'An overgrown ditch or soft verge alongside the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3076',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What does this symbol on a direction sign indicate?',
        questionImg: 'TS4572.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Direction to a campsite',
            },
            {
                char: 'b',
                text: 'Route for high vehicles only',
            },
            {
                char: 'c',
                text: 'Emergency diversion route',
            },
            {
                char: 'd',
                text: 'Direction to a tourist attraction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3077',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What plate would you normally find with this sign?',
        questionImg: 'TS4666.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '',
                img: 'For2miles.png',
            },
            {
                char: 'b',
                text: '',
                img: 'Givewaytooncoming.png',
            },
            {
                char: 'c',
                text: '',
                img: 'Priorityover.png',
            },
            {
                char: 'd',
                text: '',
                img: 'Hiddendip.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3078',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'This plate is used with which sign?',
        questionImg: 'NoVehicles.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'TS4669.png',
            },
            {
                char: 'b',
                text: '',
                img: 'TS4670.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4668.png',
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
        code: 'adi3079',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving in the left-hand lane of a three-lane dual carriageway. As you approach a junction, you see this sign on a gantry. What should you do if you wish to go straight ahead?',
        questionImg: 'TS4742.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Continue in the left-hand lane, as all three lanes carry on through the junction',
            },
            {
                char: 'b',
                text: 'Move across to the middle lane, as the left-hand lane leaves at the junction',
            },
            {
                char: 'c',
                text: 'Move across to the right-hand lane, as this is the only one that goes ahead at the junction',
            },
            {
                char: 'd',
                text: 'Straddle both the left-hand and middle lanes, as you`re not sure which lane to use',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3080',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'If you saw this sign, what would you tell your pupil?',
        questionImg: 'TS4674.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtaking isn`t recommended, but it isn`t prohibited',
            },
            {
                char: 'b',
                text: 'Overtaking is prohibited until you see a sign cancelling the restriction',
            },
            {
                char: 'c',
                text: 'There`s adequate visibility to overtake safely',
            },
            {
                char: 'd',
                text: 'All traffic ahead is travelling in the same direction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3081',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Your pupil asks what the blue patch means on this sign. What`s the best reply?',
        questionImg: 'TS4743.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Motorway regulations apply on the road immediately ahead',
            },
            {
                char: 'b',
                text: 'The road ahead is being upgraded to a motorway',
            },
            {
                char: 'c',
                text: 'It shows an alternative route for non-motorway traffic',
            },
            {
                char: 'd',
                text: 'The road ahead leads to a junction with a motorway',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3082',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What does a differential do when a car is cornering?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It allows the driven wheels to turn at the same speed',
            },
            {
                char: 'b',
                text: 'It allows the outer driven wheel to turn more slowly than the inner wheel',
            },
            {
                char: 'c',
                text: 'It allows the inner driven wheel to turn more slowly than the outer wheel',
            },
            {
                char: 'd',
                text: 'It allows the driven wheels to rotate in opposite directions',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3087',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What does it mean when you see this line along the centre of the road?',
        questionImg: 'DSCF2339.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Oncoming vehicles have priority',
            },
            {
                char: 'b',
                text: 'You may now overtake',
            },
            {
                char: 'c',
                text: 'There`s a hazard ahead',
            },
            {
                char: 'd',
                text: 'The national speed limit applies',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3088',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What`s the purpose of yellow crisscross lines at a junction?',
        questionImg: '85BW1216.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To make you more aware of the traffic lights',
            },
            {
                char: 'b',
                text: 'To guide you into position as you turn',
            },
            {
                char: 'c',
                text: 'To prevent the junction from becoming blocked',
            },
            {
                char: 'd',
                text: 'To show you where to stop when the lights change',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3089',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do if your vehicle has a fire in the engine compartment?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Remove the oil cap',
            },
            {
                char: 'b',
                text: 'Open the bonnet and put out the flames',
            },
            {
                char: 'c',
                text: 'Remove the coolant cap',
            },
            {
                char: 'd',
                text: 'Call the fire service',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3095',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'Which sign shows a lane for use by pedal cycles only?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'WCyclists.png',
            },
            {
                char: 'b',
                text: '',
                img: 'NoCyclists.png',
            },
            {
                char: 'c',
                text: '',
                img: 'Pedestrianandcycle.png',
            },
            {
                char: 'd',
                text: '',
                img: 'Cycle.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3096',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re approaching this sign. Which sign are you likely to have just passed?',
        questionImg: 'Trybrakes.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: '',
                img: 'Slippery.png',
            },
            {
                char: 'b',
                text: '',
                img: 'Bumps.png',
            },
            {
                char: 'c',
                text: '',
                img: 'TS4516.png',
            },
            {
                char: 'd',
                text: '',
                img: 'Fallingrocks.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3098',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What speed limit would you expect to find in residential streets?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '20 mph',
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
                text: '40 mph',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3100',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re approaching a pelican crossing. What should you do if the amber light is flashing?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Give way to pedestrians who are crossing',
            },
            {
                char: 'b',
                text: 'Encourage waiting pedestrians to cross',
            },
            {
                char: 'c',
                text: 'Only continue when the green light appears',
            },
            {
                char: 'd',
                text: 'Stop even if the crossing is clear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3102',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What is known to cause excessive or uneven tyre wear?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The type of gearbox',
            },
            {
                char: 'b',
                text: 'Having the wheels out of alignment',
            },
            {
                char: 'c',
                text: 'Gentle use of the accelerator',
            },
            {
                char: 'd',
                text: 'A damaged exhaust system',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3103',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What type of vehicle displays this sign?',
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
        code: 'adi3112',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What do zigzag lines at a pedestrian crossing mean?',
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
                text: 'Don`t sound the horn',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3139',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`ve just driven through flood water. How should you dry out the brakes?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop and pump the brake pedal several times',
            },
            {
                char: 'b',
                text: 'Drive at a normal speed until the brakes work properly',
            },
            {
                char: 'c',
                text: 'Stop at the nearest garage and have the brakes looked at',
            },
            {
                char: 'd',
                text: 'Drive slowly and apply light pressure to the footbrake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3140',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What instruction should you give a pupil about controlling the vehicle`s speed when going down a long, steep hill?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use a combination of a lower gear and the footbrake',
            },
            {
                char: 'b',
                text: 'Switch the engine off and coast to save fuel',
            },
            {
                char: 'c',
                text: 'Pump the footbrake to prevent the brakes from overheating',
            },
            {
                char: 'd',
                text: 'Engage the highest gear to keep the engine revs as low as possible',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3149',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What should you do if a tyre bursts while you`re driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Change gear and relax your grip on the steering wheel',
            },
            {
                char: 'b',
                text: 'Brake sharply and steer to the right',
            },
            {
                char: 'c',
                text: 'Hold the steering wheel firmly and let the car stop gradually',
            },
            {
                char: 'd',
                text: 'Brake firmly and steer to the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3150',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What`s the most likely cause of a car pulling to the right when the footbrake is applied?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The wheels need balancing',
            },
            {
                char: 'b',
                text: 'Excessive road camber',
            },
            {
                char: 'c',
                text: 'The road surface is uneven',
            },
            {
                char: 'd',
                text: 'The brakes on the left side are inefficient',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3151',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What advice should you give to a pupil about driving through shallow flood water in a car fitted with manual transmission?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drive very slowly in first gear, keeping the engine speed very low',
            },
            {
                char: 'b',
                text: 'Drive very slowly in first gear, keeping the engine speed high',
            },
            {
                char: 'c',
                text: 'Drive through as quickly as possible and don`t touch the brakes',
            },
            {
                char: 'd',
                text: 'Drive through quickly while keeping your left foot on the brake',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3152',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What advice should you give to a pupil about moving off on snow or ice?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Use a low gear and spin the wheels to clear the snow',
            },
            {
                char: 'b',
                text: 'Use the lowest gear you can and accelerate quickly',
            },
            {
                char: 'c',
                text: 'Use the highest gear you can, with gentle acceleration',
            },
            {
                char: 'd',
                text: 'Use the highest gear and keep the engine revs high',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3153',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Head restraints should be adjusted correctly. What injuries do they protect you from?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Arm and leg injuries',
            },
            {
                char: 'b',
                text: 'Abdominal injuries',
            },
            {
                char: 'c',
                text: 'Neck and spine injuries',
            },
            {
                char: 'd',
                text: 'Hip injuries',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3154',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'Where should the head restraint be positioned for it to be most effective?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'At least as high as the eyes or top of the ears',
            },
            {
                char: 'b',
                text: 'At least as high as the shoulders',
            },
            {
                char: 'c',
                text: 'In the lowest position and pointing forwards',
            },
            {
                char: 'd',
                text: 'In the highest position and tilted backwards',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3155',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What type of injury can be prevented by a correctly adjusted head restraint?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Knee injury',
            },
            {
                char: 'b',
                text: 'Wrist injury',
            },
            {
                char: 'c',
                text: 'Facial injury',
            },
            {
                char: 'd',
                text: 'Whiplash injury',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3156',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What`s the most likely cause when the brake pedal feels spongy?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Incorrectly adjusted pedal linkages',
            },
            {
                char: 'b',
                text: 'Worn brake pads',
            },
            {
                char: 'c',
                text: 'Air in the hydraulic system',
            },
            {
                char: 'd',
                text: 'Worn discs',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3157',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving along a dual carriageway and have to brake hard in a straight line. Which wheels do most of the braking?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'It`s evenly distributed between the front and rear wheels',
            },
            {
                char: 'b',
                text: 'The rear wheels',
            },
            {
                char: 'c',
                text: 'It will alternate from one side of the car to the other',
            },
            {
                char: 'd',
                text: 'The front wheels',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3161',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'A driver wants to go ahead at a crossroads controlled by a police officer. What recognised arm signal should they give?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '',
                img: 'Adi3161a.png',
            },
            {
                char: 'b',
                text: '',
                img: 'Adi3161b.png',
            },
            {
                char: 'c',
                text: '',
                img: 'Adi3161c.png',
            },
            {
                char: 'd',
                text: '',
                img: 'Adi3161d.png',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3170',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What advice should you give to someone who intends to drive a left-hand-drive vehicle in the UK?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Make full use of the mirrors',
            },
            {
                char: 'b',
                text: 'Give signals earlier',
            },
            {
                char: 'c',
                text: 'Keep well to the left of your lane',
            },
            {
                char: 'd',
                text: 'Use hand signals when turning',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3174',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you tell a pupil when teaching them to brake normally?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Brake progressively and smoothly, easing off as the car comes to a stop',
            },
            {
                char: 'b',
                text: 'Brake sharply at first, then maintain a firm pressure until the car stops',
            },
            {
                char: 'c',
                text: 'Brake firmly at first, then use the cadence braking technique',
            },
            {
                char: 'd',
                text: 'Brake firmly at first, ease the pressure, then increase it again until the car stops',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3177',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'For the cockpit drill to be effective, some items should be checked before others. What`s the correct sequence?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Seat belt before parking brake',
            },
            {
                char: 'b',
                text: 'Doors before parking brake',
            },
            {
                char: 'c',
                text: 'Mirrors before seat position',
            },
            {
                char: 'd',
                text: 'Fuel quantity before doors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3179',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re driving on a motorway. The traffic ahead is braking sharply because of an incident. How could you warn traffic behind?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Briefly use the hazard warning lights',
            },
            {
                char: 'b',
                text: 'Switch on the hazard warning lights and leave them on',
            },
            {
                char: 'c',
                text: 'Briefly use the rear fog lights',
            },
            {
                char: 'd',
                text: 'Switch on the headlights and leave them on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3180',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You`re about to reverse into a side road. What should you do if you see a pedestrian who wants to cross behind your car?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Wave to the pedestrian to stop',
            },
            {
                char: 'b',
                text: 'Reverse before the pedestrian starts to cross',
            },
            {
                char: 'c',
                text: 'Wave to the pedestrian to cross',
            },
            {
                char: 'd',
                text: 'Give way to the pedestrian',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3181',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'How can you modify your driving to help the environment?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Look and plan further ahead',
            },
            {
                char: 'b',
                text: 'Accelerate briskly through the gears',
            },
            {
                char: 'c',
                text: 'Use your car mainly for short journeys',
            },
            {
                char: 'd',
                text: 'Brake later than normal but without skidding',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3184',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question: 'What should you do when you`ve driven through a flood?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Stop and check the tyres',
            },
            {
                char: 'b',
                text: 'Stop and dry the brakes',
            },
            {
                char: 'c',
                text: 'Check your exhaust',
            },
            {
                char: 'd',
                text: 'Test your brakes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3195',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
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
        code: 'adi3206',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You see a vehicle with a flashing amber beacon ahead. What warning does this give you?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The vehicle is slow-moving',
            },
            {
                char: 'b',
                text: 'The vehicle is carrying flammable goods',
            },
            {
                char: 'c',
                text: 'The vehicle is a doctor`s car',
            },
            {
                char: 'd',
                text: 'The vehicle is a fire engine',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3207',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'When may you cross double solid white lines along the centre of the road?',
        questionImg: 'IMG_1871.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'To pass a traffic queue at a junction',
            },
            {
                char: 'b',
                text: 'To pass a tractor travelling at 20 mph',
            },
            {
                char: 'c',
                text: 'To pass a road sweeper travelling at 15 mph',
            },
            {
                char: 'd',
                text: 'To pass parked vehicles on your side of the road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3208',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'How does an anti-lock braking system help you keep control during emergency braking?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'By allowing you to apply cadence braking',
            },
            {
                char: 'b',
                text: 'By preventing the wheels from locking up',
            },
            {
                char: 'c',
                text: 'By making the brakes more powerful',
            },
            {
                char: 'd',
                text: 'By taking over responsibility for driving',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3228',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What�s the minimum depth of tread on the tyres of a trailer?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '1 mm\n',
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
                text: '2.2 mm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3229',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'You�re about to start a journey towing a trailer. What should you do if you notice that a light on your trailer is not working?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Continue with your journey because the lights on your car are working',
            },
            {
                char: 'b',
                text: 'Disconnect the trailer electrical coupling before continuing with your journey',
            },
            {
                char: 'c',
                text: 'Repair the fault before continuing with your journey',
            },
            {
                char: 'd',
                text: 'Book the trailer in for repair before continuing with your journey',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3230',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What does it mean if your trailer has a maximum authorised mass (MAM) of 3,500 kg?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Your trailer can carry a load of 3,500 kg',
            },
            {
                char: 'b',
                text: 'Your empty trailer weighs 3,500 kg ',
            },
            {
                char: 'c',
                text: 'Your trailer and towing vehicle combined cannot weigh more than 3,500 kg',
            },
            {
                char: 'd',
                text: 'Your trailer and load combined cannot weigh more than 3,500 kg',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'adi3231',
        topicCode:
            'traffic_signs_and_signals_car_control_pedestrians_mechanical_knowledge',
        question:
            'What should you do if your trailer starts to swerve or snake?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Reduce speed gently',
            },
            {
                char: 'b',
                text: 'Brake firmly',
            },
            {
                char: 'c',
                text: 'Increase speed',
            },
            {
                char: 'd',
                text: 'Steer sharply',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2003',
        topicCode: 'driving_test_disabilities_law',
        question:
            'How should you park when you leave your vehicle overnight on a road that has a 40 mph speed limit?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Facing the traffic',
            },
            {
                char: 'b',
                text: 'With parking lights on',
            },
            {
                char: 'c',
                text: 'With dipped headlights on',
            },
            {
                char: 'd',
                text: 'Near a street light',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2085',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Which vehicles aren`t allowed in the right-hand lane of a three-lane motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Vans',
            },
            {
                char: 'b',
                text: 'Motorcycles',
            },
            {
                char: 'c',
                text: 'Vehicles towing a trailer or caravan',
            },
            {
                char: 'd',
                text: 'Motorcycles fitted with a sidecar',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2102',
        topicCode: 'driving_test_disabilities_law',
        question: 'Where is parking prohibited?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'In a one-way street',
            },
            {
                char: 'b',
                text: 'Near a police station',
            },
            {
                char: 'c',
                text: 'In a side road',
            },
            {
                char: 'd',
                text: 'On zigzag lines near a pedestrian crossing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2104',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re driving at night. When can you park on the right-hand side of a road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you park in a one-way street',
            },
            {
                char: 'b',
                text: 'When you park with your offside parking lights switched on',
            },
            {
                char: 'c',
                text: 'When you park less than 10 metres (32 feet) from a junction',
            },
            {
                char: 'd',
                text: 'When you park under a lamppost',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2106',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re entering an area of roadworks. What must you do if you see this sign?',
        questionImg: '50_mph_roadworks.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Not exceed the speed limit',
            },
            {
                char: 'b',
                text: 'Obey the limit only during rush hour',
            },
            {
                char: 'c',
                text: 'Treat the speed limit as advisory',
            },
            {
                char: 'd',
                text: 'Obey the limit except for overnight',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2143',
        topicCode: 'driving_test_disabilities_law',
        question: 'For how long is an MOT certificate normally valid?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Three years',
            },
            {
                char: 'b',
                text: '10,000 miles',
            },
            {
                char: 'c',
                text: 'One year',
            },
            {
                char: 'd',
                text: '30,000 miles',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2183',
        topicCode: 'driving_test_disabilities_law',
        question: 'What`s a cover note?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A driving licence',
            },
            {
                char: 'b',
                text: 'A temporary insurance certificate',
            },
            {
                char: 'c',
                text: 'A registration document',
            },
            {
                char: 'd',
                text: 'An MOT certificate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2233',
        topicCode: 'driving_test_disabilities_law',
        question: 'What`s the nearest you may park to a junction?',
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
        code: 'adi2237',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Your vehicle is stationary in traffic. When are you allowed to use the horn?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When a moving vehicle may cause you danger',
            },
            {
                char: 'b',
                text: 'At any time you wish',
            },
            {
                char: 'c',
                text: 'If your hazard warning lights aren`t working',
            },
            {
                char: 'd',
                text: 'To signal that you`re in a hurry',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2260',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Which vehicles aren`t allowed to use the right-hand lane of a three-lane motorway?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Motorcycles',
            },
            {
                char: 'b',
                text: 'Vehicles under 3.5 tonnes',
            },
            {
                char: 'c',
                text: 'Vehicles towing a trailer',
            },
            {
                char: 'd',
                text: 'People carriers with seven seats',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2299',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A car is fitted with dual accelerator, clutch and brake pedals. Which of the pedals must be removed before the car can be used for a driving test?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Clutch and brake',
            },
            {
                char: 'b',
                text: 'Accelerator and clutch',
            },
            {
                char: 'c',
                text: 'Clutch',
            },
            {
                char: 'd',
                text: 'Accelerator',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2301',
        topicCode: 'driving_test_disabilities_law',
        question:
            'For how long does a driving-test pass certificate remain valid?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '1 year',
            },
            {
                char: 'b',
                text: '2 years',
            },
            {
                char: 'c',
                text: '3 years',
            },
            {
                char: 'd',
                text: '10 years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2302',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Drivers convicted of certain dangerous driving offences are required to take an extended driving test. How does the extended test differ from the standard driving test?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It`s the same length of time as the standard driving test but includes additional manoeuvres',
            },
            {
                char: 'b',
                text: 'It takes about 70 minutes and includes additional manoeuvres',
            },
            {
                char: 'c',
                text: 'It takes about 70 minutes but includes the same manoeuvres as the standard driving test',
            },
            {
                char: 'd',
                text: 'It`s focused on the cause of the candidate`s conviction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2310',
        topicCode: 'driving_test_disabilities_law',
        question:
            'When will an approved driving instructor (ADI) be subject to standards checks?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Only for the first 6 months that they`re on the register',
            },
            {
                char: 'b',
                text: 'For the whole time that they`re on the register',
            },
            {
                char: 'c',
                text: 'Only for the first 12 months that they`re on the register',
            },
            {
                char: 'd',
                text: 'Only until they achieve a Grade A',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2313',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What rules apply to anyone who accompanies a learner driver while they drive on the road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They must have held a full EC/EEA licence for the category of vehicle being driven for at least 3 years and they must be at least 21 years old',
            },
            {
                char: 'b',
                text: 'They must have held a full EC/EEA licence for the category of vehicle being driven for at least 3 years and they must be at least 25 years old',
            },
            {
                char: 'c',
                text: 'They must have held a full EC/EEA licence for the category of vehicle being driven for at least 4 years and they must be at least 21 years old',
            },
            {
                char: 'd',
                text: 'They must have held a full EC/EEA licence for the category of vehicle being driven for at least 4 years and they must be at least 25 years old',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2314',
        topicCode: 'driving_test_disabilities_law',
        question:
            'At what age does a passenger become responsible for fastening their own seat belt?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '14 years old',
            },
            {
                char: 'b',
                text: '15 years old',
            },
            {
                char: 'c',
                text: '16 years old',
            },
            {
                char: 'd',
                text: '18 years old',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2315',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re driving at night on a road that has a 30 mph speed limit. You find somewhere to park near a junction. How close to the junction are you allowed to park?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '10 metres (32 feet)',
            },
            {
                char: 'b',
                text: '15 metres (50 feet)',
            },
            {
                char: 'c',
                text: '20 metres (66 feet)',
            },
            {
                char: 'd',
                text: '25 metres (82 feet)',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'adi2392',
        topicCode: 'driving_test_disabilities_law',
        question:
            'At what age does category B driving entitlement normally expire?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'On your 60th birthday',
            },
            {
                char: 'b',
                text: 'On your 65th birthday',
            },
            {
                char: 'c',
                text: 'On your 70th birthday',
            },
            {
                char: 'd',
                text: 'On your 75th birthday',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2396',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Your pupil, who is profoundly deaf, intends to apply for a driving test. What advice should you give them about their application?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Declare their deafness on the application form',
            },
            {
                char: 'b',
                text: 'Complete an application form for a special test',
            },
            {
                char: 'c',
                text: 'Complete an application form for an extended test',
            },
            {
                char: 'd',
                text: 'Don`t declare their deafness',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2398',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What`s the minimum driving age for a person receiving the enhanced rate of the mobility component of Personal Independence Payment?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '15 years',
            },
            {
                char: 'b',
                text: '16 years',
            },
            {
                char: 'c',
                text: '17 years',
            },
            {
                char: 'd',
                text: '21 years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2405',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re driving at night. When can you park on the right-hand side of the road?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When you`re in a one-way street',
            },
            {
                char: 'b',
                text: 'When you`re in a built-up area and at least 10 metres (32 feet) from a junction',
            },
            {
                char: 'c',
                text: 'When the road has street lighting',
            },
            {
                char: 'd',
                text: 'When you`re in a two-way street',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2406',
        topicCode: 'driving_test_disabilities_law',
        question:
            'How often do you have to renew your photo on a photocard car driving licence?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Every 10 years',
            },
            {
                char: 'b',
                text: 'Every 5 years',
            },
            {
                char: 'c',
                text: 'Every 25 years',
            },
            {
                char: 'd',
                text: 'Every 30 years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2407',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What should a driving-test candidate do if their inertia-reel seat belt has temporarily locked and they cannot put it on at the start of their test?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Carry on with the test without a seat belt',
            },
            {
                char: 'b',
                text: 'Ask the examiner to postpone the test and seek a further appointment',
            },
            {
                char: 'c',
                text: 'Put it on as soon as the belt has released',
            },
            {
                char: 'd',
                text: 'Ignore it and fit it sometime later',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2408',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A child under 3 years old is travelling in the front seat of a car. What must the driver ensure?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The child must wear the adult seat belt where there`s no appropriate child restraint',
            },
            {
                char: 'b',
                text: 'The child must wear an appropriate child restraint',
            },
            {
                char: 'c',
                text: 'The child must be carried by an adult',
            },
            {
                char: 'd',
                text: 'The child must be in a rear-facing seat',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2410',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What should you do with driving-school L plates when the vehicle isn`t being used for tuition?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They must be covered',
            },
            {
                char: 'b',
                text: 'They must be removed completely',
            },
            {
                char: 'c',
                text: 'They can remain uncovered',
            },
            {
                char: 'd',
                text: 'They should be turned upside down',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2483',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re teaching your pupil how to reverse a car into a side road on the left. What should you teach them to do if the rear nearside tyre gently touches the kerb?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Drive forward to straighten the car and then continue reversing',
            },
            {
                char: 'b',
                text: 'Drive around the corner to where they started from and start again',
            },
            {
                char: 'c',
                text: 'Accept that they`re not ready for this exercise and drive off',
            },
            {
                char: 'd',
                text: 'Keep going backwards until they mount the kerb and then pull forward',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2486',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What will a candidate be given if they fail their driving test?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'An application for a new provisional licence',
            },
            {
                char: 'b',
                text: 'A copy of The Highway Code and advice on how to prepare next time',
            },
            {
                char: 'c',
                text: 'A copy of the driving-test report and an explanation of the faults',
            },
            {
                char: 'd',
                text: 'An indication of the number of lessons they need to correct their faults',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2490',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A disabled driver has difficulty turning their head. What will help overcome this disability when they`re driving?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Special seating',
            },
            {
                char: 'b',
                text: 'Additional mirrors',
            },
            {
                char: 'c',
                text: 'Being allowed not to wear a seat belt',
            },
            {
                char: 'd',
                text: 'Automatic transmission',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2491',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What restrictions are placed on someone`s driving licence if they`re blind in one eye?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They`re only permitted to drive while they`re wearing glasses',
            },
            {
                char: 'b',
                text: 'They`re required to have additional mirrors fitted to any car they drive',
            },
            {
                char: 'c',
                text: 'Their driving licence isn`t restricted in any way',
            },
            {
                char: 'd',
                text: 'They aren`t permitted to drive a motor car',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2492',
        topicCode: 'driving_test_disabilities_law',
        question: 'What type of car may a totally deaf person drive?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Any type of car',
            },
            {
                char: 'b',
                text: 'Only a light motor car',
            },
            {
                char: 'c',
                text: 'Any car fitted with extra rear-view mirrors',
            },
            {
                char: 'd',
                text: 'Only a car that`s been suitably adapted for them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2493',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What`s the national speed limit for a car on a dual carriageway?',
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
        code: 'adi2496',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Tyres on cars, light vans and trailers must have a continuous tread depth of at least 1.6 mm. How much of the tyre must have this depth of tread?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The central three-quarters of the width of the tyre',
            },
            {
                char: 'b',
                text: 'At least half the width of the tyre',
            },
            {
                char: 'c',
                text: 'The whole width of the tyre',
            },
            {
                char: 'd',
                text: 'The outside half of the tyre',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2498',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re driving on a two-way road. There are double solid white lines along the centre of the road. What should you do if there`s a stationary vehicle parked on the left?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You may pass the stationary vehicle, but only if you don`t cross the solid line',
            },
            {
                char: 'b',
                text: 'You may cross the solid line to pass the stationary vehicle if it`s safe',
            },
            {
                char: 'c',
                text: 'You should report the obstruction to the police',
            },
            {
                char: 'd',
                text: 'You must wait for the driver to move their vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2500',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re teaching a pupil to reverse into a side road. What`s the law governing your use of the seat belt?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'You must wear your seat belt at any time the pupil is moving forward during the manoeuvre',
            },
            {
                char: 'b',
                text: 'You must wear your seat belt for the whole manoeuvre',
            },
            {
                char: 'c',
                text: 'You may leave your seat belt off for the whole of the manoeuvre',
            },
            {
                char: 'd',
                text: 'You should remove your seat belt to assist the pupil',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2530',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re driving in fog. When should high-intensity rear fog lights be used?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'When visibility is reduced to 100 metres (328 feet) or less',
            },
            {
                char: 'b',
                text: 'When visibility is reduced to 125 metres (408 feet) or less',
            },
            {
                char: 'c',
                text: 'When visibility is reduced to 150 metres (490 feet) or less',
            },
            {
                char: 'd',
                text: 'When visibility is reduced to 175 metres (572 feet) or less',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2542',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re parking on a road that has a 30 mph speed limit. How close are you allowed to park to a junction?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '5 metres (16 feet)',
            },
            {
                char: 'b',
                text: '10 metres (32 feet)',
            },
            {
                char: 'c',
                text: '15 metres (49 feet)',
            },
            {
                char: 'd',
                text: '25 metres (82 feet)',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'adi2570',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What will happen if your pupil is taking their driving test but they can`t meet the eyesight requirements?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They`ll be allowed to continue with the test',
            },
            {
                char: 'b',
                text: 'They`ll have the test cancelled',
            },
            {
                char: 'c',
                text: 'They`ll have the test postponed',
            },
            {
                char: 'd',
                text: 'They`ll fail the test at once and not be asked to drive',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2574',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What should the candidate do when the examiner gives the signal for an emergency stop?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Brake promptly',
            },
            {
                char: 'b',
                text: 'Check the mirrors',
            },
            {
                char: 'c',
                text: 'Depress the clutch',
            },
            {
                char: 'd',
                text: 'Steer to the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2575',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A car driving-test candidate with sight in only one eye passes the test. What restriction will the examiner place on their licence?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The licence will be restricted to vehicles with engines of less than 1500 cc',
            },
            {
                char: 'b',
                text: 'The licence won`t be restricted',
            },
            {
                char: 'c',
                text: 'The licence will be restricted to adapted vehicles only',
            },
            {
                char: 'd',
                text: 'The licence will be restricted to daytime driving only',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2577',
        topicCode: 'driving_test_disabilities_law',
        question: 'Who can accompany a candidate on their driving test?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Anyone aged 16 or over',
            },
            {
                char: 'b',
                text: 'Only their driving instructor',
            },
            {
                char: 'c',
                text: 'No other person',
            },
            {
                char: 'd',
                text: 'Only a family member',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2578',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Your car is fitted with a dual accelerator pedal. What must you do before using the car for a driving test?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Display a sign warning that the car is fitted with a dual accelerator pedal',
            },
            {
                char: 'b',
                text: 'Put a rubber boot over the dual accelerator pedal',
            },
            {
                char: 'c',
                text: 'Remove the dual accelerator pedal',
            },
            {
                char: 'd',
                text: 'Ensure the dual accelerator pedal is in working order',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2581',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You have a pupil who is colour-blind. How will this affect their ability to drive?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They must have a doctor`s certificate allowing them to drive',
            },
            {
                char: 'b',
                text: 'They`re allowed to drive without restriction',
            },
            {
                char: 'c',
                text: 'They`re not legally allowed to drive',
            },
            {
                char: 'd',
                text: 'They must have glasses with special lenses',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2583',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What`s the national speed limit on a two-way road outside a built-up area?',
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
        code: 'adi2584',
        topicCode: 'driving_test_disabilities_law',
        question: 'Who can supervise a learner car driver?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Someone who is 18 (or over) and who has held a full licence for that category of vehicle for at least one year',
            },
            {
                char: 'b',
                text: 'Someone who is 20 (or over) and has held a full licence for that category of vehicle for at least three years',
            },
            {
                char: 'c',
                text: 'Someone who is 21 (or over) and has held a full licence for that category of vehicle for at least three years',
            },
            {
                char: 'd',
                text: 'Someone who is 21 (or over) and has held a full licence for that category of vehicle for at least one year',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2585',
        topicCode: 'driving_test_disabilities_law',
        question:
            'The MOT certificate on your vehicle has expired. When can you drive the vehicle on the road?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'You may continue driving the vehicle providing it passes the MOT test within one calendar month',
            },
            {
                char: 'b',
                text: 'You may drive the vehicle to and from an MOT test appointment',
            },
            {
                char: 'c',
                text: 'You must arrange for the MOT testing station to collect the vehicle on a trailer',
            },
            {
                char: 'd',
                text: 'You can drive the vehicle when you`ve told your insurance company',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2587',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Who`s responsible for ensuring that a 16 year-old passenger wears a seat belt?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The car driver',
            },
            {
                char: 'b',
                text: 'The 16 year-old',
            },
            {
                char: 'c',
                text: 'The parent/guardian',
            },
            {
                char: 'd',
                text: 'The car owner',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2615',
        topicCode: 'driving_test_disabilities_law',
        question: 'What do you need before you can drive legally?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Breakdown cover',
            },
            {
                char: 'b',
                text: 'A vehicle handbook',
            },
            {
                char: 'c',
                text: 'Proof of your identity',
            },
            {
                char: 'd',
                text: 'Insurance cover',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2616',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Your pupil has just passed their first practical driving test. What will they have to do if they get six penalty points on their licence within two years?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Retake only the theory test',
            },
            {
                char: 'b',
                text: 'Retake the theory and practical tests',
            },
            {
                char: 'c',
                text: 'Retake only the practical test',
            },
            {
                char: 'd',
                text: 'Reapply for a full licence immediately',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2639',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re driving a friend`s children home from school. They`re both under 14 years old. Who`s responsible for making sure they wear a seat belt?',
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
                text: 'You',
            },
            {
                char: 'd',
                text: 'Your friend',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2640',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Your car is fitted with seat belts. When can a passenger travel in your car without wearing a seat belt?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When they`re under 14 years old',
            },
            {
                char: 'b',
                text: 'When they`re under 1.5 metres (5 feet) in height',
            },
            {
                char: 'c',
                text: 'When they`re sitting in a rear seat',
            },
            {
                char: 'd',
                text: 'When they`re exempt for medical reasons',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2657',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Which lights should you use when you`re driving in daylight and it`s foggy?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Sidelights',
            },
            {
                char: 'b',
                text: 'Full-beam headlights',
            },
            {
                char: 'c',
                text: 'Hazard warning lights',
            },
            {
                char: 'd',
                text: 'Dipped headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2668',
        topicCode: 'driving_test_disabilities_law',
        question:
            'After passing your driving test, you suffer from ill health. What must you do if your health affects your driving?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Inform your local police station',
            },
            {
                char: 'b',
                text: 'Get on as best you can',
            },
            {
                char: 'c',
                text: 'Ask your doctor for an exemption certificate',
            },
            {
                char: 'd',
                text: 'Inform the licensing authority',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2669',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re invited to a pub lunch. What`s your best course of action if you know that you`ll have to drive in the evening?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Avoid mixing your alcoholic drinks',
            },
            {
                char: 'b',
                text: 'Eat a hot meal with your alcoholic drinks',
            },
            {
                char: 'c',
                text: 'Have some milk before drinking alcohol',
            },
            {
                char: 'd',
                text: 'Don`t drink any alcohol at all',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2671',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What should a driver do if they`ve had a few alcoholic drinks at a party?',
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
        code: 'adi2676',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What should you do if you`re taking drugs that are likely to affect your driving?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Seek medical advice before driving',
            },
            {
                char: 'b',
                text: 'Limit your driving to essential journeys',
            },
            {
                char: 'c',
                text: 'Only drive if accompanied by a full licence holder',
            },
            {
                char: 'd',
                text: 'Only drive for short distances',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2686',
        topicCode: 'driving_test_disabilities_law',
        question: 'Where would parking be likely to cause an obstruction?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'In a parking bay',
            },
            {
                char: 'b',
                text: 'In a lay-by',
            },
            {
                char: 'c',
                text: 'Where the kerb is raised',
            },
            {
                char: 'd',
                text: 'Where the kerb has been lowered for wheelchairs',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2707',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re driving in fog. When should you switch on your rear fog lights?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When visibility has fallen to your overall stopping distance',
            },
            {
                char: 'b',
                text: 'When visibility has fallen to 10 car lengths',
            },
            {
                char: 'c',
                text: 'When visibility has fallen to 100 metres (328 feet) or less',
            },
            {
                char: 'd',
                text: 'When visibility has fallen to 200 metres (656 feet) or less',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2712',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What restriction applies to a category B provisional licence holder?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They can`t drive over 50 mph',
            },
            {
                char: 'b',
                text: 'They can`t drive at night',
            },
            {
                char: 'c',
                text: 'They can`t drive unaccompanied',
            },
            {
                char: 'd',
                text: 'They can`t drive with passengers in rear seats',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2713',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What`s the speed limit on a motorway for a car towing a trailer?',
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
        code: 'adi2720',
        topicCode: 'driving_test_disabilities_law',
        question:
            'When can car drivers use a cycle lane identified by this sign?',
        questionImg: 'Cycle_Lane.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'During the times shown',
            },
            {
                char: 'b',
                text: 'Outside the times shown',
            },
            {
                char: 'c',
                text: 'Never',
            },
            {
                char: 'd',
                text: 'At any time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2721',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re driving along a road that has a cycle lane marked by a solid white line. What does it mean if the road sign shows that the cycle lane is in operation?',
        questionImg: 'Cyclelane.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The lane may be used for parking your car',
            },
            {
                char: 'b',
                text: 'You may drive in that lane at any time',
            },
            {
                char: 'c',
                text: 'The lane may be used when necessary',
            },
            {
                char: 'd',
                text: 'You mustn`t drive in that lane',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2735',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What should you check before driving someone else`s vehicle?',
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
                text: 'That the owner has left the insurance documents in the vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2736',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What would be invalidated if the car you`re driving doesn`t have a valid MOT certificate?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The vehicle`s service record',
            },
            {
                char: 'b',
                text: 'The vehicle`s insurance',
            },
            {
                char: 'c',
                text: 'The vehicle`s excise licence',
            },
            {
                char: 'd',
                text: 'The vehicle`s registration document',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2745',
        topicCode: 'driving_test_disabilities_law',
        question: 'What would make a car tyre illegal?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When it`s second-hand',
            },
            {
                char: 'b',
                text: 'When there`s a large, deep cut in the side wall',
            },
            {
                char: 'c',
                text: 'When it`s used with a tyre of a different make on the same axle',
            },
            {
                char: 'd',
                text: 'When it`s used with a tyre of a different tread pattern on the same axle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2746',
        topicCode: 'driving_test_disabilities_law',
        question: 'What`s the legal minimum depth of tread for a car tyre?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '1.0 mm',
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
                text: '4.0 mm',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2750',
        topicCode: 'driving_test_disabilities_law',
        question: 'When can you use a mobile phone while you`re driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you`re satisfied that no other traffic is near',
            },
            {
                char: 'b',
                text: 'When you`re able to drive one-handed',
            },
            {
                char: 'c',
                text: 'When there`s a genuine emergency',
            },
            {
                char: 'd',
                text: 'When you have a passenger who can steer for you',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2751',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Your vehicle is fitted with a hands-free phone system. What`s likely to happen if you use this equipment while you`re driving?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Your driving will be unaffected',
            },
            {
                char: 'b',
                text: 'Your attention will be distracted away from driving',
            },
            {
                char: 'c',
                text: 'You`ll have trouble hearing the phone conversation',
            },
            {
                char: 'd',
                text: 'You`ll notice an improvement in your hazard perception',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2776',
        topicCode: 'driving_test_disabilities_law',
        question: 'When may you use your front fog lights?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When your headlights aren`t working',
            },
            {
                char: 'b',
                text: 'When you want extra light at night',
            },
            {
                char: 'c',
                text: 'When you don`t want to sound your horn',
            },
            {
                char: 'd',
                text: 'When visibility is seriously reduced',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2777',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re driving with your front fog lights switched on. What must you do if the fog has cleared?',
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
                text: 'Flash them to warn oncoming traffic that it`s foggy',
            },
            {
                char: 'd',
                text: 'Drive with them on instead of your headlights',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2779',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What lights should you use if daytime visibility is poor but not seriously reduced?',
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
        code: 'adi2781',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Why is it dangerous to leave rear fog lights on when they`re not needed?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They can be confused with brake lights',
            },
            {
                char: 'b',
                text: 'They could cause the battery to fail',
            },
            {
                char: 'c',
                text: 'They could overload the electrical system',
            },
            {
                char: 'd',
                text: 'They could stop the indicators working properly',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2784',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`ve just driven out of fog. What must you do now that visibility has improved?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Switch off your fog lights',
            },
            {
                char: 'b',
                text: 'Keep your rear fog lights on',
            },
            {
                char: 'c',
                text: 'Keep your front fog lights on',
            },
            {
                char: 'd',
                text: 'Leave your fog lights on in case the fog returns',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2801',
        topicCode: 'driving_test_disabilities_law',
        question: 'When can you use your front fog lights?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you`re dazzled by the lights of oncoming vehicles',
            },
            {
                char: 'b',
                text: 'At any time, so that you`re noticed',
            },
            {
                char: 'c',
                text: 'Instead of main-beam headlights',
            },
            {
                char: 'd',
                text: 'When visibility is 100 metres (328 feet) or less',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2849',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What`s the lowest level of insurance cover you must have to drive on public roads?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Third party, fire and theft',
            },
            {
                char: 'b',
                text: 'Fully comprehensive',
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
        code: 'adi2852',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re driving a car. What should you do before answering a call on your mobile phone?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Reduce your speed',
            },
            {
                char: 'b',
                text: 'Stop in a safe and convenient place',
            },
            {
                char: 'c',
                text: 'Check your mirrors',
            },
            {
                char: 'd',
                text: 'Check who`s calling',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2859',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You need glasses to bring your eyesight up to the required standard. When must you wear them?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Only in bad weather conditions',
            },
            {
                char: 'b',
                text: 'At all times when you`re driving',
            },
            {
                char: 'c',
                text: 'Only when you think it`s necessary',
            },
            {
                char: 'd',
                text: 'Only in bad light or at night time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2868',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re leaving your vehicle parked on a road. When may you leave the engine running?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'If you`ll be parked for less than five minutes',
            },
            {
                char: 'b',
                text: 'If the battery is flat',
            },
            {
                char: 'c',
                text: 'When you`re in a 20 mph zone',
            },
            {
                char: 'd',
                text: 'Not on any occasion',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2871',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`ve parked your vehicle on the road at night. When must you leave the parking lights switched on?',
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
                text: 'When you`re facing oncoming traffic',
            },
            {
                char: 'd',
                text: 'When you`re near a bus stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2873',
        topicCode: 'driving_test_disabilities_law',
        question: 'When must you show your motor insurance certificate?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you`re taking your driving test',
            },
            {
                char: 'b',
                text: 'When you`ve bought or sold a vehicle',
            },
            {
                char: 'c',
                text: 'When your vehicle is having an MOT inspection',
            },
            {
                char: 'd',
                text: 'When you`ve been involved in an incident',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2874',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What must you display clearly on your vehicle while you`re being paid to give driving lessons?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Your driving licence',
            },
            {
                char: 'b',
                text: 'Your instructor`s identification certificate',
            },
            {
                char: 'c',
                text: 'Your insurance certificate',
            },
            {
                char: 'd',
                text: 'The vehicle`s MOT test certificate',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2875',
        topicCode: 'driving_test_disabilities_law',
        question:
            'How many years after they`re newly registered must cars in Great Britain have an MOT test?',
        answer: 'b',
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
                text: 'Seven years',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'adi2877',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Who`s responsible for making sure that a vehicle isn`t overloaded?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The driver',
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
        code: 'adi2890',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What does it mean if you see a pedestrian carrying a white cane that has a red band or bands wrapped around it?',
        questionImg: 'IMG_0822.png',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The pedestrian is deaf but not visually impaired',
            },
            {
                char: 'b',
                text: 'The pedestrian is blind and deaf',
            },
            {
                char: 'c',
                text: 'The pedestrian is blind and without speech',
            },
            {
                char: 'd',
                text: 'The pedestrian is deaf and without speech',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2902',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Until you`re 70 years old, how often should you renew your photocard driving licence?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Every 5 years',
            },
            {
                char: 'b',
                text: 'Every 10 years',
            },
            {
                char: 'c',
                text: 'Every 15 years',
            },
            {
                char: 'd',
                text: 'Every 20 years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2903',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Under the New Drivers Act, a new driver will have their licence revoked if they get six or more penalty points on their licence. This only applies to drivers after they pass their first practical driving test. Over what period of time does it apply?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '2 years',
            },
            {
                char: 'b',
                text: '3 years',
            },
            {
                char: 'c',
                text: '4 years',
            },
            {
                char: 'd',
                text: '5 years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2949',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re driving on a road that has double white lines along the centre of the road. The line nearest you is continuous. When may you cross this line to overtake?',
        questionImg: 'IMG_5363.png',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When you`re passing traffic that`s queuing at a junction with a major road',
            },
            {
                char: 'b',
                text: 'When you can see there are no obstructions on the right-hand side of the road',
            },
            {
                char: 'c',
                text: 'When you`re passing a road maintenance vehicle that`s travelling at less than 10 mph',
            },
            {
                char: 'd',
                text: 'When you`re passing a car that`s slowing down to turn left into a minor road',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2953',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What`s the speed limit on a road that has street lights but no speed-limit repeater signs?',
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
        code: 'adi2963',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You want to use your mobile phone to make a personal call while you`re driving. What must you do if it has no hands-free facility?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Drive carefully while you`re using the phone',
            },
            {
                char: 'b',
                text: 'Park safely before using the phone',
            },
            {
                char: 'c',
                text: 'Slow down to less than 30 mph before using the phone',
            },
            {
                char: 'd',
                text: 'Hold the phone in your right hand',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2964',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re involved in a traffic incident. Which document will you need to produce for a police officer?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Vehicle registration certificate',
            },
            {
                char: 'b',
                text: 'Driving licence',
            },
            {
                char: 'c',
                text: 'Theory test certificate',
            },
            {
                char: 'd',
                text: 'Vehicle excise licence',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2991',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re teaching a pupil how to turn the vehicle around. Can you remove your seat belt while you`re teaching this exercise?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Yes, but only when asked to do so by the pupil',
            },
            {
                char: 'b',
                text: 'Yes, you may remove your seat belt during any manoeuvre that involves reversing',
            },
            {
                char: 'c',
                text: 'Yes, but only if the pupil holds an exemption certificate',
            },
            {
                char: 'd',
                text: 'Yes, you may remove your seat belt but only when the vehicle is actually reversing',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2992',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What rules apply to a car that`s being used for a driving test?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'It can be fitted with dual controls, including a dual accelerator that`s operable',
            },
            {
                char: 'b',
                text: 'It can be fitted with dual controls provided no dual accelerator is fitted',
            },
            {
                char: 'c',
                text: 'It must be fitted with a dual brake and dual clutch',
            },
            {
                char: 'd',
                text: 'It must be fitted with a dual brake, clutch and accelerator',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2994',
        topicCode: 'driving_test_disabilities_law',
        question: 'When are drivers allowed to remove their seat belt?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Only while they`re parking their car',
            },
            {
                char: 'b',
                text: 'When they`re carrying out any manoeuvre that involves reversing',
            },
            {
                char: 'c',
                text: 'Only when they`re road testing the car following a repair',
            },
            {
                char: 'd',
                text: 'When the seat belt is uncomfortable',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2996',
        topicCode: 'driving_test_disabilities_law',
        question:
            'An approved driving instructor (ADI) must always display red L plates (in Wales, red D or L plates or both) on the car when teaching learner drivers. What else must they display if they`re charging for the driving lesson?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Their insurance certificate',
            },
            {
                char: 'b',
                text: 'Their ADI certificate',
            },
            {
                char: 'c',
                text: 'Their health-and-safety certificate',
            },
            {
                char: 'd',
                text: 'Their Disclosure and Barring Service (DBS) check',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2997',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A driver (not subject to the New Drivers Act) will be disqualified if they accumulate 12 or more penalty points within what period of time?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Six months',
            },
            {
                char: 'b',
                text: 'Three years',
            },
            {
                char: 'c',
                text: 'Four years',
            },
            {
                char: 'd',
                text: 'Five years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2999',
        topicCode: 'driving_test_disabilities_law',
        question: 'Who can supervise a learner driver?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Someone who`s at least 20 years old and has held a full licence in that category of vehicle for the last three years',
            },
            {
                char: 'b',
                text: 'Someone who`s at least 21 years old and has held a full licence in that category of vehicle for the last three years',
            },
            {
                char: 'c',
                text: 'Someone who`s at least 21 years old and has held a full licence in that category of vehicle for the last year',
            },
            {
                char: 'd',
                text: 'Someone who`s at least 25 years old and has held a full licence in that category of vehicle for the last year',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3002',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Your vehicle has been involved in a collision with another vehicle. Some damage has occurred. What must you do after you`ve stopped?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Report the incident to the police some time within the next seven days',
            },
            {
                char: 'b',
                text: 'Show the other driver your registration and MOT certificates',
            },
            {
                char: 'c',
                text: 'Give your own and the vehicle owner`s name and address to anyone having reasonable grounds for requiring them',
            },
            {
                char: 'd',
                text: 'Give your name and address to all witnesses',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3003',
        topicCode: 'driving_test_disabilities_law',
        question:
            'When are projection markers required on an overhanging load?',
        questionImg: 'Projectionmarkers.png',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When the load overhangs the front or rear of the vehicle by more than 0.5 metres',
            },
            {
                char: 'b',
                text: 'When the load overhangs the front or rear of the vehicle by more than 1.0 metres',
            },
            {
                char: 'c',
                text: 'When the load overhangs the front or rear of the vehicle by more than 1.5 metres',
            },
            {
                char: 'd',
                text: 'When the load overhangs the front or rear of the vehicle by more than 2.0 metres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3004',
        topicCode: 'driving_test_disabilities_law',
        question:
            'How would it be illegal for a provisional licence holder to drive?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'At more than 30 mph',
            },
            {
                char: 'b',
                text: 'Without an accompanying driver',
            },
            {
                char: 'c',
                text: 'With passengers in the rear seats',
            },
            {
                char: 'd',
                text: 'If they`re under 18 years old',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3005',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A pupil has a friend who`s agreed to help with their driving tuition. What age and driving experience must they have?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They must be 18 or over and have a full driving licence',
            },
            {
                char: 'b',
                text: 'They must be 18 or over and hold an advanced driver`s certificate',
            },
            {
                char: 'c',
                text: 'They must be 21 or over and have held a full licence for at least two years',
            },
            {
                char: 'd',
                text: 'They must be 21 or over and have held a full licence for at least three years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3006',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What must a learner driver have before they drive on the road for the first time?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A driving licence without any penalty points',
            },
            {
                char: 'b',
                text: 'A professional driving instructor with them',
            },
            {
                char: 'c',
                text: 'A valid provisional driving licence',
            },
            {
                char: 'd',
                text: 'A driving-test booking',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3017',
        topicCode: 'driving_test_disabilities_law',
        question: 'Which vehicles aren`t allowed to use motorways?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Agricultural vehicles',
            },
            {
                char: 'b',
                text: 'Motorcycles over 125 cc',
            },
            {
                char: 'c',
                text: 'Double-deck buses',
            },
            {
                char: 'd',
                text: 'Vehicles towing trailers',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3021',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Which vehicle should display a flashing amber light when it`s being used on a dual carriageway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A non-emergency ambulance',
            },
            {
                char: 'b',
                text: 'An off-duty fire engine',
            },
            {
                char: 'c',
                text: 'An emergency doctor`s vehicle',
            },
            {
                char: 'd',
                text: 'A mobility scooter',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3033',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re leaving your vehicle unattended. How can you reduce the chance of it being broken into?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Cover any valuables with a jacket',
            },
            {
                char: 'b',
                text: 'Leave any valuables in a plain carrier bag',
            },
            {
                char: 'c',
                text: 'Place any valuables on the parcel shelf',
            },
            {
                char: 'd',
                text: 'Lock any valuables out of sight',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3034',
        topicCode: 'driving_test_disabilities_law',
        question: 'What should you do when you leave your car unattended?',
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
                text: 'Leave the hazard warning lights on',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3039',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A driver is convicted of drinking and driving twice within 10 years. They wish to have their licence returned. Who do they have to satisfy that they don`t have an alcohol problem?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The Disclosure and Barring Service',
            },
            {
                char: 'b',
                text: 'The Highways Agency',
            },
            {
                char: 'c',
                text: 'The Driver and Vehicle Standards Agency',
            },
            {
                char: 'd',
                text: 'The Driver and Vehicle Licensing Agency',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3044',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You`re parking on the road at night. When should you use parking lights?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When there are white lines in the middle of the road',
            },
            {
                char: 'b',
                text: 'When the speed limit exceeds 30 mph',
            },
            {
                char: 'c',
                text: 'When you`re facing oncoming traffic',
            },
            {
                char: 'd',
                text: 'When you`re near a bus stop',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3083',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What`s the first thing you should do if the vehicle you`re driving is involved in a collision?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Stop, but only if people are injured',
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
        code: 'adi3093',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You must use your headlights when visibility is seriously reduced. What distance would be classed as seriously reduced?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: '100 metres (328 feet) or less',
            },
            {
                char: 'b',
                text: '125 metres (408 feet) or less',
            },
            {
                char: 'c',
                text: '150 metres (490 feet) or less',
            },
            {
                char: 'd',
                text: '175 metres (572 feet) or less',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3131',
        topicCode: 'driving_test_disabilities_law',
        question:
            'When may you use your vehicle`s horn while you`re driving in a built-up area?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Between 7.00 am and 11.30 pm',
            },
            {
                char: 'b',
                text: 'Between midnight and 6.00 am',
            },
            {
                char: 'c',
                text: 'Between 11.30 pm and 6.00 am',
            },
            {
                char: 'd',
                text: 'Between 4.00 am and 7.00 am',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3133',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A police officer asks to see your documents. You don`t have them with you. How long do you have to produce them at a police station?',
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
        code: 'adi3141',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A learner driver with a disability wants to take a driving test. What advice should you give them?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Declare their disability when they apply for the test',
            },
            {
                char: 'b',
                text: 'Tell their examiner which company fitted the adaptations',
            },
            {
                char: 'c',
                text: 'Go ahead with the test without telling the examiner',
            },
            {
                char: 'd',
                text: 'Make sure they bring along their Blue Badge',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3143',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What`s the minimum distance from which an approved driving instructor (ADI) must be able to read a current-style (since 2001) number plate?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '20.5 metres (67 feet)',
            },
            {
                char: 'b',
                text: '26.5 metres (87 feet)',
            },
            {
                char: 'c',
                text: '30.5 metres (100 feet)',
            },
            {
                char: 'd',
                text: '36.0 metres (120 feet)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3144',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What`s the maximum authorised mass (MAM) of a category B vehicle?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '3.0 tonnes',
            },
            {
                char: 'b',
                text: '7.5 tonnes',
            },
            {
                char: 'c',
                text: '5.0 tonnes',
            },
            {
                char: 'd',
                text: '3.5 tonnes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3167',
        topicCode: 'driving_test_disabilities_law',
        question:
            'In some circumstances, you`re allowed to park your car on the road at night without lights. It must be facing in the direction of traffic flow and at least 10 metres (32 feet) from any junction. What other restriction applies?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The speed limit for the road must be 30 mph or less',
            },
            {
                char: 'b',
                text: 'The speed limit for the road must be 40 mph or less',
            },
            {
                char: 'c',
                text: 'The road must not be a dual carriageway',
            },
            {
                char: 'd',
                text: 'The road must not be on a bus route',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'adi3168',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What`s the minimum distance from which an approved driving instructor (ADI) must be able to read a number plate that has letters and figures 79 mm high and 50�mm wide?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '22.7 metres (75 feet)',
            },
            {
                char: 'b',
                text: '26.5 metres (87 feet)',
            },
            {
                char: 'c',
                text: '30.5 metres (100 feet)',
            },
            {
                char: 'd',
                text: '46.0 metres (150 feet)',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3175',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What sort of pass certificate will the examiner issue if a disabled driver passes their driving test in a specifically adapted motor car?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A pass certificate that states they can only drive a car with automatic transmission',
            },
            {
                char: 'b',
                text: 'A pass certificate that`s unrestricted',
            },
            {
                char: 'c',
                text: 'A pass certificate that limits them to driving a suitably adapted car',
            },
            {
                char: 'd',
                text: 'A pass certificate that limits them to certain speed limits for three years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3176',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A 17 year-old wants to learn to drive. What must they have before they start practising on the public highway?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'A passport',
            },
            {
                char: 'b',
                text: 'A valid provisional licence',
            },
            {
                char: 'c',
                text: 'A theory-test pass certificate',
            },
            {
                char: 'd',
                text: 'A lesson with an approved driving instructor',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3186',
        topicCode: 'driving_test_disabilities_law',
        question: 'What must you have when you`re renewing your vehicle tax?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Valid vehicle insurance',
            },
            {
                char: 'b',
                text: 'The vehicle`s service record',
            },
            {
                char: 'c',
                text: 'The vehicle handbook',
            },
            {
                char: 'd',
                text: 'A valid driving licence',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3187',
        topicCode: 'driving_test_disabilities_law',
        question:
            'You find that your eyesight has become very poor. Who must you inform if your optician says they can`t help you?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The licensing authority',
            },
            {
                char: 'b',
                text: 'Your doctor',
            },
            {
                char: 'c',
                text: 'The police',
            },
            {
                char: 'd',
                text: 'An approved optician',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3191',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What should you do when you park a vehicle overnight on a road with a 40 mph speed limit?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Park facing oncoming traffic',
            },
            {
                char: 'b',
                text: 'Leave the parking lights switched on',
            },
            {
                char: 'c',
                text: 'Leave the dipped headlights switched on',
            },
            {
                char: 'd',
                text: 'Park near a street light',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3192',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A candidate taking their practical driving test is allowed to have someone accompany them on the test. How should this person behave during the test?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They should take no part in the test',
            },
            {
                char: 'b',
                text: 'They should calm the candidate',
            },
            {
                char: 'c',
                text: 'They should intervene if the candidate drives dangerously',
            },
            {
                char: 'd',
                text: 'They should make notes of what`s said',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3193',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What does it mean if your motor insurance policy has an excess of �100?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'The insurance company will pay the first �100 of any claim',
            },
            {
                char: 'b',
                text: 'You`ll be paid �100 if you don`t have a collision',
            },
            {
                char: 'c',
                text: 'Your vehicle is insured for a value of �100 if it`s stolen',
            },
            {
                char: 'd',
                text: 'You`ll have to pay the first �100 of any claim',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3196',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A pupil with a physical disability is concerned that the examiner won`t understand their special needs. What should you tell them?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They`ll have to be much better than an able-bodied driver',
            },
            {
                char: 'b',
                text: 'All examiners are trained to assess the driving of candidates with special needs',
            },
            {
                char: 'c',
                text: 'The examiner will have more time to study their faults',
            },
            {
                char: 'd',
                text: 'They`ll be tested to a lower standard than an able-bodied driver',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3197',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Your pupil is at the end of their driving test. With your pupil`s permission, what does DVSA advise you to do?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Request a personal written report',
            },
            {
                char: 'b',
                text: 'Keep out of sight to avoid distraction',
            },
            {
                char: 'c',
                text: 'Request a separate debrief',
            },
            {
                char: 'd',
                text: 'Listen to the debrief',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3198',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What`s the minimum distance from which an examiner will ask a driving-test candidate to read a modern-style number plate?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: '18 metres',
            },
            {
                char: 'b',
                text: '20 metres',
            },
            {
                char: 'c',
                text: '22 metres',
            },
            {
                char: 'd',
                text: '25 metres',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3199',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What can a candidate do if they consider that their driving test wasn`t conducted properly?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Appeal to the Magistrates` Court in England and Wales or the Sheriff`s Court in Scotland',
            },
            {
                char: 'b',
                text: 'They have no right of appeal, other than discussing the matter with the examiner concerned',
            },
            {
                char: 'c',
                text: 'Complain to the manager of the driving-test centre',
            },
            {
                char: 'd',
                text: 'Write to the chief executive of the Driver and Vehicle Licensing Agency',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3200',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Why is it illegal to use a hand-held mobile phone while you`re driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It will affect your satellite navigation system',
            },
            {
                char: 'b',
                text: 'It will reduce your field of vision',
            },
            {
                char: 'c',
                text: 'It will distract your attention from the road',
            },
            {
                char: 'd',
                text: 'It will affect your vehicle`s electronic systems',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3201',
        topicCode: 'driving_test_disabilities_law',
        question:
            'A physically disabled driver passes their driving test in a specially adapted vehicle. How will their driving licence be restricted?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'They`ll only be allowed to drive vehicles with automatic transmission',
            },
            {
                char: 'b',
                text: 'They`ll be restricted to vehicles fitted with suitable adaptations',
            },
            {
                char: 'c',
                text: 'They`ll have no restriction on the type of vehicle they can drive',
            },
            {
                char: 'd',
                text: 'They`ll have to keep within certain speed limits for three years',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3203',
        topicCode: 'driving_test_disabilities_law',
        question: 'What rule applies on a road that displays this sign?',
        questionImg: 'TS4691.png',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'You mustn`t stop at any time',
            },
            {
                char: 'b',
                text: 'You may only stop to pick up passengers',
            },
            {
                char: 'c',
                text: 'You may only stop on the verge',
            },
            {
                char: 'd',
                text: 'The road is subject to a minimum speed limit',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3225',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Your pupil has just passed their driving test. What�s the maximum authorised mass (MAM) of any trailer that they can tow?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: '6,500 kg\n',
            },
            {
                char: 'b',
                text: '5,500 kg\n',
            },
            {
                char: 'c',
                text: '4,500 kg\n',
            },
            {
                char: 'd',
                text: '3,500 kg\n',
            },
        ],
        isNIExempts: true,
    },
    {
        code: 'adi3226',
        topicCode: 'driving_test_disabilities_law',
        question:
            'Someone is going to tow a trailer that�s wider than their car. What must they fit to their car before they start towing it?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Exterior towing mirrors\n',
            },
            {
                char: 'b',
                text: 'Projection markers\n',
            },
            {
                char: 'c',
                text: 'Parking sensors',
            },
            {
                char: 'd',
                text: 'Rear-view camera',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3227',
        topicCode: 'driving_test_disabilities_law',
        question:
            'What must you do when you hitch a trailer to a towing vehicle?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Fit a secondary coupling device',
            },
            {
                char: 'b',
                text: 'Grease the tow ball and hitch',
            },
            {
                char: 'c',
                text: 'Switch off the reversing sensor on the towing vehicle',
            },
            {
                char: 'd',
                text: 'Make sure you can see the trailer in the mirrors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2045',
        topicCode: 'publications_instructional_techniques',
        question: 'Typically, how does ageing affect people`s driving ability?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Older people take more risks',
            },
            {
                char: 'b',
                text: 'Older people overestimate their ability',
            },
            {
                char: 'c',
                text: 'Older people have slower reactions',
            },
            {
                char: 'd',
                text: 'Older people drive faster',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2057',
        topicCode: 'publications_instructional_techniques',
        question: 'Why do motorcyclists often wear bright clothing?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They must do so by law',
            },
            {
                char: 'b',
                text: 'It keeps them cool in summer',
            },
            {
                char: 'c',
                text: 'Bright colours are very popular',
            },
            {
                char: 'd',
                text: 'To make it easier for other road users to see them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2328',
        topicCode: 'publications_instructional_techniques',
        question:
            'How much verbal instruction is needed to help a pupil attain a good standard of driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'A constant amount throughout, regardless of competence',
            },
            {
                char: 'b',
                text: 'More as the test date approaches',
            },
            {
                char: 'c',
                text: 'Just enough to ensure they understand what`s required',
            },
            {
                char: 'd',
                text: 'None once they reach test standard',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2329',
        topicCode: 'publications_instructional_techniques',
        question: 'When should you assess a learner driver`s progress?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'When an improvement has been made',
            },
            {
                char: 'b',
                text: 'At the end of the course of lessons',
            },
            {
                char: 'c',
                text: 'Continuously, using dialogue and feedback',
            },
            {
                char: 'd',
                text: 'When the pupil has learnt as much as they can at that time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2330',
        topicCode: 'publications_instructional_techniques',
        question: 'What should you do if you have to use the dual controls?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Say nothing to preserve the pupil`s confidence',
            },
            {
                char: 'b',
                text: 'Ask the pupil if they understand why it was necessary to use them',
            },
            {
                char: 'c',
                text: 'Explain that it will be covered at the end of the lesson',
            },
            {
                char: 'd',
                text: 'Say nothing and expect the pupil to understand why',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2331',
        topicCode: 'publications_instructional_techniques',
        question:
            'Why do you need to take time to identify your pupil`s learning goals?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'To determine their range of general intelligence',
            },
            {
                char: 'b',
                text: 'To determine how much instruction will be required to complete the course',
            },
            {
                char: 'c',
                text: 'To help you and your pupil to agree the most effective learning plan',
            },
            {
                char: 'd',
                text: 'To confirm the final cost of their driver training',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2332',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you teach your pupils to do when they`re learning to turn their vehicle around in the road?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Concentrate on looking over their left shoulder',
            },
            {
                char: 'b',
                text: 'Concentrate on looking over their right shoulder',
            },
            {
                char: 'c',
                text: 'Carry out effective all-round observation',
            },
            {
                char: 'd',
                text: 'Check their mirrors continuously',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2333',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you do if a pupil drives the rear wheels over the kerb when they turn left?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Tell them that this fault can be avoided by first swinging out to the right',
            },
            {
                char: 'b',
                text: 'Ask them to explain why they think this happened',
            },
            {
                char: 'c',
                text: 'Explain that the rear wheels cut in when turning left',
            },
            {
                char: 'd',
                text: 'Demonstrate how this was caused by turning the steering wheel too late',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2336',
        topicCode: 'publications_instructional_techniques',
        question:
            'If you provide a demonstration of a skill in a lesson, how should you follow it up?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'With an opportunity for the pupil to check understanding and consolidate by practising',
            },
            {
                char: 'b',
                text: 'With a detailed analysis of the manoeuvre carried out',
            },
            {
                char: 'c',
                text: 'With a discussion of possible faults that may occur',
            },
            {
                char: 'd',
                text: 'With the introduction of a new subject',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2337',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you do if a pupil stops making progress in their learning?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Slow down the pace of instruction',
            },
            {
                char: 'b',
                text: 'Discuss blocks to progress and develop strategies to overcome the blocks\t',
            },
            {
                char: 'c',
                text: 'Make the pupil have extra lessons to help overcome the difficulty',
            },
            {
                char: 'd',
                text: 'Conclude they have learning difficulties and refer them to a specialist ADI',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2338',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you do if a pupil you`re instructing fails to make the progress you were expecting?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Be patient and continue the well-tried methods that are working with other pupils',
            },
            {
                char: 'b',
                text: 'Go on to more advanced driving situations to speed up the learning process',
            },
            {
                char: 'c',
                text: 'Ask the pupil if there`s a particular problem that`s holding them back',
            },
            {
                char: 'd',
                text: 'Continue to repeat the same exercise until the pupil gets it right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2341',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`re teaching a pupil to move away on a downhill gradient. What advice would you give them about the gears?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the lowest available gear',
            },
            {
                char: 'b',
                text: 'Use an appropriate gear for the gradient',
            },
            {
                char: 'c',
                text: 'Use the highest available gear',
            },
            {
                char: 'd',
                text: 'Use a lower gear than normal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2422',
        topicCode: 'publications_instructional_techniques',
        question: 'What`s meant by `transfer of learning`?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'When parents take on the responsibility for teaching their children to drive',
            },
            {
                char: 'b',
                text: 'When associations are made with previously learned skills and knowledge',
            },
            {
                char: 'c',
                text: 'When trainees learn from friends and colleagues',
            },
            {
                char: 'd',
                text: 'When pupils learn from their mistakes',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2423',
        topicCode: 'publications_instructional_techniques',
        question:
            'Your pupil`s knowledge and driving competence improve. What`s likely to happen to the level of instructor involvement?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It will remain the same',
            },
            {
                char: 'b',
                text: 'It will increase',
            },
            {
                char: 'c',
                text: 'It will decrease',
            },
            {
                char: 'd',
                text: 'It will finish',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2425',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`re teaching a pupil who continually drives too fast. What should you do to correct this problem?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Explain what can happen as a result of driving too fast',
            },
            {
                char: 'b',
                text: 'Impose a speed limit that`s lower than everyone else`s',
            },
            {
                char: 'c',
                text: 'Let them learn from experience, using the dual brake to ensure safety',
            },
            {
                char: 'd',
                text: 'Give more demonstrations than normal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2427',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you do if a pupil seems to have reached a point where they`ve stopped making progress in their learning?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Work with the pupil to identify any blocks to learning',
            },
            {
                char: 'b',
                text: 'Carry on with the set programme',
            },
            {
                char: 'c',
                text: 'Insist they get more practice',
            },
            {
                char: 'd',
                text: 'Cancel the next few lessons',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2429',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you do when you`ve agreed a lesson plan with a pupil?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Use the same plan every time the same area of competence is covered in the future',
            },
            {
                char: 'b',
                text: 'Keep strictly to the prepared plan',
            },
            {
                char: 'c',
                text: 'Adapt the lesson plan if it will help the pupil to achieve their learning objectives',
            },
            {
                char: 'd',
                text: 'Only continue with the lesson plan if the pupil agrees',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2430',
        topicCode: 'publications_instructional_techniques',
        question:
            'How can you encourage a pupil to develop a good driving attitude?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'By allowing them to take responsibility as soon as possible',
            },
            {
                char: 'b',
                text: 'By imposing your will as the instructor',
            },
            {
                char: 'c',
                text: 'By letting them learn from experience',
            },
            {
                char: 'd',
                text: 'By asking them to study the instruction manuals',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2433',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you teach a pupil to do if another driver flashes their headlights?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stay where they are, as the signal isn`t an official one',
            },
            {
                char: 'b',
                text: 'Correctly interpret what the other driver is going to do',
            },
            {
                char: 'c',
                text: 'Make progress while the opportunity is available',
            },
            {
                char: 'd',
                text: 'Flash their headlights back at the other driver',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2501',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`re teaching a pupil to stop. What should you teach them about using the gears to help slow the car?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Second gear should always be selected',
            },
            {
                char: 'b',
                text: 'A downward gear change should be made',
            },
            {
                char: 'c',
                text: 'Changing gear isn`t always necessary',
            },
            {
                char: 'd',
                text: 'First gear should always be selected',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2504',
        topicCode: 'publications_instructional_techniques',
        question:
            'Which organisation publishes guidance about medical conditions that might prevent someone from driving?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The Driver and Vehicle Standards Agency (DVSA)',
            },
            {
                char: 'b',
                text: 'The Driver and Vehicle Licensing Agency (DVLA)',
            },
            {
                char: 'c',
                text: 'The Automobile Association',
            },
            {
                char: 'd',
                text: 'The Police',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2510',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should an instructor do when they see their pupil commit a driving fault?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Discuss it at the earliest opportunity',
            },
            {
                char: 'b',
                text: 'Use it as a warning to the pupil',
            },
            {
                char: 'c',
                text: 'Ignore it and continue with the lesson',
            },
            {
                char: 'd',
                text: 'Talk about it at the end of the lesson',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2511',
        topicCode: 'publications_instructional_techniques',
        question: 'How should you choose your method of instruction?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use the same method for all pupils',
            },
            {
                char: 'b',
                text: 'Vary the method to suit the pupil',
            },
            {
                char: 'c',
                text: 'Use one method for male pupils and another for females',
            },
            {
                char: 'd',
                text: 'Use the method that suits your teaching style',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2512',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`re teaching a pupil to drive a car smoothly and with good coordination. In which area of activity will this learning mainly take place?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Psychomotor',
            },
            {
                char: 'b',
                text: 'Emotional',
            },
            {
                char: 'c',
                text: 'Intellectual',
            },
            {
                char: 'd',
                text: 'Psychological',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2515',
        topicCode: 'publications_instructional_techniques',
        question:
            'Why should an approved driving instructor (ADI) spend time clarifying a pupil`s learning goals and needs?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To determine the level at which instruction should begin',
            },
            {
                char: 'b',
                text: 'To understand the general intelligence of the pupil',
            },
            {
                char: 'c',
                text: 'To establish the amount of instruction the pupil will need',
            },
            {
                char: 'd',
                text: 'To plan how often the pupil will need to have lessons',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2517',
        topicCode: 'publications_instructional_techniques',
        question:
            'What major advantage does a pupil gain from agreeing learning objectives?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They have no need to ask questions of the instructor',
            },
            {
                char: 'b',
                text: 'They`ll be able to drive a vehicle responsibly, with concentration and patience',
            },
            {
                char: 'c',
                text: 'They`ll know what`s expected of them and be able to evaluate their progress',
            },
            {
                char: 'd',
                text: 'They`ll know when they`re ready to take the test',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2518',
        topicCode: 'publications_instructional_techniques',
        question:
            'What`s the best way to maintain the motivation and interest of a pupil having difficulty in learning?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Giving a demonstration when mistakes are made',
            },
            {
                char: 'b',
                text: 'Keeping strictly to the lesson plan',
            },
            {
                char: 'c',
                text: 'Taking time to find out whether the pupil has a preferred learning style',
            },
            {
                char: 'd',
                text: 'Repeating an exercise until they get it right',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2593',
        topicCode: 'publications_instructional_techniques',
        question:
            'Part of the MSM routine is referred to by the abbreviation PSL. What does PSL stand for?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Position - Slow Down - Lifesaver',
            },
            {
                char: 'b',
                text: 'Position - Signal - Look',
            },
            {
                char: 'c',
                text: 'Position - Speed - Look',
            },
            {
                char: 'd',
                text: 'Position - Speed - Lifesaver',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2598',
        topicCode: 'publications_instructional_techniques',
        question: 'How should a driving instructor approach each lesson?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They should use flexible and adaptable methods to match the pupil`s progress',
            },
            {
                char: 'b',
                text: 'They should have a relaxed manner, encouraging their pupils to do whatever interests them',
            },
            {
                char: 'c',
                text: 'They should keep strictly to their prepared plan',
            },
            {
                char: 'd',
                text: 'They should always include a manoeuvre to give value for money',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2599',
        topicCode: 'publications_instructional_techniques',
        question:
            'What can happen if an instructor`s expectations of a pupil are too high?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'The pupil will progress at their own rate',
            },
            {
                char: 'b',
                text: 'The pupil`s learning is reinforced',
            },
            {
                char: 'c',
                text: 'The pupil`s confidence can be damaged',
            },
            {
                char: 'd',
                text: 'The pupil`s confidence will improve',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2601',
        topicCode: 'publications_instructional_techniques',
        question:
            'You give instruction in short, progressive steps. What`s this teaching technique likely to lead to?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A sense of boredom in the pupil',
            },
            {
                char: 'b',
                text: 'The completion of the lesson in a shorter time',
            },
            {
                char: 'c',
                text: 'A lack of coordination in driving the vehicle',
            },
            {
                char: 'd',
                text: 'Sustained interest from the pupil',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2602',
        topicCode: 'publications_instructional_techniques',
        question: 'How should driving lessons be planned?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'So that no mistakes are made by the pupil, to give them encouragement',
            },
            {
                char: 'b',
                text: 'So that lots of mistakes are made, to exploit the pupil`s weaknesses',
            },
            {
                char: 'c',
                text: 'So that lots of mistakes are made, and the instructor can be seen to give value for money',
            },
            {
                char: 'd',
                text: 'So that the lessons meet the needs and ability of the pupil',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2603',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`re teaching a pupil to move off from the side of the road. Why should you teach them to look around?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'To check that there`s nothing in the blind spot',
            },
            {
                char: 'b',
                text: 'Because the mirrors may not be adjusted properly',
            },
            {
                char: 'c',
                text: 'To avoid failing their driving test',
            },
            {
                char: 'd',
                text: 'To check for road signs and speed limits',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2605',
        topicCode: 'publications_instructional_techniques',
        question:
            'What do pupils need to do in order to learn to drive safely and responsibly?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Acquire relevant basic knowledge of driving',
            },
            {
                char: 'b',
                text: 'Take responsibility for their learning from an early stage',
            },
            {
                char: 'c',
                text: 'Have specified aptitudes for driving',
            },
            {
                char: 'd',
                text: 'Fully understand the mechanics of their vehicle',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2608',
        topicCode: 'publications_instructional_techniques',
        question: 'How can the process of perception be described?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Dealing with situations in retrospect',
            },
            {
                char: 'b',
                text: 'Categorising and interpreting what we see, hear and feel',
            },
            {
                char: 'c',
                text: 'The selective focusing on a given hazard',
            },
            {
                char: 'd',
                text: 'Defining hazards as you pass them',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2609',
        topicCode: 'publications_instructional_techniques',
        question: 'When should you give feedback to your pupil?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Only when they make a serious error',
            },
            {
                char: 'b',
                text: 'When they`ve had a chance to relax',
            },
            {
                char: 'c',
                text: 'At any suitable opportunity\n',
            },
            {
                char: 'd',
                text: 'At the start of the next lesson',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2610',
        topicCode: 'publications_instructional_techniques',
        question:
            'What can be established through an appropriate use of open questions?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'The pupil`s attitude, norms and motivation when learning to drive',
            },
            {
                char: 'b',
                text: 'The pupil`s level of practical and theoretical knowledge',
            },
            {
                char: 'c',
                text: 'The pupil`s degree of aptitude and psychomotor skills',
            },
            {
                char: 'd',
                text: 'If the ADI and the pupil have any interests in common',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2638',
        topicCode: 'publications_instructional_techniques',
        question: 'What will reduce the risk of whiplash injury?',
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
                text: 'A correctly adjusted head restraint',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2670',
        topicCode: 'publications_instructional_techniques',
        question:
            'Which expense is likely to increase as a result of being convicted of driving while unfit through drink or drugs?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'The vehicle tax',
            },
            {
                char: 'b',
                text: 'The insurance premium',
            },
            {
                char: 'c',
                text: 'The vehicle test certificate',
            },
            {
                char: 'd',
                text: 'The driving licence fee',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2672',
        topicCode: 'publications_instructional_techniques',
        question:
            'For a few days you`ve been taking medicine that makes you feel drowsy. Today you feel better, but you still need to take the medicine. When should you drive?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Only if your journey is necessary',
            },
            {
                char: 'b',
                text: 'Only at night, on quiet roads',
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
        code: 'adi2673',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`re about to return home from holiday when you become ill. What should you do if a doctor prescribes drugs that are likely to affect your driving?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Only drive if someone is with you',
            },
            {
                char: 'b',
                text: 'Only drive on quiet, local roads',
            },
            {
                char: 'c',
                text: 'Don`t drive at all',
            },
            {
                char: 'd',
                text: 'Only drive at 30 mph or less',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2674',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`ve been unable to drive due to illness. What must you do before you start driving again?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'See your doctor',
            },
            {
                char: 'b',
                text: 'Take smaller doses of any medicines',
            },
            {
                char: 'c',
                text: 'Be satisfied that you`re medically fit to drive',
            },
            {
                char: 'd',
                text: 'Take all your medicines with you when you drive',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2677',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`re about to drive home. What should you do if you feel very tired and have a severe headache?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Wait until you feel fit and well before driving',
            },
            {
                char: 'b',
                text: 'Drive home after taking medicine for your headache',
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
        code: 'adi2742',
        topicCode: 'publications_instructional_techniques',
        question:
            'What could you do to guard against the risk of a vehicle fire?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Keep water levels above maximum',
            },
            {
                char: 'b',
                text: 'Check out any strong smell of petrol',
            },
            {
                char: 'c',
                text: 'Avoid driving with a full tank of petrol',
            },
            {
                char: 'd',
                text: 'Always use unleaded petrol',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2748',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you do if you go to a social event and need to drive a short time after?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Avoid drinking alcohol on an empty stomach',
            },
            {
                char: 'b',
                text: 'Drink plenty of coffee after drinking alcohol',
            },
            {
                char: 'c',
                text: 'Avoid drinking alcohol completely',
            },
            {
                char: 'd',
                text: 'Drink plenty of milk before drinking alcohol',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2749',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`ve just taken some cough medicine given to you by a friend. What should you do before you drive your car?',
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
                text: 'Check the label to see if the medicine could affect your driving',
            },
            {
                char: 'd',
                text: 'Drive a short distance to see if the medicine is affecting your driving',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2756',
        topicCode: 'publications_instructional_techniques',
        question:
            'What could you do to reduce the volume of traffic on the roads?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use a car with a smaller engine',
            },
            {
                char: 'b',
                text: 'Share a car when possible',
            },
            {
                char: 'c',
                text: 'Drive in a bus lane',
            },
            {
                char: 'd',
                text: 'Travel by car at all times',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2812',
        topicCode: 'publications_instructional_techniques',
        question:
            'Just before starting a journey, you`re involved in an argument. What should you do if this has made you feel angry?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Start to drive, but open a window first',
            },
            {
                char: 'b',
                text: 'Drive more slowly than normal and turn your radio on',
            },
            {
                char: 'c',
                text: 'Have a small drink of alcohol before driving',
            },
            {
                char: 'd',
                text: 'Calm down before you start to drive',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2816',
        topicCode: 'publications_instructional_techniques',
        question: 'When does the cost of vehicle insurance normally reduce?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'When you pass the driving test first time',
            },
            {
                char: 'b',
                text: 'When you`re under 25 years old',
            },
            {
                char: 'c',
                text: 'When you don`t wear glasses',
            },
            {
                char: 'd',
                text: 'When you`re over 25 years old',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2827',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you do if you have to leave valuables in your car?',
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
        code: 'adi2828',
        topicCode: 'publications_instructional_techniques',
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
        code: 'adi2842',
        topicCode: 'publications_instructional_techniques',
        question: 'What effect does alcohol have on your driving?',
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
                text: 'It improves your co-ordination',
            },
            {
                char: 'd',
                text: 'It reduces your concentration',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2843',
        topicCode: 'publications_instructional_techniques',
        question:
            'Your doctor has given you a course of medicine. Why should you ask how it will affect you?',
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
        code: 'adi2879',
        topicCode: 'publications_instructional_techniques',
        question:
            'Which type of glasses shouldn`t be worn when driving at night?',
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
        code: 'adi2897',
        topicCode: 'publications_instructional_techniques',
        question:
            'What`s likely to happen if you continually use the steering or the dual controls while you`re instructing?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'It will build your pupil`s confidence, as you`re in control',
            },
            {
                char: 'b',
                text: 'It will help develop your pupil`s hazard awareness skills',
            },
            {
                char: 'c',
                text: 'It will undermine the trust between you and your pupil',
            },
            {
                char: 'd',
                text: 'It will allow your pupil to concentrate on other aspects of driving',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2899',
        topicCode: 'publications_instructional_techniques',
        question:
            'A pupil`s driving is well below driving-test standard. What should you do if they insist on taking the driving test?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Allow them to use your car if it`s fitted with dual controls',
            },
            {
                char: 'b',
                text: 'Refuse to allow them to use your car for the test',
            },
            {
                char: 'c',
                text: 'Allow them to take the test just to prove that you were right',
            },
            {
                char: 'd',
                text: 'Allow them to take the test but make the examiner aware',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2905',
        topicCode: 'publications_instructional_techniques',
        question:
            'The timing of directions to a pupil is very important. What`s the recommended method of doing this clearly?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Direct - Alert - Identify',
            },
            {
                char: 'b',
                text: 'Alert - Identify - Direct',
            },
            {
                char: 'c',
                text: 'Direct - Identify - Alert',
            },
            {
                char: 'd',
                text: 'Alert - Direct - Identify',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi2962',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you do when a pupil gives a partially correct answer to a question?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop the pupil from responding further to prevent them from interrupting the flow of the lesson',
            },
            {
                char: 'b',
                text: 'Confirm the correct parts and then help the pupil to work out why the other parts were wrong',
            },
            {
                char: 'c',
                text: 'Ignore the correct part of the response, but offer a full explanation',
            },
            {
                char: 'd',
                text: 'Ask the pupil to make more of an effort with their study of The Highway Code',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3019',
        topicCode: 'publications_instructional_techniques',
        question:
            'What`s the most likely outcome of using attainable learning targets for a pupil under instruction?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'They`ll provide reinforcement of the pupil`s progress',
            },
            {
                char: 'b',
                text: 'They`ll make the pupil struggle to cope with them',
            },
            {
                char: 'c',
                text: 'They`ll result in the pupil being ready for test too early',
            },
            {
                char: 'd',
                text: 'They`ll make the learning process longer than normal',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3020',
        topicCode: 'publications_instructional_techniques',
        question:
            'A novice driver is able to steer a straight course. How could you help them improve their steering skills?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Get them to adjust the mirrors while driving',
            },
            {
                char: 'b',
                text: 'Teach them to turn corners while changing gear',
            },
            {
                char: 'c',
                text: 'Teach them to change gear as often as possible',
            },
            {
                char: 'd',
                text: 'Get them to practise steering with one hand',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3023',
        topicCode: 'publications_instructional_techniques',
        question: 'What should you do when teaching a profoundly deaf pupil?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Learn sign language to give instructions',
            },
            {
                char: 'b',
                text: 'Ask the pupil how they would like you to communicate with them',
            },
            {
                char: 'c',
                text: 'Write down all the directions for the route',
            },
            {
                char: 'd',
                text: 'Give instructions slowly and distinctly while stationary',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3025',
        topicCode: 'publications_instructional_techniques',
        question:
            'Your pupil is approaching a junction where the view is restricted. What should you tell them to do?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Stop at the junction and apply the handbrake',
            },
            {
                char: 'b',
                text: 'Approach slowly and edge forward until they can see',
            },
            {
                char: 'c',
                text: 'Approach quickly to reduce the likelihood of having to wait',
            },
            {
                char: 'd',
                text: 'Stop well before the junction, then move forward for a better look',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3026',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you do if your pupil fails to respond to something you`re teaching?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Talk to them and see if they can identify any reasons why it`s not working',
            },
            {
                char: 'b',
                text: 'Repeat yourself until they understand',
            },
            {
                char: 'c',
                text: 'Leave it and try again during the next lesson',
            },
            {
                char: 'd',
                text: 'Start from the beginning and tell the pupil to concentrate harder',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3027',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you tell your pupil while you`re teaching the turn-in-the-road exercise?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'They should use the pavement if the road is narrow and there are no pedestrians',
            },
            {
                char: 'b',
                text: 'They should use all the road and only stop when they hit the kerb',
            },
            {
                char: 'c',
                text: 'They should avoid using the parking brake, as it will take too much time',
            },
            {
                char: 'd',
                text: 'They should look around often and always have the car under control',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3028',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should a deaf pupil be advised to do when they`re ready to apply for their driving test?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Inform the examiner that they`re deaf on the day of their test',
            },
            {
                char: 'b',
                text: 'Declare their hearing impairment when applying for their driving test',
            },
            {
                char: 'c',
                text: 'Supply visual instructions for the examiner to use',
            },
            {
                char: 'd',
                text: 'Bring a signer with them on the day of their test',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3032',
        topicCode: 'publications_instructional_techniques',
        question:
            'What will a new driver have to do if they accrue six or more penalty points on their licence within the first two years after passing their first driving test?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Retake the theory test only',
            },
            {
                char: 'b',
                text: 'Retake both the theory and practical tests',
            },
            {
                char: 'c',
                text: 'Retake the practical test only',
            },
            {
                char: 'd',
                text: 'Reapply for a full licence immediately',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3035',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you do if you see your pupil commit a driving fault during a lesson?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Use it as a warning to the pupil',
            },
            {
                char: 'b',
                text: 'Ask them to reflect on their performance',
            },
            {
                char: 'c',
                text: 'Ignore it and continue with the lesson',
            },
            {
                char: 'd',
                text: 'Tell them about it at the end of the lesson',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3036',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`re teaching a manoeuvre that involves reversing in the road. What should you teach your pupil to do?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Look to the rear over their right shoulder only',
            },
            {
                char: 'b',
                text: 'Scan all around, paying particular attention to the direction in which they`re moving',
            },
            {
                char: 'c',
                text: 'Look to the rear over their left shoulder only',
            },
            {
                char: 'd',
                text: 'Look to the rear using only their mirrors',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3037',
        topicCode: 'publications_instructional_techniques',
        question: 'How should you use the `question and answer technique`?',
        answer: 'a',
        options: [
            {
                char: 'a',
                text: 'Use searching questions',
            },
            {
                char: 'b',
                text: 'Ask questions that require a simple `yes` or `no`',
            },
            {
                char: 'c',
                text: 'Save questions until the end of the lesson',
            },
            {
                char: 'd',
                text: 'Try to provoke a negative reaction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3045',
        topicCode: 'publications_instructional_techniques',
        question:
            'What does it mean when another driver flashes their headlights?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'They`re warning you of a speed trap',
            },
            {
                char: 'b',
                text: 'They`re giving you right of way',
            },
            {
                char: 'c',
                text: 'They`re warning of their presence',
            },
            {
                char: 'd',
                text: 'They`re signalling that it`s safe for you to go',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3051',
        topicCode: 'publications_instructional_techniques',
        question:
            'Your pupil is approaching a crossroads. What advice should you give them if the traffic lights have failed?',
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
        code: 'adi3053',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`re teaching a learner driver who`s following a slower-moving vehicle. You can see a junction ahead on the right. What should you tell your pupil?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'Overtake after checking the mirrors and signalling',
            },
            {
                char: 'b',
                text: 'Don`t try to overtake until you`re past the junction',
            },
            {
                char: 'c',
                text: 'Accelerate quickly to overtake before the junction',
            },
            {
                char: 'd',
                text: 'Slow down and prepare to overtake on the left',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3054',
        topicCode: 'publications_instructional_techniques',
        question:
            'You`re following a large vehicle, approaching a crossroads. The driver of the vehicle signals to turn left. What advice would you give to your pupil?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'Overtake if you can leave plenty of room',
            },
            {
                char: 'b',
                text: 'Overtake only if there are no oncoming vehicles',
            },
            {
                char: 'c',
                text: 'Don`t overtake until the vehicle begins to turn',
            },
            {
                char: 'd',
                text: 'Don`t overtake when you`re approaching a junction',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3055',
        topicCode: 'publications_instructional_techniques',
        question:
            'What advice should you give to a pupil who wishes to overtake a long, slow-moving vehicle on a busy road?',
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
                text: 'Keep well back until you can see that it`s clear',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3097',
        topicCode: 'publications_instructional_techniques',
        question:
            'What should you teach your pupil about changing lanes on a motorway?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'You should increase speed before changing lanes',
            },
            {
                char: 'b',
                text: 'You should manoeuvre first, then signal',
            },
            {
                char: 'c',
                text: 'You should signal well before using your mirrors',
            },
            {
                char: 'd',
                text: 'You should start the MSM routine in good time',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3172',
        topicCode: 'publications_instructional_techniques',
        question: 'Why should you provide feedback to your pupil?',
        answer: 'b',
        options: [
            {
                char: 'a',
                text: 'To encourage them to move on to learning new skills',
            },
            {
                char: 'b',
                text: 'To ensure they know how well they`re doing',
            },
            {
                char: 'c',
                text: 'To allow you to record how well you`re teaching',
            },
            {
                char: 'd',
                text: 'To tell the pupil what they`ve done wrong',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3178',
        topicCode: 'publications_instructional_techniques',
        question:
            'What`s the most important task at the end of every driving lesson?',
        answer: 'c',
        options: [
            {
                char: 'a',
                text: 'Arrange the next lesson',
            },
            {
                char: 'b',
                text: 'Go over all the mistakes that have been made',
            },
            {
                char: 'c',
                text: 'Encourage the pupil to reflect on their own performance',
            },
            {
                char: 'd',
                text: 'Set the objectives for the next lesson',
            },
        ],
        isNIExempts: false,
    },
    {
        code: 'adi3183',
        topicCode: 'publications_instructional_techniques',
        question: 'What should you remove before leaving your car unattended?',
        answer: 'd',
        options: [
            {
                char: 'a',
                text: 'A first-aid kit',
            },
            {
                char: 'b',
                text: 'A road atlas',
            },
            {
                char: 'c',
                text: 'Spare bulbs',
            },
            {
                char: 'd',
                text: 'The vehicle documents',
            },
        ],
        isNIExempts: false,
    },
];

export default questions;
