import React from 'react';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { TabControlStyle } from "./style";
const TabControl = ({onClick, index}) => {
  return (
    <TabControlStyle>
      <FiChevronLeft className={ index === 0 && "notActive" } onClick={()=> index !== 0 && onClick('-')}/>
      <FiChevronRight className={ index === 2 && "notActive" }  onClick={() => index !== 2 &&onClick('+') }/>
    </TabControlStyle>
  );
};

export default TabControl;
