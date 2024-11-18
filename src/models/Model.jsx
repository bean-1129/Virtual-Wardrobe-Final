import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import scene from '../assets/scene.glb';
import * as THREE from 'three';

// Import textures
import texture1 from "../imgs/texture1.jpg";
import texture2 from "../imgs/texture2.jpg";
import texture3 from "../imgs/texture3.jpg";
import texture4 from "../imgs/texture4.jpg";
import texture5 from "../imgs/texture5.jpeg";

const Model = ({ position, ...props }) => {
  const group = useRef();
  const { nodes, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // Load textures
  const textures = useTexture([texture1, texture2, texture3, texture4, texture5]);

  // State to manage current textures
  const [tshirtTexture, setTshirtTexture] = useState(textures[0]);
  const [shortsTexture, setShortsTexture] = useState(textures[1]);

  

  useEffect(() => {
    // Play the animation
    const walkAction = actions["Armature|mixamo.com|Layer0"];
    if (walkAction) {
      walkAction.play();
    }
  }, [actions]);

  // Randomly update textures every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomTshirtIndex = Math.floor(Math.random() * textures.length);
      const randomShortsIndex = Math.floor(Math.random() * textures.length);

      setTshirtTexture(textures[randomTshirtIndex]);
      setShortsTexture(textures[randomShortsIndex]);
    }, 2000);

    console.log(animations);

    

    return () => clearInterval(interval); 
  }, [textures]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="obj1" 
            geometry={nodes.obj1.geometry}
            material={nodes.obj1.material}
            skeleton={nodes.obj1.skeleton}
          />
          <skinnedMesh
            name="obj2" 
            geometry={nodes.obj2.geometry}
            material={nodes.obj2.material}
            skeleton={nodes.obj2.skeleton}
          />
          <skinnedMesh
            name="obj10"
            geometry={nodes.obj10.geometry}
            material={nodes.obj10.material}
            skeleton={nodes.obj10.skeleton}
          />
          <skinnedMesh
            name="obj11"
            geometry={nodes.obj11.geometry}
            material={nodes.obj11.material}
            skeleton={nodes.obj11.skeleton}
          />
          <skinnedMesh
            name="obj12"
            geometry={nodes.obj12.geometry}
            material={nodes.obj12.material}
            skeleton={nodes.obj12.skeleton}
          />
          <skinnedMesh
            name="obj13"
            geometry={nodes.obj13.geometry}
            material={nodes.obj13.material}
            skeleton={nodes.obj13.skeleton}
          />
          <skinnedMesh
            name="obj14" // T-shirt
            geometry={nodes.obj14.geometry}
            material={new THREE.MeshStandardMaterial({ map: tshirtTexture })}
            skeleton={nodes.obj14.skeleton}
          />
          <skinnedMesh
            name="obj15" // Shorts
            geometry={nodes.obj15.geometry}
            material={new THREE.MeshStandardMaterial({ map: shortsTexture })}
            skeleton={nodes.obj15.skeleton}
          />
          <skinnedMesh
            name="obj16"
            geometry={nodes.obj16.geometry}
            material={nodes.obj16.material}
            skeleton={nodes.obj16.skeleton}
          />
          <skinnedMesh
            name="obj17"
            geometry={nodes.obj17.geometry}
            material={nodes.obj17.material}
            skeleton={nodes.obj17.skeleton}
          />
          <skinnedMesh
            name="obj3"
            geometry={nodes.obj3.geometry}
            material={nodes.obj3.material}
            skeleton={nodes.obj3.skeleton}
          />
          <skinnedMesh
            name="obj4"
            geometry={nodes.obj4.geometry}
            material={nodes.obj4.material}
            skeleton={nodes.obj4.skeleton}
          />
          <skinnedMesh
            name="obj5"
            geometry={nodes.obj5.geometry}
            material={nodes.obj5.material}
            skeleton={nodes.obj5.skeleton}
          />
          <skinnedMesh
            name="obj6"
            geometry={nodes.obj6.geometry}
            material={nodes.obj6.material}
            skeleton={nodes.obj6.skeleton}
          />
          <skinnedMesh
            name="obj7"
            geometry={nodes.obj7.geometry}
            material={nodes.obj7.material}
            skeleton={nodes.obj7.skeleton}
          />
          <skinnedMesh
            name="obj8"
            geometry={nodes.obj8.geometry}
            material={nodes.obj8.material}
            skeleton={nodes.obj8.skeleton}
          />
          <skinnedMesh
            name="obj9"
            geometry={nodes.obj9.geometry}
            material={nodes.obj9.material}
            skeleton={nodes.obj9.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};

export default Model;

// useGLTF.preload('/ImageToStl.com_walking.glb');
