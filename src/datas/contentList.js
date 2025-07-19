const categories = [
  { id: 'all', name: 'All', icon: 'apps' },
  { id: 'web', name: 'Web', icon: 'web' },
  { id: 'mobile', name: 'Mobile', icon: 'cellphone' },
  { id: 'game', name: 'Games(Newbie)', icon: 'gamepad-variant' },
  { id: 'art', name: 'Art(Newbie)', icon: 'palette' },
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
      { image: "app_mybca_1", description: "Prototype Purposes using React Native and Expo, Homepage MyBCA" },
      { image: "app_mybca_2", description: "Prototype Purposes using React Native and Expo, Transaction MyBCA" }
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
      { image: "app_bibit_1", description: "Prototype Purposes using React Native and Expo, Homepage Bibit" },
      { image: "app_bibit_2", description: "Prototype Purposes using React Native and Expo, Portofolio Bibit" }
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
      { image: "app_porto_1", description: "A fun project to sharpen my React Native skills, built with Expo, React Native Paper, and Material Design. I used a calculator-based login so anyone viewing my portfolio won't get confused with username or password." },
      { image: "app_porto_2", description: "Homepage Displays a categorized list of my projects with filters by skill. Includes total project count, highlights of my core tech stack, years of experience, and a built-in search engine for easy navigation." },
      { image: "app_porto_3", description: "Project Detail Page shows detailed information about each project with a smooth TikTok-style vertical scroll experience for navigating between items." },
      { image: "app_porto_4", description: "Socials Page lists all my social media profiles with one-click access to each platform — making it easy to connect or explore my online presence." },
      { image: "app_porto_5", description: "Profile Page contains information about me, including contact details, skills, and educational background all in one place for quick reference." }
    ]
  },
  {
    id: 13,
    title: "Game Prototype",
    subtitle: "Survivor Prototype",
    path: "game_1",
    released: true,
    category: "game",
    children: [
      { image: "game_1", description: "My Prototype system for a game project like survivor.io, built with Unity and Godot Script" },
    ]
  },
  {
    id: 14,
    title: "Game Prototype",
    subtitle: "Bouncing Slime",
    path: "game_2",
    released: true,
    category: "game",
    children: [
      { image: "game_2", description: "My Prototype bouncing slime for game project like survivor.io, built with Unity and Godot Script" },
    ]
  },
  {
    id: 15,
    title: "Game",
    subtitle: "Slime Survivor",
    path: "game_3",
    released: false,
    category: "game",
  },
  {
    id: 16,
    title: "ART 1",
    subtitle: "Digital Art",
    path: "art_1",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_1", description: "Digital artwork showcasing creative design skills." }
    ]
  },
  {
    id: 17,
    title: "ART 2",
    subtitle: "Digital Art",
    path: "art_2",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_2", description: "Digital artwork showcasing creative design skills." }
    ]
  },
  {
    id: 18,
    title: "ART 3",
    subtitle: "Digital Art",
    path: "art_3",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_3", description: "Digital artwork showcasing creative design skills." }
    ]
  },
  {
    id: 19,
    title: "ART 4",
    subtitle: "Digital Art",
    path: "art_4",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_4", description: "Digital artwork showcasing creative design skills." }
    ]
  },
  {
    id: 20,
    title: "ART 5",
    subtitle: "Digital Art",
    path: "art_5",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_5", description: "Digital artwork showcasing creative design skills." }
    ]
  },
  {
    id: 21,
    title: "ART 6",
    subtitle: "Digital Art",
    path: "art_6",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_6", description: "Digital artwork showcasing creative design skills." }
    ]
  },
  {
    id: 22,
    title: "ART 7",
    subtitle: "Digital Art",
    path: "art_7",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_7", description: "Digital artwork showcasing creative design skills." }
    ]
  },
  {
    id: 23,
    title: "ART 8",
    subtitle: "Digital Art",
    path: "art_8",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_8", description: "Digital artwork showcasing creative design skills." }
    ]
  },
  {
    id: 24,
    title: "ART 9",
    subtitle: "Digital Art",
    path: "art_9",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_9", description: "Digital artwork showcasing creative design skills." }
    ]
  },
  {
    id: 25,
    title: "ART 10",
    subtitle: "Digital Art",
    path: "art_10",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_10", description: "Digital artwork showcasing creative design skills." }
    ]
  },
  {
    id: 26,
    title: "ART 11",
    subtitle: "Digital Art",
    path: "art_11",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_11", description: "Digital artwork showcasing creative design skills." }
    ]
  },
  {
    id: 27,
    title: "ART 12",
    subtitle: "Digital Art",
    path: "art_12",
    released: true,
    category: "art",
    isArtProject: true,
    children: [
      { image: "art_12", description: "Digital artwork showcasing creative design skills." }
    ]
  },
];

