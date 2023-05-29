import Hero from './Hero'
import About from './About'
import Skill from './Skill'
import Contact from './Contact'


const Home = () => {

  return (
    <div>
      <div>
        <Hero/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Skill/>
      </div>
      <div>
        <Contact/>
      </div>
    </div>
  )
}

export default Home