import images from './images';

const lineups = [ // eslint-disable-next-line
  {
    name: 'Paulo Bento',
    position: 'Coach',
    team: 'Korea Republic Coach',
  },
  {
    name: '손흥민',
    position: 'MF',
    team: '토트넘핫스퍼',
  },
  {
    name: '황희찬',
    position: 'FW',
    team: '울버햄튼원더러스',
  },
  {
    name: '황의조',
    position: 'FW',
    team: '지롱댕보르도',
  },
  {
    name: '황인범',
    position: 'MF',
    team: 'FC서울',
  },
  {
    name: '백승호',
    position: 'MF',
    team: '전북현대모터스',
  }
];

const lineups1 = [ // eslint-disable-next-line
  {
    name: '정우영',
    position: 'MF',
    team: '알사드',
  },
  {
    name: "홍철",
    position: 'DF',
    team: '울산현대',
  },
  {
    name: '이용',
    position: 'DF',
    team: '전북현대모터스',
  },
  {
    name: '김민재',
    position: 'DF',
    team: '페네르바체',
  },
  {
    name: '김영권',
    position: 'DF',
    team: '울산현대',
  },
  {
    name: '김승규',
    position: 'GK',
    team: '가시와레이솔',
  }
];

const awards = [
  {
    imgUrl: images.award,
    title: 'World Cup',
    subtitle: '출전 11회, 최고 4위',
  },
  {
    imgUrl: images.award,
    title: 'Olympic',
    subtitle: '출전 8회, 동메달 1회',
  },
  {
    imgUrl: images.award,
    title: 'Asian Cup',
    subtitle: '출전 14회, 1위 2회',
  },
  {
    imgUrl: images.award,
    title: 'Asian Game',
    subtitle: '출전 12회, 1위 5회',
  },
];

// eslint-disable-next-line
export default { lineups, lineups1, awards };
