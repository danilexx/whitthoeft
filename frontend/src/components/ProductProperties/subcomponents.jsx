import React from "react";
import {
  PropRowContainer,
  PropRowTitle,
  PropRowMainContent,
  ShareButtonContainer,
  ShareIcon,
} from "./styles";

export const PropRow = React.forwardRef(
  ({ label, className, children }, ref) => (
    <PropRowContainer ref={ref} className={className}>
      {label && <PropRowTitle>{label}</PropRowTitle>}
      <PropRowMainContent>{children}</PropRowMainContent>
    </PropRowContainer>
  )
);

export const ShareButton = () => (
  <ShareButtonContainer>
    <ShareIcon />
  </ShareButtonContainer>
);
