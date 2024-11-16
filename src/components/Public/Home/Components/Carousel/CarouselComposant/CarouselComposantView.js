import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useDependencies } from '../../../../../../DependencyContext';
import CarouselTypeA from '../CarouselComposant/component/CarouselTypeA';
import CarouselTypeB from '../CarouselComposant/component/CarouselTypeB';
import CarouselTypeD from '../CarouselComposant/component/CarouselTypeD';
import CarouselTypeC from  '../CarouselComposant/component/CarouselTypeC';
import CarouselTypeE from '../CarouselComposant/component/CarouselTypeE';
import CarouselTypeF from '../CarouselComposant/component/CarouselTypeF';
import { useAdminContext } from '../../../../../../theme/AdminContext';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1640 }, items: 6 },
  desktop: { breakpoint: { max: 1640, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 657 }, items: 4 },
  mobile: { breakpoint: { max: 657, min: 0 }, items: 1 }
};

const carouselMap = {
  typeA: CarouselTypeA,
  typeB: CarouselTypeB,
  typeC: CarouselTypeC,
  typeD: CarouselTypeD,
  typeE: CarouselTypeE,
  typeF: CarouselTypeF,
};

const typeProductFetchMap = {
  typeBestsellers: 'bestsellers',
  typeNewarrivals: 'newarrivals',
  typeSpecialoffers: 'specialoffers',
  typeIsfeatured: 'isfeatured',
  typeIsAccessory: 'isAccessory',
};

const CarouselComposantView = observer(({ typeComponentSection,selectTypeProductFetch }) => {
  const { carouselComposantViewModel } = useDependencies();
  // const { selectTypeProductFetch,loadingSettings} = useAdminContext();
  // if (loadingSettings) {
  //   return <div>Loading...</div>;
  // }
  const CarouselCard = carouselMap[typeComponentSection] || CarouselTypeA;
  
  const TypeProductFetch = typeProductFetchMap[selectTypeProductFetch] || 'bestsellers';

  useEffect(() => {
    carouselComposantViewModel.loadProducts(TypeProductFetch);
  }, [carouselComposantViewModel, TypeProductFetch]);

  if (carouselComposantViewModel.loading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
        {carouselComposantViewModel.products.map((product, index) => (
          <CarouselCard key={index}  category={product} />
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
   width:70%;
  }
`;

export default CarouselComposantView;
