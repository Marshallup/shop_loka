import * as yup from 'yup';

export const requiredString = (msg = 'Поле обязательно для заполнения') => yup.string().required(msg);
export const nameValidator = (minValue = 2) => yup.string().required('Имя обязательно для заполнения').min(minValue, `Минимальная длинна для имени не менее ${minValue}`);
export const surnameValidator = (minValue = 2) => yup.string().required('Фамилия обязательно для заполнения').min(minValue, `Минимальная длинна для фамилии не менее ${minValue}`);
export const emailValidator = () => yup.string().required('Email обязательно для заполнения').email('Неправильный формат почты');
export const phoneValidator = () => yup.number().nullable().required('Телефон обязателен для заполнения');