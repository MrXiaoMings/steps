const proxyInstance = {
    /**
     * 判断数据类型
     * @param {*} obj
     * @returns
     */

    _typeof: function (obj) {
        var s = Object.prototype.toString.call(obj)
        return s.match(/\[object (.*?)\]/)[1].toLowerCase()
    }
}

export default proxyInstance
