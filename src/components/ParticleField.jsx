import React, { useRef, useMemo, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 400 }) {
  const mesh = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const originalPositions = new Float32Array(count * 3);

    const colorPalette = [
      new THREE.Color('#6366F1'),  // indigo
      new THREE.Color('#22D3EE'),  // cyan
      new THREE.Color('#F59E0B'),  // amber
      new THREE.Color('#8B5CF6'),  // purple
      new THREE.Color('#818CF8'),  // lighter indigo
    ];

    for (let i = 0; i < count; i++) {
      // Sphere distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 2 + Math.random() * 1.5;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 1;
    }

    return { positions, colors, sizes, originalPositions };
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const time = clock.getElapsedTime();
    const posArr = mesh.current.geometry.attributes.position.array;
    const orig = particles.originalPositions;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Gentle float
      posArr[i3] = orig[i3] + Math.sin(time * 0.3 + i * 0.1) * 0.08;
      posArr[i3 + 1] = orig[i3 + 1] + Math.cos(time * 0.4 + i * 0.05) * 0.08;
      posArr[i3 + 2] = orig[i3 + 2] + Math.sin(time * 0.2 + i * 0.08) * 0.05;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = Math.sin(time * 0.03) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function GlowRing() {
  const ring = useRef();

  useFrame(({ clock }) => {
    if (!ring.current) return;
    ring.current.rotation.z = clock.getElapsedTime() * 0.15;
    ring.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.3;
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[2.8, 0.008, 16, 100]} />
      <meshBasicMaterial color="#6366F1" transparent opacity={0.3} />
    </mesh>
  );
}

function GlowRing2() {
  const ring = useRef();

  useFrame(({ clock }) => {
    if (!ring.current) return;
    ring.current.rotation.z = -clock.getElapsedTime() * 0.1;
    ring.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.08) * 0.4;
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[3.2, 0.005, 16, 100]} />
      <meshBasicMaterial color="#F59E0B" transparent opacity={0.15} />
    </mesh>
  );
}

function ParticleField() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, right: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <GlowRing />
        <GlowRing2 />
      </Canvas>
    </div>
  );
}

export default memo(ParticleField);
