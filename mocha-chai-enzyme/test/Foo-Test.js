'use strict';

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from 'PUT WHERE FOO WILL BE HERE';

// test for div foo
//            -- bar
//            -- bar

describe ('Component Foo', function() {
  const wrapper = shallow (<Foo />);
  expect(wrapper.is('.foo')).to.equal(true);
})
