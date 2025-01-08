import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/internships';

const internshipService = {
    // Register a new intern
    registerIntern: async (internData) => {
        try {
            const response = await axios.post(API_BASE_URL, internData);
            return {
                success: true,
                message: response.data
            };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data || 'Registration failed'
            };
        }
    },

    // Get all internship registrations
    getAllRegistrations: async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data || 'Failed to fetch registrations'
            };
        }
    },

    // Get registration by ID
    getRegistrationById: async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/${id}`);
            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data || 'Failed to fetch registration'
            };
        }
    },

    // Delete registration
    deleteRegistration: async (id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/${id}`);
            return {
                success: true,
                message: response.data
            };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data || 'Failed to delete registration'
            };
        }
    }
};

export default internshipService; 