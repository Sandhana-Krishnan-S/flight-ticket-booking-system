import axios from "axios";

const signuphandler = async (username , email , password) => {
    try {
        const response = await axios.post('http://localhost:3577/auth/register', {
            UserName : username, 
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

export default signuphandler;