import React from 'react';
import { observer } from 'mobx-react-lite'; 
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
const AddressListCardTypeE = observer(() => {
  const { addressListViewModel } = useDependencies();
  const { addresses, loading } = addressListViewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.LoadingMessage
        style={{
          fontSize: '1.5rem',
          color: `${(props) => props.theme.colors.textColor}`,
          textAlign: 'center',
          margin: '30px 0',
          animation: 'fadeIn 0.5s ease-in-out',
        }}
      >
        Loading addresses...
      </selectedStyle.LoadingMessage>
    );
  }

  return (
    <selectedStyle.AddressListWrapper
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '30px',
        background: `${(props) => props.theme.colors.wrapperBackground}`,
        borderRadius: '20px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <selectedStyle.AddNewAddressButton
        href="/address/new"
        style={{
          display: 'block',
          textAlign: 'center',
          background: `linear-gradient(90deg, ${(props) =>
            props.theme.colors.buttonBackground}, ${(props) =>
            props.theme.colors.buttonHover})`,
          color: `${(props) => props.theme.colors.buttonText}`,
          padding: '12px 20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '25px',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease',
          ':hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        Add Address
      </selectedStyle.AddNewAddressButton>

      {addresses.length > 0 ? (
        addresses.map((address) => (
          <selectedStyle.AddressCard
            key={address.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px',
              borderRadius: '15px',
              background: `${(props) =>
                props.theme.colors.cardBackground || '#ffffff'}`,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ':hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <selectedStyle.AddressCardHeader
              style={{
                padding: '10px 15px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: `${(props) => props.theme.colors.cardHeaderText}`,
                background: `${(props) =>
                  props.theme.colors.cardHeaderBackground || '#f8f9fa'}`,
                borderRadius: '10px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              {address.fullname}
            </selectedStyle.AddressCardHeader>

            <selectedStyle.AddressCardBody
              style={{
                marginTop: '15px',
                fontSize: '1rem',
                color: `${(props) => props.theme.colors.cardBodyText}`,
                lineHeight: '1.6',
              }}
            >
              <p>{address.addressLineOne}</p>
              {address.addressLineTwo && <p>{address.addressLineTwo}</p>}
              <p>
                {address.city}, {address.zipCode}
              </p>
              <p>{address.country}</p>
            </selectedStyle.AddressCardBody>

            <selectedStyle.ButtonGroup
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '15px',
              }}
            >
              <selectedStyle.EditButton
                href={`/address/edit/${address.id}`}
                style={{
                  background: `${(props) =>
                    props.theme.colors.buttonBackground}`,
                  color: `${(props) => props.theme.colors.buttonText}`,
                  padding: '10px 15px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  ':hover': {
                    background: `${(props) =>
                      props.theme.colors.buttonHoverBackground}`,
                  },
                }}
              >
                Edit
              </selectedStyle.EditButton>
              <selectedStyle.DeleteButton
                style={{
                  background: `${(props) =>
                    props.theme.colors.cartItemButtonBackground}`,
                  color: `${(props) => props.theme.colors.buttonText}`,
                  padding: '10px 15px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  ':hover': {
                    background: `${(props) =>
                      props.theme.colors.cartItemButtonHover}`,
                  },
                }}
              >
                Delete
              </selectedStyle.DeleteButton>
            </selectedStyle.ButtonGroup>
          </selectedStyle.AddressCard>
        ))
      ) : (
        <selectedStyle.EmptyAddressMessage
          style={{
            padding: '20px',
            fontSize: '1.2rem',
            textAlign: 'center',
            background: `${(props) =>
              props.theme.colors.emptyMessageBackground || '#ffffff'}`,
            color: `${(props) => props.theme.colors.textColor || '#000000'}`,
            border: `1px dashed ${(props) =>
              props.theme.colors.border || '#dee2e6'}`,
            borderRadius: '15px',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          No addresses yet. Add your first address!
        </selectedStyle.EmptyAddressMessage>
      )}
    </selectedStyle.AddressListWrapper>
  );
});


export default AddressListCardTypeE;
