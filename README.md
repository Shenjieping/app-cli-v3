# tianshui-qa-pad

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 配置内容

  - axios http请求，通过 `IO.xxx(params)` 请求接口，返回 `promise`
  - vant 移动端组件库，结合 `babel-plugin-import` 实现按需加载
  - lib-flexible 自动生成网页的根元素 `font-size`
  - postcss-pxtorem 自动将css中的 `px` 转为 `rem`
  - eslint
