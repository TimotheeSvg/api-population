import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentation de mon API Node.js avec Express.js et Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Serveur de développement',
            },
        ],
    },
    apis: ['./routes/*.js'], // Chemin vers vos fichiers contenant les commentaires Swagger
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };

