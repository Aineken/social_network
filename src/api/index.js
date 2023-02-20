import axios from "axios";

const API_KEY="dce74158-9bce-4703-8c6c-4d14a7718dea";

const instance = axios.create({
    withCredentials: true,
    baseURL:"/",
    headers: {
        "Accept": 'application/json',
        "Authorization":`Bearer ${API_KEY}`


    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha=null) {
        return instance.post(`auth/login`, {email, password, rememberMe,captcha}).then(response => response).catch(error=>{
            console.log(error)
        })
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    captchaUrl() {
        return instance.get("security/get-captcha-url");
    }
}
