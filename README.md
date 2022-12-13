# CalStatePays

CalStatePays is a visualization application for discovering, exploring, and analyzing the potential student financial earnings after graduation from 1 of 6 different California State Universities (CSU). California State employment records associated with alumni from these CSU campuses are used as the bases for the information that is presented.

* The production website for CalStatePays is located at: https://calstatepays.org

## Table of Contents
<!-- TOC -->
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
     - [Production Installation](#production-installation)
     - [Development Installation](#development-installation)
  - [Development Cycle](#development-cycle)
     - [Front end](#front-end)
     - [Database](#database)
  - [Bugs and issues:](#bugs-and-issues)
  - [License](#license)
<!-- /TOC -->
## Prerequisites
- Install [Git](https://git-scm.com/downloads) to access the software repository
- Install [Docker](https://docs.docker.com/install/) desktop to run containers on your development machine
- Install [Docker-Compose](https://docs.docker.com/compose/install/) to manage a set of containers
- Select and Install you Favorite Text Editor or IDE
- Ensure you meet the [Laravel 5.4 requirements](https://laravel.com/docs/5.4) to perform development work

## Installation
There are several different installation options for the CalStatePays software. Outlined below are several options to deploy the web application.

### Production Installation
In order to successfully deploy the CalStatePays software to the web the following requirements need to be met:
+ A machine that will be used to host the application, this includes:
  + PHP 7.3 installed with the required PHP extensions that Laravel uses. A detailed list can be found on the official [laravel documentation](https://laravel.com/docs/5.4/installation#web-server-configuration).
  + An Apache web server is required to serve the software. The Apache web server needs to have the following module enabled `mod_rewrite`.
+ A [MySQL](https://www.mysql.com/) database is required to house the data. [MariaDB](https://mariadb.org/) can be used as a replacement database without any issues.
+ Proper DNS configuration to point the web server's IP address to calstatepays.org.

### Development Installation
As a developer, you will find it useful to install the application on your local machine. The development installation creates four containers used to setup a working environment. This environment contains a web server, a database, and two supporting containers. The web server mounts the home directory of your cloned project. This allows the developer to use their favorite development tools outside of the containers, with updates to software being made directly.

The steps you need to perform to install this software are as follows:
  ```
  git clone https://github.com/CalStatePays/calstatepays.git
  cd calstatepays
  cp .env.dev .env
  docker-compose up --detach
  ```

  ```
  # you may have to wait a bit before executing the following commands to allow the containers to stabilize
  docker-compose exec web php artisan migrate --seed
  ```

⚠️ This process is driven by the `.env.dev` file. Container names,    + `COMPOSE_PROJECT_NAME` which has been set to "calstatepays". You may want to review the contents of this file prior to running the `docker-compose` command referenced above, and make appropriate changes. E.g., you might want to change the default password for the database.

You may launch your favorite web browser and access your version of the calstatepays application:
  * The application is reachable at: http://localhost:8080/    # The port number can be changed via the WEB_PORT environment variable
  * The database GUI is reachable at: http://localhost:8081/   # The port number can be changed via the ADMINER_PORT environment variable

You can reset your docker environment via the following command:
```
docker-compose down
docker volume rm calstatepays_volume           # Assuming $COMPOSE_PROJECT_NAME == calstatepays
docker-compose up --detach --force-recreate
```

## Development cycle
During development, there are two major components that involve additional processing to ensure the code and database are setup correctly. One component is related to the front-end, where [Yarn](https://yarnpkg.com/) / [npm](https://www.npmjs.com/) is used to pre-process the JavaScript code. The other component is related to the database, where the JSON representation of the data is processed and imported into a database.

### Front End
A developer needs to take the following additional steps, during the development cycle if they make any changes to the JavaScript (which includes the Vue components).
The Yarn Package manager is used to compile all of the front-end resources. Execute the following command to bring the compiled resources up-to-date.

_**Please Note:** You can use either yarn or npm to run the following commands._

```
$ docker-compose exec web yarn run dev
```

Alternatively, you can setup a 'watch' to perform incrementally compile front-end resources as you develop. Open a secondary terminal, and execute the following command:

```
$ docker-compose exec web yarn run watch
```

**Note:** When you run this command on the terminal it starts a process that will continuously watch for front end resource changes. If you want to stop the process then simply issue `Ctrl+C`.

⚠️ **Important:** Make sure you terminate the watch process before you start switching into different branches!

Prior any pull requests to merge in new front-end changes, make sure you run one of the following commands to prepare your environment correctly.

```
$ docker-compose exec web yarn run prod
```

⚠️ **Important:** If the above step is not followed debug flags and other secrets might get left in for people to see through their browsers console.

### Database
The raw CSV files are provided by the CalStatePays data team, which differs from the development team. These CSV files need to be converted to appropriate JSON files so that the Laravel seed operation can load the data into the database.  When we receive updated CSV files, which is very infrequent, the following steps need to be perform.

```
$ git submodule add https://github.com/CalStatePays/calstatepays_data.git python_parser
$ # Place the CSV files from the data team into the following directory calstatepays/python_parser/python_parser_work_in_progress/csv
```

For additional information on the conversion process, etc., see the [calstatepays_data](https://github.com/CalStatePays/calstatepays_data) project.

## Bugs and issues:
If you discover a bug and or issue within the application, please create a GitHub issue and label it as a `bug`. In addition, please list the necessary steps to reproduce the bug in the description.

## License
CalStatePays is open-sourced software licensed under the GNU General Public License v3+. A copy can be found in the `COPYING` file.