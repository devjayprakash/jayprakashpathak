'use client';

import { useEffect, useRef } from 'react';

const HeaderCanvasBack: React.FC = () => {
  const canvas_ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvas_ref.current;
    const ctx = canvas?.getContext('2d', { willReadFrequently: true });

    if (canvas && ctx) {
      setupWidthHeight(canvas);
      window.onresize = () => setupWidthHeight(canvas);
      setupGradientAnimation(ctx, canvas);

      document.body.onresize = (e) => {
        setupWidthHeight(canvas);
      };
    } else {
      console.error('Cannot find the canvas ref the dom.');
    }
  }, []);

  function setupGradientAnimation(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) {
    const mouse_x = 0;
    const mouse_y = 0;

    function generateRandomColorName() {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return `rgb(${r},${g},${b})`;
    }

    let points: {
      x: number;
      y: number;
      vel_x: number;
      vel_y: number;
      fill: string;
    }[] = [];

    //generate random points initially
    for (let i = 0; i < 400; i++) {
      points.push({
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
        vel_x: Math.random() < 0.5 ? Math.random() : -Math.random(),
        vel_y: Math.random() < 0.5 ? Math.random() : -Math.random(),
        fill: generateRandomColorName(),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      points = points.map((point) => {
        ctx.beginPath();
        ctx.fillStyle = point.fill;
        ctx.arc(point.x, point.y, 80, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        point.x += point.vel_x;
        point.y += point.vel_y;

        if (point.x < 0 || point.x > window.innerWidth) {
          point.vel_x = -point.vel_x;
        }
        if (point.y < 0 || point.y > window.innerHeight) {
          point.vel_y = -point.vel_y;
        }

        return point;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  function setupWidthHeight(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  return (
    <canvas
      ref={canvas_ref}
      className="w-full h-full absolute top-0 left-0 pointer-events-none z-0"
    />
  );
};

export default HeaderCanvasBack;
