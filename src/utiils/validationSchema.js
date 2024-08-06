import * as Yup from 'yup';

const fieldRequired = 'Field is required';
const SUPPORTED_FORMATS = ['image/png', 'image/jpg', 'image/jpeg'];

export const competitionSchema = Yup.object().shape({
    name:Yup.string().required(fieldRequired),
    startDate:Yup.date().required(fieldRequired),
    endDate:Yup.date().required(fieldRequired),
    maxContestant:Yup.number().min(1,'Must be a positive value'),
    icon:Yup.mixed().required(fieldRequired).test('fileFormat', 'Unsupported Format', value => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
    prizeType:Yup.string(),
    prizeValue:Yup.number().required(fieldRequired).min(1,'Must be a positive value'),
    prizeDescription:Yup.string(),
    joiningFee:Yup.number().required(fieldRequired).min(1,'Must be a positive value'),
})

export const userSchema = Yup.object().shape({
    firstName: Yup.string().required(fieldRequired).min(4, 'Minimum 4 characters are required')
    .matches(/^[A-Za-z]+$/, 'First name cannot contain numbers or special characters'),
  lastName: Yup.string().min(4, 'Minimum 4 characters are required')
    .required(fieldRequired)
    .matches(/^[A-Za-z]+$/, 'Last name cannot contain numbers or special characters'),
    email: Yup.string().email('Invalid email address').required(fieldRequired),
    password:Yup.string().required(fieldRequired).min(6, 'Password must be at least 6 characters'),
})

export const updateUserSchema = Yup.object().shape({
    firstName:Yup.string().required(fieldRequired),
    lastName:Yup.string().required(fieldRequired),
})

export const userLoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required(fieldRequired),
    password:Yup.string().required(fieldRequired).min(6, 'Password must be at least 6 characters'),
})