const mongoose = require('mongoose');
const Home = require('./homeSchema.js');
const Activity = require('./activitySchema.js');

const createSampleHomes = () => {
  const sampleHomes = [];

  for (let i = 1; i <= 100; i += 1) {
    let averageRating = Math.random() * (5 - 1) + 1;
    averageRating = parseFloat(averageRating).toFixed(2);
    averageRating = Number(averageRating);

    const descriptors = ['Rustic', 'Spacious', 'Modern', 'Glamorous', 'Historic', 'Green', 'Luxurious', 'Peaceful', 'Secluded', 'Charming', 'Comfortable', 'Welcoming', 'Upscale', 'Rare', 'Beachfront', 'Waterfront'];

    const types = ['House', 'Apartment', 'B&B', 'Bungalow', 'RV', 'Cabin', 'Chalet', 'Cottage', 'Guest Suite', 'Guest House', 'Hostel', 'Lodge', 'Loft', 'Resort', 'Townhouse', 'Villa'];

    const homeName = `${descriptors[Math.floor(Math.random() * descriptors.length)]} ${types[Math.floor(Math.random() * types.length)]}`;

    const cities = ['Denver', 'London', 'Paris', 'Rome', 'Lisbon'];
    const city = cities[Math.floor(Math.random() * cities.length)];

    const roomTypes = ['Entire Place', 'Private Room', 'Hotel Room', 'Shared Room'];

    const relatedDestinations = {
      Denver: ['Colorado Springs', 'Boulder', 'Fort Collins', 'Nederland', 'Estes Park', 'Golden', 'Breckenridge', 'Aurora', 'Winter Park', 'Vail', 'Downtown Denver', 'Keystone'],
      London: ['Central London', 'Costwold District', 'Le Touquet', 'Brighton', 'Bournemouth', 'Bristol', 'Cambridge', 'Bath', 'De Panne', 'Oxford', 'Birmingham', 'Ètretat'],
      Paris: ['Rouen', 'Èterat', 'Dijon', 'Reims', 'Le Touquet', 'Ghent', 'Honfleur', 'Lille', 'Brussels', 'Deauville', 'De Panne', 'Ostend'],
      Rome: ['Ischia', 'Elba', 'Rimini', 'Naples', 'Positano', 'Pisa', 'Capri', 'Amalfi', 'Olbia', 'Sorrento', 'FLorence', 'Bologna'],
      Lisbon: ['Costa da Caparica', 'Sagres', 'Porto', 'Sintra', 'Albufeira', 'Seville', 'Ericeira', 'Faro', 'Cádiz', 'Comporta', 'Armona Island', 'Tarifa'],
    };

    const homeImages = [
      'photo-1416331108676-a22ccb276e35.jpeg',
      'photo-1422189668989-08f214d6e419.jpeg',
      'photo-1430285561322-7808604715df.jpeg',
      'photo-1448737933984-6d0ae61b2b57.jpeg',
      'photo-1449844908441-8829872d2607.jpeg',
      'photo-1452626212852-811d58933cae.jpeg',
      'photo-1472224371017-08207f84aaae.jpeg',
      'photo-1480074568708-e7b720bb3f09.jpeg',
      'photo-1484154218962-a197022b5858.jpeg',
      'photo-1489370321024-e0410ad08da4.jpeg',
      'photo-1491403865995-cda9c458c314.jpeg',
      'photo-1493663284031-b7e3aefcae8e.jpeg',
      'photo-1493809842364-78817add7ffb.jpeg',
      'photo-1494526585095-c41746248156.jpeg',
      'photo-1496365597860-f19cab8ecdaf.jpeg',
      'photo-1501638758338-a7c69c3189b8.jpeg',
      'photo-1502631868851-1717aca1be29.jpeg',
      'photo-1502672260266-1c1ef2d93688.jpeg',
      'photo-1502745582385-1d28a39a7269.jpeg',
      'photo-1503174971373-b1f69850bded.jpeg',
      'photo-1503836714791-91170f399293.jpeg',
      'photo-1508059937316-a7ec25086d99.jpeg',
      'photo-1508330570239-ce7cabceee22.jpeg',
      'photo-1509592149237-bc44977d96d0.jpeg',
      'photo-1510627489930-0c1b0bfb6785.jpeg',
      'photo-1512917774080-9991f1c4c750.jpeg',
      'photo-1513584684374-8bab748fbf90.jpeg',
      'photo-1516455590571-18256e5bb9ff.jpeg',
      'photo-1516562618495-ad1ff1a273f9.jpeg',
      'photo-1518780664697-55e3ad937233.jpeg',
      'photo-1518807920409-e8846289e251.jpeg',
      'photo-1523217582562-09d0def993a6.jpeg',
      'photo-1523745663588-1bfa973c9b35.jpeg',
      'photo-1527030280862-64139fba04ca.jpeg',
      'photo-1528255671579-01b9e182ed1d.jpeg',
      'photo-1534889156217-d643df14f14a.jpeg',
      'photo-1537670937140-21c094671625.jpeg',
      'photo-1541420937988-702d78cb9fa1.jpeg',
      'photo-1544236296-1ad3cf4edbf9.jpeg',
      'photo-1546764317-14bee3e62c39.jpeg',
      'photo-1551524164-687a55dd1126.jpeg',
      'photo-1553600836-4b02487d0cb4.jpeg',
      'photo-1554995207-c18c203602cb.jpeg',
      'photo-1559329145-afaf18e3f349.jpeg',
      'photo-1560026301-88340cf16be7.jpeg',
      'photo-1561316029-9b9bb88cf389.jpeg',
      'photo-1561753757-d8880c5a3551.jpeg',
      'photo-1561975023-4cf2c838810c.jpeg',
      'photo-1562333761-677354f49034.jpeg',
      'photo-1562881448-92022ac0cf7d.jpeg',
      'photo-1564013799919-ab600027ffc6.jpeg',
      'photo-1564357645071-9726b526a8f2.jpeg',
      'photo-1565970803988-b446d344f9e7.jpeg',
      'photo-1566870360032-259aa700570c.jpeg',
      'photo-1567428485548-c499e4931c10.jpeg',
      'photo-1567493756992-e2b6227cddc0.jpeg',
      'photo-1567871483200-779423ae5aea.jpeg',
      'photo-1568092775154-7fa176a29c0f.jpeg',
      'photo-1568605114967-8130f3a36994.jpeg',
      'photo-1568634004263-19f84e9a9c16.jpeg',
      'photo-1568634170136-dc2f95c67193.jpeg',
      'photo-1570057633712-870fa818fa15.jpeg',
      'photo-1570544820807-46989072de23.jpeg',
      'photo-1570544820979-6eb25385944d.jpeg',
      'photo-1571939228382-b2f2b585ce15.jpeg',
      'photo-1572120360610-d971b9d7767c.jpeg',
      'photo-1574259392081-dbe3c19cd15e.jpeg',
      'photo-1574284977290-2c1569c3e8b1.jpeg',
      'photo-1575517111478-7f6afd0973db.jpeg',
      'photo-1576941089067-2de3c901e126.jpeg',
      'photo-1576941465093-fc22d70914e1.jpeg',
      'photo-1577092672855-fcdc45ebd209.jpeg',
      'photo-1577915198623-1afe2ea85fc2.jpeg',
      'photo-1577986987263-907ba313530e.jpeg',
      'photo-1578753258733-f5193908e906.jpeg',
      'photo-1580269651602-92c07005c4f4.jpeg',
      'photo-1580494767366-82f4e74f5655.jpeg',
      'photo-1580587771525-78b9dba3b914.jpeg',
      'photo-1580638288392-1de2067f288b.jpeg',
      'photo-1580638573279-7296fd5782cc.jpeg',
      'photo-1581445182450-3636bab0ea6c.jpeg',
      'photo-1582268611958-ebfd161ef9cf.jpeg',
      'photo-1583847268964-b28dc8f51f92.jpeg',
      'photo-1584098731526-e3924fad98db.jpeg',
      'photo-1584704026151-d4d74f3b5ae1.jpeg',
      'photo-1584738766473-61c083514bf4.jpeg',
      'photo-1585433013681-afcfde7266cd.jpeg',
      'photo-1589382311059-92a004daf77e.jpeg',
      'photo-1592628824156-c6f2677d3bd5.jpeg',
      'photo-1593533613122-c2f067f1629e.jpeg',
      'photo-1593604340846-4fbe9763a8f3.jpeg',
      'photo-1593604340874-64b4129f6dc0.jpeg',
      'photo-1594626735136-bbad8ed06793.jpeg',
      'photo-1595222016771-1843541fa718.jpeg',
      'photo-1595877244574-e90ce41ce089.jpeg',
      'photo-1596321348931-5c7a8ff89d09.jpeg',
      'photo-1599427303058-f04cbcf4756f.jpeg',
      'photo-1600696181681-e94e0253f40c.jpeg',
      'photo-1602836948295-14b195efa63d.jpeg',
      'photo-1603034222368-fc53916f4eed.jpeg',
    ];

    const newHome = {
      homeId: i,
      name: homeName,
      destination: city,
      imageUrl: `https://fecfreshairbnb.s3.us-east-2.amazonaws.com/houses/${homeImages[i + 1]}`,
      accommodationType: roomTypes[Math.floor(Math.random() * roomTypes.length)],
      beds: Math.floor(Math.random() * (15) - 1) + 1,
      reviews: Math.floor(Math.random() * (1000) - 0) + 0,
      averageRating,
      rate: Math.floor(Math.random() * (2000 - 13) + 13),
      relatedDestinations: relatedDestinations[city],
    };

    sampleHomes.push(newHome);
  }
  return sampleHomes;
};

