import * as THREE from 'three'
import { useLayoutEffect } from 'react'
import { applyProps, Canvas } from '@react-three/fiber'
import { useGLTF, useBoxProjectedEnv, CubeCamera, Environment, OrbitControls, BakeShadows } from '@react-three/drei'
import { useControls } from 'leva'
import InternalParallax from './InternalParallax'

export default function App() {
  return (
    <Canvas frameloop="demand" dpr={[1, 1.5]} shadows camera={{ near: 0.1, far: 40, fov: 75 }}>
      <fog attach="fog" args={['purple', 0, 130]} />
      <ambientLight intensity={0.1} />
      <InternalParallax />
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      <Environment preset="sunset" />
      <BakeShadows />
    </Canvas>
  )
}
