import nodemailer from 'nodemailer'

// const transporter_Gmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'login@gmail.com',
//         pass: 'pass'
//     }
// })

// const transporter_Mail = nodemailer.createTransport({
//     host: 'smtp.mail.ru',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'login',
//         pass: 'pass'
//     }
// })

export const useEmail = (async () => {
    try {
        const transporter_Yandex = nodemailer.createTransport({
            service: 'yandex',
            auth: {
                user: 'user@yandex.ru',
                pass: 'secret'
            }
        })
        const mailOptions = {
            from: 'user@yandex.ru',
            to: 'user@yandex.ru',
            subject: 'Hello World!',
            html: `
            <h1>Hello?</h1>
            <p>How are you?</p>
          `
        }

        const send = () => {
            return new Promise((resolve, reject) => {
                transporter_Yandex.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        reject(error)
                    }
                    resolve(info)
                })
            })
        }

        await send()

        return console.log('Отправлено')


    }catch (e) {
        console.error(e)
    }
})