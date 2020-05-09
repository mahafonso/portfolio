import React from 'react';

import './HeaderComponentStyle.scss';

export default () => {
    return (
        <header class="header">
            <div class="header__wrapper">
                <div class="wrapper__image"></div>

                <div class="wrapper__profile">
                    <h1 class="profile__name">Marcela Braga Afonso</h1>

                    <h2 class="profile__profession">FrontEnd Web Developer</h2>

                    <ul class="profile__social">
                        <li class="social__item">
                            <a href="https://www.linkedin.com/in/marcela-afonso-999954b3/" title="LinkedIn" class="item__link linkedin"></a>
                        </li>

                        <li class="social__item">
                            <a href="https://github.com/mahafonso" title="GitHub" class="item__link github"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}