function ShowContent() {

    const contentData = [
        // 特色區資料
        {

            id: 1,
            title: '教學影音',
            desc: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水'
        },
        {
            id: 2,
            title: '良性互動',
            desc: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水'
        },
        {
            id: 3,
            title: '趨勢分享',
            desc: '滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水，滾滾長江東逝水'
        },
    ]


    return (
        <>
            {
                contentData.map((item) => {
                    return (

                        <div className="box" key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>

                    )
                })
            }
        </>
    )
}

export default ShowContent