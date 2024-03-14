import Page from "./components/componentsAsProps/Page"
import Events from "./components/events/Events"
import ProptypesComponentUseing from "./components/props/proptypesComponentUseing"
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
      <hr /><hr />
      <h1 style={{ textAlign: "center" }}>useState with TypeScript</h1>
      <UseState />
      <h1 style={{ textAlign: "center" }}>Context API with TypeScript</h1>
      <UseState />
    </>
  )
}

export default App
