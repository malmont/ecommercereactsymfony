import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import styled from 'styled-components';

const CarrierListCardTypeC = ({ viewModel }) => {
  const { carriers, loading } = viewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.NoCarrierMessage as={NoCarrierMessage}>
        Loading carriers, please wait...
      </selectedStyle.NoCarrierMessage>
    );
  }

  return (
    <selectedStyle.CarrierWrapper as={CarrierWrapper}>
      <CarrierTitle>Available Carriers</CarrierTitle>
      {carriers.length > 0 ? (
        <selectedStyle.CarrierTableContainer as={CarrierTableContainer}>
          <selectedStyle.CarrierTable as={CarrierTable}>
            <thead>
              <tr>
                <TableHeader>Carrier</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader>Price</TableHeader>
              </tr>
            </thead>
            <tbody>
              {carriers.map((carrier, index) => (
                <TableRow
                  key={`carrier-${carrier.id}-${index}`}
                  isEven={index % 2 === 0}
                >
                  <td>
                    <selectedStyle.CarrierImage
                      as={CarrierImage}
                      src={carrier.photo}
                      alt={carrier.name}
                    />
                    {carrier.name}
                  </td>
                  <td>{carrier.description}</td>
                  <td>${(carrier.price / 100).toFixed(2)}</td>
                </TableRow>
              ))}
            </tbody>
          </selectedStyle.CarrierTable>
        </selectedStyle.CarrierTableContainer>
      ) : (
        <selectedStyle.NoCarrierMessage as={NoCarrierMessage}>
          No carriers available at this time.
        </selectedStyle.NoCarrierMessage>
      )}
    </selectedStyle.CarrierWrapper>
  );
};

export default observer(CarrierListCardTypeC);

const NoCarrierMessage = styled.div`
  padding: 15px;
  background-color: ${(props) => props.theme.colors.emptyMessageBackground};
  border-radius: 10px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.navItemText};
  text-align: center;
  border: 2px dashed ${(props) => props.theme.colors.border};
`;

const CarrierWrapper = styled.div`
  background: ${(props) => props.theme.colors.wrapperBackground};
  border-radius: 20px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
`;

const CarrierTitle = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.navItemText};
  margin-bottom: 20px;
`;

const CarrierTableContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.cardBackground};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
`;

const CarrierTable = styled.table`
  width: 100%;
  border-spacing: 0;
  thead tr {
    background-color: ${(props) => props.theme.colors.tableHeaderBackground};
    color: ${(props) => props.theme.colors.tableHeaderText};
    font-weight: bold;
  }
`;

const TableHeader = styled.th`
  padding: 2px;
`;

const TableRow = styled.tr`
  background-color: ${(props) =>
    props.isEven
      ? props.theme.colors.cardBackground
      : props.theme.colors.containerBackground};
  td {
    padding: 12px;
    &:nth-child(3) {
      font-weight: bold;
      color: ${(props) => props.theme.colors.linkText};
    }
  }
`;

const CarrierImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 10px;
  border: 2px solid ${(props) => props.theme.colors.border};
`;
