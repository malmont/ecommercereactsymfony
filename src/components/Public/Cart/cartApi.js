// api.js
export async function createOrder (orderData) {
    const response = await fetch('https://backend-strapi.online/jeesign/api/order/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
      credentials: 'include' 
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Create Order Error:', errorData);
      throw new Error('Failed to create order: ' + JSON.stringify(errorData));
    }
  
    return await response.json();
  }
  