const createSampleActivities = () => {
  const sampleActivities = [];

  for (let i = 1; i <= 100; i += 1) {
    let averageRating = Math.random() * (5 - 1) + 1;
    averageRating = parseFloat(averageRating).toFixed(2);
    averageRating = Number(averageRating);

    const cities = ['Denver', 'London', 'Paris', 'Rome', 'Lisbon'];

    const city = cities[Math.floor(Math.random() * cities.length)];

    const verbs = ['Discover', 'Explore', 'Tasting', 'Walking Tour of', 'The Nightlife of', 'Historic', 'Secrets of', 'Street Art of', 'The Best of'];

    const activityImages = [
      'photo-1414235077428-338989a2e8c0.webp',
      'photo-1444084316824-dc26d6657664.webp',
      'photo-1454923634634-bd1614719a7b.webp',
      'photo-1467226632440-65f0b4957563.webp',
      'photo-1484353371297-d8cfd2895020.webp',
      'photo-1484972759836-b93f9ef2b293.webp',
      'photo-1485182708500-e8f1f318ba72.webp',
      'photo-1494522855154-9297ac14b55f.webp',
      'photo-1496889196885-5ddcec5eef4d.webp',
      'photo-1501386761578-eac5c94b800a.webp',
      'photo-1504022462188-88f023db97bf.webp',
      'photo-1510766491942-cb5112e3c81f.webp',
      'photo-1512704515581-de233a09dae8.webp',
      'photo-1514905552197-0610a4d8fd73.webp',
      'photo-1518414922567-9da8c8461366.webp',
      'photo-1518998053901-5348d3961a04.webp',
      'photo-1522202176988-66273c2fd55f.webp',
      'photo-1523384197172-aa61d18ab654.webp',
      'photo-1525924235470-06c29885efd1.webp',
      'photo-1532635241-17e820acc59f.webp',
      'photo-1534016493773-9cdaf3eb86c0.webp',
      'photo-1546574722-8267e1c67c54.webp',
      'photo-1549643276-fdf2fab574f5.webp',
      'photo-1549851991-5b5c9c586f84.webp',
      'photo-1557925179-12cb8561a922.webp',
      'photo-1565349173908-1cf6bc9fd4ee.webp',
      'photo-1570125909517-53cb21c89ff2.webp',
      'photo-1578260393993-495d724f3072.webp',
      'photo-1585822780219-ab6c0fb0e2f5.webp',
      'photo-1592561849308-3ab187d49881.webp',
      'photo-1603418735208-86f031556a5a.webp',
    ];

    const newActivity = {
      activityId: i,
      name: `${verbs[Math.floor(Math.random() * verbs.length)]} ${city}`,
      destination: city,
      imageUrl: `https://fecfreshairbnb.s3.us-east-2.amazonaws.com/activities/${activityImages[Math.floor(Math.random() * activityImages.length)]}`,
      reviews: Math.floor(Math.random() * (1000) - 0) + 0,
      averageRating,
      rate: Math.floor(Math.random() * (2000 - 13) + 13),
    };

    sampleActivities.push(newActivity);
  }
  return sampleActivities;
};

const sampleHouses = createSampleHomes();
const sampleActivities = createSampleActivities();

const insertSamples = () => {
  Home.create(sampleHouses)
    .then(() => Activity.create(sampleActivities))
    .then(() => mongoose.disconnect())
    // eslint-disable-next-line no-console
    .catch((err) => console.log('error: ', err));
};
insertSamples();
