'use client'


import { Empty } from 'antd';
import './zufangdata.css'



export default function page({ params: { id } }) {

    const selectedHouse = zufangData.find(zufang => zufang.id === parseInt(id, 10));
    if (!selectedHouse) {
        return <div>链接空数据</div>;
    }
    return (
        <div className='zufangdata'>

            <div className='zufang_Descriptions'>

                <div className='zufangdata_text'>
                    <h2>{selectedHouse.title}</h2>
                    <h4>{selectedHouse.position}</h4>
                    <p>{selectedHouse.price}</p>
                </div>


                <div className='zufangdata_div'>
                    {selectedHouse.imageUrl.map((url, index) => (
                        <img key={index} src={url} className='zufangdata_img' alt={`${selectedHouse.title} - Image ${index + 1}`} />
                    ))}
                </div>

            </div>




        </div>
    )
}
const zufangData = [
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
]