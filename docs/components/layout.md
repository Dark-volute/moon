# Layout 布局


<ClientOnly>
  <layout-demo/>
</ClientOnly>


<h2>Code</h2>

``` js{6}
 <m-row>
     <m-col :span='6' >1</m-col>
     <m-col :span='6' >2</m-col>
     <m-col :span='6' >3</m-col>
     <m-col :span='6' >4</m-col>
  </m-row>

  <m-row type='flex'>
     <m-col :span='4' >1</m-col>
     <m-col :span='20' >2</m-col>
  </m-row>

  <m-row type='flex' justify="center">
      <m-col :span='4' >1</m-col>
      <m-col :span='4' >2</m-col>
 </m-row>

 <m-row  :gutter="16" class="gutter">
      <m-col :span='6' ><div class="gutter-bg">1</div></m-col>
      <m-col :span='6' ><div class="gutter-bg">2</div></m-col>
      <m-col :span='6' ><div class="gutter-bg">3</div></m-col>
      <m-col :span='6' ><div class="gutter-bg">4</div></m-col>
  </m-row>

   <m-row >
       <m-col :span='6' >1</m-col>
       <m-col :span='6' :offset="12">2</m-col>
   </m-row>

   <m-row :gutter="10" class="gutter">
       <m-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="gutter-bg">1</div></m-col>
       <m-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="gutter-bg">2</div></m-col>
       <m-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="gutter-bg">3</div></m-col>
       <m-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="gutter-bg">4</div></m-col>
   </m-row>
```

<h2>Row Attributes</h2>

| 参数        | 类型 | 可选值     | 默认  |
| -------------: |:--------| -----------:| -----:|
| type      | string | flex布局模式  | - |
| justify      | string | flex布局模式下水平排列 start/end/center/space-around/space-between | start |
| align  | string | flex布局模式下垂直排列 top/middle/bottom | top |
| gutter   | number | 删格间隔 | true |


<h2>Col Attributes</h2>

| 参数        | 类型 | 可选值     | 默认  |
| -------------: |:--------| -----------:| -----:|
| span      | number | 栅格占据的列数  | 24 |
| offset      | number | 栅格左侧的间隔格数  | 0 |
| push  | number | 栅格向右移动格数  | 0 |
| pull  | number | 栅格向左移动格数  | 0 |
| xs  | number | <768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})  | 0 |
| sm  | number | ≥768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})  | 0 |
| md  | number | ≥992px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})  | 0 |
| lg  | number | ≥1200px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})  | 0 |
| xl  | number | ≥1920px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})  | 0 |


