
import '@/CSS/loading.css'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
export default function loading() {
    return (
        <>



{/* <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  /> */}




            <div className="loading">


                <div className="loading_div_img">
                    <img src="favicon.ico" alt="About-Q" className="loading_img" />
                </div>
                <h1>loading...</h1>
                
            </div>
        </>
    )
}