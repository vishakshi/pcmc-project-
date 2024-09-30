import i18next from "i18next";
import { initReactI18next } from "react-i18next";
i18next.use(initReactI18next).init({
    debug:true,
    fallbackLng:"mt",
    interpolation:{
        escapeValue:false,
    },
    resources:{
        en:{
            translation:{
                aboutUs:"About Us",
                home:"Home",
                contactUs:"Contact Us",
                privacyPolicy:"Privacy Policy",
                pcmcAddress:"In front of Shraddha Heritage, Behind City One Mall, Morwadi, Pimpri Colony, Pimpri-Chinchwad, Maharashtra - 411018",
                pcmcName:'Pimpri Chinchwad Muncipal Corporation',
                connectWithUs:'Connect With Us',
                callNow: "Call Now",
                signIn: "Sign In",
                logout: "Logout",
                welcomeBack: "Welcome back !",
                logIntoYourAccount: "Log into your account",
                enterEmailAndPassword: "Enter your email and password to login",
                dontHaveAnAccount: "Don't have an account ?",
                signUp: "Sign Up",
                welcome: "Welcome !",
                enterYourDetailsToSignup: "Enter your details to signup",
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                password: "Password",
                alreadyHaveAnAccount: "Already have an account ?",
                heading1: 'Eligibility',
                description1: 'This competition is open to everyone, without any discrimination based on age, education, gender, disability, profession, or skill.',
                heading2: 'The concept of the tagline',
                description2: 'The vision of empowerment of persons with disabilities should be clearly reflected in the logo and tagline. Additionally, the commitment of Divyang Bhavan Foundation to protect the rights of persons with disabilities should be evident.',
                heading3:'Inspirational Logo Contest',
                description3: 'A competition has been organized to design a logo and tagline for "Divyang Bhavan Foundation." All creative individuals across the country are invited to participate in this competition by Divyang Bhavan Foundation.',
                importantNoticeForContestants: 'Important notice for contestants',
                noticeForWinners: 'The contestants who will be the winners of the competition will have their logos and taglines trademarked, and an agreement will be made with the winner according to the Trade Mark and Intellectual Property (IP) Rights Act, and these will be obtained for the company in C.D.R. format.',
                freeEntryNotice: 'Participation in the competition is free, and each participating contestant will be given a certificate of participation by Pimpri Chinchwad Mahanagar Palika Divyang Bhavan Foundation Company.',
                competitionDuration: 'Contest Concluded!',
                competitionDescription: 'The curiosity of Marathi and English tag line competition results conducted by Pimpri Chinchwad Mahanagar Palika Divyang Bhavan Foundation is over now.. You can check your result on competition page, and download your certificate online...',
                congratsMsg:'Congratulations to all the contestants who participated in the competition!!!',
                to:'to',
                prizes: 'Prizes',
                participateDescription: 'Participate in competitions, unleash your creativity, and make your name shine by winning attractive prizes. This is a golden opportunity for you !',
                competitionOrganized: 'Competition organized',
                logoDesignPrize: 'Prize money for logo design contest winners.',
                taglineContestPrize: 'Prize money for tagline contest winners.',
                competenceAndSelfEsteem: 'Competence and self-esteem',
                empowermentAndSelfEsteemDescription: 'Empowerment and self-esteem is about making people with disabilities aware of their abilities and motivating them to live with self-respect. Let us come together to create a bright future for the disabled.',
                empowermentOfDisabled: 'Empowerment of the disabled',
                empowermentOfDisabledDescription: 'Empowerment of the disabled means making them self-reliant, expanding their skills, and strengthening their position in society. This is our purpose, the direction of equality, and the inspiration of empowerment.',
                divyangFoundation: 'Pimpri Chinchwad Mahanagar Palika Divyang Bhavan Foundation',
                pimpriDescription: 'Pimpri Chinchwad Mahanagar Palika is a pioneer in taking initiatives for the rights of persons with disabilities. The Mahanagar Palika has implemented many effective schemes to safeguard the interests of the disabled and protect their rights. The Pimpri Chinchwad Mahanagar Palika is committed to implementing the Rights of Persons with Disabilities Act, 2016 (RPwD Act 2016). Accordingly, the Mahanagar Palika has established Divyang Bhavan Foundation at Morwadi, Pimpri. Sadar Bhavan works for the therapy and rehabilitation of all persons with disabilities as well as their skills and empowerment.',
                publicComments: 'Public Comments',
                peopleSayAboutUs: 'People say about us',
                divyangPhenomenalJob: 'Divyang Bhavan Foundation is a social organization, which provides various facilities and services for persons with disabilities. The aim of this organization is to reduce the difficulties in the lives of persons with disabilities and help them live more independently and with dignity.',
                rajeshPatil: 'Siddharth Bhosale',
                foundationWorkImpact: 'Divyang Bhavan Foundation is actually rooting for the idea of ​treating man as man. This is creating a positive attitude towards the disabled.',
                snehaShah: 'Pratibha Birajdar',
                extraordinaryEfforts: 'Divyang Bhavan has started as a one-stop centre. According to the RPwD Act 2016, therapy services are being provided here to 21 types of disabilities. Here are the guidelines that are essential for the holistic development of a person with disabilities.',
                amitKumar: 'Dr. Priyanka Ghute',
                testimonial4:'A soul born abnormal has to struggle to live a normal life, it is certainly painful. Divyang Bhavan Foundation is working very positively to make a change in the society such as "A home where there should be no relationship, love and humanity" for the disabled.',
                akshaylata:'Akshay Lata Ashruba Neharkar',
                testimonial5:'Divyang Bhavan Foundation is a fortunate event for the disabled people and their parents in Pimpri Chinchwad Mahanagar Palika. The said foundation will continue to work in terms of their physical, educational, vocational and social rehabilitation from disability prevention measures. In this regard, the said Divyang Bhavan Foundation will be operational by appointing a well-equipped building with all facilities and experts in the field of the disabled.This innovative initiative in India is being implemented through PCMC for comprehensive rehabilitation of disabled people. It is sure that it will benefit all the disabled people and their parents in PCMC limits.All the best for the future of Divyang Bhavan Foundation.',
                nandkumarphule:'Mr. NandKumar Phule, General Manager (Sec.) Maharashtra State Disability Finance and Development Corporation, Mumbai',
                resetPassword: 'Reset Password',
                enterPassword: 'Enter Password',
                reEnterPassword: 'Re - Enter Password',
                reset:'Reset',
                englishTagline: 'English tagline',
                marathiTagline: 'Marathi tagline',
                registerNow: 'Login Now',
                days: 'days',
                hours: 'hours',
                minutes: 'minutes',
                seconds: 'seconds',
                august: 'August',
                phoneNumber: 'Phone Number',
                countryCode: 'Country Code',
                participationCertificate: 'Each participating contestant will be given a certificate of participation by Pimpri Chinchwad Mahanagar Palika Divyang Bhavan Foundation.',
                termsAndConditions: 'TERMS AND CONDITIONS REGARDING THE CONTEST',
                logoSize: 'Logo size should be 5 MB. Because the logo can be enlarged to the size of the billboard if needed.',
                highResolution: 'The logo should be in high resolution with at least 300 DPI.',
                acceptedFormats: 'The said logo design and tagline will be accepted in JPEG or PDF format.',
                evaluationCriteria: 'The evaluation criteria for logos are as follows:',
                simplicity: 'Simplicity',
                simplicityDescription: 'The design should be simple and easy to understand.',
                unique: 'Unique',
                uniqueDescription: 'The logo should be original and not similar to any other organization\'s logo.',
                relevance: 'Relevance',
                relevanceDescription: 'The design should be relevant to the work of Divyang Bhavan Foundation.',
                honorCompetition: 'Honor competition, follow the rules !',
                participationHonor: 'Participation in competition, honoring creativity',
                empoweredDisabled: 'Empowered disabled, prosperous society !',
                winPrizes: 'Win attractive prizes !',
                divyangBhavanFoundation: 'Pimpri Chinchwad Mahanagar Palika Divyang Bhavan Foundation',
                supportInspiration: 'Your support will inspire us',
                supportEmpowerment: 'Your support, our inspiration; Let\'s open a new direction for the empowerment of the disabled !',
                watchVideo: 'Watch the video',
                enterFirstName: 'Enter your first name',
                enterLastName: 'Enter your last name',
                enterCompanyName: 'Enter company name',
                enterMobileNumber: 'Enter mobile number',
                enterEmail: 'Enter your email',
                enterPassword: 'Enter Your Password',
                confirmPassword: 'Confirm your password',
                passwordConfirm: 'Password Confirm',
                companyName: 'Company name',
                enterCompanyName: 'Enter company name',
                or: 'Or',
                oneLogoPerParticipant: 'Only one logo, one Marathi tagline, and one English tagline will be accepted per participant.',
                noAIForLogoTagline: 'Logo and Tagline created with the help of AI will not be accepted.',
                registerAs: 'Register as',
                personal: 'Personal',
                company: 'Company',
                acceptTerms: 'I accept the terms and conditions',
                forgotPassword: 'Forgot your password ?',
                pimpriChinchwadMunicipalCorporation: 'Pimpri Chinchwad Mahanagar Palika',
                committedEmpowerment: 'Committed to the empowerment of the disabled',
                quickLinks: 'Quick Links',
                advertisementInfo: 'Advertisement Information',
                rightToInformation: 'Right to Information',
                contact: 'Contact',
                accessibleGuide: 'Accessible Guide',
                divyangBhavan: 'Divyang Bhavan Foundation',
                noWorriesResetInstructions: "No worries, we'll send you reset instructions.",
                forgotPassword: 'Forgot Password ?',
                backToLogin: 'Back to Login',
                enterOTP: 'Enter OTP',
                enter4DigitOTP: 'Enter 4 digit OTP',
                sendOTP: 'Send OTP',
                siteVisits: 'Site Visits',
                contactInformation: 'Contact Information',
                enquiryForm: 'Enquiry Form',
                pleaseGiveUsYourFeedback: 'Please Give Us Your Feedback !!',
                sendMessage: 'Send Message',
                sendFeedback: 'Send Feedback',
                message: 'Message',
                name: 'Name',
                contactUs2: 'Contact Us',
                career:'Career',
                hiringNow: "Divyang Bhavan Foundation is hiring now..so get connect with us !!",
                therapistInDifferentAreas: "Therapist in different areas",
                lookingForTherapists: "We are looking for different therapists, kindly get details and connect with us",
                vacanciesInformation: "More information about Vacancies in Divyang Bhavan Foundation - Download from here",
                audiologistAndProsthetics: "Audiologist / Sr. Prosthetics / Orthotics",
                lookingForAudiologist: "We are looking for Audiologist/ Sr. Prosthetics / Orthotics, kindly get details and connect with us",
                rehabilitationWorkers: "Rehabilitation workers",
                lookingForRehabilitationWorkers: "We are looking for Rehabilitation workers, kindly get details and connect with us",
                kalaShikshak: "Kala Shikshak",
                lookingForKalaShikshak: "We are looking for Kala Shikshak, kindly get details and connect with us",
                carrerResult:"Recruited Staff List",
            },
        },
        mt:{
            translation:{
                aboutUs: "आमच्याबद्दल",
                home: "मुख्यपृष्ठ",
                contactUs: "संपर्क करा",
                privacyPolicy: "गोपनीयता धोरण",
                pcmcAddress: "श्रद्धा हेरिटेजच्या समोर, सिटी वन मॉलच्या मागे, मोरवाडी, पिंपरी कॉलनी, पिंपरी-चिंचवड, महाराष्ट्र - 411018",
                pcmcName: "पिंपरी चिंचवड महानगर पालिका",
                connectWithUs: "आमच्याशी संपर्क साधा",
                callNow: "आता कॉल करा",
                signIn: "साइन इन करा",
                logout: "बाहेर पडा",
                welcomeBack: "पुन्हा स्वागत आहे !",
                logIntoYourAccount: "तुमच्या खात्यात लॉगिन करा",
                enterEmailAndPassword: "लॉगिन करण्यासाठी तुमचा ईमेल आणि पासवर्ड प्रविष्ट करा",
                dontHaveAnAccount: "तुमचे खाते नाही ?",
                signUp: "साइन अप करा",
                welcome: "स्वागत आहे !",
                enterYourDetailsToSignup: "साइन अप करण्यासाठी तुमचे तपशील प्रविष्ट करा",
                firstName: "नाव",
                lastName: "आडनाव",
                email: "ईमेल",
                password: "पासवर्ड",
                alreadyHaveAnAccount: "आधीच खाते आहे का ?",
                heading1: 'पात्रता',
                description1: 'या स्पर्धेमध्ये व्यक्तीचे वय, शिक्षण, लिंग, दिव्यांगत्व, व्यवसाय, आणि कौशल्य यांचा कोणताही भेदभाव न करता ही स्पर्धा सर्वांसाठी खुली आहे.',
                heading2: 'टॅगलाइनचा संकल्पना',
                description2: 'लोगो आणि टॅगलाइनमध्ये दिव्यांग व्यक्तींच्या सशक्तीकरणाचा दृष्टीकोण ठळकपणे मांडला जावा. त्याचबरोबर दिव्यांग व्यक्तींच्या अधिकारांच्या संरक्षणाची दिव्यांग भवन फाऊंडेशनची बांधिलकी त्यामधून स्पष्ट व्हावी.',
                heading3: 'प्रेरणादायक लोगो स्पर्धा',
                description3: 'दिव्यांग भवन फाऊंडेशन साठी लोगो व टॅगलाईन डिझाईन करण्यासाठी स्पर्धेचे आयोजन करण्यात आले आहे. यामध्ये देशातील सर्व सर्जनशील व्यक्तींनी सहभाग नोंदविण्याचे आवाहन दिव्यांग भवन फाऊंडेशन तर्फे करण्यात येत आहे.',
                importantNoticeForContestants: 'स्पर्धकांसाठी महत्त्वाची सूचना',
                noticeForWinners: 'स्पर्धेतील जे स्पर्धक विजेते होतील अशांकडून त्यांचे लोगो व टॅगलाईन ट्रेड मार्क (Trade Mark) व बौध्दीक संपदा (IP) हक्क कायदा याअनुसार करार करून ते सी.डी. आर फॉरमॅटमध्ये कंपनीसाठी घेण्यात येतील.',
                freeEntryNotice: 'स्पर्धेमध्ये सहभाग घेण्यासाठी प्रवेश मोफत असून प्रत्येक सहभागी स्पर्धकाला पिंपरी चिंचवड महानगर पालिका दिव्यांग भवन फाऊंडेशन कंपनी द्वारे सहभागाचे प्रमाणपत्र देण्यात येईल.',
                competitionDuration: 'स्पर्धा संपली!',
                competitionDescription: 'पिंपरी चिंचवड महानगर पालिका दिव्यांग भवन फाऊंडेशन तर्फे घेण्यात आलेल्या मराठी आणि इंग्लिश टॅग लाईन स्पर्धेच्या निकालाची उत्सुकता आता संपली आहे.. तुम्ही स्पर्धेच्या पेज वर तुमचा निकाल पाहू शकता, आणि ऑनलाईन तुमचे प्रमाणपत्र डाउनलोड करू शकता...',
                congratsMsg:'स्पर्धे मध्ये सहभागी झालेल्या सर्व स्पर्धाकांचे खूप अभिनंदन!!!',
                to:'ते',
                prizes: 'बक्षीसे',
                participateDescription: 'स्पर्धांमध्ये सहभागी व्हा, आपल्या सर्जनशीलतेला वाव द्या, आणि आकर्षक बक्षीसे जिंकून आपल्या नावाला चमकवा. ही तुमच्यासाठी एक सुवर्णसंधी आहे !',
                competitionOrganized: 'आयोजित स्पर्धा',
                logoDesignPrize: 'लोगो डिझाइन स्पर्धेतील विजेत्यासाठी बक्षीस रक्कम',
                taglineContestPrize: 'टॅगलाइन स्पर्धेतील विजेत्यासाठी बक्षीस रक्कम',
                competenceAndSelfEsteem: 'सक्षमता आणि स्वाभिमान',
                empowermentAndSelfEsteemDescription: 'सक्षमता आणि स्वाभिमान म्हणजे दिव्यांगांना त्यांच्या क्षमतांची जाणीव करून देणे आणि त्यांना स्वाभिमानाने जगण्यासाठी प्रेरित करणे. आपण एकत्र येऊन दिव्यांगांसाठी उज्ज्वल भविष्य घडवूया.',
                empowermentOfDisabled: 'दिव्यांगांचे सशक्तीकरण',
                empowermentOfDisabledDescription: 'दिव्यांगांचे सशक्तीकरण म्हणजे त्यांना स्वावलंबी बनविणे, त्यांच्या कौशल्यांना वाव देणे आणि समाजात त्यांचे स्थान मजबूत करणे, हा आमचा उद्देश आहे.',
                divyangFoundation: 'पिंपरी चिंचवड महानगर पालिका  दिव्यांग  भवन फाऊंडेशन',
                pimpriDescription: 'पिंपरी चिंचवड महानगर पालिका दिव्यांग व्यक्तींच्या हक्कांसाठी पुढाकार घेण्याच्या बाबतीत अग्रेसर आहे. महानगरपालिकेने दिव्यांगांचे हित जपण्यासाठी आणि त्यांच्या हक्कांचे संरक्षण करण्यासाठी अनेक प्रभावी योजना राबवल्या आहेत. पिंपरी चिंचवड महानगर पालिका दिव्यांग व्यक्तींच्या हक्क अधिनियम, 2016 (RPwD Act 2016) ची अंमलबजावणी करण्यासाठी  वचनबद्ध आहे. तद्नुसार, महानगरपालिकेने मोरवाडी, पिंपरी येथे दिव्यांग भवन फाऊंडेशन स्थापन केले आहे. सदर भवन सर्व दिव्यांग व्यक्तींच्या थेरपी आणि पुनर्वसन तसेच त्यांच्यातील कौशल्य आणि सक्षमीकरणासाठी कार्य करते.',
                publicComments: 'अभिप्राय',
                peopleSayAboutUs: 'लोक आमच्याबद्दल काय म्हणतात',
                divyangPhenomenalJob: 'दिव्यांग भवन फाऊंडेशन एक सामाजिक संस्था आहे, जी दिव्यांग व्यक्तींसाठी विविध सुविधा आणि सेवा पुरवते. या संस्थेचे उद्दिष्ट दिव्यांग व्यक्तींच्या जीवनातील अडचणी कमी करून त्यांना अधिक स्वतंत्र आणि सन्मानाने जगण्यास सहाय्य करणे आहे.',
                rajeshPatil: 'सिद्धार्थ भोसले',
                foundationWorkImpact: 'माणसाने माणसाशी माणसासम वागणे हा विचार प्रत्यक्षात दिव्यांग भवन फाऊंडेशन रुजवत असल्याचे जाणवते. दिव्यांगांच्या प्रती एक सकारात्मक दृष्टिकोन यामुळे निर्माण होत आहे.',
                snehaShah: 'प्रतिभा बिराजदार',
                extraordinaryEfforts: 'दिव्यांग भवन हे एक वन-स्टॉप  सेंटर म्हणून सुरु झाले आहे. RPwD Act 2016 नुसार 21 प्रकारच्या दिव्यांगाना इथे थेरपी सेवा देण्यात येत आहे. दिव्यांगाच्या सर्वांगीण विकासासाठी आवश्यक असणारे मार्गदर्शक येथे उपलब्ध आहेत.',
                amitKumar: 'डॉ. प्रियंका घुटे',
                testimonial4:'असामान्य म्हणून जन्माला आलेल्या जिवाला सामान्य जीवन जगण्यासाठी संघर्ष करावा लागतो, हे नक्कीच वेदनादायी आहे. "दिव्यांग असे ज्या घरी, तेथे नसावी नाते,प्रेम अन् माणुसकीची दरी" असे बदल समाजात घडावे यासाठी खुप सकारात्मकतेने दिव्यांग भवन फाऊंडेशन कार्यरत आहे.',
                akshaylata:'अक्षय लता आश्रुबा नेहरकर',
                testimonial5:'पिंपरी चिंचवड महानगरपालिका हद्दीतील दिव्यांग बांधव व त्यांच्या पालकांच्या दृष्टीने दिव्यांग भवन फाऊंडेशन ही एक भाग्यकारक घटना आहे. दिव्यांगत्व प्रतिबंधात्मक उपायापासून त्यांचे शारीरिक, शैक्षणिक, व्यावसायिक व सामाजिक पुनर्वसनाच्या दृष्टीने सदर फाऊंडेशन कार्यरत राहणार आहे. त्या दृष्टीने सर्व सोयींनी युक्त अशी सुसज्ज इमारत तसेच दिव्यांग क्षेत्रातील तज्ञ व्यक्तींची नेमणूक करून सदर दिव्यांग भवन फाउंडेशन कार्यान्वित राहणार आहे.दिव्यांगांच्या सर्वांगीण पुनर्वसनाच्या दृष्टीने भारत देशातील हा अभिनव उपक्रम पी.सी.एम.सी मार्फत राबविण्यात येत आहे. त्याचा फायदा पी.सी.एम.सी हद्दीतील सर्व दिव्यांग व त्यांच्या पालकांना होईल ही खात्री आहे. दिव्यांग भवन फाऊंडेशनच्या  भविष्यातील वाटचालीस शुभेच्छा. ',
                nandkumarphule:'श्री. नंदकुमार फुले, महाव्यवस्थापक (से. नि.)महाराष्ट्र राज्य दिव्यांग वित्त व विकास महामंडळ, मुंबई',
                resetPassword: 'पासवर्ड रीसेट करा',
                enterPassword: 'पासवर्ड प्रविष्ट करा',
                reEnterPassword: 'पासवर्ड पुन्हा प्रविष्ट करा',
                reset:'रीसेट',
                englishTagline: 'इंग्रजी टॅगलाईन',
                marathiTagline: 'मराठी टॅगलाईन',
                registerNow: 'आता लॉगिन करा',
                days: 'दिवस',
                hours: 'तास',
                minutes: 'मिनिटे',
                seconds: 'सेकंद',
                august: 'ऑगस्ट',
                phoneNumber: 'मोबाईल क्रमांक (10 अंकी)',
                countryCode: 'देश कोड',
                participationCertificate: 'प्रत्येक सहभागी स्पर्धकाला पिंपरी चिंचवड महानगर पालिका दिव्यांग भवन फाऊंडेशन द्वारे सहभागाचे प्रमाणपत्र देण्यात येईल.',
                termsAndConditions: 'स्पर्धेच्या अटी आणि शर्ती',
                logoSize: 'लोगोचा आकार 5 MB असावा.आवश्यक असल्यास लोगोची मोठ्या फलकाच्या आकारात वाढ करता येईल.',
                highResolution: 'लोगो उच्च रिझोल्यूशनमध्ये असावा आणि किमान 300 DPI असावा.',
                acceptedFormats: 'सदर लोगो डिझाईन आणि टॅगलाईन JPEG किंवा PDF फॉरमॅटमध्ये स्वीकारले जातील.',
                evaluationCriteria: 'लोगोसाठी मूल्यांकन निकष पुढीलप्रमाणे आहेत:',
                simplicity: 'साधेपणा',
                simplicityDescription: 'डिझाईन साधे आणि समजण्यास सोपे असावे.',
                unique: 'अद्वितीय',
                uniqueDescription: 'लोगो मौलिक असावा आणि इतर कोणत्याही संस्थेच्या लोगोशी साम्य नसावे.',
                relevance: 'संबंध',
                relevanceDescription: 'डिझाईन दिव्यांग भवन फाऊंडेशनच्या कार्याशी संबंधित असावे.',
                honorCompetition: 'स्पर्धेचा सन्मान करा, नियमांचे पालन करा !',
                participationHonor: 'स्पर्धेत सहभाग, सर्जनशीलतेचा सन्मान',
                empoweredDisabled: 'सशक्त दिव्यांग, समृद्ध समाज !',
                winPrizes: 'आकर्षक बक्षीसे जिंका !',
                divyangBhavanFoundation: 'पिंपरी चिंचवड महानगर पालिका दिव्यांग भवन फाऊंडेशन',
                supportInspiration: 'आपला पाठिंबा आम्हाला प्रेरणा देईल',
                supportEmpowerment: 'आपला पाठिंबा, आमची प्रेरणा; दिव्यांगांच्या सशक्तीकरणासाठी एक नवीन दिशा उघडूया !',
                watchVideo: 'व्हिडिओ पहा',
                enterFirstName: 'आपले पहिले नाव प्रविष्ट करा',
                enterLastName: 'आपले आडनाव प्रविष्ट करा',
                enterCompanyName: 'कंपनीचे नाव प्रविष्ट करा',
                enterMobileNumber: 'मोबाइल नंबर प्रविष्ट करा',
                enterEmail: 'आपला ईमेल प्रविष्ट करा',
                enterPassword: 'आपला पासवर्ड प्रविष्ट करा',
                confirmPassword: 'आपला पासवर्ड पडताळा',
                passwordConfirm: 'पासवर्ड पडताळा',
                companyName: 'कंपनीचे नाव',
                enterCompanyName: 'कंपनीचे नाव प्रविष्ट करा',
                or: 'किंवा',
                oneLogoPerParticipant: 'एका स्पर्धकाचे एक लोगो, एक मराठी घोषवाक्य आणि एक इंग्रजी घोषवाक्य एकदाच स्वीकारले जाईल.',
                noAIForLogoTagline: 'AI च्या मदतीने बनविले जाणारे Logo (बोधचिन्ह ) आणि Tagline(घोषवाक्य) स्वीकारले जाणार नाहीत.',
                registerAs: 'नोंदणी करा',
                personal: 'वैयक्तिक',
                company: 'कंपनी',
                acceptTerms: 'मी अटी व शर्ती स्वीकारतो/स्वीकारते',
                forgotPassword: 'आपला पासवर्ड विसरलात ?',
                pimpriChinchwadMunicipalCorporation: 'पिंपरी चिंचवड महानगर पालिका',
                committedEmpowerment: 'दिव्यांगांच्या सक्षमीकरणासाठी बांधिल',
                quickLinks: 'जलद लिंक्स',
                advertisementInfo: 'जाहिरात माहिती',
                rightToInformation: 'माहितीचा अधिकार',
                contact: 'संपर्क',
                accessibleGuide: 'सुविधायुक्त मार्गदर्शक',
                divyangBhavan: 'दिव्यांग भवन फाऊंडेशन',
                noWorriesResetInstructions: 'काळजी करू नका, आम्ही तुम्हाला रीसेट करण्याच्या सूचना पाठवू.',
                forgotPassword: 'पासवर्ड विसरलात ?',
                backToLogin: 'लॉगिनवर परत जा',
                enterOTP: 'ओटीपी प्रविष्ट करा',
                enter4DigitOTP: '4 अंकी ओटीपी प्रविष्ट करा',
                sendOTP: 'ओटीपी पाठवा',
                siteVisits: 'साइट भेटी',
                contactInformation: 'संपर्क माहिती',
                enquiryForm: 'चौकशी फॉर्म',
                pleaseGiveUsYourFeedback: 'कृपया आम्हाला तुमचा अभिप्राय द्या !!',
                sendMessage: 'संदेश पाठवा',
                sendFeedback: 'अभिप्राय पाठवा',
                message: 'संदेश',
                name: 'नाव',
                contactUs2: 'आम्हाला संपर्क करा',
                career:'करिअर',
                hiringNow: "दिव्यांग भवन फाऊंडेशन येथे भरती चालु आहे, त्यासाठी आमच्याशी संपर्क साधा....",
                therapistInDifferentAreas: "विविध क्षेत्रातील रोगोपचारतज्ञ",
                lookingForTherapists: "आमच्या कडे विविध रोगोपचार तज्ञांच्या जागा रिक्त आहेत, कृपया अधिक माहिती मिळवा आणि आमच्या शी संपर्क करा",
                vacanciesInformation: "दिव्यांग भवन फाऊंडेशन च्या भरती चा अधिक तपशील - डाउनलोड करा",
                audiologistAndProsthetics: "ऑडिओलॉजिस्ट / सिनियर प्रोस्थेटिक्स /ऑर्थोटिक्स",
                lookingForAudiologist: "आमच्या कडे ऑडिओलॉजिस्ट / सिनियर प्रोस्थेटिक्स /ऑर्थोटिक्स साठी रिक्त जागा आहेत, कृपया अधिक माहिती मिळवा आणि आमच्या शी संपर्क करा",
                rehabilitationWorkers: "पुनर्वसन उपचार परिचारिका",
                lookingForRehabilitationWorkers: "आमच्या कडे पुनर्वसन उपचार परिचारिकां साठी रिक्त जागा आहेत, कृपया अधिक माहिती मिळवा आणि आमच्या शी संपर्क करा",
                kalaShikshak: "कला शिक्षक",
                lookingForKalaShikshak: "आमच्या कडे कला शिक्षकांसाठी रिक्त जागा आहेत, कृपया अधिक माहिती मिळवा आणि आमच्या शी संपर्क करा",
                carrerResult:"भरती केलेले कर्मचारी",
            }
        }
    }
})

export default i18next