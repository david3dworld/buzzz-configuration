import React, { ChangeEvent, Fragment, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Plane } from '@react-three/drei';
import { fabric } from 'fabric';
import { Box, Colors, Lights, PartIndicator, ShirtPart } from '../components/create';
import { Add, AddText, Close, ImageUpload } from '../svg';
import { ModalContainer, RenderIf } from '../components';
import { Model } from '../components/create/Model/ShirtModel';
import useWindowSize from '../hooks/useWindowSize';

const CANVAS_WIDTH = 254;
const CANVAS_HEIGHT = 331;

export type IActive = 'front' | 'back' | 'left' | 'right';

const BACKGROUND_COLOR = 0xf1f1f1;

const Create = () => {
  const frontFabricRef = useRef<fabric.Canvas | null>(null);
  const frontCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const backFabricRef = useRef<fabric.Canvas | null>(null);
  const backCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const leftFabricRef = useRef<fabric.Canvas | null>(null);
  const leftCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const rightFabricRef = useRef<fabric.Canvas | null>(null);
  const rightCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [color, setColor] = useState('#ffffff');
  const [activePart, setActivePart] = useState<IActive>('front');
  const [showModal, setShowModal] = useState(false);

  const imageSelectRef = useRef<HTMLInputElement>(null);

  const canvasOptions = [
    { id: 1, type: 'front', ref: frontCanvasRef },
    { id: 2, type: 'back', ref: backCanvasRef },
    { id: 3, type: 'left', ref: leftCanvasRef },
    { id: 4, type: 'right', ref: rightCanvasRef },
  ];

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (f) => {
      if (f.target === null) return;
      const data = f.target.result as string;

      fabric.Image.fromURL(data, (img) => {
        img.scaleToHeight(100);
        img.scaleToWidth(100);
        let current;
        switch (activePart) {
          case 'front':
            current = frontFabricRef;
            break;
          case 'back':
            current = backFabricRef;
            break;
          case 'left':
            current = leftFabricRef;
            break;
          case 'right':
            current = rightFabricRef;
            break;
          default:
        }
        current?.current?.add(img);
        current?.current?.viewportCenterObject(img);
        current?.current?.renderAll();
        e.target.value = '';
      });
      setShowModal(false);
    };
    reader.readAsDataURL(file);
  };

  // const handleDeleteItem = () => {
  //   let current;
  //   switch (activePart) {
  //     case 'front':
  //       current = frontFabricRef;
  //       break;
  //     case 'back':
  //       current = backFabricRef;
  //       break;
  //     case 'left':
  //       current = leftFabricRef;
  //       break;
  //     case 'right':
  //       current = rightFabricRef;
  //       break;
  //     default:
  //   }

  //   current?.current?.remove(current?.current?.getActiveObject());
  // };

  useEffect(() => {
    const initFabric = () => {
      // init the fabric canvas
      frontFabricRef.current = new fabric.Canvas(frontCanvasRef.current);
      backFabricRef.current = new fabric.Canvas(backCanvasRef.current);
      leftFabricRef.current = new fabric.Canvas(leftCanvasRef.current);
      rightFabricRef.current = new fabric.Canvas(rightCanvasRef.current);

      const newText = new fabric.IText('Type here', {
        fill: 'red',
        fontSize: 20,
      });
      newText.hasRotatingPoint = true;

      //   set canvas dimensions
      frontFabricRef.current?.setDimensions({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT });
      backFabricRef.current?.setDimensions({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT });
      leftFabricRef.current?.setDimensions({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT });
      rightFabricRef.current?.setDimensions({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT });

      //   set fabric bg
      frontFabricRef.current?.setBackgroundColor(color, () => {});
      backFabricRef.current?.setBackgroundColor(color, () => {});
      leftFabricRef.current?.setBackgroundColor(color, () => {});
      rightFabricRef.current?.setBackgroundColor(color, () => {});

      frontFabricRef.current?.add(newText);
      frontFabricRef?.current?.viewportCenterObject(newText);
      frontFabricRef?.current?.renderAll();

      frontFabricRef.current.isDrawingMode = false;
      frontFabricRef.current.freeDrawingBrush.width = 5;
      frontFabricRef.current.freeDrawingBrush.color = '#00aeff';
    };

    const disposeFabric = () => {
      frontFabricRef?.current?.dispose();
      backFabricRef?.current?.dispose();
      leftFabricRef?.current?.dispose();
      rightFabricRef?.current?.dispose();
    };

    initFabric();

    return () => {
      disposeFabric();
    };
  }, []);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width && windowSize.width < 350) {
      const newWidth = Math.min(windowSize.width - 50, 400);
      frontFabricRef.current?.setDimensions({ width: newWidth, height: CANVAS_HEIGHT });
      backFabricRef.current?.setDimensions({ width: newWidth, height: CANVAS_HEIGHT });
      leftFabricRef.current?.setDimensions({ width: newWidth, height: CANVAS_HEIGHT });
      rightFabricRef.current?.setDimensions({ width: newWidth, height: CANVAS_HEIGHT });
    }
  }, [windowSize.width]);

  return (
    <Fragment>
      <div>
        <div className="buzzz_model_container_full_page">
          <div>
            <div className="d-flex justify-content-between px-4 mb-3 mt-4 d-md-none">
              {canvasOptions.map((item) => (
                <button
                  key={item.id}
                  className={
                    item.type === activePart
                      ? 'buzzz_design_mobile_parts_btn active'
                      : 'buzzz_design_mobile_parts_btn'
                  }
                  type="button"
                  onClick={() => {
                    setActivePart(item.type as IActive);
                  }}
                >
                  {item.type}
                </button>
              ))}
            </div>
          </div>
          <Canvas
            shadows
            id="c"
            className="canvas buzzz_canvas_container"
            camera={{
              fov: 50,
              near: 0.1,
              far: 1000,
              position: [0, 0, 5],
            }}
            gl={{
              antialias: true,
            }}
          >
            <color attach="background" args={[0xffffff]} />
            <fog attach="fog" args={[BACKGROUND_COLOR, 20, 100]} />

            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
              enableDamping
              enablePan={false}
              dampingFactor={0.1}
              maxDistance={8}
            />

            <Lights />

            <Plane
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -1, 0]}
              args={[1000, 1000]}
            >
              <meshStandardMaterial attach="material" color="white" />
              <shadowMaterial attach="material" opacity={0.4} />
            </Plane>

            <mesh position={[0, 10, 0]}>
              <Box color={color} />
            </mesh>

            <mesh position={[0, -1.2, 0]}>
              <Model color={color} />
            </mesh>
          </Canvas>

          <div className="buzzz_create_part_indicator_con my-4 px-4 d-md-block d-none">
            <PartIndicator activePart={activePart} />
          </div>

          <div className="buzzz_create_shirt_parts_con my-4 px-4 d-md-block d-none">
            <ShirtPart
              handleClick={(val) => {
                setActivePart(val);
              }}
              activePart={activePart}
            />
          </div>

          <div className="buzzz_create_controls_con my-4 px-4 d-md-block d-none">
            <Colors
              handleSelect={(val) => {
                setColor(val);
                frontFabricRef.current?.setBackgroundColor(val, () => {});
                backFabricRef.current?.setBackgroundColor(val, () => {});
                leftFabricRef.current?.setBackgroundColor(val, () => {});
                rightFabricRef.current?.setBackgroundColor(val, () => {});

                frontFabricRef.current?.renderAll();
                backFabricRef.current?.renderAll();
                leftFabricRef.current?.renderAll();
                rightFabricRef.current?.renderAll();
              }}
            />
          </div>

          <div className="buzzz_create_design_btn_con my-4 d-md-block d-none">
            <button
              type="button"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <Add />
              Design
            </button>
          </div>

          <div className="buzzz_create_design_btn_con mobile my-4 d-md-none">
            <button
              type="button"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <Add />
            </button>
          </div>

          <div className="buzzz_create_board_con my-4 px-4">
            {/* <div className="d-flex justify-content-end mb-2">
              <button
                type="button"
                className="canvas_delete_btn"
                onClick={() => {
                  if (frontFabricRef.current !== null) {
                    frontFabricRef.current.isDrawingMode = !frontFabricRef.current.isDrawingMode;
                  }
                }}
              >
                toggle
              </button>
            </div>

            <div className="d-flex justify-content-end mb-2">
              <button type="button" className="canvas_delete_btn" onClick={handleDeleteItem}>
                delete
              </button>
            </div> */}
            <div className="buzzz_canvas_board">
              {canvasOptions.map((item) => (
                <div
                  className={`canvas_con ${item.type === activePart ? '' : 'd-none'} `}
                  key={item.id}
                >
                  <canvas ref={item.ref} className={`canvas-${item.type}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="buzzz_create_controls_con mobile my-4 px-4 mb-5 d-md-none pb-5 ">
            <Colors
              handleSelect={(val) => {
                setColor(val);
                frontFabricRef.current?.setBackgroundColor(val, () => {});
                backFabricRef.current?.setBackgroundColor(val, () => {});
                leftFabricRef.current?.setBackgroundColor(val, () => {});
                rightFabricRef.current?.setBackgroundColor(val, () => {});

                frontFabricRef.current?.renderAll();
                backFabricRef.current?.renderAll();
                leftFabricRef.current?.renderAll();
                rightFabricRef.current?.renderAll();
              }}
            />
          </div>

          {/* <div className="d-flex  my-5 px-5 w-100 align-items-end" /> */}
        </div>
      </div>

      <ModalContainer
        show={showModal}
        handleClose={() => {}}
        centered
        size="sm"
        className="create_modal_con"
      >
        <div className="buzzz_create_modal">
          <div className="d-flex gap-4">
            <button
              type="button"
              className="action_btn"
              onClick={() => {
                imageSelectRef?.current?.click();
              }}
            >
              <div className="d-flex justify-content-center">
                <ImageUpload />
              </div>
              <p>Choose Image</p>
            </button>

            <button type="button" className="action_btn">
              <div className="d-flex justify-content-center">
                <AddText />
              </div>
              <p>Add Text</p>
            </button>
          </div>
        </div>
      </ModalContainer>

      <RenderIf condition={showModal}>
        <div className="buzzz_create_design_btn_con modal_close my-4 d-none d-md-block">
          <button
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <Close />
          </button>
        </div>

        <div className="buzzz_create_design_btn_con mobile modal_close my-4 d-md-none">
          <button
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <Close />
          </button>
        </div>
      </RenderIf>

      <input
        type="file"
        id="canvas-input"
        className="d-none"
        onChange={handleImageUpload}
        ref={imageSelectRef}
      />
    </Fragment>
  );
};

export default Create;
