import { MainStyled } from './styled.js'

function Main ({children}) {
  return(
    <MainStyled>
      {children}
    </MainStyled>
  )
}

export { Main }