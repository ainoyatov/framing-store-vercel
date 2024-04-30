import SearchComponent from "@/components/mouldings/frames";

export default async function MainFrame (searchParams:any) {

  return (
    <div>
      <SearchComponent search={searchParams}/>
    </div>
  )
}