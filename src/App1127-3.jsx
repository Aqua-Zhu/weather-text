import { useState } from "react"

function App() {

  const [inputUserName, setInputUserName] = useState('我是文字方塊');

  const [selBk99, setSelBk99] = useState('');
  // 角色名
  const arr = ['NYPD', 'Amy', 'Jack', 'Boyle', 'Rosa'];
  const [ansCount1, setAnsCount1] = useState(0);
  const [ansCount2, setAnsCount2] = useState(0);
  const [ansCount3, setAnsCount3] = useState(0);
  const [ansCount4, setAnsCount4] = useState(0);
  const [ansCount5, setAnsCount5] = useState(0);
    // 第2個角色名
    const arr0 = ['NYPD-0', 'Amy-0', 'Jack-0', 'Boyle-0', 'Rosa-0'];
    const [ansCount01, setAnsCount01] = useState(0);
    const [ansCount02, setAnsCount02] = useState(0);
    const [ansCount03, setAnsCount03] = useState(0);
    const [ansCount04, setAnsCount04] = useState(0);
    const [ansCount05, setAnsCount05] = useState(0);
  // 閱讀確認
  const [check, setCheck] = useState(false);
  // 複選，多個方塊
  const [chkList, setChkList] = useState([]);
  const arrlist = ['HTML', 'CSS', 'JS'];

  // 建立函式處理被勾選的項目
  const handleChkList = (e) => {
    // 運用其餘算子保留已經被勾選的項目+目前被勾選的項目

    if (e.target.checked) {
      setChkList([...chkList, e.target.value]);
      // 是 => 原本+新的
    } else {
      // 否 => 從原本被勾選的項目中，拿掉不要的(filter)
      setChkList(
        chkList.filter((i) => {
          return i !== e.target.value
        })
      );

    }
  }


  // 選擇標籤
  const [isCar, setIsCar] = useState('N');

  // 選擇角色
  const [role, setRole] = useState('');
  // 選擇第2個角色
  const [role2, setRole2] = useState('');

  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input */}
      <label htmlFor="username">使用者名稱</label>
      <input type="text" id="username"
        value={inputUserName}
        onChange={(e) => {
          setInputUserName(e.target.value);
        }}
      />{inputUserName}
      <br />
      {/* select */}
      <label htmlFor="bk99">荒唐分局</label>
      <select name="" id="bk99"
        value={selBk99}
        onChange={(e) => {
          setSelBk99(e.target.value);
        }}
      >
        {/* 逐行寫法 */}
        {/* <option value="NYPD">NYPD</option>
      <option value="Emma">Emma</option>
      <option value="Jack">Jack</option>
      <option value="Boyle">Boyle</option> */}

        {/* 讀取陣列寫法 */}
        {/* disabled => 無法使用(失能/失效) */}
        <option value="" disabled>請選擇</option>
        {
          arr.map((i) => {
            return <option value={i} key={i}>{i} </option>
          })
        }
      </select>{selBk99}
      <br />
      {/* 單一核取方塊 */}
      <label htmlFor="isCheck">閱讀確認</label>
      <input type="checkbox" id="isCheck"
        value={check}
        onChange={(e) => {
          // 處理勾選值的變化
          setCheck(e.target.checked);
        }} />{check.toString()}

      <br />
      {/* 多個核取方塊 */}
      {
        arrlist.map((a) => {
          return <div key={a}>
            <input type="checkbox" id={a} name="like" value={a} onChange={handleChkList} />
            <label htmlFor={a}>{a}</label>
          </div>
        })
      }
      {/* <input type="checkbox" id="chkList1" name="like" value='HTML' onChange={handleChkList} />
      <label htmlFor="chkList1">HTML</label>
      <input type="checkbox" id="chkList2" name="like" value='CSS' onChange={handleChkList} />
      <label htmlFor="chkList2">CSS</label>
      <input type="checkbox" id="chkList3" name="like" value='JS' onChange={handleChkList} />
      <label htmlFor="chkList3">JS</label> */}

      <br />
      {chkList}

      <br />
      {/* 選項按鈕 */}
      汽車駕照:<label htmlFor="" id="car">{isCar}</label>
      <input type="radio" name="car" value='有' id="yes" onChange={() => {
        setIsCar('Y')
      }} />有
      <label htmlFor="yes"></label>
      <input type="radio" name="car" value='無' id="no" onChange={() => {
        setIsCar('N')
      }} />無
      <label htmlFor="no"></label>
      <br />
      <br />
      選擇人物:
      <label htmlFor="role">{role}</label>
      <br />
      {
        arr.map((b) => {
          return <div key={b}>
            <input type="radio" name="role" id={b} value={b} onChange={(e) => {
              setRole(e.target.value)
            }} />{b}
          </div>
        })
      }
      <br />

      選擇第2個人物:
      <label htmlFor="role2">{role2}</label>
      <br />
      {
        arr0.map((c) => {
          return <div key={c}>
            <input type="radio" name="role2" id={c} value={c} onChange={(v) => {
              setRole2(v.target.value)
            }} />{c}
          </div>
        })
      }
      <br />


      {/* 統計次數 */}
      <button onClick={() => {
        // 將所有次數歸零
        // setAnsCount1(0);
        // setAnsCount2(0);
        // setAnsCount3(0);
        // setAnsCount4(0);
        // setAnsCount5(0);

        // 第1批統計次數
        const b1 = document.getElementById('NYPD');
        if (b1.checked) {
          setAnsCount1(ansCount1 + 1)
        }
        const b2 = document.getElementById('Amy');
        if (b2.checked) {
          setAnsCount2(ansCount2 + 1)
        }
        const b3 = document.getElementById('Jack');
        if (b3.checked) {
          setAnsCount3(ansCount3 + 1)
        }
        const b4 = document.getElementById('Boyle');
        if (b4.checked) {
          setAnsCount4(ansCount4 + 1)
        }
        const b5 = document.getElementById('Rosa');
        if (b5.checked) {
          setAnsCount5(ansCount5 + 1)
        }
        // 第2批統計次數
        const c1 = document.getElementById('NYPD-0');
        if (c1.checked) {
          setAnsCount01(ansCount01 + 1)
        }
        const c2 = document.getElementById('Amy-0');
        if (c2.checked) {
          setAnsCount02(ansCount02 + 1)
        }
        const c3 = document.getElementById('Jack-0');
        if (c3.checked) {
          setAnsCount03(ansCount03 + 1)
        }
        const c4 = document.getElementById('Boyle-0');
        if (c4.checked) {
          setAnsCount04(ansCount04 + 1)
        }
        const c5 = document.getElementById('Rosa-0');
        if (c5.checked) {
          setAnsCount05(ansCount05 + 1)
        }

      }}>輸出結果</button>

      顯示統計結果:
      <p>NYPD的次數:{ansCount1+ansCount01}</p>
      <p>Amy的次數:{ansCount2+ansCount02}</p>
      <p>Jack的次數:{ansCount3+ansCount03}</p>
      <p>Boyle的次數:{ansCount4+ansCount04}</p>
      <p>Rosa的次數:{ansCount5+ansCount05}</p>
    </>
  )
}

export default App
