import IntMoulding from "@/components/mouldings/intMouldings";
import DefaultViews from "@/lib/mouldings/defaultView";

export default async function SearchFrames () {

    const data = await DefaultViews(1);

    const dt = data.map((item:any) => item.id)
    // console.log(dt);
    // console.log(data);

    return (
        <div>
            Message is sent.
            <IntMoulding />

            {data.map((item:any) => (
                <div key={item.id}>
                    {item.itemnum} {item.description} {item.colorId}
                    **{item.custom2}
                    --{item.countryOfOrigin ? 'yes' : 'no'}
                    *****{item.itemCollection.id}
                    ------Image Name: {item.itemCollection.logoImage}
                    {/* --- {item.itemCollection.map((x:any) => x.id)} */}
                </div>
            ))}
        </div>
    )
}











// import IntMoulding from "@/components/mouldings/intMouldings";

// export default function SearchFrames () {

//     const FindMouldings = async (num:any) => {
//         const res = await fetch('localhost:3000/api/default', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(num)
//         })
        
//         const data = await res.json();

//         return data;
//         console.log(data);
//     }

//     const dt = FindMouldings(1);

//     console.log(dt);

//     return (
//         <div>
//             <IntMoulding />
//         </div>
//     );
// }