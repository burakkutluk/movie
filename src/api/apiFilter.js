import api from "./apiCall";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const apiFilter = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return api.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return api.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return api.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return api.get(url, params);
    },
    genre: (cate, params) => {
        const url = 'genre/' + category[cate] + '/list' ;
        return api.get(url,{params: {}});
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return api.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return api.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return api.get(url, {params: {}});
    },
}

export default apiFilter