### 效果
页面上有四张图片，当鼠标移动到图片上的时候，鼠标指针右下角出现一张该图片的大图片
There are four images in the page. A large image corresponding to the small image will display at the low right corner of the mouse pointer.

### 思路
1，结构搭建
ul>li*4>img 搭建四张小图片
2，事件
- Onmouseenter, 鼠标指针进入，响应的大图片出现，位置在指针右下角 水平垂直距离各20px处
- onmousemove， 指针移动，大图片的位置跟着移动，距离指针的位置不变
- onmouseleave 大图片消失