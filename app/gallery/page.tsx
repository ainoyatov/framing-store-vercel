import Gallery from "@/components/GalleryImages";

export default function GalleryHome() {
  return (
    <div className="px-4 2xl:px-32">
      <Gallery />
    </div>
  )
}















































// const supabase = createClient("https://rsaxbfksbljspbqolhim.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzYXhiZmtzYmxqc3BicW9saGltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5NDk2NjYsImV4cCI6MjAwOTUyNTY2Nn0.zFojjHPJxnW3dcUQX5-u1KoIUYjZQZvmdW5obsC-eRw")



// export default async function Gallery() {

//   const supabase = createServerComponentClient({cookies});

//   const {data: countries} = await supabase.from("countries").select();

//   return (
//     <ul >
//       {countries?.map((country) => (
//         <li key={country.id}>{country.name}</li>
//       ))}
//     </ul>
//   );
// }


// export default async function getImages() {

//   const supabase = createServerComponentClient({cookies});

//   const {data} = await supabase
//   .storage
//   .from('projects')
//   .getPublicUrl('sample_images/third_picture')

//   return (
//     <div>
//       <img 
//         src={data.publicUrl}
//         width={300}
//         height={300}
//       >
//       </img>
//     </div>
//   );

// }

