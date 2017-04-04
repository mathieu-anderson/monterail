<template>
  <header>
    <section class="back">
      <div class="back-symbol headerButton">
        <i class="ion-ios-arrow-left"></i>
      </div>
    </section>
    <section class="questions">
      <div class="questions-title">
        QUESTIONS
      </div>
      <div class="questions-symbol">
        <i class="ion-ios-plus"></i>
      </div>
      <div class="questions-select">
        <input type="radio" name="selectQuestions" value="myShelf" checked>
          My shelf
        </input>
      </div>
      <div class="questions-select">
        <input type="radio" name="selectQuestions" value="allQuestions">
          All questions
        </input>
      </div>
    </section>
    <section class="sortQuestions">
      <div class="sortQuestions-elements">
        Sort by: <a href="#" class="active">recent</a> or <a href="#">hot</a>
      </div>
    </section>
    <section class="searchField">
      <input class= "searchField-text" type="text" name="searchQuestion" placeholder="Search questions" value="">
    </section>
    <section class="searchButton">
      <div class="headerButton">SEARCH</div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/css/main.scss';

  header {
    position: fixed;
    background-color: $white;
    width: 100vw;
    padding: 1em 2em 0em 2em;
    display: grid;
    grid-template-columns: [col1start] 15vw [col2start] 1fr [col3start] 18vw [col3end] 15vw;
    grid-template-rows: [row1] 10vh [row2] 1fr;
  }

  .back {
    grid-column-start: col1start;
    grid-column-end: col2start;
    grid-row-start: row1;
    grid-row-end: row2;
    display: flex;
    flex-flow: column nowrap;
    align-items: left;
    justify-content: center;
    padding: 0em 0em 0em 1em;
      .back-symbol {
        // width: 1em;
        // height: 1em;
        // font-size: 2em;
        // border-radius: 50%;
      }
  }

  .questions {
    grid-column-start: col2start;
    grid-column-end: col3start;
    grid-row-start: row1;
    grid-row-end: row1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    align-content: stretch;
      .questions-title {
        text-align: left;
        font-size: 2em;
        font-weight: 600;
        padding: 1em 1em 1em 0em;
        flex: 0 1 auto;
      }
      .questions-symbol {
        font-size: 2em;
        color: $blue;
        flex: 1;
      }
      .questions-symbol:hover {
        cursor: pointer;
      }
      .questions-select {
        text-align: right;
        font-size: 0.9em;
        font-weight: 600;
        flex: 0.7;
      }
  }

  .sortQuestions {
    display: flex;
    align-items: center;
    grid-column-start: col3start;
    grid-column-end: col3end;
    grid-row-start: row1;
    grid-row-end: row1;
    .sortQuestions-elements{
      font-family: 'Noto Serif', serif;
      flex: 1;
      text-align: right;
      font-style: italic;
      font-size: 0.9em;
    }
  }

  .searchField {
    display: flex;
    align-content: stretch;
    grid-column-start: col2start;
    grid-column-end: col3start;
    grid-row-start: row2;
    grid-row-end: row2;
    padding: 0em 0em 1em 0em;
    .searchField-text {
      flex: 1;
      background-color: $light-gray;
      padding: 0em 0em 0em 1em;
    }
  }

  .searchButton {
    grid-column-start: col3start;
    grid-column-end: col3end;
    grid-row-start: row2;
    grid-row-end: row2;
    text-align: right;
    padding: 0em 0em 1em 2em;
  }

  .headerButton {
    border: 1px solid $dark-gray;
    background-color: $white;
    color: $dark-gray;
    padding: 0.5em;
    text-align: center;
    cursor: pointer;
  }

  .headerButton:hover {
    color: $blue;
    border: 1px solid $blue;
  }

  .active, .active:hover {
    font-style: normal;
    font-family: "Titillium Web", Arial, sans-serif;
    color: $dark-gray;
    border-bottom: 2px solid $dark-gray;
  }

</style>
