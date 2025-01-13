import { useMemo, useState } from 'react';
import './App.css';
export default function App() {

    const prodData = [
        {
            id: 1,
            title: '商品1',
            price: 800,
            imgUrl:'./images/01.jpg',
        },
        {
            id: 2,
            title: '商品2',
            price: 500,
            imgUrl:'./images/02.jpg',
        },
        {
            id: 3,
            title: '機車坐墊',
            price: 81000,
            imgUrl:'./images/03.jpg',
        },
        {
            id: 4,
            title: '商品4',
            price: 999,
            imgUrl:'./images/04.jpg',
        },
        {
            id: 5,
            title: '商品5',
            price: 3999,
            imgUrl:'./images/05.jpg',
        },
    ];

    const Prodtable = ({ filterProds }) => {

        return (
            <table style={{ width: '500px' }}>
                <tbody>
                    {
                        filterProds.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td style={{ borderBottom: '1px grey dashed', padding: '5px', width: '300px' }}>{prod.title}</td>
                                    <img src={prod.imgUrl} alt='' style={{width:'200px'}}></img>
                                    <td style={{ borderBottom: '1px grey dashed', padding: '5px', width: '300px', textAlign: 'right' }}>{prod.price}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

    // 陣列變數，預設為商品陣列的資料
    const [prods, setProd] = useState(prodData);
    // 排序變數，預設為遞增，desc遞減 asc遞增
    const [ascending, setAscending] = useState(true);
    // 搜尋變數
    const [search, setSearch] = useState('')

    // 建立排序與搜尋的函式
    const filterProds = useMemo(() => {
        return [...prods]
            .sort((a, b) => {
                return ascending ? a.price - b.price : b.price - a.price;
            })
            .filter((prod)=>{
                return prod.title.match(search)
            })

    }, [ascending, search])

    return (
        <>
            <h2>useMemo搜尋與排序</h2>
            <hr />
            升降冪:
            <input
                type="checkbox"
                checked={ascending}
                onChange={(e) => setAscending(e.target.checked)}
            />
            <br />
            搜尋:
            <input
                type="search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            {/* 呼叫表格元件 */}
            <Prodtable filterProds={filterProds} />

        </>
    )
}
