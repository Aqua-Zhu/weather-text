function ShowInf() {


    return (
        <>
        {
        (async () => {
            const data = await axios.get('https://aqua-zhu.github.io/react-app1112/json/F-C0032-001.json');
            // const { location } = data.data.cwaopendata.dataset;

            const { location } = data.data.cwaopendata.dataset;
            console.log(location);
            
            location.map((city) => {
                return <div key={city.locationName}>{city.locationName}</div>
            })

            // locationName => 代表縣市名稱
            // weatherElement => Wx => 天氣概況
            // elementName => PoP => 降雨機率
        })()
    }
            
            
            
        </>
    )
}

export default ShowInf