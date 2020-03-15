/**
 * An object helper to use with fetchWrapper
 *
 * @param {Object} params The parameters
 * @param {Object} headers The headers
 * @param {string} method The method
 */
class FetchOptions {
    constructor(params, method = "GET", headers = {}, credentials = null) {
        if (!this.supportedMethods.includes(method)) {
            throw new Error(
                "Must be of type ${this.supportedMethods.toString()}"
            );
        }
        console.log("src/FetchOptions");

        this.params = params;
        this.method = method;
        this.headers = headers;
        this.credentials = credentials;
    }

    get supportedMethods() {
        return ["GET", "POST", "PUT", "DELETE"];
    }
};

module.exports = FetchOptions;