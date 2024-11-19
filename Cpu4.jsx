/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/cpu4.glb 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('/cpu4.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <spotLight intensity={543.514} angle={Math.PI / 8} penumbra={0.15} decay={2} position={[0, 0.306, 0]} rotation={[-1.868, -0.28, -0.67]} target={nodes.Spot.target}>
        <primitive object={nodes.Spot.target} position={[0, 0, -1]} />
      </spotLight>
      <mesh geometry={nodes.Plane002.geometry} material={materials.normalTest} />
    </group>
  )
}

useGLTF.preload('/cpu4.glb')
