import styled from "styled-components";
import DatePicker from "react-date-picker";
import Field from "!/Field";

const size = 50;
export const StyledDatePicker = styled(DatePicker)`
  /* background-color: yellow; */
  margin: 5px auto;
  width: 100%;
  display: flex;
  .react-date-picker__wrapper{
    border: none;
    width: 100%;
  }
  .react-date-picker__inputGroup {
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  svg{
    stroke: ${props => props.theme.white};
    border-radius: 5px;
  }
  .react-date-picker__clear-button{
    height: ${size}px !important;
    width: ${size}px !important;
    background-color: ${props => props.theme.red};
    border-radius: 5px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    margin-left: 20px;
  }
  .react-date-picker__calendar-button {
    display: none;
  }
  input {
    height: ${size}px !important;
    width: ${size}px !important;
    background-color: ${props => props.theme.gray};
    border-radius: 5px;
    border: none;
    text-align: center;
    font-family: Roboto;
    color: ${props => props.theme.black};
    /* border: 1px solid ${props => props.theme.grey}; */
  }
  .react-date-picker__inputGroup__input.react-date-picker__inputGroup__year{
    width: 70px !important;
  }

  .react-date-picker__inputGroup__divider{
    color: ${props => props.theme.black};
  }

  .react-calendar{
    border: 1px solid ${props => props.theme.gray};
    border-radius: 5px;
    background-color: ${props => props.theme.white};
    box-shadow: ${props => props.theme.shadow};
  }

  .react-calendar, button{
    font-family: "Roboto";
    color: ${props => props.theme.black};
  }

  .react-calendar button.react-calendar__tile--active{
    color: ${props => props.theme.white};
  }
`;

export const Container = styled.div`
  margin: 5px auto;
  width: 100%;
`;

export const StyledField = styled(Field)`
  height: 50px;
  width: 100%;
  flex: 1;
  padding: 10px;
  margin: 5px auto;
`;

export const StyledLabel = styled.label`
  font-family: "Roboto";
  font-size: 18px;
  color: ${props => props.theme.black};
  margin: 5px 0;
`;
