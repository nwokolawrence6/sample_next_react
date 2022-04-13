import React , { Component , useState } from 'react';
import { Grid , Segment , Container , Image , List , Divider , Input } from 'semantic-ui-react';
import logo from '../../assets/images/cloudbooks.svg';
import { FaLinkedin , FaInstagram , FaFacebook , FaTwitter } from 'react-icons/fa'
import { MainFooterWrapper } from '../styles/FooterWrapper';
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost';
import { ShowMessage , type } from "../Toaster/ShowMessage";


const validateEmail = ( email ) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( String( email ).toLowerCase() );
};
const newsletterSubscription = gql`
    mutation ($address: String!) {
        newsletterSubscription(address: $address)
    }
`;

const NewLetter = () => {
    const [ addEmail , { loading } ] = useMutation( newsletterSubscription );
    const [ address , setAddress ] = useState( '' );

    const send = () => {
        if ( !validateEmail( address.trim() ) ) return ShowMessage( type.ERROR , 'Invalid email address' );
        addEmail( { variables : { address : address.trim() } } )
          .then( ( { data } ) => {
              setAddress( '' );
              ShowMessage( type.DONE , data.newsletterSubscription );
          } ).catch( e => {
            ShowMessage( type.ERROR , e.message.includes( "Network error" ) ? "check your internet connection" : e.message.replace( /GraphQL error:|GraphQL error/g , '' ) )
        } );
    };
    return <Input
        action={ {
            color : 'green' ,
            labelPosition : 'right' ,
            icon : <span/> ,
            disabled : loading ,
            onClick : send ,
            content : loading ? 'Subscribing...' : 'Subscribe'
        } }
        onChange={ ( { target } ) => setAddress( target.value ) }
        value={ address }
        placeholder="Email..."
        className="sub2"
    />
};


class Footer extends Component {
    componentDidMount() {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push( arguments );
        }

        gtag( 'js' , new Date() );
        gtag( 'config' , 'UA-149754024-1' );
        this.facebook( document , 'script' , 'facebook-jssdk' );
        window.fbAsyncInit = function () {
            FB.init( {
                appId : '2516934121720246' ,
                cookie : true ,
                xfbml : true ,
                version : 'v4.11'
            } );

            FB.AppEvents.logPageView();

        };
    }

    facebook = ( d , s , id ) => {
        let js , fjs = d.getElementsByTagName( s )[ 0 ];
        if ( d.getElementById( id ) ) {
            return;
        }
        js = d.createElement( s );
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore( js , fjs );
    };

    render() {
        return (
            <MainFooterWrapper>
                <Segment vertical style={ { padding : '5em 0em', textAlign: "center"} }>
                    <Container>
                        <Grid divided stackable>
                            <Grid.Row>
                                <Grid.Column width={ 16 }>
                                    <Image centered size="tiny" src={ logo }/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column className="footer-socials" width={ 16 }>
                                    <List className="list-i" horizontal>
                                        <List.Item as="a" href="https://fb.me/officalcloudbooks">
                                            <FaFacebook
                                                style={ { position : 'relative' , right : 2 , bottom : 1 } }
                                                inverted
                                                color="blue"
                                                name="facebook"
                                            />
                                            FACEBOOK
                                        </List.Item>
                                        <List.Item as="a" href="https://twitter.com/cloudbookonline">
                                            <FaTwitter
                                                style={ { position : 'relative' , right : 2 , bottom : 1 } }
                                                inverted
                                                color="blue"
                                                name="twitter"
                                            />
                                            TWITTER
                                        </List.Item>
                                        <List.Item as="a" href="https://www.linkedin.com/in/officalcloudbooks">
                                            <FaLinkedin
                                                style={ { position : 'relative' , right : 2 , bottom : 1 } }
                                                inverted
                                                color="violet"
                                                name="linkedin"
                                            />
                                            LINKED IN
                                        </List.Item>
                                        <List.Item as="a" href="https://www.instagram.com/cloudbooksonline">
                                            <FaInstagram
                                                style={ { position : 'relative' , right : 2 , bottom : 1 } }
                                                inverted
                                                color="orange"
                                                name="instagram"
                                            />
                                            INSTAGRAM
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                            </Grid.Row>
                            <Divider/>
                            <Grid.Row className="sub1">
                                <Grid.Column width={ 16 } className="footer-socials sub">
                                    <p>Subscribe to our newsletter</p>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={ 16 } className="footer-socials">
                                    <NewLetter/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={ 16 } className="footer-socials copy">
                                    <p>Copyright &copy; 2018 smart devs. All rights reserverd </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </MainFooterWrapper>
        );
    }
}

export default Footer;
