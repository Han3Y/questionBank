CSS 选择器的解析是从右向左解析的。
若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。
若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找
到根元素或满足条件的匹配规则，则结束这个分支的遍历。
两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符
合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找
上面。
而在CSS 解析完毕后，需要将解析的结果与DOM Tree 的内容一起进行分析建立一
棵Render Tree ， 最终用来进行绘图。在建立Render Tree 时（ WebKit 中的
Attachment 过程），浏览器就要为每个DOM Tree 中的元素根据CSS 的解析结果
（Style Rules）来确定生成怎样的Render Tree。
