'use client';

import { useState, useEffect } from 'react';
import DisplayMouldings from '../mouldings/defaultMouldings';

function SearchBar() {

    const [formData, setFormData] = useState({
        search: '',
        page: 1,
    });

    const [customFrames, setCustomFrames] = useState([]);


    const handleSubmit = async (event:any) => {
        event.preventDefault();

        const response = await fetch('/api/suppliers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({formData})
        })

        const data = await response.json()

        setCustomFrames(data);

    };

    const handleInputChange = (event:any) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    };
    
    const handleNextPage = () => {
        setFormData({
            ...formData,
        })
    }

    const handlePrevPage =  () => {
        setFormData(prevState => ({
          ...prevState,
          page: Math.max(prevState.page - 1, 1) // Ensure page is never less than 1
        }));
        console.log(formData.page)
    };

    // useEffect(() => {
    //     console.log(formData.page);
    // }, [formData.page]);


    return (
        <div>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search"
                            value={formData.search}
                            onChange={handleInputChange}
                            className="w-full h-[50px] rounded-full p-6 dark:text-black"
                        />
                    </div>
                </form>
            </div>


            <div>
                <div className="flex gap-6 justify-center p-8">
                    <button
                        
                        onClick={handlePrevPage} 
                        className="p-3 rounded-full border-2 shadow-lg">Prev</button>
                    <button 
                        onClick={handleNextPage} 
                        className="p-3 rounded-full border-2 shadow-lg">Next</button>
                </div>

                <div className='p-4 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5'>
                    {customFrames.map((item:any) => (
                        <div key={item.id}>
                            <DisplayMouldings 
                                itemNum={item.itemnum}
                            />
                        </div>
                    ))}
                </div>
                
                {/* <div className="flex gap-6 justify-center p-8">
                    <button onClick={handlePrevPage} className="p-3 rounded-full border-2 shadow-lg">Prev</button>
                    <button onClick={handleNextPage} className="p-3 rounded-full border-2 shadow-lg">Next</button>
                </div> */}

            </div>

        </div>
    );
}

export default SearchBar;



