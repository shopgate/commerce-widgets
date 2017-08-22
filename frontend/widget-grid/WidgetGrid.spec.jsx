import React from 'react';
import { mount } from 'enzyme';
import extensions from 'Extensions';
import WidgetGrid from './WidgetGrid';

describe('<WidgetGrid />', () => {
  it('should render with a config', () => {
    const config = [{
      col: 0,
      row: 0,
      width: 12,
      height: 3,
      settings: {
        id: 83535,
        image: 'https://data.shopgate.com/shop_widget_images/23836/92204c0f264ac30d6836994c2fb64eb1.min.jpeg',
      },
      type: 'core-widgets/image',
    }];

    const wrapper = mount(
      <WidgetGrid config={config} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(extensions['core-widgets/image']).exists()).toBe(true);
  });

  it('should not render without a `config` prop', () => {
    const wrapper = mount(

      <WidgetGrid />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').children().length).toBe(0);
  });
});
