# Notes Application

## Setup

- Set up nvm:
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
  - `nvm install 'lts/*'`
  - `nvm alias default 'lts/*'`
  - `source ~/.nvm/nvm.sh`
  - `nvm install`
  - `nvm use`
- Run `npm login` and log in with your npm credentials. You can create an account [here](https://www.npmjs.com/signup)
- Clone this repo
- Run `npm install` in `client` and `server` directories within the repo
- Run `npm start` in `client` to start client
- Set up postgres:
  - `sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'`
  - `wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -`
  - `sudo apt-get install postgresql postgresql-client`
  - `sudo systemctl start postgresql`
  - Run `sudo nano /etc/postgresql/15/main/pg_hba.conf` and change all methods to `trust`
  - Run `sh scripts/create_db.sh` to set up DB and start server
