'use client';

import Image from "next/image";


interface ItemCollectionProps {
    id: number,
    name: string,
    logoImage: string,
}

interface IntMouldingProps {
    id: number,
    itemnum: string,
    description: string,
    imageName: string,
    itemCollection: ItemCollectionProps

}

const IntMoulding: React.FC<IntMouldingProps> = ({id, itemnum, description, imageName, itemCollection}) => {


    return (

        
            <div className="flex flex-col items-center p-2">
                <div>{itemnum}</div>
                <div>{description}</div>
                <Image 
                    src={imageName === null ? `https://s3.amazonaws.com/im-dropbox-sync/${itemCollection.logoImage}` : `https://s3.amazonaws.com/im-dropbox-sync/${imageName}`}
                    alt="images of mouldings"
                    width={250}
                    height={250}
                />
            </div>
        
    )
}

export default IntMoulding
