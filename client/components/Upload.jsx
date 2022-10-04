import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { vars } from '../styles/Global'
import { useDropzone } from 'react-dropzone'

const Upload = ({ setImageUplaoded, setImageUrl, setLoading }) => {

  const [selectedFile, setSelectedFile] = useState("")

  const submitButton = useRef()

  const fileInputHandler = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setSelectedFile(reader.result)
    }
  }

  useEffect(() => {
    selectedFile && submitButton.current.click()
  }, [selectedFile])

  const uploadImage = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const res = await fetch('/upload', {
        method: 'POST',
        body: JSON.stringify({ data: selectedFile }),
        headers: { 'Content-Type': 'application/json' }
      })
      const json = await res.json()

      setImageUrl(json.url)
      json && setImageUplaoded(true)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setSelectedFile(reader.result)
    }
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false
  })


  return (
    <UploadContainer>
      <h1>Upload your image</h1>
      <p className="file-type">File should be Jpeg, Png, ...</p>
      
      <div className={isDragActive ? "drag-container drag-active" : "drag-container"} {...getRootProps()}>
        <input {...getInputProps} />
        <img src="/image.svg" alt="" />
        <p className='drag-text'>Drag & Drop your image here</p>
      </div>

      <p className='or-text'>Or</p>

      <form onSubmit={uploadImage}>
        <label htmlFor="imgInput">Choose a file</label>
        <input type="file" name="image" onChange={fileInputHandler} style={{ display: "none" }} id="imgInput" />
        <button type="submit" ref={node => submitButton.current = node} style={{ display: "none" }} />
      </form>
    </UploadContainer>
  )
}

const UploadContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 4px;

h1 {
  font-size: 18px;
  font-weight: 500;
  color: #4F4F4F;
  text-align: center;
  margin-top: 4px;
}

.file-type {
  font-size: 10px;
  color: #828282;
  margin-top: 16px;
  text-align: center;
}

.drag-container {
  margin-top: 30px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #F6F8FB;
  outline: 1px dashed #97BEF4;
  border-radius: 12px;

  input {
    display: none;
  }

  img {
    max-width: 114px;
  }

  .drag-text {
    font-size: 12px;
    color: #BDBDBD;
    margin: 36px 0 4px 0;
    text-align: center;
  }
}

.drag-active {
  opacity: .9;
  outline: 2px dashed #97BEF4;
}

.or-text {
  color: #BDBDBD;
  font-size: 12px;
  margin-top: 19px;
}

form {
  margin-top: 23px;
}

label {
  background-color: ${vars.blue};
  color: white;
  font-size: 12px;
  padding: 8px 16px;
  border-radius: ${vars.btnRadius};
  cursor: pointer;
}

label:active {
  opacity: .8;
}
`

export default Upload