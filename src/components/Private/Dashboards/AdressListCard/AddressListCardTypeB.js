import React from 'react';
import { observer } from 'mobx-react-lite';
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';

const AddressListCardTypeB = observer(() => {
  const { addressListViewModel } = useDependencies();
  const { addresses, loading } = addressListViewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return (
      <selectedStyle.LoadingMessage
        style={{
          fontSize: '1.5rem',
          color: `${(props) => props.theme.colors.cartItemTitle}`,
        }}
      >
        Loading addresses...
      </selectedStyle.LoadingMessage>
    );
  }

  return (
    <selectedStyle.AddressListWrapper
      style={{
        background: `${(props) => props.theme.colors.wrapperBackground}`,
        border: `1px solid ${(props) => props.theme.colors.border}`,
        borderRadius: '20px',
      }}
    >
      <selectedStyle.AddNewAddressButton
        href="/address/new"
        style={{
          background: `${(props) => props.theme.colors.buttonBackground}`,
          color: `${(props) => props.theme.colors.navButtonText}`,
          fontSize: '1.4rem',
          padding: '20px 40px',
          border: `2px solid ${(props) => props.theme.colors.border}`,
          borderRadius: '12px',
          transition: 'background-color 0.4s ease, transform 0.3s',
        }}
      >
        Add new address
      </selectedStyle.AddNewAddressButton>
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <selectedStyle.AddressCard
            key={address.id}
            style={{ 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)',
              border: `3px solid ${(props) => props.theme.colors.border}`,
              background: `${(props) => props.theme.colors.cardBackground}`,
              borderRadius: '15px',
              padding: '20',
            }}
          >
            <selectedStyle.AddressCardHeader
              style={{
                fontWeight: 'bold',
                background: `${(props) => props.theme.colors.cardHeaderBackground}`,
                color: `${(props) => props.theme.colors.cardHeaderText}`,
                padding: '20px',
                borderBottom: `3px solid ${(props) => props.theme.colors.border}`,
                borderRadius: '15px 15px 0 0',
                
              }}
            >
              📍 Address #{index + 1}
            </selectedStyle.AddressCardHeader>
            <selectedStyle.AddressCardBody
              style={{
                background: `${(props) => props.theme.colors.cardBodyBackground}`,
                color: `${(props) => props.theme.colors.cardBodyText}`,
                padding: '25px',
               
              }}
            >
              <selectedStyle.Address>
                {address.fullname}
                <br />
                {address.addressLineOne} {address.addressLineTwo}
                <br />
                {address.city}, {address.zipCode}
                <br />
                {address.country}
              </selectedStyle.Address>
              <selectedStyle.ButtonGroup>
                <selectedStyle.EditButton
                  href={`/address/edit/${address.id}`}
                  style={{
                    background: `${(props) => props.theme.colors.buttonBackground}`,
                    color: `${(props) => props.theme.colors.navButtonText}`,
                    padding: '12px 25px',
                    borderRadius: '8px',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.1)')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                >
                  ✏️ Edit
                </selectedStyle.EditButton>
                <selectedStyle.DeleteButton
                  style={{
                    background: `${(props) => props.theme.colors.buttonHover}`,
                    color: `${(props) => props.theme.colors.cartCountText}`,
                    padding: '12px 25px',
                    borderRadius: '8px',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.1)')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                >
                  🗑️ Delete
                </selectedStyle.DeleteButton>
              </selectedStyle.ButtonGroup>
            </selectedStyle.AddressCardBody>
          </selectedStyle.AddressCard>
        ))
      ) : (
        <selectedStyle.EmptyAddressMessage
          style={{
            background: `${(props) => props.theme.colors.emptyMessageBackground}`,
            color: `${(props) => props.theme.colors.cartItemTitle}`,
            padding: '30px',
            border: `3px dashed ${(props) => props.theme.colors.border}`,
            borderRadius: '12px',
            fontSize: '1.4rem',
            textAlign: 'center',
            animation: 'fadeIn 0.5s ease-in-out',
          }}
        >
          🚫 You haven't added any addresses yet.
        </selectedStyle.EmptyAddressMessage>
      )}
    </selectedStyle.AddressListWrapper>
  );
});

export default AddressListCardTypeB;
