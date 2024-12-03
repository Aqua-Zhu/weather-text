
import './App.css';
import ShowContent from './ShowContent.jsx';
import ShowContent2 from './ShowContent2.jsx';
// function ShowContent() {

//   const contentData = [
//     // 特色區資料
//     {

//       id: 1,
//       title: '教學影音',
//       desc: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水'
//     },
//     {
//       id: 2,
//       title: '良性互動',
//       desc: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水'
//     },
//     {
//       id: 3,
//       title: '趨勢分享',
//       desc: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水'
//     },
//   ]


//   return (
//     <>
//       {
//         contentData.map((item) => {
//           return (

//               <div className="box" key={item.id}>
//                 <h2>{item.title}</h2>
//                 <p>{item.desc}</p>
//               </div>

//           )
//         })
//       }
//     </>
//   )
// }

// function ShowContent2() {

//   const contentData2 = [
//     // 課程區資料
//     {
//       id: 1,
//       imgURL: "react-test1112/images/unity.jpg",
//       name: 'Unity',
//       tent: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水',
//       teacher: '講師:12345',
//       hrs: '時長:4hr',
//       price: '1600',
//       pricesale: '1200',
//       button:'付款上課去',
//     },
//     {
//       id: 2,
//       imgURL: "react-test1112/images/gamesalad.jpg",
//       name: 'GameSalad2D遊戲製作',
//       tent: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水',
//       teacher: '講師:12345',
//       hrs: '時長:4hr',
//       price: '1600',
//       pricesale: '1200',
//       button:'付款上課去',
//     },
//     {
//       id: 3,
//       imgURL: "react-test1112/images/gwd.jpg",
//       name: 'Google Web Design',
//       tent: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水',
//       teacher: '講師:12345',
//       hrs: '時長:4hr',
//       price: '1600',
//       pricesale: '1200',
//       button:'付款上課去',
//     },
//   ]

//   return (
//     <>
//       {
//         contentData2.map((item2) => {
//           return (
//             <>
//               <div className="lesson1">
//                 <img src={item2.imgURL} alt="" />
//                 <h3 key={item2.id}>{item2.name}</h3>
//                 <p className='pp'>{item2.tent}</p>
//                 <p className='p2'>{item2.teacher}</p>
//                 <p className='p2'>{item2.hrs}</p>
//                 <p><span>{item2.price} </span><span className='span2'>{item2.pricesale}</span></p>
//                 <p><button>{item2.but}</button></p>

//               </div>
//             </>
//           )
//         })
//       }
//     </>
//   )
// }


function App() {

    //   function show(props){
    //     contentData.map((item) => {
    //       return (

    //         <>
    //           <div className="box" key={item.id}> 
    //             <h2>{item.title}</h2>
    //             <p>{item.desc}</p>
    //           </div>
    //         </>

    //       )
    //   }
    // )

    // 特色區元件






    // 推薦課程資料

    return (

        <div>
            {/* banner */}
            <div className="banner">
                <img src="./react-test1112/images/banner.jpg" alt="" />
            </div>
            {/* 特色區 */}
            <div className="content">

                <ShowContent />
                {/* {
        contentData.map((item) => {
            return (
            <>
                <div className="box" key={item.id}> 
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                </div>
            </>
            )
        })
        } */}



                {
                    // 在jsx中使用迴圈要用map

                }

                {/* <div className="box">
        <h2>{contentData.data1.title}</h2>
        <p>{contentData.data1.desc}</p>
        </div>
        <div className="box">
        <h2>{contentData.data2.title}</h2>
        <p>{contentData.data2.desc}</p>
        </div>
        <div className="box">
        <h2>{contentData.data3.title}</h2>
          <p>{contentData.data3.desc}</p> */}
            </div>




            {/* 主標 */}
            <h1> 讓學習成為一種習慣</h1>
            {/* 推薦課程 */}
            <div div className="content2" >
                <h2 className='lesson0'>推薦課程</h2>
            </div>
            {/* 課程1 */}
            <>
                <div div id="box" >
                    <ShowContent2 />
                    {/* <div className="lesson1">
            <img src="./react-test1112/images/unity.jpg" alt="" />
            <h3>Unity5</h3>
            <p className='pp'>滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水</p>
            <p className='p2'>講師:12345</p>
            <p className='p2'>時長:4hr</p>
            <p><span>原價:10000 </span><span className='span2'>特價:9999</span></p>
            <p><button>付款上課去</button></p>
          </div> */}
                    {/* 課程2 */}
                    {/* <div className="lesson1">
            <img src="./react-test1112/images/gamesalad.jpg" alt="" />
            <h3>GameSalad2D遊戲製作</h3>
            <p className='pp'>滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水</p>
            <p className='p2'>講師:12345</p>
            <p className='p2'>時長:4hr</p>
            <p><span>原價:10000 </span><span className='span2'>特價:9999</span></p>
            <p><button>付款上課去</button></p>
          </div> */}
                    {/* 課程3 */}
                    {/* <div className="lesson1">
            <img src="./react-test1112/images/gwd.jpg" alt="" />
            <h3>Google Web Design</h3>
            <p className='pp'>滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水</p>
            <p className='p2'>講師:12345</p>
            <p className='p2'>時長:4hr</p>
            <p><span>原價:10000 </span><span className='span2'>特價:9999</span></p>
            <p><button>付款上課去</button></p>
          </div> */}
                </div >

                {/* 葉偉 */}
                < div className="name" > 朱治瑄</ div>

            </>
        </div>
    )
}
export default App
