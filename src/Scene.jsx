import { Suspense } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import { Car, Deer, Ground, Mine, Rocks, Track } from "./components";

export function Scene() {
  return (
    <Suspense fallback={null}>
      <Environment files={"/textures/sky.hdr"} background={"both"} />

      <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
      {<OrbitControls target={[-2.64, -0.71, 0.03]} />}

      <Ground />
      <Track />
      <Car carNumber={"firstCar"} />
      <Car carNumber={"secondCar"} />
      <Deer />
      <Rocks position={[0, 0, -0.85]} />
      <Rocks position={[-2, 0, 1]} />
      <Rocks position={[-0.2, 0, 0.5]} />
      <Rocks position={[-0.3, 0, 1.5]} />
      <Mine />
    </Suspense>
  );
}
