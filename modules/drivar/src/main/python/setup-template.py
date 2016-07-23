from setuptools import setup

setup(
      install_requires=['distribute'],
      name = '${PROJECT_NAME}',
      description = 'Hardware abstraction layer for Raspbuggy',
      author = 'Brice Copy',
      url = 'https://github.com/cmcrobotics/raspbuggy',
      keywords = ['raspbuggy'],
      version = '${VERSION}',
      packages = ['drivar']
)