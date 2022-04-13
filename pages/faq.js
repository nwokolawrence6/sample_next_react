import React, {Component} from 'react'
import {
  Segment,
  Grid,
  Header,
  Divider,
  Button,
  Icon,
  Accordion
} from 'semantic-ui-react'
import ResponsiveContainer from "../components/ResponsiveContainer";
import HomepageHeading from "../components/LandingGroup/Home/HomepageHeading";
import Page from "../components/Page";
import Head from "next/dist/next-server/lib/head";


class Faq extends Component {

  state = {activeIndex: 0};

  handleClick = (e, titleProps) => {
    const {index} = titleProps;
    const {activeIndex} = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({activeIndex: newIndex})
  }

  render() {
    const {activeIndex} = this.state;

    return (
      <Page>
        <Head>
          <title>Welcome to cloudbooks.ng || About Us</title>
        </Head>
        <ResponsiveContainer Header={HomepageHeading}>
          <Segment basic>
            <Grid container stackable>
              <Grid.Row>
                <Grid.Column className="abt-col2" width='6'>
                  <Divider horizontal><h2>FAQ</h2></Divider>

                  <h4>Textbooks.ng is an online digital e-bookstore, publishing and distribution platform for Nigeria
                    universities textbooks. We gives the Nigerian teaching author’s access to harness the power of the
                    mobile digital technology to make it easier and cheaper for publishing their textbooks which out
                    worrying about the cost of publishing, printing and distribution. </h4>
                  <div className='mission'>
                    <p>Our mission is providing highest quality web solutions at affordable prices At the end of the day
                      we are powered by the belief. </p>
                  </div>
                </Grid.Column>

                <Grid.Column className='contact-form' width='10'>
                  <h3>Questions People Ask Us</h3><Divider/>
                  <Accordion fluid styled className="accord">
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                      <Icon name='dropdown'/>
                      1. What percentage in amount is the cost of publishing and printing of your textbooks?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                      <ul>
                        <li>0%~20% of total cost of sale</li>
                        <li>20%~40% of total cost of sale</li>
                        <li>40%~60% of total cost of sale</li>
                        <li>60%~80% of total cost of sale</li>
                      </ul>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                      <Icon name='dropdown'/>
                      2. After publishing your first books, how long does it take you to publish a second edition of the
                      textbook </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                      <ul>
                        <li>1~3 years</li>
                        <li>3~6 years</li>
                        <li>9~12 years</li>
                      </ul>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                      <Icon name='dropdown'/>
                      3. If cost of publishing and printing is eliminated for you as Author by using our information
                      communication technology e-bookstore digital platform how long will it take to have a second edition
                      of your textbook? </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                      <ul>
                        <li> 1~2 years</li>
                        <li> 2~4 years</li>
                        <li> 4~6 years</li>
                        <li> 6~8 years</li>
                        <li> 8~10 years</li>
                      </ul>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                      <Icon name='dropdown'/>
                      4. If given access to our digital online e-bookstore platform to be able to sell your textbooks, to
                      all University students at no cost of publishing and printing, will you like to convert all your
                      authored textbooks to digital e-books platform? </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                      <p>A) IF YES, WHY?</p>
                      <p>B) IF NO, WHY?</p>
                    </Accordion.Content>

                  </Accordion>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Segment>


          <Segment basic className='abt-seg'>

            <Header inverted textAlign='center' as='h3'>Join Our Happy Clients And Get Access To Our
              Entire<br/> Collection Of ebooks For The Price Of One </Header>

            <span>Join cloudbook.ng is risk free!!</span>
            <Button basic inverted>
              Register now <Icon name='long arrow alternate right'/>
            </Button>

          </Segment>
        </ResponsiveContainer>
      </Page>
    )
  }
}


export default Faq;
