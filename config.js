var web3 = require('web3');
var net = require('net');

var config = function () {
  
  this.logFormat = "combined";
  this.ipcPath = process.env["HOME"] + "/.ethereum/geth.ipc";
  this.provider = new web3.providers.IpcProvider(this.ipcPath, net);
  
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  
  this.erc20ABI = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
  
  this.tokenShortName = "XCH";
  this.tokenAddress = "0xd8537fcc3f44f5244fe0852b8b8703dba8300774";
  this.tokenDecimals = 18;
  this.tokenName = "XCash Network Token";
  this.tokenDescription = "XCash Network Token";
  this.tokenTotalSupply = -1;
    
  this.exportStartBlock = 0; // Start block for the historic export (set to 0 for a full export)
  
  this.names = {
    "0xd8537fcc3f44f5244fe0852b8b8703dba8300774": "Example Name"
  }
}

module.exports = config;
