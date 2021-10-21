import React from 'react';
import Radio from '@material-ui/core/Radio';

export default function RadioButton(props) {
    let {updateConversionStatus, id, lead_status, userEmail, dispatch, updateList} = props;

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>     
      <Radio
        checked={lead_status}
        onChange={handleChange}
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'D' }}
        onClick={()=>{updateConversionStatus(id, lead_status, userEmail, dispatch, updateList)}}
      />

    </div>
  );
}