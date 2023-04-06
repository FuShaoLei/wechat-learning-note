## flex布局

指定flex布局：`display: flex | inline-flex; `

  - flex：块状
  - inline-flex：行内

指定完之后有六种属性可以设置在容器上

- flex-direction：决定项目的排列方向
  - row（默认）：水平方向，起点在左
  - row-reverse：水平方向，起点在右
  - column：垂直方向，起点在上
  - column-reverse：垂直方向，起点在下
- flex-wrap：决定容器内项目是否可以换行
  - nowrap（默认）：不换行
  - wrap：可换行，第一行在上方
  - wrap-reverse：可换行，第一行在下方
- flex-flow：flex-direction和flex-wrap的简写形式：`flex-flow: <flex-direction> || <flex-wrap>;`
- justify-content：决定项目在主轴的对其方式
  - flex-start：左对齐
  - flex-end：右对齐
  - center：居中
  - space-between：两端对齐，项目之间的间隔相等
  - space-around：每个项目两侧的间隔相等
- align-items：决定了项目在交叉轴的对齐方式
  - flex-start：交叉轴起点对齐
  - flex-end：交叉轴终点对齐
  - center：交叉轴的中点对齐
  - baseline：项目的第一行文字的基线对齐
- align-content：待补充。。。。

flex项目属性

- order：决定项目在容器中的排列顺序，数值越小，排列越靠前
- flex-grow：决定项目的放大比例，默认值为0，即存在剩余空间，也不放大
- flex-shrink：决定项目的缩小比例，默认值为1，即如果空间不足时，该项目将缩小，负值对该属性无效



## Css选择器

| 例子          | 说明                                       |
| ------------- | ------------------------------------------ |
| .intro        | 选择`class="intro"`的元素                  |
| .name1.name2  | 选择class属性中同时有name1和name2的元素    |
| .name1 .name2 | 选择作为name1元素后代所有类名为name2的元素 |
| #password     | 选择id="password"的元素                    |
| *             | 选择所有元素                               |
| p             | 选择所有p元素                              |
| p.intro       | 选择`class=intro`的所有p元素               |
| div,p         | 选择所有div元素和所有p元素                 |
| div>p         | 选择父元素是div的所有p元素                 |
| div+p         | 选择紧跟div元素的首个p元素                 |
| p~ul          | 选择前面有p元素的每个ul元素                |

其余的参考：https://www.w3school.com.cn/cssref/css_selectors.asp

## Css命名规范

待补充

## 居中

```css
.loading__block{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## Grid布局

```

```



## transform

待补充

参考：https://juejin.cn/post/6959407827047677965