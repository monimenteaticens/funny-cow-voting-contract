const FunnyCowVoting = artifacts.require('../contracts/FunnyCowVoting');

contract('FunnyCowVoting', (accounts) => {
    const cowId = '0x46696f6e610000000000000000000000';

    it('should vote on the specified cow image and return votes', async() => {
        const contract = await FunnyCowVoting.deployed();
        await contract.vote(cowId, {from: accounts[0]});
        const votes = await contract.getVotes(cowId);

        assert.equal(votes.toNumber(), 1, 'Vote on cow was not 1');
    });

    it('should not be possible to vote twice with same account', async() => {
        const contract = await FunnyCowVoting.deployed();
        try {
            const vote = await contract.vote(cowId, {from: accounts[0]});
        } catch (e) {
            assert(true); // expected the throw
        }
    });

    it('should return the total number of votes', async() => {
        const contract = await FunnyCowVoting.deployed();
        const votes = await contract.getTotalVotes();

        assert.equal(votes.toNumber(), 1, 'Total vote count was not 1');
    });
});
