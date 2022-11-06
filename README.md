# cesium vite example

Based on [CesiumGS/cesium-webpack-example
](https://github.com/cesiumgs/cesium-webpack-example), this is a minimal example of how to use Cesium with [vite](https://vitejs.dev/).

## Usage

You can clone this repo and use it as a starting point.

```bash
npm install
npm run dev
```

## Or, set up from scratch

Alternatively, to set up something similar from scratch, using `npm create` you would basically do the following:

### 1. Create vite app and enter directory

```bash
npm create vite@latest cesium-vite-example
cd cesium-vite-example
```

### 2. Add dependencies

```bash
npm install cesium
npm install -D @rollup/plugin-node-resolve
```

### 3. Add Cesium files to vite config

Create a vite config and use the rollup plugin to make Cesium's static assets available to the web app:

`vite.config.js`

```js
import { viteStaticCopy } from "vite-plugin-static-copy";

const cesiumSrcDir = "node_modules/cesium/Build/Cesium";
const cesiumDestDir = "static/Cesium";

export default {
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: `${cesiumSrcDir}/Workers`,
          dest: cesiumDestDir,
        },
        {
          src: `${cesiumSrcDir}/ThirdParty`,
          dest: cesiumDestDir,
        },
        {
          src: `${cesiumSrcDir}/Assets`,
          dest: cesiumDestDir,
        },
        {
          src: `${cesiumSrcDir}/Widgets`,
          dest: cesiumDestDir,
        },
      ],
    }),
  ],
};
```

### 4. Add Cesium to index.html

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <div id="cesiumContainer"></div>
  </body>
  <script>
    // The URL on your server where CesiumJS's static files are hosted.
    window.CESIUM_BASE_URL = "static/Cesium";
  </script>
  <script type="module" src="/src/main.js"></script>
</html>
```
