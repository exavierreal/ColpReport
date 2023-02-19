import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { LoginPage } from './pages/LoginPage'

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      <LoginPage />
    </QueryClientProvider>
  )
}

export default App
