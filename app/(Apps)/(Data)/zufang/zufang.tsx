'use client'
import Link from 'next/link';
import './zufang.css'
import { Suspense } from 'react';

import Image from 'next/image';
import { Skeleton, Space } from 'antd';
import houseData from './data/houseData';

export default function zufang() {

    return (
        <div className='zufang'>

            <div className="house_list">
                {houseData.map((house) => (

                    <Link href={`/zufang/${house.id}`} /* target="_blank" */
                        className="house_card" key={house.id}>

                        <Suspense fallback={<Loading_Image />}>
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


                        <Suspense fallback={<Loading_Input />}>
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
const Loading_Image = () => {
    return (
        <div className='Loading_Image'>
            <Space>
                <Skeleton.Image active />
            </Space>
        </div>
    )
}
const Loading_Input = () => {
    return (
        <div className='Loading_Input'>
            <br />
            <Space>
                <Skeleton.Avatar active size={'default'} shape={'circle'} />
                <Skeleton.Input active size={'default'} block={true} />
            </Space>
            <br />
            <br />
            <Space>
                <Skeleton.Input active size={'default'} />
            </Space>
        </div>
    )
}

