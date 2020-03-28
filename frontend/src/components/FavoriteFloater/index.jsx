import { useDispatch, useSelector, shallowEqual } from "react-redux";
import React from "react";
import { Container } from "./styles";
import { FavoriteIcon } from "./subcomponents";
import actions from "-/redux/actions";

const FavoriteFloater = ({ productId }) => {
  // const [isOn, setIsOn] = React.useState(false);
  const favorites = useSelector(state => state.favorites, shallowEqual);
  const isOn = favorites.some(e => e === productId);
  const dispatch = useDispatch();
  function handleClick() {
    if (!isOn) {
      dispatch(actions.favorites.add(productId));
    } else {
      dispatch(actions.favorites.remove(productId));
    }
  }
  return (
    <Container onClick={handleClick}>
      <FavoriteIcon isOn={isOn} />
    </Container>
  );
};

export default FavoriteFloater;
