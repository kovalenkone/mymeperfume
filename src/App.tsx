import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { AboutPage } from './pages/AboutPage'
import { AddCustomerPage } from './pages/AddCustomerPage'
import { AddReqPage } from './pages/AddReqPage'
import { AdminManufactoriesPage } from './pages/AdminManufactoriesPage'
import { BasketPage } from './pages/BasketPage'
import { CatalogItems } from './pages/CatalogItems'
import { CatalogPage } from './pages/CatalogPage'
import { DeliveryPage } from './pages/DeliveryPage'
import { ForgetPasswordPage } from './pages/ForgetPasswordPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { ManufacturesPage } from './pages/ManufacturesPage'
import { NewPasswordPage } from './pages/NewPasswordPage'
import { RegisterPage } from './pages/RegisterPage'
import { AppRoutes } from './shared/constants/routes.constant'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<AppLayout />}>
          <Route index element={<HomePage />} />

          <Route path={AppRoutes.Login} element={<LoginPage />} />
          <Route
            path={AppRoutes.ForgetPassword}
            element={<ForgetPasswordPage />}
          />
          <Route path={AppRoutes.NewPassword} element={<NewPasswordPage />} />
          <Route path={AppRoutes.Register} element={<RegisterPage />} />

          <Route path={AppRoutes.Delivery} element={<DeliveryPage />} />
          <Route path={AppRoutes.About} element={<AboutPage />} />

          <Route path={AppRoutes.Catalog} element={<CatalogPage />} />
          <Route path={'/catalog-items'} element={<CatalogItems />} />
          <Route path={'/manufactures'} element={<ManufacturesPage />} />
          <Route path={'/basket'} element={<BasketPage />} />
          <Route path={'/add-req'} element={<AddReqPage />} />
          <Route path={'/add-customer'} element={<AddCustomerPage />} />
          <Route path={'/admin-manuf'} element={<AdminManufactoriesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
