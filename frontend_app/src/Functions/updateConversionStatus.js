import syncRedux_userLeads from "./syncRedux_userLeads";
export default function updateConversionStatus(uid, status, email, dispatch, updateList){
    fetch(`http://localhost:5000/updatelead/conversion?id=${uid}&conversion=${!status}`, {
        method: 'GET', // The method
        mode: 'cors', // It can be no-cors, cors, same-origin
        headers: { 'Access-Control-Allow-Origin': '*' },
    })
        .then((data) => {
            // alert('lead ceated')
            syncRedux_userLeads(email, dispatch, updateList) // to update lead status in redux from db
        })
        .catch((error) => {
            // alert('Problem in ceating lead')
        });
}