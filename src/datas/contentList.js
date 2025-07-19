const dataContent = [
  {
    id: 1,
    title: "Assemblr",
    subtitle: "Metaverse",
    path: "assemblr_metaverse_1.jpg",
    released: true,
    children: [
      { image: "assemblr_metaverse_2.png", description: "Starting out at Assemblr as a fresh graduate Front-End Engineer, I built Assemblr World (Metaverse) Website from scratch using ReactJS, Firebase, AWS, Three.js, and Mapbox." },
      { image: "assemblr_metaverse_3.png", description: "I created this homepage with a design I was proud of at the time. One of the highlights of my journey was building a custom Mapbox design that rendered 3D objects in the world. It was the most exciting part of my research. Unfortunately, it was taken down, and I forgot to document it, which I really regret." },
      { image: "assemblr_metaverse_4.png", description: "I believe the FTUE was the last feature I implemented in this project. Unfortunately, the project was not continued, perhaps due to the decline in the metaverse trend and other factors. I originally worked on it in 2022, and as of my last check in 2025, the project remains mostly unchanged. However, I’ve heard that it still serves a purpose in some B2B use cases." }
    ]
  },
  {
    id: 2,
    title: "Assemblr",
    subtitle: "Studio",
    path: "assemblr_studio_1.jpg",
    released: true,
    children: [
      { image: "assemblr_studio_2.jpg", description: "After the metaverse project, I supported the development of the new Assemblr Studio using Next.js, working alongside my teammate to implement key features." },
      { image: "assemblr_studio_3.jpg", description: "This was the most exciting part of the product for me — creating a 3D marketplace in collaboration with creators I admire, such as Vernalta, Tekotok, and other top talents. It also brought them into the Assemblr Metaverse, giving them their own dedicated Metaverse spaces." },
      { image: "assemblr_studio_4.jpg", description: "After completing my tasks ahead of schedule as my superior jokingly remarked, 'too fast with your work' I was also assigned to support the development of the mobile version of Assemblr Studio." },
      { image: "assemblr_studio_5.jpg", description: "By this stage, I had contributed to nearly all major products at Assemblr — including implementing Assemblr Payment with Stripe, supporting features in Assemblr EDU and Assemblr Editor, and helping maintain several other products across the company." }
    ]
  },
  {
    id: 3,
    title: "Agranara",
    subtitle: "WAIS BSI",
    path: "agra_wais_1.png",
    released: true,
    children: [
      { image: "agra_wais_2.png", description: "I had the opportunity to work at another project-based company, Agranara, where I built a wholesale analytics internal platform for BSI using React and Laravel. This was my first experience working as a full-stack developer and getting hands-on with backend development." },
      { image: "agra_wais_3.png", description: "This was my first experience creating tables and dashboards for a Performance Quality on the website, working with a large and complex database. It was definitely challenging especially stepping into backend development for the first time." },
      { image: "agra_wais_4.png", description: "Next, I worked on building the Pipeline Management System from scratch. Although the frontend used a pre-built template, it was still a challenge. I had to read through many components, understand how they worked, and decide which ones to use appropriately." },
      { image: "agra_wais_5.png", description: "The biggest challenge, however, was working with a massive database containing many tables and columns. On top of that, the project was built using Laravel 5 an outdated version with limited documentation and support. It was often difficult to find relevant resources or tutorials since Laravel no longer recommends using that version." },
      { image: "agra_wais_6.png", description: "Assisted teammates with features like Control Testing, Projection Analysis, and Admin Panel. Took responsibility for preparing and deploying the project to development and staging environments." }
    ]
  },
  {
    id: 4,
    title: "Agate",
    subtitle: "Astra Virtueverse",
    path: "agate_astra_1.png",
    released: true,
    children: [
      { image: "agate_astra_2.png", description: "After a year of working remotely on various projects at Agranara, my application was accepted, and I joined one of the top game development companies in Southeast Asia based in Indonesia as a Full-Stack Programmer on the Gamification Team." },
      { image: "agate_astra_3.png", description: "Collaborated with Astra to build a CMS for Astra Virtueverse using React and .NET. Developed a Floor Plan Management, a booth assignment feature from scratch using a grid-based layout (inspired by Clash of Clans), implemented with Gridstack." },
      { image: "agate_astra_4.png", description: "I also worked with Unity expanding my skills into full-stack and game development, implement vector positioning that aligned with the floor plan management system, ensuring booth placements in the CMS accurately matched their positions in the 3D environment." },
      { image: "agate_astra_5.png", description: "Maintained and expanded the Booth Management System by implementing detailed features such as booth info and asset configuration (atlas, poster, type, and color)." },
      { image: "agate_astra_6.png", description: "At this point, I was working back-to-back across roles from full-stack development and bug fixing on various features, to game development tasks such as building booth previews, managing avatar positioning within booths, and implementing collision systems." }
    ]
  },
  {
    id: 5,
    title: "Agranara",
    subtitle: "SIGI Mandiri",
    path: "agra_sigi_1.png",
    released: true,
    children: [
      { image: "agra_sigi_2.png", description: "Deskripsi untuk SIGI Mandiri 2." },
      { image: "agra_sigi_3.png", description: "Deskripsi untuk SIGI Mandiri 3." },
      { image: "agra_sigi_4.png", description: "Deskripsi untuk SIGI Mandiri 4." },
      { image: "agra_sigi_5.png", description: "Deskripsi untuk SIGI Mandiri 5." }
    ]
  },
  {
    id: 6,
    title: "Agate",
    subtitle: "Gebyar BCA",
    path: "agate_gebyar_1.jpg",
    released: true,
    children: [
      { image: "agate_gebyar_2.png", description: "Deskripsi untuk Gebyar BCA 2." },
      { image: "agate_gebyar_3.png", description: "Deskripsi untuk Gebyar BCA 3." },
      { image: "agate_gebyar_4.png", description: "Deskripsi untuk Gebyar BCA 4." }
    ]
  },
  {
    id: 7,
    title: "Agate",
    subtitle: "DEUS HOAFL",
    path: "agate_deus_1.png",
    released: true,
    children: [
      { image: "agate_deus_2.png", description: "Deskripsi untuk DEUS HOAFL 2." },
      { image: "agate_deus_3.png", description: "Deskripsi untuk DEUS HOAFL 3." }
    ]
  },
  {
    id: 8,
    title: "Agate",
    subtitle: "CPCM MooGotchi",
    path: "agate_cpcm_1.png",
    released: false,
    children: [
      { image: "agate_cpcm_1.png", description: "Coming soon." }
    ]
  },
  {
    id: 9,
    title: "Agate",
    subtitle: "MVP Pistachio",
    path: "agate_pistachio_1.png",
    released: false,
    children: [
      { image: "agate_pistachio_1.png", description: "Coming soon." }
    ]
  }
];

