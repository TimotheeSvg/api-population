import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.KEY, { algorithms: ['HS256'] });

        if (decodedToken.email === process.env.EMAIL) {
            next()
        } else {
            return res.status(401).send({
                message:
                    "Vous n'avez pas le droit nésscesaire seul le admin peut consulter cette requete",
            });
        }
    } catch (err) {
        return res.status(401).send({
            message:
                "Vous n'avez pas le droit nésscesaire seul le admin peut consulter cette requete",
        });
    }
};