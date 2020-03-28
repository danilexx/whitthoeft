import { forwardRef } from "react";
import Link from "next/link";
import {
  FooterSectionContainer,
  Label,
  MainContainer,
  LinkContainer,
} from "./styles";

export const FooterSection = forwardRef(
  ({ label, className, children }, ref) => {
    return (
      <FooterSectionContainer ref={ref} className={className}>
        <Label>{label}</Label>
        <MainContainer>{children}</MainContainer>
      </FooterSectionContainer>
    );
  }
);

export const LabelLink = forwardRef(
  ({ label, className, route, ...props }, ref) => (
    <Link href={route || "#"} {...props}>
      <LinkContainer ref={ref} className={className}>
        {label}
      </LinkContainer>
    </Link>
  )
);
