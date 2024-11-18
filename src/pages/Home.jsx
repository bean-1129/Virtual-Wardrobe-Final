import React, { useEffect, useState } from 'react'
import Model from '../models/Model'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import { OrbitControls, Stage } from '@react-three/drei'
import Subtitle from '../components/Subtitle'
import { Stage2 } from '../models/Stage2'
import { useNavigate } from 'react-router-dom';
import signUpGif from '../assets/signup.gif';
import wardrobeGif from '../assets/wardrobe.gif';
import mixMatch from '../assets/mix-match.gif';
import bookmark from '../assets/bookmark.gif';
import summerCover from '../assets/summerCover.jpg';
import winterCover from '../assets/winterCover.jpg';
import springCover from '../assets/springCover.jpg';
import fallCover from '../assets/fallCover.jpg';
import WardrobeModel from '../models/WardrobeModel'
// import Podium1 from '../models/Podium'
import Mirror from '../models/Mirror'
import Podium from '../models/Podium'

export const Home = () => {

  const [isRotating, setIsRotating] = useState(false);

  const adjustModelForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0,1,10];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [20, 20, 20];
    }
    return [screenScale, screenPosition];
  }
  const [ModelScale, ModelPosition] = adjustModelForScreenSize();
  const PodiumScale = [10,10,10];
  const PodiumPosition = [0,0,4];
  // console.log(ModelPosition);
  const wardrobeScale = [3, 3, 3];
  const wardrobePosition = [0, -2, -4];
  let mirrorRotation = [0, 3.5, 0];

  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/signup');
  };

  return (
    <main className='home'>
      <div className='landingContent'>
        <div className='landingContent1'>
          <div className='landingContent2'>
            <h1 className='text-center flex '>Virtual Studio</h1>
          </div>
          <div className='landingContent3 typewriterContainer'>
            <Subtitle />
            <button className='getStarted' onClick={handleGetStartedClick}>
              Get Started
            </button>
            <Canvas shadows
              camera={{ position: [0, 0, 50], fov: 40 }} // Adjust camera for better static view
              style={{ height: '350px' }}
            >
              <Suspense fallback={<Loader />}>
                <ambientLight intensity={0.3} />
                <directionalLight
                  castShadow
                  position={[5, 10, 5]}
                  intensity={1.5}
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                />
                <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                <hemisphereLight intensity={0.9} skyColor={'#ffffff'} groundColor={'#444444'} />

                <mesh receiveShadow position={[0, -20, 10]} rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[100, 100]} />
                  <meshStandardMaterial color="rgba(138, 231, 238, 1)" />
                </mesh>

                <WardrobeModel
                  position={wardrobePosition}
                  scale={wardrobeScale}
                  castShadow
                  receiveShadow />
                <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} enableDamping={true} dampingFactor={0.1} />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className='canvas' style={{ height: '100vh', marginTop: '50px' }}>
          <Canvas shadows
            camera={{ fov: 60, position: [0, 0.5 , 0.6]}}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <ambientLight intensity={0.5} />
              <hemisphereLight skycolor="#b1e1ff" groundColor="#000000" intensity={1} />
              {/* <Podium 
              position = {PodiumPosition}
              scale = {PodiumScale} /> */}
              <Model
                position={ModelPosition}
                scale={ModelScale}
              />

             

              {/* <Stage2
        position={stagePosition}
        scale={stageScale} /> */}

              <OrbitControls enableRotate={false} enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p className="description">A step-by-step guide on how to use the virtual wardrobe:</p>

        <div className="steps">
          <div className="step">
            <img src={signUpGif} alt="Sign Up" className="step-icon" />
            <div className="step-details">
              <h3>Sign Up / Log In</h3>
              <p>Create an account or log in to access your personal wardrobe.</p>
            </div>
          </div>

          <div className="step">
            <img src={wardrobeGif} alt="Explore Wardrobe" className="step-icon" />
            <div className="step-details">
              <h3>Explore the Wardrobe</h3>
              <p>Browse through your uploaded outfits and accessories.</p>
            </div>
          </div>

          <div className="step">
            <img src={mixMatch} alt="Mix and Match" className="step-icon" />
            <div className="step-details">
              <h3>Mix and Match Outfits</h3>
              <p>Try different combinations to create new looks.</p>
            </div>
          </div>

          <div className="step">
            <img src={bookmark} alt="Save Favorites" className="step-icon" />
            <div className="step-details">
              <h3>Save Your Favorites</h3>
              <p>Save your favorite outfits for quick access later.</p>
            </div>
          </div>
        </div>
      </section>


      <div className='features'>
        <h1>Features of Virtual Studio</h1>
        <div className='cards'>

          <div className="card">
            <img src="https://i.pinimg.com/originals/80/ea/9d/80ea9decfa0336d14e405c13baf07d6b.jpg" alt="" />
            <div className="card-content">
              <h2>
                3D Model Viewing
              </h2>
              <p>
                Interactively view and rotate 3D models of clothing in real-time.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://cdn.adsalecdn.com/TTG20/Editor/b191db1876e7493f96b77b9c9eae7006/3.jpg" alt="" />
            <div className="card-content">
              <h2>
                Virtual Try-On
              </h2>
              <p>
                Try on outfits virtually to see how they look before purchasing.
              </p>
            </div>
          </div>

          <div className="card">
            <img src="http://www.digsdigs.com/photos/2013/02/65-stylish-and-exciting-walk-in-closet-design-ideas-7.jpg" alt="" />
            <div className="card-content">
              <h2>
                Personalized Wardrobe
              </h2>
              <p>
                Create a virtual wardrobe to manage your outfits and styles.
              </p>
            </div>
          </div>

          <div className="card">
            <img src="http://kiararobbins.weebly.com/uploads/8/3/9/9/83992482/blockchain-in-fashion_orig.jpg" alt="" />
            <div className="card-content">
              <h2>
                Customizable Looks
              </h2>
              <p>
                Customize your look with various clothing items and accessories.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://generated-assets.prod.myninja.ai/de94e505-dfb1-427a-a8ef-33d6c6568a01/95790149-bff0-42bd-9269-72f3161945d7_0.jpeg" alt="" />
            <div className="card-content">
              <h2>
                Style Advisor Chatbot
              </h2>
              <p>
                Get personalized outfit suggestions for any occasion with our smart chatbot.
              </p>
            </div>
          </div>

        </div>
      </div>


      <section className="seasonal-collections">
        <h2>Lookbook</h2>
        <p className="description">Discover the perfect outfits for each season. Click on any image to view details or shop similar looks.</p>

        <div className="seasonal-gallery">
          <div className="seasonal-item">
            <img src={summerCover} alt="Summer Collection" className="seasonal-image" />
            <div className="overlay">
              <button className="view-details" onClick={() => window.location.href = '/summer-collection'}>
                View Summer Collection
              </button>
            </div>
          </div>

          <div className="seasonal-item">
            <img src={winterCover} alt="Winter Collection" className="seasonal-image" />
            <div className="overlay">
              <button className="view-details" onClick={() => window.location.href = '/winter-collection'}>View Winter Collection</button>
            </div>
          </div>

          <div className="seasonal-item">
            <img src={springCover} alt="Spring Collection" className="seasonal-image" />
            <div className="overlay">
              <button className="view-details" onClick={() => window.location.href = '/spring-collection'}>View Spring Collection</button>
            </div>
          </div>

          <div className="seasonal-item">
            <img src={fallCover} alt="Fall Collection" className="seasonal-image" />
            <div className="overlay">
              <button className="view-details" onClick={() => window.location.href = '/fall-collection'}>View Fall Collection</button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
