const contentTopics = [
    {
        id: "228aa881-1cc3-4b16-b684-8e9aaf5b7fce",
        title: "Introduction",
        footNote: "",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/introduction"
    },
    {
        id: "eb0a9f68-f710-45e2-8452-b3a63432c20d",
        title: "Rules for pedestrians ",
        footNote: "page: 1 to 35",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/rules-for-pedestrians-1-to-35"
    },
    {
        id: "d4cc550f-9b43-408b-b01b-1b7b6056de63",
        title: "Rules for users of powered wheelchairs and mobility scooters ",
        footNote: "page: 36 to 46 ",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46"
    },
    {
        id: "f600c3a6-44bb-495d-acff-3530824aed71",
        title: "Rules about animals ",
        footNote: "page: 47 to 58 ",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/rules-about-animals-47-to-58"
    },
    {
        id: "7951cc9e-00c4-4fb4-9a4e-613f71b6bbda",
        title: "Rules for cyclists ",
        footNote: "page: 59 to 82",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/rules-for-cyclists-59-to-82"
    },
    {
        id: "f606d50e-35f1-478d-9ff2-86a9238cc456",
        title: "Rules for motorcyclists ",
        footNote: "page: 83 to 88",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/rules-for-motorcyclists-83-to-88"
    },
    {
        id: "0beed8f3-307a-4728-813f-01f726256124",
        title: "Rules for drivers and motorcyclists ",
        footNote: "page: 89 to 102",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102"
    },
    {
        id: "0d2f66f1-d4ca-4100-b052-d81c5dc2e815",
        title: "General rules, techniques and advice for all drivers and riders ",
        footNote: "page: 103 to 158 ",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"
    },
    {
        id: "109248bd-02ed-4477-8446-215dc0767317",
        title: "Using the road ",
        footNote: "page: 159 to 203",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/using-the-road-159-to-203"
    },
    {
        id: "2dbbe26d-bd71-4efd-945c-af425b3958eb",
        title: "Road users requiring extra care ",
        footNote: "page: 204 to 225 ",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/road-users-requiring-extra-care-204-to-225"
    },
    {
        id: "d50f05a6-3e44-4758-b856-9217129371fd",
        title: "Driving in adverse weather conditions ",
        footNote: "page: 226 to 237 ",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/driving-in-adverse-weather-conditions-226-to-237"
    },
    {
        id: "5fc52c76-eb39-4c0f-bd01-72038446a5c6",
        title: "Waiting and parking ",
        footNote: "page: 238 to 252 ",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/waiting-and-parking-238-to-252"
    },
    {
        id: "3bbaaab8-616e-4d6b-b088-63e33741f3fa",
        title: "Motorways ",
        footNote: "page: 253 to 274",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/motorways-253-to-273"
    },
    {
        id: "adea25c4-1198-4bd1-8fa8-46b9ec165bd4",
        title: "Breakdowns and incidents ",
        footNote: "page: 275 to 287 ",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/breakdowns-and-incidents-274-to-287"
    },
    {
        id: "927e803d-bd9d-4a11-849b-2af7e72e5d43",
        title: "Road works, level crossings and tramways ",
        footNote: "page: 288 to 307 ",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/road-works-level-crossings-and-tramways-288-to-307"
    },
    {
        id: "7bb73013-d902-49f7-814b-0c0ff5f9bd22",
        title: "Annex 1. You and your bicycle ",
        footNote: "",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/annex-1-you-and-your-bicycle"
    },
    {
        id: "5e79a806-a66a-42b2-a1ae-900bdb18e5f4",
        title: "Annex 2. Motorcycle licence requirements",
        footNote: "",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/annex-2-motorcycle-licence-requirements"
    },
    {
        id: "7b59d292-bd0b-4a29-8977-2166792610a4",
        title: "Annex 3. Motor vehicle documentation and learner driver requirements",
        footNote: "",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/annex-3-motor-vehicle-documentation-and-learner-driver-requirements"
    },
    {
        id: "e3c5a897-fccb-4fc8-9e45-0a44849d58e2",
        title: "Annex 4. The road user and the law",
        footNote: "",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/annex-4-the-road-user-and-the-law"
    },
    {
        id: "9da906a2-5c14-441a-add8-05d7d6baabcb",
        title: "Annex 5. Penalties",
        footNote: "",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/annex-5-penalties"
    },
    {
        id: "85170c41-f12e-48be-bdb6-5934f8aae62a",
        title: "Annex 6. Vehicle maintenance, safety and security",
        footNote: "",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security"
    },
    {
        id: "93fa3280-7fae-40eb-9e58-6b929ab95145",
        title: "Annex 7. First aid on the road",
        footNote: "",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/annex-7-first-aid-on-the-road"
    },
    {
        id: "1ce00649-06d2-4dc1-bf6c-66fbe5685a71",
        title: "Annex 8. Safety code for new drivers",
        footNote: "",
        api_url: "https://www.gov.uk/api/content/guidance/the-highway-code/annex-8-safety-code-for-new-drivers"
    }
];

export default contentTopics;
