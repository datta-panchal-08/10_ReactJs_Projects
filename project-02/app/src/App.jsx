import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SerachResult from './components/SerachResult';

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data,setData] = useState(null);
  const [loading, setLoading ] = useState(false);
  const [error , setError] = useState(null);
  const [filteredData , setFilteredData] = useState(null);


  useEffect(()=>{
    const fetchFoodData = async () =>{
      setLoading(true);
      try{
        const response = await fetch(BASE_URL);
        const result  = await response.json();
        setData(result);
        setFilteredData(result);
        setLoading(false);
      }catch(err){
        setError("Unable To Fecth Data..")
      }
     
     }
     fetchFoodData();
  },[])
 
   if(error) return <div>{error}</div>;
   if(loading) return <div>loading.....</div>

   const getFilteredData = (event) =>{
    const serachValue  = event.target.value;
    if(serachValue === ""){
      setFilteredData(null)
    }
    
    const filter = data?.filter((food)=>{
        return food.name.toLowerCase().includes(serachValue.toLowerCase())
    });
    setFilteredData(filter);
   }

  return (
    <>
    <Container>
       <TopContainer>
        <div className="logo" >
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className='search'>
          <input onChange={getFilteredData} type="text" placeholder='Search Food...'/>
        </div>
       </TopContainer>

       <FilteredContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
       </FilteredContainer>    
    </Container>
    <SerachResult data = {filteredData}/>  
   </>
  )
}

export default App

export const Container = styled.div`
  max-width : 1200px;
  margin : 0 auto;
`;
const TopContainer = styled.section`
  min-height : 140px;
  display:flex;
  justify-content : space-between;
  align-items : center;
  padding : 16px;
  
  .search{
    input{
      background-color : transparent;
      height:40px;
      border : 1px solid red;
      color:white;
      font-size: 16px;
      border-radius : 5px;
      padding : 0 10px;
    }
  }
`;

const FilteredContainer = styled.section`
  display:flex;
  gap:12px;
  justify-content : center;
  padding-bottom : 40px;
`;

export const Button = styled.button`
   background-color : #ff4343;
   border-radius : 5px;
   padding:6px 12px;
   border:none;
   color:white;
   cursor: pointer;

   &:hover{
     background-color: #2ea00c;

   }
`;
