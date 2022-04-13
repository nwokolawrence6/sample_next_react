import PropTypes from 'prop-types';
import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { AboutHeader } from '../../../components/styles/AboutHeaderWrapper';
import NavBar from '../NavBar';

const AboutUsHeading = ({ text }) => (
  <AboutHeader>
    <NavBar NavTextColor={'tranparant'} />

    <div className="about-header blur">
      <Segment basic>
        <Header inverted as="p">
          About us
        </Header>
        <Header inverted as="h2">
          Cloudbooks is an online <br />
          digital platform
        </Header>
        <Header inverted as="span">
          Your one spot platform for publishing, marketing and distribution{' '}
          <br />
          of textbooks, monographs and related articles
        </Header>
      </Segment>
    </div>
  </AboutHeader>
);

AboutUsHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default AboutUsHeading;
