#!/bin/bash
cloneOrUpdateAndInstallProject(){
    PROJECT=$(ls -d $1)
    echo "$PROJECT ......"
    if [ $PROJECT == $1 ] ; then 
        echo "update $1 ..." 
        cd ./$1
        git fetch --all
        git checkout master
        git pull
        npm install
        cd ..
    else 
        echo "clone $1 ..."
        git clone https://github.com/Otche/$1.git
        cd ./$1
        git fetch --all
        git checkout master
        git pull
        npm install
        cd ..
    fi  
}

cd ..
cloneOrUpdateAndInstallProject back-facemash
cloneOrUpdateAndInstallProject front-facemash
