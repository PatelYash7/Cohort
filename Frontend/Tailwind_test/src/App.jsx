
import './App.css'
import RevenueCard from './Components/RevenueCard'

function App() {
  return (
    <div className='grid grid-cols-4'>
      <RevenueCard title={"Amount Pending"} orderCount={13} amount={"121,5678"} />
      <RevenueCard title={"Amount Pending"} orderCount={13} amount={"121,5678"} />
      <RevenueCard title={"Amount Pending"} orderCount={13} amount={"121,5678"} />
      <RevenueCard title={"Amount Pending"} orderCount={13} amount={"121,5678"} />
    </div>
  )
}

export default App
