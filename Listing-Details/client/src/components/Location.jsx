/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';

const Location = ({ handleBack, searchResults }) => {
  const isBarcelona = searchResults.home <= 10 && searchResults.home >= 1;
  const isCairo = searchResults.home <= 20 && searchResults.home >= 11;
  const isDenver = searchResults.home <= 30 && searchResults.home >= 21;
  const isLaRouqueGageac = searchResults.home <= 40 && searchResults.home >= 31;
  const isLondon = searchResults.home <= 50 && searchResults.home >= 41;
  const isNewYork = searchResults.home <= 60 && searchResults.home >= 51;
  const isSanFrancisco = searchResults.home <= 70 && searchResults.home >= 61;
  const isSantorini = searchResults.home <= 80 && searchResults.home >= 71;
  const isTokyo = searchResults.home <= 90 && searchResults.home >= 81;
  const isVail = searchResults.home <= 100 && searchResults.home >= 91;
  return (
    <div>
      <div className="left">
        <svg onClick={() => handleBack()} id="backLeft" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
      </div>
      <div className="location">
        <div id="locationInfo">
          <b id="title">Location</b>
          <br />
          <br />
          <span>{searchResults.location}</span>
          <br />
          {isBarcelona
            ? (
              <p id="locationDescription">
                Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. City history museum MUHBA, includes several Roman archaeological sites.
              </p>
            )
            : null}
          {isCairo
            ? (
              <p id="locationDescription">
                Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.
              </p>
            )
            : null}
          {isDenver
            ? (
              <p id="locationDescription">
                Denver, the capital of Colorado, is an American metropolis dating to the Old West era. Larimer Square, the city’s oldest block, features landmark 19th-century buildings. Museums include the Denver Art Museum, an ultramodern complex known for its collection of indigenous works, and the mansion of famed Titanic survivor Molly Brown. Denver is also a jumping-off point for ski resorts in the nearby Rocky Mountains.
              </p>
            )
            : null}
          {isLaRouqueGageac
            ? (
              <p id="locationDescription">
                La Roque-Gageac is a commune in the Dordogne department in Nouvelle-Aquitaine, southwestern France. Perched above the river Dordogne, the village is a member of the Les Plus Beaux Villages de France association.
              </p>
            )
            : null}
          {isLondon
            ? (
              <p id="locationDescription">
                London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.
              </p>
            )
            : null}
          {isNewYork
            ? (
              <p id="locationDescription">
                New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.
              </p>
            )
            : null}
          {isSanFrancisco
            ? (
              <p id="locationDescription">
                San Francisco, officially the City and County of San Francisco, is a cultural, commercial, and financial center of Northern California. San Francisco is the 16th most populous city in the United States, and the fourth most populous in California, with 881,549 residents as of 2019.
              </p>
            )
            : null}
          {isSantorini
            ? (
              <p id="locationDescription">
                Fira is the capital of Santorini, a Greek island in the Aegean Sea. The Museum of Prehistoric Thira displays items from the destroyed Bronze Age settlement of Akrotiri, including wall paintings and ceramics. Nearby, the whitewashed Orthodox Metropolitan Cathedral has frescoes by local artist Christoforos Asimis. Fira’s clifftop location affords views of Nea Kameni, a still-active volcanic island to the west.
              </p>
            )
            : null}
          {isTokyo
            ? (
              <p id="locationDescription">
                Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. Many museums offer exhibits ranging from classical art in the Tokyo National Museum to a reconstructed kabuki theater in the Edo-Tokyo Museum.
              </p>
            )
            : null}
          {isVail
            ? (
              <p id="locationDescription">
                Vail, Colorado, is a small town at the base of Vail Mountain, home of the massive Vail Ski Resort. Set within White River National Forest, the town is a gateway for winter sports such as skiing and snowboarding. It’s also a summertime destination for golfing, hiking and cultural festivals. Gore Creek, popular for fly fishing, runs directly through the town center.
              </p>
            )
            : null}
        </div>
        {isBarcelona
          ? (
            <div id="map">
              <iframe title="BarcelonaMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95777.33906387842!2d2.0787282554701334!3d41.39489759322831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1611437922003!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" />
            </div>
          )
          : null}
        {isCairo
          ? (
            <div id="map">
              <iframe title="CairoMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33564057917!2d31.223444935197637!3d30.059558098303366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1611438011113!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" />
            </div>
          )
          : null}
        {isDenver
          ? (
            <div id="map">
              <iframe title="DenverMap" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196280.1047309347!2d-104.995194550608!3d39.76487811439323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1611438126783!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" />
            </div>
          )
          : null}
        {isLaRouqueGageac
          ? (
            <div id="map">
              <iframe title="LaRouqueGageacMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22640.59591248447!2d1.1824368847412505!3d44.82004710337004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ab5838ef174d1f%3A0x93dac64bd2047bab!2s24250%20La%20Roque-Gageac%2C%20France!5e0!3m2!1sen!2sus!4v1611438394348!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" />
            </div>
          )
          : null}
        {isLondon
          ? (
            <div id="map">
              <iframe title="LondonMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281080726!2d-0.24168024584704462!3d51.528771840474214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1611438536794!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" />
            </div>
          )
          : null}
        {isNewYork
          ? (
            <div id="map">
              <iframe title="NewYorkMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1611438806016!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" />
            </div>
          )
          : null}
        {isSanFrancisco
          ? (
            <div id="map">
              <iframe title="SanFranciscoMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.02846874147!2d-122.47261937941492!3d37.75776267828957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1611438970382!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" />
            </div>
          )
          : null}
        {isSantorini
          ? (
            <div id="map">
              <iframe title="SantoriniMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6421.079042570598!2d25.427793077616077!3d36.42033480344183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499cdce05e3bce9%3A0x9f4c192bbefa1db!2sThera%20847%2000%2C%20Greece!5e0!3m2!1sen!2sus!4v1611439152786!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" />
            </div>
          )
          : null}
        {isTokyo
          ? (
            <div id="map">
              <iframe title="TokyoMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.2481970674!2d139.60078451430468!3d35.66844146170515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1611439262258!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" />
            </div>
          )
          : null}
        {isVail
          ? (
            <div id="map">
              <iframe title="VailMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49163.51017133488!2d-106.395279269501!3d39.633521745133656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a7005515dcf07%3A0xc9ccc01f7e9aa3c4!2sVail%2C%20CO%2081657!5e0!3m2!1sen!2sus!4v1611439363751!5m2!1sen!2sus" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" />
            </div>
          )
          : null}
      </div>
    </div>
  );
};

export default Location;
