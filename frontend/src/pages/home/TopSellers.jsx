import React, { useEffect, useState } from 'react'
import BookCard from '../Book/BookCard'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useFetchAllBooksQuery } from '../../redux/features/Books/booksApi';

const categories = [
    "Choose a gener",
    "Business",
    "Fiction",
    "Horror",
    "Adventure"
]

const TopSellers = () => {

    const [selectedCategorie, setSelectedCategorie] = useState("Choose a gener")


    const {data: books = []} = useFetchAllBooksQuery();

    const filteredBooks = selectedCategorie === "Choose a gener" ? books : books.filter(book =>
        book.category === selectedCategorie.toLowerCase()
    )
    return (
        <div className='py-10'>
            <h1 className='text-3xl font-semibold mb-6'>Top Sellers </h1>
            <div className='mb-8 flex items-center'>
                <select onChange={(e) => setSelectedCategorie(e.target.value)}
                    name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category} >{category}</option>
                        ))
                    }
                </select>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                   filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard  book={book} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>



        </div>
    )
}

export default TopSellers;
