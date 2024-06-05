// 중첩된 객체 및 배열의 구조를 분해
var metadata = {
  title: 'aaaaa',
  translations: [
    {
      locale: 'kr',
      localization_tags: [],
      last_edit: '2024-05-29T08:43:37',
      url: '/kr/docs/aaa',
      title: 'shindalsoo',
    },
  ],
  url: '/ko/docs/bbbbb',
};
var {
  title: gnglishTitle,
  translations: [{ title: localeTitle }],
} = metadata;
console.log(gnglishTitle);
console.log(localeTitle);

// for 문 반복돌며 마지막 테스
var driver = [
  {
    name: '강호동',
    family: { mother: '강호순', father: '강호팔', sister: '강호연' },
    age: 40,
  },
  {
    name: '유재석',
    family: { mother: '유재순', father: '유재팔', sister: '유재연' },
    age: 38,
  },
];

for (var {
  name: n2,
  family: { father: f2 },
} of driver) {
  console.log(`Name:${n2}, Father:${f2}`);
}
