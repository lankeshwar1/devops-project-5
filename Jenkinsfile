pipeline {
    agent any

    stages {
        stage('Verify Environment') {
            steps {
                bat 'node --version'
                bat 'npm -version'
                bat 'docker --version'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'node app.js'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t hidimba/devops-project-5:%BUILD_NUMBER% -t hidimba/devops-project-5:latest .'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    //bat 'docker login -u "%DOCKER_USERNAME%" -p "%DOCKER_PASSWORD%"'
                    bat 'echo %DOCKER_PASSWORD%| docker login -u "%DOCKER_USERNAME%" --password-stdin'
                    bat 'docker push hidimba/devops-project-5:%BUILD_NUMBER%'
                    bat 'docker push hidimba/devops-project-5:%latest%'
                }
            }
        }
    }
}