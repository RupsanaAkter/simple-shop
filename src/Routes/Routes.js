import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Category from '../components/Category/Category';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Category />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
    </Routes>
  );
}
export default AppRoutes;