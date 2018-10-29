import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Carro</InputLabel>
          <Select
            open={this.props.open}
            onClose={this.props.handleClose}
            onOpen={this.props.handleOpen}
            value={this.props.value}
            onChange={this.props.handleChange}
            inputProps={{
              name: 'carroId',
              id: 'demo-controlled-open-select',
            }}
          >
            {this.props.list.map(item => <MenuItem value={item.id}>{item.placa}</MenuItem>)}
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
