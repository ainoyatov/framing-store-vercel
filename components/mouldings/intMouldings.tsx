'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

interface PageNumProps {
    pagenum: string,
}

const IntMouldings = () => {
    
    const [page, setPage] = useState(1);
    const [memory, setMemory] = useState([]);

    const defaultView = async (pagenum: number) => {

        const frames = await fetch('/api/default', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pagenum)
        })

        const data = await frames.json();
        setMemory(data);

    }   

    useEffect(() => {
        defaultView(page);
    }, [page])

    const handlePrev = () => {
        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    }

    const handleNext = () => {
        setPage((prevPage) => prevPage + 1)
    }

    return (
        <div>
            <div className="grid grid-cols-2 justify-items-center p-4">
                {memory.map((item: any) => (
                    <div key={item.id} className="p-4 flex flex-col">
                        <Image 
                            src={item.imageName === null ? `https://s3.amazonaws.com/im-dropbox-sync/${item.itemCollection.logoImage}` : `https://s3.amazonaws.com/im-dropbox-sync/${item.imageName}`}
                            alt="images of mouldings"
                            width={250}
                            height={250}
                        />
                        <div>{item.itemnum}</div>
                        <div>{item.description}</div>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={handlePrev} disabled={page === 1}>
                    Previous
                </button>
                <button onClick={handleNext}>Next</button>
            </div>
            <div>Current Page: {page}</div>
        </div>
    );

}

export default IntMouldings






// v3
// 'use client';

// import Image from "next/image";


// interface ItemCollectionProps {
//     id: number,
//     name: string,
//     logoImage: string,
// }

// interface IntMouldingProps {
//     id: number,
//     itemnum: string,
//     description: string,
//     imageName: string,
//     itemCollection: ItemCollectionProps

// }

// const IntMoulding: React.FC<IntMouldingProps> = ({id, itemnum, description, imageName, itemCollection}) => {


//     return (

        
//             <div className="flex flex-col items-center p-2">
//                 <div>{itemnum}</div>
//                 <div>{description}</div>
//                 <Image 
//                     src={imageName === null ? `https://s3.amazonaws.com/im-dropbox-sync/${itemCollection.logoImage}` : `https://s3.amazonaws.com/im-dropbox-sync/${imageName}`}
//                     alt="images of mouldings"
//                     width={250}
//                     height={250}
//                 />
//             </div>
        
//     )
// }

// export default IntMoulding
