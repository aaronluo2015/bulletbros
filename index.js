const express = require('express');
const path = require('path');

const app = express();

// 设置端口
const PORT = process.env.PORT || 3000;

// 设置EJS为模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 提供静态文件服务
app.use(express.static(path.join(__dirname)));

// 定义首页路由
app.get('/', (req, res) => {
  res.render('index');
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
