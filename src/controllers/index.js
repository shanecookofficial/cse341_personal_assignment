const home = (req, res, next) => {
    res.json('Kourtney Cook');
};

const josie = (req, res, next) => {
    res.json('Josie');
};

module.exports = {home, josie};