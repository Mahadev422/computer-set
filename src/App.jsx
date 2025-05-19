import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { TbZoomCode } from "react-icons/tb";
import { MdScreenRotationAlt } from "react-icons/md";

// Computer setup components with improved details
import Desk from './components/Desk';
import Chair from './components/Chair';
import Cpu from './components/Cpu';
import Mouse from './components/Mouse';
import Keyboard from './components/Keyboard';
import Monitor from './components/Monitor';


// Main scene component
const Scene = ({ rotation, zoom }) => {

  const groupRef = useRef();
  const { camera } = useThree();

  // Add subtle animation
  useFrame((state, delta) => {
    if (groupRef.current && rotation) {
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
        enableZoom={ zoom ? true : false }
        enablePan={true}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        camera={camera}
      />
    </>
  );
};

// Main component
const ComputerSetup3D = () => {

  const [rotation, setRotation] = useState(true)
  const [zoom, setZoom] = useState(false)
 

  return (
  <div className="absolute inset-0">
    
    <Canvas 
      shadows
      camera={{ position: [0, 1, -5]}}
      className="absolute inset-0"
    >
      <Html>
        <div className='absolute top-[-350px] right-[-250px]'>
          <button onClick={() => setZoom(!zoom)} className={`text-3xl ${ !zoom ? 'bg-red-400' : 'bg-green-400'} cursor-pointer p-2 rounded-2xl m-1`}>
            <TbZoomCode />
          </button>
          <button onClick={() => setRotation(!rotation)}
          className={`text-3xl ${rotation ? 'bg-red-400' : 'bg-green-400'} cursor-pointer p-2 rounded-2xl m-1`}>           <MdScreenRotationAlt /> 
          </button>
        </div>
      </Html>
      <Scene rotation={rotation} zoom={zoom} />
    </Canvas>
  </div>
  );
};

export default ComputerSetup3D;