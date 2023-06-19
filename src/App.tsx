import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

const queryClient = new QueryClient()

dayjs.locale('pt-br')
dayjs.extend(relativeTime)

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  )
}
