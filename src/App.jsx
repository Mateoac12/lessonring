import { Route, Switch } from "wouter"
import HomePage from "pages/Home"
import Header from "components/layout/Header"

function App() {
  return <>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </>
}

export default App
