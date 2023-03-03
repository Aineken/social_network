import React, {useEffect, useState} from 'react';


const InputPhoto = ({updatePhoto}) => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updatePhoto(selectedFile);
        setSelectedFile(undefined)

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