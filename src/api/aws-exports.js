import { Auth } from "aws-amplify";
import Amplify, { API } from 'aws-amplify'

const awsConfig = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-1',
        userPoolId: 'us-east-1_vM20gagN0',
        userPoolWebClientId: '5ad851tl0g5r3l27q8unpglspa',
    },
    API: {
        endpoints: [{
            name: 'BingerApis-APIs',
            endpoint: 'https://y1e5u7bong.execute-api.us-east-1.amazonaws.com/dev/',
            region: 'us-east-1',
            custom_header: async() => {
                const auth = `Bearer ${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`
                return {
                    Authorization: auth,
                }
            },
        }, ],
    },
};

export default awsConfig;

export const getMovies = (queryParams) => {
    return API.get('BingerApis-APIs', '/movies', {
        queryStringParameters: queryParams,
    })
}


export const getMovieById = (id) => {
    return API.get('BingerApis-APIs', `/movies/${id}`, {})
}