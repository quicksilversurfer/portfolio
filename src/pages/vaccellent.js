import React from 'react';
import { Helmet } from "react-helmet";
import NavBar from "../components/navbar"
import Frame from "../components/frame"
import Cover from "../components/cover"
import Section from "../components/section"
import PostBlock from "../components/postBlock"
import Blockquote from "../components/blockquote"
import ProjectCard from "../components/projectCard"
import Footer from '../components/footer'

import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


//styles
import "../styles/global.css"

//markup
const VaccellentPage = ({ data }) => {

  //image data
  const shui = getImage(data.shui);
  const ultrasound = getImage(data.ultrasound);

  return (
    <Frame cover="vaccellent">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vaccellent | Prateek Solanki</title>
        <meta name="description" content="Tools to manage, and coordinate the distribution and utilization of COVID-19 vaccines." />
        <link rel="canonical" href="http://prateeksolanki.com/vaccellent" />
      </Helmet>

      <NavBar></NavBar>

      <Cover title="vaccellent" description="Tools to manage, and coordinate the distribution and utilization of COVID-19 vaccines."></Cover>

      <Section
        title1="work experience" desc1="Siemens Healthineers / Nov - 2020 to Apr - 2021"
        title2="collaborators" desc2="Siemens Healthineers Design Team"
        title3="contribution" desc3="Interaction Design, Visual Design">

        <PostBlock heading="summary">
          <p>The COVID-19 pandemic placed enormous strain on countries around the world, exposing long standing gaps in public health and exacerbating chronic inequities.</p>
          <p>One of these gaps and challenges is the inoculation of roughly 7.5 billion people with a limited number of vaccines. To address this challenge, a small cross-functional team within Siemens Healthineers set about to create a novel product to enable the digitalization of the vaccine supply chain.</p>
          <p>I supported the team with envisioning and crafting a clear product definition, through journey maps and workshops. I helped make these ideas tangible through mockups which drove decisions for the scope and priority of features that needed to be built.</p>
          <p>Within a short amount of time, we created a suite of tools for two key customer types - Vaccellent Operations & Vaccellent Dashboard - one supporting the utlization of vaccines at hospitals and clinics, and the other supporting governing authorities to make data-driven decisions about the distribution of vaccines.</p>
          <p>Although well received in the limited release these products had, the project has officially been shut down. Part of what we built continues to live on and supports internal employee vaccination registrations at Siemens Healthineers and other partner companies.</p>
        </PostBlock>

        <PostBlock heading="value proposition">
          <p>The tools we developed addressed the following challenges for customers - </p>
          <h4>managing vaccine distrubtion effectively</h4>
          <p>Empowering public health authorities to make data-driven decisions through adaptive AI-based analytics</p>
          <h4>operating vaccination procedures efficiently</h4>
          <p>Streamlined patient scheduling and simplified vaccine inventory management to optimize clinical workflow</p>
          <h4>coordinating doses, dates, patients and places</h4>
          <p>Seamlessly bringing together real-time data related to vaccination operations with high transparency</p>
        </PostBlock>

        <PostBlock heading="vaccellent operations">
          <p>Regional health facilities in several countries and regions are not well-equipped to handle the scale of this vaccination effort. To address this, we created a scheduling app for patients, and an operations dashboard for healthcare facilities where they could create vaccination time slots, view and record vaccinations, and manage their inventory of vaccines.</p>
          <p>We focused on creating simple and intuitive workflows with only the most essential information. For the scheduling app, we developed a step-by-step registration flow, focusing on accessibility and relying on guerilla testing to validate our concepts. </p>
          <p>For healthcare professionals and facilities, we developed a dashboard which presented relevant and essential information regarding vaccination appointments, and inventory levels. Conversations with local healthcare partners and subject matter experts were very helpful in navigating the dynamic nature of the vaccination effort. </p>
        </PostBlock>

        <PostBlock heading="vaccellent dashboard">
          <p>Another novel aspect of Vaccellent was the capability to optimize the distribution of vaccines based on data-driven modelling of distribution scenarios. With the help of AI-based simulations, the expected impact on cumulative infection rate could be modelled, helping public health authorities make fast and confident decisions, reducing deaths, and the spread of infections.</p>
          <p>I worked closely with the product management, and engineering teams to understand capabilities of the AI algorithms, and created concepts for how these capabilities could be presented in simple and intuitive workflows.</p>
        </PostBlock>

        <PostBlock heading="outlook">
          <p>Despite the project being challenging in many ways - constrained timelines and resources, rapidly changing environment, lack of contact with end-users - we were able to create a compelling value proposition for Vaccellent. </p>
          <p>Unfortunately because of the evolving operational and political climate around vaccines, Vaccellent has been discontinued. But parts of the system we developed are in use internally to support vaccination efforts in Siemens Healthineers and other partner companies. Other systems are being reshaped to broaden their area of use and will likely find life in new settings.</p>
          <p>In the limited time that Vaccellent was available, it received favorable reviews. A partner working with early versions of the Vaccellent system in the Vaccination Center at Erlangen, Germany had the following to say -</p>
        </PostBlock>

        <Blockquote>
          “ Vaccellent is intuitive to use. I can immediately see what I’m looking for. This saves time. I found that Vaccellent is easy to handle for different users – everybody intuitively knew what to do next without special training. For me as an administrator also responsible for coordinating fluctuating groups of staff, such as students, this saves a lot of time. Well done! ”
        </Blockquote>

      </Section>

      <Section
        title1="other projects">

        <ProjectCard
          cover={ultrasound}
          heading="ultrasound"
          description="end to end design execution for a complex medical device"
          url="/ultrasound" m></ProjectCard>

        <ProjectCard
          cover={shui}
          heading="shui"
          description="developing design systems for user interface consistency and increased internal productivity"
          url="/shui" m></ProjectCard>

      </Section>

      <Footer></Footer>

    </Frame>
  )
}

export default VaccellentPage

export const pageQuery = graphql`
  query  {
    ultrasound: file(relativePath: { eq: "ultrasound/ultrasound_cover.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    shui: file(relativePath: { eq: "shui/shui_cover.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
  }
`