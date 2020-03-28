import { useMemo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useRouter } from "next/router";
import ShallowScreens, { ShallowScreen } from "../ShallowScreens";
import Steps from "!/Steps";
import {
  OrderSection,
  LoginSection,
  AddressesSection,
  RegisterSection,
  FinalSection,
} from "./subcomponents";
import PaymentsSection from "./subcomponents/PaymentsSection";

import { UserIcon, CheckIcon, LocationIcon, PaymentIcon } from "!/Steps/icons";
import useSecretRoute from "-/utils/useSecretRoute";

import useLocalStorage from "-/utils/useLocalStorage";

const stepsList = [
  {
    id: 0,
    as: UserIcon,
    activeIndex: [0, 1],
    link: {
      as: "/checkout/login",
      href: "/checkout/[step]",
    },
  },
  {
    id: 1,
    as: CheckIcon,
    activeIndex: 2,
    link: {
      as: "/checkout/order",
      href: "/checkout/[step]",
    },
  },
  {
    id: 2,
    as: LocationIcon,
    activeIndex: 3,
    link: {
      as: "/checkout/addresses",
      href: "/checkout/[step]",
    },
  },
  {
    id: 3,
    as: PaymentIcon,
    activeIndex: 4,
    link: {
      as: "/checkout/payment",
      href: "/checkout/[step]",
    },
  },
  {
    id: 4,
    as: CheckIcon,
    activeIndex: 5,
    link: {
      as: "/checkout/final",
      href: "/checkout/[step]",
    },
  },
];

const CheckoutPage = () => {
  const [step, setStep] = React.useState(0);
  const user = useSelector(state => state.user, shallowEqual);
  const routes = useMemo(() => {
    // if (user.email) {
    //   return ["order", "addresses", "payment", "final"];
    // }
    return ["login", "register", "order", "addresses", "payment", "final"];
  }, [user]);
  const steps = useMemo(() => {
    if (user.email) {
      return stepsList.filter(e => e.id !== 0);
    }
    return stepsList;
  }, [user]);
  const [payment, setPayment] = useLocalStorage("checkoutPayment", null);
  const [address, setAddress] = useLocalStorage("checkoutAddress", null);
  const router = useRouter();
  useSecretRoute(
    { as: "/checkout/login", route: "/checkout/[step]" },
    false,
    true,
    true,
    [router.query.step]
  );
  React.useEffect(() => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [router.query.step]);
  const clear = () => {
    setAddress(null);
    setPayment(null);
  };
  return (
    <>
      <Steps steps={steps} step={step} />
      <ShallowScreens onChange={index => setStep(index)} routes={routes}>
        <ShallowScreen route="login">
          <LoginSection />
        </ShallowScreen>
        <ShallowScreen route="register">
          <RegisterSection />
        </ShallowScreen>
        <ShallowScreen route="order">
          <OrderSection />
        </ShallowScreen>
        <ShallowScreen route="addresses">
          <AddressesSection initialAddress={address} onChange={setAddress} />
        </ShallowScreen>
        <ShallowScreen route="payment">
          <PaymentsSection initialPayment={payment} onChange={setPayment} />
        </ShallowScreen>
        <ShallowScreen route="final">
          <FinalSection clear={clear} address={address} payment={payment} />
        </ShallowScreen>
      </ShallowScreens>
    </>
  );
};

export default CheckoutPage;
