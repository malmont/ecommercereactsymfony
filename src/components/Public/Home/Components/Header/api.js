const API_URL = 'https://backend-strapi.online/jeesign/api';

export const getHomeSlider = async () => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${API_URL}/homeslider`, {
        headers: {
            'Origin': 'http://localhost:3000',
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch homeslider');
    }
    return await response.json();
};
