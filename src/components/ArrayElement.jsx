import React, {useState} from 'react';
import {getData} from "../../../rnative-test/api/api.js";
import loadingAnim from '../../../rnative-test/assets/images/Rolling@1x-1.0s-200px-200px.svg';

function ArrayElement({title, subtitle1, subtitle2}) {

    const [key, setKey] = useState("");

    const [time1, setTime1] = useState("");
    const [index1, setIndex1] = useState("");

    const [time2, setTime2] = useState("");
    const [index2, setIndex2] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const onFind = async () => {
        try {
            setIsLoading(true);
            let response = await getData.suboptimal(key);
            setTime1(response.data.time);
            setIndex1(response.data.index);

            response = await getData.optimalU(key);
            setTime2(response.data.time);
            setIndex2(response.data.index);
        } catch {
            setTime1("Что-то пошло не так...");
            setIndex1("Что-то пошло не так...");
            setTime2("Что-то пошло не так...");
            setIndex2("Что-то пошло не так...");
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className={"min-w-80 p-5 w-1/2 m-3 rounded-xl bg-white shadow-lg"}>
            <div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <div>
                    <h2 className="text-2xl">{subtitle1}</h2>
                    <div><input className={"my-1 border-2 rounded-md"} min={0} onChange={(e) => {
                        setKey(e.target.value);
                    }} placeholder={"Ключ"} type="number"/></div>
                    <div>{isLoading ? <img className="w-9" src={loadingAnim} alt=""/> :
                        <input className={"my-1 border-2 rounded-md"} value={time1} onChange={() => {
                        }} placeholder={"Время"} type="text"/>}</div>

                    <div>{isLoading ? <img className="w-9" src={loadingAnim} alt=""/> :
                        <input className={"my-1 border-2 rounded-md"} value={index1} onChange={() => {
                        }} placeholder={"Индекс"} type="text"/>}</div>
                </div>
                <div>
                    <h2 className="text-2xl">{subtitle2}</h2>
                    <div>{isLoading ? <img className="w-9" src={loadingAnim} alt=""/>
                        : <input className={"my-1 border-2 rounded-md"} value={time2} onChange={() => {
                    }} placeholder={"Время"} type="text"/>}</div>
                    <div>{isLoading ? <img className="w-9" src={loadingAnim} alt=""/>
                        : <input className={"my-1 border-2 rounded-md"} value={index2} onChange={() => {
                    }} placeholder={"Индекс"} type="text"/>}</div>
                </div>
                <button className={"border-2 rounded-md hover:bg-gray-200 p-1 px-3 my-3"} onClick={onFind}>Найти
                </button>
            </div>
        </div>
    );
}

export default ArrayElement;