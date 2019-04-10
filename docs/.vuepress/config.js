module.exports = {
    title: 'Moon UI',
    description: '一套基于 Vue.js 的 UI 组件库',
     themeConfig: {
         nav: [
             { text: 'github', link: 'https://github.com/Chrisxmy/moon' },
         ],
        sidebar: [
            {
              title: '基础',
              collapsable: false,
              children: [
                'components/icon.md',  
                'components/button.md',
                'components/layout.md',     
              ]
            },
            {
              title: '表单',
              collapsable: false,
              children: [       
                'components/checkbox.md', 
                'components/form.md', 
                'components/upload.md' 
              ]
            },
            {
              title: '数据展示',
              collapsable: false,
              children: [    
                'components/pagination.md',
                'components/cascader.md', 
                'components/tree.md',  
              ]
            },
            {
              title: '操作反馈',
              collapsable: false,
              children: [    
                'components/message.md',
                'components/confirm.md' 
              ]
            },
          ]
     }
  }