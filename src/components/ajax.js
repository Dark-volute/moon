function ajax (method, url, options) {
    let xhr = new XMLHttpRequest()

    if (xhr.upload) {
        xhr.upload.onprogress = function progress(e) {
            if (e.total > 0) {
                e.percent = e.loaded / e.total * 100;
            }
            options.onProgress(e);
        };
    }

    xhr.onload = () => {
        if (xhr.status < 200 || xhr.status >= 300) {
            return   options.fail && options.fail(xhr, xhr.status)
        }

        options.success && options.success(JSON.parse(xhr.response))
    }
    xhr.onerror = () => {
        options.fail && options.fail(xhr, xhr.status)
    }

    xhr.open(method, url)


    xhr.send(options.data)
}



export default {
    get () {},
    post (url, options) {
        return ajax('post', url, options)
    },
    put () {},
    delete () {},
    patch () {}
}