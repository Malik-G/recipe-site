import React, { Component } from 'react';
import he from 'he';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class EditCardForm extends Component {

	state = {open: false};

	handleOpenClick = () => {
		this.setState({open: true});
		console.log('handleOpenClick')
	};

	handleCloseClick = () => {
		this.setState({open: false});
		console.log('handleCloseClick')
	};

	render() {
		return (
			<>
				<button onClick={this.handleOpenClick} className="btn btn-primary">
					Details
				</button>
				<Dialog
					open={this.state.open}
					onClose={this.handleCloseClick}
					aria-labelledby="dialog-title"
				>
					<DialogTitle id="dialog-title">Ingredient List</DialogTitle>
					<DialogContent>
						{/* <DialogContentText></DialogContentText> */}
						{this.props.i.map( item => 
							<p>* {he.decode(item)}</p>
						)}
					</DialogContent>
					<DialogActions>
						<button onClick={this.handleCloseClick}>Cancel</button>
					</DialogActions>
				</Dialog>
			</>
		);
	}
}


export default EditCardForm;