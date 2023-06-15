import styles from './Grid.module.css';
import React, { useEffect } from 'react';
import Card from '../Card/Card';


const Grid = props => {
    const {
        shownGames,
        reviewDisplay,
        handleLike,
        handleHoverGame,
        hoverState,
        handleAddToCart,
        grid,
        search,
        searching,
        handleSelectGame,
        cartDisplayed
    } = props;

    useEffect(() => {
        if (grid === false) {
            if (document.getElementsByClassName('gridContainer')) {
                let grid = document.getElementById('gridContainer')
                grid.className = styles.noGrid
            }
        } else if (grid) {
            if (document.getElementById('gridContainer').className === styles.noGrid) {
                let grid = document.getElementById('gridContainer')
                grid.className = styles.gridContainer
            }
        }
    }, [grid])

    return (
    <>
          <div className={styles.reviews} style={{ display: reviewDisplay ? "flex" : "none" }}>
              <h2>There are no reviews yet!</h2>
              <h3>You can add some, soon.</h3>
          </div>
          <div className={styles.gridContainer} style={{ display: reviewDisplay ? "none" : "grid" }} id="gridContainer">
          {searching === false ? cartDisplayed ? shownGames
                .filter((game, i) => i <= 7)
                .map((game) => (
                <Card 
                game={game} 
                key={game.name} 
                handleHoverGame={handleHoverGame} 
                handleLike={handleLike} 
                handleSelectGame={handleSelectGame}
                handleAddToCart={handleAddToCart} 
                hoverState={hoverState}
          />
        ))
        : shownGames
            .map((game) => (
            <Card 
            game={game} 
            key={game.name} 
            handleLike={handleLike} 
            handleHoverGame={handleHoverGame} 
            handleAddToCart={handleAddToCart} 
            handleSelectGame={handleSelectGame}
            hoverState={hoverState}
          />
        ))
        : shownGames
            .filter((game) => game.name.toLowerCase().includes(search.toLowerCase()))
            .map((game) => (
            <Card 
            game={game} 
            key={game.name} 
            handleLike={handleLike} 
            handleHoverGame={handleHoverGame} 
            handleAddToCart={handleAddToCart} 
            handleSelectGame={handleSelectGame}
            hoverState={hoverState}
        />
      ))
}
          </div>
    </>
    );
  }
  
  export default Grid;