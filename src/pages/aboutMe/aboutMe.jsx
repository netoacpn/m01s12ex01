import { Header } from '../../components/header/index.jsx'
import { Footer } from '../../components/footer/index.jsx'
import { Main } from '../../components/main/index.jsx'

function AboutMe(){
  return(
    <>
      <Header />
      <Main>
        <p> About Me</p>
      </Main>
      <Footer />
    </>    
  )
}

export { AboutMe }