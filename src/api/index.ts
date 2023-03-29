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



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceNew.get(`${mainUrl}/users?page=${currentPage}&count=${pageSize}`);
    },
    follow(userId:number) {
        return instanceNew.post(`${mainUrl}/follow/${userId}`).then(response => response).catch(error => {
            toast.warn("please Log in")
        })

    },
    unfollow(userId:number) {
        return instanceNew.delete(`${mainUrl}/follow/${userId}`).then(response => response).catch(error => {
            toast.warn("please Log in")
        })
    },
    getProfile(userId:number) {
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId:number) {
        return instanceNew.get(`${mainUrl}/profile/` + userId);
    },
    getStatus(userId:number) {
        return instanceNew.get(`${mainUrl}/profile/status/` + userId);
    },
    updateStatus(status:string) {
        return instanceNew.put(`${mainUrl}/profile/status`, {status: status});
    },
    updatePhoto(photo:File) {
        const formData = new FormData();
        formData.append("image", photo)
        return instanceNew.put(`${mainUrl}/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateInfo(newInfo:string) {
        return instanceNew.put(`${mainUrl}/profile`, newInfo);
    },
}


export const authAPI = {
    me() {
        return instanceNew.get(`${mainUrl}/auth/me`);
    },
    login(email:string, password:string, rememberMe = false, captcha:string|undefined) {
        return instanceNew.post(`${mainUrl}/auth/login`, {
            email,
            password,
            rememberMe,
            captcha
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
    startChatting(userId:number) {
        return instanceNew.put(`${mainUrl}/dialogs/${userId}`);
    },
    getAllDialogs() {
        return instanceNew.get(`${mainUrl}/dialogs`);
    },
    getDialogs(userId:number, page = 1, count = 10) {
        return instanceNew.get(`${mainUrl}/dialogs/${userId}/messages?page=${page}&count=${count}`);
    },
    sendMessage(userId:number, body:string) {
        return instanceNew.post(`${mainUrl}/dialogs/${userId}/messages`, {body: body});
    },
    deleteMessage(messageId:number) {
        return instanceNew.delete(`${mainUrl}/dialogs/messages/${messageId}`);
    }
}