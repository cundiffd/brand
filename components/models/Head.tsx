// Copyright © Spatial Corporation. All rights reserved.

"use client";

import { join } from "path";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";

const COLORS = [0x0364ff, 0xbbe022, 0xff4f2c, 0x00d6c6, 0xfcc924, 0xe16ef9];

export const Particles = () => {
  const { scene } = useGLTF(join(process.env.NEXT_PUBLIC_BASE_URL || "", "/models/head.glb"));
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors, baseColors, flickerSpeeds, flickerOffsets } = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];
    const baseColors: number[] = [];
    const flickerSpeeds: number[] = [];
    const flickerOffsets: number[] = [];

    scene.traverse((child: any) => {
      if (child.isMesh) {
        const sampler = new MeshSurfaceSampler(child).build();
        const vertex = new THREE.Vector3();
        const particles = 5000;

        for (let i = 0; i < particles; i++) {
          sampler.sample(vertex);
          vertex.applyMatrix4(child.matrixWorld);
          positions.push(vertex.x, vertex.y, vertex.z);

          const color = new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]);

          colors.push(color.r, color.g, color.b);
          baseColors.push(color.r, color.g, color.b);

          flickerSpeeds.push(0.5 + Math.random() * 1.5);
          flickerOffsets.push(Math.random() * Math.PI * 2);
        }
      }
    });

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      baseColors: new Float32Array(baseColors),
      flickerSpeeds: new Float32Array(flickerSpeeds),
      flickerOffsets: new Float32Array(flickerOffsets)
    };
  }, [scene]);

  useFrame(({ clock }) => {
    const points = pointsRef.current;
    if (!points) return;

    const geom = points.geometry as THREE.BufferGeometry;
    const colorAttr = geom.getAttribute("color") as THREE.BufferAttribute;
    const t = clock.getElapsedTime();

    for (let i = 0; i < colorAttr.count; i++) {
      const flicker = 0.5 + Math.sin(t * flickerSpeeds[i] + flickerOffsets[i]) * 0.5;
      colorAttr.setXYZ(i, baseColors[i * 3] * flicker, baseColors[i * 3 + 1] * flicker, baseColors[i * 3 + 2] * flicker);
    }

    colorAttr.needsUpdate = true;
  });

  return (
    <Center scale={[18, 18, 18]}>
      <primitive
        object={scene}
        onUpdate={(self: THREE.Object3D) => {
          self.traverse((child: any) => {
            if (child.isMesh) {
              child.material.transparent = true;
              child.material.opacity = 0;
              child.material.depthWrite = false;
            }
          });
        }}
      />
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.01} vertexColors transparent opacity={1} blending={THREE.AdditiveBlending} depthWrite={false} sizeAttenuation />
      </points>
    </Center>
  );
};

export const Head = () => (
  <Canvas>
    <ambientLight intensity={1.2} />
    <directionalLight position={[0, 0, 5]} intensity={2} />
    <Particles />
  </Canvas>
);

useGLTF.preload(join(process.env.NEXT_PUBLIC_BASE_URL || "", "/models/head.glb"));
