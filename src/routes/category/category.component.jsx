import './category.styles.scss'

import {  useState , useEffect  } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {selectCategoriesMap} from '../../store/categories/categories.selector';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const {category} = useParams()
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products , setProducts] = useState(categoriesMap[category]);

    useEffect( () => {
        setProducts(categoriesMap[category]);
    } , [category,categoriesMap] )

   return (
    <div>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Category;