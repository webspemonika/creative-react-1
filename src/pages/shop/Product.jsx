import React from 'react';
import { products } from './../../utilities/products';
import { productImageUrl } from '../../utilities/sofaImageUrl';
import { Rating } from 'react-simple-star-rating';

const Product = ({ headline }) => {

    const productArray = ["Chair", "Beds", "Sofa", "Lamp"]; //1................
    return (
        <section className='py-12 bg-neutral-100 container mx-auto max-w-7xl px-5'>
            <h2 className="headingpart text-stone-900 text-5xl font-bold font-['Poppins'] text-center ">{headline}</h2>
            {/* categories..... */}

            <div className="bg-[#eee] mx-auto flex justify-between p-2 rounded-full w-100 mt-5 mb-20">
                {
                    productArray.map((Product, index) => (
                        <div
                            className="px-5 py-2 rounded-full hover:bg-white  cursor-pointer mx-1 text-stone-900 text-lg font-semibold font-['Poppins'] leading-loose"
                            key={index} > {Product} </div>
                    ))
                }
            </div>

            {/* product-card.......... */}
            <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    products.map((product, index) => (
                        <div className="cardimage bg-amber-200" key={index}>

                            <img src={productImageUrl(product.imageUrl)} alt="" />
                            <div className="card-details">
                                <p> {product.category} </p>
                                <h3> {product.name} </h3>
                                {/* <div className="flex items-center justify-center gap-1 mt-1">
                                    <Rating readonly={true} size={20} initialValue={product.rating} />
                                </div> */}

                                {/*  */}

                            </div>


                            <div className="">
                                <p><sup>$</sup> {product.price} </p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default Product;