import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';

const CarrierListCardTypeC = ({ viewModel }) => {
  const { carriers, loading } = viewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.NoCarrierMessage
        style={{
          padding: "20px",
          backgroundColor: `${(props) => props.theme.colors.emptyMessageBackground}`,
          borderRadius: "10px",
          fontSize: "1rem",
          color: `${(props) => props.theme.colors.navItemText}`,
          textAlign: "center",
          border: `2px dashed ${(props) => props.theme.colors.border}`,
        }}
      >
        Loading carriers, please wait...
      </selectedStyle.NoCarrierMessage>
    );
  }

  return (
    <selectedStyle.CarrierWrapper
      style={{
        padding: "25px",
        background: `${(props) => props.theme.colors.wrapperBackground}`,
        borderRadius: "20px",
        border: `1px solid ${(props) => props.theme.colors.border}`,
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontSize: "1.8rem",
          fontWeight: "bold",
          color: `${(props) => props.theme.colors.navItemText}`,
          marginBottom: "20px",
        }}
      >
        Available Carriers
      </h3>
      {carriers.length > 0 ? (
        <selectedStyle.CarrierTableContainer
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: `${(props) => props.theme.colors.cardBackground}`,
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <selectedStyle.CarrierTable>
            <thead>
              <tr
                style={{
                  backgroundColor: `${(props) => props.theme.colors.tableHeaderBackground}`,
                  color: `${(props) => props.theme.colors.tableHeaderText}`,
                  fontWeight: "bold",
                }}
              >
                <th style={{ padding: "12px" }}>Carrier</th>
                <th style={{ padding: "12px" }}>Description</th>
                <th style={{ padding: "12px" }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {carriers.map((carrier, index) => (
                <tr
                  key={`carrier-${carrier.id}-${index}`}
                  style={{
                    backgroundColor: index % 2 === 0
                      ? `${(props) => props.theme.colors.cardBackground}`
                      : `${(props) => props.theme.colors.containerBackground}`,
                  }}
                >
                  <td style={{ padding: "12px", display: "flex", alignItems: "center" }}>
                    <selectedStyle.CarrierImage
                      src={carrier.photo}
                      alt={carrier.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                        marginRight: "10px",
                        border: `2px solid ${(props) => props.theme.colors.border}`,
                      }}
                    />
                    {carrier.name}
                  </td>
                  <td style={{ padding: "12px" }}>{carrier.description}</td>
                  <td
                    style={{
                      padding: "12px",
                      fontWeight: "bold",
                      color: `${(props) => props.theme.colors.linkText}`,
                    }}
                  >
                    ${(carrier.price / 100).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </selectedStyle.CarrierTable>
        </selectedStyle.CarrierTableContainer>
      ) : (
        <selectedStyle.NoCarrierMessage
          style={{
            padding: "15px",
            backgroundColor: `${(props) => props.theme.colors.emptyMessageBackground}`,
            color: `${(props) => props.theme.colors.navItemHover}`,
            border: `1px solid ${(props) => props.theme.colors.border}`,
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "1.1rem",
          }}
        >
          No carriers available at this time.
        </selectedStyle.NoCarrierMessage>
      )}
    </selectedStyle.CarrierWrapper>
  );
};

export default observer(CarrierListCardTypeC);
