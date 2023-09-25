import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../features/api/apiSlice';
import { ROUTES } from '../../utils/routes';
import Product from './Product';
import Products from './Products';
import { useDispatch } from 'react-redux';
import { getRelatedProducts } from '../../features/products/productsSlice';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({
        id,
    });

    useEffect(() => {
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess]);

    useEffect(() => {
        if (data) {
            dispatch(getRelatedProducts(data.category.id));
        }
    }, [data, dispatch]);

    return !data ? (
        <section className="preloader">Loading...</section>
    ) : (
        <div>
            <Product {...data} />
            {/* <Products products={list} amount={5} title="Trending" /> */}
        </div>
    );
};

export default SingleProduct;
