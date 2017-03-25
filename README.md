

# Requires
    $ ruby --version
    ruby 2.2.0p0 (2014-12-25 revision 49005) [x86_64-darwin15]
    $ npm --version
    3.10.10
    $ mysql --version
    mysql  Ver 14.14 Distrib 5.7.10, for osx10.11 (x86_64) using  EditLine wrapper

# Setup
    bundle install
    npm install -g yarn
    yarn install --modules-folder client
    npm start --prefix client # runs webpack-dev-server @ localhost:8080
    rails server