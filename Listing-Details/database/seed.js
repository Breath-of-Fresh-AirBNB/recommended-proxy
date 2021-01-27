const db = require('./index');

const Listing = require('./Listing');

const urlBuilder = (homeName, from20 = 0) => {
  const S3 = 'https://feclistingphotos.s3.us-east-2.amazonaws.com/';
  const urls = [];
  const endings = ['/1.webp', '/2.webp', '/3.webp', '/4.webp', '/5.webp', '/6.webp', '/7.webp', '/8.webp', '/9.webp', '/10.webp', '/11.webp', '/12.webp', '/13.webp', '/14.webp', '/15.webp', '/16.webp', '/17.webp', '/18.webp', '/19.webp', '/20.webp'];
  for (let i = 0; i < endings.length - from20; i += 1) {
    urls.push(S3 + homeName + endings[i]);
  }
  return urls;
};

// Need 100 samples
const seedData = [

  // =================================================================
  //                          Barcelona
  // =================================================================

  {
    home: 1,
    title: 'Centric Apartment in Barcelona El Born',
    location: 'Barcelona, Spain',
    rating: 4.5,
    photoUrls: urlBuilder('Barcelona/1'),
  },
  {
    home: 2,
    title: 'Chic Penthouse in the Center with Private Terrace',
    location: 'Barcelona, Spain',
    photoUrls: urlBuilder('Barcelona/2', 1),
    rating: 4,
  },
  {
    home: 3,
    title: 'Cozy Room in Gracia',
    location: 'Barcelona, Spain',
    photoUrls: urlBuilder('Barcelona/3', 2),
    rating: 3.5,
  },
  {
    home: 4,
    title: 'Exclusivo Apartamento en el Corazón de Barcelona',
    location: 'Barcelona, Spain',
    photoUrls: urlBuilder('Barcelona/4'),
    rating: 4,
  },
  {
    home: 5,
    title: 'Great Bedroom in Central Barcelona',
    location: 'Barcelona, Spain',
    photoUrls: urlBuilder('Barcelona/5'),
    rating: 3.5,
  },
  {
    home: 6,
    title: 'Modernism and Luxury in the Exiample',
    location: 'Barcelona, Spain',
    photoUrls: urlBuilder('Barcelona/6'),
    rating: 4,
  },
  {
    home: 7,
    title: 'Modernist and Luxurious Flat in Idyllic Location',
    location: 'Barcelona, Spain',
    photoUrls: urlBuilder('Barcelona/7'),
    rating: 4.5,
  },
  {
    home: 8,
    title: 'Spectacular Penthouse in the Center',
    location: 'Barcelona, Spain',
    photoUrls: urlBuilder('Barcelona/8'),
    rating: 5,
  },
  {
    home: 9,
    title: 'Villa Gaudi',
    location: 'Barcelona, Spain',
    photoUrls: urlBuilder('Barcelona/9'),
    rating: 5,
  },
  {
    home: 10,
    title: 'Villa Tibidabo Lux Barcelona',
    location: 'Barcelona, Spain',
    photoUrls: urlBuilder('Barcelona/10'),
    rating: 5,
  },

  // =================================================================
  //                          Cairo
  // =================================================================

  {
    home: 11,
    title: 'Eclectic Oasis in the Heart of Downtown Cairo',
    location: 'Cairo, Egypt',
    rating: 3,
    // photoUrls: urlBuilder('Cairo/11'),
  },
  {
    home: 12,
    title: 'Villa for Cinematic Photography',
    location: 'Cairo, Egypt',
    rating: 2.5,
    // photoUrls: urlBuilder('Cairo/12'),
  },
  {
    home: 13,
    title: 'Boutique Hotel Villa Belle Epoque Extension',
    location: 'Cairo, Egypt',
    rating: 2.5,
    // photoUrls: urlBuilder('Cairo/13'),
  },
  {
    home: 14,
    title: 'Cairoom Mivida',
    location: 'Cairo, Egypt',
    rating: 3,
    // photoUrls: urlBuilder('Cairo/14'),
  },
  {
    home: 15,
    title: 'Dahab Island Palace on Geziret El Dahab in Cairo',
    location: 'Cairo, Egypt',
    rating: 5,
    // photoUrls: urlBuilder('Cairo/15'),
  },
  {
    home: 16,
    title: 'Downtown Cairo Oasis',
    location: 'Cairo, Egypt',
    rating: 5,
    // photoUrls: urlBuilder('Cairo/16'),
  },
  {
    home: 17,
    title: 'Pool House Overlooking Abu Sir Pyramids',
    location: 'Cairo, Egypt',
    rating: 4.5,
    // photoUrls: urlBuilder('Cairo/17'),
  },
  {
    home: 18,
    title: 'Panoramic Nile View Apartment in Zamalek',
    location: 'Cairo, Egypt',
    rating: 4,
    // photoUrls: urlBuilder('Cairo/18'),
  },
  {
    home: 19,
    title: 'Reconstruction of 19th Century Princely Mansion',
    location: 'Cairo, Egypt',
    rating: 4.5,
    // photoUrls: urlBuilder('Cairo/19'),
  },
  {
    home: 20,
    title: 'Sheraton Ocean',
    location: 'Cairo, Egypt',
    rating: 3,
    // photoUrls: urlBuilder('Cairo/20'),
  },

  // =================================================================
  //                          Denver
  // =================================================================

  {
    home: 21,
    title: 'Bungalow B',
    location: 'Denver, Colorado',
    rating: 2.5,
    // photoUrls: urlBuilder('Denver/21'),
  },
  {
    home: 22,
    title: 'Centrally Located Private Suite With Hot Tub & More!',
    location: 'Denver, Colorado',
    rating: 3,
    // photoUrls: urlBuilder('Denver/22'),
  },
  {
    home: 23,
    title: 'Clean, Comfortable Apartment in Denver',
    location: 'Denver, Colorado',
    rating: 4,
    // photoUrls: urlBuilder('Denver/23'),
  },
  {
    home: 24,
    title: 'Great Location Close to Downtown RiNo',
    location: 'Denver, Colorado',
    rating: 5,
    // photoUrls: urlBuilder('Denver/24'),
  },
  {
    home: 25,
    title: 'Luxury City Denver Tiny House',
    location: 'Denver, Colorado',
    rating: 4.5,
    // photoUrls: urlBuilder('Denver/25'),
  },
  {
    home: 26,
    title: 'Mid-century Modern Oasis! Close to RiNo!',
    location: 'Denver, Colorado',
    rating: 5,
    // photoUrls: urlBuilder('Denver/26'),
  },
  {
    home: 27,
    title: 'Tailored Historic Curtis Park',
    location: 'Denver, Colorado',
    rating: 5,
    // photoUrls: urlBuilder('Denver/27'),
  },
  {
    home: 28,
    title: 'Blue Bungalow of East Berkeley',
    location: 'Denver, Colorado',
    rating: 4,
    // photoUrls: urlBuilder('Denver/28'),
  },
  {
    home: 29,
    title: 'Tryout Denver',
    location: 'Denver, Colorado',
    rating: 3.5,
    // photoUrls: urlBuilder('Denver/29'),
  },
  {
    home: 30,
    title: 'Unparalleled Views of Downtown Denver',
    location: 'Denver, Colorado',
    rating: 4,
    // photoUrls: urlBuilder('Denver/30'),
  },

  // =================================================================
  //                          La Roque-Gageac
  // =================================================================

  {
    home: 31,
    title: 'L\'instant Sarladais Quartier historique',
    location: 'La Roque-Gageac, France',
    rating: 4,
    photoUrls: urlBuilder('La+Roque-Gageac/31', 2),
  },
  {
    home: 32,
    title: 'Appartements de Charme “Le Nid des Oies”',
    location: 'La Roque-Gageac, France',
    rating: 4.5,
    photoUrls: urlBuilder('La+Roque-Gageac/32', 7),
  },
  {
    home: 33,
    title: 'Le Grand Duc',
    location: 'La Roque-Gageac, France',
    rating: 3.5,
    photoUrls: urlBuilder('La+Roque-Gageac/33'),
  },
  {
    home: 34,
    title: 'Loft Lenzo avec Jacuzzi',
    location: 'La Roque-Gageac, France',
    rating: 5,
    photoUrls: urlBuilder('La+Roque-Gageac/34'),
  },
  {
    home: 35,
    title: 'Ma Cabane à Sarlat',
    location: 'La Roque-Gageac, France',
    rating: 5,
    photoUrls: urlBuilder('La+Roque-Gageac/35'),
  },
  {
    home: 36,
    title: 'Nid d\' Amoureux',
    location: 'La Roque-Gageac, France',
    rating: 5,
    photoUrls: urlBuilder('La+Roque-Gageac/36'),
  },
  {
    home: 37,
    title: 'Paisible Chalet dans le Triangle d\'Or',
    location: 'La Roque-Gageac, France',
    rating: 5,
    photoUrls: urlBuilder('La+Roque-Gageac/37'),
  },
  {
    home: 38,
    title: 'Sarlat Centre Au Calme',
    location: 'La Roque-Gageac, France',
    rating: 4,
    photoUrls: urlBuilder('La+Roque-Gageac/38'),
  },
  {
    home: 39,
    title: 'Stunning Home in La Roque-Gageac',
    location: 'La Roque-Gageac, France',
    rating: 4,
    photoUrls: urlBuilder('La+Roque-Gageac/39', 1),
  },
  {
    home: 40,
    title: 'The Terraces of Montfort',
    location: 'La Roque-Gageac, France',
    rating: 4.5,
    photoUrls: urlBuilder('La+Roque-Gageac/40'),
  },

  // =================================================================
  //                          London
  // =================================================================
  {
    home: 41,
    title: 'Beautiful 5BDR Home w/Garden, in South Kensington',
    location: 'London, United Kingdom',
    rating: 4.5,
    // photoUrls: urlBuilder('London/41'),
  },
  {
    home: 42,
    title: 'Covent Garden St Martins Three Bed',
    location: 'London, United Kingdom',
    rating: 4,
    // photoUrls: urlBuilder('London/42'),
  },
  {
    home: 43,
    title: 'Fairy Tale 3 Bedroom by Piccadilly',
    location: 'London, United Kingdom',
    rating: 5,
    // photoUrls: urlBuilder('London/43'),
  },
  {
    home: 44,
    title: 'Hyde Park Duplex in 1860’s Georgian Townhouse',
    location: 'London, United Kingdom',
    rating: 5,
    // photoUrls: urlBuilder('London/44'),
  },
  {
    home: 45,
    title: 'Luxurious 2 Bedroom by Regent Street',
    location: 'London, United Kingdom',
    rating: 5,
    // photoUrls: urlBuilder('London/45', 5),
  },
  {
    home: 46,
    title: 'Heart of Mayfair',
    location: 'London, United Kingdom',
    rating: 4,
    // photoUrls: urlBuilder('London/46'),
  },
  {
    home: 47,
    title: 'Park Lane, Mayfair New Ultra Modern Spacious House',
    location: 'London, United Kingdom',
    rating: 4,
    // photoUrls: urlBuilder('London/47'),
  },
  {
    home: 48,
    title: 'Premium Designer Apartment in Golden Square',
    location: 'London, United Kingdom',
    rating: 5,
    // photoUrls: urlBuilder('London/48', 1),
  },
  {
    home: 49,
    title: 'Spacious Apartment, Berwick street',
    location: 'London, United Kingdom',
    rating: 5,
    // photoUrls: urlBuilder('London/49'),
  },
  {
    home: 50,
    title: 'Stunning Family Home in the Heart of Notting Hill',
    location: 'London, United Kingdom',
    rating: 5,
    // photoUrls: urlBuilder('London/50'),
  },

  // =================================================================
  //                          New York
  // =================================================================

  {
    home: 51,
    title: 'Brooklyn Brick & Brownstone Treetop Terrace',
    location: 'New York, NY',
    rating: 5,
    // photoUrls: urlBuilder('New+York/51'),
  },
  {
    home: 52,
    title: 'Classic NoHo Loft',
    location: 'New York, NY',
    rating: 4.5,
    // photoUrls: urlBuilder('New+York/52', 5),
  },
  {
    home: 53,
    title: 'Best Block Clean Luxury Loft in SoHo',
    location: 'New York, NY',
    rating: 4,
    // photoUrls: urlBuilder('New+York/53'),
  },
  {
    home: 54,
    title: 'City Queen',
    location: 'New York, NY',
    rating: 3.5,
    // photoUrls: urlBuilder('New+York/54'),
  },
  {
    home: 55,
    title: 'Luxurious NY Apt in Perfect Location',
    location: 'New York, NY',
    rating: 5,
    // photoUrls: urlBuilder('New+York/55'),
  },
  {
    home: 56,
    title: 'Luxury Living XL Spacious Condo Magnificent views',
    location: 'New York, NY',
    rating: 4,
    // photoUrls: urlBuilder('New+York/56'),
  },
  {
    home: 57,
    title: 'Minimalist Luxury Loft in Soho.',
    location: 'New York, NY',
    rating: 4.5,
    // photoUrls: urlBuilder('New+York/57', 4),
  },
  {
    home: 58,
    title: 'New York Upper West Central Park Studio',
    location: 'New York, NY',
    rating: 4,
    // photoUrls: urlBuilder('New+York/58', 8),
  },
  {
    home: 59,
    title: 'Private/Luxurious/Fully Furnished Tribeca Loft',
    location: 'New York, NY',
    rating: 5,
    // photoUrls: urlBuilder('New+York/59'),
  },
  {
    home: 60,
    title: 'West Village Luxury Loft',
    location: 'New York, NY',
    rating: 4.5,
    // photoUrls: urlBuilder('New+York/60'),
  },

  // =================================================================
  //                          San Francisco
  // =================================================================

  {
    home: 61,
    title: 'Chic Retreat with Stunning Views of San Fran Bay',
    location: 'San Francisco, CA',
    rating: 5,
    // photoUrls: urlBuilder('San+Francisco/61'),
  },
  {
    home: 62,
    title: 'Home Suite Home',
    location: 'San Francisco, CA',
    rating: 3.5,
    // photoUrls: urlBuilder('San+Francisco/62'),
  },
  {
    home: 63,
    title: 'Iconic, Renovated, San Francisco Flat!',
    location: 'San Francisco, CA',
    rating: 4,
    // photoUrls: urlBuilder('San+Francisco/63', 2),
  },
  {
    home: 64,
    title: 'Luxe Private Getaway in the Heart of San Francisco',
    location: 'San Francisco, CA',
    rating: 4,
    // photoUrls: urlBuilder('San+Francisco/64'),
  },
  {
    home: 65,
    title: 'Luxurious Couple Retreat, Spa, Balcony, 5 min to SF',
    location: 'San Francisco, CA',
    rating: 3.5,
    // photoUrls: urlBuilder('San+Francisco/65'),
  },
  {
    home: 66,
    title: 'Luxury Beach View Apartment',
    location: 'San Francisco, CA',
    rating: 5,
    // photoUrls: urlBuilder('San+Francisco/66', 3),
  },
  {
    home: 67,
    title: 'New SF Shipyard Condo',
    location: 'San Francisco, CA',
    rating: 5,
    // photoUrls: urlBuilder('San+Francisco/67'),
  },
  {
    home: 68,
    title: 'Sunny SF Soma Studio',
    location: 'San Francisco, CA',
    rating: 4,
    // photoUrls: urlBuilder('San+Francisco/68'),
  },
  {
    home: 69,
    title: 'Watch the Sunset at a Boho-Chic Studio with Private Terrace',
    location: 'San Francisco, CA',
    rating: 5,
    // photoUrls: urlBuilder('San+Francisco/69'),
  },
  {
    home: 70,
    title: 'Waterfront Bay House',
    location: 'San Francisco, CA',
    rating: 5,
    // photoUrls: urlBuilder('San+Francisco/70'),
  },

  // =================================================================
  //                          Santorini
  // =================================================================

  {
    home: 71,
    title: '360 Blue',
    location: 'Santorini, Greece',
    rating: 5,
    // photoUrls: urlBuilder('Santorini/71'),
  },
  {
    home: 72,
    title: 'Amara Villa',
    location: 'Santorini, Greece',
    rating: 5,
    // photoUrls: urlBuilder('Santorini/72'),
  },
  {
    home: 73,
    title: 'Fira White Residence Deluxe Villa',
    location: 'Santorini, Greece',
    rating: 5,
    // photoUrls: urlBuilder('Santorini/73'),
  },
  {
    home: 74,
    title: 'I-Sol',
    location: 'Santorini, Greece',
    rating: 5,
    // photoUrls: urlBuilder('Santorini/74'),
  },
  {
    home: 75,
    title: 'King Albus Villa with Private Poo',
    location: 'Santorini, Greece',
    rating: 4.5,
    // photoUrls: urlBuilder('Santorini/75'),
  },
  {
    home: 76,
    title: 'Luxury Villa with Breathtaking View',
    location: 'Santorini, Greece',
    rating: 2,
    // photoUrls: urlBuilder('Santorini/76'),
  },
  {
    home: 77,
    title: 'Opsis Cave House',
    location: 'Santorini, Greece',
    rating: 4.5,
    // photoUrls: urlBuilder('Santorini/77'),
  },
  {
    home: 78,
    title: 'Secret Spot Luxury Villa',
    location: 'Santorini, Greece',
    rating: 4,
    // photoUrls: urlBuilder('Santorini/78'),
  },
  {
    home: 79,
    title: 'Seascape Villa with Jacuzzi',
    location: 'Santorini, Greece',
    rating: 4,
    // photoUrls: urlBuilder('Santorini/79'),
  },
  {
    home: 80,
    title: 'Villa di Capo Old Winery Villa Antonis',
    location: 'Santorini, Greece',
    rating: 3.5,
    // photoUrls: urlBuilder('Santorini/80'),
  },

  // =================================================================
  //                          Tokyo
  // =================================================================

  {
    home: 81,
    title: '【限定一組の一棟ホテル】100inch4Kシネマ・コンサート仕様音響・ヘントハウスBar・屋上テラス',
    location: 'Tokyo, Japan',
    rating: 4,
    photoUrls: urlBuilder('Tokyo/81'),
  },
  {
    home: 82,
    title: 'New house 6mins to Ikebukuro Station',
    location: 'Tokyo, Japan',
    rating: 3,
    photoUrls: urlBuilder('Tokyo/82'),
  },
  {
    home: 83,
    title: 'Best for Family Luxury 3 Bedroom Suite',
    location: 'Tokyo, Japan',
    rating: 3,
    photoUrls: urlBuilder('Tokyo/83'),
  },
  {
    home: 84,
    title: 'Olympic Tokyo 1min to Ueno/Akiba/Tatami Room',
    location: 'Tokyo, Japan',
    rating: 3.5,
    photoUrls: urlBuilder('Tokyo/84'),
  },
  {
    home: 85,
    title: 'Private Rooftop Terrace Penthouse Studio',
    location: 'Tokyo, Japan',
    rating: 5,
    photoUrls: urlBuilder('Tokyo/85'),
  },
  {
    home: 86,
    title: 'Terrace Suite',
    location: 'Tokyo, Japan',
    rating: 5,
    photoUrls: urlBuilder('Tokyo/86'),
  },
  {
    home: 87,
    title: 'スーペリアスタジオ (201室)5',
    location: 'Tokyo, Japan',
    rating: 5,
    photoUrls: urlBuilder('Tokyo/87'),
  },
  {
    home: 88,
    title: '忘年会・party・女子会・撮影ok! 港区500M² の 静かな隠れ別荘｜東京タワーが目の前に',
    location: 'Tokyo, Japan',
    rating: 5,
    photoUrls: urlBuilder('Tokyo/88'),
  },
  {
    home: 89,
    title: '旅行折扣中＃Open Sales 巣鴨駅徒歩で2分 ２つ部屋最大4人エレベーター、wifi付',
    location: 'Tokyo, Japan',
    rating: 4,
    photoUrls: urlBuilder('Tokyo/89'),
  },
  {
    home: 90,
    title: 'Balcony Junior Suite',
    location: 'Tokyo, Japan',
    rating: 4,
    photoUrls: urlBuilder('Tokyo/90'),
  },

  // =================================================================
  //                          Vail
  // =================================================================

  {
    home: 91,
    title: 'Ski in/out + Ski Valet, 4 Season Pool & Spa',
    location: 'Vail, Colorado',
    rating: 4,
    // photoUrls: urlBuilder('Vail/91'),
  },
  {
    home: 92,
    title: 'Chamonix Chalet, West Vail',
    location: 'Vail, Colorado',
    // photoUrls: urlBuilder('Vail/92', 5),
    rating: 3.5,
  },
  {
    home: 93,
    title: 'Luxury Home Near Golf & Ski Shuttle',
    location: 'Vail, Colorado',
    rating: 4.5,
    // photoUrls: urlBuilder('Vail/93', 1),
  },
  {
    home: 94,
    title: 'Inviting Cozy East Vail Condo On Gore Creek!',
    location: 'Vail, Colorado',
    rating: 4,
    // photoUrls: urlBuilder('Vail/94'),
  },
  {
    home: 95,
    title: 'Luxury Home With Hot Tub ',
    location: 'Vail, Colorado',
    rating: 5,
    // photoUrls: urlBuilder('Vail/95'),
  },
  {
    home: 96,
    title: 'Marriott\'s Streamside, Marriott Cleaned Villa',
    location: 'Vail, Colorado',
    rating: 3,
    // photoUrls: urlBuilder('Vail/96'),
  },
  {
    home: 97,
    title: 'Semi-Private Pond & Spa Near Everything in Vail',
    location: 'Vail, Colorado',
    rating: 5,
    // photoUrls: urlBuilder('Vail/97'),
  },
  {
    home: 98,
    title: 'Snow Cross Tiny Home',
    location: 'Vail, Colorado',
    rating: 5,
    // photoUrls: urlBuilder('Vail/98'),
  },
  {
    home: 99,
    title: 'The Lion Vail',
    location: 'Vail, Colorado',
    rating: 4,
    // photoUrls: urlBuilder('Vail/99'),
  },
  {
    home: 100,
    title: 'Charming A-Frame',
    location: 'Vail, Colorado',
    rating: 2,
    // photoUrls: urlBuilder('Vail/100'),
  },
];

const seed = () => {
  Listing.create(seedData)
    .then(() => db.disconnect());
};

seed();