const assetMap = {
  "agate_astra_1": require('../../assets/porto/webp/agate_astra_1.webp'),
  "agate_astra_2": require('../../assets/porto/webp/agate_astra_2.webp'),
  "agate_astra_3": require('../../assets/porto/webp/agate_astra_3.webp'),
  "agate_astra_4": require('../../assets/porto/webp/agate_astra_4.webp'),
  "agate_astra_5": require('../../assets/porto/webp/agate_astra_5.webp'),
  "agate_astra_6": require('../../assets/porto/webp/agate_astra_6.webp'),

  "agate_cpcm_1": require('../../assets/porto/webp/agate_cpcm_1.webp'),

  "agate_deus_1": require('../../assets/porto/webp/agate_deus_1.webp'),
  "agate_deus_2": require('../../assets/porto/webp/agate_deus_2.webp'),
  "agate_deus_3": require('../../assets/porto/webp/agate_deus_3.webp'),

  "agate_gebyar_1": require('../../assets/porto/webp/agate_gebyar_1.webp'),
  "agate_gebyar_2": require('../../assets/porto/webp/agate_gebyar_2.webp'),
  "agate_gebyar_3": require('../../assets/porto/webp/agate_gebyar_3.webp'),
  "agate_gebyar_4": require('../../assets/porto/webp/agate_gebyar_4.webp'),

  "agate_pistachio_1": require('../../assets/porto/webp/agate_pistachio_1.webp'),

  "agra_sigi_1": require('../../assets/porto/webp/agra_sigi_1.webp'),
  "agra_sigi_2": require('../../assets/porto/webp/agra_sigi_2.webp'),
  "agra_sigi_3": require('../../assets/porto/webp/agra_sigi_3.webp'),
  "agra_sigi_4": require('../../assets/porto/webp/agra_sigi_4.webp'),
  "agra_sigi_5": require('../../assets/porto/webp/agra_sigi_5.webp'),

  "agra_wais_1": require('../../assets/porto/webp/agra_wais_1.webp'),
  "agra_wais_2": require('../../assets/porto/webp/agra_wais_2.webp'),
  "agra_wais_3": require('../../assets/porto/webp/agra_wais_3.webp'),
  "agra_wais_4": require('../../assets/porto/webp/agra_wais_4.webp'),
  "agra_wais_5": require('../../assets/porto/webp/agra_wais_5.webp'),
  "agra_wais_6": require('../../assets/porto/webp/agra_wais_6.webp'),

  "assemblr_metaverse_1": require('../../assets/porto/webp/assemblr_metaverse_1.webp'),
  "assemblr_metaverse_2": require('../../assets/porto/webp/assemblr_metaverse_2.webp'),
  "assemblr_metaverse_3": require('../../assets/porto/webp/assemblr_metaverse_3.webp'),
  "assemblr_metaverse_4": require('../../assets/porto/webp/assemblr_metaverse_4.webp'),

  "assemblr_studio_1": require('../../assets/porto/webp/assemblr_studio_1.webp'),
  "assemblr_studio_2": require('../../assets/porto/webp/assemblr_studio_2.webp'),
  "assemblr_studio_3": require('../../assets/porto/webp/assemblr_studio_3.webp'),
  "assemblr_studio_4": require('../../assets/porto/webp/assemblr_studio_4.webp'),
  "assemblr_studio_5": require('../../assets/porto/webp/assemblr_studio_5.webp'),

  "app_mybca_1": require('../../assets/porto/webp/app_mybca_1.webp'),
  "app_mybca_2": require('../../assets/porto/webp/app_mybca_2.webp'),

  "app_bibit_1": require('../../assets/porto/webp/app_bibit_1.webp'),
  "app_bibit_2": require('../../assets/porto/webp/app_bibit_2.webp'),

  "app_porto_1": require('../../assets/porto/webp/app_porto_1.webp'),
  "app_porto_2": require('../../assets/porto/webp/app_porto_2.webp'),
  "app_porto_3": require('../../assets/porto/webp/app_porto_3.webp'),
  "app_porto_4": require('../../assets/porto/webp/app_porto_4.webp'),
  "app_porto_5": require('../../assets/porto/webp/app_porto_5.webp'),

  "game_1": require('../../assets/porto/webp/game_1.webp'),
  "game_2": require('../../assets/porto/webp/game_2.webp'),
  "game_3": require('../../assets/porto/webp/game_3.webp'),

  "art_1": require('../../assets/porto/webp/art_1.webp'),
  "art_2": require('../../assets/porto/webp/art_2.webp'),
  "art_3": require('../../assets/porto/webp/art_3.webp'),
  "art_4": require('../../assets/porto/webp/art_4.webp'),
  "art_5": require('../../assets/porto/webp/art_5.webp'),
  "art_6": require('../../assets/porto/webp/art_6.webp'),
  "art_7": require('../../assets/porto/webp/art_7.webp'),
  "art_8": require('../../assets/porto/webp/art_8.webp'),
  "art_9": require('../../assets/porto/webp/art_9.webp'),
  "art_10": require('../../assets/porto/webp/art_10.webp'),
  "art_11": require('../../assets/porto/webp/art_11.webp'),
  "art_12": require('../../assets/porto/webp/art_12.webp'),
};

export { dataContent, assetMap, categories }; 