import React from 'react'
import Hr from '../components/hr'
import Layout from '../components/layout'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

const Score = ({ score }) => {
  return `${score} / 10`
}

const About = () => {
  deckDeckGoHighlightElement();

  return (
    <Layout title="About">
      <h1>Hi!</h1>
      <p>I&#39;m Jivin, a {new Date().getFullYear() - 2011} year old who loves programming and playing video games!</p>

      <Hr />

      <h3>Skills:</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Skill</th>
            <th scope="col">Rating (out of 10)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Web Dev (JS / HTML / CSS)</td>
            <td><Score score="9" /></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a> (framework)</td>
            <td><Score score="8.5" /></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Python</td>
            <td><Score score="7.1" /></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Photography</td>
            <td><Score score="5" /></td>
          </tr>
        </tbody>
      </table>

      <Hr />

      <h3>Hobbies</h3>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Hobby</th>
            <th scope="col">How much I like it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Programming</td>
            <td>* * * * *</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Biking</td>
            <td>* * * * *</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Video Games</td>
            <td>* * * *</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Cooking</td>
            <td>* * * *</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Taekwondo</td>
            <td>* * * *</td>
          </tr>
        </tbody>
      </table>

      <Hr />

      <p>Nothing much to say, right? Ohh wait, there <b>is</b> more!</p>

      <h3>Schools</h3>

      <ul class="list-group">
        <li class="list-group-item">Irwin Elementary School (2018-2022)</li>
      </ul>

      <Hr />

      <p className="fst-italic text-muted">Aww, you haf nothing else to say?</p>
      <p>Nope</p>
      <p className="fst-italic text-muted">Okay, Bye!!!</p>

      <p>Byee!!!</p>

    </Layout>
  )
}

export default About