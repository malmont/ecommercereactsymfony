import React, { Suspense, useEffect, useState } from 'react';
import ResumeCart from "../../../components/Public/Cart/ResumeTotal/ResumeCartView";
import AuthContext from '../../../Contexts/authContext';
import { useDependencies } from "../../../DependencyContext";


function NavbarLoader() {
  const [NavbarComponent, setNavbarComponent] = useState(null);

     // / fetch('/api/user-preferences')
    //   .then((response) => response.json())
    //   .then((config) => {
    //     const componentName = config.navbarComponent;

    //     // Mapping des composants disponibles
    //     const componentMap = {
    //       'navbar-type-a': () => import('@votre-nom-utilisateur/navbar-type-a'),
    //       // 'navbar-type-b': () => import('@votre-nom-utilisateur/navbar-type-b'),
    //       // Ajoutez d'autres composants ici
    //     };


  useEffect(() => {
    // Simuler la réponse de l'API
    const simulateApiResponse = new Promise((resolve) => {
      resolve({ navbarComponent: 'navbar-type-a' });
    });

    simulateApiResponse
      .then((config) => {
        const componentName = config.navbarComponent;

        // Mapping des composants disponibles avec React.lazy
        const componentMap = {
          'navbar-type-a': React.lazy(() => import('@malmont/navbar-type-a')),
          // 'navbar-type-b': React.lazy(() => import('@malmont/navbar-type-b')),
          // Ajoutez d'autres composants ici
        };
        
        const Navbar = componentMap[componentName];

        if (Navbar) {
          setNavbarComponent(() => Navbar);
        } else {
          console.error('Composant Navbar non trouvé pour le nom :', componentName);
          // Gérer l'erreur, éventuellement charger un composant par défaut
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des préférences utilisateur :', error);
        // Gérer l'erreur, éventuellement charger un composant par défaut
      });
  }, []);

  if (!NavbarComponent) {
    return <div>Chargement de la barre de navigation...</div>;
  }

  return (
    <Suspense fallback={<div>Chargement du composant Navbar...</div>}>
      <NavbarComponent
        ResumeCart={ResumeCart}
        AuthContext={AuthContext}
        useDependencies={useDependencies}
      />
    </Suspense>
  );
}

export default NavbarLoader;