import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getData} from "./api/api.js";
import ArrayElement from "./components/ArrayElement.jsx";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();
const App = () => {


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
                        <ArrayElement title={"Неупорядоченный массив"} subtitle1={"Неоптимальный поиск"} subtitle2={"Оптимальный поиск"}/>
                        <ArrayElement title={"Упорядоченный массив"} subtitle1={"Как в неупорядоченном"} subtitle2={"Как в упорядоченном"}/>
                    </div>
                </div>
            </div>
        </QueryClientProvider>


    )
};

export default App
