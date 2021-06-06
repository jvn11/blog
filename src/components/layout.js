import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from './head'
import { Helmet } from "react-helmet"
import ProfileImg from '../images/profile_pic.png'
import { Link } from "gatsby"
import '../styles/layout.css'
import Hr from "./hr"

const Layout = ({ title, classes, children }) => {
  return (
      <div className="container px-auto bg-white text-dark mb-5" style={{
        marginTop: "45.5px"
      }}>
        <Head title={title} />
        <Helmet
          bodyAttributes={{
            class: classes
          }}
        />
          <div className="row forex">
            <div className="col-sm-4 border-end p-0">
              <div className="">
                  <div className="container container text-center">
                      <Link to="/">
                        <img src={ProfileImg} style={{
                          width: '75px',
                          paddingTop: '24px'
                        }} alt="Profile Pic" />
                      </Link>
                      <h1 className="display-5">Jivin Mazumder</h1>

                      <Hr formatted="center" />

                      <Link to="/" className="text-decoration-none mar-5" activeClassName="text-info">Posts</Link>
                      |
                      <Link to="/about" className="text-decoration-none mal-5" activeClassName="text-info">About</Link><br />
                      <hr />
                  </div>
              </div>
              <div className="p-5 pt-2">
                <div style={{
                  width: '13.88888888888889vw'
                }}><p>An awesome programmer, who programs in Javascript and Python!</p></div>

                  <div className="contact-list">
                    <div className="circle-link">
                      <a href="https://github.com/jvn11" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-dark" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                    </div>
                    <div className="circle-link">
                      <a href="mailto:jivinawesomemazumder@gmail.com?subject=I%20mailed%20from%20the%20website!" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-dark" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <small className="text-muted">Copyright © {new Date().getFullYear()}, All Rights Reserved</small>
              </div>
            </div>
            <div className="col-sm-8">
              {children}
            </div>
          </div>
      </div>
  )
}

export default Layout