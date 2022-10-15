<p align="center">
<a href="#about-scrim">About Scrim</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#technologies">Technologies</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#how-to-run">How to run</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#project-status">Project Status</a>
</p>

</br>

![scrim-gif](https://user-images.githubusercontent.com/72872854/196009205-08586170-6500-4d86-b1ea-8b10faea8190.gif)

## About Scrim

Scrim is a web application for registering and listing games. The application makes requests to the backend via API to perform its functions.

For the development of Scrim, the most modern libraries that react can offer were used.

A production version is available at: [https://scrim-games-app.herokuapp.com](https://scrim-games-app.herokuapp.com)

## Technologies

- [ReactJS](https://reactjs.org/)
- [PHP](https://www.php.net/)
- [Laravel](https://laravel.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## How to run

First, start by cloning the repository:
```shell
git clone https://github.com/shunny2/scrim-frontend
```

Install project dependencies:
```bash
npm install
```

In the project directory, you can run:
```bash
npm start
```

If you are using docker you should build an image:
```bash
docker build -t scrim_frontend .
```

Running the container along with the image:
```bash
docker run -d --restart=always -p 3000:3000 scrim_frontend
```

Enter the container:
```bash
docker exec -it container_id /bin/bash
```

Install project dependencies:
```bash
npm install
```

Run the project:
```bash
npm start
```

## Project Status

> Status: Completed.

<hr></hr>

<p align="center">Created by <a href="https://github.com/shunny2"><b>Alexander Davis</b><a/>.</p>
