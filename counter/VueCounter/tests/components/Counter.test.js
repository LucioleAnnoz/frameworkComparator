// sum.test.js
import { expect, test } from 'vitest'
import {mount} from '@vue/test-utils'

import Counter from '../../src/components/Counter.vue'

test('Counter is 0', () => {
    const wrapper = mount(Counter.setup())

    expect(wrapper.counter.value).toBe(0);
})