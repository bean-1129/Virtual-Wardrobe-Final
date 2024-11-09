import React from 'react';
import { Canvas } from '@react-three/fiber'; // No need to extend geometries explicitly
import { OrbitControls } from '@react-three/drei';

function Podium() {
  return (
    <mesh position={[0, -2, 0]} castShadow receiveShadow>
      <cylinderGeometry args={[1.5, 1.5, 0.5, 32]} />
      <meshStandardMaterial color="#A9A9A9" />
    </mesh>
  );
}

function RotatingModel() {
  return (
    <mesh rotation={[0, 1, 0]} position={[0, 0, 0]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FFD700" />
    </mesh>
  );
}

const Podium1 = () => {
  return (
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} castShadow intensity={0.8} />
      
      {/* Podium and Rotating Model */}
      <group position={[-2, 0, 0]}>
        <Podium />
        <RotatingModel />
      </group>
      
      {/* Orbit Controls for interaction */}
      <OrbitControls />
    </Canvas>
  );
}

export default Podium1;
