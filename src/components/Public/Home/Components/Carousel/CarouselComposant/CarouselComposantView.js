import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import CarouselTypeA from "../CarouselComposant/component/CarouselTypeA";
import CarouselTypeB from "../CarouselComposant/component/CarouselTypeB";
import CarouselTypeD from "../CarouselComposant/component/CarouselTypeD";
import CarouselTypeC from "../CarouselComposant/component/CarouselTypeC";
import CarouselTypeE from "../CarouselComposant/component/CarouselTypeE";
import CarouselTypeF from "../CarouselComposant/component/CarouselTypeF";

// Map for carousel components
const carouselMap = {
  typeA: CarouselTypeA,
  typeB: CarouselTypeB,
  typeC: CarouselTypeC,
  typeD: CarouselTypeD,
  typeE: CarouselTypeE,
  typeF: CarouselTypeF,
};

// Map for product fetch types
const typeProductFetchMap = {
  typeBestsellers: "bestsellers",
  typeNewarrivals: "newarrivals",
  typeSpecialoffers: "specialoffers",
  typeIsfeatured: "isfeatured",
  typeIsAccessory: "isAccessory",
};

// Responsive configuration based on carousel type
const getResponsiveConfig = (typeComponentSection) => {
  switch (typeComponentSection) {
    case "typeA":
      return {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1640 }, items: 5 },
        desktop: { breakpoint: { max: 1640, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 657 }, items: 3 },
        mobile: { breakpoint: { max: 657, min: 0 }, items: 1 },
      };
    case "typeB":
      return {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1640 }, items: 6 },
        desktop: { breakpoint: { max: 1640, min: 1024 }, items: 5 },
        tablet: { breakpoint: { max: 1024, min: 657 }, items: 4 },
        mobile: { breakpoint: { max: 657, min: 0 }, items: 2 },
      };
      case "typeC":
        return {
          superLargeDesktop: { breakpoint: { max: 4000, min: 1640 }, items: 5 },
          desktop: { breakpoint: { max: 1640, min: 1024 }, items: 4 },
          tablet: { breakpoint: { max: 1024, min: 657 }, items: 3 },
          mobile: { breakpoint: { max: 657, min: 0 }, items: 1 },
        };
        case "typeD":
        return {
          superLargeDesktop: { breakpoint: { max: 4000, min: 1640 }, items: 6 },
          desktop: { breakpoint: { max: 1640, min: 1024 }, items: 5 },
          tablet: { breakpoint: { max: 1024, min: 657 }, items: 4 },
          mobile: { breakpoint: { max: 657, min: 0 }, items: 1 },
        };
        case "typeE":
        return {
          superLargeDesktop: { breakpoint: { max: 4000, min: 1640 }, items: 4 },
        desktop: { breakpoint: { max: 1640, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 657 }, items: 2 },
        mobile: { breakpoint: { max: 657, min: 0 }, items: 1 },
        };
    default:
      return {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1640 }, items: 4 },
        desktop: { breakpoint: { max: 1640, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 657 }, items: 2 },
        mobile: { breakpoint: { max: 657, min: 0 }, items: 1 },
      };
  }
};

const CarouselComposantView = observer(({ typeComponentSection, selectTypeProductFetch, carouselViewModelSection }) => {
  const CarouselCard = carouselMap[typeComponentSection] || CarouselTypeA;

  const TypeProductFetch = typeProductFetchMap[selectTypeProductFetch] || "bestsellers";

  useEffect(() => {
    carouselViewModelSection.loadProducts(TypeProductFetch);
  }, [carouselViewModelSection, TypeProductFetch]);

  if (carouselViewModelSection.loading) {
    return <div>Loading...</div>;
  }

  // Get responsive configuration based on type
  const responsive = getResponsiveConfig(typeComponentSection);

  return (
    <Wrapper>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
        {carouselViewModelSection.products.map((product, index) => (
          <CarouselCard key={index} category={product} />
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
    width: 90%;
  }
`;

export default CarouselComposantView;
