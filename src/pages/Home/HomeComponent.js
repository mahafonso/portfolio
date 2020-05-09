import React from 'react';

import Header from '../components/Header/HeaderComponent';
import Footer from '../components/Footer/FooterComponent';

import './HomeComponentStyle.scss';

export default () => (
    <>
        <Header></Header>

        <section class="content">
            <div class="content__wrapper">
                <p class="wrapper__title">Olá, seja bem-vindo(a)!</p>

                <p class="wrapper__text">
                    Meu nome é Marcela Braga Afonso, tenho 29 anos e sou programadora front end desde 2013.
                    Escolhi estudar Programação porque sempre gostei muito de tecnologia e queria entender como as coisas funcionavam, eram construídas. E me apaixonei pelo desenvolvimento web desde o começo, pela forma como é dinâmico, como você consegue ver as coisas se desenvolvendo conforme vai fazendo.
                </p>

                <p class="wrapper__text">
                    Profissionalmente trabalhei em startup, agência de publicidade e e-commerces. Trabalhei com várias tecnologias e pude aprender bastante além do básico HTML e CSS: JavaScript, jQuery, React, Angular, TypeScript, Bootstrap, SASS, LESS, styled-components, PhoneGap, Gulp, Babel. Para versionamento, SVN e Git (Bitbucket, GitHub e GitLab). E grande experiência com a metodologia ágil SCRUM.
                    <br />
                    Trabalhei para clientes como Whirlpool (CompraCerta, Brastemp, Consul, KitchenAid), B.blend, Itau, Terra, além de nas empresas Marcyn, Avec e Boticário (onde estou atualmente). Definitivamente minha maior experiência foi com e-commerce, utilizando a plataforma Vtex, mas também já desenvolvi sites institucionais, landing pages e e-mails marketing, além de uma implementação de chatbot utilizando API de terceiros para gerar perguntas e respostas.
                    <br />
                    Tive a oportunidade de dar suporte à equipe de CRO, desenvolvendo alguns Testes AB e automatizando a coleta e exibição de dados do Google Analytics em tabelas e gráficos no Google Sheet para melhor apresentação e análise.
                </p>

                <p class="wrapper__text">
                    Na área de tecnologia tudo está sempre mudando e surgindo coisas novas, então procuro sempre me atualizar e ter uma visão geral sobre o que está acontecendo, sobre as novas tendências. Para isso, faço alguns cursos ou me aventuro em alguma linguagem ou tecnologia nova, desenvolvendo sites pessoais. Apesar de não usar profissionalmente, procuro aprender fazendo coisas pra mim. Esse site foi desenvolvido com Gatsby e desenvolvi esse (site) em Next.js.
                </p>

                <p class="wrapper__text">
                    Além da paixão por tecnologia, também sou apaixonada por dogs, viagens e idiomas! Adoro conhecer novos lugares, culturas, costumes e histórias.
                    Já conheci alguns países, aprendi inglês, italiano e estou aprendendo francês :)
                </p>
            </div>
        </section>

        <Footer></Footer>
    </>
);