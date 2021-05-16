class Compuile {   // 指令解析
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        // console.log(this.el)
        this.vm = vm;
        console.log(this.el)
        //  获取文档碎片对象  减少内存中页面的回流和重绘
        const fragment = this.nodeFragement(this.el);
        // console.log(fragment)
    }
    compile(fargement) {

    }
    nodeFragement(el) {
        // 创建文档碎片
        const f = document.createDocumentFragment();
        let firstCild;
        console.log(el)
        while (firstCild = el.firstChild) {
            // console.log(el)
            f.appendChild(firstCild)
        }

        return f
    }
    isElementNode(el) {

        return el.nodeType === 1   // 判断是否是dom节点
    }
}
class MVue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        this.$options = options;
        if (this.$el) {
            new Compuile(this.$el, this)
        }
    }
}