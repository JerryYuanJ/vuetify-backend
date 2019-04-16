/**
 * menu 各字段的含义:
 *  icon: 对应的图标(https://material.io/tools/icons/)
 *  text: 显示的文本
 *  children: 子菜单
 *  name: 该菜单项对应的路由的名称
 * 
 */
export const menu = [
  { icon: "home", text: "主页", name: 'dashboard' },
  { icon: "timeline", text: "更新日志", name: 'timeline' },
  {
    icon: "view_quilt",
    text: "数据展示",
    children: [
      { text: "多级列表", icon: "list"},
      { text: "数据列表", icon: "view_column", name: 'multi-col'},
      { text: "数据表格", icon: "grid_on" },
      { text: "多页签视图", icon: "tab"},
      { text: "统计图", icon: "bar_chart"},
    ]
  },
  {
    icon: "widgets",
    text: "常用组件",
    children: [
      { text: "表单组件", icon: "border_color"},
      { text: "弹框组件", icon: "notifications"},
      { text: "展示组件", icon: "visibility"}
    ]
  },
  {
    icon: "settings",
    text: "系统设置",
    children: [
      { text: "通用设置", icon: "brightness_high"},
      { text: "样式设置", icon: "flare"},
    ]
  },
  {
    icon: "error",
    text: "错误页面",
    children: [
      { text: "404", icon: "help" },
    ]
  },
]

/**
 * 项目更新记录, 每一条reacod的含义:
 *  title: 标题 requiered
 *  detail: 更新详情 requiered
 *  date: 更新时间 required
 *  isBig: 是否是大更新,对应的dot的大小会改变 optional
 *  color: 标题栏的颜色 optional
 *  icon: dot对应的icon的颜色, optional
 */
export const history = [
  {
    title: '项目初始化',
    detail: '基于vue-cli3创建项目。项目UI库选用的是具有MD风格的vuetify，同时引入了vue全家桶的标配: vue-router 和 vuex。',
    date: '2019-04-09',
    isBig: true,
    color: 'cyan'
  },
  {
    title: 'UI初始化',
    detail: '搭建项目UI布局，完善左侧菜单栏和顶部导航栏。同时添加了timeline界面',
    date: '2019-04-13',
    isBig: false,
    color: 'green'
  },
  {
    title: '添加界面，完善数据mock',
    detail: `添加了多列数据页面的展示(multi-col)，给每一项添加了hover的效果; 
            完善了mock服务，使用工厂函数返回对象，确保列表中的每一项都是随机的`,
    date: '2019-04-16',
    isBig: false,
    color: 'blue'
  }
]