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
  {
    icon: "widgets",
    text: "常用功能",
    children: [
      { text: "常用功能", icon: "apps", name: 'test-1' },
      { text: "菜单04-02", icon: "apps", name: 'test-2' }
    ]
  },
  {
    icon: "settings",
    text: "系统设置",
    children: [
      { text: "系统信息", icon: "apps", name: 'test-3' },
      { text: "菜单04-02", icon: "apps", name: 'test-4' }
    ]
  },
  { icon: "apps", text: "菜单02" },
  { icon: "apps", text: "菜单03" }
]