

function App() {
    // 建立物件變數
    // const person = {
    //   s1: {
    //     name: "嘉明",
    //     age: 18,
    //   },
    //   s2: {
    //     name: "嘎明",
    //     age: 13,
    //   },
    //   s3: {
    //     name: "味道",
    //     age: 10,
    //   }
    // }

    // 多筆資料的物件解構方法1:一般寫法
    // const {s1,s2,s3}=person;

    // 多筆資料的物件解構方法2:解構+展開...(其餘運算子)
    // 解狗s1，展開s2,s3
    // const { s1, ...other } = person;
    // console.log(s1);
    // console.log(other);

    const person = {
        name: "嘉明",
        age: 18,
    }

    // function showName(obj) {
    //   console.log(obj);
    //   console.log(obj.name);
    //   console.log(obj.age);
    // }

    function showName({ name, age }) {
        console.log(name);
        console.log(age);
    }

    showName(person);

    return (
        <>
            {/* <div>{`同學一:${s1.name}`}</div>
      <div>{`同學三:${other.s3.name}`}</div> */}
            {/* <div>第一位同學姓名:{s1.name}</div>
    <div>第一位同學年齡:{s1.age}</div>
    <hr />
    <div>第二位同學姓名:{s2.name}</div>
    <div>第二位同學年齡:{s2.age}</div>
    <hr />
    <div>第三位同學姓名:{s3.name}</div>
      <div>第三位同學年齡:{s3.age}</div> */}
        </>
    )
}
export default App
