import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, usePlane, useBox } from "@react-three/cannon";

import "./App.css";

const Box = () => {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh
      ref={ref}
      onClick={() => {
        api.velocity.set(1, 2, 1);
      }}
      position={[0, 2, 0]}
    >
      <boxGeometry />
      <meshLambertMaterial color="hotpink" />
    </mesh>
  );
};

const Plane = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 10, 10]} />
      <meshLambertMaterial color="lightblue" />
    </mesh>
  );
};

function App() {
  return (
    // Any component insiide Canvas will not be rendered by ReactDOM but by React-three/fiber
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight color={"0xffffff"} position={[10, 15, 10]} angle={0.3} />
        {/* <spotLightHelper light={<spotLight />} /> */}
        <Physics>
          <Box />
          <Plane />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
