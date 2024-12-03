function ShowContent2() {

    const contentData2 = [
        // 課程區資料
        {
            id: 1,
            imgURL: "react-test1112/images/unity.jpg",
            name: 'Unity',
            tent: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水',
            teacher: '講師:12345',
            hrs: '時長:4hr',
            price: '1600',
            pricesale: '1200',
            button: '付款上課去',
        },
        {
            id: 2,
            imgURL: "react-test1112/images/gamesalad.jpg",
            name: 'GameSalad2D遊戲製作',
            tent: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水',
            teacher: '講師:12345',
            hrs: '時長:4hr',
            price: '1600',
            pricesale: '1200',
            button: '付款上課去',
        },
        {
            id: 3,
            imgURL: "react-test1112/images/gwd.jpg",
            name: 'Google Web Design',
            tent: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水',
            teacher: '講師:12345',
            hrs: '時長:4hr',
            price: '1600',
            pricesale: '1200',
            button: '付款上課去',
        },
    ]

    return (
        <>
            {
                contentData2.map((item2) => {
                    return (
                        <>
                            <div className="lesson1">
                                <img src={item2.imgURL} alt="" />
                                <h3 key={item2.id}>{item2.name}</h3>
                                <p className='pp'>{item2.tent}</p>
                                <p className='p2'>{item2.teacher}</p>
                                <p className='p2'>{item2.hrs}</p>
                                <p><span>{item2.price} </span><span className='span2'>{item2.pricesale}</span></p>
                                <p><button>{item2.button}</button></p>

                            </div>
                        </>
                    )
                })
            }
        </>
    )
}
export default ShowContent2