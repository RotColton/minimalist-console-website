import React, { useEffect, useRef } from 'react';

// Types

// GLOBALS
const STAR_COLOR = "#94c659";
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;
const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

const StarryBackground = (props) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const velocityRef = useRef({ x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 });
  const scaleRef = useRef(1);
  const widthRef = useRef(window.innerWidth);
  const heightRef = useRef(window.innerHeight);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const resize = () => {
      scaleRef.current = window.devicePixelRatio || 1;
      widthRef.current = window.innerWidth * scaleRef.current;
      heightRef.current = window.innerHeight * scaleRef.current;
      canvas.width = widthRef.current;
      canvas.height = heightRef.current;
      starsRef.current.forEach(placeStar);
    };

    const generate = () => {
      starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
        x: 0,
        y: 0,
        z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
      }));
      starsRef.current.forEach(placeStar);
    };

    const placeStar = (star) => {
      star.x = Math.random() * widthRef.current;
      star.y = Math.random() * heightRef.current;
    };

    const recycleStar = (star) => {
      let direction = "z";
      let vx = Math.abs(velocityRef.current.x);
      let vy = Math.abs(velocityRef.current.y);
      if (vx > 1 || vy > 1) {
        let axis;
        if (vx > vy) {
          axis = Math.random() < vx / (vx + vy) ? "h" : "v";
        } else {
          axis = Math.random() < vy / (vx + vy) ? "v" : "h";
        }
        if (axis === "h") {
          direction = velocityRef.current.x > 0 ? "l" : "r";
        } else {
          direction = velocityRef.current.y > 0 ? "t" : "b";
        }
      }
      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
      if (direction === "z") {
        star.z = 0.1;
        star.x = Math.random() * widthRef.current;
        star.y = Math.random() * heightRef.current;
      } else if (direction === "l") {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = heightRef.current * Math.random();
      } else if (direction === "r") {
        star.x = widthRef.current + OVERFLOW_THRESHOLD;
        star.y = heightRef.current * Math.random();
      } else if (direction === "t") {
        star.x = widthRef.current * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      } else if (direction === "b") {
        star.x = widthRef.current * Math.random();
        star.y = heightRef.current + OVERFLOW_THRESHOLD;
      }
    };

    const update = () => {
      velocityRef.current.tx *= 0.96;
      velocityRef.current.ty *= 0.96;

      velocityRef.current.x += (velocityRef.current.tx - velocityRef.current.x) * 0.8;
      velocityRef.current.y += (velocityRef.current.ty - velocityRef.current.y) * 0.8;

      starsRef.current.forEach((star) => {
        star.x += velocityRef.current.x * star.z;
        star.y += velocityRef.current.y * star.z;

        star.x += (star.x - widthRef.current / 2) * velocityRef.current.z * star.z;
        star.y += (star.y - heightRef.current / 2) * velocityRef.current.z * star.z;
        star.z += velocityRef.current.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > widthRef.current + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > heightRef.current + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    };

    const render = () => {
      context.clearRect(0, 0, widthRef.current, heightRef.current);
      starsRef.current.forEach((star) => {
        context.beginPath();
        context.lineCap = "round";
        context.lineWidth = STAR_SIZE * star.z * scaleRef.current;
        context.globalAlpha = 0.5 + 0.5 * Math.random();
        context.strokeStyle = STAR_COLOR;

        context.moveTo(star.x, star.y);

        let tailX = velocityRef.current.x * 2;
        let tailY = velocityRef.current.y * 2;

        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

        context.lineTo(star.x + tailX, star.y + tailY);
        context.stroke();
      });
    };

    const step = () => {
      update();
      render();
      requestAnimationFrame(step);
    };

    generate();
    resize();
    step();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className='starry-background'>
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {props.children}
      </div>
    </div>
  );
};

export default StarryBackground;
