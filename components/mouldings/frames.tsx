'use client';

import { useState } from 'react';
import searchFrames from "@/lib/mouldings/searchFrames";
import NextImage from 'next/image';
import { useEffect } from 'react';


interface MouldingItemProps {
  id: string;
  itemnum: string;
  description: string;
}

function SearchComponent({search}:any) {
  const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState<MouldingItemProps[]>([]);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleInputChange = (event:any) => {
    setSearchTerm(event.target.value);
    
  };

  const handleSearch = async (event:any) => {
    event.preventDefault();
    
    try {

        const response = await searchFrames(searchTerm)
        // setSearchResults(response);
        setData(response as unknown as MouldingItemProps[])

    } catch (error) {
      console.error('Error fetching search results:', error);
    }

    setSearchTerm('')
    
  };

  const checkImage = (src: string, itemNum: string) => {
    const img = new Image();
    img.src = src;
    img.onload = () => console.log(`${src} loaded successfully`);
    img.onerror = () => {
      setFailedImages(prev => new Set(prev.add(itemNum)));
    }
  }

  useEffect(() => {
    data.forEach(item => {
      const imageUrl = `https://s3.amazonaws.com/im-dropbox-sync/${item.itemnum}.jpg`;
      checkImage(imageUrl, item.itemnum);
    });
  }, [data]);


  return (
  <>
    <div className='flex p-14'>
      <div className='flex flex-wrap items-center'>
        <div className=''>
          <form onSubmit={handleSearch}>
            <input
                className="flex border border-[#F0F0F0]  h-[50px] rounded-lg p-5 mb-5 placeholder:text-gray-500 dark:placeholder:text-black dark:text-black"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
            />
          </form>
        </div>
        <div className='flex items-center'>
          <button 
            type="submit"
            onClick={handleSearch}
            className='bg-cyan-500 dark:bg-white dark:text-black text-white rounded-full mx-4 px-4 transition-colors hover:border-gray-300 hover:bg-fuchsia-400 hover:dark:border-neutral-700 hover:dark:bg-blue-200'
          >
            Search
          </button>
        </div>
      </div>
        
      
    </div>

    <div>
      <ul>
        {data.map((item:any) => (
            !failedImages.has(item.itemnum) ? 
            (
              <div key={item.id}>
                <div className='text-xl'>{item.itemnum}</div>
                <div className='text-gray-600'>{item.description}</div>
                <div>{item.inventoryItemWarehouseDetails.map((price:any) => (
                  <div key={price.id}>Chop Price: ${price.chopPrice}</div>
                ))}</div>
                <a 
                  href={`https://www.internationalmoulding.com/item/${item.id}`}
                  target='_blank'
                >
                
                <NextImage 
                      alt="product image"
                      src={`https://s3.amazonaws.com/im-dropbox-sync/${item.itemnum}.jpg`}
                      width={250}
                      height={250}
                />
                </a>
              </div>
            )
            :
            (
              <div key={item.id}>
                <div className='text-xl'>{item.itemnum}</div>
                <div className='text-gray-600'>{item.description}</div>
                <div>{item.inventoryItemWarehouseDetails.map((price:any) => (
                  <div key={price.id}>Chop Price: ${price.chopPrice}</div>
                ))}</div>
                <a 
                  href={`https://www.internationalmoulding.com/item/${item.id}`}
                  target='_blank'
                >
                
                <NextImage 
                      alt="product image"
                      src={`/ImageNotFound.svg`}
                      width={250}
                      height={250}
                      className='dark:border-white'
                />
                </a>
              </div>
            )
        ))}
      </ul>
    </div>
  </>
  );
}

export default SearchComponent;