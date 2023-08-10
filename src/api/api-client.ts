import appClient from './appClient';

export default {
    login(data: any) {
        //Body -> { user: { email: "dasdasd@gmail.com", password: "dsfafsdfsd" }}
        return appClient.post('/users/login', data)
    },
    getFeeds(limit: number, offset: number) {
        return appClient.get(`/articles?limit=${limit}&offset=${offset}`)
    },
    getFeedDetails(slug: string) {
        return appClient.get(`/articles/${slug}`)
    },
    getFeedComments(slug: string,limit: number, offset: number) {
        return appClient.get(`/articles/${slug}/comments?limit=${limit}&offset=${offset}`)
    },
    postFeedComment(slug: string,data: any) {
        //Body -> { comment: { body: "dasddasdasdas" }} 
        return appClient.post(`/articles/${slug}/comments`,data)
    },
    deleteFeedComment(slug: string, id: number) {
        return appClient.delete(`/articles/${slug}/comments${id}`)
    },
};
