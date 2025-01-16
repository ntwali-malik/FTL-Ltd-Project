import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/internships';

class InternshipService {
    // Create a new internship registration
    async registerIntern(internData) {
        try {
            const response = await axios.post(API_BASE_URL, internData);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Get all internship registrations
    async getAllRegistrations() {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Get a specific internship registration by ID
    async getRegistrationById(id) {
        try {
            const response = await axios.get(`${API_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Delete an internship registration
    async deleteRegistration(id) {
        try {
            const response = await axios.delete(`${API_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Update internship status
    async updateStatus(id, status) {
        try {
            const response = await axios.patch(`${API_BASE_URL}/${id}/status`, { status });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Helper method to handle errors
    handleError(error) {
        if (error.response) {
            const message = error.response.data?.message || 'An error occurred with the server';
            return new Error(message);
        } else if (error.request) {
            return new Error('No response received from server');
        } else {
            return new Error('Error setting up request');
        }
    }
}

export default new InternshipService(); 