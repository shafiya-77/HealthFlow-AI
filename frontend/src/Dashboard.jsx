import {useEffect,useState} from "react";
import "./style.css";


function Dashboard(){

const [data,setData]=useState([]);


useEffect(()=>{

fetch(
"http://127.0.0.1:8000/dashboard"
)

.then(res=>res.json())

.then(result=>setData(result));


},[]);



return (

<div className="container">


<h1>
📊 HealthFlow Dashboard
</h1>


<div className="card">

<h3>
Total Requests:
{data.length}
</h3>


</div>



<table border="1">

<thead>

<tr>

<th>ID</th>

<th>Query</th>

<th>Category</th>

<th>Priority</th>

<th>Department</th>

</tr>

</thead>


<tbody>


{
data.map(item=>(


<tr key={item.id}>

<td>{item.id}</td>

<td>{item.query}</td>

<td>{item.category}</td>

<td>{item.priority}</td>

<td>{item.department}</td>


</tr>


))

}


</tbody>


</table>


</div>


)


}


export default Dashboard;