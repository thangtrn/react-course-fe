import { Layout } from 'antd';
import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import { Route, Routes } from 'react-router-dom';
import router from './router';
import AppFooter from './components/AppFooter';
import SidebarMobile from './components/SidebarMobile';

const App = () => {
   const [isShow, setIsShow] = useState(false);

   return (
      <Layout className="layout">
         <AppHeader onToggleSidebar={() => setIsShow(!isShow)} />
         <SidebarMobile
            isShow={isShow}
            onToggleSidebar={() => setIsShow(!isShow)}
         />
         <Routes>
            {router.map(({ path, element }) => (
               <Route path={path} element={element} key={path} />
            ))}
         </Routes>

         <AppFooter />
      </Layout>
   );
};

export default App;
