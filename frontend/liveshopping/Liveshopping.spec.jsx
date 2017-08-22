import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  Card,
  PriceStriked,
} from 'Templates/components';
import LiveshoppingWidget from './Liveshopping';

// Mock the redux connect() method instead of providing a fake store.
jest.mock('Library/connectors/liveshopping', () => obj => obj);

describe('<LiveshoppingWidget />', () => {
  /**
   * Mocks the liveshopping products pipeline request.
   */
  const getLiveshoppingProductsMock = () => {};
  const settings = {};
  const products = [
    {
      id: '1234',
      name: 'First product',
      featuredImageUrl: 'http://placekitten.com/300/300',
      price: {
        currency: 'EUR',
        unitPriceStriked: 20,
        unitPriceMin: 0,
        unitPrice: 100,
      },
      liveshoppings: [{
        from: 0,
        to: 123456789,
      }],
    }, {
      id: '1235',
      name: 'Second product',
      featuredImageUrl: 'http://placekitten.com/300/300',
      price: {
        currency: 'EUR',
        unitPriceStriked: 20,
        unitPriceMin: 0,
        unitPrice: 100,
      },
      liveshoppings: [{
        from: 0,
        to: 123456789,
      }],
    },
  ];

  it('should not render the widget without any data', () => {
    const wrapper = shallow(
      <LiveshoppingWidget
        settings={settings}
        getLiveshoppingProducts={getLiveshoppingProductsMock}
        products={[]}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Card).length).toBe(0);
  });

  it('should render the widget with no slider for one product', () => {
    const wrapper = mount(
      <LiveshoppingWidget
        settings={settings}
        getLiveshoppingProducts={getLiveshoppingProductsMock}
        products={[products[0]]}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Card).length).toBe(1);
    expect(wrapper.find(PriceStriked).length).toBe(1);
  });

  it('should render the widget with a slider for multiple products', () => {
    const wrapper = mount(
      <LiveshoppingWidget
        settings={settings}
        getLiveshoppingProducts={getLiveshoppingProductsMock}
        products={products}
      />
    );

    const expectedCards = products.length;

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Card).length).toBe(expectedCards);
    expect(wrapper.find(PriceStriked).length).toBe(expectedCards);
  });
});
