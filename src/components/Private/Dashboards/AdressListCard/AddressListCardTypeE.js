import React from 'react';
import { observer } from 'mobx-react-lite'; 
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import styled from 'styled-components';

const AddressListCardTypeE = observer(() => {
  const { addressListViewModel } = useDependencies();
  const { addresses, loading } = addressListViewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.LoadingMessage as={LoadingMessage}>
        Loading addresses...
      </selectedStyle.LoadingMessage>
    );
  }

  return (
    <selectedStyle.AddressListWrapper as={AddressListWrapper}>
      <selectedStyle.AddNewAddressButton as={AddNewAddressButton} href="/address/new">
        Add Address
      </selectedStyle.AddNewAddressButton>
      {addresses.length > 0 ? (
        addresses.map((address) => (
          <selectedStyle.AddressCard as={AddressCard} key={address.id}>
            <selectedStyle.AddressCardHeader as={AddressCardHeader}>
              {address.fullname}
            </selectedStyle.AddressCardHeader>

            <selectedStyle.AddressCardBody as={AddressCardBody}>
              <p>{address.addressLineOne}</p>
              {address.addressLineTwo && <p>{address.addressLineTwo}</p>}
              <p>
                {address.city}, {address.zipCode}
              </p>
              <p>{address.country}</p>
            </selectedStyle.AddressCardBody>

            <selectedStyle.ButtonGroup as={ButtonGroup}>
              <selectedStyle.EditButton as={EditButton} href={`/address/edit/${address.id}`}>
                Edit
              </selectedStyle.EditButton>
              <selectedStyle.DeleteButton as={DeleteButton}>
                Delete
              </selectedStyle.DeleteButton>
            </selectedStyle.ButtonGroup>
          </selectedStyle.AddressCard>
        ))
      ) : (
        <selectedStyle.EmptyAddressMessage as={EmptyAddressMessage}>
          No addresses yet. Add your first address!
        </selectedStyle.EmptyAddressMessage>
      )}
    </selectedStyle.AddressListWrapper>
  );
});

export default AddressListCardTypeE;

const LoadingMessage = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
`;

const AddressListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  background: ${(props) => props.theme.colors.wrapperBackground};
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const AddNewAddressButton = styled.a`
  display: block;
  text-align: center;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.buttonBackground},
    ${(props) => props.theme.colors.buttonHover}
  );
  color: ${(props) => props.theme.colors.buttonText};
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const AddressCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const AddressCardHeader = styled.div`
  padding: 10px 15px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.cardHeaderText};
  background: ${(props) => props.theme.colors.cardHeaderBackground || '#f8f9fa'};
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

const AddressCardBody = styled.div`
  margin-top: 15px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.cardBodyText};
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const EditButton = styled.a`
  background: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  transition: background 0.3s ease;
  &:hover {
    background: ${(props) => props.theme.colors.buttonHoverBackground};
  }
`;

const DeleteButton = styled.button`
  background: ${(props) => props.theme.colors.cartItemButtonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  transition: background 0.3s ease;
  &:hover {
    background: ${(props) => props.theme.colors.cartItemButtonHover};
  }
`;

const EmptyAddressMessage = styled.div`
  padding: 20px;
  font-size: 1.2rem;
  text-align: center;
  background: ${(props) => props.theme.colors.emptyMessageBackground || '#ffffff'};
  color: ${(props) => props.theme.colors.textColor || '#000000'};
  border: 1px dashed ${(props) => props.theme.colors.border || '#dee2e6'};
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;
