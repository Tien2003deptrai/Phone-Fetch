import product_8 from '../assets/img8.png';
import product_9 from '../assets/img9.png';
import product_10 from '../assets/img10.png';
import product_11 from '../assets/img11.png';
import product_12 from '../assets/img12.png';
import product_13 from '../assets/img13.png';
import product_14 from '../assets/img14.png';
import product_15 from '../assets/img15.png';


const DATA = [
    {
        id: 0,
        title: "IPhone 11",
        price: 750,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/v/n/vn_iphone_15_blue_pdp_image_position-1a_blue_color_1_4.jpg"
    },
    {
        id: 1,
        title: "IPhone 11 Pro Max",
        price: 800,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/v/n/vn_iphone_15_yellow_pdp_image_position-1a_yellow_color_1_4.jpg"
    },
    {
        id: 2,
        title: "IPhone 12 Mini",
        price: 950,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/v/n/vn_iphone_15_black_pdp_image_position-1a_black_color_1_4.jpg"
    },
    {
        id: 3,
        title: "IPhone 12",
        price: 1050,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/v/n/vn_iphone_15_green_pdp_image_position-1a_green_color_1_4.jpg"
    },
    {
        id: 4,
        title: "IPhone 12 Pro",
        price: 1150,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png"
    },
    {
        id: 5,
        title: "IPhone 12 Pro Max",
        price: 1270,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/v/n/vn_iphone_15_pink_pdp_image_position-1a_pink_color_1_3.jpg"
    },
    {
        id: 6,
        title: "IPhone 15 Pro",
        price: 2000,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/o/p/op-lung-apple-iphone-15-chinh-hang-10.png"
    },
    {
        id: 7,
        title: "IPhone 12 Pro Max",
        price: 1270,
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/o/p/op-lung-apple-iphone-15-chinh-hang-05_1.png"
    },
    {
        id: 8,
        title: "Samsung Galaxy S21",
        price: 1100,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: product_8
    },
    {
        id: 9,
        title: "Google Pixel 6",
        price: 950,
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        img: product_9
    },
    {
        id: 10,
        title: "OnePlus 9",
        price: 999,
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        img: product_10
    },
    {
        id: 11,
        title: "Xiaomi Mi 11",
        price: 800,
        desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        img: product_11
    },
    {
        id: 12,
        title: "Huawei P40",
        price: 900,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        img: product_12
    },
    {
        id: 13,
        title: "Sony Xperia 5 III",
        price: 1200,
        desc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        img: product_13
    },
    {
        id: 14,
        title: "LG Velvet",
        price: 750,
        desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        img: product_14
    },
    {
        id: 15,
        title: "Motorola Edge",
        price: 850,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: product_15
    },

]
const USERS = [
    { id: 1, email: 'duongvantiendtu@gmail.com', password: 'Tien2003@', name: 'Duong Tien' },
    { id: 2, email: 'thanhnhan@gmail.com', password: 'Tien2003@', name: 'Thanh Nhan' },
];



export { DATA, USERS };
