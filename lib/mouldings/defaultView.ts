

export default async function DefaultViews(num:any, searchTerm:any) {
    
    const url = 'https://newapi.internationalmoulding.com/api/inventoryitem/getpagedinventoryitems2';
  
    const payload = {
      PageNumber: num,
      PageSize: 12,
      OrderBy: "itemnum",
      Filter: [
        {
          FieldName: "WarehouseId",
          Op: "EQUAL",
          Value: "26",
          And: "false"
        },
        {
          FieldName: "catalogId",
          Value: "741",
          Op: "EQUAL"
        },
        {
          FieldName: "substrateId",
          Value: "3", // It means material is a Wood; [Aluminum, MDF, Polystyrene, Wood]
          And: "false",
          Op: "EQUAL"
        },
        {
          FieldName: "itemnum",
          Value: searchTerm,
          Op: "CONTAINS"
        },
        {
          FieldName: "description",
          Value: searchTerm,
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