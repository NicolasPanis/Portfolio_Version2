import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.scss";

function Home() {
  const loader = new FontLoader();

  loader.load("fonts/helvetiker_regular.typeface.json", function (font) {
    const geometry = new TextGeometry("Hello three.js!", {
      font: font,
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5,
    });
  });

  const Scene = () => {
    return (
      <Canvas camera={{ position: [0.1, 6, 13] }}>
        <ambientLight intensity={0.01} />
        <BasicParticles />
      </Canvas>
    );
  };

  return (
    <>
      <Header />
      <div className="main"></div>
      <Footer />
    </>
  );
}

export default Home;
