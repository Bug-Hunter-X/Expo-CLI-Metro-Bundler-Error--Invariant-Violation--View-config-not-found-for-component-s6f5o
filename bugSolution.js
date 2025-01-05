The solution involved carefully reviewing the versions of all installed libraries.  I discovered that a specific library, 'react-native-maps', was using an older version incompatible with the Expo SDK I was using. Updating 'react-native-maps' to its latest version resolved the issue, and the app successfully built and ran without errors.  Here's an example of how to update dependencies in your package.json:

```bash
npm install react-native-maps@latest
```

Then re-run `expo start`.