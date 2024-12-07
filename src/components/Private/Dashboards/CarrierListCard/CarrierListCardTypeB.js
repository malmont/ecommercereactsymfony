import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';

const CarrierListCardTypeB = ({ viewModel }) => {
  const { carriers, loading } = viewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.NoCarrierMessage
        style={{
          padding: "15px",
          backgroundColor: `${(props) => props.theme.colors.emptyMessageBackground}`,
          borderRadius: "10px",
          textAlign: "center",
          fontStyle: "italic",
          color: `${(props) => props.theme.colors.navItemText}`,
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Loading carriers...
      </selectedStyle.NoCarrierMessage>
    );
  }

  return (
    <selectedStyle.CarrierWrapper
      style={{
        padding: "25px",
        backgroundColor: `${(props) => props.theme.colors.wrapperBackground}`,
        borderRadius: "15px",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
        marginTop: "20px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontSize: "1.6rem",
          fontWeight: "bold",
          color: `${(props) => props.theme.colors.navItemText}`,
          marginBottom: "20px",
        }}
      >
        Carrier List
      </h3>
      {carriers.length > 0 ? (
        <selectedStyle.CarrierTableContainer
          style={{
            border: `1px solid ${(props) => props.theme.colors.border}`,
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: `${(props) => props.theme.colors.cardBackground}`,
          }}
        >
          <selectedStyle.CarrierTable>
            <thead>
              <tr
                style={{
                  backgroundColor: `${(props) => props.theme.colors.tableHeaderBackground}`,
                  color: `${(props) => props.theme.colors.tableHeaderText}`,
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                <th style={{ padding: "1px" }}>Carrier</th>
                <th style={{ padding: "1px" }}>Description</th>
                <th style={{ padding: "1px" }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {carriers.map((carrier, index) => (
                <tr
                  key={`carrier-${carrier.id}-${index}`}
                  style={{
                    borderBottom: `1px solid ${(props) => props.theme.colors.border}`,
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = `${(props) => props.theme.colors.hoverCardBackground}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = `${(props) => props.theme.colors.cardBackground}`)
                  }
                >
                  <td >
                    <selectedStyle.CarrierImage
                      src={carrier.photo}
                      alt={carrier.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        marginRight: "10px",
                        border: `2px solid ${(props) => props.theme.colors.border}`,
                      }}
                    />
                    {carrier.name}
                  </td>
                  <td style={{ padding: "1px" }}>{carrier.description}</td>
                  <td
                    style={{
                     
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
            color: `${(props) => props.theme.colors.navItemHover}`,
            padding: "15px",
            backgroundColor: `${(props) => props.theme.colors.emptyMessageBackground}`,
            borderRadius: "8px",
            fontStyle: "italic",
          }}
        >
          No carriers available.
        </selectedStyle.NoCarrierMessage>
      )}
    </selectedStyle.CarrierWrapper>
  );
};

export default observer(CarrierListCardTypeB);
