// export default function importAll(r) {
//   let images = {};
//   r.keys().forEach((item) => {
//     images[item.replace('./', '')] = r(item);
//   });
//   return images;
// }

// const images = importAll(require.context('./src/assets', false, /\.(png|jpe?g|svg)$/));

import pic from './src/assets/anhNenPhim.png' 
export const dataPhimDeCu = [
    {title:"Phim Đề Cử",
    flim:[
        {   
            idphim:1,
            img:pic,
            // img:images['anh.jpg'],
            quality:"Hoàn tất(12/12)",
            title:"Phó Luật Seocho"
        },
        {
            idphim:2,
            img:pic,
            quality:"Tập 4-Vietsub",
            title:"Hoa Sơn Luận Kiếm"
        },
        {
            idphim:3,
            img:pic,
            quality:"Tập 25-Vietsub",
            title:"Phàm Nhân Tu Tiên ..."
        },
        {
            idphim:4,
            img:pic,
            quality:"HD-Vietsub",
            title:"Phong Thần 2"
        },
        {
            idphim:5,
            img:pic,
            quality:"Tập 4-Vietsub",
            title:"Wednesday (Phần 2)"
        },
        {
            idphim:6,
            img:pic,
            quality:"HD-Vietsub",
            title:"Na Tra 2"
        },
        {
            idphim:7,
            img:pic,
            quality:"HD-Vietsub",
            title:"Thế Giới Không Đồng"
        },
        {
            idphim:8,
            img:pic,
            quality:"HD-Vietsub",
            title:"Huyệt Ấn Truy Hồn"
        }
    ]},
]
export const dataPhimLe =[
    {
        title: "PHIM LẺ MỚI CẬP NHẬT",
        list:[
            {
                id:1,
                title:"Hành động",
            },
            {
                id:1,
                title:"Hoạt hình",
            },
            {
                id:1,
                title:"Kinh dị",
            },
            {
                id:1,
                title:"Hài hước",
            }
        ],
        flim:[
        {   
            idphim:1,
            img:pic,
            quality:"HD-Vietsub",
            title:"Blood Brothers"
        },
        {
            idphim:2,
            img:pic,
            quality:"HD-Vietsub",
            title:"Giờ Thả Máu"
        },
        {
            idphim:3,
            img:pic,
            quality:"HD-Vietsub",
            title:"Phi Vụ Kim Cương"
        },
        {
            idphim:4,
            img:pic,
            quality:"HD-Vietsub",
            title:"Phong Thần 2"
        },
        {
            idphim:5,
            img:pic,
            quality:"HD-Vietsub",
            title:"Buôn Bán Thần Thánh"
        },
        {
            idphim:6,
            img:pic,
            quality:"HD-Vietsub",
            title:"Na Tra 2"
        },
        {
            idphim:7,
            img:pic,
            quality:"HD-Vietsub",
            title:"Thế Giới Không Đồng"
        },
        {
            idphim:8,
            img:pic,
            quality:"HD-Vietsub",
            title:"Huyệt Ấn Truy Hồn"
        }
    ]
    }
]
export const dataPhimBoMoi =[
    {
        title: "PHIM BỘ MỚI CẬP NHẬT",
        list:[
            {
                id:1,
                title:"Hàn Quốc",
            },
            {
                id:1,
                title:"Trung Quốc",
            },
            {
                id:1,
                title:"Âu - Mỹ",
            },
            {
                id:1,
                title:"Phim Bộ Full",
            }
        ],
        flim:[
        {   
            idphim:1,
            img:pic,
            quality:"Tập 6-Vietsub",
            title:"Đội Tuyển Kỳ Tích"
        },
        {
            idphim:2,
            img:pic,
            quality:"Hoàn Tất(12/12)",
            title:"Phó Luật Seocho"
        },
        {
            idphim:3,
            img:pic,
            quality:"Tập 4-Vietsub",
            title:"Giấc Mơ Người Luật Sư"
        },
        {
            idphim:4,
            img:pic,
            quality:"Tập 9-Vietsub",
            title:"Hoa Sơn Luận Kiếm"
        },
        {
            idphim:5,
            img:pic,
            quality:"Tập 12-Vietsub",
            title:"Cẩm Nguyệt Như Ca"
        },
        {
            idphim:6,
            img:pic,
            quality:"Tập 25-Vietsub",
            title:"Phàm Nhân Tu Tiên Truyện"
        },
        {
            idphim:7,
            img:pic,
            quality:"Tập 12-Vietsub",
            title:"Thế Giới Không Đồng"
        }
    ]
    }
]

