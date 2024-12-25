import $ from 'jquery'
import { useEffect } from 'react';

export default function App() {

    // 寫法1:版本迭代被淘汰

    // useEffect(() => {
    // $('.cssAniml').hover(function(){
    //     $(this).addClass('imgScale');
    // },function(){
    //     $(this).removeClass('imgScale');
    // })
    // }, [])

    // 寫法2:建議的寫法
    useEffect(() => {
        $('.cssAniml').on('mouseenter', function () {
            $(this).addClass('imgScale');
        })
        $('.cssAniml').on('mouseout', function () {
            $(this).removeClass('imgScale');
        })
        $('.btn').on('click',function(){
            $('html,body').animate({ scrollTop: 0 }, 1000);
        })
    }, [])



    return (
        <>
            <div className="wrapper">
                <a href="#" class="cssAniml">
                    <img src="./react-test1112/images/04.jpg" alt="" />
                </a>
            </div>
            <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, doloribus repellendus maxime fugiat delectus architecto sint odit vitae, sunt dolorum tenetur perspiciatis labore itaque ipsa laudantium! Voluptate tempore a ut?
        Possimus sit consequatur, eius vero nesciunt libero totam doloribus ullam porro velit atque voluptates. Non, nulla error dolor modi temporibus totam harum velit praesentium nobis rerum minus necessitatibus voluptas iste.
        Minima officiis alias, aliquid magnam minus incidunt laboriosam, eius illo soluta ad vitae cupiditate cum odio ullam eaque officia neque eum ab ex et provident itaque! Voluptates voluptatum culpa exercitationem.
        Minus sit, aliquid ab illo accusantium voluptas quaerat dolorum consequatur natus nam soluta ullam in perspiciatis incidunt, neque quis quia odit quam non. Modi, soluta ipsam sunt totam rerum dolorum?
        Inventore, officia. Dolor iure eius quidem similique saepe iste ducimus soluta ab a delectus recusandae autem magnam error nobis placeat, mollitia reprehenderit eos nemo atque reiciendis perspiciatis? Rerum, nihil quos!
        Ipsum vitae a nobis ratione sunt non, maxime, accusamus consequuntur ipsam, amet animi corrupti! Autem reprehenderit explicabo incidunt? Nisi reiciendis doloremque est unde assumenda cupiditate eius delectus quos officia nam?
        Consequuntur, officiis blanditiis? Consectetur totam cumque tempore voluptas possimus natus, a quas tenetur incidunt dicta officia delectus ab iusto nulla at, et facilis saepe quos rem ratione. Eligendi, vel at.
        Ea, deleniti, culpa asperiores cum earum ad eum ipsum pariatur animi labore fuga quis assumenda? Nemo, cum nisi. Dolor necessitatibus quaerat consequatur assumenda ab soluta vero sed culpa libero incidunt.
        Debitis vitae earum eum perferendis alias consectetur quae rem ab esse, voluptatum eius incidunt veritatis laudantium eveniet eaque ullam voluptate sequi deserunt explicabo laborum optio asperiores fugit. Mollitia, possimus saepe.
        Error excepturi, modi, iure, ut blanditiis deserunt soluta ex odio ducimus consequatur amet dolores quam nobis labore nulla! Consequatur labore laboriosam fuga mollitia amet expedita asperiores temporibus facere, quis quidem.
        Eveniet iusto voluptatum fuga error architecto aliquam sit? Harum accusamus, iusto iste possimus tempora porro at eos quas repellat omnis ad fugit aperiam quo ducimus, ea esse assumenda libero consequatur.
        Explicabo illum temporibus eum neque, asperiores quasi voluptatum corporis maxime sunt consequatur, animi officia aliquam veritatis dolores quaerat. Suscipit incidunt eveniet voluptatem neque officiis sunt maxime minus accusamus, totam deleniti!
        Qui iste voluptate error vel ipsum expedita aliquam provident cum, enim fugit fuga sunt quas incidunt atque autem sequi recusandae laboriosam accusamus consectetur suscipit ipsa culpa aperiam. Unde, in id!
        Sint dolores quaerat soluta asperiores porro inventore delectus, maxime facilis beatae, molestiae rem ex nulla ullam quia fugit excepturi aliquid illum ea voluptate vero. Consequatur commodi eligendi magni reprehenderit. Facilis.
        Veritatis enim ullam eaque, impedit maiores ab id unde ipsa porro harum vero nesciunt qui fugiat dicta cupiditate laudantium. Atque ducimus harum enim consequuntur vel. Quisquam consequatur voluptatibus tenetur architecto?
        Repellendus enim officiis numquam explicabo quas accusamus natus impedit dignissimos, tempore quos quis quod. Nulla delectus quia doloribus dolorum totam suscipit nemo vitae? Id aspernatur mollitia sed quaerat a? Maiores!
        Modi accusantium cupiditate eaque nulla quibusdam, neque nisi repellat maiores sequi error minus aliquid delectus ea ullam adipisci dolore voluptatum explicabo nesciunt. Sint nobis ut asperiores veniam, laboriosam aperiam labore!
        Similique, delectus eos! Aut culpa voluptatem non facere iure fugit architecto debitis hic ipsum saepe voluptatibus, necessitatibus deleniti laborum. Architecto iste, recusandae hic eum laudantium cumque doloribus? Harum, eaque dicta!
        Eligendi voluptatem harum voluptas et quaerat, eum consequuntur tempore molestiae. Pariatur atque saepe laudantium consequuntur unde quia ut modi, eligendi maxime repellendus ullam numquam perspiciatis explicabo laboriosam quo voluptatem quos.
        Distinctio ipsam pariatur quasi dignissimos ducimus omnis similique error architecto, temporibus animi modi! Atque ullam amet excepturi quam porro quibusdam distinctio praesentium quasi voluptate non dolorum consequatur ratione, alias ducimus?
        Minus, sequi mollitia! Aut velit officia, soluta accusamus cum ut iste molestiae? Delectus at molestiae id accusantium, placeat quidem ea ex beatae? Provident excepturi fugiat inventore ratione ullam ad iusto!
        Vitae unde voluptatum expedita eaque odio dolor odit, nulla ratione quis officiis, quod ullam eligendi enim fugiat nemo incidunt eum! Vel quaerat dolor sapiente soluta incidunt beatae obcaecati vitae? Alias.
        Adipisci nemo incidunt laborum ipsam corporis placeat inventore. Minima iusto et tempora, in nam asperiores assumenda eum. Saepe assumenda laboriosam eligendi. Sint, commodi iste. Minima provident omnis commodi voluptatum esse.
        Voluptas laboriosam ut neque velit molestias repellat quis corporis expedita repellendus ex assumenda quidem corrupti obcaecati reiciendis quam ea, dolor adipisci ipsum commodi, ullam necessitatibus. Vero consequuntur id corporis voluptatum.
        Nesciunt, fugit? Magni illo sequi doloremque, sunt ipsam eveniet maiores fuga quod perspiciatis praesentium corporis numquam voluptas ut alias sapiente est reiciendis nemo dignissimos sit, architecto et cum? Autem, rem?
        Nam officia a tenetur nisi voluptate commodi dolorem optio beatae omnis quaerat rerum quibusdam, error necessitatibus quasi. Porro, unde omnis. Repudiandae maxime numquam minima libero debitis voluptatem laborum laudantium dolore.
        Recusandae nemo dolores, cumque quo perspiciatis quasi, voluptatibus necessitatibus similique nesciunt quae explicabo ducimus tenetur sit doloremque esse odio eveniet. Id eligendi repudiandae adipisci facere est hic sapiente asperiores dolore?
        Aperiam pariatur corporis autem voluptatibus placeat? Dicta non esse voluptatum magnam dolor ea nesciunt, fugiat molestiae inventore adipisci magni laboriosam quasi in odio iure? Quis commodi similique veritatis debitis accusamus!
        Qui accusantium numquam est hic vitae doloremque magni ex ipsam, ab eveniet culpa? Quia dolorum unde quam eum non sit dicta, mollitia placeat explicabo incidunt deleniti autem beatae, vitae atque?
        Veniam ad officiis ut facilis! Tempora, aperiam. Voluptatem, suscipit! Fugit cum, odit commodi aspernatur in illum. Earum quisquam, magnam numquam consequatur assumenda atque cupiditate fuga unde doloremque odit saepe dolorum?
        Voluptatibus placeat omnis distinctio fuga et labore dolorem, tenetur at non suscipit expedita ipsum illo quas repellendus? Similique totam suscipit, necessitatibus voluptates reprehenderit fugit pariatur, dolorem vitae quae distinctio eos.
        Nobis repellendus iusto distinctio perspiciatis sed, provident itaque explicabo est molestias cumque quasi quos qui dolore placeat delectus quam at consequuntur officiis deleniti aliquid ab! Quis animi enim eos sapiente.
        Dolorem itaque, quas dolorum in vel illum quisquam corrupti facilis minima laudantium assumenda aspernatur voluptatem sapiente sit distinctio officia natus repellat. Cupiditate ex, facere eum dolores quas nulla consequatur tempora!
        Impedit esse sint quidem, rerum enim perferendis! Repellat molestias, quae magni nulla ullam aperiam dolorum placeat libero est accusamus veritatis at, reiciendis eaque nihil provident esse, commodi dolor dignissimos? Repellendus.
        Voluptatum similique exercitationem unde accusantium quo perspiciatis corporis voluptatibus nobis nihil deleniti asperiores at tenetur laudantium in, doloribus odio ipsum quam mollitia dolorum numquam tempore itaque error velit maiores. Ipsa.
        Quisquam explicabo nam iste. Eligendi totam amet nesciunt delectus a dolores sapiente sit voluptates voluptas autem accusantium nisi repellat laboriosam, cumque suscipit sunt asperiores? Et eligendi laboriosam voluptas magnam itaque.
        Quam eum libero, accusantium aperiam esse officia mollitia aliquam similique cum pariatur minima rem provident est doloremque magni saepe repudiandae qui sapiente, tenetur optio eveniet. Placeat corporis mollitia non tempora.
        Placeat quo recusandae asperiores suscipit veritatis optio, dolorem unde. Deserunt inventore autem quod molestiae. Suscipit at, ipsum dolorum inventore earum corrupti? Voluptatem aspernatur repudiandae recusandae facilis? Quo tenetur tempore cumque?
        Dicta quas nulla neque? Sapiente repudiandae reprehenderit optio consequuntur voluptate magni inventore error provident nihil! Ipsum quos delectus quasi tempore laboriosam, in pariatur, recusandae excepturi reprehenderit aliquam, dignissimos iure deserunt.
        Impedit, laboriosam adipisci ab illum sed in temporibus, commodi vitae praesentium labore sequi minus quo consequatur explicabo vero quisquam unde ea quaerat cum dicta rerum corporis est excepturi. Mollitia, animi?
        Deleniti quod doloribus soluta asperiores deserunt minus obcaecati reiciendis, facere modi quis odit excepturi facilis corporis ipsam atque! Commodi enim quibusdam repudiandae ipsum voluptatibus ut sunt pariatur libero ipsam excepturi!
        Animi totam quas quia nihil maiores quis accusantium et doloribus beatae explicabo, id repellat assumenda nostrum culpa, mollitia, dolores ad nulla ullam esse blanditiis voluptates? Adipisci ex accusantium a mollitia.
        Pariatur ab quasi itaque similique hic voluptas odio neque vitae temporibus omnis eos, quas quibusdam! Iste nam sed, molestias nesciunt enim dignissimos autem rerum aliquam nobis pariatur voluptatem eveniet at?
        At accusamus iusto est beatae omnis nemo, asperiores cum quos esse! Sapiente tenetur esse, doloremque aliquid repellendus id minus quisquam, similique blanditiis aut dolore fuga, consectetur unde fugiat. Quibusdam, quia.
        Sapiente perferendis magni possimus architecto, aut maiores suscipit fugiat sequi libero nostrum corrupti inventore. Tenetur totam cum saepe nostrum repudiandae! A tempore eum vel tenetur porro distinctio eligendi architecto? Quisquam?
        Neque earum iusto a expedita quibusdam natus esse iste vel numquam eaque rerum facere in eveniet veniam perferendis voluptates quisquam, dolore, repudiandae rem. Cumque molestias necessitatibus nemo quam beatae optio!
        Autem nobis natus illum impedit officiis dolorum earum quia vel. Ipsum culpa autem maxime explicabo qui temporibus, eos odio facilis veniam minima officia ut dolorem quaerat. Cum impedit repellat molestias.
        Quasi aut maxime quo eligendi suscipit. Qui nam aliquid explicabo blanditiis dolores id delectus architecto natus at ab illo facere dignissimos hic, porro modi labore nostrum assumenda doloribus officiis quis!
        Incidunt a optio consequuntur recusandae corporis delectus. Recusandae sit laudantium expedita, consectetur magnam error placeat at deserunt quis dolores neque voluptates, voluptatibus minus labore minima libero odio sequi cum sapiente.
        Unde amet molestias nisi asperiores. Ullam expedita in eos quod omnis ex eum temporibus, sunt ipsa suscipit corporis numquam voluptate voluptatibus commodi inventore, earum hic dicta quaerat accusantium. Quod, alias?
        Provident sequi quidem tempora veniam adipisci alias suscipit. Similique dolorum aliquam odio doloribus, architecto rem? Porro, magni perferendis doloremque ratione tempore, cupiditate minima dolore nam, illum nulla ab adipisci quam.
        Enim tempora provident officiis, harum sunt deserunt animi cupiditate mollitia placeat minima, repellat, vero quis. Totam odit non error sed temporibus at et obcaecati repudiandae quibusdam, possimus, quidem, aspernatur corporis.
        Ducimus amet, harum iusto vel debitis doloremque dolore aspernatur quasi culpa perspiciatis. Veritatis est necessitatibus quam voluptatem quia ab facere autem! Laudantium necessitatibus, modi eius odit quas asperiores saepe totam.
        Asperiores voluptate tenetur cumque vero delectus exercitationem corrupti nobis nulla, corporis iste aut iusto praesentium laborum voluptatibus esse provident doloribus impedit in. Nobis, quasi fuga ea earum sed adipisci sit!
        Ad vero velit alias hic quisquam? Nisi ipsam quas dicta soluta! Libero facilis, est, excepturi dignissimos minus aliquid cum earum et obcaecati odio ratione aperiam! Adipisci quae cupiditate consequuntur sit!
        Atque ea dignissimos at odit non suscipit quidem aspernatur magnam odio officiis dolorem eligendi, quos aliquid temporibus, repudiandae a fugit. Esse dolores, voluptates doloribus laboriosam harum laudantium modi nobis delectus?
        Eveniet veniam velit magni est praesentium beatae minus eos animi, nisi possimus nemo hic ut dolor quasi facilis voluptatum veritatis doloribus corrupti vitae quae! Neque corrupti atque autem nisi optio?
        Illum vitae reprehenderit quae perferendis quos corporis similique sapiente cupiditate nesciunt! Ea dolor voluptate voluptatem voluptatibus ducimus. Earum voluptates possimus voluptatibus sequi? A voluptate eum ab, quas illo veritatis impedit.
        Quidem, eum! Doloribus cum, saepe autem eum eius et laudantium voluptates natus? Vero exercitationem consequuntur commodi temporibus sed nam veritatis animi voluptatum quibusdam reiciendis minima a, labore possimus culpa quaerat?
        Qui ipsum inventore quo excepturi alias eum autem, quis ullam similique illum illo minima ea? Et earum, beatae iure recusandae consectetur delectus repellat, reprehenderit facere optio omnis vitae enim deserunt!
        Velit, autem, perspiciatis dolor est eum eaque vel maxime cumque tempora corporis quod ullam explicabo iure eius debitis minus. Exercitationem fugiat reiciendis dolorem dicta ad nulla porro modi excepturi atque!
        Dignissimos iusto impedit delectus doloremque, natus necessitatibus repellendus nam fuga laudantium? Saepe cum voluptatibus atque repellendus, officiis minima in alias eum nostrum deserunt dolores recusandae provident labore doloribus ullam reiciendis!
        Atque sunt omnis fuga blanditiis delectus ex corporis recusandae accusamus. Sint ipsum voluptas nulla adipisci modi? Itaque dignissimos fugiat natus similique quibusdam, amet numquam facilis sequi! Iure consequuntur earum maxime.
        Reiciendis vero quae, esse omnis quo natus itaque, porro repudiandae adipisci delectus ducimus nam, beatae doloremque illum labore eligendi. Voluptatem veritatis deserunt quo fugiat! Asperiores fuga unde facilis ad vero.
        Tenetur odit exercitationem eligendi, aliquam architecto deleniti porro dolores repudiandae assumenda aperiam ipsum vero rem libero reiciendis repellendus minima unde. Odit voluptatum illum eos ipsum vero autem nulla, quidem porro!
        Dicta, rerum blanditiis quam quos accusantium eius dolorum saepe magni vel alias, itaque dolorem asperiores fuga doloremque quaerat earum nam error quia impedit ipsum. Eius perspiciatis vel corrupti possimus nihil?
        Aspernatur eligendi doloribus beatae, debitis sed voluptate eaque rem dolor commodi quibusdam quod consectetur exercitationem, labore nemo veniam praesentium, molestias sunt asperiores tenetur. Eius, exercitationem commodi vel nemo mollitia officia.
        Consectetur molestias, provident ullam ipsum saepe delectus consequuntur laboriosam eius quo qui. Vero quaerat ex unde vitae, quidem quam, numquam fugit maiores officia assumenda libero, itaque eius commodi modi deserunt.
        Qui quia nesciunt nostrum libero laboriosam itaque officia dignissimos nulla delectus necessitatibus illo voluptates consequatur reprehenderit, dicta nobis aliquid saepe illum? Optio error est quibusdam quam totam expedita assumenda. Consequuntur?
        Est, animi minima porro repellendus exercitationem excepturi neque autem quas vel recusandae, quam quos distinctio? Dolore at vel excepturi reprehenderit voluptates doloremque dicta eaque quaerat corrupti facere! Veritatis, reprehenderit assumenda.
        Inventore aspernatur at voluptatem asperiores nisi consequuntur quibusdam dolorum sed voluptatibus! Dolor, tempore recusandae est voluptates voluptatem repudiandae illo dolorum atque mollitia nemo quibusdam? Cumque delectus quasi exercitationem voluptatum iusto.
        Quaerat, ea dolorum qui nemo temporibus molestiae. Nisi incidunt totam ipsam sit repudiandae cum voluptates. Incidunt, maxime culpa! Facere sed saepe pariatur ipsum, unde reprehenderit fuga neque cupiditate. Nesciunt, voluptas?
        Deleniti quis corporis ab distinctio, accusamus vitae debitis adipisci ducimus. Accusantium eaque tenetur fugiat placeat adipisci laboriosam laborum optio, pariatur rerum, hic cum excepturi amet alias corrupti quisquam? Alias, sint.
        Cupiditate beatae sunt eum non voluptatum nisi. Sequi, perferendis! Ullam corrupti veniam incidunt nobis natus quia animi aliquid expedita repudiandae! Perspiciatis soluta rerum illum reiciendis eveniet quo totam autem nulla.
        Porro aliquam architecto ipsa quam temporibus itaque minus optio perspiciatis non asperiores? Cupiditate possimus vel commodi laborum repellendus magnam quos assumenda. Laudantium officia quaerat, placeat recusandae tempora harum facere explicabo?
        Quas cupiditate quibusdam voluptate neque. Ducimus amet quos cumque ratione ipsa qui et deserunt neque, architecto nesciunt repellat, autem facere eveniet temporibus atque? Doloremque sint repudiandae iusto porro modi nostrum.
        Aliquid tempora delectus voluptates magnam est at atque nulla ipsa optio voluptatibus voluptate quia explicabo doloremque eos corrupti iure voluptas nisi ipsam quo distinctio, magni fugiat, a similique aspernatur? Aut.
        Voluptatibus, molestias! Pariatur rerum cumque esse quaerat architecto ad dicta laboriosam reiciendis explicabo, animi vitae ab asperiores necessitatibus cupiditate fugit aliquam? Ea expedita sit nostrum laboriosam eius magni, esse autem?
        Iste cum deleniti architecto dolorum quos, nemo commodi iure, quibusdam totam quas veritatis voluptas sint, cumque qui itaque debitis earum illo! Itaque tenetur et perferendis dolores facilis voluptatem eum ad?
        Obcaecati, tenetur. Consequuntur, voluptatibus? Dolor esse distinctio iure ipsam repudiandae modi nobis magnam? Eveniet, commodi ratione quisquam provident, omnis fugiat adipisci rem eius deserunt ipsum dolor nisi illo sequi aliquid?
        Mollitia quidem fugit deserunt non recusandae. Excepturi vero eos aliquid eius voluptates! Culpa, exercitationem distinctio iure quisquam pariatur repudiandae quos, veritatis perspiciatis, esse id veniam ex sunt dolorum neque voluptatibus.
        Odio ipsa minus dolor obcaecati tempora quo, omnis aperiam labore, est dolore optio debitis perferendis impedit ex quas beatae suscipit error iusto ut pariatur delectus? Ea ad totam expedita voluptatem!
        Tempora molestiae beatae veniam laudantium, odio unde non natus illum reiciendis fugiat, voluptate totam iure eius asperiores quia ea. Placeat et at deleniti iure ratione maiores excepturi eaque eligendi reiciendis?
        Eligendi tenetur accusamus nemo rerum distinctio pariatur inventore, odit suscipit in numquam, veritatis asperiores, vero aperiam quam. Tempore neque consequatur commodi? Saepe delectus officia blanditiis! Sit, provident! Non, assumenda corporis.
        Voluptatum, doloremque vero architecto blanditiis totam cumque enim fugiat ad ipsum vitae eius natus nemo, consequuntur provident! Voluptate, excepturi eius architecto assumenda quis, nemo iusto unde, voluptatum aliquid sapiente explicabo.
        Suscipit, aspernatur molestiae in exercitationem quae commodi corrupti doloribus modi quod aut accusantium cum id quo voluptas possimus iusto cupiditate ex sunt temporibus. Cupiditate voluptatem deserunt officia ipsa culpa nulla.
        Expedita unde quos excepturi incidunt blanditiis, ea quasi veniam sit accusamus saepe tempore exercitationem consequatur suscipit magni quibusdam, recusandae, eveniet facere a libero earum commodi optio ex totam voluptate. Deserunt.
        Cumque, dicta aut. Fugit voluptas laudantium aliquam nam labore dolores ratione molestiae, at recusandae aspernatur est incidunt natus necessitatibus praesentium ex et. Omnis illo non accusamus consequuntur! Voluptate, molestias deserunt!
        Excepturi totam accusantium vitae possimus quos autem sed at aspernatur minima veniam, aut soluta laborum illo, repellendus placeat consectetur et recusandae! Eaque, illum? Nam temporibus vitae, suscipit exercitationem illo similique?
        Quae soluta natus, mollitia vitae sint quidem aperiam debitis exercitationem autem quos temporibus accusantium, eius reprehenderit veniam adipisci ab qui quas. Sapiente, illo? Reprehenderit, necessitatibus maxime sint quis optio a.
        Repellat perspiciatis incidunt nisi voluptas veritatis eveniet. Qui incidunt fugit eum enim laboriosam, explicabo ex? Velit modi commodi odio ipsum dolore fuga et animi magnam voluptate, quaerat quibusdam dolores itaque.
        Modi itaque corrupti dignissimos ab aut unde fugiat laborum ad obcaecati. Libero mollitia tenetur numquam quibusdam maxime debitis iusto esse? Accusamus aliquid tempore asperiores quisquam magni impedit maxime sed nemo.
        A qui illo dignissimos culpa maiores neque porro facere voluptatum beatae aliquam corrupti nesciunt vitae nisi accusantium, officiis libero quia voluptates saepe. Voluptatibus eos deleniti eligendi eveniet perspiciatis? Non, adipisci.
        Porro eaque ipsa earum deleniti? Neque enim inventore quae sint corrupti suscipit, magni facere modi nulla asperiores earum sequi, recusandae optio nisi odio ullam nostrum, minima adipisci sit dignissimos! Aliquid.
        Tempora quisquam ab alias amet nemo inventore a, nihil repellendus, voluptas molestias nostrum iste dignissimos eaque quod dolores autem optio placeat molestiae ullam, repudiandae officiis? Beatae commodi dolores atque deserunt.
        Neque velit totam provident harum tenetur similique accusantium repellat optio blanditiis inventore laudantium magnam, ipsam distinctio labore incidunt modi excepturi sint nemo, recusandae praesentium. Perspiciatis rem ex quos! Quo, repellat!
        Laudantium modi, expedita minima ratione reiciendis, voluptatum assumenda voluptatibus eius delectus autem a veniam quas, doloremque quaerat eveniet quam at iste voluptas et numquam magni harum aliquam? Cumque, labore ipsum.
        Voluptatum rerum, velit nostrum ipsa quaerat recusandae hic? Modi nemo enim et vitae suscipit, animi earum quos sit ducimus eius quo officia eos blanditiis debitis excepturi illo repellendus dicta architecto.
        Dignissimos labore nihil commodi numquam voluptatem, iure maiores animi veritatis, neque voluptatibus, possimus accusantium natus obcaecati. Cumque reiciendis eveniet, in culpa explicabo neque dignissimos quibusdam. Rem magnam aspernatur eum repellat!
        Consectetur perspiciatis consequuntur repellendus esse, quas blanditiis sunt architecto rem deserunt, ut laboriosam eveniet iste libero. Necessitatibus non aliquid perspiciatis dolorum repellendus amet quas, in officia. Totam quibusdam dicta natus!
            </p>
        <div className="btn"></div>
        </>
    )
}
