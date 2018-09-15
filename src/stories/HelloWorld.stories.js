import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import HelloWorld from './../components/HelloWorld.vue';

storiesOf('MyButton', module)
  .add('story as a template', () => '<my-button :rounded="true">story as a function template</my-button>')
  .add('story as a component', () => ({
    components: { HelloWorld },
    template: '<my-button :rounded="true">rounded</my-button>'
  }));