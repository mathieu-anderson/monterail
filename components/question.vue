<template lang="html">
  <section class="question">
    <div class="question-portrait">
      <div class="question-portrait-image" />
    </div>
    <div class="question-question">
      <span class="question-question-name">Eva<span class="smallCaps"> IS ASKING</span></span>
      <span class="question-question-text">Will insulin make my patient gain weight?</span>
    </div>
    <div class="question-asked">
      <div class="question-asked-text">
        <span class="smallCaps">ASKED</span>
      </div>
    </div>
    <div class="question-answers">
      <div class="question-answers-activities">
        <span class="question-answers-activities-number">3</span>
        <span class="question-answers-activities-text">more activities</span>
      </div>
      <div class="question-answers-activity">
        <div class="question-answers-portrait-image" />
        <div class="question-answers-activity-info smallCaps">COMMENTED</div>
      </div>
      <div class="question-answers-activity">
        <div class="question-answers-portrait-image" />
        <div class="question-answers-activity-info smallCaps">COMMENTED</div>
      </div>
      <div class="question-answers-activity">
        <div class="question-answers-portrait-image" />
        <div class="question-answers-activity-info smallCaps">COMMENTED</div>
      </div>
      <div class="question-answers-activity">
        <div class="question-answers-portrait-image" />
        <div class="question-answers-activity-info smallCaps">ANSWERED</div>
      </div>
    </div>
    <div class="question-info">
    </div>
    <div class="spacer">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/css/main.scss';

.question {
  background-color: $light-blue;
  margin: -1em 11em 0em 11em;
  padding: 2em 0em 0em 0em;
  display: grid;
  grid-template-columns: [col1start] 12.5% [col2start] 1fr [col3start] 25% [col3end];
  grid-template-rows: [row1] 17vh [row2] 25vh [row3] 8vh;
}

.question-portrait {
  grid-column-start: col1start;
  grid-column-end: col2start;
  grid-row-start: row1;
  grid-row-end: row1;
  padding-left: 1em;
  .question-portrait-image {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background-image: url("../static/portrait.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}

.question-question {
  grid-column-start: col2start;
  grid-column-end: col3start;
  grid-row-start: row1;
  grid-row-end: row1;
  display: flex;
  flex-flow: column nowrap;
  padding-left: 2em;
  .question-question-name {
    color: $blue;
    font-weight: 600;
    font-size: 1.1em;
  }
  .question-question-text {
    font-family: 'Noto Serif', serif;
    color: $blue;
    font-weight: 600;
    font-size: 1.3em;
    font-style: italic;
  }
}

.question-asked {
  grid-column-start: col1start;
  grid-column-end: col2start;
  grid-row-start: row2;
  grid-row-end: row2;
  background-color: $light-blue;

  .question-asked-text {
    margin: 0.5em;
    border-top: 1px solid $dark-gray;
    text-align: center;
  }
}

.question-answers {
  grid-column-start: col2start;
  grid-column-end: col3start;
  grid-row-start: row2;
  grid-row-end: row2;
  background-color: $white;
  display: flex;
  justify-content: center;
  padding: 1em;
  .question-answers-portrait-image {
    flex: 1;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    background-image: url("../static/portrait.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

  }
  .question-answers-activities {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
  .question-answers-activity {
    flex: 1;
    .question-answers-activity-info {
      margin: 0.5em;
      border-top: 1px solid $dark-gray;
      text-align: center;
    }
  }
}

.question-info {
  grid-column-start: col3start;
  grid-column-end: col3end;
  grid-row-start: row2;
  grid-row-end: row2;
  background-color: $white;
}


.spacer {
  grid-column-start: col1start;
  grid-column-end: col3end;
  grid-row-start: row3;
  grid-row-end: row3;
  background-color: $white
}


</style>
