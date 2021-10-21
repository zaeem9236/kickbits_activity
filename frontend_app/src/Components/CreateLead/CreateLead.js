import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setVerified, selectUserData } from '../../Redux/Slices/userSlice';
import { viewList, updateList, pushLeadInList } from '../../Redux/Slices/leadsSlice';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RadioButton from '../MaterialUI/RadioButton';


import syncRedux_userLeads from '../../Functions/syncRedux_userLeads';
import updateConversionStatus from '../../Functions/updateConversionStatus';
import updateBroadcastStatus from '../../Functions/updateBroadcastStatus';


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
                        <tr className='text-center' style={{ backgroundColor: '#00695f', color: 'white' }}>
                            <th colSpan="5">Main List</th>
                        </tr>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Lead name</th>
                            <th scope="col">Lead Company</th>
                            <th scope="col" style={{width:'18.66%'}}>Conversion Status</th>
                            <th scope="col" style={{width:'18.66%'}}>Broadcast Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map(function (data, index) {
                            return (
                                <tr key={index}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{data.Lead_name}</td>
                                    <td>{data.Lead_company}</td>
                                    <td style={(data.Lead_conversion_status === true ? { backgroundColor: '#91ebba' } : {})}>
                                        <div className='text-center'>
                                            < RadioButton updateConversionStatus={updateConversionStatus} id={data._id} lead_status={data.Lead_conversion_status} userEmail={userData.email} dispatch={dispatch} updateList={updateList} />
                                            <p>{`${(data.Lead_conversion_status === true? 'Converted':'Not Converted')}`}</p>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='text-center'>
                                            < RadioButton updateConversionStatus={updateBroadcastStatus} id={data._id} lead_status={data.Lead_brodcast_status} userEmail={userData.email} dispatch={dispatch} updateList={updateList} />
                                            <p>{`${(data.Lead_brodcast_status === true? 'Broadcasted':'')}`}</p>
                                        </div>
                                    </td>
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

