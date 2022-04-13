import React from 'react';
import { Divider , Form , Grid , Header , Segment } from 'semantic-ui-react';
import Page from '../components/Page';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ContactUsHeading from '../components/LandingGroup/contact/ContactUsHeading';
import { ContactWrapper } from '../components/styles/ContactPageWrapperStyles';
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import * as yup from 'yup'
import { Formik } from 'formik'
import Head from "next/head";
import { ShowMessage , type } from "../components/Toaster/ShowMessage";
import { authRoute } from "../lib/config";
import LOGO from "../assets/new-illustrations/cloudbooks.png";
import { AboutPageWrapperStyle } from "../components/styles/AboutPageWrapper";
import { FaFacebookSquare , FaInstagram , FaLinkedin , FaTwitter } from "react-icons/fa";

const CONTACT_US_MUTATION = gql`
    mutation(
        $firstName: String
        $lastName: String
        $email: String
        $about: String){
        contactUs(data: {
            firstName:$firstName
            lastName: $lastName
            email: $email
            about: $about
        })
    }
`;

const ContactUs = () => {
  const [ contactUs , { loading } ] = useMutation( CONTACT_US_MUTATION );

  const handleSubmit = async ( data , { resetForm } ) => {
    await contactUs( {
      variables : {
        firstName : data.firstName ,
        lastName : data.lastName ,
        email : data.email ,
        about : data.about
      }
    } ).then( res => {
      ShowMessage( type.DONE , 'Inquiry sent successfully' );
      resetForm()
    } ).catch( err => {
      ShowMessage( type.ERROR , 'Unable to send inquiry try again later' );
    } );

  };

  const validationSchema = yup.object().shape( {
    firstName : yup.string().min( 3 ).required( "First Name is required" ) ,
    lastName : yup.string().min( 3 ).required( "Last Name is required" ) ,
    email : yup.string().email().required( "Email is required" ) ,
    about : yup.string().required( "Please provide a message" )
  } );

  return (
    <>
      <Head>
        <title>Welcome to cloudbooks.ng || Contact Us</title>
        <meta name="description" content="We love to hear from you. LET'S WORK TOGETHER"/>
        <meta name="og:Contact Us" property="og:Contact Us"
              content="We love to hear from you. LET'S WORK TOGETHER"/>
      </Head>
      <Formik
        initialValues={ {
          firstName : "" ,
          lastName : "" ,
          email : "" ,
          about : ""
        } }
        validationSchema={ validationSchema }
        onSubmit={ handleSubmit }
        render={ ( {
                     values : {
                       firstName ,
                       lastName ,
                       email ,
                       about
                     } ,
                     errors ,
                     touched ,
                     handleSubmit ,
                     handleChange
                   } ) => {
          return (
            <Page>
              <ResponsiveContainer Header={ ContactUsHeading }>
                <ContactWrapper>
                  <Segment basic>
                    <Grid container columns="equal" stackable>
                      <Grid.Row>
                        <Grid.Column className="contact-form">
                          <h3>
                            <span>W</span>e love to hear from you.
                          </h3>
                          <h1>LET'S WORK TOGETHER</h1>
                          <Divider/>
                          <Divider hidden/>
                          <Divider hidden/>
                          <Divider hidden/>
                          <Form onSubmit={ handleSubmit }>
                            <Form.Group widths="equal" style={ {
                              display : "flex" ,
                              flexDirection : "row" ,
                              justifyContent : "space-around"
                            } }>
                              <div style={ {
                                display : "flex" ,
                                flexDirection : "column" ,
                                width : "40vw"
                              } }>
                                <Form.Input fluid label="First name"
                                            placeholder="First name" name="firstName"
                                            value={ firstName }
                                            onChange={ handleChange }/>
                                <div style={ {
                                  color : 'red' ,
                                  marginTop : '1rem'
                                } }>{ touched.firstName ? errors.firstName : '' }</div>
                              </div>

                              <div style={ {
                                display : "flex" ,
                                flexDirection : "column" ,
                                width : "40vw"
                              } }>
                                <Form.Input fluid label="Last name"
                                            placeholder="Last name"
                                            name="lastName" value={ lastName }
                                            onChange={ handleChange }/>
                                <div style={ {
                                  color : 'red' ,
                                  marginTop : '1rem'
                                } }>{ touched.lastName ? errors.lastName : '' }</div>
                              </div>
                            </Form.Group>

                            <Form.Input fluid label="Email" placeholder="Email" name="email"
                                        value={ email } onChange={ handleChange }/>
                            <div style={ {
                              color : 'red' ,
                              marginTop : '1rem'
                            } }>{ touched.email ? errors.email : '' }</div>

                            <Form.TextArea label="About"
                                           placeholder="Tell us more about you..."
                                           name="about" value={ about }
                                           onChange={ handleChange }/>
                            <div style={ {
                              color : 'red' ,
                              marginTop : '1rem'
                            } }>{ touched.about ? errors.about : '' }</div>

                            <Form.Button className="btn" disabled={ loading }
                                         onClick={ handleSubmit }>{ loading === true ? "Processing..." : "Contact" }</Form.Button>
                          </Form>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                  <Segment basic className="abt-seg">
                    <Header inverted textAlign="center" as="h3">
                      <span>J</span>oin Our Happy Clients And Get Access To Our
                      Entire<br/> Collection
                      Of ebooks at an affordable
                      price{ ' ' }
                    </Header>
                    <span><a href={ authRoute }>Join CloudBooks.ng is</a> risk free!!</span>
                    {/* <Button basic inverted>
						Register now <Icon name="long arrow alternate right" />
					</Button> */ }
                  </Segment>
                </ContactWrapper>
              </ResponsiveContainer>
            </Page>
          )
        } }
      />
    </>
  )
};

export default ContactUs;
