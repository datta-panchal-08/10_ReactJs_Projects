import styled from 'styled-components'
import RoleDice from './RoleDice';

const NumberSelector = ({setError ,error,selectedNumber,setSelectedNumber}) => {
    const arrayNumbers = [1,2,3,4,5,6 ];
    const numberSelectorHandler = (value) =>{
        setSelectedNumber(value);
        setError('');
    }
  return (
    <>
    <NumberSelectorContainer>
    <p className='error'>{error}</p>
       <div className='flex'>
    
       {arrayNumbers.map((value,i)=> <Box isSelected = {value === selectedNumber}  onClick={()=>numberSelectorHandler(value)}
         key={i}>{value}</Box>
        )}
       </div>
       <p>Select Number</p>
    </NumberSelectorContainer>
     </>
  )
}

export default NumberSelector
const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .error{
        color: red;
        font-size: 14px;
        line-height: none;
 
    }
`;

const Box = styled.div `
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(val) =>(val.isSelected ? "black":"white")};
    color: ${(val) => (val.isSelected ? "white":"black")};
`;