# Docker-HandsOn-Workshop


Docker build -t my-app:1.0 .

```
docker build .  -t my-app:1.0

```

```
docker images

```

# Tasks:
## Working with the Docker File
##  Build a docker image from the application
##  Run Container
##  Display a list of containers
##  Enter Container - bash
##  Stop Image
##  Remove Image
##  Remove Container
##  Remove a list of containers


## Working with the Docker File

Dokerfile a blurprint for creating an images

### Dockerfile Commands explained

#### Create a directory inside of the container, not in my machine!
```bash
mkdir -p /home/app
```

#### Copy file from my host inside my container image ("." meaning local)
```
Copy . /home/app
```

## Build a docker image based on a Docker File

```
docker build -t my-app:1.0 .
```
## List an existing images

```
docker images
```

## Run container (arguments: -p: define the port -d run in detached mode)
```
docker run -p 4001:8080 -d my-app:1.0
```

## Display the list of containers
```
docker ps
```

## Enter Container
docker run -it my-app bash











