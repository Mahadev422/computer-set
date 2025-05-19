import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { OrbitControls, Environment, Html } from '@react-three/drei';
// Computer setup components with improved details
import Desk from './components/Desk';
import Monitor from './components/Monitor';
import Keyboard from './components/Keyboard';
import Cpu from './components/Cpu';
import Chair from './components/Chair';
import Mouse from './components/Mouse';


// Main scene component
const Scene = () => {
  const groupRef = useRef();
  const { camera } = useThree();
  
  // Add subtle animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta*0.5;
    }
  });

  return (
    <>
      <directionalLight 
        position={[0, 0, 2]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Environment preset="city" />
      
      <group position={[0,0,0]} ref={groupRef}>
        <Desk />
        <Monitor />
        <Keyboard />
        <Mouse />
        <Suspense>
          <Chair modelPath="/computer-set/models/chair.gltf" position={[0, -2, -2.2]} />
        </Suspense>
        <Cpu />
      </group>
      
      <OrbitControls 
        enableZoom={false}
        enablePan={true}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        camera={camera}
      />
    </>
  );
};

// Main component
const App = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 45}}
      className='absolute inset-0 w-[70%]'
    >
      <Scene />
    </Canvas>
  );
};

export default App;