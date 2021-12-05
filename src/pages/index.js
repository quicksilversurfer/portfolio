import * as React from "react"
import { Helmet } from "react-helmet";
import NavBar from "../components/navbar"
import Frame from "../components/frame"
import Cover from "../components/cover"
import Section from "../components/section"
import PostBlock from "../components/postBlock"
import ProjectCard from "../components/projectCard"
import Footer from "../components/footer"

import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


// styles
import "../styles/global.css"

// data


// markup
const IndexPage = ({ data }) => {

  // image data
  const shui = getImage(data.shui);
  const ultrasound = getImage(data.ultrasound);
  const tva = getImage(data.tva);
  const cscw = getImage(data.cscw);
  const d3people = getImage(data.d3people);
  const rss = getImage(data.rss);



  return (

    <Frame cover="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Prateek Solanki | Portfolio</title>
        <meta name="description" content="Interaction Design portfolio of Prateek Solanki, Sr. UX Designer at Siemens Healthineers." />
        <link rel="canonical" href="http://prateeksolanki.com" />
      </Helmet>

      <NavBar></NavBar>

      <Cover home title="Hello, I'm Prateek." description="I am an Interaction Designer at Siemens Healthineers, where I help design and build medical device interfaces."></Cover>

      <Section
        title1="work"
        heading="At Siemens, I've gained experience in end to end design execution and project management for complex medical devices." layout>

        <ProjectCard
          cover={ultrasound}
          heading="ultrasound"
          description="end to end design execution for a complex medical device"
          url="/ultrasound" l></ProjectCard>

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

      <Section
        title1="personal"
        heading="Outside of work, I enjoy exploring ideas that excite me, using skills I'd like to develop further." layout>
        <ProjectCard
          cover={cscw}
          heading="cscw 2019"
          description="an article recounting my expereinces from CSCW 2019, and what I learned there"
          url="https://uxdesign.cc/why-more-ux-designers-should-attend-research-oriented-conferences-76438b2d0e51" s></ProjectCard>

        <ProjectCard
          cover={d3people}
          heading="1000 people"
          description="a d3 network graph visualizing connections between people in a community of practice"
          url="https://quicksilversurfer.github.io/1000-people/" s></ProjectCard>

        <ProjectCard
          cover={rss}
          heading="rss reader"
          description="a svelte app to read through some design & technology blogs"
          url="https://github.com/quicksilversurfer/rss-reader" s></ProjectCard>
      </Section>

      <Section
        title1="about"
        heading="Design is a combination of problem solving & expression. A synthesis of form and content to create meaning." layout>

        <PostBlock layout>
          <p>Born and brought up in India, I studied Mechatronics engineering in school because I thought it would give me the broadest introduction to how things are built. Joined an IT company to learn how things are built on the Internet. Shifted to working at the intersection of design and engineering, to explore what I felt passionate about. And finally went to school in Italy when I realized that design was my true calling.</p>
          <p>For me, design is about understanding a domain and the people you are designing for in order to find meaning. And crafting solutions for people that are aesthetically pleasing and desirable - the creation of form.</p>
          <p>Design is the medium through which I express the change I want to see in the world, and work with people and teams attempting to do the same.</p>
          <p>Cheers! 🍻</p>
        </PostBlock>
      </Section>
      <Footer></Footer>

    </Frame>

  )
}

export default IndexPage

export const pageQuery = graphql`
  query  {
    shui: file(relativePath: { eq: "shui/shui_cover.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    ultrasound: file(relativePath: { eq: "ultrasound/ultrasound_cover.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    tva: file(relativePath: { eq: "tva/vaccellent_cover.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    cscw: file(relativePath: { eq: "personal/cscw.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    d3people: file(relativePath: { eq: "personal/d3people.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        } 
      }
    rss: file(relativePath: { eq: "personal/rss-reader_cover.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      } 
    }
  }
`