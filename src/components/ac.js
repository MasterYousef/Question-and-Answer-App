import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Data } from '../data';

function Ac({list,del,delone}) {
let delitem=(I)=>{
  const ind = Data.findIndex((e)=>e.id === I)
  Data.splice(ind,1)
  delone(Data)
}
const localData = JSON.parse(localStorage.getItem("answer"))
  return (
    <Row className="p-5 justify-content-center">
      {
        
        localStorage.getItem("answer") != null  ? (localData.map((e,index)=>{
        return      <Accordion key={index} defaultActiveKey={e.id} className='mb-3'>
        <Accordion.Item eventKey={e.id}>
          <Accordion.Header> 
          <div className="d-flex justify-content-between w-75 m-auto ">
          <h4> {e.q} </h4>
          </div>
          </Accordion.Header>
          <Accordion.Body>
          <div className="border-top d-flex justify-content-between mx-5 mt-4">
            <p className="mt-3">{e.a} </p>
            <button onClick={()=>delitem(e.id)} className="btn btn-danger mt-3 px-3">مسح</button>
          </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
      
      })) : <h2>لا يوجد اسئله</h2>}
      
      <Col md={8}>
        {
          localStorage.getItem("answer") != null ? (<button onClick={del} className="btn btn-primary w-100 mt-3">مسح الكل</button>):null
        }
        </Col>
      </Row>
  );
}

export default Ac;