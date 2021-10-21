import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setVerified, selectUserData } from '../../Redux/Slices/userSlice';
import { viewList, updateList } from '../../Redux/Slices/leadsSlice';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',

        },
    },
}));

function CreateLead() {
    let [lead, setLead] = useState({
        Lead_name: "",
        Lead_company: "",
        Lead_domain: "",
        Lead_conversion_status: false,
        Lead_brodcast_status: false,
        Lead_created_by: "",
        Registered_email: ""
    })

    let dispatch = useDispatch();
    let userData = useSelector(selectUserData);
    let userList = useSelector(viewList)
    const classes = useStyles()
    // console.log(userData)


    getList_And_updateRedux(userData.email, dispatch, updateList)
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}> Create Lead </h2>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField label="Name" onChange={(e) => { setLead({ ...lead, Lead_name: e.target.value }) }} />
                    <TextField label="Company" onChange={(e) => { setLead({ ...lead, Lead_company: e.target.value }) }} />
                    <TextField label="Domain" onChange={(e) => { setLead({ ...lead, Lead_domain: e.target.value }) }} />
                    <TextField label="Created by" onChange={(e) => { setLead({ ...lead, Lead_created_by: e.target.value }) }} />
                </form>

                <button onClick={() => {
                    fetch(`http://localhost:5000/createlead?name=${lead.Lead_name}&company=${lead.Lead_company}&domain=${lead.Lead_domain}&conversion=${lead.Lead_conversion_status}&broadcast=${lead.Lead_brodcast_status}&created_by=${lead.Lead_created_by}&email=${userData.email}`, {
                        method: 'GET', // The method
                        mode: 'cors', // It can be no-cors, cors, same-origin
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        },

                    })

                        .then((data) => {
                            alert('lead ceated')
                        })
                        .catch((error) => {
                            alert('Problem in ceating lead')
                        });
                }}>save</button>
            </div>

            <div style={{ paddingTop: '10vh' }}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Lead name</th>
                            <th scope="col">Lead Company</th>
                            <th scope="col">Convertion Status</th>
                            <th scope="col">Broadcast Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map(function (data, index) {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.Lead_name}</td>
                                    <td>{data.Lead_company}</td>
                                    <td>{`${data.Lead_conversion_status}`}</td>
                                    <td>{`${data.Lead_brodcast_status}`}</td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}




export default CreateLead;

function getList_And_updateRedux(userEmail, dispatch, updateList) {
    console.log('aaaaaaa')
    fetch(`http://localhost:5000/read/userLeads?email=${userEmail}`, {
        method: 'GET', // The method
        mode: 'cors', // It can be no-cors, cors, same-origin
        headers: {
            'Access-Control-Allow-Origin': '*'
        },

    })
        .then(res => res.json())
        .then((data) => {
            dispatch(updateList(data))
        })
        .catch((error) => {
            // alert(error)
        });
}