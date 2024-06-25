
export default async function defaultViews(pageNumber:number) {
    
    const url = 'https://newapi.internationalmoulding.com/api/inventoryitem/getpagedinventoryitems2';
  
    const payload = {
      PageNumber: pageNumber,
      PageSize: 24,
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
          Value: "",
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