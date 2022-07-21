
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  assetPrefix: ghPages ? '/KhalidElgamous.github.io/' : ''
};
