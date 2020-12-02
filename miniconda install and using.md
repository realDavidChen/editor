## dowloads news version conda and select your env(win, mac,or linux)
2
https://docs.conda.io/en/latest/miniconda.html
3
##install 
4
$ dash miniconda****.sh
5
# reopen terminal type:
6
$ conda
7
you can get help document
8
## create news conda env example:
9
$ conda create --name kivy
10
check news env
11
$ conda env list
12
​
13
## activate news env
14
$ conda activate kivy
15
> you will see: (kivy)~$ 
16
​
17
## check kivy env
18
$ kivy list
19
## conda install package:
20
example, I want to install python3.7
21
you can search package from conda pository
22
$ conda search python

you can get many version of python in the list, if you want to install the specially version, like this:
$ conda install python=3.7.9

> Note! conda respository pageckage no much. you can try using this method, to inprovte

$ conda install pip
using pip the install package
$ pip search kivy
$ pip install kivy

## conda map:

conda

   env1
   
   env2--install python3.8
   
   env3--pageckage:kivy, python3.7
   
   
