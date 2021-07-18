事件循环其实就是一个事件队列，先加入先执行，执行完一次队列，再次循环遍历看有没
有新事件加入队列。
执行中的事件叫IO 事件，setlmmediate 在当前队列中立即执行，setTimout/setInterval
把执行定时到下一个队列， process. nextTick 在当前队列执行完，下次遍历前执行。所
以总体顺序是： IO 事件→ setImmediate → setTimeout/setInterval → process.
nextTick。