import axios from "axios";

const API_KEY="dce74158-9bce-4703-8c6c-4d14a7718dea";

const instanceNew = axios.create({
    withCredentials: true,
    headers: {
        "Accept": 'application/json',
        "Authorization":`Bearer ${API_KEY}`,
    }
});

const mainUrl=`${window.location.origin}/api/1.0`;



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceNew.get(`${mainUrl}/users?page=${currentPage}&count=${pageSize}`);
    },
    follow(userId) {
        return instanceNew.post(`${mainUrl}/follow/${userId}`)
    },
    unfollow(userId) {
        return instanceNew.delete(`${mainUrl}/follow/${userId}`)
    },
    getProfile(userId) {
        console.log(userId)
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instanceNew.get(`${mainUrl}/profile/` + userId);
    },
    getStatus(userId) {
        return instanceNew.get(`${mainUrl}/profile/status/` + userId);
    },
    updateStatus(status) {
        return instanceNew.put(`${mainUrl}/profile/status`, {status: status});
    }
}



export const authAPI = {
    me() {
        return instanceNew.get(`${mainUrl}/auth/me`);
    },
    login(email, password, rememberMe = false, captcha=null) {
        return instanceNew.post(`${mainUrl}/auth/login`, {email, password, rememberMe,captcha}).then(response => response).catch(error=>{
            console.log(error)
        })
    },
    logout() {
        return instanceNew.delete(`${mainUrl}/auth/login`);
    },
    captchaUrl() {
        return instanceNew.get(`${mainUrl}/security/get-captcha-url`);
    }
}
