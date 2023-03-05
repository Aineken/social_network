import axios from "axios";
import {toast} from "react-toastify";

const API_KEY = "dce74158-9bce-4703-8c6c-4d14a7718dea";

const instanceNew = axios.create({
    withCredentials: true,
    headers: {
        "Authorization": `Bearer ${API_KEY}`,
    }
});

const mainUrl = `${window.location.origin}/api/1.0`;

// console.log(process.env.PUBLIC_URL || mainUrl)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceNew.get(`${mainUrl}/users?page=${currentPage}&count=${pageSize}`);
    },
    follow(userId) {
        return instanceNew.post(`${mainUrl}/follow/${userId}`).then(response => response).catch(error => {
            toast.warn("please Log in")
        })

    },
    unfollow(userId) {
        return instanceNew.delete(`${mainUrl}/follow/${userId}`).then(response => response).catch(error => {
            toast.warn("please Log in")
        })
    },
    getProfile(userId) {
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
    },
    updatePhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo)
        return instanceNew.put(`${mainUrl}/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateInfo(newInfo) {
        return instanceNew.put(`${mainUrl}/profile`, newInfo);
    },
}


export const authAPI = {
    me() {
        return instanceNew.get(`${mainUrl}/auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instanceNew.post(`${mainUrl}/auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => response).catch(error => {
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


export const messagesAPI = {
    startChatting(userId){
        return instanceNew.put(`${mainUrl}/dialogs/${userId}`);
    },
    getAllDialogs() {
        return instanceNew.get(`${mainUrl}/dialogs`);
    },
    getDialogs(userId,page=1,count=10){
        return instanceNew.get(`${mainUrl}/dialogs/${userId}/messages?page=${page}&count=${count}`);
    },
    sendMessage(userId,body){
        return instanceNew.post(`${mainUrl}/dialogs/${userId}/messages`, {body:body}).catch(error=>{
            console.log(error)
        })
    },
    deleteMessage(messageId){
        return instanceNew.delete(`${mainUrl}/messages/${messageId}`);
    }
}