const dataContent = [
  {
    id: 1,
    title: "Assemblr",
    subtitle: "Metaverse",
    path: "assemblr_metaverse_1.jpg",
    released: true,
    children: [
      { image: "assemblr_metaverse_1.jpg", description: "Deskripsi untuk Metaverse 1." },
      { image: "assemblr_metaverse_2.png", description: "Deskripsi untuk Metaverse 2." },
      { image: "assemblr_metaverse_3.png", description: "Deskripsi untuk Metaverse 3." },
      { image: "assemblr_metaverse_4.png", description: "Deskripsi untuk Metaverse 4." }
    ]
  },
  {
    id: 2,
    title: "Assemblr",
    subtitle: "Studio",
    path: "assemblr_studio_1.jpg",
    released: true,
    children: [
      { image: "assemblr_studio_1.jpg", description: "Deskripsi untuk Studio 1." },
      { image: "assemblr_studio_2.jpg", description: "Deskripsi untuk Studio 2." },
      { image: "assemblr_studio_3.jpg", description: "Deskripsi untuk Studio 3." },
      { image: "assemblr_studio_4.jpg", description: "Deskripsi untuk Studio 4." },
      { image: "assemblr_studio_5.jpg", description: "Deskripsi untuk Studio 5." }
    ]
  },
  {
    id: 3,
    title: "Agranara",
    subtitle: "WAIS BSI",
    path: "agra_wais_1.png",
    released: true,
    children: [
      { image: "agra_wais_1.png", description: "Deskripsi untuk WAIS BSI 1." },
      { image: "agra_wais_2.png", description: "Deskripsi untuk WAIS BSI 2." },
      { image: "agra_wais_3.png", description: "Deskripsi untuk WAIS BSI 3." },
      { image: "agra_wais_4.png", description: "Deskripsi untuk WAIS BSI 4." },
      { image: "agra_wais_5.png", description: "Deskripsi untuk WAIS BSI 5." },
      { image: "agra_wais_6.png", description: "Deskripsi untuk WAIS BSI 6." }
    ]
  },
  {
    id: 4,
    title: "Agate",
    subtitle: "Astra Virtueverse",
    path: "agate_astra_1.png",
    released: true,
    children: [
      { image: "agate_astra_1.png", description: "Deskripsi untuk Astra Virtueverse 1." },
      { image: "agate_astra_2.png", description: "Deskripsi untuk Astra Virtueverse 2." },
      { image: "agate_astra_3.png", description: "Deskripsi untuk Astra Virtueverse 3." },
      { image: "agate_astra_4.png", description: "Deskripsi untuk Astra Virtueverse 4." },
      { image: "agate_astra_5.png", description: "Deskripsi untuk Astra Virtueverse 5." }
    ]
  },
  {
    id: 5,
    title: "Agranara",
    subtitle: "SIGI Mandiri",
    path: "agra_sigi_1.png",
    released: true,
    children: [
      { image: "agra_sigi_1.png", description: "Deskripsi untuk SIGI Mandiri 1." },
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
      { image: "agate_gebyar_1.jpg", description: "Deskripsi untuk Gebyar BCA 1." },
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
      { image: "agate_deus_1.png", description: "Deskripsi untuk DEUS HOAFL 1." },
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