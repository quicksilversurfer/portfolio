import React from 'react';
import { Helmet } from "react-helmet";
import NavBar from "../components/navbar"
import Frame from "../components/frame"
import Cover from "../components/cover"
import Section from "../components/section"
import PostBlock from "../components/postBlock"
import Blockquote from "../components/blockquote"
import ImageUnit from '../components/imageUnit'
import ProjectCard from "../components/projectCard"
import Footer from '../components/footer'

import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

//styles
import "../styles/global.css"

//markup
const UltrasoundPage = ({ data }) => {

  //image data
  const sequoia = getImage(data.sequoia);
  const learning_curve = getImage(data.learning_curve);
  const study_design = getImage(data.study_design);
  const easiest = getImage(data.easiest);
  const key_difference = getImage(data.key_difference);
  const leader = getImage(data.leader);
  const preference = getImage(data.preference);
  const success = getImage(data.success);
  const usability = getImage(data.usability);
  const shui = getImage(data.shui);
  const tva = getImage(data.tva);

  return (
    <Frame cover="ultrasound">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ultrasound | Prateek Solanki</title>
        <meta name="description" content="End to end design execution for an Ultrasound device." />
        <link rel="canonical" href="http://prateeksolanki.com/ultrasound" />
      </Helmet>

      <NavBar></NavBar>

      <Cover title="ultrasound" description="End to end design execution for a complex medical device."></Cover>

      <Section
        title1="work experience" desc1="Siemens Healthineers / Nov - 2015 to Feb - 2017"
        title2="collaborators" desc2="Siemens Healthineers Design Team"
        title3="contribution" desc3="Project Management, User Research, Interaction Design, Visual Design, Usability Testing">
        <PostBlock heading="summary">
          <p><a href="https://www.siemens-healthineers.com/en-us/ultrasound/new-era-ultrasound/acuson-sequoia" target="_blank" rel="noopener noreferrer">Acuson Sequoia</a> is the next generation Ultrasound product platform for Siemens Healthineers. Built from the ground up with input from users around the world, it has been created with users and patients in mind.</p>
          <p>Addressing some of the prevalent challenges in Ultrasound imaging today: the imaging of different sized patients, ease of use, learnability and standardization of exams, the Acuson Sequoia was the most preferred Ultrasound device amongst it's main competitors as proven in an independent comparative usability study.</p>
          <p>I was part of small team of 4 UX designers that worked closely with the Ultrasound product team on multiple projects, which included the end-to-end design for the Sequoia platform.</p>
          <p>As part of this multi-year collaboration, I created hardware + software prototypes, planned a robust design process with constrained resources, conducted contextual and usability research internationally, and delivered high-quality interaction design and visual design assets supporting the engineering team through implementation.</p>
          <p>In an independent <a href="https://cdn0.scrvt.com/39b415fb07de4d9656c7b516d8e2d907/a9f2e35938123fba/71722cb4bb86/Siemens-White-Paper_FINAL-HOOD05162003107116--1-.pdf" target="_blank" rel="noopener noreferrer">usability study</a> conducted by <a href="https://www.macadamian.com" target="_blank" rel="noopener noreferrer">Macadamian</a>, the Acuson Sequoia was voted as the most preferred device, with a <a href="https://www.siemens-healthineers.com/fr-be/ultrasound/shaping-the-future-of-healthcare/sequoia-comparative-usability-study" target="_blank" rel="noopener noreferrer">remarkable score of 86</a> on the System Usability Scale, which is unheard for products in this category.</p>
        </PostBlock>



        <ImageUnit src={sequoia} caption="Acuson Sequoia · Image Credit: Siemens Healthineers" l></ImageUnit>

        <PostBlock heading="process">
          <p>Below are highlights from the <a href="https://cdn0.scrvt.com/39b415fb07de4d9656c7b516d8e2d907/a9f2e35938123fba/71722cb4bb86/Siemens-White-Paper_FINAL-HOOD05162003107116--1-.pdf" target="_blank" rel="noopener noreferrer">Macadamian study</a> which summarizes these results.</p>
          <h4>brief</h4>
          <p>As the most widely used medical imaging modality, Ultrasound devices are used for several clinical purposes, and operated by multiple user groups. Sonographers being the primary user group, physicians also commonly use these devices.</p>
          <p>Typically rich in functionality to capture and edit clinical images, there are multiple modes and settings with labelling in complex terminology and jargon. They need to be connected with several types of accessories which offer different imaging capabilities and contextual controls. With operational and financial strain on healthcare  higher than ever, sonographers are expected to operate different devices from different manufacturers, with little to no training.</p>
          <p>Ultrasound devices need to be easy-to-use and easy-to-learn. The challenges of learnability and efficiency are particularly relevant in the healthcare industry today, with growing number of freelancers making up staff shortages, and the push for ever shorter turnaround times.</p>
        </PostBlock>

        <ImageUnit src={learning_curve} caption="Challenges with Ultrasound devices · Image Credit: Siemens Healthineers / Macadamian Technologies" l></ImageUnit>

        <Blockquote>
          There is a clear need for devices that can be quickly learned - improved walk-up usability - and operated with efficiency - reduced task times with improved operator comfort.
        </Blockquote>

        <PostBlock>
          <h4>research</h4>
          <p>With support from the product and management teams, a substantial amount of effort was put into understanding the needs and challenges of Ultrasound users around the world.</p>
          <p>I planned and conducted several user research activities, doing contextual inquiries in hospitals in Germany, China and the US, alongside evaluating hardware and software prorotypes of varying degrees of fidelity.</p>

          <h4>design</h4>
          <p>With insights from both customers and internal stakeholders, our research gave us a solid foundation define both the hardware and software interactions.</p>
          <p>Using low-fidelity prototypes, and multiple iterations with customers we defined the hardware controls and their layout. These were optimized for blind controllability, so that users could find and use controls without looking down on the control panel, and minimized arm movements.</p>
          <p>Workshops with internal clinical teams and customers, helped us understand the priority and usage of software controls. It allowed us to create a simpler, easier to understand information architecture, with the most frequently used controls upfront and easy to find. Each feature was closely reviewed, with some being completely redesigned, and incremental improvements to others.</p>
          <p>With the visual design, we built of a system for colors and typography, that reduced fatigue in dark scanning environments, and could be easily applied or extended by other products on the platform.</p>
        </PostBlock>
        <PostBlock heading="outcomes">
          <p>The result was a system built around customer needs, workflows and requirements. Before the official launch of the Sequoia, around the summer of 2018, a third-party research agency Macadamian was contracted to evaluate and benchmark the system against it's main competitors.</p>
          <p>We expected good results for the system based on our own internal evaluations, but were pleasantly surprised by the dramatic positive reactions from customers.</p>
          <p>Below are the published results of that study, that can also be found <a href="https://www.siemens-healthineers.com/fr-be/ultrasound/shaping-the-future-of-healthcare/sequoia-comparative-usability-study" target="_blank" rel="noopener noreferrer">here</a>, along with a video presentation of the results.</p>
        </PostBlock>

        <ImageUnit src={study_design} caption="Ultrasound comparative study design · Image Credit: Siemens Healthineers / Macadamian Technologies" l></ImageUnit>
        <ImageUnit src={preference} caption="Overvhelming preference for Acuson Sequoia · Image Credit: Siemens Healthineers / Macadamian Technologies" l></ImageUnit>
        <ImageUnit src={easiest} caption="Ease of Use Rating · Image Credit: Siemens Healthineers / Macadamian Technologies" l></ImageUnit>
        <ImageUnit src={success} caption="Task Success Rate · Image Credit: Siemens Healthineers / Macadamian Technologies" l></ImageUnit>
        <ImageUnit src={usability} caption="Usability Score · Image Credit: Siemens Healthineers / Macadamian Technologies" l></ImageUnit>
        <ImageUnit src={key_difference} caption="Design Diffrentiators · Image Credit: Siemens Healthineers / Macadamian Technologies" l></ImageUnit>
        <ImageUnit src={leader} caption="Preferred Device · Image Credit: Siemens Healthineers / Macadamian Technologies" l></ImageUnit>

      </Section>

      <Section
        title1="other projects">

        <ProjectCard
          cover={shui}
          heading="shui"
          description="developing design systems for user interface consistency and increased internal productivity"
          url="/shui" m></ProjectCard>

        <ProjectCard
          cover={tva}
          heading="vaccellent"
          description="Tools to manage, and coordinate the distribution and utilization of COVID-19 vaccines"
          url="/vaccellent" m></ProjectCard>

      </Section>

      <Footer></Footer>

    </Frame>
  )
}

export default UltrasoundPage

export const pageQuery = graphql`
  query  {
    shui: file(relativePath: { eq: "shui/shui_cover.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    tva: file(relativePath: { eq: "tva/vaccellent_cover.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    sequoia: file(relativePath: { eq: "ultrasound/sequoia.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    learning_curve: file(relativePath: { eq: "ultrasound/learning_curve.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    study_design: file(relativePath: { eq: "ultrasound/study_design.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      easiest: file(relativePath: { eq: "ultrasound/easiest.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      key_difference: file(relativePath: { eq: "ultrasound/key_difference.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      leader: file(relativePath: { eq: "ultrasound/leader.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      preference: file(relativePath: { eq: "ultrasound/preference.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      success: file(relativePath: { eq: "ultrasound/success.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      usability: file(relativePath: { eq: "ultrasound/usability.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
  }
`