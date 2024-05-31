import styles from '@demos/DemoColorPicker.module.scss';

import * as React from 'react';

import Button from '@system/Button';

const hexToRgba = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, 1)`;
};

const hexToHsl = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }

  return `hsl(${(h * 360).toFixed(1)}, ${(s * 100).toFixed(1)}%, ${(l * 100).toFixed(1)}%)`;
};

export default function DemoColorPicker() {
  const [color, setColor] = React.useState('#808080');
  const [rgba, setRgba] = React.useState('rgba(128, 128, 128, 1)');
  const [hsl, setHsl] = React.useState('hsl(0, 0%, 50%)');
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const dotRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    for (let i = 0; i <= 255; i++) {
      const grey = i.toString(16).padStart(2, '0');
      gradient.addColorStop(i / 255, `#${grey}${grey}${grey}`);
    }

    const colorGradient = ctx.createLinearGradient(0, 0, 0, height);
    colorGradient.addColorStop(0, '#000000');
    colorGradient.addColorStop(1, '#0047FF');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = colorGradient;
    ctx.globalCompositeOperation = 'multiply';
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'source-over';
  }, []);

  const onCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const imageData = ctx.getImageData(x, y, 1, 1).data;

    const newColor = `#${imageData[0].toString(16).padStart(2, '0')}${imageData[1].toString(16).padStart(2, '0')}${imageData[2].toString(16).padStart(2, '0')}`;

    setColor(newColor);
    setRgba(`rgba(${imageData[0]}, ${imageData[1]}, ${imageData[2]}, ${imageData[3] / 255})`);
    setHsl(hexToHsl(newColor));

    const dot = dotRef.current;
    if (!dot) return;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <canvas ref={canvasRef} width={480} height={188} onClick={onCanvasClick} className={styles.canvas} />
        <div ref={dotRef} className={styles.dot}></div>
      </div>
      <div className={styles.rows}>
        <div className={styles.item}>
          <div className={styles.left}>HEX</div>
          <div className={styles.right}>{color}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>RGBA</div>
          <div className={styles.right}>{rgba}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>HSL</div>
          <div className={styles.right}>{hsl}</div>
        </div>
        <div className={styles.actions}>
          <Button style={{ minHeight: 32, width: '100%' }}>Generate theme</Button>
        </div>
      </div>
    </div>
  );
}
