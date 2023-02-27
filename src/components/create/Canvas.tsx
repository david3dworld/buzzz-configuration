import React, { useRef } from 'react';
import { IActive } from '../../pages/create';

interface IProps {
  activePart: IActive;
}

const Canvas = (props: IProps) => {
  const { activePart } = props;

  // const frontFabricRef = useRef<fabric.Canvas | null>(null);
  const frontCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // const backFabricRef = useRef<fabric.Canvas | null>(null);
  const backCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // const leftFabricRef = useRef<fabric.Canvas | null>(null);
  const leftCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // const rightFabricRef = useRef<fabric.Canvas | null>(null);
  const rightCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const canvasOptions = [
    { id: 1, type: 'front', ref: frontCanvasRef },
    { id: 2, type: 'back', ref: backCanvasRef },
    { id: 3, type: 'left', ref: leftCanvasRef },
    { id: 4, type: 'right', ref: rightCanvasRef },
  ];

  return (
    <div className="buzzz_canvas_board">
      {canvasOptions.map((item) => (
        <div className={`canvas_con ${item.type === activePart ? '' : 'd-none'} `} key={item.id}>
          <canvas ref={item.ref} className={`canvas-${item.type}`} />
        </div>
      ))}
    </div>
  );
};

export default Canvas;
