import React from 'react';
import { observer } from 'mobx-react-lite'; 
import { useDependencies } from '../../../../DependencyContext';
import { styles } from '../../../../theme/AllStyles';
import { useAdminContext } from '../../../../theme/AdminContext';

const AddressListCardTypeA = observer(() => {
  const { addressListViewModel } = useDependencies();
  const { addresses, loading } = addressListViewModel;
  const { styleChoice } = useAdminContext();
  const selectedStyle = styles[styleChoice];

  if (loading) {
    return <selectedStyle.LoadingMessage>Loading addresses...</selectedStyle.LoadingMessage>;
  }

  return (
    <selectedStyle.AddressListWrapper>
      <selectedStyle.AddNewAddressButton href="/address/new">
        Add new address
      </selectedStyle.AddNewAddressButton>
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <selectedStyle.AddressCard key={address.id}>
            <selectedStyle.AddressCardHeader>
              Address #{index + 1}
            </selectedStyle.AddressCardHeader>
            <selectedStyle.AddressCardBody>
              <selectedStyle.Address>
                {address.fullname}<br />
                {address.addressLineOne} {address.addressLineTwo}<br />
                {address.city}, {address.zipCode}<br />
                {address.country}
              </selectedStyle.Address>
              <selectedStyle.ButtonGroup>
                <selectedStyle.EditButton href={`/address/edit/${address.id}`}>
                  Edit
                </selectedStyle.EditButton>
                <selectedStyle.DeleteButton>Delete</selectedStyle.DeleteButton>
              </selectedStyle.ButtonGroup>
            </selectedStyle.AddressCardBody>
          </selectedStyle.AddressCard>
        ))
      ) : (
        <selectedStyle.EmptyAddressMessage>
          You haven't added any addresses yet.
        </selectedStyle.EmptyAddressMessage>
      )}
    </selectedStyle.AddressListWrapper>
  );
});

export default AddressListCardTypeA;
