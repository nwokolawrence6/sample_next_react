import React from 'react';
import { TabContentStyle } from "./style";
const Authors = ({title, image, content}) => {
  return (
    <TabContentStyle image={image}>
      <div className="right"/>
      <div className="left">
        <h1>{ title }</h1>
        <p>{content}</p>
      </div>
    </TabContentStyle>
  );
};

export default Authors;
