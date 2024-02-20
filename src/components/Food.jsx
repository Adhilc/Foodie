import React from 'react'
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../Firebase";

export default function Food() {
const [Food,setFood] = React.useState([])




const fetchFoods = async () => {
    const food = await getDocs(collection(db, "Foods"));
    setFood(food.docs.map((doc) => doc.data()))
}

React.useEffect(() => {
    fetchFoods()
}, [])


 async function all () {
    const food = await getDocs(collection(db, "Foods"));
    setFood(food.docs.map((doc) => doc.data()))
}

async function filtersPrice (price){
    const q = query(collection(db, "Foods"), where("price", "==", price));
    const querySnapshot = await getDocs(q);
    setFood(querySnapshot.docs.map((doc) => doc.data()))  
}

async function filters (category){
    const q = query(collection(db, "Foods"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    setFood(querySnapshot.docs.map((doc) => doc.data()))

    };


const element = Food.map((item,index)=>{
    return <div className='border shadow-lg rounded-lg hover:scale-105 duration-300' key={index}>
            <img className='w-full object-cover h-[200px] rounded-t-lg' src={item.image} alt={item.name} />
            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p><span className='text-orange-500'>{item.price}</span></p>
            </div>
           </div>
           
})

/*function filterType(category){
    console.log(food)
    setFood(
        data.filter((item)=>{
            return item.category === category
        })
    )
}

function filterPrice(price){
    setFood(
        data.filter((item)=>{
            return item.price === price
        })
    )
}*/


  return (
    <div className='p-4 py-12'>
        <h1 className='font-extrabold text-orange-500 text-4xl uppercase text-center'>Top rated menu items</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap py-2'>
                    <button data-aos="fade-up" data-aos-offset="0" onClick={()=>{all()}} className='ml-2 bg-white border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500'>All</button>
                    <button data-aos="fade-up" data-aos-offset="0" onClick={()=>{filters('burger')}} className='ml-2 bg-white border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500'>Burgers</button>
                    <button data-aos="fade-up" data-aos-offset="0" onClick={()=>{filters('pizza')}} className='ml-2 bg-white border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500'>Pizza</button>
                    <button data-aos="fade-up" data-aos-offset="0" onClick={()=>{filters('salad')}} className='ml-2 bg-white border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500'>Salads</button>
                    <button data-aos="fade-up" data-aos-offset="0" onClick={()=>{filters('chicken')}} className='ml-2 mt-2 sm:mt-0 bg-white border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500'>Chicken</button>
                </div>
            </div>
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between flex-wrap py-2'>
                    <button data-aos="fade-up" data-aos-offset="0" onClick={()=>{filtersPrice('$')}} className='ml-2 bg-white border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500'>$</button>
                    <button data-aos="fade-up" data-aos-offset="0" onClick={()=>{filtersPrice('$$')}} className='ml-2 bg-white border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500'>$$</button>
                    <button data-aos="fade-up" data-aos-offset="0" onClick={()=>{filtersPrice('$$$')}} className='ml-2 bg-white border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500'>$$$</button>
                    <button data-aos="fade-up" data-aos-offset="0" onClick={()=>{filtersPrice('$$$$')}} className='ml-2 bg-white border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500'>$$$$</button>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
             {element}
         </div>
    </div>
  )
  }

