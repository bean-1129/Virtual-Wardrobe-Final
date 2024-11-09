import React, { useEffect, useState } from 'react';

const SpringCollection = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const pexelsApiKey = import.meta.env.VITE_PEXELS_API_KEY;
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=spring+fashion&per_page=12`, {
          headers: {
            Authorization: pexelsApiKey
          }
        }
      );
      const data = await response.json();
      setPhotos(data.photos);
    };
    fetchData();
  }, []);

  return (
    <div className='lookbookInside'>
      <h1>Spring Collection</h1>
      <div className="photo-grid">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.src.medium} alt={photo.alt} />
        ))}
      </div>
    </div>
  );
};

export default SpringCollection;
