import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';

const CarrierListCardTypeF = ({ viewModel }) => {
  const { carriers, loading } = viewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.NoCarrierMessage
        style={{
          padding: "20px",
          backgroundColor: `${(props) => props.theme.colors.cardBackground}`,
          color: `${(props) => props.theme.colors.textColor}`,
          borderRadius: "10px",
          fontSize: "1rem",
          textAlign: "center",
          border: `1px solid ${(props) => props.theme.colors.border}`,
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
        gap: "15px",
        padding: "30px",
        backgroundColor: `${(props) => props.theme.colors.wrapperBackground}`,
        borderRadius: "20px",
        border: `2px solid ${(props) => props.theme.colors.border}`,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          color: `${(props) => props.theme.colors.titleText}`,
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Available Carriers
      </h2>

      {carriers.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {carriers.map((carrier, index) => (
            <div
              key={`carrier-${carrier.id}-${index}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                backgroundColor: `${(props) => props.theme.colors.cardBackground}`,
                borderRadius: "15px",
                border: `1px solid ${(props) => props.theme.colors.border}`,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <selectedStyle.CarrierImage
                src={carrier.photo}
                alt={carrier.name}
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              />
              <h4
                style={{
                  fontSize: "1.2rem",
                  color: `${(props) => props.theme.colors.textColor}`,
                  marginBottom: "10px",
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
                  marginBottom: "15px",
                }}
              >
                {carrier.description}
              </p>
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: `${(props) => props.theme.colors.linkText}`,
                }}
              >
                ${(carrier.price / 100).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <selectedStyle.NoCarrierMessage
          style={{
            padding: "15px",
            backgroundColor: `${(props) => props.theme.colors.emptyMessageBackground}`,
            borderRadius: "12px",
            color: `${(props) => props.theme.colors.textColor}`,
            textAlign: "center",
            border: `1px solid ${(props) => props.theme.colors.border}`,
          }}
        >
          No carriers available.
        </selectedStyle.NoCarrierMessage>
      )}
    </selectedStyle.CarrierWrapper>
  );
};

export default observer(CarrierListCardTypeF);
