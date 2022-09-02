import styled from "styled-components";


const controlMarginIcons = (index) =>{
  console.log(index)
  console.log(`0px 0px 0px ${index}0px`)
  
  switch(index){
    case 0: return `0px 0px 0px 110px`
    case 1: return `15px 0px 0px 165px`
    case 2: return `57px 0px 0px 200px`
    case 3: return `110px 0px 0px 210px`
  }
}

export const IconDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #F8D869;
  box-shadow: 2px 2px 2px #888888;
  margin: ${props => controlMarginIcons(props.margin)}
`

export const Container = styled.div`
  margin: 50px 0px 0px 50px;
  position: relative;

  &:hover ${IconDiv}{
     
     background-color: red;
   
  }

  & img {
    width: 150px;
    height: 150px;
    padding: 50px;
    border-radius: 50%;
}
`




