function checkCashRegister(price, cash, cid) {

var banknotes = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
var arrayRestInCID = [...cid].reverse(); 
var resArray = [];
var restOfChange = cash - price;
var resStatus = '';

function checkAllCashe (arr){
    let sum = 0;
    for(let i in arr)sum += arr[i][1];
    return sum.toFixed(2);
  }

if(checkAllCashe (arrayRestInCID) < restOfChange) {
    resStatus = "INSUFFICIENT_FUNDS";
    }
else{
  resStatus = arrayRestInCID == restOfChange ? "CLOSED" : "OPEN";
}  

function checkIfNomFits (change, nom){
    return change/nom >= 1 ? true : false;
    }

for (var ii in arrayRestInCID) {
  if(checkIfNomFits(restOfChange, banknotes[ii]) && restOfChange !== 0){
    let currentAmount = restOfChange >= arrayRestInCID[ii][1] ? arrayRestInCID[ii][1] : restOfChange > banknotes[ii] ? Math.floor(restOfChange/banknotes[ii])*banknotes[ii] : 0;      
      if(currentAmount>0){
      restOfChange = (restOfChange - currentAmount).toFixed(2);
      resArray.push([arrayRestInCID[ii][0], currentAmount]);
      }
    }
  }

if (restOfChange > 0) resStatus = "INSUFFICIENT_FUNDS"; 
if (restOfChange == 0 && checkAllCashe(arrayRestInCID) == (cash - price)) resStatus = "CLOSED"; 

return resStatus == "INSUFFICIENT_FUNDS" ? {status: resStatus, change: []} : resStatus == "OPEN" ? {status: resStatus, change: resArray} : {status: resStatus, change: cid};

}
  


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);