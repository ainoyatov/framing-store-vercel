
export default async function searchFrames(searchedTerm:any) {
    
  const url = 'https://newapi.internationalmoulding.com/api/inventoryitem/getpagedinventoryitems2';

  const payload = {
    PageNumber: 1,
    PageSize: 24,
    OrderBy: "itemnum",
    Filter: [
      {
        FieldName: "catalogId",
        Value: "741",
        Op: "EQUAL"
      },
      {
        FieldName: "itemnum",
        Value: `${searchedTerm}`,
        Op: "CONTAINS"
      }
    ]
  }

  const getFrames = async () => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    return res.json()
  }

  const data = await getFrames();
  
  return data;

}
