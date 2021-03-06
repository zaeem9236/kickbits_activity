export default function syncRedux_userLeads(userEmail, dispatch, updateList) {
    fetch(`http://localhost:5000/read/userLeads?email=${userEmail}`, {
        method: 'GET', // The method
        mode: 'cors', // It can be no-cors, cors, same-origin
        headers: {'Access-Control-Allow-Origin': '*'},
    })
    .then(res => res.json())
    .then((data) => {
            dispatch(updateList(data))
        })
    .catch((error) => {
            // alert(error)
    });
}