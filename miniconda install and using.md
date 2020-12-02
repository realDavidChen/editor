## dowloads news version conda and select your env(win, mac,or linux)

https://docs.conda.io/en/latest/miniconda.html

> or using terminal wget miniconda3

$ wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh


Make the miniconda installation script executable

$ chmod +x Miniconda3-latest-Linux-x86_64.sh

##install miniconda

$ ./Miniconda3-latest-Linux-x86_64.sh

## restart terminal and type:

$ conda

you can get help document

## create news conda env example:

$ conda create --name kivy

check news env

$ conda env list


## activate news env

$ conda activate kivy

> you will see: (kivy)~$ 

## check kivy env

$ kivy list

## conda install package:

example, I want to install python3.7

you can search package from conda pository

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
   
   
