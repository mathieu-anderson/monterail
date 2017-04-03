<template>
  <header>
    <section class="back">
      <div class="symbol_back headerButton">
        <i class="ion-ios-arrow-left"></i>
      </div>
    </section>
    <section class="questions">
      <div class="title_questions">
        QUESTIONS
      </div>
      <div class="symbol_questions">
        <i class="ion-ios-plus"></i>
      </div>
      <div class="select_questions">
        <input type="radio" name="myShelf" value="">
          My shelf
        </input>
      </div>
      <div class="select_questions">
        <input type="radio" name="allQuestions" value="">
          All questions
        </input>
      </div>
    </section>
    <section class="sortQuestions">
      <div class="sort">
        Sort by: <a href="#" class="">recent</a> or <a href="#">hot</a>
      </div>
    </section>
    <section class="searchField">
      <input class= "search" type="text" name="searchQuestion" placeholder="Search questions" value="">
    </section>
    <section class="searchButton">
      <div class="headerButton">SEARCH</div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/css/main.scss';

  header {
    background-color: $white;
    width: 100vw;
    padding: 1em 0em 0em 0em;
    display: grid;
    grid-template-columns: [col1start] 15vw [col2start] 1fr [col3start] 20vw [col3end];
    grid-template-rows: [row1] 10vh [row2] 1fr;
  }

  .back {
    grid-column-start: col1start;
    grid-column-end: col2start;
    grid-row-start: row1;
    grid-row-end: row2;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
      .symbol_back {
        width: 1.3em;
        height: 1.3em;
        padding: 0.1em;
        font-size: 2em;
        border-radius: 50%;
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
      .title_questions {
        text-align: left;
        font-size: 2em;
        font-weight: bolder;
        padding: 1em 1em 1em 0em;
        flex: 0 1 auto;
      }
      .symbol_questions {
        font-size: 2.5em;
        color: $blue;
        flex: 1;
      }
      .select_questions {
        text-align: right;
        flex: 0.5;
      }
  }

  .sortQuestions {
    display: flex;
    align-items: center;
    grid-column-start: col3start;
    grid-column-end: col3end;
    grid-row-start: row1;
    grid-row-end: row1;
    .sort{
      flex: 1;
      text-align: center;
      font-style: italic;
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
    .search {
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
    padding: 0em 2em 1em 2em;
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

</style>
