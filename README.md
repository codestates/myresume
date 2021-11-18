<h1>MyResume 🖋</h1>

<img src="https://cdn.discordapp.com/attachments/907148789637333047/910720133419397200/MacBook_-_1.png" width="600px" height="400px">


<br><br>

## About MyResume
(소개글 및 특징을 써 놓는 곳)

<br><br>

## 사용 기술 스택

(사용한 기술 스택 다이어그램 넣는 곳)

<br><br>

## DB Schema & API DOCS

(데이터 베이스 스키마 이미지 넣는 곳)

(api문서 링크 들어가는 곳)

<br><br>

## 주요 기능별 시연 GIF
### 기능 별로
(움짤들)

<br><br>

## 팀원들
(표로해서 => 이름이랑 깃허브 뱃지, 포지션)

## WIKI
(위키 링크 들어가는 곳)

## 더 자세한 내용은 아래로
(노션 링크)

<br><br>
<br><br>

👤 **Anderson**

- Website: https://chltjdrhd777.github.io/
- Github: [@chltjdrhd777@naver.com](https://github.com/chltjdrhd777@naver.com)
- Give a ⭐️ if this project helped you!

---

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<br/>
(_이러면 좋겠다_)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">사용된(혹은 사용할) 스텍리스트</h3>

- [ReduxToolkit](https://redux-toolkit.js.org/)
- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [EmotionCSS](https://emotion.sh/docs/introduction)
- [Bootstrap](https://getbootstrap.com)

---

## design structure

0. 스타일은 스타일로, 기능은 기능으로 컴포넌트를 구분하여 관심사를 따로둔다
1. styled 폴더의 index에는 웹 전체에서 공용으로 사용될 styled component를 정리하고
2. 디자인적인 변경은 그 내부에서 class를 통해 정의함에 따라 필요에 따라 bootstrap처럼 클래스의 변경만으로 디자인이 유동적으로 변경되게 한다
3. styled 폴더 안에 네이밍이 된 파일들은 각 route를 뜻하며, 해당 내부에는 index의 베이스 컴포넌트를 물려받아 해당 페이지에서 어떤 컴포넌트가 사용되는지를 관리한다.
4. 또한 media query를 내부에 둠으로서, 사용된 컴포넌트들이 미디어쿼리를 통해 조절되도록 만든다.
5. 기능적인 분리는 styled 외부에 따로 정의함으로서, 기능적 재활용을 꿰한다

---

### styled refactor principle

스타일링을 위한 컴포넌트의 분리 기준은

1. 자식의 깊이가 1이 남았을 경우, 부모를 의미단위로 분리한다

2. 자식의 깊이가 1이상이라도, 만약 클래스를 활용한 스타일링을 할 것이라면(ex .class:nth-of-type(2) 와 같이 클래스로 자식을 모으고 거기에 의사클래스를 쓰고싶다면) 부모를 의미단위로 분리한다

3. 부모로부터 상태를 전달받아 작동하거나, 아니면 디자인인 아닌 기능에 초점을 두고 기능적인 단위로 따로 분리해야 한다면 styled 폴더가 아닌 외부 폴더에 해당 Route 이름으로 만들어진 폴더 안에다가 따로 작성하여 사용되고있는 출처대로 모아놓는다.

---

## Contact

My Email - [@google](chltjdrhd777@gmail.com) - chltjdrhd777@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
README.md
5KB
