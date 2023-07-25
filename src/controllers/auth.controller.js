
import jwt from 'jsonwebtoken';

export const generateToken = async (req, res) => {
    try {
        const email = process.env.EMAIL;
        const secretKey = process.env.KEY;

        const payload = {
            email: email,
        };

        jwt.sign(payload, secretKey, { algorithm: 'HS256' }, (err, token) => {
            if (err) {
                return res.status(500).send("Une erreur s'est produite lors de la génération du token");
            }

            res.status(200).send({ token: token });
        });
    } catch (error) {
        res.status(500).send("Une erreur s'est produite lors de la génération du token");
    }
};
