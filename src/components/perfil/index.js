import React from 'react'
import { faTrashCan, faGear, faComment, faPen, faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

import { Container, IconDiv } from './styles'

export default function Perfil() {
    const IconInfo = [
        {id: 1, label: 'photo', icon: faImage},
        {id: 2, label: 'chat', icon: faComment},
        {id: 3, label: 'edit', icon: faPen},
        {id: 3, label: 'settings', icon: faGear},
  ]


  return (
    <Container>  
        <img alt='profile_img' src='https://i.pinimg.com/originals/0f/62/05/0f62058ee89389e00e7c6b0af5f7d984.jpg' />
        {
          IconInfo.map((item, index)=>{
            return(
              <IconDiv margin={index} key={item.id}>
                <FontAwesomeIcon icon={item.icon}/>
              </IconDiv>
            )
            
          })
        }
        
    </Container>
  )
}
