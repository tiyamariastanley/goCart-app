import { Container } from "@material-ui/core";
import React from "react";

function Error(props){
    return (
        <Container className="application-base top">
            <center className="index-PageNotFoundContainer">
                <div>
                    <img className="index-notFoundImage" alt="" src={props.imgSrc}></img>
                    <p className="index-infoBig">{props.heading}</p>
                    <p className="index-infoSmall">{props.para}</p>
                </div>
            </center>
        </Container>
    )
}

export default Error;