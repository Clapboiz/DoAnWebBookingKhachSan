import React from 'react'
import { getHotelDetail } from '../api/PageApi';
import UserInfoComponent from '../components/UserInfoComponent';
import SubNavMain from '../components/Homepage/SubNavMain';
// import MultiitemCarousel from '../components/MultiitemCarousel';
import { Link } from "react-router-dom";
import '../style/navbar.scss'
import '../style/HotelDetail.scss'

import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import NavBar from '../components/NavBar';

class HotelDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ten: "",
            diachi: "",
            diem: "",
            danhgia: [],
            images: [],
            mota: ""
        };
    }

    async componentDidMount() {
        const id = localStorage.getItem("hoteldetailID");
        const detail = await getHotelDetail(id);
        console.log(detail);

        this.setState(
            {
                ten: detail.name,
                diachi: detail.address,
                diem: detail.score,
                danhgia: detail.uandr,
                anh: detail.images,
                mota: detail.description,
                images: detail.imgs
            }
        );
        if (this.state.images != null) {
            this.setState(
                {
                    bigImg1: this.state.images.shift(),
                    bigImg2: this.state.images.shift(),
                    smallImg1: this.state.images.shift(),
                    smallImg2: this.state.images.shift(),
                    // smallImg3: this.state.images.shift(),
                }
            );
        }
        console.log(this.state);
    }

    scrollToQuyTac(event) {

    }

    render() {
        // TODO: 
        // substitude the info 
        return <>
            {/* <h1>{this.state.ten}</h1>
            <button>Dat Can Ho</button>
            <p>{this.state.diachi}</p> */}
            {/* <div className='danhgia'>
                <p>{this.state.diem}</p>
                <p>{this.state.danhgia.length}</p>
                {this.state.danhgia.map((danhgia, index) => (
                    <p key={index}>{danhgia}</p>))}

            </div> */}
            {/* <div className='anh'> */}
            {/* <img className="big-right-image" src={this.state.bigImg} alt={'Anh lon ben trai'} /> */}
            {/* <div>
                    <img className="small-left-image" src={this.state.smallImg1} alt={'Anh nho 1 ben phai'} />
                    <img className="small-left-image" src={this.state.smallImg2} alt={'Anh nho 2 ben phai'} />
                </div> */}

            {/* <div className='listanhconlai'> */}
            {/* TODO: Should hide when too much, vd: exceed the 10 images */}
            {/* {this.state.images.length > 0 && this.state.images.map((anh, index) => (
                        <img key={index} src={anh} alt="Anh bi hu r :v" />))} */}
            {/* </div> */}
            {/* </div> */}

            {/* <div className='boxtimphong'>
                boxtimphong
                <button>Tim</button>
            </div>

            <div className='bando'>
                <button>Hien thi tren ban do</button>
            </div> */}

            <div className="homepage">
                <div className="main">
                    <Link to="/" className="main-child">
                        <img className="main-child" alt="" src="/logo__web.png" />
                    </Link>
                    <NavBar/>
                    <UserInfoComponent />
                </div>
            </div>
            {/* <div className='test-buttons'><button type="button" className="btn btn-primary">8.9</button></div> */}
            <div className='main-content-container-new'>
                <div className='left-content-container'>
                    <b>Sidebar trong /searchpage</b>
                </div>
                <div className='right-content-container'>
                    <div className='top-text'>
                        <div className='first-text'>
                            <button>Tổng quan</button>
                        </div>
                        <div className='third-text'>
                            <button onClick={this.scrollToQuyTac}>Quy tắc chung</button>
                        </div>
                        <div className='fourth-text'>
                            <button>Đánh giá của khách hàng</button>
                        </div>
                        <div style={{backgroundColor: 'orange'}} className='btn btn-primary btn-login'>
                            <button style={{color: 'white'}}><b>ĐẶT PHÒNG</b></button>
                        </div>
                    </div>
                    <hr />
                    <div className='image-content'>
                        <div className='top-image'>
                            {/* <img src='https://i.pinimg.com/564x/f8/90/1e/f8901e8af1fd97a5b8dc09ed26d71886.jpg' alt="" className="top-item-img"></img>
                            <img src='https://i.pinimg.com/564x/f8/90/1e/f8901e8af1fd97a5b8dc09ed26d71886.jpg' alt="" className="top-item-img"></img> */}
                            {/* <img src='https://i.pinimg.com/564x/f8/90/1e/f8901e8af1fd97a5b8dc09ed26d71886.jpg' alt="" className="top-item-img"></img> */}

                            <img src={this.state.bigImg1} alt="" className="top-item-img"></img>
                            <img src={this.state.bigImg2} alt="" className="top-item-img"></img>
                        </div>
                        <div className='bottom-image'>
                            <img src={this.state.smallImg1} alt="" className="top-item-img"></img>
                            <img src={this.state.smallImg2} alt="" className="top-item-img"></img>
                            <img src={this.state.smallImg2} alt="" className="top-item-img"></img>

                            {/* <img src={this.state.images[4]} alt="" className="top-item-img"></img> */}
                            {/* <img src='https://i.pinimg.com/564x/f8/90/1e/f8901e8af1fd97a5b8dc09ed26d71886.jpg' alt="" className="top-item-img"></img>
                            <img src='https://i.pinimg.com/564x/f8/90/1e/f8901e8af1fd97a5b8dc09ed26d71886.jpg' alt="" className="top-item-img"></img>
                            <img src='https://i.pinimg.com/564x/f8/90/1e/f8901e8af1fd97a5b8dc09ed26d71886.jpg' alt="" className="top-item-img"></img> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='description'>
                {this.state.mota.split(".").map((value, index) => (
                    <p key={index}>{value}</p>))}
            </div>
            <div className="Destination-icon-decor-new">
                <img
                    className="Destination-icon--red-new"
                    alt=""
                    src="/Destination-icon--red.svg"
                />
                <b>Đánh giá của khách hàng</b>
                <MDBContainer className="Multi-container py-5">
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol md="10" xl="8" className="text-center">
                            <h3 className="mb-4">Testimonials</h3>
                            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                error amet numquam iure provident voluptate esse quasi, veritatis
                                totam voluptas nostrum quisquam eum porro a pariatur veniam.
                            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="text-center">
                        {/* {this.state.mota.split(".").map((value, index) => (
                            <p key={index}>{value}</p>))} */}
                        <MDBCol md="4" className="mb-5 mb-md-0">
                            <div className="d-flex justify-content-center mb-4">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                    className="rounded-circle shadow-1-strong"
                                    width="150"
                                    height="150"
                                />
                            </div>
                            {/* {console.log("user", this.state.danhgia[0])} */}
                            {/* <h5 className="mb-3">{this.state.danhgia[0].user.username}</h5> */}
                            {/* <h6 className="text-primary mb-3">{this.state.danhgia[0].user.firstName + " " + this.state.danhgia[0].user.lastName}</h6>
                            <p className="px-xl-3">
                                jt mejc dishdiufasufdsa dijt mj cuocj d{this.state.danhgia[0].review.content}
                            </p> */}
                            <MDBTypography
                                listUnStyled
                                className="d-flex justify-content-center mb-0"
                            >
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon
                                        fas
                                        icon="star-half-alt"
                                        size="sm"
                                        className="text-warning"
                                    />
                                </li>
                            </MDBTypography>
                        </MDBCol>

                        <MDBCol md="4" className="mb-5 mb-md-0">
                            <div className="d-flex justify-content-center mb-4">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                    className="rounded-circle shadow-1-strong"
                                    width="150"
                                    height="150"
                                />
                            </div>
                            <h5 className="mb-3">Lisa Cudrow</h5>
                            <h6 className="text-primary mb-3">Graphic Designer</h6>
                            <p className="px-xl-3">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                suscipit laboriosam, nisi ut aliquid commodi.
                            </p>
                            <MDBTypography
                                listUnStyled
                                className="d-flex justify-content-center mb-0"
                            >
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol md="4" className="mb-5 mb-md-0">
                            <div className="d-flex justify-content-center mb-4">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                    className="rounded-circle shadow-1-strong"
                                    width="150"
                                    height="150"
                                />
                            </div>
                            <h5 className="mb-3">John Smith</h5>
                            <h6 className="text-primary mb-3">Marketing Specialist</h6>
                            <p className="px-xl-3">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti.
                            </p>
                            <MDBTypography
                                listUnStyled
                                className="d-flex justify-content-center mb-0"
                            >
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                                </li>
                                <li>
                                    <MDBIcon far icon="star" size="sm" className="text-warning" />
                                </li>
                            </MDBTypography>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <div className='rating-secion'>
                    <button type="button" className="btn btn-primary">8.9</button>
                    <p className='dot-adjust'> Xuất sắc &#183; 4 đánh giá &#183; Đọc tất cả đánh giá </p>
                </div>

                <img
                    className="Destination-icon--blue-new"
                    alt=""
                    src="/Destination-icon--blue.svg"
                />
            </div>
            <div className='general-rules-container'>
                <b>Quy tắc chung</b>
                <div className='main-content-container'>
                    <div className='head-item'>
                        <div className='left-item'><i class="fa fa-arrow-right" aria-hidden="true"></i>Nhận Phòng</div>
                        <div className='right-item'>
                            <br />Từ 14:00 - 23:30
                            <br />Khách được yêu cầu xuất trình giấy tờ tùy thân có ảnh và thẻ tín dụng lúc nhận phòng
                        </div>
                    </div>
                    <hr className='head-hr' />
                    <div className='member-item-first'>
                        <div className='left-item'><i class="fa fa-arrow-left" aria-hidden="true"></i>Nhận Phòng</div>
                        <div className='right-item'>
                            <br />Từ 6:00 - 12:00
                        </div>
                    </div>
                    <hr className='first-member-hr'></hr>
                    <div className='member-item-second'>
                        <div className='left-item'><i class="fa fa-info-circle" aria-hidden="true"></i>Hủy đặt phòng/trả trước</div>
                        <div className='right-item'>
                            <br /> Các chính sách hủy và thanh toán trước có khác biệt dựa trên loại chỗ nghỉ. Vui lòng kiểm tra <a href='#' alt=''>các điều kiện</a> có thể được áp dụng cho mỗi lựa chọn của bạn
                        </div>
                    </div>
                    <hr className='second-member-hr'></hr>
                    <div className='member-item-third'>
                        <div className='left-item'><i class="fa fa-info-circle" aria-hidden="true"></i>Đặt cọc đề phòng hư hại có thể hoàn lại</div>
                        <div className='right-item'>
                            <br />Yêu cầu VND 500000 tiền đặt cọc đề phòng hư hại khi đến nghỉ. Số tiền này sẽ được chỗ nghỉ thu bằng tiền mặt.
                            Bạn sẽ được hoàn lại khi trả phòng. Tiền đặt cọc của bạn sẽ đươc hoàn lại toàn bộ bằng tiền mặt,
                            nhưng cũng phụ thuộc vào mức độ hư hại mà bạn có thẻ gây ra tại chỗ nghỉ
                        </div>
                    </div>
                    <hr className='third-member-hr'></hr>
                    <div className='member-item-fourth'>
                        <div className='left-item'><i class="fa fa-users" aria-hidden="true"></i>Trẻ em và giường</div>
                        <div className='right-item'>
                            Chính sách trẻ em<br />
                            <br /> Phù hợp cho tất cả trẻ em
                            <br /> Để xem thông tin giá và tình trạng phòng trống chính xác,
                            vui lòng thêm số lượng và độ tuổi của trẻ em trong nhóm của bạn khi tìm kiếm<br />
                            <br /> Chính sách nôi (cũi) và giường phụ<br />
                            <br /> Chỗ nghỉ này không có nôi/cũi và giường phụ
                        </div>
                    </div>
                    <hr className='fourth-member-hr'></hr>
                    <div className='member-item-fifth'>
                        <div className='left-item'><i class="fa fa-male" aria-hidden="true"></i>Không giới hạn độ tuổi</div>
                        <div className='right-item'>
                            Không có yêu cầu vê độ tuổi khi nhận phòng
                        </div>
                    </div>
                    <hr className='fifth-member-hr'></hr>
                    <div className='member-item-sixth'>
                        <div className='left-item'><i class="fa fa-leaf" aria-hidden="true"></i>Vật nuôi</div>
                        <div className='right-item'>
                            Vật nuôi không được phép
                        </div>
                    </div>
                    <hr className='sixth-member-hr'></hr>
                    <div className='member-item-seventh'>
                        <div className='left-item'><i class="fa fa-credit-card" aria-hidden="true"></i>Các phương thức thanh toán được chấp nhận</div>
                        <div className='right-item'>
                            <img src="https://cf.bstatic.com/static/img/transparent/8e09e5757781bf4c0f42228d45f422e5e800ae64.gif" class="payment_methods_readability ppd_payment_methods_readability creditcard maestro" alt="Maestro" title="Maestro" />
                        </div>
                    </div>
                </div>
            </div>

        </>;
    }
}

export default HotelDetail;