import React from 'react';
import styled from 'styled-components';

const CarrierList = ({ viewModel }) => {
  const { carriers, loading } = viewModel;

  if (loading) {
    return <p>Loading carriers...</p>;
  }

  return (
    <Wrapper>
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h3>Carriers</h3>
        </div>
        <div className="card-body">
          {carriers.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Carrier</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {carriers.map((carrier) => (
                    <tr key={carrier.id}>
                      <td>
                        <img src={carrier.photo} alt={carrier.name} width="50" height="50" />
                        {carrier.name}
                      </td>
                      <td>{carrier.description}</td>
                      <td>${(carrier.price / 100).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No carriers available.</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;

  img {
    margin-right: 20px;
  }
`;

export default CarrierList;
