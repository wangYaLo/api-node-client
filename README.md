### 前端设计文档

#### 技术选型

| 技术栈                 | 描述        |
| ---------------------- | ----------- |
| vue2.x                 | 前端框架    |
| typescript             | 语言        |
| vue/cli3               | 打包工具    |
| vue-property-decorator | class类写法 |

#### 代码规范

##### 数组：

使用直接赋值方式取代push

```typescript
arr[arr.length] = xxx
```

使用...解构运算符替代拷贝数组

```typescript
const arr = [1, 2, 3, 4];
const newarr = [...arr];
```

使用...解构运算符替代将类数组转换成数组的Array.from；

##### z-index

| class：z-index | 等级 | 页面       |
| -------------- | ---- | ---------- |
| .navbar        | 10   | Navbar.vue |
|                |      |            |
|                |      |            |

"sass-loader": "^10.0.2",
"node-sass": "^6.0.1",

旧版本
 "node-sass": "^4.12.0",
    "sass-loader": "^8.0.2",

整体色系：rgba(145, 190, 187, 1); #91BEBB

