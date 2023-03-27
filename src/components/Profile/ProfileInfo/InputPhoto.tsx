import React, {useEffect, useState} from 'react';


type PropsType= {
    updatePhoto: (photo: File) => void
}

type StateType={

}

const InputPhoto:React.FC<PropsType&StateType> = ({updatePhoto}) => {
    const [selectedFile, setSelectedFile] = useState<null | File>()
    const [preview, setPreview] = useState<undefined | string>()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e:React.ChangeEvent<HTMLInputElement>) => {

        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
        }

        if (e.target.files && e.target.files.length) {
            setSelectedFile(e.target.files[0]);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if(selectedFile){
        updatePhoto(selectedFile);
        setSelectedFile(undefined)
        }

    }

    return (
        <form  onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={onSelectFile}/>
            {selectedFile && <img src={preview} alt="preview"/>} <br/>
            {selectedFile && <button>Submit</button>}
        </form>
    )
}

export default InputPhoto;