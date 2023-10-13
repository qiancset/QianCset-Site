import './name.css'
export default function Githubname({ params: { name } }) {

  return (
    <>
      <div className='name'>

        <div className="card">
          <h2>{name}</h2>
        </div>

      </div>
    </>
  )
}


