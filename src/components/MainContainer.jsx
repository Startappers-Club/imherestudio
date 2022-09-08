import { Link } from 'react-router-dom';
import { faChevronLeft, faChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import UserInfo from "./UserInfo";

import img_1 from "../assets/images/1.jpg";
import img_2 from "../assets/images/2.jpg";
import img_3 from "../assets/images/3.jpg";
import img_4 from "../assets/images/4.jpg";
import img_5 from "../assets/images/5.jpg";

import "../styles/MainContainer.css";


export default function MainContainer() {
    const userInfoList = [
        { id: 1, name: "Norway Park: Барвиха", img: img_1, data: [
            {date:"07.09.2022", link:"link_1"},
            {date:"08.09.2022", link:"link_2"},
            {date:"09.09.2022", link:"link_1"},
            {date:"10.09.2022", link:"link_3"},
            {date:"11.09.2022", link:"link_4"},
        ] },
        { id: 2, name: "Norway Park: Красногорск", img: img_2 ,  data: [
            {date:"07.09.2022", link:"link_1"},
            {date:"08.09.2022", link:"link_2"},
            {date:"09.09.2022", link:"link_1"},
            {date:"10.09.2022", link:"link_3"},
            {date:"11.09.2022", link:"link_4"},
        ] },
        { id: 3, name: "Norway Park: Мега Дыбенко", img: img_3 ,  data: [
            {date:"07.09.2022", link:"link_1"},
            {date:"08.09.2022", link:"link_2"},
            {date:"09.09.2022", link:"link_1"},
            {date:"10.09.2022", link:"link_3"},
            {date:"11.09.2022", link:"link_4"},
        ] },
        { id: 4, name: "Мадагаскар Junior", img: img_4 ,  data: [
            {date:"07.09.2022", link:"link_1"},
            {date:"08.09.2022", link:"link_2"},
            {date:"09.09.2022", link:"link_1"},
            {date:"10.09.2022", link:"link_3"},
            {date:"11.09.2022", link:"link_4"},
        ] },
        { id: 5, name: "ГудЛандия: Жуковский", img: img_5,  data: [
            {date:"07.09.2022", link:"link_1"},
            {date:"08.09.2022", link:"link_2"},
            {date:"09.09.2022", link:"link_1"},
            {date:"10.09.2022", link:"link_3"},
            {date:"11.09.2022", link:"link_4"},
        ]  }
    ];



    const [showModal, setShowModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState()
    const [selectedItem, setSelectedItem] = useState({})
    const [dataIndex, setDataIndex] = useState(0)

    // get current modal data
    useEffect(() => {
        setSelectedItem(userInfoList.find(item => item.id === selectedItemId));

        // eslint-disable-next-line
    }, [selectedItemId]);

    // change to next slide
    const nextSlide = () => {
        if (dataIndex !== selectedItem?.data?.length - 1) {
            setDataIndex(dataIndex + 1)
        } else {
            setDataIndex(1)
        }
    }

    // change to previous slide
    const prevSlide = () => {
        if (dataIndex !== 0) {
            setDataIndex(dataIndex - 1)
        } else {
            setDataIndex(selectedItem?.data?.length - 1)
        }
    }

    return (
        <div className='wrapper'>
            <div className="container">
                { showModal ? (
                    <>
                        <div className="userInfoModal modal fade" id="userInfoModal" aria-labelledby="exampleModalLabel" >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className='close_menu-User_info'>
                                        <button type="button" data-dismiss="modal" className='userPhoto_modal'><FontAwesomeIcon icon={ faCircleXmark } /></button>
                                    </div>
                                    <div className="userInfoModal modal-body">
                                        <img src={ selectedItem?.img || '' } alt="" />
                                    </div>
                                    <div className="carousel">
                                        <button className="left" onClick={prevSlide}><FontAwesomeIcon icon={ faChevronLeft } /></button>
                                        <div className="usersData"><span>{ selectedItem?.data[dataIndex].date }</span></div>
                                        <button className="left" onClick={nextSlide}><FontAwesomeIcon icon={ faChevronRight } /></button>
                                    </div>
                                    <Link to={ `base/${selectedItem?.data[dataIndex].link}` } className="ok">OK</Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : "" }
                <div className="row justify-content-center justify-content-md-center align-items-center">
                    { userInfoList.map(users => (
                        <div key={ users.id } className="col-lg-4 col-md-6 container_item">
                            <UserInfo user={ users } setSelectedItemId={ setSelectedItemId } showUserMessage={ () => setShowModal(true) } />
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
}





