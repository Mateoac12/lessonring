import { Route, Switch } from "wouter"
import HomePage from "pages/Home"
import Header from "components/layout/Header"
import { Container } from "theme/app-styles"

function App() {
  return <>
    <Header />
    <Container>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Container>
  </>
}

export default App
