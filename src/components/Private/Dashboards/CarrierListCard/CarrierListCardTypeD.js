import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';

const CarrierListCardTypeD = ({ viewModel }) => {
  const { carriers, loading } = viewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.NoCarrierMessage
        style={{
          padding: "20px",
          backgroundColor: `${(props) => props.theme.colors.tableWrapperBackground}`,
          color: `${(props) => props.theme.colors.linkHoverText}`,
          border: `2px dashed ${(props) => props.theme.colors.border}`,
          textAlign: "center",
          fontSize: "1.2rem",
          fontWeight: "bold",
          fontStyle: "italic",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        Loading carriers...
      </selectedStyle.NoCarrierMessage>
    );
  }

  return (
    <selectedStyle.CarrierWrapper
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "30px",
        backgroundColor: `${(props) => props.theme.colors.featureBackground}`,
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
      }}
    >
      {carriers.length > 0 ? (
        carriers.map((carrier, index) => (
          <div
            key={`carrier-${carrier.id}-${index}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: `${(props) => props.theme.colors.cardBackground}`,
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
              border: `2px solid ${(props) => props.theme.colors.border}`,
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.1)";
            }}
          >
            <selectedStyle.CarrierImage
              src={carrier.photo}
              alt={carrier.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                marginBottom: "10px",
                border: `3px solid ${(props) => props.theme.colors.border}`,
              }}
            />
            <h4
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                color: `${(props) => props.theme.colors.titleText}`,
                textAlign: "center",
                margin: "10px 0",
              }}
            >
              {carrier.name}
            </h4>
            <p
              style={{
                color: `${(props) => props.theme.colors.descriptionText}`,
                fontSize: "1rem",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              {carrier.description}
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: `${(props) => props.theme.colors.linkText}`,
              }}
            >
              ${(carrier.price / 100).toFixed(2)}
            </p>
          </div>
        ))
      ) : (
        <selectedStyle.NoCarrierMessage
          style={{
            padding: "20px",
            backgroundColor: `${(props) => props.theme.colors.emptyMessageBackground}`,
            color: `${(props) => props.theme.colors.descriptionText}`,
            border: `1px dashed ${(props) => props.theme.colors.border}`,
            textAlign: "center",
            fontSize: "1.2rem",
            borderRadius: "8px",
          }}
        >
          No carriers available.
        </selectedStyle.NoCarrierMessage>
      )}
    </selectedStyle.CarrierWrapper>
  );
};

export default observer(CarrierListCardTypeD);
