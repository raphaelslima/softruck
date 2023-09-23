//Components
import Header from "./components/Header";
import SelectRoute from "./components/SelectRoute";
import Map from "./components/Map";

function App() {

  return (
    <div className="container-max">
      <Header/>
      <main>
      <SelectRoute/>
      <Map/>
      </main>
    </div>
  )
}
export default App
