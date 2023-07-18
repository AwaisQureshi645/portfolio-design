import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Header/Navbar'
import Header from './Component/Header/Header'
import Loading from './Loading'
function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulating data fetching with setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
 {isLoading ? (
        <div><Loading></Loading></div>
      ) : (
        <div>  <Header/></div>
      )}
  
    </>
  )
}

export default App
