import React from 'react';
import { TabHeaderStyle } from "./style";

const TabHeader = ({onClick, index}) => {
  return (
    <TabHeaderStyle>
      <div className="tab_title">
        <div onClick={() => onClick(0)}>Educators</div>
        <div onClick={() => onClick(1)}>Authors</div>
        <div onClick={() => onClick(2)}>Students</div>
      </div>
      <div className="indicator-holder" >
        <div className={ `indicator ${index === 0 ? "active" : ""}`}/>
        <div className={ `indicator ${index === 1 ? "active" : ""}`}/>
        <div className={ `indicator ${index === 2 ? "active" : ""}`}/>
      </div>
    </TabHeaderStyle>
  );
};

export default TabHeader;
