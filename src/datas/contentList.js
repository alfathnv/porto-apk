const categories = [
  { id: 'all', name: 'All', icon: 'apps' },
  { id: 'web', name: 'Web', icon: 'web' },
  { id: 'mobile', name: 'Mobile', icon: 'cellphone' },
  { id: 'art', name: 'Art', icon: 'palette' },
  { id: 'games', name: 'Games', icon: 'gamepad-variant' },
];

const dataContent = [
  {
    id: 1,
    title: "Assemblr",
    subtitle: "Metaverse",
    path: "assemblr_metaverse_1",
    released: true,
    category: "web",
    children: [
      { image: "assemblr_metaverse_2", description: "Starting out at Assemblr as a fresh graduate Front-End Engineer, I built Assemblr World (Metaverse) Website from scratch using ReactJS, Firebase, AWS, Three.js, and Mapbox." },
      { image: "assemblr_metaverse_3", description: "I created this homepage with a design I was proud of at the time. One of the highlights of my journey was building a custom Mapbox design that rendered 3D objects in the world. It was the most exciting part of my research. Unfortunately, it was taken down, and I forgot to document it, which I really regret." },
      { image: "assemblr_metaverse_4", description: "I believe the FTUE was the last feature I implemented in this project. Unfortunately, the project was not continued, perhaps due to the decline in the metaverse trend and other factors. I originally worked on it in 2022, and as of my last check in 2025, the project remains mostly unchanged. However, I've heard that it still serves a purpose in some B2B use cases." }
    ]
  },
  {
    id: 2,
    title: "Assemblr",
    subtitle: "Studio",
    path: "assemblr_studio_1",
    released: true,
    category: "web",
    children: [
      { image: "assemblr_studio_2", description: "After the metaverse project, I supported the development of the new Assemblr Studio using Next.js, working alongside my teammate to implement key features." },
      { image: "assemblr_studio_3", description: "This was the most exciting part of the product for me — creating a 3D marketplace in collaboration with creators I admire, such as Vernalta, Tekotok, and other top talents. It also brought them into the Assemblr Metaverse, giving them their own dedicated Metaverse spaces." },
      { image: "assemblr_studio_4", description: "After completing my tasks ahead of schedule as my superior jokingly remarked, 'too fast with your work' I was also assigned to support the development of the mobile version of Assemblr Studio." },
      { image: "assemblr_studio_5", description: "By this stage, I had contributed to nearly all major products at Assemblr — including implementing Assemblr Payment with Stripe, supporting features in Assemblr EDU and Assemblr Editor, and helping maintain several other products across the company." }
    ]
  },
  {
    id: 3,
    title: "Agranara",
    subtitle: "WAIS BSI",
    path: "agra_wais_1",
    released: true,
    category: "web",
    children: [
      { image: "agra_wais_2", description: "I had the opportunity to work at another project-based company, Agranara, where I built a wholesale analytics internal platform for BSI using React and Laravel. This was my first experience working as a full-stack developer and getting hands-on with backend development." },
      { image: "agra_wais_3", description: "This was my first experience creating tables and dashboards for a Performance Quality on the website, working with a large and complex database. It was definitely challenging especially stepping into backend development for the first time." },
      { image: "agra_wais_4", description: "Next, I worked on building the Pipeline Management System from scratch. Although the frontend used a pre-built template, it was still a challenge. I had to read through many components, understand how they worked, and decide which ones to use appropriately." },
      { image: "agra_wais_5", description: "The biggest challenge, however, was working with a massive database containing many tables and columns. On top of that, the project was built using Laravel 5 an outdated version with limited documentation and support. It was often difficult to find relevant resources or tutorials since Laravel no longer recommends using that version." },
      { image: "agra_wais_6", description: "Assisted teammates with features like Control Testing, Projection Analysis, and Admin Panel. Took responsibility for preparing and deploying the project to development and staging environments." }
    ]
  },
  {
    id: 4,
    title: "Agate",
    subtitle: "Astra Virtueverse",
    path: "agate_astra_1",
    released: true,
    category: "web",
    children: [
      { image: "agate_astra_2", description: "After a year of working remotely on various projects at Agranara, my application was accepted, and I joined one of the top game development companies in Southeast Asia based in Indonesia as a Full-Stack Programmer on the Gamification Team." },
      { image: "agate_astra_3", description: "Collaborated with Astra to build a CMS for Astra Virtueverse using React and .NET. Developed a Floor Plan Management, a booth assignment feature from scratch using a grid-based layout (inspired by Clash of Clans), implemented with Gridstack." },
      { image: "agate_astra_4", description: "I also worked with Unity expanding my skills into full-stack and game development, implement vector positioning that aligned with the floor plan management system, ensuring booth placements in the CMS accurately matched their positions in the 3D environment." },
      { image: "agate_astra_5", description: "Maintained and expanded the Booth Management System by implementing detailed features such as booth info and asset configuration (atlas, poster, type, and color)." },
      { image: "agate_astra_6", description: "At this point, I was working back-to-back across roles from full-stack development and bug fixing on various features, to game development tasks such as building booth previews, managing avatar positioning within booths, and implementing collision systems." }
    ]
  },
  {
    id: 5,
    title: "Agranara",
    subtitle: "SIGI Mandiri",
    path: "agra_sigi_1",
    released: true,
    category: "web",
    children: [
      { image: "agra_sigi_2", description: "For my next project at Agranara, I was assigned to build a Reliability, Availability, Maintainability, and Safety (RAMS) system from scratch for SIGI Mandiri, using React and Laravel" },
      { image: "agra_sigi_3", description: "I created the dashboard for the system and was able to work faster than before, as I had become more comfortable working with backend development and databases" },
      { image: "agra_sigi_4", description: "I also worked on the master data module, and by this time, I was the person in charge of deploying the application to the staging, development, and production environments on Mandiri's server." },
      { image: "agra_sigi_5", description: "Since they wanted a separate customer management system for RAMS, I developed it by following the structure and standards of the existing system. After the project was completed, I was fortunate enough to be appointed as Chief Technology Officer to help lead the company forward." }
    ]
  },
  {
    id: 6,
    title: "Agate",
    subtitle: "Gebyar BCA",
    path: "agate_gebyar_1",
    released: true,
    category: "web",
    children: [
      { image: "agate_gebyar_2", description: "After my sixth month at Agate, I received a new contract and was assigned to a new project, as well as to the Maintainer Team for ongoing initiatives. One of these was BCA Gebyar, starting from Period 3, where I continued as part of the core maintainer team." },
      { image: "agate_gebyar_3", description: "One of the biggest challenges I faced was fixing a race condition in the BCA Gebyar gacha system. Due to a tight deadline and limited understanding of the full codebase, I had to rely on trial and error to identify the issue and also wrote a query to detect users affected by the problem." },
      { image: "agate_gebyar_4", description: "I was also fully in charge of the CMS system, and by this time, I had become the sole maintainer of BCA Gebyar, as the previous maintainer had moved on to a new project." }
    ]
  },
  {
    id: 7,
    title: "Agate",
    subtitle: "DEUS HOAFL",
    path: "agate_deus_1",
    released: true,
    category: "web",
    children: [
      { image: "agate_deus_2", description: "I also maintained the DEUS HOAFL project, which focused on check-in competency for hiring through gamified assessments." },
      { image: "agate_deus_3", description: "I also maintained the dashboard for the project. One of the main challenges I encountered was discovering that the previous deployment's repository was not included in the new repo. To resolve the issue and fix the game, I had to coordinate with the server maintainer to temporarily reactivate the old repository." }
    ]
  },
  {
    id: 8,
    title: "Agate",
    subtitle: "CPCM MooGotchi",
    path: "agate_cpcm_1",
    released: false,
    category: "web",
    children: [
      { image: "agate_cpcm_1", description: "Coming soon." }
    ]
  },
  {
    id: 9,
    title: "Agate",
    subtitle: "MVP Pistachio",
    path: "agate_pistachio_1",
    released: false,
    category: "web",
    children: [
      { image: "agate_pistachio_1", description: "Coming soon." }
    ]
  },
  {
    id: 10,
    title: "Mobile",
    subtitle: "Prototype MyBCA",
    path: "app_mybca_1",
    released: true,
    category: "mobile",
    children: [
      { image: "app_mybca_1", description: "Mobile banking application for BCA customers." }
    ]
  },
  {
    id: 11,
    title: "Mobile",
    subtitle: "Prototype Bibit",
    path: "app_bibit_1",
    released: true,
    category: "mobile",
    children: [
      { image: "app_bibit_1", description: "Investment and mutual fund application." }
    ]
  },
  {
    id: 12,
    title: "Mobile",
    subtitle: "Portfolio App",
    path: "app_porto_1",
    released: true,
    category: "mobile",
    children: [
      { image: "app_porto_1", description: "Portfolio management and tracking application." }
    ]
  }
];

