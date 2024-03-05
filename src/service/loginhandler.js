import axios from "axios";

const loginhandler = async (email , password) => {
    try {
        const response = await axios.post('http://localhost:3577/auth/login', {
            Email: email,
            Password: password
        });
        console.log('Login successful:', response.data);
        return response.status;
    } catch (error) {
        console.error('Login failed:', error.response.data);
        return false;
    }
}

export default loginhandler;
