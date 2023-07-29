import {  Container } from "react-bootstrap";
import FormQ from "./components/form";
import Ac from "./components/ac";
import { useState } from "react";
import { Data } from "./data";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
const [list,setstate] = useState(Data);
let addState = ()=>{
  localStorage.setItem("answer",JSON.stringify([...Data]))
  setstate([...Data])
  notify("تم الاضافة بنجاج","succes")
}
let delAll = ()=>{
  localStorage.removeItem("answer")
  Data.splice(0,Data.length)
  setstate([])
  notify("تم حذف الكل بنجاح","succes")
}
let delone=(one)=>{
  localStorage.setItem("answer",JSON.stringify([...one]))
  setstate([...one])
  if(one.length <=0){
    delAll()
  }
  notify("تم الحذف بنجاح","succes")
}
const notify = (ma,type)=>{
  if(type === "erorr")
    toast.error(ma)
  else if (type === "succes")
  toast.success(ma)
  };
  return (
    <div className="font text-center">
      <Container>
      <FormQ Additem={addState} notify={notify}/>
      <Ac list={list} del={delAll} delone={delone}/>
      <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
