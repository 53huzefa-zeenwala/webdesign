import styles from '../styles/Client.module.css'
import TopicHeading from './TopicHeading'
import {RiDoubleQuotesL} from 'react-icons/ri'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import Image from 'next/image';

export default function Client() {
    const data = [
        {
            image: '/person1.jpg',
            country: 'Greece',
            name: 'Kosta papadopoulos',
            job: 'App development',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis, impedit, corporis dolore incidunt earum fuga sint voluptatum animi explicabo.',
        },
        {
            image: '/person2.jpg',
            country: 'Sweden',
            name: 'Moctezuma Killa',
            job: 'UX/UI Designer',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis, impedit, corporis dolore incidunt earum fuga sint voluptatum animi explicabo.',
        },
        {
            image: '/person3.jpg',
            country: 'USA',
            name: 'John Deo',
            job: 'Web development',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis, impedit, corporis dolore incidunt earum fuga sint voluptatum animi explicabo.',
        },
    ]
    return (
        <div className={styles.client} id='clients'>
            <TopicHeading taglineText='Our Clients' heading='Clients We&#39;ve Worked With' />

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {data.map(({ country, detail, name, job, image }, i) => (
                    <SwiperSlide key={i}>
                        <div className={styles.slide}>

                            <div className={styles.imageDiv}>
                                <div>
                                    <Image src={image} layout='fill' objectFit='cover' />
                                </div>
                            </div>

                            <div className={styles.detailDiv}>
                                <h1><span><RiDoubleQuotesL /></span> {country} </h1>
                                <p>{detail}</p>
                                <h2>{name}</h2>
                                <h5>{job}</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

            <hr className='h-0.5 w-11/12 absolute bottom-0' />

        </div>
    )
}
