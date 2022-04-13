import React from 'react';
import {withRouter} from "next/router";
import AuthHeader from "../../components/Header/AuthHeader";
import {BlurbStyles} from "./blurbWrapperStyles";


const Index = ({ showHeader, btnText, btnAction, ...otherProps}) => {

    return (
        <>
            {showHeader && <AuthHeader/>}
            {otherProps.type !== 404 ? <BlurbStyles flexDirections={"column"}>
                    <h2>{otherProps.title}</h2>
                    <img src={otherProps.icon} alt="" style={{
                        width: otherProps.imgWidth ? otherProps.imgWidth : '400px'
                    }}/>
                    <p>{otherProps.content}</p>
                    {btnText && <button><a href={otherProps.linkTo}>{btnText}</a></button>}
                </BlurbStyles>
                :
                <BlurbStyles flexDirections={"row"} space={'space-evenly'}>
                    <img src={otherProps.icon} alt="" style={{
                            width: otherProps.imgWidth ? otherProps.imgWidth : '400px'
                    }}/>
                    <div className="txt">
                        <h2>{otherProps.title}</h2>
                        <p>{otherProps.content}</p>
                        {btnText && <button><a href={otherProps.linkTo}>{btnText}</a></button>}
                    </div>

                </BlurbStyles>
            }
        </>
    );

}


export default withRouter(Index);
