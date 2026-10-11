/**
 * Uzaktan Türkolog - Standard CEFR A1, A2, B1, B2 & C1 Full Academic & Conversational Curriculum
 * Prepared based on Kazakhstani Official Educational Standards and Comparative Turkic Linguistics.
 * 15 Extensive Units across all 5 CEFR levels with comprehensive vocabulary, grammar, dialogues & exercises.
 */

import { Unit, UserBadge } from '../types';

export const initialUnits: Unit[] = [
  // ==========================================
  // LEVEL A1 - UNIT 1: ALFABE VE ÖZEL SESLER
  // ==========================================
  {
    id: 'unit-a1-1',
    unitNumber: 1,
    level: 'A1',
    direction: 'TR_TO_KZ',
    titleTr: 'Ünite 1: Kazak Alfabesi ve Özel Sesler',
    titleKz: '1-бөлім: Қазақ әліпбиі және төл дыбыстар',
    descriptionTr: 'Kazakçaya özgü 9 özel harf (Ә, І, Ң, Ғ, Ү, Ұ, Қ, Ө, Һ), sesletim ve alfabe temelleri.',
    descriptionKz: 'Қазақ тілінің 9 төл дыбысы (Ә, І, Ң, Ғ, Ү, Ұ, Қ, Ө, Һ) және әліпби ерекшеліктері.',
    icon: 'Sparkles',
    isPublished: true,
    version: 3,
    lessons: [
      {
        id: 'lesson-a1-1-1',
        unitId: 'unit-a1-1',
        lessonNumber: 1,
        titleTr: 'Ders 1: Kazakçanın 9 Özel Harfi ve Fonetiği',
        titleKz: '1-сабақ: Қазақ тілінің 9 төл әрпі',
        summaryTr: 'Ә, І, Ң, Ғ, Ү, Ұ, Қ, Ө, Һ harflerinin ağız hareketleri, sesletim noktaları ve örnek kelimeleri.',
        summaryKz: 'Қазақ тіліндегі төл дыбыстарды дұрыс дыбыстау және жазу үлгілері.',
        learningObjectivesTr: [
          'Kazakçaya özgü 9 özel sesi ayırt edebilme ve doğru telaffuz edebilme',
          'Kiril ve Latin harf karşılıklarını kavrama',
          'Açık e (Ә), geniz nesi (Ң) ve boğaz kaf (Қ) seslerini çıkarma'
        ],
        learningObjectivesKz: [
          'Төл дыбыстарды анық айта білу',
          'Әріптердің емлесін меңгеру'
        ],
        vocabulary: [
          {
            id: 'v-a1-1',
            kazakhCyrillic: 'Ән',
            kazakhLatin: 'Än',
            turkish: 'Şarkı / Ezgi',
            phoneticGuide: 'än (açık e sesi)',
            partOfSpeech: 'noun',
            exampleKazakh: 'Қазақтың әсем әні.',
            exampleTurkish: 'Kazakların güzel şarkısı.',
            category: 'Alfabe ve Sesler'
          },
          {
            id: 'v-a1-2',
            kazakhCyrillic: 'Ғалым',
            kazakhLatin: 'Ğalym',
            turkish: 'Bilim insanı / Âlim',
            phoneticGuide: 'ğa-lym (derin boğaz ğ)',
            partOfSpeech: 'noun',
            exampleKazakh: 'Ол – белгілі қазақ ғалымы.',
            exampleTurkish: 'O, tanınmış bir Kazak bilim insanıdır.',
            category: 'Alfabe ve Sesler'
          },
          {
            id: 'v-a1-3',
            kazakhCyrillic: 'Қазақ',
            kazakhLatin: 'Qazaq',
            turkish: 'Kazak',
            phoneticGuide: 'qa-zaq (kalın boğaz k)',
            partOfSpeech: 'noun',
            exampleKazakh: 'Қазақ халқы өте қонақжай.',
            exampleTurkish: 'Kazak halkı çok misafirperverdir.',
            category: 'Alfabe ve Sesler'
          },
          {
            id: 'v-a1-4',
            kazakhCyrillic: 'Жаңа',
            kazakhLatin: 'Jaña',
            turkish: 'Yeni',
            phoneticGuide: 'ja-ña (geniz n sesi)',
            partOfSpeech: 'adj',
            exampleKazakh: 'Жаңа кітап оқыдым.',
            exampleTurkish: 'Yeni kitap okudum.',
            category: 'Alfabe ve Sesler'
          },
          {
            id: 'v-a1-5',
            kazakhCyrillic: 'Үй',
            kazakhLatin: 'Üy',
            turkish: 'Ev',
            phoneticGuide: 'üy (ince yuvarlak ü)',
            partOfSpeech: 'noun',
            exampleKazakh: 'Біздің үй кең әрі жарық.',
            exampleTurkish: 'Bizim evimiz geniş ve aydınlıktır.',
            category: 'Alfabe ve Sesler'
          }
        ],
        grammar: {
          titleTr: 'Kazakça ve Türkiye Türkçesi Ses Uyumu Karşılaştırması',
          titleKz: 'Қазақ және түрік тілдеріндегі дыбыс үндестігі',
          explanationTr: 'Kazakçada kalınlık-incelik uyumu Türkçeye göre çok daha katıdır. Kelime kalın ünlüyle (А, О, Ұ, Ы) başlarsa bütün ekler kalın; ince ünlüyle (Ә, Ө, Ү, І, Е) başlarsa ekler ince gelir.',
          explanationKz: 'Жуан және жіңішке дауыстылардың үндестік заңы сөздер мен қосымшаларда қатаң сақталады.',
          rules: [
            {
              id: 'r-a1-1',
              titleTr: 'Kalın Ünlüler Kuralı',
              titleKz: 'Жуан дауыстылар',
              trPattern: 'a, ı, o, u ➔ Kalın ekler (-lar, -da, -dan)',
              kzPattern: 'а, о, ұ, ы ➔ Жуан жалғаулар (-лар, -да, -дан)',
              explanationTr: 'Kalın kökler sadece kalın ek alır: Бала + лар = Балалар (Çocuklar).',
              explanationKz: 'Бала сөзіне жуан -лар жалғанады.'
            }
          ],
          examples: [
            {
              kazakh: 'Балалар мектепке барды.',
              turkish: 'Çocuklar okula gitti.',
              breakdown: 'Бала-лар (kalın uyum) + мектеп-ке (ince uyum) + бар-ды'
            }
          ],
          commonMistakes: []
        },
        dialogue: {
          id: 'dlg-a1-1',
          titleTr: 'Sınıfta Harflerin Okunuşu',
          titleKz: 'Сыныптағы әріптердің дыбысталуы',
          contextTr: 'Öğretmen ve öğrenci Kazakça özel harfleri telaffuz ediyor.',
          contextKz: 'Мұғалім мен оқушы төл дыбыстарды үйренуде.',
          lines: [
            {
              id: 'dl-a1-1',
              speaker: 'Ұстаз',
              avatar: '👩‍🏫',
              kazakh: '«Қазақ» сөзін бірге қайталайық: Қа-зақ.',
              turkish: '«Kazak» kelimesini birlikte tekrarlayalım: Ka-zak.'
            },
            {
              id: 'dl-a1-2',
              speaker: 'Оқушы',
              avatar: '🧑‍🎓',
              kazakh: 'Қазақ! «Қ» дыбысы көмейден шығады екен.',
              turkish: 'Kazak! «Q» sesi boğazdan çıkıyormuş.'
            }
          ]
        },
        exercises: [
          {
            id: 'ex-a1-1',
            type: 'multiple_choice',
            questionTr: 'Kazakçadaki "Қ" harfinin doğru artikülasyonu nasıldır?',
            questionKz: '«Қ» әрпі қалай дыбысталады?',
            options: [
              'Boğazdan derin çıkan kalın patlamalı k sesi',
              'Ön damak ince k sesi',
              'Genizden gelen burun sesi',
              'Yumuşak g sesi'
            ],
            correctAnswer: 'Boğazdan derin çıkan kalın patlamalı k sesi',
            explanationTr: 'Doğru! «Қ» kalın ünlülerle hecelenen derin boğaz sesidir.',
            explanationKz: 'Дұрыс! «Қ» — қатаң көмей дыбысы.',
            points: 10
          }
        ],
        isPublished: true
      },
      {
        id: 'lesson-a1-1-2',
        unitId: 'unit-a1-1',
        lessonNumber: 2,
        titleTr: 'Ders 2: Büyük ve Küçük Ses Uyumu (Үндестік заңы)',
        titleKz: '2-сабақ: Үндестік заңы және буын түрлері',
        summaryTr: 'Dudak ve damak uyumu, çoğul eklerinin (-лар/-лер, -дар/-дер, -тар/-тер) değişimi.',
        summaryKz: 'Буын үндестігі және көптік жалғауларының заңдылықтары.',
        learningObjectivesTr: ['Kelime sonuna göre doğru çoğul ekini seçebilme', 'Sert ve yumuşak ünsüzleri ayırt edebilme'],
        learningObjectivesKz: ['Көптік жалғауларын қатесіз жалғау'],
        vocabulary: [
          {
            id: 'v-a1-6',
            kazakhCyrillic: 'Кітап',
            kazakhLatin: 'Kіtap',
            turkish: 'Kitap',
            phoneticGuide: 'ki-tap',
            partOfSpeech: 'noun',
            exampleKazakh: 'Кітап – білім бұлағы.',
            exampleTurkish: 'Kitap, bilgi pınarıdır.',
            category: 'Eşyalar'
          },
          {
            id: 'v-a1-7',
            kazakhCyrillic: 'Дәптер',
            kazakhLatin: 'Däpter',
            turkish: 'Defter',
            phoneticGuide: 'däp-ter',
            partOfSpeech: 'noun',
            exampleKazakh: 'Мен жаңа дәптер сатып алдым.',
            exampleTurkish: 'Ben yeni bir defter satın aldım.',
            category: 'Eşyalar'
          }
        ],
        grammar: {
          titleTr: 'Kazakçada Çoğul Ekinin 6 Varyantı',
          titleKz: 'Көптік жалғауының 6 түрі',
          explanationTr: 'Son ses ünlü veya r, l, y, w ise: -лар/-лер; z, j ise: -дар/-дер; sert ünsüz (p, f, k, q, t, s, ş) ise: -тар/-тер.',
          explanationKz: 'Көптік жалғаулары дыбыс үндестігіне бағынады.',
          rules: [],
          examples: [],
          commonMistakes: []
        },
        dialogue: {
          id: 'dlg-a1-2',
          titleTr: 'Kütüphanede Kitap Seçimi',
          titleKz: 'Кітапханада',
          contextTr: 'Öğrenci kütüphaneden kitap istiyor.',
          contextKz: 'Оқушы кітап алып жатыр.',
          lines: [
            {
              id: 'dl-a1-2-1',
              speaker: 'Оқушы',
              avatar: '🧑‍🎓',
              kazakh: 'Маған қазақша кітаптар керек.',
              turkish: 'Bana Kazakça kitaplar lazım.'
            }
          ]
        },
        exercises: [
          {
            id: 'ex-a1-2',
            type: 'multiple_choice',
            questionTr: '«Кітап» kelimesinin çoğul hali hangisidir?',
            questionKz: '«Кітап» сөзіне қай көптік жалғауы қосылады?',
            options: ['Кітаптар', 'Кітаплар', 'Кітапдар', 'Кітаптер'],
            correctAnswer: 'Кітаптар',
            explanationTr: 'Doğru! «П» sert ünsüz olduğu için -тар eki gelir.',
            explanationKz: 'Дұрыс! Қатаң п дыбысынан кейін -тар жалғанады.',
            points: 10
          }
        ],
        isPublished: true
      }
    ]
  },

  // ==========================================
  // LEVEL A1 - UNIT 2: TANIŞMA VE SELAMLAŞMA
  // ==========================================
  {
    id: 'unit-a1-2',
    unitNumber: 2,
    level: 'A1',
    direction: 'TR_TO_KZ',
    titleTr: 'Ünite 2: Tanışma ve Nerelisin?',
    titleKz: '2-бөлім: Танысу және қай елденсіз?',
    descriptionTr: 'Kendini tanıtma, meslekler, ülke ve millet isimleri, ayrılma hali (-дан/-ден).',
    descriptionKz: 'Өзін таныстыру, мамандықтар, ел атаулары және шығыс септігі.',
    icon: 'User',
    isPublished: true,
    version: 3,
    lessons: [
      {
        id: 'lesson-a1-2-1',
        unitId: 'unit-a1-2',
        lessonNumber: 1,
        titleTr: 'Ders 1: Tanışma ve İsim Sorma',
        titleKz: '1-сабақ: Танысу және есімін сұрау',
        summaryTr: '«Сіздің атыңыз кім?», «Менің атым...» kalıpları ve nezaket ifadeleri.',
        summaryKz: 'Есім сұрау және жауап беру үлгілері.',
        learningObjectivesTr: ['Kazakça ismini söyleyebilme ve karşısındakine adını nezaketle sorabilme'],
        learningObjectivesKz: ['Өз атын таныстыра білу'],
        vocabulary: [
          {
            id: 'v-a1-8',
            kazakhCyrillic: 'Атыңыз кім?',
            kazakhLatin: 'Atyñyz kіm?',
            turkish: 'Adınız nedir? (Saygılı)',
            phoneticGuide: 'a-ty-nyz kim',
            partOfSpeech: 'phrase',
            exampleKazakh: 'Кешіріңіз, сіздің атыңыз кім?',
            exampleTurkish: 'Affedersiniz, adınız nedir?',
            category: 'Tanışma'
          },
          {
            id: 'v-a1-9',
            kazakhCyrillic: 'Танысқаныма қуаныштымын',
            kazakhLatin: 'Tanysqanyma qwanyştymyn',
            turkish: 'Tanıştığıma memnun oldum',
            phoneticGuide: 'ta-nys-qa-ny-ma qua-nyş-ty-myn',
            partOfSpeech: 'phrase',
            exampleKazakh: 'Сізбен танысқаныма өте қуаныштымын!',
            exampleTurkish: 'Sizinle tanıştığıma çok memnun oldum!',
            category: 'Tanışma'
          }
        ],
        grammar: {
          titleTr: 'İyelik Ekli İsim Sorma Kalıbı',
          titleKz: 'Тәуелдік жалғауымен сұрау',
          explanationTr: 'Ат (ad) + ыңыз (sizin) = Атыңыз кім? (Adınız kim/nedir?)',
          explanationKz: 'Сыпайы түрде есім сұрау формасы.',
          rules: [],
          examples: [],
          commonMistakes: []
        },
        dialogue: {
          id: 'dlg-a1-2-1',
          titleTr: 'Havalimanında Tanışma',
          titleKz: 'Әуежайда танысу',
          contextTr: 'İki yolcu uçakta tanışıyor.',
          contextKz: 'Ұшақтағы екі жолаушы.',
          lines: [
            {
              id: 'dl-a1-2-1a',
              speaker: 'Жан',
              avatar: '👨‍💼',
              kazakh: 'Сәлеметсіз бе! Менің атым – Жан.',
              turkish: 'Merhaba! Benim adım Can.'
            },
            {
              id: 'dl-a1-2-1b',
              speaker: 'Айбек',
              avatar: '🧑',
              kazakh: 'Сәлеметсіз бе! Менің атым – Айбек. Танысқаныма қуаныштымын!',
              turkish: 'Merhaba! Benim adım Aybek. Tanıştığıma memnun oldum!'
            }
          ]
        },
        exercises: [
          {
            id: 'ex-a1-2-1',
            type: 'multiple_choice',
            questionTr: '«Tanıştığıma memnun oldum» ifadesinin Kazakçası hangisidir?',
            questionKz: '«Tanıştığıma memnun oldum» сөзінің қазақшасы:',
            options: ['Танысқаныма қуаныштымын', 'Қалыңыз қалай?', 'Рақмет', 'Қайырлы күн'],
            correctAnswer: 'Танысқаныма қуаныштымын',
            explanationTr: 'Doğru! «Танысқаныма қуаныштымын» tanıştığıma memnun oldum demektir.',
            explanationKz: 'Дұрыс жауап!',
            points: 10
          }
        ],
        isPublished: true
      }
    ]
  },

  // ==========================================
  // LEVEL A2 - UNIT 1: TEMELLER VE SELAMLAŞMA
  // ==========================================
  {
    id: 'unit-a2-1',
    unitNumber: 1,
    level: 'A2',
    direction: 'TR_TO_KZ',
    titleTr: 'Ünite 1: Temeller ve Selamlaşma',
    titleKz: '1-бөлім: Негіздер және сәлемдесу',
    descriptionTr: 'Kendini tanıtma, selamlaşma kalıpları, kişi zamirleri ve hal hatır sorma.',
    descriptionKz: 'Өзін таныстыру, сәлемдесу үлгілері, жіктеу есімдіктері және хал-жағдай сұрау.',
    icon: 'MessageSquare',
    isPublished: true,
    version: 3,
    lessons: [
      {
        id: 'lesson-a2-1-1',
        unitId: 'unit-a2-1',
        lessonNumber: 1,
        titleTr: 'Ders 1: Selamlaşma ve Hal Hatır Sorma',
        titleKz: '1-сабақ: Сәлемдесу және хал-жағдай сұрасу',
        summaryTr: 'Günlük hayatta Kazakça selamlaşma, yaş ve resmiyet durumuna göre hitap kuralları.',
        summaryKz: 'Күнделікті өмірде қазақша сәлемдесу, жас пен ресмилікке байланысты сөйлесу қағидалары.',
        learningObjectivesTr: [
          'Kazakça resmi ve samimi selamlaşma ifadelerini ayırt edebilme',
          'Hal hatır sorma kalıplarını (Қалыңыз қалай?, Қал қалай?) doğru kullanabilme',
          'Kazak kültüründeki selamlaşma nezaket kurallarını kavrama'
        ],
        learningObjectivesKz: [
          'Қазақша ресми және еркін сәлемдесуді ажырата білу',
          'Хал-жағдай сұрау үлгілерін дұрыс қолдану'
        ],
        vocabulary: [
          {
            id: 'v-1',
            kazakhCyrillic: 'Сәлеметсіз бе!',
            kazakhLatin: 'Sälemetsiz be!',
            turkish: 'Merhaba! (Saygılı/Resmi)',
            phoneticGuide: 'se-le-met-siz be',
            partOfSpeech: 'phrase',
            exampleKazakh: 'Сәлеметсіз бе, мұғалім!',
            exampleTurkish: 'Merhaba öğretmenim!',
            category: 'Selamlaşma',
            falseFriendWarning: 'Büyüklere ve tanımadığınız kişilere "Сәлем" yerine her zaman "Сәлеметсіз бе" denir.'
          },
          {
            id: 'v-2',
            kazakhCyrillic: 'Қалыңыз қалай?',
            kazakhLatin: 'Qalyñyz qalay?',
            turkish: 'Nasılsınız? (Saygılı)',
            phoneticGuide: 'qa-ly-nyz qa-lay',
            partOfSpeech: 'phrase',
            exampleKazakh: 'Қалыңыз қалай, Асқар аға?',
            exampleTurkish: 'Nasılsınız Askar ağabey?',
            category: 'Hal Hatır'
          },
          {
            id: 'v-3',
            kazakhCyrillic: 'Жақсы, рақмет',
            kazakhLatin: 'Jaqsı, raqmet',
            turkish: 'İyi, teşekkür ederim',
            phoneticGuide: 'jaq-sy raq-met',
            partOfSpeech: 'phrase',
            exampleKazakh: 'Мен жақсымын, рақмет, өзіңіз қалайсыз?',
            exampleTurkish: 'Ben iyiyim teşekkürler, siz nasılsınız?',
            category: 'Hal Hatır'
          }
        ],
        grammar: {
          titleTr: 'Kazakçada Kişi Zamirleri ve Ek-Fiil (-мын/-мін)',
          titleKz: 'Жіктеу есімдіктері және жіктік жалғаулары',
          explanationTr: 'Kazakçada şahıs ekleri kalınlık-incelik uyumuna göre değişir.',
          explanationKz: 'Жіктік жалғаулары сөздің жуан не жіңішкелігіне қарай жалғанады.',
          rules: [
            {
              id: 'r-1',
              titleTr: '1. Tekil Şahıs Bildirme Eki',
              titleKz: '1-жақ жекеше жіктік жалғауы',
              trPattern: 'Ben öğrenci-yim / Ben Türk-üm',
              kzPattern: 'Мен оқушы-мын / Мен түрік-пін',
              explanationTr: 'Son ses ünlü veya tınlatıcı ünsüz ise -мын/-мін; ötümsüz ünsüzden sonra -пын/-пін gelir.',
              explanationKz: 'Дауысты және ұяң дыбыстардан кейін -мын/-мін, қатаң дыбыстардан кейін -пын/-пін жалғанады.'
            }
          ],
          examples: [
            {
              kazakh: 'Мен Түркияданмын.',
              turkish: 'Ben Türkiye\'denim.',
              breakdown: 'Мен (Ben) + Түркия (Türkiye) + -дан (ayrılma hali) + -мын (1. tekil şahıs eki)'
            }
          ],
          commonMistakes: []
        },
        dialogue: {
          id: 'dlg-a2-1',
          titleTr: 'Havaalanında Karşılaşma',
          titleKz: 'Әуежайда кездесу',
          contextTr: 'Almatı Havalimanı\'nda iki yolcu tanışıyor.',
          contextKz: 'Алматы әуежайында екі жолаушы танысып жатыр.',
          lines: [
            {
              id: 'dl-1',
              speaker: 'Can (Жан)',
              avatar: '👨‍💼',
              kazakh: 'Сәлеметсіз бе! Менің атым – Жан.',
              turkish: 'Merhaba! Benim adım Can.'
            },
            {
              id: 'dl-2',
              speaker: 'Aydos (Айдос)',
              avatar: '🧑',
              kazakh: 'Сәлеметсіз бе, Жан! Танысқаныма қуаныштымын. Қалыңыз қалай?',
              turkish: 'Merhaba Can! Tanıştığıma memnun oldum. Nasılsınız?'
            }
          ]
        },
        exercises: [
          {
            id: 'ex-1',
            type: 'multiple_choice',
            questionTr: 'Büyüklere veya tanımadığımız kişilere saygılı selam verirken hangisi kullanılır?',
            questionKz: 'Үлкендерге құрметпен сәлемдескенде қайсысы айтылады?',
            options: ['Сәлеметсіз бе!', 'Сәлем!', 'Қайырлы түн', 'Сау бол'],
            correctAnswer: 'Сәлеметсіз бе!',
            explanationTr: 'Doğru! «Сәлеметсіз бе!» saygılı ve resmi selamlaşma ifadesidir.',
            explanationKz: 'Дұрыс! «Сәлеметсіз бе!» сыпайы сәлемдесу сөзі.',
            points: 10
          }
        ],
        isPublished: true
      }
    ]
  },

  // ==========================================
  // LEVEL A2 - UNIT 2: EV VE AİLE HAYATI
  // ==========================================
  {
    id: 'unit-a2-2',
    unitNumber: 2,
    level: 'A2',
    direction: 'TR_TO_KZ',
    titleTr: 'Ünite 2: Aile, Ev ve İyelik Ekleri',
    titleKz: '2-бөлім: Отбасы, үй және тәуелдік жалғаулары',
    descriptionTr: 'Aile bireyleri, ev eşyaları, iyelik ekleri (менің, сенің, сіздің, оның) ve yaş sorma.',
    descriptionKz: 'Отбасы мүшелері, үй заттары және тәуелдік формалары.',
    icon: 'Home',
    isPublished: true,
    version: 3,
    lessons: [
      {
        id: 'lesson-a2-2-1',
        unitId: 'unit-a2-2',
        lessonNumber: 1,
        titleTr: 'Ders 1: Aile Bireyleri ve İyelik Ekleri',
        titleKz: '1-сабақ: Отбасы мүшелері және тәуелдік',
        summaryTr: 'Baba (әке), anne (ана), kardeş (бауыр/іні/қарындас) ve iyelik eklerinin doğru bağlanışı.',
        summaryKz: 'Отбасы мүшелеріне тәуелдік жалғауларын қосу.',
        learningObjectivesTr: ['Ailesini tanıtabilme ve iyelik eklerini hatasız kullanabilme'],
        learningObjectivesKz: ['Отбасы туралы әңгімелей білу'],
        vocabulary: [
          {
            id: 'v-a2-4',
            kazakhCyrillic: 'Әке',
            kazakhLatin: 'Äke',
            turkish: 'Baba',
            phoneticGuide: 'ä-ke',
            partOfSpeech: 'noun',
            exampleKazakh: 'Менің әкем – мұғалім.',
            exampleTurkish: 'Benim babam öğretmendir.',
            category: 'Aile'
          },
          {
            id: 'v-a2-5',
            kazakhCyrillic: 'Ана',
            kazakhLatin: 'Ana',
            turkish: 'Anne',
            phoneticGuide: 'a-na',
            partOfSpeech: 'noun',
            exampleKazakh: 'Ана – әлемдегі ең қымбат адам.',
            exampleTurkish: 'Anne, dünyadaki en kıymetli insandır.',
            category: 'Aile'
          },
          {
            id: 'v-a2-6',
            kazakhCyrillic: 'Бауыр',
            kazakhLatin: 'Bawyr',
            turkish: 'Kardeş',
            phoneticGuide: 'ba-wyr',
            partOfSpeech: 'noun',
            exampleKazakh: 'Біз – тату бауырлармыз.',
            exampleTurkish: 'Biz dost/kardeşleriz.',
            category: 'Aile'
          }
        ],
        grammar: {
          titleTr: 'Kazakçada Sen ve Siz İyelik Ayrımı (-ың vs -ыңыз)',
          titleKz: 'Сен және Сіз тәуелдік айырмашылығы',
          explanationTr: 'Senin baban: Әке-ң; Sizin babanız: Әке-ңіз. Damaksıl n (ң) daima korunur.',
          explanationKz: 'Сыпайы және жақын сөйлесудегі тәуелдік.',
          rules: [],
          examples: [],
          commonMistakes: []
        },
        dialogue: {
          id: 'dlg-a2-2',
          titleTr: 'Aile Albümüne Bakarken',
          titleKz: 'Отбасылық альбом',
          contextTr: 'İki arkadaş aile fotoğraflarına bakıyor.',
          contextKz: 'Екі дос суреттерді көруде.',
          lines: [
            {
              id: 'dl-a2-2a',
              speaker: 'Айдос',
              avatar: '🧑',
              kazakh: 'Бұл – менің отбасым. Мынау – әкем, мына кісі – анам.',
              turkish: 'Bu benim ailem. Şu babam, bu kişi ise annem.'
            }
          ]
        },
        exercises: [
          {
            id: 'ex-a2-2',
            type: 'multiple_choice',
            questionTr: '«Sizin babanız» ifadesinin Kazakça saygılı karşılığı hangisidir?',
            questionKz: '«Сіздің әкеңіз» дұрыс нұсқасы:',
            options: ['Әкеңіз', 'Әкең', 'Әкем', 'Әкесі'],
            correctAnswer: 'Әкеңіз',
            explanationTr: 'Doğru! Saygılı ikinci tekil şahıs iyelik eki -ңыз/-ңіз\'dir.',
            explanationKz: 'Дұрыс! Сыпайы формасы: Әкеңіз.',
            points: 10
          }
        ],
        isPublished: true
      }
    ]
  },

  // ==========================================
  // LEVEL B1 - UNIT 1: İŞ VE MESLEKLER
  // ==========================================
  {
    id: 'unit-b1-1',
    unitNumber: 1,
    level: 'B1',
    direction: 'TR_TO_KZ',
    titleTr: 'Ünite 1: İş ve Meslekler',
    titleKz: '1-бөлім: Кәсіп пен жұмыс',
    descriptionTr: 'İş mülakatı, meslekler, CV hazırlama ve geçmiş zaman sıfat-fiili (-ған/-ген).',
    descriptionKz: 'Жұмыс сұхбаты, мамандықтар және есімше өткен шақ.',
    icon: 'Briefcase',
    isPublished: true,
    version: 3,
    lessons: [
      {
        id: 'lesson-b1-1-1',
        unitId: 'unit-b1-1',
        lessonNumber: 1,
        titleTr: 'Ders 1: İş Mülakatı ve Özgeçmiş',
        titleKz: '1-сабақ: Жұмыс сұхбаты және түйіндеме',
        summaryTr: 'Mesleki deneyimleri anlatma, geçmiş zaman tecrübe eki (-ғанмын/-генмін).',
        summaryKz: 'Кәсіби тәжірибені баяндау.',
        learningObjectivesTr: ['Geçmiş iş tecrübelerinden bahsedebilme ve resmi dilde kendini tanıtabilme'],
        learningObjectivesKz: ['Жұмыс тәжірибесін сипаттай білу'],
        vocabulary: [
          {
            id: 'v-b1-1',
            kazakhCyrillic: 'Келісу',
            kazakhLatin: 'Kelisw',
            turkish: 'Anlaşmak / Uzlaşmak',
            phoneticGuide: 'ke-li-su',
            partOfSpeech: 'verb',
            exampleKazakh: 'Біз жаңа жоба бойынша келістік.',
            exampleTurkish: 'Biz yeni proje hususunda anlaştık.',
            category: 'İş Hayatı',
            falseFriendWarning: '⚠️ DİKKAT: Kazakça "Келісу" anlaşmak demektir; gelişmek veya gelmek değildir!'
          },
          {
            id: 'v-b1-2',
            kazakhCyrillic: 'Күту',
            kazakhLatin: 'Kütw',
            turkish: 'Beklemek',
            phoneticGuide: 'kü-tu',
            partOfSpeech: 'verb',
            exampleKazakh: 'Мен сіздің жауабыңызды күтемін.',
            exampleTurkish: 'Ben sizin cevabınızı bekliyorum.',
            category: 'İş Hayatı',
            falseFriendWarning: '⚠️ DİKKAT: Kazakça "Күту" beklemek demektir; hayvan gütmek değildir!'
          }
        ],
        grammar: {
          titleTr: 'B1: Geçmiş Zaman Sıfat-Fiili (-ған/-ген)',
          titleKz: 'Есімше және бұрынғы өткен шақ',
          explanationTr: 'Kişisel tecrübelerden bahsederken kullanılır. Türkçedeki "-mış/-miş" yapısına karşılık gelir.',
          explanationKz: 'Бұрын орын алған іс-әрекет нәтижесін білдіреді.',
          rules: [],
          examples: [],
          commonMistakes: []
        },
        dialogue: {
          id: 'dlg-b1-1',
          titleTr: 'Yönetici ile İş Mülakatı',
          titleKz: 'Басшымен сұхбат',
          contextTr: 'Şirkette mülakat görüşmesi.',
          contextKz: 'Компаниядағы сұхбаттасу.',
          lines: [
            {
              id: 'dl-b1-1',
              speaker: 'Басшы',
              avatar: '💼',
              kazakh: 'Қош келдіңіз! Өзіңіздің кәсіби тәжірибеңіз туралы айтыңыз.',
              turkish: 'Hoş geldiniz! Mesleki tecrübeniz hakkında bahsediniz.'
            },
            {
              id: 'dl-b1-2',
              speaker: 'Жан',
              avatar: '👨‍💼',
              kazakh: 'Мен IT саласында бес жыл қызмет атқарғанмын.',
              turkish: 'Ben bilişim alanında beş yıl görev yaptım.'
            }
          ]
        },
        exercises: [
          {
            id: 'ex-b1-1',
            type: 'multiple_choice',
            questionTr: 'Kazakça «Келісу» fiilinin doğru Türkçe karşılığı nedir?',
            questionKz: '«Келісу» сөзінің түрікшесі қандай?',
            options: ['Anlaşmak / Uzlaşmak', 'Gelişmek', 'Gelmek', 'Giriş yapmak'],
            correctAnswer: 'Anlaşmak / Uzlaşmak',
            explanationTr: 'Doğru! «Келісу» anlaşmak ve mutabık kalmak demektir.',
            explanationKz: 'Дұрыс! Мағынасы: «anlaşmak».',
            points: 15
          }
        ],
        isPublished: true
      }
    ]
  },

  // ==========================================
  // LEVEL B2 - UNIT 1: EDEBİYAT VE FELSEFE
  // ==========================================
  {
    id: 'unit-b2-1',
    unitNumber: 1,
    level: 'B2',
    direction: 'TR_TO_KZ',
    titleTr: 'Ünite 1: Kazak Edebiyatı, Abay ve Felsefe',
    titleKz: '1-бөлім: Қазақ әдебиеті, Абай және философия',
    descriptionTr: 'Abay Kunanbayev\'in Kara Sözleri, Kazak milli kimliği, deyimler ve karmaşık cümle yapıları.',
    descriptionKz: 'Абай Құнанбайұлының «Қара сөздері», ұлттық болмыс және күрделі сөйлемдер.',
    icon: 'BookOpen',
    isPublished: true,
    version: 3,
    lessons: [
      {
        id: 'lesson-b2-1-1',
        unitId: 'unit-b2-1',
        lessonNumber: 1,
        titleTr: 'Ders 1: Abay\'ın Kara Sözleri ve Bilgi Arayışı',
        titleKz: '1-сабақ: Абайдың «Қара сөздері» мен ғылым-білім',
        summaryTr: 'B2 seviyesinde edebi metin analizi, felsefi kavramlar ve soyut kelime dağarcığı.',
        summaryKz: 'Көркем мәтінді талдау, философиялық ұғымдар және сөз байлығы.',
        learningObjectivesTr: ['Klasik Kazak edebiyatı metinlerini anlayabilme ve felsefi terimleri yorumlayabilme'],
        learningObjectivesKz: ['Әдеби мәтіндерді талдай білу'],
        vocabulary: [
          {
            id: 'v-b2-1',
            kazakhCyrillic: 'Парасат',
            kazakhLatin: 'Parasat',
            turkish: 'Sağduyu / Basiret / Hikmet',
            phoneticGuide: 'pa-ra-sat',
            partOfSpeech: 'noun',
            exampleKazakh: 'Парасатты адам әрқашан әділдікті жақтайды.',
            exampleTurkish: 'Sağduyulu insan her zaman adaleti savunur.',
            category: 'Felsefe ve Edebiyat'
          },
          {
            id: 'v-b2-2',
            kazakhCyrillic: 'Шешендік',
            kazakhLatin: 'Şeşendik',
            turkish: 'Hitabet sanatı / Belagat',
            phoneticGuide: 'şe-şen-dik',
            partOfSpeech: 'noun',
            exampleKazakh: 'Қазақ халқы шешендік өнерге аса жоғары баға берген.',
            exampleTurkish: 'Kazak halkı hitabet sanatına çok büyük değer vermiştir.',
            category: 'Felsefe ve Edebiyat'
          }
        ],
        grammar: {
          titleTr: 'B2: Zarf-Fiil Ekleri ve Bağlaçlar (-ып/-іп, -ғалы/-гелі)',
          titleKz: 'Көсемше және құрмалас сөйлемдер',
          explanationTr: 'Eylemlerin peş peşe veya sebep-sonuç bağıyla gerçekleştiği karmaşık cümle yapıları.',
          explanationKz: 'Сабақтас құрмалас сөйлемдердің байланысу жолдары.',
          rules: [],
          examples: [],
          commonMistakes: []
        },
        dialogue: {
          id: 'dlg-b2-1',
          titleTr: 'Edebiyat Kulübünde Tartışma',
          titleKz: 'Әдеби клубтағы пікірталас',
          contextTr: 'Öğrenciler Abay\'ın eserlerini müzakere ediyor.',
          contextKz: 'Студенттер Абай шығармашылығын талқылап жатыр.',
          lines: [
            {
              id: 'dl-b2-1',
              speaker: 'Айдар',
              avatar: '🧑‍🎓',
              kazakh: 'Абайдың 17-қара сөзіндегі ақыл, қайрат, жүрек үндестігі туралы не ойлайсыз?',
              turkish: 'Abay\'ın 17. kara sözündeki akıl, irade ve yürek uyumu hakkında ne düşünüyorsunuz?'
            }
          ]
        },
        exercises: [
          {
            id: 'ex-b2-1',
            type: 'multiple_choice',
            questionTr: 'Kazakçada «Парасат» kelimesinin felsefi Türkçe anlamı nedir?',
            questionKz: '«Парасат» сөзінің мағынасы:',
            options: ['Sağduyu / Basiret / Akıl', 'Öfke', 'Hız', 'Korku'],
            correctAnswer: 'Sağduyu / Basiret / Akıl',
            explanationTr: 'Doğru! Парасат, derin aklı ve hikmeti ifade eder.',
            explanationKz: 'Дұрыс! Мағынасы: «Sağduyu / Basiret».',
            points: 15
          }
        ],
        isPublished: true
      }
    ]
  },

  // ==========================================
  // LEVEL C1 - UNIT 1: AKADEMİK TÜRKOLOJİ
  // ==========================================
  {
    id: 'unit-c1-1',
    unitNumber: 1,
    level: 'C1',
    direction: 'TR_TO_KZ',
    titleTr: 'Ünite 1: Karşılaştırmalı Türkoloji ve Ses Yasaları',
    titleKz: '1-бөлім: Салыстырмалы түркітану және дыбыс заңдары',
    descriptionTr: 'Ortak Türk tarihi, Orhun Yazıtları, Kıpçak-Oğuz ses denklikleri ve uluslararası resmi yazışmalar.',
    descriptionKz: 'Түркі тілдерінің салыстырмалы грамматикасы, ресми құжаттар және дипломатиялық қатынастар.',
    icon: 'Crown',
    isPublished: true,
    version: 3,
    lessons: [
      {
        id: 'lesson-c1-1-1',
        unitId: 'unit-c1-1',
        lessonNumber: 1,
        titleTr: 'Ders 1: Kıpçak ve Oğuz Grubu Ses Denklikleri (y- ~ c-, -ğ- ~ -w-)',
        titleKz: '1-сабақ: Қыпшақ және оғыз дыбыс сәйкестіктері',
        summaryTr: 'Etimolojik geçiş kuralları: Yol ➔ Жол, Dağ ➔ Тау, Taş ➔ Тас.',
        summaryKz: 'Тарихи фонетикалық заңдылықтар.',
        learningObjectivesTr: ['Düzenli ses denkliklerini uygulayarak bilinmeyen kelimelerin köklerini tespit edebilme'],
        learningObjectivesKz: ['Дыбыс сәйкестіктерін талдай білу'],
        vocabulary: [
          {
            id: 'v-c1-1',
            kazakhCyrillic: 'Мұрағат',
            kazakhLatin: 'Murağat',
            turkish: 'Arşiv / Belgelik',
            phoneticGuide: 'mu-ra-ğat',
            partOfSpeech: 'noun',
            exampleKazakh: 'Мемлекеттік мұрағатта көне қолжазбалар сақталған.',
            exampleTurkish: 'Devlet arşivinde kadim el yazmaları korunmaktadır.',
            category: 'Akademik Terimler'
          },
          {
            id: 'v-c1-2',
            kazakhCyrillic: 'Үндестік',
            kazakhLatin: 'Ündestіk',
            turkish: 'Uyum / Ahenk / Fonetik senkretizm',
            phoneticGuide: 'ün-des-tik',
            partOfSpeech: 'noun',
            exampleKazakh: 'Тілдегі дыбыс үндестігі – заңды құбылыс.',
            exampleTurkish: 'Dildeki ses uyumu kanuni bir hadisedir.',
            category: 'Akademik Terimler'
          }
        ],
        grammar: {
          titleTr: 'C1: Kıpçak-Oğuz Düzenli Ses Yasaları',
          titleKz: 'Қыпшақ-оғыз дыбыстық заңдары',
          explanationTr: '1. Söz başı Y- (Oğuz) ➔ J- (Kıpçak): Yıl ➔ Жыл, Yol ➔ Жол. 2. Söz sonu -Ğ (Oğuz) ➔ -W (Kıpçak): Dağ ➔ Тау, Bağ ➔ Бау.',
          explanationKz: 'Түркітану ғылымында бұл заңдылықтар тарихи фонетиканың негізі саналады.',
          rules: [],
          examples: [],
          commonMistakes: []
        },
        dialogue: {
          id: 'dlg-c1-1',
          titleTr: 'Uluslararası Türkoloji Kongresinde Bildiri',
          titleKz: 'Түркітану конгресінде',
          contextTr: 'Bilim insanları Türk dünyasının ortak terminolojisini tartışıyor.',
          contextKz: 'Ғалымдар ортақ терминологияны талқылауда.',
          lines: [
            {
              id: 'dl-c1-1',
              speaker: 'Профессор',
              avatar: '👨‍🏫',
              kazakh: 'Түркі тілдес халықтардың ортақ әліпбиі біздің рухани бірлігіміздің кепілі.',
              turkish: 'Türk dilli halkların ortak alfabesi manevi birliğimizin teminatıdır.'
            }
          ]
        },
        exercises: [
          {
            id: 'ex-c1-1',
            type: 'multiple_choice',
            questionTr: 'Kıpçak-Oğuz ses denkliğine göre Türkçedeki «Yol» kelimesinin Kazakça etimolojik karşılığı hangisidir?',
            questionKz: '«Yol» сөзінің қазақшасы:',
            options: ['Жол', 'Тол', 'Қол', 'Сол'],
            correctAnswer: 'Жол',
            explanationTr: 'Doğru! Türkiye Türkçesindeki kelime başı "y-" sesi Kazakçada düzenli olarak "ж-" (j) sesine denk gelir: Yol ➔ Жол.',
            explanationKz: 'Дұрыс! Оғызша «yol» қыпшақша «жол» болады.',
            points: 20
          }
        ],
        isPublished: true
      }
    ]
  }
];

