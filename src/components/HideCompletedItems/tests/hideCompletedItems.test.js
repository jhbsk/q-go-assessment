import React from 'react';
import { shallow, mount } from 'enzyme';
import { HideCompletedItems } from '../index';
import { ItemsList } from '../../ItemsList';

const SELECTOR_HIDE_COMPLETED_CHECKBOX = '.hideCompletedCheckbox';

const defaultProps = {
  onHideCompletedItems: f => f,
  items: [
    { id: 1, content: 'a', complete: false },
    { id: 2, content: 'b', complete: true },
    { id: 3, content: 'c', complete: false },
  ]
};

describe('HideCompletedItems', () => {
  it('renders without crashing', () => {
    shallow(<HideCompletedItems {...defaultProps} />);
  });

  it('should call onHideCompletedItems when the checkbox is clicked', () => {
    const onHideCompletedItemsMock = jest.fn();
    const renderedItem = mount(
      <HideCompletedItems {...defaultProps} onHideCompletedItems={onHideCompletedItemsMock} />
    );
    const checkbox = () => renderedItem.find(SELECTOR_HIDE_COMPLETED_CHECKBOX);
    expect(checkbox().node.checked).toBe(false);
    expect(onHideCompletedItemsMock.mock.calls.length).toBe(0);
    checkbox().simulate('click', {target: {checked: true}});
    expect(onHideCompletedItemsMock.mock.calls.length).toBe(1);
  });
});

describe('HideCompletedItems with ItemsList', () => {
  it('should render the hide completed items checkbox and items as list items', () => {
    const renderedItem = mount(
      <div>
        <HideCompletedItems {...defaultProps} />
        <ItemsList {...defaultProps} />
      </div>
    );
    expect(renderedItem.find('li')).toHaveLength(3);
  });
});
