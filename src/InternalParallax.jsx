import { Plane, useBoxProjectedEnv, useCubeTexture } from '@react-three/drei'
import { useControls } from 'leva'
import * as THREE from 'three'

export default function InternalParallax() {
  const envMap = useCubeTexture(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg'], { path: 'MarriottMadisonWest/' })
  const { up, scale, ...config } = useControls({
    up: { value: -0.5, min: -10, max: 10 },
    scale: { value: 27, min: 0, max: 50 },
    roughness: { value: 0.06, min: 0, max: 0.15, step: 0.001 },
    envMapIntensity: { value: 1, min: 0, max: 5 }
  })
  const projection = useBoxProjectedEnv([0, up, 0], [scale, scale, scale])

  return (
    <Plane args={[8, 8]} rotation={[0, 0, 0]}>
      <meshStandardMaterial
        envMap={envMap}
        envMapIntensity={1}
        {...projection}
        {...config}
        color={'white'}
        roughness={0}
        metalness={1}
        side={THREE.DoubleSide}
      />
    </Plane>
  )
}
