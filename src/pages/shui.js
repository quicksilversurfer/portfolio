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
const ShuiPage = ({ data }) => {

  //image data
  const use_cases = getImage(data.use_cases);
  const tva = getImage(data.tva);
  const ultrasound = getImage(data.ultrasound);

  return (
    <Frame cover="shui">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shui | Prateek Solanki</title>
        <meta name="description" content="Design system for Siemens Healthineers for user interface consistency and increased internal productivity." />
        <link rel="canonical" href="http://prateeksolanki.com/shui" />
      </Helmet>

      <NavBar></NavBar>

      <Cover title="shui" description="Developing design systems for user interface consistency and increased internal productivity."></Cover>

      <Section
        title1="work experience" desc1="Siemens Healthineers / Nov - 2017 to Present"
        title2="collaborators" desc2="Siemens Healthineers Design Team, IDEO"
        title3="contribution" desc3="Interaction Design, Visual Design, Front-End Development">
        <PostBlock heading="summary">
          <p>Shui® is a design system that aims to harmonize the design language for the vast Siemens Healthineers product portfolio.</p>
          <p>The healthcare division forms one part of the giant Siemens conglomerate, which over years of growth and acquisitions evolved into something that referenced Siemens, but did not quite hold it's own identity. Alongside other issues like no central body overseeing the portfolio, the product design language lacked visual and behavioral consistency.</p>
          <p>In 2017, when Siemens Healthineers was spun off as a separate entity, the design org was presented with an opportunity to re-align and build a cohesive experience around the new brand.</p>
          <p>I am part of a small team that is developing a design system that aims to raise the quality of user experience, reduce design and engineering time, and creates a common foundation for new and existing products.</p>
          <p>In the past couple of years, we have been able to build a robust design language, that has been adopted by <a href="https://www.siemens-healthineers.com/en-us/ultrasound/new-era-ultrasound/acuson-redwood" target="_blank" rel="noopener noreferrer">several</a> <a href="https://www.siemens-healthineers.com/medical-imaging-it/advanced-visualization-solutions/syngovia-viewandgo" target="_blank" rel="noopener noreferrer">flagship</a> <a href="https://www.siemens-healthineers.com/en-us/radiography/digital-x-ray/multix-impact-c" target="_blank" rel="noopener noreferrer">products</a> and supported the development of many <a href="https://www.siemens-healthineers.com/en-us/digital-health-solutions/digital-solutions-overview/clinical-decision-support/ai-rad-companion" target="_blank" rel="noopener noreferrer">new ones</a>.</p>
          <p>Externally, the design system has also won several awards - <a href="https://www.red-dot.org/project/shui-siemens-healthineers-user-interface-25965" target="_blank" rel="noopener noreferrer">Red Dot</a>, <a href="https://www.ux-design-awards.com/en/gewinner/shui" target="_blank" rel="noopener noreferrer">UX Design Awards</a>, <a href="https://www.german-design-award.com/en/the-winners/gallery/detail/23757-shui.html" target="_blank" rel="noopener noreferrer">German Design Award</a>.</p>
        </PostBlock>

        <ImageUnit src={use_cases} caption="A broad range of product classes and use environments · Image Credit: Siemens Healthineers" l></ImageUnit>


        <PostBlock heading="challenges & learnings">
          <p>Below I describe some key challenges along the journey of developing Shui, outlining my role and learnings -</p>

          <h4>managing scale & complexity</h4>
          <p>The size and complexity of a wide portfolio of products (see image above) presents an obvious challenge to standardization. We focused early on to build a solid foundation of core fundamentals and components, and introduced new guidelines only when they were scalable to multiple products.</p>
          <p>Although this might have slowed growth in the beginning, and aggravated some internal consumers, but carefully expanding scope has paid dividends for maintainability, and robustness today.</p>
        </PostBlock>

        <Blockquote>
          Product teams give up a lot of control by handing over work to a design systems team. This trust needs to be earned through communication, building relationships and delivering high-quality work.
        </Blockquote>

        <PostBlock>
          <h4>workflow standardization</h4>
          <p>As we established visual design standards, we began to see overlap in how some high level workflows are similar across products. For example, workflows like patient management, are commonly used for starting and documenting patient exams and are quite similar across medical imaging devices (CT, MR, Ultrasound etc.). </p>
          <p>I've identified, and led the design of several of these communal patterns which standardize workflows across a number of products. The rationale being that customers can now easily transfer knowledge of operating one device to multiple other devices. Besides the advantages of consistency and a common way of operating these complex devices, it reduces training time, improves learnability and addresses the staff shortages rising across the healthcare industry.</p>

          <h4>business justification</h4>
          <p>Building and maintaining a design system is an ongoing investment. Often times it's hard for executives to understand the value behind such an effort, especially when things are working well.</p>
          <p>I've helped the team develop a metric around cost-avoidance, essentially money saved by a team when they use Shui to build their product. This metric has become the de-facto method to justify continued investment in Shui at the executive level.</p>

        </PostBlock>

      </Section>

      <Section
        title1="other projects">

        <ProjectCard
          cover={ultrasound}
          heading="ultrasound"
          description="end to end design execution for a complex medical device"
          url="/ultrasound" m></ProjectCard>

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

export default ShuiPage

export const pageQuery = graphql`
  query  {
    ultrasound: file(relativePath: { eq: "ultrasound/ultrasound_cover.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    use_cases: file(relativePath: { eq: "shui/shui_use_cases.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    tva: file(relativePath: { eq: "tva/vaccellent_cover.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
  }
`