export default function updateConversionStatus(uid){
    fetch(`http://localhost:5000/updatelead/conversion?id=${uid}&conversion=true`, {
        method: 'GET', // The method
        mode: 'cors', // It can be no-cors, cors, same-origin
        headers: { 'Access-Control-Allow-Origin': '*' },
    })
        .then((data) => {
            // alert('lead ceated')
        })
        .catch((error) => {
            // alert('Problem in ceating lead')
        });
}