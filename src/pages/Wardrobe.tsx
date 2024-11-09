import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from "@readyplayerme/react-avatar-creator";
import { useEffect, useState } from "react";
import axios from 'axios';

const config: AvatarCreatorConfig = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: false,
  language: "en",
};

const style = { width: "100%", height: "100vh", border: "none", margin: 0 };

const Wardrobe = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>();

  // Fetch avatar URL after login (assuming you're storing the token in localStorage)
  useEffect(() => {
    const fetchAvatarUrl = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/api/user', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setAvatarUrl(response.data.avatarUrl);  // Set the avatar URL from the server
          console.log(avatarUrl);
        } catch (error) {
          console.error('Failed to fetch avatar URL:', error);
        }
      }
    };
    fetchAvatarUrl();
  }, []);

  // Handle avatar export and send the avatar URL to the server
  const handleOnAvatarExported = async (event: AvatarExportedEvent) => {
    const exportedUrl = event.data.url;
    setAvatarUrl(exportedUrl); // Update state with new avatar URL

    try {
      const token = localStorage.getItem('token');
      if (token) {
        // Send the new avatar URL to the backend to be stored
        await axios.post('http://localhost:5000/api/avatar', { avatarUrl: exportedUrl }, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Avatar URL saved to the server:', exportedUrl);
      }
    } catch (error) {
      console.error('Failed to save avatar URL:', error);
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {!avatarUrl ? (
        <AvatarCreator
          subdomain="visual-studio"
          config={config}
          style={style}
          onAvatarExported={handleOnAvatarExported}
        />
      ) : (
        <iframe title="ReadyPlayerMe Avatar" src={avatarUrl} style={style} />
      )}
    </div>
  );
};

export default Wardrobe;
