import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { AuthPage } from './pages/AuthPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { UsersPage } from './pages/UsersPage'
import { AdminPath, ClientPath } from './shared/constants/routes.constant'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ClientPath.Auth} element={<AuthPage />}></Route>
        <Route element={<AppLayout />}>
          <Route path={AdminPath.Users} element={<UsersPage />}></Route>
          <Route path={AdminPath.Projects} element={<ProjectsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
