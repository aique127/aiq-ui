// 导入组件，组件必须声明 name
import RQutton from './button'

// 为组件提供 install 安装方法，供按需引入
RQutton.install = function (Vue) {
  Vue.component(RQutton.name, RQutton)
}

// 导出组件
export default RQutton