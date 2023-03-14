
export type DialogsType = {
    id: number
    userName: string
    hasNewMessages: boolean
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: PhotosType
}

export type MessagesType={

id :string
    body:string
    translatedBody: string
    addedAt: string
    senderId:number
    senderName:string
    recipientId:number
    viewed:boolean
}
export type PhotosType = {
    small: null|string
    large: null|string
}