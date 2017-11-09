import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem, markItemAsComplete } from '../../logic/todos';
import './styles.css';

export const ItemCompleteEnum = {
  COMPLETE: 'complete',
  INCOMPLETE: 'incomplete',
}

export const ItemsList = ({ items, onRemove, onMarkAsComplete }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map(item => <li key={item.id}>
          <a className={`markAsComplete ${ item.complete ? ItemCompleteEnum.COMPLETE : ItemCompleteEnum.INCOMPLETE }`} onClick={() => onMarkAsComplete(item.id)} title={ `Click to mark item as ${ item.complete ? ItemCompleteEnum.INCOMPLETE : ItemCompleteEnum.COMPLETE }` }>
            {item.content}
          </a>
          <a className="removeItem" onClick={() => onRemove(item.id)} title="Click to remove this item">&times;</a>
        </li>
        )}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return { items: state.todos.items };
};

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeItem(id)),
  onMarkAsComplete: id => dispatch(markItemAsComplete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
