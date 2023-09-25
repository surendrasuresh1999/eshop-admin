import { BrowserRouter, Route, Routes } from "react-router-dom"
import Admin from "./Components/Admin"

export const App = () => {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}