import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

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