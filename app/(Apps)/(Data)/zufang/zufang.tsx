'use client';
import Link from 'next/link';
import './zufang.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Skeleton, Button } from '@nextui-org/react';

interface House {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export default function Zufang() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<House[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=32`);
            const result = await res.json();
            setData(result);
            setLoading(false);
        };

        fetchData();
    }, [page]);

    return (
        <div className='zufang'>
            <div className="house_list">
                {loading ?
                    (Array.from({ length: 32 }).map((_, index) => (
                        <div className="house_card" key={index}>
                            <Skeleton className='m-1 rounded-lg'>
                                <div className="Carousel_img rounded-lg bg-default-300"></div>
                            </Skeleton>
                            <div className='house_title gap-[1px]'>
                                <Skeleton className="w-3/5 m-1 rounded-lg">
                                    <div className="h-5 w-4/5 rounded-lg bg-default-200"></div>
                                </Skeleton>
                                <Skeleton className="w-4/5 m-1 rounded-lg">
                                    <div className="h-5 w-3/5 rounded-lg bg-default-200"></div>
                                </Skeleton>
                                <Skeleton className="w-2/5 m-1 rounded-lg">
                                    <div className="h-5 w-3/5 rounded-lg bg-default-300"></div>
                                </Skeleton>
                            </div>
                        </div>
                    )))
                    :
                    (data.map((house) => (
                        <Link
                            href={house.url}
                            key={house.id}
                            target="_blank"
                            className="house_card"
                        >
                            <div className='Carousel_div'>
                                <Skeleton className='rounded-lg' isLoaded={!loading}>
                                    <Image
                                        src={house.download_url}
                                        className='Carousel_img'
                                        width={300}
                                        height={300}
                                        alt={house.author}
                                    />
                                </Skeleton>
                            </div>
                            <div className='house_title'>
                                <Skeleton className="w-3/5 rounded-lg" isLoaded={!loading}>
                                    <h4 className='house_title_h4'>{house.author}</h4>
                                </Skeleton>
                                <Skeleton className="w-4/5 rounded-lg" isLoaded={!loading}>
                                    <p>width: {house.width}</p>
                                </Skeleton>
                                <Skeleton className="w-2/5 rounded-lg" isLoaded={!loading}>
                                    <p>height: {house.height}</p>
                                </Skeleton>
                            </div>
                        </Link>
                    )))
                }
            </div>

            <div className="gap-1 m-1 p-1">
                <Button
                    color="primary"
                    variant="solid"
                    radius="sm"
                    onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}
                >
                    上一页
                </Button>

                <Button radius="sm">第{page}页</Button>

                <Button
                    color="primary"
                    variant="solid"
                    radius="sm"
                    onClick={() => setPage(page => page + 1)}
                >
                    下一页
                </Button>
            </div>
        </div>
    );
}
