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
                pcmcAddress:"Pimpri Chinchwad Muncipal Corporation Mumbai-Pune Road, Pimpri - 123456, Maharashtra, INDIA",
                pcmcName:'Pimpri Chinchwad Muncipal Corporation',
                connectWithUs:'Connect With Us',
                callNow: "Call Now",
                signIn: "Sign In",
                logout: "Logout",
                welcomeBack: "Welcome back!",
                logIntoYourAccount: "Log into your account",
                enterEmailAndPassword: "Enter your email and password to login",
                dontHaveAnAccount: "Don't have an account?",
                signUp: "Sign Up",
                welcome: "Welcome!",
                enterYourDetailsToSignup: "Enter your details to signup",
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                password: "Password",
                alreadyHaveAnAccount: "Already have an account?",
                heading1: 'Eligibility',
                description1: 'This competition is open to everyone, without any discrimination based on age, education, gender, disability, profession, or skill.',
                heading2: 'The concept of the tagline',
                description2: 'The vision of empowerment of persons with disabilities should be clearly reflected in the logo and tagline. Additionally, the commitment of Divyang Bhavan Foundation to protect the rights of persons with disabilities should be evident.',
                description3: 'A competition has been organized to design a logo and tagline for "Divyang Bhavan Foundation." All creative individuals across the country are invited to participate in this competition by Divyang Foundation.',
                importantNoticeForContestants: 'Important notice for contestants',
                noticeForWinners: 'The contestants who will be the winners of the competition will have their logos and taglines trademarked, and an agreement will be made with the winner according to the Trade Mark and Intellectual Property (IP) Rights Act, and these will be obtained for the company in C.D.R. format.',
                freeEntryNotice: 'Participation in the competition is free, and each participating contestant will be given a certificate of participation by Pimpri Chinchwad Municipal Corporation Divyang Bhavan Foundation Company.',
                competitionDuration: 'Competition duration',
                competitionDescription: 'Logo and Tagline Design Competition for Divyang Bhavan Foundation! Calling creative individuals to participate. Spread the message of empowerment of persons with disabilities with your unique ideas.',
                to:'to',
                prizes: 'Prizes',
                participateDescription: 'Participate in competitions, unleash your creativity, and make your name shine by winning attractive prizes. This is a golden opportunity for you!',
                competitionOrganized: 'Competition organized',
                logoDesignPrize: 'Prize money for logo design contest winners.',
                taglineContestPrize: 'Prize money for tagline contest winners.',
                competenceAndSelfEsteem: 'Competence and self-esteem',
                empowermentAndSelfEsteemDescription: 'Empowerment and self-esteem is about making people with disabilities aware of their abilities and motivating them to live with self-respect. Let us come together to create a bright future for the disabled.',
                empowermentOfDisabled: 'Empowerment of the disabled',
                empowermentOfDisabledDescription: 'Empowerment of the disabled means making them self-reliant, expanding their skills, and strengthening their position in society. This is our purpose, the direction of equality, and the inspiration of empowerment.',
                divyangFoundation: 'Divyang Foundation',
                pimpriDescription: 'Pimpri Chinchwad Municipal Corporation is a pioneer in taking initiatives for the rights of persons with disabilities in India. The Municipal Corporation has implemented many effective schemes to protect the interests of the disabled and protect their rights. The Pimpri Chinchwad Municipal Corporation is highly committed to the implementation of the Rights of Persons with Disabilities Act, 2016 (RPWD Act 2016). Accordingly, the Municipal Corporation has established a Divyang Bhavan Foundation at Morwadi, Pimpri with an area of ​​25000 sq.ft. Sadar Bhawan works for therapy and rehabilitation of all persons with disabilities and skills and empowerment among them (all 21 persons with disabilities designated under RPWD Act 2016). Divyang Bhavan will be done by "Divyang Bhavan Foundation".',
                publicComments: 'Public Comments',
                peopleSayAboutUs: 'People say about us',
                divyangPhenomenalJob: 'Divyang Bhavan Foundation has done a phenomenal job in empowering the differently abled in the society. Their hard work and dedication has changed the lives of many. The opportunity and support given to the differently abled through this foundation is very inspiring.',
                rajeshPatil: 'Rajesh Patil, Social Worker',
                foundationWorkImpact: 'Through the foundation\'s work, persons with disabilities have now become competent, self-reliant and active members of the society. With their commitment and efficiency, Divyang Bhavan Foundation has created a new hope and confidence in the society.',
                snehaShah: 'Sneha Shah, Disability Rights Activist',
                extraordinaryEfforts: 'Divyang Bhavan Foundation has made extraordinary efforts to empower the differently abled. Their innovative initiatives and dedication have made a positive difference in the lives of many.',
                amitKumar: 'Amit Kumar, Social Entrepreneur',
                resetPassword: 'Reset Password',
                enterPassword: 'Enter Password',
                reEnterPassword: 'Re - Enter Password',
                reset:'Reset',
                englishTagline: 'English tagline',
                marathiTagline: 'Marathi tagline',
                registerNow: 'Register Now',
                days: 'days',
                hours: 'hours',
                minutes: 'minutes',
                seconds: 'seconds',
                august: 'August',
                phoneNumber: 'Phone Number',
                countryCode: 'Country Code',
                participationCertificate: 'Each participating contestant will be given a certificate of participation by Pimpri Chinchwad Municipal Corporation Divyang Bhavan Foundation Company.',
                termsAndConditions: 'TERMS AND CONDITIONS REGARDING THE CONTEST',
                logoSize: 'Logo size should be 5 MB. Because the logo can be enlarged to the size of the billboard if needed.',
                highResolution: 'The logo should be in high resolution with at least 300 DPI.',
                acceptedFormats: 'The said logo design and tag line will be accepted in JPEG or PDF format.',
                evaluationCriteria: 'The evaluation criteria for logos are as follows:',
                simplicity: 'Simplicity',
                simplicityDescription: 'The design should be simple and easy to understand.',
                unique: 'Unique',
                uniqueDescription: 'The logo should be original and not similar to any other organization\'s logo.',
                relevance: 'Relevance',
                relevanceDescription: 'The design should be relevant to the work of Divyang Bhawan Foundation.',
            },
        },
        mt:{
            translation:{
                aboutUs: "आमच्याबद्दल",
                home: "मुख्यपृष्ठ",
                contactUs: "संपर्क करा",
                privacyPolicy: "गोपनीयता धोरण",
                pcmcAddress: "पिंपरी चिंचवड महानगरपालिका मुंबई-पुणे रोड, पिंपरी - 123456, महाराष्ट्र, भारत",
                pcmcName: "पिंपरी चिंचवड महानगरपालिका",
                connectWithUs: "आमच्याशी संपर्क साधा",
                callNow: "आता कॉल करा",
                signIn: "साइन इन करा",
                logout: "बाहेर पडा",
                welcomeBack: "पुन्हा स्वागत आहे!",
                logIntoYourAccount: "तुमच्या खात्यात लॉगिन करा",
                enterEmailAndPassword: "लॉगिन करण्यासाठी तुमचा ईमेल आणि पासवर्ड प्रविष्ट करा",
                dontHaveAnAccount: "तुमचे खाते नाही?",
                signUp: "साइन अप करा",
                welcome: "स्वागत आहे!",
                enterYourDetailsToSignup: "साइन अप करण्यासाठी तुमचे तपशील प्रविष्ट करा",
                firstName: "पहिले नाव",
                lastName: "आडनाव",
                email: "ईमेल",
                password: "पासवर्ड",
                alreadyHaveAnAccount: "आधीच खाते आहे का?",
                heading1: 'पात्रता',
                description1: 'यामध्ये स्पर्धे मध्ये व्यक्तीचे वय, शिक्षण, लिंग, अपंगत्व, व्यवसाय, आणि कौशल्य यांचा कोणताही भेदभाव न करता हि स्पर्धा सर्वांसाठी खुली आहे.',
                heading2: 'टॅगलाइनचा संकल्पना',
                description2: 'लोगो आणि टॅगलाइनमध्ये दिव्यांग व्यक्तींच्या सशक्तीकरणाचा दृष्टीकोण ठळकपणे मांडला जावा. त्याचबरोबर दिव्यांग व्यक्तींच्या अधिकारांच्या संरक्षणाची दिव्यांग भवन फाउंडेशनची बांधिलकी त्यामधून स्पष्ट व्हावी.',
                heading3: 'प्रेरणादायक लोगो स्पर्धा',
                description3: 'दिव्यांग भवन फाउंडेशन"साठी लोगो व टॅगलाईन डिझाईन करण्यासाठी स्पर्धेचे आयोजन करण्यात आले आहे. यामध्ये देशातील सर्व सर्जनशील व्यक्तींनी सहभाग नोंदविण्याचे आवाहन दिव्यांग फाउंडेशन तर्फे करण्यात आले आहे.',
                importantNoticeForContestants: 'स्पर्धकांसाठी महत्त्वाची सूचना',
                noticeForWinners: 'स्पर्धेतील जे स्पर्धक विजेते होतील अशांकडून त्यांचे लोगो व टॅगलाईन ट्रेड मार्क व विजेत्या कडून Trade Mark व बौध्दीक संपदा (IP) हक्क कायदा याअनुसार करार करून ते सी.डी. आर फॉरमॅटमध्ये कंपनीसाठी घेण्यात येतील.',
                freeEntryNotice: 'स्पर्धेमध्ये सहभाग घेण्यासाठी प्रवेश मोफत असून प्रत्येक सहभागी स्पर्धकाला पिंपरी चिंचवड महानगरपालिका दिव्यांग भवन फाउंडेशन कंपनी द्वारे सहभागाचे प्रमाणपत्र देण्यात येईल.',
                competitionDuration: 'स्पर्धेची कालावधी',
                competitionDescription: 'दिव्यांग भवन फाउंडेशनसाठी लोगो आणि टॅगलाइन डिझाइन स्पर्धा! सर्जनशील व्यक्तींना सहभागी होण्यासाठी आमंत्रण. आपल्या अद्वितीय कल्पनांसह अपंग व्यक्तींच्या सक्षमीकरणाचा संदेश पसरवा.',
                to:'ते',
                prizes: 'बक्षिसे',
                participateDescription: 'स्पर्धांमध्ये सहभागी व्हा, आपल्या सर्जनशीलतेला वाव द्या, आणि आकर्षक बक्षिसे जिंकून आपल्या नावाला चमकवा. ही तुमच्यासाठी एक सुवर्णसंधी आहे!',
                competitionOrganized: 'आयोजित स्पर्धा',
                logoDesignPrize: 'लोगो डिझाइन स्पर्धेतील विजेत्यांसाठी बक्षीस रक्कम',
                taglineContestPrize: 'टॅगलाइन स्पर्धेतील विजेत्यांसाठी बक्षीस रक्कम',
                competenceAndSelfEsteem: 'क्षमता आणि आत्मसन्मान',
                empowermentAndSelfEsteemDescription: 'सक्षमीकरण आणि आत्मसन्मान म्हणजे अपंग व्यक्तींना त्यांच्या क्षमतांची जाणीव करून देणे आणि त्यांना आत्मसन्मानाने जगण्याची प्रेरणा देणे. चला, आपण सर्वजण एकत्र येऊ आणि अपंगांसाठी उज्ज्वल भविष्य निर्माण करूया.',
                empowermentOfDisabled: 'अपंगांचे सक्षमीकरण',
                empowermentOfDisabledDescription: 'अपंगांचे सक्षमीकरण म्हणजे त्यांना स्वावलंबी बनवणे, त्यांच्या कौशल्यांचा विस्तार करणे आणि समाजात त्यांचे स्थान बळकट करणे. हेच आमचे उद्दिष्ट, समतेची दिशा आणि सक्षमीकरणाची प्रेरणा आहे.',
                divyangFoundation: 'दिव्यांग फाउंडेशन',
                pimpriDescription: 'पिंपरी चिंचवड महानगरपालिका भारतातील अपंग व्यक्तींच्या हक्कांसाठी पुढाकार घेण्याच्या बाबतीत अग्रेसर आहे. महानगरपालिकेने अपंगांचे हित जपण्यासाठी आणि त्यांच्या हक्कांचे संरक्षण करण्यासाठी अनेक प्रभावी योजना राबवल्या आहेत. पिंपरी चिंचवड महानगरपालिका अपंग व्यक्तींच्या हक्क अधिनियम, 2016 (RPWD Act 2016) ची अंमलबजावणी करण्यासाठी अत्यंत वचनबद्ध आहे. तद्नुसार, महानगरपालिकेने मोरवाडी, पिंपरी येथे 25000 चौ.फुटांच्या क्षेत्रफळात दिव्यांग भवन फाउंडेशन स्थापन केले आहे. सदर भवन सर्व अपंग व्यक्तींच्या थेरपी आणि पुनर्वसन तसेच त्यांच्यातील कौशल्य आणि सक्षमीकरणासाठी कार्य करते (RPWD Act 2016 अंतर्गत नामांकित 21 सर्व अपंग व्यक्ती). दिव्यांग भवन "दिव्यांग भवन फाउंडेशन" द्वारे केले जाईल.',
                publicComments: 'सार्वजनिक टिप्पण्या',
                peopleSayAboutUs: 'लोक आमच्याबद्दल काय म्हणतात',
                divyangPhenomenalJob: 'दिव्यांग भवन फाउंडेशनने समाजातील वेगवेगळ्या प्रकारच्या अपंगांना सशक्त बनवण्यात अद्भुत काम केले आहे. त्यांचे कठोर परिश्रम आणि समर्पण अनेकांच्या जीवनात बदल घडवून आणले आहेत. या फाउंडेशनद्वारे अपंगांना दिलेली संधी आणि समर्थन खूप प्रेरणादायक आहे.',
                rajeshPatil: 'राजेश पाटील, समाजसेवक',
                foundationWorkImpact: 'फाउंडेशनच्या कामाच्या माध्यमातून, अपंग व्यक्ती आता सक्षम, स्वावलंबी आणि समाजाचे सक्रिय सदस्य बनले आहेत. त्यांच्या वचनबद्धता आणि कार्यक्षमता यांच्या माध्यमातून, दिव्यांग भवन फाउंडेशनने समाजात नवीन आशा आणि आत्मविश्वास निर्माण केला आहे.',
                snehaShah: 'स्नेहा शाह, अपंग हक्क कार्यकर्त्या',
                extraordinaryEfforts: 'दिव्यांग भवन फाउंडेशनने अपंगांना सशक्त बनवण्यासाठी असाधारण प्रयत्न केले आहेत. त्यांच्या नाविन्यपूर्ण उपक्रम आणि समर्पणामुळे अनेकांच्या जीवनात सकारात्मक बदल झाला आहे.',
                amitKumar: 'अमित कुमार, सामाजिक उद्योजक',
                resetPassword: 'पासवर्ड रीसेट करा',
                enterPassword: 'पासवर्ड प्रविष्ट करा',
                reEnterPassword: 'पासवर्ड पुन्हा प्रविष्ट करा',
                reset:'रीसेट',
                englishTagline: 'इंग्रजी टॅगलाईन',
                marathiTagline: 'मराठी टॅगलाईन',
                registerNow: 'आता नोंदणी करा',
                days: 'दिवस',
                hours: 'तास',
                minutes: 'मिनिटे',
                seconds: 'सेकंद',
                august: 'ऑगस्ट',
                phoneNumber: 'फोन नंबर',
                countryCode: 'देश कोड',
                participationCertificate: 'प्रत्येक सहभागी स्पर्धकाला पिंपरी चिंचवड महानगरपालिका दिव्यांग भवन फाउंडेशन कंपनी द्वारे सहभागाचे प्रमाणपत्र देण्यात येईल.',
                termsAndConditions: 'स्पर्धेच्या अटी आणि शर्ती',
                logoSize: 'लोगोचा आकार 5 MB असावा. कारण आवश्यक असल्यास लोगोची मोठ्या फलकाच्या आकारात वाढ करता येईल.',
                highResolution: 'लोगो उच्च रिझोल्यूशनमध्ये असावा आणि किमान 300 DPI असावा.',
                acceptedFormats: 'सदर लोगो डिझाईन आणि टॅगलाईन JPEG किंवा PDF फॉरमॅटमध्ये स्वीकारले जातील.',
                evaluationCriteria: 'लोगोसाठी मूल्यांकन निकष पुढीलप्रमाणे आहेत:',
                simplicity: 'साधेपणा',
                simplicityDescription: 'डिझाईन साधे आणि समजण्यास सोपे असावे.',
                unique: 'अद्वितीय',
                uniqueDescription: 'लोगो मौलिक असावा आणि इतर कोणत्याही संस्थेच्या लोगोशी साम्य नसावा.',
                relevance: 'संबंध',
                relevanceDescription: 'डिझाईन दिव्यांग भवन फाउंडेशनच्या कार्याशी संबंधित असावे.',
            }
        }
    }
})

export default i18next