# vs code 键盘自定义+vim 超高效工作状态完美配置

> 今天对 vs code 的快捷键进行了布局，决定取消 vim 的插件，但是保留 vim 的快捷键风格，并进行改造

- v+\* 几个是官方默认的工具栏快捷键
- v+d 键，可以用来设置 取消，替代 esc 键
  - hideSuggestWidget 隐藏建议面板
  - 。。。
- alt+h\j\k\l 快速上下移动，替代 方向键盘（参考 vim）
- 快速跳转行首，行尾和页头，页尾， 用 home, end, page up, page down,跳转到指定行用 ctrl+g 输入行号，然后回车
- 建议框 selectNextSuggestion, selectPrevSuggestion 上下选择用 alt+u, alt+n 替代方向键

- 括号内的内容工具
  Bracket Pair Colorizer：点括号的一边，括号内文件高亮提示\
  Bracket Select：快速选中括号内的内容，快捷键已改为 alt+9 （默认 alt+a，容易误操作）

> 其它的快捷键方法，请参照官方文档
> 通过上面的改造，发现比在 vim 键盘插件来回切换用起来舒服多了。

## 工作区间的快速跳转

1. 从编辑状态跳转到左侧的文件列表，按 ctrl+shift+e 然后箭头上下选择，确定按enter键
2. 已打开的多个文件之间切换，按 ctrl+tab 一直按到你要选择的那个文件，松开快捷键即可，也可以直接按alt+1,2...选择
3. 快速跳转到菜单栏， 按alt键，箭头键切换，再按一次alt返回原点

## 为快速的在编辑工作区和内置命令行之间来回切换，做了如下配置
F1 ==> keyboard ==> 
1. 搜索 Focus First Editor Grop 在原有的ctrl+1 基础上，右键添加一个新的快捷键，键盘同时按 alt+e 按enter确认  ## 目的： 光标快速到跳转到编辑处

2. 搜索 Focus Terminal （找到标有workbench.action.terminal.focus那一行) 添加 alt+v 快捷键  ## 目的，光标快速跳转到 命令行处，注意：如果在同一个命令行界面，分割成多个界面，可以按 alt+箭头键进行切换
3. 快捷打开与收起内置命令行工具 ctrl+`, 在这里可以多添加一个快捷键（Toggle Integrated Terminal,右键添加快捷键），还是alt+v， 如果需要调出面板时，按alt+v, 在按一次alt+v，收起面板，如果要跳转到工作界面，而继续保留命令行面板，只需要按设定好的alt+e即可，非常非常的实用
4. 



## 

=============================================================================

============================= 以下为旧文，仅供参考===========================

## 一. 自定义 vs 键盘快捷键

1. F1 ==》 搜索 `Preferences: open Keyboard Shortcuts` 打开快捷键自定义面板
2. 方法一，在搜索框中，直接按下你要搜索的快捷键，然后找到你要修改的快捷键==》右键，可以选择删除快捷键，修改快捷键或者附加快捷键
3. 方法二，在一大堆快捷键中，随意放在其中的一个位置，右键，然后，出现右键选项==》选择==》新增快捷键==》按任何你准备要使用的快捷键，这个时候，会提示目前已经使用了该快捷键的列表，记住点列表提示进入查看相对应的列表（enter 是确认，esc 是取消，我们是要的是查询，注意：不要点 enter）
4. 进入后，可以看到对应快捷键被用来执行 vs code 的什么命令，和被什么插件使用在其他用途，这个时候，你就可以执行相关连的添加快捷键，删除，修改等操作了，一下为修改方向键为例说明：

> 任何地方点右键====》选 add keybinding ==> 按下向下的箭头 出现 down, 并出现 \* existing commands have keybinding 就点击这条进入，就可以看到已经使用了向下箭头的列表

> 找到 cursorDown textInputFocus 这一行，只是 vs 编辑器默认的向下箭头键，点右键 ===》add keybinding ==>(正式的设置你自己的快捷键，我模仿 vim 多个 alt)alt+j==>enter(确认你新添加的快捷键，相当于新的和默认的快捷键都可以用)

> 在编辑器中，试试是否已经修改成功了，如果可以，其他的按相同的方法全部做相应的处理就可以了

5. 自定义好远离键盘中心的方向键，esc 键后，你会发现你编写代码的速度快了好多

## 二. 安装 vim 官方插件，和 vs 组合使用（vim 的快捷键方法，请参照 vim 用户手册）

## 快捷键配置 （此部分内容为早期所写，有点繁琐，设置快捷键方法请参照第一部分即可，保留着这部分内容仅提供参考）

1. F1==》搜索 keyboard 打开 Preferences: Open keyboard Shortcuts
2. 搜索 ctrl+[ 对着 vim 相关的模式切换快捷键，改成 alt+f （实现单手快捷模式切换，就是在 vs code 和 vim 两种模式间的快速切换，另，点 esc 也可以切换，就是距离太远，对很多大的键盘不是非常方便）
3. 把 Esc 键和 vim 关联的按钮解除掉，让 esc 成为 vs code 默认值（因为 vim 用上 esc 键会导致取消自动热点匹配列表变得困难，使 snippets 的懒人快捷键发生冲突）
4. 在插入模式下，如果要用到 ctrl+c 复制内容，但是 vim 模式下的 ctrl+c 是退出到正常模式，所以要把 vim 有关的 ctrl+c 快捷键停用

## 该 save 保存功能配置双快捷键（很多的应用，保存文件后，立马刷新，我们快捷键除了保留原来的 ctrl+s 外，在单独的给配置一个 alt+s， 这样保存文件的效率跟高一点）

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

完成了，请在 vs 编辑器中测试效果，如果没有反应，重启一下编辑器，或者在 Preferences: Open keyboard Shortcuts 界面，手工填加一遍试试

## 三, 几个最常用的快捷键方法

1.  在下面的新一行中，插入 ctrl+enter
2.  在上一行插入 ctrl+shift + enter
3.  选择弹出的字典，除了方向键盘，和可以用 ctrl+j 向下选择 ctrl+u 回到第一条，并按 tab 键选中
4.  减少 enter 热键被占用，提高录入效率和防止录入错误
5.  使用 snippet 时，生成框架后，输入文字时依然被框选，导致其他内容的自动热点提示框不能弹出，按 esc 可以 leaveSnippet ， 搜索 leaveSnippet 可以再给它添加一个 alt+d 的热键
