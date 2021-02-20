# vs code键盘自定义+vim超高效工作状态完美配置

##  自定义vs键盘快捷键

1. F1 ==》 搜索 ```Preferences: open Keyboard Shortcuts``` 打开快捷键自定义面板
2. 



## 安装vim官方插件

## 快捷键配置 

1. F1==》搜索 keyboard  打开 Preferences: Open keyboard Shortcuts
2. 搜索 ctrl+[  对着vim相关的模式切换快捷键，改成 alt+f （实现单手快捷模式切换，就是在vs code和vim两种模式间的快速切换，另，点esc也可以切换，就是距离太远，对很多大的键盘不是非常方便）
3. 把Esc键和vim关联的按钮解除掉，让esc成为vs code默认值（因为vim用上esc键会导致取消自动热点匹配列表变得困难，使snippets的懒人快捷键发生冲突）
4. 在插入模式下，如果要用到ctrl+c复制内容，但是vim模式下的ctrl+c是退出到正常模式，所以要把vim有关的ctrl+c快捷键停用

## 该 save 保存功能配置双快捷键（很多的应用，保存文件后，立马刷新，我们快捷键除了保留原来的 ctrl+s外，在单独的给配置一个alt+s， 这样保存文件的效率跟高一点）

操作流程如下（请完整的按流程操作，其他方式可能无法修改）：

1. 在 Preferences: Open keyboard Shortcuts 右上角有个按钮（鼠标悬停提示：open keyboard shortcut（json）），点击进入
2. 搜索 save 找到复制
```
 {
    "key": "ctrl+s",
    "command": "workbench.action.files.save"
  },
  ```
  在新的一行中，在粘帖一份
  
  粘帖后效果如下：
  ```
  
  {
    "key": "ctrl+s",
    "command": "-workbench.action.files.save"
  },
  ```
  把 ctrl+s 改为 alt+s,并把下一行的-去掉
  
  修改后的结果如下：
  ```
   {
    "key": "alt+s",
    "command": "workbench.action.files.save"
  },
  ```
  
  最终结果：
  
  ```
{
    "key": "ctrl+s",
    "command": "workbench.action.files.save"
  },
  {
    "key": "alt+s",
    "command": "workbench.action.files.save"
  },
  
 ```
 
 完成了，请在vs编辑器中测试效果，如果没有反应，重启一下编辑器，或者在 Preferences: Open keyboard Shortcuts 界面，手工填加一遍试试
