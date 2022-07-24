const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'API',
      description: 'API documentation',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local server',
      },
      {
        url: 'https://api-assets.herokuapp.com',
        description: 'Api',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes.js'],
};

export default swaggerConfig;
