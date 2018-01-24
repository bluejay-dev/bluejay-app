import { addDecorator, setAddon, configure } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withConsole } from '@storybook/addon-console';
import { configure as configureEnzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configureEnzyme({ adapter: new Adapter() });

const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
setAddon(JSXAddon);

configure(loadStories, module);
