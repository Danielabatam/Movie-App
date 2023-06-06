import React from "react";
import {Header} from "../layouts/header";
import {Body} from "../layouts/body";
import {Footer} from "../layouts/footer";

export const AppContainer = () => {
    return (
        <>
            {/*header*/}
            <Header/>
            {/*body*/}
            <Body/>
            {/*footer*/}
            <Footer/>
        </>
    )
}