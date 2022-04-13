import styled from 'styled-components'

const Tab = styled.div`
.tabMenu {
  border-bottom: 1px solid rgba(0,0,0,0.2);
  margin-bottom: 1em;
}
 
  .tab {
     position: relative;
     top: 3px;
    background: none;
    margin-top: 30px;
    color: rgba(0,0,0,0.87);
    display: inline-block;
    padding: 10px;
    border-bottom: 3px solid ${props => props.theme.secondaryColorDark};
    border-radius: 3px 3px 0 0;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover, &.active {
    
      border-top: 1px solid rgba(0,0,0,0.2);
    border-left: 1px solid rgba(0,0,0,0.2);
    border-right: 1px solid rgba(0,0,0,0.2);
    border-bottom: 5px solid #f7f7f7;
    }
      
      
  }
  .tab:first-child {
    margin-right: 2em;
  }
    
    .content {
    padding: 40px 10px;
    color: rgba(0,0,0,0.6);
    background: rgb(241,241,241);
    position: relative;
    top: -13px
   }
    

`;

export {
  Tab
}