const assetMap = {
  "agate_astra_1": require('../../assets/porto/agate_astra_1.png'),
  "agate_astra_2": require('../../assets/porto/agate_astra_2.png'),
  "agate_astra_3": require('../../assets/porto/agate_astra_3.png'),
  "agate_astra_4": require('../../assets/porto/agate_astra_4.png'),
  "agate_astra_5": require('../../assets/porto/agate_astra_5.png'),
  "agate_astra_6": require('../../assets/porto/agate_astra_6.png'),

  "agate_cpcm_1": require('../../assets/porto/agate_cpcm_1.png'),

  "agate_deus_1": require('../../assets/porto/agate_deus_1.png'),
  "agate_deus_2": require('../../assets/porto/agate_deus_2.png'),
  "agate_deus_3": require('../../assets/porto/agate_deus_3.png'),

  "agate_gebyar_1": require('../../assets/porto/agate_gebyar_1.jpg'),
  "agate_gebyar_2": require('../../assets/porto/agate_gebyar_2.png'),
  "agate_gebyar_3": require('../../assets/porto/agate_gebyar_3.png'),
  "agate_gebyar_4": require('../../assets/porto/agate_gebyar_4.png'),

  "agate_pistachio_1": require('../../assets/porto/agate_pistachio_1.png'),

  "agra_sigi_1": require('../../assets/porto/agra_sigi_1.png'),
  "agra_sigi_2": require('../../assets/porto/agra_sigi_2.png'),
  "agra_sigi_3": require('../../assets/porto/agra_sigi_3.png'),
  "agra_sigi_4": require('../../assets/porto/agra_sigi_4.png'),
  "agra_sigi_5": require('../../assets/porto/agra_sigi_5.png'),

  "agra_wais_1": require('../../assets/porto/agra_wais_1.png'),
  "agra_wais_2": require('../../assets/porto/agra_wais_2.png'),
  "agra_wais_3": require('../../assets/porto/agra_wais_3.png'),
  "agra_wais_4": require('../../assets/porto/agra_wais_4.png'),
  "agra_wais_5": require('../../assets/porto/agra_wais_5.png'),
  "agra_wais_6": require('../../assets/porto/agra_wais_6.png'),

  "assemblr_metaverse_1": require('../../assets/porto/assemblr_metaverse_1.jpg'),
  "assemblr_metaverse_2": require('../../assets/porto/assemblr_metaverse_2.png'),
  "assemblr_metaverse_3": require('../../assets/porto/assemblr_metaverse_3.png'),
  "assemblr_metaverse_4": require('../../assets/porto/assemblr_metaverse_4.png'),

  "assemblr_studio_1": require('../../assets/porto/assemblr_studio_1.jpg'),
  "assemblr_studio_2": require('../../assets/porto/assemblr_studio_2.jpg'),
  "assemblr_studio_3": require('../../assets/porto/assemblr_studio_3.jpg'),
  "assemblr_studio_4": require('../../assets/porto/assemblr_studio_4.jpg'),
  "assemblr_studio_5": require('../../assets/porto/assemblr_studio_5.jpg'),

  "app_mybca_1": require('../../assets/porto/app_mybca_1.jpg'),
  "app_bibit_1": require('../../assets/porto/app_bibit_1.jpg'),
  "app_porto_1": require('../../assets/porto/app_porto_1.jpg'),
};

export { dataContent, assetMap, categories }; 