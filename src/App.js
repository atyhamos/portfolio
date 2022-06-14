import { Helmet } from 'react-helmet'
import './App.css'
import { Container, Col, Row } from 'react-bootstrap'
import projects from './projects.js'
import ProjectCard from './ProjectCard'
import PersonCard from './PersonCard'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <Helmet>
        <title>Portfolio - Amos</title>
      </Helmet>
      <Navbar />
      <body>
        <Container className='container-fluid my-5 overflow-auto'>
          <div className='row align-items-start'>
            <Col>
              <PersonCard />
            </Col>
            <Col style={{ maxHeight: '800px' }}>
              {projects.map((project) => (
                <ProjectCard
                  title={project.title}
                  img={project.img}
                  website={project.website}
                  description={project.description}
                  stack={project.stack}
                  repo={project.repo}
                />
              ))}
              <ProjectCard />
            </Col>
          </div>
        </Container>
      </body>
      <footer>
        <p className='text-center my-0'>
          This page is also created by me using React{' '}
          <a href='https://github.com/atyhamos/portfolio'>link to repo</a>
        </p>
      </footer>
    </>
  )
}

export default App
