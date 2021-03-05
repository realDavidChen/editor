# Make selected block of text uppercase

**File-> Preferences -> Keyboard Shortcuts.**

An editor will appear with keybindings.json file. Place the following JSON in there and save.

```

[
 {
    "key": "ctrl+shift+u",
    "command": "editor.action.transformToUppercase",
    "when": "editorTextFocus"
 },
 {
    "key": "ctrl+shift+l",
    "command": "editor.action.transformToLowercase",
    "when": "editorTextFocus"
 }
]

```