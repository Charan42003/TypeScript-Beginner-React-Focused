import Shape from "./components/CombinedTypesAndExclude/Shape"
import Page from "./components/componentsAsProps/Page"
import PageDL from "./components/contextApi/PageDL"
import { ThemeProvider } from "./components/contextApi/ThemeContext"
import Events from "./components/events/Events"
import ProptypesComponentUseing from "./components/props/proptypesComponentUseing"
import UseRef from "./components/useRef/UseRef"
import UseState from "./components/useState/UseState"

function App() {

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Props with TypeScript</h1>
      <ProptypesComponentUseing />
      <hr /><hr />
      <h1 style={{ textAlign: "center" }}>Components as Props with TypeScript</h1>
      <Page />
      <hr /><hr />
      <h1 style={{ textAlign: "center" }}>Events Props with TypeScript</h1>
      <Events />
      <hr /><hr />
      <h1 style={{ textAlign: "center" }}>useState with TypeScript</h1>
      <UseState />
      <hr /><hr />
      <h1 style={{ textAlign: "center" }}>Context API with TypeScript</h1>
      <ThemeProvider>
        <PageDL />
      </ThemeProvider>
      <hr /><hr />
      <h1 style={{ textAlign: "center" }}>useRef with TypeScript</h1>
      <UseRef />
      <hr /><hr />
      <h1 style={{ textAlign: "center" }}> TypeScript Comnined Types and Exclude</h1>
      <Shape />
    </>
  )
}

export default App
