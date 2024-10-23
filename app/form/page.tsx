import IntMoulding from "@/components/mouldings/intMouldings";
import DefaultViews from "@/lib/mouldings/defaultView";
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


export default async function SearchFrames () {

    const data = await DefaultViews(1);


    return (
        <div className="grid grid-cols-2">
            
            {data.map((item:IntMouldingProps) => (
                <div key={item.id}>

                    <IntMoulding
                        id={item.id}
                        itemnum={item.itemnum}
                        description={item.description}
                        imageName={item.imageName}
                        itemCollection={item.itemCollection}
                    
                    />
                    
                </div>
            ))}
        </div>
    )
}

