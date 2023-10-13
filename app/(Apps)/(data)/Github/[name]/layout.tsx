import HeaderChildren from "@/app/(Apps)/Component/AppsHeader/HeaderChildren"
import Link from "next/link"
import { ArrowLeftOutlined } from "@ant-design/icons";
import './name.css'

export default function layout({ children, params: { name } }) {
    return (
        <>
            <HeaderChildren>
                <div className="Header_layout">

                    <div className="Header_left">
                        <Link href={`/`} prefetch={true} passHref>
                            <div className="LeftOutlined">
                            <ArrowLeftOutlined />
                            </div>
                        </Link>
                    </div>

                    <div className="Header_center">
                        {name}
                    </div>
                    <div className="Header_right">

                    </div>
                </div>
            </HeaderChildren>

            {children}
        </>
    )
}
