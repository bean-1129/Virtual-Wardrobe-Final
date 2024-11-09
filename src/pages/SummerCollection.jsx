import React, { useEffect, useState } from 'react';

const SummerCollection = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const pexelsApiKey = import.meta.env.VITE_PEXELS_API_KEY;
    console.log("API Key:", pexelsApiKey);
    const fetchData = async () => {
      const response = await fetch(
        'https://api.pexels.com/v1/search?query=summer+outfits&per_page=12',
        {
          headers: {
            Authorization: pexelsApiKey,
          },
        }
      );
      const data = await response.json();
      setPhotos(data.photos); // Adjust based on Pexels response structure
    };
    fetchData();
  }, []);

  return (
    <div className='lookbookInside'>
      <h1>Summer Collection</h1>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-grid-item">
            <img src={photo.src.medium} alt={photo.alt} />
            {/* <div className="caption">{photo.alt}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummerCollection;
