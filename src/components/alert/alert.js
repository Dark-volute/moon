import Alert from './alert.vue'
import Vue from 'vue'

const alertConstructor = Vue.extend(Alert)

let instance

const  createAlert = (message,title)=>{
    if(instance) return

    instance = new alertConstructor({
        el: document.createElement('div'),
        data:{
            message: message || '这是一段内容',
            title: title || '这是标题'
        }
    })
    instance.visible = true;
    document.body.appendChild(instance.$el)
  }

Vue.prototype.$alert = function(message, title,alertOptions) {
    createAlert(message,title)

    return new Promise((resolve, reject) => {
        instance.$on('action', (action)=>{
            if (action === 'confirm') {
                resolve(action)
            } else {
                reject(action)
            }
            instance.visible = false;
            instance.$el.remove()
            instance = null
        })
    })
}


