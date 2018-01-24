import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import * as expect from 'expect';

import App from './App';

const stories = storiesOf('App', module);

stories.add('with text', () => {
  const story = <App text={text('Text', 'hi')} />;

  specs(() => describe('Hello World', function () {
    it('Should have the Hello World label', function () {
      let output = mount(story);
      expect(output.text()).toContain('hi');
    });

    it('Should not have foo bar', function () {
      let output = mount(story);
      expect(output.text()).toContain('bye');
    });
  }));

  return story;
});

// stories.addWithJSX('with some emoji', () => (
//   <App text={text('Text', '😀')} />
// ));
