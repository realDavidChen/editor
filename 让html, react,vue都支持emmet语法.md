    
 ## 让html, react 和vue都支持emmet语法
 在setting.json中，添加一下字段

```
    "emmet.showSuggestionsAsSnippets": true,
    "files.associations": {
        "javascript": "javascriptreact",
        "*html": "html", 
        "*njk": "html",
        "vue-html": "html",
        "razor": "html",
        "plaintext": "jade"
    },

```