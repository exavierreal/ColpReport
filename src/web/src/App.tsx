import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routes } from './routes';
import { LoginPage } from './pages/LoginPage';
import { Layout } from './global/Layout';
import { WizardPage } from './pages/WizardPage';
import { RequireAuth } from './config/RequireAuth';
import { getAuthToken } from './auth/useAuth';
import { useEffect } from 'react';
import { DashboardPage } from './pages/DashboardPage';
import { ColporteursPage } from './pages/ColporteursPage';
import { ColporteurNewEditPage } from './pages/ColporteurNewEditPage';
import { AccountStatementPage } from './pages/AccountStatementPage';
import { OperationPage } from './pages/OperationPage';
import { ReportPage } from './pages/ReportPage';

const queryClient = new QueryClient();

function App() {
  const authToken = getAuthToken();

  useEffect(() => {
    if (authToken) {
      queryClient.setQueryData(['authToken'], authToken);
    }
  }, [authToken, queryClient])
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            {/* Public Routes */}
            <Route path='/' element={<LoginPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/colporteurs' element={<ColporteursPage />} />
            <Route path='/colporteurs/new' element={<ColporteurNewEditPage />} />
            <Route path='/statement' element={<AccountStatementPage />} />
            <Route path='/operation' element={<OperationPage />} />
            <Route path='/reports' element={<ReportPage />} />

            {/* Private Routes */}
            <Route element={<RequireAuth />}>
              <Route path='wizard' element={<WizardPage />} />
            </Route>
          </Route>

          
          {/* { routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          )) } */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
