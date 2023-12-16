"use client";

import "./id.css";
import { Image } from "antd";
import { PiElevator } from "react-icons/pi";
import {
  LuBed,
  LuBath,
  LuSofa,
  LuTag,
  LuStar,
  LuBoxSelect,
  LuBuilding,
  LuMessageSquare,
} from "react-icons/lu";
import { Suspense, useState } from "react";
import { Skeleton, Space, Button, Carousel } from "antd";
import data from "../data/houseData";
export default function page({ params: { id } }) {
  const ID = data.find((zufang) => zufang.id === parseInt(id, 10));
  if (!ID) {
    return <div>链接空数据</div>;
  }

  return (
    <div className='component-container'>
      <div className='左'>
        <div className='image-container '>
          {/*           <Image.PreviewGroup
            mask={true}
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}> */}
          <div>
            <img
              src={ID.imageUrl[0]}
              alt='主图'
              className='image'
              height='300'
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
              }}
              width='500'
            />

            <div className='grid-image'>
              
                {ID.imageUrl.slice(1).map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`${ID.title} - Image ${index + 1}`}
                    className='image'
                    height='140'
                    width='195'
                    style={{
                      aspectRatio: "195/140",
                      objectFit: "cover",
                    }}
                  />
                ))}
         
            </div>
          </div>
          {/*      </Image.PreviewGroup> */}
        </div>
      </div>

      <div className='右'>
        <h1 className='title'>{ID.title}</h1>
        <p className='position'>{ID.position}</p>

        <div className='avatar-container'>
          <img
            alt='房东头像'
            className='avatar'
            src='https://vercel.com/api/www/avatar/YCxpATSSSsF3v8Hvgq4goGfw?s=64'
          />
          <div>
            <p className='user-info'>房东: 0xcd28...ee56</p>
            <p className='user-info'>认证: 有无</p>
          </div>
        </div>

        <div className='price-container'>
          <div>
            <div className='icon-container'>
              <LuBed className='icon' />
              <span>卧室: 2</span>
              <LuSofa className='icon' /> <span>客厅: 1</span>
              <LuBath className='icon' />
              <span>卫生间: 1</span>
            </div>

            <div className='icon-container'>
              <LuBoxSelect className='icon' />
              <span>面积:40m</span>
            </div>

            <div className='icon-container'>
              <LuBuilding className='icon' />
              <span>楼层:21</span>
              <PiElevator className='icon' />
              <span>电梯:有无</span>
            </div>
          </div>

          <div className='total-container'>
            <div className='price-info'>
              <span className='租金'>租金:{ID.租金}/月</span>
              <span className=''>押金:{ID.押金}/月</span>
            </div>
            <div className='price-info'>
              <label htmlFor='check-in'>入住日期</label>
              <label htmlFor='check-out'>退房日期</label>
            </div>
            <div className='price-info'>
              <input type='date' id='check-in' placeholder='入住日期' />
              <input type='date' id='check-out' placeholder='退房日期' />
            </div>
          </div>

          <div className='total-container'>
            <LuTag className='icon' />

            <div className='total-info'>
              <span>租金费用</span>
              <span>{ID.租金}/月</span>
            </div>
            <div className='total-info'>
              <span>预估服务费</span>
              <span></span>
            </div>
            <div className='total-info'>
              <span>总计</span>
              <span></span>
            </div>

            <div className='total-info'>
              <Button className='total-button' type='primary'>
                预订
              </Button>{" "}
            </div>
          </div>
        </div>

        <div className='icon-container'>
          <LuStar className='icon' />
          <span>评分:4.93</span>
          <LuMessageSquare className='icon' />
          <span>评价: 15 条</span>
        </div>

        <Price />
      </div>
    </div>
  );
}

function Price() {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <Carousel /* afterChange={onChange} */ autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
}

const Loading_Image = () => {
  return (
    <div className='Loading_Image'>
      <Space>
        <Skeleton.Image active />
      </Space>
    </div>
  );
};
