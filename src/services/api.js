import axios from 'axios';

// android simulator
export const host = 'http://10.0.2.2:3333';

// Genymotion
// export const host = 'http://10.0.3.2:3333';

const api = axios.create({ baseURL: host });

export default api;
