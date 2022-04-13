import React from 'react';
import {
  Segment,
  Grid,
  Header,
  Image,
  Divider,
  Button,
  Icon,
} from 'semantic-ui-react';
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import img1 from '../assets/new-illustrations/703.jpg';
import ResponsiveContainer from '../components/ResponsiveContainer';
import AboutUsHeading from '../components/LandingGroup/about/AboutUsHeading';
import { AboutPageWrapperStyle } from '../components/styles/AboutPageWrapper';
import LOGO from '../assets/new-illustrations/cloudbooks.png';
import Page from '../components/Page';
import Head from 'next/head';
import { authRoute } from '../lib/config';

const AboutUs = () => (
  <Page>
    <Head>
      <title>Welcome to cloudbooks.ng || About Us</title>
      <meta
        name="og:About Us"
        property="og:About Us"
        content="At CloudBooks, your content always go where it is needed. This way, content creators are able to manage and visualise the performance of their contents and by so doing confer upon them the unique ability of publishing the perfect content for a larger community of readers"
      />
      <meta
        name="description"
        content="An online digital platform for the publishing, marketing and distribution of textbooks, monographs and related articles."
      />
    </Head>
    <ResponsiveContainer Header={AboutUsHeading}>
      <AboutPageWrapperStyle>
        {/* <div className="logo">
                    <div className="image">
                        <img src={ LOGO } alt=""/>
                    </div>
                    <div className="txt">
                        <div>
                            <a href="https://fb.me/officalcloudbooks"><FaFacebookSquare/></a>
                            <a href="https://twitter.com/cloudbookonline"><FaTwitter/></a>
                            <a href="https://www.linkedin.com/in/officalcloudbooks"><FaLinkedin/></a>
                            <a href="https://www.instagram.com/cloudbooksonline"><FaInstagram/></a>
                        </div>
                        <p>
                            An online digital platform for the publishing, marketing and distribution of textbooks, monographs and
                            related articles.
                        </p>
                        <em>
                            At CloudBooks, your content always go where it is needed. This way, content creators are
                            able to manage<br/>
                            and visualise the performance of their contents and by so doing confer upon them the unique
                            ability of
                            publishing the perfect content for a larger community of readers.
                        </em>
                    </div>
                </div> */}
        <Segment basic className="about__row2">
          <Grid stackable>
            <Grid.Row>
              <Grid.Column className="abt-col2">
                <h2>What is cloudbooks?</h2>

                <h4>
                  <span style={{ fontWeight: 800, color: '#444' }}>
                    CloudBooks.ng
                  </span>{' '}
                  is an online digital space that offers you unfettered access
                  to a complete and most secured platform for publishing and
                  distributing all forms of content from textbooks to
                  monographs,journals and all other related articles that cuts
                  across all disciplines and genres. Its platform helps both new
                  and seasoned authors or publishers to produce , import, sell
                  and manage all their content creations while also ensuring
                  easy access to such vital contents for all types of user or
                  reader. <br /> <br />
                  We give the Nigerian teaching authors access to harness the
                  power of the mobile digital technology to make it easier and
                  cheaper for publishing their textbooks without worrying about
                  the cost of publishing, printing and distribution.{' '}
                </h4>
                {/* <div className="mission">
                  <p>
                    Our mission is providing highest quality web solutions at
                    affordable prices At the end of the day we are powered by
                    the belief.{' '}
                  </p>
                </div> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment basic className="seg-col3">
          <Grid columns="equal" stackable>
            <Grid.Row>
              <Grid.Column className="abt-col3">
                <h2>What we do at cloudbooks.ng</h2>

                <h5>01</h5>
                <h4>
                  <span>We help authors and publishers</span> <br /> by taking
                  their contents to an audience where such contents are needed
                  and by so doing we have made ourselves the number one stop for
                  every reader and researcher who is seeking access to trusted
                  content in the form of books, monographs and all other related
                  articles.
                </h4>
                <br />
                <br />
                <h5>02</h5>
                <h4>
                  <span> Using our digital management model,</span> <br />
                  we have become the first choice for all authors and publishers
                  who are seeking to get their content out to a wider audience
                  but are often held back from doing so as a result of the fear
                  of piracy and an unauthorised usage and access to their
                  intellectual work and this is because at ABC, the protection
                  of your intellectual property is our utmost concern.
                </h4>
                <br />
                <br />
                <h5>03</h5>
                <h4>
                  <span>
                    To continuously ensure that through our support services
                    like;
                  </span>
                  <br />
                  <ul>
                    <li>
                      Access to published contents(for users) and
                      publishing/distribution network(for authors) in a manner
                      that is easily navigable and secure.
                    </li>
                    <li>Provision of User/Purchase feedback.</li>
                    <li>
                      Recommendations and insights on all content products.
                    </li>
                  </ul>
                  That we remain your number one stop for the most secured
                  service delivery when it comes to digital publishing, content
                  distribution and access to the largest content platform ever.
                </h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment basic className="abt-seg">
          <Header inverted textAlign="center" as="h3">
            Join Our Happy Clients And Get Access To Our Entire
            <br /> Collection Of ebooks at an affordable price
          </Header>

          {/* <span>
            <a className="join_us" href={authRoute}>
              Join CloudBooks.ng
            </a>{' '}
            is risk free!!
          </span> */}
          {/* <Button basic>
            Register now <Icon name="long arrow alternate right" />
          </Button> */}
          <button>Join now</button>
        </Segment>
      </AboutPageWrapperStyle>
    </ResponsiveContainer>
  </Page>
);

export default AboutUs;
