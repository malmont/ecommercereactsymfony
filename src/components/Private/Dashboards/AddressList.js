import React from 'react';
import { observer } from 'mobx-react-lite'; // Assurez-vous que 'mobx-react-lite' est installé
import { useDependencies } from '../../../DependencyContext'; // Import correct du DependencyContext

const AddressList = observer(() => {
  const { addressListViewModel } = useDependencies();
  const { addresses, loading } = addressListViewModel; 

  if (loading) {
    return <p>Loading addresses...</p>;
  }

  return (
    <div className="row">
      <div className="col-lg-12">
        <a href="/address/new" className="btn btn-fill-out mb-3">Add new address</a>
      </div>
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <div className="col-lg-6" key={address.id}>
            <div className="card mb-3">
              <div className="card-header">
                <h3>Your Address #{index + 1}</h3>
              </div>
              <div className="card-body">
                <address>
                  {address.fullname}<br />
                  {address.addressLineOne} {address.addressLineTwo}<br />
                  {address.city}, {address.zipCode}<br />
                  {address.country}
                </address>
                <div className="btn-group">
                  <a href={`/address/edit/${address.id}`} className="btn btn-success">Edit</a>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>You haven't added any addresses yet.</p>
      )}
    </div>
  );
});

export default AddressList;
