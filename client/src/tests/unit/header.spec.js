import renderer from 'react-test-renderer';
import React from 'react';
import Header from '../../components/header'

it('Verify if header renders correctly', () => {
  const tree = renderer
    .create(
      <Header>
        <h1><em></em></h1>
        <p></p>
      </Header>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
