import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import { CategoriesProvider } from '../../contexts/categories.context';
import { fetchCategoriesStart } from '../../store/categories/category.action';

export const Shop = () => {
   const dispatch = useDispatch();
   useEffect(() => {
 dispatch(fetchCategoriesStart());
   }, []);

   return (
      // <CategoriesProvider>
<Routes>
    <Route index element={<CategoriesPreview />} />
    <Route path=':category' element={<Category/>}/>
</Routes>
// </CategoriesProvider>
   )
    
}

export default Shop;