import { useMemo } from "react";
import Link from "next/link";
import { Container, Icon, Passage } from "./styles";

const Steps = ({ step, steps }) => {
  const isFilled = e => {
    if (Array.isArray(e.activeIndex) && e.activeIndex.some(e => e <= step)) {
      return true;
    }
    if (e.activeIndex <= step) {
      return true;
    }
    return false;
  };
  return (
    <Container>
      {steps.map((e, index) => {
        return (
          <>
            <Link as={e.link.as} href={e.link.href}>
              {/* <a> */}
              <Icon key={e.id} isFilled={isFilled(e)} as={e.as} />
              {/* </a> */}
            </Link>
            {index !== steps.length - 1 && <Passage isFilled={isFilled(e)} />}
          </>
        );
      })}
    </Container>
  );
};

export default Steps;
