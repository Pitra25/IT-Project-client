import { type ChangeEvent, FC, type FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import { Card, PinkButton } from "@/components"
import { regExpEmail, regExpString } from "@/utils"

import { FeedbackWrapper } from "./Feedback.styled.tsx"

const Feedback: FC  = () => {
    const [formValues, setFormValues] = useState({name: '', surname: '', email: '', message: '' })
    const [errors, setErrors] = useState<{ name?: string, surname?: string, email?: string, message?: string }>({})
    const { t } = useTranslation()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        validateForm()
    }

    const HandleInputChangeOfTextArea  = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        validateForm()
    }

    const validateForm = (): boolean => {
        const newErrors: { name?: string, surname?: string, email?: string, message?: string } = {}

        if (!formValues.name) {
            newErrors.name = t('error_ok.form.name.no')
        } else if (!regExpString.test(formValues.name)) {
            newErrors.name = t('error_ok.form.name.error')
        }

        if (!formValues.surname) {
            newErrors.surname = t('error_ok.form.surname.no')
        } else if (!regExpString.test(formValues.surname)) {
            newErrors.surname = t('error_ok.form.surname.error')
        }

        if (!formValues.email) {
            newErrors.email = t('error_ok.form.email.no')
        } else if (!regExpEmail.test(formValues.email)) {
            newErrors.email = t('error_ok.form.email.error')
        }

        if (!formValues.message) {
            newErrors.message = t('error_ok.form.message.no')
        } else if (!regExpString.test(formValues.message)) {
            newErrors.message = t('error_ok.form.message.error')
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault()
        if (validateForm()) {
            console.log(formValues.name + " " + formValues.message)
        }
    }

    return (
       <FeedbackWrapper>
           <Card className="card">
               <form onSubmit={handleSubmit} className='form ui-form'>
                   <div className="form-row form-item">
                       <input
                           id="name"
                           name="name"
                           type="text"
                           onChange={handleInputChange}
                           placeholder = {t('messages.placeholder.input.name')}
                           autoComplete="off"
                       />
                       {/*<label htmlFor="name">{t(text + '.label_name')}</label>*/}
                       {errors.name && <div className="error-message">{errors.name}</div>}
                   </div>
                   <div className="form-row form-item">
                       <input
                           id="surname"
                           name="surname"
                           type="text"
                           value={formValues.surname}
                           onChange={handleInputChange}
                           placeholder = {t('messages.placeholder.input.surname')}
                           autoComplete="off"
                       />
                       {/*<label htmlFor="surname">{t(text + '.label_surname')}</label>*/}
                       {errors.surname && <div className="error-message">{errors.surname}</div>}
                   </div>
                   <div className="form-row form-item">
                       <input
                           id="email"
                           name="email"
                           type="email"
                           value={formValues.email}
                           onChange={handleInputChange}
                           placeholder = {t('messages.placeholder.input.email')}
                           autoComplete="off"
                       />
                       {/*<label htmlFor="email">{t(text + '.label_email')}</label>*/}
                       {errors.email && <div className="error-message">{errors.email}</div>}
                   </div>
                   <div className="form-row form-item">
                       <textarea
                           id="message"
                           name="message"
                           //value={formValues.message}
                            onChange={HandleInputChangeOfTextArea}
                           placeholder = {t('messages.placeholder.input.message')}
                           className='message'
                       ></textarea>
                       {/*<label htmlFor="message">{t(text + '.label_message')}</label>*/}
                       {errors.message && <div className="error-message">{errors.message}</div>}
                   </div>
                   <div className="form-item button">
                       <PinkButton type="submit">
                           {t('Hom.section_Feedback.Feedback.btn')}
                       </PinkButton>
                   </div>
               </form>
           </Card>
       </FeedbackWrapper>
    )
}

export default Feedback