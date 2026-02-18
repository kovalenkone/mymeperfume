import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { AuthPage } from './pages/AuthPage'
import { BrandPage } from './pages/BrandPage'
import { BrandsPage } from './pages/BrandsPage'
import { ProfilePage } from './pages/ProfilePage'
import { ProjectPage } from './pages/ProjectPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { UsersPage } from './pages/UsersPage'
import { AppPath } from './shared/constants/routes.constant'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppPath.Auth} element={<AuthPage />}></Route>
        <Route element={<AppLayout />}>
          <Route path={AppPath.Users} element={<UsersPage />}></Route>
          <Route path={AppPath.Projects} element={<ProjectsPage />}></Route>

          <Route path={AppPath.Brands} element={<BrandsPage />}></Route>
          <Route path={AppPath.Brand(':slug')} element={<BrandPage />}></Route>
          <Route
            path={AppPath.Project(':id')}
            element={<ProjectPage />}
          ></Route>
          <Route path={AppPath.Profile} element={<ProfilePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
