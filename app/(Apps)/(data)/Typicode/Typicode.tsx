import Link from 'next/link';
import './Typicode.css'
const getUsersData = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    return users.json();
}
export default async function Typicode() {
    const [users] = await Promise.all([getUsersData()
    ]);
    return (
        <>
            <h1>Typicode</h1>

            <div className='card-container'>

                {users.map((user) => {
                    return (
                        <Link href={`/Typicode/${user.name}`} target='_blank'>
                            <div key={user.id} >
                                <div className="card">

                                    <h2>{user.name}</h2>

                                    <div>
                                        <p>邮箱: {user.email}</p>
                                    </div>

                                    <div>
                                        <p>街道: {user.address.street}</p>
                                        <p>房号: {user.address.suite}</p>
                                        <p>城市: {user.address.city}</p>
                                        <p>邮编: {user.address.zipcode}</p>
                                    </div>

                                    <div>
                                        <p>电话: {user.phone}</p>
                                        <p>网站: {user.website}</p>
                                    </div>

                                    <div>
                                        <p>公司: {user.company.name}</p>
                                        <p>口号: {user.company.catchPhrase}</p>
                                        <p>业务: {user.company.bs}</p>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    );
                })}

            </div>

        </>
    )
}

export const revalidate = 3600