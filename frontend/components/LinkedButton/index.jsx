import Link from "next/link";
import { useRouter } from "next/router";
import Button from "!/Button";

const LinkedButton = ({
  params,
  route,
  as,
  noFlex,
  replace,
  shallow = false,
  label,
  ...props
}) => {
  const Router = useRouter();
  function handleShallowRouting() {
    Router.push(route, as || route, { shallow });
  }
  function handleReplace() {
    Router.replace(route, as);
  }
  if (shallow) {
    return (
      <Button
        onClick={handleShallowRouting}
        noFlex={noFlex}
        label={label}
        {...props}
      />
    );
  }
  if (replace) {
    return (
      <Button
        onClick={handleReplace}
        noFlex={noFlex}
        label={label}
        {...props}
      />
    );
  }
  return (
    <Link href={route} params={params}>
      <Button as="a" label={label} noFlex={noFlex} {...props} />
    </Link>
  );
};

export default LinkedButton;
