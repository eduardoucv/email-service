# About The Project

Backend Coding Challenge - This is the EMAIL SERVICE from the subscription project that consists of 3 microservices:

1.Public Service: Backend for Frontend microservice to be used by UI frontend.

2.Subscription Service: microservice implementing subscription logic, including persistence of
subscription data in a database and email notification to confirm process is completed.

3.Email Service: microservice mocking email notifications. 


## Tech Stack

NodeJS version: 19.7.0

NestJs

Docker


## Getting Started

To start developing the project please check if you have these tools installed on your machine:

* [Node.js](https://nodejs.org/en/download/)
* [Docker](https://www.docker.com/get-started)

### Installation

1. Clone the repo

```sh
git clone https://github.com/eduardoucv/email-service
```

2. Move into email-service folder

```sh
cd email-service
```


3. Install dependencies

```sh
npm install
```

4. Run docker-compose to start development environment

```sh
docker-compose up
```



## Running Tests

To run tests, run the following command

```bash
  npm run test
```



## Authors

- [@eduardoucv](https://www.github.com/eduardoucv)

