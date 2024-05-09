
import SearchMouldingForm from "@/components/mouldings/valleyMoulding"
import defaultViews from "@/lib/mouldings/defaultView"
import DisplayMouldings from "@/components/mouldings/defaultMouldings";


export default async function FramesPage() {
  
  const res = await defaultViews();


  return (
    <div className="py-8">
      <div >
        <SearchMouldingForm />
      </div>

      {/* <div className="py-16 p-4 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5" >
        {res.map((item:any) => (
          <div key={item.id}>
            <DisplayMouldings 
              itemNum={item.itemnum}
            />
          </div>
        ))}
      </div> */}
    </div>
  )
}
