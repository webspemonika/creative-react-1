import React, { useState } from 'react';
import { products } from './../../utilities/products';
import { productImageUrl } from '../../utilities/sofaImageUrl';
import { FaPlus } from 'react-icons/fa';
// import { Rating } from 'react-simple-star-rating';

const Product = ({ headline }) => {

    const productArray = ["Chair", "Beds", "Sofa", "Lamp"]; //1................

    const [selected , setSelected] = useState(productArray[0] );

    const filterValue = products.filter((product) =>(product.category === selected))
    return (
        <section className='py-12 bg-neutral-100 container mx-auto max-w-7xl px-5'>
            <h2 className="headingpart text-stone-900 text-5xl font-bold font-['Poppins'] text-center ">{headline}</h2>
            {/* categories..... */}

            <div  data-aos='fade-up'  className="bg-[#eee] mx-auto flex justify-between p-0 lg:p-2 rounded-full  w-full lg:w-[400px] mt-5 mb-20">
                {
                    productArray.map((product, index) => (
                        <div onClick={()=>{setSelected( product)}}
                            className={` px-3  lg:px-5 py-2 rounded-full hover:bg-white  cursor-pointer mx-1 text-stone-900 text-lg font-semibold font-['Poppins'] leading-loose ${selected === product ? 'bg-white' : ''}`}
                            key={index} > {product} </div>
                    ))
                }
            </div>

            {/* product-card.......... */}
            <div data-aos='fade-up'   className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    filterValue.map((product, index) => (
                        <div className="cardimage  rounded-2xl shadow-lg" key={index}>

                            <div className="px-5 bg-white/80 rounded-tl-2xl rounded-tr-2xl">
                                <img src={productImageUrl(product.imageUrl)} alt="" />
                            </div>
                            <div className="card-details pt-[13px] px-[20px] pb-[27px]   ">
                                <p className=" text-neutral-400 text-base font-normal font-['poppins']"> {product.category} </p>
                                <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] capitalize pt-[6px] "> {product.name} </h3>
                                {/* <Rating readonly = {true} size={15} initialValue={product.rating} /> */}

                                <div className=" flex justify-between items-center ">
                                    <p className=" text-slate-900 text-xl font-semibold font-['poppins']"><sup>$</sup> {product.price} </p>
                                    <span className='p-4 rounded-full bg-black text-white cursor-pointer'><FaPlus/></span>
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default Product;