import React from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { theme } from "./theme"
import { CardsPage } from "./pages/CardsPage"
import SimpleMap from "./components/Map"

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={CardsPage} />
          <Route path="/map" exact component={SimpleMap} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </ThemeProvider>
  )
}

export default App
