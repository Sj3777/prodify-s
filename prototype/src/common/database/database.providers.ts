import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';
import { SEQUELIZE, DEVELOPMENT, STAGE, PRODUCTION } from '../../constants/index';
import { databaseConfig } from './database.config';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
            case DEVELOPMENT:
                config = databaseConfig.dev;
                break;
            case STAGE:
                config = databaseConfig.stage;
                break;
            case PRODUCTION:
                config = databaseConfig.prod;
                break;
            default:
                config = databaseConfig.dev;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([User]);
        await sequelize.sync();
        return sequelize;
    },
}];