export const dataPhimChieuRap =[
    {
        title: "PHIM CHIẾU RẠP MỚI",
        list:[
            {
                id:1,
                title:"2023",
            },
            {
                id:1,
                title:"2022",
            },
            {
                id:1,
                title:"2021",
            },
            {
                id:1,
                title:"2020",
            }
        ],
        flim:[
        {   
            idphim:1,
            img:pic,
            quality:"CAM-Vietsub",
            title:"Bộ Tứ Siêu Đẳng"
        },
        {
            idphim:2,
            img:pic,
            quality:"HD-Vietsub",
            title:"Phong Thần 2"
        },
        {
            idphim:3,
            img:pic,
            quality:"HD-Vietsub",
            title:"Giờ Thả Máu"
        },
        {
            idphim:4,
            img:pic,
            quality:"HD-Vietsub",
            title:"Buôn Bán Thần Thánh"
        },
        {
            idphim:5,
            img:pic,
            quality:"TS-Vietsub",
            title:"Superman"
        },
        {
            idphim:6,
            img:pic,
            quality:"HD-Vietsub",
            title:"Bí Kíp Luyện Rồng"
        },
        {
            idphim:7,
            img:pic,
            quality:"HD-Vietsub",
            title:"M3GAN 2.0"
        }
    ]
    }
]

export const dataPhimThinhHanh =[
    {
        title: "PHIM THỊNH HÀNH",
        list:[
            {
                id:1,
                title:"Phim Lẻ Thịnh hành",
            },
            {
                id:1,
                title:"Phim Bộ Thịnh hành",
            }
        ],
        flim:[
        {   
            idphim:1,
            img:pic,
            quality:"Tập 25-Vietsub",
            title:"Phàm Nhân Tu Tiên Truyện"
        },
        {
            idphim:2,
            img:pic,
            quality:"HD-Vietsub",
            title:"Phong Thần 2"
        },
        {
            idphim:3,
            img:pic,
            quality:"Tập 12-Vietsub",
            title:"Cẩm Nguyệt Như Ca"
        },
        {
            idphim:4,
            img:pic,
            quality:"Tập 4-Vietsub",
            title:"Wednesday (Phần 2)"
        },
        {
            idphim:5,
            img:pic,
            quality:"HD-Vietsub",
            title:"Na Tra 2"
        },
        {
            idphim:6,
            img:pic,
            quality:"HD-Vietsub",
            title:"Hoa Sơn Luận Kiếm"
        }
    ]
    }
]

export const dataPhimMoiSapChieu =[
    {
        title: "PHIM MỚI SẮP CHIẾU",
        list:[
            {
                id:1,
                title:"",
            },
            {
                id:1,
                title:"",
            }
        ],
        flim:[
        {   
            idphim:1,
            img:pic,
            quality:"",
            title:"F1"
        },
        {
            idphim:2,
            img:pic,
            quality:"",
            title:"Doraemon Movie 44"
        },
        {
            idphim:3,
            img:pic,
            quality:"",
            title:"Nhiệm Vụ Bất Khả Thi"
        },
        {
            idphim:4,
            img:pic,
            quality:"",
            title:"Đất Nước Của Phản Diện"
        },
        {
            idphim:5,
            img:pic,
            quality:"",
            title:"Panor: Tà Thuật Huyết Ngải"
        },
        {
            idphim:6,
            img:pic,
            quality:"",
            title:"Rider: Giao Hàng Cho Ma"
        },
        {
            idphim:7,
            img:pic,
            quality:"",
            title:"Nhóc Quỷ Và Khu Rừng Kỳ Diệu"
        },
        {
            idphim:8,
            img:pic,
            quality:"",
            title:"Thiên Tài Ném Phao"
        }
    ]
    }
]