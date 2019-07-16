## 目录结构说明

```text
.
├── index       :首页
├── category    :分类 目录
└── user-center :用户中心
└── user-info   :用户信息
└── chosen      :精选页面
└── invite      :邀请
└── fans        :粉丝
└── withdraw    :提现
└── common      :公共组件  TODO 位置要移动下.
└── addAlipay   :添加支付宝帐号
└── summary     :统计
└── setting     :设置页面
```

```text
.
├── assets    :图片，字体等, 引用时(require('assets/gray-default.png'))
├── you-app   : apps
├── you-kit   : 工具
└── you-ui    ：基础ui
```

## 启动

```sh
make watch

react-native start --reset-cache
```
