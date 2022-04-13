import React , { Component } from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import NewHomeHeading from '../components/LandingGroup/Home/NewHomeHeading';
import { NewIndexWrapper } from '../components/styles/NewIndexStyles';
import authors from '../assets/images/te.png';
import person from '../assets/v2/person.jpg';
import Page from '../components/Page';
import Head from "next/head";
import Tabs from '../components/Swiper/Tabs'
import { authRoute } from "../lib/config";
const rowData1 = [
  // {
  //   icon : authors ,
  //   heading : 'Authors' ,
  //   bodyText : 'Fiction and non-fiction writers alike can create, upload, and sell their books through our platform' ,
  //   classNames : 'col1'
  // } ,
  // {
  //   icon : educator ,
  //   heading : 'Educators' ,
  //   bodyText :
  //     'Easily publish textbooks, course materials, and research. Sell your work on CloudBooks.com or buy the books you need immediately.' ,
  //   classNames : 'col2'
  // } ,
  // {
  //   icon : noneProfit ,
  //   heading : 'Nonprofits' ,
  //   bodyText : 'Easily create a book, calendar, or photo book to raise money and awareness for your organization.' ,
  //   classNames : 'col3'
  // }
];
const rowData3 = [
  {
    icon : authors ,
    heading : 'Col 1' ,
    bodyText :
      'Whether your readers use a Android tablets, , iPhone,  iPad, and your home computer or some other e-Reader, you can quickly and easily create an eBook for everyone.' ,
    classNames : 'col1'
  } ,
  {
    heading : 'Col 2' ,
    bodyText :
      ' Millions of readers purchase ebooks each day. By publishing an ebook, you can more easily share your unique knowledge and ideas with readers all over the world.' ,
    classNames : 'col2'
  } ,
  {
    icon : authors ,
    heading : 'Col 3' ,
    bodyText :  'CloudBooks is a company committed to helping you sell more books and reach more readers. Whether you are out to make your fortune, or simply share an idea, CloudBooks empowers authors, publishers, educators, and businesses to bring knowledge and expertise to readers more easily than ever before.' ,
    classNames : 'col3'
  }
];

class Index extends Component {
  render() {
    return (
      <Page>
        <Head>
          <title>Welcome to cloudbooks.ng || Home</title>
          <meta name="og:Home" property="og:Home"
                content="CloudBooks.ng offers you the expertise, independence and flexibility to create, buy and share what you love with the world. We are passionate about providing a remarkable experience for you to tell stories, share knowledge and fulfill your creative potential."/>
          <meta name="description"
                content="CloudBooks.ng offers a wide array of standard and premium services which include but is limited to marketing of educational materials, proof reading, Book cover designing, online advertisement and others."/>
        </Head>
        <ResponsiveContainer Header={ NewHomeHeading } btnColors={ '#fff' }>
          <NewIndexWrapper>
              <div className="home_new">
                  <section className="section_1">
                      <div className="right_section">
                          <div className="sideImage"/>
                          {/*<img src={Book_Two} alt=""/>*/}
                      </div>
                      <div className="left_section">
                        <h1>Why choose <p>CloudBook?</p></h1>
                        <div className="content_new">
                          <p>
                            <span>CloudBooks.ng</span>  offers a wide array of standard and premium services which include but is not limited to marketing of educational materials, proof reading, Book cover designing, online advertisement and others.
                          </p>
                          <p>
                            <span>CloudBooks.ng</span> offers you the expertise, independence and flexibility to create, buy and share what you love with the world. We are passionate about providing a remarkable experience for you to tell stories, share knowledge and fulfill your creative potential.
                          </p>
                        </div>
                      </div>
                  </section>
                <section className="section_2">
                  <h1>We believe that</h1>
                  <div className="content">
                    <span>
                      Access to adequate library services and resources is essential for the attainment of superior academic skills in post-secondary education regardless of where students, faculty or programs are located.
                      Members of the distance learning community are entitled to library services and resources equivalent to those provided for students and faculty in traditional campus settings.
                    </span>
                  </div>
                </section>
              </div>
            <Tabs/>
            <div className="more_info">
              <h1>Reach your audience. Grow your readership.</h1>
              <div className="content">
                <div className="right same">
                  Whether your readers use a Android tablets, , iPhone,  iPad, and your home computer or some other e-Reader, you can quickly and easily create an eBook for everyone.
                  <p>Millions of readers purchase ebooks each day. By publishing an ebook, you can more easily share your unique knowledge and ideas with readers all over the world.</p>
                </div>
                <div className="left same">
                  CloudBooks is a company committed to helping you sell more books and reach more readers. Whether you are out to make your fortune, or simply share an idea, CloudBooks empowers authors, publishers, educators, and businesses to bring knowledge and expertise to readers more easily than ever before.
                </div>
              </div>
            </div>
            <div className="last_row">
              <div className="right">
                <img src={person} alt="" style={{height: "100%"}}/>
                <div className="sideBorder"/>
              </div>
              <div className="left">
                <h3><span>Are you</span><p>Ready to sell your books?</p></h3>
                <p className="join_us">JOIN US NOW AND SHOWCASE YOUR BOOKS IN AN ATTRACTIVE AND STYLISH</p>
                <p className="action_join"><a href={authRoute}>Join Now</a></p>
              </div>
            </div>
          </NewIndexWrapper>
        </ResponsiveContainer>
      </Page>
    );
  }
}

export default Index;
