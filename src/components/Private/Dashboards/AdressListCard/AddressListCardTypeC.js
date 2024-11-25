import React from 'react';
import { observer } from 'mobx-react-lite'; 
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';
const AddressListCardTypeC = observer(() => {
  const { addressListViewModel } = useDependencies();
  const { addresses, loading } = addressListViewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.LoadingMessage>
        Loading addresses...
      </selectedStyle.LoadingMessage>
    );
  }

  return (
    <selectedStyle.AddressListWrapper
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        padding: '30px',
        background: `${(props) => props.theme.colors.wrapperBackground}`,
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      }}
    >
      <selectedStyle.AddNewAddressButton
        href="/address/new"
        style={{
          display: 'block',
          width: '100%',
          maxWidth: '200px',
          margin: '0 auto 20px auto',
          padding: '12px 20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          textAlign: 'center',
          textDecoration: 'none',
          background: `linear-gradient(135deg, ${(props) =>
            props.theme.colors.buttonBackground}, ${(props) =>
            props.theme.colors.buttonHover})`,
          color: `${(props) => props.theme.colors.navButtonText}`,
          borderRadius: '10px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
          ':hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        Add new address
      </selectedStyle.AddNewAddressButton>
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <selectedStyle.AddressCard
            key={address.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px',
              background: `${(props) =>
                index % 2 === 0
                  ? props.theme.colors.cardBackground
                  : props.theme.colors.differentCardBackground}`,
              border: `2px solid ${(props) =>
                props.theme.colors.differentCardBorder}`,
              borderRadius: '25px',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ':hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <selectedStyle.AddressCardHeader
              style={{
                padding: '15px',
                background: `${(props) =>
                  props.theme.colors.cardHeaderBackground}`,
                borderBottom: `3px solid ${(props) =>
                  props.theme.colors.cardBodyBackground}`,
                textAlign: 'center',
                fontWeight: 'bold',
                color: `${(props) => props.theme.colors.cardHeaderText}`,
                fontSize: '1.2rem',
                letterSpacing: '1px',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
              }}
            >
              Address #{index + 1}
            </selectedStyle.AddressCardHeader>
            <selectedStyle.AddressCardBody
              style={{
                padding: '20px',
                background: `${(props) =>
                  props.theme.colors.cardBodyBackground}`,
                color: `${(props) => props.theme.colors.cardBodyText}`,
                lineHeight: '1.6',
                borderRadius: '15px',
              }}
            >
              <selectedStyle.Address
                style={{
                  marginBottom: '15px',
                  fontSize: '1rem',
                  color: `${(props) => props.theme.colors.textColor}`,
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
                  gap: '15px',
                }}
              >
                <selectedStyle.EditButton
                  href={`/address/edit/${address.id}`}
                  style={{
                    flex: '1',
                    padding: '10px',
                    background: `${(props) =>
                      props.theme.colors.incrDecButtonBackground}`,
                    color: `${(props) => props.theme.colors.navButtonText}`,
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    ':hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  Edit
                </selectedStyle.EditButton>
                <selectedStyle.DeleteButton
                  style={{
                    flex: '1',
                    padding: '10px',
                    background: `${(props) =>
                      props.theme.colors.cartItemButtonBackground}`,
                    color: `${(props) => props.theme.colors.navButtonText}`,
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    ':hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
                      background: `${(props) =>
                        props.theme.colors.cartItemButtonHover}`,
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
            margin: '0 auto',
            maxWidth: '400px',
            padding: '20px',
            background: `${(props) =>
              props.theme.colors.emptyMessageBackground}`,
            color: `${(props) => props.theme.colors.textColor}`,
            textAlign: 'center',
            fontSize: '1.1rem',
            borderRadius: '20px',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
            border: `2px dashed ${(props) =>
              props.theme.colors.differentCardBorder}`,
          }}
        >
          You haven't added any addresses yet.
        </selectedStyle.EmptyAddressMessage>
      )}
    </selectedStyle.AddressListWrapper>
  );
});
export default AddressListCardTypeC;