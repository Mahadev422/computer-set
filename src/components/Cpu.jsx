
const Cpu = () => {
  return (
    <group position={[-1.5, 0.2, 0]} castShadow>
      <mesh position={[-0.3, 0, 0]}>
        <boxGeometry args={[0.8, 1.5, 1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.3, 0.2, -0.5]}>
        <torusGeometry args={[0.2, 0.1, 10, 100]}/>
        <meshStandardMaterial color={'blue'} />
      </mesh>
      <mesh position={[-0.3, -0.35, -0.48]}>
        <boxGeometry args={[0.6, 0.3, 0.05]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};

export default Cpu;