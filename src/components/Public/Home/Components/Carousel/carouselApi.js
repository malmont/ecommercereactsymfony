// src/components/Carousel/api/carouselApi.js
import { API_BASE_URL } from '../../../../../constants/apiConstants';

export const getProductByOffers = async (offers) => {
    const response = await fetch(`${API_BASE_URL}/products/${offers}`, {
        headers: {
            'Origin': 'http://localhost:3000',
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch tickets by category');
    }
    return await response.json();
};



