import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0840f051-6abd-4212-b3be-5c7425e52fc7",
        // 'Access-Control-Allow-Credentials': "true",
        // "Access-Control-Expose-Headers": "Access-Control-Allow-Origin",
        'Access-Control-Allow-Origin': "*",
        // 'Content-Type': 'application/json',
        // 'Content-Type': 'text/plain'
    }
});

const params = {
    withCredentials: true,
    headers:{

        "API-KEY": "0840f051-6abd-4212-b3be-5c7425e52fc7",
    }
}

export const getUsers = ()=> axios.get("https://social-network.samuraijs.com/api/1.0/users/?page=1&count=10", params)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users/page=${currentPage}&count=${pageSize}`)
    }
    // follow(userId) {
    //     return instance.post(`follow/${userId}`)
    // },
    // unfollow(userId) {
    //     return instance.delete(`follow/${userId}`)
    // },
    // getProfile(userId) {
    //     console.warn('Obsolete method. Please profileAPI object.')
    //     return profileAPI.getProfile(userId);
    // }
}

// export const profileAPI = {
//     getProfile(userId) {
//         return instance.get(`profile/` + userId);
//     },
//     getStatus(userId) {
//         return instance.get(`profile/status/` + userId);
//     },
//     updateStatus(status) {
//         return instance.put(`profile/status`, {status: status});
//     }
// }
//
// export const authAPI = {
//     me() {
//         return instance.get(`auth/me`)
//     }
// }
