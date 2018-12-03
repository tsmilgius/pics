import axios from 'axios';

export default axios.create( {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 21ec67308683283ad706a6d340bdb59f3898aa746b48930914e8e5cce6a1a9d0',
      }
});