const env = process.env.NODE_ENV;

module.exports = env => {
    console.log(`🛠️ Running ${env} mode using ./configs/webpack.${env}.js 🛠️`);
    return require(`./configs/webpack.${env}.js`);
};
