export default {
  color: {
    value: '<color>',
    description: '对应 CSS color 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'font-family': {
    value: 'string',
    description: '对应 CSS font-family 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'font-size': {
    value: '<number>',
    description: '对应 CSS font-size 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'font-style': {
    value: 'normal, italic',
    description: '对应 CSS font-style 属性，但阉割了 oblique 取值',
    androidOnly: false,
    iosOnly: false,
  },
  'font-weight': {
    value: 'normal, bold 100~900',
    description: '对应 CSS font-weight 属性，但阉割了 bolder, lighter 取值',
    androidOnly: false,
    iosOnly: false,
  },
  'line-height': {
    value: '<number>',
    description: '对应 CSS line-height 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'text-align': {
    value: 'auto, left, right, center, justifyiOS',
    description:
      '对应 CSS text-align 属性，但增加了 auto 取值。当取值为 justify 时，在 Android 上会变为 left',
    androidOnly: false,
    iosOnly: false,
  },
  'text-decoration-line': {
    value: 'none, underline, line-through, underline line-through',
    description:
      '对应 CSS text-decoration-line 属性，但阉割了 overline, blink 取值',
    androidOnly: false,
    iosOnly: false,
  },
  'text-shadow-color': {
    value: '<color>',
    description: '对应 CSS text-shadow 属性中的颜色定义',
    androidOnly: false,
    iosOnly: false,
  },
  'text-shadow-offset': {
    value: '{width:<number>,height:<number>}',
    description: '对应 CSS text-shadow 属性中的阴影偏移定义',
    androidOnly: false,
    iosOnly: false,
  },
  'text-shadow-radius': {
    value: '<number>',
    description:
      '在 CSS 中，阴影的圆角大小取决于元素的圆角定义，不需要额外定义',
    androidOnly: false,
    iosOnly: false,
  },
  'include-font-padding': {
    value: '<bool>',
    description:
      'Android 在默认情况下会为文字额外保留一些 padding，以便留出空间摆放上标或是下标的文字…al 设置为 center 之后，文字看起来依然不在正中间，那么可以尝试将本属性设置为 false',
    androidOnly: true,
    iosOnly: false,
  },
  'text-align-vertical': {
    value: 'auto, top, bottom, center',
    description:
      '对应 CSS vertical-align 属性，增加了 auto 取值，center 取代了 middle，并阉割了 baseline, sub 等值',
    androidOnly: true,
    iosOnly: false,
  },
  'font-variant': {
    value:
      'small-caps, oldstyle-nums, lining-nums, tabular-nums, proportional-nums',
    description: '对应 CSS font-variant 属性，但取值更丰富',
    androidOnly: false,
    iosOnly: true,
  },
  'letter-spacing': {
    value: '<number>',
    description: '对应 CSS letter-spacing 属性',
    androidOnly: false,
    iosOnly: true,
  },
  'text-decoration-color': {
    value: '<color>',
    description: '对应 CSS text-decoration-color 属性',
    androidOnly: false,
    iosOnly: true,
  },
  'text-decoration-style': {
    value: 'solid, double, dotted, dashed',
    description: '对应 CSS text-decoration-style 属性，但阉割了 wavy 取值',
    androidOnly: false,
    iosOnly: true,
  },
  'writing-direction': {
    value: 'auto, ltr, rtl',
    description: '对应 CSS direction 属性，增加了 auto 取值',
    androidOnly: false,
    iosOnly: true,
  },
  width: {
    value: '<number>',
    description: '对应 CSS width 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'min-width': {
    value: '<number>',
    description: '对应 CSS min-width 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'max-width': {
    value: '<number>',
    description: '对应 CSS max-width 属性',
    androidOnly: false,
    iosOnly: false,
  },
  height: {
    value: '<number>',
    description: '对应 CSS height 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'min-height': {
    value: '<number>',
    description: '对应 CSS min-height 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'max-height': {
    value: '<number>',
    description: '对应 CSS max-height 属性',
    androidOnly: false,
    iosOnly: false,
  },
  position: {
    value: 'absolute, relative',
    description: '对应 CSS position 属性，但阉割了 static, fixed 取值',
    androidOnly: false,
    iosOnly: false,
  },
  top: {
    value: '<number>',
    description: '对应 CSS top 属性',
    androidOnly: false,
    iosOnly: false,
  },
  right: {
    value: '<number>',
    description: '对应 CSS right 属性',
    androidOnly: false,
    iosOnly: false,
  },
  bottom: {
    value: '<number>',
    description: '对应 CSS bottom 属性',
    androidOnly: false,
    iosOnly: false,
  },
  left: {
    value: '<number>',
    description: '对应 CSS left 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'z-index': {
    value: '<number>',
    description: '对应 CSS z-index 属性',
    androidOnly: false,
    iosOnly: false,
  },
  margin: {
    value: '<number>',
    description:
      '对应 CSS margin 属性，不同的是，它只能定义一个参数，如需分别定义上、右、下、左4个方位的外补白，可以通过下面的单向外部白属性',
    androidOnly: false,
    iosOnly: false,
  },
  'margin-horizontal': {
    value: '<number>',
    description:
      '无对应的 CSS 属性。其效果相当于同时设置 marginRight 和 marginLeft',
    androidOnly: false,
    iosOnly: false,
  },
  'margin-vertical': {
    value: '<number>',
    description:
      '无对应的 CSS 属性。其效果相当于同时设置 marginTop 和 marginBottom',
    androidOnly: false,
    iosOnly: false,
  },
  'margin-top': {
    value: '<number>',
    description: '对应 CSS margin-top 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'margin-right': {
    value: '<number>',
    description: '对应 CSS margin-right 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'margin-bottom': {
    value: '<number>',
    description: '对应 CSS margin-bottom 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'margin-left': {
    value: '<number>',
    description: '对应 CSS margin-left 属性',
    androidOnly: false,
    iosOnly: false,
  },
  padding: {
    value: '<number>',
    description:
      '对应 CSS padding 属性，不同的是，它只能定义一个参数，如需分别定义上、右、下、左4个方位的内补白，可以通过下面的单向内部白属性',
    androidOnly: false,
    iosOnly: false,
  },
  'padding-horizontal': {
    value: '<number>',
    description:
      '无对应的 CSS 属性。其效果相当于同时设置 paddingRight 和 paddingLeft',
    androidOnly: false,
    iosOnly: false,
  },
  'padding-vertical': {
    value: '<number>',
    description:
      '无对应的 CSS 属性。其效果相当于同时设置 paddingTop 和 paddingBottom',
    androidOnly: false,
    iosOnly: false,
  },
  'padding-top': {
    value: '<number>',
    description: '对应 CSS padding-top 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'padding-right': {
    value: '<number>',
    description: '对应 CSS padding-right 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'padding-bottom': {
    value: '<number>',
    description: '对应 CSS padding-bottom 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'padding-left': {
    value: '<number>',
    description: '对应 CSS padding-left 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-style': {
    value: 'solid, dotted, dashed',
    description:
      '对应 CSS border-style 属性，但阉割了 none, hidden, double, groove, ridge, inset, outset 取值，且无方向分拆属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-width': {
    value: '<number>',
    description: '对应 CSS border-width 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-top-width': {
    value: '<number>',
    description: '对应 CSS border-top-width 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-right-width': {
    value: '<number>',
    description: '对应 CSS border-right-width 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-bottom-width': {
    value: '<number>',
    description: '对应 CSS border-bottom-width 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-left-width': {
    value: '<number>',
    description: '对应 CSS border-left-width 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-color': {
    value: '<color>',
    description: '对应 CSS border-color 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-top-color': {
    value: '<color>',
    description: '对应 CSS border-top-color 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-right-color': {
    value: '<color>',
    description: '对应 CSS border-right-color 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-bottom-color': {
    value: '<color>',
    description: '对应 CSS border-bottom-color 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-left-color': {
    value: '<color>',
    description: '对应 CSS border-left-color 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-radius': {
    value: '<number>',
    description: '对应 CSS border-radius 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-top-left-radius': {
    value: '<number>',
    description: '对应 CSS border-top-left-radius 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-top-right-radius': {
    value: '<number>',
    description: '对应 CSS border-top-right-radius 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-bottom-left-radius': {
    value: '<number>',
    description: '对应 CSS border-bottom-left-radius 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'border-bottom-right-radius': {
    value: '<number>',
    description: '对应 CSS border-bottom-right-radius 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'shadow-color': {
    value: '<color>',
    description: '对应 CSS box-shadow 属性中的颜色定义',
    androidOnly: false,
    iosOnly: false,
  },
  'shadow-offset': {
    value: '{width: <number>, height: <number>}',
    description: '对应 CSS box-shadow 属性中的阴影偏移定义',
    androidOnly: false,
    iosOnly: false,
  },
  'shadow-radius': {
    value: '<number>',
    description:
      '在 CSS 中，阴影的圆角大小取决于元素的圆角定义，不需要额外定义',
    androidOnly: false,
    iosOnly: false,
  },
  'shadow-opacity': {
    value: '<number>',
    description: '对应 CSS box-shadow 属性中的阴影透明度定义',
    androidOnly: false,
    iosOnly: false,
  },
  'background-color': {
    value: '<color>',
    description: '对应 CSS background-color 属性',
    androidOnly: false,
    iosOnly: false,
  },
  transform: {
    value:
      '[{perspective: number}, {rotate: string}, {rotateX…lateY: number}, {skewX: string}, {skewY: string}]',
    description: '对应 CSS transform 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'transform-matrix': {
    value: 'TransformMatrixPropType',
    description: '类似于 CSS 中 transform 属性的 matrix() 和 matrix3d() 函数',
    androidOnly: false,
    iosOnly: false,
  },
  'backface-visibility': {
    value: 'visible, hidden',
    description: '对应 CSS backface-visibility 属性',
    androidOnly: false,
    iosOnly: false,
  },
  flex: {
    value: '<number>',
    description: '对应 CSS flex 属性，但只能为整数值',
    androidOnly: false,
    iosOnly: false,
  },
  'flex-grow': {
    value: '<number>',
    description: '对应 CSS flex-grow 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'flex-shrink': {
    value: '<number>',
    description: '对应 CSS flex-shrink 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'flex-basis': {
    value: '<number>',
    description: '对应 CSS flex-basis 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'flex-direction': {
    value: 'row, row-reverse, column, column-reverse',
    description: '对应 CSS flex-direction 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'flex-wrap': {
    value: 'wrap, nowrap',
    description: '对应 CSS flex-wrap 属性，但阉割了 wrap-reverse 取值',
    androidOnly: false,
    iosOnly: false,
  },
  'justify-content': {
    value: 'flex-start, flex-end, center, space-between, space-around',
    description: '对应 CSS justify-content 属性，但阉割了 stretch 取值。',
    androidOnly: false,
    iosOnly: false,
  },
  'align-items': {
    value: 'flex-start, flex-end, center, stretch',
    description: '对应 CSS align-items 属性，但阉割了 baseline 取值。',
    androidOnly: false,
    iosOnly: false,
  },
  'align-self': {
    value: 'auto, flex-start, flex-end, center, stretch',
    description: '对应 CSS align-self 属性，但阉割了 baseline 取值',
    androidOnly: false,
    iosOnly: false,
  },
  opacity: {
    value: '<number>',
    description: '对应 CSS opacity 属性',
    androidOnly: false,
    iosOnly: false,
  },
  overflow: {
    value: 'visible, hidden, scroll',
    description: '对应 CSS overflow 属性，但阉割了 auto 取值',
    androidOnly: false,
    iosOnly: false,
  },
  elevation: {
    value: '<number>',
    description: 'CSS 中没有对应的属性，只在 Android5.0+ 上有效',
    androidOnly: true,
    iosOnly: false,
  },
  'resize-mode': {
    value: 'cover, contain, stretch',
    description: 'CSS 中没有对应的属性，可以参考 background-size 属性',
    androidOnly: false,
    iosOnly: false,
  },
  'overlay-color': {
    value: 'string',
    description: 'CSS 中没有对应的属性，当图像有圆角时，将角落都充满一种颜色',
    androidOnly: true,
    iosOnly: false,
  },
  'tint-color': {
    value: '<color>',
    description:
      'CSS 中没有对应的属性，iOS 图像上特殊的色彩，改变不透明像素的颜色',
    androidOnly: false,
    iosOnly: true,
  },
  'align-content': {
    description:
      'alignContent controls how rows align in the cross direction, overriding the alignContent of the parent. 访问https://developer.mozilla.org/en-US/docs/Web/CSS/align-content来进一步了解。',
    value:
      "enum('flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around')",
  },
  'aspect-ratio': {
    description:
      '\nOn a node with a set width/height aspect ratio control the size of the unset dimension\nOn a node with a set flex basis aspect ratio controls the size of the node in the cross axis if unset\nOn a node with a measure function aspect ratio works as though the measure function measures the flex basis\nOn a node with flex grow/shrink aspect ratio controls the size of the node in the cross axis if unset\nAspect ratio takes min/max dimensions into account\n',
    value: 'number',
  },
  'border-end-width': {
    description:
      'When direction is ltr, borderEndWidth is equivalent to borderRightWidth. When direction is rtl, borderEndWidth is equivalent to borderLeftWidth.',
    value: 'number',
  },
  'border-start-width': {
    description:
      'When direction is ltr, borderStartWidth is equivalent to borderLeftWidth. When direction is rtl, borderStartWidth is equivalent to borderRightWidth.',
    value: 'number',
  },
  direction: {
    description:
      'direction指定了用户界面的阅读顺序。ltr表示 left to right，即从左往右阅读。反之rtl为从右往左阅读。。默认值为inherit，但根节点的值会根据用户所在地的不同而不同。访问https://yogalayout.com/docs/layout-direction来进一步了解。',
    value: "enum('inherit', 'ltr', 'rtl')",
  },
  display: {
    description:
      "它的表现和 CSS 上的display类似，但目前只支持'flex'和'none'两个值。默认值是'flex'。",
    value: "enum('none', 'flex')",
  },
  end: {
    description: '此样式的优先级高于left和right。',
    value: 'number, ,string',
  },
  'margin-end': {
    description:
      'When direction is ltr, marginEnd is equivalent to marginRight. When direction is rtl, marginEnd is equivalent to marginLeft.',
    value: 'number, ,string',
  },
  'margin-start': {
    description:
      'When direction is ltr, marginStart is equivalent to marginLeft. When direction is rtl, marginStart is equivalent to marginRight.',
    value: 'number, ,string',
  },
  'padding-end': {
    description:
      'When direction is ltr, paddingEnd is equivalent to paddingRight. When direction is rtl, paddingEnd is equivalent to paddingLeft.',
    value: 'number, ,string',
  },
  'padding-start': {
    description:
      'When direction is ltr, paddingStart is equivalent to paddingLeft. When direction is rtl, paddingStart is equivalent to paddingRight.',
    value: 'number, ,string',
  },
  start: {
    description: '此样式的优先级高于left、right和end。',
    value: 'number, ,string',
  },
  'border-bottom-end-radius': { description: '', value: 'number' },
  'border-bottom-start-radius': { description: '', value: 'number' },
  'border-end-color': { description: '', value: 'color' },
  'border-start-color': { description: '', value: 'color' },
  'border-top-end-radius': { description: '', value: 'number' },
  'border-top-start-radius': { description: '', value: 'number' },
}
