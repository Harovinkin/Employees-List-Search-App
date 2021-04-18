import ENDPOINTS from 'modules/api/endpoints';

const BASE_URL = 'https://employees-list-search-app-default-rtdb.firebaseio.com';

class Api {
    constructor(baseUrl, endpoints) {
        this.baseUrl = baseUrl;
        this.endpoints = endpoints;
    }

    async generateRequest(endpoint, data) {
        const {method, uri} = this.endpoints[endpoint];
        
        return fetch(`${this.baseUrl}${uri}.json`, {method, body: data});
    }

    async fetch(endpoint, data) {
        const response = await this.generateRequest(endpoint, data);

        return response.json();
    }
}

export default new Api(BASE_URL, ENDPOINTS)