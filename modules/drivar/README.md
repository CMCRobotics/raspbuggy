# Drivar - Raspbuggy python abstraction layer

Drivar is the Raspbuggy python abstraction layer. It ships as a regular pypi package, but relies on packages that may not be available
centrally (e.g. Adafruit Motor HAT).

## How to build the package

The Drivar package uses Apache Maven to package (using distutils under the cover).
The release is currently done via setup.py and pypi like so :

```
mvn clean package
cd target/py/setup.py
python sdist bdist_egg upload -r pypi
```

