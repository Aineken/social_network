import axios from "axios";

const API_KEY="dce74158-9bce-4703-8c6c-4d14a7718dea";

// const instance = axios.create({
//     withCredentials: true,
//     baseURL:"https://social-network.samuraijs.com/api/1.0/",
//     headers: {
//         "Accept": 'application/json',
//         "API-KEY":API_KEY
//     }
// });


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceNew.get(`api/users?page=${currentPage}&count=${pageSize}`);
    },
    follow(userId) {
        return instanceNew.post(`api/follow/${userId}`)
    },
    unfollow(userId) {
        return instanceNew.delete(`api/follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instanceNew.get(`api/profile/` + userId);
    },
    getStatus(userId) {
        return instanceNew.get(`api/profile/status/` + userId);
    },
    updateStatus(status) {
        return instanceNew.put(`api/profile/status`, {status: status});
    }
}


const instanceNew = axios.create({
    withCredentials: true,
    headers: {
        "Accept": 'application/json',
        "Authorization":`Bearer ${API_KEY}`,
    }
});

export const authAPI = {
    me() {
        return instanceNew.get(`api/auth/me`);
    },
    login(email, password, rememberMe = false, captcha=null) {
        return instanceNew.post(`api/auth/login`, {email, password, rememberMe,captcha}).then(response => response).catch(error=>{
            console.log(error)
        })
    },
    logout() {
        return instanceNew.delete(`api/auth/login`);
    },
    captchaUrl() {
        return instanceNew.get("api/security/get-captcha-url");
    }
}
