import React from 'react';
import { observer } from 'mobx-react-lite';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import styled from 'styled-components';

const AddressListCardTypeB = observer(() => {
  const { addressListViewModel } = useDependencies();
  const { addresses, loading } = addressListViewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return <selectedStyle.LoadingMessage as={LoadingMessage}>Loading addresses...</selectedStyle.LoadingMessage>;
  }

  return (
    <selectedStyle.AddressListWrapper as={AddressListWrapper}>
      <selectedStyle.AddNewAddressButton as={AddNewAddressButton} href="/address/new">
        Add new address
      </selectedStyle.AddNewAddressButton>
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <selectedStyle.AddressCard as={AddressCard} key={address.id}>
            <selectedStyle.AddressCardHeader as={AddressCardHeader}>
              📍 Address #{index + 1}
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
                  ✏️ Edit
                </selectedStyle.EditButton>
                <selectedStyle.DeleteButton as={DeleteButton}>
                  🗑️ Delete
                </selectedStyle.DeleteButton>
              </selectedStyle.ButtonGroup>
            </selectedStyle.AddressCardBody>
          </selectedStyle.AddressCard>
        ))
      ) : (
        <selectedStyle.EmptyAddressMessage as={EmptyAddressMessage}>
          🚫 You haven't added any addresses yet.
        </selectedStyle.EmptyAddressMessage>
      )}
    </selectedStyle.AddressListWrapper>
  );
});

export default AddressListCardTypeB;

const LoadingMessage = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.cartItemTitle};
`;

const AddressListWrapper = styled.div`
  background: ${(props) => props.theme.colors.wrapperBackground};
  border-radius: 20px;
`;

const AddNewAddressButton = styled.a`
  background: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.navButtonText};
  font-size: 1rem;
  padding: 20px;
  border-radius: 12px;
  transition: background-color 0.4s ease, transform 0.3s;
`;

const AddressCard = styled.div`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  border: 3px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 15px;
  padding: 10px;
`;

const AddressCardHeader = styled.div`
  font-weight: bold;
  background: ${(props) => props.theme.colors.cardHeaderBackground};
  color: ${(props) => props.theme.colors.cardHeaderText};
  padding: 20px;
  border-bottom: 3px solid ${(props) => props.theme.colors.border};
  border-radius: 15px 15px 0 0;
`;

const AddressCardBody = styled.div`
  background: ${(props) => props.theme.colors.cardBodyBackground};
  color: ${(props) => props.theme.colors.cardBodyText};
`;

const Address = styled.div`
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const EditButton = styled.a`
  background: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.navButtonText};
  padding: 12px 25px;
  border-radius: 8px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const DeleteButton = styled.button`
  background: ${(props) => props.theme.colors.buttonHover};
  color: ${(props) => props.theme.colors.cartCountText};
  padding: 12px 25px;
  border-radius: 8px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const EmptyAddressMessage = styled.div`
  background: ${(props) => props.theme.colors.emptyMessageBackground};
  color: ${(props) => props.theme.colors.cartItemTitle};
  padding: 30px;
 
  border-radius: 12px;
  font-size: 1.4rem;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
`;
