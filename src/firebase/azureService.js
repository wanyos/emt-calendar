
import { ref } from 'vue'

class AzureService {

    constructor() {
        this.msalConfig = ref({
            auth: {
                clientId: '',
           authority: ''
           },
          cache: {
           cacheLocaltion: 'localStorage'
          }
        })
        this.accessToken = ref('')
    }


    setAccessToken(token) {
        this.accessToken = token;
        return this.accessToken
    }

    getAccessToken() {
        return this.accessToken;
    }

    getMsalConfig() {
        return this.getMsalConfig
    }

}

export default AzureService;