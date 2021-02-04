# pipenv was not found in VS code

To find pipenv path

$ pipenv --py 

output path like:
 /Users/[username]/.local/share/virtualenvs/[app-NVz65APH]/bin/python

and then modify settings.json:

copy output path to:

settings.json:

```
"python.pythonPath": "/Users/[username]/.local/share/virtualenvs/[app-NVz65APH]/bin/python",

```

