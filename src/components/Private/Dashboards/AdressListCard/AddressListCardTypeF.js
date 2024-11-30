import React from 'react';
import { observer } from 'mobx-react-lite';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
import styled from 'styled-components';

const AddressListCardTypeF = observer(() => {
  const { addressListViewModel } = useDependencies();
  const { addresses, loading } = addressListViewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.LoadingMessage>
        Chargement des adresses...
      </selectedStyle.LoadingMessage>
    );
  }

  return (
    <AddressListWrapper>
      <selectedStyle.AddNewAddressButton
        href="/address/new"
        style={{
          minWidth: '250px',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: `${(props) => props.theme.colors.linkText}`,
        }}
      >
        Ajouter une adresse
      </selectedStyle.AddNewAddressButton>

      {addresses.length > 0 ? (
        addresses.map((address) => (
          <AddressCard key={address.id}>
            <selectedStyle.AddressCardHeader>
              {address.fullname}
            </selectedStyle.AddressCardHeader>

            <selectedStyle.AddressCardBody>
              <p>{address.addressLineOne}</p>
              {address.addressLineTwo && <p>{address.addressLineTwo}</p>}
              <p>
                {address.city}, {address.zipCode}
              </p>
              <p>{address.country}</p>
            </selectedStyle.AddressCardBody>

            <ButtonGroup>
              <selectedStyle.EditButton href={`/address/edit/${address.id}`}>
                Modifier
              </selectedStyle.EditButton>
              <selectedStyle.DeleteButton>Supprimer</selectedStyle.DeleteButton>
            </ButtonGroup>
          </AddressCard>
        ))
      ) : (
        <selectedStyle.EmptyAddressMessage>
          Aucune adresse trouvée. Ajoutez votre première adresse maintenant !
        </selectedStyle.EmptyAddressMessage>
      )}
    </AddressListWrapper>
  );
});

export default AddressListCardTypeF;

const AddressListWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding: 30px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.featureBackground},
    ${(props) => props.theme.colors.wrapperBackground}
  );
  border-radius: 30px;
  box-shadow: inset 0 10px 15px rgba(0, 0, 0, 0.2);
  scroll-snap-type: x mandatory;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    padding: 20px;
  }
`;

const AddressCard = styled.div`
  min-width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.colors.cardBackground},
    ${(props) => props.theme.colors.cardBodyBackground}
  );
  color: ${(props) => props.theme.colors.cardBodyText};
  border-radius: 25px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  scroll-snap-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: rotateY(5deg) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    min-width: 100%;
    height: auto;
    padding: 15px;
    margin-bottom: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
