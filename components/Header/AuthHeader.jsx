import React from 'react';
import AuthHeaderStyles from './AuthHeaderStyles';
import { MdKeyboardBackspace } from 'react-icons/md';

const AuthHeader = () => {
    return (
        <AuthHeaderStyles>
            <h1>
                CloudBooks.<span>ng</span>
            </h1>
            <section>
                <MdKeyboardBackspace/>
                <p>
                    <a href="https://www.cloudbooks.ng">Back to main site</a>
                </p>
            </section>
        </AuthHeaderStyles>
    );
};

export default AuthHeader;
