# rollupLoadConfigFileBug
Repo to show reproduction steps for a rollup bug related to loadConfigFile

```
npm install
```
Run the test with:

```
./runRollup.js
```

If loadConfigFile used the environment option, it should print "src/myfile.js", but it actually prints "src/undefined.js".
