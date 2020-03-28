import PropTypes from "prop-types";
import Link from "next/link";
import {
  PopupContainer,
  DropDownIcon,
  DropDownContainer,
  NavItem,
  IconWrapper,
} from "../styles";
1
export const NavItemWithPopup = ({ label, children, ...props }) => {
  const navItemRef = React.useRef();
  const [popupIsOn, setPopupIsOn] = React.useState(false);
  return (
    <NavItem
      {...props}
      ref={navItemRef}
      onMouseEnter={() => setPopupIsOn(true)}
      onTouchEnd={(e) => {
        if(e.target === navItemRef.current ){
          setPopupIsOn(state=>!state)
        } 
      }}
      onMouseLeave={() => setPopupIsOn(false)}
    >
      {label}
      <DropDown isOn={popupIsOn} />
      <Popup width="200px" isOn={popupIsOn}>
        {children}
      </Popup>
    </NavItem>
  );
};

NavItemWithPopup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
export const IconWithPopup = ({ children, Icon, width, ...props }) => {
  const [popupIsOn, setPopupIsOn] = React.useState(false);
  const navItemRef = React.useRef();
  return (
    <IconWrapper
      ref={navItemRef}
      {...props}
      onMouseEnter={() => setPopupIsOn(true)}
      onTouchEnd={(e) => {
        if(e.target === navItemRef.current ){
          setPopupIsOn(state=>!state)
        } 
      }}
      onMouseLeave={() => setPopupIsOn(false)}
      // onClick={() => setPopupIsOn(state => !state)}
    >
      <Icon isOn={popupIsOn} />
      {/* <DropDown isOn={popupIsOn} /> */}
      <Popup width={width} isOn={popupIsOn}>
        {children}
      </Popup>
    </IconWrapper>
  );
};

IconWithPopup.defaultProps = {
  width: "200px",
};

IconWithPopup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  Icon: PropTypes.elementType.isRequired,
  width: PropTypes.string,
};

export const DropDown = ({ isOn, ...props }) => (
  <DropDownContainer isOn={isOn} {...props}>
    <DropDownIcon isOn={isOn} />
  </DropDownContainer>
);
DropDown.propTypes = {
  isOn: PropTypes.bool.isRequired,
};

// eslint-disable-next-line react/prop-types
export const Popup = ({ children, ...props }) => {
  return <PopupContainer {...props}>{children}</PopupContainer>;
};

Popup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
export const NavItemLink = ({ route, params, ...props }) => (
  <Link replace route={route} href={route} params={params}>
    <NavItem as="a" {...props} />
  </Link>
);
NavItemLink.defaultProps = {
  params: {},
};
NavItemLink.propTypes = {
  route: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  params: PropTypes.object,
};

