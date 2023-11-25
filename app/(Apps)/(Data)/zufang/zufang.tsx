'use client'
import Link from 'next/link';
import './zufang.css'

import { Suspense } from 'react';
import Loading from './loading';


export default function zufang() {


    return (
        <div className='zufang'>

            <div className="house_list">
                {houseData.map((house) => (

                    <Link href={`/zufang/${house.id}`} /* target="_blank" */
                        className="house_card" key={house.id}>

                        <Suspense fallback={<Loading />}>


                                <div key={0} className='Carousel_div'>
                                    <img
                                        src={house.imageUrl[0]}
                                        className='Carousel_img'

                                        alt={`${house.title}`} />
                                </div>
               



                            <div className='house_text'>
                                <h4 className='house_text_h4'>{house.position}</h4>
                                <p>{house.price}</p>
                            </div>

                        </Suspense>
                    </Link>
                ))}
            </div>


        </div>
    );
};
const houseData = [
    {
        id: 1,
        title: '越南老街Street',
        position: '越南老街Street',
        price: '$100',
        imageUrl: [
            'https://z1.muscache.cn/im/pictures/d998628a-25c1-4ce0-8a64-3609adf37431.jpg?im_w=720',
            'https://z1.muscache.cn/pictures/db962aa9-d79f-487e-8315-a2d2f5f97e3c.jpg?im_w=720',
            'https://z1.muscache.cn/pictures/ee017608-a768-4877-8fa0-739ed4ddf5f6.jpg?im_w=720'
        ]
    },
    {
        id: 2,
        title: '印度喜马偕尔邦(Himachal Pradesh)Jibhi的整套乡村小屋',
        position: '印度喜马偕尔邦(Himachal Pradesh)Jibhi',
        price: '$150',
        imageUrl: [
            'https://z1.muscache.cn/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720',
            'https://z1.muscache.cn/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720',
            'https://z1.muscache.cn/pictures/miso/Hosting-23780166/original/484e7ed5-2e36-4f29-baa7-1c06c47f94c7.jpeg?im_w=720'
        ]
    },
    {
        id: 3,
        title: '印度喜马偕尔邦(Himachal Pradesh)Sainj的整套小木屋',
        position: '印度喜马偕尔邦(Himachal Pradesh)Sainj',
        price: '$180',
        imageUrl: [
            'https://z1.muscache.cn/pictures/miso/Hosting-853189955208971108/original/aab48bd2-edb0-4ffd-87a3-f5cc7d7c3be2.jpeg?im_w=960',
            'https://z1.muscache.cn/pictures/e8344adf-e97a-4b6c-9039-86d29fd515c5.jpg?im_w=720',
            'https://z1.muscache.cn/pictures/e43414c9-9cd6-429a-ab17-9e08d6bb189a.jpg?im_w=720'
        ]
    },
    {
        id: 4,
        title: '菲律宾卡拉巴松Antipolo的整套小木屋',
        position: '菲律宾卡拉巴松Antipolo',
        price: '$230',
        imageUrl: [
            'https://z1.muscache.cn/pictures/miso/Hosting-799713841734039174/original/bac9ab9a-3654-460a-8c15-de8bd546f8ad.jpeg?im_w=960',
            'https://z1.muscache.cn/pictures/miso/Hosting-799713841734039174/original/5b78eb61-aac2-4a66-8f20-819fa526f895.jpeg?im_w=720',
            'https://z1.muscache.cn/pictures/miso/Hosting-799713841734039174/original/e13b7361-010f-4398-8698-9c209e2f21e5.jpeg?im_w=720',
        ]
    },
    {
        id: 5,
        title: '印度喜马偕尔邦(Himachal Pradesh)Jibhi的整套乡村小屋',
        position: '印度喜马偕尔邦(Himachal Pradesh)Jibhi',
        price: '$150',
        imageUrl: [
            'https://z1.muscache.cn/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720',
            'https://z1.muscache.cn/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720',
            'https://z1.muscache.cn/pictures/miso/Hosting-23780166/original/484e7ed5-2e36-4f29-baa7-1c06c47f94c7.jpeg?im_w=720'
        ]
    },
    {
        id: 6,
        title: '印度北阿坎德邦Silla的整套民居',
        position: '印度北阿坎德邦Silla',
        price: '$100',
        imageUrl: [
            'https://z1.muscache.cn/pictures/miso/Hosting-766553851538787924/original/027b6f23-89fe-41cf-9484-f73f8773ff73.jpeg?im_w=960',
            'https://z1.muscache.cn/pictures/miso/Hosting-766553851538787924/original/57ba2c89-9edf-496a-b562-344b50596f93.jpeg?im_w=720',
            'https://z1.muscache.cn/pictures/miso/Hosting-766553851538787924/original/0147ff0e-0a6e-498f-b836-1f68a34b8c9c.jpeg?im_w=720',
            'https://z1.muscache.cn/pictures/miso/Hosting-766553851538787924/original/0147ff0e-0a6e-498f-b836-1f68a34b8c9c.jpeg?im_w=720',
        ]
    },
    {
        id: 7,
        title: '美国纽约州Otisville的整套民居',
        position: '美国纽约州Otisville',
        price: '$319',
        imageUrl: [
            'https://z1.muscache.cn/pictures/miso/Hosting-878958470158600275/original/01f32d6a-20bf-45cd-8737-208a7fde9329.jpeg?im_w=960',
            'https://z1.muscache.cn/pictures/miso/Hosting-878958470158600275/original/23198f26-3f80-44c7-86b7-e174c5708db6.jpeg?im_w=720',
            'https://z1.muscache.cn/pictures/miso/Hosting-878958470158600275/original/b7ddcad2-8295-4fb3-ae84-97ad195f03ef.jpeg?im_w=720',
        ]
    },
    {
        id: 8,
        title: '美国马里兰州大洋城的整套公寓',
        position: '美国马里兰州大洋城',
        price: '$200',
        imageUrl: [
            'https://z1.muscache.cn/pictures/prohost-api/Hosting-565143191577376359/original/14dea146-288b-4867-ad0a-0546fd9b130f.jpeg?im_w=1200',
            'https://z1.muscache.cn/pictures/prohost-api/Hosting-565143191577376359/original/2078adf1-4f2e-463c-ae5e-d75eb6d2bfdb.jpeg?im_w=720',
            'https://z1.muscache.cn/pictures/prohost-api/Hosting-565143191577376359/original/a06164d8-b2e0-4330-a70a-1d2403a0b6f6.jpeg?im_w=720',
        ]
    },
];
