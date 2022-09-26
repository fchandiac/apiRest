'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {


        await queryInterface.bulkInsert('Privileges', [{
            name: 'Administrador',
            admin: true,
            emprende: true,
            turismo: true,
            omil: true,
            fomento: true,
            academia: true,
            joven: true
        }], {})

        await queryInterface.bulkInsert('Profiles', [
            {
                user: 'admin',
                pass: '7890',
                name: 'Felipe Chandía',
                mail: 'felipe.chandia@karmika.cl',
                privilege_id: 1001
            },
            {
                user: 'user',
                pass: '7890',
                name: 'userTest',
                mail: 'felipe.chandia@karmika.cl',
                privilege_id: 1001
            },

        ], {})

        await queryInterface.bulkInsert('Users', [
            {
                rut: '16.822.404-4',
                name: 'Felipe Chandía',
                gender: 'M',
                born: '1987-08-10',
                phone: '12345678',
                mail: 'mail@mail.com',
                address: 'Los Alercers 456',
                turismo: true,
                omil: true,
                fomento: true,
                joven: true,
                academia: true,
                created_at: '2022-08-01 05:45:12',
                updated_at: '2022-08-01 05:45:12'

            }

        ], {})

        await queryInterface.bulkInsert('Socialnetworks', [
            {
                app: 'emprende',
                rrss: 'whatsapp',
                url: '12345678',

            },
            {
                app: 'emprende',
                rrss: 'instagram',
                url: 'https://www.instagram.com/',
            },
            {
                app: 'emprende',
                rrss: 'facebook',
                url: 'https://www.facebook.com/',
            },
            {
                app: 'turismo',
                rrss: 'whatsapp',
                url: '12345678',

            },
            {
                app: 'turismo',
                rrss: 'instagram',
                url: 'https://www.instagram.com/',
            },
            {
                app: 'turismo',
                rrss: 'facebook',
                url: 'https://www.facebook.com/',
            },
            {
                app: 'omil',
                rrss: 'whatsapp',
                url: '12345678',

            },
            {
                app: 'omil',
                rrss: 'instagram',
                url: 'https://www.instagram.com/',
            },
            {
                app: 'omil',
                rrss: 'facebook',
                url: 'https://www.facebook.com/',
            },
            {
                app: 'academia',
                rrss: 'whatsapp',
                url: '12345678',

            },
            {
                app: 'academia',
                rrss: 'instagram',
                url: 'https://www.instagram.com/',
            },
            {
                app: 'academia',
                rrss: 'facebook',
                url: 'https://www.facebook.com/',
            },
        ], {})

        await queryInterface.bulkInsert('Sites', [
            {
                name: 'Estación Trenes',
                category: 'Histórico',
                description: 'Nuestra vieja Estación de trenes fundada en 1906, durante el gobierno de alguien',
                map: 'htttp://www.google.com',
                created_at: '2022-08-19 05:54:59',
                updated_at: '2022-08-19 05:54:59'
            },
            {
                name: 'Plaza de Armas',
                category: 'Cultural',
                description: 'La plaza de Armas de nuestra ciudad',
                map: 'https://www.google.com/maps/place/Plaza+De+Armas+de+Parral/@-36.1413806,-71.8244512,17z/data=!3m1!4b1!4m5!3m4!1s0x966f4ecdf004e355:0xd0d2654d04b356cc!8m2!3d-36.1413806!4d-71.8222625',
                created_at: '2022-08-19 05:54:59',
                updated_at: '2022-08-19 05:54:59'
            }


        ], {})

        await queryInterface.bulkInsert('Categories', [
            {
                name: 'Restorantes',
                turismo: true,
                emprende: true
            },
            {
                name: 'Hoteles',
                turismo: true,
                emprende: true
            },
            {
                name: 'Zapaterias',
                turismo: false,
                emprende: true
            },
            {
                name: 'Joyerias',
                turismo: false,
                emprende: true
            },
        ], {})



    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Privileges', null, {})
        await queryInterface.bulkDelete('Profiles', null, {})
        await queryInterface.bulkDelete('Socialnetworks', null, {})

    }
};
