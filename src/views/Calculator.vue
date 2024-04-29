<template>
  <div>
    <h1 class="text-center">Calculator</h1>

    <div class="row d-flex">
      <div class="col-12 col-sm-6">
        <span class="visually-hidden">Actions:</span>
      </div>
      <div class="col-12 col-sm-12 justify-content-end d-flex">
        <button v-on:click="sum()" class="btn btn-lg btn-dark m-3">
          <font-awesome-icon
            icon="fa-solid fa-plus"
            class="m-1 bg-btn-calculator-action-icon"
          />
        </button>
        <button v-on:click="subtraction()" class="btn btn-lg btn-dark m-3">
          <font-awesome-icon
            icon="fa-solid fa-minus"
            class="m-1 bg-btn-calculator-action-icon"
          />
        </button>

        <div class="input-group m-3">
          <button v-on:click="divide()" class="btn btn-dark" type="button">
            <font-awesome-icon
              icon="fa-solid fa-divide "
              class="m-1 bg-btn-calculator-action-icon"
            />
          </button>
          <input
            type="number"
            class="form-control"
            placeholder="By: "
            v-model="divideValue"
            name="baseGold"
            id="baseGold"
          />
        </div>

        <div class="input-group m-3">
          <button v-on:click="multiply()" class="btn btn-dark" type="button">
            <font-awesome-icon
              icon="fa-solid fa-xmark"
              class="m-1 bg-btn-calculator-action-icon"
            />
          </button>
          <input
            type="number"
            class="form-control"
            placeholder="By: "
            v-model="multiplyValue"
            name="baseGold"
            id="baseGold"
          />
        </div>
      </div>

      <div class="col-12 col-sm-6 align-content-center">
        <div class="m-3">
          <h2>Inform:</h2>
          <div class="align-content-left m-3">
            <form id="baseInsertForm">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-gold" id="vInsertedGold">
                    <font-awesome-icon icon="fa-solid fa-coins" class="m-1" />
                    Gold
                  </span>
                </div>
                <input
                  v-model="insertedGold"
                  type="number"
                  name="insertedGold"
                  id="insertedGold"
                  class="form-control"
                  placeholder="0"
                  aria-label="vInsertedGold"
                  aria-describedby="vInsertedGold"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-silver" id="vInsertedSilver">
                    <font-awesome-icon icon="fa-solid fa-coins" class="m-1" />
                    Silver
                  </span>
                </div>
                <input
                  v-model="insertedSilver"
                  type="number"
                  name="insertedGold"
                  id="insertedSilver"
                  class="form-control"
                  placeholder="0"
                  aria-label="vInsertedSilver"
                  aria-describedby="vInsertedSilver"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-tin" id="vInsertedTin">
                    <font-awesome-icon icon="fa-solid fa-coins" class="m-1" />
                    Tin
                  </span>
                </div>
                <input
                  v-model="insertedTin"
                  type="number"
                  name="insertedTin"
                  id="insertedTin"
                  class="form-control"
                  placeholder="0"
                  aria-label="vInsertedTin"
                  aria-describedby="vInsertedTin"
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-copper" id="vInsertedCopper">
                    <font-awesome-icon icon="fa-solid fa-coins" class="m-1" />
                    Copper
                  </span>
                </div>
                <input
                  v-model="insertedCopper"
                  type="number"
                  name="insertedCopper"
                  id="insertedCopper"
                  class="form-control"
                  placeholder="0"
                  aria-label="vInsertedCopper"
                  aria-describedby="vInsertedCopper"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 align-content-center">
        <div class="m-3">
          <h2>Result:</h2>
          <div class="align-content-left">
            <form id="baseCalcForm">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-gold" id="vBaseGold">
                    <font-awesome-icon icon="fa-solid fa-coins" class="m-1" />
                    Gold
                  </span>
                </div>
                <input
                  v-model="baseGold"
                  type="number"
                  name="baseGold"
                  id="baseGold"
                  class="form-control"
                  placeholder="0"
                  aria-label="vBaseGold"
                  aria-describedby="vBaseGold"
                  readonly
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-silver" id="vBaseSilver">
                    <font-awesome-icon icon="fa-solid fa-coins" class="m-1" />
                    Silver
                  </span>
                </div>
                <input
                  v-model="baseSilver"
                  type="number"
                  name="baseGold"
                  id="baseSilver"
                  class="form-control"
                  placeholder="0"
                  aria-label="vBaseSilver"
                  aria-describedby="vBaseSilver"
                  readonly
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-tin" id="vBaseTin">
                    <font-awesome-icon icon="fa-solid fa-coins" class="m-1" />
                    Tin
                  </span>
                </div>
                <input
                  v-model="baseTin"
                  type="number"
                  name="baseTin"
                  id="baseTin"
                  class="form-control"
                  placeholder="0"
                  aria-label="vBaseTin"
                  aria-describedby="vBaseTin"
                  readonly
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-copper" id="vBaseCopper">
                    <font-awesome-icon icon="fa-solid fa-coins" class="m-1" />
                    Copper
                  </span>
                </div>
                <input
                  v-model="baseCopper"
                  type="number"
                  name="baseCopper"
                  id="baseCopper"
                  class="form-control"
                  placeholder="0"
                  aria-label="vBaseCopper"
                  aria-describedby="vBaseCopper"
                  readonly
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "CalculatorComponent",
  data() {
    return {
      baseGold: 0,
      baseSilver: 0,
      baseTin: 0,
      baseCopper: 0,
      insertedGold: 0,
      insertedSilver: 0,
      insertedTin: 0,
      insertedCopper: 0,
      multiplyValue: 0,
      divideValue: 0,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    sum() {
      let totalBase = this.transformToCopper(
        this.baseGold,
        this.baseSilver,
        this.baseTin,
        this.baseCopper
      );
      let totalInserted = this.transformToCopper(
        this.insertedGold,
        this.insertedSilver,
        this.insertedTin,
        this.insertedCopper
      );
      console.log(totalBase);
      console.log(totalInserted);

      let total = totalBase + totalInserted;

      let maxValueCoinsObject = this.transformCopperToMaxValuesCoins(total);

      this.setBaseValues(maxValueCoinsObject);
      this.resetInsertedValues();
    },

    subtraction() {
      let totalBase = this.transformToCopper(
        this.baseGold,
        this.baseSilver,
        this.baseTin,
        this.baseCopper
      );
      let totalInserted = this.transformToCopper(
        this.insertedGold,
        this.insertedSilver,
        this.insertedTin,
        this.insertedCopper
      );

      let total = totalBase - totalInserted;

      let maxValueCoinsObject = this.transformCopperToMaxValuesCoins(total);
      this.setBaseValues(maxValueCoinsObject);
      this.resetInsertedValues();
    },
    divide() {
      let totalBase = this.transformToCopper(
        this.baseGold,
        this.baseSilver,
        this.baseTin,
        this.baseCopper
      );

      let total = totalBase / this.divideValue;

      let maxValueCoinsObject = this.transformCopperToMaxValuesCoins(total);
      this.setBaseValues(maxValueCoinsObject);
      this.resetInsertedValues();
    },
    multiply() {
      let totalBase = this.transformToCopper(
        this.baseGold,
        this.baseSilver,
        this.baseTin,
        this.baseCopper
      );

      let total = totalBase * this.multiplyValue;

      let maxValueCoinsObject = this.transformCopperToMaxValuesCoins(total);
      this.setBaseValues(maxValueCoinsObject);
      this.resetInsertedValues();
    },

    setBaseValues(coinsObj) {
      this.baseGold = coinsObj.gold;
      this.baseSilver = coinsObj.silver;
      this.baseTin = coinsObj.tin;
      this.baseCopper = coinsObj.copper;
    },

    transformToCopper(gold = 0, silver = 0, tin = 0, copper = 0) {
      return gold * 100 ** 3 + silver * 100 ** 2 + tin * 100 + copper;
    },

    transformCopperToMaxValuesCoins(copper) {
      const tinMultiplier = 100;
      const silverMultiplier = tinMultiplier * 100;
      const goldMultiplier = silverMultiplier * 100;

      let gold = Math.floor(copper / goldMultiplier);
      if (gold > 0) copper %= goldMultiplier;

      let silver = Math.floor(copper / silverMultiplier);
      if (silver > 0) copper %= silverMultiplier;

      let tin = Math.floor(copper / tinMultiplier);
      if (tin > 0) copper %= tinMultiplier;

      console.log("copper ", copper);
      return {
        gold: gold,
        silver: silver,
        tin: tin,
        copper: copper,
      };
    },
    resetInsertedValues() {
      this.insertedGold = 0;
      this.insertedSilver = 0;
      this.insertedTin = 0;
      this.insertedCopper = 0;
      this.divideValue = 0;
      this.multiplyValue = 0;
    },
  },
};
</script>

<style>
#calculadora {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.bg-gold {
  background-color: gold;
}

.bg-silver {
  background-color: rgb(250, 250, 250);
}

.bg-tin {
  background-color: rgba(228, 228, 224, 0.703);
}

.bg-copper {
  background-color: rgba(252, 121, 85, 0.885);
}

.bg-btn-calculator-action-icon {
  color: #fcba03;
}
.bg-btn-calculator-action-icon:hover {
  color: #fff;
}
</style>
