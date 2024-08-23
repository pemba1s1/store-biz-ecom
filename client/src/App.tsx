
import { useEffect } from 'react';
import Admin from './Admin.tsx';
import Store from './Store.tsx';

function App() {
  const subhost = window.location.host.split(".")[0]

  useEffect(() => {
    if (subhost.includes("localhost")) {
      const newUrl = window.location.href.replace('localhost', 'store.localhost');
      window.location.replace(newUrl);
    }
  }, [subhost]);
  
  if (subhost == "store" || subhost == "store-bizstore") return <Store />
  else if (subhost == "admin" || subhost == "admin-bizstore") return <Admin />
}

export default App
