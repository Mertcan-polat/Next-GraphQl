import useCharacter from '@/hooks/useCharacter'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Characters = () => {
  const router = useRouter()
  const {id} = router.query;

  const {data, loading, error} = useCharacter(id);
  let [color] = useState("#36d7b7");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "350px",
  };

  if(error) return <div>Someting went Wrong</div>;
  if(loading) return <div><ClimbingBoxLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        /></div>

  return (
    <div className='flex'>
      <div className='rounded-xl mt-10 ms-10 me-20 '>
        
      <img className='rounded-full fixed top-10 left-50 right-20 content-center items-center justify-items-center' src={data.character.image}/>
      </div>
      <div>
        <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white' > Character Name - {data.character.name}</h2>
        <p>{data.character.gender}</p>
        <span className='mb-4 text-xl block leading-none tracking-tight text-start text-gray-900 md:text-xl lg:text-2xl mt-5 mb-2 dark:text-white'>Episodes and seasons</span>
        <div className='grid grid-cols-12 gap-4'>
  <div className='col-span-8 h-full'>
    <ul className='list-decimal py-4'>
      {data.character.episode.map((item) => (
        <li className='pb-3 sm:pb-4'>
          <div className='flex items-center space-x-4 text-gray-700 text-lg'>
            {item.name}- <p className='text-blue-400 ms-2'>{item.episode}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  <div className='col-span-4 grid grid-cols-1 gap-4'>
  <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
</div>
</div>

      </div>
    </div>
  )
}

export default Characters