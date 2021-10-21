export default function createLead(payload) {
    fetch(`http://localhost:5000/createlead?name=${payload.Lead_name}&company=${payload.Lead_company}&domain=${payload.Lead_domain}&conversion=${payload.Lead_conversion_status}&broadcast=${payload.Lead_brodcast_status}&created_by=${payload.Lead_created_by}&email=${payload.Registered_email}`, {
        method: 'GET', // The method
        mode: 'cors', // It can be no-cors, cors, same-origin
        headers: { 'Access-Control-Allow-Origin': '*' },
    })
        .then((data) => {
            // alert('lead ceated')
        })
        .catch((error) => {
            alert('Problem in ceating lead')
        });
}


