import { Header } from '../../components/header/index.jsx'
import { Footer } from '../../components/footer/index.jsx'
import { Main } from '../../components/main/index.jsx'
import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'
import { useParams } from 'react-router-dom'

function Portifolio (){
  const[repos, setRepos] = useState([])
  const { username } = useParams()
  
  useEffect(() => {
    const load = async () => {
      const response = await api.get(`users/${username}/repos`)
      setRepos(response.data)
    }
    load()
  }, [])

  return(
    <main>
      <Header />
      <Main>
        <p>Portifólio</p>
        <ul>
          {
            repos.length > 0 && repos.map(({name, avatar_url})=> {
              return(
                <li key={name}>{name}</li>                
              )
            })
          }
        </ul>
      </Main>
      <Footer />
    </main>
  )
}

export { Portifolio }
