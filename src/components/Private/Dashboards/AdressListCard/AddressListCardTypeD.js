import React from 'react';
import { observer } from 'mobx-react-lite'; 
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
const AddressListCardTypeD = observer(() => {
  const { addressListViewModel } = useDependencies();
  const { addresses, loading } = addressListViewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.LoadingMessage
        style={{
          fontSize: '1.5rem',
          color: `${(props) => props.theme.colors.navItemText}`,
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
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        background: `${(props) =>
          props.theme.colors.wrapperBackground || '#f8f9fa'}`,
        borderRadius: '20px',
        overflow: 'hidden',
        marginTop: '40px',
      }}
    >
      <selectedStyle.AddNewAddressButton
        href="/address/new"
        style={{
          
          top: '-10px',
          right: '20px',
          background: `linear-gradient(to right, ${(props) =>
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
        addresses.map((address, index) => (
          <selectedStyle.AddressCard
            key={address.id}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px',
    
              background: `${(props) =>
                props.theme.colors.cardBackground || '#ffffff'}`,
              border: `1px solid ${(props) =>
                props.theme.colors.cardBodyBackground || '#e9ecef'}`,
              borderRadius: '15px',
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              ':hover': {
                transform: `rotate(0deg) scale(1.05)`,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <selectedStyle.AddressCardHeader
              style={{
                padding: '15px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                background: `linear-gradient(to right, ${(props) =>
                  props.theme.colors.cardHeaderBackground || '#3498db'}, ${(props) =>
                  props.theme.colors.cardBodyBackground || '#ffffff'})`,
                color: `${(props) => props.theme.colors.cardHeaderText}`,
                textAlign: 'center',
                borderBottom: `2px solid ${(props) =>
                  props.theme.colors.border}`,
              }}
            >
              Address #{index + 1}
            </selectedStyle.AddressCardHeader>
            <selectedStyle.AddressCardBody
              style={{
                padding: '15px',
                color: `${(props) => props.theme.colors.cardBodyText}`,
                lineHeight: '1.6',
                fontSize: '1rem',
              }}
            >
              <selectedStyle.Address
                style={{
                  marginBottom: '10px',
                }}
              >
                {address.fullname}
                <br />
                {address.addressLineOne} {address.addressLineTwo}
                <br />
                {address.city}, {address.zipCode}
                <br />
                {address.country}
              </selectedStyle.Address>
              <selectedStyle.ButtonGroup
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                }}
              >
                <selectedStyle.EditButton
                  href={`/address/edit/${address.id}`}
                  style={{
                    padding: '10px',
                    flex: '1',
                    marginRight: '5px',
                    background: `${(props) =>
                      props.theme.colors.buttonBackground}`,
                    color: `${(props) => props.theme.colors.buttonText}`,
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    textAlign: 'center',
                    transition: 'background 0.3s ease',
                    ':hover': {
                      background: `${(props) =>
                        props.theme.colors.buttonHover}`,
                    },
                  }}
                >
                  Edit
                </selectedStyle.EditButton>
                <selectedStyle.DeleteButton
                  style={{
                    padding: '10px',
                    flex: '1',
                    marginLeft: '5px',
                    background: `${(props) =>
                      props.theme.colors.cartItemButtonBackground}`,
                    color: `${(props) => props.theme.colors.buttonText}`,
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    textAlign: 'center',
                    transition: 'background 0.3s ease',
                    ':hover': {
                      background: `${(props) =>
                        props.theme.colors.buttonHover}`,
                    },
                  }}
                >
                  Delete
                </selectedStyle.DeleteButton>
              </selectedStyle.ButtonGroup>
            </selectedStyle.AddressCardBody>
          </selectedStyle.AddressCard>
        ))
      ) : (
        <selectedStyle.EmptyAddressMessage
          style={{
            padding: '20px',
            background: `${(props) =>
              props.theme.colors.emptyMessageBackground}`,
            color: `${(props) => props.theme.colors.textColor}`,
            fontSize: '1.2rem',
            borderRadius: '15px',
            border: `1px dashed ${(props) =>
              props.theme.colors.border}`,
            textAlign: 'center',
          }}
        >
          No addresses yet. Add your first address!
        </selectedStyle.EmptyAddressMessage>
      )}
    </selectedStyle.AddressListWrapper>
  );
});



export default AddressListCardTypeD;
