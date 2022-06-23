import projects from './projects.js'
import ProjectCard from './ProjectCard'
import PersonCard from './PersonCard'
import Navbar from './Navbar'
import './index.css'

function App() {
  return (
    <>
      <title>Portfolio - Amos</title>
      <Navbar />
      <div>
        <div className='row'>
          <div className='col profile'>
            <PersonCard />
          </div>
          <div className='col projects'>
            {projects.map((project) => (
              <ProjectCard
                title={project.title}
                img={project.img}
                website={project.website}
                description={project.description}
                stack={project.stack}
                repo={project.repo}
                key={project.title}
              />
            ))}
            <ProjectCard />
          </div>
        </div>
      </div>
      <footer className='text-center'>
        <p className='my-0'>This page is also created by me using React </p>
        <a href='https://github.com/atyhamos/portfolio'>
          Link to GitHub repository
        </a>
      </footer>
    </>
  )
}

export default App
