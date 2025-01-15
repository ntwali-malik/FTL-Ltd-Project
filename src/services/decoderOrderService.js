const API_BASE_URL = 'http://localhost:8080';

export const createDecoderOrder = async (orderData) => {
    try {
        console.log('Sending request to:', `${API_BASE_URL}/api/decoder-orders`);
        console.log('Order data:', orderData);

        const response = await fetch(`${API_BASE_URL}/api/decoder-orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                decoderType: orderData.decoderType,
                installationType: orderData.installationType,
                name: orderData.name,
                phoneNumber: orderData.phone,
                email: orderData.email,
                location: orderData.location
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Server response:', errorText);
            throw new Error(errorText || `HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        console.log('Success response:', data);
        return {
            success: true,
            message: data
        };
    } catch (error) {
        console.error('Error creating decoder order:', error);
        return {
            success: false,
            message: error.message || 'Failed to submit decoder order'
        };
    }
}; 