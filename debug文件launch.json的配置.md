在需要调试的文件生成一个 在当前编辑文件夹下的 .vscode文件夹中，创建一个launch.json 文件,并添加如下内容： 

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debug File",
            "program": "${file}"
        }
    ]
}

```