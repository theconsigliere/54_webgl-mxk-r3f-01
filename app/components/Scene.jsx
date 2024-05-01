"use client"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import { Environment, OrbitControls, Text } from "@react-three/drei"

export default function Scene() {
  return (
    <>
      <Canvas style={{ backgroundColor: "black" }}>
        <directionalLight position={[0, 3, -2]} intensity={3} />
        <Environment preset="city" />
        <OrbitControls />
        <Model />
        <Text
          fontSize={2.75}
          font={"/fonts/PPNeueMontreal-Bold.otf"}
          color="white"
          position={[0, 0, -1.5]}
        >
          Maxwell
        </Text>
      </Canvas>
    </>
  )
}
