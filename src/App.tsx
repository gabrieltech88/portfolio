import {BrowserRouter, Route, Routes} from "react-router";
import MainLayout from "@/components/MainLayout/MainLayout.tsx";
import MainPage from "@/pages/MainPage.tsx";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<MainPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
