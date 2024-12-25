import { useEffect } from 'react';
import $ from 'jquery';
export default function App() {

    useEffect(() => {
        // mouseover() => 滑鼠移入
        // mouseout() => 滑鼠移出
        // mousemove() => 移動
        // X、Y座標 => pageX、pageY
        // htnl() => 取得html內容
        // fadeIn() => 淡入
        // fadeOut() => 淡出
        // 毫秒 or (slow,normal,fast) => 速度
        // has() => 尋找指定名稱存在
        // append() => 新增html元素
        // children() => 取得子元素
        $('a:has(.ttpShow)').mouseover(function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>')
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px',
            }).fadeIn()
        }).mouseout(function (e) {
            $('#ttpPanel').remove()
        }).mouseover(function (e) {
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px',
            }).fadeIn()
        })

    }, [])
    return (
        <>

            <h2>ToolTip顯示說明</h2>
            <p>Lorem, ipsum dolor sit amet
                <a href="#">
                    consectetur
                    <span className='ttpShow'>consectetur內容說明...</span>
                </a>
                adipisicing elit. Et eius ea excepturi quaerat dicta accusamus nesciunt animi nemo eaque, atque maxime. Sapiente molestias ipsa, officiis consequatur assumenda laudantium sit fugit facere cum minus quibusdam perferendis dolor, aliquid tempore maxime expedita voluptates ullam natus delectus, doloribus mollitia? Distinctio dolor optio ut ab, doloribus, ratione quaerat quisquam fugit beatae nostrum perspiciatis recusandae saepe repellat corrupti quae at veniam consequuntur pariatur. Dolorem neque facere cum culpa excepturi expedita amet incidunt mollitia at? Quidem dignissimos labore perferendis voluptatibus, perspiciatis possimus repellat dicta tempore! Quidem cumque, sunt dolorum alias, eius obcaecati facilis voluptate distinctio laboriosam, debitis ex? Ea at maxime itaque! Architecto dolorem quae, dolores id accusantium corrupti deserunt officia quisquam, porro, quos non minus unde voluptas illo ab quo consequuntur atque possimus molestiae delectus! Incidunt iure ullam libero animi facilis voluptates odit exercitationem perspiciatis. Blanditiis culpa praesentium veritatis recusandae quam mollitia optio eligendi quo libero?
                <a href="#">
                    Aliquid
                    <span className='ttpShow'><img src="./react-test1112/images/gwd.jpg" alt="" /></span>
                </a>
                at sed ipsa temporibus illo omnis nesciunt quo magnam. Amet quibusdam rem ad deleniti veritatis! Itaque accusamus ut, architecto optio, est praesentium cumque fugiat repellat corporis, adipisci fuga recusandae eius tempore atque dicta minus consectetur vel ipsa aperiam autem? Dolor, aliquid quidem repellat laboriosam ipsum quo esse expedita ea iste minima vitae labore numquam, accusamus molestiae cumque, mollitia quam ex! Fugit iure praesentium beatae? In velit quibusdam accusamus, beatae quo dolore nisi exercitationem animi provident non eum dolorum at. Reprehenderit dolor praesentium cum rem vitae iusto quia. Dolorem omnis assumenda perferendis sit. Adipisci illum cupiditate qui ut eos cum minima distinctio obcaecati ullam similique rem assumenda nobis eligendi non, repellat amet nulla. Cumque dolores possimus hic, nobis obcaecati molestiae. Quaerat, reiciendis aut sapiente quibusdam itaque rem earum eos doloribus, ab eveniet excepturi, rerum doloremque aperiam nulla voluptatum voluptates ipsam quidem nobis labore ipsum assumenda sunt fugiat! Facere hic, repellendus aperiam eum suscipit, mollitia error iure dolorum ab dicta sit! Laboriosam voluptatibus quia repellendus error eum asperiores nobis ipsam sunt dicta. Cumque dolorum cupiditate voluptatem ut, expedita placeat mollitia modi, aliquid consectetur autem magni labore dolorem pariatur laborum laudantium saepe repellat asperiores eaque doloremque illum, veniam accusantium nihil! Similique sunt doloribus totam corporis, quo culpa, error tenetur facilis iure sequi beatae aperiam voluptates eveniet! Aliquam odio repellat mollitia iusto id, perspiciatis molestias delectus totam recusandae excepturi. Enim placeat voluptate optio vitae modi et, autem recusandae reiciendis ex illum cum odit eos dolore dicta officiis voluptatibus magni repellat ullam sed natus qui veritatis iure ipsa quaerat. Unde, quasi dicta. Qui sed sapiente, excepturi voluptatibus quasi unde repudiandae velit magnam doloribus deleniti necessitatibus rerum dolorem magni quis maxime vel cupiditate facilis distinctio, odit impedit assumenda! Similique, dignissimos suscipit vero ullam nam autem inventore ipsa pariatur id magnam ad quos facere, quasi totam mollitia porro soluta, facilis vitae commodi ratione minus error excepturi aperiam? Neque incidunt dolore rerum asperiores facere mollitia iure modi provident nulla, maiores officia ea cupiditate quisquam voluptates iste, esse enim, doloribus repellat necessitatibus consequuntur. Debitis asperiores, ea fugit aspernatur quos laborum amet! Corrupti odio obcaecati odit velit sequi!</p>
        </>
    )
}
