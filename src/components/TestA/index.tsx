// Let's make <Card text='Write the docs' /> draggable!

import React from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { useDrag } from "react-dnd";

console.log(_jsx);
/**
 * Your Component
 */
export default function Card({ isDragging, text }) {
  // return <div>3333</div>;
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "card",
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );
  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  );
}
