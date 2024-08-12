import * as Yup from 'yup';

const fieldRequired = 'Field is required';
const SUPPORTED_FORMATS = ['image/png', 'image/jpg', 'image/jpeg'];

const SUBMISSION_SUPPORTED_FORMATS = ['image/png', 'image/jpg', 'image/jpeg'];

export const competitionSchema = Yup.object().shape({
    name:Yup.string().required(fieldRequired),
    startDate:Yup.date().required(fieldRequired),
    endDate:Yup.date().required(fieldRequired),
    icon:Yup.mixed().required(fieldRequired).test('fileFormat', 'Unsupported Format', value => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
    prizeType:Yup.string(),
    prizeValue:Yup.number().required(fieldRequired).min(1,'Must be a positive value'),
    prizeDescription:Yup.string(),
})

export const userSchema = Yup.object().shape({
    userType: Yup.string().required(fieldRequired),
    // firstName: Yup.string().required(fieldRequired).min(3, 'Minimum 3 characters are required'),
    firstName:Yup.string().when('userType',{
        is:(userType) => userType === 'personal',
        then:()=>Yup.string().required(fieldRequired).min(3, 'Minimum 3 characters are required'),
        otherwise:()=>Yup.string().notRequired(),
    }),
    lastName: Yup.string().when('userType',{
        is:(userType) => userType === 'personal',
        then:()=>Yup.string().required(fieldRequired).min(3, 'Minimum 3 characters are required'),
        otherwise:()=>Yup.string().notRequired(),
    }),
    companyName:Yup.string().when('userType',{
        is:(userType) => userType === 'company',
        then:()=>Yup.string().required(fieldRequired).min(4, 'Minimum 4 characters are required'),
        otherwise:()=>Yup.string().notRequired(),
    }),
    countryCode: Yup.string().required(fieldRequired),
    mobileNo: Yup.string().required(fieldRequired).matches(/^\d+$/, 'Mobile number must contain only digits').min(10, 'Mobile number must be at least 10 digits').max(10, 'Mobile number cannot exceed 10 digits'),
    email: Yup.string().email('Invalid email address').required(fieldRequired),
    password: Yup.string()
.required('Password is required')
.min(6, 'Password must be at least 6 characters long'),
passwordConfirm: Yup.string()
.required('Please confirm your password')
.oneOf([Yup.ref('password'), null], 'Passwords must match'),
})



export const updateUserSchema = Yup.object().shape({
    userType: Yup.string().required(fieldRequired),
    firstName:Yup.string().when('userType',{
        is:(userType) => userType === 'personal',
        then:()=>Yup.string().required(fieldRequired).min(3, 'Minimum 3 characters are required'),
        otherwise:()=>Yup.string().notRequired(),
    }),
    lastName: Yup.string().when('userType',{
        is:(userType) => userType === 'personal',
        then:()=>Yup.string().required(fieldRequired).min(3, 'Minimum 3 characters are required'),
        otherwise:()=>Yup.string().notRequired(),
    }),
    companyName:Yup.string().when('userType',{
        is:(userType) => userType === 'company',
        then:()=>Yup.string().required(fieldRequired).min(4, 'Minimum 4 characters are required'),
        otherwise:()=>Yup.string().notRequired(),
    }),
    mobileNo: Yup.string().required(fieldRequired).matches(/^\d+$/, 'Mobile number must contain only digits').min(10, 'Mobile number must be at least 10 digits').max(10, 'Mobile number cannot exceed 10 digits'),
})

export const userLoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required(fieldRequired),
    password:Yup.string().required(fieldRequired).min(6, 'Password must be at least 6 characters'),
})

export const addContestSchema = Yup.object().shape({
    type:Yup.string().required(fieldRequired),
    image:Yup.mixed().when('type',{
        is:(type) => type === 'logo',
        then:()=>Yup.mixed().required(fieldRequired).test('fileFormat', 'Unsupported Format', value => !value || (value && SUBMISSION_SUPPORTED_FORMATS.includes(value.type))),
        otherwise:()=>Yup.mixed().notRequired(),
    }),
    tagline:Yup.string().when('type',{
        is:(type) => type === 'tagline',
        then:()=>Yup.string().min(3, 'Minimum 3 characters are required').required(fieldRequired).test('max-5-words', 'Maximum 5 words are allowed', function (value) {
            if (!value) return true; 
            const wordCount = value.trim().split(/\s+/).length;
            return wordCount <= 5;
          }),
        otherwise:()=>Yup.string().notRequired(),
    }),
})