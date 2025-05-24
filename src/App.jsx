import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import { OrbitControls, Environment, Html } from '@react-three/drei';
// Computer setup components with improved details
import Desk from './components/Desk';
import Chair from './components/Chair';
import Cpu from './components/Cpu';
import Mouse from './components/Mouse';
import Keyboard from './components/Keyboard';
import Monitor from './components/Monitor';

const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

const Scene = () => {
  const groupRef = useRef();
  const { camera, mouse, gl } = useThree();
  const [hovered, setHovered] = useState(false);

  // Handle pointer over/out to toggle reset mode
  useEffect(() => {
    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    gl.domElement.addEventListener('pointerenter', handleEnter);
    gl.domElement.addEventListener('pointerleave', handleLeave);

    return () => {
      gl.domElement.removeEventListener('pointerenter', handleEnter);
      gl.domElement.removeEventListener('pointerleave', handleLeave);
    };
  }, [gl]);

  useFrame(() => {
    if (!groupRef.current) return;

    const targetY = hovered ? clamp(mouse.x, -0.4, 0.4) : 0;
    const targetX = hovered ? clamp(mouse.y, -0.2, 0.2) : 0;

    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.1;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.1;
  });

  return (
    <>
      <directionalLight 
        position={[0, 0, 2]} 
        intensity={1.5} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Environment preset="city" />

      <group position={[0, 0, 1]} ref={groupRef}>
        <Desk />
        <Monitor />
        <Keyboard />
        <Mouse />
        <Chair modelPath="/computer-set/models/chair.gltf" position={[0, -2, -2.2]} />
        <Cpu />
      </group>

      <OrbitControls 
        enableZoom={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        camera={camera}
      />
    </>
  );
};


const ComputerSetup3D = () => {

  return (
  <div className="absolute inset-0">
    
    <Canvas 
      shadows
      camera={{ position: [0, 1, -4]}}
      className="absolute inset-0"
    >
      <Scene />
    </Canvas>
  </div>
  );
};

export default ComputerSetup3D;