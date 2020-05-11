import React from 'react';
import { Helmet } from 'react-helmet';

import Home from './Home/HomeComponent';

import './style.scss';

export default () => 
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Marcela Braga Afonso - FrontEnd WebDeveloper</title>
        </Helmet>
        
        <Home></Home>
    </>
