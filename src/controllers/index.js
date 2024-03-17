const home = (req, res, next) => {
    res.json('Kourtney Cook');
};

const josie = (req, res, next) => {
    res.json('Josie Cook');
};

module.exports = {home, josie};