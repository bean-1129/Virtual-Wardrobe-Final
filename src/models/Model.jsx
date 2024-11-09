import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import scene from '../assets/scene.glb';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';

const Model = ({ setIsRotating, ...props }) => {
  const { nodes, materials } = useGLTF(scene);
  const modelRef = useRef();
  
  // Set isRotating to true initially
  const isRotating = useRef(true); // Change this to true for initial rotation

  // Apply rotation continuously
  useFrame(() => {
    if (isRotating.current) {
      modelRef.current.rotation.y += 0.01; // Adjust speed as needed
    }
  });

  // Pointer and keyboard controls
  const { gl, viewport } = useThree();
  const lastX = useRef(0);

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    isRotating.current = false; // Stop automatic rotation on user interaction
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!isRotating.current) { // Only rotate on pointer move if not auto-rotating
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      modelRef.current.rotation.y += delta * 0.5 * Math.PI;
      lastX.current = clientX;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      modelRef.current.rotation.y += 0.05 * Math.PI;
    } else if (e.key === 'ArrowLeft') {
      modelRef.current.rotation.y -= 0.05 * Math.PI;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gl]);

  return (
    <a.group ref={modelRef} {...props} dispose={null}>
      <a.group scale={0.01}>
        <a.group position={[-16.269, 244.435, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cuerpo__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cuerpo__0_1.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cuerpo__0_2.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cuerpo__0_3.geometry}
            material={materials['Scene_-_Root']}
          />
        </a.group>
      </a.group>
    </a.group>
  );
};

export default Model;
