import React from "react"
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap"

import NavElement from '../components/nav/nav'
import Cards from '../components/cards/card'
import Layout from "../components/layout"
import Jumbo from "../components/jumbotron/jumbotron"
import Footer from "../components/footer/footer"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub)

export default () =>
<Layout>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Ross Buddie</title>
    <link rel="canonical" href="http://rossb.io/" />
 </Helmet>
  <div>
    <NavElement />
    <Jumbo />
    <Container>
      <Cards />
    </Container>
    <Footer />
  </div>
</Layout>
