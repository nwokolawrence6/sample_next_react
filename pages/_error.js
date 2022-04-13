import React from 'react'
import Error500 from '../assets/favicon/500-erro.svg'
import Error404 from '../assets/favicon/error404.svg'
import Blurb from "../components/blurb/blurb";


function Error({ statusCode }) {
    return (
        <>
            {statusCode === 404
                ? 	<Blurb
                    showHeader
                    icon={Error404}
                    btnText={"Home"}
                    title={'Oops!'}
                    content="The link you clicked may be broken or the page may have been removed or renamed."
                    imgWidth="329px"
                    linkTo='https://www.cloudbooks.ng'
                    type={statusCode}
                />
                :
                <Blurb
                    showHeader
                    icon={Error500} //Error
                    btnText={"Home"}
                    imgWidth="329px"
                    linkTo='https://www.cloudbooks.ng'
                />
            }
        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error

