'use client'
import './a.css'

import { PiElevator } from "react-icons/pi";
import { LuBed, LuBath, LuSofa, LuTag, LuStar, LuBoxSelect, LuBuilding, LuMessageSquare } from 'react-icons/lu'
import { Button } from 'antd';


export default function Component() {
  return (
    <div className="component-container">

      <div className="左">
        <div className="image-container">
          <img
            alt="主图"
            className="image"
            height="300"
            src="https://z1.muscache.cn/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />

          <div className="grid-image">
            <img
              alt="图1"
              className="image"
              height="140"
              src="https://z1.muscache.cn/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=72"
              style={{
                aspectRatio: "195/140",
                objectFit: "cover",
              }}
              width="195"
            />
            <img
              alt="图2"
              className="image"
              height="140"
              src="https://z1.muscache.cn/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=72"
              style={{
                aspectRatio: "195/140",
                objectFit: "cover",
              }}
              width="195"
            />
            <img
              alt="图3"
              className="image"
              height="140"
              src="https://z1.muscache.cn/pictures/miso/Hosting-23780166/original/484e7ed5-2e36-4f29-baa7-1c06c47f94c7.jpeg?im_w=720"
              style={{
                aspectRatio: "195/140",
                objectFit: "cover",
              }}
              width="195"
            />
            <img
              alt="图4"
              className="image"
              height="140"
              src="https://z1.muscache.cn/pictures/miso/Hosting-23780166/original/484e7ed5-2e36-4f29-baa7-1c06c47f94c7.jpeg?im_w=720"
              style={{
                aspectRatio: "195/140",
                objectFit: "cover",
              }}
              width="195"
            />
          </div>

        </div>
      </div>

      <div className='右'>
        <h1 className="title">非洲 · 南非巴拉巴拉的农家乐</h1>
        <p className="description">非洲 · 南非巴拉巴拉的农家乐</p>

        <div className="avatar-container">
          <img alt="房东头像" className="avatar" src='https://vercel.com/api/www/avatar/YCxpATSSSsF3v8Hvgq4goGfw?s=64' />
          <div>
            <p className="user-info">房东: 0xcd28...ee56</p>
            <p className="user-info">认证: 有无</p>
          </div>
        </div>



        <div className="price-container">
          <div className="">

            <div>
              <div className="icon-container">
                <LuBed className="icon" /><span>卧室: 2</span>
                <LuSofa className="icon" /> <span>客厅: 1</span>
                <LuBath className="icon" /><span>卫生间: 1</span>
              </div>

              <div className="icon-container">
                <LuBoxSelect className="icon" /><span>面积:40m</span>
              </div>

              <div className="icon-container">
                <LuBuilding className="icon" /><span>楼层:21</span>
                <PiElevator className="icon" /><span>电梯:有无</span>
              </div>

              <div className="icon-container">
                <LuStar className="icon" /><span>评分:4.93</span>
                <LuMessageSquare className="icon" /><span>评价: 15 条</span>
              </div>


            </div>



            <div className="total-container">
              <div className="price-info">
                <span className="">租金:¥4,458/月</span>
                <span className="">押金:¥4,458/月</span>
              </div>
              <div className="price-info">
                <label htmlFor="check-in">入住日期</label>
                <label htmlFor="check-out">退房日期</label>
              </div>
              <div className="price-info">
                <input className="w-1/2 mr-2" id="check-in" placeholder="2024/1/2" />
                <input className="w-1/2" id="check-out" placeholder="2024/1/7" />
              </div>
            </div>

            <div className="total-container">
              <div className="total-info">
                <span>¥4,458 x 5晚</span>
                <span>¥22,291</span>
              </div>
              <div className="total-info">
                <span>清洁费</span>
                <span>¥3,147</span>
              </div>
              <div className="total-info">
                <span>总计</span>
                <span>¥25,438</span>
              </div>
              <div className="total-info">
                <Button className="total-button" type="primary">预订</Button> <LuTag className="icon" />
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
