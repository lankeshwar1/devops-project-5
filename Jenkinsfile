pipeline {
    agent any

    stages {
        stage('Verify Environment') {
            steps {
                bat 'node --version'
                bat 'npm -version'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t devops-project-5:%BUILD_NUMBER% .'
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
    }
}
