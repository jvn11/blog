import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const NotFound = () => {
  return (
    <Layout title="404">
      <h1>404, Not Found</h1>
      <p>Sorry, this page is not found.</p>
      <p><Link to="/">How &#39;bout go back to the home page?</Link></p>
    </Layout>
  )
}

export default NotFound