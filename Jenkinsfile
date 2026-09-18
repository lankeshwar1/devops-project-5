pipeline {
    agent any

    stages {
        stage('Verify Environment') {
            steps {
                bat 'git --version'
                bat 'java -version'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
}
