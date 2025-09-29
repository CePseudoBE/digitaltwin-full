import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from 'react-oidc-context'


const oidcConfig = {
  authority: 'https://keycloak.digitaltwin.brussels/realms/master',
  client_id: 'front',
  client_secret: 'mmjQx7dS6xEVKg3nftJRItV09Ahio67E',
  redirect_uri: window.location.origin + '/callback',
  post_logout_redirect_uri: window.location.origin,
  onSigninCallback: () => window.history.replaceState({}, document.title, window.location.pathname),
};

createRoot(document.getElementById('root')!).render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>
)



