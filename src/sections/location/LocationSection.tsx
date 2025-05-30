import type { FC } from "react";
import envelope from "/envelope.png";
import arrowOne from "/arrow-1.png";
import "./styles.scss";

export const LocationSection: FC = () => {
    return (
        <section className="location">
            <h2 className="location__title">
                КОГДА МЫ РАЗМЫШЛЯЛИ О ТОМ, КАК ОТМЕТИТЬ НАШУ СВАДЬБУ, ПОНЯЛИ, ЧТО МЕЧТАЕМ ПРОВЕСТИ ЭТО ВРЕМЯ
                В КРУГУ САМЫХ БЛИЗКИХ НАМ ЛЮДЕЙ
            </h2>
            <span className="location__subtitle">в лесу</span>

            <div className="location__container">
                <div className="location__where">
                    <div className="location__where-place">
                        <span>Место</span>
                        <img src={arrowOne} alt="arrow" />
                    </div>
                    <div className="location__where-address">
                        <span>The Lagom</span>
                        <span>находится по адресу: Прибрежная ул. 186</span>
                    </div>
                </div>
                <img src={envelope} alt="envelope" />
            </div>


        </section>
    )
}