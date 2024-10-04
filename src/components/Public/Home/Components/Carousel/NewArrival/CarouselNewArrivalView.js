import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NewArrivalCard from '../NewArrival/components/NewArrivalCard';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../../DependencyContext';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1640 }, items: 4 },
  desktop: { breakpoint: { max: 1640, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 657 }, items: 2 },
  mobile: { breakpoint: { max: 657, min: 0 }, items: 1 }
};

const CarouselNewArrivalView = observer(() => {
  const { carouselNewArrivalViewModel } = useDependencies();
  const navigate = useNavigate();

  useEffect(() => {
    carouselNewArrivalViewModel.loadProducts();
  }, [carouselNewArrivalViewModel]);

  if (carouselNewArrivalViewModel.loading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
        {carouselNewArrivalViewModel.products.map((product, index) => (
          // <div key={index} onClick={() => navigate(`/category/${category.type_epreuve_sportive}`)}>
          //   <CategoryCard category={product} />
          // </div>
          <NewArrivalCard category={product} />
        ))}
      </Carousel>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 655px) {
   width:75%;
  }
`;

export default CarouselNewArrivalView;
