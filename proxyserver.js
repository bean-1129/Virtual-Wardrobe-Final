const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.get('/proxy/:avatarId', async (req, res) => {
  const avatarId = req.params.avatarId;
  console.log(`Fetching model for Avatar ID: ${avatarId}`);
  
  // Construct the URL for fetching the GLB file
  const modelUrl = `https://models.readyplayer.me/${avatarId}.glb?preview=true`;

  try {
    const response = await axios.get(modelUrl, {
      responseType: 'arraybuffer', // Use arraybuffer to handle binary data
    });

    // Check if the response is valid and has data
    if (response.data) {
      res.setHeader('Content-Type', 'model/gltf-binary'); // Set correct content type for GLB
      res.status(200).send(Buffer.from(response.data)); // Send the buffer as response
    } else {
      res.status(404).send('Model not found.');
    }
  } catch (error) {
    console.error('Error fetching the GLB file:', error);

    // Check if error response exists and return it
    if (error.response) {
      res.status(error.response.status).send(error.response.data); // Forward error status and message
    } else {
      res.status(500).send('Error fetching the GLB file.'); // Generic error response
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
