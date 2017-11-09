import React from 'react';
import { connect } from 'react-redux';
import { hideCompletedItems } from '../../logic/todos';
import './styles.css';

export const HideCompletedItems = ({ onHideCompletedItems }) => {
  return (
    <p className="hide-completed-items-wrapper">
      <span>Hide completed items&#63;</span>
      <input className="hideCompletedCheckbox" onClick={ (evt) => onHideCompletedItems(evt.target.checked) } type="checkbox" />
    </p>
  )
};

const mapDispatchToProps = dispatch => ({
  onHideCompletedItems: hide => dispatch(hideCompletedItems(hide)),
});

export default connect(null, mapDispatchToProps)(HideCompletedItems);