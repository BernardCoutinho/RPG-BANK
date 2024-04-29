<template>
    <div>
        <h1> Calculadora </h1>
        <div class="row">
            <div class="col align-content-center m-3">
                <h2>Base</h2>
                <div class="align-content-left">
                    <form id="baseCalcForm">
                        <p>Ouro</p>
                        <input v-model="baseGold" type="number" name="baseGold" id="baseGold">
                        <p>Prata</p>
                        <input v-model="baseSilver" type="number" name="baseSilver" id="baseSilver">
                        <p>Estanho</p>
                        <input v-model="baseTin" type="number" name="baseTin" id="baseTin">
                        <p>Cobre</p>
                        <input v-model="baseCopper" type="number" name="baseCopper" id="baseCopper">
                    </form>
                </div>
            </div>
            <div class="col align-content-center m-3">
                <h2>Inserção</h2>
                <div class="align-content-left">
                    <form id="baseInsertForm">
                        <p>Ouro</p>
                        <input v-model="insertedGold" type="number" name="insertedGold" id="insertedGold">
                        <p>Prata</p>
                        <input v-model="insertedSilver" type="number" name="insertedSilver" id="insertedSilver">
                        <p>Estanho</p>
                        <input v-model="insertedTin" type="number" name="insertedTin" id="insertedTin">
                        <p>Cobre</p>
                        <input v-model="insertedCopper" type="number" name="insertedCopper" id="insertedCopper">
                    </form>
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col mt-3">
            <button v-on:click="sum()" class="btn btn-primary">
              Somar
            </button>
          </div>
          <div class="col-6 col-sm-12 mt-3">
            <button v-on:click="subtraction()" class="btn btn-secondary">
              Subtrair
            </button>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CalculadoraComponent',
        data() {
            return{
                baseGold: 0,
                baseSilver:0,
                baseTin: 0,
                baseCopper: 0,
                insertedGold: 0,
                insertedSilver: 0,
                insertedTin: 0,
                insertedCopper: 0,
            }
        },
        methods:{
            sum(){
                let totalBase = this.transformToCopper(this.baseGold, this.baseSilver, this.baseTin, this.baseCopper)
                let totalInserted = this.transformToCopper(this.insertedGold, this.insertedSilver, this.insertedTin, this.insertedCopper)
                console.log(totalBase)
                console.log(totalInserted)
                
                let total = totalBase + totalInserted
             
                let maxValueCoinsObject = this.transformCopperToMaxValuesCoins(total)
                
                this.setBaseValues(maxValueCoinsObject)
                this.resetInsertedValues()
            },
            
            subtraction(){
                let totalBase = this.transformToCopper(this.baseGold, this.baseSilver, this.baseTin, this.baseCopper)
                let totalInserted = this.transformToCopper(this.insertedGold, this.insertedSilver, this.insertedTin, this.insertedCopper)
                
                let total = totalBase - totalInserted
                
                let maxValueCoinsObject = this.transformCopperToMaxValuesCoins(total)
                this.setBaseValues(maxValueCoinsObject)
                this.resetInsertedValues()
            },

            setBaseValues(coinsObj){
                this.baseGold = coinsObj.gold
                this.baseSilver = coinsObj.silver
                this.baseTin = coinsObj.tin
                this.baseCopper = coinsObj.copper
            },

            transformToCopper(gold = 0, silver = 0, tin = 0, copper = 0){
                return gold*(100**3) + 
                silver*(100**2) + 
                tin*100 + 
                copper
            },

            transformCopperToMaxValuesCoins(copper){
                const tinMultiplier = 100;
                const silverMultiplier = tinMultiplier * 100;
                const goldMultiplier = silverMultiplier * 100;

                let gold = Math.floor(copper / goldMultiplier);
                if(gold > 0)
                copper %= goldMultiplier;
               
                let silver = Math.floor(copper / silverMultiplier);
                if(silver > 0)
                copper %= silverMultiplier;

                let tin = Math.floor(copper / tinMultiplier);
                if(tin > 0)
                copper %= tinMultiplier;

                console.log("copper ", copper)
                return {
                    gold: gold,
                    silver: silver,
                    tin: tin,
                    copper: copper
                };
            },
            resetInsertedValues(){
                this.insertedGold = 0
                this.insertedSilver = 0
                this.insertedTin = 0
                this.insertedCopper = 0
            }

        }
    }
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
</style>
