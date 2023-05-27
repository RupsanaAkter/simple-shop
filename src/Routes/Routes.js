import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Category from '../components/Category/Category';

const Routes = () => {
    return (
        <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
    </Routes>
    );
};

export default Routes;