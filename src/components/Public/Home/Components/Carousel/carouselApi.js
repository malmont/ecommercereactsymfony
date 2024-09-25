// src/components/Carousel/api/carouselApi.js
import { API_BASE_URL } from '../../../../../constants/apiConstants';

const API_URL = 'https://backend-strapi.online/api.jeuxolympiques.com/api';



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


export const getTicketsByLevel = async (niveau) => {
    const response = await fetch(`${API_URL}/epreuves/by_level/?niveau_epreuve=${niveau}`);
    if (!response.ok) {
        throw new Error('Failed to fetch tickets by level');
    }
    return await response.json();
};