const assetMap = {
  "agate_astra_1.png": require('../../assets/porto/agate_astra_1.png'),
  "agate_astra_2.png": require('../../assets/porto/agate_astra_2.png'),
  "agate_astra_3.png": require('../../assets/porto/agate_astra_3.png'),
  "agate_astra_4.png": require('../../assets/porto/agate_astra_4.png'),
  "agate_astra_5.png": require('../../assets/porto/agate_astra_5.png'),
  "agate_astra_6.png": require('../../assets/porto/agate_astra_6.png'),

  "agate_cpcm_1.png": require('../../assets/porto/agate_cpcm_1.png'),

  "agate_deus_1.png": require('../../assets/porto/agate_deus_1.png'),
  "agate_deus_2.png": require('../../assets/porto/agate_deus_2.png'),
  "agate_deus_3.png": require('../../assets/porto/agate_deus_3.png'),

  "agate_gebyar_1.jpg": require('../../assets/porto/agate_gebyar_1.jpg'),
  "agate_gebyar_2.png": require('../../assets/porto/agate_gebyar_2.png'),
  "agate_gebyar_3.png": require('../../assets/porto/agate_gebyar_3.png'),
  "agate_gebyar_4.png": require('../../assets/porto/agate_gebyar_4.png'),

  "agate_pistachio_1.png": require('../../assets/porto/agate_pistachio_1.png'),

  "agra_sigi_1.png": require('../../assets/porto/agra_sigi_1.png'),
  "agra_sigi_2.png": require('../../assets/porto/agra_sigi_2.png'),
  "agra_sigi_3.png": require('../../assets/porto/agra_sigi_3.png'),
  "agra_sigi_4.png": require('../../assets/porto/agra_sigi_4.png'),
  "agra_sigi_5.png": require('../../assets/porto/agra_sigi_5.png'),

  "agra_wais_1.png": require('../../assets/porto/agra_wais_1.png'),
  "agra_wais_2.png": require('../../assets/porto/agra_wais_2.png'),
  "agra_wais_3.png": require('../../assets/porto/agra_wais_3.png'),
  "agra_wais_4.png": require('../../assets/porto/agra_wais_4.png'),
  "agra_wais_5.png": require('../../assets/porto/agra_wais_5.png'),
  "agra_wais_6.png": require('../../assets/porto/agra_wais_6.png'),

  "assemblr_metaverse_1.jpg": require('../../assets/porto/assemblr_metaverse_1.jpg'),
  "assemblr_metaverse_2.png": require('../../assets/porto/assemblr_metaverse_2.png'),
  "assemblr_metaverse_3.png": require('../../assets/porto/assemblr_metaverse_3.png'),
  "assemblr_metaverse_4.png": require('../../assets/porto/assemblr_metaverse_4.png'),

  "assemblr_studio_1.jpg": require('../../assets/porto/assemblr_studio_1.jpg'),
  "assemblr_studio_2.jpg": require('../../assets/porto/assemblr_studio_2.jpg'),
  "assemblr_studio_3.jpg": require('../../assets/porto/assemblr_studio_3.jpg'),
  "assemblr_studio_4.jpg": require('../../assets/porto/assemblr_studio_4.jpg'),
  "assemblr_studio_5.jpg": require('../../assets/porto/assemblr_studio_5.jpg'),
};

export { dataContent, assetMap }; 