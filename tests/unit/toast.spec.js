import chai, { expect } from 'chai'
import Toast from '@/components/toast/toast.vue'
import { mount } from '@vue/test-utils'

describe('Toast.vue', () => {
    it('存在', () => {
        expect(Toast).to.exist
    })
    it('autoClose', (done) => {
        const wrapper = mount(Toast,{
            propsData: {
                autoClose: 1,
            }
        })
        const vm = wrapper.vm
        vm.$on('close', () => {
            expect(document.body.contains(vm.$el)).to.eq(false)
            done()
        })
    })
    it('接受 enableHtml', () => {
        const wrapper = mount(Toast, {
            enableHtml:true,
            slots:{
                default:'<strong id="test">hi</strong>'
            }
        })
        const vm = wrapper.vm
        let strong = vm.$el.querySelector('#test')
        expect(strong).to.exist
    })
})