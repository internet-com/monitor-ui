# Iris  Network Monitor

> Graphical interface to view testnets on the Cosmos Network.

## Build Setup

``` bash
# 安装依赖
yarn

# 启动监控在localhost:8080
yarn dev

# 编译静态页面
yarn build
```

## 更改监控节点

In `./src/store/modules/blockchain.js` and `./src/store/modules/validators.js`, change the `let url = ` line to the Tendermint RPC of your choice.

## 本地运行已经建立好的应用

1. Extract the zip
2. Enter the folder in your terminal
3. Run `python -m SimpleHTTPServer 8080` (python 2) or  `python3 -m http.server 8080` (python 3)
4. Visit `localhost:8080` in your browser
5. Done!
