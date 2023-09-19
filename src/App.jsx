import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
    <DaisyNav></DaisyNav>
    <NavBar></NavBar>
    <hr /><br />
      <div className='grid lg:grid-cols-3 gap-5 grid-cols-1'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://images.pexels.com/photos/6899555/pexels-photo-6899555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://images.pexels.com/photos/6899555/pexels-photo-6899555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://images.pexels.com/photos/6899555/pexels-photo-6899555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
