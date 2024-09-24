import { API_BASE_URL } from '../../../../../constants/apiConstants';
export const getHomeSlider = async () => {
    const response = await fetch(`${API_BASE_URL}/homeslider`, {
        headers: {
            'Origin': 'http://localhost:3000',
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch homeslider');
    }
    return await response.json();
};
