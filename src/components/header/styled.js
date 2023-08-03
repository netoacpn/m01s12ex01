import styled from 'styled-components'

export const  HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid grey;

  nav {
    display: flex;
    width: 50%;
    justify-content: space-evenly;    
  }

  .link{
    margin: 5px;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 10px;
  }
`