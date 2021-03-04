import React from "react";
import { BallTriangle, useLoading } from "@agney/react-loading";

function Loading(){
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <BallTriangle width="50" />
      });
    return (
        <section {...containerProps}>
            {indicatorEl} 
             </section>
    )
}

export default Loading;