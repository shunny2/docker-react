<p align="center">
<a href="#about-scrim">About Scrim</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#technologies">Technologies</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#how-to-run">How to run</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#status">Status</a>
</p>

</br>

![Captura de tela 2022-06-22 103753](https://user-images.githubusercontent.com/72872854/175042987-022f1d10-6b61-42c7-b122-4261fe972bbc.png)

## About Scrim

Scrim is a web application for registering and listing games. The application makes requests to the backend via API to perform its functions.

For the development of Scrim, the most modern libraries that react can offer were used.

A production version is available at: [http://scrim-games-app.herokuapp.com](http://scrim-games-app.herokuapp.com)

### Technologies

- [ReactJS](https://reactjs.org/)
- [PHP](https://www.php.net/)
- [Laravel](https://laravel.com/)
- [Docker](https://www.docker.com/)

## How to run

First, start by cloning the repository:
```shell
git clone https://github.com/shunny2/scrim-frontend
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

Run the project:
```bash
npm start
```

## Status

> Status: Finish.
