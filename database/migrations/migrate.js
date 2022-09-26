'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.createTable('privileges',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING, unique: true },
                admin: { type: Sequelize.BOOLEAN },
                emprende: { type: Sequelize.BOOLEAN },
                turismo: { type: Sequelize.BOOLEAN },
                omil: { type: Sequelize.BOOLEAN },
                fomento: { type: Sequelize.BOOLEAN },
                academia: { type: Sequelize.BOOLEAN },
                joven: { type: Sequelize.BOOLEAN },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('profiles',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                user: { type: Sequelize.STRING, unique: true },
                pass: { type: Sequelize.STRING },
                name: { type: Sequelize.STRING, unique: true },
                mail: { type: Sequelize.STRING },
                privilege_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'privileges',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('records',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                table: { type: Sequelize.STRING },
                action: { type: Sequelize.STRING },
                description: { type: Sequelize.STRING },
                profile_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'profiles',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('users',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                rut: { type: Sequelize.STRING, unique: true },
                name: { type: Sequelize.STRING, unique: true },
                gender: { type: Sequelize.STRING },
                born: { type: Sequelize.DATE },
                phone: { type: Sequelize.STRING },
                mail: { type: Sequelize.STRING },
                address: { type: Sequelize.STRING },
                turismo: { type: Sequelize.BOOLEAN },
                omil: { type: Sequelize.BOOLEAN },
                fomento: { type: Sequelize.BOOLEAN },
                joven: { type: Sequelize.BOOLEAN },
                academia: { type: Sequelize.BOOLEAN },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('categories',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING, unique: true },
                turismo: { type: Sequelize.BOOLEAN },
                emprende: { type: Sequelize.BOOLEAN },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('reviews',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                value: { type: Sequelize.INTEGER },
                comment: { type: Sequelize.TEXT },
                user_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'users',
                        key: 'id'
                    }
                },
                profile_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'profiles',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('attentions',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                description: { type: Sequelize.TEXT },
                office: { type: Sequelize.STRING },
                project: { type: Sequelize.BOOLEAN },
                projectname: { type: Sequelize.STRING },
                user_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'users',
                        key: 'id'
                    }
                },
                profile_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'profiles',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('socialnetworks',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                app: { type: Sequelize.STRING },
                rrss: { type: Sequelize.STRING },
                url: { type: Sequelize.STRING },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('commerces',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                rut: { type: Sequelize.STRING},
                name: { type: Sequelize.STRING, unique: true },
                phone: { type: Sequelize.STRING },
                mail: { type: Sequelize.STRING },
                address: { type: Sequelize.STRING },
                formalization: { type: Sequelize.BOOLEAN },
                sii: { type: Sequelize.STRING },
                description: { type: Sequelize.TEXT },
                whatsapp: { type: Sequelize.STRING },
                instagram: { type: Sequelize.STRING },
                facebook: { type: Sequelize.STRING },
                map: { type: Sequelize.TEXT },
                latitude: { type: Sequelize.STRING },
                length: { type: Sequelize.STRING },
                emprende: { type: Sequelize.BOOLEAN },
                emprende_pos: { type: Sequelize.INTEGER, unique: true, null: true },
                turismo: { type: Sequelize.BOOLEAN },
                turismo_pos: { type: Sequelize.INTEGER, unique: true, null: true },
                user_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'users',
                        key: 'id'
                    }
                },
                category_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'categories',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('requests',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                subject: { type: Sequelize.STRING },
                message: { type: Sequelize.TEXT },
                app: { type: Sequelize.STRING },
                viewed: { type: Sequelize.BOOLEAN },
                resolved: { type: Sequelize.BOOLEAN },

                viewed_profile_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'profiles',
                        key: 'id'
                    }
                },

                resolved_profile_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'profiles',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }

            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('sites',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING, unique: true },
                category: { type: Sequelize.STRING },
                description: { type: Sequelize.TEXT },
                map: { type: Sequelize.TEXT },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('routes',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING, unique: true },
                category: { type: Sequelize.STRING },
                description: { type: Sequelize.TEXT },
                map: { type: Sequelize.TEXT },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('images',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                url: { type: Sequelize.STRING },
                commerce_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'commerces',
                        key: 'id'
                    }
                },
                site_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'sites',
                        key: 'id'
                    }
                },
                route_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'routes',
                        key: 'id'
                    }
                },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }

            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('events',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING },
                description: { type: Sequelize.TEXT },
                date: { type: Sequelize.DATE },
                start: { type: Sequelize.TIME },
                end: { type: Sequelize.TIME },
                office: { type: Sequelize.STRING },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('academicoffers',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING, unique: true },
                description: { type: Sequelize.TEXT },
                type:{ type: Sequelize.STRING },
                mode: { type: Sequelize.STRING },
                quota: { type: Sequelize.INTEGER },
                start: { type: Sequelize.DATE },
                end: { type: Sequelize.DATE },
                place: { type: Sequelize.STRING },
                inscription: { type: Sequelize.BOOLEAN },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('trainings',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING, unique: true },
                state: { type: Sequelize.BOOLEAN },
                mode: { type: Sequelize.STRING },
                totalhours: { type: Sequelize.INTEGER },
                dayhours: { type: Sequelize.INTEGER },
                start: { type: Sequelize.DATE },
                end: { type: Sequelize.DATE },
                benefits: { type: Sequelize.STRING },
                schedule: { type: Sequelize.STRING },
                requirements: { type: Sequelize.STRING },
                dni: { type: Sequelize.BOOLEAN },
                rsh: { type: Sequelize.BOOLEAN },
                ce: { type: Sequelize.BOOLEAN },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('laboraloffers',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING, unique: true },
                state: { type: Sequelize.BOOLEAN },
                quota: { type: Sequelize.INTEGER },
                description: { type: Sequelize.STRING },
                postulation: { type: Sequelize.STRING },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )


    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropAllTables()
    }
};


