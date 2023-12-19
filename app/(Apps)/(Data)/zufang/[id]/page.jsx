"use client";
import Image from "next/image";
import {Button} from "@nextui-org/react";
import "./id.css";
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

          <div>
            <Image
              src={ID.imageUrl[0]}
              alt='主图'
              className='image'
              width={2080}
              height={1920}
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
              }}
            />

            <div className='grid-image'>
              
                {ID.imageUrl.slice(1).map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    alt={`${ID.title} - Image ${index + 1}`}
                    className='image'
                    height={1400}
                    width={1950}
                    style={{
                      aspectRatio: "195/140",
                      objectFit: "cover",
                    }}
                  />
                ))}
         
            </div>
          </div>
         
        </div>
      </div>

      <div className='右'>
        <h1 className='title'>{ID.title}</h1>
        <p className='position'>{ID.position}</p>

        <div className='avatar-container'>
          <Image
            alt='房东头像'
            className='avatar'
            height={48}
            width={48}
            src={`data:image/png;base64,${base64String}`}
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
              <Button  color="primary">
                预订
              </Button>
            </div>
          </div>
        </div>

        <div className='icon-container'>
          <LuStar className='icon' />
          <span>评分:4.93</span>
          <LuMessageSquare className='icon' />
          <span>评价: 15 条</span>
        </div>

   
      </div>
    </div>
  );
}



const base64String = "iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAchJREFUeF7t2jFOw0AURdFYokUiEqKgpqJlGakoWALbYCNZQgoqdkNNRcECIgWJEVKkeNC13oRx4Kb+M7aP37fHdoa75dVuAX6r7SWo+jslL2fv6GAGAcedBET5qRcJKGAoEA43gQKGAuFwEyhgKBAON4G/Bfh0foueROj+rJ8vUOnj/Qeqo0W9tjsISE/ReJ2Amd9CQAGLgNfAMAkCCti3lUygCTSBYQbKcPoM+ba5abK970muH17RfK2/7TRfBwqIzmO9SEABJwnYwpO4DosFFLAIeBcOkyCggC6kf8wAfVinQer1TaT1/uG7sIDj9AJWIkk7REABp71G8xpYEeh1jbaFbWFbmF6WZrlOtYVPtYWbxO6Ik8x+HXjEY28ytYAho4AChgLhcBMoYCgQDjeBAoYC4XATODfAcH8OhtP/0NDttv7XFd0ufhamE9I6AalUpU5AAb8EbOEwCAIKWAS8C4dJEFDAaQL/bhnT68M1PS299g/fhXvtoIAVAfq2Q0ABi4AtPJ4Er4FhhwgoYN9LjAk0gSeSQLoeo3Vzv6vT48AtTCekdQJSqUqdgAL2/SZiAk2gCQwzIKCAewKt3y9SXNeBVKpS9wkoT+0Sy3DWUwAAAABJRU5ErkJggg==";