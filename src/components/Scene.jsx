import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import "./scene.scss";

const BasicParticles = () => {
  const points = useRef();
  return (
    <points ref={points}>
      <sphereGeometry args={[20, 150, 48]} />
      <pointsMaterial color="#ffffff" size={0.05} />
    </points>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0.5, 0, 13] }}>
      <ambientLight intensity={0.01} />
      <BasicParticles />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.6}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
    </Canvas>
  );
};

export default Scene;
