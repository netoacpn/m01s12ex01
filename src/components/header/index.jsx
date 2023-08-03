import { HeaderStyled } from './styled.js'
import { Link } from 'react-router-dom'

function Header() {
  const pages = [
    {
      route: "/",
      description: "Home"
    },
    {
      route: "/aboutme",
      description: "About Me"
    },
  ]


  return(
    <HeaderStyled>
      <h3>CABEÇALHO</h3>
      <nav>
        {
          pages.map(({route, description})=>{
            return(
              <Link className="link" key={description} to={route}>{description}</Link>
            )
          })
        }
      </nav>
    </HeaderStyled>
  )
}

export { Header }