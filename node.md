# Client-side web site

## Node.js

### Check version
* Open cmd.exe (windows)
* *node --version*

## NPM (Node.js Pack Manager)

* **npm init** to create a *package.json* 
* **npm install** will ensure your developer dependencies (read from *package.json*)are installed on your computer

## Scaffolding
* **package.json** Node.js references for project information including open-source dependencies and commands (start, test)
* **.gitignore** Blacklist of files that stay on our local and will not be committed to git or GitHub
* **.editorconfig** Ensures Whitespace is common and consistent across many IDE(text editors)
* **readme.md** Project main documentation document . GitHub, NPM.org and other sites will display this by default
* **Gruntfile.js** The rule book for Grunt.js. Define and customize our task using Grunt.js plugins.

## Minification
* Remove whitespace (indents and spaces)and comments(excluding important comments)
* CSS min will also change CSS rules to shortcuts(i.e. [Bootstrap] http://getbootstrap.com//dist/css/bootstrap.min.css))
* JS min will also rename your variables (i.e. [jQuery](http://code.jquery.com/jquery-1.10.2.min.js))
