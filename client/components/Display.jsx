import React from 'react'
import styled from 'styled-components'
import { vars } from '../styles/Global'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { HiCheck } from 'react-icons/hi'

const Display = ({ imageUrl }) => {
  return (
    <DisplayContainer>
      <div className='icon-holder'>
        <HiCheck className='check-icon' size={34}/>
      </div>
      <h1>Uploaded Successfully!</h1>
      <img src={imageUrl} alt={imageUrl} />
      <div className='url-container'>
        <p className='url-holder'>{imageUrl}</p>
        <CopyToClipboard text={imageUrl}>
          <button>Copy Link</button>
        </CopyToClipboard>
      </div>
    </DisplayContainer>
  )
}

const DisplayContainer = styled.div`
display: flex;
flex-direction: column;

.icon-holder {
  align-self: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #219653;
  display: flex;
  justify-content:center;
  align-items: center;

  .check-icon {
    color: white;
  }
}

h1 {
  font-size: 18px;
  font-weight: 500;
  color: #4F4F4F;
  align-self: center;
  text-align: center;
  margin-top: 10px;
}

img {
  border-radius: 12px;
  margin-top: 25px;
}

.url-container {
  display: flex;
  align-items: center;
  margin-top: 25px;
  padding: 1px;
  border-radius: ${vars.btnRadius};
  background-color: #F6F8FB;
  border: 1px solid rgba(224, 224, 224, 1);
}

.url-holder {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  font-size: 8px;
  color: #4F4F4F;
}

button {
  white-space: nowrap;
  font-size: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: ${vars.blue};
  color: white;
  cursor: pointer;
}

button:active {
  opacity: .8;
}
`

export default Display