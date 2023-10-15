import HeaderChildren from "@/Component/AppsHeader/HeaderChildren"
import Link from "next/link"
import './name.css'
import { GoArrowLeft } from "react-icons/go";

export default function layout({ children, params: { name } }) {
    return (
        <>
{/*             <HeaderChildren>
                <div className="Header_layout">

                    <div className="Header_left">
                        <Link href={`/`} prefetch={true} passHref>
                            <div className="BackLink">
                            <GoArrowLeft />
                            </div>
                        </Link>
                    </div>

                    <div className="Header_center">
                        {name}
                    </div>

                    <div className="Header_right">
                    </div>

                </div>
            </HeaderChildren> */}

            {children}
        </>
    )
}
