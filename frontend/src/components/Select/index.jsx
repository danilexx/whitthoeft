import { forwardRef, useLayoutEffect } from "react";
import { Portal } from "react-portal";
import {
  SelectContainer,
  MainLabel,
  Options,
  OptionContainer,
  Arrow,
  Label,
} from "./styles";
import useOnClickOutside from "-/utils/useOnClickOutside";

const Select = forwardRef(
  ({ onChange, options, className, reverse = false }) => {
    const [optionsList] = React.useState(options);
    const [selectedOption, setSelectedOption] = React.useState(options[0]);
    const [coordinades, setCoordinades] = React.useState({ left: 0, top: 0 });
    const [isOn, setIsOn] = React.useState(false);
    const ContainerRef = React.useRef();
    const optionsRef = React.useRef();
    useLayoutEffect(() => {
      if (ContainerRef.current) {
        const { current: element } = ContainerRef;
        setCoordinades({
          left: element.getBoundingClientRect().left,
          top: element.getBoundingClientRect().top,
        });
      }
    }, [ContainerRef.current]);
    useOnClickOutside(ContainerRef, e => {
      if (e.target.parentElement !== optionsRef.current) {
        setIsOn(false);
      }
    });
    function handleClick(label) {
      setSelectedOption(label);
      setIsOn(state => !state);
    }
    React.useEffect(() => {
      if (onChange) onChange(selectedOption);
    }, [selectedOption]);
    return (
      <SelectContainer ref={ContainerRef} className={className}>
        <MainLabel onClick={() => setIsOn(state => !state)}>
          <Label>{selectedOption}</Label>
          <Arrow isOn={isOn} />
        </MainLabel>
        {isOn && (
          <Portal>
            <Options
              ref={optionsRef}
              left={coordinades.left}
              top={coordinades.top}
              reverse={reverse}
              isOn={isOn}
            >
              {optionsList.map((label, index) => (
                <OptionContainer onClick={() => handleClick(label)} key={index}>
                  {label}
                </OptionContainer>
              ))}
            </Options>
          </Portal>
        )}
      </SelectContainer>
    );
  }
);

export default Select;
