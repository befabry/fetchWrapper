/**
 * An object helper to use with fetchWrapper
 * 
 * @param {Object} params The parameters
 * @param {Object} headers The headers
 * @param {string} method The method
 */
module.exports = class FetchOptions {
    constructor(params, method = "GET", headers = {}) {
        if (!this.supportedMethods.includes(method)) {
            throw new Error(
                "Must be of type ${this.supportedMethods.toString()}"
            );
        }

        this.params = params;
        this.method = method;
        this.headers = headers;
    }

    get supportedMethods() {
        return ["GET", "POST", "PUT", "DELETE"];
    }
}