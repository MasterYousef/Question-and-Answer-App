import { useState } from "react";
import {Col, Row} from "react-bootstrap"
import { Data } from "../data";
function FormQ({Additem,notify}) {
  const [qu,setqu] = useState('');
  const [an,setan] = useState('');
let puchitems = ()=>{
  if(qu==="" || an ===""){
    notify("من فضلك ادخل البيانات","erorr")
    return ;
  } else {
    Data.push({id:Math.random(),q:qu,a:an})
    setqu('')
    setan('')
    Additem()
  }

}
  return (
    <div>
      <h1 className="p-5">اضف سؤال</h1>
      <Row className="d-flex flex-md-row-reverse justify-content-center flex-sm-column">
        <Col md={4}>
        <input type="text" value={an} onChange={(e)=>setan(e.target.value)} placeholder="اكتب الاجابة "></input>

        </Col>
        <Col md={4}  >
        <input type="text" value={qu} onChange={(e)=>setqu(e.target.value)} placeholder="اكتب السؤال"></input>
        </Col>
        <Col md={4}> 
        <button className="btn btn-primary px-4 fs-5" onClick={puchitems}>اضافة</button>
        </Col>
      </Row>
    </div>
  );
}

export default FormQ;