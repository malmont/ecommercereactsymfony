import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';

const CarrierListCardTypeE = ({ viewModel }) => {
  const { carriers, loading } = viewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.NoCarrierMessage
        style={{
          padding: "25px",
          backgroundColor: `${(props) => props.theme.colors.cardBackground}`,
          color: `${(props) => props.theme.colors.linkHoverText}`,
          borderRadius: "15px",
          textAlign: "center",
          fontSize: "1.2rem",
          fontWeight: "bold",
          animation: "pulse 1.5s infinite",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        Loading carriers...
      </selectedStyle.NoCarrierMessage>
    );
  }

  return (
    <selectedStyle.CarrierWrapper
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "30px",
        backgroundColor: `${(props) => props.theme.colors.wrapperBackground}`,
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
    >
      <h3
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          color: `${(props) => props.theme.colors.titleText}`,
          marginBottom: "10px",
        }}
      >
        Explore Carriers
      </h3>
      <p
        style={{
          color: `${(props) => props.theme.colors.descriptionText}`,
          fontSize: "1rem",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Discover the best options for your shipping needs.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {carriers.length > 0 ? (
          carriers.map((carrier, index) => (
            <div
              key={`carrier-${carrier.id}-${index}`}
              style={{
                width: "250px",
                height: "350px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px",
                backgroundColor: `${(props) => props.theme.colors.cardBackground}`,
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                border: `2px solid ${(props) => props.theme.colors.border}`,
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
              }}
            >
              <selectedStyle.CarrierImage
                src={carrier.photo}
                alt={carrier.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  marginBottom: "15px",
                  border: `4px solid ${(props) => props.theme.colors.border}`,
                  backgroundColor: `${(props) => props.theme.colors.cardBodyBackground}`,
                }}
              />
              <h4
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: `${(props) => props.theme.colors.cardText}`,
                  textAlign: "center",
                  margin: "10px 0",
                }}
              >
                {carrier.name}
              </h4>
              <p
                style={{
                  color: `${(props) => props.theme.colors.descriptionText}`,
                  fontSize: "0.9rem",
                  textAlign: "center",
                  lineHeight: "1.5",
                  marginBottom: "10px",
                }}
              >
                {carrier.description}
              </p>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: `${(props) => props.theme.colors.linkText}`,
                }}
              >
                ${(carrier.price / 100).toFixed(2)}
              </p>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "5px",
                  background: `linear-gradient(to right, #007bff, #0056b3)`,
                }}
              ></div>
            </div>
          ))
        ) : (
          <selectedStyle.NoCarrierMessage
            style={{
              color: `${(props) => props.theme.colors.descriptionText}`,
              padding: "20px",
              backgroundColor: `${(props) => props.theme.colors.emptyMessageBackground}`,
              border: `1px dashed ${(props) => props.theme.colors.border}`,
              textAlign: "center",
              fontSize: "1.2rem",
              borderRadius: "12px",
            }}
          >
            No carriers available.
          </selectedStyle.NoCarrierMessage>
        )}
      </div>
    </selectedStyle.CarrierWrapper>
  );
};

export default observer(CarrierListCardTypeE);
