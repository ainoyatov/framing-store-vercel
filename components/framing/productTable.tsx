'use client';

import DisplayMouldings from "../mouldings/defaultMouldings";
import { useState } from "react";


export default function ProductTable({ products }:any) {

    const [page, setPage] = useState(1)

    const handleNextPage = async () => {
        setPage(page + 1);
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    
    return (
      <div>
        <div className="flex gap-6 justify-center p-8">
          <button onClick={handlePrevPage} className="p-3 rounded-full border-2 shadow-lg">Prev</button>
          <button onClick={handleNextPage} className="p-3 rounded-full border-2 shadow-lg">Next</button>
        </div>

        Page number: {page}

        <div className="py-16 p-4 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5 3xl:gap-10 3xl:grid-cols-6">
          {products.map((item:any) => (
            <div key={item.id}>
              <DisplayMouldings 
                itemNum={item.itemnum}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-6 justify-center p-8">
          <button onClick={handlePrevPage} className="p-3 rounded-full border-2 shadow-lg">Prev</button>
          <button onClick={handleNextPage} className="p-3 rounded-full border-2 shadow-lg">Next</button>
        </div>
      </div>
    );

  }