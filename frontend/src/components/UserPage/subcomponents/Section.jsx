import { useDispatch } from "react-redux";
import Header from "!/Header";
import { ButtonsContainer, CustomLinkedButton, CustomButton } from "../styles";

const Section = ({ label, buttons }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Header label={label} />
      <ButtonsContainer>
        {buttons.length > 0 &&
          buttons.map(({ label, link, action, red = false }, index) =>
            link ? (
              <CustomLinkedButton
                href={link}
                route={link}
                red={red}
                onClick={() => action(dispatch)}
                label={label}
                key={index}
              />
            ) : (
              <CustomButton
                onClick={() => action(dispatch)}
                red={red}
                label={label}
                key={index}
              />
            )
          )}
      </ButtonsContainer>
    </>
  );
};

export default Section;
