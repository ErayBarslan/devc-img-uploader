import React from 'react'
import styled from 'styled-components'
import { vars } from '../styles/Global'

const Loading = () => {
  return (
    <LoadContainer>
      <h1>Uploading...</h1>
      <div className='upload-bar'>
        <div className='anim-bar' />
      </div>
    </LoadContainer>
  )
}

const LoadContainer = styled.div`

h1 {
  font-size: 18px;
  color: #4F4F4F;
  font-weight: 500;
}

.upload-bar {
  background-color: #F2F2F2;
  height: 6px;
  border-radius: 8px;
  margin-top: 31px;
  position: relative;
  overflow: hidden;

  .anim-bar {
    height: 6px;
    width: 101px;
    background-color: ${vars.blue};
    border-radius: 8px;
    position: absolute;
    animation: .9s linear 0s infinite uploadAnim;
  }
}

@keyframes uploadAnim {
  from {
    left: -101px;
  }

  to {
    left: 100%;
  }
}
`

export default Loading