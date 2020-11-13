export const API_URL = 'https://vgsha.info/api/v1/restapi.php';

export const selectId = [
  'konkursLevelEdu',
  'konkursFacEdu',
  'konkursFormaEdu',
  'konkursBaseEdu',
  'enrolledLevelEdu',
  'enrolledFacEdu',
  'enrolledFormaEdu',
  'enrolledBaseEdu'
]

export const menuItems = [{
    name: 'Главная',
    link: '/',
    icon: 'faHome',
  },
  {
    name: 'Документы приемной комиссии',
    link: '/docs',
    icon: 'faBook',
  },
  {
    name: 'Сведения о приеме',
    link: '/sveden',
    icon: 'faNewspaper',
  },
  /* {
    name: 'Результаты вступительных экзаменов',
    link: '/exam',
    icon: 'faMarker',
  }, */
  {
    name: 'Конкурсные ранжированные списки',
    link: '/konkurs',
    icon: 'faUser',
  },
  {
    name: 'Списки зачисленных',
    link: '/enrolled',
    icon: 'faUserGraduate',
  },
  {
    name: 'Контакты',
    link: '/contacts',
    icon: 'faAddressBook',
  },
];