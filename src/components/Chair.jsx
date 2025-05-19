import { useGLTF } from "@react-three/drei";

const Chair = ({ modelPath, ...props }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <group scale={0.85} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default Chair;