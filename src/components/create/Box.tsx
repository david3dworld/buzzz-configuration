import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

interface IProps {
  color: string;
}

const Box = (props: IProps) => {
  const { color } = props;
  const boxRef = useRef<any>(null);

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef} castShadow position={[0, 0, 0]} rotation={[1, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Box;
