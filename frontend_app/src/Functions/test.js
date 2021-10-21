export default function test(){
    fetch(`http://localhost:5000/read/userLeads?email=zaeem123@live.com`, {
        method: 'GET', // The method
        mode: 'cors', // It can be no-cors, cors, same-origin
        headers: {
            'Access-Control-Allow-Origin': '*'
        },

    })
        .then(res => res.json())
        .then((data) => {
            // dispatch(updateList(data))
            return(data)
        })
        .catch((error) => {
            // alert(error)
        });
}