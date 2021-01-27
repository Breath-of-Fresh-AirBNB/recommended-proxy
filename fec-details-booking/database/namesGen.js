const names = 'Shakira Cordova\nLizzie Houle\nVella Guess\nBreanna Frizzell\nReanna Hancock\nPinkie Dubois\nHerb Carney\nStanford Muncy\nMai Bible\nDede Mccrary\nAnja Fultz\nCodi Barclay\nMarva Easter\nChanelle Daugherty\nKayleen Lira\nRolland Lester\nSerafina Field\nLorrine Haller\nEmilee Snipes\nCyrus Reedy\nTwyla Estrella\nGeorgianna Coburn\nAngelika Nealy\nDario Meek\nBuffy Maestas\nLincoln Gilchrist\nPattie Whited\nLeda Boyles\nMafalda Goins\nCorrina Dickinson\nJong Chong\nBambi Crooks\nArt Kitchens\nAlfredia Grimes\nTilda Shepard\nAlleen Mccloskey\nRenate Laws\nKarin Logue\nDavina Billingsley\nJaimee Roland\nAntonetta Nall\nCharleen Metz\nCherri Reddick\nDion Mcduffie\nSerafina Gainey\nElton Stoddard\nCharlena Cardwell\nIvelisse Seymour\nRosamond Masterson\nVern Mcvay\nKris Oswald\nJerry Greco\nLory Hallman\nDian Oneill\nRicarda Kidd\nFarrah Gil\nTomeka Mauldin\nCorey Houghton\nJolynn Holcomb\nShon Hightower\nJed Hinojosa\nLamont Hartwell\nWeston Hewitt\nFrancesco Clarkson\nParis Bickford\nGrisel Luckett\nLisette Alba\nVirgie Stovall\nTijuana Candelaria\nMisha Knowlton\nVesta Sizemore\nBobbie Baylor\nMarti Cruse\nHyacinth Wasson\nEstefana Mays\nLulu Camacho\nRiva Tomlinson\nEvalyn Mcnamara\nHildred Haller\nCarina Click\nDannie Baer\nSynthia Pritchett\nBrianne Matteson\nLeonie Hazel\nArlen Merriman\nOlinda Livingston\nSigrid Hussey\nNatacha Bragg\nGary Dupuis\nJoline Low\nEvelina Hennessey\nTheresia Ervin\nCoretta Lyman\nReta Chisholm\nWarner Cornett\nAundrea Kramer\nAlva Bain\nJonah Shearer\nLucio Wills\nDomenica Villareal\n';

const namesArr = names.split('\n');
const namesObjArr = namesArr.map((val) => {
  const nameSplit = val.split(' ');
  return { firstName: nameSplit[0], lastName: nameSplit[1] };
});

const getName = (id) => namesObjArr[id - 1];

module.exports.getName = getName;