export default function getBroadcastedUsers(setBroadcastedUser) {
    fetch(`http://localhost:5000/read/broadcastedusers`, {
        method: 'GET', // The method
        mode: 'cors', // It can be no-cors, cors, same-origin
        headers: {'Access-Control-Allow-Origin': '*'},
    })
    .then(res => res.json())
    .then((data) => {
        setBroadcastedUser(data)
        })
    .catch((error) => {
            // alert(error)
    });
}