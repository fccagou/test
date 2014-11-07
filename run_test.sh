#!/bin/sh


cd $(dirname $0)


export PYTHON_EGG_CACHE=""
export APPDIR=""
export DOCUMENT_ROOT="$(pwd)/wsgi"
export OPENSHIFT_DATA_DIR="$(pwd)/data"


python wsgi/application 

