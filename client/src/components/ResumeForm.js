import React from 'react';
import '../App.css';

// className=" f1 ~ f4 " 필히 나중에 수정 할 것

function ResumeForm() {
  const onClickHandler = (e) => {
    alert(e.target.value);
  };

  return (
    <div>
      <div className='formWraper'>
        <div className='alert'>
          <div className='alertMessage'>My Resume</div>
        </div>

        <div className='f1'>
          <h3 className='formWraperContent'>Career</h3>
          <hr className='contentBorder' />

          <div>
            <textarea className='textForm0' type='text'></textarea>
          </div>
        </div>

        <div className='f2'>
          <h3 className='formWraperContent'>Skills</h3>
          <hr className='contentBorder' />

          <div>
            <textarea className='textForm1' type='text'></textarea>
          </div>
        </div>

        <div className='f3'>
          <h3 className='formWraperContent'>Education</h3>
          <hr className='contentBorder' />

          <div>
            <textarea className='textForm2' type='text'></textarea>
          </div>
        </div>

        <div className='f4'>
          <h3 className='formWraperContent'>Website / Social Link </h3>
          <hr className='contentBorder' />

          <div>
            <textarea className='textForm3' type='text'></textarea>
          </div>
        </div>
        <div className='f5'>
          <h3 className='formWraperContent'>Ojbective </h3>
          <hr className='contentBorder' />
          <div>
            <textarea className='textForm4' type='text'></textarea>
          </div>
        </div>
      </div>

      <div className='btnGroup'>
        <button
          value={'이력서가 임시 저장되었습니다'}
          onClick={(e) => onClickHandler(e)}
          className='saveBtn'
        >
          임시 저장
        </button>
        <button
          value={'이력서가 저장되었습니다'}
          onClick={(e) => onClickHandler(e)}
          className='submitBtn'
        >
          저장 완료
        </button>
      </div>
    </div>
  );
}

export default ResumeForm;
