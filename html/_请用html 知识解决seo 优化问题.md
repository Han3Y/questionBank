### meta 标签，这个是重中之重
<title>html 对seo 的优化</title>
<meta name="title" content="html 对SEO 的优化">/*不推荐用这个*/
<meta name="keywords" content="SEO,爬虫，搜索引擎、百度、html 优化">
<meta name="description" content="通过html 标签及属性的使用提高网站被爬虫
爬取的几率，使用户百度时网站尽量排在前面，提高用户的点击率">
logo，给logo 图片添加h1 标签、a 链接连接到首页以及alt

### <h1>
// 这个href 应该是要写线上的首页地址，比项目目录地址要好
<a href="https://xxx">
<img src="images/logo.png" alt="html 对seo 的优化"/>
</a>
</h1>

### img 标签，img 标签增加alt 属性

### a 标签
a 标签增加title 属性，不可以有href="#" 这种空指向写法，另外大量的title 感觉
体验也不是很好，不需要的地方可以不用。

### h1~h6 标签
h1 要分配给网站名称或给带alt 标签的logo 使用（这个前面也提到了），用以强调网
站名称。
h2 标签用来定义站点副标题。如果没有副标题，h2 标签最好也空着，以备不时之需。
h3 标签用来定义导航栏目名称。
h4 标签用来定义文章列表标题，但大多数内容系统，文章列表输出用UL 标签，所以
h4 可能就派不上用场，这里只是以此类推。浏览器会自动地在标题的前后添加空行。请
确保将HTML heading 标签只用于标题。不要仅仅是为了产生粗体或大号文本而使用标
题因为搜索引擎使用标题为你的网页的结构和内容标志索引。
添加robots.txt ，搭建网站与搜索引擎对话的桥梁
在项目根目录添加robots.txt 文件，robots.txt 文件可以告诉搜索引擎哪些是重点，
哪些又是可以忽略的，节约搜索引擎蜘蛛抓取网页的时间，也在一定程度上节省了服务
器资源。

### 页面结构清晰
使用语义化标签比如header、footer、content、section，js、css 使用外部文件。

###增加外部链接
即是对方没有和你链接，你也是可以链接别人的，大概搜索引擎的算法体现了互联网“分
享”的精神吧，通过外链网站的活跃度蹭点seo 度。
前后端分离（vue、ajax）、flash 不利于seo

