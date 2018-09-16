const FunnyCowVoting = artifacts.require('./FunnyCowVoting.sol');

module.exports = function(deployer) {
    deployer.deploy(FunnyCowVoting);
};
