import { API_BASE_URL } from '../../../../../constants/apiConstants';

const API_URL = 'https://backend-strapi.online/api.jeuxolympiques.com/api';

export const getTicketsByLevel = async (level) => {
    const response = await fetch(`${API_URL}/epreuves/by_level/?niveau_epreuve=${encodeURIComponent(level)}`);
    const data = await response.json();
    return data;
};


export const getProductByCategories = async ({ keyword = '', page = 1, pageSize = 12, categories = [] }) => {
    const categoriesQueryParam = categories.length ? `&categories=[${categories.join(',')}]` : '';
    const url = `${API_BASE_URL}/products/by-category?keyword=${encodeURIComponent(keyword)}&page=${page}&pageSize=${pageSize}${categoriesQueryParam}`;
    const response = await fetch(url, {
        headers: {
            'Origin': 'http://localhost:3000',
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch products by categories');
    }

    return await response.json();
};
