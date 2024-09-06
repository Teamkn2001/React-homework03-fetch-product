import { useState } from 'react'
import ProductList from './ProductList'


function App() {
  const [searchData, setSearchData] = useState("")

  const hdlOnChange = (e) => {
    e.preventDefault()
    setSearchData(e.target.value)
  }

  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center mt-6">
        <h1>Product Search</h1>
        <form action="">
          <input
            type="text"
            className='bg-red-400/35 rounded' placeholder='search...'
            onChange={(e) => hdlOnChange(e)}
          />
          
        </form>
        <div className='p-8 w-3/4 border-2 border-orange-700'>
        <ProductList searchData={searchData} />
        </div>
       
      </div>
    </>
  )
}

export default App
