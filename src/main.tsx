import { createRoot } from 'react-dom/client'
import { UserProvider } from './providers/userProvider.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <UserProvider>
    <App />
  </UserProvider>,
)
