
import searchMoldings from "@/lib/mouldings/defaultView";
import NextImage from "next/image";


export default async function MainFrame () {

  const response = await searchMoldings();
  const data = response.map((item:any) => item)
  // console.log(id)


  return (
    <div className="py-8">
      {data.map((item:any) => (
        <div key={item.id}>
          {item.description}
          <NextImage 
            src={`https://s3.amazonaws.com/im-dropbox-sync/${item.itemnum}.jpg`}
            width={500}
            height={500}
            alt="prodoct images"
          />
        </div>
      ))}
    </div>
  )
}