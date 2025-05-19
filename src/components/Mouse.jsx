
const Mouse = () => {

  return (
    <mesh 
      position={[1, -0.4, -0.6]} 
      rotation={[-Math.PI / 4, 0, 0]}
      castShadow
    >
      <sphereGeometry args={[0.15, 16, 8]} />
      <meshStandardMaterial 
        color={"#333333"} 
        emissive={"#00ffaa"}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export default Mouse;