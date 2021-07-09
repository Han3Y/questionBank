/**
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

 */
let price = [7,1,5,3,6,4];
function f1(prices) {
    let data = new Array(prices.length).fill([0, 0]);
    data[0][0] = -prices[0];
    data[0][1] = 0;
    for (let i = 1; i < prices.length; i ++){
        data[i][0] = Math.max(data[i - 1][0], data[i - 1][1] - prices[i]);
        data[i][1] = Math.max(data[i - 1][1], data[i - 1][0] + prices[i]);
    }
    return data[prices.length - 1][1];
}

console.log(f1(price));
