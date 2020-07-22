import axios from 'axios';


async function requireAuth() {
    try {
        const jwt = window.localStorage.getItem('access_token');
        const result = await axios.get(`${process.env.VUE_APP_API_URL}/auth/me`, {headers: {Authorization: `JWT ${jwt}`}});
        return result.status === 200;
    }
    catch (e)
    {
        return false;
    }
}

export default requireAuth;