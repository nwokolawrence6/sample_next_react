import React, { useState, useCallback } from 'react'
import { Container } from "./style";
import { useTransition, animated } from 'react-spring'
import TabContent from "./TabContent";
import TabHeader from "./TabHeader";
import TabControl from "./TabControl";
import AuthorImage from "../../assets/v2/author.png";
import StudentsImage from "../../assets/v2/reader3-min.png";
import EducatorsImage  from "../../assets/v2/author-min.png";


const tabs = {
  author: {
    image: AuthorImage,
    content: "Fiction and non-fiction writers alike can create, upload, and sell their books through our platform.",
    title: "Author"
  },
  educators: {
    image: EducatorsImage,
    content: "Easily publish textbooks, course and research materials . Sell your work on CloudBooks.com or buy the books you need immediately.",
    title: "Educators"
  },
  students: {
    image: StudentsImage,
    content: "Students have found e-books more convenient, accessible and handy in their quest for academic enlightenment and this and more is what our platform has to offer.",
    title: "Students"
  },
}

const pages = [
  ({ style }) => <animated.div style={{ ...style}}>
    <TabContent {...tabs.educators}/>
  </animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>
    <TabContent {...tabs.author}/>
  </animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>
    <TabContent {...tabs.students}/>
  </animated.div>,
]

const InfoTabs = () => {
  const [index, set] = useState(0)
  const onClick = useCallback((data) => set(state => (data === "+" ? state + 1: state -1 ) % 3), [])

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  })

  return (
    <Container>
      <h1><span>Who is </span>Cloudbooks For ?</h1>
      <TabHeader index={index} onClick={set}/>
      <div className="root">
        <div className="tab_container">
          <div className="trans-main">
            {transitions.map(({ item, props, key }) => {
              const Page = pages[item]
              return <Page key={key} style={props} />
            })}
          </div>
        </div>
      </div>
      <TabControl index={index} onClick={onClick}/>
    </Container>
  );
};

export default InfoTabs;
