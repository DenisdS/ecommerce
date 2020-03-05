import renderer from 'react-test-renderer';
import React from 'react';
import Menu from '../../components/menu'

it('Verify if menu renders correctly', () => {
  const tree = renderer
    .create(
      <Menu>
        <ul>
          <li><a></a></li>
          <li><a></a></li>
          <li><a></a></li>
          <li><a></a></li>
          <li><a></a></li>
        </ul>
      </Menu>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
