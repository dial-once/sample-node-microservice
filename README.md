# sample-node-microservice

## Purpose
This repo is a base repo to be cloned when you want to bootstrap a project creation (similar to what yeoman does - but lightweight)
It contains everything you need to bootstrap a nodejs microservice.

## How to use this repo?

1. Create the target repository for your project, should be named `dial-once/{service-name}`
2. Clone this project `git clone git@github.com:dial-once/sample-node-microservice.git {service-name}`
3. Makes the changes you need in the following files:
  - [ ] `make init NAME={service-name}`
  - [ ] `.env.tpl` (you can create tokens if needed on logentries and bugsnag)
4. update your target git repo:
  - [ ] `git remote set-url origin git@github.com:dial-once/{service-name}`
  - [ ] `git add .` your changed files
  - [ ] `git commit --amend` your staged files
  - [ ] `git push -f`
  - [ ] `git checkout -b develop && git push -u origin develop`
5. Change the default branch to develop in the repository settings

## How to configure CI?

Define env vars
```env
SONAR_HOST_URL=
SONAR_LOGIN=
SONAR_PASS=
GITHUB_TOKEN=
REPO_SLUG=dial-once/{service-name}
```

And execute
```sh
make deps
make init
make test
make sonar
```

#

[![Circle CI](https://circleci.com/gh/dial-once//tree/develop.svg?style=shield)](https://circleci.com/gh/dial-once/)
[![Coverage](http://badges.dialonce.io/?resource=&metrics=coverage)](http://sonar.dialonce.io/overview/coverage?id=)
[![Sqale](http://badges.dialonce.io/?resource=&metrics=sqale_rating)](http://sonar.dialonce.io/overview/debt?id=)
