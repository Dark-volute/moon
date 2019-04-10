# Button 按钮

<ClientOnly>
  <button-demo/>
</ClientOnly>

```vue
<m-button alert>按钮</m-button>
<m-button icon="loading" icon-position="right" :loading="true">按钮</m-button>
<m-button :disabled="true">按钮</m-button>
<m-button type="primary">主要</m-button>
<m-button type="success">成功</m-button>
<m-button type="warning">警告</m-button>
<m-button type="danger">危险</m-button>
```

<h2>Attributes</h2>

| 参数        | 类型 | 可选值     | 默认  |
| -------------: |:--------| -----------:| -----:|
| type      | string | primary / success / warning / danger  | - |
| icon      | string | - | - |
| position  | string | right/left | left |
| loading   | boolean | - | true |
| disabled  | boolean | - | true |
