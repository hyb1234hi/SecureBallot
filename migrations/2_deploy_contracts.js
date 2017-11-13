var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting, ['Party1', 'Party2', 'Party3'], {gas: 6700000});
};