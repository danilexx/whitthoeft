import React from "react";
import ColorSelector from "../ColorSelector";

const ColorChooser = ({ onChange, colors, name }) => {
  const [activeColor, setActiveColor] = React.useState(colors[0].color);
  React.useEffect(() => {
    if (onChange) onChange(activeColor, name);
  }, [activeColor]);
  return (
    <>
      {colors.map(({ color, id }) => (
        <ColorSelector
          key={id}
          onChange={currentColor => setActiveColor(currentColor)}
          isMarked={activeColor === color}
          color={color}
        />
      ))}
    </>
  );
};

export default ColorChooser;
