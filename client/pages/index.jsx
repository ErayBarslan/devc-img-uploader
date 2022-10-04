import Upload from '../components/Upload'
import Display from '../components/Display'
import Loading from '../components/Loading'
import styled from 'styled-components'
import React, { useState } from 'react'

export default function Home() {
  const [imageUploaded, setImageUplaoded] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)

  return (<>
    <StyledContainer>
      {!imageUploaded && !loading &&
        <Upload
          setImageUplaoded={setImageUplaoded}
          setImageUrl={setImageUrl}
          setLoading={setLoading} />}
      {loading &&
        <Loading />}
      {imageUploaded &&
        <Display imageUrl={imageUrl} />}
    </StyledContainer>
  </>)
}

const StyledContainer = styled.main`
background-color: white;
padding: 32px;
box-shadow: 0 4px 12px 2px rgba(0, 0, 0, 0.1);
border-radius: 12px;
max-width: 402px;
width: 95vw;
`
