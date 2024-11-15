import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CarouselComp3Card from '../Carouselcomp3/components/CarouselComp3Card';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../../DependencyContext';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1640 }, items: 6 },
  desktop: { breakpoint: { max: 1640, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 657 }, items: 2 },
  mobile: { breakpoint: { max: 657, min: 0 }, items: 1 }
};

const CarouselComp3View = observer(() => {
  const { carouselComp3ViewModel } = useDependencies();
  const navigate = useNavigate();

  useEffect(() => {
    carouselComp3ViewModel.loadProducts();
  }, [carouselComp3ViewModel]);

  if (carouselComp3ViewModel.loading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
        {carouselComp3ViewModel.products.map((product, index) => (
          <CarouselComp3Card category={product} />
        ))}
      </Carousel>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 95%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 655px) {
   width:85%;
  }
`;

export default CarouselComp3View;
