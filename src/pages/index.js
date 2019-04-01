import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Badge from "../components/badge"
import Container from "../components/container"

const IndexPage = () => (
  <Layout>
    <SEO title="Carlos Benavides" keywords={[`Carlos`, `Benavides`, `Curriculum`, `Software`, `Front End`]} />
    
    <Container>
        <h1>Carlos Benavides</h1>
        <h2>Front End Developer</h2>
        <p>Team oriented <span>Front-End Developer</span> with proficient problem-solving skills and 5+ years of professional experience in the field. I have been working in a diverse spectrum of projects, from developing experimental software in small projects, to supporting websites for fortune 500 companies.</p>
    </Container>

    <div 
        style={{
            display: 'flex',
    }}>


        <div 
            style={{
                width: '75%',
        }}>
            <h3>Work Experience</h3>
            <p>Prodigious LATAM
Principal Front-End Engineer (Feb. 2018 - Present)
Senior duties plus: Support product owners and clients with recommendations to find viable solutions to particular needs. Participate in code review, and mentoring program for new talents.
Senior Front-End Engineer (Feb. 2016 – Feb. 2018)
Design and implementation of UI components in a daily basis.
Support sprint planning and tasks estimations for diverse projects.
Support Technical leads in their daily tasks during development process.
UNED – Costa Rica
Research department. (Jan. 2015 – Nov 2015)
Support biologist researchers through the creation of a web-based application to collect data.
Involved in the foundation of the UNED’s “FabLab”.
Languages
Spanish English Italian
Native Advanced Proficient
(SOLVO)
Software Developer (Web) (Aug. 2014 – Oct 2014)
Design and implementation of UI components (FE). Wiring new views and data in the implemented Back End system (Django).</p>
            <h3>Education</h3>
            <p>UNED Costa Rica. 2014 – 2016
Degree on software engineering
President and co-founder of the computer science students’ association.</p>
        </div>

        <div style={{
            width: '25%',
        }}>
            <h3>Technologies</h3>
            
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
            }}>
                <Badge text="JavaScript" />
                <Badge text="HTML5" />
                <Badge text="CCS3" />
                <Badge text="nodejs" />
                <Badge text="expressjs" />
                <Badge text="Angular" />
                <Badge text="react" />
                <Badge text="yeoman" />
                <Badge text="webpack" />
                <Badge text="Jenkins" />
                <Badge text="rxjs" />
                <Badge text="Sitecore" />
                <Badge text="typescript" />
                <Badge text="gatsby" />
            </div>
                
            <h3>TechSkills</h3>
            <p>
Proficient in the creation and implementation of web components (UI related).
Proficient with JavaScript design patterns, and modern frameworks.
Backend Knowledge in technologies related to the JavaScript stack.
Strong people skills.
Experience developing under Agile methodologies.</p>
            <h3>Languages</h3>
            <p>Spanish English Italian
Native Advanced Proficient</p>
        </div>
    </div>
  </Layout>
)

export default IndexPage
