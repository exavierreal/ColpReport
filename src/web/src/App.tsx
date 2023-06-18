import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routes } from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          { routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          )) }
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
