
import { ref } from 'vue'

class AzureService {

    constructor() {
        this.msalConfig = ref({
            auth: {
                clientId: '3eea4618-2fff-4708-b2e8-48721cf48475',
                authority: 'https://login.microsoftonline.com/abc36d34-3d25-436e-87a2-d1e20763a3c7/oauth2/authorize'
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