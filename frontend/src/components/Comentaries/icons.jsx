import React from "react";
import { ThemeContext } from "styled-components";
import { StarContainer } from "./styles";

export const Star = React.forwardRef(
  ({ isFull, className, style, ...props }, ref) => {
    const { gray, starColor } = React.useContext(ThemeContext);
    const color = isFull ? starColor : gray;
    return (
      <StarContainer
        {...props}
        className={className}
        ref={ref}
        width="35"
        height="35"
        viewBox="0 0 58 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29 0L35.7354 20.7295H57.5317L39.8981 33.541L46.6336 54.2705L29 41.459L11.3664 54.2705L18.1019 33.541L0.468304 20.7295H22.2646L29 0Z"
          fill={color}
        />
      </StarContainer>
    );
  }
);
