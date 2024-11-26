import React from 'react';
import { observer } from "mobx-react-lite";
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';

const CarrierListCardTypeA = ({ viewModel }) => {
  const { carriers, loading } = viewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return <selectedStyle.NoCarrierMessage>Loading carriers...</selectedStyle.NoCarrierMessage>;
  }

  return (
    <selectedStyle.CarrierWrapper>
      <h3>Carriers</h3>
      {carriers.length > 0 ? (
        <selectedStyle.CarrierTableContainer>
          <selectedStyle.CarrierTable>
            <thead>
              <tr>
                <th>Carrier</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {carriers.map((carrier, index) => (
                <tr key={`carrier-${carrier.id}-${index}`}>
                  <td>
                    <selectedStyle.CarrierImage src={carrier.photo} alt={carrier.name} />
                    {carrier.name}
                  </td>
                  <td>{carrier.description}</td>
                  <td>${(carrier.price / 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </selectedStyle.CarrierTable>
        </selectedStyle.CarrierTableContainer>
      ) : (
        <selectedStyle.NoCarrierMessage>No carriers available.</selectedStyle.NoCarrierMessage>
      )}
    </selectedStyle.CarrierWrapper>
  );
};

export default observer(CarrierListCardTypeA);
