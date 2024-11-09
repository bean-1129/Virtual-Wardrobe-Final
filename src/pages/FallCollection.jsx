import React, { useEffect, useState } from 'react';

const FallCollection = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const pexelsApiKey = import.meta.env.VITE_PEXELS_API_KEY;
    const fetchData = async () => {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=fall+fashion&per_page=12`, {
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
      <h1>Fall Collection</h1>
      <div className="photo-grid">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.src.medium} alt={photo.alt} />
        ))}
      </div>
    </div>
  );
};

export default FallCollection;
