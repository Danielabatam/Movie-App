import React from "react";
import {Header} from "../layouts/header";
import {Body} from "../layouts/body";
import {Footer} from "../layouts/footer";
import {BrowserRouter} from "react-router-dom";

export const AppContainer = () => {
    return (
        <BrowserRouter>
            {/*header*/}
            <Header/>
            {/*body*/}
            <Body/>
            {/*footer*/}
            <Footer/>
        </BrowserRouter>
    )
}