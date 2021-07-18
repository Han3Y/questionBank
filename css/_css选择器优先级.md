
下面列表中，选择器类型的优先级是递增的：

    类型选择器（例如，h1）和伪元素（例如，::before）
    类选择器 (例如，.example)，属性选择器（例如，[type="radio"]）和伪类（例如，:hover）
    ID 选择器（例如，#example）。

通配选择符（universal selector）（*）关系选择符（combinators）（+, >, ~, ' ', ||）和 否定伪类（negation pseudo-class）（:not()）对优先级没有影响。（但是，在 :not() 内部声明的选择器会影响优先级）。

一些经验法则：

    一定要优先考虑使用样式规则的优先级来解决问题而不是 !important
    只有在需要覆盖全站或外部 CSS 的特定页面中使用 !important
    永远不要在你的插件中使用 !important
    永远不要在全站范围的 CSS 代码中使用 !important