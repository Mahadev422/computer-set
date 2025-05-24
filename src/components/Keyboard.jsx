import { Html } from "@react-three/drei";

const Keyboard = () => {
 
  return (
    <group position={[0, -0.43, -0.5]}>
      {/* Keyboard base */}
      <mesh castShadow>
        <boxGeometry args={[1.2, 0.05, 0.4]} />
        <meshStandardMaterial color="#111111" roughness={0.8} />
      </mesh>

      {/* Keyboard keys - QWERTY layout */}
      <group position={[0, 0.03, 0]}>
        {/* Top row (QWERTY...) */}
        {['Q','W','E','R','T','Y','U','I','O','P'].map((key, i) => (
          <mesh 
            key={`top-${key}`} 
            position={[-0.5 + (i * 0.1), 0.02, 0]}
            castShadow
          >
            <boxGeometry args={[0.08, 0.02, 0.08]} />
            <meshStandardMaterial
              color="#222222" 
              roughness={0.6}
            />
            {/* Key label */}
            <Html
              position={[0, 0.015, 0]}
              transform
              distanceFactor={10}
              style={{
                width: '16px',
                height: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '8px',
                fontWeight: 'bold',
                pointerEvents: 'none'
              }}
            >
              {}
            </Html>
          </mesh>
        ))}

        {/* Home row (ASDF...) */}
        {['A','S','D','F','G','H','J','K','L'].map((key, i) => (
          <mesh 
            key={`home-${key}`}
            position={[-0.45 + (i * 0.1), 0.05, 0.1]}
            castShadow
          >
            <boxGeometry args={[0.08, 0.02, 0.08]} />
            <meshStandardMaterial 
              color="#222222"
            />
            <Html
              position={[0, 0.015, 0]}
              transform
              style={{ 
                color: 'white',
                fontSize: '8px',
                fontWeight: 'bold'
              }}
            >
              {}
            </Html>
          </mesh>
        ))}

        {/* Space bar */}
        <mesh position={[0, 0.02, -0.12]} castShadow>
          <boxGeometry args={[0.4, 0.02, 0.1]} />
          <meshStandardMaterial 
            color="#333333"
          />
          <Html
            position={[0, 0.015, 0]}
            transform
            style={{
              width: '80px',
              textAlign: 'center',
              color: 'transparent',
              fontSize: '1px'
            }}
          >
            
          </Html>
        </mesh>
      </group>
    </group>
  );
};

export default Keyboard;