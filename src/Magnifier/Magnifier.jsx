import React, { useRef, useState } from "react";

const Magnifier = ({ src, zoom = 2 }) => {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);
  const frame = useRef(null);

  const handleMove = (e) => {
    if (frame.current) return;

    frame.current = requestAnimationFrame(() => {
      const { left, top, width, height } = imgRef.current.getBoundingClientRect();

      const x = e.pageX - left;
      const y = e.pageY - top;

      setPos({ x, y });
      frame.current = null;
    });
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMove}
    >
      <img ref={imgRef} src={src} width="500" className="img-magnifier"/>

      {show && (
        <div
          style={{
            position: "absolute",
            top: 0,
            width: 200,
            height: 200,
            borderRadius: "50%",
            pointerEvents: "none",
            overflow: "visible",

            // ✅ GPU-accelerated movement
            transform: `translate(${pos.x - 100}px, ${pos.y - 100}px)`,

            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",

            // ✅ High-resolution zoom
            backgroundSize: `${500 * zoom}px`,

            // ✅ Perfect zoom alignment
            backgroundPosition: `${-(pos.x * zoom - 100)}px ${-(pos.y * zoom - 100)}px`,
          }}
        />
      )}
    </div>
  );
};

export default Magnifier;