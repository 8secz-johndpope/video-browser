import qs from 'qs';

const CLIENT_ID  = '';
const ROUTE_URL = 'https://accounts.google.com/signin/';

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${ROUTE_URL}/oauth2/oauthchooseaccount?${qs.stringify(queryString)}`
    }
};
