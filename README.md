Angular installation

First install Python virtualenv

    virtualenv-2.7 --no-site-packages pythonenv
    cd pythonenv

And some other libs

    gem update --system && gem install compass

Then install nodeenv. ( _You can find the python package here_ : [Nodeenv](https://pypi.python.org/pypi/nodeenv) )

    bin/pip install nodeenv
    bin/nodeenv nodeenv
    
To activate nodejs

    source ../nodejs/nodeenv/bin/activate

Download app

    git clone git@github.com:getpenelope/penelope.js.git
    
rename your app in bower.json (_this name has to be the name given to the app folder es: client_)

    npm install
    bower install
    grunt serve
