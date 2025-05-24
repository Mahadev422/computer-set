import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, TextureLoader } from "three";


const Monitor = () => {
  // Using a real image URL from Unsplash
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.y = Math.PI;
  });

  const screenTexture = useLoader(
    TextureLoader, '/computer-set/image.png'
  );
  
  return (
    <group position={[0, 0, 0]}>
      {/* Monitor frame (black border) */}
      <mesh position={[0, 0.6, 0.115]}>
        <boxGeometry args={[1.8, 1, 0.03]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Screen surface with image texture */}
      <mesh position={[0, 0.6, 0.095]} ref={ref} >
        <planeGeometry args={[1.75, 0.99]} />
        <meshStandardMaterial 
          map={screenTexture}
          side={DoubleSide}
          toneMapped={false}
        />
      </mesh>
      {/* Monitor stand */}
      <group position={[0, -0.2, 0.1]}>
        <mesh>
          <cylinderGeometry args={[0.05, 0.1, 0.7, 8]} />
          <meshStandardMaterial color="#555555" />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[0.5, 0.2, 0.35]} />
          <meshStandardMaterial color="#555555" />
        </mesh>
      </group>
    </group>
  );
};

export default Monitor;