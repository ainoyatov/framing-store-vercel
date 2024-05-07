
import searchMoldings from "@/lib/mouldings/defaultView";
import NextImage from "next/image";
import Mouldings from "@/components/mouldings/defaultView";


export default async function MainFrame () {

  const response = await searchMoldings();
  const data = response.map((item:any) => item)
  // console.log(id)


  return (
    <div className="py-8">
      {data.map((item:any) => (
        <div key={item.id}>
          <Mouldings 
            description={item.description}
            src={`https://s3.amazonaws.com/im-dropbox-sync/${item.itemnum}.jpg`}
          />
        </div>
      ))}
    </div>
  )
}