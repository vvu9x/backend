基于Mason老师的Express.js后端代码仿写的TypeScrpt代码。
运行方式：
npm run dev
目前中间件还需要debug
相应的前端和测试将会在周日前完成

获取书籍：get http://localhost:3000/v1/books
上传书籍：post http://localhost:3000/v1/books
body:{
    "title": "New Book2",
    "author": "Author Name2"
}
删除书籍：delete http://localhost:3000/v1/:id
