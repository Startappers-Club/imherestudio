import "../styles/MainContainer.css";

import UserInfo from "./UserInfo";

import img_1 from "../assets/images/1.jpg";
import img_2 from "../assets/images/2.jpg";
import img_3 from "../assets/images/3.jpg";
import img_4 from "../assets/images/4.jpg";
import img_5 from "../assets/images/5.jpg";


export default function MainContainer() {
    const userInfoList = [
        {id: 1, name: "Norway Park: Барвиха", img: img_1},
        {id: 2, name: "Norway Park: Красногорск", img: img_2},
        {id: 3, name: "Norway Park: Мега Дыбенко", img: img_3},
        {id: 4, name: "Мадагаскар Junior", img: img_4},
        {id: 5, name: "ГудЛандия: Жуковский", img: img_5}
    ];



    return (
        <div className='wrapper'>
            <div className="container">
                <div className="row justify-content-center justify-content-md-center align-items-center">
                        {userInfoList.map(users => (
                            <div key={users.id} className="col-lg-4 col-md-6 container_item">
                                <UserInfo {...users}  />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}





