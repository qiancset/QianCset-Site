
import './Home_Tabs.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsHouseCheck, BsHouses, BsHouseUp, BsPinMap } from 'react-icons/bs'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useRouter } from 'next/navigation'

export default function Home_Tabs() {
    const pathname = usePathname();
    return (
        <>
            <div className='Home_Tabs'>
                <Taba />
            </div>

        </>
    )
}




function Taba() {
    return (
        <div className="flex w-full flex-col">
            <Tabs
                aria-label="Options"
                color="primary"
                variant="underlined"
                classNames={{
                    tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider justify-around",
                    cursor: "w-full bg-[#ea7411]",
                    tab: "max-w-fit px-0 h-12 text-xl",
                    tabContent: "group-data-[selected=true]:text-[#ea7411]"
                }}
            >
                <Tab key="1" title={
                    <div className="flex items-center space-x-2">
                        <BsHouseCheck /><span>整租</span>
                    </div>
                }>
                </Tab>

                <Tab key="2" title={
                    <div className="flex items-center space-x-2">
                        <BsHouses /><span>合租</span>
                    </div>
                }>
                </Tab>

                <Tab key="3" title={
                    <div className="flex items-center space-x-2">
                        <BsPinMap /><span>地图</span>
                    </div>
                }>
                </Tab>

                <Tab key="4" title={
                    <div className="flex items-center space-x-2">
                        <BsHouseUp /><span>出租</span>
                    </div>
                }>
                </Tab>


            </Tabs>
        </div>
    );
}
