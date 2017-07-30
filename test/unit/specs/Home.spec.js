import Vue from 'vue'
import Home from '@/scenes/Home'

describe('Home.vue', () => {
  it('deve exibir o conteudo', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h2').textContent)
      .to.equal('Conteúdo')
  })
})
