import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
    </BrowserRouter>
  )
}
