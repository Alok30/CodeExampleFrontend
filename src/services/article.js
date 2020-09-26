import axios from 'axios';
import { getAuthToken } from './auth';
const articlesUrl=`http://apiproxy.nl-demo.com/nytimes/svc/news/v3/content/all/all.json?api-key=073aded0b53d4df480aadaa0c7e4f589`;
const baseUrl=`http://apiproxy.nl-demo.com/nytimes/svc/news/v3/content.json?api-key=073aded0b53d4df480aadaa0c7e4f589&url=`
// http://api.nytimes.com/svc/search/v2/articlesearch.json
const baseUrl1='http://apiproxy.nl-demo.com/nytimes/svc/news/v3/content/all/all.json?limit=7';
const apiKey = `api_key=073aded0b53d4df480aadaa0c7e4f589`;
const article1=`http://apiproxy.nl-demo.com/nytimes/svc/news/v3/content/all/all.json?`;
const axiosOptions = {
    timeout: 20000
};
const getAxiosAuthenticatedEnpointOptions = () => ({
    ...axiosOptions, headers: {
        'x-nl-auth': getAuthToken(),
        'Content-Type' : 'application/json'
    }
});
const getAxiosAuthenticatedEnpointWithJsonPayloadOptions = () => ({
    ...axiosOptions, headers: {
        'x-nl-auth':+ getAuthToken(),
        'Content-type': 'application/json'
    }
});
const url=`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=R0u0eTXKOivCREu3uzVfcazycoTKigcg`
//${articlesUrl}?${apiKey}&q=${query}&begin_date=${start_date}&end_date=${end_date}
// const url=`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Fgui5nkpGJ4KUDtjvfNYcAli7NqIV8UH`
export function getArticles(query,start_date,end_date) {
    return axios.get( `${url}` )
        .then( response =>{
           return response.data 
        } )

};
export function getArticle( url ) {
    console.log(url,'url')
    return axios.get( `${baseUrl}${url}`, getAxiosAuthenticatedEnpointOptions() )
        .then( response => response.data )
}
