import axios from 'axios';


const instance = axios.create({
    timeout: 6000,
});

export const get = (url: string) => {
    return new Promise((resolve, reject) => {
        instance
            .get(url)
            .then((result) => {
                if (result.status === 200) {
                    resolve(result.data);
                } else {
                    reject(result.data);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};