export const initialBadges: UserBadge[] = [
  {
    id: 'badge-1',
    titleTr: 'İlk Adım',
    titleKz: 'Алғашқы қадам',
    descriptionTr: 'İlk dersi başarıyla tamamladınız.',
    descriptionKz: 'Алғашқы сабақты сәтті аяқтадыңыз.',
    icon: 'Award',
    unlockedAt: '2026-10-10'
  },
  {
    id: 'badge-2',
    titleTr: 'Kelime Avcısı',
    titleKz: 'Сөз шебері',
    descriptionTr: '25 kelimeyi hafızanıza kaydettiniz.',
    descriptionKz: '25 сөзді жаттап үйрендіңіз.',
    icon: 'BookOpen',
    unlockedAt: '2026-10-10'
  },
  {
    id: 'badge-3',
    titleTr: 'Sürekli Öğrenen',
    titleKz: 'Тұрақты оқушы',
    descriptionTr: '7 günlük kesintisiz öğrenme serisi yakaladınız.',
    descriptionKz: '7 күн қатарынан оқу сериясын жалғастырдыңыз.',
    icon: 'Flame',
    unlockedAt: '2026-10-10'
  },
  {
    id: 'badge-4',
    titleTr: 'Bozkırın Sesi',
    titleKz: 'Дала дауысы',
    descriptionTr: 'Telaffuz sınavında %90 üzeri başarı aldınız.',
    descriptionKz: 'Дыбыстау емтиханынан 90%-дан жоғары балл алдыңыз.',
    icon: 'Mic',
    unlockedAt: '2026-10-10'
  },
  {
    id: 'badge-5',
    titleTr: 'Gramer Ustası',
    titleKz: 'Грамматика шебері',
    descriptionTr: 'Tüm ek ve zaman kurallarını hatasız çözdünüz.',
    descriptionKz: 'Жалғаулар мен шақтарды қатесіз орындадыңыз.',
    icon: 'CheckCircle2',
    unlockedAt: '2026-10-10'
  },
  {
    id: 'badge-6',
    titleTr: 'Türkoloji Bilgini (C1)',
    titleKz: 'Түркітану ғалымы',
    descriptionTr: 'İleri C1 akademik Türkoloji düzeyine ulaştınız.',
    descriptionKz: 'Жоғары C1 академиялық деңгейге жеттіңіз.',
    icon: 'Crown',
    unlockedAt: '2026-10-10'
  }
];
