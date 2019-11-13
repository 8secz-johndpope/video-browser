import qs from 'qs';

const CLIENT_ID  = '772076099277-um5ehr2tqgsdmp7i79j5lkjmh6tnln76.apps.googleusercontent.com';
const ROUTE_URL = 'https://accounts.google.com/o/';

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token',
            scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
            include_granted_scopes: 'true',
            redirect_uri: 'http://localhost:8080/',
            state: 'pass-through value'
        };

        window.location = `${ROUTE_URL}oauth2/v2/auth?${qs.stringify(queryString)}`
    }
};
