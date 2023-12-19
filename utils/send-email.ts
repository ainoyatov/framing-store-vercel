

export async function sendEmail({name, email, phone, message}:FormsData) {
  const apiEndpoint = 'api/email'

  // console.log(data);

  const push = await fetch('/api/email', {
    method: 'POST',
    headers: {
      "Content-type": "application/json,"
    },
    body: JSON.stringify({name, email, phone, message})
  })
  
}



// export function sendEmail(data: FormData) {
//   const apiEndpoint = '/api/email';

//   fetch(apiEndpoint, {
//     method: 'POST',
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       alert(response.message);
//     })
//     .catch((err) => {
//       alert(err);
//     });
// }

