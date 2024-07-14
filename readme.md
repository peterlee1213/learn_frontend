# how to setup dev environment

1. install vscode, git and docker
2. execute `setup-network.sh`
3. go to `docker-compose.yaml` and find the `volumes` configuration, replace the local directory with yours
4. open this project in vscode
5. press `F1`, choose `reopen in container`, the docker will setup everything and take you to the codebase