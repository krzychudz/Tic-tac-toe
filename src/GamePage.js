import React, { Component } from 'react';
import './Game.css';
import Popup from "reactjs-popup";
import {Link} from "react-router-dom";

class Game extends Component{

    constructor(props){
        super(props);
        this.state = {
            turn: 1,         // 1 - o     2 - x
            moves: 0,
            openModal: false,
            winner: 0,
            gameState: [[0,0,0], [0,0,0], [0,0,0]]
        }
    }



    changeTurn = () => {
        if(this.state.turn === 1)
            this.setState({turn: 2});
        else
            this.setState({turn: 1});


    };

    setGameWinner = (who) => {
        let winner;

        if(who === 1)
            winner = "nought";
        else if (who === 2)
            winner = "cross";
        else if(who === 3)
            winner = "draw";

        this.setState({
            openModal: true,
            winner: winner
        });
    };

    changeGameState = (x,y,val) =>{

        let newGameState = this.state.gameState;
        newGameState[x][y] = val;

        this.setState({gameState: newGameState, moves: this.state.moves + 1});

        if((this.state.gameState[0][0] === 1 && this.state.gameState[0][1] === 1 && this.state.gameState[0][2] === 1)
            || (this.state.gameState[1][0] === 1 && this.state.gameState[1][1] === 1 && this.state.gameState[1][2] === 1)
            || (this.state.gameState[2][0] === 1 && this.state.gameState[2][1] === 1 && this.state.gameState[2][2] === 1)

            || (this.state.gameState[0][0] === 1 && this.state.gameState[1][0] === 1 && this.state.gameState[2][0] === 1)
            || (this.state.gameState[0][1] === 1 && this.state.gameState[1][1] === 1 && this.state.gameState[2][1] === 1)
            || (this.state.gameState[0][2] === 1 && this.state.gameState[1][2] === 1 && this.state.gameState[2][2] === 1)

            || (this.state.gameState[0][0] === 1 && this.state.gameState[1][1] === 1 && this.state.gameState[2][2] === 1)
            || (this.state.gameState[2][0] === 1 && this.state.gameState[1][1] === 1 && this.state.gameState[0][2] === 1))
                this.setGameWinner(1);


        if((this.state.gameState[0][0] === 2 && this.state.gameState[0][1] === 2 && this.state.gameState[0][2] === 2)
            || (this.state.gameState[1][0] === 2 && this.state.gameState[1][1] === 2 && this.state.gameState[1][2] === 2)
            || (this.state.gameState[2][0] === 2 && this.state.gameState[2][1] === 2 && this.state.gameState[2][2] === 2)

            || (this.state.gameState[0][0] === 2 && this.state.gameState[1][0] === 2 && this.state.gameState[2][0] === 2)
            || (this.state.gameState[0][1] === 2 && this.state.gameState[1][1] === 2 && this.state.gameState[2][1] === 2)
            || (this.state.gameState[0][2] === 2 && this.state.gameState[1][2] === 2 && this.state.gameState[2][2] === 2)

            || (this.state.gameState[0][0] === 2 && this.state.gameState[1][1] === 2 && this.state.gameState[2][2] === 2)
            || (this.state.gameState[2][0] === 2 && this.state.gameState[1][1] === 2 && this.state.gameState[0][2] === 2))
                this.setGameWinner(2);



        if(this.state.moves === 8)
            this.setGameWinner(3);

    };



    render(){
        return(
            <div className = "container">
                <GameBoard turn = {this.state.turn} changeTurn = {this.changeTurn} changeGameState = {this.changeGameState} />
                <InfoArea turn = {this.state.turn} moves = {this.state.moves} />

                <Popup
                    open = {this.state.openModal}
                    modal
                    closeOnDocumentClick>
                    <div className="PopupContainer">
                        <div> <h1>Winner</h1> </div>
                        <div> <h2> {this.state.winner} </h2> </div>
                        <div className="btn">
                            <Link className="Link" to = "/"> Exit </Link>
                        </div>
                    </div>
                </Popup>
            </div>
        );
    }

}

class InfoArea extends Component{

    constructor(){
        super();
    }

    render(){
        return(

            <div className="infoPanel">
               <div> <h2> Info </h2> </div>
               <div><h3> Turn: {this.props.turn === 1 ?  'O' : 'X' } </h3> </div>
               <div><h3> Moves: {this.props.moves} </h3> </div>
            </div>

        );
    }

}

class GameBoard extends Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div className="gameBoard">
                <BoardField turn = {this.props.turn} changeTurn = {this.props.changeTurn} changeGameState = {this.props.changeGameState} id = {[0,0]} />
                <BoardField turn = {this.props.turn} changeTurn = {this.props.changeTurn} changeGameState = {this.props.changeGameState} id = {[0,1]} />
                <BoardField turn = {this.props.turn} changeTurn = {this.props.changeTurn} changeGameState = {this.props.changeGameState} id = {[0,2]} />
                <div className="clearDiv"></div>
                <BoardField turn = {this.props.turn} changeTurn = {this.props.changeTurn} changeGameState = {this.props.changeGameState} id = {[1,0]} />
                <BoardField turn = {this.props.turn} changeTurn = {this.props.changeTurn} changeGameState = {this.props.changeGameState} id = {[1,1]} />
                <BoardField turn = {this.props.turn} changeTurn = {this.props.changeTurn} changeGameState = {this.props.changeGameState} id = {[1,2]} />
                <div className="clearDiv"></div>
                <BoardField turn = {this.props.turn} changeTurn = {this.props.changeTurn} changeGameState = {this.props.changeGameState} id = {[2,0]} />
                <BoardField turn = {this.props.turn} changeTurn = {this.props.changeTurn} changeGameState = {this.props.changeGameState} id = {[2,1]} />
                <BoardField turn = {this.props.turn} changeTurn = {this.props.changeTurn} changeGameState = {this.props.changeGameState} id = {[2,2]} />
                <div className="clearDiv"></div>
            </div>
        );
    }

}

class BoardField extends Component{

    constructor(){
        super();
        this.state={
            img_src: "",
            empty: true
        }
    }


    handleClick = () => {
        if(this.state.empty) {
            if (this.props.turn === 1) {
                this.setState({img_src: "o.png"})
            }
            else if(this.props.turn === 2) {
                this.setState({img_src: "x.png"})
            }

            this.props.changeTurn();

            this.setState({empty: false});

            let x = this.props.id[0];
            let y = this.props.id[1];


            this.props.changeGameState(x,y,this.props.turn);
        }
    };

    render(){
        return(
            <div onClick={this.handleClick} className="boardField">
                <img src={this.state.img_src}/>
            </div>
        );
    }
}

export default Game;