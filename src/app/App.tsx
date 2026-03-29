import { Route, Routes } from 'react-router-dom';
import { SiteFooter } from '../widgets/layout/footer/SiteFooter';
import { SiteHeader } from '../widgets/layout/header/SiteHeader';
import { routes } from './router/routes';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-[#07131f]">
      <SiteHeader />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
