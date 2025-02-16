const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDatabaseConnection() {
    try {
        await prisma.$connect();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}

checkDatabaseConnection();

module.exports = prisma;
