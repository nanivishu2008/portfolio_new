import { useEffect, useRef } from 'react';

export default function DotGridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;
    let animationFrameId;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', resize);
    resize();

    const spacing = 24;
    const baseRadius = 0.85; // Thin, crisp resting dots
    const maxRadius = 1.85;  // Smoothly highlighted radius on hover
    const baseAlpha = 0.15;  // Subtle resting opacity
    const maxAlpha = 0.90;   // Vibrant luminous highlight
    const maskRadius = 140;  // Smooth interaction radius

    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      active: false,
      lerpAlpha: 0 // Smooth fade in/out of hover spotlight
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    function render() {
      // High framerate fluid cursor tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.20;
      mouse.y += (mouse.targetY - mouse.y) * 0.20;
      mouse.lerpAlpha += ((mouse.active ? 1 : 0) - mouse.lerpAlpha) * 0.10;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let i = 0; i <= cols; i++) {
        const x = i * spacing;
        for (let j = 0; j <= rows; j++) {
          const y = j * spacing;

          let alpha = baseAlpha;
          let currentRadius = baseRadius;
          let highlight = 0;

          if (mouse.lerpAlpha > 0.001) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maskRadius) {
              // Smooth hermite smoothstep curve for natural spotlight highlighting
              const norm = 1 - (dist / maskRadius); // 1 at center, 0 at boundary
              const smoothFactor = norm * norm * (3 - 2 * norm);
              highlight = smoothFactor * mouse.lerpAlpha;

              // Smoothly highlight dots by increasing opacity and gentle diameter expansion
              alpha = baseAlpha + (maxAlpha - baseAlpha) * highlight;
              currentRadius = baseRadius + (maxRadius - baseRadius) * highlight;
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, currentRadius, 0, Math.PI * 2);

          // Highlighted dots shine with a crisp white luminous glow
          if (highlight > 0.02) {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(224, 226, 236, ${alpha})`;
          }
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      id="gridCanvas"
    />
  );
}
