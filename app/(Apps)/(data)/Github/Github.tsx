import Link from 'next/link';
import './Github.css'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/QinJiangBan/repos");
/*   await new Promise((resolve) => setTimeout(resolve,3000)); */
  return response.json()
}

export default async function Github() {
  const repos = await fetchRepos();


  return (
    <>
      <h1>Github</h1>


      <div>
        <ul className='repo_list'>
          {repos.map((repo) => (

            <li>
              <Link href={`/Github/${repo.name}`} /* target='_blank' */>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>

                <div className='repo_details'>
                  <span>
                    <FaStar />{repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch />{repo.forks_count}
                  </span>
                  <span>
                    <FaEye />{repo.watchers_count}
                  </span>
                </div>

              </Link>
            </li>
          
          )

          )}
        </ul>
      </div>

    </>
  )
}