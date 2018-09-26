import React from "react";
import { connect } from 'react-redux'

const EditExpensePage = props => <div>Editing the expense with an id of {props.match.params.id}</div>;
;

export default EditExpensePage;
