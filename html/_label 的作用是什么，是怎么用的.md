label 标签用来定义表单控件间的关系，当用户选择该标签时，浏览器会自动将焦点转
到和标签相关的表单控件上。label 中有两个属性是非常有用的，for 和accesskey。
for 属性功能：表示label 标签要绑定的HTML 元素，你点击这个标签的时候，所绑
定的元素将获取焦点。
<Label for="name">姓名</Label><input ID="name" type="text">
accesskey 属性功能：表示访问label 标签所绑定的元素的热键，当您按下热键，所绑
定的元素将获取焦点。
<Label for="name" accesskey ＝ "N"> 姓名</Label><input ID="name"
type="text">