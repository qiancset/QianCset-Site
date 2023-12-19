'use client'
import Link from 'next/link';
import './zufang.css'
import { Suspense } from 'react';

import Image from 'next/image';

import houseData from './data/houseData';

export default function zufang() {

    return (
        <div className='zufang'>

            <div className="house_list">
                {houseData.map((house) => (

                    <Link href={`/zufang/${house.id}`} /* target="_blank" */
                        className="house_card" key={house.id}>

                        <Suspense fallback={<></>}>
                            <div key={0} className='Carousel_div'>
                                <Image
                                    src={house.imageUrl[0]}
                                    className='Carousel_img'
                                    width={300}
                                    height={300}
                                    alt={`${house.title}`}
                                />
                            </div>
              </Suspense>


                        <Suspense fallback={<></>}>
                            <div className='house_title'>
                                <h4 className='house_title_h4'>{house.title}</h4>
                            </div>
                            <div className='house_租金'>
                                <p>{house.租金}</p>
                            </div>
                        </Suspense>


                    </Link>
                ))}
            </div>


        </div>
    );
};

