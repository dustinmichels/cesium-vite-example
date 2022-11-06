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
