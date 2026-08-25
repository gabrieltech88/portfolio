import {BrowserRouter, Route, Routes} from "react-router";
import MainLayout from "@/components/MainLayout/MainLayout.tsx";
import MainPage from "@/pages/MainPage.tsx";
import {ThemeProvider} from "@/context/ThemeContext.tsx";

function App() {
  

  return (
    <>
      <BrowserRouter>
          <ThemeProvider>
              <Routes>
                  <Route path="/" element={<MainLayout/>}>
                      <Route index element={<MainPage/>}/>
                  </Route>
              </Routes>
          </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
