const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const sequelize = require('./config/config'); // Importe a configuração do Sequelize

// Middleware para processar corpo das requisições JSON
app.use(express.json());

// Rotas
app.use(userRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});

