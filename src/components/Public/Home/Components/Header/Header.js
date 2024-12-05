import styled from "styled-components";
import ContainerSection1 from "../../../../../theme/ThemeContainer/ContainerSection1";
import ContainerSection2 from "../../../../../theme/ThemeContainer/ContainerSection2";
import ContainerSection3 from "../../../../../theme/ThemeContainer/ContainerSection3";
import ContainerSection4 from "../../../../../theme/ThemeContainer/ContainerSection4";
import ContainerSection5 from "../../../../../theme/ThemeContainer/ContainerSection5";
import ContainerSection6 from "../../../../../theme/ThemeContainer/ContainerSection6";
import ContainerSection7 from "../../../../../theme/ThemeContainer/ContainerSection7";


const Header = () => {
  return (
    <Wrapper>
      <div className = "mb-5"> 
      <ContainerSection1 />
      </div>
      <ContainerSection2 />
      <h1 className="m-4 p-4 text-center">Flash Sales</h1>
      <div className="featureCenter">
        <ContainerSection3 />
      </div>
      <h1 className="m-4 p-4 text-center">New arrival</h1>
      <div className="featureCenter">
        <ContainerSection4 />
      </div>
      <h1 className="m-4 p-4 text-center">Best Sellers</h1>
      <div className="featureCenter">
        <ContainerSection5 />
      </div>
      
      <div className="featureCenter mt-5">
        <ContainerSection6 />
      </div>
      <div className="featureCenter m-4">
      <ContainerSection7 />
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
 

`;