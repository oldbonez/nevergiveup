# docker-react-nevergiveup
a sandbox for fun, profit and enjoyment from correcting things while learning Dev---Ops
## Credits
This repo wouldn't have been possible without the touch of
[https://github.com/stephengrinder/Docker-react](https://github.com/stephengrinder/Docker-react)
The code in the repo is his and based upon the following
course
[https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide](docker-and-kubernetes-the-complete-guide)
If you want to learn more, don't be lazy and buy the course.

I don't own any code, just attempted to make it a bit more secure by updating the needed images and packages to the best of my limited time and knowledge.
Use the code on your own risk.

## Architecture

- A single-container deployment in Docker and AWS EBS consisting of:
  - npm test container docker build for running CI tests
  - docker prd build
  - Docker CI github actions running code testing, building and testing the images and finally pushing the needed images to Dockerhub personal account registries.
  - Trivy scan action
  - Sonar cloud
  - ZAP proxy
  - AWS deployment action

  ## Things to improve

  - rework code to scan entire docker repos. Saw some samples, but too pushy to make things work in limited time.E.g. :
  ```yaml
  steps:
    - name: Run Trivy vulnerability scanner
      uses: aquasecurity/trivy-action@master
      with:
        image-ref: "${{ secrets.DOCKER_NAMESPACE }}/${{ secrets.DOCKER_REPOSITORY }}:sha-XXXXXX"
        format: "table"
        exit-code: "1"
        ignore-unfixed: true
        vuln-type: "os,library"
        severity: "CRITICAL,HIGH"
  ```
    - beware of the severity and adapt to your situation. The compromise between security and usability is a tough one.
  - use less typing and better actions if possible. Comes with a steep learning curve. Try learning something new while $LIFE haunts you.
  - make the app work with the latest version of npm packages. since I'm not a nodejs person, i rather put something online a bit more secure, rather than have the next script kiddy own me in seconds.

  ## Some useful resources

- [https://akx.github.io/travis-to-github-actions/](https://akx.github.io/travis-to-github-actions/)
- [https://github.com/marketplace/actions/run-travis-yml](https://github.com/marketplace/actions/run-travis-yml)
- [https://developer.okta.com/blog/2020/05/18/travis-ci-to-github-actions](https://developer.okta.com/blog/2020/05/18/travis-ci-to-github-actions)


