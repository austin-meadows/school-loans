# Command Reference

```
npm run deploy:prod
```

Creates a production build and deploys it to the live website on firebase.

<br />

```
npm run lint
```

Lints the project for any issues. Will also attempt to auto-fix and auto-format using eslint and prettier.

This command is also used during pre-commit, and if linting returns any issues, it will refuse the commit.

<br />

```
npm run serve:dev
```

Runs the website in development mode on `localhost`. Service workers are disabled so changes can be seen immediately. It's also a little easier to debug any issues with more console output in the browser.

<br />

```
npm run serve:prod
```

Runs the website in production mode on `localhost`. Attempts to reproduce what the website should behave if it were to be deployed to firebase. Service workers aren't disabled, there is no console output.

<br />

```
npm run test:unit
```

Runs unit tests. Will eventually prevent pushing code if there are failures. (There are none right now)
