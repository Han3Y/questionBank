/**
* 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。

 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 作者：力扣 (LeetCode)
 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/
 来源：力扣（LeetCode）
 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
* */
let price = [7,1,5,3,6,4];

/**
 * 动态规划方式
 * 用dp[i][0]表示第i天持有股票的收益，dp[i][1]表示第i天不持有股票的收益
 * @param price
 */
function type1(prices){
    let dp = new Array(price.length).fill(new Array(2));
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    for(let i = 1; i < prices.length; i ++){
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
        dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1]);
    }
    console.log(dp[prices.length - 1][1]);
}

type1(price);

/**
 * 贪心算法
 * 将每个上涨的数值加起来就是最大收益
 */
function type2(prices){
    let total = 0;
    for(let i = 0; i < prices.length - 1; i ++){
        total = total + Math.max(0, prices[i + 1] - prices[i]);
    }
    console.log(total);
}
type2(price);
