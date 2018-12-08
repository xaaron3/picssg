import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6a74eeafc0d5abf18947860bbf98ffca3a0ae802574d3e70f7fa4546f206245f'
    }
});