import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../../DependencyContext';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1640 }, items: 6 },
  desktop: { breakpoint: { max: 1640, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 657 }, items: 4 },
  mobile: { breakpoint: { max: 657, min: 0 }, items: 1 }
};

const CarouselComp = observer(() => {
  const { carouselViewModel } = useDependencies();
  const navigate = useNavigate();

  useEffect(() => {
    carouselViewModel.loadProducts();
  }, [carouselViewModel]);

  if (carouselViewModel.loading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
        {carouselViewModel.products.map((product, index) => (
          // <div key={index} onClick={() => navigate(`/category/${category.type_epreuve_sportive}`)}>
          //   <CategoryCard category={product} />
          // </div>
          <CategoryCard category={product} />
        ))}
      </Carousel>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 655px) {
    width: 50%;
  }
`;

export default CarouselComp;
