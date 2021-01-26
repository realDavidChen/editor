## remove VS studio settings
> This is the easiest solution if your VS studio is not working properly for a variety of reasons

```
$ cd ~ && rm -rf .vscode && rm -rf .config/Code
```

## fix terminal not working, try:

Here is the fix:

- CLick bottom left setting wheel
- go to setting > Features > terminal
- Select Explorer kind: Intergrated
- Change inheritEnv to true.

## fix Ctrl + click multi-cursor not working

in keyboard shortcus search: multiCursor, and settings, Toggle Multi-Cursor Modifier keybinding to ctrl+shift+9(or + 1,2,3,4,5 whatever you want)

> and then, ctrl+click multi-cursor selects is work, I don't know what is reason, maybe just bug
