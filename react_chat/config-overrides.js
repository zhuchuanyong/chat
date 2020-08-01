const { override, addPostcssPlugins } = require("customize-cra");

module.exports = override(
    addPostcssPlugins(
        [
            // require("postcss-px2rem")(
            //     { remUnit: 37.5 }
            // ),
            require('postcss-px-to-viewport')(
                {
                    // options
                    viewportWidth: 750, // 设计稿的视口宽度 
                    viewportHeight: 1334, // (Number) The height of the viewport. 
                    unitPrecision: 3, // 单位转换后保留的精度
                    viewportUnit: 'vw', // 希望使用的视口单位
                    selectorBlackList: ['.ignore', '.hairlines'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位 
                    minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换 
                    mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
                }
            )
        ]
        
    )
  );