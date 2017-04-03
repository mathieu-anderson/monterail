<template>
  <header>
    <section class="back">
      <div class="symbol_back">
        <
      </div>
    </section>
    <section class="questions">
      <div class="title_questions">
        QUESTIONS
      </div>
      <div class="symbol_questions">
        +
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
    <section class="sort">
      Sort by <a href="#" class="">recent</a> or <a href="#">hot</a>
    </section>
    <section class="searchField">
      <input type="text" name="searchQuestion" placeholder="Search questions" value="">
    </section>
    <section class="searchButton">
      <div id="searchButton">SEARCH</div>
    </section>
  </header>
</template>

<style lang="scss">
@import '../assets/css/main.scss';

  header {
    background-color: $white;
    width: 100vw;
    display: grid;
    grid-template-columns: [col1start] 15vw [col2start] 1fr [col3start] 20vw [col3end];
    grid-template-rows: [row1] 10vh [row2] 10vh;
  }

  .back {
    border: 1px dotted red;
    grid-column-start: col1start;
    grid-column-end: col2start;
    grid-row-start: row1;
    grid-row-end: row2;
      .symbol_back {
      }
  }

  .questions {
    border: 1px dotted red;
    grid-column-start: col2start;
    grid-column-end: col3start;
    grid-row-start: row1;
    grid-row-end: row1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    align-content: stretch;
      .title_questions {
        flex: 0 1 auto;
        border: 1px dotted blue;
      }
      .symbol_questions {
        flex: 1;
        border: 1px dotted blue;
      }
      .select_questions {
        flex: 0.5;
        border: 1px dotted blue;
      }
  }

  .sort {
    border: 1px dotted red;
    grid-column-start: col3start;
    grid-column-end: col3end;
    grid-row-start: row1;
    grid-row-end: row1;
  }

  .searchField {
    border: 1px dotted red;
    grid-column-start: col2start;
    grid-column-end: col3start;
    grid-row-start: row2;
    grid-row-end: row2;
  }

  .searchButton {
    border: 1px dotted red;
    grid-column-start: col3start;
    grid-column-end: col3end;
    grid-row-start: row2;
    grid-row-end: row2;
  }

  #searchButton {
    border: 1px solid $dark-gray;
    color: $dark-gray;
    padding: 0.5em;
    text-align: center;
    cursor: pointer;
  }

  #searchButton:hover {
    color: $blue;
    border: 1px solid $blue;
  }

</style>
