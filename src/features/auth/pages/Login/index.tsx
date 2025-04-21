import { type ChangeEvent, type FC, type FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useTranslation } from "react-i18next"

import { useAppAction } from '@/hooks'
import { useLoginMutation } from '../../api/auth.api'
import { regExpString, regExpPassword } from '@/utils'
import { Card, PinkButton } from '@/components'
import type { LoginPayload } from '../../types/login.types'

import { StyledAuthWrapper } from '../Auth.styled.tsx'

const Login: FC = () => {
    const { setUser } = useAppAction()
    const [login, { isLoading }] = useLoginMutation()
    const [formValues, setFormValues] = useState({login: '', password: '' })
    const [errors, setErrors] = useState<{ login?: string, password?: string }>({})
    const { t } = useTranslation()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')

        if (token) {
            axios.get(`/${token}`)
                .then(response => {
                    toast.success(t('messages.text'))
                    setUser(response.data)
                })
                .catch(() => {
                    toast.error(t('error_ok.error'))
                })
        }
    }, [])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const validateForm = (): boolean => {
        const newErrors: { login?: string, password?: string } = {}

        if (!formValues.login) {
            newErrors.login = t('error_ok.form.login.no')
        } else if (!regExpString.test(formValues.login)) {
            newErrors.login = t('error_ok.form.login.error')
        }

        if (!formValues.password) {
            newErrors.password = t('error_ok.form.password.no')
        } else if (!regExpPassword.test(formValues.password)) {
            newErrors.password = t('error_ok.form.password.error')
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault()
        if (validateForm()) {
            // if (formValues.login == 'admin' && formValues.password == '123') {
            //     setUser(true)
            //     setFormValues({ login: '', password: '' })
            //     toast.success(t('messages.text'))
            // } else { toast.error(t('error_ok.error')) }

            const response = await login(formValues as LoginPayload)
            if (!('error' in response)) {
                setUser(response?.data)
                setFormValues({ login: '', password: '' })
                toast.success(t('messages.text'))
            } else {
                toast.error(t('error_ok.error'))
            }
        }
    }

    return (
        <StyledAuthWrapper>
            <Card className="card">
                <h1 className='heading'>{t('Page_login.title')}</h1>
                <form onSubmit={handleSubmit} className='form'>
                    <div className="form-item">
                        <label htmlFor="login">{t('Page_login.form.label_login')}</label>
                        <input
                            id = "login"
                            name = "login"
                            type = "login"
                            onChange = { handleInputChange }
                            placeholder = {t('messages.placeholder.input.login')}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">{t('Page_login.form.label_password')}</label>
                        <input
                            id = "password"
                            name = "password"
                            type = "password"
                            value = { formValues.password }
                            onChange = { handleInputChange }
                            placeholder = {t('messages.placeholder.input.password')}
                        />
                        {errors.password && <div className="error-message">{errors.password}</div>}
                    </div>
                    <div className="form-item button">
                        <PinkButton type="submit" disabled={isLoading}>
                            {isLoading ? t('messages.placeholder.status.loading') : t('Page_login.form.btn')}
                        </PinkButton>
                    </div>
                </form>
            </Card>
        </StyledAuthWrapper>
    )
}

export default Login