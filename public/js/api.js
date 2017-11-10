axios.interceptors.response.use((response) => {
    return response.data || response;
}, (error) => {
    return Promise.reject(error);
});

var api = {
    baseUrl:"",
    post(url,data){
        return  axios.post(this.baseUrl+url,{
            sid:"123213",
            uid:"4564546",
            data:data
        });
    },
    getUser(url,data){
        return this.post(url,data);
    }
}