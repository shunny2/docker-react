<p align="center">
  <a href="#about-scrim-games">About Scrim Games</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-run">How to run</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#project-status">Project Status</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

</br>

![scrim-gif](https://user-images.githubusercontent.com/72872854/196009205-08586170-6500-4d86-b1ea-8b10faea8190.gif)

<p align="center">
  <a href="https://img.shields.io/github/stars/shunny2/scrim-games?style=social"><img src="https://img.shields.io/github/stars/shunny2/scrim-games?style=social" alt="Stars"></a>
  <a href="https://img.shields.io/github/forks/shunny2/scrim-games?style=social"><img src="https://img.shields.io/github/forks/shunny2/scrim-games?style=social" alt="Forks"></a>
  <a href="https://img.shields.io/github/license/shunny2/scrim-games"><img src="https://img.shields.io/github/license/shunny2/scrim-games" alt="License"></a>
</p>

## About Scrim Games

<b>Scrim Games</b> is a web application for recording and listing games. The application consumes a rest [API](https://github.com/shunny2/scrim-games-api) in PHP (Laravel) to perform user authentication and other functionalities.

For the development of <b>Scrim Games</b>, the most modern libraries that [React](https://reactjs.org/) and [Laravel](https://laravel.com/) can offer were used.

A production version is available at [https://scrim-games.vercel.app/](https://scrim-games.vercel.app/)

## Technologies

<table>
  <thead>
  </thead>
  <tbody>
    <td>
      <a href="https://reactjs.org/" title="React"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React logo image." /></a>
    </td>
    <td>
      <a href="https://www.docker.com/" title="Docker"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/docker.svg" alt="Docker logo image." /></a>
    </td>
  </tbody>
</table>

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

## License

This project is under an [MIT](https://opensource.org/licenses/MIT) license.

<hr></hr>

<p align="center">Created by <a href="https://github.com/shunny2"><b>Alexander Davis</b><a/>.</p>
