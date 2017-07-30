import Vue from 'vue'
import Header from '@/components/Header'

describe('Header.vue', () => {
  it('deve exibir o titulo', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title').textContent)
      .to.equal('Vueflix')
  })
})
