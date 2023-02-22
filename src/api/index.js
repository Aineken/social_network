import axios from "axios";

const API_KEY="dce74158-9bce-4703-8c6c-4d14a7718dea";

const instanceNew = axios.create({
    withCredentials: true,
    headers: {
        "Accept": 'application/json',
        "Authorization":`Bearer ${API_KEY}`,
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceNew.get(`api/1.0/users?page=${currentPage}&count=${pageSize}`);
    },
    follow(userId) {
        return instanceNew.post(`api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instanceNew.delete(`api/1.0/follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instanceNew.get(`api/1.0/profile/` + userId);
    },
    getStatus(userId) {
        return instanceNew.get(`api/1.0/profile/status/` + userId);
    },
    updateStatus(status) {
        return instanceNew.put(`api/1.0/profile/status`, {status: status});
    }
}



export const authAPI = {
    me() {
        return instanceNew.get(`api/1.0/auth/me`);
    },
    login(email, password, rememberMe = false, captcha=null) {
        return instanceNew.post(`api/1.0/auth/login`, {email, password, rememberMe,captcha}).then(response => response).catch(error=>{
            console.log(error)
        })
    },
    logout() {
        return instanceNew.delete(`api/1.0/auth/login`);
    },
    captchaUrl() {
        return instanceNew.get("api/1.0/security/get-captcha-url");
    }
}
