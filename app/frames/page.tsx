
import searchFrames from "@/lib/mouldings/searchFrames"
import DefaultMouldings from "@/components/mouldings/defaultMouldings"
import SearchMouldingForm from "@/components/mouldings/valleyMoulding"
import searchMoldings from "@/lib/mouldings/defaultView"

export default async function FramesPage() {
  
  // const res = await searchMoldings('805-50')
  // console.log(res)
  const res = await searchFrames()

  // res.map((item:any) => console.log(item.description))

  return (
    <div className="py-8">
      <div >
        <SearchMouldingForm />
      </div>

      {/* <div className="py-16 p-4 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5" >
        {res.map((item:any) => (
          <div key={item.id}>
            <DefaultMouldings 
              itemNum={item.itemnum}
            />
          </div>
        ))}
      </div> */}
    </div>
  )
}





// import SearchFrames from "@/components/mouldings/search";
// import searchFrames from "@/lib/mouldings/searchFrames";

// export default function FramesHome() {


//   return (
//     <div className="flex justify-center py-32">
//       <SearchFrames />
//     </div>
//   )
// }



// export default async function MainFrame ({searchedTerm}:any) {

//   const response = await searchMoldings();
//   const data = response.map((item:any) => item)

//   const frames = await searchFrames(searchedTerm);

  

//   return (
//     <div className="py-8">
//       <div>
//         <SearchMouldings search={searchedTerm}/>
//       </div>

//       <div>
//         {data.map((item:any) => (
//           <div key={item.id}>
//             <Mouldings 
//               description={item.description}
//               src={`https://s3.amazonaws.com/im-dropbox-sync/${item.itemnum}.jpg`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }