import React, {useState} from 'react';
import {getData} from "../api/api.js";
import loadingAnim from '../assets/Rolling@1x-1.0s-200px-200px.svg';

function ArrayElement({title, subtitle1, subtitle2}) {

    const [key, setKey] = useState("");
    const [time, setTime] = useState("");
    const [index, setIndex] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const onFind = async () => {
        try {
            setIsLoading(true);
            const response = await getData(key);
            setTime(response.data.time);
            setIndex(response.data.index);
        } catch {
            setTime("Что-то пошло не так...");
            setIndex("Что-то пошло не так...");
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
                    <div>{isLoading ? <img className="w-9" src={loadingAnim} alt=""/> : <input className={"my-1 border-2 rounded-md"} value={time} placeholder={"Время"} type="text"/>}</div>
                    <div>{isLoading ? <img className="w-9" src={loadingAnim} alt=""/> : <input className={"my-1 border-2 rounded-md"} value={index} placeholder={"Индекс"} type="text"/>}</div>
                </div>
                <div>
                    <h2 className="text-2xl">{subtitle2}</h2>
                    <div><input className={"my-1 border-2 rounded-md"} placeholder={"Время"} type="text"/></div>
                    <div><input className={"my-1 border-2 rounded-md"} placeholder={"Индекс"} type="text"/></div>
                </div>
                <button className={"border-2 rounded-md hover:bg-gray-200 p-1 px-3 my-3"} onClick={onFind}>Найти</button>
            </div>
            <div>
            </div>
        </div>
    );
}

export default ArrayElement;