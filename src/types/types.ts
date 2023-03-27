export type DialogsType = {
    id: number
    userName: string
    hasNewMessages: boolean
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: PhotosType
}
export type MessagesType = {

    id: string
    body: string
    translatedBody: string
    addedAt: string
    senderId: number
    senderName: string
    recipientId: number
    viewed: boolean
}
export type PhotosType = {
    small: null | string
    large: null | string
}
export type ContactsType = {
    [key: string]: string;
    skype: string
    vk: string
    facebook: string
    icq: string
    email: string
    googlePlus: string
    twitter: string
    instagram: string
    whatsApp: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type UsersType = {
    id: number
    name: string
    status: string
    followed:boolean
    photos: PhotosType
}