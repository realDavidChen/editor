# vs code键盘自定义+vim超高效工作状态完美配置

## 一. 自定义vs键盘快捷键

1. F1 ==》 搜索 ```Preferences: open Keyboard Shortcuts``` 打开快捷键自定义面板
2. 方法一，在搜索框中，直接按下你要搜索的快捷键，然后找到你要修改的快捷键==》右键，可以选择删除快捷键，修改快捷键或者附加快捷键
3. 方法二，在一大堆快捷键中，随意放在其中的一个位置，右键，然后，出现右键选项==》选择==》新增快捷键==》按任何你准备要使用的快捷键，这个时候，会提示目前已经使用了该快捷键的列表，记住点列表提示进入查看相对应的列表（enter是确认，esc是取消，我们是要的是查询，注意：不要点enter）
4. 进入后，可以看到对应快捷键被用来执行vs code的什么命令，和被什么插件使用在其他用途，这个时候，你就可以执行相关连的添加快捷键，删除，修改等操作了，一下为修改方向键为例说明：


> 任何地方点右键====》选 add keybinding ==> 按下向下的箭头 出现 down, 并出现 * existing commands have keybinding 就点击这条进入，就可以看到已经使用了向下箭头的列表

> 找到 cursorDown textInputFocus 这一行，只是vs编辑器默认的向下箭头键，点右键 ===》add keybinding ==>(正式的设置你自己的快捷键，我模仿vim多个alt)alt+j==>enter(确认你新添加的快捷键，相当于新的和默认的快捷键都可以用)

> 在编辑器中，试试是否已经修改成功了，如果可以，其他的按相同的方法全部做相应的处理就可以了

5. 自定义好远离键盘中心的方向键，esc键后，你会发现你编写代码的速度快了好多

  



## 二. 安装vim官方插件，和vs组合使用（vim的快捷键方法，请参照vim用户手册）


## 快捷键配置 （此部分内容为早期所写，有点繁琐，设置快捷键方法请参照第一部分即可，保留着这部分内容仅提供参考）

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
 
 
 ## 三, 几个最常用的快捷键方法
 
 1. 在下面的新一行中，插入  ctrl+enter
 2. 在上一行插入 ctrl+shift + enter
 3. 选择弹出的字典，除了方向键盘，和可以用 ctrl+j向下选择ctrl+u回到第一条，并按tab键选中
 4. 减少enter热键被占用，提高录入效率和防止录入错误
 5. 使用snippet时，生成框架后，输入文字时依然被框选，导致其他内容的自动热点提示框不能弹出，按esc可以 leaveSnippet ， 搜索 leaveSnippet 可以再给它添加一个 alt+d的热键
