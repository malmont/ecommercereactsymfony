

const API_BASE_URL = 'https://backend-strapi.online/jeesign/api';

// Fonction pour récupérer les adresses
export const fetchAddresses = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/adresses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        if (!response.ok) {
            throw new Error('Failed to fetch addresses');
        }

        const data = await response.json();
        return data; // Renvoie les données des adresses
    } catch (error) {
        console.error('Error fetching addresses:', error);
        throw error;
    }
};


export const fetchUserOrders = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/ordersuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

export const fetchCarriers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/Carrier`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch carriers');
      }
  
      const data = await response.json();
      return data; // Renvoie les données des transporteurs
    } catch (error) {
      console.error('Error fetching carriers:', error);
      throw error;
    }
  };
  
export const getAllData = async () => {
    try {
        const addresses = await fetchAddresses();
        const orders = await fetchUserOrders();
        return { addresses, orders };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};



