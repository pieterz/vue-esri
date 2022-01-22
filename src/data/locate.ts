export async function locate() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            resolve(coords);
        }, reject);
    });
}

