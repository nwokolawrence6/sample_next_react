import styled from "styled-components";
import AuthorImage from "../../assets/v2/author.png";
import Bg from '../../assets/v2/background.jpg'

const Container = styled.div`
.tab_container {
 margin-left: 100px;
 margin-right: 100px;
     @media (max-width: 746px) { 
      margin-left: auto;
      margin-right: auto;
     }
}

 height: 100vh;
  @media (max-width: 1090px) { 
    height: 60vh !important;
  }
 background: url(${ Bg }) no-repeat top center;
 background-size: cover;
 padding: 50px;
 h1 {
  color: #eff3f6;
  font-weight: normal;
  text-align: center;
  font-size: 32px;
  text-transform: none;
  margin-bottom: 0.8em;
  span {
    color: #eff3f6;
    font-weight: bolder;
  }
 }
 
#root {
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.trans-main > div {
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 800;
  will-change: transform, opacity;
  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
}
`

const TabHeaderStyle = styled.div`
.tab_title {
color: #eff3f6;
display: flex;
cursor: pointer;
margin-bottom: 13px;
justify-content: center;
 > div {
 	@media (max-width: 834px) { 
	   margin-right: 9% !important;
     margin-left: 9% !important;
     font-size: 18px;
	}
@media (max-width: 360px) { 
	  font-size: 16px;
	}
  margin-right: 4%;
  margin-left: 4%;
  font-size: 22px;
 }
}

 .indicator-holder {
 display: flex;
justify-content: center;

margin-right: -27px;
margin-left: -27px;
 .indicator {
    width: 14em;
    height: 4px;
    background: #0e1063;
    cursor: pointer;
     }
 }
   .active  {
     background: #474cff !important;
    }
`
const TabContentStyle = styled.div`
flex-wrap: wrap;
justify-content: center;
align-items: center;
.right {
  flex: 1;
    @media (max-width: 540px) { 
   display: none;
  }
  background: url(${ props => props.image }) no-repeat;
  min-width: 16em;
  background-size: contain;
  height: 32vw;
}
.left {

h1 {
  text-align: left;
}
  p {
      color: #eff3f6;
      font-size: 18px;
      max-width: 77%;
      min-width: 16em;
  }
text-align: left;
 align-items: flex-start;
 flex:1;
}
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 35%;
    height: auto;
  }
`

const TabControlStyle = styled.div`
display: flex;
position: relative;
left: 75%;
top: 56%;
.notActive {
  color: #363756;
   border: 1px solid #363756;
}
svg {
 cursor: pointer;
  border-radius: 100px;
  border: 1px solid #ece6ea;
  color: #ece6ea;
  font-size: 50px;
  margin-right: 10px;
}
`
export {
  Container ,
  TabHeaderStyle ,
  TabContentStyle ,
  TabControlStyle
}
