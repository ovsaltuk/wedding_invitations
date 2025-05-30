import type { FC } from "react";
import oveImg from "/OVE2.png";
import stayaImg from "/STASYA_2.png";
import "./styles.scss";

export const MainSection: FC = () => {
    return (<section className="main">
        <h1 className="main__title">Wedding party</h1>
        <span className="main__love">=любовь</span>
        <div className="main__img-container">
            <div className="pic pic__ove">
                <span className="pic__title">Олег</span>
                <img src={oveImg} alt="oveImg" />
            </div>
            <span className="plus-text">+</span>
            <div className="pic pic__stasya">
                <span className="pic__title">Настя</span>
                <img src={stayaImg} alt="stasyaImg" />
            </div>
        </div>
    </section>)
}