import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Container, Row } from "react-bootstrap"

import Nav from '../components/nav/nav'
import Cards from '../components/cards/card'
import Layout from "../components/layout"
import Jumbo from "../components/jumbotron/jumbotron"
import Footer from "../components/footer/footer"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub)

export default () =>
<Layout>
  <div>
    <Nav />
    <Jumbo />
    <Container>
      <Cards />
    </Container>
    <Footer />
  </div>
</Layout>
