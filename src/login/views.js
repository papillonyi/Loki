import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {logstatus} from "./actions";
import {connect} from "react-redux";

class LoginDial extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button color="inherit" onClick={this.handleClickOpen}>
                    LOGIN
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
                        </DialogContentText>
                        <TextField
                            id="standard-name"
                            label="Name"
                            // className={classes.textField}
                            value={this.state.name}
                            // onChange={this.handleChange('name')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            // className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

LoginDial.propTypes = {
    login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        login : (username, password) => {
            dispatch(logstatus(username, password))
        }
    }
};

export default connect(null, mapDispatchToProps)(LoginDial);