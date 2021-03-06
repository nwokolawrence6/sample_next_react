import styled from 'styled-components';
const RailLoadingWrapper = styled.div`
.animationLoading{
  background: #fff;
  border: 1px solid;
  border-color: #e5e6e9;
  border-radius: 3px; 
  display: block;
  height: 324px;
  width: 494px;
  padding: 12px;
}
@keyframes animate {
     0% {
     background-position: -468px 0
   }
   100% {
     background-position: 468px 0
   }

}

#container{
  width:100%;
  height:30px;
}
#one,#two,#three,#four,#five,#six
{
  position:relative;
  background-color: #CCC;
  height: 6px;
  animation-name: animate; 
  animation-duration: 2s; 
  animation-iteration-count: infinite;
  animation-timing-function: linear;   
  background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
  background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  -webkit-background-size: 800px 104px;  
}

#one{  
  left:0; 
  height: 40px;
  width: 40px;  
}

#two{
  left:50px;
  top:-33px;
  width: 25%;
}

#Three{
  left:50px;
  top:-20px;
  width: 15%;
}

#four{
  left:0px;
  top:30px;
  width: 80%;
}

#five{
  left:0px;
  top:45px;
  width: 90%;
}

#six{
  left:0px;
  top:60px;
  width: 50%;
}
`
export {
	RailLoadingWrapper
}
