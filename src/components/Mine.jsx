import { useGLTF } from "@react-three/drei";

import { ColliderBox } from "./ColliderBox";

export function Mine(props) {
  const { nodes, materials } = useGLTF("/models/Mine.glb");
  return (
    <group position={[-4, 0, -5]} {...props} dispose={null}>
      <ColliderBox position={[-4, 0, -5]} scale={[2, 2, 2]} />

      <group rotation={[-Math.PI / 2, 0, 0]} scale={200}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mine_1.geometry}
          material={materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mine_2.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mine_3.geometry}
          material={materials.Metal_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mine_4.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mine_5.geometry}
          material={materials.Wood_Light}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Mine.glb");
