import React, { useState } from 'react';
import YelpAPI from './YelpAPI';
import Map from './Map'
import List from './List'
import SaladGif from "./media/SaladGif.gif";

const App = () => {
  const [yelpData, setYelpData] = useState([]); // store Yelp data

  const handleYelpData = (data) => {
    setYelpData(data);
  }

  return (
    <div className="Body">
      <div>
        <YelpAPI handleYelpData={handleYelpData} />
      </div>

      {yelpData.length > 0 ? (
        <div className='Body'>

          <div className='Body__listContainer'> 
            <List data={yelpData} /> 
          </div>

          <div className='Body__mapContainer'> 
            <Map data={yelpData} />
          </div>

        </div>
      ) : (
        <div className='Body' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src={SaladGif} alt='Loading...' className='LoadingGif'/>
        </div>
      )}

    </div>
  );
};

export default App;
