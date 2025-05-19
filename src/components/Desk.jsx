
const Desk = () => {
  return (
    <group>
      <mesh position={[-0.2, -0.5, 0]} receiveShadow>
        <boxGeometry args={[5, 0.1, 2]} />
        <meshStandardMaterial color="#333333" roughness={0.8} />
      </mesh>
      {/* Desk legs */}
      {[-1.8, 1.8].map((x) => 
        [-0.8, 0.8].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, -1.1, z]} castShadow>
            <cylinderGeometry args={[0.1, 0.1, 1.2, 8]} />
            <meshStandardMaterial color="#222222" />
          </mesh>
        ))
      )}
    </group>
  );
};

export default Desk;