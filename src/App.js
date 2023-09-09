import './App.css';
import {useState} from 'react'
function App() {
 
  const [cuser,setCUser] = useState(1)
  const [board,setboard] = useState([[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]])
  const [is_won,setIsWon] = useState(false)
  const [winnerid,setWinnerid] = useState(-1)
  const changeuser=()=>{
    setCUser((cuser+1)%2)
  }
  const buttons = [];
  
  const usericon = {
    1:"X",
    0:"O"
  }
  const usericoncolor={
    "X":"orange",
    "O":"red",
    "":""
    
  }
  const checkwinner = (cboard,cus)=>{
    const icon = usericon[cus]
    if(cboard[0][0]==icon && cboard[0][1]==icon && cboard[0][2]==icon){
      setIsWon(true)
      setWinnerid(cus)
    }
    else if(cboard[1][0]==icon && cboard[1][1]==icon && cboard[1][2]==icon){
      setIsWon(true)
      setWinnerid(cus)

    }
    else if(cboard[2][0]==icon && cboard[2][1]==icon && cboard[2][2]==icon){
      setIsWon(true)
      setWinnerid(cus)

    }
    else if(cboard[0][0]==icon && cboard[1][1]==icon && cboard[2][2]==icon){
      setIsWon(true)
      setWinnerid(cus)

    }else if(cboard[0][2]==icon && cboard[1][1]==icon && cboard[2][0]==icon){
      setIsWon(true)
      setWinnerid(cus)

    }
    else if(cboard[0][0]==icon && cboard[1][0]==icon && cboard[2][0]==icon){
      setIsWon(true)
      setWinnerid(cus)

    }
    else if(cboard[0][1]==icon && cboard[1][1]==icon && cboard[2][1]==icon){
      setIsWon(true)
      setWinnerid(cus)

    }else if(cboard[0][2]==icon && cboard[1][2]==icon && cboard[2][2]==icon){
      setIsWon(true)
      setWinnerid(cus)

    }

  }
  const changeboard =(rindex,cindex,cus)=>
  {
    
    const newBoard = board.map((row, i) =>
    i === rindex ? row.map((item, j) => {
      if(cindex==j && item==-1){
         changeuser()
         return usericon[cus]
      }else{
        return item
      }
    }) : row
    );
    
    setboard(newBoard)
    checkwinner(newBoard,cus)
  }
  for (let i=0;i<3;i++){
    for (let j=0;j<3;j++){
      console.log(usericoncolor[board[i][j]],board[i][j]);
      buttons.push( 
        
      <button style={{color:usericoncolor[board[i][j]]}} className={usericoncolor[board[i][j]]} onClick={()=>{
        changeboard(i,j,cuser);
        

       }}>
      
     <span> {board[i][j]==-1 ?"":board[i][j]}</span>
       </button>
      )
       
      }
  }
  
  

  return (
    <div className="App">
      <img src="./tic-tac-toe.png"></img>
      <div className='board'>

       {!is_won && <h1>Next player : <span>{usericon[cuser]} </span></h1>} 

        <div className='board-grid'>
          {is_won ?<h1 className='winner'>Player {usericon[winnerid]} won</h1> : buttons}
        </div>
      </div>

    </div>
  );
}


export default App;
