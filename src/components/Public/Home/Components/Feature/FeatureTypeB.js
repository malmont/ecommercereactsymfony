import React from "react";
import { HiCash } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import { useAdminContext } from "../../../../../theme/AdminContext";
import { styles } from "../../../../../theme/All_styles";

const FeatureTypeB = () => {
  const { styleChoice,loadingSettings } = useAdminContext();
  if (loadingSettings) {
    return <div>Loading...</div>;
  }
  const selectedStyle = styles[styleChoice];
 console.log('selectedStyle12', selectedStyle) 
  return (
    <selectedStyle.FeatureWrapper>
      <div className="row text-center">
        <selectedStyle.FeatureCard className="col">
          <HiCash size={30} data-testid="cash-icon" />
          <span className="mx-3">FAST SECURE PAYMENTS</span>
        </selectedStyle.FeatureCard>
        <selectedStyle.FeatureCard className="col bg-danger">
          <AiFillStar size={30} data-testid="star-icon" />
          <span className="mx-3">PREMIUM PRODUCTS</span>
        </selectedStyle.FeatureCard>
        <selectedStyle.FeatureCard className="col">
          <IoIosPaperPlane size={30} data-testid="plane-icon" />
          <span className="mx-3">FREE & FAST DELIVERY</span>
        </selectedStyle.FeatureCard>
      </div>
    </selectedStyle.FeatureWrapper>
  );
};

export default FeatureTypeB;

