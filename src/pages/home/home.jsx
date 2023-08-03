import { Header } from '../../components/header/index.jsx'
import { Footer } from '../../components/footer/index.jsx'
import { Main } from '../../components/main/index.jsx'
import { api } from '../../services/api.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HomeUlStyled, HomeLiStyled, HomeImgStyled } from './styled.js'

function Home(){

  const [users, setUsers] = useState([])

  useEffect(() => {
    const load = async() => {
      const response = await api.get("/users")

      setUsers(response.data)
    }
    load()
  }, [])

  return(
    <>
      <Header />
      <Main>
        <p>Home</p>
        <HomeUlStyled>          
          {users.length > 0 && users.map(({login, avatar_url}) => {
              return (
                <HomeLiStyled key={login}>
                  <p>Login: {login}</p>
                  <HomeImgStyled
                    src={avatar_url} alt="Imagem de Perfil"
                  />                  
                  <Link to={`/portifolio/${login}`}>Venha ver meu portifólio</Link>                 
                </HomeLiStyled>                
                )
              })
            }
          </HomeUlStyled>        
      </Main>
      <Footer/>
    </>
  )
}
    
export { Home }