import '../App.css';
import React, { useState } from 'react';

function About() {
  const [values, setValues] = useState({
    userName: '',
    email: '',
    mobile: '',
  });
  //   const handleUerNameInputChange = (event) => {
  //     event.persist();
  //     setValues((values) => ({
  //       ...values,
  //       userName: event.target.value,
  //     }));
  //     const handleEmailInputChange = (event) => {
  //       event.persist();
  //       setValues((values) => ({
  //         ...values,
  //         email: event.target.value,
  //       }));
  //     };
  //     const handleMobileInputChange = (event) => {
  //       event.persist();
  //       setValues((values) => ({
  //         ...values,
  //         mobile: event.target.value,
  //       }));
  //     };

  return (
    <div className='wrapper'>
      <div className='userinfoContainer'>
        <h2 className='userinfoContent'>
          첫번째 안 / 작성자 정보 / Resume.js 위에 About.js를 두고 About은
          이력서 작성 전, 작성자의 정보를 재차 확인하는 ??{' '}
        </h2>
        <fieldset className='field1'>
          <div className='userInfoBox'>
            <div>
              <input
                className='userinfoInput'
                type='text'
                placeholder='작성자의 이름을 입력하세요'
                // value={values.userName}
                // onChange={handleUserNameInputChange}
              />
            </div>
            <div>
              <input
                className='userMailInput'
                type='text'
                placeholder='회원가입시 등록한 메일을 입력하세요'
                // value={values.email}
                // onChange={handleMailInputChange}
              />
            </div>

            <div>
              <input
                className='userGithubInput'
                type='text'
                placeholder='회원가입시 등록한 깃헙 주소를 입력하세요'
                // value={values.github}
                // onChange={handleMobileInputChange}
              />
            </div>
          </div>
        </fieldset>
        <div> * 정 확 하 게 입 력 하 라 는 문 구 ( 쌩 으 로)</div>
      </div>
      <>
        <div className='f0'>
          <h3 className='formWraperContent'>
            두번째 안 / 프로파일 / 위에 About.js 없애버리고 바로 이력서 작성
            들어가기 ??
          </h3>
          <div className='inputObj'>
            @ 당신의 목표 혹은 이야기를 작성해 주세요
          </div>
          <input className='formWraperZero' type='text' placeholder='' />
        </div>
      </>
    </div>
  );
}

export default About;
