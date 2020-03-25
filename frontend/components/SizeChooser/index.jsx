import SizeSelector from "!/SizeSelector";

const SizeChooser = ({ onChange, sizes }) => {
  const [activeSize, setActiveSize] = React.useState(sizes[0].size);
  React.useEffect(() => {
    onChange(activeSize);
  }, [activeSize]);
  return (
    <>
      {sizes.map(({ size, id }) => (
        <SizeSelector
          onChange={value => setActiveSize(value)}
          isMarked={activeSize === size}
          key={id}
          size={size}
        />
      ))}
    </>
  );
};

export default SizeChooser;
