import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  //   const [openLinks, setOpenLinks] = useState(false);

  //   const toggleNavbar = () => {
  //     setOpenLinks(!openLinks);
  //   };
  return (
    <div className='navbar'>
      <div
        className='leftSide'
        // id={openLinks ? 'open' : 'close'}
        // onClick={toggleNavbar()}
      >
        <div className='brandName'>마이레쥬메</div>
        <div className='hiddenLinks'>
          <Link to='/home'> 홈 </Link>
          <Link to='/resume'> 이력서 </Link>
          <Link to='/mypage'> 마이페이지 </Link>
        </div>
      </div>
      {/* // className="brandName" 부터 className="hiddenLinks"는 반응형 시, 토글 메뉴에 나타나는 메뉴들  */}
      <div className='rightSide'>
        <Link to='/home'> 홈 </Link>
        <Link to='/resume'> 이력서 </Link>
        <Link to='/mypage'> 마이페이지 </Link>
        {/* <button onClick={toggleNavbar}> */}
        {/* <ReorderIcon />
        </button> */}
      </div>
    </div>
  );
}

export default Navbar;
