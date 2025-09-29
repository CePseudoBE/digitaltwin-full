import { useAuth } from 'react-oidc-context';

function App() {
    const auth = useAuth();

    // En charge de la navigation silencieuse / déconnexion
    switch (auth.activeNavigator) {
        case 'signinSilent':
            return <div>Connexion en cours...</div>;
        case 'signoutRedirect':
            return <div>Déconnexion en cours...</div>;
    }

    if (auth.isLoading) return <div>Chargement...</div>;
    if (auth.error) return <div>Erreur : {auth.error.message}</div>;
    if (!auth.isAuthenticated) {
        return <button onClick={() => void auth.signinRedirect()}>Se connecter</button>;
    }

    return (
        <div>
            <h2>Bienvenue, {auth.user?.profile.preferred_username}</h2>
            <button onClick={() => void auth.signoutRedirect()}>Se déconnecter</button>
        </div>
    );
}

export default App;