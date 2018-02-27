// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
if (currency>10000)
return {error: "You are rich, my friend! We don't have so much coins for exchange"}
if (currency<=0)
return {}
var mas = [];
var H = Math.floor(currency/50);

var per = currency - H*50;
var Q = Math.floor(per/25);

var per1 = per - Q*25;
var D = Math.floor(per1/10);

var per2 = per1 - D*10;
var N = Math.floor(per2/5);

var per3 = per2 - N*5;
var P = Math.floor(per3/1);

var H1 = ' H: '+H;
mas.push (H1);
var Q1 = ' Q: '+Q;
mas.push (Q1);
var D1 = ' D: '+D;
mas.push (D1);
var N1 = ' N: '+N;
mas.push (N1);
var P1 = ' P: '+P;
mas.push (P1);

var i = 0;
if (H===0){
    mas.splice(i, 1)
    i=0;}else i=i+1;
    if (Q===0){
        mas.splice(i, 1)
        i=i;}else i=i+1;
    if (D===0){
        mas.splice(i, 1)
        i=i;}else i=i+1;
    if (N===0){
        mas.splice(i, 1)
        i=i;}else i=i+1;
    if (P===0){
        mas.splice(i, 1)
        }
        var string = '{'+ mas.join( ) + '}';
        var object=eval("("+string+")");
return object;

}
