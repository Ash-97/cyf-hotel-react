import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dawn_over_Glasgow_%2848659596342%29.jpg/800px-Dawn_over_Glasgow_%2848659596342%29.jpg"
          alt="Glasgow"
        />
        <div className="card-body">
          <h2 className="card-title">Glasgow</h2>
          <p className="card-text">
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding. Today it's a national cultural hub, home to
            institutions including the Scottish Opera, Scottish Ballet and
            National Theatre of Scotland, as well as acclaimed museums and a
            thriving music scene.
          </p>
          <a
            href="https://peoplemakeglasgow.com"
            target="blank"
            className="btn btn-primary"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="card text-center">
        <img
          src="https://www.placenorthwest.co.uk/wp-content/uploads/legacy-assets/images/oct_11/pnw__1320056853_Piccadilly_Gardens.jpg"
          alt="Manchester"
        />
        <div className="card-body">
          <h2 className="card-title">Manchester</h2>
          <p className="card-text">
            Manchester is a major city in the northwest of England with a rich
            industrial heritage. The Castlefield conservation area’s
            18th-century canal system recalls the city’s days as a textile
            powerhouse, and visitors can trace this history at the interactive
            Museum of Science & Industry. The revitalised Salford Quays
            dockyards now house the Daniel Libeskind-designed Imperial War
            Museum North and the Lowry cultural centre.
          </p>
          <a
            href="https://visitmanchester.com"
            target="blank"
            className="btn btn-primary"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="card text-center">
        <img
          src="https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555943130/production/city/hero_image_11_1555943130.jpg"
          alt="London"
        />
        <div className="card-body">
          <h2 className="card-title">London</h2>
          <p className="card-text">
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations. Across the Thames River, the London Eye observation
            wheel provides panoramic views of the South Bank cultural complex,
            and the entire city.
          </p>
          <a
            href="https://visitlondon.com"
            target="blank"
            className="btn btn-primary"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
