import PropTypes from 'prop-types'
import React from 'react'
import {
	Button,
	Grid,
	Header,
	Image,
	Icon,
	Segment
} from "semantic-ui-react";
import books from '../../../assets/images/books.png'


const HomepageHeading = ({ mobile }) => (
    <div>
      <Segment
        textAlign='center'
        vertical
      >
          <Grid container stackable verticalAlign='middle' className="Wrapper cover header-content">
          <Grid.Row >
            <Grid.Column width={10}>
            <Header
                  as='h2'
                  style={{
                    fontSize: mobile ? '1em' : '4em',
                    marginBottom: 0,
                    marginTop: mobile ? '1.5em' : '1em',
                    textAlign: mobile ? 'center' : 'left',
                    fontWeight: mobile ? '200' : '800',
                    color: '#222222'
                  }}
                >Digital <span style={{color: '#43ab67'}}>Library</span></Header>
                <Header
                  as='h2'
                  style={{
                    fontSize: mobile ? '0.8em' : '18px',
                    marginTop: mobile ? '0.5em' : '0.2em',
                    textAlign: mobile ? 'center' : 'left',
                    color: '#656565',
                    fontWeight: mobile ? '100' : '100'
                  }}
                > An online digital platform for the publishing, marketing and distribution of <br/> textbooks , monographs and related articles.
                </Header>
            </Grid.Column>
            <Grid.Column width='5'>
              <Image src={books} size='huge'/>
            </Grid.Column>
        </Grid.Row>
      </Grid>
      </Segment>
  </div>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading
