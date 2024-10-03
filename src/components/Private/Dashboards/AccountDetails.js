import React from 'react';

const AccountDetails = ({ user }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Account Details</h3>
      </div>
      <div className="card-body">
        <form>
          <div className="row">
            <div className="form-group col-md-6">
              <label>First Name</label>
              <input
                required
                className="form-control"
                type="text"
                value={user?.firstname}
                readOnly
              />
            </div>
            <div className="form-group col-md-6">
              <label>Last Name</label>
              <input
                required
                className="form-control"
                type="text"
                value={user?.lastname}
                readOnly
              />
            </div>
            <div className="form-group col-md-12">
              <label>Email Address</label>
              <input
                required
                className="form-control"
                type="email"
                value={user?.email}
                readOnly
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
