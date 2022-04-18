# Docker Workshop 
## Dockerize Node.js Application
[Slides](https://docs.google.com/presentation/d/1h8DPC6Sfs2Ezgi3EF39eTWlAeJDAvXSHSkvhnX14blI/edit#slide=id.g11e513142e0_0_105)


#### Learning objectives:

##### Undesrtand a Docker File Instructions
##### Create a Dockerfile
##### Build and run a web application packaged in a Docker image
#####  Manipulate Images/Containers  
######   - Display a list of containers
######   - What's inside the Container?
######   - Stop Container
######   - Remove Container
######   - Remove Image
##### Modify a Dockerfile

### Prerequisites
In your terminal run the following commands:

```
mkdir docker-workshop

cd docker-workshop

git clone repo https://github.com/alena-snyk/Docker-HandsOn-Workshop.git

```


## Undesrtand a Docker File Instructions

#### FROM 
```
FROM node:16
```

#### WORKDIR 
Creare A directory to hold the application code inside the image
```
WORKDIR /usr/src/app
```

#### COPY
Copy files from a local source location to a destination in the Docker container. 

```
COPY package*.json ./
```
#### RUN 
Downloads a package and it's dependencies
```
RUN npm install
```
#### COPY 
```
COPY . .
```

### CMD
```
CMD [ "node", "server.js" ]
```



## Create a Dockerfile together
```
touch Dockerfile
```

## Build and run a web application packaged in a Docker image

```
docker build -t my-app:5 .
```
##### List Images

```
docker images
OR
docker image ls
```
<img width="1199" alt="image" src="https://user-images.githubusercontent.com/97297322/163794721-93d027e3-891b-4d58-8a15-e498394b43a4.png">


##### Run container 

arguments: -p: define the port
           -d: run in detached mode

```
docker run -p 4001:8080 -d my-app:5
```

By default, Docker doesn't allow inbound network requests to reach your container. 
You need to tell Docker to assign a specific port number from your computer to a specific port number in the container by adding the -p option to docker run. 
This instruction enables network requests to the container on the specified port.

## Display the list of containers
```
docker ps
```
<img width="556" alt="image" src="https://user-images.githubusercontent.com/97297322/163789466-483bb15e-c41a-4636-b3b3-361d5dccc612.png">


## Enter Container

```
docker run -it my-app:5 bash
OR
docker exec -it <container id> bash
```
List folders

```
ls
```

## Create a directory inside of the container, not in my machine!
```
Mkdir -p /home/app
```

## Exit Container
```
exit
``` 

## Create a directory inside of the container, not in my machine!
```
Mkdir -p /home/app
```

## Copy file from my host inside my container image ("." meaning local)
```
Copy . /home/app
```

## In order to modify image you need to rebuild it:
```

find image
docker ps -a | grep my-app

delete container
docker rm <container id> 

delete image
docker rmi <image id>

modify a dockerfile 
Add a line to a Dockerfile:
From: Node 16

rebuild 







