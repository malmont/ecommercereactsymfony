import React from 'react';
import { observer } from 'mobx-react-lite'; 
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import styled from 'styled-components';

const AddressListCardTypeC = observer(() => {
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
        Add new address
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
          You haven't added any addresses yet.
        </selectedStyle.EmptyAddressMessage>
      )}
    </selectedStyle.AddressListWrapper>
  );
});

export default AddressListCardTypeC;

const LoadingMessage = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.cartItemTitle};
`;

const AddressListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
  background: ${(props) => props.theme.colors.wrapperBackground};
  border-radius: 20px;
`;

const AddNewAddressButton = styled.a`
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 0 auto 20px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.buttonBackground},
    ${(props) => props.theme.colors.buttonHover}
  );
  color: ${(props) => props.theme.colors.navButtonText};
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const AddressCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: ${(props) => props.theme.colors.cardBackground};
  border: 2px solid ${(props) => props.theme.colors.differentCardBorder};
  border-radius: 25px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
`;

const AddressCardHeader = styled.div`
  padding: 15px;
  background: ${(props) => props.theme.colors.cardHeaderBackground};
  border-bottom: 3px solid ${(props) => props.theme.colors.cardBodyBackground};
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.colors.cardHeaderText};
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const AddressCardBody = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.colors.cardBodyBackground};
  color: ${(props) => props.theme.colors.cardBodyText};
  border-radius: 15px;
  line-height: 1.6;
`;

const Address = styled.div`
  margin-bottom: 15px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textColor};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const EditButton = styled.a`
  flex: 1;
  padding: 10px;
  background: ${(props) => props.theme.colors.incrDecButtonBackground};
  color: ${(props) => props.theme.colors.navButtonText};
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
`;

const DeleteButton = styled.button`
  flex: 1;
  padding: 10px;
  background: ${(props) => props.theme.colors.cartItemButtonBackground};
  color: ${(props) => props.theme.colors.navButtonText};
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
    background: ${(props) => props.theme.colors.cartItemButtonHover};
  }
`;

const EmptyAddressMessage = styled.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  background: ${(props) => props.theme.colors.emptyMessageBackground};
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  font-size: 1.1rem;
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border: 2px dashed ${(props) => props.theme.colors.differentCardBorder};
`;
