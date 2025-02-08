import axios from 'axios';

const baseURLAPI = import.meta.env.VITE_BASE_URL;

const hexAxios = axios.create({
    baseURL: baseURLAPI
});

hexAxios.interceptors.request.use(
    (config) => {
        const ctoken = document.cookie.replace(
            /(?:(?:^|.*;\s*)ctoken\s*\=\s*([^;]*).*$)|^.*$/,
            "$1",
        );
        if (ctoken) {
            config.headers.Authorization = `Bearer ${ctoken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

hexAxios.defaults.withCredentials = false;

hexAxios.interceptors.response.use(
    (response) => response,
    (error) => {
        // 5xx
        if (error.response && error.response.status.toString().startsWith('5')) {
            return;
        }
        if (error.response && error.response.status !== 200 && error.response.status !== 401) {
            return;
        }
        if (error.response && error.response.status === 401) {
            return;
        }
    }
);

export { hexAxios };
