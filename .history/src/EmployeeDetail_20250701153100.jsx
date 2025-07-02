import React from 'react'
import { useNavigate } from 'react-router-dom';


const EmployeeDetail = () => {
const { id } = useParams(); // get the employee index from URL
  const navigate = useNavigate();
  return (
    <div>

      
    </div>
  )
}

export default EmployeeDetail;
