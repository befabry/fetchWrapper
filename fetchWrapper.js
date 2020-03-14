/**
 * Return the fetched object from the request
 *
 * @param {string} url The url
 * @param {Object} options The object used for the request. Use FetchOptions or create a similar object
 * @returns {Object}
 */
export default async (url = "", options = {}) => {
    //Headers par défaut
    let headers = {
        "Content-Type": "application/json"
    };

    if (options.headers) {
        headers = { ...headers, ...options.headers };
        delete options.headers;
    }

    //fetch does not support params. Concatenated in the URL
    if ("GET" === options.method) {
        let getURL = new URL(url);
        getURL.search = new URLSearchParams(options.params).toString();
        url = getURL.toString();
        options.params = undefined;
    }

    let response = await fetch(url, {
        method: options.method,
        headers,
        body: options.params
    });

    return await response.json();
};