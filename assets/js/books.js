var app = new Vue({
    el: '#app',
    data:{
        books1: [
            {
                id: 1,
                type: "Howto",
                type_id: 1,
                author: "Oliver Burkeman",
                name: "ชีวิตเรามีแค่สี่พันสัปดาห์",
                images:'./assets/img/101.jpeg',
                publish: "Amarin Howto",
                title:"เราสำรวจปรัชญาน่าทึ่งเกี่ยวกับเวลาและการบริหารเวลา ที่จะช่วยให้คุณมองเวลาชีวิตที่มีอยู่แค่ราวๆ 4000 พันสัปดาห์เปลี่ยนไปโดยสิ้นเชิง และปลดแอกตัวเองจาก “คำสาปของยุคโมเดิร์น” ที่เรียกร้องให้เรายัดทุกอย่างลงในเวลาที่มีอย่างมีประสิทธิภาพ ทำทุกอย่างให้เสร็จอย่างดี (getting thing done)  หนังสือทำให้เห็นว่า เราถูกตั้งโปรแกรมให้มีความคิดผิดเพี้ยนแค่ไหนเกี่ยวกับเวลา ความจริงด้านเวลาที่จะไม่มีวันเปลี่ยนแปลงคืออะไร พร้อมกับให้เครื่องมือที่ช่วยให้คุณได้สร้างชีวิตที่มีความหมาย ด้วยการยินดีโอบรับขีดจำกัดของชีวิต และเปลี่ยนแปลงสิ่งที่เราทำได้ในฐานะปัจเจก และสังคม",
                is_fav: false
            },
            {
                id: 2,
                type: "Howto",
                type_id: 1,
                author: "โบซ็อน",
                name: "ไดโนเฉา เปลี่ยวและเหงาพอประมาณ",
                images:'./assets/img/102.jpeg',
                publish: "Bloom",
                title:"การ์ตูนไดโนเสาร์หลากหลายสายพันธุ์ และเรื่องราวที่เกี่ยวพันกับความเหงาประมาณหนึ่ง หนังสือการ์ตูน 4 ช่องจบ สะท้อนเรื่องราวของความสันโดษ ในยุคของการเชื่อมต่อกับผู้อื่นมากเกินไป คงทำให้เราลืมคุณค่าของความโดดเดี่ยว และไม่เคยค้นหาความสุขของเวลาเหงา ๆ พอประมาณ บางทีการเรียนรู้และเข้าใจช่วงเวลาลำพัง ดึงความเหงาเข้ามาอยู่มุมหนึ่งของหัวใจ จิตใจอาจเข้มแข็งขึ้นพอให้เราอยู่คนเดียวอย่างกล้าหาญ...แบบไดโนเสาร์ตัวสุดท้ายตัวนั้นก็เป็นได้",
                is_fav: false
            },
            {
                id: 3,
                type: "Howto",
                type_id: 1,
                author: "ดร.ภิญโญ รัตนาพันธุ์",
                name: "อิคิไก อยู่ไม่ไกลแค่เปิดใจก็ค้นพบ",
                images:'./assets/img/103.jpeg',
                publish: "ต้นคิด",
                title:"ยุคนี้คือยุคแห่งการต่อสู้ ดิ้นรนเพื่อความสำเร็จ เพื่อให้บรรลุเป้าหมายจนหลงลืมคำว่า \"ความสุข\"ทั้งที่ความเป็นจริงแล้วเป้าหมายในชีวิตที่ทุกคนต้องการนั่นคือ \"ความสุข\"แล้วต้องทำอย่างไรจึงจะค้นพบความสุขดร.ภิญญ รัตนาพันธุ์ ผู้เป็น IKigai Coachจะพาคุณผู้อ่านไปค้นพบความสุขที่อยู่รอบตัวซึ่งเป็นความสุขที่ทำให้คุณประสบความสำเร็จอย่างน่าอัศจรรย์",
                is_fav: false
            },
            {
                id: 4,
                type: "Howto",
                type_id: 1,
                author: "สิทธินันท์ พลวิสุทธิ์ศักดิ์",
                name: "Productivity Flow – ภาวะลื่นไหล ทำอะไรก็ง่ายหมด",
                images:'./assets/img/104.jpeg',
                publish: "อะไรเอ่ย",
                title:"ทำไมคนคนหนึ่งถึงทำอะไรก็สำเร็จไปหมด.... คงต้องทำงานหนักกว่าคนอื่นแน่ๆ จริงๆแล้วอาจจะไม่ใช่อย่างที่ท่านคิด ถ้าท่านรู้เคล็ดลับของการ \"ทำน้อยให้ได้มาก\" หนังสือเล่มนี้จะพาท่านไปรู้จักเคล็ดลับนี้ แล้วท่านจะทราบว่า คนที่ดูเหมือนทำอะไรก็สำเร็จนั้น เขาอาจจะมีเวลาว่างมากกว่าคนอื่นด้วยซ้ำ",
                is_fav: false
            },
            {
                id: 5,
                type: "Howto",
                type_id: 1,
                author: "โรเบิร์ต ไอ. ซัตตัน (Robert Sutton)",
                name: "ศิลปะการอยู่ร่วมกับคนเฮงซวย (ปกใหม่)",
                images:'./assets/img/105.jpeg',
                publish: "Amarin Howto",
                title:"หยาบคาย น่ารำคาญ เก่งแต่ปาก เราทุกคนต้องเผชิญกับคนเหล่านั้นไม่มากก็น้อย ไม่ว่าจะที่ทำงาน ในโปรเจ็คงาน ในห้องเรียน หรือในชีวิตประจำวันทั่วๆ ไป คนที่ทำอย่างกับเราเป็นขยะไร้ค่า 'ศิลปะการอยู่ร่วมกับคนเฮงซวย' บอกสุดยอดวิธีรับมือกับคนเหล่านั้นอย่างมีชั้นเชิง เริ่มจากการวิเคราะห์สถานการณ์ก่อน จากนั้นใช้หลากหลายวิธี เช่น จับไต๋ ปลดอาวุธ ผลักไสไปให้พ้น ฯลฯ พร้อมทั้งให้รู้จักวิธีจัดการกับความรู้สึกของตัวคุณเองด้วย",
                is_fav: false
            },
            {
                id: 6,
                type: "Literature",
                type_id: 2,
                author: "ชังอึนจิน",
                name: "เมื่อฝนหยุดตก ผมจะหุบร่มที่กางมาตลอด",
                images:'./assets/img/201.jpeg',
                publish: "Picolo",
                title:"  แฮจู หญิงสาวที่ทำงานในโรงงานถุงมือ เธอชอบไปยืนมองวิวจากหน้าต่างของอพาร์ตเมนต์บ่อยๆ ทุกครั้งที่เธอรู้สึกไม่สบายใจ ที่นั่นเธอมักจะได้พบกับ \"คุณร่ม\" วันนั้นคุณร่มมายืนใกล้ๆ ขณะเธอกำลังแหงนมองท้องฟ้า เขามักจะกางร่มตลอดเวลาไม่ว่าจะแดดออก หรือไม่มีแดด และจะพกร่มอีกหนึ่งคันมาด้วยราวกับว่าเขากำลังรอรับใครบางคน  แฮจูคิดว่าเขาอาจกำลังลงโทษตัวเองด้วยการขังตัวเองไว้ใต้ร่ม และยืนรออะไรบางอย่างที่ไม่มีวันปรากฏ แฮจูเองก็มีปมในใจ มีความสงสัยในเรื่องความฝัน ว่าจริงๆ ระหว่างการมีความฝันกับไม่มี แบบไหนดีกว่ากัน  แต่เมื่อถึงวันหนึ่งปมในใจคลาย ได้คำตอบ และถึงวันที่ฝนหยุดตก คุณร่มก็หุบร่มได้ แฮจูเองก็หุบร่มในใจได้ ระยะห่างระหว่างทั้งสองก็แคบลง",
                is_fav: false
            },
            {
                id: 7,
                type: "Literature",
                type_id: 2,
                author: "ซากากิ สึคาสะ",
                name: "ร้านขนมแห่งความลับ ตอนความลับของความรัก",
                images:'./assets/img/202.jpeg',
                publish: "แพรวสํานักพิมพ์",
                title:"  อันจังใกล้เข้าสู่วันบรรลุนิติภาวะ ถึงจะรู้สึกว่าเร็วเกินไปสำหรับการเติบโตเป็นผู้ใหญ่และยังลังเลหวั่นไหวในการเลือกกิโมโนเพื่อใช้ในพิธี แต่เวลาก็หมุนเวียนไป ความต้องการมากมายของลูกค้าร้านมิตสึยะก็ไม่หยุดรอ ปริศนามากล้นที่อัดแน่นอยู่ในวากาชิมีแต่จะลึกล้ำยิ่งขึ้น ความสัมพันธ์กับใครคนนั้นก็ชักจะยังไง ๆ ด้วยประสบการณ์ที่เพิ่มขึ้น และความสามารถที่เพิ่มพูน อันจังจะสามารถไขปริศนาและก้าวต่อไปในอนาคตได้หรือไม่สิ้นสุดการรอคอย เล่มจบของ \"ร้านขนมแห่งความลับ\" อยู่ในมือคุณแล้ว!",
                is_fav: false
            },
            {
                id: 8,
                type: "Literature",
                type_id: 2,
                author: "ปารณีย์ ประภาพรพิพัฒน์",
                name: "Disappear เกิดขึ้น รักอยู่ ดับไป",
                images:'./assets/img/203.jpeg',
                publish: "P.S.",
                title:"เบื้องหลังความสงบงามทุกสิ่งอย่างล้วนบ้าคลั่งแต่ความบ้าคลั่งนั้นปกติที่สุดแล้ว\"เสี้ยวความคิด ความจริง และความฝันที่กระจัดกระจาย เป็นหลักฐานความร้ายกาจและมหัศจรรย์ของรัก รักซึ่งทำเราตัวเล็กจิ๋วที่คิดว่าฉลาดเท่าทันกลับโง่ ที่คิดว่ารักบริสุทธิ์กลับเป็นเพียงลักชโมย ช่วงชิงเศษตัวตนจากคนอื่นมาประกอบตัวเอง ทั้งด้วยเต็มใจและขัดขืนความสัมพันธ์เป็นเรื่องธรรมดาซ้ำซาก แต่ปฏิเสธไม่ได้ว่าวิเศษ\"",
                is_fav: false
            },
            {
                id: 9,
                type: "Literature",
                type_id: 2,
                author: "ทีโม่ หลิน",
                name: "ถึงสถานีแห่งความสุขแล้วปลุกฉันด้วย",
                images:'./assets/img/204.jpeg',
                publish: "Picolo",
                title:"เรื่องราวของฉีโปตุ้น ตำรวจวัยเกษียณที่ก่อนหน้านี้ทำงานอย่างมุ่งมั่นมาตลอด ไม่สนใจภรรยาและลูกของตนเอง เพราะคิดว่ายังมีเวลาหลังเกษียณอายุ แต่แล้วกลับไม่เป็นเช่นนั้น เพราะเขาได้รู้ว่า ภรรยาของเขาล้มป่วยและเสียชีวิตในที่สุด ทำให้เขาทะเลาะกับลูกชายของตนเอง ลูกชายของเขาหนีไปอยู่ที่อื่น ทำให้ฉีโปตุ้นเศร้ามาก จนวันหนึ่งเขาตัดสินใจว่า จะออกเดินทางเพื่อตามหาสถานีแห่งความสุขที่ตนเองได้ทำหล่นหายไว้อีกครั้ง ระหว่างที่ออกเดินทางนั้น เขาเกิดคำถามขึ้นกับตัวเองตลอดว่าเขาจะพบความสุขในอนาคตได้อย่างไร หรือบางทีความสุขอาจจะต้องใช้ความกล้าหาญที่จะเดินไปข้างหน้า และความกล้าที่จะบอกลา เพื่อพบกับสิ่งที่ดีกว่าในอนาคต",
                is_fav: false
            },
            {
                id: 10,
                type: "Literature",
                type_id: 2,
                author: "อีซึงซ็อก",
                name: "ความสุขไม่ต้องสมบูรณ์แบบ",
                images:'./assets/img/205.jpeg',
                publish: "Springbooks",
                title:"แนะนำแนวคิดและวิธีเกี่ยวกับการดำรงชีวิต รวมไปถึงช่วยปลอบประโลมใจที่เหนื่อยล้าจากการทำเพื่อ(สายตา)ของคนอื่นมากกว่าใจของตัวเองให้หันกลับมาพยายามเพื่อมีสุขมากขึ้น",
                is_fav: false
            },
            {
                id: 11,
                type: "Business",
                type_id: 3,
                author: "คนข่าว 2499",
                name: "ชัชชาติ สิทธิพันธุ์ ผู้ว่าฯที่แข็งแกร่ง",
                images:'./assets/img/301.jpeg',
                publish: "เพชรพินิจ",
                title:"\"ชัชชาติ สิทธิพันธุ์\" ในวันที่ถูกเสนอชื่อเป็นแคนดิเดท น่ายกรัฐมนตรีของพรรคเพื่อไทย เขาถูกขนานนามว่าเป็นรัฐมนตรีที่แข็งแกร่งที่สุดในปจุพี ต่อมาในโลกโซเชียลให้อายาว่าบุรุษที่แข็งแกร่งที่สุดในปฐพี (The strongest man inthe world) หรือ บุรุษที่แข็งแกร่งที่สุดในจักรวาล (The strongest man inthe universe) หรือ พ่อที่แข็งแกร่งที่สุดในปฐพี (The strongest fatherin the world) และ ณ วันนี้เขา คือผู้ว่าฯ ที่แข็งแกร่งที่สุดในปฐพี หรือ\"The strongest governor in the world\"",
                is_fav: false
            },
            {
                id: 12,
                type: "Business",
                type_id: 3,
                author: "ลงทุนแมน",
                name: "BLACK SWAN วันมืดมิดในชีวิตการลงทุน",
                images:'./assets/img/302.jpeg',
                publish: "LTMAN",
                title:"ความผิดพลาดแบบไม่คาดฝันที่เป็นเหมือน BLACK SWAN ซึ่งเราไม่เคยคาดคิดมาก่อนว่าจะมีหงส์สีดำอยู่บนโลกนี้ ผิดจากความเชื่อเดิมที่โลกมีแต่หงส์สีขาว คำถามที่นักลงทุนทุกคนเคยสงสัยก็คือ BLACK SWAN ที่เคยเกิดขึ้นกับการลงทุน มันเป็นรูปแบบไหนได้บ้าง? และเราสามารถเรียนรู้ เพื่อป้องกันไม่ให้เกิดขึ้นแบบนั้นกับตัวเราได้หรือไม่? หนังสือเล่มนี้จะเป็นคำตอบ และเป็นบทเรียนให้กับนักลงทุนทุกคนในประเทศไทย ที่อยากเรียนรู้ความผิดพลาด และความล้มเหลวของนักลงทุนที่ประสบความสำเร็จแล้ว ว่าเขาเหล่านั้นผ่านวันที่มืดมิดมาอย่างไร? รู้สึกอย่างไร? ต้องเจอกับเหตุการณ์อะไรบ้าง? เขาเหล่านั้นใช้วิธีคิดแบบไหนและลงมือทำอะไรบ้าง? เพื่อที่จะได้หลุดออกมาจากเหตุการณ์นั้นนักลงทุนส่วนใหญ่ มักตั้งคำถามว่า \"มีวิธีการลงทุนแบบไหน ที่จะช่วยให้ประสบความสำเร็จ\" แต่เนื้อหาทั้งหมดของหนังสือเล่มนี้ ตั้งคำถามกลับว่า \"มีวิธีการลงทุนแบบไหนบ้าง ที่ทำให้เราพบกับความล้มเหลว\" ถ้าหากเราอ่านหนังสือที่สอนวิธีประสบความสำเร็จมามากแล้ว หนังสือเล่มนี้จะเป็นอีกหนึ่งเล่มที่ทุกคนควรอ่าน อย่างน้อยก็เพื่อทำให้ทุกคนมั่นใจได้ว่า \"ความสำเร็จที่สร้างมาทั้งหมดนั้น จะไม่ลอยหายไป เพราะ BLACK SWAN\"",
                is_fav: false
            },
            {
                id: 13,
                type: "Business",
                type_id: 3,
                author: "นภดล ร่มโพธิ์",
                name: "ใช้ OKRs อย่างไรให้สำเร็จ",
                images:'./assets/img/303.jpeg',
                publish: "เอ็นพี อินเทลลิเจนซ์",
                title: "เป็นหนังสือที่รวบรวมเนื้อหาเกี่ยวกับ OKRs ได้อย่างครบถ้วนสมบูรณ์ ทั้งหลักการและการนำไปใช้จริง สามารถใช้เป็นคู่มือที่จะช่วยนำพาองค์กรให้สำเร็จไปพร้อมๆ กับสร้างความสุขของพนักงานในการใช้ OKRs ด้วย",
                is_fav: false
            },
            {
                id: 14,
                type: "Business",
                type_id: 3,
                author: "พัคฮยองจุน",
                name: "BTS Marketing กลยุทธ์ครองตลาดโลก",
                images:'./assets/img/304.jpeg',
                publish: "Amarin Howto",
                title:" การตลาดแบบ BTS (บังทันโซนยอดัน) เป็นหนังสือที่ผู้เขียนมุ่งอธิบายถึง BTS ในเชิงธุรกิจและในฐานะโมเดล การตลาดที่ประสบความสำเร็จสูงสุดในวงการเคป๊อบในขณะนี้ โดยหนังสือประกอบด้วย 3 ส่วนใหญ่ๆ ได้แก่  1. กล่าวถึงที่มาที่ไปของ BTS และวิเคราะห์ความเข้าใจผิดว่าเป็น วงที่ถูกออกแบบมาเพื่อพิชิตดินแดนตะวันตก แท้จริงแล้วเป็นอย่างไร  / 2. 4 เสาหลักความสำเร็จของ BTS ได้แก่ Timing (จังหวะเวลา), Targeting (การกำหนดเป้าหมาย), Whole Product (ผลิตภัณฑ์อันครบเครื่อง) และ Viral (ไวรัล) / 3. การปฏิวัติทางการตลาดที่มองเห็นได้ผ่าน BTS ประกอบไปด้วย 4 ส่วนใหญ่ๆ เหมือนพาร์ท 2 ได้แก่ การกล่าวถึงยุคสมัยที่ผู้บริโภคเป็นดั่งพระเจ้าที่ต้องใส่ใจ จังหวะเวลาที่เหมาะสมกับการกระโจนเข้าสู่ตลาด คำแนะนำเกี่ยวกับการเป็นนักการตลาดในยุคปัจจุบัน สุดท้ายจะกล่าวถึงโอกาสในการทำการตลาดแบบ BTS หลังจากศึกษาทฤษฎีไปมากมาย",
                is_fav: false
            },
            {
                id: 15,
                type: "Business",
                type_id: 3,
                author: "ภัทรนิษฐ์ สิทธิวัชราศักดิ์",
                name: "Instagram Marketing",
                images:'./assets/img/305.jpeg',
                publish: "Infopress",
                title:"เป็นหนังสือที่เรียงเรียงจากประสบการณ์ตรงของผู้เขียนที่ได้ทำธุรกิจบน IG จริงๆ และเดินสายอบรมบรรยายเกี่ยวกับการตลาดบน IG หนังสือเริ่มต้นด้วยการทำความเข้าใจกลุ่มคนที่ใช้งานบน IG ซึ่งส่วนมากแล้วจะใช้อารมณ์มากกว่าเหตุผลในการตัดสินใจซื้อ นั่นเป็นเหตุผลที่เราจำเป็นต้องมีการคุมโทน IG สร้างตัวตนสร้างความน่าเชื่อถือบนโปรไฟล์ จึงเป็นเรื่องที่ต้องใส่ใจ ก่อนที่จะเริ่มโพสต์ขายสินค้า บทวิเคราะห์ดูสถิติโพสต์ก่อนที่จะยิงแอด นั่นทำให้หนังสือเล่มนี้ครบเครื่องไปทั้งเรื่องของการตลาดและการขายในเล่มเดียว",
                is_fav: false
            },
            {
                id: 16,
                type: "Garden",
                type_id: 4,
                author: "กองบก.นิตยสารบ้านและสวน",
                name: "บ้านและสวนฉ.พิเศษ Wooden Houses รวมบ้านฯ",
                images:'./assets/img/401.jpeg',
                publish: "บ้านและสวน",
                title:"รวมไอเดีย 12 บ้านไม้ ซึ่งได้รับความนิยมมาตลอดของบ้านและสวน สำหรับเป็นแรงบันดาลใจให้คนที่ใฝ่ฝันอยากจะมีบ้านไม้ของตัวเองสักหลัง ด้วยเพราะหลงรักในเสน่ห์ของลวดลายตามธรรมชาติของไม้ ภายในเล่มจึงมีทั้งบ้านที่สร้างจากไม้ทั้งหลัง บ้านที่ผสมผสานระหว่างไม้เก่ากับไม้ใหม่ และบ้านไม้ที่ประกอบเข้ากับวัสดุสมัยใหม่เพื่อให้ดูแลรักษาง่ายขึ้น ประหยัดงบประมาณ และยังคงได้ความอบอุ่นแบบธรรมชาติของไม้",
                is_fav: false
            },
            {
                id: 17,
                type: "Garden",
                type_id: 4,
                author: "เอชิโอ มานชินี่",
                name: "เมืองพอดี แนวคิดเพื่อเมืองเอาใจใส่",
                images:'./assets/img/402.jpeg',
                publish: "อินี่เครือข่ายนวัตกร",
                title:"เมืองพอดี นับว่าเป็นหนังสือที่ให้แรงดลใจที่จะปรับสร้างเมืองตามนักคิดด้านการออกแบบผู้ประสบความสำเร็จอย่างสูงในยุคสมัยของเรา",
                is_fav: false
            },
            {
                id: 18,
                type: "Garden",
                type_id: 4,
                author: "กองบรรณาธิการนิตยสาร Room",
                name: "Minimalist House for Tropical Living บ้านมินิมัล วิถีทรอปิคัล",
                images:'./assets/img/403.jpeg',
                publish: "บ้านและสวน",
                title:"Minimalist House for Tropical Living บ้านมินิมัล วิถีทรอปิคัล",
                is_fav: false
            },
            {
                id: 19,
                type: "Garden",
                type_id: 4,
                author: "วรัปศร อัคนียุทธ,ภัทริน จิตรกร",
                name: "MODERN HOME FEELING GREEN บ้านที่รื่นรมย์ด้วยต้นไม้",
                images:'./assets/img/404.jpeg',
                publish: "บ้านและสวน",
                title:"บ้านโมเดิร์นนับว่าเป็นบ้านที่เหมาะกับการอยู่อาศัยในยุคปัจจุบัน เพราะทั้งอยู่สบายดูแลรักษาง่าย และมีความสวยงามทันสมัย สำหรับบ้านยุคใหม่นอกจากเรื่องดีไซน์แล้วสิ่งหนึ่งที่เจ้าของบ้านหันมาให้ความสำคัญคือการออกแบบบ้านให้อยู่ร่วมกับธรรมชาติซึ่งเป็นองค์ประกอบสำคัญที่ทำให้บ้านโมเดิร์นเส้นสายแข็งๆ เรียบๆ มีบรรยากาศน่าอยู่ยิ่งขึ้น บ้านที่มีแสงแดดลอดเข้ามาทำให้บ้านโปร่งสว่าง กำหนดให้มีการบังแดดในทิศที่เหมาะสมและเปิดรับลมในทิศที่พอดีทำให้บ้านไม่อับทึบ เย็นสบาย ปลูกต้นไม้รอบบ้านทำให้บ้านร่มรื่น ไม่ร้อน และสร้างสภาพแวดล้อมที่ดีให้กับบ้าน Modern Home FeelingGreen บ้านที่รื่นรมย์ด้วยต้นไม้ เล่มนี้รวบรวมบ้านโมเดิร์นหลังสวยหลากหลายรูปแบบที่เหมาะกับบรรยากาศเมืองร้อนที่ออกแบบอย่างเข้าใจและใส่ใจธรรมชาติ ทั้งบ้านที่มีพื้นที่สวนกว้างขวาง บ้านที่เปิดรับวิวสวน บ้านที่ออกแบบปิดล้อมอย่างเป็นส่วนตัวแต่มีต้นไม้ซ่อนอยู่ภายใน บ้านที่เปิดคอร์ตตรงกลางเพื่อปลูกต้นไม้และเปิดรับแสงแดดและลมบ้านที่มีพื้นที่จำกัดแต่สร้างพื้นที่สีเขียวให้รายล้อมรอบตัวได้อย่างลง",
                is_fav: false
            },
            {
                id: 20,
                type: "Garden",
                type_id: 4,
                author: "ทิพาพรรณ ศิริเวชฎารักษ์",
                name: "15 BEST GARDENS",
                images:'./assets/img/405.jpeg',
                publish: "บ้านและสวน",
                title:" หนังสือเล่มนี้ได้รวบรวมสวนหลากหลายรูปแบบที่เป็นผลงานเด่นของ15 นักจัดสวนชั้นนำของเมืองไทย อาทิ คุณวรวุฒิ แก้วสุก, คุณศิริวิทย์ ริ้วบำรุง, อ.พิศาล ตันสิน, อาจารย์ขวัญชัย จิตสำรวย, สวนลีลา, อยู่กับดินทร์ , Sukyen Garden, Murraya Garden ฯลฯ ซึ่งนักจัดสวนแต่ละรายได้เปิดเผยเทคนิคการออกแบบจัดสวน และการเลือกใช้พรรณไม้ วัสดุ รวมถึงการสร้างจุดเด่นและคาแรกเตอร์ต่างๆในสวน พร้อมเกร็ดความรู้ในการจัดและตกแต่งสวนให้สวยงามอยู่เสมอ",
                is_fav: false
            },
            {
                id: 21,
                type: "Novel",
                type_id: 5,
                author: "าวางุจิ โทชิคาซึ (Toshikazu Kawaguchi)",
                name: "เพียงชั่วเวลากาแฟยังอุ่น ระหว่างที่ความทรงจำยังไม่เลือนหาย",
                images:'./assets/img/501.jpeg',
                publish: "แพรวสํานักพิมพ์",
                title:"\"คุณสามารถอยู่ในอดีตได้จนกว่ากาแฟจะเย็นลง\" ชายสี่คนที่มาที่ร้านกาแฟลึกลับ Funiculi Funicula อยากย้อนเวลากลับไปจริงๆ อะไรคือความปรารถนาที่แท้จริงที่คุณไม่สามารถพูดได้...  ในเมืองแห่งหนึ่ง ในร้านกาแฟแห่งหนึ่ง มีตำนานเมืองลึกลับอยู่ในร้านกาแฟแห่งหนึ่ง ถ้าคุณนั่งที่เบาะนั้น คุณสามารถกลับไปสู่เวลาที่ต้องการได้ ร้านกาแฟเล็กๆ ร้านหนึ่งที่ลือกันว่าเมื่อมาที่ร้านนี้แล้วจะสามารถย้อนกลับไปในอดีตได้ โดยมีกฎอยู่ว่า1.  แม้กลับไปในอดีตแล้ว ก็ไม่สามารถเจอคนที่ไม่ได้มาเยือนร้านกาแฟนี้ได้                             2. แม้กลับไปในอดีต แต่ไม่ว่าจะพยายามแค่ไหน ความเป็นจริงก็ไม่เปลี่ยนแปลง 3. หากในอดีตที่ย้อนกลับไปมีลูกค้านั่งอยู่ จะไม่สามารถย้อนอดีตกลับไปได้ นอกจากลูกค้าคนนั้นจะลุกออกไปเท่านั้น 4. แม้จะย้อนไปในอดีต แต่จะไม่สามารถลุกหรือย้ายออกจากที่นั่งได้ 5. การจะกลับไปในอดีตได้คือหลังจากที่รินกาแฟใส่ถ้วยแล้วและอยู่ได้แค่ช่วงก่อนที่กาแฟนั้นจะเย็นชืดเท่านั้น และนอกจากจะย้อนอดีตแล้วก็ยังสามารถไปอนาคตได้อีกด้วย นิยายเรื่องนี้จะทำให้คุณเข้าใจความหมายที่แท้จริงของการย้อนเวลา นี่ไม่ใช่กฎที่น่ารำคาญเพียงอย่างเดียว อย่างไรก็ตาม ลูกค้าที่ได้ยินข่าวลือเรื่องตำนานเมืองก็ยังมาเยี่ยมชมร้านกาแฟแห่งนี้อยู่ในปัจจุบัน ร้านกาแฟชื่อ Funiculi Funicula ถ้าคุณเคยได้ยินกฎเหล่านี้มาหมดแล้ว ยังอยากย้อนอดีตอยู่ไหม",
                is_fav: false
            },
            {
                id: 22,
                type: "Novel",
                type_id: 5,
                author: "N.K. Jemisin (เอ็น. เค. เจมิซิน)",
                name: "ศิลาหาว",
                images:'./assets/img/502.jpeg',
                publish: "Salt Publishing",
                title:"ดวงจันทร์กำลังจะกลับมา นี่อาจเป็นจุดจบของมนุษยชาติ หรือนำไปสู่บางอย่างที่เลวร้ายยิ่งกว่า... ชะตากรรมของโลกทั้งใบอยู่ในกำมือเธอทั้งสอง... \"เอสซุน\" รับสืบทอดภารกิจจากอะลาบาสเตอร์มา ด้วยพลังใหม่ที่ค้นพบ เธอหวังว่าจะได้ตามหานัสซุนลูกสาวผู้พลัดพราก และสร้างโลกที่เด็กโอโรจินทุกคนสามารถเติบโตอย่างปลอดภัย... สำหรับ \"นัสซุน\" ทุกอย่างสายเกินไปแล้ว เรื่องเลวร้ายที่ได้ประสบ ทำให้เธอเห็นความจริงที่ผู้เป็นแม่ไม่มีวันยอมรับ... นั่นคือ ของบางอย่างก็ชำรุดเกินกว่าจะซ่อมแซม มีแต่ต้องทำลายให้สิ้นซากเท่านั้น…",
                is_fav: false
            },
            {
                id: 23,
                type: "Novel",
                type_id: 5,
                author: "PANNAKAN",
                name: "ANNA TEREZA ค้นฝันพลิกจักรวาล",
                images:'./assets/img/503.jpeg',
                publish: "ขีดเขียนอะคาเดมี",
                title:"เทเรช่า โอเมก้า เชเป็ยนส์ และพรรคพวกสละชีวิตของตนในภารกิจทำลายออลตรีมเพื่อปกป้องชีวิตในจักรวาลจากภัยรุกรานของเหล่าออพสแตทส์เธอถูกคืนชีพกลับมาอีกครั้ง เพียงลำพังได้รับตำแหน่งเป็น เชอไนท์ ผู้อยู่เหนือทุกสิ่งได้ครองอำนาจสั่งการทุกฝ่ายในสหพันธมิตรจักรวรรดิเดียวที่ปกครองจักรวาลเอาท์เตอรีมเธอถูกสร้างมาให้ทำตามคำสั่ง แต่เมื่อไม่มีใครสามารถสั่งเธอได้อีกแล้วเทเรซ่าจะเลือกทำอะไร ?แอนนา ชานิ เด็กหญิงกำพร้าที่สูญเสียครอบครัวได้รับมรดกเป็นทรัพย์สินที่มากเกินกว่าเธอจะใช้เองได้หมดชีวิตในโลกที่สงบสุขและสะดวกสบายพร้อมเส้นทางมากมายที่เธอเลือกได้ความฝันประหลาดที่ไม่มีใครเข้าใจ กลายเป็นสิ่งเดียวที่เธอเลือกจะค้นหามันความฝันจะพาแอนนาไปพบกับอะไร ?ในจักรวาลอันกว้างใหญ่...ที่ความเป็นไปได้มีอยู่นับไม่ถ้วน...แอนนา และ เทเรช่าจะเลือกสิ่งใดให้คุณรู้",
                is_fav: false
            },
            {
                id: 24,
                type: "Novel",
                type_id: 5,
                author: "เอโกะ คาโดโนะ",
                name: "แม่มดกิกิผจญภัย 2ต.กิกิกับเวทมนตร์บทใหม่",
                images:'./assets/img/504.jpeg',
                publish: "Bibli (บิบลิ)",
                title:" สักวันหนึ่งเวทมนตร์ที่สูญหายไปแล้วอาจกลับมาใช้ได้อีกครั้ง...กิกิและจิจิเดินทางกลับมาที่เมืองโคริโกะอีกครั้งเพื่อดำเนินกิจการไปรษณีย์ด่วนแม่มดต่อไป แม่มดน้อยยังคงตั้งใจส่งสิ่งของต่าง ๆ รวมถึงหัวใจอันอ่อนโยนของผู้ส่งให้ถึงมือผู้รับ อาทิเช่นจัดส่งส่งคุณมารูโกะ ฮิปโปโปน้อยหางขาด จนป่วยเป็นโรคจุดศูนย์กลางฯ ศูนย์หายให้ไปรักษาตัวที่โรงพยาบาล จัดส่งรองเท้าสีแดงที่หายไปให้คนในอดีตที่ยังรู้สึกติดค้างจัดส่งเสียงต้นไม้ร้องเพลงให้ใครบางคนจัดส่งความคิดถึงและความห่วงใยให้คนรักที่อยู่ห่างไกลกันแม้จะทำงานอย่างมุ่งมั่นที่จะส่งต่อสิ่งดี ๆ ให้แก่ผู้คนมากมาย แต่กิกิก็ยังเจอเหตุการณ์ที่ทำให้สงสัยในตัวเองว่า เธอควรจะเป็นแม่มดต่อไปหรือไม่",
                is_fav: false
            },
            {
                id: 25,
                type: "Novel",
                type_id: 5,
                author: "เอโกะ คาโดโนะ",
                name: "แม่มดกิกิผจญภัย ตอน ไปรษณีย์ด่วนแม่มด",
                images:'./assets/img/505.jpeg',
                publish: "Bibli (บิบลิ)",
                title:"ก่อนอายุสิบขวบ กิกิโตมาแบบเด็กผู้หญิงธรรมดาคนหนึ่ง…จนเมื่ออายุครบสิบขวบได้สักพักแล้วได้ยินเพื่อนพูดว่า\“ฉันจะเจริญรอยตามแม่ไปเป็นช่างเสริมสวยละ\”กิกิจึงเริ่มคิดเรื่องการ \“เจริญรอยตาม\” แม่บ้าง...ถึงอย่างนั้นกิกิกลับคิดไม่ตก เพราะไม่อยากคิดง่ายๆ แค่ว่าในเมื่อแม่เป็นแม่มด ฉันก็ต้องเป็นเหมือนกัน…การเดินทางตามหาสถานที่ลงหลักปักฐานของกิกิ แม่มดน้อยวัยสิบสามปี กับจิจิ แมวดำคู่ใจเป็นเวลาหนึ่งปีตามธรรมเนียมเก่าแก่ของผู้สืบเชื้อสายแม่มดกิกิต้องค้นหาสิ่งที่ตัวเองจะทำได้และมุ่งมั่นกับเส้นทางที่เลือกด้วยตัวเองครั้งแรกท่ามกลางสถานที่และผู้คนที่ไม่คุ้นเคย กิกิผู้มีความสามารถเพียงการขี่ไม้กวาดจะใช้ชีวิตด้วยตัวเองสำเร็จหรือไม่",
                is_fav: false
            },
        ],
        wish : []
    },
    methods: {
        addshowiaaa(items){
            let keep = JSON.stringify(items);
            localStorage.setItem("show", keep);
            window.location.href = "./books.html";
        },
        addwish(items){
            if(items.is_fav === false){
                this.wish.push(items)
                items.is_fav = true
            }
        },
        setwish(all){
            let keep1 = JSON.stringify(all)
            localStorage.setItem("show1", keep1)
        }
     },
})