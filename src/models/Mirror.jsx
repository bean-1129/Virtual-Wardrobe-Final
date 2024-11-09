/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: mohamedhussien (https://sketchfab.com/mohamedhussien)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ornate-mirror-01-4k-a3ad19a9186b445b9fae07f9f36f3bce
Title: Ornate Mirror 01 4k
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import scene from '../assets/mirror.glb'
import { exp } from 'three/webgpu'

const Mirror =(props) => {
  const { nodes, materials } = useGLTF(scene)
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ornate_mirror_01_ornate_mirror_01_0.geometry}
          material={materials.ornate_mirror_01}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

// useGLTF.preload('/ornate_mirror_01_4k.glb')
export default Mirror;