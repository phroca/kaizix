import React, { Suspense } from "react"
import { Canvas, useFrame } from  "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useTime } from "framer-motion";
//import CanvasLoader from "./loader"

const Logo = () => {
    const logo  = useGLTF("./static/desktop_pc/kaizix-logo.gltf");
    const yAngle = 1.2;
      const distance = 2;
      const time = useTime();
    useFrame(({ camera }) => {
        camera.position.setFromSphericalCoords(
          distance,
          yAngle,
          -time.get() * 0.0005
        );
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
      });

    return(
        <mesh>        
            <directionalLight intensity={1}  position={[0, 0.2, -5]}/>
            <directionalLight intensity={1}  position={[0, 0.2, 5]}/>
            <primitive object={logo.scene} />
        </mesh>
    )
}

const LogoCanvas = () => {
    return (
        <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [-0.022, 0.2, -2.6], fov: 20}}
        gl={{ preserveDrawingBuffer: true}}>

        <Suspense >
            <ambientLight intensity={1} />
            <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle = {Math.PI / 2}
            />
            <Logo/>
        </Suspense>


        </Canvas>
    )
}
export default LogoCanvas;