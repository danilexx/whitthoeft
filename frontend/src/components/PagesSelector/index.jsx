import { Container, PrevArrow, NextArrow, PageNumber } from "./styles";

const PagesSelector = ({ onPageChange, activePage, pageNumber }) => {
  function onChange(index){
    onPageChange(index);
    if(window){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
  return (
    <Container>
      <PrevArrow />

      {[...Array(pageNumber)].map((e, index) => (
        <PageNumber 
          onClick={ ()=>onChange(index) } 
          isSelected={ index + 1 === activePage } 
          key={index}
        >
          {index + 1}
        </PageNumber>
      ))}
      <NextArrow />
    </Container>
  );
};

PagesSelector.defaultProps = {
  onPageChange: ()=>{}
}

export default PagesSelector;
