import Confirm from './confirm.vue'
import Vue from 'vue'

const alertConstructor = Vue.extend(Confirm)

let instance

const  createAlert = (message,title)=>{
    if(instance) return

    instance = new alertConstructor({
        el: document.createElement('div'),
        data:{
            message: message || '这是一段内容',
            title: title || '这是标题',
        }
    })
    instance.visible = true;
    document.body.appendChild(instance.$el)
  }

function destroy(){
    if(instance) {
        instance.visible = false;
        instance.$el.remove()
        instance = null
    }
}  

Vue.prototype.$confirm = function(message, title,alertOptions) {
    createAlert(message,title)

    return new Promise((resolve, reject) => {
        instance.success = () =>{
            resolve()
            destroy()
        }
        instance.cancel = () =>{
            reject()
            destroy()
        }
    })
}


