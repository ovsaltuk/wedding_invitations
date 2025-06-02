import type { FC } from "react";
import mainImg from "/program-main-img.jpg";
import program from "/program.png";
import heart from "/heart.png";
import dressCode from "/dress-code.png";
import nice from "/nice.png";
import bed from "/bed.png";
import oveStasya from "/oveStasya.png";
import "./styles.scss";

export const ProgramSection: FC = () => {
    return (<section className="program">
        <div className="program__container">
            <div className="program__schedule">
                <div className="img__container">
                    <img src={mainImg} alt="main" />
                    <img src={heart} alt="heart" className="heart-img" />
                </div>
                <div className="schedule">
                    <img src={program} alt="program" />
                    <div className="program__point">
                        <div className="program__point-title">
                            <span className="program__point-title-date day">27.06.25</span>
                            <span className="program__point-title-text">Сбор гостей</span>
                        </div>
                        <span className="program__point-description">
                            МЫ БУДЕМ ВАС ЖДАТЬ В ЗАГОРОДНОМ КЛУБЕ THE LAGOM С САМОГО УТРА
                        </span>
                    </div>

                    <div className="program__point">
                        <div className="program__point-title">
                            <span className="program__point-title-date">15:00</span>
                            <span className="program__point-title-text">Велком-фуршет</span>
                        </div>
                        <span className="program__point-description">РАССЛАБЛЯЕМСЯ ПОСЛЕ ДОРОГИ
                        </span>
                    </div>

                    <div className="program__point">
                        <div className="program__point-title">
                            <span className="program__point-title-date">17:00 </span>
                            <span className="program__point-title-text">Начало празднования</span>
                        </div>
                        <span className="program__point-description">К ЭТОМУ ВРЕМЕНИ МЫ НАЧНЕМ НАКРЫВАТЬ СТОЛ
                        </span>
                    </div>

                    <div className="program__point">
                        <div className="program__point-title">
                            <span className="program__point-title-date">19:00 </span>
                            <span className="program__point-title-text">Торжественная часть</span>
                        </div>
                        <span className="program__point-description">Церемония обмена клятвами
                        </span>
                    </div>

                    <div className="program__point">
                        <div className="program__point-title">
                            <span className="program__point-title-date">20:00 </span>
                            <span className="program__point-title-text">Неторжественная часть</span>
                        </div>
                        <span className="program__point-description">Вечеринка у костра
                        </span>
                    </div>

                    <div className="program__point">
                        <div className="program__point-title">
                            <span className="program__point-title-date day">28.06.25 </span>
                            <span className="program__point-title-text">Второй день свадьбы</span>
                        </div>
                        <span className="program__point-description">В ЭТОТ ДЕНЬ МЫ ХОТИМ, ЧТОБЫ ВЫ ОТДОХНУЛИ И НАСЛАДИЛИСЬ СОСНОВЫМ ЛЕСОМ
                        </span>
                    </div>

                    <div className="program__point">
                        <div className="program__point-title">
                            <span className="program__point-title-date">10:00 </span>
                            <span className="program__point-title-text">Завтрак</span>
                        </div>
                    </div>

                    <div className="program__point">
                        <div className="program__point-title">
                            <span className="program__point-title-date">18:00</span>
                            <span className="program__point-title-text">Кедровая Баня с купелью</span>
                        </div>
                    </div>

                    <div className="program__point">
                        <div className="program__point-title">
                            <span className="program__point-title-date day">29.06.25 </span>
                            <span className="program__point-title-text">Финал</span>
                        </div>
                        <span className="program__point-description">ВЫЕЗД  до 13:00
                        </span>
                    </div>

                </div>
            </div>
            <img src={dressCode} alt="dressCode" />
            <img src={bed} alt="bed" />
            <img src={nice} alt="nice" />
            <img src={oveStasya} alt="oveStasya" className="ove-stasya"/>
        </div>
    </section>)
}