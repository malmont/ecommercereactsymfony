import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import styled from 'styled-components';

const CarrierListCardTypeB = ({ viewModel }) => {
  const { carriers, loading } = viewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.NoCarrierMessage as={NoCarrierMessage}>
        Loading carriers...
      </selectedStyle.NoCarrierMessage>
    );
  }

  return (
    <selectedStyle.CarrierWrapper  as={CarrierWrapper}>

<CarrierTitle>Carrier List</CarrierTitle>
      {carriers.length > 0 ? (
        <selectedStyle.CarrierTableContainer  as={CarrierTableContainer}>
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
               <TableRow key={`carrier-${carrier.id}-${index}`}>
               <td>
               <selectedStyle.CarrierImage as={CarrierImage} src={carrier.photo} alt={carrier.name} />
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
          No carriers available.
        </selectedStyle.NoCarrierMessage>
      )}
    </selectedStyle.CarrierWrapper>
  );
};

export default observer(CarrierListCardTypeB);


const NoCarrierMessage = styled.div`
  padding: 15px;
  background-color: ${(props) => props.theme.colors.emptyMessageBackground};
  border-radius: 10px;
  text-align: center;
  font-style: italic;
  color: ${(props) => props.theme.colors.navItemText};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const CarrierWrapper = styled.div`
  padding: 25px;
  background-color: ${(props) => props.theme.colors.wrapperBackground};
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`;

const CarrierTitle = styled.h3`
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.navItemText};
  margin-bottom: 20px;
`;

const CarrierTableContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.cardBackground};
`;

const CarrierTable = styled.table`
  width: 100%;
  border-spacing: 0;
  thead tr {
    background-color: ${(props) => props.theme.colors.tableHeaderBackground};
    color: ${(props) => props.theme.colors.tableHeaderText};
    font-weight: bold;
    text-align: left;
  }
`;

const TableHeader = styled.th`
  padding: 1px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverCardBackground};
  }

  td {
    padding: 10px;
    &:nth-child(3) {
      font-weight: bold;
      color: ${(props) => props.theme.colors.linkText};
    }
  }
`;

const CarrierImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid ${(props) => props.theme.colors.border};
`;