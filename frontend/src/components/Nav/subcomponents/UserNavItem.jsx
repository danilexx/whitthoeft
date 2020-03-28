import { useSelector, useDispatch, shallowEqual } from "react-redux";
import actions from "-/redux/actions";
import { IconWithPopup } from "./related";
import { PopupButtonsContainer } from "../styles";
import LinkedButton from "!/LinkedButton";
import Button from "!/Button";
import { UserIcon } from "../icons";

const UserNavItem = () => {
  const user = useSelector(state => state.user, shallowEqual);
  const dispatch = useDispatch();
  function handleLeave() {
    dispatch(actions.user.leave());
  }
  return (
    <IconWithPopup Icon={UserIcon}>
      <PopupButtonsContainer>
        {user.email ? (
          <>
            <LinkedButton route="/user" primary label="Informações" />
            <Button onClick={handleLeave} red label="Sair" />
          </>
        ) : (
          <>
            <LinkedButton route="/login" primary label="Entrar" />
            <LinkedButton route="/register" label="Cadastrar" />
          </>
        )}
      </PopupButtonsContainer>
    </IconWithPopup>
  );
};

export default UserNavItem;
