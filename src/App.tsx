import { useTranslation } from "react-i18next"

//Components
import Header from "./components/Header"

function App() {

  const {t} = useTranslation()

  return (
    <div className="container-max">
      <Header/>
      <main>
      {t('Olá mundo')}
      </main>
    </div>
  )
}
export default App
