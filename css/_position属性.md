1、position: static

　　static(没有定位)是position的默认值，元素处于正常的文档流中，会忽略left、top、right、bottom和z-index属性。

2、position: relative

　　relative(相对定位)是指给元素设置相对于原本位置的定位，元素并不脱离文档流，因此元素原本的位置会被保留，其他的元素位置不会受到影响。

3、position: absolute

　　absolute(绝对定位)是指给元素设置绝对的定位，相对定位的对象可以分为两种情况：

　　1) 设置了absolute的元素如果存在有祖先元素设置了position属性为relative或者absolute，则这时元素的定位对象为此已设置position属性的祖先元素。

　　2) 如果并没有设置了position属性的祖先元素，则此时相对于body进行定位。

4、position: fixed

　　可以简单说fixed是特殊版的absolute，fixed元素总是相对于body定位的。

5、inherit

　　继承父元素的position属性，但需要注意的是IE8以及往前的版本都不支持inherit属性。

6、sticky

　　position属性中最有意思的就是sticky了，设置了sticky的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是top、left等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成fixed，根据设置的left、top等属性成固定位置的效果。

　　可以知道sticky属性有以下几个特点：

    该元素并不脱离文档流，仍然保留元素原本在文档流中的位置。
    当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了top: 50px，那么在sticky元素到达距离相对定位的元素顶部50px的位置时固定，不再向上移动。
    元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于viewport来计算元素的偏移量