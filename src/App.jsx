import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getData} from "./api/api.js";
import {QueryClient, QueryClientProvider} from "react-query";
import loadingAnim from './assets/Rolling@1x-1.0s-200px-200px.svg';

const queryClient = new QueryClient();
const App = () => {

    const [key1, setKey1] = useState("");
    const [time1_1, setTime1_1] = useState("");
    const [index1_1, setIndex1_1] = useState("");
    const [time1_2, setTime1_2] = useState("");
    const [index1_2, setIndex1_2] = useState("");


    const [key2, setKey2] = useState("");
    const [time2_1, setTime2_1] = useState("");
    const [index2_1, setIndex2_1] = useState("");
    const [time2_2, setTime2_2] = useState("");
    const [index2_2, setIndex2_2] = useState("");

    const [isLoading1, setIsLoading1] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);

    const onFind1 = async () => {
        try {
            setIsLoading1(true);
            let response = await getData.suboptimal(key1);
            setTime1_1(response.data.time);
            setIndex1_1(response.data.index);

            response = await getData.optimalUniversal(key1);
            setTime1_2(response.data.time);
            setIndex1_2(response.data.index);
        } catch {
            setTime1_1("Что-то пошло не так...");
            setIndex1_1("Что-то пошло не так...");
            setTime1_2("Что-то пошло не так...");
            setIndex1_2("Что-то пошло не так...");
        } finally {
            setIsLoading1(false);
        }
    }

    const onFind2 = async () => {
        try {
            setIsLoading2(true);
            let response = await getData.optimalUnordered(key2);
            setTime2_1(response.data.time);
            setIndex2_1(response.data.index);

            response = await getData.optimalOrdered(key2);
            setTime2_2(response.data.time);
            setIndex2_2(response.data.index);
        } catch {
            setTime2_1("Что-то пошло не так...");
            setIndex2_1("Что-то пошло не так...");
            setTime2_2("Что-то пошло не так...");
            setIndex2_2("Что-то пошло не так...");
        } finally {
            setIsLoading2(false);
        }
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <div className={"box-border w-1/2 mx-auto"}>
                    <div className={"m-3 p-2 rounded-xl bg-white flex justify-center text-xl font-bold shadow-lg min-w-80"}>
                        Лабораторная работа №2 - 4
                    </div>
                </div>
                <div className={"w-full mx-auto"}>
                    <div className={"box-border mx-auto w-1/2 flex justify-center"}>


                        <div className={"min-w-80 p-5 w-1/2 m-3 rounded-xl bg-white shadow-lg"}>
                            <div>
                                <h1 className="text-2xl font-bold">Неупорядоченный массив</h1>
                                <div>
                                    <h2 className="text-2xl">Неоптимальный поиск</h2>
                                    <div><input className={"my-1 border-2 rounded-md"} min={0} onChange={(e) => {
                                        setKey1(e.target.value);
                                    }} placeholder={"Ключ"} type="number"/></div>
                                    <div>{isLoading1 ? <img className="w-9" src={loadingAnim} alt=""/> :
                                        <input className={"my-1 border-2 rounded-md"} value={time1_1} onChange={() => {
                                        }} placeholder={"Время"} type="text"/>}</div>

                                    <div>{isLoading1 ? <img className="w-9" src={loadingAnim} alt=""/> :
                                        <input className={"my-1 border-2 rounded-md"} value={index1_1} onChange={() => {
                                        }} placeholder={"Индекс"} type="text"/>}</div>
                                </div>
                                <div>
                                    <h2 className="text-2xl">Оптимальный поиск</h2>
                                    <div>{isLoading1 ? <img className="w-9" src={loadingAnim} alt=""/>
                                        : <input className={"my-1 border-2 rounded-md"} value={time1_2} onChange={() => {
                                        }} placeholder={"Время"} type="text"/>}</div>
                                    <div>{isLoading1 ? <img className="w-9" src={loadingAnim} alt=""/>
                                        : <input className={"my-1 border-2 rounded-md"} value={index1_2} onChange={() => {
                                        }} placeholder={"Индекс"} type="text"/>}</div>
                                </div>
                                <button className={"border-2 rounded-md hover:bg-gray-200 p-1 px-3 my-3"} onClick={onFind1}>Найти
                                </button>
                            </div>
                        </div>


                        <div className={"min-w-80 p-5 w-1/2 m-3 rounded-xl bg-white shadow-lg"}>
                            <div>
                                <h1 className="text-2xl font-bold">Упорядоченный массив</h1>
                                <div>
                                    <h2 className="text-2xl">Как в неупорядоченном</h2>
                                    <div><input className={"my-1 border-2 rounded-md"} min={0} onChange={(e) => {
                                        setKey2(e.target.value);
                                    }} placeholder={"Ключ"} type="number"/></div>
                                    <div>{isLoading2 ? <img className="w-9" src={loadingAnim} alt=""/> :
                                        <input className={"my-1 border-2 rounded-md"} value={time2_1} onChange={() => {
                                        }} placeholder={"Время"} type="text"/>}</div>

                                    <div>{isLoading2 ? <img className="w-9" src={loadingAnim} alt=""/> :
                                        <input className={"my-1 border-2 rounded-md"} value={index2_1} onChange={() => {
                                        }} placeholder={"Индекс"} type="text"/>}</div>
                                </div>
                                <div>
                                    <h2 className="text-2xl">Как в упорядоченном</h2>
                                    <div>{isLoading2 ? <img className="w-9" src={loadingAnim} alt=""/>
                                        : <input className={"my-1 border-2 rounded-md"} value={time2_2} onChange={() => {
                                        }} placeholder={"Время"} type="text"/>}</div>
                                    <div>{isLoading2 ? <img className="w-9" src={loadingAnim} alt=""/>
                                        : <input className={"my-1 border-2 rounded-md"} value={index2_2} onChange={() => {
                                        }} placeholder={"Индекс"} type="text"/>}</div>
                                </div>
                                <button className={"border-2 rounded-md hover:bg-gray-200 p-1 px-3 my-3"} onClick={onFind2}>Найти
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </QueryClientProvider>


    )
};

export default App
