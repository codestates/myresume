import React from 'react';
import '../App.css';
function ResumeForm() {
  // function ResumeForm() {
  // const onClickHandler = (e) => {
  //     alert(e.target.value);
  //   };

  //   <button
  //   onClick
  //   value={'이력서가 임시 저장되었습니다!'}
  //   onClick={(e) => onClickHandler(e)}
  //   className='saveBtn'
  // ></button>

  // function MyForm() {
  //   const [name, setName] = useState('');

  // className="f1~f4" 이건 필히 나중에 수정해야할 것 / 이후에 width -> ?

  return (
    <div className='formWraper'>
      <>
        <div className='f1'>
          <h3 className='formWraperContent'>경력</h3>
          <div className='inputInformation'>
            @ 최근 2년 이내 당신의 경력 사항에 대해 자세히 작성해 주세요
          </div>
          <input
            className='formWraperOne'
            type='text'
            placeholder=''
            // value={name}
            // onChange={(e) => setName(e.target.name)}
          />
        </div>
      </>
      <>
        <div className='f2'>
          <h3 className='formWraperContent2'>기술 / 스택</h3>
          <div className='inputInformation'>
            @ 당신의 기술 / 스택 사항에 대해 작성해 주세요
          </div>
          <input className='formWraperTwo' type='text' placeholder='' />
        </div>
      </>

      <>
        <div className='f3'>
          <h3 className='formWraperContent3'>학력</h3>
          <div className='inputInformation'>
            @ 당신의 학력에 작성해 주세요 (* 대학 / 대학원은 제외 )
          </div>
          <input className='formWraperThree' type='text' placeholder='' />
        </div>
      </>
      <>
        <div className='f4'>
          <h3 className='formWraperContent4'>웹사이트 / 소셜 링크 </h3>
          <div>
            @ 당신의 웹사이트 / 포트폴리오 혹은 소셜미디어 링크를 작성해 주세요
          </div>
          <input className='formWraperFour' type='text' placeholder='' />
        </div>
      </>

      <div className='btnGroup'>
        <button
          onClick={() => alert('이력서가 임시 저장되었습니다.')}
          className='saveBtn'
        >
          임시 저장
        </button>
        <button
          onClick={() => alert('이력서가 저장되었습니다..')}
          className='submitBtn'
        >
          저장 완료
        </button>
      </div>
    </div>
  );
}

export default ResumeForm;
