import React from 'react';
import { observer } from 'mobx-react-lite'; 
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';

const AddressListCardTypeF = observer(() => {
  const { addressListViewModel } = useDependencies();
  const { addresses, loading } = addressListViewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.LoadingMessage
        style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: `${(props) => props.theme.colors.cartCountText}`,
          textAlign: 'center',
          margin: '50px 0',
          animation: 'pulse 1.5s infinite',
        }}
      >
        Loading addresses...
      </selectedStyle.LoadingMessage>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'scroll',
        gap: '30px',
        padding: '30px',
        background: `linear-gradient(135deg, ${(props) =>
          props.theme.colors.featureBackground}, ${(props) =>
          props.theme.colors.wrapperBackground})`,
        borderRadius: '30px',
        boxShadow: 'inset 0 10px 15px rgba(0, 0, 0, 0.2)',
        scrollSnapType: 'x mandatory',
      }}
    >
      <selectedStyle.AddNewAddressButton
        href="/address/new"
        style={{
          minWidth: '300px',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: `${(props) => props.theme.colors.linkText}`,
          background: `linear-gradient(145deg, ${(props) =>
            props.theme.colors.cardBackground}, ${(props) =>
            props.theme.colors.linkHoverBackground})`,
          borderRadius: '25px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
          scrollSnapAlign: 'center',
          ':hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
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
              minWidth: '300px',
              height: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px',
              background: `linear-gradient(145deg, ${(props) =>
                props.theme.colors.cardBackground}, ${(props) =>
                props.theme.colors.cardBodyBackground})`,
              color: `${(props) => props.theme.colors.cardBodyText}`,
              borderRadius: '25px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
              scrollSnapAlign: 'center',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              ':hover': {
                transform: 'rotateY(5deg) scale(1.05)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <selectedStyle.AddressCardHeader
              style={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
                textAlign: 'center',
                color: `${(props) => props.theme.colors.cardHeaderText}`,
                borderBottom: `2px solid ${(props) =>
                  props.theme.colors.border}`,
                paddingBottom: '10px',
              }}
            >
              {address.fullname}
            </selectedStyle.AddressCardHeader>

            <selectedStyle.AddressCardBody
              style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                textAlign: 'center',
                margin: '15px 0',
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
                justifyContent: 'space-around',
                marginTop: '10px',
              }}
            >
              <selectedStyle.EditButton
                href={`/address/edit/${address.id}`}
                style={{
                  background: `${(props) =>
                    props.theme.colors.buttonBackground}`,
                  color: `${(props) => props.theme.colors.linkHoverText}`,
                  padding: '8px 15px',
                  fontWeight: 'bold',
                  borderRadius: '10px',
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
                  color: `${(props) => props.theme.colors.cartItemButtonHover}`,
                  padding: '8px 15px',
                  fontWeight: 'bold',
                  borderRadius: '10px',
                  ':hover': {
                    background: `${(props) =>
                      props.theme.colors.incrDecButtonBackground}`,
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
            textAlign: 'center',
            fontSize: '1.2rem',
            color: `${(props) => props.theme.colors.textColor}`,
            padding: '20px',
            borderRadius: '20px',
            background: `linear-gradient(145deg, ${(props) =>
              props.theme.colors.emptyMessageBackground}, ${(props) =>
              props.theme.colors.wrapperBackground})`,
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          No addresses found. Add your first address now!
        </selectedStyle.EmptyAddressMessage>
      )}
    </div>
  );
});


export default AddressListCardTypeF;
