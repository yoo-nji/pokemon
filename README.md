# 우리만의 포켓몬도감

>기간: 2024.06.10 ~ 2024.07.22<br>
배포: https://yoo-nji.github.io/pokemon/


## 프로젝트 개요
>우리만의 포켓몬도감은 포켓몬 공식 API를 바탕으로 포켓몬의 정보를 조회하고, 이름 퀴즈나 포켓몬 카드 뒤집기 같은 미니게임을 통해 사용자에게 학습과 재미를 동시에 제공합니다. 

초기 CSS, HTML, JS를 사용하여 기본적인 기능을 구현하였으며, 태블릿과 모바일까지 대응 가능한 반응형 웹 디자인을 적용하여 **다양한 디바이스에서 최적의 사용자 경험을 제공**합니다. 이후 Vue.js와 Vuetify를 이용해 포켓몬의 상세 정보를 볼 수 있게 구현하여 **기능성을 강화**하고자 했습니다.

팀 작업이 완료된 후 **개인적으로 디벨롭 작업을 이어나가고 있으며, 향후 React로 마이그레이션을 계획하고 있습니다.**


## 구현 화면(반응형)
### 메인
<img src="https://github.com/user-attachments/assets/1e4d40e4-c015-4d32-b7e0-95d9517358c9" alt="메인전체">
<img src="https://github.com/user-attachments/assets/37842f0b-c70c-4909-8911-1c5322aef335" alt="모바일" style="width: 300px;">

* 도감 메인
  * 포켓몬 정보를 조회할 수 있는 도감 기능
  * 포켓몬 데이터를 API를 통해 동적으로 불러와 화면에 출력
  * 포켓몬 속성 필터링 기능
  * 다국어(한국어, 영어, 일본어)검색 기능을 통해 원하는 포켓몬을 빠르게 찾을 수 있는 기능
  * 다크 모드 및 라이트 모드 전환 기능 제공

* 포켓몬 상세 모달
  * 포켓몬의 고유한 ID로 API를 호출하여 상세 정보를 화면에 출력
  * Vue.js와 Vuetify를 활용하여 사용자 친화적인 UI 구성
  * 포켓몬 상세 정보 탭구조 활용하여 다국어(한국어, 영어, 일본어) 지원

### 미니게임
<img src="https://github.com/user-attachments/assets/249ea95c-45bb-46f0-a660-fa05f262fd28" alt="미니게임전체">

* 포켓몬 이름 퀴즈
  * 퀴즈 문제 로드: JSON 데이터에서 포켓몬 퀴즈 문제를 랜덤으로 로드합니다
  * 답 입력: 사용자가 포켓몬의 이름을 입력하고 정답을 제출합니다
  * 오답: 오답을 입력했을 경우 수정 후 제출하거나 다음 문제로 넘어갈 수 있습니다
  * 점수 계산: 정답 여부에 따라 점수를 부여합니다
  * 퀴즈 결과 표시: 퀴즈가 끝나면 결과를 모달로 표시합니다
  * 다시 도전: 사용자가 퀴즈를 다시 시작할 수 있습니다

* 카드 짝 맞추기



## 팀 소개
|  | 권윤지 (Leader) | 유혜인 |
| --- | --- | --- |
| **Profile** | <img src="https://github.com/user-attachments/assets/2fd07733-8316-4c97-8f4e-fd66c0e82fb6" width="150" height="150"> | <img src="https://github.com/user-attachments/assets/b5a24df4-177b-4fde-a5a8-a54d04570032" width="150" height="150"> |
| **GitHub** | [@yoo-nji](https://github.com/yoo-nji) | [@yu-hazel](https://github.com/yu-hazel) |
| **Role** | PM, Frontend Developer | Publisher |
| **Responsibilities** | - 프로젝트 기획 <br> - 프론트엔드 기술 담당 <br> - 포켓몬 이름 퀴즈 게임 | - 퍼블리싱 작업 <br> - 카드 짝맞추기 게임 |

## 사용 기술
### Language
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Framework
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)

### Library
![Vue Router](https://img.shields.io/badge/vue--router-%234FC08D.svg?style=for-the-badge&logo=vue.js&logoColor=white)
![Lottie](https://img.shields.io/badge/Lottie-%2300C7B7.svg?style=for-the-badge&logo=lottie&logoColor=white)
![Nes.css](https://img.shields.io/badge/nes.css-%23E34F26.svg?style=for-the-badge&logo=nes.css&logoColor=white)

### Tools
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


## 개발 과정
- **초기 구현**: 2024.06.10 ~ 2024.07.11 - CSS, HTML, JS로 기본 기능 구현
- **Vue.js로 마이그레이션**: 2024.07.12 ~ 2024.07.22 - Vue.js와 Vuetify를 이용해 기능성 강화

## 향후 계획
- **React로의 마이그레이션**: 향후 React와 Next.js를 활용한 SSR 지원 계획
- **성능 최적화**: 성능 최적화 및 검색엔진 최적화를 통해 사용자 경험 개선 계획

