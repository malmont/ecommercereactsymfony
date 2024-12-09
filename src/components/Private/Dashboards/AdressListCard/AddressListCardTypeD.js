import React from 'react';
import { observer } from 'mobx-react-lite'; 
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import styled from 'styled-components';

const AddressListCardTypeD = observer(() => {
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
        addresses.map((address, index) => (
          <selectedStyle.AddressCard as={AddressCard} key={address.id}>
            <selectedStyle.AddressCardHeader as={AddressCardHeader}>
              Address #{index + 1}
            </selectedStyle.AddressCardHeader>
            <selectedStyle.AddressCardBody as={AddressCardBody}>
              <selectedStyle.Address as={Address}>
                {address.fullname}
                <br />
                {address.addressLineOne} {address.addressLineTwo}
                <br />
                {address.city}, {address.zipCode}
                <br />
                {address.country}
              </selectedStyle.Address>
              <selectedStyle.ButtonGroup as={ButtonGroup}>
                <selectedStyle.EditButton as={EditButton} href={`/address/edit/${address.id}`}>
                  Edit
                </selectedStyle.EditButton>
                <selectedStyle.DeleteButton as={DeleteButton}>
                  Delete
                </selectedStyle.DeleteButton>
              </selectedStyle.ButtonGroup>
            </selectedStyle.AddressCardBody>
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

export default AddressListCardTypeD;

const LoadingMessage = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.navItemText};
  text-align: center;
  margin: 30px 0;
  animation: fadeIn 0.5s ease-in-out;
`;

const AddressListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: ${(props) => props.theme.colors.wrapperBackground || '#f8f9fa'};
  border-radius: 20px;
  overflow: hidden;
  margin-top: 40px;
`;

const AddNewAddressButton = styled.a`
  top: -10px;
  right: 20px;
  background: linear-gradient(
    to right,
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
  position: relative;
  width: 100%;
  max-width: 400px;
  background: ${(props) => props.theme.colors.cardBackground || '#ffffff'};
  border: 1px solid ${(props) => props.theme.colors.cardBodyBackground || '#e9ecef'};
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const AddressCardHeader = styled.div`
  padding: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.cardHeaderBackground},
    ${(props) => props.theme.colors.cardBodyBackground}
  );
  color: ${(props) => props.theme.colors.cardHeaderText};
  text-align: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
`;

const AddressCardBody = styled.div`
  padding: 15px;
  color: ${(props) => props.theme.colors.cardBodyText};
  line-height: 1.6;
  font-size: 1rem;
`;

const Address = styled.div`
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const EditButton = styled.a`
  padding: 10px;
  flex: 1;
  margin-right: 5px;
  background: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  transition: background 0.3s ease;
  &:hover {
    background: ${(props) => props.theme.colors.buttonHover};
  }
`;

const DeleteButton = styled.button`
  padding: 10px;
  flex: 1;
  margin-left: 5px;
  background: ${(props) => props.theme.colors.cartItemButtonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  transition: background 0.3s ease;
  &:hover {
    background: ${(props) => props.theme.colors.buttonHover};
  }
`;

const EmptyAddressMessage = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.colors.emptyMessageBackground};
  color: ${(props) => props.theme.colors.textColor};
  font-size: 1.2rem;
  border-radius: 15px;
  border: 1px dashed ${(props) => props.theme.colors.border};
  text-align: center;
`;
