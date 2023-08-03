import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/home/home"
import { NotFound } from "../pages/404/404"
import { AboutMe } from "../pages/aboutMe/aboutMe"
import { Portifolio } from "../pages/portifolio/portifolio"

function RoutesApp() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Navigate to="/" replace/>} path="*"/>
        <Route element={<AboutMe/>} path="/aboutme"/>
        <Route element={<Portifolio/>} path="/portifolio/:username"/>
      </Routes>
    </BrowserRouter>
  )
}

export { RoutesApp }