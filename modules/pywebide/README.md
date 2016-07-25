# Raspbuggy Python Web IDE

The Raspbuggy python web IDE is a simple programming environment built on top of Google Blockly.
It is distributed as a Docker container which you can run on any Raspberry Pi with the following
command.

docker run -ti --rm --privileged --net=host --name=pywebide cmcrobotics/raspbuggy-pywebide /bin/bash


The build of the Docker image is done through Apache Maven but a pending JFFI bug prevents the whole sequence
from finishing successfully.
You can generate the Dockerfile with :

mvn package

then :

cd target/docker
docker build -t cmcrobotics/raspbuggy-pywebide:<your version> .


