import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setVerified, selectUserData } from '../../Redux/Slices/userSlice';
import { viewList, updateList, pushLeadInList } from '../../Redux/Slices/leadsSlice';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import syncRedux_userLeads from '../../Functions/syncRedux_userLeads';



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

    useEffect(() => {
        syncRedux_userLeads(userData.email, dispatch, updateList)
    }, []);

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
                    dispatch(pushLeadInList({
                        Lead_name: lead.Lead_name,
                        Lead_company: lead.Lead_company,
                        Lead_domain: lead.Lead_domain,
                        Lead_conversion_status: false,
                        Lead_brodcast_status: false,
                        Lead_created_by: lead.Lead_created_by,
                        Registered_email: `${userData.email}`
                    }))
                }}>save</button>
            </div>

            <div style={{ paddingTop: '10vh' }}>
                <table className="table table-striped">
                    <thead>
                        <tr className='text-center' style={{backgroundColor: '#00695f', color: 'white'}}>
                            <th colspan="5">Main List</th>
                        </tr>
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
                                    <td scope="row">{index + 1}</td>
                                    <td>{data.Lead_name}</td>
                                    <td>{data.Lead_company}</td>
                                    {/* <td>{`${data.Lead_conversion_status}`}</td> */}
                                    <td>{<button onClick={()=>{}}>chamge</button>}</td>

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

