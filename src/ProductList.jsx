import { useState, useEffect } from 'react'

export default function ProductList(props) {
    const { searchData } = props
    // console.log(searchData)
    // alert(searchData)

    const [dataList, setDataList] = useState([])

    const [pinCode, setPinCode] = useState("")

    // useEffect( ()=> {
    //     const exefetch = setTimeout(() => {

    //     },5000)
    // })

    const fetchData = async (searchData) => {

        // console.log(searchData)
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchData}`)
        const result = await res.json()
        // console.log(result.products)
        setDataList(result.products)

    }

    useEffect(() => {
        const delayedFetch = setTimeout(() => {
            fetchData(searchData)
        }, 2000)

        return () => clearTimeout(delayedFetch)
    }, [searchData])


    // useEffect(()=>{
    //     console.log("A")
    //     return ()=>{ console.log("B")}
    // },[searchData])

    return (
        <div >
            <ul>
                {dataList.map((el, index) => {
                    return (
                        <li key={index}>{el.title + " |  " + el.category + "   |   " + el.price}</li>
                    )
                })}
            </ul>

        </div>
    )
}
