import { forwardRef } from "react";
import { ProductDescriptionContainer, Label, Description } from "./styles";

export const ProductDescription = forwardRef(
  ({ description, className }, ref) => (
    <ProductDescriptionContainer ref={ref} className={className}>
      <Label>Descrição</Label>
      <Description>{description}</Description>
    </ProductDescriptionContainer>
  )
);
