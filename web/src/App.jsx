import { Route, Switch } from "wouter"
import HomePage from "pages/Home"
import Header from "components/layout/Header"
import { Container } from "theme/app-styles"
import Footer from "components/layout/Footer"
import PodcastPage from "pages/Podcast"

function App() {
  return <>
    <Header />
    <Container>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/podcasts" component={PodcastPage} />
      </Switch>
    </Container>
    <Footer />
  </>
}

export default App
